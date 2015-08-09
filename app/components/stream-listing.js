import Ember from 'ember';

export default Ember.Component.extend(Ember.Evented, {
  snoocore: Ember.inject.service(),
  url: "https://api.pushshift.io/stream?match=%22over_18%22:true",
  classNames: 'sitetable stream-listing',
  maxUpdates: 100,
  autoExpand: true,
  items: function() {return [];}.property(),

  itemSort: ['created:desc'],
  sortedItems: Ember.computed.sort('items', 'itemSort'),

  listing: function() {
    return this.get('sortedItems').slice(0, this.get('maxUpdates'));
  }.property('sortedItems.@each', 'maxUpdates'),

  fetchInitialContent: function() {
    return this.get('snoocore.client')('/user/PoliticBot/m/gasthesnoo.json')
      .listing({limit:100})
      .then(function(response) {
        return (response.allChildren || response.children || []).getEach('data');
      })
      .then(function(items) {
        this.get('items').addObjects(items);
      }.bind(this));
  }.on('init'),

  eventStream: function() {
    var source = new EventSource(this.get('url'));
    function handle(evt) {
      var data = JSON.parse(evt.data);
      if (data.body_html) {
        data.body_html = $('<textarea />').html(data.body_html).text();
      }
      if (data.selftext_html) {
        data.selftext_html = $('<textarea />').html(data.selftext_html).text();
      }
      console.log('data', data);
      if (data.oembed && data.oembed.html) {
        data.oembed.html = $('<textarea />').html(data.oembed.html).text();
      }
      Ember.run(this, function() {
        try {
          this.trigger('didReceiveItem', data);
        } catch (e) {
          console.error(e.stack || e);
        }
      });
    }
    source.addEventListener('t1', handle.bind(this));
    source.addEventListener('t3', handle.bind(this));
    return source;
  }.property('url'),

  eventStreamWillChange: function() {
    var stream = this.get('eventStream');
    if (stream) {stream.close();}
  },

  onReceiveItem: function(item) {
    this.get('items').pushObject(item);
  }.on('didReceiveItem'),

  willDestroy: function() {
    this.eventStreamWillChange();
  },

  initStream: function() {this.get('eventStream');}.on('init')
});