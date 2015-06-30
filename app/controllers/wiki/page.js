import Ember from 'ember';

export default Ember.Controller.extend({
  snoocore: Ember.inject.service(),

  things: function() {return [];}.property('model'),

  ids: function() {
    var el = Ember.$(this.get('model.content_html') || '');
    return el.find('a').toArray().map(function(item) {
      item = Ember.$(item);
      return item.attr('href');
    }).filter(function(url) {
      return !!url.match(/reddit.com\/r\/.*\/comments/i);
    }).map(function(url) {
      var path = url.split('reddit.com/', 2)[1];
      var parts = path.split('/').without('');
      if (parts.length > 5) {
        return 't1_' + parts[5];
      }
      return 't3_' + parts[3];
    });
  }.property('model.content_html'),

  idsDidChange: function() {
    var ids = this.get('ids').slice();
    while (ids.length) {this.fetchBatch(ids.splice(0, 100))}
  }.observes('ids').on('init'),

  fetchBatch: function(ids) {
    return this.get('snoocore.client')('/api/info.json').listing({
      id: ids.join(',')
    }).then(function(response) {
      return (response.children || []).getEach('data');
    }).then(function(things) {
      this.get('things').addObjects(things);
    }.bind(this));
  }
});
