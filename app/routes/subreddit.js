import Ember from 'ember';
import isPhantom from "snew/util/is-phantom";

export default Ember.Route.extend({
  snoocore: Ember.inject.service(),

  model: function(params) {
    var path = '/r/' + params.subreddit + '/about';
    if (params.subreddit === 'all') {
      return {
        url: '/r/all/',
        display_name: 'all'
      };
    }
    return this.get('snoocore.client')(path + '.json').get().then(function(result) {
      return result.data;
    }).then(info => {
      return this.get('snoocore.client')(`${path}/moderators.json`).get()
        .then(result => result.data.children)
        .then(moderators => {
          info.moderators = moderators;
          if (moderators.findBy('name', 'publicmodlogs')) {
            info.hasPublicModLogs = true;
          }
        })
        .then(() => info);
    }, error => {
      console.error(error);
      const subreddits = params.subreddit.split('+');
      let display_name = 'multi';
      let isBanned = false;

      if (subreddits.length === 1) {
        display_name = subreddits[0];
        isBanned = true;
      }

      return {
        name: params.subreddit,
        display_name, subreddits,
        url: `/r/${params.subreddit}/`,
        isBanned
      };
    });
  },

  afterModel: function(model) {
    if (!isPhantom()) {
      return;
    }

    if (!model.display_name) {return;}

    function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

    return this.get('snoocore.client')(model.url + 'about/stylesheet').get().then(result => {
      var data = result.data || {};
      var css = data.stylesheet || '';
      var images = data.images || [];
      images.forEach(function(img) {
        var link = escapeRegExp(img.link);
        var regex = new RegExp(link, 'g');
        css = css.replace(regex, 'url("'+img.url+'")');
      });
      model.stylesheet = css;
      model.about = data;
      this.controllerFor("application").set("stylesheet", css);
    });
  },

  exit: function() {
    if (this.controller) {
      Ember.set(this.controller, 'model', null);
    }
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
