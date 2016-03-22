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

  receiveSocketEvent: function(data) {
    try {
      var bot = this.get('snoocore.bot');
      console.log('data', data);
      this.get('updates').insertAt(0, data);
    } catch(e) {console.error(e);}
  }.on('didReceiveSocketEvent'),

  initSocket: function() {
    this.get('socket');
  }.on('init')
});
