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
    var oldest = 0;

    if (listing.params.before || listing.params.after) {
      return;
    }

    listing.forEach(item => {
      if (!oldest || item.created < oldest) {
        oldest = item.created;
      }
    });

    this.get('snoocore.client')('/r/undelete/new').listing({
      limit: 100
    }).then(this.normalizeResponse.bind(this)).then(undelete => {
      return undelete.filter(item => {
        return (
          item.created > oldest &&
          item.author === 'FrontpageWatch' &&
          item.title.match(/^\[#.*\] .*\[\/r/)
        );
      });
    }).then(undelete => {
      undelete.reverse().forEach(item => {
        var index = parseInt(item.title.slice(2, 20).split('|')[0]);
        item.banned_by = true;
        listing.insertAt(index - 1, item);
      });
    });
  }
});
