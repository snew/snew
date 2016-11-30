import Ember from 'ember';
import ListingRouteMixin from 'snew/mixins/listing-route';
import TabmenuMixin from 'snew/mixins/tabmenu-route';
import hotScore from 'snew/util/hot-score';

export default Ember.Route.extend(ListingRouteMixin, TabmenuMixin, {
  listing: '/r/all/hot.json',

  makeApiCall: function(params) {
    var client = this.get('snoocore.client');
    return client(this.get('listing')).listing(params);
  },

  afterModel(listing) {
    const idIndexMap = {};
    const undeleteMap = {};
    const client = this.get('snoocore.client');
    const listingIds = {};
    var oldest = 0;

    if (this.get('listing') !== '/r/all/hot.json') {
      return;
    }

    listing.forEach(item => {
      item.hotness = hotScore(item);
      listingIds[item.id] = true;
      if (!oldest || item.created_utc < oldest) {
        oldest = item.created_utc;
      }
    });

    return client('/r/undelete/new').listing({
      limit: 100
    }).then(this.normalizeResponse.bind(this)).then(undelete => {
      return undelete.filter(item => {
        return (
          item.author === 'FrontpageWatch' &&
          item.title.match(/^\[#.*\] .*\[\/r/)
        );
      }).map(item => {
        let index = parseInt(item.title.slice(2, 20).split('|')[0]);
        let parts = item.url.split('/').filter(i => !!i);
        let id;
        parts.pop();
        id = parts.pop();
        idIndexMap[id] = index;
        undeleteMap[id] = item;
        return id;
      }).filter(id => !listingIds[id]);
    }).then(ids => {
      return client('/api/info').listing({
        id: ids.map(id => 't3_' + id).join(',')
      }).then(this.normalizeResponse.bind(this));
    }).then(undelete => {
      return undelete.map(item => {
        const index = idIndexMap[item.id];
        item.hotness = hotScore(item);
        item.banned_by = true;
        item.index = index;
        item.undelete = undeleteMap[item.id];
        return item;
      });
    }).then(undelete => {
      return client("/r/The_Donald").listing({limit: 100})
        .then(this.normalizeResponse.bind(this))
        .then(donald => donald.map(item => {
            item.hotness = hotScore(item);
            //item.banned_by = true;
            //item.undelete = item;
            return item;
        })).then(donald => {
          const minHot = listing.get('lastObject').hotness;
          const maxHot = listing.get('firstObject').hotness;

          donald.filter(post => {
            return post.hotness > minHot && post.hotness < maxHot;
          })
            .sortBy('hotness').forEach(item => {
              let position = 0;

              const nextItem = listing.find(post => {
                return post.hotness < item.hotness;
              });

              if (nextItem) {
                position = listing.indexOf(nextItem);
              }

              listing.insertAt(position, item);
            });
        }).then(() => undelete);
    }).then(undelete => {
      if (listing.params.before || listing.params.after) {
        const minHot = listing.get('lastObject').hotness;
        const maxHot = listing.get('firstObject').hotness;

        undelete.filter(post => {
          return post.hotness > minHot && post.hotness < maxHot;
        })
          .sortBy('hotness').forEach(item => {
            let position = 0;

            const nextItem = listing.find(post => {
              return post.hotness < item.hotness;
            });

            if (nextItem) {
              position = listing.indexOf(nextItem);
            }

            listing.insertAt(position, item);
          });
      } else {
        undelete
          .filter(post => post.created_utc > oldest)
          .sortBy('index').reverse().forEach(item => {
            listing.insertAt(item.index - 1, item);
          });
      }

      return undelete.filter(post => post.selftext === '[removed]');
    }).then(selfposts => {
      if (!selfposts.length) {return;}

      const url = 'https://api.pushshift.io/reddit/search/submission?ids=' + selfposts.getEach('id').join(',');
      return Ember.RSVP.resolve(Ember.$.ajax(url))
        .then(result => {
          result.data.forEach(restored => {
            const post = selfposts.findBy('id', restored.id);

            if (post) {
              Ember.setProperties(post, {
                selftext: restored.selftext,
                selftext_html: null
              });
            }
          });
        });
    });
  }
});
