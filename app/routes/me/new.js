import Ember from 'ember';
import ListingRouteMixin from 'snew/mixins/listing-route';

export default Ember.Route.extend(ListingRouteMixin, {
  listingClass: 'me',
  listingType: 'new'
});