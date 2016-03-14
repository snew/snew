/* globals moment */
import Ember from 'ember';
import ItemComponentMixin from 'snew/mixins/item-component';

export default Ember.Component.extend(ItemComponentMixin, {
  classNames: 'comment'.w(),
  classNameBindings: [
    'isCollapsed:collapsed',
    'content.stickied:stickied',
    'content.score_hidden:score-hidden',
    'content.controversiality:controversial'
  ],
  timeupdater: Ember.inject.service(),

  isReplying: false,

  isCollapsed: false,

  isCollapsed: function(key, value) {
    if (arguments.length > 1) {
      return value;
    }

    return this.get('content.isCollapsed');
  }.property('content.isCollapsed'),

  setup: function() {this.get('timeupdater.currentMoment');}.on('init'),

  link_id: function() {
    return (this.get('content.link_id') || '').split('_').pop();
  }.property(),

  parentUrl: function() {
    const parentId = (this.get('content.parent_id') || '').split('_');
    const linkId = this.get('link_id');

    if (parentId[0] === 't1') {
      return `/r/${this.get('content.subreddit')}/comments/${linkId}/_/${parentId[1]}`;
    }
  }.property('content'),

  isComment: function() {
    return (this.get('content.name') || '').slice(0, 2) === 't1';
  }.property('content.name'),

  children: function() {
    return (this.get('content.replies.data.children') || []).getEach('data')
      .filter(comment => !!(comment.body || comment.body_html));
  }.property('content.replies.data.children.[]'),

  createdMoment: function() {
    return moment.utc(this.get('created_utc') * 1000);
  }.property('created_utc', 'timeupdater.currentMoment'),

  permalink: function() {
    return [
      'https://reddit.com/r',
      this.get('content.subreddit'),
      'comments',
      this.get('content.link_id').split('_').pop(),
      '_',
      this.get('content.id')
    ].join('/');
  }.property('content.link_id', 'content.id', 'content.subreddit'),

  unknownProperty: function (key) {
    var content = Ember.get(this, 'content');
    if (content) {
      return Ember.get(content, key);
    }
  },

  actions: {
    reply() {
      this.set('isReplying', true);
    },

    cancelReply() {
      this.set('isReplying', false);
    },

    toggleCollapse() {
      this.toggleProperty('isCollapsed');
    }
  }
});
