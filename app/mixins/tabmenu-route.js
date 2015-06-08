import Ember from 'ember';

export default Ember.Mixin.create({
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
