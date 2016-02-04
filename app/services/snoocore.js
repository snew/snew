/* globals Snoocore,moment */
import Ember from 'ember';
import config from 'snew/config/environment';

function getParamByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.hash.replace(/^#/, '?'));
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


export default Ember.Service.extend({
  timeupdater: Ember.inject.service(),

  userAgent: 'vforreddit 0.0.1 by go1dfish',

  scope: [
    'submit'
  ],

  fullScope: [
    'account',
    //'creddits',
    'edit',
    'history',
    /*'modflair',
    'modlog',
    'modothers',
    'modposts',
    'modself',
    'modwiki',*/
    'mysubreddits',
    'privatemessages',
    'report',
    'save',
    'submit',
    'subscribe',
    'vote',
    'wikiedit',
    'wikiread',
    'read',
    'flair',
    'identity'/*,
    'modconfig'*/
  ],

  setupPoller: function() {
    this.get('timeupdater');
  }.on('init'),

  userPath: function() {
    var name = this.get('user.name');
    if (!name) {return;}
    return 'user/' + name;
  }.property('user.name'),

  handleExpiredAuth: function() {
    var self = this;
    this.get('api').on('access_token_expired', function(responseError) {
      self.setProperties({
        user: null,
        isLoggedIn: false
      });
    });
  }.observes('snoocore.api').on('init'),

  client: function() {
    if (this.get('isLoggedIn')) {
      return this.get('api');
    } else {
      return this.get('anon');
    }
  }.property('isLoggedIn', 'api', 'anon'),

  api: function() {
    return new Snoocore({
      userAgent: this.get('userAgent'),
      decodeHtmlEntities: true,
      oauth: {
        type: 'implicit',
        mobile: false,
        duration: 'temporary',
        key: config.consumerKey,
        throttle: 0,
        redirectUri: config.redirectUrl,
        scope: this.get('fullScope')
      }
    });
  }.property('userAgent'),

  anon: function() {
    return new Snoocore({
      userAgent: this.get('userAgent'),
      decodeHtmlEntities: true,
      oauth: {
        type: 'implicit',
        mobile: false,
        duration: 'temporary',
        key: config.consumerKey,
        throttle: 0,
        redirectUri: config.redirectUrl,
        scope: this.get('fullScope').concat(['modconfig'])
      }
    });
  }.property('userAgent'),

  bot: function() {
    return new Snoocore({
      userAgent: this.get('userAgent'),
      decodeHtmlEntities: true,
      throttle: 30000,
      oauth: {
        type: 'implicit',
        mobile: false,
        duration: 'temporary',
        key: config.consumerKey,
        redirectUri: config.redirectUrl,
        scope: this.get('fullScope').concat(['modconfig'])
      }
    });
  }.property('userAgent'),

  loginUrl: function() {
    return this.get('api').getImplicitAuthUrl().replace('www.reddit', 'us.reddit');
  }.property('user', 'api'),

  loginExpiry: function() {
    return this.get('loginExpires');
  }.property('loginExpires', 'timeupdater.currentMoment'),

  checkLogin: function() {
    var code = getParamByName('access_token');
    var self = this;
    var snoo = this.get('api');
    if (code) {
      this.set(
        'loginExpires',
        moment().add(parseInt(getParamByName('expires_in')), 'second')
      );
      return snoo.auth(code).then(function(result) {
        return snoo('/api/v1/me').get();
      }).then(function(res) {
        self.setProperties({
          isLoggedIn: true,
          user: res
        });
        return res;
      });
    }
    return Ember.RSVP.resolve(false);
  },

  restoreRemovedComments: function(items, postId) {
    var allComments = {}
    var deletedComments = {};

    function walkComments(comments) {
      (comments || []).forEach(function(item) {
        if (item.author === '[deleted]' && item.body === '[removed]') {
          deletedComments[item.id] = item;
        }
        allComments[item.id] = item;
        walkComments((Ember.get(item, 'replies.data.children') || []).getEach('data'));
      });
    }
    walkComments(items);

    function findEasyRemovals() {
      if (!Object.keys(deletedComments).length) {return Ember.RSVP.resolve(items);}
      return Ember.RSVP.resolve(Ember.$.ajax({
        url: "https://api.pushshift.io/reddit/search?ids=" + Object.keys(deletedComments).join(',')
      })).then(function(result) {
        (result.data || []).forEach(function(item) {
          deletedComments[item.id] = item;
        });
        function restoreComments(comments) {
          (comments || []).forEach(function(item) {
            var del = deletedComments[item.id];
            if (del) {
              delete del.replies;
              delete del.likes;
              del.body_html = $('<textarea />').html(del.body_html).text();
              del.banned_by = true;
              Ember.setProperties(item, del);
            }
            restoreComments((Ember.get(item, 'replies.data.children') || []).getEach('data'));
          });
        }
        restoreComments(items);
        return items;
      });
    }

    Ember.set(items, 'isLoading', true);

    return findEasyRemovals().then(() => {
      if (!postId) {
        return;
      }

      return Ember.RSVP.resolve(Ember.$.ajax({
        url: "https://api.pushshift.io/reddit/search/comment?limit=50000&link_id=" + postId
      })).then(result => result.data).then(availableComments => {
        const missing = availableComments.filter(comment => !allComments[comment.id]);
        const ids = missing.map(item => item.id);

        missing.forEach(item => {
          allComments[item.id] = item;
        });

        return fetchIds(this.get('api'), ids.map(id => 't1_' + id))
          .then(results => {
            results.filter(item => item.author === '[deleted]' && item.body === '[removed]')
              .forEach(item => {
                const comment = allComments[item.id];
                Ember.set(comment, 'banned_by', true);

                if (comment.body === '[removed]') {
                  comment.body = '[likely removed by automoderator]';
                }

                items.pushObject(comment);
              });
          });
      });
    }).finally(() => Ember.set(items, 'isLoading', false));
  }
});

function fetchIds(client, ids) {
  const batches = [];
  ids = ids.slice();

  while (ids.length) {
    batches.push(ids.splice(0, 100));
  }

  if (!batches.length) {
    return Ember.RSVP.resolve([]);
  }

  return Ember.RSVP.resolve(Ember.RSVP.all(batches.map(batch => {
    return client('/api/info.json').listing({
      id: batch.join(',')
    }).then(response => (response.children || []).getEach('data'));
  })).then(results => {
    let allItems = [];
    results.forEach(result => allItems = allItems.concat(result));
    return allItems;
  }));
}
