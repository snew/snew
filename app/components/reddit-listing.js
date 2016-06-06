import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'sitetable',
  attributeBindings: 'id'.w(),
  rankStart: 0,
  fixedExpando: 'fixedExpando',
  submissions: Ember.computed.filter('content', item => !!item.title),
  comments: Ember.computed.filter('content', item => !!item.body),
  hasComments: Ember.computed.bool('comments.length'),

  classNameBindings: [
    'hasComments:nestedlisting:linklisting'
  ],

  includeRank: function(key, value) {
    if (arguments.length > 1) {return value;}
    return this.get('submissions.length') !== 1;
  }.property('submissions.length'),

  autoExpand: function(key, value) {
    if (arguments.length > 1) {return value;}
    return this.get('submissions.length') === 1;
  }.property('submissions.length'),

  listing: Ember.computed.map('content', function(item, index) {
    let rank = index+this.get('rankStart') + 1;

    if (!this.get('includeRank')) {
      rank = null;
    }

    return {
      rank: rank,
      content: item
    };
  }),

  actions: {
    fixedExpando: function(post) {
      this.sendAction('fixedExpando', post);
    }
  }
});
