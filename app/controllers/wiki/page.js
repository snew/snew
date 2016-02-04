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
      var path = (url.split('reddit.com/', 2)[1] || '').split('?')[0];
      var parts = path.split('/').without('');
      if (parts.length > 5 && parts[5].length === 7) {
        return 't1_' + parts[5];
      }
      if ((parts[3] || '').length !== 6) {return '';}
      return 't3_' + parts[3];
    }).without('').uniq().sort().reverse();
  }.property('model.content_html'),

  batches: function() {
    var ids = this.get('ids').slice();
    var batches = [];
    while (ids.length) {batches.push(ids.splice(0, 100));}
    return batches;
  }.property('ids'),

  idsDidChange: function() {
    var ids = this.get('ids').slice();
    this.get('batches').forEach(function(ids) {
      this.fetchBatch(ids)
    }.bind(this));
  }.observes('batches').on('init'),

  links: Ember.computed.map('batches', function(ids) {
    return 'https://us.reddit.com/api/info?id=' + ids.join(',');
  }),

  fetchBatch: function(ids) {
    return this.get('snoocore.client')('/api/info').listing({
      id: ids.join(',')
    }).then(function(response) {
      return (response.children || []).getEach('data');
    }).then(function(things) {
      this.get('things').addObjects(things);
    }.bind(this));
  }
});
