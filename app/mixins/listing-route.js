import Ember from 'ember';

export default Ember.Mixin.create({
  snoocore: Ember.inject.service(),

  queryParams: {
    after: {
      refreshModel: true
    },
    before: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    },
    q: {
      refreshModel: true
    },
    t: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.makeApiCall(params).then(this.normalizeResponse.bind(this))
      .then(result => {
        result.params = params;
        return result;
      })
      .catch(error => {
        const sub = this.modelFor('subreddit');
        const url = `https://api.pushshift.io/reddit/search/submission?subreddit=${sub.name}&limit=500`;

        return Ember.RSVP.resolve(Ember.$.ajax(url)).then(result => result.data);
      });
  },

  listingType: 'hot',

  listingClass: 'subreddit',

  makeApiCall: function(params) {
    var sub = this.modelFor(this.get('listingClass'));
    var path = sub.url + this.get('listingType') + '.json';
    return this.get('snoocore.client')(path).listing(params);
  },

  normalizeResponse: function(response) {
    return (response.allChildren || response.children || []).getEach('data');
  },

  renderTemplate: function() {
    this.render(this.get('listingClass') + '/index', {
      controller: this.controller
    });
  },

  resetController() {
    this.controller.setProperties({
      after: '',
      before: '',
      count: 0
    });
  }
});
