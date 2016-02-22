import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const path = (params.path || '').replace('@', '?');
    return `http://stream.pushshift.io/${path}`;
  }
});
