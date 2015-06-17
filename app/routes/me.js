import Ember from 'ember';

export default Ember.Route.extend({
  snoocore: Ember.inject.service(),

  model: function(params) {
    var self = this;
    return Ember.RSVP.resolve(this.modelFor('application')).then(function(user) {
      if (user) {
        return {
          name: 'me',
          display_name: 'me',
          subreddits: [],
          url: '/'
        };
      }
      return {
        name: 'me',
        display_name: 'reddit',
        subreddits: [],
        url: '/'
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

  renderTemplate: function() {
    this._super.apply(this, arguments);
    this.render('sidebar', {
      into: 'application',
      outlet: 'sidebar',
      controller: 'me'
    });
    this.render('me/tabmenu', {
      into: 'application',
      outlet: 'tabmenu',
      controller: 'me'
    });
  }
});
