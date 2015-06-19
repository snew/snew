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
    }).catch(function(error) {
      console.error(error);
      return {
        name: params.subreddit,
        display_name: 'multi',
        subreddits: params.subreddit.split('+'),
        url: '/r/' + params.subreddit + '/'
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
