import Ember from 'ember';

export default Ember.Route.extend({
  model(args) {
    return args;
  },

  redirect(args) {
    this.replaceWith('subreddit.link', args.id, '_');
  }
})
