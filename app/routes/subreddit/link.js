import Ember from 'ember';

export default Ember.Route.extend({
  snoocore: Ember.inject.service(),

  model: function(params) {
    var sub = this.modelFor('subreddit');
    return this.get('snoocore.client')(sub.url + 'comments/' + params.id).get().then(function(result) {
      return {
        link: result[0].data.children[0].data,
        comments: result[1].data.children.getEach('data')
      };
    });
  }
});
