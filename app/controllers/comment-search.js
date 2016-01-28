import Ember from 'ember';
import ListingMixin from 'snew/mixins/listing';

export default Ember.ArrayController.extend(ListingMixin, {
  showSearch: true,

  newSearch: function(key, value) {
    if (arguments.length > 1) {return value;}
    return this.get('q');
  }.property('q'),

  searchDidChange: function() {
    //Ember.run.debounce(this.doSearch.bind(this), 3000);
  }.observes('newSearch').on('init'),

  doSearch: function() {
    this.set('q', this.get('newSearch'));
  },

  listing: Ember.computed.alias('arrangedContent'),

  actions: {
    doSearch() {
      this.doSearch();
    }
  }
});
