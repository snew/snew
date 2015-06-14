import Ember from 'ember';

function getParamByName(url, name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(url);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
var playlist = shuffle(["8Zisp85CCxc","oxIyIuhNFd4","B36MkF-QU1s","S0t4pyuEe7E","LoarRnTfEFY","Z6VrKro8djw","bTxFFWajIII","tVlkxrNlp10","BPPzYfMkXZw","4KfBFdqdoZg","wCQiPXDZHcc","gCiemjfnNZU","QuL_euRslTc","Y6ljFaKRTrI","x_PrT25o8Vs","0J3vgcE5i2o","NOG3eus4ZSo","W8YAK8oMEKI","mVQpfoqsY8Q","-azgwfnZu7c","BmIJWLgIe9Y","Oy-x7BLlBYg","efvmPF9UxJ4","PD-MdiUm1_Y","_Dsh9M6qnhE","o9mJ82x_l-E","rE3j_RHkqJc","mVLDs0PZ9uE","WElvEZj0Ltw","eBShN8qT4lk","05etFVZasyg","YylGLV_nANU","8nTFjVm9sTQ","wj10EzNKA2M","Xz60SRTdwqY","Nw2jNvnTZGI","Yub7ZreDQMQ","8gBceYJtjSs","gSDf2Usd8n4","v5dyHPX8Cos","n3Am_n_qSUA","tAp9BKosZXs","fj-10lIrboM","76LZPFUzLyw","B9856_xv8gc","RSsstXfcRWw","bjasSGZd40s","GGLmZCZ1sXY","B7zLthh85P8","1plPyJdXKIY","Fi0-RdDuSP0","NRtvqT_wMeY","rRwOhqoRKn4","X_5YJoMNmXc","XLmH79iYoVw","qQraeOG-3L8","Jne9t8sHpUc","uDDJvC2CGaU","wQkMuHU9huM","-5bznN76xRY","igJ6ZeqkjOQ","SUFSB2plwzM","nYSDC3cHoZs","Z8S0_DppB14","JeaBNAXfHfQ","uXNRkn7oTG0","U7zMkP-4cr0","POaaw_x7gvQ","AaGRQiiBQcw","Fyhyor0yU3o","Po9P6vsXWLk","zMHqqXYaB8g","5FZuNxcJx-I","AEYN5w4T_aM","aHH9Yx9WpSU","NoHsqCCjJFc","oGNOfRzDysw","N3zwKgz8hsI","eV-5iNu6Sd8","eBtv0EJUmA8","VHOHsoQ_wiM","j3spiH1oIJE","jWshPH_jsjQ","eBG7P-K-r1Y","-yX7PkalhZE","uqZyN-w4CKE","etyH2OUxVuQ","R5eRqqf3880","315tYkYxT1k","UD8tGWIqA-c","CZv_lvvIVoI","AITNgcB77oY","TREQGl54BU8","I_izvAbhExY","6M4_Ommfvv0","rmadSGJCzo8","FvgmyaSTosg","78O6--THTF0","C-PNun-Pfb4","jVvdZDwlPiY","MUfgAbFY4CA","jGqrvn3q1oo","a8B066ZeCPA","J4kk2sxiMWU","pROPMG471GQ","g8Cuz4PPg3s","EUrDDt2UxsQ","vEc9nXErU-Y","vA4IkGUcxe8","EYYdQB0mkEU","K8P-bxwo76o","W2B-CD7jMuk","jE7Zv6d-HUA","FjursdqfUhM","3PDY7qtTsVw","3c7bISLhVl8","3epPMa5rq0U","nn5h2NZZeaI","8Bd1hqHrUPU","5KbR0jg48YI","POxMp61Ksbk","TorwkR_cYZU","Mqyi0Iv2CdI","TE3a-8zEedE","wvAnQqVJ3XQ","V1Ar79f8aN8","IJcOWQ1rym8","kDlAMjM-77Y","WehjMZcQqPA","3MyWVahqjAY","-1cyCmUdDNQ","RPfMjL3JmkU","sovVYInjHjw","GV3wYPXFiBY","1731xnF3hi0","Kiizvj7KtsU","P0-ZKaWVYSk","rDJu7r6OUvk","E0E0ynyIUsg","LHPneIEAQyI","PnoZ39hqctk","lotQ5yp2lEo","38k-qfy5Jk4","d696t3yALAY","-7Y0ekr-3So","eEpZY8lahvg","_6khld0NiME","JdFkG6As8jc","9Q0q_s5aSlg","MLhn9tc8Dvo","tluy4lcRBKY","J4_wXPZ1Bnk","8VR1rFa6S0M","p7LElLVani4","mZIM986oVfI","9nFrp7Z9wEU","qi8KJ0boov8","ZltSUBw_hW0","1aVHLL5egRY","CsxaoXHe9Xc","AIXUgtNC4Kc","UKZKl6ZRIGQ","9rJ6MoDAlo8","PaUwjCAFvGc","_0hTtsqiFCc","URAqnM1PP5E","xAWtuxhdUDE","bwDpAfFzcRQ","NBLZ2PBJHjg","g96ZaqXR8uk","EgfEVDxd7Kc","lAD6Obi7Cag","E3WgdSeLQjw","C7C7Y3IvvQ4","lrJz9Dh5MsM","7lL1CW140FQ","nsTLUl2Ywus","n9qeJskx6r0","pqWRfd9IgRM","i2uuRG9l1JA","u06DpcFXc4U","bCOIQOGXOg0","ulIOrQasR18","5BlazElwPkA","x_wLVCLPx0M","Vf2THIimjgQ","ZdJlkxMnvyo","kMOeTLLeaDU","RijB8wnJCN0","UzdHlN_eVSw","tBb4cjjj1gI","3okO9qGt7A4","RQa7SvVCdZk","NdWPkgtaOTw","hjg39XRkjVc","DSaSw3dH5Y8","u__W0Qa8v0k","Ail622yjcg0","G5l3LelyCJM","-KT-r2vHeMM","xGytDsqkQY8","Shq39kWglZ4","7F_opWg9_qI","gx1OFl_y-ic","dg8QgUIKXHw","XbGs_qK2PQA","-FuZ0YvXEvU","D-NvQ6VJYtE","pojL_35QlSI","OgtQj8O92eI","GgflYKJQe5Y","UclCCFNG9q4","9TlBTPITo1I","6Whgn_iE5uc","Ln6WQqRDrCo","fJuapp9SORA","65p9aYPdUX4","MYdKho_5Y9A","sc5iTNVEOAg","ClQcUyhoxTg","AJmjtRJCQG4","7E-_J5WWkoc","ZQIqTFKM7Ws","5-mWq5B6sU0","WM8bTdBs-cw","djE-BLrdDDc","8oemawsu6AI","MEJt_ujJWVA","5PsnxDQvQpw","kAPyRryK1HY","U97sVsxSvw8","jW5f5OQSdsM","EqyOs7zAb8w","QwJ5l5etKlM","JnC88xBPkkc","r8OipmKFDeM","zX6R9xtCnVE","z4gcLWm-OFg","Azkef2lXW88","lDQwewROGLA","R2F_hGwD26g","m4WgpEs74Hs","Tuj3I8cF9GM","Gh5zTCdNH_0","Q7aOWIFgIZQ","WAGGEw4TcFY","Z0GFRcFm-aY","7Pq-S557XQU","kaBljsb6oJQ","-Psfn6iOfS8","tvE3dYKHxwU","lnNYXgV7L-c","OFGgbT_VasI","6FigprdcBGA","gUhRKVIjJtw","i88yCbXunXM","HEukkVaKZeA","43iW8oB20Ps","MiZ27hOqx8w","ci4EAmF1bZo","ib-Qiyklq-Q","hPC2Fp7IT7o","CXZtVoQ0gqs","a3sYPX17cFk","YrRhnaFaBsA","uoKAYoe6Tuw","dscfeQOMuGw","0gXvVUg-VAE","BwbPRCRkMy0","e0_JvuBpDB8","8fh-mlWbeMs","dvy5I2yHZTs","4YmU5tMMkjI","wS_NpTClXhA","pES8SezkV8w","AL1qHYttFz8","0J2QdDbelmY","0JoNhbWoX28","FPbQ6weKh-k","TPOM20kgWlc","AuiMmpga9Qk","fA3Y04MnH6c","qORYO0atB6g","QzDzt9lGwhM","3cZ-nAfSkW4","JjTjtJDZomw","hPmJWBurnlU","9IZpw6re478","ht672-wYelc","IxF0OdButkM","5Gc9pviBlJA","OlBifX0H3yg","AqZceAQSJvc","QvYgm5iQjQc","V7NkbeXSXsw","CeMeDihwyrg","GkEPzHyoRdY","4fk2prKnYnI","gtlTvW_WnAk","wZpaNJqF4po","odLL_s3UJgs","yKOlBZJ7Izs","nPDixDqAUh0","BX_nMwYa-nw","eUA4mfDQB5k","zcCrd2UhORk","R_raXzIRgsA","95kCv10duFw","BuJDaOVz2qY","kz7-3nRoviI","AFaVnQXUq6g","2MRdtXWcgIw","DBy7nVD32Mo","TuHVm-fbXM8","K7l5ZeVVoCA","VqdcU9ULAlA","wWnfkrMjJEY","MW6E_TNgCsY","EFWjoQ-A1U4","LxVxQ92tkgQ","Tja6_h4lT6A","HQmmM_qwG4k","r7T9gicSnR0","MyjTrwOMSO4","VMYAEHE2GrM","oc6FmZCT0Zc","hEcjgJSqSRU","Ypkv0HeUvTc","mXPeLctgvQI","_0VTyTPJVfs","YR5ApYxkU-U","jJo0MT3wDBs","gAjR4_CbPpQ","aAAqAnCBNKQ","NIGMUAMevH0","3fVUU7Drv2I","0ZSe5RZ6M-w","IBH97ma9YiI","3R7l7nDuj1o","H8Qp38qT-xI","SR2gR6SZC2M","26RqwXEFpLU","oKhsNLWoCSU","-cJauX_q6wI","sFZjqVnWBhc","QmcconvY02Y","CO8vBVUaKvk","V106RGMPcHQ","-iiAtLFkVps","pt8VYOfr8To","JsnIdx8JSBY","CH1XGdu-hzQ","tH2w6Oxx0kQ","7ADO4uuUJrA","jNwXFnqBzHg","6NXnxTNIWkc","aTxJbW7feFY","enqNl7tdLR4","Bld_-7gzJ-o","ST86JM1RPl0","NteVmdoo1yI","Dsux5_qjYog","rgFQ6WmxdMs","67WI8q8KvLE","jvjDr8KKtsE","ceTR67EjeyU","rfdmRR623BY","0dL_RaUFcoQ","Et9b7LWfnxQ","G8-5NpCXwEE","N01vThrQ40Q","HSeImqbV30s","_ZLkV8ZEboo","kIDWgqDBNXA","XdcFF5ePajc","-t1_ETuWIbE","5T0utQ-XWGY","G6n5Oi4714o","hm3iwINTF90","1rorneEGPso","YkPhka2m_D0","_JZom_gVfuw","I_8rt1PSck8","dHIrlcmHTME","2malAhtMmZ0","8r-e2NDSTuE","Vi2IQNs8hlE","6VF5P7qLaEQ","JdxkVQy7QLM","a7xSvsD0r1Q","3qVPNONdF58","dyLSstqMvH8","x8A9Y1Dq_cQ","m3dicKNdKa8","ZAAzMeKVErw","H3meKtbKUms","CZRH68Ib1Ko","GNbaGJRt25s","DmXzamLDgFk","q4EiBFUpFXg","NJP2aNeA6XQ","qBsEF7Qx09o","E1fzJ_AYajA","WjeptaI2T8E","02njugU0H7E","1IqH3uliwJY","s6t6Yfu3HEI","A6c6eUeoa9Q","EFDFpS9_ZWY","2aljlKYesT4","tMzk89bYjiQ","qduwgQV051Q"]);

export default Ember.Service.extend(Ember.Evented, {
  snoocore: Ember.inject.service(),
  threadId: 'uocz16gmx2s7',

  lastUpdate: {
    ytid: playlist[0]
  },

  playlist: playlist,
  autoplay: false,

  updates: function() {
    return [];
  }.property(),

  play: function() {
    this.playNext();
  },

  parseTubeId: function(url) {
    var id = getParamByName(url, 'v');
    if (!id) {
      id = url.split('youtu.be/').pop();
      id = id.split(/(#|\?)/)[0];
    }
    return id;
  },

  playUrl: function(url) {
    this.set('autoplay', true);
    this.set('lastUpdate.ytid', this.parseTubeId(url));
  },

  stop: function() {
    this.set('autoplay', false);
    this.set('lastUpdate.ytid', this.get('nextPlaylistId'));
  },

  currentPlaylistIdx: function() {
    return this.get('playlist').indexOf(this.get('lastUpdate.ytid'));
  }.property('lastUpdate.ytid', 'playlist.@each'),

  nextPlaylistId: function() {
    var idx = (this.get('currentPlaylistIdx') + 1) % (this.get('playlist.length'));
    return this.get('playlist.' + idx) || this.get('playlist.firstObject');
  }.property('currentPlaylistIdx'),

  previousPlaylistId: function() {
    var idx = (this.get('currentPlaylistIdx') - 1);
    if (idx < 0) {
      idx = this.get('playlist.length') + idx;
      idx = idx % (this.get('playlist.length'));
    }
    return this.get('playlist.' + idx);
  }.property('currentPlaylistIdx'),

  playNext: function() {
    this.set('autoplay', true);
    this.set('lastUpdate.ytid', this.get('nextPlaylistId'));
  },

  playPrevious: function() {
    this.set('autoplay', true);
    this.set('lastUpdate.ytid', this.get('previousPlaylistId'));
  },

  socket: function() {
    var id = this.get('threadId');
    var client = this.get('snoocore.client');
    var self = this;
    return Ember.RSVP.hash({
      /*listing: client('/live/' + id + '.json').listing({
      }).then(function(slice) {
        console.log('slice', slice);
        return (slice.children || []).getEach('data');
      }).then(function(listing) {
        listing = listing.reverse();
        listing.slice(0, 10).forEach(function(item) {
          console.log('triggering item', item);
          self.trigger('didReceiveSocketEvent', item);
        });
        return listing;
      }),*/
      url: client('/live/' + id + '/about.json').get().then(function(result) {
        return result.data.websocket_url;
      })
    }).then(function(hash) {
      var ws = new WebSocket(hash.url);
      ws.onopen = function() {
      };
      ws.onerror = function(e) {
        console.log('socket error', e);
      };
      ws.onclose = function() {
        console.log('socket close');
      };
      ws.onmessage = function(evt) {
        Ember.run(function() {
          var data = JSON.parse(evt.data);
          if (!data || !data.payload ||  !data.payload.data) {return;}
          self.trigger('didReceiveSocketEvent', data.payload.data);
        });
      };
    });
  }.property('threadId', 'snoocore.isLoggedIn'),

  didReceiveSocketEvent: function(data) {
    try {
    var bot = this.get('snoocore.bot');
    var self = this;
    var lines = data.body.split('\n').map(function(line) {
      return line.trim();
    }).without('');
    var link = lines[0];
    var parts = link.split('/');
    var id = parts.pop();
    var slug = parts.pop();
    var postId = parts.pop();
    return bot('/api/info').get({
      id: 't3_' + postId + ',t1_' + id
    }).then(function(result) {
      var update = {
        url: link,
        post: Ember.get(result, 'data.children.0.data'),
        comment: Ember.get(result, 'data.children.1.data'),
        ytid: self.get('lastUpdate.ytid')
      };
      self.get('updates').insertAt(0, update);
      self.set('lastUpdate', update);
    });
    } catch(e) {console.error(e);}
  }.on('didReceiveSocketEvent'),

  connectSocket: function() {
    this.get('socket');
  }.on('init')
});
