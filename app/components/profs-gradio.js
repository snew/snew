import Ember from 'ember';

export default Ember.Component.extend({
  gradio: Ember.inject.service(),
  classNames: 'profs-gradio'.w(),
  filteredUpdates: function() {
    var search = new RegExp(this.get('searchText'), 'i');
    return Ember.ArrayProxy.createWithMixins({
      cont: this,
      content: Ember.computed.filter('cont.gradio.updates', function(item) {
        if (!!(item.post.title || '').match(search)) {return true;}
        if (!!(item.post.title || '').match(search)) {return true;}
        if (!!(item.comment.body || '').match(search)) {return true;}
        if (!!(item.post.author || '').match(search)) {return true;}
        if (!!(item.comment.author || '').match(search)) {return true;}
        return false;
      })
    });
  }.property('searchText'),

  updates: function() {
    return this.get('filteredUpdates').slice(0, this.get('maxUpdates'));
  }.property('filteredUpdates.@each', 'maxUpdates'),
  maxUpdates: 100,
  searchText: '',
  actions: {
    ytEnded: function() {
      if (this.get('isDestroyed')) {return;}
      console.log('playback ended');
      this.get('gradio').playNext();
    },
    ytPlaying: function() {
      if (this.get('isDestroyed')) {return;}
      this.get('gradio').set('autoplay', true);
    }
  }
});
