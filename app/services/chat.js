/* globals openpgp */
import Ember from 'ember';
window.openpgp.initWorker();

export default Ember.Service.extend({
  initFreedom: function() {
    var url = 'https://snew.github.io/chat/snew-chat.json';
    freedom(url, {
      'debug': 'log'
    }).then(function(klass) {
      console.log('loaded freedom');
      return new klass();
    }).then(function(client) {
      this.set('client', client);
      try {
        var userId = 'foo <bar@example.com>';
        return window.openpgp.generateKeyPair({
          numBits: 2048,
          userId: userId,
          passphrase: '',
          unlocked: true
        }).then(function(keypair) {
          return client.importKeypair('foobar', userId, keypair.privateKeyArmored);
        }.bind(this), function(error) {
          logger.log('key error', error.stack || error);
        });
      } catch(e) {
        console.error('setup error', e.stack || e);
      }
    }.bind(this));
  }.on('init'),

  messages: function() {return []}.property(),

  messagesDidChange: function() {
    window.openpgp.crypto.random.randomBuffer.init(4096 * 16);
  }.observes('messages.@each'),

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
    client.send(message);
  }
});
