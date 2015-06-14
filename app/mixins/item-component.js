import Ember from 'ember';

export default Ember.Mixin.create({
  snoocore: Ember.inject.service(),

  castVote: function(direction) {
    direction = direction || 0;
    if (!this.get('snoocore.isLoggedIn')) {return;}
    return this.get('snoocore.api')('/api/vote').post({
      dir: direction,
      id: this.get('content.name')
    }).catch(function(error) {
      console.log('voting error', error);
    });
  },

  upmod: function() {
    return this.get('content.likes') === true;
  }.property('content.likes'),

  downmod: function() {
    return this.get('content.likes') === false;
  }.property('content.likes'),

  actions: {
    upmod: function() {
      var direction = 1;
      var content = this.get('content');
      if (!content) {return;}
      if (!this.get('snoocore.isLoggedIn')) {return;}
      if (this.get('upmod')) {
        Ember.setProperties(content, {
          score: Ember.get(content, 'score') - 1,
          likes: null
        });
        direction = 0;
      } else if (this.get('downmod')){
        Ember.setProperties(content, {
          score: Ember.get(content, 'score') + 2,
          likes: true
        });
      } else {
        Ember.setProperties(content, {
          score: Ember.get(content, 'score') + 1,
          likes: true
        });
      }
      return this.castVote(direction);
    },
    downmod: function() {
      var direction = -1;
      var content = this.get('content');
      if (!content) {return;}
      if (!this.get('snoocore.isLoggedIn')) {return;}
      if (this.get('upmod')) {
        Ember.setProperties(content, {
          score: Ember.get(content, 'score') - 2,
          likes: false
        });
      } else if (this.get('downmod')){
        Ember.setProperties(content, {
          score: Ember.get(content, 'score') + 1,
          likes: null
        });
        direction = 0;
      } else {
        Ember.setProperties(content, {
          score: Ember.get(content, 'score') - 1,
          likes: false
        });
      }
      return this.castVote(direction);
    }
  }
});
