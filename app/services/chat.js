import Ember from 'ember';

export default Ember.Service.extend({
  initFreedom: function() {
    freedom('/snew-chat.json', {
      'debug': 'log'
    }).then(function(klass) {
      return new klass();
      console.log('loaded freedom');
    }).then(function(client) {
      this.set('client', client);
    }.bind(this));
  }.on('init'),

  messages: function() {return []}.property(),

  users: [],

  clientDidChange: function() {
    var client = this.get('client');
    client.on('recv-buddylist', function(val) {
      this.set('users', Object.keys(val).map(function(id) {
        return val[id];
      }));
      console.log('buddy list', val);
    }.bind(this));
    client.on('recv-message', function(data) {
      console.log('data', data);
      this.get('messages').pushObject(data);
    }.bind(this));
    client.on('recv-status', function(msg) {
      console.log('status', msg);
    });
    client.on('recv-uid', function(data) {
      console.log('recv-uid', data);
    });
    client.on('recv-err', function(data) {
      console.log('recv-err', data);
    });
  }.observes('client'),

  sendMessage: function(message) {
    var client = this.get('client');
    if (!client) {return;}
    console.log('sending', message, client);
    client.send(message);
  }
});
