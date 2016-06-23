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
    this.route('linkWithoutSlug', {path: '/comments/:id'});
    this.route('new');
    this.route('rising');
    this.route('controversial');
    this.route('top');
    this.route('gilded');
    this.resource('wiki', function() {
      this.route('page', {path: '/:page'});
    });
    this.route('modlog', {path: '/about/log'});
  });
  this.route('live', {path: '/live/:thread_id'});
  this.route('nsfa');
  this.route('new');
  this.route('rising');
  this.route('controversial');
  this.route('top');
  this.route('gilded');
  this.route('privacy');
  this.route('radio');
  this.route('search');
  this.route('commentSearch', {path: '/commentsearch'});
  this.route('pushshiftStream', {path: '/stream/*path'});
  this.route('pushshiftStreamRedirect', {path: '/stream'});
  this.route('pushshift', {path: '/pushshift/*path'});
  this.route('catchall', {path: '/*path'});
  this.route('chat');
});

export default Router;
