import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
    var subreddit = this.modelFor('subreddit');
    this.transitionTo('/r/' + subreddit.display_name + '/wiki/index');
  }
});
