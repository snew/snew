import Ember from 'ember';

export default Ember.Controller.extend({
  gradio: Ember.inject.service(),
  snoocore: Ember.inject.service(),

  autoplay: Ember.computed.alias('gradio.autoplay'),
  ytid: Ember.computed.alias('gradio.lastUpdate.ytid'),
  queryParams: ['autoplay', 'ytid', 'autoexpando'],

  autoexpando: false,

  showLiveThreads: false,

  willChangeFixedExpando: function() {
    var fixedExpando = this.get('fixedExpando');
    if (!fixedExpando) {
      this.get('gradio').stop();
    }
  }.observesBefore('fixedExpando'),

  didChangeAutoplay: function() {
    if (this.get('autoplay') && this.get('fixedExpando')) {
      this.set('fixedExpando', null);
    }
  }.observes('autoplay'),

  actions: {
    toggleLiveThreads: function() {
      this.toggleProperty('showLiveThreads');
    }
  }
});
