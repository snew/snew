import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'snew-chat thing link'.w(),
  chat: Ember.inject.service(),
  messages: Ember.computed.alias('chat.messages'),
  setupChat: function() {
    this.get('chat');
  }.on('init'),

  messagesDidChange: function() {
    var el = this.get('element');
    if (!el) {return;}
    this.$('.messages').scrollTop(this.$('.messages')[0].scrollHeight);
  }.observes('messages.@each'),

  actions: {
    send: function() {
      var msg = this.get('myMessage');
      if (!msg) {return;}
      this.get('chat').sendMessage(msg);
      this.set('myMessage', '');
    }
  }
});
