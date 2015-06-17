import Ember from 'ember';
import TabmenuMixin from 'snew/mixins/tabmenu-route';

export default Ember.Route.extend(TabmenuMixin, {
  redirect: function() {
    this.transitionTo('subreddit.index', 'FORTradio');
  }
});
