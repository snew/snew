/* globals Snoocore,moment */
import Ember from 'ember';
import config from 'snew/config/environment';

function getParamByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.hash.replace(/^#/, '?'));
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


export default Ember.Service.extend({
  timeupdater: Ember.inject.service(),

  userAgent: 'vforreddit 0.0.1 by go1dfish',

  scope: [
    'submit'
  ],

  fullScope: [
    'account',
    //'creddits',
    'edit',
    'history',
    /*'modflair',
    'modlog',
    'modothers',
    'modposts',
    'modself',
    'modwiki',*/
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
    'identity'/*,
    'modconfig'*/
  ],

  setupPoller: function() {
    this.get('timeupdater');
  }.on('init'),


  handleExpiredAuth: function() {
    var self = this;
    this.get('api').on('access_token_expired', function(responseError) {
      self.setProperties({
        user: null,
        isLoggedIn: false
      });
    });
  }.observes('snoocore.api').on('init'),

  client: function() {
    if (this.get('isLoggedIn')) {
      return this.get('api');
    } else {
      return this.get('anon');
    }
  }.property('isLoggedIn', 'api', 'anon'),

  api: function() {
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
        scope: this.get('fullScope').concat(['modconfig'])
      }
    });
  }.property('userAgent'),

  bot: function() {
    return new Snoocore({
      userAgent: this.get('userAgent'),
      decodeHtmlEntities: true,
      throttle: 30000,
      oauth: {
        type: 'implicit',
        mobile: false,
        duration: 'temporary',
        key: config.consumerKey,
        redirectUri: config.redirectUrl,
        scope: this.get('fullScope').concat(['modconfig'])
      }
    });
  }.property('userAgent'),

  loginUrl: function() {
    return this.get('api').getImplicitAuthUrl().replace('www.reddit', 'us.reddit');
  }.property('user', 'api'),

  loginExpiry: function() {
    return this.get('loginExpires');
  }.property('loginExpires', 'timeupdater.currentMoment'),

  checkLogin: function() {
    var code = getParamByName('access_token');
    var self = this;
    var snoo = this.get('api');
    if (code) {
      this.set(
        'loginExpires',
        moment().add(parseInt(getParamByName('expires_in')), 'second')
      );
      return snoo.auth(code).then(function(result) {
        return snoo('/api/v1/me').get();
      }).then(function(res) {
        self.setProperties({
          isLoggedIn: true,
          user: res
        });
        return res;
      });
    }
    return Ember.RSVP.resolve(false);
  }
});
