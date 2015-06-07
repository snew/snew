/* globals moment */
import Ember from 'ember';

export default Ember.Component.extend({
  timeupdater: Ember.inject.service(),
  expand: false,
  tagName: 'div',
  classNames: 'thing'.w(),
  classNameBindings: 'type even odd linkflairclass'.w(),
  fixedExpand: 'fixedExpando',

  setup: function() {this.get('timeupdater.currentMoment');}.on('init'),


  expandable: function() {
    if (this.get('imageUrl')) {
      return true;
    }
    if (this.get('selftext')) {
      return true;
    }
    if (this.get('media.oembed.type')) {
      return true;
    }
    return false;
  }.property('imageUrl', 'media.oembed.type'),

  expandoClass: function() {
    return this.get('media.oembed.type') || 'selftext';
  }.property('media.oembed.type'),

  even: function() {
    return this.get('rank') % 2 === 0;
  }.property('rank'),

  odd: Ember.computed.not('even'),

  linkflairclass: function() {
    var name = this.get('link_flair_css_class');
    if (name) {
      return 'linkflair linkflair-' + name;
    }
  }.property('link_flair_css_class'),

  unknownProperty: function (key) {
    var content = Ember.get(this, 'content');
    if (content) {
      return Ember.get(content, key);
    }
  },

  isDirectImageUrl: function() {
    return this.get('url').match(/\.(jpg|jpeg|png|gif)$/i);
  }.property('url'),

  imageUrl: function() {
    if (this.get('isDirectImageUrl')) {
      return this.get('url');
    }
  }.property('isDirectImageUrl', 'url'),

  type: function() {
    if (this.get('content.title')) {
      return 'link';
    } else {
      return 'comment';
    }
  }.property('content.title'),

  createdMoment: function() {
    return moment.utc(this.get('created_utc') * 1000);
  }.property('created_utc', 'timeupdater.currentMoment'),

  actions: {
    toggleExpand: function() {
      if (this.get('media.oembed.type') === 'video') {
        return this.sendAction('fixedExpand', this.get('content'));
      }
      this.toggleProperty('expand');
    }
  }
});
