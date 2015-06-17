/* globals moment */
import Ember from 'ember';
import ItemComponentMixin from 'snew/mixins/item-component';

export default Ember.Component.extend(ItemComponentMixin, {
  classNames: 'comment'.w(),
  timeupdater: Ember.inject.service(),

  isReplying: false,

  setup: function() {this.get('timeupdater.currentMoment');}.on('init'),

  link_id: function() {
    return (this.get('content.link_id') || '').split('_').pop();
  }.property(),

  isComment: function() {
    return (this.get('content.name') || '').slice(0, 2) === 't1';
  }.property('content.name'),

  children: function() {
    return (this.get('replies.data.children') || []).getEach('data');
  }.property('replies.data.children'),

  createdMoment: function() {
    return moment.utc(this.get('created_utc') * 1000);
  }.property('created_utc', 'timeupdater.currentMoment'),

  unknownProperty: function (key) {
    var content = Ember.get(this, 'content');
    if (content) {
      return Ember.get(content, key);
    }
  },

  actions: {
    reply: function() {
      this.set('isReplying', true);
    },
    cancelReply: function() {
      this.set('isReplying', false);
    }
  }
});
