import Ember from 'ember';

export default Ember.Component.extend({
  snoocore: Ember.inject.service(),
  tagName: 'div',
  style: 'display: block;',
  attributeBindings: ['style'],
  classNames: 'thing interestbar'.w(),
  classNameBindings: 'working'.w(),
  query: '',
  working: false,
  placeholder: 'what are you interested in?',
  serendipity: 'serendipity',

  queryDidChange: function() {
    if (!this.get('query')) {return;}
    Ember.run.debounce(this, 'doSearch', 500);
    this.set('working', true);
  }.observes('query'),

  doSearch: function() {
    var query = this.get('query');
    this.set('working', true);
    this.get('snoocore.client')('/api/subreddits_by_topic.json').get({
      query: query
    }).then(function(results) {
      console.log('results', results);
      this.sendAction('action', results.getEach('name'));
      this.set('results', results);
    }.bind(this)).catch(function(error) {
      console.error(error.stack || error);
    }).finally(function() {
      this.set('working', false);
    }.bind(this));
  },

  actions: {
    cancel: function() {
      this.setProperties({
        query: '',
        results: []
      });
    }
  }
});
