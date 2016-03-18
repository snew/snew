import Ember from 'ember';
import LiveSocketMixin from 'snew/mixins/live-socket';

export default Ember.Component.extend(LiveSocketMixin, {
  liveThreadId: null,
  tagName: 'ol',
  classNames: ['liveupdate-listing'],
  updates: [],

  formattedUpdates: Ember.computed.map('updates', function(post) {
    post.createdMoment = moment.utc(post.created_utc * 1000);
    post.postedAt = moment(post.createdMoment.toDate()).format('D MMM h:mm A');
    return post;
  }),

  didReceiveSocketEvent: function(data) {
    try {
      var bot = this.get('snoocore.bot');
      console.log('data', data);
      var post = JSON.parse(data.body.trim());
      console.log('post', post);
      this.get('updates').insertAt(0, post);
    } catch(e) {console.error(e);}
  }.on('didReceiveSocketEvent'),

  initSocket: function() {
    this.get('socket');
  }.on('init')
});
