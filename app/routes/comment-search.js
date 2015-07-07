import Ember from 'ember';
import ListingRouteMixin from 'snew/mixins/listing-route';

export default Ember.Route.extend(ListingRouteMixin, {
  queryParams: {
    search: {refreshModel: true},
    limit: {refreshModel: true}
  },

  model: function(params) {
    if (!params.q) {return [];}
    return Ember.RSVP.resolve(Ember.$.ajax({
      url: "https://api.pushshift.io/reddit/search?" + Ember.$.param(params)
    })).then(function(data) {
      return data.map(function(item) {
        item.body_html = $('<textarea />').html(item.body_html).text();
        return item;
      });
    });
  }
});
