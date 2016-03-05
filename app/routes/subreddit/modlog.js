import Ember from 'ember';
import {fetchIds} from 'snew/services/snoocore';

export default Ember.Route.extend({
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
    type: {
      refreshModel: true
    },
    mod: {
      refreshModel: true
    }
  },

  model(args) {
    const sub = this.modelFor('subreddit');
    const key = 'c7b83b457469643f1912d5fee30e18dba808f351';
    const user = 'publicmodlogs';
    const logUrl = `https://www.reddit.com/r/${sub.display_name}/about/log/.json?feed=${key}&user=${user}&`;
    const url = logUrl + Ember.$.param(args);
    const itemsByName = {};

    if (!sub.hasPublicModLogs) {
      return;
    }

    //return Ember.RSVP.resolve(Ember.$.ajax(url))

    return Ember.RSVP.resolve(Ember.$.ajax('https://query.yahooapis.com/v1/public/yql?' + Ember.$.param({
      q: `select * from json where url="${url}"`,
      format: 'json'
    })))
      .then(result => result.query.results.json.data.children.map(child => child.data))
      .then(actions => {
        const ids = actions.getEach('target_fullname').uniq();
        return fetchIds(this.get('snoocore.client'), ids)
          .then(items => {
            items.forEach(item => itemsByName[item.name] = item);
            return actions.map(action => {
              action.item = itemsByName[action.target_fullname];
              action.createdMoment = moment.utc(action.created_utc * 1000);
              action.name = action.id;

              if (action.description === 'null') {
                action.description = null;
              }

              if (action.details === 'null') {
                action.details = null;
              }

              if (action.target_body && action.item) {
                action.item.body = action.target_body;
                action.item.body_html = null;
                action.item.author = action.target_author;
              }

              return action;
            })
          });
      });
  },

  redirect(model) {
    if (!model) {
      this.transitionTo('subreddit.index');
    }
  }
})
