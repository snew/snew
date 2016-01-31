import Ember from 'ember';

export default Ember.Mixin.create({
  needs: ['application'],
  queryParams: ['before', 'after', 'count', 'limit', 'q', 't', 'sort'],
  autoexpando: Ember.computed.alias('controllers.application.autoexpando'),
  before: '',
  after: '',
  sort: '',
  q: '',
  t: '',
  count: 0,
  limit: 100,
  last: Ember.computed.alias('listing.lastObject'),
  first: Ember.computed.alias('listing.firstObject'),
  nextCount: function() {
    var listingLength = this.get('listing.length');
    var listingLimit = this.get('limit');

    if (listingLength > listingLimit) {
      listingLength = listingLimit;
    }
    return this.get('count') + listingLength;
  }.property('count', 'listing.length'),
  prevCount: function() {
    return this.get('count') - this.get('listing.length');
  }.property('count', 'listing.length'),
  hasMore: function() {
    return this.get('listing.length') >= this.get('limit');
  }.property('listing.length', 'limit')
});
