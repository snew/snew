import Ember from 'ember';
import ListingRouteMixin from 'snew/mixins/listing-route';

export default Ember.Route.extend(ListingRouteMixin, {
  makeApiCall: function(params) {
    var path = '/search';
    return this.get('snoocore.client')(path).listing(params);
  }
});
