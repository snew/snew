/* globals window */
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
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
});

export default Router;
