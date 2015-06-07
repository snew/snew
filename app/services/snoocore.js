/* globals Snoocore */
import Ember from 'ember';
import config from 'snew/config/environment';

function getParamByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.hash.replace(/^#/, '?'));
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


export default Ember.Service.extend({
  userAgent: 'vforreddit 0.0.1 by go1dfish',

  scope: [
    'submit'
  ],

  fullScope: [
    'account',
    //'creddits',
    'edit',
    'history',
    'modflair',
    'modlog',
    'modothers',
    'modposts',
    'modself',
    'modwiki',
    'mysubreddits',
    'privatemessages',
    'report',
    'save',
    'submit',
    'subscribe',
    'vote',
    'wikiedit',
    'wikiread',
    'read',
    'flair',
    'identity',
    'modconfig'
  ],

  client: function() {
    if (this.get('isLoggedIn')) {
      return this.get('api');
    } else {
      return this.get('anon');
    }
  }.property('isLoggedIn', 'api', 'anon'),

  api: function() {
    return this.get('anon');
    /*return new Snoocore({
      userAgent: this.get('userAgent'),
      decodeHtmlEntities: true,
      oauth: {
        type: 'implicit',
        mobile: false,
        duration: 'temporary',
        key: config.consumerKey,
        redirectUri: config.redirectUrl,
        scope: this.get('fullScope')
      }
    });*/
  }.property('userAgent'),

  anon: function() {
    return new Snoocore({
      userAgent: this.get('userAgent'),
      decodeHtmlEntities: true,
      oauth: {
        type: 'implicit',
        mobile: false,
        duration: 'temporary',
        key: config.consumerKey,
        redirectUri: config.redirectUrl,
        scope: this.get('fullScope')
      }
    });
  }.property('userAgent'),

  bot: function() {
    return new Snoocore({
      userAgent: this.get('userAgent'),
      decodeHtmlEntities: true,
      throttle: 10000,
      oauth: {
        type: 'implicit',
        mobile: false,
        duration: 'temporary',
        key: config.consumerKey,
        redirectUri: config.redirectUrl,
        scope: this.get('fullScope')
      }
    });
  }.property('userAgent'),

  loginUrl: function() {
    return this.get('api').getImplicitAuthUrl().replace('www.reddit', 'us.reddit');
  }.property('user', 'api'),

  checkLogin: function() {
    var code = getParamByName('access_token');
    var self = this;
    var snoo = this.get('api');
    if (code) {
      return snoo.auth(code).then(function() {
        self.set('isLoggedIn', true);
        return true;
      });
    }
    return Ember.RSVP.resolve(false);
  }
});
