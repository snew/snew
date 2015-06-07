import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: ['before', 'after', 'count'],
  before: '',
  after: '',
  count: 0,
  limit: 25,
  last: Ember.computed.alias('listing.lastObject'),
  first: Ember.computed.alias('listing.firstObject'),
  nextCount: function() {
    return this.get('count') + this.get('listing.length');
  }.property('count', 'listing.length'),
  prevCount: function() {
    return this.get('count') - this.get('listing.length');
  }.property('count', 'listing.length'),
  hasMore: function() {
    return this.get('listing.length') >= this.get('limit');
  }.property('listing.length', 'limit')
});
