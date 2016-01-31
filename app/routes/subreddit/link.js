import Ember from 'ember';

export default Ember.Route.extend({
  snoocore: Ember.inject.service(),

  model: function(params) {
    var sub = this.modelFor('subreddit');
    return this.get('snoocore.client')(sub.url + 'comments/' + params.id + '.json').get().then(function(result) {
      return {
        link: result[0].data.children[0].data,
        comments: result[1].data.children.getEach('data')
      };
    });
  },

  afterModel: function(post) {
    var self = this;
    var allOthers = [];
    Ember.set(post, 'others', []);
    //if (post.link.is_self) {return;}

    self.get('snoocore').restoreRemovedComments(post.comments);

    this.get('snoocore.client')('/api/info').get({url: post.link.url, limit: 100}).then(function(result) {
      return (result.data.children || []).getEach('data');
    }).then(function(known) {
      allOthers = known.filter(function(item) {
        return item.id !== post.link.id;
      });

      if (allOthers.length) {
        const other = allOthers[0];
        self.get('snoocore.client')('/duplicates/$article').listing({
          $article: other.id, limit: 100
        }, {listingIndex: 1}).then(dupes => {
          return dupes.allChildren.getEach('data');
        }).then(dupes => {
          if (!dupes.findProperty('id', post.link.id)) {
            Ember.set(post.link, 'banned_by', true);
          }
        });
      }

      return allOthers;
    }).then(function(known) {
      return known.filter(function(item) {return item.author !== '[deleted]';});
    }).then(function(others) {
      if (!others.length) {return;}
      Ember.set(post, 'others', others);
      return self.get('snoocore.client')('/duplicates/$article').listing({
        $article: post.link.id, limit: 100
      }, {listingIndex: 1}).then(function(dupes) {
        return dupes.allChildren.getEach('data');
      }).then(function(dupes) {
        return others.filter(function(other) {
          return !dupes.findProperty('id', other.id);
        });
      }).then(function(removed) {
        removed.forEach(function(item) {
          Ember.set(item, 'banned_by', true);
        });
        Ember.set(post, 'removed', removed);
      });
    });
  },

  renderTemplate: function() {
    this._super.apply(this, arguments);
    this.render('subreddit/linkSide', {
      into: 'application',
      outlet: 'sidebartop',
      controller: 'subreddit.link'
    });
  }
});
