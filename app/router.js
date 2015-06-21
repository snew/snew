import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Ember.Route.reopen({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});

Router.map(function() {
  this.resource('redditRedirect', {path: '/r/reddit'});
  this.resource('me', {path: '/r/me'}, function() {
    this.route('new');
    this.route('rising');
    this.route('controversial');
    this.route('top');
    this.route('gilded');
  });
  this.resource('subreddit', {path: '/r/:subreddit'}, function() {
    this.route('link', {path: '/comments/:id/:slug'});
    this.route('new');
    this.route('rising');
    this.route('controversial');
    this.route('top');
    this.route('gilded');
  });
  this.route('new');
  this.route('rising');
  this.route('controversial');
  this.route('top');
  this.route('gilded');
  this.route('privacy');
  this.route('radio');
  this.route('catchall', {path: '/*path'});
  this.route('chat');
});

export default Router;
