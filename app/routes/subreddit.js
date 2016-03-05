import Ember from 'ember';

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
          info.moderators = moderators
          if (moderators.findBy('name', 'publicmodlogs')) {
            info.hasPublicModLogs = true;
          }
        })
        .then(() => info);
    }).catch(function(error) {
      console.error(error);
      const subreddits = params.subreddit.split('+');
      let display_name = 'multi';

      if (subreddits.length === 1) {
        display_name = subreddits[0];
      }

      return {
        name: params.subreddit,
        display_name, subreddits
      };
    });
  },

  afterModel: function() {
    /*
    if (!model.display_name) {return;}
    return this.get('snoocore.client')(model.url + 'about/stylesheet').get().then(function(result) {
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
    });*/
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
