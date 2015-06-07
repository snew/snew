/* globals moment */
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'thing comment'.w(),
  timeupdater: Ember.inject.service(),

  setup: function() {this.get('timeupdater.currentMoment');}.on('init'),

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
  }
});
