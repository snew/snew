import Ember from 'ember';
import ListingMixin from 'snew/mixins/listing';

export default Ember.Controller.extend(ListingMixin, {
  queryParams: ['after', 'before', 'limit'],
  listing: Ember.computed.alias('model'),
  limit: 100,
  type: '',
  mod: ''
});
