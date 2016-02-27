import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const path = (params.path || '').replace('@', '?');
    return `https://stream.pushshift.io/${path}`;
  }
});
