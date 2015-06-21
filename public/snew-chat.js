/*jslint sloppy:true */
/*globals freedom */
/**
 * Chat demo backend.
 * Because the Social API provides message passing primitives,
 * this backend simply forwards messages between the front-end and our Social provider
 * Note that you should be able to plug-and-play a variety of social providers
 * and still have a working demo
 *
 **/

// Create a logger for this module.
// TODO: allow loggers to be made synchronously.
var logger;
freedom.core().getLogger('[Chat Backend]').then(function (log) {
  logger = log;
});

var Chat = function (dispatchEvent) {
  this.dispatchEvent = dispatchEvent;

  this.userList = {};    //Keep track of the roster
  this.clientList = {};
  this.myClientState = null;
  this.social = freedom.socialprovider();
  this.boot();
};

/**
 * sent messages should be encrypted and forwarded to the Social provider.
 **/
Chat.prototype.send = function (message) {
  logger.log('sending', message);
  return Object.keys(this.userList).map(function(id) {
    this.social.sendMessage(id, message);
  }.bind(this));
};

Chat.prototype.boot = function () {
  this.social.login({
    agent: 'chat',
    version: '0.1',
    url: '',
    interactive: true,
    rememberLogin: false
  }).then(
    function (ret) {
      this.myClientState = ret;
      logger.log('onLogin', this.myClientState);
      if (ret.status === this.social.STATUS.ONLINE) {
        this.userList[ret.clientId] = ret;
        logger.log(this.userList);
        this.dispatchEvent('recv-uid', ret.clientId);
        this.dispatchEvent('recv-status', "online");
      } else {
        this.dispatchEvent('recv-status', "offline");
      }
    }.bind(this)
  );

  this.social.on(
    'onMessage',
    function (data) {
      logger.log('onMessage', data);
      this.dispatchEvent('recv-message', data);
    }.bind(this));

  /**
   * On user profile changes, let's keep track of them
   **/
  this.social.on('onUserProfile',
                 function (data) {
                   // Save the user
                   this.userList[data.userId] = data;
                   this.updateBuddyList();
                 }.bind(this));

  /**
   * On newly online or offline clients, let's update the roster
   **/
  this.social.on(
    'onClientState',
    function (data) {
      logger.debug('Roster Change', data);
      if (data.status === this.social.STATUS.OFFLINE) {
        if (this.clientList.hasOwnProperty(data.clientId)) {
          delete this.clientList[data.clientId];
        }
      } else {  //Only track non-offline clients
        this.clientList[data.clientId] = data;
      }
      //If mine, send to the page
      if (this.myClientState !== null &&
          data.clientId === this.myClientState.clientId) {
        if (data.status === this.social.STATUS.ONLINE) {
          this.dispatchEvent('recv-status', "online");
        } else {
          this.dispatchEvent('recv-status', "offline");
        }
      }
      this.updateBuddyList();
    }.bind(this));
};

Chat.prototype.updateBuddyList = function () {
  // Iterate over our roster and send over user profiles
  // where there is at least 1 client online
  var buddylist = {}, k, userId;
  for (k in this.clientList) {
    if (this.clientList.hasOwnProperty(k)) {
      userId = this.clientList[k].userId;
      if (this.userList[userId]) {
        buddylist[userId] = this.userList[userId];
      }
    }
  }
  this.dispatchEvent('recv-buddylist', buddylist);
};

freedom().providePromises(Chat);
