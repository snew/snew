import Ember from 'ember';

function escapeRegExp(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

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
      if (t.href.match(/reddit.com\/api\/v1\/authorize/)) {
        return;
      }
      if (t && t.href && !Ember.$(t).hasClass('dontintercept') && !Ember.$(t).hasClass('ember-view')){
        var parts = t.href.split(window.location.origin, 2);
        if (!(parts.length > 1)) {
          parts = t.href.split('reddit.com', 2);
        }
        if (parts.length > 1) {
          e.preventDefault();
          try {
            route.transitionTo(parts[1]);
            //window.location.hash = parts[1];
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
        route.growl.info([
          '<h1>Logged in as',route.get('snoocore.user.name'),'</h1>',
          '<div class="message">',
          'This is still an early and incomplete alpha!',
          '</div>'
        ].join('\n'));
        return route.get('snoocore.user');
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

  redirect: function(user) {
    if (user) {
      this.transitionTo('me.index');
    }
  },

  afterModel: function() {
    this.get('snoocore.anon')('/r/carbon/about/stylesheet').get().then(function(result) {
      var data = result.data || {};
      var css = data.stylesheet || '';
      var images = data.images || [];
      images.forEach(function(img) {
        var link = escapeRegExp(img.link);
        var regex = new RegExp(link, 'g');
        css = css.replace(regex, 'url("'+img.url+'")');
      });
      this.controllerFor('application').set('stylesheet', css);
    }.bind(this));
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
    },
    navToMulti: function(subs) {
      if (!subs.length) {return this.transitionTo('index');}
      this.transitionTo('subreddit.index', subs.join('+'));
    }
  }
});
