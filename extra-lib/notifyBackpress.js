(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["flymeUtils"] = factory();
	else
		root["flymeUtils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	// import a from "../lib/appStoreClient/WinChangedManage.js";
	// import b from "../lib/domUtils/RateInViewPortManage.js";

	var notifyBackpress = __webpack_require__(1);

	module.exports = {
	  notifyBackpress: notifyBackpress
	};
	// export default {
	//   notifyBackpress
	// }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var hashHistory = __webpack_require__(2);

	var generateFn = function generateFn(options) {

	  options = options || {};

	  var isSupportBackpressListener = !options.useBrowser && window.EventJavascriptInterface && !!window.EventJavascriptInterface.listenBackPress,
	      hashListener = hashHistory();

	  if (!isSupportBackpressListener) {
	    hashListener.listener(function (path, prepath) {
	      var prepath = prepath * 1;

	      if (!!prepath && path - prepath < 0) {
	        window.__backpress();
	      }
	    });
	  } else {
	    listenBackPress();
	  }

	  function listenBackPress() {
	    if (isSupportBackpressListener) EventJavascriptInterface.listenBackPress('__backpress');
	  }

	  window.__backpress = function (isfrom) {
	    var isMTouch = isfrom == 'from_menu' ? false : true;
	    notifyBackpress.run(isMTouch);
	    listenBackPress();
	  };

	  var _callbacks = {},
	      globalCallbacks = [],
	      _priorityFacts = [];

	  var notifyBackpress = {
	    globalOnce: false,
	    isFinish: false,
	    isMenuClose: true,
	    addListener: function addListener(cb) {
	      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	      var self = this;

	      if (priority === true) return globalCallbacks.push(cb);else if (priority == 'add') {
	        priority = this.increasePriority();
	      }

	      this.addCallback(cb, priority);

	      if (!isSupportBackpressListener) {
	        hashListener.autoUpdateHash();
	      }

	      this.callbackPriority = priority;

	      return {
	        remove: function remove() {
	          var innerQueues = void 0;

	          innerQueues = _callbacks[priority] = _callbacks[priority].filter(function (item) {
	            return item != cb;
	          });

	          if (!innerQueues.length) {
	            _priorityFacts = _priorityFacts.filter(function (factor) {
	              return factor != priority;
	            });
	          }
	        },
	        update: function update(newcb) {
	          this.remove();
	          var maxPriority = self.increasePriority();

	          self.addCallback(newcb || function () {}, maxPriority);
	          // _callbacks[priority] = _callbacks[priority].map(item=>{
	          //   if(item === cb){
	          //     return newcb || function(){};
	          //   };
	          //   return item;
	          // });
	        }
	      };
	    },
	    addCallback: function addCallback(cb, priority) {

	      if (!_callbacks[priority]) {
	        _callbacks[priority] = [];
	      }

	      _callbacks[priority].push(cb);

	      if (!~_priorityFacts.indexOf(priority)) {
	        _priorityFacts.push(priority);
	        _priorityFacts.sort(function (a, b) {
	          return a - b;
	        });
	      }
	    },
	    increasePriority: function increasePriority() {
	      var len = _priorityFacts.length;

	      if (!len) return 1;

	      return _priorityFacts[_priorityFacts.length - 1] + 1;
	    },
	    removeListener: function removeListener(cb) {
	      var tempPriorityFacts = _priorityFacts;

	      _priorityFacts.forEach(function (priority) {
	        var queues = _callbacks[priority];

	        queues = queues.filter(function (item) {
	          return item != cb;
	        });

	        _callbacks[priority] = queues;

	        if (!queues.length) {
	          tempPriorityFacts = tempPriorityFacts.filter(function (factor) {
	            return factor != priority;
	          });
	        }
	      });

	      _priorityFacts = tempPriorityFacts;
	    },
	    removeGlobalListeners: function removeGlobalListeners(cb) {
	      if (cb != null) {
	        globalCallbacks = globalCallbacks.filter(function (fn) {
	          return cb != fn;
	        });
	      } else {
	        globalCallbacks = [];
	      }
	    },
	    runWithPriority: function runWithPriority(priority, isRm) {
	      var queue = _callbacks[priority];

	      if (!queue) return;

	      queue.forEach(function (cb) {
	        cb();
	      });

	      if (isRm) _callbacks[priority] = null;
	    },
	    run: function run(isMTouch) {
	      if (!globalCallbacks.length && !_priorityFacts.length) {
	        this.notifyBackFn && this.notifyBackFn();
	        if (this.isFinish || !isMTouch && this.isMenuClose) {
	          this.closeActivity();
	        } else {
	          this.goBack();
	        }
	        return;
	      }

	      globalCallbacks.forEach(function (cb) {
	        cb();
	      });
	      if (this.globalOnce) globalCallbacks = [];

	      var curPriority = _priorityFacts.pop();
	      this.runWithPriority(curPriority, true);
	    },
	    goBack: function goBack() {
	      if (isSupportBackpressListener) EventJavascriptInterface.backPress();else hashListener.back();
	    },
	    closeActivity: function closeActivity() {
	      if (isSupportBackpressListener) EventJavascriptInterface.finish();else hashListener.back();
	    },
	    addNotifyBack: function addNotifyBack(cb) {
	      this.notifyBackFn = cb;
	    }
	  };

	  return notifyBackpress;
	};
	module.exports = generateFn;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	
	var bindEvent = function bindEvent(dom, name, fn) {
	  dom.addEventListener ? dom.addEventListener(name, fn, false) : dom.attachEvent('on' + name, fn);
	};
	var unBindEvent = function unBindEvent(dom, name, fn) {
	  dom.removeEventListener ? dom.removeEventListener(name, fn, false) : dom.detachEvent('on' + name, fn);
	};

	var HashChangeEvent = 'hashchange';
	var query_key = '_dg_hash';

	var hashHistory = function hashHistory(options) {

	  var prevLocation = '',
	      listeners = [];

	  var getCurrentHashPath = function getCurrentHashPath() {
	    var href = window.location.href,
	        regx = new RegExp('^' + query_key + '=(.*)');
	    var index = href.indexOf('#'),
	        queryIndex = void 0,
	        str = '',
	        matches = void 0;

	    if (index != -1) {
	      str = href.substring(index + 1) || '';
	      if (queryIndex = str.indexOf('?') > 0) {
	        str = str.substring(0, queryIndex);
	      }
	      matches = regx.exec(str);
	      if (matches) {
	        str = matches[1];
	      } else {
	        str = '';
	      }
	    }
	    return str;
	  };

	  var stopListener = function stopListener() {
	    unBindEvent(window, HashChangeEvent, handleHashChange);
	  };

	  var listener = function listener(callback) {
	    listeners.push(callback);

	    return function () {
	      return listeners = listeners.filter(function (item) {
	        return item !== callback;
	      });
	    };
	  };

	  var pushHashPath = function pushHashPath(path) {
	    return window.location.hash = path;
	  };

	  var replaceHashPath = function replaceHashPath(path) {
	    return window.location.replace(window.location.pathname + window.location.search + '#' + path);
	  };

	  var autoUpdateHash = function autoUpdateHash() {
	    var hashPath = getCurrentHashPath() * 1;
	    if (!hashPath) hashPath = 1;else hashPath++;
	    pushHashPath(query_key + '=' + hashPath);
	    return hashPath;
	  };

	  var go = function go(n) {
	    if (n) window.history.go(n);
	  };
	  var back = function back() {
	    window.history.back();
	  };

	  var handleHashChange = function handleHashChange() {
	    var currentLocation = getCurrentHashPath();

	    if (prevLocation === currentLocation) return;

	    listeners.forEach(function (listener) {
	      listener(currentLocation, prevLocation);
	    });

	    prevLocation = currentLocation;
	  };

	  bindEvent(window, HashChangeEvent, handleHashChange);

	  return {
	    getCurrentHashPath: getCurrentHashPath,
	    listener: listener,
	    stopListener: stopListener,
	    pushHashPath: pushHashPath,
	    replaceHashPath: replaceHashPath,
	    autoUpdateHash: autoUpdateHash,
	    go: go,
	    back: back
	  };
	};

	module.exports = hashHistory;

/***/ })
/******/ ])
});
;