import Ember from 'ember';
import ListingRouteMixin from 'snew/mixins/listing-route';
import TabmenuMixin from 'snew/mixins/tabmenu-route';

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
    const listingIds = {}
    var oldest = 0;

    if (listing.params.before || listing.params.after) {
      return;
    }

    listing.forEach(item => {
      listingIds[item.id] = true;
      if (!oldest || item.created < oldest) {
        oldest = item.created;
      }
    });

    client('/r/undelete/new').listing({
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
      undelete.map(item => {
        const index = idIndexMap[item.id];
        item.banned_by = true;
        item.index = index;
        item.undelete = undeleteMap[item.id];
        return item;
      }).sortBy('index').reverse().forEach(item => {
        if (item.author === '[deleted]' || item.created < oldest) {
          return;
        }

        listing.insertAt(item.index - 1, item);
      });

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
