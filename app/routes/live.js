import Ember from 'ember';

export default Ember.Route.extend({
  snoocore: Ember.inject.service(),

  model(params) {
    const id = params.thread_id;
    const client = this.get('snoocore.client');

    return Ember.RSVP.hash({
      about: client(`/live/${id}/about.json`).get().then(result => result.data),
      updates: client(`/live/${id}.json`).listing().then(result => result.children.map(c => c.data))
    }).then(hash => {
      hash.id = id;
      console.log('hash', hash);
      return hash;
    });
  },

  setupController() {
    this.controllerFor('application').set('stylesheet', ' ');
    return this._super.apply(this, arguments);
  }
});
