/* globals moment */
import Ember from 'ember';

export default Ember.Service.extend({
  currentMoment: function() {return moment();}.property(),
  poll: function() {
    this.notifyPropertyChange('currentMoment');
    repeat = repeat.bind(this);
    return repeat();
    function repeat() {if (!Ember.testing) {Ember.run.later(this, 'poll', 30*1000);}}
  }.on('init')
});
