import Ember from 'ember';

export default Ember.Route.extend({
  snoocore: Ember.inject.service(),

  model: function(args) {
    var sub = this.modelFor('subreddit');
    return this.get('snoocore.client')(sub.url + 'wiki/' + args.page.toLowerCase() + '.json').get({}, {
      bypassAuth: true
    }).then(function(result) {
      Ember.set(result.data, 'subreddit', sub);
      Ember.set(result.data, 'title', args.page);
      return result.data;
    });
  }
});
