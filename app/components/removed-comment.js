/* globals moment */
import Ember from 'ember';

export default Ember.Component.extend({
  snoocore: Ember.inject.service(),

  didChangePost: function() {
    var post = this.get('post');
    var self = this;
    if (post) {
      var titleParts = post.title.split(' ');
      var id = titleParts[2].slice(0, 7);
      var url = post.url.split('#')[0];
      var domain = post.domain;
      var path = post.url.split(domain)[1];
      var params = (path.split('?')[1]).split("&").reduce(function(prev, curr, i, arr) {
          var p = curr.split("=");
          prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
          return prev;
      }, {});
      this.set('isLoading', true);
      this.get('snoocore.api')(path).listing(params).then(function(results) {
        return (results.allChildren[0] || {}).data;
      }).then(function(item) {
        if (item && item.id === id) {
          self.set('item', item);
        }
      }).catch(function(error) {
        console.error(error.stack || error);
      }).finally(function() {
        self.set('isLoading', false);
      });
    }
  }.observes('post').on('init')
});
