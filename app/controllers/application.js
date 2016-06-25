import Ember from 'ember';
import isPhantom from "snew/util/is-phantom";

export default Ember.Controller.extend({
  gradio: Ember.inject.service(),
  snoocore: Ember.inject.service(),
  sub: Ember.inject.controller("subreddit"),
  subreddit: Ember.computed.alias("sub.model"),

  autoplay: Ember.computed.alias('gradio.autoplay'),
  ytid: Ember.computed.alias('gradio.lastUpdate.ytid'),
  queryParams: ['autoplay', 'ytid', 'autoexpando'],

  isPhantom: isPhantom(),

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
