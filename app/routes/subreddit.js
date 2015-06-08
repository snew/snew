import Ember from 'ember';

function escapeRegExp(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default Ember.Route.extend({
  snoocore: Ember.inject.service(),

  model: function(params) {
    var path = '/r/' + params.subreddit + '/about/';
    if (params.subreddit === 'all') {return {url: '/r/all/'};}
    return this.get('snoocore.client')(path).get().then(function(result) {
      return result.data;
    });
  },

  afterModel: function(model) {
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
