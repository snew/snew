/* globals moment */
import Ember from 'ember';
import ItemComponentMixin from 'snew/mixins/item-component';

export default Ember.Component.extend(ItemComponentMixin, {
  timeupdater: Ember.inject.service(),
  tagName: 'div',
  classNameBindings: 'type even odd linkflairclass'.w(),
  fixedExpand: 'fixedExpando',

  setup: function() {this.get('timeupdater.currentMoment');}.on('init'),

  expand: function(key, value) {
    if (arguments.length > 1) {return value;}
    if (this.get('isRemovedComment')) {return true;}
    return false;
  }.property('isRemovedComment'),

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
    if (this.get('isRemovedComment')) {
      return true;
    }
    if (this.get('customEmbed')) {
      return true;
    }
    return false;
  }.property('imageUrl', 'media.oembed.type', 'customEmbed'),

  isRemovedComment: function() {
    var url = this.get('url');
    var domain = this.get('domain');
    var parts = url.split(domain);
    if (domain !== 'rm.reddit.com') {return false;}
    if (parts[1].match(/^\/user\//)) {
      return true;
    }
    return false;
  }.property('url', 'domain'),

  expandoClass: function() {
    return this.get('media.oembed.type') || 'selftext';
  }.property('media.oembed.type'),

  domainPath: function() {
    return '/domain/' + this.get('domain');
  }.property('domain'),

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

  unknownProperty: function (key, value) {
    var content = Ember.get(this, 'content');
    if (content) {
      if (arguments.length > 1) {
        return Ember.set(content, key, value);
      }
      return Ember.get(content, key);
    }
  },

  isDirectImageUrl: function() {
    return (this.get('url') || '').match(/\.(jpg|jpeg|png|gif)$/i);
  }.property('url'),

  imageUrl: function() {
    if (this.get('isDirectImageUrl')) {
      return this.get('url');
    }
    if (this.get('url').match(/imgur\.com/) && !this.get('content.media.oembed.html')) {
      if (this.get('url').match(/imgur\.com\/a\//)) {return;}
      return this.get('url') + '.jpg';
    }
  }.property('isDirectImageUrl', 'url', 'content.media.oembed.html'),

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

  embedHtml: function() {
    return this.get('customEmbed') || this.get('content.media.oembed.html');
  }.property('content.media.oembed.html', 'customEmbed'),

  customEmbed: function() {
    var url = this.get('url');
    if (url.match(/gfycat\.com/) && !this.get('content.media.oembed.html')) {
      url = url.replace("gfycat.com/", "gfycat.com/ifr/");
      return [
        '<iframe src="',
        url,
        '" frameborder="0" scrolling="no" width="1280" height="720" style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);" ></iframe>'
      ].join('');
    }
  }.property('content.url'),

  actions: {
    toggleExpand: function() {
      if (this.get('media.oembed.type') === 'video') {
        return this.sendAction('fixedExpand', this.get('content'));
      }
      this.toggleProperty('expand');
    }
  }
});
