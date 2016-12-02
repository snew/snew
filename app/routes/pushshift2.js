import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const path = params.path.replace('@', '?');
    const url = `https://apiv2.pushshift.io/reddit/${path}`;
    return Ember.RSVP.resolve(Ember.$.ajax(url)).then(result => result.data);
  }
});
