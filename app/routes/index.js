import Ember from 'ember';
import ListingRouteMixin from 'snew/mixins/listing-route';

export default Ember.Route.extend(ListingRouteMixin, {
  listing: '/user/PoliticBot/m/snew/hot.json',

  makeApiCall: function(params) {
    var client = this.get('snoocore.client');
    return client(this.get('listing')).listing(params);
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
