import Ember from 'ember';

export default Ember.Component.extend({
  snoocore: Ember.inject.service(),
  tagName: 'form',
  classNames: 'usertext cloneable'.w(),
  body: '',

  mock: function() {
    var body = this.get('body');
    if (!body) {return;}
    return {
      author: this.get('snoocore.user.name'),
      body: this.get('body'),
      score: 1
    };
  }.property('body', 'snoocore.user.name'),

  actions: {
    save: function() {
      var self = this;
      var comments = this.get('comments') || [];
      var markdown = this.get('body').trim();
      if (!markdown) {return;}
      this.set('isPosting', true);
      this.get('snoocore.client')('/api/comment').post({
        thing_id: this.get('thing.name'),
        text: markdown
      }).then(function(result) {
        return Ember.get(result, 'json.data.things.0.data');
      }).then(function(comment) {
        if (!comment) {return;}
        comments.insertAt(0, comment);
        self.set('body', '');
        self.sendAction('success');
      }).catch(function(error) {
        console.error('comment error', error);
      }).then(function() {
        self.set('isPosting', false);
      });
    },

    cancel: function() {
      this.set('body', '');
      this.sendAction('cancel');
    }
  }
});
