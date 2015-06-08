import Ember from 'ember';
import ListingRouteMixin from 'snew/mixins/listing-route';
import TabmenuMixin from 'snew/mixins/tabmenu-route';

export default Ember.Route.extend(ListingRouteMixin, TabmenuMixin, {
  listing: '/user/PoliticBot/m/snew/hot.json',

  makeApiCall: function(params) {
    var client = this.get('snoocore.client');
    return client(this.get('listing')).listing(params);
  }
});
