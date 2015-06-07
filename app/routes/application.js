import Ember from 'ember';

export default Ember.Route.extend({
  snoocore: Ember.inject.service(),
  gradio: Ember.inject.service(),

  model: function() {
    var route = this;


    window.onclick = function(e) {
      e = e || window.event;
      var t = e.target || e.srcElement;
      t = Ember.$(t).closest('a').get(0);
      if (t && t.href && t.href.match(/youtu/)) {
        e.preventDefault();
        route.get('gradio').playUrl(t.href);
        return false;
      }
      if (t && t.href && !Ember.$(t).hasClass('dontintercept') && !Ember.$(t).hasClass('ember-view')){
        var parts = t.href.split(window.location.origin, 2);
        if (parts.length > 1) {
          e.preventDefault();
          try {
            window.location.hash = parts[1];
          } catch(err) {
            console.error(err.stack || err);
          }
          return false;
        }
      }
    };

    return this.get('snoocore').checkLogin().then(function(isLoggedIn) {
      var client = route.get('snoocore.client');
      if (isLoggedIn) {
        return client('/api/v1/me').get().then(function(res) {
          route.growl.info([
            '<h1>Logged in as',res.name,'</h1>',
            '<div class="message">',
            'V for reddit will now poll for new (mod) mail',
            '</div>'
          ].join('\n'));
          return res;
        });
      } else {
        route.growl.info([
          '<h1>Welcome to <em>snew</em></h1><div class="message">',
          '<p>This is still an early and incomplete alpha!</p></div>'
        ].join('\n'), {
          closeIn: 6000
        });
      }
    });
  },

  renderTemplate: function() {
    this.render();
    this.render('sidebar', {
      into: 'application',
      outlet: 'sidebar'
    });
  },

  actions: {
    logout: function() {
      var client = this.get('snoocore.client');
      client.deauth().then(function() {
        this.controllerFor('application').set('user', null);
      }.bind(this)).catch(function(e) {
        console.error(e.stack || e);
        alert("Logout is broken due to a Snoocore bug, but if you refresh I forget your token.  So I'll do that now");
        window.location.reload();
      });
    },
    fixedExpando: function(post) {
      this.controller.set('fixedExpando', post);
    },
    closeFixedExpando: function() {
      this.controller.set('fixedExpando', null);
    },
    playRadio: function() {
      this.get('gradio').play();
    },
    stopRadio: function() {
      this.get('gradio').stop();
    },
    playNext: function() {
      this.get('gradio').playNext();
    },
    playPrevious: function() {
      this.get('gradio').playPrevious();
    }
  }
});
