import Ember from 'ember';

export default Ember.Controller.extend({
  gradio: Ember.inject.service(),
  snoocore: Ember.inject.service()
});
