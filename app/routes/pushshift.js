import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const path = params.path.replace('@', '?');
    const url = `https://api.pushshift.io/reddit/${path}`;
    return Ember.RSVP.resolve(Ember.$.ajax(url)).then(result => result.data);
  }
});
