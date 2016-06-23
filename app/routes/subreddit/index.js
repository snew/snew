import Ember from 'ember';
import ListingRouteMixin from 'snew/mixins/listing-route';
import hotScore from 'snew/util/hot-score';

export default Ember.Route.extend(ListingRouteMixin, {
  afterModel(listing) {
    let subreddit = this.modelFor('subreddit').display_name.toLowerCase();

    if (!listing || subreddit === 'all' || !listing.params) {
      return;
    }

    if (this.get('listingType') !== 'hot') {
      return;
    }

    const idIndexMap = {};
    const undeleteMap = {};
    const client = this.get('snoocore.client');
    const listingIds = {};
    let minHot = 0;
    let maxHot = 0;

    listing.forEach(item => {
      item.hotness = hotScore(item);
      listingIds[item.id] = true;

      if (!item.stickied) {
        if (!minHot || item.hotness < minHot) {
          minHot = item.hotness;
        }

        if (!maxHot || item.hotness > maxHot) {
          maxHot = item.hotness;
        }
      }
    });

    if (!listing.params.before && !listing.params.after) {
      maxHot = null;
    }

    return client(`/r/undelete+longtail/search.json`)
      .listing({
        q: `url:/r/${subreddit}`,
        sort: 'new',
        t: 'all',
        restrict_sr: 'on',
        limit: 100
      })
      .then(this.normalizeResponse.bind(this)).then(undelete => {
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
      })
      .then(ids => client('/api/info').listing({
        id: ids.map(id => 't3_' + id).join(',')
      })
      .then(this.normalizeResponse.bind(this)))
      .then(undelete => undelete.map(item => {
        const index = idIndexMap[item.id];
        item.hotness = hotScore(item);
        item.banned_by = true;
        item.index = index;
        item.undelete = undeleteMap[item.id];
        return item;
      }))
      .then(undelete => {
        return undelete.filter(post => {
          return (
            post.author !== '[deleted]' &&
            post.hotness > minHot && (!maxHot || post.hotness < maxHot) &&
            post.subreddit.toLowerCase() === subreddit
          );
        }).sortBy('hotness');
      })
      .then(undelete => {
        undelete.forEach(item => {
          let position = 0;

          const nextItem = listing.find(post => {
            return !post.stickied && (post.hotness < item.hotness);
          });

          if (nextItem) {
            position = listing.indexOf(nextItem);
          }

          listing.insertAt(position, item);
        });

        return undelete.filter(post => post.selftext === '[removed]');
      })
      .then(selfposts => {
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
