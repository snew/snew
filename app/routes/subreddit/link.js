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
    }).catch(error => {
      const linkUrl = `https://api.pushshift.io/reddit/search/submission?ids=${params.id}`;
      const commentsUrl = `https://api.pushshift.io/reddit/search/comment?limit=50000&link_id=${params.id}`;


      return Ember.RSVP.hash({
        link: Ember.RSVP.resolve(Ember.$.ajax(linkUrl)).then(result => (result.data || [])[0])
          .then(post => {
            if (!post) {
              throw 'Post not found';
            }
            post.banned_by = true;
            return post;
          }),
        comments: Ember.RSVP.resolve(Ember.$.ajax(commentsUrl))
          .then(result => result.data) // TODO build tree structure
          .then(data => {
            const known = {};
            data.forEach(comment => comment.banned_by = true);
            const topLevel = data.filterBy('parent_id', `t3_${params.id}`);
            data.forEach(comment => {
              known[`t1_${comment.id}`] = true;
              comment.replies = {
                data: {
                  children: data.filterBy('parent_id', `t1_${comment.id}`)
                    .map(data => {return {data};})
                }
              };
            });
            return topLevel.concat(data.filter(comment => !known[`t1_${comment.id}`]));
          })
      });
    });
  },

  afterModel: function(post) {
    var self = this;
    var allOthers = [];
    Ember.set(post, 'others', []);
    //if (post.link.is_self) {return;}

    if (post.link.is_self && post.link.selftext === "[removed]") {
      Ember.set(post.link, 'banned_by', true);
      Ember.$.ajax('https://api.pushshift.io/reddit/search/submission?ids=' + post.link.id)
        .then(result => {
          const psPost = result.data.findBy('id', post.link.id);
          if (psPost) {
            const converter = new Showdown.converter();
            const html = converter.makeHtml(psPost.selftext);
            Ember.setProperties(post.link, {
              selftext_html: html,
              selftext: psPost.selftext
            });
            Ember.set(post.link, 'selftext_html', html);
          }
        });
    }

    self.get('snoocore').restoreRemovedComments(post.comments, post.link.id);

    this.get('snoocore.client')('/api/info').get({url: post.link.url, limit: 100}).then(function(result) {
      return (result.data.children || []).getEach('data');
    }).then(function(known) {

      allOthers = known.filter(function(item) {
        return item.id !== post.link.id;
      });

      if (allOthers.length && !post.link.is_self) {
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
