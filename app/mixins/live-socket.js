import Ember from 'ember';

export default Ember.Mixin.create(Ember.Evented, {
  snoocore: Ember.inject.service(),

  socket: function() {
    var self = this;
    var url = this.get('socketUrl');
    if (!url) {return;}
    var ws = new WebSocket(url);
    ws.onopen = function() {
    };
    ws.onerror = function(e) {
      console.log('socket error', e);
    };
    ws.onclose = function() {
      console.log('socket close');
    };
    ws.onmessage = function(evt) {
      Ember.run(function() {
        var data = JSON.parse(evt.data);
        if (!data || !data.payload ||  !data.payload.data) {return;}
        self.trigger('didReceiveSocketEvent', data.payload.data);
      });
    };
    return ws;
  }.property('socketUrl'),

  socketUrl: ''
});
