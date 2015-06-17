import Ember from 'ember';
import LiveSocketMixin from 'snew/mixins/live-socket';

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
var playlist = shuffle(["YylGLV_nANU","jE7Zv6d-HUA","m3dicKNdKa8","E0E0ynyIUsg","rfdmRR623BY","QzDzt9lGwhM","6VF5P7qLaEQ","B9856_xv8gc","OgtQj8O92eI","3cZ-nAfSkW4","ZAAzMeKVErw","djE-BLrdDDc","bwDpAfFzcRQ","Vi2IQNs8hlE","d696t3yALAY","DSaSw3dH5Y8","nsTLUl2Ywus","6Whgn_iE5uc","YrRhnaFaBsA","LxVxQ92tkgQ","E1fzJ_AYajA","Y6ljFaKRTrI","VqdcU9ULAlA","bjasSGZd40s","Z6VrKro8djw","Vf2THIimjgQ","MYdKho_5Y9A","8fh-mlWbeMs","MUfgAbFY4CA","qBsEF7Qx09o","RijB8wnJCN0","2malAhtMmZ0","SUFSB2plwzM","zcCrd2UhORk","EFWjoQ-A1U4","POaaw_x7gvQ","Tja6_h4lT6A","78O6--THTF0","N3zwKgz8hsI","UD8tGWIqA-c","ulIOrQasR18","7Pq-S557XQU","E3WgdSeLQjw","m8eoGVfvnV8","eUA4mfDQB5k","oc6FmZCT0Zc","HQmmM_qwG4k","43iW8oB20Ps","R2F_hGwD26g","8Bd1hqHrUPU","8Zisp85CCxc","wvAnQqVJ3XQ","0dL_RaUFcoQ","_Dsh9M6qnhE","p7LElLVani4","oxIyIuhNFd4","P0-ZKaWVYSk","eV-5iNu6Sd8","nPDixDqAUh0","j3spiH1oIJE","TPOM20kgWlc","rgFQ6WmxdMs","_JZom_gVfuw","B36MkF-QU1s","-Psfn6iOfS8","Jne9t8sHpUc","ht672-wYelc","rDJu7r6OUvk","G5l3LelyCJM","OFGgbT_VasI","DBy7nVD32Mo","YR5ApYxkU-U","D-NvQ6VJYtE","jVvdZDwlPiY","x_wLVCLPx0M","-1cyCmUdDNQ","kz7-3nRoviI","eEpZY8lahvg","5T0utQ-XWGY","0J3vgcE5i2o","NRtvqT_wMeY","3PDY7qtTsVw","_ZLkV8ZEboo","U97sVsxSvw8","EFDFpS9_ZWY","tH2w6Oxx0kQ","n9qeJskx6r0","Fyhyor0yU3o","AqZceAQSJvc","RSsstXfcRWw","JdxkVQy7QLM","zMHqqXYaB8g","wWnfkrMjJEY","K8P-bxwo76o","Gh5zTCdNH_0","FvgmyaSTosg","lDQwewROGLA","_Kmiw1NmIz0","R_raXzIRgsA","rE3j_RHkqJc","wQkMuHU9huM","2MRdtXWcgIw","a8B066ZeCPA","CXZtVoQ0gqs","QvYgm5iQjQc","s6t6Yfu3HEI","V7NkbeXSXsw","jvjDr8KKtsE","SR2gR6SZC2M","enqNl7tdLR4","ib-Qiyklq-Q","rmadSGJCzo8","B7zLthh85P8","V106RGMPcHQ","R5eRqqf3880","67WI8q8KvLE","kAPyRryK1HY","u06DpcFXc4U","05etFVZasyg","N01vThrQ40Q","pROPMG471GQ","gx1OFl_y-ic","eBtv0EJUmA8","aHH9Yx9WpSU","BuJDaOVz2qY","xAWtuxhdUDE","nn5h2NZZeaI","WElvEZj0Ltw","BX_nMwYa-nw","fj-10lIrboM","VHOHsoQ_wiM","gCiemjfnNZU","Shq39kWglZ4","gtlTvW_WnAk","tMzk89bYjiQ","FPbQ6weKh-k","etyH2OUxVuQ","1plPyJdXKIY","5-mWq5B6sU0","odLL_s3UJgs","_0hTtsqiFCc","kDlAMjM-77Y","qi8KJ0boov8","GgflYKJQe5Y","pt8VYOfr8To","7F_opWg9_qI","qduwgQV051Q","sc5iTNVEOAg","95kCv10duFw","pES8SezkV8w","Ln6WQqRDrCo","3fVUU7Drv2I","8VR1rFa6S0M","8nTFjVm9sTQ","WM8bTdBs-cw","Bld_-7gzJ-o","Mqyi0Iv2CdI","3MyWVahqjAY","8r-e2NDSTuE","dvy5I2yHZTs","dg8QgUIKXHw","tvE3dYKHxwU","4KfBFdqdoZg","H8Qp38qT-xI","GV3wYPXFiBY","nYSDC3cHoZs","OlBifX0H3yg","-5bznN76xRY","MLhn9tc8Dvo","J4_wXPZ1Bnk","G6n5Oi4714o","A6c6eUeoa9Q","7E-_J5WWkoc","1aVHLL5egRY","wZpaNJqF4po","3okO9qGt7A4","FjursdqfUhM","1IqH3uliwJY","QwJ5l5etKlM","z4gcLWm-OFg","eBG7P-K-r1Y","lnNYXgV7L-c","BmIJWLgIe9Y","JdFkG6As8jc","MEJt_ujJWVA","TorwkR_cYZU","W8YAK8oMEKI","W2B-CD7jMuk","XbGs_qK2PQA","sovVYInjHjw","9nFrp7Z9wEU","jW5f5OQSdsM","5BlazElwPkA","gUhRKVIjJtw","vEc9nXErU-Y","0gXvVUg-VAE","1731xnF3hi0","rRwOhqoRKn4","jGqrvn3q1oo","uDDJvC2CGaU","IJcOWQ1rym8","NteVmdoo1yI","GNbaGJRt25s","0J2QdDbelmY","Oy-x7BLlBYg","3R7l7nDuj1o","GkEPzHyoRdY","wCQiPXDZHcc","CsxaoXHe9Xc","kMOeTLLeaDU","C-PNun-Pfb4","_0VTyTPJVfs","tAp9BKosZXs","TE3a-8zEedE","WehjMZcQqPA","EgfEVDxd7Kc","I_8rt1PSck8","3qVPNONdF58","uqZyN-w4CKE","QuL_euRslTc","gSDf2Usd8n4","pojL_35QlSI","hPmJWBurnlU","Azkef2lXW88","CO8vBVUaKvk","wj10EzNKA2M","POxMp61Ksbk","kaBljsb6oJQ","i88yCbXunXM","-KT-r2vHeMM","02njugU0H7E","JjTjtJDZomw","JeaBNAXfHfQ","7ADO4uuUJrA","ceTR67EjeyU","5PsnxDQvQpw","9rJ6MoDAlo8","a7xSvsD0r1Q","WAGGEw4TcFY","xGytDsqkQY8","9TlBTPITo1I","Kiizvj7KtsU","mXPeLctgvQI","a3sYPX17cFk","v5dyHPX8Cos","jJo0MT3wDBs","hjg39XRkjVc","XLmH79iYoVw","uuwfgXD8qV8","76LZPFUzLyw","WjeptaI2T8E","g96ZaqXR8uk","dyLSstqMvH8","RQa7SvVCdZk","tluy4lcRBKY","4YmU5tMMkjI","7lL1CW140FQ","q4EiBFUpFXg","fJuapp9SORA","zX6R9xtCnVE","BPPzYfMkXZw","Ail622yjcg0","0JoNhbWoX28","6M4_Ommfvv0","AJmjtRJCQG4","PaUwjCAFvGc","tBb4cjjj1gI","fA3Y04MnH6c","bCOIQOGXOg0","C7C7Y3IvvQ4","hPC2Fp7IT7o","jNwXFnqBzHg","lotQ5yp2lEo","EqyOs7zAb8w","mVLDs0PZ9uE","26RqwXEFpLU","1rorneEGPso","4fk2prKnYnI","x_PrT25o8Vs","EUrDDt2UxsQ","2aljlKYesT4","PnoZ39hqctk","8gBceYJtjSs","MyjTrwOMSO4","NdWPkgtaOTw","wS_NpTClXhA","eBShN8qT4lk","Fi0-RdDuSP0","315tYkYxT1k","gAjR4_CbPpQ","9IZpw6re478","CZv_lvvIVoI","38k-qfy5Jk4","CH1XGdu-hzQ","5KbR0jg48YI","e0_JvuBpDB8","yKOlBZJ7Izs","Z0GFRcFm-aY","_Vj092UgKwQ","5FZuNxcJx-I","ZltSUBw_hW0","RPfMjL3JmkU","AuiMmpga9Qk","mZIM986oVfI","CZRH68Ib1Ko","o9mJ82x_l-E","H3meKtbKUms","g8Cuz4PPg3s","dHIrlcmHTME","r8OipmKFDeM","K7l5ZeVVoCA","Q7aOWIFgIZQ","x8A9Y1Dq_cQ","3epPMa5rq0U","65p9aYPdUX4","AEYN5w4T_aM","3c7bISLhVl8","XdcFF5ePajc","6FigprdcBGA","NJP2aNeA6XQ","Ypkv0HeUvTc","Xz60SRTdwqY","oKhsNLWoCSU","mVQpfoqsY8Q","AFaVnQXUq6g","-FuZ0YvXEvU","qORYO0atB6g","QmcconvY02Y","NIGMUAMevH0","-t1_ETuWIbE","U7zMkP-4cr0","6NXnxTNIWkc","AITNgcB77oY","BwbPRCRkMy0","AaGRQiiBQcw","Dsux5_qjYog","LHPneIEAQyI","igJ6ZeqkjOQ","IBH97ma9YiI","u__W0Qa8v0k","_6khld0NiME","HEukkVaKZeA","-7Y0ekr-3So","JsnIdx8JSBY","aTxJbW7feFY","r7T9gicSnR0","IxF0OdButkM","lAD6Obi7Cag","bTxFFWajIII","EYYdQB0mkEU","8oemawsu6AI","I_izvAbhExY","J4kk2sxiMWU","GGLmZCZ1sXY","URAqnM1PP5E","MW6E_TNgCsY","YkPhka2m_D0","LoarRnTfEFY","CeMeDihwyrg","HSeImqbV30s","V1Ar79f8aN8","Po9P6vsXWLk","uoKAYoe6Tuw","ci4EAmF1bZo","TREQGl54BU8","AIXUgtNC4Kc","0ZSe5RZ6M-w","-iiAtLFkVps","vA4IkGUcxe8","hEcjgJSqSRU","JnC88xBPkkc","jWshPH_jsjQ","hm3iwINTF90","-cJauX_q6wI","oGNOfRzDysw","UKZKl6ZRIGQ","9Q0q_s5aSlg","ST86JM1RPl0","uXNRkn7oTG0","Tuj3I8cF9GM","Et9b7LWfnxQ","NOG3eus4ZSo","CWsJcg-g1pg","AL1qHYttFz8","sFZjqVnWBhc","VMYAEHE2GrM","UclCCFNG9q4","ZdJlkxMnvyo","n3Am_n_qSUA","ClQcUyhoxTg","qQraeOG-3L8","-azgwfnZu7c","Yub7ZreDQMQ","PD-MdiUm1_Y","DmXzamLDgFk","lrJz9Dh5MsM","X_5YJoMNmXc","pqWRfd9IgRM","TuHVm-fbXM8","NoHsqCCjJFc","aAAqAnCBNKQ","i2uuRG9l1JA","-yX7PkalhZE","dscfeQOMuGw","Z8S0_DppB14","kIDWgqDBNXA","NBLZ2PBJHjg","MiZ27hOqx8w","G8-5NpCXwEE","ZQIqTFKM7Ws","m4WgpEs74Hs","efvmPF9UxJ4","Nw2jNvnTZGI","S0t4pyuEe7E","tVlkxrNlp10","UzdHlN_eVSw","5Gc9pviBlJA"]);

export default Ember.Service.extend(LiveSocketMixin, {
  snoocore: Ember.inject.service(),
  liveThreadId: 'v009fwibxbpb',

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

  didReceiveSocketEvent: function(data) {
    try {
      var bot = this.get('snoocore.bot');
      var post = JSON.parse(data.body.trim());
      console.log('post', post);
      var update = {
        post: post,
        ytid: this.get('lastUpdate.ytid')
      };
      this.get('updates').insertAt(0, update);
      this.set('lastUpdate', update);
    } catch(e) {console.error(e);}
  }.on('didReceiveSocketEvent'),

  connectSocket: function() {
    //this.get('socket');
  }.on('init')
});
