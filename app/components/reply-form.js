import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: 'usertext cloneable'.w(),
  cancel: 'cancel',

  actions: {
    save: function() {
      console.log('save');
    },

    cancel: function() {
      this.set('body', '');
    }
  }
});
