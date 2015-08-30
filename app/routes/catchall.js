import Ember from 'ember';
import ListingRouteMixin from 'snew/mixins/listing-route';

export default Ember.Route.extend(ListingRouteMixin, {
  makeApiCall: function(params) {
    var client = this.get('snoocore.client');
    var path = params.path || '';
    if (path[path.length - 1] === '/') {
      path = path.slice(0, path.length - 1);
    }
    if (!path) {path = 'hot';}
    return client('/' + path).listing(params, {
      listingIndex: 1
    });
  },

  afterModel: function(model) {
    this.get('snoocore').restoreRemovedComments(model);
  },

  renderTemplate: function() {
    this._super.apply(this, arguments);
    this.render('sidebar', {
      into: 'application',
      outlet: 'sidebar',
      controller: 'subreddit'
    });
    this.render('subreddit/tabmenu', {
      into: 'application',
      outlet: 'tabmenu',
      controller: 'subreddit'
    });
  }
});
