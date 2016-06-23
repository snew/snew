import Ember from 'ember';
import ListingRouteMixin from 'snew/mixins/listing-route';
import {fetchIds} from 'snew/services/snoocore';

const $ = Ember.$;

export default Ember.Route.extend(ListingRouteMixin, {
  queryParams: {
    search: {refreshModel: true},
    limit: {refreshModel: true}
  },

  model: function(params) {
    const client = this.get('snoocore.client');

    if (!params.q) {return [];}
    return Ember.RSVP.resolve(Ember.$.ajax({
      url: "https://api.pushshift.io/reddit/search?" + Ember.$.param(params)
    })).then(function(data) {
      return (data.data || []).map(function(item) {
        item.body_html = $('<textarea />').html(item.body_html).text();
        return item;
      });
    }).then(results => {
      return fetchIds(client, results.map(c => 't1_' + c.id)).then(fromReddit => {
        fromReddit.forEach(redditComment => {
          const comment = results.findBy('id', redditComment.id);

          if (redditComment.body === '[removed]') {
            delete redditComment.body;
            delete redditComment.body_html;
            delete redditComment.author;
            redditComment.banned_by = true;
          }

          Ember.setProperties(comment, redditComment);
        });

        return results.filter(c => c.body !== '[deleted]');
      }).catch(error => {
        console.error('Error fetching from reddit', error.stack || error);
        return results;
      });
    });
  }
});
