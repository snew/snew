/**
 * This is freedom.js. - https://freedomjs.org
 *
 * Copyright 2014 The freedom.js authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @license apache2.0
 * @see https://freedomjs.org
 * @version 0.6.22
 */
 
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [{"name":"console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.echo","api":{"setup":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"message":{"type":"event","value":"string"}}},{"name":"core","api":{"createChannel":{"type":"method","value":[],"ret":{"channel":"proxy","identifier":"string"}},"bindChannel":{"type":"method","value":["string"],"ret":"proxy"},"getId":{"type":"method","value":[],"ret":["array","string"]},"getLogger":{"type":"method","value":["string"],"ret":"proxy"}}},{"name":"core.oauth","api":{"initiateOAuth":{"type":"method","value":[["array","string"]],"ret":{"redirect":"string","state":"string"},"err":{"errcode":"string","message":"string"}},"launchAuthFlow":{"type":"method","value":["string",{"redirect":"string","state":"string"}],"ret":"string","err":{"errcode":"string","message":"string"}}}},{"name":"core.peerconnection","api":{"setup":{"type":"method","value":["string","string",["array","string"],"boolean"]},"send":{"type":"method","value":[{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}]},"onReceived":{"type":"event","value":{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}},"openDataChannel":{"type":"method","value":["string"]},"closeDataChannel":{"type":"method","value":["string"]},"onOpenDataChannel":{"type":"event","value":{"channelId":"string"}},"onCloseDataChannel":{"type":"event","value":{"channelId":"string"}},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"getInfo":{"type":"method","value":[],"ret":"string"},"createOffer":{"type":"method","value":[{"offerToReceiveVideo":"number","offerToReceiveAudio":"number","voiceActivityDetection":"boolean","iceRestart":"boolean"}],"ret":{"type":"string","sdp":"string"}},"close":{"type":"method","value":[]},"onClose":{"type":"event","value":{}}}},{"name":"core.rtcdatachannel","api":{"constructor":{"value":["string"]},"getLabel":{"type":"method","value":[],"ret":"string"},"getOrdered":{"type":"method","value":[],"ret":"boolean"},"getMaxPacketLifeTime":{"type":"method","value":[],"ret":"number"},"getMaxRetransmits":{"type":"method","value":[],"ret":"number"},"getProtocol":{"type":"method","value":[],"ret":"string"},"getNegotiated":{"type":"method","value":[],"ret":"boolean"},"getId":{"type":"method","value":[],"ret":"number"},"getReadyState":{"type":"method","value":[],"ret":"string"},"getBufferedAmount":{"type":"method","value":[],"ret":"number"},"onopen":{"type":"event","value":[]},"onerror":{"type":"event","value":[]},"onclose":{"type":"event","value":[]},"close":{"type":"method","value":[]},"onmessage":{"type":"event","value":{"text":"string","buffer":"buffer"}},"getBinaryType":{"type":"method","value":[],"ret":"string"},"setBinaryType":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"sendBuffer":{"type":"method","value":["buffer"]}}},{"name":"core.rtcpeerconnection","api":{"constructor":{"value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}]},"createOffer":{"type":"method","value":[{"offerToReceiveAudio":"number","offerToReceiveVideo":"number","iceRestart":"boolean","voiceActivityDetection":"boolean"}],"ret":{"type":"string","sdp":"string"}},"createAnswer":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setLocalDescription":{"type":"method","value":[{"type":"string","sdp":"string"}]},"getLocalDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setRemoteDescription":{"type":"method","value":[{"type":"string","sdp":"string"}],"ret":{}},"getRemoteDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"getSignalingState":{"type":"method","value":[],"ret":"string"},"updateIce":{"type":"method","value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}],"ret":{}},"addIceCandidate":{"type":"method","value":[{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}],"ret":{}},"getIceGatheringState":{"type":"method","value":[],"ret":"string"},"getIceConnectionState":{"type":"method","value":[],"ret":"string"},"getConfiguration":{"type":"method","value":[],"ret":{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}},"getLocalStreams":{"type":"method","value":[],"ret":["array","string"]},"getRemoteStreams":{"type":"method","value":[],"ret":["array","string"]},"getStreamById":{"type":"method","value":["string"],"ret":"string"},"addStream":{"type":"method","value":["string"],"ret":{}},"removeStream":{"type":"method","value":["string"],"ret":{}},"close":{"type":"method","value":[],"ret":{}},"createDataChannel":{"type":"method","value":["string",{"ordered":"boolean","maxPacketLifeTime":"number","maxRetransmits":"number","protocol":"string","negotiated":"boolean","id":"number"}],"ret":"string"},"ondatachannel":{"type":"event","value":{"channel":"string"}},"getStats":{"type":"method","value":["string"],"ret":"object"},"onnegotiationneeded":{"type":"event","value":[]},"onicecandidate":{"type":"event","value":{"candidate":{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}}},"onsignalingstatechange":{"type":"event","value":[]},"onaddstream":{"type":"event","value":{"stream":"number"}},"onremovestream":{"type":"event","value":{"stream":"number"}},"oniceconnectionstatechange":{"type":"event","value":[]}}},{"name":"core.storage","api":{"keys":{"type":"method","value":[],"ret":["array","string"]},"get":{"type":"method","value":["string"],"ret":"string"},"set":{"type":"method","value":["string","string"],"ret":"string"},"remove":{"type":"method","value":["string"],"ret":"string"},"clear":{"type":"method","value":[]}}},{"name":"core.tcpsocket","api":{"constructor":{"value":["number"]},"getInfo":{"type":"method","value":[],"ret":{"connected":"boolean","localAddress":"string","localPort":"number","peerAddress":"string","peerPort":"number"}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_CONNECTED":"Socket already connected","INVALID_ARGUMENT":"Invalid argument","TIMED_OUT":"Timed out","NOT_CONNECTED":"Socket not connected","NETWORK_CHANGED":"Network changed","CONNECTION_CLOSED":"Connection closed gracefully","CONNECTION_RESET":"Connection reset","CONNECTION_REFUSED":"Connection refused","CONNECTION_FAILED":"Connection failed","NAME_NOT_RESOLVED":"DNS lookup failed","INTERNET_DISCONNECTED":"Cannot reach any network","ADDRESS_INVALID":"Invalid address","ADDRESS_UNREACHABLE":"No route to host","HOST_UNREACHABLE":"SOCKS proxy server could not reach host"}},"close":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onDisconnect":{"type":"event","value":{"errcode":"string","message":"string"}},"connect":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"secure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"pause":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"resume":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"prepareSecure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"write":{"type":"method","value":["buffer"],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"data":"buffer"}},"listen":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"onConnection":{"type":"event","value":{"socket":"number","host":"string","port":"number"}}}},{"name":"core.udpsocket","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_BOUND":"Socket already bound","INVALID_ARGUMENT":"Invalid argument","NETWORK_CHANGED":"Network changed","SNED_FAILED":"Send failed"}},"bind":{"type":"method","value":["string","number"],"ret":[],"err":{"errcode":"string","message":"string"}},"getInfo":{"type":"method","value":[],"ret":{"localAddress":"string","localPort":"number"}},"sendTo":{"type":"method","value":["buffer","string","number"],"ret":"number","err":{"errcode":"string","message":"string"}},"destroy":{"type":"method","value":[]},"onData":{"type":"event","value":{"resultCode":"number","address":"string","port":"number","data":"buffer"}}}},{"name":"core.view","api":{"show":{"type":"method","value":["string"]},"isSecure":{"type":"method","value":[],"ret":"boolean"},"close":{"type":"method","value":[]},"postMessage":{"type":"method","value":["object"]},"message":{"type":"event","value":"object"},"onClose":{"type":"event","value":[]}}},{"name":"core.websocket","api":{"constructor":{"value":["string",["array","string"]]},"send":{"type":"method","value":[{"text":"string","binary":"blob","buffer":"buffer"}],"err":{"errcode":"string","message":"string"}},"getReadyState":{"type":"method","value":[],"ret":"number"},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"close":{"type":"method","value":["number","string"],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"text":"string","binary":"blob","buffer":"buffer"}},"onOpen":{"type":"event","value":[]},"onError":{"type":"event","value":{"errcode":"string","message":"string"}},"onClose":{"type":"event","value":{"code":"number","reason":"string","wasClean":"boolean"}}}},{"name":"core.xhr","api":{"open":{"type":"method","value":["string","string","boolean","string","string"],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":[{"string":"string","buffer":"buffer"}]},"abort":{"type":"method","value":[]},"getResponseHeader":{"type":"method","value":["string"],"ret":"string"},"getAllResponseHeaders":{"type":"method","value":[],"ret":"string"},"setRequestHeader":{"type":"method","value":["string","string"]},"overrideMimeType":{"type":"method","value":["string"]},"getReadyState":{"type":"method","value":[],"ret":"number"},"getResponse":{"type":"method","value":[],"ret":{"string":"string","buffer":"buffer","object":"object"}},"getResponseText":{"type":"method","value":[],"ret":"string"},"getResponseURL":{"type":"method","value":[],"ret":"string"},"getResponseType":{"type":"method","value":[],"ret":"string"},"setResponseType":{"type":"method","value":["string"]},"getStatus":{"type":"method","value":[],"ret":"number"},"getStatusText":{"type":"method","value":[],"ret":"string"},"getTimeout":{"type":"method","value":[],"ret":"number"},"setTimeout":{"type":"method","value":["number"]},"getWithCredentials":{"type":"method","value":[],"ret":"boolean"},"setWithCredentials":{"type":"method","value":["boolean"]},"onloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onerror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"ontimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onreadystatechange":{"type":"event","value":{}},"onuploadloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploaderror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadtimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadreadystatechange":{"type":"event","value":{}}}},{"name":"social","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"User is currently offline","MALFORMEDPARAMETERS":"Parameters are malformed","LOGIN_BADCREDENTIALS":"Error authenticating with server","LOGIN_FAILEDCONNECTION":"Error connecting to server","LOGIN_ALREADYONLINE":"User is already logged in","LOGIN_OAUTHERROR":"OAuth Error","SEND_INVALIDDESTINATION":"Message sent to an invalid destination"}},"STATUS":{"type":"constant","value":{"OFFLINE":"OFFLINE","ONLINE":"ONLINE","ONLINE_WITH_OTHER_APP":"ONLINE_WITH_OTHER_APP"}},"login":{"type":"method","value":[{"agent":"string","version":"string","url":"string","interactive":"boolean","rememberLogin":"boolean"}],"ret":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"err":{"errcode":"string","message":"string"}},"clearCachedCredentials":{"type":"method","value":[]},"getClients":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"getUsers":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"sendMessage":{"type":"method","value":["string","string"],"err":{"errcode":"string","message":"string"}},"logout":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"from":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"message":"string"}},"onUserProfile":{"type":"event","value":{"userId":"string","lastUpdated":"number","name":"string","url":"string","imageData":"string"}},"onClientState":{"type":"event","value":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"}}}},{"name":"storage","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","string"],"ret":"string","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"storebuffer","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","buffer"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"transport","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"setup":{"type":"method","value":["string","proxy"],"ret":[],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":["string","buffer"],"ret":[],"err":{"errcode":"string","message":"string"}},"close":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"tag":"string","data":"buffer"}},"onClose":{"type":"event","value":[]}}}];

},{}],2:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.0.1
 */

(function() {
    "use strict";

    function $$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function $$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function $$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var $$utils$$_isArray;

    if (!Array.isArray) {
      $$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      $$utils$$_isArray = Array.isArray;
    }

    var $$utils$$isArray = $$utils$$_isArray;
    var $$utils$$now = Date.now || function() { return new Date().getTime(); };
    function $$utils$$F() { }

    var $$utils$$o_create = (Object.create || function (o) {
      if (arguments.length > 1) {
        throw new Error('Second argument not supported');
      }
      if (typeof o !== 'object') {
        throw new TypeError('Argument must be an object');
      }
      $$utils$$F.prototype = o;
      return new $$utils$$F();
    });

    var $$asap$$len = 0;

    var $$asap$$default = function asap(callback, arg) {
      $$asap$$queue[$$asap$$len] = callback;
      $$asap$$queue[$$asap$$len + 1] = arg;
      $$asap$$len += 2;
      if ($$asap$$len === 2) {
        // If len is 1, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        $$asap$$scheduleFlush();
      }
    };

    var $$asap$$browserGlobal = (typeof window !== 'undefined') ? window : {};
    var $$asap$$BrowserMutationObserver = $$asap$$browserGlobal.MutationObserver || $$asap$$browserGlobal.WebKitMutationObserver;

    // test for web worker but not in IE10
    var $$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function $$asap$$useNextTick() {
      return function() {
        process.nextTick($$asap$$flush);
      };
    }

    function $$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new $$asap$$BrowserMutationObserver($$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function $$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = $$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function $$asap$$useSetTimeout() {
      return function() {
        setTimeout($$asap$$flush, 1);
      };
    }

    var $$asap$$queue = new Array(1000);

    function $$asap$$flush() {
      for (var i = 0; i < $$asap$$len; i+=2) {
        var callback = $$asap$$queue[i];
        var arg = $$asap$$queue[i+1];

        callback(arg);

        $$asap$$queue[i] = undefined;
        $$asap$$queue[i+1] = undefined;
      }

      $$asap$$len = 0;
    }

    var $$asap$$scheduleFlush;

    // Decide what async method to use to triggering processing of queued callbacks:
    if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
      $$asap$$scheduleFlush = $$asap$$useNextTick();
    } else if ($$asap$$BrowserMutationObserver) {
      $$asap$$scheduleFlush = $$asap$$useMutationObserver();
    } else if ($$asap$$isWorker) {
      $$asap$$scheduleFlush = $$asap$$useMessageChannel();
    } else {
      $$asap$$scheduleFlush = $$asap$$useSetTimeout();
    }

    function $$$internal$$noop() {}
    var $$$internal$$PENDING   = void 0;
    var $$$internal$$FULFILLED = 1;
    var $$$internal$$REJECTED  = 2;
    var $$$internal$$GET_THEN_ERROR = new $$$internal$$ErrorObject();

    function $$$internal$$selfFullfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function $$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.')
    }

    function $$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        $$$internal$$GET_THEN_ERROR.error = error;
        return $$$internal$$GET_THEN_ERROR;
      }
    }

    function $$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function $$$internal$$handleForeignThenable(promise, thenable, then) {
       $$asap$$default(function(promise) {
        var sealed = false;
        var error = $$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            $$$internal$$resolve(promise, value);
          } else {
            $$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          $$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          $$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function $$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === $$$internal$$FULFILLED) {
        $$$internal$$fulfill(promise, thenable._result);
      } else if (promise._state === $$$internal$$REJECTED) {
        $$$internal$$reject(promise, thenable._result);
      } else {
        $$$internal$$subscribe(thenable, undefined, function(value) {
          $$$internal$$resolve(promise, value);
        }, function(reason) {
          $$$internal$$reject(promise, reason);
        });
      }
    }

    function $$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        $$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = $$$internal$$getThen(maybeThenable);

        if (then === $$$internal$$GET_THEN_ERROR) {
          $$$internal$$reject(promise, $$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          $$$internal$$fulfill(promise, maybeThenable);
        } else if ($$utils$$isFunction(then)) {
          $$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          $$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function $$$internal$$resolve(promise, value) {
      if (promise === value) {
        $$$internal$$reject(promise, $$$internal$$selfFullfillment());
      } else if ($$utils$$objectOrFunction(value)) {
        $$$internal$$handleMaybeThenable(promise, value);
      } else {
        $$$internal$$fulfill(promise, value);
      }
    }

    function $$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      $$$internal$$publish(promise);
    }

    function $$$internal$$fulfill(promise, value) {
      if (promise._state !== $$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = $$$internal$$FULFILLED;

      if (promise._subscribers.length === 0) {
      } else {
        $$asap$$default($$$internal$$publish, promise);
      }
    }

    function $$$internal$$reject(promise, reason) {
      if (promise._state !== $$$internal$$PENDING) { return; }
      promise._state = $$$internal$$REJECTED;
      promise._result = reason;

      $$asap$$default($$$internal$$publishRejection, promise);
    }

    function $$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + $$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + $$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        $$asap$$default($$$internal$$publish, parent);
      }
    }

    function $$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          $$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function $$$internal$$ErrorObject() {
      this.error = null;
    }

    var $$$internal$$TRY_CATCH_ERROR = new $$$internal$$ErrorObject();

    function $$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        $$$internal$$TRY_CATCH_ERROR.error = e;
        return $$$internal$$TRY_CATCH_ERROR;
      }
    }

    function $$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = $$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = $$$internal$$tryCatch(callback, detail);

        if (value === $$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          $$$internal$$reject(promise, $$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== $$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        $$$internal$$resolve(promise, value);
      } else if (failed) {
        $$$internal$$reject(promise, error);
      } else if (settled === $$$internal$$FULFILLED) {
        $$$internal$$fulfill(promise, value);
      } else if (settled === $$$internal$$REJECTED) {
        $$$internal$$reject(promise, value);
      }
    }

    function $$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          $$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          $$$internal$$reject(promise, reason);
        });
      } catch(e) {
        $$$internal$$reject(promise, e);
      }
    }

    function $$$enumerator$$makeSettledResult(state, position, value) {
      if (state === $$$internal$$FULFILLED) {
        return {
          state: 'fulfilled',
          value: value
        };
      } else {
        return {
          state: 'rejected',
          reason: value
        };
      }
    }

    function $$$enumerator$$Enumerator(Constructor, input, abortOnReject, label) {
      this._instanceConstructor = Constructor;
      this.promise = new Constructor($$$internal$$noop, label);
      this._abortOnReject = abortOnReject;

      if (this._validateInput(input)) {
        this._input     = input;
        this.length     = input.length;
        this._remaining = input.length;

        this._init();

        if (this.length === 0) {
          $$$internal$$fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate();
          if (this._remaining === 0) {
            $$$internal$$fulfill(this.promise, this._result);
          }
        }
      } else {
        $$$internal$$reject(this.promise, this._validationError());
      }
    }

    $$$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return $$utils$$isArray(input);
    };

    $$$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    $$$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    var $$$enumerator$$default = $$$enumerator$$Enumerator;

    $$$enumerator$$Enumerator.prototype._enumerate = function() {
      var length  = this.length;
      var promise = this.promise;
      var input   = this._input;

      for (var i = 0; promise._state === $$$internal$$PENDING && i < length; i++) {
        this._eachEntry(input[i], i);
      }
    };

    $$$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var c = this._instanceConstructor;
      if ($$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== $$$internal$$PENDING) {
          entry._onerror = null;
          this._settledAt(entry._state, i, entry._result);
        } else {
          this._willSettleAt(c.resolve(entry), i);
        }
      } else {
        this._remaining--;
        this._result[i] = this._makeResult($$$internal$$FULFILLED, i, entry);
      }
    };

    $$$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var promise = this.promise;

      if (promise._state === $$$internal$$PENDING) {
        this._remaining--;

        if (this._abortOnReject && state === $$$internal$$REJECTED) {
          $$$internal$$reject(promise, value);
        } else {
          this._result[i] = this._makeResult(state, i, value);
        }
      }

      if (this._remaining === 0) {
        $$$internal$$fulfill(promise, this._result);
      }
    };

    $$$enumerator$$Enumerator.prototype._makeResult = function(state, i, value) {
      return value;
    };

    $$$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      $$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt($$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt($$$internal$$REJECTED, i, reason);
      });
    };

    var $$promise$all$$default = function all(entries, label) {
      return new $$$enumerator$$default(this, entries, true /* abort on reject */, label).promise;
    };

    var $$promise$race$$default = function race(entries, label) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor($$$internal$$noop, label);

      if (!$$utils$$isArray(entries)) {
        $$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        $$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        $$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === $$$internal$$PENDING && i < length; i++) {
        $$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    };

    var $$promise$resolve$$default = function resolve(object, label) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor($$$internal$$noop, label);
      $$$internal$$resolve(promise, object);
      return promise;
    };

    var $$promise$reject$$default = function reject(reason, label) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor($$$internal$$noop, label);
      $$$internal$$reject(promise, reason);
      return promise;
    };

    var $$es6$promise$promise$$counter = 0;

    function $$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function $$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var $$es6$promise$promise$$default = $$es6$promise$promise$$Promise;

    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise’s eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function $$es6$promise$promise$$Promise(resolver) {
      this._id = $$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if ($$$internal$$noop !== resolver) {
        if (!$$utils$$isFunction(resolver)) {
          $$es6$promise$promise$$needsResolver();
        }

        if (!(this instanceof $$es6$promise$promise$$Promise)) {
          $$es6$promise$promise$$needsNew();
        }

        $$$internal$$initializePromise(this, resolver);
      }
    }

    $$es6$promise$promise$$Promise.all = $$promise$all$$default;
    $$es6$promise$promise$$Promise.race = $$promise$race$$default;
    $$es6$promise$promise$$Promise.resolve = $$promise$resolve$$default;
    $$es6$promise$promise$$Promise.reject = $$promise$reject$$default;

    $$es6$promise$promise$$Promise.prototype = {
      constructor: $$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection) {
        var parent = this;
        var state = parent._state;

        if (state === $$$internal$$FULFILLED && !onFulfillment || state === $$$internal$$REJECTED && !onRejection) {
          return this;
        }

        var child = new this.constructor($$$internal$$noop);
        var result = parent._result;

        if (state) {
          var callback = arguments[state - 1];
          $$asap$$default(function(){
            $$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          $$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };

    var $$es6$promise$polyfill$$default = function polyfill() {
      var local;

      if (typeof global !== 'undefined') {
        local = global;
      } else if (typeof window !== 'undefined' && window.document) {
        local = window;
      } else {
        local = self;
      }

      var es6PromiseSupport =
        "Promise" in local &&
        // Some of these methods are missing from
        // Firefox/Chrome experimental implementations
        "resolve" in local.Promise &&
        "reject" in local.Promise &&
        "all" in local.Promise &&
        "race" in local.Promise &&
        // Older version of the spec had a resolver object
        // as the arg rather than a function
        (function() {
          var resolve;
          new local.Promise(function(r) { resolve = r; });
          return $$utils$$isFunction(resolve);
        }());

      if (!es6PromiseSupport) {
        local.Promise = $$es6$promise$promise$$default;
      }
    };

    var es6$promise$umd$$ES6Promise = {
      'Promise': $$es6$promise$promise$$default,
      'polyfill': $$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = es6$promise$umd$$ES6Promise;
    }
}).call(this);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
/*jslint node:true*/
/*globals RTCPeerConnection, mozRTCPeerConnection, webkitRTCPeerConnection */
/*globals RTCSessionDescription, mozRTCSessionDescription */
/*globals RTCIceCandidate, mozRTCIceCandidate */
'use strict';

var myRTCPeerConnection = null;
var myRTCSessionDescription = null;
var myRTCIceCandidate = null;

var renameIceURLs = function (config) {
  if (!config) {
    return;
  }
  if (!config.iceServers) {
    return config;
  }
  config.iceServers.forEach(function (server) {
    server.url = server.urls;
    delete server.urls;
  });
  return config;
};

var fixChromeStatsResponse = function(response) {
  var standardReport = {};
  var reports = response.result();
  reports.forEach(function(report) {
    var standardStats = {
      id: report.id,
      timestamp: report.timestamp,
      type: report.type
    };
    report.names().forEach(function(name) {
      standardStats[name] = report.stat(name);
    });
    standardReport[standardStats.id] = standardStats;
  });

  return standardReport;
};

var sessionHasData = function(desc) {
  if (!desc) {
    return false;
  }
  var hasData = false;
  var prefix = 'm=application';
  desc.sdp.split('\n').forEach(function(line) {
    if (line.slice(0, prefix.length) === prefix) {
      hasData = true;
    }
  });
  return hasData;
};

// Unify PeerConnection Object.
if (typeof RTCPeerConnection !== 'undefined') {
  myRTCPeerConnection = RTCPeerConnection;
} else if (typeof mozRTCPeerConnection !== 'undefined') {
  myRTCPeerConnection = function (configuration, constraints) {
    // Firefox uses 'url' rather than 'urls' for RTCIceServer.urls
    var pc = new mozRTCPeerConnection(renameIceURLs(configuration), constraints);

    // Firefox doesn't fire 'onnegotiationneeded' when a data channel is created
    // https://bugzilla.mozilla.org/show_bug.cgi?id=840728
    var dataEnabled = false;
    var boundCreateDataChannel = pc.createDataChannel.bind(pc);
    pc.createDataChannel = function(label, dataChannelDict) {
      var dc = boundCreateDataChannel(label, dataChannelDict);
      if (!dataEnabled) {
        dataEnabled = true;
        if (pc.onnegotiationneeded &&
            !sessionHasData(pc.localDescription) &&
            !sessionHasData(pc.remoteDescription)) {
          var event = new Event('negotiationneeded');
          pc.onnegotiationneeded(event);
        }
      }
      return dc;
    };

    return pc;
  };
} else if (typeof webkitRTCPeerConnection !== 'undefined') {
  // Chrome returns a nonstandard, non-JSON-ifiable response from getStats.
  myRTCPeerConnection = function(configuration, constraints) {
    var pc = new webkitRTCPeerConnection(configuration, constraints);
    var boundGetStats = pc.getStats.bind(pc);
    pc.getStats = function(selector, successCallback, failureCallback) {
      var successCallbackWrapper = function(chromeStatsResponse) {
        successCallback(fixChromeStatsResponse(chromeStatsResponse));
      };
      // Chrome also takes its arguments in the wrong order.
      boundGetStats(successCallbackWrapper, failureCallback, selector);
    };
    return pc;
  };
}

// Unify SessionDescrption Object.
if (typeof RTCSessionDescription !== 'undefined') {
  myRTCSessionDescription = RTCSessionDescription;
} else if (typeof mozRTCSessionDescription !== 'undefined') {
  myRTCSessionDescription = mozRTCSessionDescription;
}

// Unify IceCandidate Object.
if (typeof RTCIceCandidate !== 'undefined') {
  myRTCIceCandidate = RTCIceCandidate;
} else if (typeof mozRTCIceCandidate !== 'undefined') {
  myRTCIceCandidate = mozRTCIceCandidate;
}

exports.RTCPeerConnection = myRTCPeerConnection;
exports.RTCSessionDescription = myRTCSessionDescription;
exports.RTCIceCandidate = myRTCIceCandidate;

},{}],5:[function(require,module,exports){
(function (process){
/*globals process, console */
/*jslint indent:2,sloppy:true, node:true */
var util = require('../../src/util');

/**
 * A freedom.js logging provider that logs to chrome, firefox, and node consoles.
 * @Class Logger_console
 * @constructor
 * @private
 * @param {config: Object} cap Capabilities - console requires global config.
 */
var Logger_console = function (cap) {
  this.level = (cap.config && cap.config.debug) || 'log';
  this.console = (cap.config && cap.config.global.console);
  util.handleEvents(this);
};


/**
 * Logging levels, for filtering output.
 * @private
 * @static
 */
Logger_console.level = {
  "debug": 0,
  "info": 1,
  "log": 2,
  "warn": 3,
  "error": 4
};

/**
 * Print a message with appropriate formatting.
 * @method print
 */
Logger_console.prototype.print = function (severity, source, msg) {
  var arr = msg;
  if (typeof this.console === 'undefined' ||
      this.console.freedom === true) {
    return;
  }
  if (typeof arr === 'string') {
    arr = [arr];
  }
  
  if (Logger_console.level[this.level] !== undefined &&
      Logger_console.level[severity] < Logger_console.level[this.level]) {
    return;
  }
  
  if (typeof process !== 'undefined' &&
      {}.toString.call(process) === '[object process]' && source) {
    arr.unshift('\x1B[39m');
    arr.unshift('\x1B[31m' + source);
    /*jslint nomen: true*/
    // Firefox in JSM context.
    // see: http://mxr.mozilla.org/mozilla-release/source/toolkit/devtools/Console.jsm
    } else if (this.console.maxLogLevel && source) {
      if (!this.console.freedomDump) {
        this.console.freedomDump = this.console.dump;
        this.console.dump = function() {};
      }
      this.console.freedomDump('{' + source + '}.' + severity + ': ' +
          arr.join(' ') + '\n');
      arr.unshift(source.toUpperCase());
  // Firefox in browser context.
  } else if (this.console.__mozillaConsole__ && source) {
    arr.unshift(source.toUpperCase());
    /*jslint nomen: false*/
  } else if (source) {
    arr.unshift('color: red');
    arr.unshift('%c ' + source);
  }
  if (!this.console[severity] && this.console.log) {
    severity = 'log';
  }
  this.console[severity].apply(this.console, arr);
};

/**
 * Log a message to the console.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.log = function (source, msg, continuation) {
  this.print('log', source, msg);
  continuation();
};

/**
 * Log a message to the console with debug priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.debug = function (source, msg, continuation) {
  this.print('debug', source, msg);
  continuation();
};

/**
 * Log a message to the console with info priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.info = function (source, msg, continuation) {
  this.print('info', source, msg);
  continuation();
};

/**
 * Log a message to the console with warn priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.warn = function (source, msg, continuation) {
  this.print('warn', source, msg);
  continuation();
};

/**
 * Log a message to the console with error priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.error = function (source, msg, continuation) {
  this.print('error', source, msg);
  continuation();
};

/** REGISTER PROVIDER **/
exports.provider = Logger_console;
exports.name = 'core.console';
exports.flags = {config: true};

}).call(this,require('_process'))

},{"../../src/util":35,"_process":3}],6:[function(require,module,exports){
/*globals console */
/*jslint indent:2,white:true,sloppy:true, node:true */
var util = require('../../src/util');

/**
 * A minimal provider implementing the core.echo interface for interaction with
 * custom channels.  Primarily used for testing the robustness of the custom
 * channel implementation.
 * @Class Echo_unprivileged
 * @constructor
 * @param {module:Module} cap The module creating this provider.
 */
var Echo_unprivileged = function(cap, dispatchEvent) {
  this.mod = cap.module;
  this.dispatchEvent = dispatchEvent;
  util.handleEvents(this);

  // The Core object for managing channels.
  this.mod.once('core', function(Core) {
    this.core = new Core();
  }.bind(this));
  this.mod.emit(this.mod.controlChannel, {
    type: 'core request delegated to echo',
    request: 'core'
  });
};

/**
 * Setup the provider to echo on a specific proxy. Subsequent messages
 * From the custom channel bound here will be re-emitted as a message
 * from the provider.  Subsequent messages to the provider will be
 * emitted on the bound channel.
 * @param {Object} proxy The identifier for the custom channel to bind.
 * @param {Function} continuation Function to call when setup is complete.
 * @method setup
 */
Echo_unprivileged.prototype.setup = function(proxy, continuation) {
  continuation();
  if (!this.core) {
    this.dispatchEvent('message', 'no core available to setup proxy with at echo');
    return;
  }

  this.core.bindChannel(proxy, function(chan) {
    if (this.chan) {
      this.chan.close();
    }
    this.chan = chan;
    this.chan.onClose(function() {
      delete this.chan;
    }.bind(this));
    this.dispatchEvent('message', 'channel bound to echo');
    this.chan.on('message', function(m) {
      this.dispatchEvent('message', 'from custom channel: ' + m);
    }.bind(this));
  }.bind(this));
};

/**
 * Send a message to the bound custom channel.
 * @param {String} str The string to send.
 * @param {Function} continuation Function to call when sending is complete.
 * @method send
 */
Echo_unprivileged.prototype.send = function(str, continuation) {
  continuation();
  if (this.chan) {
    this.chan.emit('message', str);
  } else {
    this.dispatchEvent('message', 'no channel available');
  }
};

exports.provider = Echo_unprivileged;
exports.name = "core.echo";
exports.flags = {module: true};

},{"../../src/util":35}],7:[function(require,module,exports){
/*globals console */
/*jslint indent:2,white:true,sloppy:true,node:true */

/**
 * An oAuth meta-provider allowing multiple platform-dependant
 * oAuth implementations to serve as the redirectURL for an oAuth flow.
 * The core implementations are provided in providers/oauth, and are
 * supplemented in platform-dependent repositories.
 *
 */
var OAuth = function (handlers, cap, dispatchEvent) {
  this.handlers = handlers;
  this.dispatchEvent = dispatchEvent;
  this.ongoing = {};
};

/**
 * Register oAuth handlers.
 * This method should be called before provider is used, and binds the current
 * oAuth provider to be associated with registered handlers. This is used so
 * that handlers which are registered by the user apply only the the freedom()
 * setup call they are associated with, while still being registered across
 * multiple instances of OAuth providers.
 *
 * @method register
 * @param {[constructor]} handlers
 * @private
 */
OAuth.register = function (handlers) {
  var i,
      boundHandlers = [];
  if (!handlers || !handlers.length) {
    return OAuth.reset();
  }

  for (i = 0; i < handlers.length; i += 1) {
    boundHandlers.push(new handlers[i]());
  }
  exports.provider = OAuth.bind(this, boundHandlers);
};

/**
 * Reset the oAuth provider registrations.
 * @method reset
 * @private
 */
OAuth.reset = function () {
  exports.provider = OAuth.bind(this, []);
};

/**
 * Indicate the intention to initiate an oAuth flow, allowing an appropriate
 * oAuth provider to begin monitoring for redirection.
 *
 * @method initiateOAuth
 * @param {string[]} redirectURIs - oAuth redirection URIs registered with the
 *     provider.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a value of schema: {{redirect:String, state:String}}
 *    where 'redirect' is the chosen redirect URI
 *    and 'state' is the state to pass to the URI on completion of oAuth
 */
OAuth.prototype.initiateOAuth = function (redirectURIs, continuation) {
  var promise, i, successCallback;
  successCallback = function(result) {
    this.ongoing[result.state] = this.handlers[i];
    continuation(result);
  }.bind(this);

  for (i = 0; i < this.handlers.length; i += 1) {
    if (this.handlers[i].initiateOAuth(redirectURIs, successCallback)) {
      return;
    }
  }
  //If here, we have no compatible providers
  continuation(null, {
    'errcode': 'UNKNOWN',
    'message': 'No requested redirects can be handled.'
  });
  return;
};

/**
 * oAuth client-side flow - launch the provided URL
 * This must be called after initiateOAuth with the returned state object
 *
 * @method launchAuthFlow
 * @param {String} authUrl - The URL that initiates the auth flow.
 * @param {Object.<string, string>} stateObj - The return value from initiateOAuth
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
OAuth.prototype.launchAuthFlow = function(authUrl, stateObj, continuation) {
  if (!this.ongoing.hasOwnProperty(stateObj.state)) {
    continuation(undefined, {
      'errcode': 'UNKNOWN',
      'message': 'You must begin the oAuth flow with initiateOAuth first'
    });
    return;
  }

  this.ongoing[stateObj.state].launchAuthFlow(authUrl, stateObj, continuation);
  delete this.ongoing[stateObj.state];
};

exports.register = OAuth.register;
exports.reset = OAuth.reset;
exports.provider = OAuth.bind(this, []);
exports.name = 'core.oauth';

},{}],8:[function(require,module,exports){
/*globals console, RTCPeerConnection, webkitRTCPeerConnection */
/*globals mozRTCPeerConnection, RTCSessionDescription, RTCIceCandidate */
/*globals mozRTCSessionDescription, mozRTCIceCandidate */
/*globals ArrayBuffer, Blob */
/*jslint indent:2,sloppy:true,node:true */
/**
 * DataPeer - a class that wraps peer connections and data channels.
 */
// TODO: check that Handling of pranswer is treated appropriately.
var SimpleDataPeerState = {
  DISCONNECTED: 'DISCONNECTED',
  CONNECTING: 'CONNECTING',
  CONNECTED: 'CONNECTED'
};

function SimpleDataPeer(peerName, stunServers, dataChannelCallbacks, mocks) {
  var constraints,
    config,
    i;
  this.peerName = peerName;
  this.channels = {};
  this.dataChannelCallbacks = dataChannelCallbacks;
  this.onConnectedQueue = [];

  if (typeof mocks.RTCPeerConnection !== "undefined") {
    this.RTCPeerConnection = mocks.RTCPeerConnection;
  } else if (typeof webkitRTCPeerConnection !== "undefined") {
    this.RTCPeerConnection = webkitRTCPeerConnection;
  } else if (typeof mozRTCPeerConnection !== "undefined") {
    this.RTCPeerConnection = mozRTCPeerConnection;
  } else {
    throw new Error("This environment does not appear to support RTCPeerConnection");
  }

  if (typeof mocks.RTCSessionDescription !== "undefined") {
    this.RTCSessionDescription = mocks.RTCSessionDescription;
  } else if (typeof RTCSessionDescription !== "undefined") {
    this.RTCSessionDescription = RTCSessionDescription;
  } else if (typeof mozRTCSessionDescription !== "undefined") {
    this.RTCSessionDescription = mozRTCSessionDescription;
  } else {
    throw new Error("This environment does not appear to support RTCSessionDescription");
  }

  if (typeof mocks.RTCIceCandidate !== "undefined") {
    this.RTCIceCandidate = mocks.RTCIceCandidate;
  } else if (typeof RTCIceCandidate !== "undefined") {
    this.RTCIceCandidate = RTCIceCandidate;
  } else if (typeof mozRTCIceCandidate !== "undefined") {
    this.RTCIceCandidate = mozRTCIceCandidate;
  } else {
    throw new Error("This environment does not appear to support RTCIceCandidate");
  }


  constraints = {
    optional: [{DtlsSrtpKeyAgreement: true}]
  };
  // A way to speak to the peer to send SDP headers etc.
  this.sendSignalMessage = null;

  this.pc = null;  // The peer connection.
  // Get TURN servers for the peer connection.
  config = {iceServers: []};
  for (i = 0; i < stunServers.length; i += 1) {
    config.iceServers.push({
      'url' : stunServers[i]
    });
  }
  this.pc = new this.RTCPeerConnection(config, constraints);
  // Add basic event handlers.
  this.pc.addEventListener("icecandidate",
                            this.onIceCallback.bind(this));
  this.pc.addEventListener("negotiationneeded",
                            this.onNegotiationNeeded.bind(this));
  this.pc.addEventListener("datachannel",
                            this.onDataChannel.bind(this));
  this.pc.addEventListener("signalingstatechange", function () {
    // TODO: come up with a better way to detect connection.  We start out
    // as "stable" even before we are connected.
    // TODO: this is not fired for connections closed by the other side.
    // This will be fixed in m37, at that point we should dispatch an onClose
    // event here for freedom.transport to pick up.
    if (this.pc.signalingState === "stable") {
      this.pcState = SimpleDataPeerState.CONNECTED;
      this.onConnectedQueue.map(function (callback) { callback(); });
    }
  }.bind(this));
  // This state variable is used to fake offer/answer when they are wrongly
  // requested and we really just need to reuse what we already have.
  this.pcState = SimpleDataPeerState.DISCONNECTED;

  // Note: to actually do something with data channels opened by a peer, we
  // need someone to manage "datachannel" event.
}

SimpleDataPeer.prototype.createOffer = function (constaints, continuation) {
  this.pc.createOffer(continuation, function () {
    console.error('core.peerconnection createOffer failed.');
  }, constaints);
};

SimpleDataPeer.prototype.runWhenConnected = function (func) {
  if (this.pcState === SimpleDataPeerState.CONNECTED) {
    func();
  } else {
    this.onConnectedQueue.push(func);
  }
};

SimpleDataPeer.prototype.send = function (channelId, message, continuation) {
  this.channels[channelId].send(message);
  continuation();
};

SimpleDataPeer.prototype.openDataChannel = function (channelId, continuation) {
  var dataChannel = this.pc.createDataChannel(channelId, {});
  dataChannel.onopen = function () {
    this.addDataChannel(channelId, dataChannel);
    continuation();
  }.bind(this);
  dataChannel.onerror = function (err) {
    //@(ryscheng) todo - replace with errors that work across the interface
    console.error(err);
    continuation(undefined, err);
  };
  // Firefox does not fire "negotiationneeded", so we need to
  // negotate here if we are not connected.
  // See https://bugzilla.mozilla.org/show_bug.cgi?id=840728
  if (typeof mozRTCPeerConnection !== "undefined" &&
      this.pcState === SimpleDataPeerState.DISCONNECTED) {
    this.negotiateConnection();
  }
};

SimpleDataPeer.prototype.closeChannel = function (channelId) {
  if (this.channels[channelId] !== undefined) {
    this.channels[channelId].close();
    delete this.channels[channelId];
  }
};

SimpleDataPeer.prototype.getBufferedAmount = function (channelId,
                                                       continuation) {
  if (this.channels[channelId] !== undefined) {
    var dataChannel = this.channels[channelId];
    return dataChannel.bufferedAmount;
  }
  throw new Error("No channel with id: " + channelId);
};

SimpleDataPeer.prototype.setSendSignalMessage = function (sendSignalMessageFn) {
  this.sendSignalMessage = sendSignalMessageFn;
};

// Handle a message send on the signalling channel to this peer.
SimpleDataPeer.prototype.handleSignalMessage = function (messageText) {
  //console.log(this.peerName + ": " + "handleSignalMessage: \n" + messageText);
  var json = JSON.parse(messageText),
    ice_candidate;

  // TODO: If we are offering and they are also offerring at the same time,
  // pick the one who has the lower randomId?
  // (this.pc.signalingState == "have-local-offer" && json.sdp &&
  //    json.sdp.type == "offer" && json.sdp.randomId < this.localRandomId)
  if (json.sdp) {
    // Set the remote description.
    this.pc.setRemoteDescription(
      new this.RTCSessionDescription(json.sdp),
      // Success
      function () {
        //console.log(this.peerName + ": setRemoteDescription succeeded");
        if (this.pc.remoteDescription.type === "offer") {
          this.pc.createAnswer(this.onDescription.bind(this),
                               console.error);
        }
      }.bind(this),
      // Failure
      function (e) {
        console.error(this.peerName + ": " +
            "setRemoteDescription failed:", e);
      }.bind(this)
    );
  } else if (json.candidate) {
    // Add remote ice candidate.
    //console.log(this.peerName + ": Adding ice candidate: " + JSON.stringify(json.candidate));
    ice_candidate = new this.RTCIceCandidate(json.candidate);
    this.pc.addIceCandidate(ice_candidate);
  } else {
    console.warn(this.peerName + ": " +
        "handleSignalMessage got unexpected message: ", messageText);
  }
};

// Connect to the peer by the signalling channel.
SimpleDataPeer.prototype.negotiateConnection = function () {
  this.pcState = SimpleDataPeerState.CONNECTING;
  this.pc.createOffer(
    this.onDescription.bind(this),
    function (e) {
      console.error(this.peerName + ": " +
          "createOffer failed: ", e.toString());
      this.pcState = SimpleDataPeerState.DISCONNECTED;
    }.bind(this)
  );
};

SimpleDataPeer.prototype.isClosed = function () {
  return !this.pc || this.pc.signalingState === "closed";
};

SimpleDataPeer.prototype.close = function () {
  if (!this.isClosed()) {
    this.pc.close();
  }
  //console.log(this.peerName + ": " + "Closed peer connection.");
};

SimpleDataPeer.prototype.addDataChannel = function (channelId, channel) {
  var callbacks = this.dataChannelCallbacks;
  this.channels[channelId] = channel;

  if (channel.readyState === "connecting") {
    channel.onopen = callbacks.onOpenFn.bind(this, channel, {label: channelId});
  }

  channel.onclose = callbacks.onCloseFn.bind(this, channel, {label: channelId});

  channel.onmessage = callbacks.onMessageFn.bind(this, channel,
                                                 {label: channelId});

  channel.onerror = callbacks.onErrorFn.bind(this, channel, {label: channel});
};

// When we get our description, we set it to be our local description and
// send it to the peer.
SimpleDataPeer.prototype.onDescription = function (description) {
  if (this.sendSignalMessage) {
    this.pc.setLocalDescription(
      description,
      function () {
        //console.log(this.peerName + ": setLocalDescription succeeded");
        this.sendSignalMessage(JSON.stringify({'sdp': description}));
      }.bind(this),
      function (e) {
        console.error(this.peerName + ": " +
            "setLocalDescription failed:", e);
      }.bind(this)
    );
  } else {
    console.error(this.peerName + ": " +
        "_onDescription: _sendSignalMessage is not set, so we did not " +
            "set the local description. ");
  }
};

SimpleDataPeer.prototype.onNegotiationNeeded = function (e) {
  //console.log(this.peerName + ": " + "onNegotiationNeeded",
  //            JSON.stringify(this._pc), e);
  if (this.pcState !== SimpleDataPeerState.DISCONNECTED) {
    // Negotiation messages are falsely requested for new data channels.
    //   https://code.google.com/p/webrtc/issues/detail?id=2431
    // This code is a hack to simply reset the same local and remote
    // description which will trigger the appropriate data channel open event.
    // TODO: fix/remove this when Chrome issue is fixed.
    var logSuccess = function (op) {
      return function () {
        //console.log(this.peerName + ": " + op + " succeeded ");
      }.bind(this);
    }.bind(this),
      logFail = function (op) {
        return function (e) {
          //console.log(this.peerName + ": " + op + " failed: " + e);
        }.bind(this);
      }.bind(this);
    if (this.pc.localDescription && this.pc.remoteDescription &&
        this.pc.localDescription.type === "offer") {
      this.pc.setLocalDescription(this.pc.localDescription,
                                   logSuccess("setLocalDescription"),
                                   logFail("setLocalDescription"));
      this.pc.setRemoteDescription(this.pc.remoteDescription,
                                    logSuccess("setRemoteDescription"),
                                    logFail("setRemoteDescription"));
    } else if (this.pc.localDescription && this.pc.remoteDescription &&
        this.pc.localDescription.type === "answer") {
      this.pc.setRemoteDescription(this.pc.remoteDescription,
                                    logSuccess("setRemoteDescription"),
                                    logFail("setRemoteDescription"));
      this.pc.setLocalDescription(this.pc.localDescription,
                                   logSuccess("setLocalDescription"),
                                   logFail("setLocalDescription"));
    } else {
      console.error(this.peerName + ', onNegotiationNeeded failed');
    }
    return;
  }
  this.negotiateConnection();
};

SimpleDataPeer.prototype.onIceCallback = function (event) {
  if (event.candidate) {
    // Send IceCandidate to peer.
    //console.log(this.peerName + ": " + "ice callback with candidate", event);
    if (this.sendSignalMessage) {
      this.sendSignalMessage(JSON.stringify({'candidate': event.candidate}));
    } else {
      console.warn(this.peerName + ": " + "_onDescription: _sendSignalMessage is not set.");
    }
  }
};

SimpleDataPeer.prototype.onSignalingStateChange = function () {
  //console.log(this.peerName + ": " + "onSignalingStateChange: ", this._pc.signalingState);
  if (this.pc.signalingState === "stable") {
    this.pcState = SimpleDataPeerState.CONNECTED;
    this.onConnectedQueue.map(function (callback) { callback(); });
  }
};

SimpleDataPeer.prototype.onDataChannel = function (event) {
  this.addDataChannel(event.channel.label, event.channel);
  // RTCDataChannels created by a RTCDataChannelEvent have an initial
  // state of open, so the onopen event for the channel will not
  // fire. We need to fire the onOpenDataChannel event here
  // http://www.w3.org/TR/webrtc/#idl-def-RTCDataChannelState

  // Firefox channels do not have an initial state of "open"
  // See https://bugzilla.mozilla.org/show_bug.cgi?id=1000478
  if (event.channel.readyState === "open") {
    this.dataChannelCallbacks.onOpenFn(event.channel,
                                       {label: event.channel.label});
  }
};

// _signallingChannel is a channel for emitting events back to the freedom Hub.
function PeerConnection(portModule, dispatchEvent,
                        RTCPeerConnection, RTCSessionDescription,
                        RTCIceCandidate) {
  // Channel for emitting events to consumer.
  this.dispatchEvent = dispatchEvent;

  // a (hopefully unique) ID for debugging.
  this.peerName = "p" + Math.random();

  // This is the portApp (defined in freedom/src/port-app.js). A way to speak
  // to freedom.
  this.freedomModule = portModule.module;

  // For tests we may mock out the PeerConnection and
  // SessionDescription implementations
  this.RTCPeerConnection = RTCPeerConnection;
  this.RTCSessionDescription = RTCSessionDescription;
  this.RTCIceCandidate = RTCIceCandidate;

  // This is the a channel to send signalling messages.
  this.signallingChannel = null;

  // The DataPeer object for talking to the peer.
  this.peer = null;

  // The Core object for managing channels.
  this.freedomModule.once('core', function (Core) {
    this.core = new Core();
  }.bind(this));
  this.freedomModule.emit(this.freedomModule.controlChannel, {
    type: 'core request delegated to peerconnection',
    request: 'core'
  });
}

// Start a peer connection using the given freedomChannelId as the way to
// communicate with the peer. The argument |freedomChannelId| is a way to speak
// to an identity provide to send them SDP headers negotiate the address/port to
// setup the peer to peerConnection.
//
// options: {
//   peerName: string,   // For pretty printing messages about this peer.
//   debug: boolean           // should we add extra
// }
PeerConnection.prototype.setup = function (signallingChannelId, peerName,
                                           stunServers, initiateConnection,
                                           continuation) {
  this.peerName = peerName;
  var mocks = {RTCPeerConnection: this.RTCPeerConnection,
               RTCSessionDescription: this.RTCSessionDescription,
               RTCIceCandidate: this.RTCIceCandidate},
    self = this,
    dataChannelCallbacks = {
      // onOpenFn is called at the point messages will actually get through.
      onOpenFn: function (dataChannel, info) {
        self.dispatchEvent("onOpenDataChannel",
                         { channelId: info.label});
      },
      onCloseFn: function (dataChannel, info) {
        self.dispatchEvent("onCloseDataChannel",
                         { channelId: info.label});
      },
      // Default on real message prints it to console.
      onMessageFn: function (dataChannel, info, event) {
        if (event.data instanceof ArrayBuffer) {
          self.dispatchEvent('onReceived', {
            'channelLabel': info.label,
            'buffer': event.data
          });
        } else if (event.data instanceof Blob) {
          self.dispatchEvent('onReceived', {
            'channelLabel': info.label,
            'binary': event.data
          });
        } else if (typeof (event.data) === 'string') {
          self.dispatchEvent('onReceived', {
            'channelLabel': info.label,
            'text': event.data
          });
        }
      },
      // Default on error, prints it.
      onErrorFn: function (dataChannel, info, err) {
        console.error(dataChannel.peerName + ": dataChannel(" +
                      dataChannel.dataChannel.label + "): error: ", err);
      }
    },
    channelId,
    openDataChannelContinuation;

  this.peer = new SimpleDataPeer(this.peerName, stunServers,
                                 dataChannelCallbacks, mocks);

  // Setup link between Freedom messaging and _peer's signalling.
  // Note: the signalling channel should only be sending receiveing strings.
  this.core.bindChannel(signallingChannelId, function (channel) {
    this.signallingChannel = channel;
    this.peer.setSendSignalMessage(function (msg) {
      this.signallingChannel.emit('message', msg);
    }.bind(this));
    this.signallingChannel.on('message',
        this.peer.handleSignalMessage.bind(this.peer));
    this.signallingChannel.emit('ready');
    if (!initiateConnection) {
      this.peer.runWhenConnected(continuation);
    }
  }.bind(this));

  if (initiateConnection) {
    // Setup a connection right away, then invoke continuation.
    console.log(this.peerName + ' initiating connection');
    channelId = 'hello' + Math.random().toString();
    openDataChannelContinuation = function (success, error) {
      if (error) {
        continuation(undefined, error);
      } else {
        this.closeDataChannel(channelId, continuation);
      }
    }.bind(this);
    this.openDataChannel(channelId, openDataChannelContinuation);
  }
};

PeerConnection.prototype.createOffer = function (constraints, continuation) {
  this.peer.createOffer(constraints, continuation);
};

// TODO: delay continuation until the open callback from _peer is called.
PeerConnection.prototype.openDataChannel = function (channelId, continuation) {
  this.peer.openDataChannel(channelId, continuation);
};

PeerConnection.prototype.closeDataChannel = function (channelId, continuation) {
  this.peer.closeChannel(channelId);
  continuation();
};

// Called to send a message over the given datachannel to a peer. If the data
// channel doesn't already exist, the DataPeer creates it.
PeerConnection.prototype.send = function (sendInfo, continuation) {
  var objToSend = sendInfo.text || sendInfo.buffer || sendInfo.binary;
  if (typeof objToSend === 'undefined') {
    console.error("No valid data to send has been provided.", sendInfo);
    return;
  }
  //DEBUG
  // objToSend = new ArrayBuffer(4);
  //DEBUG
  this.peer.send(sendInfo.channelLabel, objToSend, continuation);
};

PeerConnection.prototype.getBufferedAmount = function (channelId, continuation) {
  continuation(this.peer.getBufferedAmount(channelId));
};

PeerConnection.prototype.close = function (continuation) {
  if (this.peer.isClosed()) {
    // Peer already closed, run continuation without dispatching event.
    continuation();
    return;
  }
  this.peer.close();
  this.dispatchEvent("onClose");
  continuation();
};

exports.provider = PeerConnection;
exports.name = 'core.peerconnection';
exports.flags = {module: true};

},{}],9:[function(require,module,exports){
/*jslint sloppy:true, node:true */
/*globals Components, ArrayBuffer */

var util = require('../../src/util');

var eventNames = [
  'onopen',
  'onerror',
  'onclose',
  'onmessage'
];

var unAttachedChannels = {};
var pendingEvents = {};
var allocateChannel = function (dataChannel) {
  var id = util.getId();
  unAttachedChannels[id] = dataChannel;
  pendingEvents[id] = [];
  eventNames.forEach(function(eventName) {
    // This listener will be overridden (re-set) after the constructor runs.
    var handler = function(event) {
      var currentHandler = dataChannel[eventName];
      if (currentHandler === handler) {
        pendingEvents[id].push(event);
      } else if (typeof currentHandler === 'function') {
        // If an event somehow runs on this event handler after it has been
        // replaced, forward that event to the new event handler.
        currentHandler(event);
      } else {
        throw new Error('No handler for ' + event.type + ' event');
      }
    };
    dataChannel[eventName] = handler;
  });
  return id;
};

var RTCDataChannelAdapter = function (cap, dispatchEvents, id) {
  this.dispatchEvent = dispatchEvents;
  if (!unAttachedChannels[id]) {
    console.warn('Invalid ID, creating acting on unattached DataChannel');
    var Connection = require('./core.rtcpeerconnection').provider,
      provider = new Connection();
    id = provider.createDataChannel();
    provider.close();
  }

  this.channel = unAttachedChannels[id];
  delete unAttachedChannels[id];

  // After the constructor returns, and the caller has a chance to register
  // event listeners, fire all pending events, and then ensure that all
  // subsequent events are handled immediately.
  setTimeout(function() {
    this.drainPendingEvents(id);

    // This function must not be called until after the pending events are
    // drained, to ensure that messages are delivered in order.
    this.manageEvents(true);
  }.bind(this), 0);
};

RTCDataChannelAdapter.prototype.drainPendingEvents = function(id) {
  pendingEvents[id].forEach(function(event) {
    this['on' + event.type](event);
  }.bind(this));
  delete pendingEvents[id];
};

// Attach or detach listeners for events against the connection.
RTCDataChannelAdapter.prototype.manageEvents = function (attach) {
  eventNames.forEach(function (eventName) {
    if (attach) {
      this[eventName] = this[eventName].bind(this);
      this.channel[eventName] = this[eventName];
    } else {
      delete this.channel[eventName];
    }
  }.bind(this));
};

RTCDataChannelAdapter.prototype.getLabel = function (callback) {
  callback(this.channel.label);
};

RTCDataChannelAdapter.prototype.getOrdered = function (callback) {
  callback(this.channel.ordered);
};

RTCDataChannelAdapter.prototype.getMaxPacketLifeTime = function (callback) {
  callback(this.channel.maxPacketLifeTime);
};

RTCDataChannelAdapter.prototype.getMaxRetransmits = function (callback) {
  callback(this.channel.maxRetransmits);
};

RTCDataChannelAdapter.prototype.getProtocol = function (callback) {
  callback(this.channel.protocol);
};

RTCDataChannelAdapter.prototype.getNegotiated = function (callback) {
  callback(this.channel.negotiated);
};

RTCDataChannelAdapter.prototype.getId = function (callback) {
  callback(this.channel.id);
};

RTCDataChannelAdapter.prototype.getReadyState = function (callback) {
  callback(this.channel.readyState);
};

RTCDataChannelAdapter.prototype.getBufferedAmount = function (callback) {
  callback(this.channel.bufferedAmount);
};

RTCDataChannelAdapter.prototype.getBinaryType = function (callback) {
  callback(this.channel.binaryType);
};
RTCDataChannelAdapter.prototype.setBinaryType = function (binaryType, callback) {
  this.channel.binaryType = binaryType;
  callback();
};

RTCDataChannelAdapter.prototype.send = function (text, callback) {
  this.channel.send(text);
  callback();
};

RTCDataChannelAdapter.prototype.sendBuffer = function (buffer, callback) {
  this.channel.send(buffer);
  callback();
};

RTCDataChannelAdapter.prototype.close = function (callback) {
  if (!this.channel) {
    return callback();
  }
  this.manageEvents(false);
  this.channel.close();
  callback();
};

RTCDataChannelAdapter.prototype.onopen = function (event) {
  this.dispatchEvent('onopen', event.message);
};

RTCDataChannelAdapter.prototype.onerror = function (event) {
  this.dispatchEvent('onerror', {
    errcode: event.type,
    message: event.message
  });
};

RTCDataChannelAdapter.prototype.onclose = function (event) {
  this.dispatchEvent('onclose', event.message);
};

RTCDataChannelAdapter.prototype.onmessage = function (event) {
  if (typeof event.data === 'string') {
    this.dispatchEvent('onmessage', {text: event.data});
  } else if (this.channel.binaryType === 'arraybuffer' &&
      typeof Components !== 'undefined' &&
      !(event.data instanceof ArrayBuffer)) {
    // In Firefox Addons, incoming array buffers are not always owned by the
    // Addon context. The following line clones the object to take ownership.
    // See: https://developer.mozilla.org/en-US/docs/Components.utils.cloneInto
    var myData = Components.utils.cloneInto(event.data, {});
    this.dispatchEvent('onmessage', {buffer: myData});
  } else {
    this.dispatchEvent('onmessage', {buffer: event.data});
  }
};

exports.name = "core.rtcdatachannel";
exports.provider = RTCDataChannelAdapter;
exports.allocate = allocateChannel;

},{"../../src/util":35,"./core.rtcpeerconnection":10}],10:[function(require,module,exports){
/*jslint indent:2,sloppy:true, node:true */

var adapter = require('webrtc-adapter');
var PromiseCompat = require('es6-promise').Promise;
var RTCPeerConnection = adapter.RTCPeerConnection;
var RTCSessionDescription = adapter.RTCSessionDescription;
var RTCIceCandidate = adapter.RTCIceCandidate;

var DataChannel = require('./core.rtcdatachannel');

var RTCPeerConnectionAdapter = function (cap, dispatchEvent, configuration) {
  this.dispatchEvent = dispatchEvent;
  try {
    this.connection = new RTCPeerConnection(configuration);
  } catch (e) {
    // Note: You can't ask the provider to close you synchronously, since
    // the constructor has not yet returned, so there's no 'this' that
    // the provider can know about yet.
    setTimeout(cap.provider.close.bind(cap.provider, this), 0);
    return;
  }

  this.events = [
    'ondatachannel',
    'onnegotiationneeded',
    'onicecandidate',
    'onsignalingstatechange',
    'onaddstream',
    'onremovestream',
    'oniceconnectionstatechange'
  ];
  this.manageEvents(true);
};

// Attach or detach listeners for events against the connection.
RTCPeerConnectionAdapter.prototype.manageEvents = function (attach) {
  this.events.forEach(function (event) {
    if (attach) {
      this[event] = this[event].bind(this);
      this.connection[event] = this[event];
    } else if (this.connection) {
      delete this.connection[event];
    }
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.createOffer = function (constraints) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.createOffer(resolve, reject, constraints);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.createAnswer = function () {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.createAnswer(resolve, reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.setLocalDescription = function (description) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.setLocalDescription(new RTCSessionDescription(description),
      resolve,
      reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.getLocalDescription = function () {
  return PromiseCompat.resolve(this.connection.localDescription);
};

RTCPeerConnectionAdapter.prototype.setRemoteDescription = function (description) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.setRemoteDescription(new RTCSessionDescription(description),
      resolve,
      reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.getRemoteDescription = function () {
  return PromiseCompat.resolve(this.connection.remoteDescription);
};

RTCPeerConnectionAdapter.prototype.getSignalingState = function () {
  return PromiseCompat.resolve(this.connection.signalingState);
};

RTCPeerConnectionAdapter.prototype.updateIce = function (configuration) {
  this.connection.updateIce(configuration);
  return PromiseCompat.resolve();
};

RTCPeerConnectionAdapter.prototype.addIceCandidate = function (candidate) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.addIceCandidate(new RTCIceCandidate(candidate),
      resolve,
      reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.getIceGatheringState = function () {
  return PromiseCompat.resolve(this.connection.iceGatheringState);
};

RTCPeerConnectionAdapter.prototype.getIceConnectionState = function () {
  return PromiseCompat.resolve(this.connection.iceConnectionState);
};

RTCPeerConnectionAdapter.prototype.getConfiguration = function () {
  var configuration = this.connection.getConfiguration();
  return PromiseCompat.resolve(configuration);
};

RTCPeerConnectionAdapter.prototype.getLocalStreams = function () {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.getRemoteStreams = function () {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.getStreamById = function (id) {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.addStream = function (id) {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.removeStream = function (id) {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.close = function () {
  if (!this.connection) {
    return PromiseCompat.resolve();
  }
  this.manageEvents(false);
  try {
    this.connection.close();
    return PromiseCompat.resolve();
  } catch (e) {
    return PromiseCompat.reject({
      errcode: e.name,
      message: e.message
    });
  }
};

RTCPeerConnectionAdapter.prototype.createDataChannel = function (label, dataChannelDict) {
  var id = DataChannel.allocate(this.connection.createDataChannel(label, dataChannelDict));
  return PromiseCompat.resolve(id);
};

RTCPeerConnectionAdapter.prototype.getStats = function (selector) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.getStats(selector, resolve, reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.ondatachannel = function (event) {
  var id = DataChannel.allocate(event.channel);
  this.dispatchEvent('ondatachannel', {channel: id});
};

RTCPeerConnectionAdapter.prototype.onnegotiationneeded = function (event) {
  this.dispatchEvent('onnegotiationneeded', event.message);
};

RTCPeerConnectionAdapter.prototype.onicecandidate = function (event) {
  var msg;
  if (event.candidate && event.candidate.candidate) {
    msg = {
      candidate: {
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      }
    };
  } else {
    msg = {
      candidate: null
    };
  }
  this.dispatchEvent('onicecandidate', msg);
};
  
RTCPeerConnectionAdapter.prototype.onsignalingstatechange = function (event) {
  this.dispatchEvent('onsignalingstatechange', event.message);
};
  
RTCPeerConnectionAdapter.prototype.onaddstream = function (event) {
  //TODO: provide ID of allocated stream.
  this.dispatchEvent('onaddstream', event.stream);
};
  
RTCPeerConnectionAdapter.prototype.onremovestream = function (event) {
  //TODO: provide ID of deallocated stream.
  this.dispatchEvent('onremovestream', event.stream);
};
  
RTCPeerConnectionAdapter.prototype.oniceconnectionstatechange = function (event) {
  this.dispatchEvent('oniceconnectionstatechange', event.message);
};


exports.name = "core.rtcpeerconnection";
exports.provider = RTCPeerConnectionAdapter;
exports.style = "providePromises";
exports.flags = {provider: true};

},{"./core.rtcdatachannel":9,"es6-promise":2,"webrtc-adapter":4}],11:[function(require,module,exports){
/*globals localStorage */
/*jslint indent:2,sloppy:true,node:true */
var util = require('../../src/util');

/**
 * A FreeDOM core.storage provider that depends on localStorage
 * Thus, this only works in the context of a webpage and has
 * some size limitations.
 * Note that this can conflict with other scripts using localStorage
 * as keys are raw
 * @Class Storage_unprivileged
 * @constructor
 * @private
 * @param {Object} cap Capabilities for the provider
 */
var Storage_unprivileged = function (cap, dispatchEvent) {
  util.handleEvents(this);
};

/**
 * Lists keys in the storage repository
 * @method keys
 */
Storage_unprivileged.prototype.keys = function (continuation) {
  var result = [],
    i;
  for (i = 0; i < localStorage.length; i += 1) {
    result.push(localStorage.key(i));
  }
  continuation(result);
};

/**
 * Get a key from the storage repository.
 * @param {String} key The item to get from storage.
 * @method get
 */
Storage_unprivileged.prototype.get = function (key, continuation) {
  try {
    var val = localStorage.getItem(key);
    continuation(val);
  } catch (e) {
    continuation(null);
  }
};

/**
 * Set a key in the storage repository.
 * @param {String} key The item to save in storage.
 * @param {String} value The value to save in storage.
 * @method set
 */
Storage_unprivileged.prototype.set = function (key, value, continuation) {
  var ret = localStorage.getItem(key);
  localStorage.setItem(key, value);
  continuation(ret);
};

/**
 * Remove a key from the storage repository.
 * @param {String} key The item to remove from storage;
 * @method remove
 */
Storage_unprivileged.prototype.remove = function (key, continuation) {
  var ret = localStorage.getItem(key);
  localStorage.removeItem(key);
  continuation(ret);
};

/**
 * Reset the contents of the storage repository.
 * @method clear
 */
Storage_unprivileged.prototype.clear = function (continuation) {
  localStorage.clear();
  continuation();
};

exports.provider = Storage_unprivileged;
exports.name = 'core.storage';

},{"../../src/util":35}],12:[function(require,module,exports){
/*jslint indent:2,white:true,sloppy:true,node:true */
var EventInterface = require('../../src/proxy/eventInterface');
var Consumer = require('../../src/consumer');
var util = require('../../src/util');

/**
 * Core freedom services available to all modules.
 * Created by the environment helper in response to a 'core' request.
 * @Class Core_unprivileged
 * @constructor
 * @param {Manager} manager The manager this core is connected with.
 * @private
 */
var Core_unprivileged = function(manager, postMessage) {
  this.manager = manager.module;
  this.debug = this.manager.debug;
};

Core_unprivileged.unboundChannels = {};

Core_unprivileged.contextId = undefined;

/**
 * Create a custom channel.
 * Returns the structure {channel: Proxy, identifier: Object},
 * where the identifier can be 'redeemed' by another module or provider using
 * bind channel, at which point the deferred object will resolve with a channel
 * between the two endpoints.
 * @method createChannel
 * @params {Function} continuation Method to call with the cosntructed structure.
 */
Core_unprivileged.prototype.createChannel = function(continuation) {
  var proxy = new Consumer(EventInterface, this.manager.debug),
      id = util.getId(),
      chan = this.getChannel(proxy);
  this.manager.setup(proxy);

  if (this.manager.delegate && this.manager.toDelegate.core) {
    this.manager.emit(this.manager.delegate, {
      type: 'Delegation',
      request: 'handle',
      flow: 'core',
      message: {
        type: 'register',
        id: id
      }
    });
  }
  Core_unprivileged.unboundChannels[id] = {
    local: true,
    proxy: proxy
  };

  proxy.once('start', this.getChannel.bind(this, proxy));

  continuation({
    channel: chan,
    identifier: id
  });
};

Core_unprivileged.prototype.getChannel = function(proxy) {
  var iface = proxy.getProxyInterface(),
      chan = iface();
  chan.close = iface.close;
  chan.onClose = iface.onClose;
  iface.onClose(chan, function() {
    proxy.doClose();
  });
  return chan;
};

/**
 * Receive a message from another core instance.
 * Note: Core_unprivileged is not registered on the hub. it is a provider,
 *     as it's location and name would indicate. This function is called by
 *     port-app to relay messages up to higher levels.  More generally, the
 *     messages emitted by the core to 'this.manager.emit(this.mananage.delegate'
 *     Should be onMessaged to the controlling core.
 * @param {String} source The source of the message.
 * @param {Object} msg The messsage from an isolated core provider.
 */
Core_unprivileged.prototype.onMessage = function(source, msg) {
  if (msg.type === 'register') {
    Core_unprivileged.unboundChannels[msg.id] = {
      remote: true,
      resolve: msg.reply,
      source: source
    };
  } else if (msg.type === 'clear') {
    delete Core_unprivileged.unboundChannels[msg.id];
  } else if (msg.type === 'bind') {
    if (Core_unprivileged.unboundChannels[msg.id]) {
      this.bindChannel(msg.id, function() {}, source);
    }
  }
};

/**
 * Bind a custom channel.
 * Creates a proxy interface to the custom channel, which will be bound to
 * the proxy obtained through an earlier createChannel call.
 * channel to a proxy.
 * @method bindChannel
 * @param {Object} identifier An identifier obtained through createChannel.
 * @param {Function} continuation A function to be called with the proxy.
 */
Core_unprivileged.prototype.bindChannel = function(identifier, continuation, source) {
  var toBind = Core_unprivileged.unboundChannels[identifier],
      newSource = !source;

  // when bindChannel is called directly, source will be undefined.
  // When it is propogated by onMessage, a source for binding will already exist.
  if (newSource) {
    this.debug.debug('making local proxy for core binding');
    source = new Consumer(EventInterface, this.debug);
    this.manager.setup(source);
  }

  // If this is a known identifier and is in the same context, binding is easy.
  if (toBind && toBind.local) {
    this.debug.debug('Binding a channel to port on this hub:' + source);
    this.manager.createLink(source, identifier, toBind.proxy, 'default');
    delete Core_unprivileged.unboundChannels[identifier];
    if (this.manager.delegate && this.manager.toDelegate.core) {
      this.manager.emit(this.manager.delegate, {
        type: 'Delegation',
        request: 'handle',
        flow: 'core',
        message: {
          type: 'clear',
          id: identifier
        }
      });
    }
  } else if (toBind && toBind.remote) {
    this.debug.debug('Binding a channel into a module.');
    this.manager.createLink(
        source,
        newSource ? 'default' : identifier,
        toBind.source,
        identifier);
    toBind.resolve({
      type: 'Bind Channel',
      request:'core',
      flow: 'core',
      message: {
        type: 'bind',
        id: identifier
      }
    });
    delete Core_unprivileged.unboundChannels[identifier];
  } else if (this.manager.delegate && this.manager.toDelegate.core) {
    this.debug.info('delegating channel bind for an unknown ID:' + identifier);
    this.manager.emit(this.manager.delegate, {
      type: 'Delegation',
      request: 'handle',
      flow: 'core',
      message: {
        type: 'bind',
        id: identifier
      }
    });
    source.once('start', function(p, cb) {
      cb(this.getChannel(p));
    }.bind(this, source, continuation));
    this.manager.createLink(source,
        'default',
        this.manager.hub.getDestination(this.manager.delegate),
        identifier);
    delete Core_unprivileged.unboundChannels[identifier];
    return;
  } else {
    this.debug.warn('Asked to bind unknown channel: ' + identifier);
    this.debug.log(Core_unprivileged.unboundChannels);
    continuation();
    return;
  }

  if (source.getInterface) {
    continuation(this.getChannel(source));
  } else {
    continuation();
  }
};

/**
 * Get the ID of the current freedom.js context.  Provides an
 * array of module URLs, the lineage of the current context.
 * When not in an application context, the ID is the lineage
 * of the current View.
 * @method getId
 * @param {Function} callback The function called with ID information.
 */
Core_unprivileged.prototype.getId = function(callback) {
  // TODO: make sure contextID is properly frozen.
  callback(Core_unprivileged.contextId);
};

/**
 * Get a logger for logging to the freedom.js logger. Provides a
 * log object with an interface similar to the standard javascript console,
 * which logs via debug.
 * @method getLogger
 * @param {String} name The name of the logger, used as its 'source'
 * @param {Function} callback The function to call with the logger.
 */
Core_unprivileged.prototype.getLogger = function(name, callback) {
  callback(this.manager.debug.getLogger(name));
};

/**
 * Set the ID of the current freedom.js context.
 * @method setId
 * @private
 * @param {String[]} id The lineage of the current context.
 */
Core_unprivileged.prototype.setId = function(id) {
  Core_unprivileged.contextId = id;
};

exports.provider = Core_unprivileged;
exports.name = "core";
exports.flags = {module: true};

},{"../../src/consumer":20,"../../src/proxy/eventInterface":32,"../../src/util":35}],13:[function(require,module,exports){
/*globals document */
/*jslint indent:2,sloppy:true,node:true */
var util = require('../../src/util');
var PromiseCompat = require('es6-promise').Promise;

/**
 * A freedom.js view is the interface for user interaction.
 * A view exists as an iFrame, which is shown to the user in some way.
 * communication between the view and the freedom.js module is performed
 * through the HTML5 postMessage mechanism, which this provider translates
 * to freedom.js message events.
 * @Class View_unprivileged
 * @constructor
 * @private
 * @param {View Provider} provider
 * @param {provider:Provider,module:Module} cap The instantiator of the view.
 * @param {Function} dispatchEvent Function to call to emit events.
 */
var Core_View = function (provider, cap, dispatchEvent) {
  this.provider = provider;
  this.dispatchEvent = dispatchEvent;
  setTimeout(cap.provider.onClose.bind(
    cap.provider,
    this,
    this.close.bind(this, function () {})
  ), 0);
  this.module = cap.module;
  util.handleEvents(this);
};

/**
 * The is the default provider for core.view, unless overridden by context or
 * a user supplied provider. The interface is documented at:
 * https://github.com/freedomjs/freedom/wiki/freedom.js-Views
 *
 * Generally, a view provider consists of 3 methods:
 * onOpen is called when a view should be shown.
 *     id - is a unique identifier for this view, used on subsequent calls
 *          for communication and to eventually close the view.
 *     name - is the name of the view (as defined in the manifest),
 *            in order to place it appropriately.
 *     page - is the resolved URL to open.
 *     resources - is an array of resolved URLs which are referenced.
 *     postMessage - is a function to call when messages are emitted
 *                   by the window in which the view is opened.
 * onOpen returns a promise that completes when the view is loaded.
 * onMessage is called to send a message to an open view.
 *     id - is the unique identifier for the open view.
 *     message - is the message to postMessage to the view's window.
 * onClose is called to close a view.
 *     id - is the unique identifier for the view.
 */
Core_View.provider = {
  listener: undefined,
  active: {},
  onOpen: function (id, name, page, resources, postMessage) {
    var container = document.body,
      root,
      frame;
    
    if (!this.listener) {
      this.listener = function (msg) {
        var i;
        for (i in this.active) {
          if (this.active.hasOwnProperty(i) &&
              this.active[i].source === msg.source) {
            this.active[i].postMessage(msg.data);
          }
        }
      }.bind(this);
      window.addEventListener('message', this.listener, true);
    }

    // Views open by default in an element with their ID, or fill the page
    // otherwise.
    if (document.getElementById(name)) {
      container = document.getElementById(name);
    }

    root = document.createElement("div");
    root.style.width = "100%";
    root.style.height = "100%";
    root.style.display = "relative";

    container.appendChild(root);
    
    return new PromiseCompat(function (resolve, reject) {
      frame = document.createElement("iframe");
      frame.setAttribute("sandbox", "allow-scripts allow-forms");
      frame.style.width = "100%";
      frame.style.height = "100%";
      frame.style.border = "0";
      frame.style.background = "transparent";
      frame.src = page;
      frame.addEventListener('load', resolve, true);
      frame.addEventListener('error', reject, true);

      root.appendChild(frame);

      this.active[id] = {
        postMessage: postMessage,
        container: container,
        root: root,
        source: frame.contentWindow
      };
    }.bind(this));
  },
  onMessage: function (id, message) {
    this.active[id].source.postMessage(message, '*');
  },
  onClose: function (id) {
    this.active[id].container.removeChild(this.active[id].root);
    delete this.active[id];
    
    if (Object.keys(this.active).length === 0) {
      window.removeEventListener('message', this.listener, true);
      this.listener = undefined;
    }
  }
};

/**
 * Ask for this view to open a specific location, either a File relative to
 * the loader, or an explicit code location.
 * @method show
 * @param {String} name The identifier of the view.
 * @param {Function} continuation Function to call when view is loaded.
 */
Core_View.prototype.show = function (name, continuation) {
  if (this.id) {
    return continuation(undefined, {
      errcode: 'ALREADY_OPEN',
      message: 'Cannot show multiple views through one instance.'
    });
  }
  this.id = util.getId();

  var config = this.module.manifest.views,
    toResolve = [];
  if (!config || !config[name]) {
    return continuation(undefined, {
      errcode: 'NON_EXISTANT',
      message: 'View not found: ' + name
    });
  }

  if (config[name].main && config[name].files) {
    toResolve = config[name].files.concat(config[name].main);
    PromiseCompat.all(toResolve.map(function (fname) {
      return this.module.resource.get(this.module.manifestId, fname);
    }.bind(this))).then(function (files) {
      this.provider.onOpen(this.id,
          name,
          files[files.length - 1],
          files,
          this.dispatchEvent.bind(this, 'message')).then(
        function (c) {
          // Make sure continuation is called without an argument.
          c();
        }.bind({}, continuation),
        continuation.bind({}, undefined)
      );
    }.bind(this), function (err) {
      this.module.debug.error('Unable to open view ' + name + ': ', err);
      continuation(undefined, {
        errcode: 'VIEW_MALFORMED',
        message: 'Malformed View Declaration: ' + err
      });
    });
  } else {
    continuation(undefined, {
      errcode: 'NON_EXISTANT',
      message: 'View not found: ' + name
    });
  }
};

/**
 * isSecure determines whether the module can have confidence that its
 * communication with its view cannot be intercepted by an untrusted 3rd party.
 * In practice, this means that its okay for the runtime to have access to the
 * messages, and if the context is a web server or a browser extension then
 * that context is trusted. However, if a provider wants to allow their e.g.
 * social provider to be used on arbitrary websites, this mechanism means that
 * if the website uses a trusted version of the freedom.js library, then the
 * module can be used.
 * @method isSecure
 * @returns {Boolean} if the channel to the view is secure.
 */
Core_View.prototype.isSecure = function (continuation) {
  continuation(false);
};

/**
 * Send a message to an open view.
 * @method postMessage
 */
Core_View.prototype.postMessage = function (msg, continuation) {
  if (!this.id) {
    return continuation(undefined, {
      errcode: 'NOT_OPEN',
      message: 'Cannot post message to uninitialized view.'
    });
  }
  this.provider.onMessage(this.id, msg);
  continuation();
};

/**
 * Close an active view.
 * @method close
 */
Core_View.prototype.close = function (continuation) {
  if (!this.id) {
    return continuation(undefined, {
      errcode: 'NOT_OPEN',
      message: 'Cannot close uninitialized view.'
    });
  }
  this.provider.onClose(this.id);
  delete this.id;

  continuation();
};


/**
 * Allow a web page to redefine behavior for how views are shown.
 * @method register
 * @static
 * @param {Function} PageProvider The custom view behavior.
 */
Core_View.register = function (PageProvider) {
  var provider = PageProvider ? new PageProvider() : Core_View.provider;
  exports.provider = Core_View.bind(this, provider);
};

exports.provider = Core_View.bind(this, Core_View.provider);
exports.name = 'core.view';
exports.register = Core_View.register;
exports.flags = {provider: true, module: true};

},{"../../src/util":35,"es6-promise":2}],14:[function(require,module,exports){
/*globals WebSocket, ArrayBuffer, Blob, Uint8Array, console */
/*jslint sloppy:true, node:true */

var WSHandle = null;
var nodeStyle = false;

/**
 * A WebSocket core provider
 *
 * @param {Object} cap Capabilities for the provider
 * @param {Function} dispatchEvent Function to dispatch events.
 * @param {String} url The Remote URL to connect with.
 * @param {String[]} protocols SubProtocols to open.
 * @param {WebSocket?} socket An alternative socket class to use.
 */
var WS = function (cap, dispatchEvent, url, protocols, socket) {
  var WSImplementation = null,
    error;
  this.isNode = nodeStyle;
  if (typeof socket !== 'undefined') {
    WSImplementation = socket;
  } else if (WSHandle !== null) {
    WSImplementation = WSHandle;
  } else if (typeof WebSocket !== 'undefined') {
    WSImplementation = WebSocket;
  } else {
    console.error('Platform does not support WebSocket');
  }

  this.dispatchEvent = dispatchEvent;
  try {
    if (protocols) {
      this.websocket = new WSImplementation(url, protocols);
    } else {
      this.websocket = new WSImplementation(url);
    }
    this.websocket.binaryType = 'arraybuffer';
  } catch (e) {
    error = {};
    if (e instanceof SyntaxError) {
      error.errcode = 'SYNTAX';
    } else {
      error.errcode = e.name;
    }
    error.message = e.message;
    dispatchEvent('onError', error);
    return;
  }

  if (this.isNode) {
    this.websocket.on('message', this.onMessage.bind(this));
    this.websocket.on('open', this.onOpen.bind(this));
    // node.js websocket implementation not compliant
    this.websocket.on('close', this.onClose.bind(this, {
      code: 0,
      reason: 'UNKNOWN',
      wasClean: true
    }));
    this.websocket.on('error', this.onError.bind(this));
  } else {
    this.websocket.onopen = this.onOpen.bind(this);
    this.websocket.onclose = this.onClose.bind(this);
    this.websocket.onmessage = this.onMessage.bind(this);
    this.websocket.onerror = this.onError.bind(this);
  }
};

WS.prototype.send = function (data, continuation) {
  var toSend = data.text || data.binary || data.buffer,
    errcode,
    message;

  if (toSend) {
    try {
      // For node.js, we have to do weird buffer stuff
      if (this.isNode && toSend instanceof ArrayBuffer) {
        this.websocket.send(
          new Uint8Array(toSend),
          { binary: true },
          this.onError.bind(this)
        );
      } else {
        this.websocket.send(toSend);
      }
    } catch (e) {
      if (e instanceof SyntaxError) {
        errcode = "SYNTAX";
      } else {
        errcode = "INVALID_STATE";
      }
      message = e.message;
    }
  } else {
    errcode = "BAD_SEND";
    message = "No text, binary, or buffer data found.";
  }

  if (errcode) {
    continuation(undefined, {
      errcode: errcode,
      message: message
    });
  } else {
    continuation();
  }
};

WS.prototype.getReadyState = function (continuation) {
  continuation(this.websocket.readyState);
};

WS.prototype.getBufferedAmount = function (continuation) {
  continuation(this.websocket.bufferedAmount);
};

WS.prototype.close = function (code, reason, continuation) {
  try {
    if (code && reason) {
      this.websocket.close(code, reason);
    } else {
      this.websocket.close();
    }
    continuation();
  } catch (e) {
    var errorCode;
    if (e instanceof SyntaxError) {
      errorCode = "SYNTAX";
    } else {
      errorCode = "INVALID_ACCESS";
    }
    continuation(undefined, {
      errcode: errorCode,
      message: e.message
    });
  }
};

WS.prototype.onOpen = function (event) {
  this.dispatchEvent('onOpen');
};

WS.prototype.onMessage = function (event, flags) {
  var data = {};
  if (this.isNode && flags && flags.binary) {
    data.buffer = new Uint8Array(event).buffer;
  } else if (this.isNode) {
    data.text = event;
  } else if (typeof ArrayBuffer !== 'undefined' && event.data instanceof ArrayBuffer) {
    data.buffer = event.data;
  } else if (typeof Blob !== 'undefined' && event.data instanceof Blob) {
    data.binary = event.data;
  } else if (typeof event.data === 'string') {
    data.text = event.data;
  }
  this.dispatchEvent('onMessage', data);
};

WS.prototype.onError = function (event) {
  // Nothing to pass on
  // See: http://stackoverflow.com/a/18804298/300539
  this.dispatchEvent('onError');
};

WS.prototype.onClose = function (event) {
  this.dispatchEvent('onClose',
                     {code: event.code,
                      reason: event.reason,
                      wasClean: event.wasClean});
};

exports.provider = WS;
exports.name = 'core.websocket';
exports.setSocket = function (impl, isNode) {
  WSHandle = impl;
  nodeStyle = isNode;
};

},{}],15:[function(require,module,exports){
/*jshint node:true*/
/*global */
var PromiseCompat = require('es6-promise').Promise;
var XhrClass = null;

var XhrProvider = function(cap, dispatchEvent) {
  "use strict";
  if (typeof window !== "undefined" &&
      typeof window.XMLHttpRequest !== "undefined" &&
      XhrClass === null) { // freedom
    XhrClass = window.XMLHttpRequest;
  } else if (typeof XMLHttpRequest !== "undefined" &&
      XhrClass === null) { // freedom-for-firefox
    XhrClass = XMLHttpRequest;
  } else if (XhrClass === null) {
    console.error("Platform does not support XMLHttpRequest");
  }

  this._dispatchEvent = dispatchEvent;
  this._xhr = new XhrClass();

  setTimeout(cap.provider.onClose.bind(
    cap.provider,
    this,
    this.abort.bind(this)
  ), 0);

  this._events = [
    "loadstart",
    "progress",
    "abort",
    "error",
    "load",
    "timeout",
    "loadend",
    "readystatechange"
  ];
  this._setupListeners();

};

XhrProvider.prototype.open = function(method, url, async, user, password) {
  "use strict";
  if (typeof async !== "undefined" && async !== true) {
    return PromiseCompat.reject({
      errcode: "InvalidAccessError",
      message: "async should always be set to true"
    });
  }

  // Force async to be true. undefined can lead to async=false in Chrome packaged apps
  this._xhr.open(method, url, true, user, password);
  return PromiseCompat.resolve();
};

XhrProvider.prototype.send = function(data) {
  "use strict";
  if (!(data instanceof Object)) {
    this._xhr.send();
  } else if (data.hasOwnProperty("string")) {
    this._xhr.send(data.string);
  } else if (data.hasOwnProperty("buffer")) {
    this._xhr.send(data.buffer);
  } else {
    this._xhr.send();
  }
  return PromiseCompat.resolve();
};

XhrProvider.prototype.abort = function() {
  "use strict";
  this._xhr.abort();
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getResponseHeader = function(header) {
  "use strict";
  return PromiseCompat.resolve(this._xhr.getResponseHeader(header));
};

XhrProvider.prototype.getAllResponseHeaders = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.getAllResponseHeaders());
};

XhrProvider.prototype.setRequestHeader = function(header, value) {
  "use strict";
  this._xhr.setRequestHeader(header, value);
  return PromiseCompat.resolve();
};

XhrProvider.prototype.overrideMimeType = function(mime) {
  "use strict";
  this._xhr.overrideMimeType(mime);
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getReadyState = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.readyState);
};

XhrProvider.prototype.getResponse = function() {
  "use strict";
  if (this._xhr.response === null) {
    return PromiseCompat.resolve(null);
  } else if (this._xhr.responseType === "text" || this._xhr.responseType === "") {
    return PromiseCompat.resolve({ string: this._xhr.response });
  } else if (this._xhr.responseType === "arraybuffer") {
    return PromiseCompat.resolve({ buffer: this._xhr.response });
  } else if (this._xhr.responseType === "json") {
    return PromiseCompat.resolve({ object: this._xhr.response });
  }

  return PromiseCompat.reject("core.xhr cannot determine type of response");
};

XhrProvider.prototype.getResponseText = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.responseText);
};

XhrProvider.prototype.getResponseURL = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.responseURL);
};

XhrProvider.prototype.getResponseType = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.responseType);
};

XhrProvider.prototype.setResponseType = function(type) {
  "use strict";
  this._xhr.responseType = type;
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getStatus = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.status);
};

XhrProvider.prototype.getStatusText = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.statusText);
};

XhrProvider.prototype.getTimeout = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.timeout);
};

XhrProvider.prototype.setTimeout = function(timeout) {
  "use strict";
  this._xhr.timeout = timeout;
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getWithCredentials = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.withCredentials);
};

XhrProvider.prototype.setWithCredentials = function(wc) {
  "use strict";
  this._xhr.withCredentials = wc;
  return PromiseCompat.resolve();
};

XhrProvider.prototype._setupListeners = function() {
  "use strict";
  // Download events
  this._events.forEach(function (eventName) {
    this._xhr.addEventListener(eventName, function(eventName, event) {
      this._dispatchEvent("on" + eventName, event);
    }.bind(this, eventName), false);
  }.bind(this));

  // Upload events
  this._events.forEach(function (eventName) {
    this._xhr.upload.addEventListener(eventName, function(eventName, event) {
      this._dispatchEvent("onupload" + eventName, event);
    }.bind(this, eventName), false);
  }.bind(this));
};

exports.name = "core.xhr";
exports.provider = XhrProvider;
exports.style = "providePromises";
exports.flags = { provider: true };
exports.setImpl = function(impl) {
  "use strict";
  XhrClass = impl;
};

},{"es6-promise":2}],16:[function(require,module,exports){
/*jslint indent:2,browser:true, node:true */
var PromiseCompat = require('es6-promise').Promise;

var oAuthRedirectId = 'freedom.oauth.redirect.handler';

var loadedOnStartup = false;
/**
 * If there is redirection back to the page, and oAuthRedirectID is set,
 * then report the auth and close the window.
 */
if (typeof window !== 'undefined' && window && window.location &&
    window.addEventListener) {
  window.addEventListener('load', function () {
    "use strict";
    loadedOnStartup = true;
  }, true);

  if (window.localStorage &&
      window.location.href.indexOf(oAuthRedirectId) > 0) {
    // This will trigger a 'storage' event on the window. See storageListener
    window.localStorage.setItem(oAuthRedirectId, new Date());
    window.close();
  }
}

var LocalPageAuth = function() {
  "use strict";
  this.listeners = {};
};

/**
 * Indicate the intention to initiate an oAuth flow, allowing an appropriate
 * oAuth provider to begin monitoring for redirection.
 *
 * @method initiateOAuth
 * @param {string[]} redirectURIs - oAuth redirection URIs registered with the
 *     provider.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a value of schema: {{redirect:String, state:String}}
 *    where 'redirect' is the chosen redirect URI
 *    and 'state' is the state to pass to the URI on completion of oAuth
 * @return {Boolean} true if can handle, false otherwise
 */
LocalPageAuth.prototype.initiateOAuth = function(redirectURIs, continuation) {
  "use strict";
  if (typeof window !== 'undefined' && window && loadedOnStartup) {
    var here = window.location.protocol + "//" + window.location.host +
        window.location.pathname;
    if (redirectURIs.indexOf(here) > -1) {
      continuation({
        redirect: here,
        state: oAuthRedirectId + Math.random()
      });
      return true;
    }
  }

  return false;
};

/**
 * oAuth client-side flow - launch the provided URL
 * This must be called after initiateOAuth with the returned state object
 *
 * @method launchAuthFlow
 * @param {String} authUrl - The URL that initiates the auth flow.
 * @param {Object.<string, string>} stateObj - The return value from initiateOAuth
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
LocalPageAuth.prototype.launchAuthFlow = function(authUrl, stateObj, continuation) {
  "use strict";
  var listener = this.storageListener.bind(this, continuation, stateObj);
  this.listeners[stateObj.state] = listener;
  window.addEventListener("storage", listener, false);
  // Start 'er up
  window.open(authUrl);
};

/**
 * Handler for storage events, which relays them to waiting clients.
 * For the schema of the storage msg, see:
 * http://tutorials.jenkov.com/html5/local-storage.html#storage-events
 * @param {Function} continuation function to call with result
 * @param {Object.<string, string>} stateObj the return value from initiateOAuth
 * @param {Object} msg storage event
 */
LocalPageAuth.prototype.storageListener = function(continuation, stateObj, msg) {
  'use strict';
  if (msg.url.indexOf(stateObj.state) > -1) {
    window.removeEventListener("storage", this.listeners[stateObj.state], false);
    delete this.listeners[stateObj.state];
    continuation(msg.url);
  }
};

/**
 * If we have a local domain, and freedom.js is loaded at startup, we can use
 * the local page as a redirect URI.
 */
module.exports = LocalPageAuth;

},{"es6-promise":2}],17:[function(require,module,exports){
(function (global){
/*jslint indent:2,browser:true, node:true */
var PromiseCompat = require('es6-promise').Promise;

var oAuthRedirectId = 'freedom.oauth.redirect.handler';

function RemotePageAuth() {
  "use strict";
  this.listeners = {};
}

/**
 * Indicate the intention to initiate an oAuth flow, allowing an appropriate
 * oAuth provider to begin monitoring for redirection.
 *
 * @method initiateOAuth
 * @param {string[]} redirectURIs - oAuth redirection URIs registered with the
 *     provider.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a value of schema: {{redirect:String, state:String}}
 *    where 'redirect' is the chosen redirect URI
 *    and 'state' is the state to pass to the URI on completion of oAuth
 * @return {Boolean} true if can handle, false otherwise
 */
RemotePageAuth.prototype.initiateOAuth = function(redirectURIs, continuation) {
  "use strict";
  if (typeof global !== 'undefined' && global && global.document) {
    for (var i=0; i<redirectURIs.length; i++) {
      // TODO: remove restriction on URL pattern match.
      if ((redirectURIs[i].indexOf('http://') === 0 ||
          redirectURIs[i].indexOf('https://') === 0) &&
          redirectURIs[i].indexOf('oauth-relay.html') > 0) {
        continuation({
          redirect: redirectURIs[i],
          state: oAuthRedirectId + Math.random()
        });
        return true;
      }
    }
  }
  return false;
};

/**
 * oAuth client-side flow - launch the provided URL
 * This must be called after initiateOAuth with the returned state object
 *
 * @method launchAuthFlow
 * @param {String} authUrl - The URL that initiates the auth flow.
 * @param {Object.<string, string>} stateObj - The return value from initiateOAuth
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
RemotePageAuth.prototype.launchAuthFlow = function(authUrl, stateObj, continuation) {
  "use strict";
  var frame = global.document.createElement('iframe');
  frame.src = stateObj.redirect;
  frame.style.display = 'none';

  global.document.body.appendChild(frame);
  frame.addEventListener('load', function () {
    this.listeners[stateObj.state] = continuation;
    window.open(authUrl);

    frame.contentWindow.postMessage(stateObj.state, '*');
  }.bind(this));

  window.addEventListener('message', function (frame, msg) {
    if (msg.data && msg.data.key && msg.data.url && this.listeners[msg.data.key]) {
      this.listeners[msg.data.key](msg.data.url);
      delete this.listeners[msg.data.key];
      try {
        document.body.removeChild(frame);
      } catch (e) {
        console.warn(e);
      }
    }
  }.bind(this, frame), false);
};

/**
 * If we have a local domain, and freedom.js is loaded at startup, we can use
 * the local page as a redirect URI.
 */
module.exports = RemotePageAuth;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"es6-promise":2}],18:[function(require,module,exports){
/*jslint indent:2,white:true,node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;

/**
 * The API registry for freedom.js.  Used to look up requested APIs,
 * and provides a bridge for core APIs to act like normal APIs.
 * @Class API
 * @param {Debug} debug The debugger to use for logging.
 * @constructor
 */
var Api = function(debug) {
  this.debug = debug;
  this.apis = {};
  this.providers = {};
  this.waiters = {};
};

/**
 * Get an API.
 * @method get
 * @param {String} api The API name to get.
 * @returns {{name:String, definition:API}} The API if registered.
 */
Api.prototype.get = function(api) {
  if (!this.apis[api]) {
    return false;
  }
  return {
    name: api,
    definition: this.apis[api]
  };
};

/**
 * Set an API to a definition.
 * @method set
 * @param {String} name The API name.
 * @param {API} definition The JSON object defining the API.
 */
Api.prototype.set = function(name, definition) {
  this.apis[name] = definition;
};

/**
 * Register a core API provider.
 * @method register
 * @param {String} name the API name.
 * @param {Function} constructor the function to create a provider for the API.
 * @param {String?} style The style the provider is written in. Valid styles
 *   are documented in fdom.port.Provider.prototype.getInterface. Defaults to
 *   provideAsynchronous
 * @param {Object?} flags Prefixed arguments needed by the core provider.
 *   valid keys are 'module', 'provider', and 'config'.
 */
Api.prototype.register = function(name, constructor, style, flags) {
  var i,
    args;

  this.providers[name] = {
    constructor: constructor,
    style: style || 'provideAsynchronous',
    flags: flags || {}
  };

  if (this.waiters[name]) {
    for (i = 0; i < this.waiters[name].length; i += 1) {
      args = {};
      if (flags.module) {
        args.module = this.waiters[name][i].from;
      }
      if (flags.config) {
        args.config = this.waiters[name][i].from.config;
      }
      this.waiters[name][i].resolve({
        args: args,
        inst: constructor.bind({}, args)
      });
    }
    delete this.waiters[name];
  }
};

/**
 * Get a core API connected to a given FreeDOM module.
 * @method getCore
 * @param {String} name the API to retrieve.
 * @param {Module} from The instantiating App.
 * @returns {Promise} A promise of a fdom.App look-alike (and argument object),
 * matching a local API definition.
 */
Api.prototype.getCore = function(name, from) {
  return new PromiseCompat(function(resolve, reject) {
    if (this.apis[name]) {
      if (this.providers[name]) {
        var args = {};
        if (this.providers[name].flags.module) {
          args.module = from;
        }
        if (this.providers[name].flags.config) {
          args.config = from.config;
        }
        resolve({
          args: args,
          inst: this.providers[name].constructor.bind({}, args)
        });
      } else {
        if (!this.waiters[name]) {
          this.waiters[name] = [];
        }
        this.waiters[name].push({
          resolve: resolve,
          reject: reject,
          from: from
        });
      }
    } else {
      this.debug.warn('Api.getCore asked for unknown core: ' + name);
      reject(null);
    }
  }.bind(this));
};

/**
 * Configure a {Provider} to provide a named core api on behalf of a
 * given port.
 * @param {String} name The name of the provider
 * @param {Provider} provider The provider that will provide the named api
 * @param {Module} from The module requesting the core provider.
 */
Api.prototype.provideCore = function (name, provider, from) {
  return this.getCore(name, from).then(function (core) {
    var flags = this.providers[name].flags,
      iface = provider.getProxyInterface();
    if (flags.provider) {
      core.args.provider = iface;
    }
    iface()[this.providers[name].style](core.inst);
  }.bind(this), function (err) {
    this.debug.error('Could not provide core: ', err);
  }.bind(this));
};

/**
 * Shutdown the API registry, and reject any pending waiters.
 */
Api.prototype.cleanup = function () {
  var prop,
    doReject = function (waiter) {
      waiter.reject();
    };
  for (prop in this.waiters) {
    if (this.waiters.hasOwnProperty(prop)) {
      this.waiters[prop].forEach(doReject);
    }
  }
  delete this.waiters;
};

/**
 * Defines the apis module and provider registry.
 */
module.exports = Api;

},{"es6-promise":2}],19:[function(require,module,exports){
/*jslint indent:2,node:true */

var Bundle = function () {
  'use strict';
  this.interfaces = require('../dist/bundle.compiled');
};

/**
 * Populate an API registry with provided providers, and with known API
 * definitions.
 * @static
 * @method register
 * @param {{name: string, provider: Function, style?: string}[]} providers
 *   The core providers made available to this freedom.js instance.
 * @param {Api} registry The API registry to populate.
 */
exports.register = function (providers, registry) {
  'use strict';
  var bundle = new Bundle();
  bundle.interfaces.forEach(function (api) {
    if (api && api.name && api.api) {
      registry.set(api.name, api.api);
    }
  });

  providers.forEach(function (provider) {
    if (provider.name) {
      registry.register(provider.name,
                        provider.provider,
                        provider.style,
                        provider.flags);
    }
  });
};

},{"../dist/bundle.compiled":1}],20:[function(require,module,exports){
/*globals Blob, ArrayBuffer, DataView */
/*jslint indent:2, node:true, sloppy:true */
var util = require('./util');

/**
 * A freedom port for a user-accessable api.
 * @class Consumer
 * @implements Port
 * @uses handleEvents
 * @param {Object} interfaceCls The api interface exposed by this consumer.
 * @param {Debug} debug The debugger to use for logging.
 * @constructor
 */
var Consumer = function (interfaceCls, debug) {
  this.id = Consumer.nextId();
  this.interfaceCls = interfaceCls;
  this.debug = debug;
  util.handleEvents(this);
  
  this.ifaces = {};
  this.closeHandlers = {};
  this.errorHandlers = {};
  this.emits = {};
};

/**
 * Receive incoming messages for this consumer.
 * @method onMessage
 * @param {String} source The source of the message.
 * @param {Object} message The received message.
 */
Consumer.prototype.onMessage = function (source, message) {
  if (source === 'control' && message.reverse) {
    this.emitChannel = message.channel;
    this.emit(this.emitChannel, {
      type: 'channel announcement',
      channel: message.reverse
    });
    this.emit('start');
  } else if (source === 'control' && message.type === 'setup') {
    this.controlChannel = message.channel;
  } else if (source === 'control' && message.type === 'close') {
    delete this.controlChannel;
    this.doClose();
  } else {
    if (!this.emitChannel && message.channel) {
      this.emitChannel = message.channel;
      this.emit('start');
      return;
    }
    if (message.type === 'close' && message.to) {
      this.teardown(message.to);
      return;
    }
    if (message.type === 'error') {
      this.error(message.to, message.message);
      return;
    }
    if (message.to) {
      if (this.emits[message.to]) {
        this.emits[message.to]('message', message.message);
      } else {
        this.debug.warn('Could not deliver message, no such interface: ' + message.to);
      }
    } else {
      var msg = message.message;
      util.eachProp(this.emits, function (iface) {
        iface('message', message.message);
      });
    }
  }
};

/**
 * Create a consumer.Interface associated with this consumer.
 * An interface is returned, which is supplied with important control of the
 * api via constructor arguments: (bound below in getInterfaceConstructor)
 * 
 * onMsg: function(binder) sets the function to call when messages for this
 *    interface arrive on the channel,
 * emit: function(msg) allows this interface to emit messages,
 * id: string is the Identifier for this interface.
 * @method getInterface
 */
Consumer.prototype.getInterface = function () {
  var Iface = this.getInterfaceConstructor(),
    args = Array.prototype.slice.call(arguments, 0);
  if (args.length) {
    Iface = Iface.bind.apply(Iface, [Iface].concat(args));
  }
  return new Iface();
};

/**
 * Attach an 'onEvent' listener to an interface, allowing external consumers
 * to either listen to channel state, or register callbacks on lifetime events
 * of individual instances of the interface.
 * @method getListener
 * @parma {String} name The event to listen to.
 * @private
 */
Consumer.prototype.getListener = function (name) {
  return function (instance, handler) {
    // Listen to the channel directly.
    if (typeof instance === 'function' && handler === undefined) {
      this.once(name, instance);
      return;
    }

    // Listen to a specific instance.
    var handlers = name + 'Handlers';
    util.eachProp(this.ifaces, function (candidate, id) {
      if (candidate === instance) {
        if (this[handlers][id]) {
          this[handlers][id].push(handler);
        } else {
          this[handlers][id] = [handler];
        }
        return true;
      }
    }.bind(this));
  }.bind(this);
};

/**
 * Create a function that can be used to get interfaces from this api consumer
 * from a user-visible point.
 * @method getProxyInterface
 */
Consumer.prototype.getProxyInterface = function () {
  var func = function (p) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (args.length > 0) {
      return p.getInterface.apply(p, args);
    } else {
      return p.getInterface();
    }
  }.bind({}, this);

  func.close = function (iface) {
    if (iface) {
      util.eachProp(this.ifaces, function (candidate, id) {
        if (candidate === iface) {
          this.teardown(id);
          this.emit(this.emitChannel, {
            type: 'close',
            to: id
          });
          return true;
        }
      }.bind(this));
    } else {
      // Close the channel.
      this.doClose();
    }
  }.bind(this);

  func.onClose = this.getListener('close');
  func.onError = this.getListener('error');

  return func;
};

/**
 * Provides a bound class for creating a consumer.Interface associated
 * with this api. This partial level of construction can be used
 * to allow the consumer to be used as a provider for another API.
 * @method getInterfaceConstructor
 * @private
 */
Consumer.prototype.getInterfaceConstructor = function () {
  var id = Consumer.nextId();
  return this.interfaceCls.bind(
    {},
    function (id, obj, binder) {
      this.ifaces[id] = obj;
      this.emits[id] = binder;
    }.bind(this, id),
    this.doEmit.bind(this, id),
    this.debug
  );
};

/**
 * Emit a message on the channel once setup is complete.
 * @method doEmit
 * @private
 * @param {String} to The ID of the flow sending the message.
 * @param {Object} msg The message to emit
 * @param {Boolean} all Send message to all recipients.
 */
Consumer.prototype.doEmit = function (to, msg, all) {
  if (all) {
    to = false;
  }
  if (this.emitChannel) {
    this.emit(this.emitChannel, {to: to, type: 'message', message: msg});
  } else {
    this.once('start', this.doEmit.bind(this, to, msg));
  }
};

/**
 * Teardown a single interface of this api.
 * @method teardown
 * @param {String} id The id of the interface to tear down.
 */
Consumer.prototype.teardown = function (id) {
  if (this.emits[id]) {
    this.emits[id]('close');
  }
  delete this.emits[id];
  if (this.closeHandlers[id]) {
    util.eachProp(this.closeHandlers[id], function (prop) {
      prop();
    });
  }
  delete this.ifaces[id];
  delete this.closeHandlers[id];
  delete this.errorHandlers[id];
};

/**
 * Handle a message error reported to this api.
 * @method error
 * @param {String?} id The id of the interface where the error occured.
 * @param {Object} message The message which failed, if relevant.
 */
Consumer.prototype.error = function (id, message) {
  if (id && this.errorHandlers[id]) {
    util.eachProp(this.errorHandlers[id], function (prop) {
      prop(message);
    });
  } else if (!id) {
    this.emit('error', message);
  }
};


/**
 * Close / teardown the flow this api terminates.
 * @method doClose
 */
Consumer.prototype.doClose = function () {
  if (this.controlChannel) {
    this.emit(this.controlChannel, {
      type: 'Channel Closing',
      request: 'close'
    });
  }

  util.eachProp(this.emits, function (emit, id) {
    this.teardown(id);
  }.bind(this));

  this.emit('close');
  this.off();

  this.emitChannel = null;
};

/**
 * Get the textual description of this port.
 * @method toString
 * @return The description of this port.
 */
Consumer.prototype.toString = function () {
  if (this.emitChannel) {
    return "[Consumer " + this.emitChannel + "]";
  } else {
    return "[unbound Consumer]";
  }
};

/**
 * Get the next ID for an api channel.
 * @method nextId
 * @static
 * @private
 */
Consumer.nextId = function () {
  if (!Consumer.id) {
    Consumer.id = 1;
  }
  return (Consumer.id += 1);
};

/**
 * Convert a structured data structure into a message stream conforming to
 * a template and an array of binary data elements.
 * @static
 * @method messageToPortable
 * @param {Object} template The template to conform to
 * @param {Object} value The instance of the data structure to confrom
 * @param {Debug} debug A debugger for errors.
 * @return {{text: Object, binary: Array}} Separated data streams.
 */
Consumer.messageToPortable = function (template, value, debug) {
  var externals = [],
    message = Consumer.conform(template, value, externals, true, debug);
  return {
    text: message,
    binary: externals
  };
};

/**
 * Convert Structured Data streams into a data structure conforming to a
 * template.
 * @static
 * @method portableToMessage
 * @param {Object} template The template to conform to
 * @param {{text: Object, binary: Array}} streams The streams to conform
 * @param {Debug} debug A debugger for errors.
 * @return {Object} The data structure matching the template.
 */
Consumer.portableToMessage = function (template, streams, debug) {
  return Consumer.conform(template, streams.text, streams.binary, false, debug);
};

/**
 * Force a collection of values to look like the types and length of an API
 * template.
 * @static
 * @method conform
 * @param {Object} template The template to conform to
 * @param {Object} from The value to conform
 * @param {Array} externals Listing of binary elements in the template
 * @param {Boolean} Whether to to separate or combine streams.
 * @aparam {Debug} debug A debugger for errors.
 */
Consumer.conform = function (template, from, externals, separate, debug) {
  /* jshint -W086 */
  if (typeof (from) === 'function') {
    //from = undefined;
    //throw "Trying to conform a function";
    return undefined;
  } else if (typeof (from) === 'undefined') {
    return undefined;
  } else if (from === null) {
    return null;
  } else if (template === undefined) {
    debug.error("Message discarded for not matching declared type!", from);
    return undefined;
  }

  switch (template) {
  case 'string':
    return String('') + from;
  case 'number':
    return Number(1) * from;
  case 'boolean':
    return Boolean(from === true);
  case 'object':
    // TODO(willscott): Allow removal if sandboxing enforces this.
    if (typeof from === 'undefined') {
      return undefined;
    } else {
      return JSON.parse(JSON.stringify(from));
    }
  case 'blob':
    if (separate) {
      if (from instanceof Blob) {
        externals.push(from);
        return externals.length - 1;
      } else {
        debug.error('conform expecting Blob, but saw ' + (typeof from));
        externals.push(new Blob([]));
        return externals.length - 1;
      }
    } else {
      return externals[from];
    }
  case 'buffer':
    if (separate) {
      externals.push(Consumer.makeArrayBuffer(from, debug));
      return externals.length - 1;
    } else {
      return Consumer.makeArrayBuffer(externals[from], debug);
    }
  case 'proxy':
    return from;
  }
  var val, i;
  if (Array.isArray(template) && from !== undefined) {
    val = [];
    i = 0;
    if (template.length === 2 && template[0] === 'array') {
      //console.log("template is array, value is " + JSON.stringify(value));
      for (i = 0; i < from.length; i += 1) {
        val.push(Consumer.conform(template[1], from[i], externals,
                                  separate, debug));
      }
    } else {
      for (i = 0; i < template.length; i += 1) {
        if (from[i] !== undefined) {
          val.push(Consumer.conform(template[i], from[i], externals,
                                    separate, debug));
        } else {
          val.push(undefined);
        }
      }
    }
    return val;
  } else if (typeof template === 'object' && from !== undefined) {
    val = {};
    util.eachProp(template, function (prop, name) {
      if (from[name] !== undefined) {
        val[name] = Consumer.conform(prop, from[name], externals, separate,
                                     debug);
      }
    });
    return val;
  }
  debug.error('Unknown template provided: ' + template);
};

/**
 * Make a thing into an Array Buffer
 * @static
 * @method makeArrayBuffer
 * @param {Object} thing
 * @param {Debug} debug A debugger in case of errors.
 * @return {ArrayBuffer} An Array Buffer
 */
Consumer.makeArrayBuffer = function (thing, debug) {
  if (!thing) {
    return new ArrayBuffer(0);
  }

  if (thing instanceof ArrayBuffer) {
    return thing;
  } else if (thing.constructor.name === "ArrayBuffer" &&
      typeof thing.prototype === "undefined") {
    // Workaround for webkit origin ownership issue.
    // https://github.com/UWNetworksLab/freedom/issues/28
    return new DataView(thing).buffer;
  } else {
    debug.error('expecting ArrayBuffer, but saw ' +
        (typeof thing) + ': ' + JSON.stringify(thing));
    return new ArrayBuffer(0);
  }
};

/**
 * Recursively traverse a [nested] object and freeze its keys from being
 * writable. Note, the result can have new keys added to it, but existing ones
 * cannot be  overwritten. Doesn't do anything for arrays or other collections.
 *
 * @method recursiveFreezeObject
 * @static
 * @param {Object} obj - object to be frozen
 * @return {Object} obj
 **/
Consumer.recursiveFreezeObject = function (obj) {
  var k, ret = {};
  if (typeof obj !== 'object') {
    return obj;
  }
  for (k in obj) {
    if (obj.hasOwnProperty(k)) {
      Object.defineProperty(ret, k, {
        value: Consumer.recursiveFreezeObject(obj[k]),
        writable: false,
        enumerable: true
      });
    }
  }
  return ret;
};

module.exports = Consumer;

},{"./util":35}],21:[function(require,module,exports){
/*jslint indent:2, node:true, sloppy:true */
var util = require('./util');

/**
 * A freedom entry point for debugging.
 * @uses handleEvents
 * @implements Port
 * @constructor
 */
var Debug = function (logger) {
  this.id = 'debug';
  this.emitChannel = false;
  this.config = false;
  util.handleEvents(this);
};

/**
 * Provide a textual description of this port.
 * @method toString
 * @return {String} the textual description.
 */
Debug.prototype.toString = function () {
  return '[Console]';
};

/**
 * Register a logger for outputting debugging messages.
 * @method setLogger
 * @param {Console} logger The logger to register
 */
Debug.prototype.setLogger = function (logger) {
  if (this.logger) {
    this.info('Replacing Logger.');
  }
  this.logger = logger;
  this.emit('logger');
};

/**
 * Handler for receiving messages sent to the debug port.
 * These messages are used to retreive config for exposing console.
 * @method onMessage
 * @param {String} source the source identifier for the message.
 * @param {Object} message the received message.
 */
Debug.prototype.onMessage = function (source, message) {
  if (source === 'control' && message.channel && !this.emitChannel) {
    this.emitChannel = message.channel;
    this.config = message.config;
    if (!this.config.global.console) {
      if (typeof console !== 'undefined') {
        this.config.global.console = console;
      } else {
        this.config.global.console = this.getLogger('Console');
      }
    }
    this.emit('ready');
  }
};

/**
 * Dispatch a debug message with arbitrary severity.
 * All debug messages are routed through the manager, to allow for delegation.
 * @method format
 * @param {String} severity the severity of the message.
 * @param {String} source The location of message.
 * @param {String[]} args The contents of the message.
 * @private
 */
Debug.prototype.format = function (severity, source, args) {
  var i, alist = [], argarr;
  if (typeof args === "string" && source) {
    try {
      argarr = JSON.parse(args);
      if (argarr instanceof Array) {
        args = argarr;
      }
    } catch (e) {
      // pass.
    }
  }

  if (typeof args === "string") {
    alist.push(args);
  } else {
    for (i = 0; i < args.length; i += 1) {
      alist.push(args[i]);
    }
  }
  if (!this.emitChannel) {
    this.on('ready', this.format.bind(this, severity, source, alist));
    return;
  }
  this.emit(this.emitChannel, {
    severity: severity,
    source: source,
    quiet: true,
    request: 'debug',
    msg: JSON.stringify(alist)
  });
};

/**
 * Print received messages on the console.
 * This is called by the manager in response to an emission from format.
 * @method print
 * @param {Object} message The message emitted by {@see format} to print.
 */
Debug.prototype.print = function (message) {
  if (!this.logger) {
    this.once('logger', this.print.bind(this, message));
    return;
  }

  var args, arr = [], i = 0;
  args = JSON.parse(message.msg);
  if (typeof args === "string") {
    arr.push(args);
  } else {
    while (args[i] !== undefined) {
      arr.push(args[i]);
      i += 1;
    }
  }
  this.logger[message.severity].call(this.logger, message.source, arr, function () {});
};

/**
 * Print a log message to the console.
 * @method log
 */
Debug.prototype.log = function () {
  this.format('log', undefined, arguments);
};

/**
 * Print an info message to the console.
 * @method log
 */
Debug.prototype.info = function () {
  this.format('info', undefined, arguments);
};

/**
 * Print a debug message to the console.
 * @method log
 */
Debug.prototype.debug = function () {
  this.format('debug', undefined, arguments);
};

/**
 * Print a warning message to the console.
 * @method warn
 */
Debug.prototype.warn = function () {
  this.format('warn', undefined, arguments);
};

/**
 * Print an error message to the console.
 * @method error
 */
Debug.prototype.error = function () {
  this.format('error', undefined, arguments);
};

/**
 * Get a logger that logs messages prefixed by a given name.
 * @method getLogger
 * @param {String} name The prefix for logged messages.
 * @returns {Console} A console-like object.
 */
Debug.prototype.getLogger = function (name) {
  var log = function (severity, source) {
    var args = Array.prototype.splice.call(arguments, 2);
    this.format(severity, source, args);
  },
    logger = {
      freedom: true,
      debug: log.bind(this, 'debug', name),
      info: log.bind(this, 'info', name),
      log: log.bind(this, 'log', name),
      warn: log.bind(this, 'warn', name),
      error: log.bind(this, 'error', name)
    };
  return logger;
};

module.exports = Debug;

},{"./util":35}],22:[function(require,module,exports){
(function (global){
/*jslint indent:2,node:true */
var PromiseCompat = require('es6-promise').Promise;

var Api = require('./api');
var Debug = require('./debug');
var Hub = require('./hub');
var Manager = require('./manager');
var Policy = require('./policy');
var ProxyBinder = require('./proxybinder');
var Resource = require('./resource');
var util = require('./util');
var Bundle = require('./bundle');

var freedomGlobal;
var getGlobal = function () {
  'use strict';
  
  // Node.js
  if (typeof global !== 'undefined' && global.prototype === undefined) {
    freedomGlobal = global;
  // Browsers
  } else {
    setTimeout(function () {
      freedomGlobal = this;
    }, 0);
  }
};
getGlobal();

/**
 * Create a new freedom context.
 * @param {Object} context Information about the local context.
 * @see {util/workerEntry.js}
 * @param {String} manifest The manifest to load.
 * @param {Object} config Configuration keys set by the user.
 * @returns {Promise} A promise for the module defined in the manifest.
 */
var setup = function (context, manifest, config) {
  'use strict';
  var debug = new Debug(),
    hub = new Hub(debug),
    resource = new Resource(debug),
    api = new Api(debug),
    manager = new Manager(hub, resource, api),
    binder = new ProxyBinder(manager),
    policy,
    site_cfg = {
      'debug': 'log',
      'manifest': manifest,
      'moduleContext': (!context || typeof (context.isModule) === "undefined") ?
          util.isModuleContext() :
          context.isModule
    },
    link,
    Port,
    cleanup = function () {
      api.cleanup();
      manager.destroy();
    };

  if (config) {
    util.mixin(site_cfg, config, true);
  }
  site_cfg.global = freedomGlobal;
  if (context) {
    util.mixin(site_cfg, context, true);
  }

  // Register user-supplied extensions.
  // For example the 'core.oauth' provider defines a register function,
  // which enables site_cfg.oauth to be registered with it.
  context.providers.forEach(function (provider) {
    var name;
    if (provider.name.indexOf('core.') === 0 &&
        typeof provider.register === 'function') {
      name = provider.name.substr(5);
      // Invert priority and prefer user config over local context for these.
      if (config && config[name]) {
        provider.register(config[name]);
      } else if (site_cfg[name]) {
        provider.register(site_cfg[name]);
      } else {
        provider.register(undefined);
      }
    }
  });
  
  Bundle.register(context.providers, api);
  resource.register(context.resolvers || []);

  return new PromiseCompat(function (resolve, reject) {
    if (site_cfg.moduleContext) {
      Port = site_cfg.portType;
      link = new Port('Outbound', resource);
      manager.setup(link);

      // Delay debug messages until delegation to the parent context is setup.
      manager.once('delegate', manager.setup.bind(manager, debug));
    } else {
      manager.setup(debug);
      policy = new Policy(manager, resource, site_cfg);

      // Define how to load a root module.
      var fallbackLogger, getIface;
      fallbackLogger = function (message) {
        api.getCore('core.console', {
          config: site_cfg
        }).then(function (provider) {
          var logger = new provider.inst();
          debug.setLogger(logger);
          if (message) {
            debug.error(message);
          }
        });
      };
      getIface = function (manifest) {
        return resource.get(site_cfg.location, manifest).then(
          function (canonical_manifest) {
            return policy.get([], canonical_manifest);
          }
        ).then(function (instance) {
          manager.setup(instance);
          return binder.bindDefault(instance, api, instance.manifest);
        });
      };

      // Load appropriate Logger.
      if (site_cfg.logger) {
        getIface(site_cfg.logger).then(function (iface) {
          if (iface.external.api !== 'console') {
            fallbackLogger("Unwilling to use logger with unknown API:",
              iface.external.api);
          } else {
            debug.setLogger(iface.external());
          }
        }, fallbackLogger);
      } else {
        fallbackLogger();
      }

      // Load root module.
      getIface(site_cfg.manifest).then(function (iface) {
        iface.port.once('close', cleanup);
        return iface.external;
      }, function (err) {
        debug.error('Failed to retrieve manifest: ' + err);
        throw err;
      }).then(resolve, reject);
    }

    hub.emit('config', site_cfg);
  });
};

module.exports = setup;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./api":18,"./bundle":19,"./debug":21,"./hub":23,"./manager":26,"./policy":29,"./proxybinder":33,"./resource":34,"./util":35,"es6-promise":2}],23:[function(require,module,exports){
/*jslint indent:2,sloppy:true,node:true */
var util = require('./util');

/**
 * Defines fdom.Hub, the core message hub between freedom modules.
 * Incomming messages from apps are sent to hub.onMessage()
 * @class Hub
 * @param {Debug} debug Logger for debugging.
 * @constructor
 */
var Hub = function (debug) {
  this.debug = debug;
  this.config = {};
  this.apps = {};
  this.routes = {};

  util.handleEvents(this);
  this.on('config', function (config) {
    util.mixin(this.config, config);
  }.bind(this));
};

/**
 * Handle an incoming message from a freedom app.
 * @method onMessage
 * @param {String} source The identifiying source of the message.
 * @param {Object} message The sent message.
 */
Hub.prototype.onMessage = function (source, message) {
  var destination = this.routes[source], type;
  if (!destination || !destination.app) {
    this.debug.warn("Message dropped from unregistered source " + source);
    return;
  }

  if (!this.apps[destination.app]) {
    this.debug.warn("Message dropped to destination " + destination.app);
    return;
  }

  // The firehose tracing all internal freedom.js messages.
  if (!message.quiet && !destination.quiet && this.config && this.config.trace) {
    type = message.type;
    if (message.type === 'message' && message.message &&
        message.message.action === 'method') {
      type = 'method.' + message.message.type;
    } else if (message.type === 'method' && message.message &&
        message.message.type === 'method') {
      type = 'return.' + message.message.name;
    } else if (message.type === 'message' && message.message &&
        message.message.type === 'event') {
      type = 'event.' + message.message.name;
    }
    this.debug.debug(this.apps[destination.source].toString() +
        " -" + type + "-> " +
        this.apps[destination.app].toString() + "." + destination.flow);
  }

  this.apps[destination.app].onMessage(destination.flow, message);
};

/**
 * Get the local destination port of a flow.
 * @method getDestination
 * @param {String} source The flow to retrieve.
 * @return {Port} The destination port.
 */
Hub.prototype.getDestination = function (source) {
  var destination = this.routes[source];
  if (!destination) {
    return null;
  }
  return this.apps[destination.app];
};

/**
 * Get the local source port of a flow.
 * @method getSource
 * @param {Port} source The flow identifier to retrieve.
 * @return {Port} The source port.
 */
Hub.prototype.getSource = function (source) {
  if (!source) {
    return false;
  }
  if (!this.apps[source.id]) {
    this.debug.warn("No registered source '" + source.id + "'");
    return false;
  }
  return this.apps[source.id];
};

/**
 * Register a destination for messages with this hub.
 * @method register
 * @param {Port} app The Port to register.
 * @param {Boolean} [force] Whether to override an existing port.
 * @return {Boolean} Whether the app was registered.
 */
Hub.prototype.register = function (app, force) {
  if (!this.apps[app.id] || force) {
    this.apps[app.id] = app;
    return true;
  } else {
    return false;
  }
};

/**
 * Deregister a destination for messages with the hub.
 * Note: does not remove associated routes. As such, deregistering will
 * prevent the installation of new routes, but will not distrupt existing
 * hub routes.
 * @method deregister
 * @param {Port} app The Port to deregister
 * @return {Boolean} Whether the app was deregistered.
 */
Hub.prototype.deregister = function (app) {
  if (!this.apps[app.id]) {
    return false;
  }
  delete this.apps[app.id];
  return true;
};

/**
 * Install a new route in the hub.
 * @method install
 * @param {Port} source The source of the route.
 * @param {Port} destination The destination of the route.
 * @param {String} flow The flow where the destination will receive messages.
 * @param {Boolean} quiet Whether messages on this route should be suppressed.
 * @return {String} A routing source identifier for sending messages.
 */
Hub.prototype.install = function (source, destination, flow, quiet) {
  source = this.getSource(source);
  if (!source) {
    return;
  }
  if (!destination) {
    this.debug.warn("Unwilling to generate blackhole flow from " + source.id);
    return;
  }

  var route = this.generateRoute();
  this.routes[route] = {
    app: destination,
    flow: flow,
    source: source.id,
    quiet: quiet
  };
  if (typeof source.on === 'function') {
    source.on(route, this.onMessage.bind(this, route));
  }

  return route;
};

/**
 * Uninstall a hub route.
 * @method uninstall
 * @param {Port} source The source of the route.
 * @param {String} flow The route to uninstall.
 * @return {Boolean} Whether the route was able to be uninstalled.
 */
Hub.prototype.uninstall = function (source, flow) {
  source = this.getSource(source);
  if (!source) {
    return;
  }

  var route = this.routes[flow];
  if (!route) {
    return false;
  } else if (route.source !== source.id) {
    this.debug.warn("Flow " + flow + " does not belong to port " + source.id);
    return false;
  }

  delete this.routes[flow];
  if (typeof source.off === 'function') {
    source.off(route);
  }
  return true;
};

/**
 * Remove all listeners and notify all connected destinations of their removal.
 * @method teardown
 */
Hub.prototype.teardown = function () {
  util.eachProp(this.apps, function (source) {
    if (typeof source.off === 'function') {
      source.off();
    }
  });
  this.apps = {};
  this.routes = {};
};

/**
 * Generate a unique routing identifier.
 * @method generateRoute
 * @return {String} a routing source identifier.
 * @private
 */
Hub.prototype.generateRoute = function () {
  return util.getId();
};

module.exports = Hub;

},{"./util":35}],24:[function(require,module,exports){
/*jslint indent:2, node:true, sloppy:true */
var util = require('./util');

/**
 * A link connects two freedom hubs. This is an abstract class
 * providing common functionality of translating control channels,
 * and integrating config information.
 * @class Link
 * @implements Port
 * @constructor
 */
var Link = function (name, resource) {
  this.id = 'Link' + Math.random();
  this.name = name;
  this.resource = resource;
  this.config = {};
  this.src = null;

  util.handleEvents(this);
  util.mixin(this, Link.prototype);
};

/**
 * Receive messages from the hub to this port.
 * Manages startup, and passes others to 'deliverMessage' implemented
 * in derived classes.
 * @method onMessage
 * @param {String} flow the channel/flow of the message.
 * @param {Object} message The Message.
 */
Link.prototype.onMessage = function (flow, message) {
  if (flow === 'control' && !this.controlChannel) {
    if (!this.controlChannel && message.channel) {
      this.controlChannel = message.channel;
      util.mixin(this.config, message.config);
      this.start();
    }
  } else {
    this.deliverMessage(flow, message);
  }
};

/**
 * Register a handler to alert of errors on this port.
 * @method addErrorHandler
 * @param {Function} handler Method to call with errors.
 */
Link.prototype.addErrorHandler = function (handler) {
  this.onError = handler;
};

/**
 * Report an error on this link.
 * @method onerror
 * @param {Error} err The error that occurred.
 */
Link.prototype.onError = function (err) {
  //Filled in by addErrorHandler
};

/**
 * Emit messages to the the hub, mapping control channels.
 * @method emitMessage
 * @param {String} flow the flow to emit the message on.
 * @param {Object} messgae The message to emit.
 */
Link.prototype.emitMessage = function (flow, message) {
  if (flow === 'control' && this.controlChannel) {
    flow = this.controlChannel;
  }
  this.emit(flow, message);
};

module.exports = Link;

},{"./util":35}],25:[function(require,module,exports){
/*globals Worker */
/*jslint indent:2, white:true, node:true, sloppy:true, browser:true */
var Link = require('../link');

/**
 * A port providing message transport between two freedom contexts via Worker.
 * @class Worker
 * @extends Link
 * @uses handleEvents
 * @constructor
 */
var WorkerLink = function(id, resource) {
  Link.call(this, id, resource);
  if (id) {
    this.id = id;
  }
};

/**
 * Start this port by listening or creating a worker.
 * @method start
 * @private
 */
WorkerLink.prototype.start = function() {
  if (this.config.moduleContext) {
    this.setupListener();
  } else {
    this.setupWorker();
  }
};

/**
 * Stop this port by destroying the worker.
 * @method stop
 * @private
 */
WorkerLink.prototype.stop = function() {
  // Function is determined by setupListener or setupFrame as appropriate.
};

/**
 * Get the textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
WorkerLink.prototype.toString = function() {
  return "[Worker " + this.id + "]";
};

/**
 * Set up a global listener to handle incoming messages to this
 * freedom.js context.
 * @method setupListener
 */
WorkerLink.prototype.setupListener = function() {
  var onMsg = function(msg) {
    this.emitMessage(msg.data.flow, msg.data.message);
  }.bind(this);
  this.obj = this.config.global;
  this.obj.addEventListener('message', onMsg, true);
  this.stop = function() {
    this.obj.removeEventListener('message', onMsg, true);
    delete this.obj;
  };
  this.emit('started');
  this.obj.postMessage("Ready For Messages");
};

/**
 * Set up a worker with an isolated freedom.js context inside.
 * @method setupWorker
 */
WorkerLink.prototype.setupWorker = function() {
  var worker,
    blob,
    self = this;
  worker = new Worker(this.config.source + '#' + this.id);

  worker.addEventListener('error', function(err) {
    this.onError(err);
  }.bind(this), true);
  worker.addEventListener('message', function(worker, msg) {
    if (!this.obj) {
      this.obj = worker;
      this.emit('started');
      return;
    }
    this.emitMessage(msg.data.flow, msg.data.message);
  }.bind(this, worker), true);
  this.stop = function() {
    worker.terminate();
    if (this.obj) {
      delete this.obj;
    }
  };
};

/**
 * Receive messages from the hub to this port.
 * Received messages will be emitted from the other side of the port.
 * @method deliverMessage
 * @param {String} flow the channel/flow of the message.
 * @param {Object} message The Message.
 */
WorkerLink.prototype.deliverMessage = function(flow, message) {
  if (flow === 'control' && message.type === 'close' &&
      message.channel === 'control') {
    this.stop();
  } else {
    if (this.obj) {
      this.obj.postMessage({
        flow: flow,
        message: message
      });
    } else {
      this.once('started', this.onMessage.bind(this, flow, message));
    }
  }
};

module.exports = WorkerLink;


},{"../link":24}],26:[function(require,module,exports){
/*jslint indent:2,node:true,sloppy:true */
var util = require('./util');
var ModuleInternal = require('./moduleinternal');

/**
 * A freedom port which manages the control plane of of changing hub routes.
 * @class Manager
 * @implements Port
 * @param {Hub} hub The routing hub to control.
 * @param {Resource} resource The resource manager for the runtime.
 * @param {Api} api The API manager for the runtime.
 * @constructor
 */
var Manager = function (hub, resource, api) {
  this.id = 'control';
  this.config = {};
  this.controlFlows = {};
  this.dataFlows = {};
  this.dataFlows[this.id] = [];
  this.reverseFlowMap = {};

  this.debug = hub.debug;
  this.hub = hub;
  this.resource = resource;
  this.api = api;

  this.delegate = null;
  this.toDelegate = {};
  
  this.hub.on('config', function (config) {
    util.mixin(this.config, config);
    this.emit('config');
  }.bind(this));
  
  util.handleEvents(this);
  this.hub.register(this);
};

/**
 * Provide a textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
Manager.prototype.toString = function () {
  return "[Local Controller]";
};

/**
 * Process messages sent to this port.
 * The manager, or 'control' destination handles several types of messages,
 * identified by the request property.  The actions are:
 * 1. debug. Prints the message to the console.
 * 2. link. Creates a link between the source and a provided destination port.
 * 3. environment. Instantiate a module environment defined in ModuleInternal.
 * 4. delegate. Routes a defined set of control messages to another location.
 * 5. resource. Registers the source as a resource resolver.
 * 6. core. Generates a core provider for the requester.
 * 7. close. Tears down routes involing the requesting port.
 * 8. unlink. Tears down a route from the requesting port.
 * @method onMessage
 * @param {String} flow The source identifier of the message.
 * @param {Object} message The received message.
 */
Manager.prototype.onMessage = function (flow, message) {
  var reverseFlow = this.controlFlows[flow], origin;
  if (!reverseFlow) {
    this.debug.warn("Unknown message source: " + flow);
    return;
  }
  origin = this.hub.getDestination(reverseFlow);

  if (this.delegate && reverseFlow !== this.delegate &&
      this.toDelegate[flow]) {
    // Ship off to the delegee
    this.emit(this.delegate, {
      type: 'Delegation',
      request: 'handle',
      quiet: true,
      flow: flow,
      message: message
    });
    return;
  }

  if (message.request === 'debug') {
    this.debug.print(message);
    return;
  }

  if (message.request === 'link') {
    this.createLink(origin, message.name, message.to, message.overrideDest);
  } else if (message.request === 'environment') {
    this.createLink(origin, message.name, new ModuleInternal(this));
  } else if (message.request === 'delegate') {
    // Initate Delegation.
    if (this.delegate === null) {
      this.delegate = reverseFlow;
    }
    this.toDelegate[message.flow] = true;
    this.emit('delegate');
  } else if (message.request === 'resource') {
    this.resource.addResolver(message.args[0]);
    this.resource.addRetriever(message.service, message.args[1]);
  } else if (message.request === 'core') {
    if (this.core && reverseFlow === this.delegate) {
      (new this.core()).onMessage(origin, message.message);
      return;
    }
    this.getCore(function (to, core) {
      this.hub.onMessage(to, {
        type: 'core',
        core: core
      });
    }.bind(this, reverseFlow));
  } else if (message.request === 'close') {
    this.destroy(origin);
  } else if (message.request === 'unlink') {
    this.removeLink(origin, message.to);
  } else {
    this.debug.warn("Unknown control request: " + message.request);
    this.debug.log(JSON.stringify(message));
    return;
  }
};

/**
 * Get the port messages will be routed to given its id.
 * @method getPort
 * @param {String} portId The ID of the port.
 * @returns {fdom.Port} The port with that ID.
 */
Manager.prototype.getPort = function (portId) {
  return this.hub.getDestination(this.controlFlows[portId]);
};

/**
 * Set up a port with the hub.
 * @method setup
 * @param {Port} port The port to register.
 */
Manager.prototype.setup = function (port) {
  if (!port.id) {
    this.debug.warn("Refusing to setup unidentified port ");
    return false;
  }

  if (this.controlFlows[port.id]) {
    this.debug.warn("Refusing to re-initialize port " + port.id);
    return false;
  }

  if (!this.config.global) {
    this.once('config', this.setup.bind(this, port));
    return;
  }

  this.hub.register(port);
  var flow = this.hub.install(this, port.id, "control"),
    reverse = this.hub.install(port, this.id, port.id);
  this.controlFlows[port.id] = flow;
  this.dataFlows[port.id] = [reverse];
  this.reverseFlowMap[flow] = reverse;
  this.reverseFlowMap[reverse] = flow;

  if (port.lineage) {
    this.emit('moduleAdd', {id: port.id, lineage: port.lineage});
  }
  
  this.hub.onMessage(flow, {
    type: 'setup',
    channel: reverse,
    config: this.config
  });

  return true;
};

/**
 * Tear down a port on the hub, or the full local hub.
 * @method destroy
 * @apram {Port?} port The port to unregister.
 */
Manager.prototype.destroy = function (port) {
  if (!port) {
    // Tear down everything!
    util.eachProp(this.controlFlows, function (flow) {
      this.hub.onMessage(flow, {
        type: 'close'
      });
    }.bind(this));
    this.hub.teardown();
    return;
  }

  if (!port.id) {
    this.debug.warn("Unable to tear down unidentified port");
    return false;
  }

  if (port.lineage) {
    this.emit('moduleRemove', {id: port.id, lineage: port.lineage});
  }

  // Remove the port.
  delete this.controlFlows[port.id];

  // Remove associated links.
  var i;
  for (i = this.dataFlows[port.id].length - 1; i >= 0; i -= 1) {
    this.removeLink(port, this.dataFlows[port.id][i]);
  }

  // Remove the port.
  delete this.dataFlows[port.id];
  this.hub.deregister(port);
};

/**
 * Create a link between two ports.  Links are created in both directions,
 * and a message with those capabilities is sent to the source port.
 * @method createLink
 * @param {Port} port The source port.
 * @param {String} name The flow for messages from destination to port.
 * @param {Port} destination The destination port.
 * @param {String} [destName] The flow name for messages to the destination.
 * @param {Boolean} [toDest] Tell the destination about the link.
 */
Manager.prototype.createLink = function (port, name, destination, destName,
                                         toDest) {
  if (!this.config.global) {
    this.once('config',
      this.createLink.bind(this, port, name, destination, destName));
    return;
  }
  
  if (!this.controlFlows[port.id]) {
    this.debug.warn('Unwilling to link from non-registered source.');
    return;
  }

  if (!this.controlFlows[destination.id]) {
    if (this.setup(destination) === false) {
      this.debug.warn('Could not find or setup destination.');
      return;
    }
  }
  var quiet = destination.quiet || false,
    outgoingName = destName || 'default',
    outgoing = this.hub.install(port, destination.id, outgoingName, quiet),
    reverse;

  // Recover the port so that listeners are installed.
  destination = this.hub.getDestination(outgoing);
  reverse = this.hub.install(destination, port.id, name, quiet);

  this.reverseFlowMap[outgoing] = reverse;
  this.dataFlows[port.id].push(outgoing);
  this.reverseFlowMap[reverse] = outgoing;
  this.dataFlows[destination.id].push(reverse);

  if (toDest) {
    this.hub.onMessage(this.controlFlows[destination.id], {
      type: 'createLink',
      name: outgoingName,
      channel: reverse,
      reverse: outgoing
    });
  } else {
    this.hub.onMessage(this.controlFlows[port.id], {
      name: name,
      type: 'createLink',
      channel: outgoing,
      reverse: reverse
    });
  }
};

/**
 * Remove a link between to ports. The reverse link will also be removed.
 * @method removeLink
 * @param {Port} port The source port.
 * @param {String} name The flow to be removed.
 */
Manager.prototype.removeLink = function (port, name) {
  var reverse = this.hub.getDestination(name),
    rflow = this.reverseFlowMap[name],
    i;

  if (!reverse || !rflow) {
    this.debug.warn("Could not find metadata to remove flow: " + name);
    return;
  }

  if (this.hub.getDestination(rflow).id !== port.id) {
    this.debug.warn("Source port does not own flow " + name);
    return;
  }

  // Notify ports that a channel is closing.
  i = this.controlFlows[port.id];
  if (i) {
    this.hub.onMessage(i, {
      type: 'close',
      channel: name
    });
  }
  i = this.controlFlows[reverse.id];
  if (i) {
    this.hub.onMessage(i, {
      type: 'close',
      channel: rflow
    });
  }

  // Uninstall the channel.
  this.hub.uninstall(port, name);
  this.hub.uninstall(reverse, rflow);

  delete this.reverseFlowMap[name];
  delete this.reverseFlowMap[rflow];
  this.forgetFlow(reverse.id, rflow);
  this.forgetFlow(port.id, name);
};

/**
 * Forget the flow from id with a given name.
 * @method forgetFlow
 * @private
 * @param {String} id The port ID of the source.
 * @param {String} name The flow name.
 */
Manager.prototype.forgetFlow = function (id, name) {
  var i;
  if (this.dataFlows[id]) {
    for (i = 0; i < this.dataFlows[id].length; i += 1) {
      if (this.dataFlows[id][i] === name) {
        this.dataFlows[id].splice(i, 1);
        break;
      }
    }
  }
};

/**
 * Get the core freedom.js API active on the current hub.
 * @method getCore
 * @private
 * @param {Function} cb Callback to fire with the core object.
 */
Manager.prototype.getCore = function (cb) {
  if (this.core) {
    cb(this.core);
  } else {
    this.api.getCore('core', this).then(function (core) {
      this.core = core.inst;
      cb(this.core);
    }.bind(this), function () {
      cb(undefined);
    });
  }
};

module.exports = Manager;

},{"./moduleinternal":28,"./util":35}],27:[function(require,module,exports){
/*jslint indent:2,node:true,sloppy:true */
var util = require('./util');
var Provider = require('./provider');

/**
 * The external Port face of a module on a hub.
 * @class Module
 * @extends Port
 * @param {String} manifestURL The manifest this module loads.
 * @param {String[]} creator The lineage of creation for this module.
 * @param {Policy} Policy The policy loader for dependencies.
 * @constructor
 */
var Module = function (manifestURL, manifest, creator, policy) {
  this.api = policy.api;
  this.policy = policy;
  this.resource = policy.resource;
  this.debug = policy.debug;

  this.config = {};

  this.id = manifestURL + Math.random();
  this.manifestId = manifestURL;
  this.manifest = manifest;
  this.lineage = [this.manifestId].concat(creator);

  this.quiet = this.manifest.quiet || false;

  this.externalPortMap = {};
  this.internalPortMap = {};
  this.dependantChannels = [];
  this.started = false;

  util.handleEvents(this);
};

/**
 * Receive a message for the Module.
 * @method onMessage
 * @param {String} flow The origin of the message.
 * @param {Object} message The message received.
 */
Module.prototype.onMessage = function (flow, message) {
  if (flow === 'control') {
    if (message.type === 'setup') {
      this.controlChannel = message.channel;
      util.mixin(this.config, message.config);
      this.emit(this.controlChannel, {
        type: 'Core Provider',
        request: 'core'
      });
      this.start();
      return;
    } else if (message.type === 'createLink' && message.channel) {
      this.debug.debug(this + 'got create link for ' + message.name);
      this.externalPortMap[message.name] = message.channel;
      if (this.internalPortMap[message.name] === undefined) {
        this.internalPortMap[message.name] = false;
      }
      var msg = {
        type: 'default channel announcement',
        channel: message.reverse
      };
      if (this.manifest.dependencies &&
          this.manifest.dependencies[message.name]) {
        msg.api = this.manifest.dependencies[message.name].api;
      }
      this.emit(message.channel, msg);
      return;
    } else if (message.core) {
      this.core = new message.core();
      this.emit('core', message.core);
      return;
    } else if (message.type === 'close') {
      // Closing channel.
      if (!message.channel || message.channel === 'control') {
        this.stop();
      }
      this.deregisterFlow(message.channel, false);
    } else {
      this.port.onMessage(flow, message);
    }
  } else {
    if ((this.externalPortMap[flow] === false ||
        !this.externalPortMap[flow]) && message.channel) {
      this.debug.debug(this + 'handling channel announcement for ' + flow);
      this.externalPortMap[flow] = message.channel;
      if (this.internalPortMap[flow] === undefined) {
        this.internalPortMap[flow] = false;

        // New incoming connection attempts should get routed to modInternal.
        if (this.manifest.provides && this.modInternal) {
          this.port.onMessage(this.modInternal, {
            type: 'Connection',
            channel: flow,
            api: message.api
          });
        } else if (this.manifest.provides) {
          this.once('modInternal', function (flow, api) {
            this.port.onMessage(this.modInternal, {
              type: 'Connection',
              channel: flow,
              api: api
            });
          }.bind(this, flow, message.api));
        // First connection retains legacy mapping as 'default'.
        } else if (!this.externalPortMap['default'] && message.channel) {
          this.externalPortMap['default'] = message.channel;
          this.once('internalChannelReady', function (flow) {
            this.internalPortMap[flow] = this.internalPortMap['default'];
          }.bind(this, flow));
        }
      }
      return;
    } else if (!this.started) {
      this.once('start', this.onMessage.bind(this, flow, message));
    } else {
      if (this.internalPortMap[flow] === false) {
        console.warn('waiting on internal channel for msg');
        this.once('internalChannelReady', this.onMessage.bind(this, flow, message));
      } else if (!this.internalPortMap[flow]) {
        this.debug.error('Unexpected message from ' + flow);
        return;
      } else {
        this.port.onMessage(this.internalPortMap[flow], message);
      }
    }
  }
};

/**
 * Clean up after a flow which is no longer used / needed.
 * @method deregisterFLow
 * @param {String} flow The flow to remove mappings for.
 * @param {Boolean} internal If the flow name is the internal identifier.
 * @returns {Boolean} Whether the flow was successfully deregistered.
 * @private
 */
Module.prototype.deregisterFlow = function (flow, internal) {
  var key,
    map = internal ? this.internalPortMap : this.externalPortMap;
  // TODO: this is inefficient, but seems less confusing than a 3rd
  // reverse lookup map.
  for (key in map) {
    if (map[key] === flow) {
      if (internal) {
        this.emit(this.controlChannel, {
          type: 'Channel Teardown',
          request: 'unlink',
          to: this.externalPortMap[key]
        });
      } else if (this.port) {
        this.port.onMessage('control', {
          type: 'close',
          channel: this.internalPortMap[key]
        });
      }
      delete this.externalPortMap[key];
      delete this.internalPortMap[key];

      // When there are still non-dependant channels, keep running
      for (key in this.externalPortMap) {
        if (this.externalPortMap.hasOwnProperty(key)) {
          if (this.dependantChannels.indexOf(key) < 0) {
            return true;
          }
        }
      }
      // Otherwise shut down the module.
      this.stop();
      return true;
    }
  }
  return false;
};

/**
 * Attempt to start the module once the remote freedom context
 * exists.
 * @method start
 * @private
 */
Module.prototype.start = function () {
  var Port;
  if (this.started || this.port) {
    return false;
  }
  if (this.controlChannel) {
    this.loadLinks();
    Port = this.config.portType;
    this.port = new Port(this.manifest.name, this.resource);
    // Listen to all port messages.
    this.port.on(this.emitMessage.bind(this));
    this.port.addErrorHandler(function (err) {
      this.debug.warn('Module Failed', err);
      this.emit(this.controlChannel, {
        request: 'close'
      });
    }.bind(this));
    // Tell the local port to ask us for help.
    this.port.onMessage('control', {
      channel: 'control',
      config: this.config
    });

    // Tell the remote location to delegate debugging.
    this.port.onMessage('control', {
      type: 'Redirect',
      request: 'delegate',
      flow: 'debug'
    });
    this.port.onMessage('control', {
      type: 'Redirect',
      request: 'delegate',
      flow: 'core'
    });
    
    // Tell the container to instantiate the counterpart to this external view.
    this.port.onMessage('control', {
      type: 'Environment Configuration',
      request: 'environment',
      name: 'ModInternal'
    });
  }
};

/**
 * Stop the module when it is no longer needed, and tear-down state.
 * @method stop
 * @private
 */
Module.prototype.stop = function () {
  if (!this.started) {
    return;
  }
  this.emit('close');
  if (this.port) {
    this.port.off();
    this.port.onMessage('control', {
      type: 'close',
      channel: 'control'
    });
    this.port.stop();
    delete this.port;
  }
  delete this.policy;
  this.started = false;
};

/**
 * Textual Description of the Port
 * @method toString
 * @return {String} The description of this Port.
 */
Module.prototype.toString = function () {
  return "[Module " + this.manifest.name + "]";
};

/**
 * Intercept messages as they arrive from the module,
 * mapping them between internal and external flow names.
 * @method emitMessage
 * @param {String} name The destination the module wants to send to.
 * @param {Object} message The message to send.
 * @private
 */
Module.prototype.emitMessage = function (name, message) {
  if (this.internalPortMap[name] === false && message.channel) {
    this.internalPortMap[name] = message.channel;
    this.emit('internalChannelReady');
    return;
  }
  // Terminate debug redirection requested in start().
  if (name === 'control') {
    if (message.flow === 'debug' && message.message) {
      this.debug.format(message.message.severity,
          message.message.source || this.toString(),
          message.message.msg);
    } else if (message.flow === 'core' && message.message) {
      if (!this.core) {
        this.once('core', this.emitMessage.bind(this, name, message));
        return;
      }
      if (message.message.type === 'register') {
        message.message.reply = this.port.onMessage.bind(this.port, 'control');
        this.externalPortMap[message.message.id] = false;
      }
      this.core.onMessage(this, message.message);
    } else if (message.name === 'ModInternal' && !this.modInternal) {
      this.modInternal = message.channel;
      this.port.onMessage(this.modInternal, {
        type: 'Initialization',
        id: this.manifestId,
        appId: this.id,
        manifest: this.manifest,
        lineage: this.lineage,
        channel: message.reverse
      });
      this.emit('modInternal');
    } else if (message.type === 'createLink') {
      this.internalPortMap[message.name] = message.channel;
      this.port.onMessage(message.channel, {
        type: 'channel announcement',
        channel: message.reverse
      });
      this.emit('internalChannelReady');
    } else if (message.type === 'close') {
      this.deregisterFlow(message.channel, true);
    }
  } else if (name === 'ModInternal' && message.type === 'ready' && !this.started) {
    this.started = true;
    this.emit('start');
  } else if (name === 'ModInternal' && message.type === 'resolve') {
    this.resource.get(this.manifestId, message.data).then(function (id, data) {
      this.port.onMessage(this.modInternal, {
        type: 'resolve response',
        id: id,
        data: data
      });
    }.bind(this, message.id), function () {
      this.debug.warn('Error Resolving URL for Module.');
    }.bind(this));
  } else {
    this.emit(this.externalPortMap[name], message);
  }
  return false;
};

/**
 * Request the external routes used by this module.
 * @method loadLinks
 * @private
 */
Module.prototype.loadLinks = function () {
  var i, channels = ['default'], name, dep;

  if (this.manifest.permissions) {
    for (i = 0; i < this.manifest.permissions.length; i += 1) {
      name = this.manifest.permissions[i];
      if (channels.indexOf(name) < 0 && name.indexOf('core.') === 0) {
        channels.push(name);
        this.dependantChannels.push(name);
        dep = new Provider(this.api.get(name).definition, this.debug);
        this.api.provideCore(name, dep, this);

        this.emit(this.controlChannel, {
          type: 'Core Link to ' + name,
          request: 'link',
          name: name,
          to: dep
        });
      }
    }
  }
  if (this.manifest.dependencies) {
    util.eachProp(this.manifest.dependencies, function (desc, name) {
      if (channels.indexOf(name) < 0) {
        channels.push(name);
        this.dependantChannels.push(name);
      }
      this.resource.get(this.manifestId, desc.url).then(function (url) {
        this.policy.get(this.lineage, url).then(function (dep) {
          this.updateEnv(name, dep.manifest);
          this.emit(this.controlChannel, {
            type: 'Link to ' + name,
            request: 'link',
            name: name,
            overrideDest: name + '.' + this.id,
            to: dep
          });
        }.bind(this), function (err) {
          this.debug.warn('failed to load dep: ', name, err);
        }.bind(this));
      }.bind(this), function (err) {
        this.debug.warn('failed to load dep: ', name, err);
      }.bind(this));
    }.bind(this));
  }
  // Note that messages can be synchronous, so some ports may already be bound.
  for (i = 0; i < channels.length; i += 1) {
    this.externalPortMap[channels[i]] = this.externalPortMap[channels[i]] || false;
    this.internalPortMap[channels[i]] = false;
  }
};

/**
 * Update the module environment with information about a dependent manifest.
 * @method updateEnv
 * @param {String} dep The dependency
 * @param {Object} manifest The manifest of the dependency
 */
Module.prototype.updateEnv = function (dep, manifest) {
  if (!manifest) {
    return;
  }
  if (!this.modInternal) {
    this.once('modInternal', this.updateEnv.bind(this, dep, manifest));
    return;
  }
  
  var metadata;

  // Decide if/what other properties should be exported.
  // Keep in sync with ModuleInternal.updateEnv
  metadata = {
    name: manifest.name,
    icon: manifest.icon,
    description: manifest.description,
    api: manifest.api
  };
  
  this.port.onMessage(this.modInternal, {
    type: 'manifest',
    name: dep,
    manifest: metadata
  });
};

module.exports = Module;

},{"./provider":30,"./util":35}],28:[function(require,module,exports){
/*jslint indent:2, node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;

var ApiInterface = require('./proxy/apiInterface');
var Provider = require('./provider');
var ProxyBinder = require('./proxybinder');
var util = require('./util');

/**
 * The internal logic for module setup, which makes sure the public
 * facing exports have appropriate properties, and load user scripts.
 * @class ModuleInternal
 * @extends Port
 * @param {Port} manager The manager in this module to use for routing setup.
 * @constructor
 */
var ModuleInternal = function (manager) {
  this.config = {};
  this.manager = manager;
  this.debug = manager.debug;
  this.binder = new ProxyBinder(this.manager);
  this.api = this.manager.api;
  this.manifests = {};
  this.providers = {};
  
  this.id = 'ModuleInternal';
  this.pendingPorts = 0;
  this.requests = {};

  util.handleEvents(this);
};

/**
 * Message handler for this port.
 * This port only handles two messages:
 * The first is its setup from the manager, which it uses for configuration.
 * The second is from the module controller (fdom.port.Module), which provides
 * the manifest info for the module.
 * @method onMessage
 * @param {String} flow The detination of the message.
 * @param {Object} message The message.
 */
ModuleInternal.prototype.onMessage = function (flow, message) {
  if (flow === 'control') {
    if (!this.controlChannel && message.channel) {
      this.controlChannel = message.channel;
      util.mixin(this.config, message.config);
    }
  } else if (flow === 'default' && !this.appId) {
    // Recover the ID of this module:
    this.port = this.manager.hub.getDestination(message.channel);
    this.externalChannel = message.channel;
    this.appId = message.appId;
    this.lineage = message.lineage;

    var objects = this.mapProxies(message.manifest);

    this.generateEnv(message.manifest, objects).then(function () {
      return this.loadLinks(objects);
    }.bind(this)).then(this.loadScripts.bind(this, message.id,
        message.manifest.app.script)).then(null, function (err) {
      this.debug.error('Could not set up module ' + this.appId + ': ', err);
    }.bind(this));
  } else if (flow === 'default' && this.requests[message.id]) {
    this.requests[message.id](message.data);
    delete this.requests[message.id];
  } else if (flow === 'default' && message.type === 'manifest') {
    this.emit('manifest', message);
    this.updateManifest(message.name, message.manifest);
  } else if (flow === 'default' && message.type === 'Connection') {
    // Multiple connections can be made to the default provider.
    if (message.api && this.providers[message.api]) {
      this.manager.createLink(this.providers[message.api], message.channel,
                             this.port, message.channel);
    } else if (this.defaultPort &&
               (message.api === this.defaultPort.api || !message.api)) {
      this.manager.createLink(this.defaultPort, message.channel,
                              this.port, message.channel);
    } else {
      this.once('start', this.onMessage.bind(this, flow, message));
    }
  }
};

/**
 * Get a textual description of this Port.
 * @method toString
 * @return {String} a description of this Port.
 */
ModuleInternal.prototype.toString = function () {
  return "[Environment Helper]";
};

/**
 * Generate an externaly visisble namespace
 * @method generateEnv
 * @param {Object} manifest The manifest of the module.
 * @param {Object[]} items Other interfaces to load.
 * @returns {Promise} A promise when the external namespace is visible.
 * @private
 */
ModuleInternal.prototype.generateEnv = function (manifest, items) {
  return this.binder.bindDefault(this.port, this.api, manifest, true).then(
    function (binding) {
      var i = 0;
      binding.port.api = binding.external.api;
      this.defaultPort = binding.port;
      if (binding.external.api) {
        for (i = 0; i < items.length; i += 1) {
          if (items[i].name === binding.external.api && items[i].def.provides) {
            items.splice(i, 1);
            break;
          }
        }
      }
      this.config.global.freedom = binding.external;
    }.bind(this)
  );
};

/**
 * Attach a proxy to the externally visible namespace.
 * @method attach
 * @param {String} name The name of the proxy.
 * @param {Boolean} provides If this proxy is a provider.
 * @param {ProxyInterface} proxy The proxy to attach.
 * @param {String} api The API the proxy implements.
 * @private.
 */
ModuleInternal.prototype.attach = function (name, provides, proxy) {
  var exp = this.config.global.freedom;
  
  if (provides) {
    this.providers[name] = proxy.port;
  }

  if (!exp[name]) {
    exp[name] = proxy.external;
    if (this.manifests[name]) {
      exp[name].manifest = this.manifests[name];
    }
  }

  this.pendingPorts -= 1;
  if (this.pendingPorts === 0) {
    this.emit('start');
  }
};

/**
 * Request a set of proxy interfaces, and bind them to the external
 * namespace.
 * @method loadLinks
 * @param {Object[]} items Descriptors of the proxy ports to load.
 * @private
 * @returns {Promise} Promise for when all links are loaded.
 */
//TODO(willscott): promise should be chained, rather than going through events.
ModuleInternal.prototype.loadLinks = function (items) {
  var i, proxy, provider, core,
    manifestPredicate = function (name, flow, msg) {
      return flow === 'manifest' && msg.name === name;
    },
    onManifest = function (item, msg) {
      var definition = {
        name: item.api
      };
      if (!msg.manifest.api || !msg.manifest.api[item.api]) {
        definition.definition = null;
      } else {
        definition.definition = msg.manifest.api[item.api];
      }
      this.binder.getExternal(this.port, item.name, definition).then(
        this.attach.bind(this, item.name, false)
      );
    }.bind(this),
    promise = new PromiseCompat(function (resolve, reject) {
      this.once('start', resolve);
    }.bind(this));

  for (i = 0; i < items.length; i += 1) {
    if (items[i].api && !items[i].def) {
      if (this.manifests[items[i].name]) {
        onManifest(items[i], {
          manifest: this.manifests[items[i].name]
        });
      } else {
        this.once(manifestPredicate.bind({}, items[i].name),
                  onManifest.bind(this, items[i]));
      }
    } else {
      this.binder.getExternal(this.port, items[i].name, items[i].def).then(
        this.attach.bind(this, items[i].name, items[i].def &&
                         items[i].def.provides)
      );
    }
    this.pendingPorts += 1;
  }
  
  // Allow resolution of files by parent.
  this.manager.resource.addResolver(function (manifest, url, resolve) {
    var id = util.getId();
    this.requests[id] = resolve;
    this.emit(this.externalChannel, {
      type: 'resolve',
      id: id,
      data: url
    });
    return true;
  }.bind(this));

  // Attach Core.
  this.pendingPorts += 1;

  core = this.api.get('core').definition;
  provider = new Provider(core, this.debug);
  this.manager.getCore(function (CoreProv) {
    new CoreProv(this.manager).setId(this.lineage);
    provider.getInterface().provideAsynchronous(CoreProv);
  }.bind(this));

  this.emit(this.controlChannel, {
    type: 'Link to core',
    request: 'link',
    name: 'core',
    to: provider
  });
  
  this.binder.getExternal(provider, 'default', {
    name: 'core',
    definition: core
  }).then(
    this.attach.bind(this, 'core', false)
  );


//  proxy = new Proxy(ApiInterface.bind({}, core), this.debug);
//  this.manager.createLink(provider, 'default', proxy);
//  this.attach('core', {port: pr, external: proxy});

  if (this.pendingPorts === 0) {
    this.emit('start');
  }

  return promise;
};

/**
 * Update the exported manifest of a dependency.
 * Sets it internally if not yet exported, or attaches the property if it
 * is loaded after the module has started (we don't delay start to retreive
 * the manifest of the dependency.)
 * @method updateManifest
 * @param {String} name The Dependency
 * @param {Object} manifest The manifest of the dependency
 */
ModuleInternal.prototype.updateManifest = function (name, manifest) {
  var exp = this.config.global.freedom;

  if (exp && exp[name]) {
    exp[name].manifest = manifest;
  } else {
    this.manifests[name] = manifest;
  }
};

/**
 * Determine which proxy ports should be exposed by this module.
 * @method mapProxies
 * @param {Object} manifest the module JSON manifest.
 * @return {Object[]} proxy descriptors defined in the manifest.
 */
ModuleInternal.prototype.mapProxies = function (manifest) {
  var proxies = [], seen = ['core'], i, obj;
  
  if (manifest.permissions) {
    for (i = 0; i < manifest.permissions.length; i += 1) {
      obj = {
        name: manifest.permissions[i],
        def: undefined
      };
      obj.def = this.api.get(obj.name);
      if (seen.indexOf(obj.name) < 0 && obj.def) {
        proxies.push(obj);
        seen.push(obj.name);
      }
    }
  }
  
  if (manifest.dependencies) {
    util.eachProp(manifest.dependencies, function (desc, name) {
      obj = {
        name: name,
        api: desc.api
      };
      if (seen.indexOf(name) < 0) {
        if (desc.api) {
          obj.def = this.api.get(desc.api);
        }
        proxies.push(obj);
        seen.push(name);
      }
    }.bind(this));
  }
  
  if (manifest.provides) {
    for (i = 0; i < manifest.provides.length; i += 1) {
      obj = {
        name: manifest.provides[i],
        def: undefined
      };
      obj.def = this.api.get(obj.name);
      if (obj.def) {
        obj.def.provides = true;
      } else if (manifest.api && manifest.api[obj.name]) {
        obj.def = {
          name: obj.name,
          definition: manifest.api[obj.name],
          provides: true
        };
      } else {
        this.debug.warn('Module will not provide "' + obj.name +
          '", since no declaration can be found.');
        /*jslint continue:true*/
        continue;
      }
      /*jslint continue:false*/
      if (seen.indexOf(obj.name) < 0) {
        proxies.push(obj);
        seen.push(obj.name);
      }
    }
  }

  return proxies;
};

/**
 * Load external scripts into this namespace.
 * @method loadScripts
 * @param {String} from The URL of this modules's manifest.
 * @param {String[]} scripts The URLs of the scripts to load.
 */
ModuleInternal.prototype.loadScripts = function (from, scripts) {
  // TODO(salomegeo): add a test for failure.
  var importer = function (script, resolve, reject) {
    try {
      this.config.global.importScripts(script);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  }.bind(this),
    scripts_count,
    load;
  if (typeof scripts === 'string') {
    scripts_count = 1;
  } else {
    scripts_count = scripts.length;
  }

  load = function (next) {
    if (next === scripts_count) {
      this.emit(this.externalChannel, {
        type: "ready"
      });
      return;
    }

    var script;
    if (typeof scripts === 'string') {
      script = scripts;
    } else {
      script = scripts[next];
    }

    this.manager.resource.get(from, script).then(function (url) {
      this.tryLoad(importer, url).then(function () {
        load(next + 1);
      }.bind(this));
    }.bind(this));
  }.bind(this);



  if (!this.config.global.importScripts) {
    importer = function (url, resolve, reject) {
      var script = this.config.global.document.createElement('script');
      script.src = url;
      script.addEventListener('load', resolve, true);
      this.config.global.document.body.appendChild(script);
    }.bind(this);
  }

  load(0);
};

/**
 * Attempt to load resolved scripts into the namespace.
 * @method tryLoad
 * @private
 * @param {Function} importer The actual import function
 * @param {String[]} urls The resoved URLs to load.
 * @returns {Promise} completion of load
 */
ModuleInternal.prototype.tryLoad = function (importer, url) {
  return new PromiseCompat(importer.bind({}, url)).then(function (val) {
    return val;
  }, function (e) {
    this.debug.warn(e.stack);
    this.debug.error("Error loading " + url, e);
    this.debug.error("If the stack trace is not useful, see https://" +
        "github.com/freedomjs/freedom/wiki/Debugging-Script-Parse-Errors");
  }.bind(this));
};

module.exports = ModuleInternal;

},{"./provider":30,"./proxy/apiInterface":31,"./proxybinder":33,"./util":35,"es6-promise":2}],29:[function(require,module,exports){
/*globals XMLHttpRequest */
/*jslint indent:2,white:true,node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;
var Module = require('./module');
var util = require('./util');

/**
 * The Policy registry for freedom.js.  Used to look up modules and provide
 * migration and coallesing of execution.
 * @Class Policy
 * @param {Manager} manager The manager of the active runtime.
 * @param {Resource} resource The resource loader of the active runtime.
 * @param {Object} config The local config.
 * @constructor
 */
var Policy = function(manager, resource, config) {
  this.api = manager.api;
  this.debug = manager.debug;
  this.location = config.location;
  this.resource = resource;

  this.config = config;
  this.runtimes = [];
  this.policies = [];
  this.pending = {};
  util.handleEvents(this);

  this.add(manager, config.policy);
  this.runtimes[0].local = true;
};

/**
 * The policy a runtime is expected to have unless it specifies
 * otherwise.
 * TODO: consider making static
 * @property defaultPolicy
 */
Policy.prototype.defaultPolicy = {
  background: false, // Can this runtime run 'background' modules?
  interactive: true // Is there a view associated with this runtime?
  // TODO: remaining runtime policy.
};

/**
 * The constraints a code modules is expected to have unless it specifies
 * otherwise.
 * TODO: consider making static
 * @property defaultConstraints
 */
Policy.prototype.defaultConstraints = {
  isolation: "always", // values: always, app, never
  placement: "local" // values: local, stable, redundant
  // TODO: remaining constraints, express platform-specific dependencies.
};

/**
 * Resolve a module from its canonical URL.
 * Reponds with the promise of a port representing the module, 
 * @method get
 * @param {String[]} lineage The lineage of the requesting module.
 * @param {String} id The canonical ID of the module to get.
 * @returns {Promise} A promise for the local port towards the module.
 */
Policy.prototype.get = function(lineage, id) {
  
  // Make sure that a module isn't getting located twice at the same time.
  // This is resolved by delaying if it until we see it in a 'moduleAdd' event.
  if (this.pending[id]) {
    return new PromiseCompat(function (resolve, reject) {
      this.once('placed', function(l, i) {
        this.get(l, i).then(resolve, reject);
      }.bind(this, lineage, id));
    }.bind(this));
  } else {
    this.pending[id] = true;
  }

  return this.loadManifest(id).then(function(manifest) {
    var constraints = this.overlay(this.defaultConstraints, manifest.constraints),
        runtime = this.findDestination(lineage, id, constraints),
        portId;
    if (runtime.local) {
      portId = this.isRunning(runtime, id, lineage,
                             constraints.isolation !== 'never');
      if(constraints.isolation !== 'always' && portId) {
        this.debug.info('Reused port ' + portId);
        delete this.pending[id];
        this.emit('placed');
        return runtime.manager.getPort(portId);
      } else {
        return new Module(id, manifest, lineage, this);
      }
    } else {
      // TODO: Create a port to go to the remote runtime.
      this.debug.error('Unexpected location selected for module placement');
      return false;
    }
  }.bind(this), function(err) {
    this.debug.error('Policy Error Resolving ' + id, err);
    throw(err);
  }.bind(this));
};

/**
 * Find the runtime destination for a module given its constraints and the
 * module creating it.
 * @method findDestination
 * @param {String[]} lineage The identity of the module creating this module.
 * @param {String] id The canonical url of the module
 * @param {Object} constraints Constraints for the module.
 * @returns {Object} The element of this.runtimes where the module should run.
 */
Policy.prototype.findDestination = function(lineage, id, constraints) {
  var i;

  // Step 1: if an instance already exists, the m
  if (constraints.isolation !== 'always') {
    for (i = 0; i < this.policies.length; i += 1) {
      if (this.isRunning(this.runtimes[i], id, lineage,
                         constraints.isolation !== 'never')) {
        return this.runtimes[i];
      }
    }
  }

  // Step 2: if the module wants stability, it may need to be remote.
  if (constraints.placement === 'local') {
    return this.runtimes[0];
  } else if (constraints.placement === 'stable') {
    for (i = 0; i < this.policies.length; i += 1) {
      if (this.policies[i].background) {
        return this.runtimes[i];
      }
    }
  }

  // Step 3: if the module needs longevity / interactivity, it may want to be remote.
  return this.runtimes[0];
};

/**
 * Determine if a known runtime is running an appropriate instance of a module.
 * @method isRunning
 * @param {Object} runtime The runtime to check.
 * @param {String} id The module to look for.
 * @param {String[]} from The identifier of the requesting module.
 * @param {Boolean} fullMatch If the module needs to be in the same app.
 * @returns {String|Boolean} The Module id if it is running, or false if not.
 */
Policy.prototype.isRunning = function(runtime, id, from, fullMatch) {
  var i = 0, j = 0, okay;
  for (i = 0; i < runtime.modules.length; i += 1) {
    if (fullMatch && runtime.modules[i].length === from.length + 1) {
      okay = true;
      for (j = 0; j < from.length; j += 1) {
        if (runtime.modules[i][j + 1].indexOf(from[j]) !== 0) {
          okay = false;
          break;
        }
      }
      if (runtime.modules[i][0].indexOf(id) !== 0) {
        okay = false;
      }

      if (okay) {
        return runtime.modules[i][0];
      }
    } else if (!fullMatch && runtime.modules[i][0].indexOf(id) === 0) {
      return runtime.modules[i][0];
    }
  }
  return false;
};

/**
 * Get a promise of the manifest for a module ID.
 * @method loadManifest
 * @param {String} manifest The canonical ID of the manifest
 * @returns {Promise} Promise for the json contents of the manifest.
 */
Policy.prototype.loadManifest = function(manifest) {
  return this.resource.getContents(manifest).then(function(data) {
    var resp = {};
    try {
      return JSON.parse(data);
    } catch(err) {
      this.debug.error("Failed to load " + manifest + ": " + err);
      throw new Error("No Manifest Available");
    }
  }.bind(this));
};

/**
 * Add a runtime to keep track of in this policy.
 * @method add
 * @param {fdom.port} port The port to use for module lifetime info
 * @param {Object} policy The policy of the runtime.
 */
Policy.prototype.add = function(port, policy) {
  var runtime = {
    manager: port,
    modules: []
  };
  this.runtimes.push(runtime);
  this.policies.push(this.overlay(this.defaultPolicy, policy));

  port.on('moduleAdd', function(runtime, info) {
    var lineage = [];
    lineage = lineage.concat(info.lineage);
    lineage[0] = info.id;
    runtime.modules.push(lineage);
    if (this.pending[info.lineage[0]]) {
      delete this.pending[info.lineage[0]];
      this.emit('placed');
    }
  }.bind(this, runtime));
  port.on('moduleRemove', function(runtime, info) {
    var lineage = [], i, modFingerprint;
    lineage = lineage.concat(info.lineage);
    lineage[0] = info.id;
    modFingerprint = lineage.toString();

    for (i = 0; i < runtime.modules.length; i += 1) {
      if (runtime.modules[i].toString() === modFingerprint) {
        runtime.modules.splice(i, 1);
        return;
      }
    }
    this.debug.warn('Unknown module to remove: ', info.id);
  }.bind(this, runtime));
};

/**
 * Overlay a specific policy or constraint instance on default settings.
 * TODO: consider making static.
 * @method overlay
 * @private
 * @param {Object} base The default object
 * @param {Object} overlay The superceeding object
 * @returns {Object} A new object with base parameters when not set in overlay.
 */
Policy.prototype.overlay = function(base, overlay) {
  var ret = {};

  util.mixin(ret, base);
  if (overlay) {
    util.mixin(ret, overlay, true);
  }
  return ret;
};

module.exports = Policy;

},{"./module":27,"./util":35,"es6-promise":2}],30:[function(require,module,exports){
/*jslint indent:2, node:true, sloppy:true, browser:true */
var Consumer = require('./consumer');
var util = require('./util');

/**
 * A freedom port for a user-accessable provider.
 * @class Provider
 * @implements Port
 * @uses handleEvents
 * @param {Object} def The interface of the provider.
 * @param {Debug} debug The debugger to use for logging.
 * @contructor
 */
var Provider = function (def, debug) {
  this.id = Consumer.nextId();
  util.handleEvents(this);
  this.debug = debug;
  
  this.definition = def;
  this.mode = Provider.mode.synchronous;
  this.channels = {};
  this.iface = null;
  this.closeHandlers = {};
  this.providerCls = null;

  this.ifaces = {};
  this.emits = {};
};

/**
 * Provider modes of operation.
 * @property mode
 * @static
 * @type number
 */
Provider.mode = {
  synchronous: 0,
  asynchronous: 1,
  promises: 2
};

/**
 * Receive external messages for the provider.
 * @method onMessage
 * @param {String} source the source identifier of the message.
 * @param {Object} message The received message.
 */
Provider.prototype.onMessage = function (source, message) {
  if (source === 'control' && message.reverse) {
    this.channels[message.name] = message.channel;
    this.emit(message.channel, {
      type: 'channel announcement',
      channel: message.reverse
    });
    this.emit('start');
  } else if (source === 'control' && message.type === 'setup') {
    this.controlChannel = message.channel;
  } else if (source === 'control' && message.type === 'close') {
    if (message.channel === this.controlChannel) {
      delete this.controlChannel;
    }
    this.close();
  } else {
    if (!this.channels[source] && message.channel) {
      this.channels[source] = message.channel;
      this.emit('start');
      return;
    } else if (!this.channels[source]) {
      this.debug.warn('Message from unconfigured source: ' + source);
      return;
    }

    if (message.type === 'close' && message.to) {
      this.teardown(source, message.to);
    } else if (message.to && this.emits[source] &&
               this.emits[source][message.to]) {
      message.message.to = message.to;
      this.emits[source][message.to](message.message);
    } else if (message.to && message.message &&
        message.message.type === 'construct') {
      var args = Consumer.portableToMessage(
          (this.definition.constructor && this.definition.constructor.value) ?
              this.definition.constructor.value : [],
          message.message,
          this.debug
        ),
        instance;
      if (!this.ifaces[source]) {
        this.ifaces[source] = {};
        this.emits[source] = {};
      }
      this.ifaces[source][message.to] = true;
      instance = this.getProvider(source, message.to, args);
      // don't save a reference to instance if it closed itself already.
      if (this.ifaces[source] &&
          this.ifaces[source][message.to]) {
        this.ifaces[source][message.to] = instance.instance;
        this.emits[source][message.to] = instance.onmsg;
      }
    } else {
      this.debug.warn(this.toString() + ' dropping message ' +
          JSON.stringify(message));
    }
  }
};

/**
 * Close / teardown the flow this provider terminates.
 * @method close
 */
Provider.prototype.close = function () {
  if (this.controlChannel) {
    this.emit(this.controlChannel, {
      type: 'Provider Closing',
      request: 'close'
    });
    delete this.controlChannel;
  }
  this.emit('close');

  // Release references.
  delete this.iface;
  delete this.providerCls;
  this.ifaces = {};
  this.emits = {};
  this.emitChannel = null;
};

/**
 * Teardown a single instance of an object fulfilling this provider.
 * @method teardown
 * @param {String} source The consumer source of the instance.
 * @param {String} id The id of the instance to tear down.
 */
Provider.prototype.teardown = function (source, id) {
  // Ignore teardown of non-existant ids.
  if (!this.ifaces[source]) {
    return;
  }

  delete this.ifaces[source][id];
  delete this.emits[source][id];
  if (this.closeHandlers[source] && this.closeHandlers[source][id]) {
    util.eachProp(this.closeHandlers[source][id], function (prop) {
      prop();
    });
    delete this.closeHandlers[source][id];
  }
};

/**
 * Get an interface to expose externally representing this port.
 * Providers are registered with the port using either
 * provideSynchronous or provideAsynchronous depending on the desired
 * return interface.
 * @method getInterface
 * @return {Object} The external interface of this Provider.
 */
Provider.prototype.getInterface = function () {
  if (this.iface) {
    return this.iface;
  } else {
    this.iface = {
      provideSynchronous: function (prov) {
        this.providerCls = prov;
        this.mode = Provider.mode.synchronous;
      }.bind(this),
      provideAsynchronous: function (prov) {
        this.providerCls = prov;
        this.mode = Provider.mode.asynchronous;
      }.bind(this),
      providePromises: function (prov) {
        this.providerCls = prov;
        this.mode = Provider.mode.promises;
      }.bind(this)
    };

    util.eachProp(this.definition, function (prop, name) {
      switch (prop.type) {
      case "constant":
        Object.defineProperty(this.iface, name, {
          value: Consumer.recursiveFreezeObject(prop.value),
          writable: false
        });
        break;
      }
    }.bind(this));

    return this.iface;
  }
};

/**
 * Create a function that can be used to get interfaces from this provider from
 * a user-visible point.
 * @method getProxyInterface
 */
Provider.prototype.getProxyInterface = function () {
  var func = function (p) {
    return p.getInterface();
  }.bind({}, this);

  func.close = function (iface) {
    if (iface) {
      util.eachProp(this.ifaces, function (ids, source) {
        util.eachProp(ids, function (candidate, id) {
          if (candidate === iface) {
            this.teardown(source, id);
            this.emit(this.channels[source], {
              type: 'close',
              to: id
            });
            return true;
          }
        }.bind(this));
      }.bind(this));
    } else {
      // Close the channel.
      this.close();
    }
  }.bind(this);

  func.onClose = function (iface, handler) {
    // Listen to the channel directly.
    if (typeof iface === 'function' && handler === undefined) {
      this.once('close', iface);
      return;
    }

    util.eachProp(this.ifaces, function (ids, source) {
      util.eachProp(ids, function (candidate, id) {
        if (candidate === iface) {
          if (!this.closeHandlers[source]) {
            this.closeHandlers[source] = {};
          }
          if (!this.closeHandlers[source][id]) {
            this.closeHandlers[source][id] = [];
          }
          this.closeHandlers[source][id].push(handler);
          return true;
        }
      }.bind(this));
    }.bind(this));
  }.bind(this);

  return func;
};

/**
 * Get a new instance of the registered provider.
 * @method getProvider
 * @param {String} source The port this instance is interactign with.
 * @param {String} identifier the messagable address for this provider.
 * @param {Array} args Constructor arguments for the provider.
 * @return {Function} A function to send messages to the provider.
 */
Provider.prototype.getProvider = function (source, identifier, args) {
  if (!this.providerCls) {
    this.debug.error('Cannot instantiate provider, since it is not provided');
    return {instance: undefined, onmsg: undefined};
  }

  var events = {},
    dispatchEvent,
    BoundClass,
    instance;

  util.eachProp(this.definition, function (prop, name) {
    if (prop.type === 'event') {
      events[name] = prop;
    }
  });

  dispatchEvent = function (src, ev, id, name, value) {
    if (ev[name]) {
      var streams = Consumer.messageToPortable(ev[name].value, value,
                                                   this.debug);
      this.emit(this.channels[src], {
        type: 'message',
        to: id,
        message: {
          name: name,
          type: 'event',
          text: streams.text,
          binary: streams.binary
        }
      });
    }
  }.bind(this, source, events, identifier);

  // this is all to say: new providerCls(dispatchEvent, args[0], args[1],...)
  BoundClass = this.providerCls.bind.apply(this.providerCls,
      [this.providerCls, dispatchEvent].concat(args || []));
  instance = new BoundClass();

  return {
    instance: instance,
    onmsg: function (port, src, msg) {
      if (msg.action === 'method') {
        if (typeof this[msg.type] !== 'function') {
          port.debug.warn("Provider does not implement " + msg.type + "()!");
          port.emit(port.channels[src], {
            type: 'method',
            to: msg.to,
            message: {
              to: msg.to,
              type: 'method',
              reqId: msg.reqId,
              name: msg.type,
              error: 'Provider does not implement ' + msg.type + '()!'
            }
          });
          return;
        }
        var prop = port.definition[msg.type],
          debug = port.debug,
          args = Consumer.portableToMessage(prop.value, msg, debug),
          returnPromise,
          ret = function (src, msg, prop, resolve, reject) {
            var streams = Consumer.messageToPortable(prop.ret, resolve,
                                                         debug);
            this.emit(this.channels[src], {
              type: 'method',
              to: msg.to,
              message: {
                to: msg.to,
                type: 'method',
                reqId: msg.reqId,
                name: msg.type,
                text: streams.text,
                binary: streams.binary,
                error: reject
              }
            });
          }.bind(port, src, msg, prop);
        if (!Array.isArray(args)) {
          args = [args];
        }
        if (port.mode === Provider.mode.synchronous) {
          try {
            ret(this[msg.type].apply(this, args));
          } catch (e1) {
            ret(undefined, e1.message + ' ' + e1.stack);
          }
        } else if (port.mode === Provider.mode.asynchronous) {
          try {
            this[msg.type].apply(instance, args.concat(ret));
          } catch (e2) {
            ret(undefined, e2.message + ' ' + e2.stack);
          }
        } else if (port.mode === Provider.mode.promises) {
          try {
            returnPromise = this[msg.type].apply(this, args);
            if (returnPromise && returnPromise.then) {
              returnPromise.then(ret, ret.bind({}, undefined));
            } else {
              ret(undefined, 'No promise returned from ' +
                  msg.type + ': ' + returnPromise);
            }
          } catch (e3) {
            ret(undefined, e3.message + ' ' + e3.stack);
          }
        }
      }
    }.bind(instance, this, source)
  };
};

/**
 * Get a textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
Provider.prototype.toString = function () {
  if (this.emitChannel) {
    return "[Provider " + this.emitChannel + "]";
  } else {
    return "[unbound Provider]";
  }
};

module.exports = Provider;

},{"./consumer":20,"./util":35}],31:[function(require,module,exports){
/*jslint indent:2, white:true, node:true, sloppy:true, browser:true */
var PromiseCompat = require('es6-promise').Promise;

var util = require('../util');
var Consumer = require('../consumer');

var ApiInterface = function(def, onMsg, emit, debug) {
  var inflight = {},
      events = null,
      emitter = null,
      reqId = 0,
      args = arguments;

  util.eachProp(def, function(prop, name) {
    switch(prop.type) {
    case 'method':
      this[name] = function() {
        // Note: inflight should be registered before message is passed
        // in order to prepare for synchronous in-window pipes.
        var thisReq = reqId,
            promise = new PromiseCompat(function(resolve, reject) {
              inflight[thisReq] = {
                resolve:resolve,
                reject:reject,
                template: prop.ret
              };
            }),
            streams = Consumer.messageToPortable(prop.value,
                Array.prototype.slice.call(arguments, 0),
                debug);
        reqId += 1;
        emit({
          action: 'method',
          type: name,
          reqId: thisReq,
          text: streams.text,
          binary: streams.binary
        });
        return promise;
      };
      break;
    case 'event':
      if(!events) {
        util.handleEvents(this);
        emitter = this.emit;
        delete this.emit;
        events = {};
      }
      events[name] = prop;
      break;
    case 'constant':
      Object.defineProperty(this, name, {
        value: Consumer.recursiveFreezeObject(prop.value),
        writable: false
      });
      break;
    }
  }.bind(this));

  onMsg(this, function(type, msg) {
    if (type === 'close') {
      if (this.off) {
        this.off();
      }
      util.eachProp(inflight, function (obj) {
        obj.reject('closed');
      });
      inflight = {};
      return;
    }
    if (!msg) {
      return;
    }
    if (msg.type === 'method') {
      if (inflight[msg.reqId]) {
        var resolver = inflight[msg.reqId],
            template = resolver.template;
        delete inflight[msg.reqId];
        if (msg.error) {
          resolver.reject(msg.error);
        } else {
          resolver.resolve(Consumer.portableToMessage(template, msg, debug));
        }
      } else {
        debug.error('Incoming message claimed to be an RPC ' +
                         'returning for unregistered call', msg.reqId);
      }
    } else if (msg.type === 'event') {
      if (events[msg.name]) {
        emitter(msg.name, Consumer.portableToMessage(events[msg.name].value,
                msg, debug));
      }
    }
  }.bind(this));

  args = Consumer.messageToPortable(
      (def.constructor && def.constructor.value) ? def.constructor.value : [],
      Array.prototype.slice.call(args, 4),
      debug);

  emit({
    type: 'construct',
    text: args.text,
    binary: args.binary
  });
};

module.exports = ApiInterface;

},{"../consumer":20,"../util":35,"es6-promise":2}],32:[function(require,module,exports){
/*jslint indent:2, white:true, node:true, sloppy:true, browser:true */
var util = require('../util');

var EventInterface = function(onMsg, emit, debug) {
  util.handleEvents(this);
  
  onMsg(this, function(emit, type, msg) {
    if (type === 'close') {
      return;
    }
    emit(msg.type, msg.message);
  }.bind(this, this.emit));

  this.emit = function(emitter, type, msg) {
    emitter({type: type, message: msg}, true);
  }.bind({}, emit);
};

module.exports = EventInterface;

},{"../util":35}],33:[function(require,module,exports){
/*jslint indent:2, node:true */
var PromiseCompat = require('es6-promise').Promise;

var ApiInterface = require('./proxy/apiInterface');
var EventInterface = require('./proxy/eventInterface');
var Consumer = require('./consumer');
var Provider = require('./provider');

/**
 * A Proxy Binder manages the external interface, and creates one of
 * the different types of objects exposed by freedom either as a global
 * within a worker / module context, or returned by an external call to
 * create a freedom runtime.
 * @Class ProxyBinder
 * @param {Manager} manager The manager for the active runtime.
 */
var ProxyBinder = function (manager) {
  'use strict';
  this.manager = manager;
};

/**
 * Create a proxy for a freedom port, and return it once loaded.
 * @method getExternal
 * @param {Port} port The port for the proxy to communicate with.
 * @param {String} name The name of the proxy.
 * @param {Object} [definition] The definition of the API to expose.
 * @param {String} definition.name The name of the API.
 * @param {Object} definition.definition The definition of the API.
 * @param {Boolean} definition.provides Whether this is a consumer or provider.
 * @returns {Promise} A promise for the active proxy interface.
 */
ProxyBinder.prototype.getExternal = function (port, name, definition) {
  'use strict';
  var proxy, api;
  return new PromiseCompat(function (resolve, reject) {
    if (definition) {
      api = definition.name;
      if (definition.provides) {
        proxy = new Provider(definition.definition, this.manager.debug);
      } else {
        proxy = new Consumer(ApiInterface.bind({},
            definition.definition),
            this.manager.debug);
      }
    } else {
      proxy = new Consumer(EventInterface, this.manager.debug);
    }

    proxy.once('start', function () {
      var iface = proxy.getProxyInterface();
      if (api) {
        iface.api = api;
      }
      resolve({
        port: proxy,
        external: iface
      });
    });

    this.manager.createLink(port, name, proxy);
  }.bind(this));
};

/**
 * Bind the default proxy for a freedom port.
 * @method bindDefault
 * @param {Port} port The port for the proxy to communicate with.
 * @param {Api} api The API loader with API definitions.
 * @param {Object} manifest The manifest of the module to expose.
 * @param {Boolean} internal Whether the interface is for inside the module.
 * @returns {Promise} A promise for a proxy interface.
 * @private
 */
ProxyBinder.prototype.bindDefault = function (port, api, manifest, internal) {
  'use strict';
  var metadata = {
    name: manifest.name,
    icon: manifest.icon,
    description: manifest.description
  }, def;

  if (manifest['default']) {
    def = api.get(manifest['default']);
    if (!def && manifest.api && manifest.api[manifest['default']]) {
      def = {
        name: manifest['default'],
        definition: manifest.api[manifest['default']]
      };
    }
    if (internal && manifest.provides &&
        manifest.provides.indexOf(manifest['default']) !== false) {
      def.provides = true;
    } else if (internal) {
      api.debug.warn("default API not provided, " +
                     "are you missing a provides key in your manifest?");
    }
  }

  return this.getExternal(port, 'default', def).then(
    function (metadata, info) {
      info.external.manifest = metadata;
      return info;
    }.bind(this, metadata)
  );
};

module.exports = ProxyBinder;

},{"./consumer":20,"./provider":30,"./proxy/apiInterface":31,"./proxy/eventInterface":32,"es6-promise":2}],34:[function(require,module,exports){
/*globals XMLHttpRequest */
/*jslint indent:2,node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;

var util = require('./util');

/**
 * The Resource registry for FreeDOM.  Used to look up requested Resources,
 * and provide lookup and migration of resources.
 * @Class Resource
 * @param {Debug} debug The logger to use for debugging.
 * @constructor
 */
var Resource = function (debug) {
  this.debug = debug;
  this.files = {};
  this.resolvers = [this.httpResolver, this.nullResolver];
  this.contentRetrievers = {
    'http': this.xhrRetriever,
    'https': this.xhrRetriever,
    'chrome-extension': this.xhrRetriever,
    'resource': this.xhrRetriever,
    'chrome': this.xhrRetriever,
    'app': this.xhrRetriever,
    'manifest': this.manifestRetriever
  };
};

/**
 * Resolve a resurce URL requested from a module.
 * @method get
 * @param {String} manifest The canonical address of the module requesting.
 * @param {String} url The resource to get.
 * @returns {Promise} A promise for the resource address.
 */
Resource.prototype.get = function (manifest, url) {
  var key = JSON.stringify([manifest, url]);
  
  return new PromiseCompat(function (resolve, reject) {
    if (this.files[key]) {
      resolve(this.files[key]);
    } else {
      this.resolve(manifest, url).then(function (key, resolve, address) {
        this.files[key] = address;
        //fdom.debug.log('Resolved ' + key + ' to ' + address);
        resolve(address);
      }.bind(this, key, resolve), reject);
    }
  }.bind(this));
};

/**
 * Get the contents of a resource.
 * @method getContents
 * @param {String} url The resource to read.
 * @returns {Promise} A promise for the resource contents.
 */
Resource.prototype.getContents = function (url) {
  return new PromiseCompat(function (resolve, reject) {
    var prop;
    if (!url) {
      this.debug.warn("Asked to get contents of undefined URL.");
      return reject();
    }
    for (prop in this.contentRetrievers) {
      if (this.contentRetrievers.hasOwnProperty(prop)) {
        if (url.indexOf(prop + "://") === 0) {
          return this.contentRetrievers[prop].call(this, url, resolve, reject);
        } else if (url.indexOf("://") === -1 && prop === "null") {
          return this.contentRetrievers[prop].call(this, url, resolve, reject);
        }
      }
    }
    reject();
  }.bind(this));
};

/**
 * Return a promise that resolves when the first of an array of promises
 * resolves, or rejects after all promises reject. Can be thought of as
 * the missing 'Promise.any' - race is no good, since early rejections
 * preempt a subsequent resolution.
 * @private
 * @static
 * @method FirstPromise
 * @param {Promise[]} Promises to select from
 * @returns {Promise} Promise resolving with a value from arguments.
 */
var firstPromise = function(promises) {
  return new PromiseCompat(function(resolve, reject) {
    var errors = [];
    promises.forEach(function(promise) {
      promise.then(resolve, function(err) {
        errors.push(err);
        if (errors.length === promises.length) {
          reject(errors);
        }
      });
    });
  });
};

/**
 * Resolve a resource using known resolvers. Unlike get, resolve does
 * not cache resolved resources.
 * @method resolve
 * @private
 * @param {String} manifest The module requesting the resource.
 * @param {String} url The resource to resolve;
 * @returns {Promise} A promise for the resource address.
 */
Resource.prototype.resolve = function (manifest, url) {
  return new PromiseCompat(function (resolve, reject) {
    var promises = [];
    if (url === undefined) {
      return reject();
    }
    util.eachReverse(this.resolvers, function (resolver) {
      promises.push(new PromiseCompat(resolver.bind({}, manifest, url)));
    }.bind(this));
    firstPromise(promises).then(resolve, function() {
      reject('No resolvers to handle url: ' + JSON.stringify([manifest, url]));
    });
  }.bind(this));
};

/**
 * Register resolvers: code that knows how to get resources
 * needed by the runtime. A resolver will be called with four
 * arguments: the absolute manifest of the requester, the
 * resource being requested, and a resolve / reject pair to
 * fulfill a promise.
 * @method addResolver
 * @param {Function} resolver The resolver to add.
 */
Resource.prototype.addResolver = function (resolver) {
  this.resolvers.push(resolver);
};

/**
 * Register retrievers: code that knows how to load resources
 * needed by the runtime. A retriever will be called with a URL
 * to retrieve with a protocol that it is able to handle.
 * @method addRetriever
 * @param {String} proto The protocol to register for.
 * @param {Function} retriever The retriever to add.
 */
Resource.prototype.addRetriever = function (proto, retriever) {
  if (this.contentRetrievers[proto]) {
    this.debug.warn("Unwilling to override file retrieval for " + proto);
    return;
  }
  this.contentRetrievers[proto] = retriever;
};

/**
 * Register external resolvers and retreavers
 * @method register
 * @param {{"proto":String, "resolver":Function, "retreaver":Function}[]}
 *     resolvers The list of retreivers and resolvers.
 */
Resource.prototype.register = function (resolvers) {
  if (!resolvers.length) {
    return;
  }

  resolvers.forEach(function (item) {
    if (item.resolver) {
      this.addResolver(item.resolver);
    } else if (item.proto && item.retriever) {
      this.addRetriever(item.proto, item.retriever);
    }
  }.bind(this));
};

/**
 * Determine if a URL is an absolute URL of a given Scheme.
 * @method hasScheme
 * @static
 * @private
 * @param {String[]} protocols Whitelisted protocols
 * @param {String} URL the URL to match.
 * @returns {Boolean} If the URL is an absolute example of one of the schemes.
 */
Resource.hasScheme = function (protocols, url) {
  var i;
  for (i = 0; i < protocols.length; i += 1) {
    if (url.indexOf(protocols[i] + "://") === 0) {
      return true;
    }
  }
  return false;
};

/**
 * Remove './' and '../' from a URL
 * Required because Chrome Apps for Mobile (cca) doesn't understand
 * XHR paths with these relative components in the URL.
 * @method removeRelativePath
 * @param {String} url The URL to modify
 * @returns {String} url without './' and '../'
 **/
Resource.removeRelativePath = function (url) {
  var idx = url.indexOf("://") + 3,
    stack,
    toRemove,
    result;
  // Remove all instances of /./
  url = url.replace(/\/\.\//g, "/");
  //Weird bug where in cca, manifest starts with 'chrome:////'
  //This forces there to only be 2 slashes
  while (url.charAt(idx) === "/") {
    url = url.slice(0, idx) + url.slice(idx + 1, url.length);
  }

  // Advance to next /
  idx = url.indexOf("/", idx);
  // Removing ../
  stack = url.substr(idx + 1).split("/");
  while (stack.indexOf("..") !== -1) {
    toRemove = stack.indexOf("..");
    if (toRemove === 0) {
      stack.shift();
    } else {
      stack.splice((toRemove - 1), 2);
    }
  }
  
  //Rebuild string
  result = url.substr(0, idx);
  for (idx = 0; idx < stack.length; idx += 1) {
    result += "/" + stack[idx];
  }
  return result;
};

/**
 * Resolve URLs which can be accessed using standard HTTP requests.
 * @method httpResolver
 * @private
 * @param {String} manifest The Manifest URL.
 * @param {String} url The URL to resolve.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 * @returns {Boolean} True if the URL could be resolved.
 */
Resource.prototype.httpResolver = function (manifest, url, resolve, reject) {
  var protocols = ["http", "https", "chrome", "chrome-extension", "resource",
                   "app"],
    dirname,
    protocolIdx,
    pathIdx,
    path,
    base,
    result;

  if (Resource.hasScheme(protocols, url)) {
    resolve(Resource.removeRelativePath(url));
    return true;
  }
  
  if (!manifest) {
    reject();
    return false;
  }
  if (Resource.hasScheme(protocols, manifest) &&
      url.indexOf("://") === -1) {
    dirname = manifest.substr(0, manifest.lastIndexOf("/"));
    protocolIdx = dirname.indexOf("://");
    pathIdx = protocolIdx + 3 + dirname.substr(protocolIdx + 3).indexOf("/");
    path = dirname.substr(pathIdx);
    base = dirname.substr(0, pathIdx);
    if (url.indexOf("/") === 0) {
      resolve(Resource.removeRelativePath(base + url));
    } else {
      resolve(Resource.removeRelativePath(base + path + "/" + url));
    }
    return true;
  }
  reject();
};

/**
 * Resolve URLs which are self-describing.
 * @method nullResolver
 * @private
 * @param {String} manifest The Manifest URL.
 * @param {String} url The URL to resolve.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 * @returns {Boolean} True if the URL could be resolved.
 */
Resource.prototype.nullResolver = function (manifest, url, resolve, reject) {
  var protocols = ["manifest"];
  if (Resource.hasScheme(protocols, url)) {
    resolve(url);
    return true;
  } else if (url.indexOf('data:') === 0) {
    resolve(url);
    return true;
  }
  reject();
};

/**
 * Retrieve manifest content from a self-descriptive manifest url.
 * These urls are used to reference a manifest without requiring subsequent,
 * potentially non-CORS requests.
 * @method manifestRetriever
 * @private
 * @param {String} manifest The Manifest URL
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 */
Resource.prototype.manifestRetriever = function (manifest, resolve, reject) {
  var data;
  try {
    data = manifest.substr(11);
    JSON.parse(data);
    resolve(data);
  } catch (e) {
    this.debug.warn("Invalid manifest URL referenced:" + manifest);
    reject();
  }
};

/**
 * Retrieve resource contents using an XHR request.
 * @method xhrRetriever
 * @private
 * @param {String} url The resource to fetch.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 */
Resource.prototype.xhrRetriever = function (url, resolve, reject) {
  var ref = new XMLHttpRequest();
  ref.addEventListener("readystatechange", function (resolve, reject) {
    if (ref.readyState === 4 && ref.responseText) {
      resolve(ref.responseText);
    } else if (ref.readyState === 4) {
      this.debug.warn("Failed to load file " + url + ": " + ref.status);
      reject(ref.status);
    }
  }.bind(this, resolve, reject), false);
  ref.overrideMimeType("application/json");
  ref.open("GET", url, true);
  ref.send();
};

module.exports = Resource;

},{"./util":35,"es6-promise":2}],35:[function(require,module,exports){
/*globals crypto, WebKitBlobBuilder, Blob, URL */
/*globals webkitURL, Uint8Array, Uint16Array, ArrayBuffer */
/*jslint indent:2,white:true,browser:true,node:true,sloppy:true */

/**
 * Utility method used within the freedom Library.
 * @class util
 * @static
 */
var util = {};


/**
 * Helper function for iterating over an array backwards. If the func
 * returns a true value, it will break out of the loop.
 * @method eachReverse
 * @static
 */
util.eachReverse = function(ary, func) {
  if (ary) {
    var i;
    for (i = ary.length - 1; i > -1; i -= 1) {
      if (ary[i] && func(ary[i], i, ary)) {
        break;
      }
    }
  }
};

/**
 * @method hasProp
 * @static
 */
util.hasProp = function(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

/**
 * Cycles over properties in an object and calls a function for each
 * property value. If the function returns a truthy value, then the
 * iteration is stopped.
 * @method eachProp
 * @static
 */
util.eachProp = function(obj, func) {
  var prop;
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (func(obj[prop], prop)) {
        break;
      }
    }
  }
};

/**
 * Simple function to mix in properties from source into target,
 * but only if target does not already have a property of the same name.
 * This is not robust in IE for transferring methods that match
 * Object.prototype names, but the uses of mixin here seem unlikely to
 * trigger a problem related to that.
 * @method mixin
 * @static
 */
util.mixin = function(target, source, force) {
  if (source) {
    util.eachProp(source, function (value, prop) {
      if (force || !util.hasProp(target, prop)) {
        target[prop] = value;
      }
    });
  }
  return target;
};

/**
 * Get a unique ID.
 * @method getId
 * @static
 */
util.getId = function() {
  var guid = 'guid',
      domain = 12,
      buffer;
  // Chrome / Firefox.
  if (typeof crypto === 'object' && crypto.getRandomValues) {
    buffer = new Uint8Array(domain);
    crypto.getRandomValues(buffer);
    util.eachReverse(buffer, function(n) {
      guid += '-' + n;
    });
  // Node
  } else if (typeof crypto === 'object' && crypto.randomBytes) {
    buffer = crypto.randomBytes(domain);
    util.eachReverse(buffer, function(n) {
      guid += '-' + n;
    });
  } else {
    while (domain > 0) {
      guid += '-' + Math.ceil(255 * Math.random());
      domain -= 1;
    }
  }

  return guid;
};

/**
 * Encode a string into a binary array buffer, by treating each character as a
 * utf16 encoded character - the native javascript encoding.
 * @method str2ab
 * @static
 * @param {String} str The string to encode.
 * @returns {ArrayBuffer} The encoded string.
 */
util.str2ab = function(str) {
  var length = str.length,
      buffer = new ArrayBuffer(length * 2), // 2 bytes for each char
      bufferView = new Uint16Array(buffer),
      i;
  for (i = 0; i < length; i += 1) {
    bufferView[i] = str.charCodeAt(i);
  }

  return buffer;
};

/**
 * Convert an array buffer containing an encoded string back into a string.
 * @method ab2str
 * @static
 * @param {ArrayBuffer} buffer The buffer to unwrap.
 * @returns {String} The decoded buffer.
 */
util.ab2str = function(buffer) {
  return String.fromCharCode.apply(null, new Uint16Array(buffer));
};

/**
 * Add 'on' and 'emit' methods to an object, which act as a light weight
 * event handling structure.
 * @class handleEvents
 * @static
 */
util.handleEvents = function(obj) {
  var eventState = {
    DEBUG_BACKREF: obj,
    multiple: {},
    maybemultiple: [],
    single: {},
    maybesingle: []
  }, filter, push;

  /**
   * Filter a list based on a predicate. The list is filtered in place, with
   * selected items removed and returned by the function.
   * @method
   * @param {Array} list The list to filter
   * @param {Function} predicate The method to run on each item.
   * @returns {Array} Selected items
   */
  filter = function(list, predicate) {
    var ret = [], i;

    if (!list || !list.length) {
      return [];
    }

    for (i = list.length - 1; i >= 0; i -= 1) {
      if (predicate(list[i])) {
        ret.push(list.splice(i, 1));
      }
    }
    return ret;
  };

  /**
   * Enqueue a handler for a specific type.
   * @method
   * @param {String} to The queue ('single' or 'multiple') to queue on.
   * @param {String} type The type of event to wait for.
   * @param {Function} handler The handler to enqueue.
   */
  push = function(to, type, handler) {
    if (typeof type === 'function') {
      this['maybe' + to].push([type, handler]);
    } else if (this[to][type]) {
      this[to][type].push(handler);
    } else {
      this[to][type] = [handler];
    }
  };

  /**
   * Register a method to be executed when an event of a specific type occurs.
   * @method on
   * @param {String|Function} type The type of event to register against.
   * @param {Function} handler The handler to run when the event occurs.
   */
  obj.on = push.bind(eventState, 'multiple');

  /**
   * Register a method to be execute the next time an event occurs.
   * @method once
   * @param {String|Function} type The type of event to wait for.
   * @param {Function} handler The handler to run the next time a matching event
   *     is raised.
   */
  obj.once = push.bind(eventState, 'single');

  /**
   * Emit an event on this object.
   * @method emit
   * @param {String} type The type of event to raise.
   * @param {Object} data The payload of the event.
   */
  obj.emit = function(type, data) {
    var i, queue;
    // Note that registered handlers may stop events on the object, by calling
    // this.off(). As such, the presence of these keys must be checked on each
    // iteration of the relevant loops.
    for (i = 0; this.multiple[type] &&
         i < this.multiple[type].length; i += 1) {
      if (this.multiple[type][i](data) === false) {
        return;
      }
    }
    if (this.single[type]) {
      queue = this.single[type];
      this.single[type] = [];
      for (i = 0; i < queue.length; i += 1) {
        queue[i](data);
      }
    }
    for (i = 0; i < this.maybemultiple.length; i += 1) {
      if (this.maybemultiple[i][0](type, data)) {
        this.maybemultiple[i][1](data);
      }
    }
    for (i = this.maybesingle.length - 1; i >= 0; i -= 1) {
      if (this.maybesingle[i][0](type, data)) {
        queue = this.maybesingle.splice(i, 1);
        queue[0][1](data);
      }
    }
  }.bind(eventState);

  /**
   * Remove an event handler
   * @method off
   * @param {String} type The type of event to remove.
   * @param {Function?} handler The handler to remove.
   */
  obj.off = function(type, handler) {
    if (!type) {
      delete this.DEBUG_BACKREF;
      this.multiple = {};
      this.maybemultiple = [];
      this.single = {};
      this.maybesingle = [];
      return;
    }

    if (typeof type === 'function') {
      filter(this.maybesingle, function(item) {
        return item[0] === type && (!handler || item[1] === handler);
      });
      filter(this.maybemultiple, function(item) {
        return item[0] === type && (!handler || item[1] === handler);
      });
    }

    if (!handler) {
      delete this.multiple[type];
      delete this.single[type];
    } else {
      filter(this.multiple[type], function(item) {
        return item === handler;
      });
      filter(this.single[type], function(item) {
        return item === handler;
      });
    }
  }.bind(eventState);
};

/**
 * When run without a window, or specifically requested.
 * Note: Declaration can be redefined in forceModuleContext below.
 * @method isModuleContext
 * @for util
 * @static
 */
/*!@preserve StartModuleContextDeclaration*/
util.isModuleContext = function() {
  return (typeof document === 'undefined');
};

/**
 * Get a Blob object of a string.
 * Polyfills implementations which don't have a current Blob constructor, like
 * phantomjs.
 * @method getBlob
 * @static
 */
util.getBlob = function(data, type) {
  if (typeof Blob !== 'function' && typeof WebKitBlobBuilder !== 'undefined') {
    var builder = new WebKitBlobBuilder();
    builder.append(data);
    return builder.getBlob(type);
  } else {
    return new Blob([data], {type: type});
  }
};

/**
 * Find all scripts on the given page.
 * @method scripts
 * @static
 */
util.scripts = function(global) {
  return global.document.getElementsByTagName('script');
};

module.exports = util;

},{}],36:[function(require,module,exports){
(function (global){
/*jslint node:true*/

var providers = [
  require('../../providers/core/core.unprivileged'),
  require('../../providers/core/core.echo'),
  require('../../providers/core/core.console'),
  require('../../providers/core/core.peerconnection'),
  require('../../providers/core/core.rtcpeerconnection'),
  require('../../providers/core/core.rtcdatachannel'),
  require('../../providers/core/core.storage'),
  require('../../providers/core/core.view'),
  require('../../providers/core/core.oauth'),
  require('../../providers/core/core.websocket'),
  require('../../providers/core/core.xhr')
];

function getFreedomScript() {
  'use strict';
  var script;
  if (window.document.currentScript) {
    // New browser API
    script = window.document.currentScript.src;
  } else if (document.readyState !== "complete" &&
             document.readyState !== "loaded") {
    // Included in HTML or through document.write
    script = window.document.getElementsByTagName('script');
    script = script[script.length - 1].src;
  } else {
    // Loaded through dom manipulation or async.
    script = document.querySelector(
      "script[src*='freedom.js'],script[src*='freedom-']"
    );
    if (script.length !== 1) {
      console.error("Could not determine freedom.js script tag.");
    }
    script = script[0].src;
  }
  return script;
}

if (typeof window !== 'undefined') {
  window.freedom = require('../entry').bind({}, {
    location: window.location.href,
    portType: require('../link/worker'),
    source: getFreedomScript(),
    providers: providers,
    oauth: [
      require('../../providers/oauth/oauth.localpageauth'),
      require('../../providers/oauth/oauth.remotepageauth')
    ]
  });
} else {
  require('../entry')({
    isModule: true,
    portType: require('../link/worker'),
    providers: providers,
    global: global
  });
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../providers/core/core.console":5,"../../providers/core/core.echo":6,"../../providers/core/core.oauth":7,"../../providers/core/core.peerconnection":8,"../../providers/core/core.rtcdatachannel":9,"../../providers/core/core.rtcpeerconnection":10,"../../providers/core/core.storage":11,"../../providers/core/core.unprivileged":12,"../../providers/core/core.view":13,"../../providers/core/core.websocket":14,"../../providers/core/core.xhr":15,"../../providers/oauth/oauth.localpageauth":16,"../../providers/oauth/oauth.remotepageauth":17,"../entry":22,"../link/worker":25}]},{},[36])
//

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9kaXN0L2J1bmRsZS5jb21waWxlZC5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwiYnVpbGQvbm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9hZGFwdGVyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5lY2hvLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5vYXV0aC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUucGVlcmNvbm5lY3Rpb24uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y2RhdGFjaGFubmVsLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5ydGNwZWVyY29ubmVjdGlvbi5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUuc3RvcmFnZS5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUudW5wcml2aWxlZ2VkLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS52aWV3LmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS53ZWJzb2NrZXQuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnhoci5qcyIsImJ1aWxkL3Byb3ZpZGVycy9vYXV0aC9vYXV0aC5sb2NhbHBhZ2VhdXRoLmpzIiwiYnVpbGQvcHJvdmlkZXJzL29hdXRoL29hdXRoLnJlbW90ZXBhZ2VhdXRoLmpzIiwiYnVpbGQvc3JjL2FwaS5qcyIsImJ1aWxkL3NyYy9idW5kbGUuanMiLCJidWlsZC9zcmMvY29uc3VtZXIuanMiLCJidWlsZC9zcmMvZGVidWcuanMiLCJidWlsZC9zcmMvZW50cnkuanMiLCJidWlsZC9zcmMvaHViLmpzIiwiYnVpbGQvc3JjL2xpbmsuanMiLCJidWlsZC9zcmMvbGluay93b3JrZXIuanMiLCJidWlsZC9zcmMvbWFuYWdlci5qcyIsImJ1aWxkL3NyYy9tb2R1bGUuanMiLCJidWlsZC9zcmMvbW9kdWxlaW50ZXJuYWwuanMiLCJidWlsZC9zcmMvcG9saWN5LmpzIiwiYnVpbGQvc3JjL3Byb3ZpZGVyLmpzIiwiYnVpbGQvc3JjL3Byb3h5L2FwaUludGVyZmFjZS5qcyIsImJ1aWxkL3NyYy9wcm94eS9ldmVudEludGVyZmFjZS5qcyIsImJ1aWxkL3NyYy9wcm94eWJpbmRlci5qcyIsImJ1aWxkL3NyYy9yZXNvdXJjZS5qcyIsImJ1aWxkL3NyYy91dGlsLmpzIiwiYnVpbGQvc3JjL3V0aWwvd29ya2VyRW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUNBQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMvN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeGZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25hQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZyZWVkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gW3tcIm5hbWVcIjpcImNvbnNvbGVcIixcImFwaVwiOntcImxvZ1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJkZWJ1Z1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJpbmZvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcIndhcm5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZXJyb3JcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19fX0se1wibmFtZVwiOlwiY29yZS5jb25zb2xlXCIsXCJhcGlcIjp7XCJsb2dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZGVidWdcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiaW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJ3YXJuXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImVycm9yXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfX19LHtcIm5hbWVcIjpcImNvcmUuZWNob1wiLFwiYXBpXCI6e1wic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcIm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpcInN0cmluZ1wifX19LHtcIm5hbWVcIjpcImNvcmVcIixcImFwaVwiOntcImNyZWF0ZUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJjaGFubmVsXCI6XCJwcm94eVwiLFwiaWRlbnRpZmllclwiOlwic3RyaW5nXCJ9fSxcImJpbmRDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn0sXCJnZXRJZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0TG9nZ2VyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn19fSx7XCJuYW1lXCI6XCJjb3JlLm9hdXRoXCIsXCJhcGlcIjp7XCJpbml0aWF0ZU9BdXRoXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltbXCJhcnJheVwiLFwic3RyaW5nXCJdXSxcInJldFwiOntcInJlZGlyZWN0XCI6XCJzdHJpbmdcIixcInN0YXRlXCI6XCJzdHJpbmdcIn0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJsYXVuY2hBdXRoRmxvd1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIix7XCJyZWRpcmVjdFwiOlwic3RyaW5nXCIsXCJzdGF0ZVwiOlwic3RyaW5nXCJ9XSxcInJldFwiOlwic3RyaW5nXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX19fSx7XCJuYW1lXCI6XCJjb3JlLnBlZXJjb25uZWN0aW9uXCIsXCJhcGlcIjp7XCJzZXR1cFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiLFtcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJib29sZWFuXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImNoYW5uZWxMYWJlbFwiOlwic3RyaW5nXCIsXCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn1dfSxcIm9uUmVjZWl2ZWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsTGFiZWxcIjpcInN0cmluZ1wiLFwidGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcIm9wZW5EYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiY2xvc2VEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwib25PcGVuRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsSWRcIjpcInN0cmluZ1wifX0sXCJvbkNsb3NlRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsSWRcIjpcInN0cmluZ1wifX0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm51bWJlclwifSxcImdldEluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImNyZWF0ZU9mZmVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJvZmZlclRvUmVjZWl2ZVZpZGVvXCI6XCJudW1iZXJcIixcIm9mZmVyVG9SZWNlaXZlQXVkaW9cIjpcIm51bWJlclwiLFwidm9pY2VBY3Rpdml0eURldGVjdGlvblwiOlwiYm9vbGVhblwiLFwiaWNlUmVzdGFydFwiOlwiYm9vbGVhblwifV0sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7fX19fSx7XCJuYW1lXCI6XCJjb3JlLnJ0Y2RhdGFjaGFubmVsXCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldExhYmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRPcmRlcmVkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiZ2V0TWF4UGFja2V0TGlmZVRpbWVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldE1heFJldHJhbnNtaXRzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRQcm90b2NvbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0TmVnb3RpYXRlZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwiYm9vbGVhblwifSxcImdldElkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwib25vcGVuXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25lcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uY2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJvbm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcImdldEJpbmFyeVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInNldEJpbmFyeVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRCdWZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCJdfX19LHtcIm5hbWVcIjpcImNvcmUucnRjcGVlcmNvbm5lY3Rpb25cIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbe1wiaWNlU2VydmVyc1wiOltcImFycmF5XCIse1widXJsc1wiOltcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJ1c2VybmFtZVwiOlwic3RyaW5nXCIsXCJjcmVkZW50aWFsXCI6XCJzdHJpbmdcIn1dLFwiaWNlVHJhbnNwb3J0c1wiOlwic3RyaW5nXCIsXCJwZWVySWRlbnRpdHlcIjpcInN0cmluZ1wifV19LFwiY3JlYXRlT2ZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcIm9mZmVyVG9SZWNlaXZlQXVkaW9cIjpcIm51bWJlclwiLFwib2ZmZXJUb1JlY2VpdmVWaWRlb1wiOlwibnVtYmVyXCIsXCJpY2VSZXN0YXJ0XCI6XCJib29sZWFuXCIsXCJ2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uXCI6XCJib29sZWFuXCJ9XSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiY3JlYXRlQW5zd2VyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJzZXRMb2NhbERlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9XX0sXCJnZXRMb2NhbERlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifV0sXCJyZXRcIjp7fX0sXCJnZXRSZW1vdGVEZXNjcmlwdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiZ2V0U2lnbmFsaW5nU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInVwZGF0ZUljZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wiaWNlU2VydmVyc1wiOltcImFycmF5XCIse1widXJsc1wiOltcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJ1c2VybmFtZVwiOlwic3RyaW5nXCIsXCJjcmVkZW50aWFsXCI6XCJzdHJpbmdcIn1dLFwiaWNlVHJhbnNwb3J0c1wiOlwic3RyaW5nXCIsXCJwZWVySWRlbnRpdHlcIjpcInN0cmluZ1wifV0sXCJyZXRcIjp7fX0sXCJhZGRJY2VDYW5kaWRhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImNhbmRpZGF0ZVwiOlwic3RyaW5nXCIsXCJzZHBNaWRcIjpcInN0cmluZ1wiLFwic2RwTUxpbmVJbmRleFwiOlwibnVtYmVyXCJ9XSxcInJldFwiOnt9fSxcImdldEljZUdhdGhlcmluZ1N0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRJY2VDb25uZWN0aW9uU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldENvbmZpZ3VyYXRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJpY2VTZXJ2ZXJzXCI6W1wiYXJyYXlcIix7XCJ1cmxzXCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcInVzZXJuYW1lXCI6XCJzdHJpbmdcIixcImNyZWRlbnRpYWxcIjpcInN0cmluZ1wifV0sXCJpY2VUcmFuc3BvcnRzXCI6XCJzdHJpbmdcIixcInBlZXJJZGVudGl0eVwiOlwic3RyaW5nXCJ9fSxcImdldExvY2FsU3RyZWFtc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0UmVtb3RlU3RyZWFtc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0U3RyZWFtQnlJZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImFkZFN0cmVhbVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjp7fX0sXCJyZW1vdmVTdHJlYW1cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6e319LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7fX0sXCJjcmVhdGVEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIix7XCJvcmRlcmVkXCI6XCJib29sZWFuXCIsXCJtYXhQYWNrZXRMaWZlVGltZVwiOlwibnVtYmVyXCIsXCJtYXhSZXRyYW5zbWl0c1wiOlwibnVtYmVyXCIsXCJwcm90b2NvbFwiOlwic3RyaW5nXCIsXCJuZWdvdGlhdGVkXCI6XCJib29sZWFuXCIsXCJpZFwiOlwibnVtYmVyXCJ9XSxcInJldFwiOlwic3RyaW5nXCJ9LFwib25kYXRhY2hhbm5lbFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxcIjpcInN0cmluZ1wifX0sXCJnZXRTdGF0c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm9iamVjdFwifSxcIm9ubmVnb3RpYXRpb25uZWVkZWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmljZWNhbmRpZGF0ZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNhbmRpZGF0ZVwiOntcImNhbmRpZGF0ZVwiOlwic3RyaW5nXCIsXCJzZHBNaWRcIjpcInN0cmluZ1wiLFwic2RwTUxpbmVJbmRleFwiOlwibnVtYmVyXCJ9fX0sXCJvbnNpZ25hbGluZ3N0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25hZGRzdHJlYW1cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJzdHJlYW1cIjpcIm51bWJlclwifX0sXCJvbnJlbW92ZXN0cmVhbVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInN0cmVhbVwiOlwibnVtYmVyXCJ9fSxcIm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119fX0se1wibmFtZVwiOlwiY29yZS5zdG9yYWdlXCIsXCJhcGlcIjp7XCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImNsZWFyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfX19LHtcIm5hbWVcIjpcImNvcmUudGNwc29ja2V0XCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wibnVtYmVyXCJdfSxcImdldEluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJjb25uZWN0ZWRcIjpcImJvb2xlYW5cIixcImxvY2FsQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJsb2NhbFBvcnRcIjpcIm51bWJlclwiLFwicGVlckFkZHJlc3NcIjpcInN0cmluZ1wiLFwicGVlclBvcnRcIjpcIm51bWJlclwifX0sXCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIkFMUkVBRFlfQ09OTkVDVEVEXCI6XCJTb2NrZXQgYWxyZWFkeSBjb25uZWN0ZWRcIixcIklOVkFMSURfQVJHVU1FTlRcIjpcIkludmFsaWQgYXJndW1lbnRcIixcIlRJTUVEX09VVFwiOlwiVGltZWQgb3V0XCIsXCJOT1RfQ09OTkVDVEVEXCI6XCJTb2NrZXQgbm90IGNvbm5lY3RlZFwiLFwiTkVUV09SS19DSEFOR0VEXCI6XCJOZXR3b3JrIGNoYW5nZWRcIixcIkNPTk5FQ1RJT05fQ0xPU0VEXCI6XCJDb25uZWN0aW9uIGNsb3NlZCBncmFjZWZ1bGx5XCIsXCJDT05ORUNUSU9OX1JFU0VUXCI6XCJDb25uZWN0aW9uIHJlc2V0XCIsXCJDT05ORUNUSU9OX1JFRlVTRURcIjpcIkNvbm5lY3Rpb24gcmVmdXNlZFwiLFwiQ09OTkVDVElPTl9GQUlMRURcIjpcIkNvbm5lY3Rpb24gZmFpbGVkXCIsXCJOQU1FX05PVF9SRVNPTFZFRFwiOlwiRE5TIGxvb2t1cCBmYWlsZWRcIixcIklOVEVSTkVUX0RJU0NPTk5FQ1RFRFwiOlwiQ2Fubm90IHJlYWNoIGFueSBuZXR3b3JrXCIsXCJBRERSRVNTX0lOVkFMSURcIjpcIkludmFsaWQgYWRkcmVzc1wiLFwiQUREUkVTU19VTlJFQUNIQUJMRVwiOlwiTm8gcm91dGUgdG8gaG9zdFwiLFwiSE9TVF9VTlJFQUNIQUJMRVwiOlwiU09DS1MgcHJveHkgc2VydmVyIGNvdWxkIG5vdCByZWFjaCBob3N0XCJ9fSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25EaXNjb25uZWN0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY29ubmVjdFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInNlY3VyZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInBhdXNlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicmVzdW1lXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicHJlcGFyZVNlY3VyZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIndyaXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcImJ1ZmZlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImRhdGFcIjpcImJ1ZmZlclwifX0sXCJsaXN0ZW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJudW1iZXJcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkNvbm5lY3Rpb25cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJzb2NrZXRcIjpcIm51bWJlclwiLFwiaG9zdFwiOlwic3RyaW5nXCIsXCJwb3J0XCI6XCJudW1iZXJcIn19fX0se1wibmFtZVwiOlwiY29yZS51ZHBzb2NrZXRcIixcImFwaVwiOntcIkVSUkNPREVcIjp7XCJ0eXBlXCI6XCJjb25zdGFudFwiLFwidmFsdWVcIjp7XCJTVUNDRVNTXCI6XCJTdWNjZXNzIVwiLFwiVU5LTk9XTlwiOlwiVW5rbm93biBlcnJvclwiLFwiQUxSRUFEWV9CT1VORFwiOlwiU29ja2V0IGFscmVhZHkgYm91bmRcIixcIklOVkFMSURfQVJHVU1FTlRcIjpcIkludmFsaWQgYXJndW1lbnRcIixcIk5FVFdPUktfQ0hBTkdFRFwiOlwiTmV0d29yayBjaGFuZ2VkXCIsXCJTTkVEX0ZBSUxFRFwiOlwiU2VuZCBmYWlsZWRcIn19LFwiYmluZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0SW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImxvY2FsQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJsb2NhbFBvcnRcIjpcIm51bWJlclwifX0sXCJzZW5kVG9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCIsXCJzdHJpbmdcIixcIm51bWJlclwiXSxcInJldFwiOlwibnVtYmVyXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJkZXN0cm95XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInJlc3VsdENvZGVcIjpcIm51bWJlclwiLFwiYWRkcmVzc1wiOlwic3RyaW5nXCIsXCJwb3J0XCI6XCJudW1iZXJcIixcImRhdGFcIjpcImJ1ZmZlclwifX19fSx7XCJuYW1lXCI6XCJjb3JlLnZpZXdcIixcImFwaVwiOntcInNob3dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImlzU2VjdXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwicG9zdE1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wib2JqZWN0XCJdfSxcIm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpcIm9iamVjdFwifSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX19fSx7XCJuYW1lXCI6XCJjb3JlLndlYnNvY2tldFwiLFwiYXBpXCI6e1wiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOltcInN0cmluZ1wiLFtcImFycmF5XCIsXCJzdHJpbmdcIl1dfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcInRleHRcIjpcInN0cmluZ1wiLFwiYmluYXJ5XCI6XCJibG9iXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwifV0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm51bWJlclwifSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcIm51bWJlclwiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25NZXNzYWdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcIm9uT3BlblwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uRXJyb3JcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkNsb3NlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY29kZVwiOlwibnVtYmVyXCIsXCJyZWFzb25cIjpcInN0cmluZ1wiLFwid2FzQ2xlYW5cIjpcImJvb2xlYW5cIn19fX0se1wibmFtZVwiOlwiY29yZS54aHJcIixcImFwaVwiOntcIm9wZW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIixcImJvb2xlYW5cIixcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wic3RyaW5nXCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9XX0sXCJhYm9ydFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJnZXRSZXNwb25zZUhlYWRlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldEFsbFJlc3BvbnNlSGVhZGVyc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwic2V0UmVxdWVzdEhlYWRlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJvdmVycmlkZU1pbWVUeXBlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRSZXNwb25zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcInN0cmluZ1wiOlwic3RyaW5nXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwiLFwib2JqZWN0XCI6XCJvYmplY3RcIn19LFwiZ2V0UmVzcG9uc2VUZXh0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRSZXNwb25zZVVSTFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0UmVzcG9uc2VUeXBlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRSZXNwb25zZVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldFN0YXR1c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0U3RhdHVzVGV4dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0VGltZW91dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwic2V0VGltZW91dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJudW1iZXJcIl19LFwiZ2V0V2l0aENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwic2V0V2l0aENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcImJvb2xlYW5cIl19LFwib25sb2Fkc3RhcnRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnByb2dyZXNzXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib25hYm9ydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9uZXJyb3JcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmxvYWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnRpbWVvdXRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmxvYWRlbmRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7fX0sXCJvbnVwbG9hZGxvYWRzdGFydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkcHJvZ3Jlc3NcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnVwbG9hZGFib3J0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRlcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkbG9hZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkdGltZW91dFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkbG9hZGVuZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkcmVhZHlzdGF0ZWNoYW5nZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fX19LHtcIm5hbWVcIjpcInNvY2lhbFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJVc2VyIGlzIGN1cnJlbnRseSBvZmZsaW5lXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIixcIkxPR0lOX0JBRENSRURFTlRJQUxTXCI6XCJFcnJvciBhdXRoZW50aWNhdGluZyB3aXRoIHNlcnZlclwiLFwiTE9HSU5fRkFJTEVEQ09OTkVDVElPTlwiOlwiRXJyb3IgY29ubmVjdGluZyB0byBzZXJ2ZXJcIixcIkxPR0lOX0FMUkVBRFlPTkxJTkVcIjpcIlVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW5cIixcIkxPR0lOX09BVVRIRVJST1JcIjpcIk9BdXRoIEVycm9yXCIsXCJTRU5EX0lOVkFMSURERVNUSU5BVElPTlwiOlwiTWVzc2FnZSBzZW50IHRvIGFuIGludmFsaWQgZGVzdGluYXRpb25cIn19LFwiU1RBVFVTXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiT0ZGTElORVwiOlwiT0ZGTElORVwiLFwiT05MSU5FXCI6XCJPTkxJTkVcIixcIk9OTElORV9XSVRIX09USEVSX0FQUFwiOlwiT05MSU5FX1dJVEhfT1RIRVJfQVBQXCJ9fSxcImxvZ2luXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJhZ2VudFwiOlwic3RyaW5nXCIsXCJ2ZXJzaW9uXCI6XCJzdHJpbmdcIixcInVybFwiOlwic3RyaW5nXCIsXCJpbnRlcmFjdGl2ZVwiOlwiYm9vbGVhblwiLFwicmVtZW1iZXJMb2dpblwiOlwiYm9vbGVhblwifV0sXCJyZXRcIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwiY2xpZW50SWRcIjpcInN0cmluZ1wiLFwic3RhdHVzXCI6XCJzdHJpbmdcIixcImxhc3RVcGRhdGVkXCI6XCJudW1iZXJcIixcImxhc3RTZWVuXCI6XCJudW1iZXJcIn0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhckNhY2hlZENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcImdldENsaWVudHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm9iamVjdFwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0VXNlcnNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm9iamVjdFwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZE1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJsb2dvdXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbk1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJmcm9tXCI6e1widXNlcklkXCI6XCJzdHJpbmdcIixcImNsaWVudElkXCI6XCJzdHJpbmdcIixcInN0YXR1c1wiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJsYXN0U2VlblwiOlwibnVtYmVyXCJ9LFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uVXNlclByb2ZpbGVcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibmFtZVwiOlwic3RyaW5nXCIsXCJ1cmxcIjpcInN0cmluZ1wiLFwiaW1hZ2VEYXRhXCI6XCJzdHJpbmdcIn19LFwib25DbGllbnRTdGF0ZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJjbGllbnRJZFwiOlwic3RyaW5nXCIsXCJzdGF0dXNcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibGFzdFNlZW5cIjpcIm51bWJlclwifX19fSx7XCJuYW1lXCI6XCJzdG9yYWdlXCIsXCJhcGlcIjp7XCJzY29wZVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNFU1NJT05cIjowLFwiREVWSUNFX0xPQ0FMXCI6MSxcIlVTRVJfTE9DQUxcIjoyLFwiU0hBUkVEXCI6M319LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJEYXRhYmFzZSBub3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJzY29wZVwiOlwibnVtYmVyXCJ9XX0sXCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcInN0b3JlYnVmZmVyXCIsXCJhcGlcIjp7XCJzY29wZVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNFU1NJT05cIjowLFwiREVWSUNFX0xPQ0FMXCI6MSxcIlVTRVJfTE9DQUxcIjoyLFwiU0hBUkVEXCI6M319LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJEYXRhYmFzZSBub3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJzY29wZVwiOlwibnVtYmVyXCJ9XX0sXCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwiYnVmZmVyXCJdLFwicmV0XCI6XCJidWZmZXJcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcInRyYW5zcG9ydFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJOb3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJwcm94eVwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcImJ1ZmZlclwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInRhZ1wiOlwic3RyaW5nXCIsXCJkYXRhXCI6XCJidWZmZXJcIn19LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfX19XTtcbiIsIi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9qYWtlYXJjaGliYWxkL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIDIuMC4xXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZnVuY3Rpb24gJCR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJHV0aWxzJCRpc0Z1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJHV0aWxzJCRpc01heWJlVGhlbmFibGUoeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuICAgIH1cblxuICAgIHZhciAkJHV0aWxzJCRfaXNBcnJheTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgJCR1dGlscyQkX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCR1dGlscyQkX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICAgIH1cblxuICAgIHZhciAkJHV0aWxzJCRpc0FycmF5ID0gJCR1dGlscyQkX2lzQXJyYXk7XG4gICAgdmFyICQkdXRpbHMkJG5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG4gICAgZnVuY3Rpb24gJCR1dGlscyQkRigpIHsgfVxuXG4gICAgdmFyICQkdXRpbHMkJG9fY3JlYXRlID0gKE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG8gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgICB9XG4gICAgICAkJHV0aWxzJCRGLnByb3RvdHlwZSA9IG87XG4gICAgICByZXR1cm4gbmV3ICQkdXRpbHMkJEYoKTtcbiAgICB9KTtcblxuICAgIHZhciAkJGFzYXAkJGxlbiA9IDA7XG5cbiAgICB2YXIgJCRhc2FwJCRkZWZhdWx0ID0gZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gICAgICAkJGFzYXAkJHF1ZXVlWyQkYXNhcCQkbGVuXSA9IGNhbGxiYWNrO1xuICAgICAgJCRhc2FwJCRxdWV1ZVskJGFzYXAkJGxlbiArIDFdID0gYXJnO1xuICAgICAgJCRhc2FwJCRsZW4gKz0gMjtcbiAgICAgIGlmICgkJGFzYXAkJGxlbiA9PT0gMikge1xuICAgICAgICAvLyBJZiBsZW4gaXMgMSwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG4gICAgICAgIC8vIElmIGFkZGl0aW9uYWwgY2FsbGJhY2tzIGFyZSBxdWV1ZWQgYmVmb3JlIHRoZSBxdWV1ZSBpcyBmbHVzaGVkLCB0aGV5XG4gICAgICAgIC8vIHdpbGwgYmUgcHJvY2Vzc2VkIGJ5IHRoaXMgZmx1c2ggdGhhdCB3ZSBhcmUgc2NoZWR1bGluZy5cbiAgICAgICAgJCRhc2FwJCRzY2hlZHVsZUZsdXNoKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciAkJGFzYXAkJGJyb3dzZXJHbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDoge307XG4gICAgdmFyICQkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSAkJGFzYXAkJGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCAkJGFzYXAkJGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxuICAgIC8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG4gICAgdmFyICQkYXNhcCQkaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAvLyBub2RlXG4gICAgZnVuY3Rpb24gJCRhc2FwJCR1c2VOZXh0VGljaygpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljaygkJGFzYXAkJGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3ICQkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoJCRhc2FwJCRmbHVzaCk7XG4gICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIG5vZGUuZGF0YSA9IChpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIHdlYiB3b3JrZXJcbiAgICBmdW5jdGlvbiAkJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gJCRhc2FwJCRmbHVzaDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkYXNhcCQkdXNlU2V0VGltZW91dCgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dCgkJGFzYXAkJGZsdXNoLCAxKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyICQkYXNhcCQkcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG5cbiAgICBmdW5jdGlvbiAkJGFzYXAkJGZsdXNoKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkJGFzYXAkJGxlbjsgaSs9Mikge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSAkJGFzYXAkJHF1ZXVlW2ldO1xuICAgICAgICB2YXIgYXJnID0gJCRhc2FwJCRxdWV1ZVtpKzFdO1xuXG4gICAgICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICAgICAgJCRhc2FwJCRxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgJCRhc2FwJCRxdWV1ZVtpKzFdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAkJGFzYXAkJGxlbiA9IDA7XG4gICAgfVxuXG4gICAgdmFyICQkYXNhcCQkc2NoZWR1bGVGbHVzaDtcblxuICAgIC8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAgICQkYXNhcCQkc2NoZWR1bGVGbHVzaCA9ICQkYXNhcCQkdXNlTmV4dFRpY2soKTtcbiAgICB9IGVsc2UgaWYgKCQkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICQkYXNhcCQkc2NoZWR1bGVGbHVzaCA9ICQkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuICAgIH0gZWxzZSBpZiAoJCRhc2FwJCRpc1dvcmtlcikge1xuICAgICAgJCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gJCRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSAkJGFzYXAkJHVzZVNldFRpbWVvdXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkbm9vcCgpIHt9XG4gICAgdmFyICQkJGludGVybmFsJCRQRU5ESU5HICAgPSB2b2lkIDA7XG4gICAgdmFyICQkJGludGVybmFsJCRGVUxGSUxMRUQgPSAxO1xuICAgIHZhciAkJCRpbnRlcm5hbCQkUkVKRUNURUQgID0gMjtcbiAgICB2YXIgJCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SID0gbmV3ICQkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHNlbGZGdWxsZmlsbG1lbnQoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGNhbm5vdFJldHVybk93bigpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkZ2V0VGhlbihwcm9taXNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuO1xuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAkJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuICQkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICAgICAgICQkYXNhcCQkZGVmYXVsdChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gJCQkaW50ZXJuYWwkJHRyeVRoZW4odGhlbiwgdGhlbmFibGUsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGVuYWJsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICQkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9LCAnU2V0dGxlOiAnICsgKHByb21pc2UuX2xhYmVsIHx8ICcgdW5rbm93biBwcm9taXNlJykpO1xuXG4gICAgICAgIGlmICghc2VhbGVkICYmIGVycm9yKSB7XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gICAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSAkJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgICQkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpIHtcbiAgICAgIGlmIChtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yID09PSBwcm9taXNlLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICQkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0aGVuID0gJCQkaW50ZXJuYWwkJGdldFRoZW4obWF5YmVUaGVuYWJsZSk7XG5cbiAgICAgICAgaWYgKHRoZW4gPT09ICQkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUikge1xuICAgICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgJCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfSBlbHNlIGlmICgkJHV0aWxzJCRpc0Z1bmN0aW9uKHRoZW4pKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCAkJCRpbnRlcm5hbCQkc2VsZkZ1bGxmaWxsbWVudCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoJCR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgJCQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gJCQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSAkJCRpbnRlcm5hbCQkRlVMRklMTEVEO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkJGFzYXAkJGRlZmF1bHQoJCQkaW50ZXJuYWwkJHB1Ymxpc2gsIHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09ICQkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuICAgICAgcHJvbWlzZS5fc3RhdGUgPSAkJCRpbnRlcm5hbCQkUkVKRUNURUQ7XG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG5cbiAgICAgICQkYXNhcCQkZGVmYXVsdCgkJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgICAgIHZhciBsZW5ndGggPSBzdWJzY3JpYmVycy5sZW5ndGg7XG5cbiAgICAgIHBhcmVudC5fb25lcnJvciA9IG51bGw7XG5cbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aF0gPSBjaGlsZDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArICQkJGludGVybmFsJCRGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArICQkJGludGVybmFsJCRSRUpFQ1RFRF0gID0gb25SZWplY3Rpb247XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgICAgICAkJGFzYXAkJGRlZmF1bHQoJCQkaW50ZXJuYWwkJHB1Ymxpc2gsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSkge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCkge1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyICQkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IgPSBuZXcgJCQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgICAgIHJldHVybiAkJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBwcm9taXNlLCBjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSAkJHV0aWxzJCRpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgICAgICB2YWx1ZSwgZXJyb3IsIHN1Y2NlZWRlZCwgZmFpbGVkO1xuXG4gICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgdmFsdWUgPSAkJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAkJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SKSB7XG4gICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICBlcnJvciA9IHZhbHVlLmVycm9yO1xuICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCAkJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSAkJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAvLyBub29wXG4gICAgICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gJCQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09ICQkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKXtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGVudW1lcmF0b3IkJG1ha2VTZXR0bGVkUmVzdWx0KHN0YXRlLCBwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXRlOiAnZnVsZmlsbGVkJyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdGU6ICdyZWplY3RlZCcsXG4gICAgICAgICAgcmVhc29uOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0LCBhYm9ydE9uUmVqZWN0LCBsYWJlbCkge1xuICAgICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKCQkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG4gICAgICB0aGlzLl9hYm9ydE9uUmVqZWN0ID0gYWJvcnRPblJlamVjdDtcblxuICAgICAgaWYgKHRoaXMuX3ZhbGlkYXRlSW5wdXQoaW5wdXQpKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ICAgICA9IGlucHV0O1xuICAgICAgICB0aGlzLmxlbmd0aCAgICAgPSBpbnB1dC5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLl9pbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgICAgICB0aGlzLl9lbnVtZXJhdGUoKTtcbiAgICAgICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHRoaXMucHJvbWlzZSwgdGhpcy5fdmFsaWRhdGlvbkVycm9yKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl92YWxpZGF0ZUlucHV0ID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiAkJHV0aWxzJCRpc0FycmF5KGlucHV0KTtcbiAgICB9O1xuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5Jyk7XG4gICAgfTtcblxuICAgICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuICAgIH07XG5cbiAgICB2YXIgJCQkZW51bWVyYXRvciQkZGVmYXVsdCA9ICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3I7XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGVuZ3RoICA9IHRoaXMubGVuZ3RoO1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgICB2YXIgaW5wdXQgICA9IHRoaXMuX2lucHV0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgcHJvbWlzZS5fc3RhdGUgPT09ICQkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9lYWNoRW50cnkoaW5wdXRbaV0sIGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24oZW50cnksIGkpIHtcbiAgICAgIHZhciBjID0gdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcbiAgICAgIGlmICgkJHV0aWxzJCRpc01heWJlVGhlbmFibGUoZW50cnkpKSB7XG4gICAgICAgIGlmIChlbnRyeS5jb25zdHJ1Y3RvciA9PT0gYyAmJiBlbnRyeS5fc3RhdGUgIT09ICQkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgICAgZW50cnkuX29uZXJyb3IgPSBudWxsO1xuICAgICAgICAgIHRoaXMuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChjLnJlc29sdmUoZW50cnkpLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG4gICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHRoaXMuX21ha2VSZXN1bHQoJCQkaW50ZXJuYWwkJEZVTEZJTExFRCwgaSwgZW50cnkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSAkJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcblxuICAgICAgICBpZiAodGhpcy5fYWJvcnRPblJlamVjdCAmJiBzdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdGhpcy5fbWFrZVJlc3VsdChzdGF0ZSwgaSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX21ha2VSZXN1bHQgPSBmdW5jdGlvbihzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uKHByb21pc2UsIGkpIHtcbiAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICAgICAgJCQkaW50ZXJuYWwkJHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdCgkJCRpbnRlcm5hbCQkRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KCQkJGludGVybmFsJCRSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgJCRwcm9taXNlJGFsbCQkZGVmYXVsdCA9IGZ1bmN0aW9uIGFsbChlbnRyaWVzLCBsYWJlbCkge1xuICAgICAgcmV0dXJuIG5ldyAkJCRlbnVtZXJhdG9yJCRkZWZhdWx0KHRoaXMsIGVudHJpZXMsIHRydWUgLyogYWJvcnQgb24gcmVqZWN0ICovLCBsYWJlbCkucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyICQkcHJvbWlzZSRyYWNlJCRkZWZhdWx0ID0gZnVuY3Rpb24gcmFjZShlbnRyaWVzLCBsYWJlbCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKCQkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG5cbiAgICAgIGlmICghJCR1dGlscyQkaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS4nKSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuZ3RoID0gZW50cmllcy5sZW5ndGg7XG5cbiAgICAgIGZ1bmN0aW9uIG9uRnVsZmlsbG1lbnQodmFsdWUpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGlvbihyZWFzb24pIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgcHJvbWlzZS5fc3RhdGUgPT09ICQkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAkJCRpbnRlcm5hbCQkc3Vic2NyaWJlKENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSksIHVuZGVmaW5lZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyICQkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0ID0gZnVuY3Rpb24gcmVzb2x2ZShvYmplY3QsIGxhYmVsKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKCQkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG4gICAgICAkJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciAkJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0ID0gZnVuY3Rpb24gcmVqZWN0KHJlYXNvbiwgbGFiZWwpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IoJCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcbiAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRjb3VudGVyID0gMDtcblxuICAgIGZ1bmN0aW9uICQkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0ID0gJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlO1xuXG4gICAgLyoqXG4gICAgICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gICAgICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICAgICAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2XigJlzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cbiAgICAgIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBUZXJtaW5vbG9neVxuICAgICAgLS0tLS0tLS0tLS1cblxuICAgICAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgICAgIC0gYHRoZW5hYmxlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGEgYHRoZW5gIG1ldGhvZC5cbiAgICAgIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cbiAgICAgIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAgICAgLSBgcmVhc29uYCBpcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoeSBhIHByb21pc2Ugd2FzIHJlamVjdGVkLlxuICAgICAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICAgICAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcbiAgICAgIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcbiAgICAgIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gICAgICBQcm9taXNlcyBjYW4gYWxzbyBiZSBzYWlkIHRvICpyZXNvbHZlKiBhIHZhbHVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBhbHNvIGFcbiAgICAgIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3NcbiAgICAgIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICAgICAgaXRzZWxmIHJlamVjdCwgYW5kIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2lsbFxuICAgICAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuICAgICAgQmFzaWMgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgYGBganNcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIG9uIHN1Y2Nlc3NcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gb24gZmFpbHVyZVxuICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAgICAgIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICAgICAgYGBganNcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgICAgIGdldEpTT04oJy9jb21tZW50cycpXG4gICAgICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG4gICAgICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICAgICAgdmFsdWVzWzFdIC8vID0+IGNvbW1lbnRzSlNPTlxuXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAY2xhc3MgUHJvbWlzZVxuICAgICAgQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZXJcbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgZnVuY3Rpb24gJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgICB0aGlzLl9pZCA9ICQkZXM2JHByb21pc2UkcHJvbWlzZSQkY291bnRlcisrO1xuICAgICAgdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgICBpZiAoJCQkaW50ZXJuYWwkJG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgICAgIGlmICghJCR1dGlscyQkaXNGdW5jdGlvbihyZXNvbHZlcikpIHtcbiAgICAgICAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UpKSB7XG4gICAgICAgICAgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuYWxsID0gJCRwcm9taXNlJGFsbCQkZGVmYXVsdDtcbiAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmFjZSA9ICQkcHJvbWlzZSRyYWNlJCRkZWZhdWx0O1xuICAgICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZXNvbHZlID0gJCRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQ7XG4gICAgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlamVjdCA9ICQkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQ7XG5cbiAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucHJvdG90eXBlID0ge1xuICAgICAgY29uc3RydWN0b3I6ICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZSxcblxuICAgIC8qKlxuICAgICAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gICAgICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuICAgICAgcmVhc29uIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuICAgICAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIENoYWluaW5nXG4gICAgICAtLS0tLS0tLVxuXG4gICAgICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICAgICAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuICAgICAgb3IgcmVqZWN0aW9uIGhhbmRsZXIsIG9yIHJlamVjdGVkIGlmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuICAgICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2BcbiAgICAgIH0pO1xuXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCByZWplY3RlZCwgYHJlYXNvbmAgd2lsbCBiZSAnYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScuXG4gICAgICB9KTtcbiAgICAgIGBgYFxuICAgICAgSWYgdGhlIGRvd25zdHJlYW0gcHJvbWlzZSBkb2VzIG5vdCBzcGVjaWZ5IGEgcmVqZWN0aW9uIGhhbmRsZXIsIHJlamVjdGlvbiByZWFzb25zIHdpbGwgYmUgcHJvcGFnYXRlZCBmdXJ0aGVyIGRvd25zdHJlYW0uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBlZGFnb2dpY2FsRXhjZXB0aW9uKCdVcHN0cmVhbSBlcnJvcicpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBUaGUgYFBlZGdhZ29jaWFsRXhjZXB0aW9uYCBpcyBwcm9wYWdhdGVkIGFsbCB0aGUgd2F5IGRvd24gdG8gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQXNzaW1pbGF0aW9uXG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgICAgIHJldHJpZXZlZCBhc3luY2hyb25vdXNseS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmV0dXJuaW5nIGEgcHJvbWlzZSBpbiB0aGVcbiAgICAgIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBoYW5kbGVyLiBUaGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgdGhlbiBiZSBwZW5kaW5nXG4gICAgICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIGZ1bGZpbGxzLCB3ZSdsbCBoYXZlIHRoZSB2YWx1ZSBoZXJlXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFNpbXBsZSBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFJlc3VsdChmdW5jdGlvbihyZXN1bHQsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIGF1dGhvciwgYm9va3M7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICAgICAgYm9va3MgID0gZmluZEJvb2tzQnlBdXRob3IoYXV0aG9yKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuXG4gICAgICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG5cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcblxuICAgICAgfVxuXG4gICAgICBmaW5kQXV0aG9yKGZ1bmN0aW9uKGF1dGhvciwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpbmRCb29va3NCeUF1dGhvcihhdXRob3IsIGZ1bmN0aW9uKGJvb2tzLCBlcnIpIHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRBdXRob3IoKS5cbiAgICAgICAgdGhlbihmaW5kQm9va3NCeUF1dGhvcikuXG4gICAgICAgIHRoZW4oZnVuY3Rpb24oYm9va3Mpe1xuICAgICAgICAgIC8vIGZvdW5kIGJvb2tzXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCB0aGVuXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3RlZFxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgdGhlbjogZnVuY3Rpb24ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXM7XG4gICAgICAgIHZhciBzdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSAkJCRpbnRlcm5hbCQkRlVMRklMTEVEICYmICFvbkZ1bGZpbGxtZW50IHx8IHN0YXRlID09PSAkJCRpbnRlcm5hbCQkUkVKRUNURUQgJiYgIW9uUmVqZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcigkJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXJlbnQuX3Jlc3VsdDtcblxuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbc3RhdGUgLSAxXTtcbiAgICAgICAgICAkJGFzYXAkJGRlZmF1bHQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCByZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfSxcblxuICAgIC8qKlxuICAgICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHN5bmNocm9ub3VzXG4gICAgICB0cnkge1xuICAgICAgICBmaW5kQXV0aG9yKCk7XG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfVxuXG4gICAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgY2F0Y2hcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyICQkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQgPSBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICAgIHZhciBsb2NhbDtcblxuICAgICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxvY2FsID0gZ2xvYmFsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgICAgbG9jYWwgPSB3aW5kb3c7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbCA9IHNlbGY7XG4gICAgICB9XG5cbiAgICAgIHZhciBlczZQcm9taXNlU3VwcG9ydCA9XG4gICAgICAgIFwiUHJvbWlzZVwiIGluIGxvY2FsICYmXG4gICAgICAgIC8vIFNvbWUgb2YgdGhlc2UgbWV0aG9kcyBhcmUgbWlzc2luZyBmcm9tXG4gICAgICAgIC8vIEZpcmVmb3gvQ2hyb21lIGV4cGVyaW1lbnRhbCBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgXCJyZXNvbHZlXCIgaW4gbG9jYWwuUHJvbWlzZSAmJlxuICAgICAgICBcInJlamVjdFwiIGluIGxvY2FsLlByb21pc2UgJiZcbiAgICAgICAgXCJhbGxcIiBpbiBsb2NhbC5Qcm9taXNlICYmXG4gICAgICAgIFwicmFjZVwiIGluIGxvY2FsLlByb21pc2UgJiZcbiAgICAgICAgLy8gT2xkZXIgdmVyc2lvbiBvZiB0aGUgc3BlYyBoYWQgYSByZXNvbHZlciBvYmplY3RcbiAgICAgICAgLy8gYXMgdGhlIGFyZyByYXRoZXIgdGhhbiBhIGZ1bmN0aW9uXG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgcmVzb2x2ZTtcbiAgICAgICAgICBuZXcgbG9jYWwuUHJvbWlzZShmdW5jdGlvbihyKSB7IHJlc29sdmUgPSByOyB9KTtcbiAgICAgICAgICByZXR1cm4gJCR1dGlscyQkaXNGdW5jdGlvbihyZXNvbHZlKTtcbiAgICAgICAgfSgpKTtcblxuICAgICAgaWYgKCFlczZQcm9taXNlU3VwcG9ydCkge1xuICAgICAgICBsb2NhbC5Qcm9taXNlID0gJCRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlID0ge1xuICAgICAgJ1Byb21pc2UnOiAkJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQsXG4gICAgICAncG9seWZpbGwnOiAkJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0XG4gICAgfTtcblxuICAgIC8qIGdsb2JhbCBkZWZpbmU6dHJ1ZSBtb2R1bGU6dHJ1ZSB3aW5kb3c6IHRydWUgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddKSB7XG4gICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlWydleHBvcnRzJ10pIHtcbiAgICAgIG1vZHVsZVsnZXhwb3J0cyddID0gZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzWydFUzZQcm9taXNlJ10gPSBlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7XG4gICAgfVxufSkuY2FsbCh0aGlzKTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRRdWV1ZTtcbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW2ldKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xufVxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICBxdWV1ZS5wdXNoKGZ1bik7XG4gICAgaWYgKCFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlKi9cbi8qZ2xvYmFscyBSVENQZWVyQ29ubmVjdGlvbiwgbW96UlRDUGVlckNvbm5lY3Rpb24sIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICovXG4vKmdsb2JhbHMgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gKi9cbi8qZ2xvYmFscyBSVENJY2VDYW5kaWRhdGUsIG1velJUQ0ljZUNhbmRpZGF0ZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbXlSVENQZWVyQ29ubmVjdGlvbiA9IG51bGw7XG52YXIgbXlSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBudWxsO1xudmFyIG15UlRDSWNlQ2FuZGlkYXRlID0gbnVsbDtcblxudmFyIHJlbmFtZUljZVVSTHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghY29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIGNvbmZpZy5pY2VTZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKHNlcnZlcikge1xuICAgIHNlcnZlci51cmwgPSBzZXJ2ZXIudXJscztcbiAgICBkZWxldGUgc2VydmVyLnVybHM7XG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufTtcblxudmFyIGZpeENocm9tZVN0YXRzUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgdmFyIHJlcG9ydHMgPSByZXNwb25zZS5yZXN1bHQoKTtcbiAgcmVwb3J0cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcG9ydCkge1xuICAgIHZhciBzdGFuZGFyZFN0YXRzID0ge1xuICAgICAgaWQ6IHJlcG9ydC5pZCxcbiAgICAgIHRpbWVzdGFtcDogcmVwb3J0LnRpbWVzdGFtcCxcbiAgICAgIHR5cGU6IHJlcG9ydC50eXBlXG4gICAgfTtcbiAgICByZXBvcnQubmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHN0YW5kYXJkU3RhdHNbbmFtZV0gPSByZXBvcnQuc3RhdChuYW1lKTtcbiAgICB9KTtcbiAgICBzdGFuZGFyZFJlcG9ydFtzdGFuZGFyZFN0YXRzLmlkXSA9IHN0YW5kYXJkU3RhdHM7XG4gIH0pO1xuXG4gIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbn07XG5cbnZhciBzZXNzaW9uSGFzRGF0YSA9IGZ1bmN0aW9uKGRlc2MpIHtcbiAgaWYgKCFkZXNjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBoYXNEYXRhID0gZmFsc2U7XG4gIHZhciBwcmVmaXggPSAnbT1hcHBsaWNhdGlvbic7XG4gIGRlc2Muc2RwLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBpZiAobGluZS5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBoYXNEYXRhID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaGFzRGF0YTtcbn07XG5cbi8vIFVuaWZ5IFBlZXJDb25uZWN0aW9uIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDUGVlckNvbm5lY3Rpb24gPSBSVENQZWVyQ29ubmVjdGlvbjtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgLy8gRmlyZWZveCB1c2VzICd1cmwnIHJhdGhlciB0aGFuICd1cmxzJyBmb3IgUlRDSWNlU2VydmVyLnVybHNcbiAgICB2YXIgcGMgPSBuZXcgbW96UlRDUGVlckNvbm5lY3Rpb24ocmVuYW1lSWNlVVJMcyhjb25maWd1cmF0aW9uKSwgY29uc3RyYWludHMpO1xuXG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGZpcmUgJ29ubmVnb3RpYXRpb25uZWVkZWQnIHdoZW4gYSBkYXRhIGNoYW5uZWwgaXMgY3JlYXRlZFxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg0MDcyOFxuICAgIHZhciBkYXRhRW5hYmxlZCA9IGZhbHNlO1xuICAgIHZhciBib3VuZENyZWF0ZURhdGFDaGFubmVsID0gcGMuY3JlYXRlRGF0YUNoYW5uZWwuYmluZChwYyk7XG4gICAgcGMuY3JlYXRlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbihsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSB7XG4gICAgICB2YXIgZGMgPSBib3VuZENyZWF0ZURhdGFDaGFubmVsKGxhYmVsLCBkYXRhQ2hhbm5lbERpY3QpO1xuICAgICAgaWYgKCFkYXRhRW5hYmxlZCkge1xuICAgICAgICBkYXRhRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmIChwYy5vbm5lZ290aWF0aW9ubmVlZGVkICYmXG4gICAgICAgICAgICAhc2Vzc2lvbkhhc0RhdGEocGMubG9jYWxEZXNjcmlwdGlvbikgJiZcbiAgICAgICAgICAgICFzZXNzaW9uSGFzRGF0YShwYy5yZW1vdGVEZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICAgICAgcGMub25uZWdvdGlhdGlvbm5lZWRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkYztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBjO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIENocm9tZSByZXR1cm5zIGEgbm9uc3RhbmRhcmQsIG5vbi1KU09OLWlmaWFibGUgcmVzcG9uc2UgZnJvbSBnZXRTdGF0cy5cbiAgbXlSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgdmFyIHBjID0gbmV3IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKTtcbiAgICB2YXIgYm91bmRHZXRTdGF0cyA9IHBjLmdldFN0YXRzLmJpbmQocGMpO1xuICAgIHBjLmdldFN0YXRzID0gZnVuY3Rpb24oc2VsZWN0b3IsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciA9IGZ1bmN0aW9uKGNocm9tZVN0YXRzUmVzcG9uc2UpIHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGZpeENocm9tZVN0YXRzUmVzcG9uc2UoY2hyb21lU3RhdHNSZXNwb25zZSkpO1xuICAgICAgfTtcbiAgICAgIC8vIENocm9tZSBhbHNvIHRha2VzIGl0cyBhcmd1bWVudHMgaW4gdGhlIHdyb25nIG9yZGVyLlxuICAgICAgYm91bmRHZXRTdGF0cyhzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyLCBmYWlsdXJlQ2FsbGJhY2ssIHNlbGVjdG9yKTtcbiAgICB9O1xuICAgIHJldHVybiBwYztcbiAgfTtcbn1cblxuLy8gVW5pZnkgU2Vzc2lvbkRlc2NycHRpb24gT2JqZWN0LlxuaWYgKHR5cGVvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xufSBlbHNlIGlmICh0eXBlb2YgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbn1cblxuLy8gVW5pZnkgSWNlQ2FuZGlkYXRlIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDSWNlQ2FuZGlkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ0ljZUNhbmRpZGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG59XG5cbmV4cG9ydHMuUlRDUGVlckNvbm5lY3Rpb24gPSBteVJUQ1BlZXJDb25uZWN0aW9uO1xuZXhwb3J0cy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbmV4cG9ydHMuUlRDSWNlQ2FuZGlkYXRlID0gbXlSVENJY2VDYW5kaWRhdGU7XG4iLCIvKmdsb2JhbHMgcHJvY2VzcywgY29uc29sZSAqL1xuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbS5qcyBsb2dnaW5nIHByb3ZpZGVyIHRoYXQgbG9ncyB0byBjaHJvbWUsIGZpcmVmb3gsIGFuZCBub2RlIGNvbnNvbGVzLlxuICogQENsYXNzIExvZ2dlcl9jb25zb2xlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2NvbmZpZzogT2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIC0gY29uc29sZSByZXF1aXJlcyBnbG9iYWwgY29uZmlnLlxuICovXG52YXIgTG9nZ2VyX2NvbnNvbGUgPSBmdW5jdGlvbiAoY2FwKSB7XG4gIHRoaXMubGV2ZWwgPSAoY2FwLmNvbmZpZyAmJiBjYXAuY29uZmlnLmRlYnVnKSB8fCAnbG9nJztcbiAgdGhpcy5jb25zb2xlID0gKGNhcC5jb25maWcgJiYgY2FwLmNvbmZpZy5nbG9iYWwuY29uc29sZSk7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuXG4vKipcbiAqIExvZ2dpbmcgbGV2ZWxzLCBmb3IgZmlsdGVyaW5nIG91dHB1dC5cbiAqIEBwcml2YXRlXG4gKiBAc3RhdGljXG4gKi9cbkxvZ2dlcl9jb25zb2xlLmxldmVsID0ge1xuICBcImRlYnVnXCI6IDAsXG4gIFwiaW5mb1wiOiAxLFxuICBcImxvZ1wiOiAyLFxuICBcIndhcm5cIjogMyxcbiAgXCJlcnJvclwiOiA0XG59O1xuXG4vKipcbiAqIFByaW50IGEgbWVzc2FnZSB3aXRoIGFwcHJvcHJpYXRlIGZvcm1hdHRpbmcuXG4gKiBAbWV0aG9kIHByaW50XG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uIChzZXZlcml0eSwgc291cmNlLCBtc2cpIHtcbiAgdmFyIGFyciA9IG1zZztcbiAgaWYgKHR5cGVvZiB0aGlzLmNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICB0aGlzLmNvbnNvbGUuZnJlZWRvbSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIGFyciA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnIgPSBbYXJyXTtcbiAgfVxuICBcbiAgaWYgKExvZ2dlcl9jb25zb2xlLmxldmVsW3RoaXMubGV2ZWxdICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIExvZ2dlcl9jb25zb2xlLmxldmVsW3NldmVyaXR5XSA8IExvZ2dlcl9jb25zb2xlLmxldmVsW3RoaXMubGV2ZWxdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScgJiYgc291cmNlKSB7XG4gICAgYXJyLnVuc2hpZnQoJ1xceDFCWzM5bScpO1xuICAgIGFyci51bnNoaWZ0KCdcXHgxQlszMW0nICsgc291cmNlKTtcbiAgICAvKmpzbGludCBub21lbjogdHJ1ZSovXG4gICAgLy8gRmlyZWZveCBpbiBKU00gY29udGV4dC5cbiAgICAvLyBzZWU6IGh0dHA6Ly9teHIubW96aWxsYS5vcmcvbW96aWxsYS1yZWxlYXNlL3NvdXJjZS90b29sa2l0L2RldnRvb2xzL0NvbnNvbGUuanNtXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnNvbGUubWF4TG9nTGV2ZWwgJiYgc291cmNlKSB7XG4gICAgICBpZiAoIXRoaXMuY29uc29sZS5mcmVlZG9tRHVtcCkge1xuICAgICAgICB0aGlzLmNvbnNvbGUuZnJlZWRvbUR1bXAgPSB0aGlzLmNvbnNvbGUuZHVtcDtcbiAgICAgICAgdGhpcy5jb25zb2xlLmR1bXAgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5jb25zb2xlLmZyZWVkb21EdW1wKCd7JyArIHNvdXJjZSArICd9LicgKyBzZXZlcml0eSArICc6ICcgK1xuICAgICAgICAgIGFyci5qb2luKCcgJykgKyAnXFxuJyk7XG4gICAgICBhcnIudW5zaGlmdChzb3VyY2UudG9VcHBlckNhc2UoKSk7XG4gIC8vIEZpcmVmb3ggaW4gYnJvd3NlciBjb250ZXh0LlxuICB9IGVsc2UgaWYgKHRoaXMuY29uc29sZS5fX21vemlsbGFDb25zb2xlX18gJiYgc291cmNlKSB7XG4gICAgYXJyLnVuc2hpZnQoc291cmNlLnRvVXBwZXJDYXNlKCkpO1xuICAgIC8qanNsaW50IG5vbWVuOiBmYWxzZSovXG4gIH0gZWxzZSBpZiAoc291cmNlKSB7XG4gICAgYXJyLnVuc2hpZnQoJ2NvbG9yOiByZWQnKTtcbiAgICBhcnIudW5zaGlmdCgnJWMgJyArIHNvdXJjZSk7XG4gIH1cbiAgaWYgKCF0aGlzLmNvbnNvbGVbc2V2ZXJpdHldICYmIHRoaXMuY29uc29sZS5sb2cpIHtcbiAgICBzZXZlcml0eSA9ICdsb2cnO1xuICB9XG4gIHRoaXMuY29uc29sZVtzZXZlcml0eV0uYXBwbHkodGhpcy5jb25zb2xlLCBhcnIpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnbG9nJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIGRlYnVnIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdkZWJ1ZycsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCBpbmZvIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uIChzb3VyY2UsIG1zZywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucHJpbnQoJ2luZm8nLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIHdpdGggd2FybiBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCd3YXJuJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIGVycm9yIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdlcnJvcicsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKiogUkVHSVNURVIgUFJPVklERVIgKiovXG5leHBvcnRzLnByb3ZpZGVyID0gTG9nZ2VyX2NvbnNvbGU7XG5leHBvcnRzLm5hbWUgPSAnY29yZS5jb25zb2xlJztcbmV4cG9ydHMuZmxhZ3MgPSB7Y29uZmlnOiB0cnVlfTtcbiIsIi8qZ2xvYmFscyBjb25zb2xlICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBBIG1pbmltYWwgcHJvdmlkZXIgaW1wbGVtZW50aW5nIHRoZSBjb3JlLmVjaG8gaW50ZXJmYWNlIGZvciBpbnRlcmFjdGlvbiB3aXRoXG4gKiBjdXN0b20gY2hhbm5lbHMuICBQcmltYXJpbHkgdXNlZCBmb3IgdGVzdGluZyB0aGUgcm9idXN0bmVzcyBvZiB0aGUgY3VzdG9tXG4gKiBjaGFubmVsIGltcGxlbWVudGF0aW9uLlxuICogQENsYXNzIEVjaG9fdW5wcml2aWxlZ2VkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOk1vZHVsZX0gY2FwIFRoZSBtb2R1bGUgY3JlYXRpbmcgdGhpcyBwcm92aWRlci5cbiAqL1xudmFyIEVjaG9fdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24oY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gIHRoaXMubW9kID0gY2FwLm1vZHVsZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG5cbiAgLy8gVGhlIENvcmUgb2JqZWN0IGZvciBtYW5hZ2luZyBjaGFubmVscy5cbiAgdGhpcy5tb2Qub25jZSgnY29yZScsIGZ1bmN0aW9uKENvcmUpIHtcbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSgpO1xuICB9LmJpbmQodGhpcykpO1xuICB0aGlzLm1vZC5lbWl0KHRoaXMubW9kLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ2NvcmUgcmVxdWVzdCBkZWxlZ2F0ZWQgdG8gZWNobycsXG4gICAgcmVxdWVzdDogJ2NvcmUnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBTZXR1cCB0aGUgcHJvdmlkZXIgdG8gZWNobyBvbiBhIHNwZWNpZmljIHByb3h5LiBTdWJzZXF1ZW50IG1lc3NhZ2VzXG4gKiBGcm9tIHRoZSBjdXN0b20gY2hhbm5lbCBib3VuZCBoZXJlIHdpbGwgYmUgcmUtZW1pdHRlZCBhcyBhIG1lc3NhZ2VcbiAqIGZyb20gdGhlIHByb3ZpZGVyLiAgU3Vic2VxdWVudCBtZXNzYWdlcyB0byB0aGUgcHJvdmlkZXIgd2lsbCBiZVxuICogZW1pdHRlZCBvbiB0aGUgYm91bmQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm94eSBUaGUgaWRlbnRpZmllciBmb3IgdGhlIGN1c3RvbSBjaGFubmVsIHRvIGJpbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNldHVwIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBzZXR1cFxuICovXG5FY2hvX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbihwcm94eSwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbigpO1xuICBpZiAoIXRoaXMuY29yZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdubyBjb3JlIGF2YWlsYWJsZSB0byBzZXR1cCBwcm94eSB3aXRoIGF0IGVjaG8nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmNvcmUuYmluZENoYW5uZWwocHJveHksIGZ1bmN0aW9uKGNoYW4pIHtcbiAgICBpZiAodGhpcy5jaGFuKSB7XG4gICAgICB0aGlzLmNoYW4uY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuID0gY2hhbjtcbiAgICB0aGlzLmNoYW4ub25DbG9zZShmdW5jdGlvbigpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNoYW47XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21lc3NhZ2UnLCAnY2hhbm5lbCBib3VuZCB0byBlY2hvJyk7XG4gICAgdGhpcy5jaGFuLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24obSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtZXNzYWdlJywgJ2Zyb20gY3VzdG9tIGNoYW5uZWw6ICcgKyBtKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgYm91bmQgY3VzdG9tIGNoYW5uZWwuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc2VuZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2VuZGluZyBpcyBjb21wbGV0ZS5cbiAqIEBtZXRob2Qgc2VuZFxuICovXG5FY2hvX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKHN0ciwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbigpO1xuICBpZiAodGhpcy5jaGFuKSB7XG4gICAgdGhpcy5jaGFuLmVtaXQoJ21lc3NhZ2UnLCBzdHIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdubyBjaGFubmVsIGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gRWNob191bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSBcImNvcmUuZWNob1wiO1xuZXhwb3J0cy5mbGFncyA9IHttb2R1bGU6IHRydWV9O1xuIiwiLypnbG9iYWxzIGNvbnNvbGUgKi9cbi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG5cbi8qKlxuICogQW4gb0F1dGggbWV0YS1wcm92aWRlciBhbGxvd2luZyBtdWx0aXBsZSBwbGF0Zm9ybS1kZXBlbmRhbnRcbiAqIG9BdXRoIGltcGxlbWVudGF0aW9ucyB0byBzZXJ2ZSBhcyB0aGUgcmVkaXJlY3RVUkwgZm9yIGFuIG9BdXRoIGZsb3cuXG4gKiBUaGUgY29yZSBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGluIHByb3ZpZGVycy9vYXV0aCwgYW5kIGFyZVxuICogc3VwcGxlbWVudGVkIGluIHBsYXRmb3JtLWRlcGVuZGVudCByZXBvc2l0b3JpZXMuXG4gKlxuICovXG52YXIgT0F1dGggPSBmdW5jdGlvbiAoaGFuZGxlcnMsIGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRoaXMub25nb2luZyA9IHt9O1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBvQXV0aCBoYW5kbGVycy5cbiAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIHByb3ZpZGVyIGlzIHVzZWQsIGFuZCBiaW5kcyB0aGUgY3VycmVudFxuICogb0F1dGggcHJvdmlkZXIgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHJlZ2lzdGVyZWQgaGFuZGxlcnMuIFRoaXMgaXMgdXNlZCBzb1xuICogdGhhdCBoYW5kbGVycyB3aGljaCBhcmUgcmVnaXN0ZXJlZCBieSB0aGUgdXNlciBhcHBseSBvbmx5IHRoZSB0aGUgZnJlZWRvbSgpXG4gKiBzZXR1cCBjYWxsIHRoZXkgYXJlIGFzc29jaWF0ZWQgd2l0aCwgd2hpbGUgc3RpbGwgYmVpbmcgcmVnaXN0ZXJlZCBhY3Jvc3NcbiAqIG11bHRpcGxlIGluc3RhbmNlcyBvZiBPQXV0aCBwcm92aWRlcnMuXG4gKlxuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHtbY29uc3RydWN0b3JdfSBoYW5kbGVyc1xuICogQHByaXZhdGVcbiAqL1xuT0F1dGgucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaGFuZGxlcnMpIHtcbiAgdmFyIGksXG4gICAgICBib3VuZEhhbmRsZXJzID0gW107XG4gIGlmICghaGFuZGxlcnMgfHwgIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiBPQXV0aC5yZXNldCgpO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm91bmRIYW5kbGVycy5wdXNoKG5ldyBoYW5kbGVyc1tpXSgpKTtcbiAgfVxuICBleHBvcnRzLnByb3ZpZGVyID0gT0F1dGguYmluZCh0aGlzLCBib3VuZEhhbmRsZXJzKTtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG9BdXRoIHByb3ZpZGVyIHJlZ2lzdHJhdGlvbnMuXG4gKiBAbWV0aG9kIHJlc2V0XG4gKiBAcHJpdmF0ZVxuICovXG5PQXV0aC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgW10pO1xufTtcblxuLyoqXG4gKiBJbmRpY2F0ZSB0aGUgaW50ZW50aW9uIHRvIGluaXRpYXRlIGFuIG9BdXRoIGZsb3csIGFsbG93aW5nIGFuIGFwcHJvcHJpYXRlXG4gKiBvQXV0aCBwcm92aWRlciB0byBiZWdpbiBtb25pdG9yaW5nIGZvciByZWRpcmVjdGlvbi5cbiAqXG4gKiBAbWV0aG9kIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZGlyZWN0VVJJcyAtIG9BdXRoIHJlZGlyZWN0aW9uIFVSSXMgcmVnaXN0ZXJlZCB3aXRoIHRoZVxuICogICAgIHByb3ZpZGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSB2YWx1ZSBvZiBzY2hlbWE6IHt7cmVkaXJlY3Q6U3RyaW5nLCBzdGF0ZTpTdHJpbmd9fVxuICogICAgd2hlcmUgJ3JlZGlyZWN0JyBpcyB0aGUgY2hvc2VuIHJlZGlyZWN0IFVSSVxuICogICAgYW5kICdzdGF0ZScgaXMgdGhlIHN0YXRlIHRvIHBhc3MgdG8gdGhlIFVSSSBvbiBjb21wbGV0aW9uIG9mIG9BdXRoXG4gKi9cbk9BdXRoLnByb3RvdHlwZS5pbml0aWF0ZU9BdXRoID0gZnVuY3Rpb24gKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIHZhciBwcm9taXNlLCBpLCBzdWNjZXNzQ2FsbGJhY2s7XG4gIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHRoaXMub25nb2luZ1tyZXN1bHQuc3RhdGVdID0gdGhpcy5oYW5kbGVyc1tpXTtcbiAgICBjb250aW51YXRpb24ocmVzdWx0KTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0uaW5pdGlhdGVPQXV0aChyZWRpcmVjdFVSSXMsIHN1Y2Nlc3NDYWxsYmFjaykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgLy9JZiBoZXJlLCB3ZSBoYXZlIG5vIGNvbXBhdGlibGUgcHJvdmlkZXJzXG4gIGNvbnRpbnVhdGlvbihudWxsLCB7XG4gICAgJ2VycmNvZGUnOiAnVU5LTk9XTicsXG4gICAgJ21lc3NhZ2UnOiAnTm8gcmVxdWVzdGVkIHJlZGlyZWN0cyBjYW4gYmUgaGFuZGxlZC4nXG4gIH0pO1xuICByZXR1cm47XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5PQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgY29udGludWF0aW9uKSB7XG4gIGlmICghdGhpcy5vbmdvaW5nLmhhc093blByb3BlcnR5KHN0YXRlT2JqLnN0YXRlKSkge1xuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcbiAgICAgICdlcnJjb2RlJzogJ1VOS05PV04nLFxuICAgICAgJ21lc3NhZ2UnOiAnWW91IG11c3QgYmVnaW4gdGhlIG9BdXRoIGZsb3cgd2l0aCBpbml0aWF0ZU9BdXRoIGZpcnN0J1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMub25nb2luZ1tzdGF0ZU9iai5zdGF0ZV0ubGF1bmNoQXV0aEZsb3coYXV0aFVybCwgc3RhdGVPYmosIGNvbnRpbnVhdGlvbik7XG4gIGRlbGV0ZSB0aGlzLm9uZ29pbmdbc3RhdGVPYmouc3RhdGVdO1xufTtcblxuZXhwb3J0cy5yZWdpc3RlciA9IE9BdXRoLnJlZ2lzdGVyO1xuZXhwb3J0cy5yZXNldCA9IE9BdXRoLnJlc2V0O1xuZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgW10pO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUub2F1dGgnO1xuIiwiLypnbG9iYWxzIGNvbnNvbGUsIFJUQ1BlZXJDb25uZWN0aW9uLCB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiAqL1xuLypnbG9iYWxzIG1velJUQ1BlZXJDb25uZWN0aW9uLCBSVENTZXNzaW9uRGVzY3JpcHRpb24sIFJUQ0ljZUNhbmRpZGF0ZSAqL1xuLypnbG9iYWxzIG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbiwgbW96UlRDSWNlQ2FuZGlkYXRlICovXG4vKmdsb2JhbHMgQXJyYXlCdWZmZXIsIEJsb2IgKi9cbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xuLyoqXG4gKiBEYXRhUGVlciAtIGEgY2xhc3MgdGhhdCB3cmFwcyBwZWVyIGNvbm5lY3Rpb25zIGFuZCBkYXRhIGNoYW5uZWxzLlxuICovXG4vLyBUT0RPOiBjaGVjayB0aGF0IEhhbmRsaW5nIG9mIHByYW5zd2VyIGlzIHRyZWF0ZWQgYXBwcm9wcmlhdGVseS5cbnZhciBTaW1wbGVEYXRhUGVlclN0YXRlID0ge1xuICBESVNDT05ORUNURUQ6ICdESVNDT05ORUNURUQnLFxuICBDT05ORUNUSU5HOiAnQ09OTkVDVElORycsXG4gIENPTk5FQ1RFRDogJ0NPTk5FQ1RFRCdcbn07XG5cbmZ1bmN0aW9uIFNpbXBsZURhdGFQZWVyKHBlZXJOYW1lLCBzdHVuU2VydmVycywgZGF0YUNoYW5uZWxDYWxsYmFja3MsIG1vY2tzKSB7XG4gIHZhciBjb25zdHJhaW50cyxcbiAgICBjb25maWcsXG4gICAgaTtcbiAgdGhpcy5wZWVyTmFtZSA9IHBlZXJOYW1lO1xuICB0aGlzLmNoYW5uZWxzID0ge307XG4gIHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3MgPSBkYXRhQ2hhbm5lbENhbGxiYWNrcztcbiAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlID0gW107XG5cbiAgaWYgKHR5cGVvZiBtb2Nrcy5SVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDUGVlckNvbm5lY3Rpb24gPSBtb2Nrcy5SVENQZWVyQ29ubmVjdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gd2Via2l0UlRDUGVlckNvbm5lY3Rpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IG1velJUQ1BlZXJDb25uZWN0aW9uO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3QgYXBwZWFyIHRvIHN1cHBvcnQgUlRDUGVlckNvbm5lY3Rpb25cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gbW9ja3MuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENTZXNzaW9uRGVzY3JpcHRpb25cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ0ljZUNhbmRpZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDSWNlQ2FuZGlkYXRlID0gbW9ja3MuUlRDSWNlQ2FuZGlkYXRlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBSVENJY2VDYW5kaWRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDSWNlQ2FuZGlkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENJY2VDYW5kaWRhdGVcIik7XG4gIH1cblxuXG4gIGNvbnN0cmFpbnRzID0ge1xuICAgIG9wdGlvbmFsOiBbe0R0bHNTcnRwS2V5QWdyZWVtZW50OiB0cnVlfV1cbiAgfTtcbiAgLy8gQSB3YXkgdG8gc3BlYWsgdG8gdGhlIHBlZXIgdG8gc2VuZCBTRFAgaGVhZGVycyBldGMuXG4gIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UgPSBudWxsO1xuXG4gIHRoaXMucGMgPSBudWxsOyAgLy8gVGhlIHBlZXIgY29ubmVjdGlvbi5cbiAgLy8gR2V0IFRVUk4gc2VydmVycyBmb3IgdGhlIHBlZXIgY29ubmVjdGlvbi5cbiAgY29uZmlnID0ge2ljZVNlcnZlcnM6IFtdfTtcbiAgZm9yIChpID0gMDsgaSA8IHN0dW5TZXJ2ZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uZmlnLmljZVNlcnZlcnMucHVzaCh7XG4gICAgICAndXJsJyA6IHN0dW5TZXJ2ZXJzW2ldXG4gICAgfSk7XG4gIH1cbiAgdGhpcy5wYyA9IG5ldyB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZywgY29uc3RyYWludHMpO1xuICAvLyBBZGQgYmFzaWMgZXZlbnQgaGFuZGxlcnMuXG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcImljZWNhbmRpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25JY2VDYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwibmVnb3RpYXRpb25uZWVkZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTmVnb3RpYXRpb25OZWVkZWQuYmluZCh0aGlzKSk7XG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcImRhdGFjaGFubmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRhdGFDaGFubmVsLmJpbmQodGhpcykpO1xuICB0aGlzLnBjLmFkZEV2ZW50TGlzdGVuZXIoXCJzaWduYWxpbmdzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIGEgYmV0dGVyIHdheSB0byBkZXRlY3QgY29ubmVjdGlvbi4gIFdlIHN0YXJ0IG91dFxuICAgIC8vIGFzIFwic3RhYmxlXCIgZXZlbiBiZWZvcmUgd2UgYXJlIGNvbm5lY3RlZC5cbiAgICAvLyBUT0RPOiB0aGlzIGlzIG5vdCBmaXJlZCBmb3IgY29ubmVjdGlvbnMgY2xvc2VkIGJ5IHRoZSBvdGhlciBzaWRlLlxuICAgIC8vIFRoaXMgd2lsbCBiZSBmaXhlZCBpbiBtMzcsIGF0IHRoYXQgcG9pbnQgd2Ugc2hvdWxkIGRpc3BhdGNoIGFuIG9uQ2xvc2VcbiAgICAvLyBldmVudCBoZXJlIGZvciBmcmVlZG9tLnRyYW5zcG9ydCB0byBwaWNrIHVwLlxuICAgIGlmICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSBcInN0YWJsZVwiKSB7XG4gICAgICB0aGlzLnBjU3RhdGUgPSBTaW1wbGVEYXRhUGVlclN0YXRlLkNPTk5FQ1RFRDtcbiAgICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5tYXAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH0pO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbiAgLy8gVGhpcyBzdGF0ZSB2YXJpYWJsZSBpcyB1c2VkIHRvIGZha2Ugb2ZmZXIvYW5zd2VyIHdoZW4gdGhleSBhcmUgd3JvbmdseVxuICAvLyByZXF1ZXN0ZWQgYW5kIHdlIHJlYWxseSBqdXN0IG5lZWQgdG8gcmV1c2Ugd2hhdCB3ZSBhbHJlYWR5IGhhdmUuXG4gIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEO1xuXG4gIC8vIE5vdGU6IHRvIGFjdHVhbGx5IGRvIHNvbWV0aGluZyB3aXRoIGRhdGEgY2hhbm5lbHMgb3BlbmVkIGJ5IGEgcGVlciwgd2VcbiAgLy8gbmVlZCBzb21lb25lIHRvIG1hbmFnZSBcImRhdGFjaGFubmVsXCIgZXZlbnQuXG59XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uIChjb25zdGFpbnRzLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wYy5jcmVhdGVPZmZlcihjb250aW51YXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmVycm9yKCdjb3JlLnBlZXJjb25uZWN0aW9uIGNyZWF0ZU9mZmVyIGZhaWxlZC4nKTtcbiAgfSwgY29uc3RhaW50cyk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUucnVuV2hlbkNvbm5lY3RlZCA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIGlmICh0aGlzLnBjU3RhdGUgPT09IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEKSB7XG4gICAgZnVuYygpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5wdXNoKGZ1bmMpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIG1lc3NhZ2UsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF0uc2VuZChtZXNzYWdlKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub3BlbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY29udGludWF0aW9uKSB7XG4gIHZhciBkYXRhQ2hhbm5lbCA9IHRoaXMucGMuY3JlYXRlRGF0YUNoYW5uZWwoY2hhbm5lbElkLCB7fSk7XG4gIGRhdGFDaGFubmVsLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFkZERhdGFDaGFubmVsKGNoYW5uZWxJZCwgZGF0YUNoYW5uZWwpO1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9LmJpbmQodGhpcyk7XG4gIGRhdGFDaGFubmVsLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgLy9AKHJ5c2NoZW5nKSB0b2RvIC0gcmVwbGFjZSB3aXRoIGVycm9ycyB0aGF0IHdvcmsgYWNyb3NzIHRoZSBpbnRlcmZhY2VcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwgZXJyKTtcbiAgfTtcbiAgLy8gRmlyZWZveCBkb2VzIG5vdCBmaXJlIFwibmVnb3RpYXRpb25uZWVkZWRcIiwgc28gd2UgbmVlZCB0b1xuICAvLyBuZWdvdGF0ZSBoZXJlIGlmIHdlIGFyZSBub3QgY29ubmVjdGVkLlxuICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODQwNzI4XG4gIGlmICh0eXBlb2YgbW96UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIHRoaXMucGNTdGF0ZSA9PT0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQpIHtcbiAgICB0aGlzLm5lZ290aWF0ZUNvbm5lY3Rpb24oKTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmNsb3NlQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQpIHtcbiAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdLmNsb3NlKCk7XG4gICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNoYW5uZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51YXRpb24pIHtcbiAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGRhdGFDaGFubmVsID0gdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdO1xuICAgIHJldHVybiBkYXRhQ2hhbm5lbC5idWZmZXJlZEFtb3VudDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjaGFubmVsIHdpdGggaWQ6IFwiICsgY2hhbm5lbElkKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5zZXRTZW5kU2lnbmFsTWVzc2FnZSA9IGZ1bmN0aW9uIChzZW5kU2lnbmFsTWVzc2FnZUZuKSB7XG4gIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UgPSBzZW5kU2lnbmFsTWVzc2FnZUZuO1xufTtcblxuLy8gSGFuZGxlIGEgbWVzc2FnZSBzZW5kIG9uIHRoZSBzaWduYWxsaW5nIGNoYW5uZWwgdG8gdGhpcyBwZWVyLlxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmhhbmRsZVNpZ25hbE1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZVRleHQpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJoYW5kbGVTaWduYWxNZXNzYWdlOiBcXG5cIiArIG1lc3NhZ2VUZXh0KTtcbiAgdmFyIGpzb24gPSBKU09OLnBhcnNlKG1lc3NhZ2VUZXh0KSxcbiAgICBpY2VfY2FuZGlkYXRlO1xuXG4gIC8vIFRPRE86IElmIHdlIGFyZSBvZmZlcmluZyBhbmQgdGhleSBhcmUgYWxzbyBvZmZlcnJpbmcgYXQgdGhlIHNhbWUgdGltZSxcbiAgLy8gcGljayB0aGUgb25lIHdobyBoYXMgdGhlIGxvd2VyIHJhbmRvbUlkP1xuICAvLyAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PSBcImhhdmUtbG9jYWwtb2ZmZXJcIiAmJiBqc29uLnNkcCAmJlxuICAvLyAgICBqc29uLnNkcC50eXBlID09IFwib2ZmZXJcIiAmJiBqc29uLnNkcC5yYW5kb21JZCA8IHRoaXMubG9jYWxSYW5kb21JZClcbiAgaWYgKGpzb24uc2RwKSB7XG4gICAgLy8gU2V0IHRoZSByZW1vdGUgZGVzY3JpcHRpb24uXG4gICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihcbiAgICAgIG5ldyB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbihqc29uLnNkcCksXG4gICAgICAvLyBTdWNjZXNzXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBzZXRSZW1vdGVEZXNjcmlwdGlvbiBzdWNjZWVkZWRcIik7XG4gICAgICAgIGlmICh0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLnR5cGUgPT09IFwib2ZmZXJcIikge1xuICAgICAgICAgIHRoaXMucGMuY3JlYXRlQW5zd2VyKHRoaXMub25EZXNjcmlwdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICAvLyBGYWlsdXJlXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgICAgXCJzZXRSZW1vdGVEZXNjcmlwdGlvbiBmYWlsZWQ6XCIsIGUpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSBlbHNlIGlmIChqc29uLmNhbmRpZGF0ZSkge1xuICAgIC8vIEFkZCByZW1vdGUgaWNlIGNhbmRpZGF0ZS5cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogQWRkaW5nIGljZSBjYW5kaWRhdGU6IFwiICsgSlNPTi5zdHJpbmdpZnkoanNvbi5jYW5kaWRhdGUpKTtcbiAgICBpY2VfY2FuZGlkYXRlID0gbmV3IHRoaXMuUlRDSWNlQ2FuZGlkYXRlKGpzb24uY2FuZGlkYXRlKTtcbiAgICB0aGlzLnBjLmFkZEljZUNhbmRpZGF0ZShpY2VfY2FuZGlkYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4odGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgIFwiaGFuZGxlU2lnbmFsTWVzc2FnZSBnb3QgdW5leHBlY3RlZCBtZXNzYWdlOiBcIiwgbWVzc2FnZVRleHQpO1xuICB9XG59O1xuXG4vLyBDb25uZWN0IHRvIHRoZSBwZWVyIGJ5IHRoZSBzaWduYWxsaW5nIGNoYW5uZWwuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUubmVnb3RpYXRlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNUSU5HO1xuICB0aGlzLnBjLmNyZWF0ZU9mZmVyKFxuICAgIHRoaXMub25EZXNjcmlwdGlvbi5iaW5kKHRoaXMpLFxuICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgIFwiY3JlYXRlT2ZmZXIgZmFpbGVkOiBcIiwgZS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEO1xuICAgIH0uYmluZCh0aGlzKVxuICApO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmlzQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIXRoaXMucGMgfHwgdGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PT0gXCJjbG9zZWRcIjtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmlzQ2xvc2VkKCkpIHtcbiAgICB0aGlzLnBjLmNsb3NlKCk7XG4gIH1cbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJDbG9zZWQgcGVlciBjb25uZWN0aW9uLlwiKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5hZGREYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNoYW5uZWwpIHtcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3M7XG4gIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSA9IGNoYW5uZWw7XG5cbiAgaWYgKGNoYW5uZWwucmVhZHlTdGF0ZSA9PT0gXCJjb25uZWN0aW5nXCIpIHtcbiAgICBjaGFubmVsLm9ub3BlbiA9IGNhbGxiYWNrcy5vbk9wZW5Gbi5iaW5kKHRoaXMsIGNoYW5uZWwsIHtsYWJlbDogY2hhbm5lbElkfSk7XG4gIH1cblxuICBjaGFubmVsLm9uY2xvc2UgPSBjYWxsYmFja3Mub25DbG9zZUZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsSWR9KTtcblxuICBjaGFubmVsLm9ubWVzc2FnZSA9IGNhbGxiYWNrcy5vbk1lc3NhZ2VGbi5iaW5kKHRoaXMsIGNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiBjaGFubmVsSWR9KTtcblxuICBjaGFubmVsLm9uZXJyb3IgPSBjYWxsYmFja3Mub25FcnJvckZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsfSk7XG59O1xuXG4vLyBXaGVuIHdlIGdldCBvdXIgZGVzY3JpcHRpb24sIHdlIHNldCBpdCB0byBiZSBvdXIgbG9jYWwgZGVzY3JpcHRpb24gYW5kXG4vLyBzZW5kIGl0IHRvIHRoZSBwZWVyLlxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9uRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgaWYgKHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UpIHtcbiAgICB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24oXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IHNldExvY2FsRGVzY3JpcHRpb24gc3VjY2VlZGVkXCIpO1xuICAgICAgICB0aGlzLnNlbmRTaWduYWxNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsnc2RwJzogZGVzY3JpcHRpb259KSk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgICAgXCJzZXRMb2NhbERlc2NyaXB0aW9uIGZhaWxlZDpcIiwgZSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgIFwiX29uRGVzY3JpcHRpb246IF9zZW5kU2lnbmFsTWVzc2FnZSBpcyBub3Qgc2V0LCBzbyB3ZSBkaWQgbm90IFwiICtcbiAgICAgICAgICAgIFwic2V0IHRoZSBsb2NhbCBkZXNjcmlwdGlvbi4gXCIpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25OZWdvdGlhdGlvbk5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XG4gIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwib25OZWdvdGlhdGlvbk5lZWRlZFwiLFxuICAvLyAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuX3BjKSwgZSk7XG4gIGlmICh0aGlzLnBjU3RhdGUgIT09IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEKSB7XG4gICAgLy8gTmVnb3RpYXRpb24gbWVzc2FnZXMgYXJlIGZhbHNlbHkgcmVxdWVzdGVkIGZvciBuZXcgZGF0YSBjaGFubmVscy5cbiAgICAvLyAgIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avd2VicnRjL2lzc3Vlcy9kZXRhaWw/aWQ9MjQzMVxuICAgIC8vIFRoaXMgY29kZSBpcyBhIGhhY2sgdG8gc2ltcGx5IHJlc2V0IHRoZSBzYW1lIGxvY2FsIGFuZCByZW1vdGVcbiAgICAvLyBkZXNjcmlwdGlvbiB3aGljaCB3aWxsIHRyaWdnZXIgdGhlIGFwcHJvcHJpYXRlIGRhdGEgY2hhbm5lbCBvcGVuIGV2ZW50LlxuICAgIC8vIFRPRE86IGZpeC9yZW1vdmUgdGhpcyB3aGVuIENocm9tZSBpc3N1ZSBpcyBmaXhlZC5cbiAgICB2YXIgbG9nU3VjY2VzcyA9IGZ1bmN0aW9uIChvcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgb3AgKyBcIiBzdWNjZWVkZWQgXCIpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGxvZ0ZhaWwgPSBmdW5jdGlvbiAob3ApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgb3AgKyBcIiBmYWlsZWQ6IFwiICsgZSk7XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICBpZiAodGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uICYmIHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24gJiZcbiAgICAgICAgdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLnR5cGUgPT09IFwib2ZmZXJcIikge1xuICAgICAgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldExvY2FsRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpKTtcbiAgICAgIHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24odGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1N1Y2Nlc3MoXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24gJiYgdGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbiAmJlxuICAgICAgICB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24udHlwZSA9PT0gXCJhbnN3ZXJcIikge1xuICAgICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbih0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpKTtcbiAgICAgIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbih0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1N1Y2Nlc3MoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dGYWlsKFwic2V0TG9jYWxEZXNjcmlwdGlvblwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArICcsIG9uTmVnb3RpYXRpb25OZWVkZWQgZmFpbGVkJyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLm5lZ290aWF0ZUNvbm5lY3Rpb24oKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbkljZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAvLyBTZW5kIEljZUNhbmRpZGF0ZSB0byBwZWVyLlxuICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwiaWNlIGNhbGxiYWNrIHdpdGggY2FuZGlkYXRlXCIsIGV2ZW50KTtcbiAgICBpZiAodGhpcy5zZW5kU2lnbmFsTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZShKU09OLnN0cmluZ2lmeSh7J2NhbmRpZGF0ZSc6IGV2ZW50LmNhbmRpZGF0ZX0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIl9vbkRlc2NyaXB0aW9uOiBfc2VuZFNpZ25hbE1lc3NhZ2UgaXMgbm90IHNldC5cIik7XG4gICAgfVxuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25TaWduYWxpbmdTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJvblNpZ25hbGluZ1N0YXRlQ2hhbmdlOiBcIiwgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUpO1xuICBpZiAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PT0gXCJzdGFibGVcIikge1xuICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEO1xuICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5tYXAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH0pO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25EYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmFkZERhdGFDaGFubmVsKGV2ZW50LmNoYW5uZWwubGFiZWwsIGV2ZW50LmNoYW5uZWwpO1xuICAvLyBSVENEYXRhQ2hhbm5lbHMgY3JlYXRlZCBieSBhIFJUQ0RhdGFDaGFubmVsRXZlbnQgaGF2ZSBhbiBpbml0aWFsXG4gIC8vIHN0YXRlIG9mIG9wZW4sIHNvIHRoZSBvbm9wZW4gZXZlbnQgZm9yIHRoZSBjaGFubmVsIHdpbGwgbm90XG4gIC8vIGZpcmUuIFdlIG5lZWQgdG8gZmlyZSB0aGUgb25PcGVuRGF0YUNoYW5uZWwgZXZlbnQgaGVyZVxuICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi93ZWJydGMvI2lkbC1kZWYtUlRDRGF0YUNoYW5uZWxTdGF0ZVxuXG4gIC8vIEZpcmVmb3ggY2hhbm5lbHMgZG8gbm90IGhhdmUgYW4gaW5pdGlhbCBzdGF0ZSBvZiBcIm9wZW5cIlxuICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTAwMDQ3OFxuICBpZiAoZXZlbnQuY2hhbm5lbC5yZWFkeVN0YXRlID09PSBcIm9wZW5cIikge1xuICAgIHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3Mub25PcGVuRm4oZXZlbnQuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogZXZlbnQuY2hhbm5lbC5sYWJlbH0pO1xuICB9XG59O1xuXG4vLyBfc2lnbmFsbGluZ0NoYW5uZWwgaXMgYSBjaGFubmVsIGZvciBlbWl0dGluZyBldmVudHMgYmFjayB0byB0aGUgZnJlZWRvbSBIdWIuXG5mdW5jdGlvbiBQZWVyQ29ubmVjdGlvbihwb3J0TW9kdWxlLCBkaXNwYXRjaEV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24sIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFJUQ0ljZUNhbmRpZGF0ZSkge1xuICAvLyBDaGFubmVsIGZvciBlbWl0dGluZyBldmVudHMgdG8gY29uc3VtZXIuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG5cbiAgLy8gYSAoaG9wZWZ1bGx5IHVuaXF1ZSkgSUQgZm9yIGRlYnVnZ2luZy5cbiAgdGhpcy5wZWVyTmFtZSA9IFwicFwiICsgTWF0aC5yYW5kb20oKTtcblxuICAvLyBUaGlzIGlzIHRoZSBwb3J0QXBwIChkZWZpbmVkIGluIGZyZWVkb20vc3JjL3BvcnQtYXBwLmpzKS4gQSB3YXkgdG8gc3BlYWtcbiAgLy8gdG8gZnJlZWRvbS5cbiAgdGhpcy5mcmVlZG9tTW9kdWxlID0gcG9ydE1vZHVsZS5tb2R1bGU7XG5cbiAgLy8gRm9yIHRlc3RzIHdlIG1heSBtb2NrIG91dCB0aGUgUGVlckNvbm5lY3Rpb24gYW5kXG4gIC8vIFNlc3Npb25EZXNjcmlwdGlvbiBpbXBsZW1lbnRhdGlvbnNcbiAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IFJUQ1BlZXJDb25uZWN0aW9uO1xuICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBSVENJY2VDYW5kaWRhdGU7XG5cbiAgLy8gVGhpcyBpcyB0aGUgYSBjaGFubmVsIHRvIHNlbmQgc2lnbmFsbGluZyBtZXNzYWdlcy5cbiAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbCA9IG51bGw7XG5cbiAgLy8gVGhlIERhdGFQZWVyIG9iamVjdCBmb3IgdGFsa2luZyB0byB0aGUgcGVlci5cbiAgdGhpcy5wZWVyID0gbnVsbDtcblxuICAvLyBUaGUgQ29yZSBvYmplY3QgZm9yIG1hbmFnaW5nIGNoYW5uZWxzLlxuICB0aGlzLmZyZWVkb21Nb2R1bGUub25jZSgnY29yZScsIGZ1bmN0aW9uIChDb3JlKSB7XG4gICAgdGhpcy5jb3JlID0gbmV3IENvcmUoKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgdGhpcy5mcmVlZG9tTW9kdWxlLmVtaXQodGhpcy5mcmVlZG9tTW9kdWxlLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ2NvcmUgcmVxdWVzdCBkZWxlZ2F0ZWQgdG8gcGVlcmNvbm5lY3Rpb24nLFxuICAgIHJlcXVlc3Q6ICdjb3JlJ1xuICB9KTtcbn1cblxuLy8gU3RhcnQgYSBwZWVyIGNvbm5lY3Rpb24gdXNpbmcgdGhlIGdpdmVuIGZyZWVkb21DaGFubmVsSWQgYXMgdGhlIHdheSB0b1xuLy8gY29tbXVuaWNhdGUgd2l0aCB0aGUgcGVlci4gVGhlIGFyZ3VtZW50IHxmcmVlZG9tQ2hhbm5lbElkfCBpcyBhIHdheSB0byBzcGVha1xuLy8gdG8gYW4gaWRlbnRpdHkgcHJvdmlkZSB0byBzZW5kIHRoZW0gU0RQIGhlYWRlcnMgbmVnb3RpYXRlIHRoZSBhZGRyZXNzL3BvcnQgdG9cbi8vIHNldHVwIHRoZSBwZWVyIHRvIHBlZXJDb25uZWN0aW9uLlxuLy9cbi8vIG9wdGlvbnM6IHtcbi8vICAgcGVlck5hbWU6IHN0cmluZywgICAvLyBGb3IgcHJldHR5IHByaW50aW5nIG1lc3NhZ2VzIGFib3V0IHRoaXMgcGVlci5cbi8vICAgZGVidWc6IGJvb2xlYW4gICAgICAgICAgIC8vIHNob3VsZCB3ZSBhZGQgZXh0cmFcbi8vIH1cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIChzaWduYWxsaW5nQ2hhbm5lbElkLCBwZWVyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVuU2VydmVycywgaW5pdGlhdGVDb25uZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXJOYW1lID0gcGVlck5hbWU7XG4gIHZhciBtb2NrcyA9IHtSVENQZWVyQ29ubmVjdGlvbjogdGhpcy5SVENQZWVyQ29ubmVjdGlvbixcbiAgICAgICAgICAgICAgIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjogdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICBSVENJY2VDYW5kaWRhdGU6IHRoaXMuUlRDSWNlQ2FuZGlkYXRlfSxcbiAgICBzZWxmID0gdGhpcyxcbiAgICBkYXRhQ2hhbm5lbENhbGxiYWNrcyA9IHtcbiAgICAgIC8vIG9uT3BlbkZuIGlzIGNhbGxlZCBhdCB0aGUgcG9pbnQgbWVzc2FnZXMgd2lsbCBhY3R1YWxseSBnZXQgdGhyb3VnaC5cbiAgICAgIG9uT3BlbkZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8pIHtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KFwib25PcGVuRGF0YUNoYW5uZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IGNoYW5uZWxJZDogaW5mby5sYWJlbH0pO1xuICAgICAgfSxcbiAgICAgIG9uQ2xvc2VGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvKSB7XG4gICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChcIm9uQ2xvc2VEYXRhQ2hhbm5lbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hhbm5lbElkOiBpbmZvLmxhYmVsfSk7XG4gICAgICB9LFxuICAgICAgLy8gRGVmYXVsdCBvbiByZWFsIG1lc3NhZ2UgcHJpbnRzIGl0IHRvIGNvbnNvbGUuXG4gICAgICBvbk1lc3NhZ2VGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvLCBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAnYnVmZmVyJzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAnYmluYXJ5JzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZXZlbnQuZGF0YSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAndGV4dCc6IGV2ZW50LmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIERlZmF1bHQgb24gZXJyb3IsIHByaW50cyBpdC5cbiAgICAgIG9uRXJyb3JGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvLCBlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhQ2hhbm5lbC5wZWVyTmFtZSArIFwiOiBkYXRhQ2hhbm5lbChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YUNoYW5uZWwuZGF0YUNoYW5uZWwubGFiZWwgKyBcIik6IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoYW5uZWxJZCxcbiAgICBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb247XG5cbiAgdGhpcy5wZWVyID0gbmV3IFNpbXBsZURhdGFQZWVyKHRoaXMucGVlck5hbWUsIHN0dW5TZXJ2ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNoYW5uZWxDYWxsYmFja3MsIG1vY2tzKTtcblxuICAvLyBTZXR1cCBsaW5rIGJldHdlZW4gRnJlZWRvbSBtZXNzYWdpbmcgYW5kIF9wZWVyJ3Mgc2lnbmFsbGluZy5cbiAgLy8gTm90ZTogdGhlIHNpZ25hbGxpbmcgY2hhbm5lbCBzaG91bGQgb25seSBiZSBzZW5kaW5nIHJlY2VpdmVpbmcgc3RyaW5ncy5cbiAgdGhpcy5jb3JlLmJpbmRDaGFubmVsKHNpZ25hbGxpbmdDaGFubmVsSWQsIGZ1bmN0aW9uIChjaGFubmVsKSB7XG4gICAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5wZWVyLnNldFNlbmRTaWduYWxNZXNzYWdlKGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwuZW1pdCgnbWVzc2FnZScsIG1zZyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsLm9uKCdtZXNzYWdlJyxcbiAgICAgICAgdGhpcy5wZWVyLmhhbmRsZVNpZ25hbE1lc3NhZ2UuYmluZCh0aGlzLnBlZXIpKTtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsLmVtaXQoJ3JlYWR5Jyk7XG4gICAgaWYgKCFpbml0aWF0ZUNvbm5lY3Rpb24pIHtcbiAgICAgIHRoaXMucGVlci5ydW5XaGVuQ29ubmVjdGVkKGNvbnRpbnVhdGlvbik7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIGlmIChpbml0aWF0ZUNvbm5lY3Rpb24pIHtcbiAgICAvLyBTZXR1cCBhIGNvbm5lY3Rpb24gcmlnaHQgYXdheSwgdGhlbiBpbnZva2UgY29udGludWF0aW9uLlxuICAgIGNvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyAnIGluaXRpYXRpbmcgY29ubmVjdGlvbicpO1xuICAgIGNoYW5uZWxJZCA9ICdoZWxsbycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XG4gICAgb3BlbkRhdGFDaGFubmVsQ29udGludWF0aW9uID0gZnVuY3Rpb24gKHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwgZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZURhdGFDaGFubmVsKGNoYW5uZWxJZCwgY29udGludWF0aW9uKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb24pO1xuICB9XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbiAoY29uc3RyYWludHMsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXIuY3JlYXRlT2ZmZXIoY29uc3RyYWludHMsIGNvbnRpbnVhdGlvbik7XG59O1xuXG4vLyBUT0RPOiBkZWxheSBjb250aW51YXRpb24gdW50aWwgdGhlIG9wZW4gY2FsbGJhY2sgZnJvbSBfcGVlciBpcyBjYWxsZWQuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUub3BlbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlci5vcGVuRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBjb250aW51YXRpb24pO1xufTtcblxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wZWVyLmNsb3NlQ2hhbm5lbChjaGFubmVsSWQpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8vIENhbGxlZCB0byBzZW5kIGEgbWVzc2FnZSBvdmVyIHRoZSBnaXZlbiBkYXRhY2hhbm5lbCB0byBhIHBlZXIuIElmIHRoZSBkYXRhXG4vLyBjaGFubmVsIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCwgdGhlIERhdGFQZWVyIGNyZWF0ZXMgaXQuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChzZW5kSW5mbywgY29udGludWF0aW9uKSB7XG4gIHZhciBvYmpUb1NlbmQgPSBzZW5kSW5mby50ZXh0IHx8IHNlbmRJbmZvLmJ1ZmZlciB8fCBzZW5kSW5mby5iaW5hcnk7XG4gIGlmICh0eXBlb2Ygb2JqVG9TZW5kID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJObyB2YWxpZCBkYXRhIHRvIHNlbmQgaGFzIGJlZW4gcHJvdmlkZWQuXCIsIHNlbmRJbmZvKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy9ERUJVR1xuICAvLyBvYmpUb1NlbmQgPSBuZXcgQXJyYXlCdWZmZXIoNCk7XG4gIC8vREVCVUdcbiAgdGhpcy5wZWVyLnNlbmQoc2VuZEluZm8uY2hhbm5lbExhYmVsLCBvYmpUb1NlbmQsIGNvbnRpbnVhdGlvbik7XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKHRoaXMucGVlci5nZXRCdWZmZXJlZEFtb3VudChjaGFubmVsSWQpKTtcbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgaWYgKHRoaXMucGVlci5pc0Nsb3NlZCgpKSB7XG4gICAgLy8gUGVlciBhbHJlYWR5IGNsb3NlZCwgcnVuIGNvbnRpbnVhdGlvbiB3aXRob3V0IGRpc3BhdGNoaW5nIGV2ZW50LlxuICAgIGNvbnRpbnVhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBlZXIuY2xvc2UoKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KFwib25DbG9zZVwiKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gUGVlckNvbm5lY3Rpb247XG5leHBvcnRzLm5hbWUgPSAnY29yZS5wZWVyY29ubmVjdGlvbic7XG5leHBvcnRzLmZsYWdzID0ge21vZHVsZTogdHJ1ZX07XG4iLCIvKmpzbGludCBzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG4vKmdsb2JhbHMgQ29tcG9uZW50cywgQXJyYXlCdWZmZXIgKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG52YXIgZXZlbnROYW1lcyA9IFtcbiAgJ29ub3BlbicsXG4gICdvbmVycm9yJyxcbiAgJ29uY2xvc2UnLFxuICAnb25tZXNzYWdlJ1xuXTtcblxudmFyIHVuQXR0YWNoZWRDaGFubmVscyA9IHt9O1xudmFyIHBlbmRpbmdFdmVudHMgPSB7fTtcbnZhciBhbGxvY2F0ZUNoYW5uZWwgPSBmdW5jdGlvbiAoZGF0YUNoYW5uZWwpIHtcbiAgdmFyIGlkID0gdXRpbC5nZXRJZCgpO1xuICB1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdID0gZGF0YUNoYW5uZWw7XG4gIHBlbmRpbmdFdmVudHNbaWRdID0gW107XG4gIGV2ZW50TmFtZXMuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAvLyBUaGlzIGxpc3RlbmVyIHdpbGwgYmUgb3ZlcnJpZGRlbiAocmUtc2V0KSBhZnRlciB0aGUgY29uc3RydWN0b3IgcnVucy5cbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgY3VycmVudEhhbmRsZXIgPSBkYXRhQ2hhbm5lbFtldmVudE5hbWVdO1xuICAgICAgaWYgKGN1cnJlbnRIYW5kbGVyID09PSBoYW5kbGVyKSB7XG4gICAgICAgIHBlbmRpbmdFdmVudHNbaWRdLnB1c2goZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY3VycmVudEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gSWYgYW4gZXZlbnQgc29tZWhvdyBydW5zIG9uIHRoaXMgZXZlbnQgaGFuZGxlciBhZnRlciBpdCBoYXMgYmVlblxuICAgICAgICAvLyByZXBsYWNlZCwgZm9yd2FyZCB0aGF0IGV2ZW50IHRvIHRoZSBuZXcgZXZlbnQgaGFuZGxlci5cbiAgICAgICAgY3VycmVudEhhbmRsZXIoZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBoYW5kbGVyIGZvciAnICsgZXZlbnQudHlwZSArICcgZXZlbnQnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRhdGFDaGFubmVsW2V2ZW50TmFtZV0gPSBoYW5kbGVyO1xuICB9KTtcbiAgcmV0dXJuIGlkO1xufTtcblxudmFyIFJUQ0RhdGFDaGFubmVsQWRhcHRlciA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnRzLCBpZCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50cztcbiAgaWYgKCF1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdKSB7XG4gICAgY29uc29sZS53YXJuKCdJbnZhbGlkIElELCBjcmVhdGluZyBhY3Rpbmcgb24gdW5hdHRhY2hlZCBEYXRhQ2hhbm5lbCcpO1xuICAgIHZhciBDb25uZWN0aW9uID0gcmVxdWlyZSgnLi9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uJykucHJvdmlkZXIsXG4gICAgICBwcm92aWRlciA9IG5ldyBDb25uZWN0aW9uKCk7XG4gICAgaWQgPSBwcm92aWRlci5jcmVhdGVEYXRhQ2hhbm5lbCgpO1xuICAgIHByb3ZpZGVyLmNsb3NlKCk7XG4gIH1cblxuICB0aGlzLmNoYW5uZWwgPSB1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdO1xuICBkZWxldGUgdW5BdHRhY2hlZENoYW5uZWxzW2lkXTtcblxuICAvLyBBZnRlciB0aGUgY29uc3RydWN0b3IgcmV0dXJucywgYW5kIHRoZSBjYWxsZXIgaGFzIGEgY2hhbmNlIHRvIHJlZ2lzdGVyXG4gIC8vIGV2ZW50IGxpc3RlbmVycywgZmlyZSBhbGwgcGVuZGluZyBldmVudHMsIGFuZCB0aGVuIGVuc3VyZSB0aGF0IGFsbFxuICAvLyBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgaGFuZGxlZCBpbW1lZGlhdGVseS5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRyYWluUGVuZGluZ0V2ZW50cyhpZCk7XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIG11c3Qgbm90IGJlIGNhbGxlZCB1bnRpbCBhZnRlciB0aGUgcGVuZGluZyBldmVudHMgYXJlXG4gICAgLy8gZHJhaW5lZCwgdG8gZW5zdXJlIHRoYXQgbWVzc2FnZXMgYXJlIGRlbGl2ZXJlZCBpbiBvcmRlci5cbiAgICB0aGlzLm1hbmFnZUV2ZW50cyh0cnVlKTtcbiAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZHJhaW5QZW5kaW5nRXZlbnRzID0gZnVuY3Rpb24oaWQpIHtcbiAgcGVuZGluZ0V2ZW50c1tpZF0uZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXNbJ29uJyArIGV2ZW50LnR5cGVdKGV2ZW50KTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgZGVsZXRlIHBlbmRpbmdFdmVudHNbaWRdO1xufTtcblxuLy8gQXR0YWNoIG9yIGRldGFjaCBsaXN0ZW5lcnMgZm9yIGV2ZW50cyBhZ2FpbnN0IHRoZSBjb25uZWN0aW9uLlxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5tYW5hZ2VFdmVudHMgPSBmdW5jdGlvbiAoYXR0YWNoKSB7XG4gIGV2ZW50TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgaWYgKGF0dGFjaCkge1xuICAgICAgdGhpc1tldmVudE5hbWVdID0gdGhpc1tldmVudE5hbWVdLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNoYW5uZWxbZXZlbnROYW1lXSA9IHRoaXNbZXZlbnROYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbFtldmVudE5hbWVdO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0TGFiZWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmxhYmVsKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0T3JkZXJlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwub3JkZXJlZCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE1heFBhY2tldExpZmVUaW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5tYXhQYWNrZXRMaWZlVGltZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE1heFJldHJhbnNtaXRzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5tYXhSZXRyYW5zbWl0cyk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldFByb3RvY29sID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5wcm90b2NvbCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE5lZ290aWF0ZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLm5lZ290aWF0ZWQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwuaWQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRSZWFkeVN0YXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5yZWFkeVN0YXRlKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmJ1ZmZlcmVkQW1vdW50KTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0QmluYXJ5VHlwZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwuYmluYXJ5VHlwZSk7XG59O1xuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5zZXRCaW5hcnlUeXBlID0gZnVuY3Rpb24gKGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gIHRoaXMuY2hhbm5lbC5iaW5hcnlUeXBlID0gYmluYXJ5VHlwZTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh0ZXh0LCBjYWxsYmFjaykge1xuICB0aGlzLmNoYW5uZWwuc2VuZCh0ZXh0KTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuc2VuZEJ1ZmZlciA9IGZ1bmN0aW9uIChidWZmZXIsIGNhbGxiYWNrKSB7XG4gIHRoaXMuY2hhbm5lbC5zZW5kKGJ1ZmZlcik7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGlmICghdGhpcy5jaGFubmVsKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIH1cbiAgdGhpcy5tYW5hZ2VFdmVudHMoZmFsc2UpO1xuICB0aGlzLmNoYW5uZWwuY2xvc2UoKTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25vcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25vcGVuJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmVycm9yJywge1xuICAgIGVycmNvZGU6IGV2ZW50LnR5cGUsXG4gICAgbWVzc2FnZTogZXZlbnQubWVzc2FnZVxuICB9KTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uY2xvc2UnLCBldmVudC5tZXNzYWdlKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgZXZlbnQuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ubWVzc2FnZScsIHt0ZXh0OiBldmVudC5kYXRhfSk7XG4gIH0gZWxzZSBpZiAodGhpcy5jaGFubmVsLmJpbmFyeVR5cGUgPT09ICdhcnJheWJ1ZmZlcicgJiZcbiAgICAgIHR5cGVvZiBDb21wb25lbnRzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgIShldmVudC5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgLy8gSW4gRmlyZWZveCBBZGRvbnMsIGluY29taW5nIGFycmF5IGJ1ZmZlcnMgYXJlIG5vdCBhbHdheXMgb3duZWQgYnkgdGhlXG4gICAgLy8gQWRkb24gY29udGV4dC4gVGhlIGZvbGxvd2luZyBsaW5lIGNsb25lcyB0aGUgb2JqZWN0IHRvIHRha2Ugb3duZXJzaGlwLlxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Db21wb25lbnRzLnV0aWxzLmNsb25lSW50b1xuICAgIHZhciBteURhdGEgPSBDb21wb25lbnRzLnV0aWxzLmNsb25lSW50byhldmVudC5kYXRhLCB7fSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm1lc3NhZ2UnLCB7YnVmZmVyOiBteURhdGF9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ubWVzc2FnZScsIHtidWZmZXI6IGV2ZW50LmRhdGF9KTtcbiAgfVxufTtcblxuZXhwb3J0cy5uYW1lID0gXCJjb3JlLnJ0Y2RhdGFjaGFubmVsXCI7XG5leHBvcnRzLnByb3ZpZGVyID0gUlRDRGF0YUNoYW5uZWxBZGFwdGVyO1xuZXhwb3J0cy5hbGxvY2F0ZSA9IGFsbG9jYXRlQ2hhbm5lbDtcbiIsIi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cblxudmFyIGFkYXB0ZXIgPSByZXF1aXJlKCd3ZWJydGMtYWRhcHRlcicpO1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG52YXIgUlRDUGVlckNvbm5lY3Rpb24gPSBhZGFwdGVyLlJUQ1BlZXJDb25uZWN0aW9uO1xudmFyIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IGFkYXB0ZXIuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xudmFyIFJUQ0ljZUNhbmRpZGF0ZSA9IGFkYXB0ZXIuUlRDSWNlQ2FuZGlkYXRlO1xuXG52YXIgRGF0YUNoYW5uZWwgPSByZXF1aXJlKCcuL2NvcmUucnRjZGF0YWNoYW5uZWwnKTtcblxudmFyIFJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlciA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnQsIGNvbmZpZ3VyYXRpb24pIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdHJ5IHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oY29uZmlndXJhdGlvbik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBOb3RlOiBZb3UgY2FuJ3QgYXNrIHRoZSBwcm92aWRlciB0byBjbG9zZSB5b3Ugc3luY2hyb25vdXNseSwgc2luY2VcbiAgICAvLyB0aGUgY29uc3RydWN0b3IgaGFzIG5vdCB5ZXQgcmV0dXJuZWQsIHNvIHRoZXJlJ3Mgbm8gJ3RoaXMnIHRoYXRcbiAgICAvLyB0aGUgcHJvdmlkZXIgY2FuIGtub3cgYWJvdXQgeWV0LlxuICAgIHNldFRpbWVvdXQoY2FwLnByb3ZpZGVyLmNsb3NlLmJpbmQoY2FwLnByb3ZpZGVyLCB0aGlzKSwgMCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5ldmVudHMgPSBbXG4gICAgJ29uZGF0YWNoYW5uZWwnLFxuICAgICdvbm5lZ290aWF0aW9ubmVlZGVkJyxcbiAgICAnb25pY2VjYW5kaWRhdGUnLFxuICAgICdvbnNpZ25hbGluZ3N0YXRlY2hhbmdlJyxcbiAgICAnb25hZGRzdHJlYW0nLFxuICAgICdvbnJlbW92ZXN0cmVhbScsXG4gICAgJ29uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJ1xuICBdO1xuICB0aGlzLm1hbmFnZUV2ZW50cyh0cnVlKTtcbn07XG5cbi8vIEF0dGFjaCBvciBkZXRhY2ggbGlzdGVuZXJzIGZvciBldmVudHMgYWdhaW5zdCB0aGUgY29ubmVjdGlvbi5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUubWFuYWdlRXZlbnRzID0gZnVuY3Rpb24gKGF0dGFjaCkge1xuICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChhdHRhY2gpIHtcbiAgICAgIHRoaXNbZXZlbnRdID0gdGhpc1tldmVudF0uYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY29ubmVjdGlvbltldmVudF0gPSB0aGlzW2V2ZW50XTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgZGVsZXRlIHRoaXMuY29ubmVjdGlvbltldmVudF07XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uIChjb25zdHJhaW50cykge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5jcmVhdGVPZmZlcihyZXNvbHZlLCByZWplY3QsIGNvbnN0cmFpbnRzKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY3JlYXRlQW5zd2VyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5jcmVhdGVBbnN3ZXIocmVzb2x2ZSwgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuc2V0TG9jYWxEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5zZXRMb2NhbERlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pLFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldExvY2FsRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5jb25uZWN0aW9uLmxvY2FsRGVzY3JpcHRpb24pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5zZXRSZW1vdGVEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSxcbiAgICAgIHJlc29sdmUsXG4gICAgICByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRSZW1vdGVEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24ucmVtb3RlRGVzY3JpcHRpb24pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRTaWduYWxpbmdTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24uc2lnbmFsaW5nU3RhdGUpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS51cGRhdGVJY2UgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbikge1xuICB0aGlzLmNvbm5lY3Rpb24udXBkYXRlSWNlKGNvbmZpZ3VyYXRpb24pO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uIChjYW5kaWRhdGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uYWRkSWNlQ2FuZGlkYXRlKG5ldyBSVENJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKSxcbiAgICAgIHJlc29sdmUsXG4gICAgICByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRJY2VHYXRoZXJpbmdTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24uaWNlR2F0aGVyaW5nU3RhdGUpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRJY2VDb25uZWN0aW9uU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5jb25uZWN0aW9uLmljZUNvbm5lY3Rpb25TdGF0ZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldENvbmZpZ3VyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb25maWd1cmF0aW9uID0gdGhpcy5jb25uZWN0aW9uLmdldENvbmZpZ3VyYXRpb24oKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZShjb25maWd1cmF0aW9uKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0TG9jYWxTdHJlYW1zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgIGVycmNvZGU6IC0xLFxuICAgIG1lc3NhZ2U6IFwiTm90IEltcGxlbWVudGVkXCJcbiAgfSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFJlbW90ZVN0cmVhbXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0U3RyZWFtQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgIGVycmNvZGU6IC0xLFxuICAgIG1lc3NhZ2U6IFwiTm90IEltcGxlbWVudGVkXCJcbiAgfSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgIGVycmNvZGU6IC0xLFxuICAgIG1lc3NhZ2U6IFwiTm90IEltcGxlbWVudGVkXCJcbiAgfSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgIGVycmNvZGU6IC0xLFxuICAgIG1lc3NhZ2U6IFwiTm90IEltcGxlbWVudGVkXCJcbiAgfSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuY29ubmVjdGlvbikge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbiAgfVxuICB0aGlzLm1hbmFnZUV2ZW50cyhmYWxzZSk7XG4gIHRyeSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICAgIGVycmNvZGU6IGUubmFtZSxcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZVxuICAgIH0pO1xuICB9XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmNyZWF0ZURhdGFDaGFubmVsID0gZnVuY3Rpb24gKGxhYmVsLCBkYXRhQ2hhbm5lbERpY3QpIHtcbiAgdmFyIGlkID0gRGF0YUNoYW5uZWwuYWxsb2NhdGUodGhpcy5jb25uZWN0aW9uLmNyZWF0ZURhdGFDaGFubmVsKGxhYmVsLCBkYXRhQ2hhbm5lbERpY3QpKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZShpZCk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFN0YXRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmdldFN0YXRzKHNlbGVjdG9yLCByZXNvbHZlLCByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbmRhdGFjaGFubmVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBpZCA9IERhdGFDaGFubmVsLmFsbG9jYXRlKGV2ZW50LmNoYW5uZWwpO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uZGF0YWNoYW5uZWwnLCB7Y2hhbm5lbDogaWR9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25uZWdvdGlhdGlvbm5lZWRlZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ubmVnb3RpYXRpb25uZWVkZWQnLCBldmVudC5tZXNzYWdlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25pY2VjYW5kaWRhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIG1zZztcbiAgaWYgKGV2ZW50LmNhbmRpZGF0ZSAmJiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlKSB7XG4gICAgbXNnID0ge1xuICAgICAgY2FuZGlkYXRlOiB7XG4gICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSxcbiAgICAgICAgc2RwTWlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxuICAgICAgICBzZHBNTGluZUluZGV4OiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleFxuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbXNnID0ge1xuICAgICAgY2FuZGlkYXRlOiBudWxsXG4gICAgfTtcbiAgfVxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uaWNlY2FuZGlkYXRlJywgbXNnKTtcbn07XG4gIFxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25zaWduYWxpbmdzdGF0ZWNoYW5nZScsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uYWRkc3RyZWFtID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vVE9ETzogcHJvdmlkZSBJRCBvZiBhbGxvY2F0ZWQgc3RyZWFtLlxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uYWRkc3RyZWFtJywgZXZlbnQuc3RyZWFtKTtcbn07XG4gIFxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbnJlbW92ZXN0cmVhbSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvL1RPRE86IHByb3ZpZGUgSUQgb2YgZGVhbGxvY2F0ZWQgc3RyZWFtLlxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ucmVtb3Zlc3RyZWFtJywgZXZlbnQuc3RyZWFtKTtcbn07XG4gIFxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5cbmV4cG9ydHMubmFtZSA9IFwiY29yZS5ydGNwZWVyY29ubmVjdGlvblwiO1xuZXhwb3J0cy5wcm92aWRlciA9IFJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlcjtcbmV4cG9ydHMuc3R5bGUgPSBcInByb3ZpZGVQcm9taXNlc1wiO1xuZXhwb3J0cy5mbGFncyA9IHtwcm92aWRlcjogdHJ1ZX07XG4iLCIvKmdsb2JhbHMgbG9jYWxTdG9yYWdlICovXG4vKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBBIEZyZWVET00gY29yZS5zdG9yYWdlIHByb3ZpZGVyIHRoYXQgZGVwZW5kcyBvbiBsb2NhbFN0b3JhZ2VcbiAqIFRodXMsIHRoaXMgb25seSB3b3JrcyBpbiB0aGUgY29udGV4dCBvZiBhIHdlYnBhZ2UgYW5kIGhhc1xuICogc29tZSBzaXplIGxpbWl0YXRpb25zLlxuICogTm90ZSB0aGF0IHRoaXMgY2FuIGNvbmZsaWN0IHdpdGggb3RoZXIgc2NyaXB0cyB1c2luZyBsb2NhbFN0b3JhZ2VcbiAqIGFzIGtleXMgYXJlIHJhd1xuICogQENsYXNzIFN0b3JhZ2VfdW5wcml2aWxlZ2VkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FwIENhcGFiaWxpdGllcyBmb3IgdGhlIHByb3ZpZGVyXG4gKi9cbnZhciBTdG9yYWdlX3VucHJpdmlsZWdlZCA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG4vKipcbiAqIExpc3RzIGtleXMgaW4gdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeVxuICogQG1ldGhvZCBrZXlzXG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICB2YXIgcmVzdWx0ID0gW10sXG4gICAgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHJlc3VsdC5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpO1xuICB9XG4gIGNvbnRpbnVhdGlvbihyZXN1bHQpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBrZXkgZnJvbSB0aGUgc3RvcmFnZSByZXBvc2l0b3J5LlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgaXRlbSB0byBnZXQgZnJvbSBzdG9yYWdlLlxuICogQG1ldGhvZCBnZXRcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIGNvbnRpbnVhdGlvbikge1xuICB0cnkge1xuICAgIHZhciB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIGNvbnRpbnVhdGlvbih2YWwpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29udGludWF0aW9uKG51bGwpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCBhIGtleSBpbiB0aGUgc3RvcmFnZSByZXBvc2l0b3J5LlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgaXRlbSB0byBzYXZlIGluIHN0b3JhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHNhdmUgaW4gc3RvcmFnZS5cbiAqIEBtZXRob2Qgc2V0XG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgY29udGludWF0aW9uKSB7XG4gIHZhciByZXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgY29udGludWF0aW9uKHJldCk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGtleSBmcm9tIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBpdGVtIHRvIHJlbW92ZSBmcm9tIHN0b3JhZ2U7XG4gKiBAbWV0aG9kIHJlbW92ZVxuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgY29udGludWF0aW9uKSB7XG4gIHZhciByZXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICBjb250aW51YXRpb24ocmV0KTtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuZXhwb3J0cy5wcm92aWRlciA9IFN0b3JhZ2VfdW5wcml2aWxlZ2VkO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUuc3RvcmFnZSc7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xudmFyIEV2ZW50SW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vLi4vc3JjL3Byb3h5L2V2ZW50SW50ZXJmYWNlJyk7XG52YXIgQ29uc3VtZXIgPSByZXF1aXJlKCcuLi8uLi9zcmMvY29uc3VtZXInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBDb3JlIGZyZWVkb20gc2VydmljZXMgYXZhaWxhYmxlIHRvIGFsbCBtb2R1bGVzLlxuICogQ3JlYXRlZCBieSB0aGUgZW52aXJvbm1lbnQgaGVscGVyIGluIHJlc3BvbnNlIHRvIGEgJ2NvcmUnIHJlcXVlc3QuXG4gKiBAQ2xhc3MgQ29yZV91bnByaXZpbGVnZWRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyIFRoZSBtYW5hZ2VyIHRoaXMgY29yZSBpcyBjb25uZWN0ZWQgd2l0aC5cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBDb3JlX3VucHJpdmlsZWdlZCA9IGZ1bmN0aW9uKG1hbmFnZXIsIHBvc3RNZXNzYWdlKSB7XG4gIHRoaXMubWFuYWdlciA9IG1hbmFnZXIubW9kdWxlO1xuICB0aGlzLmRlYnVnID0gdGhpcy5tYW5hZ2VyLmRlYnVnO1xufTtcblxuQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzID0ge307XG5cbkNvcmVfdW5wcml2aWxlZ2VkLmNvbnRleHRJZCA9IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGUgYSBjdXN0b20gY2hhbm5lbC5cbiAqIFJldHVybnMgdGhlIHN0cnVjdHVyZSB7Y2hhbm5lbDogUHJveHksIGlkZW50aWZpZXI6IE9iamVjdH0sXG4gKiB3aGVyZSB0aGUgaWRlbnRpZmllciBjYW4gYmUgJ3JlZGVlbWVkJyBieSBhbm90aGVyIG1vZHVsZSBvciBwcm92aWRlciB1c2luZ1xuICogYmluZCBjaGFubmVsLCBhdCB3aGljaCBwb2ludCB0aGUgZGVmZXJyZWQgb2JqZWN0IHdpbGwgcmVzb2x2ZSB3aXRoIGEgY2hhbm5lbFxuICogYmV0d2VlbiB0aGUgdHdvIGVuZHBvaW50cy5cbiAqIEBtZXRob2QgY3JlYXRlQ2hhbm5lbFxuICogQHBhcmFtcyB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBNZXRob2QgdG8gY2FsbCB3aXRoIHRoZSBjb3NudHJ1Y3RlZCBzdHJ1Y3R1cmUuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5jcmVhdGVDaGFubmVsID0gZnVuY3Rpb24oY29udGludWF0aW9uKSB7XG4gIHZhciBwcm94eSA9IG5ldyBDb25zdW1lcihFdmVudEludGVyZmFjZSwgdGhpcy5tYW5hZ2VyLmRlYnVnKSxcbiAgICAgIGlkID0gdXRpbC5nZXRJZCgpLFxuICAgICAgY2hhbiA9IHRoaXMuZ2V0Q2hhbm5lbChwcm94eSk7XG4gIHRoaXMubWFuYWdlci5zZXR1cChwcm94eSk7XG5cbiAgaWYgKHRoaXMubWFuYWdlci5kZWxlZ2F0ZSAmJiB0aGlzLm1hbmFnZXIudG9EZWxlZ2F0ZS5jb3JlKSB7XG4gICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hZ2VyLmRlbGVnYXRlLCB7XG4gICAgICB0eXBlOiAnRGVsZWdhdGlvbicsXG4gICAgICByZXF1ZXN0OiAnaGFuZGxlJyxcbiAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkXSA9IHtcbiAgICBsb2NhbDogdHJ1ZSxcbiAgICBwcm94eTogcHJveHlcbiAgfTtcblxuICBwcm94eS5vbmNlKCdzdGFydCcsIHRoaXMuZ2V0Q2hhbm5lbC5iaW5kKHRoaXMsIHByb3h5KSk7XG5cbiAgY29udGludWF0aW9uKHtcbiAgICBjaGFubmVsOiBjaGFuLFxuICAgIGlkZW50aWZpZXI6IGlkXG4gIH0pO1xufTtcblxuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmdldENoYW5uZWwgPSBmdW5jdGlvbihwcm94eSkge1xuICB2YXIgaWZhY2UgPSBwcm94eS5nZXRQcm94eUludGVyZmFjZSgpLFxuICAgICAgY2hhbiA9IGlmYWNlKCk7XG4gIGNoYW4uY2xvc2UgPSBpZmFjZS5jbG9zZTtcbiAgY2hhbi5vbkNsb3NlID0gaWZhY2Uub25DbG9zZTtcbiAgaWZhY2Uub25DbG9zZShjaGFuLCBmdW5jdGlvbigpIHtcbiAgICBwcm94eS5kb0Nsb3NlKCk7XG4gIH0pO1xuICByZXR1cm4gY2hhbjtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBhIG1lc3NhZ2UgZnJvbSBhbm90aGVyIGNvcmUgaW5zdGFuY2UuXG4gKiBOb3RlOiBDb3JlX3VucHJpdmlsZWdlZCBpcyBub3QgcmVnaXN0ZXJlZCBvbiB0aGUgaHViLiBpdCBpcyBhIHByb3ZpZGVyLFxuICogICAgIGFzIGl0J3MgbG9jYXRpb24gYW5kIG5hbWUgd291bGQgaW5kaWNhdGUuIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5XG4gKiAgICAgcG9ydC1hcHAgdG8gcmVsYXkgbWVzc2FnZXMgdXAgdG8gaGlnaGVyIGxldmVscy4gIE1vcmUgZ2VuZXJhbGx5LCB0aGVcbiAqICAgICBtZXNzYWdlcyBlbWl0dGVkIGJ5IHRoZSBjb3JlIHRvICd0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFuYWdlLmRlbGVnYXRlJ1xuICogICAgIFNob3VsZCBiZSBvbk1lc3NhZ2VkIHRvIHRoZSBjb250cm9sbGluZyBjb3JlLlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1zZyBUaGUgbWVzc3NhZ2UgZnJvbSBhbiBpc29sYXRlZCBjb3JlIHByb3ZpZGVyLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24oc291cmNlLCBtc2cpIHtcbiAgaWYgKG1zZy50eXBlID09PSAncmVnaXN0ZXInKSB7XG4gICAgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW21zZy5pZF0gPSB7XG4gICAgICByZW1vdGU6IHRydWUsXG4gICAgICByZXNvbHZlOiBtc2cucmVwbHksXG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH07XG4gIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09ICdjbGVhcicpIHtcbiAgICBkZWxldGUgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW21zZy5pZF07XG4gIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09ICdiaW5kJykge1xuICAgIGlmIChDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbbXNnLmlkXSkge1xuICAgICAgdGhpcy5iaW5kQ2hhbm5lbChtc2cuaWQsIGZ1bmN0aW9uKCkge30sIHNvdXJjZSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEJpbmQgYSBjdXN0b20gY2hhbm5lbC5cbiAqIENyZWF0ZXMgYSBwcm94eSBpbnRlcmZhY2UgdG8gdGhlIGN1c3RvbSBjaGFubmVsLCB3aGljaCB3aWxsIGJlIGJvdW5kIHRvXG4gKiB0aGUgcHJveHkgb2J0YWluZWQgdGhyb3VnaCBhbiBlYXJsaWVyIGNyZWF0ZUNoYW5uZWwgY2FsbC5cbiAqIGNoYW5uZWwgdG8gYSBwcm94eS5cbiAqIEBtZXRob2QgYmluZENoYW5uZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBpZGVudGlmaWVyIEFuIGlkZW50aWZpZXIgb2J0YWluZWQgdGhyb3VnaCBjcmVhdGVDaGFubmVsLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdpdGggdGhlIHByb3h5LlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuYmluZENoYW5uZWwgPSBmdW5jdGlvbihpZGVudGlmaWVyLCBjb250aW51YXRpb24sIHNvdXJjZSkge1xuICB2YXIgdG9CaW5kID0gQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdLFxuICAgICAgbmV3U291cmNlID0gIXNvdXJjZTtcblxuICAvLyB3aGVuIGJpbmRDaGFubmVsIGlzIGNhbGxlZCBkaXJlY3RseSwgc291cmNlIHdpbGwgYmUgdW5kZWZpbmVkLlxuICAvLyBXaGVuIGl0IGlzIHByb3BvZ2F0ZWQgYnkgb25NZXNzYWdlLCBhIHNvdXJjZSBmb3IgYmluZGluZyB3aWxsIGFscmVhZHkgZXhpc3QuXG4gIGlmIChuZXdTb3VyY2UpIHtcbiAgICB0aGlzLmRlYnVnLmRlYnVnKCdtYWtpbmcgbG9jYWwgcHJveHkgZm9yIGNvcmUgYmluZGluZycpO1xuICAgIHNvdXJjZSA9IG5ldyBDb25zdW1lcihFdmVudEludGVyZmFjZSwgdGhpcy5kZWJ1Zyk7XG4gICAgdGhpcy5tYW5hZ2VyLnNldHVwKHNvdXJjZSk7XG4gIH1cblxuICAvLyBJZiB0aGlzIGlzIGEga25vd24gaWRlbnRpZmllciBhbmQgaXMgaW4gdGhlIHNhbWUgY29udGV4dCwgYmluZGluZyBpcyBlYXN5LlxuICBpZiAodG9CaW5kICYmIHRvQmluZC5sb2NhbCkge1xuICAgIHRoaXMuZGVidWcuZGVidWcoJ0JpbmRpbmcgYSBjaGFubmVsIHRvIHBvcnQgb24gdGhpcyBodWI6JyArIHNvdXJjZSk7XG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsoc291cmNlLCBpZGVudGlmaWVyLCB0b0JpbmQucHJveHksICdkZWZhdWx0Jyk7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXTtcbiAgICBpZiAodGhpcy5tYW5hZ2VyLmRlbGVnYXRlICYmIHRoaXMubWFuYWdlci50b0RlbGVnYXRlLmNvcmUpIHtcbiAgICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgICB0eXBlOiAnRGVsZWdhdGlvbicsXG4gICAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgICBmbG93OiAnY29yZScsXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICB0eXBlOiAnY2xlYXInLFxuICAgICAgICAgIGlkOiBpZGVudGlmaWVyXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0b0JpbmQgJiYgdG9CaW5kLnJlbW90ZSkge1xuICAgIHRoaXMuZGVidWcuZGVidWcoJ0JpbmRpbmcgYSBjaGFubmVsIGludG8gYSBtb2R1bGUuJyk7XG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsoXG4gICAgICAgIHNvdXJjZSxcbiAgICAgICAgbmV3U291cmNlID8gJ2RlZmF1bHQnIDogaWRlbnRpZmllcixcbiAgICAgICAgdG9CaW5kLnNvdXJjZSxcbiAgICAgICAgaWRlbnRpZmllcik7XG4gICAgdG9CaW5kLnJlc29sdmUoe1xuICAgICAgdHlwZTogJ0JpbmQgQ2hhbm5lbCcsXG4gICAgICByZXF1ZXN0Oidjb3JlJyxcbiAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogJ2JpbmQnLFxuICAgICAgICBpZDogaWRlbnRpZmllclxuICAgICAgfVxuICAgIH0pO1xuICAgIGRlbGV0ZSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRlbnRpZmllcl07XG4gIH0gZWxzZSBpZiAodGhpcy5tYW5hZ2VyLmRlbGVnYXRlICYmIHRoaXMubWFuYWdlci50b0RlbGVnYXRlLmNvcmUpIHtcbiAgICB0aGlzLmRlYnVnLmluZm8oJ2RlbGVnYXRpbmcgY2hhbm5lbCBiaW5kIGZvciBhbiB1bmtub3duIElEOicgKyBpZGVudGlmaWVyKTtcbiAgICB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFnZXIuZGVsZWdhdGUsIHtcbiAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAnYmluZCcsXG4gICAgICAgIGlkOiBpZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSk7XG4gICAgc291cmNlLm9uY2UoJ3N0YXJ0JywgZnVuY3Rpb24ocCwgY2IpIHtcbiAgICAgIGNiKHRoaXMuZ2V0Q2hhbm5lbChwKSk7XG4gICAgfS5iaW5kKHRoaXMsIHNvdXJjZSwgY29udGludWF0aW9uKSk7XG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsoc291cmNlLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIHRoaXMubWFuYWdlci5odWIuZ2V0RGVzdGluYXRpb24odGhpcy5tYW5hZ2VyLmRlbGVnYXRlKSxcbiAgICAgICAgaWRlbnRpZmllcik7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdBc2tlZCB0byBiaW5kIHVua25vd24gY2hhbm5lbDogJyArIGlkZW50aWZpZXIpO1xuICAgIHRoaXMuZGVidWcubG9nKENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVscyk7XG4gICAgY29udGludWF0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHNvdXJjZS5nZXRJbnRlcmZhY2UpIHtcbiAgICBjb250aW51YXRpb24odGhpcy5nZXRDaGFubmVsKHNvdXJjZSkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgSUQgb2YgdGhlIGN1cnJlbnQgZnJlZWRvbS5qcyBjb250ZXh0LiAgUHJvdmlkZXMgYW5cbiAqIGFycmF5IG9mIG1vZHVsZSBVUkxzLCB0aGUgbGluZWFnZSBvZiB0aGUgY3VycmVudCBjb250ZXh0LlxuICogV2hlbiBub3QgaW4gYW4gYXBwbGljYXRpb24gY29udGV4dCwgdGhlIElEIGlzIHRoZSBsaW5lYWdlXG4gKiBvZiB0aGUgY3VycmVudCBWaWV3LlxuICogQG1ldGhvZCBnZXRJZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIGNhbGxlZCB3aXRoIElEIGluZm9ybWF0aW9uLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAvLyBUT0RPOiBtYWtlIHN1cmUgY29udGV4dElEIGlzIHByb3Blcmx5IGZyb3plbi5cbiAgY2FsbGJhY2soQ29yZV91bnByaXZpbGVnZWQuY29udGV4dElkKTtcbn07XG5cbi8qKlxuICogR2V0IGEgbG9nZ2VyIGZvciBsb2dnaW5nIHRvIHRoZSBmcmVlZG9tLmpzIGxvZ2dlci4gUHJvdmlkZXMgYVxuICogbG9nIG9iamVjdCB3aXRoIGFuIGludGVyZmFjZSBzaW1pbGFyIHRvIHRoZSBzdGFuZGFyZCBqYXZhc2NyaXB0IGNvbnNvbGUsXG4gKiB3aGljaCBsb2dzIHZpYSBkZWJ1Zy5cbiAqIEBtZXRob2QgZ2V0TG9nZ2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbG9nZ2VyLCB1c2VkIGFzIGl0cyAnc291cmNlJ1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2l0aCB0aGUgbG9nZ2VyLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0TG9nZ2VyID0gZnVuY3Rpb24obmFtZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5tYW5hZ2VyLmRlYnVnLmdldExvZ2dlcihuYW1lKSk7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgSUQgb2YgdGhlIGN1cnJlbnQgZnJlZWRvbS5qcyBjb250ZXh0LlxuICogQG1ldGhvZCBzZXRJZFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nW119IGlkIFRoZSBsaW5lYWdlIG9mIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5zZXRJZCA9IGZ1bmN0aW9uKGlkKSB7XG4gIENvcmVfdW5wcml2aWxlZ2VkLmNvbnRleHRJZCA9IGlkO1xufTtcblxuZXhwb3J0cy5wcm92aWRlciA9IENvcmVfdW5wcml2aWxlZ2VkO1xuZXhwb3J0cy5uYW1lID0gXCJjb3JlXCI7XG5leHBvcnRzLmZsYWdzID0ge21vZHVsZTogdHJ1ZX07XG4iLCIvKmdsb2JhbHMgZG9jdW1lbnQgKi9cclxuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcclxudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XHJcblxyXG4vKipcclxuICogQSBmcmVlZG9tLmpzIHZpZXcgaXMgdGhlIGludGVyZmFjZSBmb3IgdXNlciBpbnRlcmFjdGlvbi5cclxuICogQSB2aWV3IGV4aXN0cyBhcyBhbiBpRnJhbWUsIHdoaWNoIGlzIHNob3duIHRvIHRoZSB1c2VyIGluIHNvbWUgd2F5LlxyXG4gKiBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIHZpZXcgYW5kIHRoZSBmcmVlZG9tLmpzIG1vZHVsZSBpcyBwZXJmb3JtZWRcclxuICogdGhyb3VnaCB0aGUgSFRNTDUgcG9zdE1lc3NhZ2UgbWVjaGFuaXNtLCB3aGljaCB0aGlzIHByb3ZpZGVyIHRyYW5zbGF0ZXNcclxuICogdG8gZnJlZWRvbS5qcyBtZXNzYWdlIGV2ZW50cy5cclxuICogQENsYXNzIFZpZXdfdW5wcml2aWxlZ2VkXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge1ZpZXcgUHJvdmlkZXJ9IHByb3ZpZGVyXHJcbiAqIEBwYXJhbSB7cHJvdmlkZXI6UHJvdmlkZXIsbW9kdWxlOk1vZHVsZX0gY2FwIFRoZSBpbnN0YW50aWF0b3Igb2YgdGhlIHZpZXcuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoRXZlbnQgRnVuY3Rpb24gdG8gY2FsbCB0byBlbWl0IGV2ZW50cy5cclxuICovXHJcbnZhciBDb3JlX1ZpZXcgPSBmdW5jdGlvbiAocHJvdmlkZXIsIGNhcCwgZGlzcGF0Y2hFdmVudCkge1xyXG4gIHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcjtcclxuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xyXG4gIHNldFRpbWVvdXQoY2FwLnByb3ZpZGVyLm9uQ2xvc2UuYmluZChcclxuICAgIGNhcC5wcm92aWRlcixcclxuICAgIHRoaXMsXHJcbiAgICB0aGlzLmNsb3NlLmJpbmQodGhpcywgZnVuY3Rpb24gKCkge30pXHJcbiAgKSwgMCk7XHJcbiAgdGhpcy5tb2R1bGUgPSBjYXAubW9kdWxlO1xyXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBpcyB0aGUgZGVmYXVsdCBwcm92aWRlciBmb3IgY29yZS52aWV3LCB1bmxlc3Mgb3ZlcnJpZGRlbiBieSBjb250ZXh0IG9yXHJcbiAqIGEgdXNlciBzdXBwbGllZCBwcm92aWRlci4gVGhlIGludGVyZmFjZSBpcyBkb2N1bWVudGVkIGF0OlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZnJlZWRvbWpzL2ZyZWVkb20vd2lraS9mcmVlZG9tLmpzLVZpZXdzXHJcbiAqXHJcbiAqIEdlbmVyYWxseSwgYSB2aWV3IHByb3ZpZGVyIGNvbnNpc3RzIG9mIDMgbWV0aG9kczpcclxuICogb25PcGVuIGlzIGNhbGxlZCB3aGVuIGEgdmlldyBzaG91bGQgYmUgc2hvd24uXHJcbiAqICAgICBpZCAtIGlzIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgdmlldywgdXNlZCBvbiBzdWJzZXF1ZW50IGNhbGxzXHJcbiAqICAgICAgICAgIGZvciBjb21tdW5pY2F0aW9uIGFuZCB0byBldmVudHVhbGx5IGNsb3NlIHRoZSB2aWV3LlxyXG4gKiAgICAgbmFtZSAtIGlzIHRoZSBuYW1lIG9mIHRoZSB2aWV3IChhcyBkZWZpbmVkIGluIHRoZSBtYW5pZmVzdCksXHJcbiAqICAgICAgICAgICAgaW4gb3JkZXIgdG8gcGxhY2UgaXQgYXBwcm9wcmlhdGVseS5cclxuICogICAgIHBhZ2UgLSBpcyB0aGUgcmVzb2x2ZWQgVVJMIHRvIG9wZW4uXHJcbiAqICAgICByZXNvdXJjZXMgLSBpcyBhbiBhcnJheSBvZiByZXNvbHZlZCBVUkxzIHdoaWNoIGFyZSByZWZlcmVuY2VkLlxyXG4gKiAgICAgcG9zdE1lc3NhZ2UgLSBpcyBhIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBtZXNzYWdlcyBhcmUgZW1pdHRlZFxyXG4gKiAgICAgICAgICAgICAgICAgICBieSB0aGUgd2luZG93IGluIHdoaWNoIHRoZSB2aWV3IGlzIG9wZW5lZC5cclxuICogb25PcGVuIHJldHVybnMgYSBwcm9taXNlIHRoYXQgY29tcGxldGVzIHdoZW4gdGhlIHZpZXcgaXMgbG9hZGVkLlxyXG4gKiBvbk1lc3NhZ2UgaXMgY2FsbGVkIHRvIHNlbmQgYSBtZXNzYWdlIHRvIGFuIG9wZW4gdmlldy5cclxuICogICAgIGlkIC0gaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgb3BlbiB2aWV3LlxyXG4gKiAgICAgbWVzc2FnZSAtIGlzIHRoZSBtZXNzYWdlIHRvIHBvc3RNZXNzYWdlIHRvIHRoZSB2aWV3J3Mgd2luZG93LlxyXG4gKiBvbkNsb3NlIGlzIGNhbGxlZCB0byBjbG9zZSBhIHZpZXcuXHJcbiAqICAgICBpZCAtIGlzIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHZpZXcuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdmlkZXIgPSB7XHJcbiAgbGlzdGVuZXI6IHVuZGVmaW5lZCxcclxuICBhY3RpdmU6IHt9LFxyXG4gIG9uT3BlbjogZnVuY3Rpb24gKGlkLCBuYW1lLCBwYWdlLCByZXNvdXJjZXMsIHBvc3RNZXNzYWdlKSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keSxcclxuICAgICAgcm9vdCxcclxuICAgICAgZnJhbWU7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5saXN0ZW5lcikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSBpbiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlLmhhc093blByb3BlcnR5KGkpICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVbaV0uc291cmNlID09PSBtc2cuc291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlW2ldLnBvc3RNZXNzYWdlKG1zZy5kYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmxpc3RlbmVyLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWaWV3cyBvcGVuIGJ5IGRlZmF1bHQgaW4gYW4gZWxlbWVudCB3aXRoIHRoZWlyIElELCBvciBmaWxsIHRoZSBwYWdlXHJcbiAgICAvLyBvdGhlcndpc2UuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSkpIHtcclxuICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByb290LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICByb290LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgcm9vdC5zdHlsZS5kaXNwbGF5ID0gXCJyZWxhdGl2ZVwiO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgICBmcmFtZS5zZXRBdHRyaWJ1dGUoXCJzYW5kYm94XCIsIFwiYWxsb3ctc2NyaXB0cyBhbGxvdy1mb3Jtc1wiKTtcclxuICAgICAgZnJhbWUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgZnJhbWUuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgIGZyYW1lLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xyXG4gICAgICBmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICBmcmFtZS5zcmMgPSBwYWdlO1xyXG4gICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSwgdHJ1ZSk7XHJcbiAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgcmVqZWN0LCB0cnVlKTtcclxuXHJcbiAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZnJhbWUpO1xyXG5cclxuICAgICAgdGhpcy5hY3RpdmVbaWRdID0ge1xyXG4gICAgICAgIHBvc3RNZXNzYWdlOiBwb3N0TWVzc2FnZSxcclxuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcclxuICAgICAgICByb290OiByb290LFxyXG4gICAgICAgIHNvdXJjZTogZnJhbWUuY29udGVudFdpbmRvd1xyXG4gICAgICB9O1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIG9uTWVzc2FnZTogZnVuY3Rpb24gKGlkLCBtZXNzYWdlKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVtpZF0uc291cmNlLnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XHJcbiAgfSxcclxuICBvbkNsb3NlOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHRoaXMuYWN0aXZlW2lkXS5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5hY3RpdmVbaWRdLnJvb3QpO1xyXG4gICAgZGVsZXRlIHRoaXMuYWN0aXZlW2lkXTtcclxuICAgIFxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmxpc3RlbmVyLCB0cnVlKTtcclxuICAgICAgdGhpcy5saXN0ZW5lciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQXNrIGZvciB0aGlzIHZpZXcgdG8gb3BlbiBhIHNwZWNpZmljIGxvY2F0aW9uLCBlaXRoZXIgYSBGaWxlIHJlbGF0aXZlIHRvXHJcbiAqIHRoZSBsb2FkZXIsIG9yIGFuIGV4cGxpY2l0IGNvZGUgbG9jYXRpb24uXHJcbiAqIEBtZXRob2Qgc2hvd1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgaWRlbnRpZmllciBvZiB0aGUgdmlldy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB2aWV3IGlzIGxvYWRlZC5cclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChuYW1lLCBjb250aW51YXRpb24pIHtcclxuICBpZiAodGhpcy5pZCkge1xyXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ0FMUkVBRFlfT1BFTicsXHJcbiAgICAgIG1lc3NhZ2U6ICdDYW5ub3Qgc2hvdyBtdWx0aXBsZSB2aWV3cyB0aHJvdWdoIG9uZSBpbnN0YW5jZS4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdGhpcy5pZCA9IHV0aWwuZ2V0SWQoKTtcclxuXHJcbiAgdmFyIGNvbmZpZyA9IHRoaXMubW9kdWxlLm1hbmlmZXN0LnZpZXdzLFxyXG4gICAgdG9SZXNvbHZlID0gW107XHJcbiAgaWYgKCFjb25maWcgfHwgIWNvbmZpZ1tuYW1lXSkge1xyXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ05PTl9FWElTVEFOVCcsXHJcbiAgICAgIG1lc3NhZ2U6ICdWaWV3IG5vdCBmb3VuZDogJyArIG5hbWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbmZpZ1tuYW1lXS5tYWluICYmIGNvbmZpZ1tuYW1lXS5maWxlcykge1xyXG4gICAgdG9SZXNvbHZlID0gY29uZmlnW25hbWVdLmZpbGVzLmNvbmNhdChjb25maWdbbmFtZV0ubWFpbik7XHJcbiAgICBQcm9taXNlQ29tcGF0LmFsbCh0b1Jlc29sdmUubWFwKGZ1bmN0aW9uIChmbmFtZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2R1bGUucmVzb3VyY2UuZ2V0KHRoaXMubW9kdWxlLm1hbmlmZXN0SWQsIGZuYW1lKTtcclxuICAgIH0uYmluZCh0aGlzKSkpLnRoZW4oZnVuY3Rpb24gKGZpbGVzKSB7XHJcbiAgICAgIHRoaXMucHJvdmlkZXIub25PcGVuKHRoaXMuaWQsXHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgZmlsZXNbZmlsZXMubGVuZ3RoIC0gMV0sXHJcbiAgICAgICAgICBmaWxlcyxcclxuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudC5iaW5kKHRoaXMsICdtZXNzYWdlJykpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgIC8vIE1ha2Ugc3VyZSBjb250aW51YXRpb24gaXMgY2FsbGVkIHdpdGhvdXQgYW4gYXJndW1lbnQuXHJcbiAgICAgICAgICBjKCk7XHJcbiAgICAgICAgfS5iaW5kKHt9LCBjb250aW51YXRpb24pLFxyXG4gICAgICAgIGNvbnRpbnVhdGlvbi5iaW5kKHt9LCB1bmRlZmluZWQpXHJcbiAgICAgICk7XHJcbiAgICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgdGhpcy5tb2R1bGUuZGVidWcuZXJyb3IoJ1VuYWJsZSB0byBvcGVuIHZpZXcgJyArIG5hbWUgKyAnOiAnLCBlcnIpO1xyXG4gICAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgICAgZXJyY29kZTogJ1ZJRVdfTUFMRk9STUVEJyxcclxuICAgICAgICBtZXNzYWdlOiAnTWFsZm9ybWVkIFZpZXcgRGVjbGFyYXRpb246ICcgKyBlcnJcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9OX0VYSVNUQU5UJyxcclxuICAgICAgbWVzc2FnZTogJ1ZpZXcgbm90IGZvdW5kOiAnICsgbmFtZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGlzU2VjdXJlIGRldGVybWluZXMgd2hldGhlciB0aGUgbW9kdWxlIGNhbiBoYXZlIGNvbmZpZGVuY2UgdGhhdCBpdHNcclxuICogY29tbXVuaWNhdGlvbiB3aXRoIGl0cyB2aWV3IGNhbm5vdCBiZSBpbnRlcmNlcHRlZCBieSBhbiB1bnRydXN0ZWQgM3JkIHBhcnR5LlxyXG4gKiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGF0IGl0cyBva2F5IGZvciB0aGUgcnVudGltZSB0byBoYXZlIGFjY2VzcyB0byB0aGVcclxuICogbWVzc2FnZXMsIGFuZCBpZiB0aGUgY29udGV4dCBpcyBhIHdlYiBzZXJ2ZXIgb3IgYSBicm93c2VyIGV4dGVuc2lvbiB0aGVuXHJcbiAqIHRoYXQgY29udGV4dCBpcyB0cnVzdGVkLiBIb3dldmVyLCBpZiBhIHByb3ZpZGVyIHdhbnRzIHRvIGFsbG93IHRoZWlyIGUuZy5cclxuICogc29jaWFsIHByb3ZpZGVyIHRvIGJlIHVzZWQgb24gYXJiaXRyYXJ5IHdlYnNpdGVzLCB0aGlzIG1lY2hhbmlzbSBtZWFucyB0aGF0XHJcbiAqIGlmIHRoZSB3ZWJzaXRlIHVzZXMgYSB0cnVzdGVkIHZlcnNpb24gb2YgdGhlIGZyZWVkb20uanMgbGlicmFyeSwgdGhlbiB0aGVcclxuICogbW9kdWxlIGNhbiBiZSB1c2VkLlxyXG4gKiBAbWV0aG9kIGlzU2VjdXJlXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpZiB0aGUgY2hhbm5lbCB0byB0aGUgdmlldyBpcyBzZWN1cmUuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdG90eXBlLmlzU2VjdXJlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xyXG4gIGNvbnRpbnVhdGlvbihmYWxzZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2VuZCBhIG1lc3NhZ2UgdG8gYW4gb3BlbiB2aWV3LlxyXG4gKiBAbWV0aG9kIHBvc3RNZXNzYWdlXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdG90eXBlLnBvc3RNZXNzYWdlID0gZnVuY3Rpb24gKG1zZywgY29udGludWF0aW9uKSB7XHJcbiAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9UX09QRU4nLFxyXG4gICAgICBtZXNzYWdlOiAnQ2Fubm90IHBvc3QgbWVzc2FnZSB0byB1bmluaXRpYWxpemVkIHZpZXcuJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRoaXMucHJvdmlkZXIub25NZXNzYWdlKHRoaXMuaWQsIG1zZyk7XHJcbiAgY29udGludWF0aW9uKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2xvc2UgYW4gYWN0aXZlIHZpZXcuXHJcbiAqIEBtZXRob2QgY2xvc2VcclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XHJcbiAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9UX09QRU4nLFxyXG4gICAgICBtZXNzYWdlOiAnQ2Fubm90IGNsb3NlIHVuaW5pdGlhbGl6ZWQgdmlldy4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdGhpcy5wcm92aWRlci5vbkNsb3NlKHRoaXMuaWQpO1xyXG4gIGRlbGV0ZSB0aGlzLmlkO1xyXG5cclxuICBjb250aW51YXRpb24oKTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQWxsb3cgYSB3ZWIgcGFnZSB0byByZWRlZmluZSBiZWhhdmlvciBmb3IgaG93IHZpZXdzIGFyZSBzaG93bi5cclxuICogQG1ldGhvZCByZWdpc3RlclxyXG4gKiBAc3RhdGljXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFBhZ2VQcm92aWRlciBUaGUgY3VzdG9tIHZpZXcgYmVoYXZpb3IuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucmVnaXN0ZXIgPSBmdW5jdGlvbiAoUGFnZVByb3ZpZGVyKSB7XHJcbiAgdmFyIHByb3ZpZGVyID0gUGFnZVByb3ZpZGVyID8gbmV3IFBhZ2VQcm92aWRlcigpIDogQ29yZV9WaWV3LnByb3ZpZGVyO1xyXG4gIGV4cG9ydHMucHJvdmlkZXIgPSBDb3JlX1ZpZXcuYmluZCh0aGlzLCBwcm92aWRlcik7XHJcbn07XHJcblxyXG5leHBvcnRzLnByb3ZpZGVyID0gQ29yZV9WaWV3LmJpbmQodGhpcywgQ29yZV9WaWV3LnByb3ZpZGVyKTtcclxuZXhwb3J0cy5uYW1lID0gJ2NvcmUudmlldyc7XHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBDb3JlX1ZpZXcucmVnaXN0ZXI7XHJcbmV4cG9ydHMuZmxhZ3MgPSB7cHJvdmlkZXI6IHRydWUsIG1vZHVsZTogdHJ1ZX07XHJcbiIsIi8qZ2xvYmFscyBXZWJTb2NrZXQsIEFycmF5QnVmZmVyLCBCbG9iLCBVaW50OEFycmF5LCBjb25zb2xlICovXG4vKmpzbGludCBzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG5cbnZhciBXU0hhbmRsZSA9IG51bGw7XG52YXIgbm9kZVN0eWxlID0gZmFsc2U7XG5cbi8qKlxuICogQSBXZWJTb2NrZXQgY29yZSBwcm92aWRlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIGZvciB0aGUgcHJvdmlkZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoRXZlbnQgRnVuY3Rpb24gdG8gZGlzcGF0Y2ggZXZlbnRzLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgUmVtb3RlIFVSTCB0byBjb25uZWN0IHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBwcm90b2NvbHMgU3ViUHJvdG9jb2xzIHRvIG9wZW4uXG4gKiBAcGFyYW0ge1dlYlNvY2tldD99IHNvY2tldCBBbiBhbHRlcm5hdGl2ZSBzb2NrZXQgY2xhc3MgdG8gdXNlLlxuICovXG52YXIgV1MgPSBmdW5jdGlvbiAoY2FwLCBkaXNwYXRjaEV2ZW50LCB1cmwsIHByb3RvY29scywgc29ja2V0KSB7XG4gIHZhciBXU0ltcGxlbWVudGF0aW9uID0gbnVsbCxcbiAgICBlcnJvcjtcbiAgdGhpcy5pc05vZGUgPSBub2RlU3R5bGU7XG4gIGlmICh0eXBlb2Ygc29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIFdTSW1wbGVtZW50YXRpb24gPSBzb2NrZXQ7XG4gIH0gZWxzZSBpZiAoV1NIYW5kbGUgIT09IG51bGwpIHtcbiAgICBXU0ltcGxlbWVudGF0aW9uID0gV1NIYW5kbGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBXU0ltcGxlbWVudGF0aW9uID0gV2ViU29ja2V0O1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1BsYXRmb3JtIGRvZXMgbm90IHN1cHBvcnQgV2ViU29ja2V0Jyk7XG4gIH1cblxuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB0cnkge1xuICAgIGlmIChwcm90b2NvbHMpIHtcbiAgICAgIHRoaXMud2Vic29ja2V0ID0gbmV3IFdTSW1wbGVtZW50YXRpb24odXJsLCBwcm90b2NvbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndlYnNvY2tldCA9IG5ldyBXU0ltcGxlbWVudGF0aW9uKHVybCk7XG4gICAgfVxuICAgIHRoaXMud2Vic29ja2V0LmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXJyb3IgPSB7fTtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICBlcnJvci5lcnJjb2RlID0gJ1NZTlRBWCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yLmVycmNvZGUgPSBlLm5hbWU7XG4gICAgfVxuICAgIGVycm9yLm1lc3NhZ2UgPSBlLm1lc3NhZ2U7XG4gICAgZGlzcGF0Y2hFdmVudCgnb25FcnJvcicsIGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5pc05vZGUpIHtcbiAgICB0aGlzLndlYnNvY2tldC5vbignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcykpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdvcGVuJywgdGhpcy5vbk9wZW4uYmluZCh0aGlzKSk7XG4gICAgLy8gbm9kZS5qcyB3ZWJzb2NrZXQgaW1wbGVtZW50YXRpb24gbm90IGNvbXBsaWFudFxuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdjbG9zZScsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMsIHtcbiAgICAgIGNvZGU6IDAsXG4gICAgICByZWFzb246ICdVTktOT1dOJyxcbiAgICAgIHdhc0NsZWFuOiB0cnVlXG4gICAgfSkpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdlcnJvcicsIHRoaXMub25FcnJvci5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uZXJyb3IgPSB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKTtcbiAgfVxufTtcblxuV1MucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSwgY29udGludWF0aW9uKSB7XG4gIHZhciB0b1NlbmQgPSBkYXRhLnRleHQgfHwgZGF0YS5iaW5hcnkgfHwgZGF0YS5idWZmZXIsXG4gICAgZXJyY29kZSxcbiAgICBtZXNzYWdlO1xuXG4gIGlmICh0b1NlbmQpIHtcbiAgICB0cnkge1xuICAgICAgLy8gRm9yIG5vZGUuanMsIHdlIGhhdmUgdG8gZG8gd2VpcmQgYnVmZmVyIHN0dWZmXG4gICAgICBpZiAodGhpcy5pc05vZGUgJiYgdG9TZW5kIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChcbiAgICAgICAgICBuZXcgVWludDhBcnJheSh0b1NlbmQpLFxuICAgICAgICAgIHsgYmluYXJ5OiB0cnVlIH0sXG4gICAgICAgICAgdGhpcy5vbkVycm9yLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQodG9TZW5kKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAgIGVycmNvZGUgPSBcIlNZTlRBWFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyY29kZSA9IFwiSU5WQUxJRF9TVEFURVwiO1xuICAgICAgfVxuICAgICAgbWVzc2FnZSA9IGUubWVzc2FnZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyY29kZSA9IFwiQkFEX1NFTkRcIjtcbiAgICBtZXNzYWdlID0gXCJObyB0ZXh0LCBiaW5hcnksIG9yIGJ1ZmZlciBkYXRhIGZvdW5kLlwiO1xuICB9XG5cbiAgaWYgKGVycmNvZGUpIHtcbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XG4gICAgICBlcnJjb2RlOiBlcnJjb2RlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9XG59O1xuXG5XUy5wcm90b3R5cGUuZ2V0UmVhZHlTdGF0ZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKHRoaXMud2Vic29ja2V0LnJlYWR5U3RhdGUpO1xufTtcblxuV1MucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24odGhpcy53ZWJzb2NrZXQuYnVmZmVyZWRBbW91bnQpO1xufTtcblxuV1MucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbiwgY29udGludWF0aW9uKSB7XG4gIHRyeSB7XG4gICAgaWYgKGNvZGUgJiYgcmVhc29uKSB7XG4gICAgICB0aGlzLndlYnNvY2tldC5jbG9zZShjb2RlLCByZWFzb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndlYnNvY2tldC5jbG9zZSgpO1xuICAgIH1cbiAgICBjb250aW51YXRpb24oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBlcnJvckNvZGU7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgZXJyb3JDb2RlID0gXCJTWU5UQVhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JDb2RlID0gXCJJTlZBTElEX0FDQ0VTU1wiO1xuICAgIH1cbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XG4gICAgICBlcnJjb2RlOiBlcnJvckNvZGUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2VcbiAgICB9KTtcbiAgfVxufTtcblxuV1MucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uT3BlbicpO1xufTtcblxuV1MucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCwgZmxhZ3MpIHtcbiAgdmFyIGRhdGEgPSB7fTtcbiAgaWYgKHRoaXMuaXNOb2RlICYmIGZsYWdzICYmIGZsYWdzLmJpbmFyeSkge1xuICAgIGRhdGEuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQpLmJ1ZmZlcjtcbiAgfSBlbHNlIGlmICh0aGlzLmlzTm9kZSkge1xuICAgIGRhdGEudGV4dCA9IGV2ZW50O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgZGF0YS5idWZmZXIgPSBldmVudC5kYXRhO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBldmVudC5kYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGRhdGEuYmluYXJ5ID0gZXZlbnQuZGF0YTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXZlbnQuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBkYXRhLnRleHQgPSBldmVudC5kYXRhO1xuICB9XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25NZXNzYWdlJywgZGF0YSk7XG59O1xuXG5XUy5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBOb3RoaW5nIHRvIHBhc3Mgb25cbiAgLy8gU2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODgwNDI5OC8zMDA1MzlcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbkVycm9yJyk7XG59O1xuXG5XUy5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uQ2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAge2NvZGU6IGV2ZW50LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgcmVhc29uOiBldmVudC5yZWFzb24sXG4gICAgICAgICAgICAgICAgICAgICAgd2FzQ2xlYW46IGV2ZW50Lndhc0NsZWFufSk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gV1M7XG5leHBvcnRzLm5hbWUgPSAnY29yZS53ZWJzb2NrZXQnO1xuZXhwb3J0cy5zZXRTb2NrZXQgPSBmdW5jdGlvbiAoaW1wbCwgaXNOb2RlKSB7XG4gIFdTSGFuZGxlID0gaW1wbDtcbiAgbm9kZVN0eWxlID0gaXNOb2RlO1xufTtcbiIsIi8qanNoaW50IG5vZGU6dHJ1ZSovXG4vKmdsb2JhbCAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG52YXIgWGhyQ2xhc3MgPSBudWxsO1xuXG52YXIgWGhyUHJvdmlkZXIgPSBmdW5jdGlvbihjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICB0eXBlb2Ygd2luZG93LlhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICBYaHJDbGFzcyA9PT0gbnVsbCkgeyAvLyBmcmVlZG9tXG4gICAgWGhyQ2xhc3MgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICBYaHJDbGFzcyA9PT0gbnVsbCkgeyAvLyBmcmVlZG9tLWZvci1maXJlZm94XG4gICAgWGhyQ2xhc3MgPSBYTUxIdHRwUmVxdWVzdDtcbiAgfSBlbHNlIGlmIChYaHJDbGFzcyA9PT0gbnVsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJQbGF0Zm9ybSBkb2VzIG5vdCBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0XCIpO1xuICB9XG5cbiAgdGhpcy5fZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRoaXMuX3hociA9IG5ldyBYaHJDbGFzcygpO1xuXG4gIHNldFRpbWVvdXQoY2FwLnByb3ZpZGVyLm9uQ2xvc2UuYmluZChcbiAgICBjYXAucHJvdmlkZXIsXG4gICAgdGhpcyxcbiAgICB0aGlzLmFib3J0LmJpbmQodGhpcylcbiAgKSwgMCk7XG5cbiAgdGhpcy5fZXZlbnRzID0gW1xuICAgIFwibG9hZHN0YXJ0XCIsXG4gICAgXCJwcm9ncmVzc1wiLFxuICAgIFwiYWJvcnRcIixcbiAgICBcImVycm9yXCIsXG4gICAgXCJsb2FkXCIsXG4gICAgXCJ0aW1lb3V0XCIsXG4gICAgXCJsb2FkZW5kXCIsXG4gICAgXCJyZWFkeXN0YXRlY2hhbmdlXCJcbiAgXTtcbiAgdGhpcy5fc2V0dXBMaXN0ZW5lcnMoKTtcblxufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihtZXRob2QsIHVybCwgYXN5bmMsIHVzZXIsIHBhc3N3b3JkKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodHlwZW9mIGFzeW5jICE9PSBcInVuZGVmaW5lZFwiICYmIGFzeW5jICE9PSB0cnVlKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICAgIGVycmNvZGU6IFwiSW52YWxpZEFjY2Vzc0Vycm9yXCIsXG4gICAgICBtZXNzYWdlOiBcImFzeW5jIHNob3VsZCBhbHdheXMgYmUgc2V0IHRvIHRydWVcIlxuICAgIH0pO1xuICB9XG5cbiAgLy8gRm9yY2UgYXN5bmMgdG8gYmUgdHJ1ZS4gdW5kZWZpbmVkIGNhbiBsZWFkIHRvIGFzeW5jPWZhbHNlIGluIENocm9tZSBwYWNrYWdlZCBhcHBzXG4gIHRoaXMuX3hoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlLCB1c2VyLCBwYXNzd29yZCk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICB0aGlzLl94aHIuc2VuZCgpO1xuICB9IGVsc2UgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzdHJpbmdcIikpIHtcbiAgICB0aGlzLl94aHIuc2VuZChkYXRhLnN0cmluZyk7XG4gIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImJ1ZmZlclwiKSkge1xuICAgIHRoaXMuX3hoci5zZW5kKGRhdGEuYnVmZmVyKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl94aHIuc2VuZCgpO1xuICB9XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLmFib3J0KCk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlcikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIuZ2V0UmVzcG9uc2VIZWFkZXIoaGVhZGVyKSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlciwgdmFsdWUpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgdmFsdWUpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUub3ZlcnJpZGVNaW1lVHlwZSA9IGZ1bmN0aW9uKG1pbWUpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci5vdmVycmlkZU1pbWVUeXBlKG1pbWUpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVhZHlTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVhZHlTdGF0ZSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2UgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0aGlzLl94aHIucmVzcG9uc2UgPT09IG51bGwpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKG51bGwpO1xuICB9IGVsc2UgaWYgKHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwidGV4dFwiIHx8IHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHsgc3RyaW5nOiB0aGlzLl94aHIucmVzcG9uc2UgfSk7XG4gIH0gZWxzZSBpZiAodGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJhcnJheWJ1ZmZlclwiKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh7IGJ1ZmZlcjogdGhpcy5feGhyLnJlc3BvbnNlIH0pO1xuICB9IGVsc2UgaWYgKHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwianNvblwiKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh7IG9iamVjdDogdGhpcy5feGhyLnJlc3BvbnNlIH0pO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KFwiY29yZS54aHIgY2Fubm90IGRldGVybWluZSB0eXBlIG9mIHJlc3BvbnNlXCIpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVzcG9uc2VUZXh0KTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZVVSTCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVzcG9uc2VVUkwpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVzcG9uc2VUeXBlKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZXRSZXNwb25zZVR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIucmVzcG9uc2VUeXBlID0gdHlwZTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIuc3RhdHVzKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRTdGF0dXNUZXh0ID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5zdGF0dXNUZXh0KTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci50aW1lb3V0KTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZXRUaW1lb3V0ID0gZnVuY3Rpb24odGltZW91dCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0V2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci53aXRoQ3JlZGVudGlhbHMpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNldFdpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKHdjKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIud2l0aENyZWRlbnRpYWxzID0gd2M7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5fc2V0dXBMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIC8vIERvd25sb2FkIGV2ZW50c1xuICB0aGlzLl9ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5feGhyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgIH0uYmluZCh0aGlzLCBldmVudE5hbWUpLCBmYWxzZSk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgLy8gVXBsb2FkIGV2ZW50c1xuICB0aGlzLl9ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5feGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudCkge1xuICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudChcIm9udXBsb2FkXCIgKyBldmVudE5hbWUsIGV2ZW50KTtcbiAgICB9LmJpbmQodGhpcywgZXZlbnROYW1lKSwgZmFsc2UpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuZXhwb3J0cy5uYW1lID0gXCJjb3JlLnhoclwiO1xuZXhwb3J0cy5wcm92aWRlciA9IFhoclByb3ZpZGVyO1xuZXhwb3J0cy5zdHlsZSA9IFwicHJvdmlkZVByb21pc2VzXCI7XG5leHBvcnRzLmZsYWdzID0geyBwcm92aWRlcjogdHJ1ZSB9O1xuZXhwb3J0cy5zZXRJbXBsID0gZnVuY3Rpb24oaW1wbCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgWGhyQ2xhc3MgPSBpbXBsO1xufTtcbiIsIi8qanNsaW50IGluZGVudDoyLGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIG9BdXRoUmVkaXJlY3RJZCA9ICdmcmVlZG9tLm9hdXRoLnJlZGlyZWN0LmhhbmRsZXInO1xuXG52YXIgbG9hZGVkT25TdGFydHVwID0gZmFsc2U7XG4vKipcbiAqIElmIHRoZXJlIGlzIHJlZGlyZWN0aW9uIGJhY2sgdG8gdGhlIHBhZ2UsIGFuZCBvQXV0aFJlZGlyZWN0SUQgaXMgc2V0LFxuICogdGhlbiByZXBvcnQgdGhlIGF1dGggYW5kIGNsb3NlIHRoZSB3aW5kb3cuXG4gKi9cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uICYmXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgbG9hZGVkT25TdGFydHVwID0gdHJ1ZTtcbiAgfSwgdHJ1ZSk7XG5cbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UgJiZcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2Yob0F1dGhSZWRpcmVjdElkKSA+IDApIHtcbiAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciBhICdzdG9yYWdlJyBldmVudCBvbiB0aGUgd2luZG93LiBTZWUgc3RvcmFnZUxpc3RlbmVyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG9BdXRoUmVkaXJlY3RJZCwgbmV3IERhdGUoKSk7XG4gICAgd2luZG93LmNsb3NlKCk7XG4gIH1cbn1cblxudmFyIExvY2FsUGFnZUF1dGggPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMubGlzdGVuZXJzID0ge307XG59O1xuXG4vKipcbiAqIEluZGljYXRlIHRoZSBpbnRlbnRpb24gdG8gaW5pdGlhdGUgYW4gb0F1dGggZmxvdywgYWxsb3dpbmcgYW4gYXBwcm9wcmlhdGVcbiAqIG9BdXRoIHByb3ZpZGVyIHRvIGJlZ2luIG1vbml0b3JpbmcgZm9yIHJlZGlyZWN0aW9uLlxuICpcbiAqIEBtZXRob2QgaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcmVkaXJlY3RVUklzIC0gb0F1dGggcmVkaXJlY3Rpb24gVVJJcyByZWdpc3RlcmVkIHdpdGggdGhlXG4gKiAgICAgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIHZhbHVlIG9mIHNjaGVtYToge3tyZWRpcmVjdDpTdHJpbmcsIHN0YXRlOlN0cmluZ319XG4gKiAgICB3aGVyZSAncmVkaXJlY3QnIGlzIHRoZSBjaG9zZW4gcmVkaXJlY3QgVVJJXG4gKiAgICBhbmQgJ3N0YXRlJyBpcyB0aGUgc3RhdGUgdG8gcGFzcyB0byB0aGUgVVJJIG9uIGNvbXBsZXRpb24gb2Ygb0F1dGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2FuIGhhbmRsZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbkxvY2FsUGFnZUF1dGgucHJvdG90eXBlLmluaXRpYXRlT0F1dGggPSBmdW5jdGlvbihyZWRpcmVjdFVSSXMsIGNvbnRpbnVhdGlvbikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyAmJiBsb2FkZWRPblN0YXJ0dXApIHtcbiAgICB2YXIgaGVyZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmIChyZWRpcmVjdFVSSXMuaW5kZXhPZihoZXJlKSA+IC0xKSB7XG4gICAgICBjb250aW51YXRpb24oe1xuICAgICAgICByZWRpcmVjdDogaGVyZSxcbiAgICAgICAgc3RhdGU6IG9BdXRoUmVkaXJlY3RJZCArIE1hdGgucmFuZG9tKClcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBvQXV0aCBjbGllbnQtc2lkZSBmbG93IC0gbGF1bmNoIHRoZSBwcm92aWRlZCBVUkxcbiAqIFRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgaW5pdGlhdGVPQXV0aCB3aXRoIHRoZSByZXR1cm5lZCBzdGF0ZSBvYmplY3RcbiAqXG4gKiBAbWV0aG9kIGxhdW5jaEF1dGhGbG93XG4gKiBAcGFyYW0ge1N0cmluZ30gYXV0aFVybCAtIFRoZSBVUkwgdGhhdCBpbml0aWF0ZXMgdGhlIGF1dGggZmxvdy5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IHN0YXRlT2JqIC0gVGhlIHJldHVybiB2YWx1ZSBmcm9tIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgU3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHJlc3BvbnNlIFVybCBjb250YWluaW5nIHRoZSBhY2Nlc3MgdG9rZW5cbiAqL1xuTG9jYWxQYWdlQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgbGlzdGVuZXIgPSB0aGlzLnN0b3JhZ2VMaXN0ZW5lci5iaW5kKHRoaXMsIGNvbnRpbnVhdGlvbiwgc3RhdGVPYmopO1xuICB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0gPSBsaXN0ZW5lcjtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIFN0YXJ0ICdlciB1cFxuICB3aW5kb3cub3BlbihhdXRoVXJsKTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc3RvcmFnZSBldmVudHMsIHdoaWNoIHJlbGF5cyB0aGVtIHRvIHdhaXRpbmcgY2xpZW50cy5cbiAqIEZvciB0aGUgc2NoZW1hIG9mIHRoZSBzdG9yYWdlIG1zZywgc2VlOlxuICogaHR0cDovL3R1dG9yaWFscy5qZW5rb3YuY29tL2h0bWw1L2xvY2FsLXN0b3JhZ2UuaHRtbCNzdG9yYWdlLWV2ZW50c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIGZ1bmN0aW9uIHRvIGNhbGwgd2l0aCByZXN1bHRcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IHN0YXRlT2JqIHRoZSByZXR1cm4gdmFsdWUgZnJvbSBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge09iamVjdH0gbXNnIHN0b3JhZ2UgZXZlbnRcbiAqL1xuTG9jYWxQYWdlQXV0aC5wcm90b3R5cGUuc3RvcmFnZUxpc3RlbmVyID0gZnVuY3Rpb24oY29udGludWF0aW9uLCBzdGF0ZU9iaiwgbXNnKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKG1zZy51cmwuaW5kZXhPZihzdGF0ZU9iai5zdGF0ZSkgPiAtMSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0sIGZhbHNlKTtcbiAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdO1xuICAgIGNvbnRpbnVhdGlvbihtc2cudXJsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBJZiB3ZSBoYXZlIGEgbG9jYWwgZG9tYWluLCBhbmQgZnJlZWRvbS5qcyBpcyBsb2FkZWQgYXQgc3RhcnR1cCwgd2UgY2FuIHVzZVxuICogdGhlIGxvY2FsIHBhZ2UgYXMgYSByZWRpcmVjdCBVUkkuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gTG9jYWxQYWdlQXV0aDtcbiIsIi8qanNsaW50IGluZGVudDoyLGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIG9BdXRoUmVkaXJlY3RJZCA9ICdmcmVlZG9tLm9hdXRoLnJlZGlyZWN0LmhhbmRsZXInO1xuXG5mdW5jdGlvbiBSZW1vdGVQYWdlQXV0aCgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMubGlzdGVuZXJzID0ge307XG59XG5cbi8qKlxuICogSW5kaWNhdGUgdGhlIGludGVudGlvbiB0byBpbml0aWF0ZSBhbiBvQXV0aCBmbG93LCBhbGxvd2luZyBhbiBhcHByb3ByaWF0ZVxuICogb0F1dGggcHJvdmlkZXIgdG8gYmVnaW4gbW9uaXRvcmluZyBmb3IgcmVkaXJlY3Rpb24uXG4gKlxuICogQG1ldGhvZCBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSByZWRpcmVjdFVSSXMgLSBvQXV0aCByZWRpcmVjdGlvbiBVUklzIHJlZ2lzdGVyZWQgd2l0aCB0aGVcbiAqICAgICBwcm92aWRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgdmFsdWUgb2Ygc2NoZW1hOiB7e3JlZGlyZWN0OlN0cmluZywgc3RhdGU6U3RyaW5nfX1cbiAqICAgIHdoZXJlICdyZWRpcmVjdCcgaXMgdGhlIGNob3NlbiByZWRpcmVjdCBVUklcbiAqICAgIGFuZCAnc3RhdGUnIGlzIHRoZSBzdGF0ZSB0byBwYXNzIHRvIHRoZSBVUkkgb24gY29tcGxldGlvbiBvZiBvQXV0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjYW4gaGFuZGxlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuUmVtb3RlUGFnZUF1dGgucHJvdG90eXBlLmluaXRpYXRlT0F1dGggPSBmdW5jdGlvbihyZWRpcmVjdFVSSXMsIGNvbnRpbnVhdGlvbikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbCAmJiBnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICBmb3IgKHZhciBpPTA7IGk8cmVkaXJlY3RVUklzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgcmVzdHJpY3Rpb24gb24gVVJMIHBhdHRlcm4gbWF0Y2guXG4gICAgICBpZiAoKHJlZGlyZWN0VVJJc1tpXS5pbmRleE9mKCdodHRwOi8vJykgPT09IDAgfHxcbiAgICAgICAgICByZWRpcmVjdFVSSXNbaV0uaW5kZXhPZignaHR0cHM6Ly8nKSA9PT0gMCkgJiZcbiAgICAgICAgICByZWRpcmVjdFVSSXNbaV0uaW5kZXhPZignb2F1dGgtcmVsYXkuaHRtbCcpID4gMCkge1xuICAgICAgICBjb250aW51YXRpb24oe1xuICAgICAgICAgIHJlZGlyZWN0OiByZWRpcmVjdFVSSXNbaV0sXG4gICAgICAgICAgc3RhdGU6IG9BdXRoUmVkaXJlY3RJZCArIE1hdGgucmFuZG9tKClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5SZW1vdGVQYWdlQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgZnJhbWUgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIGZyYW1lLnNyYyA9IHN0YXRlT2JqLnJlZGlyZWN0O1xuICBmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGdsb2JhbC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0gPSBjb250aW51YXRpb247XG4gICAgd2luZG93Lm9wZW4oYXV0aFVybCk7XG5cbiAgICBmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHN0YXRlT2JqLnN0YXRlLCAnKicpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGZyYW1lLCBtc2cpIHtcbiAgICBpZiAobXNnLmRhdGEgJiYgbXNnLmRhdGEua2V5ICYmIG1zZy5kYXRhLnVybCAmJiB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldKG1zZy5kYXRhLnVybCk7XG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbbXNnLmRhdGEua2V5XTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZnJhbWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcywgZnJhbWUpLCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIElmIHdlIGhhdmUgYSBsb2NhbCBkb21haW4sIGFuZCBmcmVlZG9tLmpzIGlzIGxvYWRlZCBhdCBzdGFydHVwLCB3ZSBjYW4gdXNlXG4gKiB0aGUgbG9jYWwgcGFnZSBhcyBhIHJlZGlyZWN0IFVSSS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBSZW1vdGVQYWdlQXV0aDtcbiIsIi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxuLyoqXG4gKiBUaGUgQVBJIHJlZ2lzdHJ5IGZvciBmcmVlZG9tLmpzLiAgVXNlZCB0byBsb29rIHVwIHJlcXVlc3RlZCBBUElzLFxuICogYW5kIHByb3ZpZGVzIGEgYnJpZGdlIGZvciBjb3JlIEFQSXMgdG8gYWN0IGxpa2Ugbm9ybWFsIEFQSXMuXG4gKiBAQ2xhc3MgQVBJXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBUaGUgZGVidWdnZXIgdG8gdXNlIGZvciBsb2dnaW5nLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBBcGkgPSBmdW5jdGlvbihkZWJ1Zykge1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIHRoaXMuYXBpcyA9IHt9O1xuICB0aGlzLnByb3ZpZGVycyA9IHt9O1xuICB0aGlzLndhaXRlcnMgPSB7fTtcbn07XG5cbi8qKlxuICogR2V0IGFuIEFQSS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gYXBpIFRoZSBBUEkgbmFtZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7e25hbWU6U3RyaW5nLCBkZWZpbml0aW9uOkFQSX19IFRoZSBBUEkgaWYgcmVnaXN0ZXJlZC5cbiAqL1xuQXBpLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihhcGkpIHtcbiAgaWYgKCF0aGlzLmFwaXNbYXBpXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGFwaSxcbiAgICBkZWZpbml0aW9uOiB0aGlzLmFwaXNbYXBpXVxuICB9O1xufTtcblxuLyoqXG4gKiBTZXQgYW4gQVBJIHRvIGEgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgQVBJIG5hbWUuXG4gKiBAcGFyYW0ge0FQSX0gZGVmaW5pdGlvbiBUaGUgSlNPTiBvYmplY3QgZGVmaW5pbmcgdGhlIEFQSS5cbiAqL1xuQXBpLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCBkZWZpbml0aW9uKSB7XG4gIHRoaXMuYXBpc1tuYW1lXSA9IGRlZmluaXRpb247XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgY29yZSBBUEkgcHJvdmlkZXIuXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSB0aGUgQVBJIG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvciB0aGUgZnVuY3Rpb24gdG8gY3JlYXRlIGEgcHJvdmlkZXIgZm9yIHRoZSBBUEkuXG4gKiBAcGFyYW0ge1N0cmluZz99IHN0eWxlIFRoZSBzdHlsZSB0aGUgcHJvdmlkZXIgaXMgd3JpdHRlbiBpbi4gVmFsaWQgc3R5bGVzXG4gKiAgIGFyZSBkb2N1bWVudGVkIGluIGZkb20ucG9ydC5Qcm92aWRlci5wcm90b3R5cGUuZ2V0SW50ZXJmYWNlLiBEZWZhdWx0cyB0b1xuICogICBwcm92aWRlQXN5bmNocm9ub3VzXG4gKiBAcGFyYW0ge09iamVjdD99IGZsYWdzIFByZWZpeGVkIGFyZ3VtZW50cyBuZWVkZWQgYnkgdGhlIGNvcmUgcHJvdmlkZXIuXG4gKiAgIHZhbGlkIGtleXMgYXJlICdtb2R1bGUnLCAncHJvdmlkZXInLCBhbmQgJ2NvbmZpZycuXG4gKi9cbkFwaS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbihuYW1lLCBjb25zdHJ1Y3Rvciwgc3R5bGUsIGZsYWdzKSB7XG4gIHZhciBpLFxuICAgIGFyZ3M7XG5cbiAgdGhpcy5wcm92aWRlcnNbbmFtZV0gPSB7XG4gICAgY29uc3RydWN0b3I6IGNvbnN0cnVjdG9yLFxuICAgIHN0eWxlOiBzdHlsZSB8fCAncHJvdmlkZUFzeW5jaHJvbm91cycsXG4gICAgZmxhZ3M6IGZsYWdzIHx8IHt9XG4gIH07XG5cbiAgaWYgKHRoaXMud2FpdGVyc1tuYW1lXSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLndhaXRlcnNbbmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICAgIGlmIChmbGFncy5tb2R1bGUpIHtcbiAgICAgICAgYXJncy5tb2R1bGUgPSB0aGlzLndhaXRlcnNbbmFtZV1baV0uZnJvbTtcbiAgICAgIH1cbiAgICAgIGlmIChmbGFncy5jb25maWcpIHtcbiAgICAgICAgYXJncy5jb25maWcgPSB0aGlzLndhaXRlcnNbbmFtZV1baV0uZnJvbS5jb25maWc7XG4gICAgICB9XG4gICAgICB0aGlzLndhaXRlcnNbbmFtZV1baV0ucmVzb2x2ZSh7XG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgIGluc3Q6IGNvbnN0cnVjdG9yLmJpbmQoe30sIGFyZ3MpXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMud2FpdGVyc1tuYW1lXTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYSBjb3JlIEFQSSBjb25uZWN0ZWQgdG8gYSBnaXZlbiBGcmVlRE9NIG1vZHVsZS5cbiAqIEBtZXRob2QgZ2V0Q29yZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIEFQSSB0byByZXRyaWV2ZS5cbiAqIEBwYXJhbSB7TW9kdWxlfSBmcm9tIFRoZSBpbnN0YW50aWF0aW5nIEFwcC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2Ugb2YgYSBmZG9tLkFwcCBsb29rLWFsaWtlIChhbmQgYXJndW1lbnQgb2JqZWN0KSxcbiAqIG1hdGNoaW5nIGEgbG9jYWwgQVBJIGRlZmluaXRpb24uXG4gKi9cbkFwaS5wcm90b3R5cGUuZ2V0Q29yZSA9IGZ1bmN0aW9uKG5hbWUsIGZyb20pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0aGlzLmFwaXNbbmFtZV0pIHtcbiAgICAgIGlmICh0aGlzLnByb3ZpZGVyc1tuYW1lXSkge1xuICAgICAgICB2YXIgYXJncyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5wcm92aWRlcnNbbmFtZV0uZmxhZ3MubW9kdWxlKSB7XG4gICAgICAgICAgYXJncy5tb2R1bGUgPSBmcm9tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVyc1tuYW1lXS5mbGFncy5jb25maWcpIHtcbiAgICAgICAgICBhcmdzLmNvbmZpZyA9IGZyb20uY29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgaW5zdDogdGhpcy5wcm92aWRlcnNbbmFtZV0uY29uc3RydWN0b3IuYmluZCh7fSwgYXJncylcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMud2FpdGVyc1tuYW1lXSkge1xuICAgICAgICAgIHRoaXMud2FpdGVyc1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2FpdGVyc1tuYW1lXS5wdXNoKHtcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgIGZyb206IGZyb21cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignQXBpLmdldENvcmUgYXNrZWQgZm9yIHVua25vd24gY29yZTogJyArIG5hbWUpO1xuICAgICAgcmVqZWN0KG51bGwpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQ29uZmlndXJlIGEge1Byb3ZpZGVyfSB0byBwcm92aWRlIGEgbmFtZWQgY29yZSBhcGkgb24gYmVoYWxmIG9mIGFcbiAqIGdpdmVuIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvdmlkZXJcbiAqIEBwYXJhbSB7UHJvdmlkZXJ9IHByb3ZpZGVyIFRoZSBwcm92aWRlciB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgbmFtZWQgYXBpXG4gKiBAcGFyYW0ge01vZHVsZX0gZnJvbSBUaGUgbW9kdWxlIHJlcXVlc3RpbmcgdGhlIGNvcmUgcHJvdmlkZXIuXG4gKi9cbkFwaS5wcm90b3R5cGUucHJvdmlkZUNvcmUgPSBmdW5jdGlvbiAobmFtZSwgcHJvdmlkZXIsIGZyb20pIHtcbiAgcmV0dXJuIHRoaXMuZ2V0Q29yZShuYW1lLCBmcm9tKS50aGVuKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgdmFyIGZsYWdzID0gdGhpcy5wcm92aWRlcnNbbmFtZV0uZmxhZ3MsXG4gICAgICBpZmFjZSA9IHByb3ZpZGVyLmdldFByb3h5SW50ZXJmYWNlKCk7XG4gICAgaWYgKGZsYWdzLnByb3ZpZGVyKSB7XG4gICAgICBjb3JlLmFyZ3MucHJvdmlkZXIgPSBpZmFjZTtcbiAgICB9XG4gICAgaWZhY2UoKVt0aGlzLnByb3ZpZGVyc1tuYW1lXS5zdHlsZV0oY29yZS5pbnN0KTtcbiAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcignQ291bGQgbm90IHByb3ZpZGUgY29yZTogJywgZXJyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogU2h1dGRvd24gdGhlIEFQSSByZWdpc3RyeSwgYW5kIHJlamVjdCBhbnkgcGVuZGluZyB3YWl0ZXJzLlxuICovXG5BcGkucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm9wLFxuICAgIGRvUmVqZWN0ID0gZnVuY3Rpb24gKHdhaXRlcikge1xuICAgICAgd2FpdGVyLnJlamVjdCgpO1xuICAgIH07XG4gIGZvciAocHJvcCBpbiB0aGlzLndhaXRlcnMpIHtcbiAgICBpZiAodGhpcy53YWl0ZXJzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICB0aGlzLndhaXRlcnNbcHJvcF0uZm9yRWFjaChkb1JlamVjdCk7XG4gICAgfVxuICB9XG4gIGRlbGV0ZSB0aGlzLndhaXRlcnM7XG59O1xuXG4vKipcbiAqIERlZmluZXMgdGhlIGFwaXMgbW9kdWxlIGFuZCBwcm92aWRlciByZWdpc3RyeS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBBcGk7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUgKi9cblxudmFyIEJ1bmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0aGlzLmludGVyZmFjZXMgPSByZXF1aXJlKCcuLi9kaXN0L2J1bmRsZS5jb21waWxlZCcpO1xufTtcblxuLyoqXG4gKiBQb3B1bGF0ZSBhbiBBUEkgcmVnaXN0cnkgd2l0aCBwcm92aWRlZCBwcm92aWRlcnMsIGFuZCB3aXRoIGtub3duIEFQSVxuICogZGVmaW5pdGlvbnMuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge3tuYW1lOiBzdHJpbmcsIHByb3ZpZGVyOiBGdW5jdGlvbiwgc3R5bGU/OiBzdHJpbmd9W119IHByb3ZpZGVyc1xuICogICBUaGUgY29yZSBwcm92aWRlcnMgbWFkZSBhdmFpbGFibGUgdG8gdGhpcyBmcmVlZG9tLmpzIGluc3RhbmNlLlxuICogQHBhcmFtIHtBcGl9IHJlZ2lzdHJ5IFRoZSBBUEkgcmVnaXN0cnkgdG8gcG9wdWxhdGUuXG4gKi9cbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAocHJvdmlkZXJzLCByZWdpc3RyeSkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBidW5kbGUgPSBuZXcgQnVuZGxlKCk7XG4gIGJ1bmRsZS5pbnRlcmZhY2VzLmZvckVhY2goZnVuY3Rpb24gKGFwaSkge1xuICAgIGlmIChhcGkgJiYgYXBpLm5hbWUgJiYgYXBpLmFwaSkge1xuICAgICAgcmVnaXN0cnkuc2V0KGFwaS5uYW1lLCBhcGkuYXBpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHByb3ZpZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgIGlmIChwcm92aWRlci5uYW1lKSB7XG4gICAgICByZWdpc3RyeS5yZWdpc3Rlcihwcm92aWRlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLmZsYWdzKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8qZ2xvYmFscyBCbG9iLCBBcnJheUJ1ZmZlciwgRGF0YVZpZXcgKi9cbi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbSBwb3J0IGZvciBhIHVzZXItYWNjZXNzYWJsZSBhcGkuXG4gKiBAY2xhc3MgQ29uc3VtZXJcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQHBhcmFtIHtPYmplY3R9IGludGVyZmFjZUNscyBUaGUgYXBpIGludGVyZmFjZSBleHBvc2VkIGJ5IHRoaXMgY29uc3VtZXIuXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBUaGUgZGVidWdnZXIgdG8gdXNlIGZvciBsb2dnaW5nLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBDb25zdW1lciA9IGZ1bmN0aW9uIChpbnRlcmZhY2VDbHMsIGRlYnVnKSB7XG4gIHRoaXMuaWQgPSBDb25zdW1lci5uZXh0SWQoKTtcbiAgdGhpcy5pbnRlcmZhY2VDbHMgPSBpbnRlcmZhY2VDbHM7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gIFxuICB0aGlzLmlmYWNlcyA9IHt9O1xuICB0aGlzLmNsb3NlSGFuZGxlcnMgPSB7fTtcbiAgdGhpcy5lcnJvckhhbmRsZXJzID0ge307XG4gIHRoaXMuZW1pdHMgPSB7fTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBpbmNvbWluZyBtZXNzYWdlcyBmb3IgdGhpcyBjb25zdW1lci5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgcmVjZWl2ZWQgbWVzc2FnZS5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChzb3VyY2UsIG1lc3NhZ2UpIHtcbiAgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UucmV2ZXJzZSkge1xuICAgIHRoaXMuZW1pdENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5lbWl0KHRoaXMuZW1pdENoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICBkZWxldGUgdGhpcy5jb250cm9sQ2hhbm5lbDtcbiAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXRoaXMuZW1pdENoYW5uZWwgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmVtaXRDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY2xvc2UnICYmIG1lc3NhZ2UudG8pIHtcbiAgICAgIHRoaXMudGVhcmRvd24obWVzc2FnZS50byk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIHRoaXMuZXJyb3IobWVzc2FnZS50bywgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudG8pIHtcbiAgICAgIGlmICh0aGlzLmVtaXRzW21lc3NhZ2UudG9dKSB7XG4gICAgICAgIHRoaXMuZW1pdHNbbWVzc2FnZS50b10oJ21lc3NhZ2UnLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdDb3VsZCBub3QgZGVsaXZlciBtZXNzYWdlLCBubyBzdWNoIGludGVyZmFjZTogJyArIG1lc3NhZ2UudG8pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbXNnID0gbWVzc2FnZS5tZXNzYWdlO1xuICAgICAgdXRpbC5lYWNoUHJvcCh0aGlzLmVtaXRzLCBmdW5jdGlvbiAoaWZhY2UpIHtcbiAgICAgICAgaWZhY2UoJ21lc3NhZ2UnLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGNvbnN1bWVyLkludGVyZmFjZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb25zdW1lci5cbiAqIEFuIGludGVyZmFjZSBpcyByZXR1cm5lZCwgd2hpY2ggaXMgc3VwcGxpZWQgd2l0aCBpbXBvcnRhbnQgY29udHJvbCBvZiB0aGVcbiAqIGFwaSB2aWEgY29uc3RydWN0b3IgYXJndW1lbnRzOiAoYm91bmQgYmVsb3cgaW4gZ2V0SW50ZXJmYWNlQ29uc3RydWN0b3IpXG4gKiBcbiAqIG9uTXNnOiBmdW5jdGlvbihiaW5kZXIpIHNldHMgdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBtZXNzYWdlcyBmb3IgdGhpc1xuICogICAgaW50ZXJmYWNlIGFycml2ZSBvbiB0aGUgY2hhbm5lbCxcbiAqIGVtaXQ6IGZ1bmN0aW9uKG1zZykgYWxsb3dzIHRoaXMgaW50ZXJmYWNlIHRvIGVtaXQgbWVzc2FnZXMsXG4gKiBpZDogc3RyaW5nIGlzIHRoZSBJZGVudGlmaWVyIGZvciB0aGlzIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5nZXRJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBJZmFjZSA9IHRoaXMuZ2V0SW50ZXJmYWNlQ29uc3RydWN0b3IoKSxcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgSWZhY2UgPSBJZmFjZS5iaW5kLmFwcGx5KElmYWNlLCBbSWZhY2VdLmNvbmNhdChhcmdzKSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBJZmFjZSgpO1xufTtcblxuLyoqXG4gKiBBdHRhY2ggYW4gJ29uRXZlbnQnIGxpc3RlbmVyIHRvIGFuIGludGVyZmFjZSwgYWxsb3dpbmcgZXh0ZXJuYWwgY29uc3VtZXJzXG4gKiB0byBlaXRoZXIgbGlzdGVuIHRvIGNoYW5uZWwgc3RhdGUsIG9yIHJlZ2lzdGVyIGNhbGxiYWNrcyBvbiBsaWZldGltZSBldmVudHNcbiAqIG9mIGluZGl2aWR1YWwgaW5zdGFuY2VzIG9mIHRoZSBpbnRlcmZhY2UuXG4gKiBAbWV0aG9kIGdldExpc3RlbmVyXG4gKiBAcGFybWEge1N0cmluZ30gbmFtZSBUaGUgZXZlbnQgdG8gbGlzdGVuIHRvLlxuICogQHByaXZhdGVcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnN0YW5jZSwgaGFuZGxlcikge1xuICAgIC8vIExpc3RlbiB0byB0aGUgY2hhbm5lbCBkaXJlY3RseS5cbiAgICBpZiAodHlwZW9mIGluc3RhbmNlID09PSAnZnVuY3Rpb24nICYmIGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbmNlKG5hbWUsIGluc3RhbmNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gdG8gYSBzcGVjaWZpYyBpbnN0YW5jZS5cbiAgICB2YXIgaGFuZGxlcnMgPSBuYW1lICsgJ0hhbmRsZXJzJztcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoY2FuZGlkYXRlLCBpZCkge1xuICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcnNdW2lkXSkge1xuICAgICAgICAgIHRoaXNbaGFuZGxlcnNdW2lkXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNbaGFuZGxlcnNdW2lkXSA9IFtoYW5kbGVyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGludGVyZmFjZXMgZnJvbSB0aGlzIGFwaSBjb25zdW1lclxuICogZnJvbSBhIHVzZXItdmlzaWJsZSBwb2ludC5cbiAqIEBtZXRob2QgZ2V0UHJveHlJbnRlcmZhY2VcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldFByb3h5SW50ZXJmYWNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZnVuYyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBwLmdldEludGVyZmFjZS5hcHBseShwLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHAuZ2V0SW50ZXJmYWNlKCk7XG4gICAgfVxuICB9LmJpbmQoe30sIHRoaXMpO1xuXG4gIGZ1bmMuY2xvc2UgPSBmdW5jdGlvbiAoaWZhY2UpIHtcbiAgICBpZiAoaWZhY2UpIHtcbiAgICAgIHV0aWwuZWFjaFByb3AodGhpcy5pZmFjZXMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICAgIGlmIChjYW5kaWRhdGUgPT09IGlmYWNlKSB7XG4gICAgICAgICAgdGhpcy50ZWFyZG93bihpZCk7XG4gICAgICAgICAgdGhpcy5lbWl0KHRoaXMuZW1pdENoYW5uZWwsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICB0bzogaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2xvc2UgdGhlIGNoYW5uZWwuXG4gICAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKTtcblxuICBmdW5jLm9uQ2xvc2UgPSB0aGlzLmdldExpc3RlbmVyKCdjbG9zZScpO1xuICBmdW5jLm9uRXJyb3IgPSB0aGlzLmdldExpc3RlbmVyKCdlcnJvcicpO1xuXG4gIHJldHVybiBmdW5jO1xufTtcblxuLyoqXG4gKiBQcm92aWRlcyBhIGJvdW5kIGNsYXNzIGZvciBjcmVhdGluZyBhIGNvbnN1bWVyLkludGVyZmFjZSBhc3NvY2lhdGVkXG4gKiB3aXRoIHRoaXMgYXBpLiBUaGlzIHBhcnRpYWwgbGV2ZWwgb2YgY29uc3RydWN0aW9uIGNhbiBiZSB1c2VkXG4gKiB0byBhbGxvdyB0aGUgY29uc3VtZXIgdG8gYmUgdXNlZCBhcyBhIHByb3ZpZGVyIGZvciBhbm90aGVyIEFQSS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlQ29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5nZXRJbnRlcmZhY2VDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gQ29uc3VtZXIubmV4dElkKCk7XG4gIHJldHVybiB0aGlzLmludGVyZmFjZUNscy5iaW5kKFxuICAgIHt9LFxuICAgIGZ1bmN0aW9uIChpZCwgb2JqLCBiaW5kZXIpIHtcbiAgICAgIHRoaXMuaWZhY2VzW2lkXSA9IG9iajtcbiAgICAgIHRoaXMuZW1pdHNbaWRdID0gYmluZGVyO1xuICAgIH0uYmluZCh0aGlzLCBpZCksXG4gICAgdGhpcy5kb0VtaXQuYmluZCh0aGlzLCBpZCksXG4gICAgdGhpcy5kZWJ1Z1xuICApO1xufTtcblxuLyoqXG4gKiBFbWl0IGEgbWVzc2FnZSBvbiB0aGUgY2hhbm5lbCBvbmNlIHNldHVwIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBkb0VtaXRcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdG8gVGhlIElEIG9mIHRoZSBmbG93IHNlbmRpbmcgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbXNnIFRoZSBtZXNzYWdlIHRvIGVtaXRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxsIFNlbmQgbWVzc2FnZSB0byBhbGwgcmVjaXBpZW50cy5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmRvRW1pdCA9IGZ1bmN0aW9uICh0bywgbXNnLCBhbGwpIHtcbiAgaWYgKGFsbCkge1xuICAgIHRvID0gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge3RvOiB0bywgdHlwZTogJ21lc3NhZ2UnLCBtZXNzYWdlOiBtc2d9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm9uY2UoJ3N0YXJ0JywgdGhpcy5kb0VtaXQuYmluZCh0aGlzLCB0bywgbXNnKSk7XG4gIH1cbn07XG5cbi8qKlxuICogVGVhcmRvd24gYSBzaW5nbGUgaW50ZXJmYWNlIG9mIHRoaXMgYXBpLlxuICogQG1ldGhvZCB0ZWFyZG93blxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgaW50ZXJmYWNlIHRvIHRlYXIgZG93bi5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gIGlmICh0aGlzLmVtaXRzW2lkXSkge1xuICAgIHRoaXMuZW1pdHNbaWRdKCdjbG9zZScpO1xuICB9XG4gIGRlbGV0ZSB0aGlzLmVtaXRzW2lkXTtcbiAgaWYgKHRoaXMuY2xvc2VIYW5kbGVyc1tpZF0pIHtcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuY2xvc2VIYW5kbGVyc1tpZF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBwcm9wKCk7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuaWZhY2VzW2lkXTtcbiAgZGVsZXRlIHRoaXMuY2xvc2VIYW5kbGVyc1tpZF07XG4gIGRlbGV0ZSB0aGlzLmVycm9ySGFuZGxlcnNbaWRdO1xufTtcblxuLyoqXG4gKiBIYW5kbGUgYSBtZXNzYWdlIGVycm9yIHJlcG9ydGVkIHRvIHRoaXMgYXBpLlxuICogQG1ldGhvZCBlcnJvclxuICogQHBhcmFtIHtTdHJpbmc/fSBpZCBUaGUgaWQgb2YgdGhlIGludGVyZmFjZSB3aGVyZSB0aGUgZXJyb3Igb2NjdXJlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIHdoaWNoIGZhaWxlZCwgaWYgcmVsZXZhbnQuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChpZCwgbWVzc2FnZSkge1xuICBpZiAoaWQgJiYgdGhpcy5lcnJvckhhbmRsZXJzW2lkXSkge1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5lcnJvckhhbmRsZXJzW2lkXSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHByb3AobWVzc2FnZSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIWlkKSB7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIG1lc3NhZ2UpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ2xvc2UgLyB0ZWFyZG93biB0aGUgZmxvdyB0aGlzIGFwaSB0ZXJtaW5hdGVzLlxuICogQG1ldGhvZCBkb0Nsb3NlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICB0eXBlOiAnQ2hhbm5lbCBDbG9zaW5nJyxcbiAgICAgIHJlcXVlc3Q6ICdjbG9zZSdcbiAgICB9KTtcbiAgfVxuXG4gIHV0aWwuZWFjaFByb3AodGhpcy5lbWl0cywgZnVuY3Rpb24gKGVtaXQsIGlkKSB7XG4gICAgdGhpcy50ZWFyZG93bihpZCk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICB0aGlzLm9mZigpO1xuXG4gIHRoaXMuZW1pdENoYW5uZWwgPSBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiBUaGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5Db25zdW1lci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgcmV0dXJuIFwiW0NvbnN1bWVyIFwiICsgdGhpcy5lbWl0Q2hhbm5lbCArIFwiXVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlt1bmJvdW5kIENvbnN1bWVyXVwiO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbmV4dCBJRCBmb3IgYW4gYXBpIGNoYW5uZWwuXG4gKiBAbWV0aG9kIG5leHRJZFxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqL1xuQ29uc3VtZXIubmV4dElkID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIUNvbnN1bWVyLmlkKSB7XG4gICAgQ29uc3VtZXIuaWQgPSAxO1xuICB9XG4gIHJldHVybiAoQ29uc3VtZXIuaWQgKz0gMSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJ1Y3R1cmVkIGRhdGEgc3RydWN0dXJlIGludG8gYSBtZXNzYWdlIHN0cmVhbSBjb25mb3JtaW5nIHRvXG4gKiBhIHRlbXBsYXRlIGFuZCBhbiBhcnJheSBvZiBiaW5hcnkgZGF0YSBlbGVtZW50cy5cbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgbWVzc2FnZVRvUG9ydGFibGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgdG8gY29uZm9ybSB0b1xuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSBpbnN0YW5jZSBvZiB0aGUgZGF0YSBzdHJ1Y3R1cmUgdG8gY29uZnJvbVxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBmb3IgZXJyb3JzLlxuICogQHJldHVybiB7e3RleHQ6IE9iamVjdCwgYmluYXJ5OiBBcnJheX19IFNlcGFyYXRlZCBkYXRhIHN0cmVhbXMuXG4gKi9cbkNvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlID0gZnVuY3Rpb24gKHRlbXBsYXRlLCB2YWx1ZSwgZGVidWcpIHtcbiAgdmFyIGV4dGVybmFscyA9IFtdLFxuICAgIG1lc3NhZ2UgPSBDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlLCB2YWx1ZSwgZXh0ZXJuYWxzLCB0cnVlLCBkZWJ1Zyk7XG4gIHJldHVybiB7XG4gICAgdGV4dDogbWVzc2FnZSxcbiAgICBiaW5hcnk6IGV4dGVybmFsc1xuICB9O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IFN0cnVjdHVyZWQgRGF0YSBzdHJlYW1zIGludG8gYSBkYXRhIHN0cnVjdHVyZSBjb25mb3JtaW5nIHRvIGFcbiAqIHRlbXBsYXRlLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCBwb3J0YWJsZVRvTWVzc2FnZVxuICogQHBhcmFtIHtPYmplY3R9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSB0byBjb25mb3JtIHRvXG4gKiBAcGFyYW0ge3t0ZXh0OiBPYmplY3QsIGJpbmFyeTogQXJyYXl9fSBzdHJlYW1zIFRoZSBzdHJlYW1zIHRvIGNvbmZvcm1cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIEEgZGVidWdnZXIgZm9yIGVycm9ycy5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGRhdGEgc3RydWN0dXJlIG1hdGNoaW5nIHRoZSB0ZW1wbGF0ZS5cbiAqL1xuQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UgPSBmdW5jdGlvbiAodGVtcGxhdGUsIHN0cmVhbXMsIGRlYnVnKSB7XG4gIHJldHVybiBDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlLCBzdHJlYW1zLnRleHQsIHN0cmVhbXMuYmluYXJ5LCBmYWxzZSwgZGVidWcpO1xufTtcblxuLyoqXG4gKiBGb3JjZSBhIGNvbGxlY3Rpb24gb2YgdmFsdWVzIHRvIGxvb2sgbGlrZSB0aGUgdHlwZXMgYW5kIGxlbmd0aCBvZiBhbiBBUElcbiAqIHRlbXBsYXRlLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCBjb25mb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHRvIGNvbmZvcm0gdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIFRoZSB2YWx1ZSB0byBjb25mb3JtXG4gKiBAcGFyYW0ge0FycmF5fSBleHRlcm5hbHMgTGlzdGluZyBvZiBiaW5hcnkgZWxlbWVudHMgaW4gdGhlIHRlbXBsYXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFdoZXRoZXIgdG8gdG8gc2VwYXJhdGUgb3IgY29tYmluZSBzdHJlYW1zLlxuICogQGFwYXJhbSB7RGVidWd9IGRlYnVnIEEgZGVidWdnZXIgZm9yIGVycm9ycy5cbiAqL1xuQ29uc3VtZXIuY29uZm9ybSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgZnJvbSwgZXh0ZXJuYWxzLCBzZXBhcmF0ZSwgZGVidWcpIHtcbiAgLyoganNoaW50IC1XMDg2ICovXG4gIGlmICh0eXBlb2YgKGZyb20pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy9mcm9tID0gdW5kZWZpbmVkO1xuICAgIC8vdGhyb3cgXCJUcnlpbmcgdG8gY29uZm9ybSBhIGZ1bmN0aW9uXCI7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgKGZyb20pID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoZnJvbSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWJ1Zy5lcnJvcihcIk1lc3NhZ2UgZGlzY2FyZGVkIGZvciBub3QgbWF0Y2hpbmcgZGVjbGFyZWQgdHlwZSFcIiwgZnJvbSk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN3aXRjaCAodGVtcGxhdGUpIHtcbiAgY2FzZSAnc3RyaW5nJzpcbiAgICByZXR1cm4gU3RyaW5nKCcnKSArIGZyb207XG4gIGNhc2UgJ251bWJlcic6XG4gICAgcmV0dXJuIE51bWJlcigxKSAqIGZyb207XG4gIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIHJldHVybiBCb29sZWFuKGZyb20gPT09IHRydWUpO1xuICBjYXNlICdvYmplY3QnOlxuICAgIC8vIFRPRE8od2lsbHNjb3R0KTogQWxsb3cgcmVtb3ZhbCBpZiBzYW5kYm94aW5nIGVuZm9yY2VzIHRoaXMuXG4gICAgaWYgKHR5cGVvZiBmcm9tID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZnJvbSkpO1xuICAgIH1cbiAgY2FzZSAnYmxvYic6XG4gICAgaWYgKHNlcGFyYXRlKSB7XG4gICAgICBpZiAoZnJvbSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgZXh0ZXJuYWxzLnB1c2goZnJvbSk7XG4gICAgICAgIHJldHVybiBleHRlcm5hbHMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnLmVycm9yKCdjb25mb3JtIGV4cGVjdGluZyBCbG9iLCBidXQgc2F3ICcgKyAodHlwZW9mIGZyb20pKTtcbiAgICAgICAgZXh0ZXJuYWxzLnB1c2gobmV3IEJsb2IoW10pKTtcbiAgICAgICAgcmV0dXJuIGV4dGVybmFscy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXh0ZXJuYWxzW2Zyb21dO1xuICAgIH1cbiAgY2FzZSAnYnVmZmVyJzpcbiAgICBpZiAoc2VwYXJhdGUpIHtcbiAgICAgIGV4dGVybmFscy5wdXNoKENvbnN1bWVyLm1ha2VBcnJheUJ1ZmZlcihmcm9tLCBkZWJ1ZykpO1xuICAgICAgcmV0dXJuIGV4dGVybmFscy5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQ29uc3VtZXIubWFrZUFycmF5QnVmZmVyKGV4dGVybmFsc1tmcm9tXSwgZGVidWcpO1xuICAgIH1cbiAgY2FzZSAncHJveHknOlxuICAgIHJldHVybiBmcm9tO1xuICB9XG4gIHZhciB2YWwsIGk7XG4gIGlmIChBcnJheS5pc0FycmF5KHRlbXBsYXRlKSAmJiBmcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YWwgPSBbXTtcbiAgICBpID0gMDtcbiAgICBpZiAodGVtcGxhdGUubGVuZ3RoID09PSAyICYmIHRlbXBsYXRlWzBdID09PSAnYXJyYXknKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwidGVtcGxhdGUgaXMgYXJyYXksIHZhbHVlIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBmcm9tLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhbC5wdXNoKENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGVbMV0sIGZyb21baV0sIGV4dGVybmFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0ZSwgZGVidWcpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRlbXBsYXRlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChmcm9tW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YWwucHVzaChDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlW2ldLCBmcm9tW2ldLCBleHRlcm5hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0ZSwgZGVidWcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnb2JqZWN0JyAmJiBmcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YWwgPSB7fTtcbiAgICB1dGlsLmVhY2hQcm9wKHRlbXBsYXRlLCBmdW5jdGlvbiAocHJvcCwgbmFtZSkge1xuICAgICAgaWYgKGZyb21bbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWxbbmFtZV0gPSBDb25zdW1lci5jb25mb3JtKHByb3AsIGZyb21bbmFtZV0sIGV4dGVybmFscywgc2VwYXJhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgZGVidWcuZXJyb3IoJ1Vua25vd24gdGVtcGxhdGUgcHJvdmlkZWQ6ICcgKyB0ZW1wbGF0ZSk7XG59O1xuXG4vKipcbiAqIE1ha2UgYSB0aGluZyBpbnRvIGFuIEFycmF5IEJ1ZmZlclxuICogQHN0YXRpY1xuICogQG1ldGhvZCBtYWtlQXJyYXlCdWZmZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGluZ1xuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBpbiBjYXNlIG9mIGVycm9ycy5cbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBBbiBBcnJheSBCdWZmZXJcbiAqL1xuQ29uc3VtZXIubWFrZUFycmF5QnVmZmVyID0gZnVuY3Rpb24gKHRoaW5nLCBkZWJ1Zykge1xuICBpZiAoIXRoaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgfVxuXG4gIGlmICh0aGluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9IGVsc2UgaWYgKHRoaW5nLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlCdWZmZXJcIiAmJlxuICAgICAgdHlwZW9mIHRoaW5nLnByb3RvdHlwZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIFdvcmthcm91bmQgZm9yIHdlYmtpdCBvcmlnaW4gb3duZXJzaGlwIGlzc3VlLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9VV05ldHdvcmtzTGFiL2ZyZWVkb20vaXNzdWVzLzI4XG4gICAgcmV0dXJuIG5ldyBEYXRhVmlldyh0aGluZykuYnVmZmVyO1xuICB9IGVsc2Uge1xuICAgIGRlYnVnLmVycm9yKCdleHBlY3RpbmcgQXJyYXlCdWZmZXIsIGJ1dCBzYXcgJyArXG4gICAgICAgICh0eXBlb2YgdGhpbmcpICsgJzogJyArIEpTT04uc3RyaW5naWZ5KHRoaW5nKSk7XG4gICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZSBhIFtuZXN0ZWRdIG9iamVjdCBhbmQgZnJlZXplIGl0cyBrZXlzIGZyb20gYmVpbmdcbiAqIHdyaXRhYmxlLiBOb3RlLCB0aGUgcmVzdWx0IGNhbiBoYXZlIG5ldyBrZXlzIGFkZGVkIHRvIGl0LCBidXQgZXhpc3Rpbmcgb25lc1xuICogY2Fubm90IGJlICBvdmVyd3JpdHRlbi4gRG9lc24ndCBkbyBhbnl0aGluZyBmb3IgYXJyYXlzIG9yIG90aGVyIGNvbGxlY3Rpb25zLlxuICpcbiAqIEBtZXRob2QgcmVjdXJzaXZlRnJlZXplT2JqZWN0XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gb2JqZWN0IHRvIGJlIGZyb3plblxuICogQHJldHVybiB7T2JqZWN0fSBvYmpcbiAqKi9cbkNvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGssIHJldCA9IHt9O1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGZvciAoayBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmV0LCBrLCB7XG4gICAgICAgIHZhbHVlOiBDb25zdW1lci5yZWN1cnNpdmVGcmVlemVPYmplY3Qob2JqW2tdKSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc3VtZXI7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gZW50cnkgcG9pbnQgZm9yIGRlYnVnZ2luZy5cbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQGltcGxlbWVudHMgUG9ydFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBEZWJ1ZyA9IGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgdGhpcy5pZCA9ICdkZWJ1Zyc7XG4gIHRoaXMuZW1pdENoYW5uZWwgPSBmYWxzZTtcbiAgdGhpcy5jb25maWcgPSBmYWxzZTtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG4vKipcbiAqIFByb3ZpZGUgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHRleHR1YWwgZGVzY3JpcHRpb24uXG4gKi9cbkRlYnVnLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICdbQ29uc29sZV0nO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGxvZ2dlciBmb3Igb3V0cHV0dGluZyBkZWJ1Z2dpbmcgbWVzc2FnZXMuXG4gKiBAbWV0aG9kIHNldExvZ2dlclxuICogQHBhcmFtIHtDb25zb2xlfSBsb2dnZXIgVGhlIGxvZ2dlciB0byByZWdpc3RlclxuICovXG5EZWJ1Zy5wcm90b3R5cGUuc2V0TG9nZ2VyID0gZnVuY3Rpb24gKGxvZ2dlcikge1xuICBpZiAodGhpcy5sb2dnZXIpIHtcbiAgICB0aGlzLmluZm8oJ1JlcGxhY2luZyBMb2dnZXIuJyk7XG4gIH1cbiAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gIHRoaXMuZW1pdCgnbG9nZ2VyJyk7XG59O1xuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHJlY2VpdmluZyBtZXNzYWdlcyBzZW50IHRvIHRoZSBkZWJ1ZyBwb3J0LlxuICogVGhlc2UgbWVzc2FnZXMgYXJlIHVzZWQgdG8gcmV0cmVpdmUgY29uZmlnIGZvciBleHBvc2luZyBjb25zb2xlLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgdGhlIHNvdXJjZSBpZGVudGlmaWVyIGZvciB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIHRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5EZWJ1Zy5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xuICBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS5jaGFubmVsICYmICF0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgdGhpcy5lbWl0Q2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmNvbmZpZyA9IG1lc3NhZ2UuY29uZmlnO1xuICAgIGlmICghdGhpcy5jb25maWcuZ2xvYmFsLmNvbnNvbGUpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmNvbnNvbGUgPSBjb25zb2xlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmNvbnNvbGUgPSB0aGlzLmdldExvZ2dlcignQ29uc29sZScpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVtaXQoJ3JlYWR5Jyk7XG4gIH1cbn07XG5cbi8qKlxuICogRGlzcGF0Y2ggYSBkZWJ1ZyBtZXNzYWdlIHdpdGggYXJiaXRyYXJ5IHNldmVyaXR5LlxuICogQWxsIGRlYnVnIG1lc3NhZ2VzIGFyZSByb3V0ZWQgdGhyb3VnaCB0aGUgbWFuYWdlciwgdG8gYWxsb3cgZm9yIGRlbGVnYXRpb24uXG4gKiBAbWV0aG9kIGZvcm1hdFxuICogQHBhcmFtIHtTdHJpbmd9IHNldmVyaXR5IHRoZSBzZXZlcml0eSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGxvY2F0aW9uIG9mIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBhcmdzIFRoZSBjb250ZW50cyBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwcml2YXRlXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoc2V2ZXJpdHksIHNvdXJjZSwgYXJncykge1xuICB2YXIgaSwgYWxpc3QgPSBbXSwgYXJnYXJyO1xuICBpZiAodHlwZW9mIGFyZ3MgPT09IFwic3RyaW5nXCIgJiYgc291cmNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGFyZ2FyciA9IEpTT04ucGFyc2UoYXJncyk7XG4gICAgICBpZiAoYXJnYXJyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgYXJncyA9IGFyZ2FycjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBwYXNzLlxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFsaXN0LnB1c2goYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGFsaXN0LnB1c2goYXJnc1tpXSk7XG4gICAgfVxuICB9XG4gIGlmICghdGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHRoaXMub24oJ3JlYWR5JywgdGhpcy5mb3JtYXQuYmluZCh0aGlzLCBzZXZlcml0eSwgc291cmNlLCBhbGlzdCkpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge1xuICAgIHNldmVyaXR5OiBzZXZlcml0eSxcbiAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICBxdWlldDogdHJ1ZSxcbiAgICByZXF1ZXN0OiAnZGVidWcnLFxuICAgIG1zZzogSlNPTi5zdHJpbmdpZnkoYWxpc3QpXG4gIH0pO1xufTtcblxuLyoqXG4gKiBQcmludCByZWNlaXZlZCBtZXNzYWdlcyBvbiB0aGUgY29uc29sZS5cbiAqIFRoaXMgaXMgY2FsbGVkIGJ5IHRoZSBtYW5hZ2VyIGluIHJlc3BvbnNlIHRvIGFuIGVtaXNzaW9uIGZyb20gZm9ybWF0LlxuICogQG1ldGhvZCBwcmludFxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZW1pdHRlZCBieSB7QHNlZSBmb3JtYXR9IHRvIHByaW50LlxuICovXG5EZWJ1Zy5wcm90b3R5cGUucHJpbnQgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICBpZiAoIXRoaXMubG9nZ2VyKSB7XG4gICAgdGhpcy5vbmNlKCdsb2dnZXInLCB0aGlzLnByaW50LmJpbmQodGhpcywgbWVzc2FnZSkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBhcmdzLCBhcnIgPSBbXSwgaSA9IDA7XG4gIGFyZ3MgPSBKU09OLnBhcnNlKG1lc3NhZ2UubXNnKTtcbiAgaWYgKHR5cGVvZiBhcmdzID09PSBcInN0cmluZ1wiKSB7XG4gICAgYXJyLnB1c2goYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKGFyZ3NbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXJyLnB1c2goYXJnc1tpXSk7XG4gICAgICBpICs9IDE7XG4gICAgfVxuICB9XG4gIHRoaXMubG9nZ2VyW21lc3NhZ2Uuc2V2ZXJpdHldLmNhbGwodGhpcy5sb2dnZXIsIG1lc3NhZ2Uuc291cmNlLCBhcnIsIGZ1bmN0aW9uICgpIHt9KTtcbn07XG5cbi8qKlxuICogUHJpbnQgYSBsb2cgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdsb2cnLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFByaW50IGFuIGluZm8gbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnaW5mbycsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogUHJpbnQgYSBkZWJ1ZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuRGVidWcucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnZGVidWcnLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFByaW50IGEgd2FybmluZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCB3YXJuXG4gKi9cbkRlYnVnLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnd2FybicsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogUHJpbnQgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2QgZXJyb3JcbiAqL1xuRGVidWcucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnZXJyb3InLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdldCBhIGxvZ2dlciB0aGF0IGxvZ3MgbWVzc2FnZXMgcHJlZml4ZWQgYnkgYSBnaXZlbiBuYW1lLlxuICogQG1ldGhvZCBnZXRMb2dnZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBwcmVmaXggZm9yIGxvZ2dlZCBtZXNzYWdlcy5cbiAqIEByZXR1cm5zIHtDb25zb2xlfSBBIGNvbnNvbGUtbGlrZSBvYmplY3QuXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5nZXRMb2dnZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgbG9nID0gZnVuY3Rpb24gKHNldmVyaXR5LCBzb3VyY2UpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHRoaXMuZm9ybWF0KHNldmVyaXR5LCBzb3VyY2UsIGFyZ3MpO1xuICB9LFxuICAgIGxvZ2dlciA9IHtcbiAgICAgIGZyZWVkb206IHRydWUsXG4gICAgICBkZWJ1ZzogbG9nLmJpbmQodGhpcywgJ2RlYnVnJywgbmFtZSksXG4gICAgICBpbmZvOiBsb2cuYmluZCh0aGlzLCAnaW5mbycsIG5hbWUpLFxuICAgICAgbG9nOiBsb2cuYmluZCh0aGlzLCAnbG9nJywgbmFtZSksXG4gICAgICB3YXJuOiBsb2cuYmluZCh0aGlzLCAnd2FybicsIG5hbWUpLFxuICAgICAgZXJyb3I6IGxvZy5iaW5kKHRoaXMsICdlcnJvcicsIG5hbWUpXG4gICAgfTtcbiAgcmV0dXJuIGxvZ2dlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGVidWc7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUgKi9cclxudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XHJcblxyXG52YXIgQXBpID0gcmVxdWlyZSgnLi9hcGknKTtcclxudmFyIERlYnVnID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xyXG52YXIgSHViID0gcmVxdWlyZSgnLi9odWInKTtcclxudmFyIE1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcclxudmFyIFBvbGljeSA9IHJlcXVpcmUoJy4vcG9saWN5Jyk7XHJcbnZhciBQcm94eUJpbmRlciA9IHJlcXVpcmUoJy4vcHJveHliaW5kZXInKTtcclxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xyXG52YXIgQnVuZGxlID0gcmVxdWlyZSgnLi9idW5kbGUnKTtcclxuXHJcbnZhciBmcmVlZG9tR2xvYmFsO1xyXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBcclxuICAvLyBOb2RlLmpzXHJcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5wcm90b3R5cGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgZnJlZWRvbUdsb2JhbCA9IGdsb2JhbDtcclxuICAvLyBCcm93c2Vyc1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgZnJlZWRvbUdsb2JhbCA9IHRoaXM7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbn07XHJcbmdldEdsb2JhbCgpO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBmcmVlZG9tIGNvbnRleHQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IEluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhbCBjb250ZXh0LlxyXG4gKiBAc2VlIHt1dGlsL3dvcmtlckVudHJ5LmpzfVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IHRvIGxvYWQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgQ29uZmlndXJhdGlvbiBrZXlzIHNldCBieSB0aGUgdXNlci5cclxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIG1vZHVsZSBkZWZpbmVkIGluIHRoZSBtYW5pZmVzdC5cclxuICovXHJcbnZhciBzZXR1cCA9IGZ1bmN0aW9uIChjb250ZXh0LCBtYW5pZmVzdCwgY29uZmlnKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciBkZWJ1ZyA9IG5ldyBEZWJ1ZygpLFxyXG4gICAgaHViID0gbmV3IEh1YihkZWJ1ZyksXHJcbiAgICByZXNvdXJjZSA9IG5ldyBSZXNvdXJjZShkZWJ1ZyksXHJcbiAgICBhcGkgPSBuZXcgQXBpKGRlYnVnKSxcclxuICAgIG1hbmFnZXIgPSBuZXcgTWFuYWdlcihodWIsIHJlc291cmNlLCBhcGkpLFxyXG4gICAgYmluZGVyID0gbmV3IFByb3h5QmluZGVyKG1hbmFnZXIpLFxyXG4gICAgcG9saWN5LFxyXG4gICAgc2l0ZV9jZmcgPSB7XHJcbiAgICAgICdkZWJ1Zyc6ICdsb2cnLFxyXG4gICAgICAnbWFuaWZlc3QnOiBtYW5pZmVzdCxcclxuICAgICAgJ21vZHVsZUNvbnRleHQnOiAoIWNvbnRleHQgfHwgdHlwZW9mIChjb250ZXh0LmlzTW9kdWxlKSA9PT0gXCJ1bmRlZmluZWRcIikgP1xyXG4gICAgICAgICAgdXRpbC5pc01vZHVsZUNvbnRleHQoKSA6XHJcbiAgICAgICAgICBjb250ZXh0LmlzTW9kdWxlXHJcbiAgICB9LFxyXG4gICAgbGluayxcclxuICAgIFBvcnQsXHJcbiAgICBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBhcGkuY2xlYW51cCgpO1xyXG4gICAgICBtYW5hZ2VyLmRlc3Ryb3koKTtcclxuICAgIH07XHJcblxyXG4gIGlmIChjb25maWcpIHtcclxuICAgIHV0aWwubWl4aW4oc2l0ZV9jZmcsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgfVxyXG4gIHNpdGVfY2ZnLmdsb2JhbCA9IGZyZWVkb21HbG9iYWw7XHJcbiAgaWYgKGNvbnRleHQpIHtcclxuICAgIHV0aWwubWl4aW4oc2l0ZV9jZmcsIGNvbnRleHQsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVnaXN0ZXIgdXNlci1zdXBwbGllZCBleHRlbnNpb25zLlxyXG4gIC8vIEZvciBleGFtcGxlIHRoZSAnY29yZS5vYXV0aCcgcHJvdmlkZXIgZGVmaW5lcyBhIHJlZ2lzdGVyIGZ1bmN0aW9uLFxyXG4gIC8vIHdoaWNoIGVuYWJsZXMgc2l0ZV9jZmcub2F1dGggdG8gYmUgcmVnaXN0ZXJlZCB3aXRoIGl0LlxyXG4gIGNvbnRleHQucHJvdmlkZXJzLmZvckVhY2goZnVuY3Rpb24gKHByb3ZpZGVyKSB7XHJcbiAgICB2YXIgbmFtZTtcclxuICAgIGlmIChwcm92aWRlci5uYW1lLmluZGV4T2YoJ2NvcmUuJykgPT09IDAgJiZcclxuICAgICAgICB0eXBlb2YgcHJvdmlkZXIucmVnaXN0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgbmFtZSA9IHByb3ZpZGVyLm5hbWUuc3Vic3RyKDUpO1xyXG4gICAgICAvLyBJbnZlcnQgcHJpb3JpdHkgYW5kIHByZWZlciB1c2VyIGNvbmZpZyBvdmVyIGxvY2FsIGNvbnRleHQgZm9yIHRoZXNlLlxyXG4gICAgICBpZiAoY29uZmlnICYmIGNvbmZpZ1tuYW1lXSkge1xyXG4gICAgICAgIHByb3ZpZGVyLnJlZ2lzdGVyKGNvbmZpZ1tuYW1lXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2l0ZV9jZmdbbmFtZV0pIHtcclxuICAgICAgICBwcm92aWRlci5yZWdpc3RlcihzaXRlX2NmZ1tuYW1lXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvdmlkZXIucmVnaXN0ZXIodW5kZWZpbmVkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIEJ1bmRsZS5yZWdpc3Rlcihjb250ZXh0LnByb3ZpZGVycywgYXBpKTtcclxuICByZXNvdXJjZS5yZWdpc3Rlcihjb250ZXh0LnJlc29sdmVycyB8fCBbXSk7XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICBpZiAoc2l0ZV9jZmcubW9kdWxlQ29udGV4dCkge1xyXG4gICAgICBQb3J0ID0gc2l0ZV9jZmcucG9ydFR5cGU7XHJcbiAgICAgIGxpbmsgPSBuZXcgUG9ydCgnT3V0Ym91bmQnLCByZXNvdXJjZSk7XHJcbiAgICAgIG1hbmFnZXIuc2V0dXAobGluayk7XHJcblxyXG4gICAgICAvLyBEZWxheSBkZWJ1ZyBtZXNzYWdlcyB1bnRpbCBkZWxlZ2F0aW9uIHRvIHRoZSBwYXJlbnQgY29udGV4dCBpcyBzZXR1cC5cclxuICAgICAgbWFuYWdlci5vbmNlKCdkZWxlZ2F0ZScsIG1hbmFnZXIuc2V0dXAuYmluZChtYW5hZ2VyLCBkZWJ1ZykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFuYWdlci5zZXR1cChkZWJ1Zyk7XHJcbiAgICAgIHBvbGljeSA9IG5ldyBQb2xpY3kobWFuYWdlciwgcmVzb3VyY2UsIHNpdGVfY2ZnKTtcclxuXHJcbiAgICAgIC8vIERlZmluZSBob3cgdG8gbG9hZCBhIHJvb3QgbW9kdWxlLlxyXG4gICAgICB2YXIgZmFsbGJhY2tMb2dnZXIsIGdldElmYWNlO1xyXG4gICAgICBmYWxsYmFja0xvZ2dlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgYXBpLmdldENvcmUoJ2NvcmUuY29uc29sZScsIHtcclxuICAgICAgICAgIGNvbmZpZzogc2l0ZV9jZmdcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChwcm92aWRlcikge1xyXG4gICAgICAgICAgdmFyIGxvZ2dlciA9IG5ldyBwcm92aWRlci5pbnN0KCk7XHJcbiAgICAgICAgICBkZWJ1Zy5zZXRMb2dnZXIobG9nZ2VyKTtcclxuICAgICAgICAgIGlmIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGRlYnVnLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBnZXRJZmFjZSA9IGZ1bmN0aW9uIChtYW5pZmVzdCkge1xyXG4gICAgICAgIHJldHVybiByZXNvdXJjZS5nZXQoc2l0ZV9jZmcubG9jYXRpb24sIG1hbmlmZXN0KS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGNhbm9uaWNhbF9tYW5pZmVzdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9saWN5LmdldChbXSwgY2Fub25pY2FsX21hbmlmZXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApLnRoZW4oZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgICBtYW5hZ2VyLnNldHVwKGluc3RhbmNlKTtcclxuICAgICAgICAgIHJldHVybiBiaW5kZXIuYmluZERlZmF1bHQoaW5zdGFuY2UsIGFwaSwgaW5zdGFuY2UubWFuaWZlc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gTG9hZCBhcHByb3ByaWF0ZSBMb2dnZXIuXHJcbiAgICAgIGlmIChzaXRlX2NmZy5sb2dnZXIpIHtcclxuICAgICAgICBnZXRJZmFjZShzaXRlX2NmZy5sb2dnZXIpLnRoZW4oZnVuY3Rpb24gKGlmYWNlKSB7XHJcbiAgICAgICAgICBpZiAoaWZhY2UuZXh0ZXJuYWwuYXBpICE9PSAnY29uc29sZScpIHtcclxuICAgICAgICAgICAgZmFsbGJhY2tMb2dnZXIoXCJVbndpbGxpbmcgdG8gdXNlIGxvZ2dlciB3aXRoIHVua25vd24gQVBJOlwiLFxyXG4gICAgICAgICAgICAgIGlmYWNlLmV4dGVybmFsLmFwaSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1Zy5zZXRMb2dnZXIoaWZhY2UuZXh0ZXJuYWwoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsbGJhY2tMb2dnZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZhbGxiYWNrTG9nZ2VyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIExvYWQgcm9vdCBtb2R1bGUuXHJcbiAgICAgIGdldElmYWNlKHNpdGVfY2ZnLm1hbmlmZXN0KS50aGVuKGZ1bmN0aW9uIChpZmFjZSkge1xyXG4gICAgICAgIGlmYWNlLnBvcnQub25jZSgnY2xvc2UnLCBjbGVhbnVwKTtcclxuICAgICAgICByZXR1cm4gaWZhY2UuZXh0ZXJuYWw7XHJcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICBkZWJ1Zy5lcnJvcignRmFpbGVkIHRvIHJldHJpZXZlIG1hbmlmZXN0OiAnICsgZXJyKTtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgIH0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBodWIuZW1pdCgnY29uZmlnJywgc2l0ZV9jZmcpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcclxuIiwiLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBmZG9tLkh1YiwgdGhlIGNvcmUgbWVzc2FnZSBodWIgYmV0d2VlbiBmcmVlZG9tIG1vZHVsZXMuXHJcbiAqIEluY29tbWluZyBtZXNzYWdlcyBmcm9tIGFwcHMgYXJlIHNlbnQgdG8gaHViLm9uTWVzc2FnZSgpXHJcbiAqIEBjbGFzcyBIdWJcclxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgTG9nZ2VyIGZvciBkZWJ1Z2dpbmcuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxudmFyIEh1YiA9IGZ1bmN0aW9uIChkZWJ1Zykge1xyXG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcclxuICB0aGlzLmNvbmZpZyA9IHt9O1xyXG4gIHRoaXMuYXBwcyA9IHt9O1xyXG4gIHRoaXMucm91dGVzID0ge307XHJcblxyXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xyXG4gIHRoaXMub24oJ2NvbmZpZycsIGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIGNvbmZpZyk7XHJcbiAgfS5iaW5kKHRoaXMpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGUgYW4gaW5jb21pbmcgbWVzc2FnZSBmcm9tIGEgZnJlZWRvbSBhcHAuXHJcbiAqIEBtZXRob2Qgb25NZXNzYWdlXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGlkZW50aWZpeWluZyBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBzZW50IG1lc3NhZ2UuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChzb3VyY2UsIG1lc3NhZ2UpIHtcclxuICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLnJvdXRlc1tzb3VyY2VdLCB0eXBlO1xyXG4gIGlmICghZGVzdGluYXRpb24gfHwgIWRlc3RpbmF0aW9uLmFwcCkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiTWVzc2FnZSBkcm9wcGVkIGZyb20gdW5yZWdpc3RlcmVkIHNvdXJjZSBcIiArIHNvdXJjZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoIXRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJNZXNzYWdlIGRyb3BwZWQgdG8gZGVzdGluYXRpb24gXCIgKyBkZXN0aW5hdGlvbi5hcHApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhlIGZpcmVob3NlIHRyYWNpbmcgYWxsIGludGVybmFsIGZyZWVkb20uanMgbWVzc2FnZXMuXHJcbiAgaWYgKCFtZXNzYWdlLnF1aWV0ICYmICFkZXN0aW5hdGlvbi5xdWlldCAmJiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy50cmFjZSkge1xyXG4gICAgdHlwZSA9IG1lc3NhZ2UudHlwZTtcclxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdtZXNzYWdlJyAmJiBtZXNzYWdlLm1lc3NhZ2UgJiZcclxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UuYWN0aW9uID09PSAnbWV0aG9kJykge1xyXG4gICAgICB0eXBlID0gJ21ldGhvZC4nICsgbWVzc2FnZS5tZXNzYWdlLnR5cGU7XHJcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ21ldGhvZCcgJiYgbWVzc2FnZS5tZXNzYWdlICYmXHJcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdtZXRob2QnKSB7XHJcbiAgICAgIHR5cGUgPSAncmV0dXJuLicgKyBtZXNzYWdlLm1lc3NhZ2UubmFtZTtcclxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnbWVzc2FnZScgJiYgbWVzc2FnZS5tZXNzYWdlICYmXHJcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdldmVudCcpIHtcclxuICAgICAgdHlwZSA9ICdldmVudC4nICsgbWVzc2FnZS5tZXNzYWdlLm5hbWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRlYnVnLmRlYnVnKHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5zb3VyY2VdLnRvU3RyaW5nKCkgK1xyXG4gICAgICAgIFwiIC1cIiArIHR5cGUgKyBcIi0+IFwiICtcclxuICAgICAgICB0aGlzLmFwcHNbZGVzdGluYXRpb24uYXBwXS50b1N0cmluZygpICsgXCIuXCIgKyBkZXN0aW5hdGlvbi5mbG93KTtcclxuICB9XHJcblxyXG4gIHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdLm9uTWVzc2FnZShkZXN0aW5hdGlvbi5mbG93LCBtZXNzYWdlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGxvY2FsIGRlc3RpbmF0aW9uIHBvcnQgb2YgYSBmbG93LlxyXG4gKiBAbWV0aG9kIGdldERlc3RpbmF0aW9uXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGZsb3cgdG8gcmV0cmlldmUuXHJcbiAqIEByZXR1cm4ge1BvcnR9IFRoZSBkZXN0aW5hdGlvbiBwb3J0LlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5nZXREZXN0aW5hdGlvbiA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLnJvdXRlc1tzb3VyY2VdO1xyXG4gIGlmICghZGVzdGluYXRpb24pIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF07XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBsb2NhbCBzb3VyY2UgcG9ydCBvZiBhIGZsb3cuXHJcbiAqIEBtZXRob2QgZ2V0U291cmNlXHJcbiAqIEBwYXJhbSB7UG9ydH0gc291cmNlIFRoZSBmbG93IGlkZW50aWZpZXIgdG8gcmV0cmlldmUuXHJcbiAqIEByZXR1cm4ge1BvcnR9IFRoZSBzb3VyY2UgcG9ydC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gIGlmICghc291cmNlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmICghdGhpcy5hcHBzW3NvdXJjZS5pZF0pIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIk5vIHJlZ2lzdGVyZWQgc291cmNlICdcIiArIHNvdXJjZS5pZCArIFwiJ1wiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuYXBwc1tzb3VyY2UuaWRdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVyIGEgZGVzdGluYXRpb24gZm9yIG1lc3NhZ2VzIHdpdGggdGhpcyBodWIuXHJcbiAqIEBtZXRob2QgcmVnaXN0ZXJcclxuICogQHBhcmFtIHtQb3J0fSBhcHAgVGhlIFBvcnQgdG8gcmVnaXN0ZXIuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlXSBXaGV0aGVyIHRvIG92ZXJyaWRlIGFuIGV4aXN0aW5nIHBvcnQuXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGFwcCB3YXMgcmVnaXN0ZXJlZC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoYXBwLCBmb3JjZSkge1xyXG4gIGlmICghdGhpcy5hcHBzW2FwcC5pZF0gfHwgZm9yY2UpIHtcclxuICAgIHRoaXMuYXBwc1thcHAuaWRdID0gYXBwO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRGVyZWdpc3RlciBhIGRlc3RpbmF0aW9uIGZvciBtZXNzYWdlcyB3aXRoIHRoZSBodWIuXHJcbiAqIE5vdGU6IGRvZXMgbm90IHJlbW92ZSBhc3NvY2lhdGVkIHJvdXRlcy4gQXMgc3VjaCwgZGVyZWdpc3RlcmluZyB3aWxsXHJcbiAqIHByZXZlbnQgdGhlIGluc3RhbGxhdGlvbiBvZiBuZXcgcm91dGVzLCBidXQgd2lsbCBub3QgZGlzdHJ1cHQgZXhpc3RpbmdcclxuICogaHViIHJvdXRlcy5cclxuICogQG1ldGhvZCBkZXJlZ2lzdGVyXHJcbiAqIEBwYXJhbSB7UG9ydH0gYXBwIFRoZSBQb3J0IHRvIGRlcmVnaXN0ZXJcclxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgYXBwIHdhcyBkZXJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmRlcmVnaXN0ZXIgPSBmdW5jdGlvbiAoYXBwKSB7XHJcbiAgaWYgKCF0aGlzLmFwcHNbYXBwLmlkXSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBkZWxldGUgdGhpcy5hcHBzW2FwcC5pZF07XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogSW5zdGFsbCBhIG5ldyByb3V0ZSBpbiB0aGUgaHViLlxyXG4gKiBAbWV0aG9kIGluc3RhbGxcclxuICogQHBhcmFtIHtQb3J0fSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgcm91dGUuXHJcbiAqIEBwYXJhbSB7UG9ydH0gZGVzdGluYXRpb24gVGhlIGRlc3RpbmF0aW9uIG9mIHRoZSByb3V0ZS5cclxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIGZsb3cgd2hlcmUgdGhlIGRlc3RpbmF0aW9uIHdpbGwgcmVjZWl2ZSBtZXNzYWdlcy5cclxuICogQHBhcmFtIHtCb29sZWFufSBxdWlldCBXaGV0aGVyIG1lc3NhZ2VzIG9uIHRoaXMgcm91dGUgc2hvdWxkIGJlIHN1cHByZXNzZWQuXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gQSByb3V0aW5nIHNvdXJjZSBpZGVudGlmaWVyIGZvciBzZW5kaW5nIG1lc3NhZ2VzLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdGluYXRpb24sIGZsb3csIHF1aWV0KSB7XHJcbiAgc291cmNlID0gdGhpcy5nZXRTb3VyY2Uoc291cmNlKTtcclxuICBpZiAoIXNvdXJjZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoIWRlc3RpbmF0aW9uKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbndpbGxpbmcgdG8gZ2VuZXJhdGUgYmxhY2tob2xlIGZsb3cgZnJvbSBcIiArIHNvdXJjZS5pZCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgcm91dGUgPSB0aGlzLmdlbmVyYXRlUm91dGUoKTtcclxuICB0aGlzLnJvdXRlc1tyb3V0ZV0gPSB7XHJcbiAgICBhcHA6IGRlc3RpbmF0aW9uLFxyXG4gICAgZmxvdzogZmxvdyxcclxuICAgIHNvdXJjZTogc291cmNlLmlkLFxyXG4gICAgcXVpZXQ6IHF1aWV0XHJcbiAgfTtcclxuICBpZiAodHlwZW9mIHNvdXJjZS5vbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgc291cmNlLm9uKHJvdXRlLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIHJvdXRlKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm91dGU7XHJcbn07XHJcblxyXG4vKipcclxuICogVW5pbnN0YWxsIGEgaHViIHJvdXRlLlxyXG4gKiBAbWV0aG9kIHVuaW5zdGFsbFxyXG4gKiBAcGFyYW0ge1BvcnR9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSByb3V0ZS5cclxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIHJvdXRlIHRvIHVuaW5zdGFsbC5cclxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgcm91dGUgd2FzIGFibGUgdG8gYmUgdW5pbnN0YWxsZWQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLnVuaW5zdGFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGZsb3cpIHtcclxuICBzb3VyY2UgPSB0aGlzLmdldFNvdXJjZShzb3VyY2UpO1xyXG4gIGlmICghc291cmNlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgcm91dGUgPSB0aGlzLnJvdXRlc1tmbG93XTtcclxuICBpZiAoIXJvdXRlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIGlmIChyb3V0ZS5zb3VyY2UgIT09IHNvdXJjZS5pZCkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiRmxvdyBcIiArIGZsb3cgKyBcIiBkb2VzIG5vdCBiZWxvbmcgdG8gcG9ydCBcIiArIHNvdXJjZS5pZCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkZWxldGUgdGhpcy5yb3V0ZXNbZmxvd107XHJcbiAgaWYgKHR5cGVvZiBzb3VyY2Uub2ZmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBzb3VyY2Uub2ZmKHJvdXRlKTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgYW5kIG5vdGlmeSBhbGwgY29ubmVjdGVkIGRlc3RpbmF0aW9ucyBvZiB0aGVpciByZW1vdmFsLlxyXG4gKiBAbWV0aG9kIHRlYXJkb3duXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKCkge1xyXG4gIHV0aWwuZWFjaFByb3AodGhpcy5hcHBzLCBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZS5vZmYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgc291cmNlLm9mZigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHRoaXMuYXBwcyA9IHt9O1xyXG4gIHRoaXMucm91dGVzID0ge307XHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgYSB1bmlxdWUgcm91dGluZyBpZGVudGlmaWVyLlxyXG4gKiBAbWV0aG9kIGdlbmVyYXRlUm91dGVcclxuICogQHJldHVybiB7U3RyaW5nfSBhIHJvdXRpbmcgc291cmNlIGlkZW50aWZpZXIuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmdlbmVyYXRlUm91dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHV0aWwuZ2V0SWQoKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSHViO1xyXG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGxpbmsgY29ubmVjdHMgdHdvIGZyZWVkb20gaHVicy4gVGhpcyBpcyBhbiBhYnN0cmFjdCBjbGFzc1xuICogcHJvdmlkaW5nIGNvbW1vbiBmdW5jdGlvbmFsaXR5IG9mIHRyYW5zbGF0aW5nIGNvbnRyb2wgY2hhbm5lbHMsXG4gKiBhbmQgaW50ZWdyYXRpbmcgY29uZmlnIGluZm9ybWF0aW9uLlxuICogQGNsYXNzIExpbmtcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTGluayA9IGZ1bmN0aW9uIChuYW1lLCByZXNvdXJjZSkge1xuICB0aGlzLmlkID0gJ0xpbmsnICsgTWF0aC5yYW5kb20oKTtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuICB0aGlzLmNvbmZpZyA9IHt9O1xuICB0aGlzLnNyYyA9IG51bGw7XG5cbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gIHV0aWwubWl4aW4odGhpcywgTGluay5wcm90b3R5cGUpO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIG1lc3NhZ2VzIGZyb20gdGhlIGh1YiB0byB0aGlzIHBvcnQuXG4gKiBNYW5hZ2VzIHN0YXJ0dXAsIGFuZCBwYXNzZXMgb3RoZXJzIHRvICdkZWxpdmVyTWVzc2FnZScgaW1wbGVtZW50ZWRcbiAqIGluIGRlcml2ZWQgY2xhc3Nlcy5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyB0aGUgY2hhbm5lbC9mbG93IG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIE1lc3NhZ2UuXG4gKi9cbkxpbmsucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcgJiYgIXRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbENoYW5uZWwgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgbWVzc2FnZS5jb25maWcpO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlbGl2ZXJNZXNzYWdlKGZsb3csIG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgaGFuZGxlciB0byBhbGVydCBvZiBlcnJvcnMgb24gdGhpcyBwb3J0LlxuICogQG1ldGhvZCBhZGRFcnJvckhhbmRsZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgTWV0aG9kIHRvIGNhbGwgd2l0aCBlcnJvcnMuXG4gKi9cbkxpbmsucHJvdG90eXBlLmFkZEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gIHRoaXMub25FcnJvciA9IGhhbmRsZXI7XG59O1xuXG4vKipcbiAqIFJlcG9ydCBhbiBlcnJvciBvbiB0aGlzIGxpbmsuXG4gKiBAbWV0aG9kIG9uZXJyb3JcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZXJyb3IgdGhhdCBvY2N1cnJlZC5cbiAqL1xuTGluay5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgLy9GaWxsZWQgaW4gYnkgYWRkRXJyb3JIYW5kbGVyXG59O1xuXG4vKipcbiAqIEVtaXQgbWVzc2FnZXMgdG8gdGhlIHRoZSBodWIsIG1hcHBpbmcgY29udHJvbCBjaGFubmVscy5cbiAqIEBtZXRob2QgZW1pdE1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IHRoZSBmbG93IHRvIGVtaXQgdGhlIG1lc3NhZ2Ugb24uXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2dhZSBUaGUgbWVzc2FnZSB0byBlbWl0LlxuICovXG5MaW5rLnByb3RvdHlwZS5lbWl0TWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcgJiYgdGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIGZsb3cgPSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICB9XG4gIHRoaXMuZW1pdChmbG93LCBtZXNzYWdlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcbiIsIi8qZ2xvYmFscyBXb3JrZXIgKi9cbi8qanNsaW50IGluZGVudDoyLCB3aGl0ZTp0cnVlLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciBMaW5rID0gcmVxdWlyZSgnLi4vbGluaycpO1xuXG4vKipcbiAqIEEgcG9ydCBwcm92aWRpbmcgbWVzc2FnZSB0cmFuc3BvcnQgYmV0d2VlbiB0d28gZnJlZWRvbSBjb250ZXh0cyB2aWEgV29ya2VyLlxuICogQGNsYXNzIFdvcmtlclxuICogQGV4dGVuZHMgTGlua1xuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFdvcmtlckxpbmsgPSBmdW5jdGlvbihpZCwgcmVzb3VyY2UpIHtcbiAgTGluay5jYWxsKHRoaXMsIGlkLCByZXNvdXJjZSk7XG4gIGlmIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGFydCB0aGlzIHBvcnQgYnkgbGlzdGVuaW5nIG9yIGNyZWF0aW5nIGEgd29ya2VyLlxuICogQG1ldGhvZCBzdGFydFxuICogQHByaXZhdGVcbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuY29uZmlnLm1vZHVsZUNvbnRleHQpIHtcbiAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNldHVwV29ya2VyKCk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RvcCB0aGlzIHBvcnQgYnkgZGVzdHJveWluZyB0aGUgd29ya2VyLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcHJpdmF0ZVxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gIC8vIEZ1bmN0aW9uIGlzIGRldGVybWluZWQgYnkgc2V0dXBMaXN0ZW5lciBvciBzZXR1cEZyYW1lIGFzIGFwcHJvcHJpYXRlLlxufTtcblxuLyoqXG4gKiBHZXQgdGhlIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gXCJbV29ya2VyIFwiICsgdGhpcy5pZCArIFwiXVwiO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgYSBnbG9iYWwgbGlzdGVuZXIgdG8gaGFuZGxlIGluY29taW5nIG1lc3NhZ2VzIHRvIHRoaXNcbiAqIGZyZWVkb20uanMgY29udGV4dC5cbiAqIEBtZXRob2Qgc2V0dXBMaXN0ZW5lclxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zZXR1cExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBvbk1zZyA9IGZ1bmN0aW9uKG1zZykge1xuICAgIHRoaXMuZW1pdE1lc3NhZ2UobXNnLmRhdGEuZmxvdywgbXNnLmRhdGEubWVzc2FnZSk7XG4gIH0uYmluZCh0aGlzKTtcbiAgdGhpcy5vYmogPSB0aGlzLmNvbmZpZy5nbG9iYWw7XG4gIHRoaXMub2JqLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZywgdHJ1ZSk7XG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZywgdHJ1ZSk7XG4gICAgZGVsZXRlIHRoaXMub2JqO1xuICB9O1xuICB0aGlzLmVtaXQoJ3N0YXJ0ZWQnKTtcbiAgdGhpcy5vYmoucG9zdE1lc3NhZ2UoXCJSZWFkeSBGb3IgTWVzc2FnZXNcIik7XG59O1xuXG4vKipcbiAqIFNldCB1cCBhIHdvcmtlciB3aXRoIGFuIGlzb2xhdGVkIGZyZWVkb20uanMgY29udGV4dCBpbnNpZGUuXG4gKiBAbWV0aG9kIHNldHVwV29ya2VyXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnNldHVwV29ya2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3b3JrZXIsXG4gICAgYmxvYixcbiAgICBzZWxmID0gdGhpcztcbiAgd29ya2VyID0gbmV3IFdvcmtlcih0aGlzLmNvbmZpZy5zb3VyY2UgKyAnIycgKyB0aGlzLmlkKTtcblxuICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbihlcnIpIHtcbiAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgfS5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbih3b3JrZXIsIG1zZykge1xuICAgIGlmICghdGhpcy5vYmopIHtcbiAgICAgIHRoaXMub2JqID0gd29ya2VyO1xuICAgICAgdGhpcy5lbWl0KCdzdGFydGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1pdE1lc3NhZ2UobXNnLmRhdGEuZmxvdywgbXNnLmRhdGEubWVzc2FnZSk7XG4gIH0uYmluZCh0aGlzLCB3b3JrZXIpLCB0cnVlKTtcbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgIGlmICh0aGlzLm9iaikge1xuICAgICAgZGVsZXRlIHRoaXMub2JqO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBtZXNzYWdlcyBmcm9tIHRoZSBodWIgdG8gdGhpcyBwb3J0LlxuICogUmVjZWl2ZWQgbWVzc2FnZXMgd2lsbCBiZSBlbWl0dGVkIGZyb20gdGhlIG90aGVyIHNpZGUgb2YgdGhlIHBvcnQuXG4gKiBAbWV0aG9kIGRlbGl2ZXJNZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyB0aGUgY2hhbm5lbC9mbG93IG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIE1lc3NhZ2UuXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLmRlbGl2ZXJNZXNzYWdlID0gZnVuY3Rpb24oZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJlxuICAgICAgbWVzc2FnZS5jaGFubmVsID09PSAnY29udHJvbCcpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5vYmopIHtcbiAgICAgIHRoaXMub2JqLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgZmxvdzogZmxvdyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnRlZCcsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXb3JrZXJMaW5rO1xuXG4iLCIvKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgTW9kdWxlSW50ZXJuYWwgPSByZXF1aXJlKCcuL21vZHVsZWludGVybmFsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tIHBvcnQgd2hpY2ggbWFuYWdlcyB0aGUgY29udHJvbCBwbGFuZSBvZiBvZiBjaGFuZ2luZyBodWIgcm91dGVzLlxuICogQGNsYXNzIE1hbmFnZXJcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEBwYXJhbSB7SHVifSBodWIgVGhlIHJvdXRpbmcgaHViIHRvIGNvbnRyb2wuXG4gKiBAcGFyYW0ge1Jlc291cmNlfSByZXNvdXJjZSBUaGUgcmVzb3VyY2UgbWFuYWdlciBmb3IgdGhlIHJ1bnRpbWUuXG4gKiBAcGFyYW0ge0FwaX0gYXBpIFRoZSBBUEkgbWFuYWdlciBmb3IgdGhlIHJ1bnRpbWUuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIE1hbmFnZXIgPSBmdW5jdGlvbiAoaHViLCByZXNvdXJjZSwgYXBpKSB7XG4gIHRoaXMuaWQgPSAnY29udHJvbCc7XG4gIHRoaXMuY29uZmlnID0ge307XG4gIHRoaXMuY29udHJvbEZsb3dzID0ge307XG4gIHRoaXMuZGF0YUZsb3dzID0ge307XG4gIHRoaXMuZGF0YUZsb3dzW3RoaXMuaWRdID0gW107XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXAgPSB7fTtcblxuICB0aGlzLmRlYnVnID0gaHViLmRlYnVnO1xuICB0aGlzLmh1YiA9IGh1YjtcbiAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuICB0aGlzLmFwaSA9IGFwaTtcblxuICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcbiAgdGhpcy50b0RlbGVnYXRlID0ge307XG4gIFxuICB0aGlzLmh1Yi5vbignY29uZmlnJywgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIGNvbmZpZyk7XG4gICAgdGhpcy5lbWl0KCdjb25maWcnKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICB0aGlzLmh1Yi5yZWdpc3Rlcih0aGlzKTtcbn07XG5cbi8qKlxuICogUHJvdmlkZSBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwiW0xvY2FsIENvbnRyb2xsZXJdXCI7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgbWVzc2FnZXMgc2VudCB0byB0aGlzIHBvcnQuXG4gKiBUaGUgbWFuYWdlciwgb3IgJ2NvbnRyb2wnIGRlc3RpbmF0aW9uIGhhbmRsZXMgc2V2ZXJhbCB0eXBlcyBvZiBtZXNzYWdlcyxcbiAqIGlkZW50aWZpZWQgYnkgdGhlIHJlcXVlc3QgcHJvcGVydHkuICBUaGUgYWN0aW9ucyBhcmU6XG4gKiAxLiBkZWJ1Zy4gUHJpbnRzIHRoZSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogMi4gbGluay4gQ3JlYXRlcyBhIGxpbmsgYmV0d2VlbiB0aGUgc291cmNlIGFuZCBhIHByb3ZpZGVkIGRlc3RpbmF0aW9uIHBvcnQuXG4gKiAzLiBlbnZpcm9ubWVudC4gSW5zdGFudGlhdGUgYSBtb2R1bGUgZW52aXJvbm1lbnQgZGVmaW5lZCBpbiBNb2R1bGVJbnRlcm5hbC5cbiAqIDQuIGRlbGVnYXRlLiBSb3V0ZXMgYSBkZWZpbmVkIHNldCBvZiBjb250cm9sIG1lc3NhZ2VzIHRvIGFub3RoZXIgbG9jYXRpb24uXG4gKiA1LiByZXNvdXJjZS4gUmVnaXN0ZXJzIHRoZSBzb3VyY2UgYXMgYSByZXNvdXJjZSByZXNvbHZlci5cbiAqIDYuIGNvcmUuIEdlbmVyYXRlcyBhIGNvcmUgcHJvdmlkZXIgZm9yIHRoZSByZXF1ZXN0ZXIuXG4gKiA3LiBjbG9zZS4gVGVhcnMgZG93biByb3V0ZXMgaW52b2xpbmcgdGhlIHJlcXVlc3RpbmcgcG9ydC5cbiAqIDguIHVubGluay4gVGVhcnMgZG93biBhIHJvdXRlIGZyb20gdGhlIHJlcXVlc3RpbmcgcG9ydC5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgc291cmNlIGlkZW50aWZpZXIgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgcmVjZWl2ZWQgbWVzc2FnZS5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgdmFyIHJldmVyc2VGbG93ID0gdGhpcy5jb250cm9sRmxvd3NbZmxvd10sIG9yaWdpbjtcbiAgaWYgKCFyZXZlcnNlRmxvdykge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVua25vd24gbWVzc2FnZSBzb3VyY2U6IFwiICsgZmxvdyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG9yaWdpbiA9IHRoaXMuaHViLmdldERlc3RpbmF0aW9uKHJldmVyc2VGbG93KTtcblxuICBpZiAodGhpcy5kZWxlZ2F0ZSAmJiByZXZlcnNlRmxvdyAhPT0gdGhpcy5kZWxlZ2F0ZSAmJlxuICAgICAgdGhpcy50b0RlbGVnYXRlW2Zsb3ddKSB7XG4gICAgLy8gU2hpcCBvZmYgdG8gdGhlIGRlbGVnZWVcbiAgICB0aGlzLmVtaXQodGhpcy5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBxdWlldDogdHJ1ZSxcbiAgICAgIGZsb3c6IGZsb3csXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2RlYnVnJykge1xuICAgIHRoaXMuZGVidWcucHJpbnQobWVzc2FnZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2xpbmsnKSB7XG4gICAgdGhpcy5jcmVhdGVMaW5rKG9yaWdpbiwgbWVzc2FnZS5uYW1lLCBtZXNzYWdlLnRvLCBtZXNzYWdlLm92ZXJyaWRlRGVzdCk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnZW52aXJvbm1lbnQnKSB7XG4gICAgdGhpcy5jcmVhdGVMaW5rKG9yaWdpbiwgbWVzc2FnZS5uYW1lLCBuZXcgTW9kdWxlSW50ZXJuYWwodGhpcykpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2RlbGVnYXRlJykge1xuICAgIC8vIEluaXRhdGUgRGVsZWdhdGlvbi5cbiAgICBpZiAodGhpcy5kZWxlZ2F0ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHJldmVyc2VGbG93O1xuICAgIH1cbiAgICB0aGlzLnRvRGVsZWdhdGVbbWVzc2FnZS5mbG93XSA9IHRydWU7XG4gICAgdGhpcy5lbWl0KCdkZWxlZ2F0ZScpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ3Jlc291cmNlJykge1xuICAgIHRoaXMucmVzb3VyY2UuYWRkUmVzb2x2ZXIobWVzc2FnZS5hcmdzWzBdKTtcbiAgICB0aGlzLnJlc291cmNlLmFkZFJldHJpZXZlcihtZXNzYWdlLnNlcnZpY2UsIG1lc3NhZ2UuYXJnc1sxXSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnY29yZScpIHtcbiAgICBpZiAodGhpcy5jb3JlICYmIHJldmVyc2VGbG93ID09PSB0aGlzLmRlbGVnYXRlKSB7XG4gICAgICAobmV3IHRoaXMuY29yZSgpKS5vbk1lc3NhZ2Uob3JpZ2luLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdldENvcmUoZnVuY3Rpb24gKHRvLCBjb3JlKSB7XG4gICAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodG8sIHtcbiAgICAgICAgdHlwZTogJ2NvcmUnLFxuICAgICAgICBjb3JlOiBjb3JlXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcywgcmV2ZXJzZUZsb3cpKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdjbG9zZScpIHtcbiAgICB0aGlzLmRlc3Ryb3kob3JpZ2luKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICd1bmxpbmsnKSB7XG4gICAgdGhpcy5yZW1vdmVMaW5rKG9yaWdpbiwgbWVzc2FnZS50byk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW5rbm93biBjb250cm9sIHJlcXVlc3Q6IFwiICsgbWVzc2FnZS5yZXF1ZXN0KTtcbiAgICB0aGlzLmRlYnVnLmxvZyhKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcG9ydCBtZXNzYWdlcyB3aWxsIGJlIHJvdXRlZCB0byBnaXZlbiBpdHMgaWQuXG4gKiBAbWV0aG9kIGdldFBvcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwb3J0SWQgVGhlIElEIG9mIHRoZSBwb3J0LlxuICogQHJldHVybnMge2Zkb20uUG9ydH0gVGhlIHBvcnQgd2l0aCB0aGF0IElELlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5nZXRQb3J0ID0gZnVuY3Rpb24gKHBvcnRJZCkge1xuICByZXR1cm4gdGhpcy5odWIuZ2V0RGVzdGluYXRpb24odGhpcy5jb250cm9sRmxvd3NbcG9ydElkXSk7XG59O1xuXG4vKipcbiAqIFNldCB1cCBhIHBvcnQgd2l0aCB0aGUgaHViLlxuICogQG1ldGhvZCBzZXR1cFxuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBwb3J0IHRvIHJlZ2lzdGVyLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIChwb3J0KSB7XG4gIGlmICghcG9ydC5pZCkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlJlZnVzaW5nIHRvIHNldHVwIHVuaWRlbnRpZmllZCBwb3J0IFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0pIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJSZWZ1c2luZyB0byByZS1pbml0aWFsaXplIHBvcnQgXCIgKyBwb3J0LmlkKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIXRoaXMuY29uZmlnLmdsb2JhbCkge1xuICAgIHRoaXMub25jZSgnY29uZmlnJywgdGhpcy5zZXR1cC5iaW5kKHRoaXMsIHBvcnQpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmh1Yi5yZWdpc3Rlcihwb3J0KTtcbiAgdmFyIGZsb3cgPSB0aGlzLmh1Yi5pbnN0YWxsKHRoaXMsIHBvcnQuaWQsIFwiY29udHJvbFwiKSxcbiAgICByZXZlcnNlID0gdGhpcy5odWIuaW5zdGFsbChwb3J0LCB0aGlzLmlkLCBwb3J0LmlkKTtcbiAgdGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0gPSBmbG93O1xuICB0aGlzLmRhdGFGbG93c1twb3J0LmlkXSA9IFtyZXZlcnNlXTtcbiAgdGhpcy5yZXZlcnNlRmxvd01hcFtmbG93XSA9IHJldmVyc2U7XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXBbcmV2ZXJzZV0gPSBmbG93O1xuXG4gIGlmIChwb3J0LmxpbmVhZ2UpIHtcbiAgICB0aGlzLmVtaXQoJ21vZHVsZUFkZCcsIHtpZDogcG9ydC5pZCwgbGluZWFnZTogcG9ydC5saW5lYWdlfSk7XG4gIH1cbiAgXG4gIHRoaXMuaHViLm9uTWVzc2FnZShmbG93LCB7XG4gICAgdHlwZTogJ3NldHVwJyxcbiAgICBjaGFubmVsOiByZXZlcnNlLFxuICAgIGNvbmZpZzogdGhpcy5jb25maWdcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFRlYXIgZG93biBhIHBvcnQgb24gdGhlIGh1Yiwgb3IgdGhlIGZ1bGwgbG9jYWwgaHViLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAYXByYW0ge1BvcnQ/fSBwb3J0IFRoZSBwb3J0IHRvIHVucmVnaXN0ZXIuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAocG9ydCkge1xuICBpZiAoIXBvcnQpIHtcbiAgICAvLyBUZWFyIGRvd24gZXZlcnl0aGluZyFcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuY29udHJvbEZsb3dzLCBmdW5jdGlvbiAoZmxvdykge1xuICAgICAgdGhpcy5odWIub25NZXNzYWdlKGZsb3csIHtcbiAgICAgICAgdHlwZTogJ2Nsb3NlJ1xuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmh1Yi50ZWFyZG93bigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghcG9ydC5pZCkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVuYWJsZSB0byB0ZWFyIGRvd24gdW5pZGVudGlmaWVkIHBvcnRcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHBvcnQubGluZWFnZSkge1xuICAgIHRoaXMuZW1pdCgnbW9kdWxlUmVtb3ZlJywge2lkOiBwb3J0LmlkLCBsaW5lYWdlOiBwb3J0LmxpbmVhZ2V9KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcG9ydC5cbiAgZGVsZXRlIHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdO1xuXG4gIC8vIFJlbW92ZSBhc3NvY2lhdGVkIGxpbmtzLlxuICB2YXIgaTtcbiAgZm9yIChpID0gdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICB0aGlzLnJlbW92ZUxpbmsocG9ydCwgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF1baV0pO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBwb3J0LlxuICBkZWxldGUgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF07XG4gIHRoaXMuaHViLmRlcmVnaXN0ZXIocG9ydCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGxpbmsgYmV0d2VlbiB0d28gcG9ydHMuICBMaW5rcyBhcmUgY3JlYXRlZCBpbiBib3RoIGRpcmVjdGlvbnMsXG4gKiBhbmQgYSBtZXNzYWdlIHdpdGggdGhvc2UgY2FwYWJpbGl0aWVzIGlzIHNlbnQgdG8gdGhlIHNvdXJjZSBwb3J0LlxuICogQG1ldGhvZCBjcmVhdGVMaW5rXG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHNvdXJjZSBwb3J0LlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZsb3cgZm9yIG1lc3NhZ2VzIGZyb20gZGVzdGluYXRpb24gdG8gcG9ydC5cbiAqIEBwYXJhbSB7UG9ydH0gZGVzdGluYXRpb24gVGhlIGRlc3RpbmF0aW9uIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW2Rlc3ROYW1lXSBUaGUgZmxvdyBuYW1lIGZvciBtZXNzYWdlcyB0byB0aGUgZGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt0b0Rlc3RdIFRlbGwgdGhlIGRlc3RpbmF0aW9uIGFib3V0IHRoZSBsaW5rLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVMaW5rID0gZnVuY3Rpb24gKHBvcnQsIG5hbWUsIGRlc3RpbmF0aW9uLCBkZXN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9EZXN0KSB7XG4gIGlmICghdGhpcy5jb25maWcuZ2xvYmFsKSB7XG4gICAgdGhpcy5vbmNlKCdjb25maWcnLFxuICAgICAgdGhpcy5jcmVhdGVMaW5rLmJpbmQodGhpcywgcG9ydCwgbmFtZSwgZGVzdGluYXRpb24sIGRlc3ROYW1lKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZiAoIXRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdVbndpbGxpbmcgdG8gbGluayBmcm9tIG5vbi1yZWdpc3RlcmVkIHNvdXJjZS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXRoaXMuY29udHJvbEZsb3dzW2Rlc3RpbmF0aW9uLmlkXSkge1xuICAgIGlmICh0aGlzLnNldHVwKGRlc3RpbmF0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignQ291bGQgbm90IGZpbmQgb3Igc2V0dXAgZGVzdGluYXRpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHZhciBxdWlldCA9IGRlc3RpbmF0aW9uLnF1aWV0IHx8IGZhbHNlLFxuICAgIG91dGdvaW5nTmFtZSA9IGRlc3ROYW1lIHx8ICdkZWZhdWx0JyxcbiAgICBvdXRnb2luZyA9IHRoaXMuaHViLmluc3RhbGwocG9ydCwgZGVzdGluYXRpb24uaWQsIG91dGdvaW5nTmFtZSwgcXVpZXQpLFxuICAgIHJldmVyc2U7XG5cbiAgLy8gUmVjb3ZlciB0aGUgcG9ydCBzbyB0aGF0IGxpc3RlbmVycyBhcmUgaW5zdGFsbGVkLlxuICBkZXN0aW5hdGlvbiA9IHRoaXMuaHViLmdldERlc3RpbmF0aW9uKG91dGdvaW5nKTtcbiAgcmV2ZXJzZSA9IHRoaXMuaHViLmluc3RhbGwoZGVzdGluYXRpb24sIHBvcnQuaWQsIG5hbWUsIHF1aWV0KTtcblxuICB0aGlzLnJldmVyc2VGbG93TWFwW291dGdvaW5nXSA9IHJldmVyc2U7XG4gIHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdLnB1c2gob3V0Z29pbmcpO1xuICB0aGlzLnJldmVyc2VGbG93TWFwW3JldmVyc2VdID0gb3V0Z29pbmc7XG4gIHRoaXMuZGF0YUZsb3dzW2Rlc3RpbmF0aW9uLmlkXS5wdXNoKHJldmVyc2UpO1xuXG4gIGlmICh0b0Rlc3QpIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodGhpcy5jb250cm9sRmxvd3NbZGVzdGluYXRpb24uaWRdLCB7XG4gICAgICB0eXBlOiAnY3JlYXRlTGluaycsXG4gICAgICBuYW1lOiBvdXRnb2luZ05hbWUsXG4gICAgICBjaGFubmVsOiByZXZlcnNlLFxuICAgICAgcmV2ZXJzZTogb3V0Z29pbmdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0sIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB0eXBlOiAnY3JlYXRlTGluaycsXG4gICAgICBjaGFubmVsOiBvdXRnb2luZyxcbiAgICAgIHJldmVyc2U6IHJldmVyc2VcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBsaW5rIGJldHdlZW4gdG8gcG9ydHMuIFRoZSByZXZlcnNlIGxpbmsgd2lsbCBhbHNvIGJlIHJlbW92ZWQuXG4gKiBAbWV0aG9kIHJlbW92ZUxpbmtcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgc291cmNlIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyB0byBiZSByZW1vdmVkLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVMaW5rID0gZnVuY3Rpb24gKHBvcnQsIG5hbWUpIHtcbiAgdmFyIHJldmVyc2UgPSB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihuYW1lKSxcbiAgICByZmxvdyA9IHRoaXMucmV2ZXJzZUZsb3dNYXBbbmFtZV0sXG4gICAgaTtcblxuICBpZiAoIXJldmVyc2UgfHwgIXJmbG93KSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiQ291bGQgbm90IGZpbmQgbWV0YWRhdGEgdG8gcmVtb3ZlIGZsb3c6IFwiICsgbmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuaHViLmdldERlc3RpbmF0aW9uKHJmbG93KS5pZCAhPT0gcG9ydC5pZCkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlNvdXJjZSBwb3J0IGRvZXMgbm90IG93biBmbG93IFwiICsgbmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gTm90aWZ5IHBvcnRzIHRoYXQgYSBjaGFubmVsIGlzIGNsb3NpbmcuXG4gIGkgPSB0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXTtcbiAgaWYgKGkpIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UoaSwge1xuICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgIGNoYW5uZWw6IG5hbWVcbiAgICB9KTtcbiAgfVxuICBpID0gdGhpcy5jb250cm9sRmxvd3NbcmV2ZXJzZS5pZF07XG4gIGlmIChpKSB7XG4gICAgdGhpcy5odWIub25NZXNzYWdlKGksIHtcbiAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICBjaGFubmVsOiByZmxvd1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVW5pbnN0YWxsIHRoZSBjaGFubmVsLlxuICB0aGlzLmh1Yi51bmluc3RhbGwocG9ydCwgbmFtZSk7XG4gIHRoaXMuaHViLnVuaW5zdGFsbChyZXZlcnNlLCByZmxvdyk7XG5cbiAgZGVsZXRlIHRoaXMucmV2ZXJzZUZsb3dNYXBbbmFtZV07XG4gIGRlbGV0ZSB0aGlzLnJldmVyc2VGbG93TWFwW3JmbG93XTtcbiAgdGhpcy5mb3JnZXRGbG93KHJldmVyc2UuaWQsIHJmbG93KTtcbiAgdGhpcy5mb3JnZXRGbG93KHBvcnQuaWQsIG5hbWUpO1xufTtcblxuLyoqXG4gKiBGb3JnZXQgdGhlIGZsb3cgZnJvbSBpZCB3aXRoIGEgZ2l2ZW4gbmFtZS5cbiAqIEBtZXRob2QgZm9yZ2V0Rmxvd1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgcG9ydCBJRCBvZiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZsb3cgbmFtZS5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZm9yZ2V0RmxvdyA9IGZ1bmN0aW9uIChpZCwgbmFtZSkge1xuICB2YXIgaTtcbiAgaWYgKHRoaXMuZGF0YUZsb3dzW2lkXSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRhdGFGbG93c1tpZF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmRhdGFGbG93c1tpZF1baV0gPT09IG5hbWUpIHtcbiAgICAgICAgdGhpcy5kYXRhRmxvd3NbaWRdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29yZSBmcmVlZG9tLmpzIEFQSSBhY3RpdmUgb24gdGhlIGN1cnJlbnQgaHViLlxuICogQG1ldGhvZCBnZXRDb3JlXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2sgdG8gZmlyZSB3aXRoIHRoZSBjb3JlIG9iamVjdC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZ2V0Q29yZSA9IGZ1bmN0aW9uIChjYikge1xuICBpZiAodGhpcy5jb3JlKSB7XG4gICAgY2IodGhpcy5jb3JlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFwaS5nZXRDb3JlKCdjb3JlJywgdGhpcykudGhlbihmdW5jdGlvbiAoY29yZSkge1xuICAgICAgdGhpcy5jb3JlID0gY29yZS5pbnN0O1xuICAgICAgY2IodGhpcy5jb3JlKTtcbiAgICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlcjtcbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcblxuLyoqXG4gKiBUaGUgZXh0ZXJuYWwgUG9ydCBmYWNlIG9mIGEgbW9kdWxlIG9uIGEgaHViLlxuICogQGNsYXNzIE1vZHVsZVxuICogQGV4dGVuZHMgUG9ydFxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0VVJMIFRoZSBtYW5pZmVzdCB0aGlzIG1vZHVsZSBsb2Fkcy5cbiAqIEBwYXJhbSB7U3RyaW5nW119IGNyZWF0b3IgVGhlIGxpbmVhZ2Ugb2YgY3JlYXRpb24gZm9yIHRoaXMgbW9kdWxlLlxuICogQHBhcmFtIHtQb2xpY3l9IFBvbGljeSBUaGUgcG9saWN5IGxvYWRlciBmb3IgZGVwZW5kZW5jaWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBNb2R1bGUgPSBmdW5jdGlvbiAobWFuaWZlc3RVUkwsIG1hbmlmZXN0LCBjcmVhdG9yLCBwb2xpY3kpIHtcbiAgdGhpcy5hcGkgPSBwb2xpY3kuYXBpO1xuICB0aGlzLnBvbGljeSA9IHBvbGljeTtcbiAgdGhpcy5yZXNvdXJjZSA9IHBvbGljeS5yZXNvdXJjZTtcbiAgdGhpcy5kZWJ1ZyA9IHBvbGljeS5kZWJ1ZztcblxuICB0aGlzLmNvbmZpZyA9IHt9O1xuXG4gIHRoaXMuaWQgPSBtYW5pZmVzdFVSTCArIE1hdGgucmFuZG9tKCk7XG4gIHRoaXMubWFuaWZlc3RJZCA9IG1hbmlmZXN0VVJMO1xuICB0aGlzLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gIHRoaXMubGluZWFnZSA9IFt0aGlzLm1hbmlmZXN0SWRdLmNvbmNhdChjcmVhdG9yKTtcblxuICB0aGlzLnF1aWV0ID0gdGhpcy5tYW5pZmVzdC5xdWlldCB8fCBmYWxzZTtcblxuICB0aGlzLmV4dGVybmFsUG9ydE1hcCA9IHt9O1xuICB0aGlzLmludGVybmFsUG9ydE1hcCA9IHt9O1xuICB0aGlzLmRlcGVuZGFudENoYW5uZWxzID0gW107XG4gIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGEgbWVzc2FnZSBmb3IgdGhlIE1vZHVsZS5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgb3JpZ2luIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgcmVjZWl2ZWQuXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJykge1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdzZXR1cCcpIHtcbiAgICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBtZXNzYWdlLmNvbmZpZyk7XG4gICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICB0eXBlOiAnQ29yZSBQcm92aWRlcicsXG4gICAgICAgIHJlcXVlc3Q6ICdjb3JlJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjcmVhdGVMaW5rJyAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZGVidWcuZGVidWcodGhpcyArICdnb3QgY3JlYXRlIGxpbmsgZm9yICcgKyBtZXNzYWdlLm5hbWUpO1xuICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFttZXNzYWdlLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG1zZyA9IHtcbiAgICAgICAgdHlwZTogJ2RlZmF1bHQgY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXMgJiZcbiAgICAgICAgICB0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llc1ttZXNzYWdlLm5hbWVdKSB7XG4gICAgICAgIG1zZy5hcGkgPSB0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llc1ttZXNzYWdlLm5hbWVdLmFwaTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdChtZXNzYWdlLmNoYW5uZWwsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvcmUpIHtcbiAgICAgIHRoaXMuY29yZSA9IG5ldyBtZXNzYWdlLmNvcmUoKTtcbiAgICAgIHRoaXMuZW1pdCgnY29yZScsIG1lc3NhZ2UuY29yZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIC8vIENsb3NpbmcgY2hhbm5lbC5cbiAgICAgIGlmICghbWVzc2FnZS5jaGFubmVsIHx8IG1lc3NhZ2UuY2hhbm5lbCA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXJlZ2lzdGVyRmxvdyhtZXNzYWdlLmNoYW5uZWwsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZShmbG93LCBtZXNzYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0aGlzLmV4dGVybmFsUG9ydE1hcFtmbG93XSA9PT0gZmFsc2UgfHxcbiAgICAgICAgIXRoaXMuZXh0ZXJuYWxQb3J0TWFwW2Zsb3ddKSAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZGVidWcuZGVidWcodGhpcyArICdoYW5kbGluZyBjaGFubmVsIGFubm91bmNlbWVudCBmb3IgJyArIGZsb3cpO1xuICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbZmxvd10gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIE5ldyBpbmNvbWluZyBjb25uZWN0aW9uIGF0dGVtcHRzIHNob3VsZCBnZXQgcm91dGVkIHRvIG1vZEludGVybmFsLlxuICAgICAgICBpZiAodGhpcy5tYW5pZmVzdC5wcm92aWRlcyAmJiB0aGlzLm1vZEludGVybmFsKSB7XG4gICAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgICAgICB0eXBlOiAnQ29ubmVjdGlvbicsXG4gICAgICAgICAgICBjaGFubmVsOiBmbG93LFxuICAgICAgICAgICAgYXBpOiBtZXNzYWdlLmFwaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFuaWZlc3QucHJvdmlkZXMpIHtcbiAgICAgICAgICB0aGlzLm9uY2UoJ21vZEludGVybmFsJywgZnVuY3Rpb24gKGZsb3csIGFwaSkge1xuICAgICAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdDb25uZWN0aW9uJyxcbiAgICAgICAgICAgICAgY2hhbm5lbDogZmxvdyxcbiAgICAgICAgICAgICAgYXBpOiBhcGlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0uYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlLmFwaSkpO1xuICAgICAgICAvLyBGaXJzdCBjb25uZWN0aW9uIHJldGFpbnMgbGVnYWN5IG1hcHBpbmcgYXMgJ2RlZmF1bHQnLlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmV4dGVybmFsUG9ydE1hcFsnZGVmYXVsdCddICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwWydkZWZhdWx0J10gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICAgICAgdGhpcy5vbmNlKCdpbnRlcm5hbENoYW5uZWxSZWFkeScsIGZ1bmN0aW9uIChmbG93KSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9IHRoaXMuaW50ZXJuYWxQb3J0TWFwWydkZWZhdWx0J107XG4gICAgICAgICAgfS5iaW5kKHRoaXMsIGZsb3cpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydCcsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybignd2FpdGluZyBvbiBpbnRlcm5hbCBjaGFubmVsIGZvciBtc2cnKTtcbiAgICAgICAgdGhpcy5vbmNlKCdpbnRlcm5hbENoYW5uZWxSZWFkeScsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10pIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy5lcnJvcignVW5leHBlY3RlZCBtZXNzYWdlIGZyb20gJyArIGZsb3cpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddLCBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xlYW4gdXAgYWZ0ZXIgYSBmbG93IHdoaWNoIGlzIG5vIGxvbmdlciB1c2VkIC8gbmVlZGVkLlxuICogQG1ldGhvZCBkZXJlZ2lzdGVyRkxvd1xuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIGZsb3cgdG8gcmVtb3ZlIG1hcHBpbmdzIGZvci5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW50ZXJuYWwgSWYgdGhlIGZsb3cgbmFtZSBpcyB0aGUgaW50ZXJuYWwgaWRlbnRpZmllci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBXaGV0aGVyIHRoZSBmbG93IHdhcyBzdWNjZXNzZnVsbHkgZGVyZWdpc3RlcmVkLlxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5kZXJlZ2lzdGVyRmxvdyA9IGZ1bmN0aW9uIChmbG93LCBpbnRlcm5hbCkge1xuICB2YXIga2V5LFxuICAgIG1hcCA9IGludGVybmFsID8gdGhpcy5pbnRlcm5hbFBvcnRNYXAgOiB0aGlzLmV4dGVybmFsUG9ydE1hcDtcbiAgLy8gVE9ETzogdGhpcyBpcyBpbmVmZmljaWVudCwgYnV0IHNlZW1zIGxlc3MgY29uZnVzaW5nIHRoYW4gYSAzcmRcbiAgLy8gcmV2ZXJzZSBsb29rdXAgbWFwLlxuICBmb3IgKGtleSBpbiBtYXApIHtcbiAgICBpZiAobWFwW2tleV0gPT09IGZsb3cpIHtcbiAgICAgIGlmIChpbnRlcm5hbCkge1xuICAgICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICAgIHR5cGU6ICdDaGFubmVsIFRlYXJkb3duJyxcbiAgICAgICAgICByZXF1ZXN0OiAndW5saW5rJyxcbiAgICAgICAgICB0bzogdGhpcy5leHRlcm5hbFBvcnRNYXBba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3J0KSB7XG4gICAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICBjaGFubmVsOiB0aGlzLmludGVybmFsUG9ydE1hcFtrZXldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2tleV07XG4gICAgICBkZWxldGUgdGhpcy5pbnRlcm5hbFBvcnRNYXBba2V5XTtcblxuICAgICAgLy8gV2hlbiB0aGVyZSBhcmUgc3RpbGwgbm9uLWRlcGVuZGFudCBjaGFubmVscywga2VlcCBydW5uaW5nXG4gICAgICBmb3IgKGtleSBpbiB0aGlzLmV4dGVybmFsUG9ydE1hcCkge1xuICAgICAgICBpZiAodGhpcy5leHRlcm5hbFBvcnRNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICh0aGlzLmRlcGVuZGFudENoYW5uZWxzLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIHNodXQgZG93biB0aGUgbW9kdWxlLlxuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBBdHRlbXB0IHRvIHN0YXJ0IHRoZSBtb2R1bGUgb25jZSB0aGUgcmVtb3RlIGZyZWVkb20gY29udGV4dFxuICogZXhpc3RzLlxuICogQG1ldGhvZCBzdGFydFxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIFBvcnQ7XG4gIGlmICh0aGlzLnN0YXJ0ZWQgfHwgdGhpcy5wb3J0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgdGhpcy5sb2FkTGlua3MoKTtcbiAgICBQb3J0ID0gdGhpcy5jb25maWcucG9ydFR5cGU7XG4gICAgdGhpcy5wb3J0ID0gbmV3IFBvcnQodGhpcy5tYW5pZmVzdC5uYW1lLCB0aGlzLnJlc291cmNlKTtcbiAgICAvLyBMaXN0ZW4gdG8gYWxsIHBvcnQgbWVzc2FnZXMuXG4gICAgdGhpcy5wb3J0Lm9uKHRoaXMuZW1pdE1lc3NhZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wb3J0LmFkZEVycm9ySGFuZGxlcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ01vZHVsZSBGYWlsZWQnLCBlcnIpO1xuICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgcmVxdWVzdDogJ2Nsb3NlJ1xuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICAvLyBUZWxsIHRoZSBsb2NhbCBwb3J0IHRvIGFzayB1cyBmb3IgaGVscC5cbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgY2hhbm5lbDogJ2NvbnRyb2wnLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ1xuICAgIH0pO1xuXG4gICAgLy8gVGVsbCB0aGUgcmVtb3RlIGxvY2F0aW9uIHRvIGRlbGVnYXRlIGRlYnVnZ2luZy5cbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgdHlwZTogJ1JlZGlyZWN0JyxcbiAgICAgIHJlcXVlc3Q6ICdkZWxlZ2F0ZScsXG4gICAgICBmbG93OiAnZGVidWcnXG4gICAgfSk7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdSZWRpcmVjdCcsXG4gICAgICByZXF1ZXN0OiAnZGVsZWdhdGUnLFxuICAgICAgZmxvdzogJ2NvcmUnXG4gICAgfSk7XG4gICAgXG4gICAgLy8gVGVsbCB0aGUgY29udGFpbmVyIHRvIGluc3RhbnRpYXRlIHRoZSBjb3VudGVycGFydCB0byB0aGlzIGV4dGVybmFsIHZpZXcuXG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdFbnZpcm9ubWVudCBDb25maWd1cmF0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdlbnZpcm9ubWVudCcsXG4gICAgICBuYW1lOiAnTW9kSW50ZXJuYWwnXG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RvcCB0aGUgbW9kdWxlIHdoZW4gaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCwgYW5kIHRlYXItZG93biBzdGF0ZS5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIGlmICh0aGlzLnBvcnQpIHtcbiAgICB0aGlzLnBvcnQub2ZmKCk7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICBjaGFubmVsOiAnY29udHJvbCdcbiAgICB9KTtcbiAgICB0aGlzLnBvcnQuc3RvcCgpO1xuICAgIGRlbGV0ZSB0aGlzLnBvcnQ7XG4gIH1cbiAgZGVsZXRlIHRoaXMucG9saWN5O1xuICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogVGV4dHVhbCBEZXNjcmlwdGlvbiBvZiB0aGUgUG9ydFxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBUaGUgZGVzY3JpcHRpb24gb2YgdGhpcyBQb3J0LlxuICovXG5Nb2R1bGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gXCJbTW9kdWxlIFwiICsgdGhpcy5tYW5pZmVzdC5uYW1lICsgXCJdXCI7XG59O1xuXG4vKipcbiAqIEludGVyY2VwdCBtZXNzYWdlcyBhcyB0aGV5IGFycml2ZSBmcm9tIHRoZSBtb2R1bGUsXG4gKiBtYXBwaW5nIHRoZW0gYmV0d2VlbiBpbnRlcm5hbCBhbmQgZXh0ZXJuYWwgZmxvdyBuYW1lcy5cbiAqIEBtZXRob2QgZW1pdE1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBkZXN0aW5hdGlvbiB0aGUgbW9kdWxlIHdhbnRzIHRvIHNlbmQgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzZW5kLlxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5lbWl0TWVzc2FnZSA9IGZ1bmN0aW9uIChuYW1lLCBtZXNzYWdlKSB7XG4gIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFtuYW1lXSA9PT0gZmFsc2UgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbbmFtZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5lbWl0KCdpbnRlcm5hbENoYW5uZWxSZWFkeScpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBUZXJtaW5hdGUgZGVidWcgcmVkaXJlY3Rpb24gcmVxdWVzdGVkIGluIHN0YXJ0KCkuXG4gIGlmIChuYW1lID09PSAnY29udHJvbCcpIHtcbiAgICBpZiAobWVzc2FnZS5mbG93ID09PSAnZGVidWcnICYmIG1lc3NhZ2UubWVzc2FnZSkge1xuICAgICAgdGhpcy5kZWJ1Zy5mb3JtYXQobWVzc2FnZS5tZXNzYWdlLnNldmVyaXR5LFxuICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZS5zb3VyY2UgfHwgdGhpcy50b1N0cmluZygpLFxuICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZS5tc2cpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5mbG93ID09PSAnY29yZScgJiYgbWVzc2FnZS5tZXNzYWdlKSB7XG4gICAgICBpZiAoIXRoaXMuY29yZSkge1xuICAgICAgICB0aGlzLm9uY2UoJ2NvcmUnLCB0aGlzLmVtaXRNZXNzYWdlLmJpbmQodGhpcywgbmFtZSwgbWVzc2FnZSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdyZWdpc3RlcicpIHtcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnJlcGx5ID0gdGhpcy5wb3J0Lm9uTWVzc2FnZS5iaW5kKHRoaXMucG9ydCwgJ2NvbnRyb2wnKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbbWVzc2FnZS5tZXNzYWdlLmlkXSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3JlLm9uTWVzc2FnZSh0aGlzLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5uYW1lID09PSAnTW9kSW50ZXJuYWwnICYmICF0aGlzLm1vZEludGVybmFsKSB7XG4gICAgICB0aGlzLm1vZEludGVybmFsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgIHR5cGU6ICdJbml0aWFsaXphdGlvbicsXG4gICAgICAgIGlkOiB0aGlzLm1hbmlmZXN0SWQsXG4gICAgICAgIGFwcElkOiB0aGlzLmlkLFxuICAgICAgICBtYW5pZmVzdDogdGhpcy5tYW5pZmVzdCxcbiAgICAgICAgbGluZWFnZTogdGhpcy5saW5lYWdlLFxuICAgICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KCdtb2RJbnRlcm5hbCcpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY3JlYXRlTGluaycpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW21lc3NhZ2UubmFtZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKG1lc3NhZ2UuY2hhbm5lbCwge1xuICAgICAgICB0eXBlOiAnY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KCdpbnRlcm5hbENoYW5uZWxSZWFkeScpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJGbG93KG1lc3NhZ2UuY2hhbm5lbCwgdHJ1ZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdNb2RJbnRlcm5hbCcgJiYgbWVzc2FnZS50eXBlID09PSAncmVhZHknICYmICF0aGlzLnN0YXJ0ZWQpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfSBlbHNlIGlmIChuYW1lID09PSAnTW9kSW50ZXJuYWwnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3Jlc29sdmUnKSB7XG4gICAgdGhpcy5yZXNvdXJjZS5nZXQodGhpcy5tYW5pZmVzdElkLCBtZXNzYWdlLmRhdGEpLnRoZW4oZnVuY3Rpb24gKGlkLCBkYXRhKSB7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgICAgdHlwZTogJ3Jlc29sdmUgcmVzcG9uc2UnLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzLCBtZXNzYWdlLmlkKSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdFcnJvciBSZXNvbHZpbmcgVVJMIGZvciBNb2R1bGUuJyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbFBvcnRNYXBbbmFtZV0sIG1lc3NhZ2UpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmVxdWVzdCB0aGUgZXh0ZXJuYWwgcm91dGVzIHVzZWQgYnkgdGhpcyBtb2R1bGUuXG4gKiBAbWV0aG9kIGxvYWRMaW5rc1xuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5sb2FkTGlua3MgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpLCBjaGFubmVscyA9IFsnZGVmYXVsdCddLCBuYW1lLCBkZXA7XG5cbiAgaWYgKHRoaXMubWFuaWZlc3QucGVybWlzc2lvbnMpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5tYW5pZmVzdC5wZXJtaXNzaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbmFtZSA9IHRoaXMubWFuaWZlc3QucGVybWlzc2lvbnNbaV07XG4gICAgICBpZiAoY2hhbm5lbHMuaW5kZXhPZihuYW1lKSA8IDAgJiYgbmFtZS5pbmRleE9mKCdjb3JlLicpID09PSAwKSB7XG4gICAgICAgIGNoYW5uZWxzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMucHVzaChuYW1lKTtcbiAgICAgICAgZGVwID0gbmV3IFByb3ZpZGVyKHRoaXMuYXBpLmdldChuYW1lKS5kZWZpbml0aW9uLCB0aGlzLmRlYnVnKTtcbiAgICAgICAgdGhpcy5hcGkucHJvdmlkZUNvcmUobmFtZSwgZGVwLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICAgIHR5cGU6ICdDb3JlIExpbmsgdG8gJyArIG5hbWUsXG4gICAgICAgICAgcmVxdWVzdDogJ2xpbmsnLFxuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdG86IGRlcFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llcywgZnVuY3Rpb24gKGRlc2MsIG5hbWUpIHtcbiAgICAgIGlmIChjaGFubmVscy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgICBjaGFubmVscy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLmRlcGVuZGFudENoYW5uZWxzLnB1c2gobmFtZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc291cmNlLmdldCh0aGlzLm1hbmlmZXN0SWQsIGRlc2MudXJsKS50aGVuKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdGhpcy5wb2xpY3kuZ2V0KHRoaXMubGluZWFnZSwgdXJsKS50aGVuKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUVudihuYW1lLCBkZXAubWFuaWZlc3QpO1xuICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgICAgICB0eXBlOiAnTGluayB0byAnICsgbmFtZSxcbiAgICAgICAgICAgIHJlcXVlc3Q6ICdsaW5rJyxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBvdmVycmlkZURlc3Q6IG5hbWUgKyAnLicgKyB0aGlzLmlkLFxuICAgICAgICAgICAgdG86IGRlcFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICB0aGlzLmRlYnVnLndhcm4oJ2ZhaWxlZCB0byBsb2FkIGRlcDogJywgbmFtZSwgZXJyKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLmRlYnVnLndhcm4oJ2ZhaWxlZCB0byBsb2FkIGRlcDogJywgbmFtZSwgZXJyKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuICAvLyBOb3RlIHRoYXQgbWVzc2FnZXMgY2FuIGJlIHN5bmNocm9ub3VzLCBzbyBzb21lIHBvcnRzIG1heSBhbHJlYWR5IGJlIGJvdW5kLlxuICBmb3IgKGkgPSAwOyBpIDwgY2hhbm5lbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFtjaGFubmVsc1tpXV0gPSB0aGlzLmV4dGVybmFsUG9ydE1hcFtjaGFubmVsc1tpXV0gfHwgZmFsc2U7XG4gICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbY2hhbm5lbHNbaV1dID0gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlIHRoZSBtb2R1bGUgZW52aXJvbm1lbnQgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBhIGRlcGVuZGVudCBtYW5pZmVzdC5cbiAqIEBtZXRob2QgdXBkYXRlRW52XG4gKiBAcGFyYW0ge1N0cmluZ30gZGVwIFRoZSBkZXBlbmRlbmN5XG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IG9mIHRoZSBkZXBlbmRlbmN5XG4gKi9cbk1vZHVsZS5wcm90b3R5cGUudXBkYXRlRW52ID0gZnVuY3Rpb24gKGRlcCwgbWFuaWZlc3QpIHtcbiAgaWYgKCFtYW5pZmVzdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXRoaXMubW9kSW50ZXJuYWwpIHtcbiAgICB0aGlzLm9uY2UoJ21vZEludGVybmFsJywgdGhpcy51cGRhdGVFbnYuYmluZCh0aGlzLCBkZXAsIG1hbmlmZXN0KSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICB2YXIgbWV0YWRhdGE7XG5cbiAgLy8gRGVjaWRlIGlmL3doYXQgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgZXhwb3J0ZWQuXG4gIC8vIEtlZXAgaW4gc3luYyB3aXRoIE1vZHVsZUludGVybmFsLnVwZGF0ZUVudlxuICBtZXRhZGF0YSA9IHtcbiAgICBuYW1lOiBtYW5pZmVzdC5uYW1lLFxuICAgIGljb246IG1hbmlmZXN0Lmljb24sXG4gICAgZGVzY3JpcHRpb246IG1hbmlmZXN0LmRlc2NyaXB0aW9uLFxuICAgIGFwaTogbWFuaWZlc3QuYXBpXG4gIH07XG4gIFxuICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICB0eXBlOiAnbWFuaWZlc3QnLFxuICAgIG5hbWU6IGRlcCxcbiAgICBtYW5pZmVzdDogbWV0YWRhdGFcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgQXBpSW50ZXJmYWNlID0gcmVxdWlyZSgnLi9wcm94eS9hcGlJbnRlcmZhY2UnKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcbnZhciBQcm94eUJpbmRlciA9IHJlcXVpcmUoJy4vcHJveHliaW5kZXInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogVGhlIGludGVybmFsIGxvZ2ljIGZvciBtb2R1bGUgc2V0dXAsIHdoaWNoIG1ha2VzIHN1cmUgdGhlIHB1YmxpY1xuICogZmFjaW5nIGV4cG9ydHMgaGF2ZSBhcHByb3ByaWF0ZSBwcm9wZXJ0aWVzLCBhbmQgbG9hZCB1c2VyIHNjcmlwdHMuXG4gKiBAY2xhc3MgTW9kdWxlSW50ZXJuYWxcbiAqIEBleHRlbmRzIFBvcnRcbiAqIEBwYXJhbSB7UG9ydH0gbWFuYWdlciBUaGUgbWFuYWdlciBpbiB0aGlzIG1vZHVsZSB0byB1c2UgZm9yIHJvdXRpbmcgc2V0dXAuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIE1vZHVsZUludGVybmFsID0gZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgdGhpcy5jb25maWcgPSB7fTtcbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgdGhpcy5kZWJ1ZyA9IG1hbmFnZXIuZGVidWc7XG4gIHRoaXMuYmluZGVyID0gbmV3IFByb3h5QmluZGVyKHRoaXMubWFuYWdlcik7XG4gIHRoaXMuYXBpID0gdGhpcy5tYW5hZ2VyLmFwaTtcbiAgdGhpcy5tYW5pZmVzdHMgPSB7fTtcbiAgdGhpcy5wcm92aWRlcnMgPSB7fTtcbiAgXG4gIHRoaXMuaWQgPSAnTW9kdWxlSW50ZXJuYWwnO1xuICB0aGlzLnBlbmRpbmdQb3J0cyA9IDA7XG4gIHRoaXMucmVxdWVzdHMgPSB7fTtcblxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogTWVzc2FnZSBoYW5kbGVyIGZvciB0aGlzIHBvcnQuXG4gKiBUaGlzIHBvcnQgb25seSBoYW5kbGVzIHR3byBtZXNzYWdlczpcbiAqIFRoZSBmaXJzdCBpcyBpdHMgc2V0dXAgZnJvbSB0aGUgbWFuYWdlciwgd2hpY2ggaXQgdXNlcyBmb3IgY29uZmlndXJhdGlvbi5cbiAqIFRoZSBzZWNvbmQgaXMgZnJvbSB0aGUgbW9kdWxlIGNvbnRyb2xsZXIgKGZkb20ucG9ydC5Nb2R1bGUpLCB3aGljaCBwcm92aWRlc1xuICogdGhlIG1hbmlmZXN0IGluZm8gZm9yIHRoZSBtb2R1bGUuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIGRldGluYXRpb24gb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcpIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbENoYW5uZWwgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgbWVzc2FnZS5jb25maWcpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgIXRoaXMuYXBwSWQpIHtcbiAgICAvLyBSZWNvdmVyIHRoZSBJRCBvZiB0aGlzIG1vZHVsZTpcbiAgICB0aGlzLnBvcnQgPSB0aGlzLm1hbmFnZXIuaHViLmdldERlc3RpbmF0aW9uKG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgdGhpcy5leHRlcm5hbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5hcHBJZCA9IG1lc3NhZ2UuYXBwSWQ7XG4gICAgdGhpcy5saW5lYWdlID0gbWVzc2FnZS5saW5lYWdlO1xuXG4gICAgdmFyIG9iamVjdHMgPSB0aGlzLm1hcFByb3hpZXMobWVzc2FnZS5tYW5pZmVzdCk7XG5cbiAgICB0aGlzLmdlbmVyYXRlRW52KG1lc3NhZ2UubWFuaWZlc3QsIG9iamVjdHMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZExpbmtzKG9iamVjdHMpO1xuICAgIH0uYmluZCh0aGlzKSkudGhlbih0aGlzLmxvYWRTY3JpcHRzLmJpbmQodGhpcywgbWVzc2FnZS5pZCxcbiAgICAgICAgbWVzc2FnZS5tYW5pZmVzdC5hcHAuc2NyaXB0KSkudGhlbihudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aGlzLmRlYnVnLmVycm9yKCdDb3VsZCBub3Qgc2V0IHVwIG1vZHVsZSAnICsgdGhpcy5hcHBJZCArICc6ICcsIGVycik7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgdGhpcy5yZXF1ZXN0c1ttZXNzYWdlLmlkXSkge1xuICAgIHRoaXMucmVxdWVzdHNbbWVzc2FnZS5pZF0obWVzc2FnZS5kYXRhKTtcbiAgICBkZWxldGUgdGhpcy5yZXF1ZXN0c1ttZXNzYWdlLmlkXTtcbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgbWVzc2FnZS50eXBlID09PSAnbWFuaWZlc3QnKSB7XG4gICAgdGhpcy5lbWl0KCdtYW5pZmVzdCcsIG1lc3NhZ2UpO1xuICAgIHRoaXMudXBkYXRlTWFuaWZlc3QobWVzc2FnZS5uYW1lLCBtZXNzYWdlLm1hbmlmZXN0KTtcbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgbWVzc2FnZS50eXBlID09PSAnQ29ubmVjdGlvbicpIHtcbiAgICAvLyBNdWx0aXBsZSBjb25uZWN0aW9ucyBjYW4gYmUgbWFkZSB0byB0aGUgZGVmYXVsdCBwcm92aWRlci5cbiAgICBpZiAobWVzc2FnZS5hcGkgJiYgdGhpcy5wcm92aWRlcnNbbWVzc2FnZS5hcGldKSB7XG4gICAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayh0aGlzLnByb3ZpZGVyc1ttZXNzYWdlLmFwaV0sIG1lc3NhZ2UuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0LCBtZXNzYWdlLmNoYW5uZWwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0UG9ydCAmJlxuICAgICAgICAgICAgICAgKG1lc3NhZ2UuYXBpID09PSB0aGlzLmRlZmF1bHRQb3J0LmFwaSB8fCAhbWVzc2FnZS5hcGkpKSB7XG4gICAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayh0aGlzLmRlZmF1bHRQb3J0LCBtZXNzYWdlLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnQsIG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnQnLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IGEgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIFBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgZGVzY3JpcHRpb24gb2YgdGhpcyBQb3J0LlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBcIltFbnZpcm9ubWVudCBIZWxwZXJdXCI7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGFuIGV4dGVybmFseSB2aXNpc2JsZSBuYW1lc3BhY2VcbiAqIEBtZXRob2QgZ2VuZXJhdGVFbnZcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIG1vZHVsZS5cbiAqIEBwYXJhbSB7T2JqZWN0W119IGl0ZW1zIE90aGVyIGludGVyZmFjZXMgdG8gbG9hZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2Ugd2hlbiB0aGUgZXh0ZXJuYWwgbmFtZXNwYWNlIGlzIHZpc2libGUuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUuZ2VuZXJhdGVFbnYgPSBmdW5jdGlvbiAobWFuaWZlc3QsIGl0ZW1zKSB7XG4gIHJldHVybiB0aGlzLmJpbmRlci5iaW5kRGVmYXVsdCh0aGlzLnBvcnQsIHRoaXMuYXBpLCBtYW5pZmVzdCwgdHJ1ZSkudGhlbihcbiAgICBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgYmluZGluZy5wb3J0LmFwaSA9IGJpbmRpbmcuZXh0ZXJuYWwuYXBpO1xuICAgICAgdGhpcy5kZWZhdWx0UG9ydCA9IGJpbmRpbmcucG9ydDtcbiAgICAgIGlmIChiaW5kaW5nLmV4dGVybmFsLmFwaSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoaXRlbXNbaV0ubmFtZSA9PT0gYmluZGluZy5leHRlcm5hbC5hcGkgJiYgaXRlbXNbaV0uZGVmLnByb3ZpZGVzKSB7XG4gICAgICAgICAgICBpdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5mcmVlZG9tID0gYmluZGluZy5leHRlcm5hbDtcbiAgICB9LmJpbmQodGhpcylcbiAgKTtcbn07XG5cbi8qKlxuICogQXR0YWNoIGEgcHJveHkgdG8gdGhlIGV4dGVybmFsbHkgdmlzaWJsZSBuYW1lc3BhY2UuXG4gKiBAbWV0aG9kIGF0dGFjaFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3h5LlxuICogQHBhcmFtIHtCb29sZWFufSBwcm92aWRlcyBJZiB0aGlzIHByb3h5IGlzIGEgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge1Byb3h5SW50ZXJmYWNlfSBwcm94eSBUaGUgcHJveHkgdG8gYXR0YWNoLlxuICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgQVBJIHRoZSBwcm94eSBpbXBsZW1lbnRzLlxuICogQHByaXZhdGUuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAobmFtZSwgcHJvdmlkZXMsIHByb3h5KSB7XG4gIHZhciBleHAgPSB0aGlzLmNvbmZpZy5nbG9iYWwuZnJlZWRvbTtcbiAgXG4gIGlmIChwcm92aWRlcykge1xuICAgIHRoaXMucHJvdmlkZXJzW25hbWVdID0gcHJveHkucG9ydDtcbiAgfVxuXG4gIGlmICghZXhwW25hbWVdKSB7XG4gICAgZXhwW25hbWVdID0gcHJveHkuZXh0ZXJuYWw7XG4gICAgaWYgKHRoaXMubWFuaWZlc3RzW25hbWVdKSB7XG4gICAgICBleHBbbmFtZV0ubWFuaWZlc3QgPSB0aGlzLm1hbmlmZXN0c1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnBlbmRpbmdQb3J0cyAtPSAxO1xuICBpZiAodGhpcy5wZW5kaW5nUG9ydHMgPT09IDApIHtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVxdWVzdCBhIHNldCBvZiBwcm94eSBpbnRlcmZhY2VzLCBhbmQgYmluZCB0aGVtIHRvIHRoZSBleHRlcm5hbFxuICogbmFtZXNwYWNlLlxuICogQG1ldGhvZCBsb2FkTGlua3NcbiAqIEBwYXJhbSB7T2JqZWN0W119IGl0ZW1zIERlc2NyaXB0b3JzIG9mIHRoZSBwcm94eSBwb3J0cyB0byBsb2FkLlxuICogQHByaXZhdGVcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciB3aGVuIGFsbCBsaW5rcyBhcmUgbG9hZGVkLlxuICovXG4vL1RPRE8od2lsbHNjb3R0KTogcHJvbWlzZSBzaG91bGQgYmUgY2hhaW5lZCwgcmF0aGVyIHRoYW4gZ29pbmcgdGhyb3VnaCBldmVudHMuXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUubG9hZExpbmtzID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gIHZhciBpLCBwcm94eSwgcHJvdmlkZXIsIGNvcmUsXG4gICAgbWFuaWZlc3RQcmVkaWNhdGUgPSBmdW5jdGlvbiAobmFtZSwgZmxvdywgbXNnKSB7XG4gICAgICByZXR1cm4gZmxvdyA9PT0gJ21hbmlmZXN0JyAmJiBtc2cubmFtZSA9PT0gbmFtZTtcbiAgICB9LFxuICAgIG9uTWFuaWZlc3QgPSBmdW5jdGlvbiAoaXRlbSwgbXNnKSB7XG4gICAgICB2YXIgZGVmaW5pdGlvbiA9IHtcbiAgICAgICAgbmFtZTogaXRlbS5hcGlcbiAgICAgIH07XG4gICAgICBpZiAoIW1zZy5tYW5pZmVzdC5hcGkgfHwgIW1zZy5tYW5pZmVzdC5hcGlbaXRlbS5hcGldKSB7XG4gICAgICAgIGRlZmluaXRpb24uZGVmaW5pdGlvbiA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbml0aW9uLmRlZmluaXRpb24gPSBtc2cubWFuaWZlc3QuYXBpW2l0ZW0uYXBpXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmluZGVyLmdldEV4dGVybmFsKHRoaXMucG9ydCwgaXRlbS5uYW1lLCBkZWZpbml0aW9uKS50aGVuKFxuICAgICAgICB0aGlzLmF0dGFjaC5iaW5kKHRoaXMsIGl0ZW0ubmFtZSwgZmFsc2UpXG4gICAgICApO1xuICAgIH0uYmluZCh0aGlzKSxcbiAgICBwcm9taXNlID0gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydCcsIHJlc29sdmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGl0ZW1zW2ldLmFwaSAmJiAhaXRlbXNbaV0uZGVmKSB7XG4gICAgICBpZiAodGhpcy5tYW5pZmVzdHNbaXRlbXNbaV0ubmFtZV0pIHtcbiAgICAgICAgb25NYW5pZmVzdChpdGVtc1tpXSwge1xuICAgICAgICAgIG1hbmlmZXN0OiB0aGlzLm1hbmlmZXN0c1tpdGVtc1tpXS5uYW1lXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25jZShtYW5pZmVzdFByZWRpY2F0ZS5iaW5kKHt9LCBpdGVtc1tpXS5uYW1lKSxcbiAgICAgICAgICAgICAgICAgIG9uTWFuaWZlc3QuYmluZCh0aGlzLCBpdGVtc1tpXSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJpbmRlci5nZXRFeHRlcm5hbCh0aGlzLnBvcnQsIGl0ZW1zW2ldLm5hbWUsIGl0ZW1zW2ldLmRlZikudGhlbihcbiAgICAgICAgdGhpcy5hdHRhY2guYmluZCh0aGlzLCBpdGVtc1tpXS5uYW1lLCBpdGVtc1tpXS5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS5kZWYucHJvdmlkZXMpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnBlbmRpbmdQb3J0cyArPSAxO1xuICB9XG4gIFxuICAvLyBBbGxvdyByZXNvbHV0aW9uIG9mIGZpbGVzIGJ5IHBhcmVudC5cbiAgdGhpcy5tYW5hZ2VyLnJlc291cmNlLmFkZFJlc29sdmVyKGZ1bmN0aW9uIChtYW5pZmVzdCwgdXJsLCByZXNvbHZlKSB7XG4gICAgdmFyIGlkID0gdXRpbC5nZXRJZCgpO1xuICAgIHRoaXMucmVxdWVzdHNbaWRdID0gcmVzb2x2ZTtcbiAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbENoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdyZXNvbHZlJyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGRhdGE6IHVybFxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIC8vIEF0dGFjaCBDb3JlLlxuICB0aGlzLnBlbmRpbmdQb3J0cyArPSAxO1xuXG4gIGNvcmUgPSB0aGlzLmFwaS5nZXQoJ2NvcmUnKS5kZWZpbml0aW9uO1xuICBwcm92aWRlciA9IG5ldyBQcm92aWRlcihjb3JlLCB0aGlzLmRlYnVnKTtcbiAgdGhpcy5tYW5hZ2VyLmdldENvcmUoZnVuY3Rpb24gKENvcmVQcm92KSB7XG4gICAgbmV3IENvcmVQcm92KHRoaXMubWFuYWdlcikuc2V0SWQodGhpcy5saW5lYWdlKTtcbiAgICBwcm92aWRlci5nZXRJbnRlcmZhY2UoKS5wcm92aWRlQXN5bmNocm9ub3VzKENvcmVQcm92KTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgIHR5cGU6ICdMaW5rIHRvIGNvcmUnLFxuICAgIHJlcXVlc3Q6ICdsaW5rJyxcbiAgICBuYW1lOiAnY29yZScsXG4gICAgdG86IHByb3ZpZGVyXG4gIH0pO1xuICBcbiAgdGhpcy5iaW5kZXIuZ2V0RXh0ZXJuYWwocHJvdmlkZXIsICdkZWZhdWx0Jywge1xuICAgIG5hbWU6ICdjb3JlJyxcbiAgICBkZWZpbml0aW9uOiBjb3JlXG4gIH0pLnRoZW4oXG4gICAgdGhpcy5hdHRhY2guYmluZCh0aGlzLCAnY29yZScsIGZhbHNlKVxuICApO1xuXG5cbi8vICBwcm94eSA9IG5ldyBQcm94eShBcGlJbnRlcmZhY2UuYmluZCh7fSwgY29yZSksIHRoaXMuZGVidWcpO1xuLy8gIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHByb3ZpZGVyLCAnZGVmYXVsdCcsIHByb3h5KTtcbi8vICB0aGlzLmF0dGFjaCgnY29yZScsIHtwb3J0OiBwciwgZXh0ZXJuYWw6IHByb3h5fSk7XG5cbiAgaWYgKHRoaXMucGVuZGluZ1BvcnRzID09PSAwKSB7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSB0aGUgZXhwb3J0ZWQgbWFuaWZlc3Qgb2YgYSBkZXBlbmRlbmN5LlxuICogU2V0cyBpdCBpbnRlcm5hbGx5IGlmIG5vdCB5ZXQgZXhwb3J0ZWQsIG9yIGF0dGFjaGVzIHRoZSBwcm9wZXJ0eSBpZiBpdFxuICogaXMgbG9hZGVkIGFmdGVyIHRoZSBtb2R1bGUgaGFzIHN0YXJ0ZWQgKHdlIGRvbid0IGRlbGF5IHN0YXJ0IHRvIHJldHJlaXZlXG4gKiB0aGUgbWFuaWZlc3Qgb2YgdGhlIGRlcGVuZGVuY3kuKVxuICogQG1ldGhvZCB1cGRhdGVNYW5pZmVzdFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIERlcGVuZGVuY3lcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIGRlcGVuZGVuY3lcbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLnVwZGF0ZU1hbmlmZXN0ID0gZnVuY3Rpb24gKG5hbWUsIG1hbmlmZXN0KSB7XG4gIHZhciBleHAgPSB0aGlzLmNvbmZpZy5nbG9iYWwuZnJlZWRvbTtcblxuICBpZiAoZXhwICYmIGV4cFtuYW1lXSkge1xuICAgIGV4cFtuYW1lXS5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWFuaWZlc3RzW25hbWVdID0gbWFuaWZlc3Q7XG4gIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoaWNoIHByb3h5IHBvcnRzIHNob3VsZCBiZSBleHBvc2VkIGJ5IHRoaXMgbW9kdWxlLlxuICogQG1ldGhvZCBtYXBQcm94aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgdGhlIG1vZHVsZSBKU09OIG1hbmlmZXN0LlxuICogQHJldHVybiB7T2JqZWN0W119IHByb3h5IGRlc2NyaXB0b3JzIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0LlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUubWFwUHJveGllcyA9IGZ1bmN0aW9uIChtYW5pZmVzdCkge1xuICB2YXIgcHJveGllcyA9IFtdLCBzZWVuID0gWydjb3JlJ10sIGksIG9iajtcbiAgXG4gIGlmIChtYW5pZmVzdC5wZXJtaXNzaW9ucykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBtYW5pZmVzdC5wZXJtaXNzaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdC5wZXJtaXNzaW9uc1tpXSxcbiAgICAgICAgZGVmOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICBvYmouZGVmID0gdGhpcy5hcGkuZ2V0KG9iai5uYW1lKTtcbiAgICAgIGlmIChzZWVuLmluZGV4T2Yob2JqLm5hbWUpIDwgMCAmJiBvYmouZGVmKSB7XG4gICAgICAgIHByb3hpZXMucHVzaChvYmopO1xuICAgICAgICBzZWVuLnB1c2gob2JqLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaWYgKG1hbmlmZXN0LmRlcGVuZGVuY2llcykge1xuICAgIHV0aWwuZWFjaFByb3AobWFuaWZlc3QuZGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoZGVzYywgbmFtZSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBhcGk6IGRlc2MuYXBpXG4gICAgICB9O1xuICAgICAgaWYgKHNlZW4uaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgaWYgKGRlc2MuYXBpKSB7XG4gICAgICAgICAgb2JqLmRlZiA9IHRoaXMuYXBpLmdldChkZXNjLmFwaSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJveGllcy5wdXNoKG9iaik7XG4gICAgICAgIHNlZW4ucHVzaChuYW1lKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIFxuICBpZiAobWFuaWZlc3QucHJvdmlkZXMpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbWFuaWZlc3QucHJvdmlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgbmFtZTogbWFuaWZlc3QucHJvdmlkZXNbaV0sXG4gICAgICAgIGRlZjogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgb2JqLmRlZiA9IHRoaXMuYXBpLmdldChvYmoubmFtZSk7XG4gICAgICBpZiAob2JqLmRlZikge1xuICAgICAgICBvYmouZGVmLnByb3ZpZGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAobWFuaWZlc3QuYXBpICYmIG1hbmlmZXN0LmFwaVtvYmoubmFtZV0pIHtcbiAgICAgICAgb2JqLmRlZiA9IHtcbiAgICAgICAgICBuYW1lOiBvYmoubmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9uOiBtYW5pZmVzdC5hcGlbb2JqLm5hbWVdLFxuICAgICAgICAgIHByb3ZpZGVzOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnLndhcm4oJ01vZHVsZSB3aWxsIG5vdCBwcm92aWRlIFwiJyArIG9iai5uYW1lICtcbiAgICAgICAgICAnXCIsIHNpbmNlIG5vIGRlY2xhcmF0aW9uIGNhbiBiZSBmb3VuZC4nKTtcbiAgICAgICAgLypqc2xpbnQgY29udGludWU6dHJ1ZSovXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLypqc2xpbnQgY29udGludWU6ZmFsc2UqL1xuICAgICAgaWYgKHNlZW4uaW5kZXhPZihvYmoubmFtZSkgPCAwKSB7XG4gICAgICAgIHByb3hpZXMucHVzaChvYmopO1xuICAgICAgICBzZWVuLnB1c2gob2JqLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm94aWVzO1xufTtcblxuLyoqXG4gKiBMb2FkIGV4dGVybmFsIHNjcmlwdHMgaW50byB0aGlzIG5hbWVzcGFjZS5cbiAqIEBtZXRob2QgbG9hZFNjcmlwdHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBmcm9tIFRoZSBVUkwgb2YgdGhpcyBtb2R1bGVzJ3MgbWFuaWZlc3QuXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBzY3JpcHRzIFRoZSBVUkxzIG9mIHRoZSBzY3JpcHRzIHRvIGxvYWQuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5sb2FkU2NyaXB0cyA9IGZ1bmN0aW9uIChmcm9tLCBzY3JpcHRzKSB7XG4gIC8vIFRPRE8oc2Fsb21lZ2VvKTogYWRkIGEgdGVzdCBmb3IgZmFpbHVyZS5cbiAgdmFyIGltcG9ydGVyID0gZnVuY3Rpb24gKHNjcmlwdCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5pbXBvcnRTY3JpcHRzKHNjcmlwdCk7XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSxcbiAgICBzY3JpcHRzX2NvdW50LFxuICAgIGxvYWQ7XG4gIGlmICh0eXBlb2Ygc2NyaXB0cyA9PT0gJ3N0cmluZycpIHtcbiAgICBzY3JpcHRzX2NvdW50ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBzY3JpcHRzX2NvdW50ID0gc2NyaXB0cy5sZW5ndGg7XG4gIH1cblxuICBsb2FkID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICBpZiAobmV4dCA9PT0gc2NyaXB0c19jb3VudCkge1xuICAgICAgdGhpcy5lbWl0KHRoaXMuZXh0ZXJuYWxDaGFubmVsLCB7XG4gICAgICAgIHR5cGU6IFwicmVhZHlcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjcmlwdDtcbiAgICBpZiAodHlwZW9mIHNjcmlwdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzY3JpcHQgPSBzY3JpcHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQgPSBzY3JpcHRzW25leHRdO1xuICAgIH1cblxuICAgIHRoaXMubWFuYWdlci5yZXNvdXJjZS5nZXQoZnJvbSwgc2NyaXB0KS50aGVuKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIHRoaXMudHJ5TG9hZChpbXBvcnRlciwgdXJsKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9hZChuZXh0ICsgMSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcblxuXG5cbiAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGltcG9ydGVyID0gZnVuY3Rpb24gKHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgc2NyaXB0ID0gdGhpcy5jb25maWcuZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSwgdHJ1ZSk7XG4gICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGxvYWQoMCk7XG59O1xuXG4vKipcbiAqIEF0dGVtcHQgdG8gbG9hZCByZXNvbHZlZCBzY3JpcHRzIGludG8gdGhlIG5hbWVzcGFjZS5cbiAqIEBtZXRob2QgdHJ5TG9hZFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGltcG9ydGVyIFRoZSBhY3R1YWwgaW1wb3J0IGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSB1cmxzIFRoZSByZXNvdmVkIFVSTHMgdG8gbG9hZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBjb21wbGV0aW9uIG9mIGxvYWRcbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLnRyeUxvYWQgPSBmdW5jdGlvbiAoaW1wb3J0ZXIsIHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoaW1wb3J0ZXIuYmluZCh7fSwgdXJsKSkudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oZS5zdGFjayk7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcihcIkVycm9yIGxvYWRpbmcgXCIgKyB1cmwsIGUpO1xuICAgIHRoaXMuZGVidWcuZXJyb3IoXCJJZiB0aGUgc3RhY2sgdHJhY2UgaXMgbm90IHVzZWZ1bCwgc2VlIGh0dHBzOi8vXCIgK1xuICAgICAgICBcImdpdGh1Yi5jb20vZnJlZWRvbWpzL2ZyZWVkb20vd2lraS9EZWJ1Z2dpbmctU2NyaXB0LVBhcnNlLUVycm9yc1wiKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlSW50ZXJuYWw7XG4iLCIvKmdsb2JhbHMgWE1MSHR0cFJlcXVlc3QgKi9cbi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBNb2R1bGUgPSByZXF1aXJlKCcuL21vZHVsZScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBUaGUgUG9saWN5IHJlZ2lzdHJ5IGZvciBmcmVlZG9tLmpzLiAgVXNlZCB0byBsb29rIHVwIG1vZHVsZXMgYW5kIHByb3ZpZGVcbiAqIG1pZ3JhdGlvbiBhbmQgY29hbGxlc2luZyBvZiBleGVjdXRpb24uXG4gKiBAQ2xhc3MgUG9saWN5XG4gKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXIgVGhlIG1hbmFnZXIgb2YgdGhlIGFjdGl2ZSBydW50aW1lLlxuICogQHBhcmFtIHtSZXNvdXJjZX0gcmVzb3VyY2UgVGhlIHJlc291cmNlIGxvYWRlciBvZiB0aGUgYWN0aXZlIHJ1bnRpbWUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBsb2NhbCBjb25maWcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFBvbGljeSA9IGZ1bmN0aW9uKG1hbmFnZXIsIHJlc291cmNlLCBjb25maWcpIHtcbiAgdGhpcy5hcGkgPSBtYW5hZ2VyLmFwaTtcbiAgdGhpcy5kZWJ1ZyA9IG1hbmFnZXIuZGVidWc7XG4gIHRoaXMubG9jYXRpb24gPSBjb25maWcubG9jYXRpb247XG4gIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZTtcblxuICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgdGhpcy5ydW50aW1lcyA9IFtdO1xuICB0aGlzLnBvbGljaWVzID0gW107XG4gIHRoaXMucGVuZGluZyA9IHt9O1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcblxuICB0aGlzLmFkZChtYW5hZ2VyLCBjb25maWcucG9saWN5KTtcbiAgdGhpcy5ydW50aW1lc1swXS5sb2NhbCA9IHRydWU7XG59O1xuXG4vKipcbiAqIFRoZSBwb2xpY3kgYSBydW50aW1lIGlzIGV4cGVjdGVkIHRvIGhhdmUgdW5sZXNzIGl0IHNwZWNpZmllc1xuICogb3RoZXJ3aXNlLlxuICogVE9ETzogY29uc2lkZXIgbWFraW5nIHN0YXRpY1xuICogQHByb3BlcnR5IGRlZmF1bHRQb2xpY3lcbiAqL1xuUG9saWN5LnByb3RvdHlwZS5kZWZhdWx0UG9saWN5ID0ge1xuICBiYWNrZ3JvdW5kOiBmYWxzZSwgLy8gQ2FuIHRoaXMgcnVudGltZSBydW4gJ2JhY2tncm91bmQnIG1vZHVsZXM/XG4gIGludGVyYWN0aXZlOiB0cnVlIC8vIElzIHRoZXJlIGEgdmlldyBhc3NvY2lhdGVkIHdpdGggdGhpcyBydW50aW1lP1xuICAvLyBUT0RPOiByZW1haW5pbmcgcnVudGltZSBwb2xpY3kuXG59O1xuXG4vKipcbiAqIFRoZSBjb25zdHJhaW50cyBhIGNvZGUgbW9kdWxlcyBpcyBleHBlY3RlZCB0byBoYXZlIHVubGVzcyBpdCBzcGVjaWZpZXNcbiAqIG90aGVyd2lzZS5cbiAqIFRPRE86IGNvbnNpZGVyIG1ha2luZyBzdGF0aWNcbiAqIEBwcm9wZXJ0eSBkZWZhdWx0Q29uc3RyYWludHNcbiAqL1xuUG9saWN5LnByb3RvdHlwZS5kZWZhdWx0Q29uc3RyYWludHMgPSB7XG4gIGlzb2xhdGlvbjogXCJhbHdheXNcIiwgLy8gdmFsdWVzOiBhbHdheXMsIGFwcCwgbmV2ZXJcbiAgcGxhY2VtZW50OiBcImxvY2FsXCIgLy8gdmFsdWVzOiBsb2NhbCwgc3RhYmxlLCByZWR1bmRhbnRcbiAgLy8gVE9ETzogcmVtYWluaW5nIGNvbnN0cmFpbnRzLCBleHByZXNzIHBsYXRmb3JtLXNwZWNpZmljIGRlcGVuZGVuY2llcy5cbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhIG1vZHVsZSBmcm9tIGl0cyBjYW5vbmljYWwgVVJMLlxuICogUmVwb25kcyB3aXRoIHRoZSBwcm9taXNlIG9mIGEgcG9ydCByZXByZXNlbnRpbmcgdGhlIG1vZHVsZSwgXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmdbXX0gbGluZWFnZSBUaGUgbGluZWFnZSBvZiB0aGUgcmVxdWVzdGluZyBtb2R1bGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIGNhbm9uaWNhbCBJRCBvZiB0aGUgbW9kdWxlIHRvIGdldC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSBsb2NhbCBwb3J0IHRvd2FyZHMgdGhlIG1vZHVsZS5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihsaW5lYWdlLCBpZCkge1xuICBcbiAgLy8gTWFrZSBzdXJlIHRoYXQgYSBtb2R1bGUgaXNuJ3QgZ2V0dGluZyBsb2NhdGVkIHR3aWNlIGF0IHRoZSBzYW1lIHRpbWUuXG4gIC8vIFRoaXMgaXMgcmVzb2x2ZWQgYnkgZGVsYXlpbmcgaWYgaXQgdW50aWwgd2Ugc2VlIGl0IGluIGEgJ21vZHVsZUFkZCcgZXZlbnQuXG4gIGlmICh0aGlzLnBlbmRpbmdbaWRdKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRoaXMub25jZSgncGxhY2VkJywgZnVuY3Rpb24obCwgaSkge1xuICAgICAgICB0aGlzLmdldChsLCBpKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9LmJpbmQodGhpcywgbGluZWFnZSwgaWQpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucGVuZGluZ1tpZF0gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMubG9hZE1hbmlmZXN0KGlkKS50aGVuKGZ1bmN0aW9uKG1hbmlmZXN0KSB7XG4gICAgdmFyIGNvbnN0cmFpbnRzID0gdGhpcy5vdmVybGF5KHRoaXMuZGVmYXVsdENvbnN0cmFpbnRzLCBtYW5pZmVzdC5jb25zdHJhaW50cyksXG4gICAgICAgIHJ1bnRpbWUgPSB0aGlzLmZpbmREZXN0aW5hdGlvbihsaW5lYWdlLCBpZCwgY29uc3RyYWludHMpLFxuICAgICAgICBwb3J0SWQ7XG4gICAgaWYgKHJ1bnRpbWUubG9jYWwpIHtcbiAgICAgIHBvcnRJZCA9IHRoaXMuaXNSdW5uaW5nKHJ1bnRpbWUsIGlkLCBsaW5lYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50cy5pc29sYXRpb24gIT09ICduZXZlcicpO1xuICAgICAgaWYoY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnYWx3YXlzJyAmJiBwb3J0SWQpIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy5pbmZvKCdSZXVzZWQgcG9ydCAnICsgcG9ydElkKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ1tpZF07XG4gICAgICAgIHRoaXMuZW1pdCgncGxhY2VkJyk7XG4gICAgICAgIHJldHVybiBydW50aW1lLm1hbmFnZXIuZ2V0UG9ydChwb3J0SWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb2R1bGUoaWQsIG1hbmlmZXN0LCBsaW5lYWdlLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETzogQ3JlYXRlIGEgcG9ydCB0byBnbyB0byB0aGUgcmVtb3RlIHJ1bnRpbWUuXG4gICAgICB0aGlzLmRlYnVnLmVycm9yKCdVbmV4cGVjdGVkIGxvY2F0aW9uIHNlbGVjdGVkIGZvciBtb2R1bGUgcGxhY2VtZW50Jyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uKGVycikge1xuICAgIHRoaXMuZGVidWcuZXJyb3IoJ1BvbGljeSBFcnJvciBSZXNvbHZpbmcgJyArIGlkLCBlcnIpO1xuICAgIHRocm93KGVycik7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEZpbmQgdGhlIHJ1bnRpbWUgZGVzdGluYXRpb24gZm9yIGEgbW9kdWxlIGdpdmVuIGl0cyBjb25zdHJhaW50cyBhbmQgdGhlXG4gKiBtb2R1bGUgY3JlYXRpbmcgaXQuXG4gKiBAbWV0aG9kIGZpbmREZXN0aW5hdGlvblxuICogQHBhcmFtIHtTdHJpbmdbXX0gbGluZWFnZSBUaGUgaWRlbnRpdHkgb2YgdGhlIG1vZHVsZSBjcmVhdGluZyB0aGlzIG1vZHVsZS5cbiAqIEBwYXJhbSB7U3RyaW5nXSBpZCBUaGUgY2Fub25pY2FsIHVybCBvZiB0aGUgbW9kdWxlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uc3RyYWludHMgQ29uc3RyYWludHMgZm9yIHRoZSBtb2R1bGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZWxlbWVudCBvZiB0aGlzLnJ1bnRpbWVzIHdoZXJlIHRoZSBtb2R1bGUgc2hvdWxkIHJ1bi5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5maW5kRGVzdGluYXRpb24gPSBmdW5jdGlvbihsaW5lYWdlLCBpZCwgY29uc3RyYWludHMpIHtcbiAgdmFyIGk7XG5cbiAgLy8gU3RlcCAxOiBpZiBhbiBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0cywgdGhlIG1cbiAgaWYgKGNvbnN0cmFpbnRzLmlzb2xhdGlvbiAhPT0gJ2Fsd2F5cycpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wb2xpY2llcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKHRoaXMucnVudGltZXNbaV0sIGlkLCBsaW5lYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLmlzb2xhdGlvbiAhPT0gJ25ldmVyJykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVudGltZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3RlcCAyOiBpZiB0aGUgbW9kdWxlIHdhbnRzIHN0YWJpbGl0eSwgaXQgbWF5IG5lZWQgdG8gYmUgcmVtb3RlLlxuICBpZiAoY29uc3RyYWludHMucGxhY2VtZW50ID09PSAnbG9jYWwnKSB7XG4gICAgcmV0dXJuIHRoaXMucnVudGltZXNbMF07XG4gIH0gZWxzZSBpZiAoY29uc3RyYWludHMucGxhY2VtZW50ID09PSAnc3RhYmxlJykge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBvbGljaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5wb2xpY2llc1tpXS5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bnRpbWVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0ZXAgMzogaWYgdGhlIG1vZHVsZSBuZWVkcyBsb25nZXZpdHkgLyBpbnRlcmFjdGl2aXR5LCBpdCBtYXkgd2FudCB0byBiZSByZW1vdGUuXG4gIHJldHVybiB0aGlzLnJ1bnRpbWVzWzBdO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSBrbm93biBydW50aW1lIGlzIHJ1bm5pbmcgYW4gYXBwcm9wcmlhdGUgaW5zdGFuY2Ugb2YgYSBtb2R1bGUuXG4gKiBAbWV0aG9kIGlzUnVubmluZ1xuICogQHBhcmFtIHtPYmplY3R9IHJ1bnRpbWUgVGhlIHJ1bnRpbWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIG1vZHVsZSB0byBsb29rIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nW119IGZyb20gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHJlcXVlc3RpbmcgbW9kdWxlLlxuICogQHBhcmFtIHtCb29sZWFufSBmdWxsTWF0Y2ggSWYgdGhlIG1vZHVsZSBuZWVkcyB0byBiZSBpbiB0aGUgc2FtZSBhcHAuXG4gKiBAcmV0dXJucyB7U3RyaW5nfEJvb2xlYW59IFRoZSBNb2R1bGUgaWQgaWYgaXQgaXMgcnVubmluZywgb3IgZmFsc2UgaWYgbm90LlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmlzUnVubmluZyA9IGZ1bmN0aW9uKHJ1bnRpbWUsIGlkLCBmcm9tLCBmdWxsTWF0Y2gpIHtcbiAgdmFyIGkgPSAwLCBqID0gMCwgb2theTtcbiAgZm9yIChpID0gMDsgaSA8IHJ1bnRpbWUubW9kdWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChmdWxsTWF0Y2ggJiYgcnVudGltZS5tb2R1bGVzW2ldLmxlbmd0aCA9PT0gZnJvbS5sZW5ndGggKyAxKSB7XG4gICAgICBva2F5ID0gdHJ1ZTtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBmcm9tLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChydW50aW1lLm1vZHVsZXNbaV1baiArIDFdLmluZGV4T2YoZnJvbVtqXSkgIT09IDApIHtcbiAgICAgICAgICBva2F5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChydW50aW1lLm1vZHVsZXNbaV1bMF0uaW5kZXhPZihpZCkgIT09IDApIHtcbiAgICAgICAgb2theSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAob2theSkge1xuICAgICAgICByZXR1cm4gcnVudGltZS5tb2R1bGVzW2ldWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWZ1bGxNYXRjaCAmJiBydW50aW1lLm1vZHVsZXNbaV1bMF0uaW5kZXhPZihpZCkgPT09IDApIHtcbiAgICAgIHJldHVybiBydW50aW1lLm1vZHVsZXNbaV1bMF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogR2V0IGEgcHJvbWlzZSBvZiB0aGUgbWFuaWZlc3QgZm9yIGEgbW9kdWxlIElELlxuICogQG1ldGhvZCBsb2FkTWFuaWZlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgY2Fub25pY2FsIElEIG9mIHRoZSBtYW5pZmVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIHRoZSBqc29uIGNvbnRlbnRzIG9mIHRoZSBtYW5pZmVzdC5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5sb2FkTWFuaWZlc3QgPSBmdW5jdGlvbihtYW5pZmVzdCkge1xuICByZXR1cm4gdGhpcy5yZXNvdXJjZS5nZXRDb250ZW50cyhtYW5pZmVzdCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIHJlc3AgPSB7fTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIHRoaXMuZGVidWcuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBcIiArIG1hbmlmZXN0ICsgXCI6IFwiICsgZXJyKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIE1hbmlmZXN0IEF2YWlsYWJsZVwiKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIHJ1bnRpbWUgdG8ga2VlcCB0cmFjayBvZiBpbiB0aGlzIHBvbGljeS5cbiAqIEBtZXRob2QgYWRkXG4gKiBAcGFyYW0ge2Zkb20ucG9ydH0gcG9ydCBUaGUgcG9ydCB0byB1c2UgZm9yIG1vZHVsZSBsaWZldGltZSBpbmZvXG4gKiBAcGFyYW0ge09iamVjdH0gcG9saWN5IFRoZSBwb2xpY3kgb2YgdGhlIHJ1bnRpbWUuXG4gKi9cblBvbGljeS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ocG9ydCwgcG9saWN5KSB7XG4gIHZhciBydW50aW1lID0ge1xuICAgIG1hbmFnZXI6IHBvcnQsXG4gICAgbW9kdWxlczogW11cbiAgfTtcbiAgdGhpcy5ydW50aW1lcy5wdXNoKHJ1bnRpbWUpO1xuICB0aGlzLnBvbGljaWVzLnB1c2godGhpcy5vdmVybGF5KHRoaXMuZGVmYXVsdFBvbGljeSwgcG9saWN5KSk7XG5cbiAgcG9ydC5vbignbW9kdWxlQWRkJywgZnVuY3Rpb24ocnVudGltZSwgaW5mbykge1xuICAgIHZhciBsaW5lYWdlID0gW107XG4gICAgbGluZWFnZSA9IGxpbmVhZ2UuY29uY2F0KGluZm8ubGluZWFnZSk7XG4gICAgbGluZWFnZVswXSA9IGluZm8uaWQ7XG4gICAgcnVudGltZS5tb2R1bGVzLnB1c2gobGluZWFnZSk7XG4gICAgaWYgKHRoaXMucGVuZGluZ1tpbmZvLmxpbmVhZ2VbMF1dKSB7XG4gICAgICBkZWxldGUgdGhpcy5wZW5kaW5nW2luZm8ubGluZWFnZVswXV07XG4gICAgICB0aGlzLmVtaXQoJ3BsYWNlZCcpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMsIHJ1bnRpbWUpKTtcbiAgcG9ydC5vbignbW9kdWxlUmVtb3ZlJywgZnVuY3Rpb24ocnVudGltZSwgaW5mbykge1xuICAgIHZhciBsaW5lYWdlID0gW10sIGksIG1vZEZpbmdlcnByaW50O1xuICAgIGxpbmVhZ2UgPSBsaW5lYWdlLmNvbmNhdChpbmZvLmxpbmVhZ2UpO1xuICAgIGxpbmVhZ2VbMF0gPSBpbmZvLmlkO1xuICAgIG1vZEZpbmdlcnByaW50ID0gbGluZWFnZS50b1N0cmluZygpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHJ1bnRpbWUubW9kdWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHJ1bnRpbWUubW9kdWxlc1tpXS50b1N0cmluZygpID09PSBtb2RGaW5nZXJwcmludCkge1xuICAgICAgICBydW50aW1lLm1vZHVsZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGVidWcud2FybignVW5rbm93biBtb2R1bGUgdG8gcmVtb3ZlOiAnLCBpbmZvLmlkKTtcbiAgfS5iaW5kKHRoaXMsIHJ1bnRpbWUpKTtcbn07XG5cbi8qKlxuICogT3ZlcmxheSBhIHNwZWNpZmljIHBvbGljeSBvciBjb25zdHJhaW50IGluc3RhbmNlIG9uIGRlZmF1bHQgc2V0dGluZ3MuXG4gKiBUT0RPOiBjb25zaWRlciBtYWtpbmcgc3RhdGljLlxuICogQG1ldGhvZCBvdmVybGF5XG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGJhc2UgVGhlIGRlZmF1bHQgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb3ZlcmxheSBUaGUgc3VwZXJjZWVkaW5nIG9iamVjdFxuICogQHJldHVybnMge09iamVjdH0gQSBuZXcgb2JqZWN0IHdpdGggYmFzZSBwYXJhbWV0ZXJzIHdoZW4gbm90IHNldCBpbiBvdmVybGF5LlxuICovXG5Qb2xpY3kucHJvdG90eXBlLm92ZXJsYXkgPSBmdW5jdGlvbihiYXNlLCBvdmVybGF5KSB7XG4gIHZhciByZXQgPSB7fTtcblxuICB1dGlsLm1peGluKHJldCwgYmFzZSk7XG4gIGlmIChvdmVybGF5KSB7XG4gICAgdXRpbC5taXhpbihyZXQsIG92ZXJsYXksIHRydWUpO1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbGljeTtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4vY29uc3VtZXInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tIHBvcnQgZm9yIGEgdXNlci1hY2Nlc3NhYmxlIHByb3ZpZGVyLlxuICogQGNsYXNzIFByb3ZpZGVyXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAdXNlcyBoYW5kbGVFdmVudHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWYgVGhlIGludGVyZmFjZSBvZiB0aGUgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBUaGUgZGVidWdnZXIgdG8gdXNlIGZvciBsb2dnaW5nLlxuICogQGNvbnRydWN0b3JcbiAqL1xudmFyIFByb3ZpZGVyID0gZnVuY3Rpb24gKGRlZiwgZGVidWcpIHtcbiAgdGhpcy5pZCA9IENvbnN1bWVyLm5leHRJZCgpO1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICBcbiAgdGhpcy5kZWZpbml0aW9uID0gZGVmO1xuICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLnN5bmNocm9ub3VzO1xuICB0aGlzLmNoYW5uZWxzID0ge307XG4gIHRoaXMuaWZhY2UgPSBudWxsO1xuICB0aGlzLmNsb3NlSGFuZGxlcnMgPSB7fTtcbiAgdGhpcy5wcm92aWRlckNscyA9IG51bGw7XG5cbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xufTtcblxuLyoqXG4gKiBQcm92aWRlciBtb2RlcyBvZiBvcGVyYXRpb24uXG4gKiBAcHJvcGVydHkgbW9kZVxuICogQHN0YXRpY1xuICogQHR5cGUgbnVtYmVyXG4gKi9cblByb3ZpZGVyLm1vZGUgPSB7XG4gIHN5bmNocm9ub3VzOiAwLFxuICBhc3luY2hyb25vdXM6IDEsXG4gIHByb21pc2VzOiAyXG59O1xuXG4vKipcbiAqIFJlY2VpdmUgZXh0ZXJuYWwgbWVzc2FnZXMgZm9yIHRoZSBwcm92aWRlci5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIHRoZSBzb3VyY2UgaWRlbnRpZmllciBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xuICBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS5yZXZlcnNlKSB7XG4gICAgdGhpcy5jaGFubmVsc1ttZXNzYWdlLm5hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdChtZXNzYWdlLmNoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICBpZiAobWVzc2FnZS5jaGFubmVsID09PSB0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250cm9sQ2hhbm5lbDtcbiAgICB9XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5jaGFubmVsc1tzb3VyY2VdICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5jaGFubmVsc1tzb3VyY2VdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuY2hhbm5lbHNbc291cmNlXSkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdNZXNzYWdlIGZyb20gdW5jb25maWd1cmVkIHNvdXJjZTogJyArIHNvdXJjZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJiBtZXNzYWdlLnRvKSB7XG4gICAgICB0aGlzLnRlYXJkb3duKHNvdXJjZSwgbWVzc2FnZS50byk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnRvICYmIHRoaXMuZW1pdHNbc291cmNlXSAmJlxuICAgICAgICAgICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dKSB7XG4gICAgICBtZXNzYWdlLm1lc3NhZ2UudG8gPSBtZXNzYWdlLnRvO1xuICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dKG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnRvICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ2NvbnN0cnVjdCcpIHtcbiAgICAgIHZhciBhcmdzID0gQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UoXG4gICAgICAgICAgKHRoaXMuZGVmaW5pdGlvbi5jb25zdHJ1Y3RvciAmJiB0aGlzLmRlZmluaXRpb24uY29uc3RydWN0b3IudmFsdWUpID9cbiAgICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNvbnN0cnVjdG9yLnZhbHVlIDogW10sXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgIHRoaXMuZGVidWdcbiAgICAgICAgKSxcbiAgICAgICAgaW5zdGFuY2U7XG4gICAgICBpZiAoIXRoaXMuaWZhY2VzW3NvdXJjZV0pIHtcbiAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXSA9IHt9O1xuICAgICAgICB0aGlzLmVtaXRzW3NvdXJjZV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaWZhY2VzW3NvdXJjZV1bbWVzc2FnZS50b10gPSB0cnVlO1xuICAgICAgaW5zdGFuY2UgPSB0aGlzLmdldFByb3ZpZGVyKHNvdXJjZSwgbWVzc2FnZS50bywgYXJncyk7XG4gICAgICAvLyBkb24ndCBzYXZlIGEgcmVmZXJlbmNlIHRvIGluc3RhbmNlIGlmIGl0IGNsb3NlZCBpdHNlbGYgYWxyZWFkeS5cbiAgICAgIGlmICh0aGlzLmlmYWNlc1tzb3VyY2VdICYmXG4gICAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXVttZXNzYWdlLnRvXSkge1xuICAgICAgICB0aGlzLmlmYWNlc1tzb3VyY2VdW21lc3NhZ2UudG9dID0gaW5zdGFuY2UuaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuZW1pdHNbc291cmNlXVttZXNzYWdlLnRvXSA9IGluc3RhbmNlLm9ubXNnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4odGhpcy50b1N0cmluZygpICsgJyBkcm9wcGluZyBtZXNzYWdlICcgK1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xvc2UgLyB0ZWFyZG93biB0aGUgZmxvdyB0aGlzIHByb3ZpZGVyIHRlcm1pbmF0ZXMuXG4gKiBAbWV0aG9kIGNsb3NlXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ1Byb3ZpZGVyIENsb3NpbmcnLFxuICAgICAgcmVxdWVzdDogJ2Nsb3NlJ1xuICAgIH0pO1xuICAgIGRlbGV0ZSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICB9XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcblxuICAvLyBSZWxlYXNlIHJlZmVyZW5jZXMuXG4gIGRlbGV0ZSB0aGlzLmlmYWNlO1xuICBkZWxldGUgdGhpcy5wcm92aWRlckNscztcbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xuICB0aGlzLmVtaXRDaGFubmVsID0gbnVsbDtcbn07XG5cbi8qKlxuICogVGVhcmRvd24gYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZ1bGZpbGxpbmcgdGhpcyBwcm92aWRlci5cbiAqIEBtZXRob2QgdGVhcmRvd25cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGNvbnN1bWVyIHNvdXJjZSBvZiB0aGUgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBpbnN0YW5jZSB0byB0ZWFyIGRvd24uXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIChzb3VyY2UsIGlkKSB7XG4gIC8vIElnbm9yZSB0ZWFyZG93biBvZiBub24tZXhpc3RhbnQgaWRzLlxuICBpZiAoIXRoaXMuaWZhY2VzW3NvdXJjZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkZWxldGUgdGhpcy5pZmFjZXNbc291cmNlXVtpZF07XG4gIGRlbGV0ZSB0aGlzLmVtaXRzW3NvdXJjZV1baWRdO1xuICBpZiAodGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV0gJiYgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBwcm9wKCk7XG4gICAgfSk7XG4gICAgZGVsZXRlIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYW4gaW50ZXJmYWNlIHRvIGV4cG9zZSBleHRlcm5hbGx5IHJlcHJlc2VudGluZyB0aGlzIHBvcnQuXG4gKiBQcm92aWRlcnMgYXJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcG9ydCB1c2luZyBlaXRoZXJcbiAqIHByb3ZpZGVTeW5jaHJvbm91cyBvciBwcm92aWRlQXN5bmNocm9ub3VzIGRlcGVuZGluZyBvbiB0aGUgZGVzaXJlZFxuICogcmV0dXJuIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHRlcm5hbCBpbnRlcmZhY2Ugb2YgdGhpcyBQcm92aWRlci5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmdldEludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaWZhY2UpIHtcbiAgICByZXR1cm4gdGhpcy5pZmFjZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlmYWNlID0ge1xuICAgICAgcHJvdmlkZVN5bmNocm9ub3VzOiBmdW5jdGlvbiAocHJvdikge1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5zeW5jaHJvbm91cztcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIHByb3ZpZGVBc3luY2hyb25vdXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHRoaXMucHJvdmlkZXJDbHMgPSBwcm92O1xuICAgICAgICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLmFzeW5jaHJvbm91cztcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIHByb3ZpZGVQcm9taXNlczogZnVuY3Rpb24gKHByb3YpIHtcbiAgICAgICAgdGhpcy5wcm92aWRlckNscyA9IHByb3Y7XG4gICAgICAgIHRoaXMubW9kZSA9IFByb3ZpZGVyLm1vZGUucHJvbWlzZXM7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICB9O1xuXG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmRlZmluaXRpb24sIGZ1bmN0aW9uIChwcm9wLCBuYW1lKSB7XG4gICAgICBzd2l0Y2ggKHByb3AudHlwZSkge1xuICAgICAgY2FzZSBcImNvbnN0YW50XCI6XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmlmYWNlLCBuYW1lLCB7XG4gICAgICAgICAgdmFsdWU6IENvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdChwcm9wLnZhbHVlKSxcbiAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gdGhpcy5pZmFjZTtcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGdldCBpbnRlcmZhY2VzIGZyb20gdGhpcyBwcm92aWRlciBmcm9tXG4gKiBhIHVzZXItdmlzaWJsZSBwb2ludC5cbiAqIEBtZXRob2QgZ2V0UHJveHlJbnRlcmZhY2VcbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmdldFByb3h5SW50ZXJmYWNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZnVuYyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAuZ2V0SW50ZXJmYWNlKCk7XG4gIH0uYmluZCh7fSwgdGhpcyk7XG5cbiAgZnVuYy5jbG9zZSA9IGZ1bmN0aW9uIChpZmFjZSkge1xuICAgIGlmIChpZmFjZSkge1xuICAgICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGlkcywgc291cmNlKSB7XG4gICAgICAgIHV0aWwuZWFjaFByb3AoaWRzLCBmdW5jdGlvbiAoY2FuZGlkYXRlLCBpZCkge1xuICAgICAgICAgIGlmIChjYW5kaWRhdGUgPT09IGlmYWNlKSB7XG4gICAgICAgICAgICB0aGlzLnRlYXJkb3duKHNvdXJjZSwgaWQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KHRoaXMuY2hhbm5lbHNbc291cmNlXSwge1xuICAgICAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgICAgICB0bzogaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2xvc2UgdGhlIGNoYW5uZWwuXG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LmJpbmQodGhpcyk7XG5cbiAgZnVuYy5vbkNsb3NlID0gZnVuY3Rpb24gKGlmYWNlLCBoYW5kbGVyKSB7XG4gICAgLy8gTGlzdGVuIHRvIHRoZSBjaGFubmVsIGRpcmVjdGx5LlxuICAgIGlmICh0eXBlb2YgaWZhY2UgPT09ICdmdW5jdGlvbicgJiYgaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uY2UoJ2Nsb3NlJywgaWZhY2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHV0aWwuZWFjaFByb3AodGhpcy5pZmFjZXMsIGZ1bmN0aW9uIChpZHMsIHNvdXJjZSkge1xuICAgICAgdXRpbC5lYWNoUHJvcChpZHMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICAgIGlmIChjYW5kaWRhdGUgPT09IGlmYWNlKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV0gPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0ucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgcmV0dXJuIGZ1bmM7XG59O1xuXG4vKipcbiAqIEdldCBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgcmVnaXN0ZXJlZCBwcm92aWRlci5cbiAqIEBtZXRob2QgZ2V0UHJvdmlkZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHBvcnQgdGhpcyBpbnN0YW5jZSBpcyBpbnRlcmFjdGlnbiB3aXRoLlxuICogQHBhcmFtIHtTdHJpbmd9IGlkZW50aWZpZXIgdGhlIG1lc3NhZ2FibGUgYWRkcmVzcyBmb3IgdGhpcyBwcm92aWRlci5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgQ29uc3RydWN0b3IgYXJndW1lbnRzIGZvciB0aGUgcHJvdmlkZXIuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byBzZW5kIG1lc3NhZ2VzIHRvIHRoZSBwcm92aWRlci5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmdldFByb3ZpZGVyID0gZnVuY3Rpb24gKHNvdXJjZSwgaWRlbnRpZmllciwgYXJncykge1xuICBpZiAoIXRoaXMucHJvdmlkZXJDbHMpIHtcbiAgICB0aGlzLmRlYnVnLmVycm9yKCdDYW5ub3QgaW5zdGFudGlhdGUgcHJvdmlkZXIsIHNpbmNlIGl0IGlzIG5vdCBwcm92aWRlZCcpO1xuICAgIHJldHVybiB7aW5zdGFuY2U6IHVuZGVmaW5lZCwgb25tc2c6IHVuZGVmaW5lZH07XG4gIH1cblxuICB2YXIgZXZlbnRzID0ge30sXG4gICAgZGlzcGF0Y2hFdmVudCxcbiAgICBCb3VuZENsYXNzLFxuICAgIGluc3RhbmNlO1xuXG4gIHV0aWwuZWFjaFByb3AodGhpcy5kZWZpbml0aW9uLCBmdW5jdGlvbiAocHJvcCwgbmFtZSkge1xuICAgIGlmIChwcm9wLnR5cGUgPT09ICdldmVudCcpIHtcbiAgICAgIGV2ZW50c1tuYW1lXSA9IHByb3A7XG4gICAgfVxuICB9KTtcblxuICBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKHNyYywgZXYsIGlkLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChldltuYW1lXSkge1xuICAgICAgdmFyIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShldltuYW1lXS52YWx1ZSwgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnKTtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLmNoYW5uZWxzW3NyY10sIHtcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICB0bzogaWQsXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdldmVudCcsXG4gICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgc291cmNlLCBldmVudHMsIGlkZW50aWZpZXIpO1xuXG4gIC8vIHRoaXMgaXMgYWxsIHRvIHNheTogbmV3IHByb3ZpZGVyQ2xzKGRpc3BhdGNoRXZlbnQsIGFyZ3NbMF0sIGFyZ3NbMV0sLi4uKVxuICBCb3VuZENsYXNzID0gdGhpcy5wcm92aWRlckNscy5iaW5kLmFwcGx5KHRoaXMucHJvdmlkZXJDbHMsXG4gICAgICBbdGhpcy5wcm92aWRlckNscywgZGlzcGF0Y2hFdmVudF0uY29uY2F0KGFyZ3MgfHwgW10pKTtcbiAgaW5zdGFuY2UgPSBuZXcgQm91bmRDbGFzcygpO1xuXG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgIG9ubXNnOiBmdW5jdGlvbiAocG9ydCwgc3JjLCBtc2cpIHtcbiAgICAgIGlmIChtc2cuYWN0aW9uID09PSAnbWV0aG9kJykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbbXNnLnR5cGVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcG9ydC5kZWJ1Zy53YXJuKFwiUHJvdmlkZXIgZG9lcyBub3QgaW1wbGVtZW50IFwiICsgbXNnLnR5cGUgKyBcIigpIVwiKTtcbiAgICAgICAgICBwb3J0LmVtaXQocG9ydC5jaGFubmVsc1tzcmNdLCB7XG4gICAgICAgICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgICAgICAgIHRvOiBtc2cudG8sXG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgIHRvOiBtc2cudG8sXG4gICAgICAgICAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgICAgICAgICByZXFJZDogbXNnLnJlcUlkLFxuICAgICAgICAgICAgICBuYW1lOiBtc2cudHlwZSxcbiAgICAgICAgICAgICAgZXJyb3I6ICdQcm92aWRlciBkb2VzIG5vdCBpbXBsZW1lbnQgJyArIG1zZy50eXBlICsgJygpISdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3AgPSBwb3J0LmRlZmluaXRpb25bbXNnLnR5cGVdLFxuICAgICAgICAgIGRlYnVnID0gcG9ydC5kZWJ1ZyxcbiAgICAgICAgICBhcmdzID0gQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UocHJvcC52YWx1ZSwgbXNnLCBkZWJ1ZyksXG4gICAgICAgICAgcmV0dXJuUHJvbWlzZSxcbiAgICAgICAgICByZXQgPSBmdW5jdGlvbiAoc3JjLCBtc2csIHByb3AsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShwcm9wLnJldCwgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLmNoYW5uZWxzW3NyY10sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ21ldGhvZCcsXG4gICAgICAgICAgICAgIHRvOiBtc2cudG8sXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgICAgICAgICAgIHJlcUlkOiBtc2cucmVxSWQsXG4gICAgICAgICAgICAgICAgbmFtZTogbXNnLnR5cGUsXG4gICAgICAgICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnksXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LmJpbmQocG9ydCwgc3JjLCBtc2csIHByb3ApO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3J0Lm1vZGUgPT09IFByb3ZpZGVyLm1vZGUuc3luY2hyb25vdXMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0KHRoaXNbbXNnLnR5cGVdLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgICAgICAgICB9IGNhdGNoIChlMSkge1xuICAgICAgICAgICAgcmV0KHVuZGVmaW5lZCwgZTEubWVzc2FnZSArICcgJyArIGUxLnN0YWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocG9ydC5tb2RlID09PSBQcm92aWRlci5tb2RlLmFzeW5jaHJvbm91cykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzW21zZy50eXBlXS5hcHBseShpbnN0YW5jZSwgYXJncy5jb25jYXQocmV0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZTIpIHtcbiAgICAgICAgICAgIHJldCh1bmRlZmluZWQsIGUyLm1lc3NhZ2UgKyAnICcgKyBlMi5zdGFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBvcnQubW9kZSA9PT0gUHJvdmlkZXIubW9kZS5wcm9taXNlcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm5Qcm9taXNlID0gdGhpc1ttc2cudHlwZV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBpZiAocmV0dXJuUHJvbWlzZSAmJiByZXR1cm5Qcm9taXNlLnRoZW4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuUHJvbWlzZS50aGVuKHJldCwgcmV0LmJpbmQoe30sIHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0KHVuZGVmaW5lZCwgJ05vIHByb21pc2UgcmV0dXJuZWQgZnJvbSAnICtcbiAgICAgICAgICAgICAgICAgIG1zZy50eXBlICsgJzogJyArIHJldHVyblByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUzKSB7XG4gICAgICAgICAgICByZXQodW5kZWZpbmVkLCBlMy5tZXNzYWdlICsgJyAnICsgZTMuc3RhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0uYmluZChpbnN0YW5jZSwgdGhpcywgc291cmNlKVxuICB9O1xufTtcblxuLyoqXG4gKiBHZXQgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHJldHVybiBcIltQcm92aWRlciBcIiArIHRoaXMuZW1pdENoYW5uZWwgKyBcIl1cIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJbdW5ib3VuZCBQcm92aWRlcl1cIjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm92aWRlcjtcbiIsIi8qanNsaW50IGluZGVudDoyLCB3aGl0ZTp0cnVlLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4uL2NvbnN1bWVyJyk7XG5cbnZhciBBcGlJbnRlcmZhY2UgPSBmdW5jdGlvbihkZWYsIG9uTXNnLCBlbWl0LCBkZWJ1Zykge1xuICB2YXIgaW5mbGlnaHQgPSB7fSxcbiAgICAgIGV2ZW50cyA9IG51bGwsXG4gICAgICBlbWl0dGVyID0gbnVsbCxcbiAgICAgIHJlcUlkID0gMCxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgdXRpbC5lYWNoUHJvcChkZWYsIGZ1bmN0aW9uKHByb3AsIG5hbWUpIHtcbiAgICBzd2l0Y2gocHJvcC50eXBlKSB7XG4gICAgY2FzZSAnbWV0aG9kJzpcbiAgICAgIHRoaXNbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTm90ZTogaW5mbGlnaHQgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgYmVmb3JlIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICAgIC8vIGluIG9yZGVyIHRvIHByZXBhcmUgZm9yIHN5bmNocm9ub3VzIGluLXdpbmRvdyBwaXBlcy5cbiAgICAgICAgdmFyIHRoaXNSZXEgPSByZXFJZCxcbiAgICAgICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgaW5mbGlnaHRbdGhpc1JlcV0gPSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZTpyZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdDpyZWplY3QsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHByb3AucmV0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShwcm9wLnZhbHVlLFxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCksXG4gICAgICAgICAgICAgICAgZGVidWcpO1xuICAgICAgICByZXFJZCArPSAxO1xuICAgICAgICBlbWl0KHtcbiAgICAgICAgICBhY3Rpb246ICdtZXRob2QnLFxuICAgICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgICAgcmVxSWQ6IHRoaXNSZXEsXG4gICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2V2ZW50JzpcbiAgICAgIGlmKCFldmVudHMpIHtcbiAgICAgICAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gICAgICAgIGVtaXR0ZXIgPSB0aGlzLmVtaXQ7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVtaXQ7XG4gICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgfVxuICAgICAgZXZlbnRzW25hbWVdID0gcHJvcDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NvbnN0YW50JzpcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCB7XG4gICAgICAgIHZhbHVlOiBDb25zdW1lci5yZWN1cnNpdmVGcmVlemVPYmplY3QocHJvcC52YWx1ZSksXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgb25Nc2codGhpcywgZnVuY3Rpb24odHlwZSwgbXNnKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIGlmICh0aGlzLm9mZikge1xuICAgICAgICB0aGlzLm9mZigpO1xuICAgICAgfVxuICAgICAgdXRpbC5lYWNoUHJvcChpbmZsaWdodCwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBvYmoucmVqZWN0KCdjbG9zZWQnKTtcbiAgICAgIH0pO1xuICAgICAgaW5mbGlnaHQgPSB7fTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFtc2cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnbWV0aG9kJykge1xuICAgICAgaWYgKGluZmxpZ2h0W21zZy5yZXFJZF0pIHtcbiAgICAgICAgdmFyIHJlc29sdmVyID0gaW5mbGlnaHRbbXNnLnJlcUlkXSxcbiAgICAgICAgICAgIHRlbXBsYXRlID0gcmVzb2x2ZXIudGVtcGxhdGU7XG4gICAgICAgIGRlbGV0ZSBpbmZsaWdodFttc2cucmVxSWRdO1xuICAgICAgICBpZiAobXNnLmVycm9yKSB7XG4gICAgICAgICAgcmVzb2x2ZXIucmVqZWN0KG1zZy5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZShDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZSh0ZW1wbGF0ZSwgbXNnLCBkZWJ1ZykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1Zy5lcnJvcignSW5jb21pbmcgbWVzc2FnZSBjbGFpbWVkIHRvIGJlIGFuIFJQQyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAncmV0dXJuaW5nIGZvciB1bnJlZ2lzdGVyZWQgY2FsbCcsIG1zZy5yZXFJZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2V2ZW50Jykge1xuICAgICAgaWYgKGV2ZW50c1ttc2cubmFtZV0pIHtcbiAgICAgICAgZW1pdHRlcihtc2cubmFtZSwgQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UoZXZlbnRzW21zZy5uYW1lXS52YWx1ZSxcbiAgICAgICAgICAgICAgICBtc2csIGRlYnVnKSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIGFyZ3MgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShcbiAgICAgIChkZWYuY29uc3RydWN0b3IgJiYgZGVmLmNvbnN0cnVjdG9yLnZhbHVlKSA/IGRlZi5jb25zdHJ1Y3Rvci52YWx1ZSA6IFtdLFxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncywgNCksXG4gICAgICBkZWJ1Zyk7XG5cbiAgZW1pdCh7XG4gICAgdHlwZTogJ2NvbnN0cnVjdCcsXG4gICAgdGV4dDogYXJncy50ZXh0LFxuICAgIGJpbmFyeTogYXJncy5iaW5hcnlcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwaUludGVyZmFjZTtcbiIsIi8qanNsaW50IGluZGVudDoyLCB3aGl0ZTp0cnVlLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG52YXIgRXZlbnRJbnRlcmZhY2UgPSBmdW5jdGlvbihvbk1zZywgZW1pdCwgZGVidWcpIHtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gIFxuICBvbk1zZyh0aGlzLCBmdW5jdGlvbihlbWl0LCB0eXBlLCBtc2cpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbWl0KG1zZy50eXBlLCBtc2cubWVzc2FnZSk7XG4gIH0uYmluZCh0aGlzLCB0aGlzLmVtaXQpKTtcblxuICB0aGlzLmVtaXQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlLCBtc2cpIHtcbiAgICBlbWl0dGVyKHt0eXBlOiB0eXBlLCBtZXNzYWdlOiBtc2d9LCB0cnVlKTtcbiAgfS5iaW5kKHt9LCBlbWl0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRJbnRlcmZhY2U7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIEFwaUludGVyZmFjZSA9IHJlcXVpcmUoJy4vcHJveHkvYXBpSW50ZXJmYWNlJyk7XG52YXIgRXZlbnRJbnRlcmZhY2UgPSByZXF1aXJlKCcuL3Byb3h5L2V2ZW50SW50ZXJmYWNlJyk7XG52YXIgQ29uc3VtZXIgPSByZXF1aXJlKCcuL2NvbnN1bWVyJyk7XG52YXIgUHJvdmlkZXIgPSByZXF1aXJlKCcuL3Byb3ZpZGVyJyk7XG5cbi8qKlxuICogQSBQcm94eSBCaW5kZXIgbWFuYWdlcyB0aGUgZXh0ZXJuYWwgaW50ZXJmYWNlLCBhbmQgY3JlYXRlcyBvbmUgb2ZcbiAqIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2Ygb2JqZWN0cyBleHBvc2VkIGJ5IGZyZWVkb20gZWl0aGVyIGFzIGEgZ2xvYmFsXG4gKiB3aXRoaW4gYSB3b3JrZXIgLyBtb2R1bGUgY29udGV4dCwgb3IgcmV0dXJuZWQgYnkgYW4gZXh0ZXJuYWwgY2FsbCB0b1xuICogY3JlYXRlIGEgZnJlZWRvbSBydW50aW1lLlxuICogQENsYXNzIFByb3h5QmluZGVyXG4gKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXIgVGhlIG1hbmFnZXIgZm9yIHRoZSBhY3RpdmUgcnVudGltZS5cbiAqL1xudmFyIFByb3h5QmluZGVyID0gZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBwcm94eSBmb3IgYSBmcmVlZG9tIHBvcnQsIGFuZCByZXR1cm4gaXQgb25jZSBsb2FkZWQuXG4gKiBAbWV0aG9kIGdldEV4dGVybmFsXG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHBvcnQgZm9yIHRoZSBwcm94eSB0byBjb21tdW5pY2F0ZSB3aXRoLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3h5LlxuICogQHBhcmFtIHtPYmplY3R9IFtkZWZpbml0aW9uXSBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgQVBJIHRvIGV4cG9zZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkZWZpbml0aW9uLm5hbWUgVGhlIG5hbWUgb2YgdGhlIEFQSS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZpbml0aW9uLmRlZmluaXRpb24gVGhlIGRlZmluaXRpb24gb2YgdGhlIEFQSS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVmaW5pdGlvbi5wcm92aWRlcyBXaGV0aGVyIHRoaXMgaXMgYSBjb25zdW1lciBvciBwcm92aWRlci5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSBhY3RpdmUgcHJveHkgaW50ZXJmYWNlLlxuICovXG5Qcm94eUJpbmRlci5wcm90b3R5cGUuZ2V0RXh0ZXJuYWwgPSBmdW5jdGlvbiAocG9ydCwgbmFtZSwgZGVmaW5pdGlvbikge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwcm94eSwgYXBpO1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICBhcGkgPSBkZWZpbml0aW9uLm5hbWU7XG4gICAgICBpZiAoZGVmaW5pdGlvbi5wcm92aWRlcykge1xuICAgICAgICBwcm94eSA9IG5ldyBQcm92aWRlcihkZWZpbml0aW9uLmRlZmluaXRpb24sIHRoaXMubWFuYWdlci5kZWJ1Zyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm94eSA9IG5ldyBDb25zdW1lcihBcGlJbnRlcmZhY2UuYmluZCh7fSxcbiAgICAgICAgICAgIGRlZmluaXRpb24uZGVmaW5pdGlvbiksXG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIuZGVidWcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm94eSA9IG5ldyBDb25zdW1lcihFdmVudEludGVyZmFjZSwgdGhpcy5tYW5hZ2VyLmRlYnVnKTtcbiAgICB9XG5cbiAgICBwcm94eS5vbmNlKCdzdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpZmFjZSA9IHByb3h5LmdldFByb3h5SW50ZXJmYWNlKCk7XG4gICAgICBpZiAoYXBpKSB7XG4gICAgICAgIGlmYWNlLmFwaSA9IGFwaTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoe1xuICAgICAgICBwb3J0OiBwcm94eSxcbiAgICAgICAgZXh0ZXJuYWw6IGlmYWNlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHBvcnQsIG5hbWUsIHByb3h5KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQmluZCB0aGUgZGVmYXVsdCBwcm94eSBmb3IgYSBmcmVlZG9tIHBvcnQuXG4gKiBAbWV0aG9kIGJpbmREZWZhdWx0XG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHBvcnQgZm9yIHRoZSBwcm94eSB0byBjb21tdW5pY2F0ZSB3aXRoLlxuICogQHBhcmFtIHtBcGl9IGFwaSBUaGUgQVBJIGxvYWRlciB3aXRoIEFQSSBkZWZpbml0aW9ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIG1vZHVsZSB0byBleHBvc2UuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGludGVybmFsIFdoZXRoZXIgdGhlIGludGVyZmFjZSBpcyBmb3IgaW5zaWRlIHRoZSBtb2R1bGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciBhIHByb3h5IGludGVyZmFjZS5cbiAqIEBwcml2YXRlXG4gKi9cblByb3h5QmluZGVyLnByb3RvdHlwZS5iaW5kRGVmYXVsdCA9IGZ1bmN0aW9uIChwb3J0LCBhcGksIG1hbmlmZXN0LCBpbnRlcm5hbCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBtZXRhZGF0YSA9IHtcbiAgICBuYW1lOiBtYW5pZmVzdC5uYW1lLFxuICAgIGljb246IG1hbmlmZXN0Lmljb24sXG4gICAgZGVzY3JpcHRpb246IG1hbmlmZXN0LmRlc2NyaXB0aW9uXG4gIH0sIGRlZjtcblxuICBpZiAobWFuaWZlc3RbJ2RlZmF1bHQnXSkge1xuICAgIGRlZiA9IGFwaS5nZXQobWFuaWZlc3RbJ2RlZmF1bHQnXSk7XG4gICAgaWYgKCFkZWYgJiYgbWFuaWZlc3QuYXBpICYmIG1hbmlmZXN0LmFwaVttYW5pZmVzdFsnZGVmYXVsdCddXSkge1xuICAgICAgZGVmID0ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdFsnZGVmYXVsdCddLFxuICAgICAgICBkZWZpbml0aW9uOiBtYW5pZmVzdC5hcGlbbWFuaWZlc3RbJ2RlZmF1bHQnXV1cbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChpbnRlcm5hbCAmJiBtYW5pZmVzdC5wcm92aWRlcyAmJlxuICAgICAgICBtYW5pZmVzdC5wcm92aWRlcy5pbmRleE9mKG1hbmlmZXN0WydkZWZhdWx0J10pICE9PSBmYWxzZSkge1xuICAgICAgZGVmLnByb3ZpZGVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGludGVybmFsKSB7XG4gICAgICBhcGkuZGVidWcud2FybihcImRlZmF1bHQgQVBJIG5vdCBwcm92aWRlZCwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgXCJhcmUgeW91IG1pc3NpbmcgYSBwcm92aWRlcyBrZXkgaW4geW91ciBtYW5pZmVzdD9cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZ2V0RXh0ZXJuYWwocG9ydCwgJ2RlZmF1bHQnLCBkZWYpLnRoZW4oXG4gICAgZnVuY3Rpb24gKG1ldGFkYXRhLCBpbmZvKSB7XG4gICAgICBpbmZvLmV4dGVybmFsLm1hbmlmZXN0ID0gbWV0YWRhdGE7XG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9LmJpbmQodGhpcywgbWV0YWRhdGEpXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3h5QmluZGVyO1xuIiwiLypnbG9iYWxzIFhNTEh0dHBSZXF1ZXN0ICovXG4vKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIFRoZSBSZXNvdXJjZSByZWdpc3RyeSBmb3IgRnJlZURPTS4gIFVzZWQgdG8gbG9vayB1cCByZXF1ZXN0ZWQgUmVzb3VyY2VzLFxuICogYW5kIHByb3ZpZGUgbG9va3VwIGFuZCBtaWdyYXRpb24gb2YgcmVzb3VyY2VzLlxuICogQENsYXNzIFJlc291cmNlXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBUaGUgbG9nZ2VyIHRvIHVzZSBmb3IgZGVidWdnaW5nLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBSZXNvdXJjZSA9IGZ1bmN0aW9uIChkZWJ1Zykge1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIHRoaXMuZmlsZXMgPSB7fTtcbiAgdGhpcy5yZXNvbHZlcnMgPSBbdGhpcy5odHRwUmVzb2x2ZXIsIHRoaXMubnVsbFJlc29sdmVyXTtcbiAgdGhpcy5jb250ZW50UmV0cmlldmVycyA9IHtcbiAgICAnaHR0cCc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdodHRwcyc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdjaHJvbWUtZXh0ZW5zaW9uJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ3Jlc291cmNlJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2Nocm9tZSc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdhcHAnOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAnbWFuaWZlc3QnOiB0aGlzLm1hbmlmZXN0UmV0cmlldmVyXG4gIH07XG59O1xuXG4vKipcbiAqIFJlc29sdmUgYSByZXN1cmNlIFVSTCByZXF1ZXN0ZWQgZnJvbSBhIG1vZHVsZS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIGNhbm9uaWNhbCBhZGRyZXNzIG9mIHRoZSBtb2R1bGUgcmVxdWVzdGluZy5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHJlc291cmNlIHRvIGdldC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSByZXNvdXJjZSBhZGRyZXNzLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwpIHtcbiAgdmFyIGtleSA9IEpTT04uc3RyaW5naWZ5KFttYW5pZmVzdCwgdXJsXSk7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0aGlzLmZpbGVzW2tleV0pIHtcbiAgICAgIHJlc29sdmUodGhpcy5maWxlc1trZXldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXNvbHZlKG1hbmlmZXN0LCB1cmwpLnRoZW4oZnVuY3Rpb24gKGtleSwgcmVzb2x2ZSwgYWRkcmVzcykge1xuICAgICAgICB0aGlzLmZpbGVzW2tleV0gPSBhZGRyZXNzO1xuICAgICAgICAvL2Zkb20uZGVidWcubG9nKCdSZXNvbHZlZCAnICsga2V5ICsgJyB0byAnICsgYWRkcmVzcyk7XG4gICAgICAgIHJlc29sdmUoYWRkcmVzcyk7XG4gICAgICB9LmJpbmQodGhpcywga2V5LCByZXNvbHZlKSwgcmVqZWN0KTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29udGVudHMgb2YgYSByZXNvdXJjZS5cbiAqIEBtZXRob2QgZ2V0Q29udGVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHJlc291cmNlIHRvIHJlYWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgcmVzb3VyY2UgY29udGVudHMuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5nZXRDb250ZW50cyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcHJvcDtcbiAgICBpZiAoIXVybCkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKFwiQXNrZWQgdG8gZ2V0IGNvbnRlbnRzIG9mIHVuZGVmaW5lZCBVUkwuXCIpO1xuICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gdGhpcy5jb250ZW50UmV0cmlldmVycykge1xuICAgICAgaWYgKHRoaXMuY29udGVudFJldHJpZXZlcnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKHByb3AgKyBcIjovL1wiKSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzW3Byb3BdLmNhbGwodGhpcywgdXJsLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9IGVsc2UgaWYgKHVybC5pbmRleE9mKFwiOi8vXCIpID09PSAtMSAmJiBwcm9wID09PSBcIm51bGxcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzW3Byb3BdLmNhbGwodGhpcywgdXJsLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlamVjdCgpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZmlyc3Qgb2YgYW4gYXJyYXkgb2YgcHJvbWlzZXNcbiAqIHJlc29sdmVzLCBvciByZWplY3RzIGFmdGVyIGFsbCBwcm9taXNlcyByZWplY3QuIENhbiBiZSB0aG91Z2h0IG9mIGFzXG4gKiB0aGUgbWlzc2luZyAnUHJvbWlzZS5hbnknIC0gcmFjZSBpcyBubyBnb29kLCBzaW5jZSBlYXJseSByZWplY3Rpb25zXG4gKiBwcmVlbXB0IGEgc3Vic2VxdWVudCByZXNvbHV0aW9uLlxuICogQHByaXZhdGVcbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgRmlyc3RQcm9taXNlXG4gKiBAcGFyYW0ge1Byb21pc2VbXX0gUHJvbWlzZXMgdG8gc2VsZWN0IGZyb21cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIHJlc29sdmluZyB3aXRoIGEgdmFsdWUgZnJvbSBhcmd1bWVudHMuXG4gKi9cbnZhciBmaXJzdFByb21pc2UgPSBmdW5jdGlvbihwcm9taXNlcykge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIGVycm9ycyA9IFtdO1xuICAgIHByb21pc2VzLmZvckVhY2goZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gcHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlc291cmNlIHVzaW5nIGtub3duIHJlc29sdmVycy4gVW5saWtlIGdldCwgcmVzb2x2ZSBkb2VzXG4gKiBub3QgY2FjaGUgcmVzb2x2ZWQgcmVzb3VyY2VzLlxuICogQG1ldGhvZCByZXNvbHZlXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBtb2R1bGUgcmVxdWVzdGluZyB0aGUgcmVzb3VyY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSByZXNvdXJjZSB0byByZXNvbHZlO1xuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIHJlc291cmNlIGFkZHJlc3MuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICB9XG4gICAgdXRpbC5lYWNoUmV2ZXJzZSh0aGlzLnJlc29sdmVycywgZnVuY3Rpb24gKHJlc29sdmVyKSB7XG4gICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlQ29tcGF0KHJlc29sdmVyLmJpbmQoe30sIG1hbmlmZXN0LCB1cmwpKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICBmaXJzdFByb21pc2UocHJvbWlzZXMpLnRoZW4ocmVzb2x2ZSwgZnVuY3Rpb24oKSB7XG4gICAgICByZWplY3QoJ05vIHJlc29sdmVycyB0byBoYW5kbGUgdXJsOiAnICsgSlNPTi5zdHJpbmdpZnkoW21hbmlmZXN0LCB1cmxdKSk7XG4gICAgfSk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHJlc29sdmVyczogY29kZSB0aGF0IGtub3dzIGhvdyB0byBnZXQgcmVzb3VyY2VzXG4gKiBuZWVkZWQgYnkgdGhlIHJ1bnRpbWUuIEEgcmVzb2x2ZXIgd2lsbCBiZSBjYWxsZWQgd2l0aCBmb3VyXG4gKiBhcmd1bWVudHM6IHRoZSBhYnNvbHV0ZSBtYW5pZmVzdCBvZiB0aGUgcmVxdWVzdGVyLCB0aGVcbiAqIHJlc291cmNlIGJlaW5nIHJlcXVlc3RlZCwgYW5kIGEgcmVzb2x2ZSAvIHJlamVjdCBwYWlyIHRvXG4gKiBmdWxmaWxsIGEgcHJvbWlzZS5cbiAqIEBtZXRob2QgYWRkUmVzb2x2ZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmVyIFRoZSByZXNvbHZlciB0byBhZGQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5hZGRSZXNvbHZlciA9IGZ1bmN0aW9uIChyZXNvbHZlcikge1xuICB0aGlzLnJlc29sdmVycy5wdXNoKHJlc29sdmVyKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgcmV0cmlldmVyczogY29kZSB0aGF0IGtub3dzIGhvdyB0byBsb2FkIHJlc291cmNlc1xuICogbmVlZGVkIGJ5IHRoZSBydW50aW1lLiBBIHJldHJpZXZlciB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgVVJMXG4gKiB0byByZXRyaWV2ZSB3aXRoIGEgcHJvdG9jb2wgdGhhdCBpdCBpcyBhYmxlIHRvIGhhbmRsZS5cbiAqIEBtZXRob2QgYWRkUmV0cmlldmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvdG8gVGhlIHByb3RvY29sIHRvIHJlZ2lzdGVyIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJldHJpZXZlciBUaGUgcmV0cmlldmVyIHRvIGFkZC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmFkZFJldHJpZXZlciA9IGZ1bmN0aW9uIChwcm90bywgcmV0cmlldmVyKSB7XG4gIGlmICh0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzW3Byb3RvXSkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVud2lsbGluZyB0byBvdmVycmlkZSBmaWxlIHJldHJpZXZhbCBmb3IgXCIgKyBwcm90byk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvdG9dID0gcmV0cmlldmVyO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBleHRlcm5hbCByZXNvbHZlcnMgYW5kIHJldHJlYXZlcnNcbiAqIEBtZXRob2QgcmVnaXN0ZXJcbiAqIEBwYXJhbSB7e1wicHJvdG9cIjpTdHJpbmcsIFwicmVzb2x2ZXJcIjpGdW5jdGlvbiwgXCJyZXRyZWF2ZXJcIjpGdW5jdGlvbn1bXX1cbiAqICAgICByZXNvbHZlcnMgVGhlIGxpc3Qgb2YgcmV0cmVpdmVycyBhbmQgcmVzb2x2ZXJzLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gIGlmICghcmVzb2x2ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlc29sdmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0ucmVzb2x2ZXIpIHtcbiAgICAgIHRoaXMuYWRkUmVzb2x2ZXIoaXRlbS5yZXNvbHZlcik7XG4gICAgfSBlbHNlIGlmIChpdGVtLnByb3RvICYmIGl0ZW0ucmV0cmlldmVyKSB7XG4gICAgICB0aGlzLmFkZFJldHJpZXZlcihpdGVtLnByb3RvLCBpdGVtLnJldHJpZXZlcik7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSBVUkwgaXMgYW4gYWJzb2x1dGUgVVJMIG9mIGEgZ2l2ZW4gU2NoZW1lLlxuICogQG1ldGhvZCBoYXNTY2hlbWVcbiAqIEBzdGF0aWNcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBwcm90b2NvbHMgV2hpdGVsaXN0ZWQgcHJvdG9jb2xzXG4gKiBAcGFyYW0ge1N0cmluZ30gVVJMIHRoZSBVUkwgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gSWYgdGhlIFVSTCBpcyBhbiBhYnNvbHV0ZSBleGFtcGxlIG9mIG9uZSBvZiB0aGUgc2NoZW1lcy5cbiAqL1xuUmVzb3VyY2UuaGFzU2NoZW1lID0gZnVuY3Rpb24gKHByb3RvY29scywgdXJsKSB7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgcHJvdG9jb2xzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHVybC5pbmRleE9mKHByb3RvY29sc1tpXSArIFwiOi8vXCIpID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgJy4vJyBhbmQgJy4uLycgZnJvbSBhIFVSTFxuICogUmVxdWlyZWQgYmVjYXVzZSBDaHJvbWUgQXBwcyBmb3IgTW9iaWxlIChjY2EpIGRvZXNuJ3QgdW5kZXJzdGFuZFxuICogWEhSIHBhdGhzIHdpdGggdGhlc2UgcmVsYXRpdmUgY29tcG9uZW50cyBpbiB0aGUgVVJMLlxuICogQG1ldGhvZCByZW1vdmVSZWxhdGl2ZVBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBtb2RpZnlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHVybCB3aXRob3V0ICcuLycgYW5kICcuLi8nXG4gKiovXG5SZXNvdXJjZS5yZW1vdmVSZWxhdGl2ZVBhdGggPSBmdW5jdGlvbiAodXJsKSB7XG4gIHZhciBpZHggPSB1cmwuaW5kZXhPZihcIjovL1wiKSArIDMsXG4gICAgc3RhY2ssXG4gICAgdG9SZW1vdmUsXG4gICAgcmVzdWx0O1xuICAvLyBSZW1vdmUgYWxsIGluc3RhbmNlcyBvZiAvLi9cbiAgdXJsID0gdXJsLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7XG4gIC8vV2VpcmQgYnVnIHdoZXJlIGluIGNjYSwgbWFuaWZlc3Qgc3RhcnRzIHdpdGggJ2Nocm9tZTovLy8vJ1xuICAvL1RoaXMgZm9yY2VzIHRoZXJlIHRvIG9ubHkgYmUgMiBzbGFzaGVzXG4gIHdoaWxlICh1cmwuY2hhckF0KGlkeCkgPT09IFwiL1wiKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDAsIGlkeCkgKyB1cmwuc2xpY2UoaWR4ICsgMSwgdXJsLmxlbmd0aCk7XG4gIH1cblxuICAvLyBBZHZhbmNlIHRvIG5leHQgL1xuICBpZHggPSB1cmwuaW5kZXhPZihcIi9cIiwgaWR4KTtcbiAgLy8gUmVtb3ZpbmcgLi4vXG4gIHN0YWNrID0gdXJsLnN1YnN0cihpZHggKyAxKS5zcGxpdChcIi9cIik7XG4gIHdoaWxlIChzdGFjay5pbmRleE9mKFwiLi5cIikgIT09IC0xKSB7XG4gICAgdG9SZW1vdmUgPSBzdGFjay5pbmRleE9mKFwiLi5cIik7XG4gICAgaWYgKHRvUmVtb3ZlID09PSAwKSB7XG4gICAgICBzdGFjay5zaGlmdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFjay5zcGxpY2UoKHRvUmVtb3ZlIC0gMSksIDIpO1xuICAgIH1cbiAgfVxuICBcbiAgLy9SZWJ1aWxkIHN0cmluZ1xuICByZXN1bHQgPSB1cmwuc3Vic3RyKDAsIGlkeCk7XG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgc3RhY2subGVuZ3RoOyBpZHggKz0gMSkge1xuICAgIHJlc3VsdCArPSBcIi9cIiArIHN0YWNrW2lkeF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBVUkxzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB1c2luZyBzdGFuZGFyZCBIVFRQIHJlcXVlc3RzLlxuICogQG1ldGhvZCBodHRwUmVzb2x2ZXJcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIE1hbmlmZXN0IFVSTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byByZXNvbHZlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBUaGUgcHJvbWlzZSB0byBjb21wbGV0ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBUaGUgcHJvbWlzZSB0byByZWplY3QuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgVVJMIGNvdWxkIGJlIHJlc29sdmVkLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuaHR0cFJlc29sdmVyID0gZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgcHJvdG9jb2xzID0gW1wiaHR0cFwiLCBcImh0dHBzXCIsIFwiY2hyb21lXCIsIFwiY2hyb21lLWV4dGVuc2lvblwiLCBcInJlc291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgXCJhcHBcIl0sXG4gICAgZGlybmFtZSxcbiAgICBwcm90b2NvbElkeCxcbiAgICBwYXRoSWR4LFxuICAgIHBhdGgsXG4gICAgYmFzZSxcbiAgICByZXN1bHQ7XG5cbiAgaWYgKFJlc291cmNlLmhhc1NjaGVtZShwcm90b2NvbHMsIHVybCkpIHtcbiAgICByZXNvbHZlKFJlc291cmNlLnJlbW92ZVJlbGF0aXZlUGF0aCh1cmwpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgaWYgKCFtYW5pZmVzdCkge1xuICAgIHJlamVjdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoUmVzb3VyY2UuaGFzU2NoZW1lKHByb3RvY29scywgbWFuaWZlc3QpICYmXG4gICAgICB1cmwuaW5kZXhPZihcIjovL1wiKSA9PT0gLTEpIHtcbiAgICBkaXJuYW1lID0gbWFuaWZlc3Quc3Vic3RyKDAsIG1hbmlmZXN0Lmxhc3RJbmRleE9mKFwiL1wiKSk7XG4gICAgcHJvdG9jb2xJZHggPSBkaXJuYW1lLmluZGV4T2YoXCI6Ly9cIik7XG4gICAgcGF0aElkeCA9IHByb3RvY29sSWR4ICsgMyArIGRpcm5hbWUuc3Vic3RyKHByb3RvY29sSWR4ICsgMykuaW5kZXhPZihcIi9cIik7XG4gICAgcGF0aCA9IGRpcm5hbWUuc3Vic3RyKHBhdGhJZHgpO1xuICAgIGJhc2UgPSBkaXJuYW1lLnN1YnN0cigwLCBwYXRoSWR4KTtcbiAgICBpZiAodXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG4gICAgICByZXNvbHZlKFJlc291cmNlLnJlbW92ZVJlbGF0aXZlUGF0aChiYXNlICsgdXJsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKGJhc2UgKyBwYXRoICsgXCIvXCIgKyB1cmwpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVqZWN0KCk7XG59O1xuXG4vKipcbiAqIFJlc29sdmUgVVJMcyB3aGljaCBhcmUgc2VsZi1kZXNjcmliaW5nLlxuICogQG1ldGhvZCBudWxsUmVzb2x2ZXJcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIE1hbmlmZXN0IFVSTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byByZXNvbHZlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBUaGUgcHJvbWlzZSB0byBjb21wbGV0ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBUaGUgcHJvbWlzZSB0byByZWplY3QuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgVVJMIGNvdWxkIGJlIHJlc29sdmVkLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUubnVsbFJlc29sdmVyID0gZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgcHJvdG9jb2xzID0gW1wibWFuaWZlc3RcIl07XG4gIGlmIChSZXNvdXJjZS5oYXNTY2hlbWUocHJvdG9jb2xzLCB1cmwpKSB7XG4gICAgcmVzb2x2ZSh1cmwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHVybC5pbmRleE9mKCdkYXRhOicpID09PSAwKSB7XG4gICAgcmVzb2x2ZSh1cmwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlamVjdCgpO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBtYW5pZmVzdCBjb250ZW50IGZyb20gYSBzZWxmLWRlc2NyaXB0aXZlIG1hbmlmZXN0IHVybC5cbiAqIFRoZXNlIHVybHMgYXJlIHVzZWQgdG8gcmVmZXJlbmNlIGEgbWFuaWZlc3Qgd2l0aG91dCByZXF1aXJpbmcgc3Vic2VxdWVudCxcbiAqIHBvdGVudGlhbGx5IG5vbi1DT1JTIHJlcXVlc3RzLlxuICogQG1ldGhvZCBtYW5pZmVzdFJldHJpZXZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLm1hbmlmZXN0UmV0cmlldmVyID0gZnVuY3Rpb24gKG1hbmlmZXN0LCByZXNvbHZlLCByZWplY3QpIHtcbiAgdmFyIGRhdGE7XG4gIHRyeSB7XG4gICAgZGF0YSA9IG1hbmlmZXN0LnN1YnN0cigxMSk7XG4gICAgSlNPTi5wYXJzZShkYXRhKTtcbiAgICByZXNvbHZlKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiSW52YWxpZCBtYW5pZmVzdCBVUkwgcmVmZXJlbmNlZDpcIiArIG1hbmlmZXN0KTtcbiAgICByZWplY3QoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSByZXNvdXJjZSBjb250ZW50cyB1c2luZyBhbiBYSFIgcmVxdWVzdC5cbiAqIEBtZXRob2QgeGhyUmV0cmlldmVyXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gZmV0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLnhoclJldHJpZXZlciA9IGZ1bmN0aW9uICh1cmwsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgcmVmID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHJlZi5yZWFkeVN0YXRlID09PSA0ICYmIHJlZi5yZXNwb25zZVRleHQpIHtcbiAgICAgIHJlc29sdmUocmVmLnJlc3BvbnNlVGV4dCk7XG4gICAgfSBlbHNlIGlmIChyZWYucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKFwiRmFpbGVkIHRvIGxvYWQgZmlsZSBcIiArIHVybCArIFwiOiBcIiArIHJlZi5zdGF0dXMpO1xuICAgICAgcmVqZWN0KHJlZi5zdGF0dXMpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMsIHJlc29sdmUsIHJlamVjdCksIGZhbHNlKTtcbiAgcmVmLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICByZWYub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICByZWYuc2VuZCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNvdXJjZTtcbiIsIi8qZ2xvYmFscyBjcnlwdG8sIFdlYktpdEJsb2JCdWlsZGVyLCBCbG9iLCBVUkwgKi9cbi8qZ2xvYmFscyB3ZWJraXRVUkwsIFVpbnQ4QXJyYXksIFVpbnQxNkFycmF5LCBBcnJheUJ1ZmZlciAqL1xuLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxicm93c2VyOnRydWUsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG5cbi8qKlxuICogVXRpbGl0eSBtZXRob2QgdXNlZCB3aXRoaW4gdGhlIGZyZWVkb20gTGlicmFyeS5cbiAqIEBjbGFzcyB1dGlsXG4gKiBAc3RhdGljXG4gKi9cbnZhciB1dGlsID0ge307XG5cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGJhY2t3YXJkcy4gSWYgdGhlIGZ1bmNcbiAqIHJldHVybnMgYSB0cnVlIHZhbHVlLCBpdCB3aWxsIGJyZWFrIG91dCBvZiB0aGUgbG9vcC5cbiAqIEBtZXRob2QgZWFjaFJldmVyc2VcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5lYWNoUmV2ZXJzZSA9IGZ1bmN0aW9uKGFyeSwgZnVuYykge1xuICBpZiAoYXJ5KSB7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gYXJ5Lmxlbmd0aCAtIDE7IGkgPiAtMTsgaSAtPSAxKSB7XG4gICAgICBpZiAoYXJ5W2ldICYmIGZ1bmMoYXJ5W2ldLCBpLCBhcnkpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGhhc1Byb3BcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5oYXNQcm9wID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn07XG5cbi8qKlxuICogQ3ljbGVzIG92ZXIgcHJvcGVydGllcyBpbiBhbiBvYmplY3QgYW5kIGNhbGxzIGEgZnVuY3Rpb24gZm9yIGVhY2hcbiAqIHByb3BlcnR5IHZhbHVlLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSwgdGhlbiB0aGVcbiAqIGl0ZXJhdGlvbiBpcyBzdG9wcGVkLlxuICogQG1ldGhvZCBlYWNoUHJvcFxuICogQHN0YXRpY1xuICovXG51dGlsLmVhY2hQcm9wID0gZnVuY3Rpb24ob2JqLCBmdW5jKSB7XG4gIHZhciBwcm9wO1xuICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgaWYgKGZ1bmMob2JqW3Byb3BdLCBwcm9wKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2ltcGxlIGZ1bmN0aW9uIHRvIG1peCBpbiBwcm9wZXJ0aWVzIGZyb20gc291cmNlIGludG8gdGFyZ2V0LFxuICogYnV0IG9ubHkgaWYgdGFyZ2V0IGRvZXMgbm90IGFscmVhZHkgaGF2ZSBhIHByb3BlcnR5IG9mIHRoZSBzYW1lIG5hbWUuXG4gKiBUaGlzIGlzIG5vdCByb2J1c3QgaW4gSUUgZm9yIHRyYW5zZmVycmluZyBtZXRob2RzIHRoYXQgbWF0Y2hcbiAqIE9iamVjdC5wcm90b3R5cGUgbmFtZXMsIGJ1dCB0aGUgdXNlcyBvZiBtaXhpbiBoZXJlIHNlZW0gdW5saWtlbHkgdG9cbiAqIHRyaWdnZXIgYSBwcm9ibGVtIHJlbGF0ZWQgdG8gdGhhdC5cbiAqIEBtZXRob2QgbWl4aW5cbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5taXhpbiA9IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlLCBmb3JjZSkge1xuICBpZiAoc291cmNlKSB7XG4gICAgdXRpbC5lYWNoUHJvcChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xuICAgICAgaWYgKGZvcmNlIHx8ICF1dGlsLmhhc1Byb3AodGFyZ2V0LCBwcm9wKSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBHZXQgYSB1bmlxdWUgSUQuXG4gKiBAbWV0aG9kIGdldElkXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZ2V0SWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGd1aWQgPSAnZ3VpZCcsXG4gICAgICBkb21haW4gPSAxMixcbiAgICAgIGJ1ZmZlcjtcbiAgLy8gQ2hyb21lIC8gRmlyZWZveC5cbiAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICdvYmplY3QnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICBidWZmZXIgPSBuZXcgVWludDhBcnJheShkb21haW4pO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcbiAgICB1dGlsLmVhY2hSZXZlcnNlKGJ1ZmZlciwgZnVuY3Rpb24obikge1xuICAgICAgZ3VpZCArPSAnLScgKyBuO1xuICAgIH0pO1xuICAvLyBOb2RlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ29iamVjdCcgJiYgY3J5cHRvLnJhbmRvbUJ5dGVzKSB7XG4gICAgYnVmZmVyID0gY3J5cHRvLnJhbmRvbUJ5dGVzKGRvbWFpbik7XG4gICAgdXRpbC5lYWNoUmV2ZXJzZShidWZmZXIsIGZ1bmN0aW9uKG4pIHtcbiAgICAgIGd1aWQgKz0gJy0nICsgbjtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoZG9tYWluID4gMCkge1xuICAgICAgZ3VpZCArPSAnLScgKyBNYXRoLmNlaWwoMjU1ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICBkb21haW4gLT0gMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ3VpZDtcbn07XG5cbi8qKlxuICogRW5jb2RlIGEgc3RyaW5nIGludG8gYSBiaW5hcnkgYXJyYXkgYnVmZmVyLCBieSB0cmVhdGluZyBlYWNoIGNoYXJhY3RlciBhcyBhXG4gKiB1dGYxNiBlbmNvZGVkIGNoYXJhY3RlciAtIHRoZSBuYXRpdmUgamF2YXNjcmlwdCBlbmNvZGluZy5cbiAqIEBtZXRob2Qgc3RyMmFiXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gZW5jb2RlLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgZW5jb2RlZCBzdHJpbmcuXG4gKi9cbnV0aWwuc3RyMmFiID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBsZW5ndGggPSBzdHIubGVuZ3RoLFxuICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCAqIDIpLCAvLyAyIGJ5dGVzIGZvciBlYWNoIGNoYXJcbiAgICAgIGJ1ZmZlclZpZXcgPSBuZXcgVWludDE2QXJyYXkoYnVmZmVyKSxcbiAgICAgIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1ZmZlclZpZXdbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuXG4gIHJldHVybiBidWZmZXI7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnVmZmVyIGNvbnRhaW5pbmcgYW4gZW5jb2RlZCBzdHJpbmcgYmFjayBpbnRvIGEgc3RyaW5nLlxuICogQG1ldGhvZCBhYjJzdHJcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHVud3JhcC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBkZWNvZGVkIGJ1ZmZlci5cbiAqL1xudXRpbC5hYjJzdHIgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcikpO1xufTtcblxuLyoqXG4gKiBBZGQgJ29uJyBhbmQgJ2VtaXQnIG1ldGhvZHMgdG8gYW4gb2JqZWN0LCB3aGljaCBhY3QgYXMgYSBsaWdodCB3ZWlnaHRcbiAqIGV2ZW50IGhhbmRsaW5nIHN0cnVjdHVyZS5cbiAqIEBjbGFzcyBoYW5kbGVFdmVudHNcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5oYW5kbGVFdmVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgdmFyIGV2ZW50U3RhdGUgPSB7XG4gICAgREVCVUdfQkFDS1JFRjogb2JqLFxuICAgIG11bHRpcGxlOiB7fSxcbiAgICBtYXliZW11bHRpcGxlOiBbXSxcbiAgICBzaW5nbGU6IHt9LFxuICAgIG1heWJlc2luZ2xlOiBbXVxuICB9LCBmaWx0ZXIsIHB1c2g7XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhIGxpc3QgYmFzZWQgb24gYSBwcmVkaWNhdGUuIFRoZSBsaXN0IGlzIGZpbHRlcmVkIGluIHBsYWNlLCB3aXRoXG4gICAqIHNlbGVjdGVkIGl0ZW1zIHJlbW92ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBmdW5jdGlvbi5cbiAgICogQG1ldGhvZFxuICAgKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGZpbHRlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIG1ldGhvZCB0byBydW4gb24gZWFjaCBpdGVtLlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFNlbGVjdGVkIGl0ZW1zXG4gICAqL1xuICBmaWx0ZXIgPSBmdW5jdGlvbihsaXN0LCBwcmVkaWNhdGUpIHtcbiAgICB2YXIgcmV0ID0gW10sIGk7XG5cbiAgICBpZiAoIWxpc3QgfHwgIWxpc3QubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKHByZWRpY2F0ZShsaXN0W2ldKSkge1xuICAgICAgICByZXQucHVzaChsaXN0LnNwbGljZShpLCAxKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVucXVldWUgYSBoYW5kbGVyIGZvciBhIHNwZWNpZmljIHR5cGUuXG4gICAqIEBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRvIFRoZSBxdWV1ZSAoJ3NpbmdsZScgb3IgJ211bHRpcGxlJykgdG8gcXVldWUgb24uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHdhaXQgZm9yLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIGVucXVldWUuXG4gICAqL1xuICBwdXNoID0gZnVuY3Rpb24odG8sIHR5cGUsIGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbJ21heWJlJyArIHRvXS5wdXNoKFt0eXBlLCBoYW5kbGVyXSk7XG4gICAgfSBlbHNlIGlmICh0aGlzW3RvXVt0eXBlXSkge1xuICAgICAgdGhpc1t0b11bdHlwZV0ucHVzaChoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc1t0b11bdHlwZV0gPSBbaGFuZGxlcl07XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGFuIGV2ZW50IG9mIGEgc3BlY2lmaWMgdHlwZSBvY2N1cnMuXG4gICAqIEBtZXRob2Qgb25cbiAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmVnaXN0ZXIgYWdhaW5zdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBydW4gd2hlbiB0aGUgZXZlbnQgb2NjdXJzLlxuICAgKi9cbiAgb2JqLm9uID0gcHVzaC5iaW5kKGV2ZW50U3RhdGUsICdtdWx0aXBsZScpO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG1ldGhvZCB0byBiZSBleGVjdXRlIHRoZSBuZXh0IHRpbWUgYW4gZXZlbnQgb2NjdXJzLlxuICAgKiBAbWV0aG9kIG9uY2VcbiAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gd2FpdCBmb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gcnVuIHRoZSBuZXh0IHRpbWUgYSBtYXRjaGluZyBldmVudFxuICAgKiAgICAgaXMgcmFpc2VkLlxuICAgKi9cbiAgb2JqLm9uY2UgPSBwdXNoLmJpbmQoZXZlbnRTdGF0ZSwgJ3NpbmdsZScpO1xuXG4gIC8qKlxuICAgKiBFbWl0IGFuIGV2ZW50IG9uIHRoaXMgb2JqZWN0LlxuICAgKiBAbWV0aG9kIGVtaXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmFpc2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBwYXlsb2FkIG9mIHRoZSBldmVudC5cbiAgICovXG4gIG9iai5lbWl0ID0gZnVuY3Rpb24odHlwZSwgZGF0YSkge1xuICAgIHZhciBpLCBxdWV1ZTtcbiAgICAvLyBOb3RlIHRoYXQgcmVnaXN0ZXJlZCBoYW5kbGVycyBtYXkgc3RvcCBldmVudHMgb24gdGhlIG9iamVjdCwgYnkgY2FsbGluZ1xuICAgIC8vIHRoaXMub2ZmKCkuIEFzIHN1Y2gsIHRoZSBwcmVzZW5jZSBvZiB0aGVzZSBrZXlzIG11c3QgYmUgY2hlY2tlZCBvbiBlYWNoXG4gICAgLy8gaXRlcmF0aW9uIG9mIHRoZSByZWxldmFudCBsb29wcy5cbiAgICBmb3IgKGkgPSAwOyB0aGlzLm11bHRpcGxlW3R5cGVdICYmXG4gICAgICAgICBpIDwgdGhpcy5tdWx0aXBsZVt0eXBlXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGVbdHlwZV1baV0oZGF0YSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2luZ2xlW3R5cGVdKSB7XG4gICAgICBxdWV1ZSA9IHRoaXMuc2luZ2xlW3R5cGVdO1xuICAgICAgdGhpcy5zaW5nbGVbdHlwZV0gPSBbXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBxdWV1ZVtpXShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubWF5YmVtdWx0aXBsZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMubWF5YmVtdWx0aXBsZVtpXVswXSh0eXBlLCBkYXRhKSkge1xuICAgICAgICB0aGlzLm1heWJlbXVsdGlwbGVbaV1bMV0oZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IHRoaXMubWF5YmVzaW5nbGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIGlmICh0aGlzLm1heWJlc2luZ2xlW2ldWzBdKHR5cGUsIGRhdGEpKSB7XG4gICAgICAgIHF1ZXVlID0gdGhpcy5tYXliZXNpbmdsZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHF1ZXVlWzBdWzFdKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKGV2ZW50U3RhdGUpO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlclxuICAgKiBAbWV0aG9kIG9mZlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByZW1vdmUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb24/fSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIHJlbW92ZS5cbiAgICovXG4gIG9iai5vZmYgPSBmdW5jdGlvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICBkZWxldGUgdGhpcy5ERUJVR19CQUNLUkVGO1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHt9O1xuICAgICAgdGhpcy5tYXliZW11bHRpcGxlID0gW107XG4gICAgICB0aGlzLnNpbmdsZSA9IHt9O1xuICAgICAgdGhpcy5tYXliZXNpbmdsZSA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmlsdGVyKHRoaXMubWF5YmVzaW5nbGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bMF0gPT09IHR5cGUgJiYgKCFoYW5kbGVyIHx8IGl0ZW1bMV0gPT09IGhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgICBmaWx0ZXIodGhpcy5tYXliZW11bHRpcGxlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtWzBdID09PSB0eXBlICYmICghaGFuZGxlciB8fCBpdGVtWzFdID09PSBoYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgZGVsZXRlIHRoaXMubXVsdGlwbGVbdHlwZV07XG4gICAgICBkZWxldGUgdGhpcy5zaW5nbGVbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcih0aGlzLm11bHRpcGxlW3R5cGVdLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBoYW5kbGVyO1xuICAgICAgfSk7XG4gICAgICBmaWx0ZXIodGhpcy5zaW5nbGVbdHlwZV0sIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9XG4gIH0uYmluZChldmVudFN0YXRlKTtcbn07XG5cbi8qKlxuICogV2hlbiBydW4gd2l0aG91dCBhIHdpbmRvdywgb3Igc3BlY2lmaWNhbGx5IHJlcXVlc3RlZC5cbiAqIE5vdGU6IERlY2xhcmF0aW9uIGNhbiBiZSByZWRlZmluZWQgaW4gZm9yY2VNb2R1bGVDb250ZXh0IGJlbG93LlxuICogQG1ldGhvZCBpc01vZHVsZUNvbnRleHRcbiAqIEBmb3IgdXRpbFxuICogQHN0YXRpY1xuICovXG4vKiFAcHJlc2VydmUgU3RhcnRNb2R1bGVDb250ZXh0RGVjbGFyYXRpb24qL1xudXRpbC5pc01vZHVsZUNvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbi8qKlxuICogR2V0IGEgQmxvYiBvYmplY3Qgb2YgYSBzdHJpbmcuXG4gKiBQb2x5ZmlsbHMgaW1wbGVtZW50YXRpb25zIHdoaWNoIGRvbid0IGhhdmUgYSBjdXJyZW50IEJsb2IgY29uc3RydWN0b3IsIGxpa2VcbiAqIHBoYW50b21qcy5cbiAqIEBtZXRob2QgZ2V0QmxvYlxuICogQHN0YXRpY1xuICovXG51dGlsLmdldEJsb2IgPSBmdW5jdGlvbihkYXRhLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgQmxvYiAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgV2ViS2l0QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgV2ViS2l0QmxvYkJ1aWxkZXIoKTtcbiAgICBidWlsZGVyLmFwcGVuZChkYXRhKTtcbiAgICByZXR1cm4gYnVpbGRlci5nZXRCbG9iKHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQmxvYihbZGF0YV0sIHt0eXBlOiB0eXBlfSk7XG4gIH1cbn07XG5cbi8qKlxuICogRmluZCBhbGwgc2NyaXB0cyBvbiB0aGUgZ2l2ZW4gcGFnZS5cbiAqIEBtZXRob2Qgc2NyaXB0c1xuICogQHN0YXRpY1xuICovXG51dGlsLnNjcmlwdHMgPSBmdW5jdGlvbihnbG9iYWwpIHtcbiAgcmV0dXJuIGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG4iLCIvKmpzbGludCBub2RlOnRydWUqL1xuXG52YXIgcHJvdmlkZXJzID0gW1xuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnVucHJpdmlsZWdlZCcpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLmVjaG8nKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUucGVlcmNvbm5lY3Rpb24nKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5ydGNwZWVyY29ubmVjdGlvbicpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y2RhdGFjaGFubmVsJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUuc3RvcmFnZScpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnZpZXcnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5vYXV0aCcpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLndlYnNvY2tldCcpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnhocicpXG5dO1xuXG5mdW5jdGlvbiBnZXRGcmVlZG9tU2NyaXB0KCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBzY3JpcHQ7XG4gIGlmICh3aW5kb3cuZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgIC8vIE5ldyBicm93c2VyIEFQSVxuICAgIHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImNvbXBsZXRlXCIgJiZcbiAgICAgICAgICAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRlZFwiKSB7XG4gICAgLy8gSW5jbHVkZWQgaW4gSFRNTCBvciB0aHJvdWdoIGRvY3VtZW50LndyaXRlXG4gICAgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICBzY3JpcHQgPSBzY3JpcHRbc2NyaXB0Lmxlbmd0aCAtIDFdLnNyYztcbiAgfSBlbHNlIHtcbiAgICAvLyBMb2FkZWQgdGhyb3VnaCBkb20gbWFuaXB1bGF0aW9uIG9yIGFzeW5jLlxuICAgIHNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcInNjcmlwdFtzcmMqPSdmcmVlZG9tLmpzJ10sc2NyaXB0W3NyYyo9J2ZyZWVkb20tJ11cIlxuICAgICk7XG4gICAgaWYgKHNjcmlwdC5sZW5ndGggIT09IDEpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZGV0ZXJtaW5lIGZyZWVkb20uanMgc2NyaXB0IHRhZy5cIik7XG4gICAgfVxuICAgIHNjcmlwdCA9IHNjcmlwdFswXS5zcmM7XG4gIH1cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5mcmVlZG9tID0gcmVxdWlyZSgnLi4vZW50cnknKS5iaW5kKHt9LCB7XG4gICAgbG9jYXRpb246IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgIHBvcnRUeXBlOiByZXF1aXJlKCcuLi9saW5rL3dvcmtlcicpLFxuICAgIHNvdXJjZTogZ2V0RnJlZWRvbVNjcmlwdCgpLFxuICAgIHByb3ZpZGVyczogcHJvdmlkZXJzLFxuICAgIG9hdXRoOiBbXG4gICAgICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvb2F1dGgvb2F1dGgubG9jYWxwYWdlYXV0aCcpLFxuICAgICAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL29hdXRoL29hdXRoLnJlbW90ZXBhZ2VhdXRoJylcbiAgICBdXG4gIH0pO1xufSBlbHNlIHtcbiAgcmVxdWlyZSgnLi4vZW50cnknKSh7XG4gICAgaXNNb2R1bGU6IHRydWUsXG4gICAgcG9ydFR5cGU6IHJlcXVpcmUoJy4uL2xpbmsvd29ya2VyJyksXG4gICAgcHJvdmlkZXJzOiBwcm92aWRlcnMsXG4gICAgZ2xvYmFsOiBnbG9iYWxcbiAgfSk7XG59XG4iXX0=