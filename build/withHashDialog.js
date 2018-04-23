(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pdDialog"] = factory();
	else
		root["pdDialog"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ModalDialog = __webpack_require__(2);
	// var historyPlugin = require('./plugins/history.js');
	var backPressPlugin = __webpack_require__(6);
	
	ModalDialog.defaultConfig.useHash = true;
	
	// if(window.EventJavascriptInterface && typeof window.EventJavascriptInterface.listenBackPress == 'function')
	ModalDialog.addPlugin(backPressPlugin);
	// else
	//   ModalDialog.addPlugin(historyPlugin);
	
	module.exports = ModalDialog;

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var baseCss = __webpack_require__(3);
	
	var utils = __webpack_require__(4);
	var scrollDlg = __webpack_require__(5);
	var _ = {
	  assign: utils.assign
	},
	    winH,
	    winW;
	
	function noop() {}
	
	//动态插入css样式
	function insertStyleToHead(baseFontSize) {
	  var style = document.createElement('style');
	
	  style.innerHTML = utils.fnTemplate(baseCss, {
	    rem: function rem(px) {
	      return px.replace(/(\d+)px/, function (expr, val) {
	        return val * 1 / baseFontSize + 'rem';
	      });
	    }
	  });
	  var headDom = document.querySelector('head');
	  var firstLink = headDom.querySelector('link');
	
	  if (!firstLink) headDom.appendChild(style);else headDom.insertBefore(style, firstLink);
	}
	
	/*
	生成对话框模板内容
	 */
	function getHtmlContent(options) {
	  var templateHtml = [],
	      header = options.header;
	
	  templateHtml.push('<div class="rc-modal"><div class="dialog-mask"></div><div class="modal-dialog ' + options.clazz + '"><div class="modal-dialog-main">');
	  if (options.title != null && options.title != '') {
	    templateHtml.push('<header>' + utils.replaceTemlate(header, options) + '</header>');
	  }
	  templateHtml.push('<section><div class="dialog-content"></div></section><footer>');
	  templateHtml.push(createButtons.call(this, options));
	  templateHtml.push('</footer></div></div></div>');
	
	  return templateHtml.join('');
	}
	
	function resizeWin() {
	  winH = window.innerHeight ? window.innerHeight : document.body.clientHeight;
	  winW = window.innerWidth ? window.innerWidth : document.body.clientWidth;
	}
	// utils.bindEvent(window,'resize',resizeWin);
	//TODO:
	// resizeWin();
	/*
	创建底部按钮
	 */
	function createButtons(options) {
	  var btns = options.buttons || [],
	      template = '<button type="button" class="{cls}" data-id="{id}" >{name}</button>',
	      btnTmpls = '',
	      self = this,
	      oneBtnClz = '';
	
	  if (options.cancelCallback) {
	    btns.push({
	      id: 'cancel',
	      name: options.cancelStr,
	      callback: options.cancelCallback,
	      cls: "cancle-btn"
	    });
	  }
	
	  if (btns.length == 0) oneBtnClz = ' modal-dialog-onebtn';
	
	  if (options.okCallback) {
	    btns.push({
	      id: 'ok',
	      name: options.sureStr,
	      callback: options.okCallback,
	      cls: "sure-btn" + oneBtnClz
	    });
	  }
	
	  if (options.reverse) btns = btns.reverse();
	
	  btns.forEach(function (item, index) {
	    if (btns.length - 1 == index) item.cls += ' last';
	    btnTmpls += utils.replaceTemlate(template, item);
	    self.callbacks[item.id] = item.callback;
	  });
	
	  return btnTmpls;
	}
	
	function insertContent(dom, options) {
	  if (options.selector) {
	    var comment = document.createComment("dialog-target replace"),
	        selector = options.selector,
	        oriDisplay = getComputedStyle(selector).getPropertyValue('display');
	
	    if (selector.parentNode) {
	      selector.parentNode.replaceChild(comment, selector);
	      dom._commentDom = comment;
	      if (oriDisplay == 'none') {
	        selector.style.display = 'block';
	      }
	      dom._originDisplay = oriDisplay;
	    }
	
	    dom.querySelector('.dialog-content').appendChild(selector);
	  } else dom.querySelector('.dialog-content').innerHTML = options.content.replace(/(\r\n|\n|\r)/gm, '<br/>');
	}
	/**
	 * [ModalDialog description]
	 * clazz: 弹出框的css类名
	 * cancelStr 取消按钮的按钮名
	 * sureStr 确定按钮的按钮名
	 * title 弹出框的标题
	 * header 表示头部的html模板
	 * okCallback 确定按钮回调函数
	 * cancelCallback 取消按钮回调函数
	 * buttons [{cls:'sure',callback:fn,name:'name'}]
	 * useBackground 单击背景时执行的回调函数
	 */
	var defaultSettings = {
	  clazz: 'dialog-theme',
	  cancelStr: '取消',
	  sureStr: '确定',
	  title: null,
	  header: '<span class="dialog-title">{title}</span>',
	  animated: false,
	  buttons: null,
	  useBackground: 'cancel',
	  complete: false
	},
	    beforeListeners = [],
	    afterListeners = [],
	    closedListeners = [],
	    _count = 0;
	
	var ModalDialog = function ModalDialog(options) {
	  var dialog, id;
	
	  options = _.assign({}, defaultSettings, options);
	
	  options._callBacks = options._callBacks || {};
	  id = options.id = options.id || _count;
	
	  Object.keys(options).forEach(function (name) {
	    if (typeof options[name] === 'function') {
	      options._callBacks[name] = options[name];
	    }
	  });
	
	  beforeListeners.forEach(function (listener) {
	    listener(options);
	  });
	
	  ModalDialog.dialogList[id] = dialog = new ModalDialog.create(options);
	
	  ModalDialog.modalCount++;
	
	  afterListeners.forEach(function (listener) {
	    listener(dialog);
	  });
	
	  _count++;
	
	  return dialog;
	};
	
	ModalDialog.create = function (options) {
	  var dialogDom, dlgPos, dlgMainDom, offsetH;
	
	  this.callbacks = options._callBacks;
	  this.id = options.id;
	
	  dialogDom = utils.createHtmlDom(getHtmlContent.call(this, options));
	
	  insertContent(dialogDom, options);
	  document.body.appendChild(dialogDom);
	
	  offsetH = document.documentElement.offsetHeight;
	
	  this.dlgScroll = scrollDlg.initTouch(dialogDom);
	
	  dlgMainDom = dialogDom.querySelector('.modal-dialog');
	  dlgPos = this.getPos(dlgMainDom);
	
	  _.assign(dlgMainDom.style, {
	    display: 'block',
	    left: dlgPos.left + 'px',
	    top: dlgPos.top + 'px'
	  });
	
	  if (options.animated) dialogDom.querySelector('.modal-dialog-main').className += ' dlg-animation';
	
	  if (options.useBackground) {
	    var userbgr = options.useBackground;
	    if (!options._callBacks[userbgr]) {
	      options._callBacks[userbgr] = function () {};
	    }
	    dialogDom.querySelector('.dialog-mask').dataset.id = options.useBackground;
	  }
	
	  dialogDom.querySelector('.dialog-mask').style.height = offsetH + 'px';
	
	  this._eventListener = this.proxy(this._clickEvent, dialogDom, options);
	  this.dialogDom = dialogDom;
	  this.options = options;
	  utils.bindEvent(dialogDom, 'click', this._eventListener);
	
	  return this;
	};
	_.assign(ModalDialog.create.prototype, {
	  callbacks: null,
	  getPos: function getPos(dialogDom) {
	    dialogDom = dialogDom || this.dialogDom;
	    if (!dialogDom) {
	      return { left: 0, top: 0 };
	    }
	    resizeWin();
	    var dlgH = dialogDom.offsetHeight;
	    var dlgW = dialogDom.offsetWidth;
	    var dlgPosY = winH - dlgH >= 0 ? (winH - dlgH) / 2 : winH * 0.1;
	    var dlgPosX = winW - dlgW >= 0 ? (winW - dlgW) / 2 : winW * 0.1;
	
	    return { left: dlgPosX, top: dlgPosY };
	  },
	  closeDialog: function closeDialog(isNotInvoke) {
	    var dialogDom = this.dialogDom,
	        options = this.options,
	        selector,
	        _commentDom,
	        self = this;
	
	    if (!dialogDom) return 1;
	
	    this.removeDialog(dialogDom, options);
	
	    if (options.selector && dialogDom._commentDom) {
	      selector = options.selector;
	      _commentDom = dialogDom._commentDom;
	
	      selector.style.display = dialogDom._originDisplay;
	      _commentDom.parentNode.replaceChild(selector, _commentDom);
	
	      dialogDom._commentDom = null;
	      dialogDom._originDisplay = null;
	    }
	    utils.unBindEvent(dialogDom, 'click', this._eventListener);
	    // dialogDom.parentNode.removeChild(dialogDom);
	    this.dlgScroll.destroyScroll && this.dlgScroll.destroyScroll();
	
	    if (!isNotInvoke) {
	      closedListeners.forEach(function (listener) {
	        listener(self);
	      });
	    } else {
	      if (options.cancelCallback) options.cancelCallback();
	    }
	
	    this._eventListener = null;
	    this.dialogDom = dialogDom = null;
	
	    options.complete && options.complete();
	
	    delete ModalDialog.dialogList[this.id];
	
	    ModalDialog.modalCount--;
	  },
	  removeDialog: function removeDialog(dlgDom) {
	    utils.bindEvent(dlgDom, 'transitionend', _removeTransition);
	    utils.bindEvent(dlgDom, 'webkitTransitionEnd', _removeTransition);
	
	    dlgDom.style.opacity = 0;
	
	    function _removeTransition() {
	      utils.unBindEvent(dlgDom, 'transitionend', _removeTransition);
	      utils.unBindEvent(dlgDom, 'webkitTransitionEnd', _removeTransition);
	      dlgDom.parentNode.removeChild(dlgDom);
	    }
	  },
	  refresh: function refresh() {
	    var dialogDom = this.dialogDom.querySelector('.modal-dialog'),
	        dlgPos = this.getPos(dialogDom);
	
	    _.assign(dialogDom.style, {
	      display: 'block',
	      left: dlgPos.left + 'px',
	      top: dlgPos.top + 'px'
	    });
	    this.dlgScroll.refresh();
	  },
	  _clickEvent: function _clickEvent(e, dialogDom, options) {
	    var target = e.target,
	        id = target.getAttribute('data-id'),
	        self = this;
	
	    if (typeof this.callbacks[id] == 'function' && !this.callbacks[id].call(this, e)) {
	      // setTimeout(function(){
	      self.closeDialog();
	      // },1);
	    }
	  },
	  proxy: function proxy(fn) {
	    var self = this,
	        wrapArgs = Array.prototype.slice.call(arguments, 1);
	
	    return function () {
	      var args = Array.prototype.slice.call(arguments);
	
	      if (wrapArgs.length > 0) args = args.concat(wrapArgs);
	
	      fn.apply(self, args);
	    };
	  }
	});
	
	ModalDialog.alert = function (content, title, callback, dom, cls) {
	  var clz = content.clazz ? content.clazz : cls ? cls : '';
	
	  clz += ' alert-dialog';
	
	  if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) !== 'object') {
	    content = utils.createParams({
	      title: title,
	      content: content,
	      okCallback: callback,
	      selector: dom
	    });
	  }
	
	  content.okCallback = content.okCallback || noop;
	
	  if (!content.title) clz += ' dlg-no-title';else clz += ' dlg-has-title';
	
	  content.clazz = clz;
	  return ModalDialog(content);
	};
	
	ModalDialog.confirm = function (content, sureFn, title, btText1, btText2, cancelFn, cls) {
	  var clz = content.clazz ? content.clazz : cls ? cls : '';
	
	  clz += ' confirm-dialog';
	
	  if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) !== 'object') {
	    content = utils.createParams({
	      title: title,
	      content: content,
	      okCallback: sureFn,
	      cancelCallback: cancelFn,
	      sureStr: btText2,
	      cancelStr: btText1
	    });
	  }
	
	  if (!content.title) clz += ' dlg-no-title';else clz += ' dlg-has-title';
	
	  content.okCallback = content.okCallback || noop;
	  content.cancelCallback = content.cancelCallback || noop;
	  content.clazz = clz;
	  return ModalDialog(content);
	};
	
	ModalDialog.afterListener = function (listener) {
	  afterListeners.push(listener);
	
	  return function () {
	    afterListeners = afterListeners.filter(function (item) {
	      return item != listener;
	    });
	  };
	};
	
	ModalDialog.preListener = function (listener) {
	  beforeListeners.push(listener);
	
	  return function () {
	    beforeListeners = beforeListeners.filter(function (item) {
	      return item != listener;
	    });
	  };
	};
	
	ModalDialog.closedListener = function (listener) {
	  closedListeners.push(listener);
	
	  return function () {
	    closedListeners = closedListeners.filter(function (item) {
	      return item != listener;
	    });
	  };
	};
	
	var _plugins = [];
	
	ModalDialog.addPlugin = function (fn) {
	  _plugins.push(fn);
	};
	
	ModalDialog.defaultConfig = {};
	var isConfig = false;
	
	ModalDialog.config = function (config) {
	  var options = utils.assign({}, ModalDialog.defaultConfig, config);
	
	  ModalDialog.options = options;
	  if (isConfig) {
	    console.info('modaldialg only can config once');
	    return;
	  }
	
	  for (var i = 0, len = _plugins.length; i < len; i++) {
	    _plugins[i](ModalDialog, options);
	  }
	
	  insertStyleToHead(options.baseFontSize || 16);
	
	  isConfig = true;
	};
	
	utils.bindEvent(window, "orientationchange", function () {
	  Object.keys(ModalDialog.dialogList).forEach(function (dialog) {
	    ModalDialog.dialogList[dialog].refresh();
	  });
	});
	
	ModalDialog.dialogList = {};
	ModalDialog.modalCount = 0;
	
	ModalDialog.DomUtils = utils;
	
	module.exports = ModalDialog;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ".rc-modal {\n  position: absolute;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  transition: opacity 0.3s ease-out;\n}\n.rc-modal .modal-dialog {\n  border-radius: $fn.rem( 1px );\n  text-align: center;\n  width: 90%;\n  margin: 0 auto;\n  z-index: 9000;\n  position: fixed;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);\n}\n.modal-dialog.dlg-no-title header {\n  height: $fn.rem( 28px );\n}\n.modal-dialog.dlg-no-title .dialog-content {\n  color: #000;\n}\n.modal-dialog.dlg-no-title section {\n  text-align: left;\n}\n.modal-dialog.dlg-has-title header {\n  padding: 0 0 $fn.rem( 10px ) 0;\n  font-size: $fn.rem( 18px );\n}\n.modal-dialog.alert-dialog section {\n  text-align: center;\n}\n.modal-dialog .modal-dialog-main {\n  position: relative;\n  z-index: 9000;\n  background: #fafafa;\n  font-size: $fn.rem( 16px );\n  border-radius: $fn.rem( 3px );\n  padding-top: $fn.rem( 28px );\n}\n.modal-dialog .dialog-title {\n  color: #000;\n}\n.modal-dialog .dialog-content {\n  color: #323232;\n  line-height: 1.6;\n}\n.modal-dialog em {\n  font-style: normal;\n}\n.modal-dialog section {\n  padding: 0px $fn.rem( 26px );\n  margin: 0 auto;\n  max-height: $fn.rem( 188px );\n  overflow: hidden;\n  position: relative;\n}\n.modal-dialog footer {\n  border-top: solid #d5d5d5;\n  border-top-width: $fn.rem( 1px );\n  height: $fn.rem( 45px );\n  line-height: $fn.rem( 45px );\n  margin-top: $fn.rem( 20px );\n  overflow: hidden;\n}\n.modal-dialog footer button {\n  outline: none;\n  border: 0;\n  padding: 0;\n  background: none;\n  font-size: $fn.rem( 16px );\n  height: $fn.rem( 45px );\n}\n.modal-dialog footer button.modal-dialog-onebtn {\n  width: 100%;\n}\n.modal-dialog footer button:after {\n  content: '';\n  border-right: solid #d5d5d5;\n  border-right-width: $fn.rem( 1px );\n  position: absolute;\n  top: 0px;\n  display: block;\n  height: 100%;\n  right: 0px;\n}\n.modal-dialog footer button.last:after {\n  display: none;\n}\n.modal-dialog footer .sure-btn,\n.modal-dialog footer .cancle-btn {\n  width: 50%;\n  float: left;\n  position: relative;\n}\n.modal-dialog footer .cancle-btn {\n  color: #000000;\n}\n.modal-dialog footer .sure-btn {\n  color: #517bd1;\n}\n.modal-dialog.alert-dialog footer {\n  text-align: center;\n}\n.modal-dialog.alert-dialog footer .sure-btn {\n  float: none;\n  margin: 0 auto;\n}\n.dialog-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 8999;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABGdBTUEAALGPC/xhBQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TgK1eW0YAAAALSURBVAjXY2DABwAAHgABboVHMgAAAABJRU5ErkJggg==);\n}\n"

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  createHtmlDom: function createHtml() {
	    var div = document.createElement('div');
	
	    return function (html) {
	      var temp;
	      div.innerHTML = html;
	      temp = div.children[0];
	      div.removeChild(temp);
	      return temp;
	    };
	  }(),
	  replaceTemlate: function replaceTemlate(str, data) {
	    var regx = new RegExp(/{(.*?)}/g),
	        temp;
	    while (temp = regx.exec(str)) {
	      str = str.replace(temp[0], data[temp[1]] || '');
	    }
	    return str.replace(/[\r\n]*/g, '');
	  },
	  fnTemplate: function fnTemplate(str, data) {
	    var regx = new RegExp(/\$fn\.(.+?)\((.*?)\)/g);
	
	    return str.replace(regx, function (expr, fn, val) {
	      return data[fn](val);
	    }).replace(/[\r\n]*/g, '');;
	  },
	  bindEvent: function bindEvent(dom, name, fn) {
	    dom.addEventListener ? dom.addEventListener(name, fn, false) : dom.attachEvent('on' + name, fn);
	  },
	  unBindEvent: function unBindEvent(dom, name, fn) {
	    dom.removeEventListener ? dom.removeEventListener(name, fn, false) : dom.detachEvent('on' + name, fn);
	  },
	  getUrlParam: function getUrlParam(key) {
	    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) return decodeURI(r[2]);
	    return null;
	  },
	  assign: function assign() {
	    var temp = arguments[0];
	    var args = [].slice.call(arguments, 1);
	    for (var i = 0, len = args.length; i < len; i++) {
	      var item = args[i];
	      if (!item) continue;
	      for (var p in item) {
	        if (item.hasOwnProperty(p)) {
	          temp[p] = item[p];
	        }
	      }
	    }
	    return temp;
	  },
	  closest: function closest(dom, cls) {
	    var clsRegx = new RegExp('(^|\\s+)' + cls + '(\\s+|$)'),
	        tagRegx = new RegExp('^' + cls + '$'),
	        parent = dom;
	
	    if (test(dom)) return dom;
	
	    while (!!(parent = parent.parentNode) && parent.nodeName.toLowerCase() != 'html') {
	      if (test(parent)) {
	        return parent;
	      }
	    }
	    return null;
	
	    function test(dom) {
	
	      if (!!dom.className.match(clsRegx)) {
	        return true;
	      } else if (tagRegx.test(dom.nodeName.toLowerCase())) {
	        return true;
	      }
	    }
	  },
	  createParams: function createParams(param) {
	    var res = {};
	
	    for (var p in param) {
	      if (param.hasOwnProperty(p)) {
	        if (typeof param[p] != 'undefined') {
	          res[p] = param[p];
	        }
	      }
	    }
	    return res;
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(4);
	
	function getHeight(sel, isOuter) {
	  var sectionStyle = getComputedStyle(sel),
	      marginH = 0;
	
	  if (isOuter) {
	    marginH = sectionStyle.getPropertyValue('margin-top').replace('px', '') * 1 + sectionStyle.getPropertyValue('margin-bottom').replace('px', '') * 1;
	  }
	  return sectionStyle.getPropertyValue('height').replace('px', '') * 1 + sectionStyle.paddingTop.replace('px', '') * 1 + sectionStyle.paddingBottom.replace('px', '') * 1 + sectionStyle.borderTopWidth.replace('px', '') * 1 + sectionStyle.borderBottomWidth.replace('px', '') * 1 + marginH;
	}
	
	var ease = {
	  circular: {
	    style: 'cubic-bezier(0.1, 0.57, 0.1, 1)'
	  }
	};
	
	module.exports = {
	  initTouch: function initTouch(dialog) {
	    var dlgContent = dialog.querySelector('.dialog-content'),
	        section = dialog.querySelector('section'),
	        scrollTargeStyle = dlgContent.style,
	        wrapperHeight = getComputedStyle(section).getPropertyValue('height').replace('px', '') * 1,
	        maxHeight,
	        startPosx,
	        startPosy,
	        isTouch,
	        startTime,
	        distY,
	        distX,
	        endTime = 0,
	        x = 0,
	        y = 0,
	        startX,
	        startY,
	        isInTransition;
	
	    maxHeight = wrapperHeight - getHeight(dlgContent, true);
	
	    scrollTargeStyle.transitionTimingFunction = ease.circular.style;
	
	    utils.bindEvent(dialog, 'touchmove', stopScrollMove);
	    utils.bindEvent(dialog, 'touchstart', startTouch);
	    utils.bindEvent(dialog, 'touchend', toucheEnd);
	    utils.bindEvent(dlgContent, 'transitionend', _transitionEnd);
	    utils.bindEvent(dlgContent, 'webkitTransitionEnd', _transitionEnd);
	
	    return {
	      destroyScroll: function destroyScroll() {
	        utils.unBindEvent(dialog, 'touchmove', stopScrollMove);
	        utils.unBindEvent(dialog, 'touchstart', startTouch);
	        utils.unBindEvent(dialog, 'touchend', toucheEnd);
	        utils.unBindEvent(dlgContent, 'transitionend', _transitionEnd);
	        utils.unBindEvent(dlgContent, 'webkitTransitionEnd', _transitionEnd);
	        dlgContent = section = null;
	      },
	      refresh: function refresh() {
	        wrapperHeight = getComputedStyle(section).getPropertyValue('height').replace('px', '') * 1;
	        maxHeight = wrapperHeight - getHeight(dlgContent, true);
	      }
	    };
	
	    function startTouch(e) {
	      var touch = e.touches[0],
	          target = utils.closest(e.target, 'dialog-content'),
	          pos;
	
	      if (!!target) {
	        if (isInTransition) {
	          _transitionTime();
	          isInTransition = false;
	          pos = getComputedPosition();
	          translate(Math.round(pos.x), Math.round(pos.y));
	        }
	        startPosx = touch.pageX;
	        startPosy = touch.pageY;
	        startTime = Date.now();
	        distX = distY = 0;
	        startX = x;
	        startY = y;
	        isTouch = true;
	      } else {
	        isTouch = false;
	      }
	    }
	    function stopScrollMove(e) {
	      var touch = e.touches[0],
	          posX = touch.pageX,
	          posY = touch.pageY,
	          nodeName = e.target.nodeName.toLowerCase(),
	          timestamp = Date.now();
	
	      var deltaY = posY - startPosy,
	          deltaX = posX - startPosx,
	          newY;
	
	      startPosx = posX;
	      startPosy = posY;
	
	      distX += deltaX;
	      distY += deltaY;
	
	      if (nodeName != 'input' && nodeName != 'select' && nodeName != 'textarea') {
	        e.preventDefault();
	        e.stopPropagation();
	      } else {
	        return;
	      }
	
	      if (timestamp - endTime > 300 && Math.abs(distY) < 10 || !isTouch || maxHeight >= 0) {
	        e.preventDefault();
	        return;
	      }
	
	      newY = y + deltaY;
	      if (newY > 0 || newY < maxHeight) {
	        newY = y + deltaY / 3;
	      }
	
	      translate(dlgContent, newY);
	
	      if (timestamp - startTime > 300) {
	        startTime = timestamp;
	        startX = x;
	        startY = y;
	      }
	    }
	    function toucheEnd(e) {
	      var duration = Date.now() - startTime,
	          newY = Math.round(y),
	          time = 0,
	          momentumY;
	
	      startPosx = null;
	      startPosy = null;
	      endTime = Date.now();
	      isInTransition = 0;
	
	      if (resetPosition(dlgContent, 500) || maxHeight >= 0) {
	        return;
	      }
	
	      scrollTo(dlgContent, newY);
	
	      if (duration < 300) {
	        momentumY = momentum(y, startY, duration);
	        newY = momentumY.destination;
	        time = momentumY.duration;
	        isInTransition = 1;
	      }
	
	      if (newY != y) {
	        scrollTo(dlgContent, newY, time);
	      }
	    }
	    function scrollTo(target, posy, time) {
	      time = time || 0;
	      isInTransition = time > 0;
	      _transitionTime(time);
	      translate(target, posy);
	    }
	    function translate(target, posy) {
	      scrollTargeStyle.webkitTransform = 'translate3d(0px,' + posy + 'px,0px)';
	      y = posy;
	    }
	    function resetPosition(target, time) {
	      var posY = y;
	
	      time = time || 0;
	
	      if (posY >= 0) {
	        posY = 0;
	      } else if (posY < maxHeight) {
	        posY = maxHeight;
	      }
	
	      if (posY == y) {
	        return false;
	      }
	
	      scrollTo(target, posY, time);
	      return true;
	    }
	
	    function momentum(current, start, time) {
	      var distance = current - start,
	          speed = Math.abs(distance) / time,
	          deceleration = 0.0006,
	          destination,
	          duration;
	
	      destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1); // s=(at^2)/2
	      duration = speed / deceleration; // v=at
	
	      if (destination < maxHeight) {
	        destination = maxHeight - wrapperHeight / 2.5 * (speed / 8);
	        distance = Math.abs(destination - current);
	        duration = distance / speed;
	      } else if (destination > 0) {
	        destination = wrapperHeight / 2.5 * (speed / 8);
	        distance = Math.abs(current) + destination;
	        duration = distance / speed;
	      }
	
	      return {
	        destination: Math.round(destination),
	        duration: duration
	      };
	    }
	
	    function getComputedPosition() {
	      var matrix = window.getComputedStyle(dlgContent, null),
	          x,
	          y;
	
	      matrix = matrix.webkitTransform.split(')')[0].split(', ');
	      x = +(matrix[12] || matrix[4]);
	      y = +(matrix[13] || matrix[5]);
	
	      return { x: x, y: y };
	    }
	
	    function _transitionTime(time) {
	      time = time || 0;
	      scrollTargeStyle.transitionDuration = time + 'ms';
	    }
	    function _transitionEnd() {
	      if (!isInTransition) return;
	      _transitionTime();
	      if (!resetPosition(dlgContent)) {
	        isInTransition = 0;
	      }
	    }
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	function initBackPress(ModalDialog, options) {
	
	  if (!options.useHash) return;
	
	  var notifyBackpress = options.notifyBackpress;
	  var dialogIdList = [];
	
	  notifyBackpress = notifyBackpress(options);
	
	  ModalDialog.afterListener(function (dialog) {
	    dialogIdList.push(dialog.id);
	
	    dialog.listenerBackPress = notifyBackpress.addListener(listenerBackpress(), 'add');
	
	    dialog.notifyPriority = notifyBackpress.callbackPriority;
	  });
	
	  ModalDialog.closedListener(function (dialog) {
	    dialogIdList = dialogIdList.filter(function (id) {
	      return dialog.id !== id;
	    });
	    // notifyBackpress.removeListener(dialog.listenerBackPress);
	    dialog.listenerBackPress.update();
	    notifyBackpress.goBack();
	  });
	
	  function listenerBackpress() {
	
	    return function () {
	      if (!dialogIdList.length) {
	        options.backPress && options.backPress();
	        return;
	      }
	
	      var dlgId = dialogIdList.pop();
	
	      ModalDialog.dialogList[dlgId].closeDialog(true);
	    };
	  }
	};
	
	module.exports = initBackPress;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDZiYjczZTVmYTk5MDk2NDcwMDRhP2E0ZDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ1dpdGhIYXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC5qcz8zMTRkIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5sZXNzP2ZiOWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcz81ZTVjIiwid2VicGFjazovLy8uL3NyYy9kbGdzY3JvbGwuanM/N2NlYiIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2lucy9iYWNrUHJlc3MyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckNBLEtBQUksY0FBYyxvQkFBUSxDQUFSLENBQWxCOztBQUVBLEtBQUksa0JBQWtCLG9CQUFRLENBQVIsQ0FBdEI7O0FBRUEsYUFBWSxhQUFaLENBQTBCLE9BQTFCLEdBQW9DLElBQXBDOzs7QUFHRSxhQUFZLFNBQVosQ0FBc0IsZUFBdEI7Ozs7QUFJRixRQUFPLE9BQVAsR0FBaUIsV0FBakIsQzs7Ozs7Ozs7Ozs7QUNaQSxLQUFJLFVBQVUsb0JBQVEsQ0FBUixDQUFkOztBQUVBLEtBQUksUUFBUSxvQkFBUSxDQUFSLENBQVo7QUFDQSxLQUFJLFlBQVksb0JBQVEsQ0FBUixDQUFoQjtBQUNBLEtBQUksSUFBSTtBQUNOLFdBQVEs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QkFBZ0IsV0FBaEIsQ0FBNEIsbUJBQTVCLEVBQWlELEtBQWpELENBQTNCOztBQUVBLFlBQU8sY0FBUCxHQUF3QixnQkFBZ0IsZ0JBQXhDO0FBQ0QsSUFORDs7QUFRQSxlQUFZLGNBQVosQ0FBMkIsVUFBUyxNQUFULEVBQWdCO0FBQ3pDLG9CQUFlLGFBQWEsTUFBYixDQUFvQixVQUFDLEVBQUQsRUFBTTtBQUN2QyxjQUFPLE9BQU8sRUFBUCxLQUFjLEVBQXJCO0FBQ0QsTUFGYyxDQUFmOztBQUlBLFlBQU8saUJBQVAsQ0FBeUIsTUFBekI7QUFDQSxxQkFBZ0IsTUFBaEI7QUFDRCxJQVBEOztBQVNBLFlBQVMsaUJBQVQsR0FBNkI7O0FBRTNCLFlBQU8sWUFBVTtBQUNmLFdBQUcsQ0FBQyxhQUFhLE1BQWpCLEVBQXdCO0FBQ3RCLGlCQUFRLFNBQVIsSUFBcUIsUUFBUSxTQUFSLEVBQXJCO0FBQ0E7QUFDRDs7QUFFRCxXQUFNLFFBQVEsYUFBYSxHQUFiLEVBQWQ7O0FBRUEsbUJBQVksVUFBWixDQUF1QixLQUF2QixFQUE4QixXQUE5QixDQUEwQyxJQUExQztBQUNELE1BVEQ7QUFVRDtBQUNGOztBQUVELFFBQU8sT0FBUCxHQUFpQixhQUFqQixDIiwiZmlsZSI6IndpdGhIYXNoRGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGREaWFsb2dcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGREaWFsb2dcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZiYjczZTVmYTk5MDk2NDcwMDRhXG4gKiovIiwiXHJcbnZhciBNb2RhbERpYWxvZyA9IHJlcXVpcmUoJy4vbW9kYWwuanMnKTtcclxuLy8gdmFyIGhpc3RvcnlQbHVnaW4gPSByZXF1aXJlKCcuL3BsdWdpbnMvaGlzdG9yeS5qcycpO1xyXG52YXIgYmFja1ByZXNzUGx1Z2luID0gcmVxdWlyZSgnLi9wbHVnaW5zL2JhY2tQcmVzczIuanMnKTtcclxuXHJcbk1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcudXNlSGFzaCA9IHRydWU7XHJcblxyXG4vLyBpZih3aW5kb3cuRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlICYmIHR5cGVvZiB3aW5kb3cuRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlLmxpc3RlbkJhY2tQcmVzcyA9PSAnZnVuY3Rpb24nKVxyXG4gIE1vZGFsRGlhbG9nLmFkZFBsdWdpbihiYWNrUHJlc3NQbHVnaW4pO1xyXG4vLyBlbHNlXHJcbi8vICAgTW9kYWxEaWFsb2cuYWRkUGx1Z2luKGhpc3RvcnlQbHVnaW4pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbERpYWxvZztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kaWFsb2dXaXRoSGFzaC5qc1xuICoqLyIsInZhciBiYXNlQ3NzID0gcmVxdWlyZSgnLi9jc3MvYmFzZS5sZXNzJyk7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL2RvbS5qcycpO1xyXG52YXIgc2Nyb2xsRGxnID0gcmVxdWlyZSgnLi9kbGdzY3JvbGwuanMnKTtcclxudmFyIF8gPSB7XHJcbiAgYXNzaWduOiB1dGlscy5hc3NpZ25cclxufSwgd2luSCwgd2luVztcclxuXHJcbmZ1bmN0aW9uIG5vb3AoKXt9XHJcblxyXG4vL+WKqOaAgeaPkuWFpWNzc+agt+W8j1xyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZVRvSGVhZChiYXNlRm9udFNpemUpe1xyXG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcblxyXG4gIHN0eWxlLmlubmVySFRNTCA9IHV0aWxzLmZuVGVtcGxhdGUoXHJcbiAgICBiYXNlQ3NzLFxyXG4gICAge1xyXG4gICAgICByZW06IGZ1bmN0aW9uKHB4KXtcclxuICAgICAgICByZXR1cm4gcHgucmVwbGFjZSgvKFxcZCspcHgvLGZ1bmN0aW9uKGV4cHIsIHZhbCl7XHJcbiAgICAgICAgICByZXR1cm4gKHZhbCAqMSAvIGJhc2VGb250U2l6ZSkgKyAncmVtJztcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgdmFyIGhlYWREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XHJcbiAgdmFyIGZpcnN0TGluayA9IGhlYWREb20ucXVlcnlTZWxlY3RvcignbGluaycpO1xyXG5cclxuICBpZighZmlyc3RMaW5rKVxyXG4gICAgaGVhZERvbS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgZWxzZVxyXG4gICAgaGVhZERvbS5pbnNlcnRCZWZvcmUoc3R5bGUsIGZpcnN0TGluayk7XHJcblxyXG59XHJcblxyXG4vKlxyXG7nlJ/miJDlr7nor53moYbmqKHmnb/lhoXlrrlcclxuICovXHJcbiAgZnVuY3Rpb24gZ2V0SHRtbENvbnRlbnQob3B0aW9ucyl7XHJcbiAgICB2YXIgdGVtcGxhdGVIdG1sID0gW10sXHJcbiAgICAgICAgaGVhZGVyID0gb3B0aW9ucy5oZWFkZXI7XHJcblxyXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxkaXYgY2xhc3M9XCJyYy1tb2RhbFwiPjxkaXYgY2xhc3M9XCJkaWFsb2ctbWFza1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgJyArIG9wdGlvbnMuY2xhenogKyAnXCI+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZy1tYWluXCI+Jyk7XHJcbiAgICBpZihvcHRpb25zLnRpdGxlICE9IG51bGwgJiYgb3B0aW9ucy50aXRsZSAhPSAnJyl7XHJcbiAgICAgIHRlbXBsYXRlSHRtbC5wdXNoKCc8aGVhZGVyPicgKyB1dGlscy5yZXBsYWNlVGVtbGF0ZShoZWFkZXIsb3B0aW9ucykgKyAnPC9oZWFkZXI+Jyk7XHJcbiAgICB9XHJcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPHNlY3Rpb24+PGRpdiBjbGFzcz1cImRpYWxvZy1jb250ZW50XCI+PC9kaXY+PC9zZWN0aW9uPjxmb290ZXI+Jyk7XHJcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaChjcmVhdGVCdXR0b25zLmNhbGwodGhpcyxvcHRpb25zKSk7XHJcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXBsYXRlSHRtbC5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2l6ZVdpbigpe1xyXG4gICAgd2luSCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgd2luVyA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gIH1cclxuICAvLyB1dGlscy5iaW5kRXZlbnQod2luZG93LCdyZXNpemUnLHJlc2l6ZVdpbik7XHJcbi8vVE9ETzpcclxuICAvLyByZXNpemVXaW4oKTtcclxuICAvKlxyXG4gIOWIm+W7uuW6lemDqOaMiemSrlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnMob3B0aW9ucyl7XHJcbiAgICB2YXIgYnRucyA9IG9wdGlvbnMuYnV0dG9ucyB8fCBbXSxcclxuICAgICAgICB0ZW1wbGF0ZSA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIntjbHN9XCIgZGF0YS1pZD1cIntpZH1cIiA+e25hbWV9PC9idXR0b24+JyxcclxuICAgICAgICBidG5UbXBscyA9ICcnLFxyXG4gICAgICAgIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIG9uZUJ0bkNsej0nJztcclxuXHJcbiAgICBpZihvcHRpb25zLmNhbmNlbENhbGxiYWNrKXtcclxuICAgICAgYnRucy5wdXNoKHtcclxuICAgICAgICBpZDogJ2NhbmNlbCcsXHJcbiAgICAgICAgbmFtZTogb3B0aW9ucy5jYW5jZWxTdHIsXHJcbiAgICAgICAgY2FsbGJhY2s6IG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2ssXHJcbiAgICAgICAgY2xzOiBcImNhbmNsZS1idG5cIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihidG5zLmxlbmd0aCA9PTApXHJcbiAgICAgIG9uZUJ0bkNseiA9ICcgbW9kYWwtZGlhbG9nLW9uZWJ0bic7XHJcblxyXG4gICAgaWYob3B0aW9ucy5va0NhbGxiYWNrKXtcclxuICAgICAgYnRucy5wdXNoKHtcclxuICAgICAgICBpZDogJ29rJyxcclxuICAgICAgICBuYW1lOiBvcHRpb25zLnN1cmVTdHIsXHJcbiAgICAgICAgY2FsbGJhY2s6IG9wdGlvbnMub2tDYWxsYmFjayxcclxuICAgICAgICBjbHM6IFwic3VyZS1idG5cIiArIG9uZUJ0bkNselxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihvcHRpb25zLnJldmVyc2UpXHJcbiAgICAgIGJ0bnMgPSBidG5zLnJldmVyc2UoKTtcclxuXHJcbiAgICBidG5zLmZvckVhY2goZnVuY3Rpb24oaXRlbSxpbmRleCl7XHJcbiAgICAgIGlmKChidG5zLmxlbmd0aCAtIDEpID09IGluZGV4KVxyXG4gICAgICAgIGl0ZW0uY2xzICs9ICcgbGFzdCc7XHJcbiAgICAgIGJ0blRtcGxzICs9IHV0aWxzLnJlcGxhY2VUZW1sYXRlKHRlbXBsYXRlLGl0ZW0pO1xyXG4gICAgICBzZWxmLmNhbGxiYWNrc1tpdGVtLmlkXSA9IGl0ZW0uY2FsbGJhY2s7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYnRuVG1wbHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbnNlcnRDb250ZW50KGRvbSxvcHRpb25zKXtcclxuICAgICAgaWYob3B0aW9ucy5zZWxlY3Rvcil7XHJcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiZGlhbG9nLXRhcmdldCByZXBsYWNlXCIpLFxyXG4gICAgICAgICAgICBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG9yaURpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHNlbGVjdG9yKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyk7XHJcblxyXG4gICAgICAgIGlmKHNlbGVjdG9yLnBhcmVudE5vZGUpe1xyXG4gICAgICAgICAgc2VsZWN0b3IucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWVudCxzZWxlY3Rvcik7XHJcbiAgICAgICAgICBkb20uX2NvbW1lbnREb20gPSBjb21tZW50O1xyXG4gICAgICAgICAgaWYob3JpRGlzcGxheSA9PSAnbm9uZScpe1xyXG4gICAgICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRvbS5fb3JpZ2luRGlzcGxheSA9IG9yaURpc3BsYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jb250ZW50JykuYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBkb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jb250ZW50JykuaW5uZXJIVE1MID0gb3B0aW9ucy5jb250ZW50LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sICc8YnIvPicpO1xyXG4gICAgfVxyXG4vKipcclxuICogW01vZGFsRGlhbG9nIGRlc2NyaXB0aW9uXVxyXG4gKiBjbGF6ejog5by55Ye65qGG55qEY3Nz57G75ZCNXHJcbiAqIGNhbmNlbFN0ciDlj5bmtojmjInpkq7nmoTmjInpkq7lkI1cclxuICogc3VyZVN0ciDnoa7lrprmjInpkq7nmoTmjInpkq7lkI1cclxuICogdGl0bGUg5by55Ye65qGG55qE5qCH6aKYXHJcbiAqIGhlYWRlciDooajnpLrlpLTpg6jnmoRodG1s5qih5p2/XHJcbiAqIG9rQ2FsbGJhY2sg56Gu5a6a5oyJ6ZKu5Zue6LCD5Ye95pWwXHJcbiAqIGNhbmNlbENhbGxiYWNrIOWPlua2iOaMiemSruWbnuiwg+WHveaVsFxyXG4gKiBidXR0b25zIFt7Y2xzOidzdXJlJyxjYWxsYmFjazpmbixuYW1lOiduYW1lJ31dXHJcbiAqIHVzZUJhY2tncm91bmQg5Y2V5Ye76IOM5pmv5pe25omn6KGM55qE5Zue6LCD5Ye95pWwXHJcbiAqL1xyXG4gIHZhciBkZWZhdWx0U2V0dGluZ3MgPSB7XHJcbiAgICAgICAgY2xheno6ICdkaWFsb2ctdGhlbWUnLFxyXG4gICAgICAgIGNhbmNlbFN0cjogJ+WPlua2iCcsXHJcbiAgICAgICAgc3VyZVN0cjogJ+ehruWumicsXHJcbiAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj57dGl0bGV9PC9zcGFuPicsXHJcbiAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvbnM6IG51bGwsXHJcbiAgICAgICAgdXNlQmFja2dyb3VuZDogJ2NhbmNlbCcsXHJcbiAgICAgICAgY29tcGxldGU6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIGJlZm9yZUxpc3RlbmVycyA9IFtdLFxyXG4gICAgICBhZnRlckxpc3RlbmVycyA9IFtdLFxyXG4gICAgICBjbG9zZWRMaXN0ZW5lcnMgPSBbXSxcclxuICAgICAgX2NvdW50ID0gMDtcclxuXHJcbiAgdmFyIE1vZGFsRGlhbG9nID0gZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICB2YXIgZGlhbG9nLFxyXG4gICAgICAgIGlkO1xyXG5cclxuICAgIG9wdGlvbnMgPSBfLmFzc2lnbih7fSxkZWZhdWx0U2V0dGluZ3Msb3B0aW9ucyk7XHJcblxyXG4gICAgb3B0aW9ucy5fY2FsbEJhY2tzID0gb3B0aW9ucy5fY2FsbEJhY2tzIHx8IHt9O1xyXG4gICAgaWQgPSBvcHRpb25zLmlkID0gb3B0aW9ucy5pZCB8fCBfY291bnQ7XHJcblxyXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbihuYW1lKXtcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgb3B0aW9ucy5fY2FsbEJhY2tzW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYmVmb3JlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgICBsaXN0ZW5lcihvcHRpb25zKTtcclxuICAgIH0pO1xyXG5cclxuICAgIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbaWRdID0gZGlhbG9nID0gbmV3IE1vZGFsRGlhbG9nLmNyZWF0ZShvcHRpb25zKTtcclxuXHJcbiAgICBNb2RhbERpYWxvZy5tb2RhbENvdW50ICsrO1xyXG5cclxuICAgIGFmdGVyTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgICBsaXN0ZW5lcihkaWFsb2cpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2NvdW50ICsrO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2c7XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICB2YXIgZGlhbG9nRG9tLFxyXG4gICAgICAgIGRsZ1BvcyxcclxuICAgICAgICBkbGdNYWluRG9tLFxyXG4gICAgICAgIG9mZnNldEg7XHJcblxyXG4gICAgdGhpcy5jYWxsYmFja3MgPSBvcHRpb25zLl9jYWxsQmFja3M7XHJcbiAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcclxuXHJcbiAgICBkaWFsb2dEb20gPSB1dGlscy5jcmVhdGVIdG1sRG9tKGdldEh0bWxDb250ZW50LmNhbGwodGhpcyxvcHRpb25zKSk7XHJcblxyXG4gICAgaW5zZXJ0Q29udGVudChkaWFsb2dEb20sb3B0aW9ucyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZ0RvbSk7XHJcblxyXG4gICAgb2Zmc2V0SCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5kbGdTY3JvbGwgPSBzY3JvbGxEbGcuaW5pdFRvdWNoKGRpYWxvZ0RvbSk7XHJcblxyXG4gICAgZGxnTWFpbkRvbSA9IGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nJyk7XHJcbiAgICBkbGdQb3MgPSB0aGlzLmdldFBvcyhkbGdNYWluRG9tKTtcclxuXHJcbiAgICBfLmFzc2lnbihkbGdNYWluRG9tLnN0eWxlLHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxyXG4gICAgICB0b3A6IGRsZ1Bvcy50b3AgKyAncHgnXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihvcHRpb25zLmFuaW1hdGVkKVxyXG4gICAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZy1tYWluJykuY2xhc3NOYW1lICs9ICcgZGxnLWFuaW1hdGlvbic7XHJcblxyXG4gICAgaWYob3B0aW9ucy51c2VCYWNrZ3JvdW5kKXtcclxuICAgICAgdmFyIHVzZXJiZ3IgPSBvcHRpb25zLnVzZUJhY2tncm91bmQ7XHJcbiAgICAgIGlmKCFvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0pe1xyXG4gICAgICAgIG9wdGlvbnMuX2NhbGxCYWNrc1t1c2VyYmdyXSA9IGZ1bmN0aW9uKCl7fTtcclxuICAgICAgfVxyXG4gICAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuZGF0YXNldC5pZCA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuc3R5bGUuaGVpZ2h0ID0gb2Zmc2V0SCArICdweCc7XHJcblxyXG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lciA9IHRoaXMucHJveHkodGhpcy5fY2xpY2tFdmVudCxkaWFsb2dEb20sb3B0aW9ucyk7XHJcbiAgICB0aGlzLmRpYWxvZ0RvbSA9IGRpYWxvZ0RvbTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nRG9tLCdjbGljaycsdGhpcy5fZXZlbnRMaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuICBfLmFzc2lnbihNb2RhbERpYWxvZy5jcmVhdGUucHJvdG90eXBlLHtcclxuICAgIGNhbGxiYWNrczogbnVsbCxcclxuICAgIGdldFBvczogZnVuY3Rpb24oZGlhbG9nRG9tKXtcclxuICAgICAgZGlhbG9nRG9tID0gZGlhbG9nRG9tIHx8IHRoaXMuZGlhbG9nRG9tO1xyXG4gICAgICBpZighZGlhbG9nRG9tKXtcclxuICAgICAgICByZXR1cm4ge2xlZnQ6MCx0b3A6MH07XHJcbiAgICAgIH1cclxuICAgICAgcmVzaXplV2luKCk7XHJcbiAgICAgIHZhciBkbGdIID0gZGlhbG9nRG9tLm9mZnNldEhlaWdodDtcclxuICAgICAgdmFyIGRsZ1cgPSBkaWFsb2dEb20ub2Zmc2V0V2lkdGg7XHJcbiAgICAgIHZhciBkbGdQb3NZID0gKHdpbkggLSBkbGdIID49IDAgKSA/ICh3aW5IIC0gZGxnSCkvMiA6IHdpbkgqMC4xO1xyXG4gICAgICB2YXIgZGxnUG9zWCA9ICh3aW5XIC0gZGxnVyA+PSAwICkgPyAod2luVyAtIGRsZ1cpLzIgOiB3aW5XKjAuMTtcclxuXHJcbiAgICAgIHJldHVybiB7bGVmdDogZGxnUG9zWCwgdG9wOiBkbGdQb3NZfTtcclxuICAgIH0sXHJcbiAgICBjbG9zZURpYWxvZzpmdW5jdGlvbihpc05vdEludm9rZSl7XHJcbiAgICAgIHZhciBkaWFsb2dEb20gPSB0aGlzLmRpYWxvZ0RvbSxcclxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgICBzZWxlY3RvcixcclxuICAgICAgICAgIF9jb21tZW50RG9tLFxyXG4gICAgICAgICAgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICBpZighZGlhbG9nRG9tKVxyXG4gICAgICAgIHJldHVybiAxO1xyXG5cclxuICAgICAgdGhpcy5yZW1vdmVEaWFsb2coZGlhbG9nRG9tLCBvcHRpb25zKTtcclxuXHJcbiAgICAgIGlmKG9wdGlvbnMuc2VsZWN0b3IgJiYgZGlhbG9nRG9tLl9jb21tZW50RG9tKXtcclxuICAgICAgICBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3I7XHJcbiAgICAgICAgX2NvbW1lbnREb20gPSBkaWFsb2dEb20uX2NvbW1lbnREb207XHJcblxyXG4gICAgICAgIHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSBkaWFsb2dEb20uX29yaWdpbkRpc3BsYXk7XHJcbiAgICAgICAgX2NvbW1lbnREb20ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc2VsZWN0b3IsX2NvbW1lbnREb20pO1xyXG5cclxuICAgICAgICBkaWFsb2dEb20uX2NvbW1lbnREb20gPSBudWxsO1xyXG4gICAgICAgIGRpYWxvZ0RvbS5fb3JpZ2luRGlzcGxheSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nRG9tLCdjbGljaycsdGhpcy5fZXZlbnRMaXN0ZW5lcik7XHJcbiAgICAgIC8vIGRpYWxvZ0RvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpYWxvZ0RvbSk7XHJcbiAgICAgIHRoaXMuZGxnU2Nyb2xsLmRlc3Ryb3lTY3JvbGwgJiYgdGhpcy5kbGdTY3JvbGwuZGVzdHJveVNjcm9sbCgpO1xyXG5cclxuICAgICAgaWYoIWlzTm90SW52b2tlKXtcclxuICAgICAgICBjbG9zZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICAgICAgICBsaXN0ZW5lcihzZWxmKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYob3B0aW9ucy5jYW5jZWxDYWxsYmFjaylcclxuICAgICAgICAgIG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2soKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lciA9IG51bGw7XHJcbiAgICAgIHRoaXMuZGlhbG9nRG9tID0gZGlhbG9nRG9tID0gbnVsbDtcclxuXHJcbiAgICAgIG9wdGlvbnMuY29tcGxldGUgJiYgb3B0aW9ucy5jb21wbGV0ZSgpO1xyXG5cclxuICAgICAgZGVsZXRlIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbdGhpcy5pZF07XHJcblxyXG4gICAgICBNb2RhbERpYWxvZy5tb2RhbENvdW50IC0tO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZURpYWxvZzogZnVuY3Rpb24oZGxnRG9tKXtcclxuICAgICAgdXRpbHMuYmluZEV2ZW50KGRsZ0RvbSwgJ3RyYW5zaXRpb25lbmQnLCBfcmVtb3ZlVHJhbnNpdGlvbilcclxuICAgICAgdXRpbHMuYmluZEV2ZW50KGRsZ0RvbSwnd2Via2l0VHJhbnNpdGlvbkVuZCcsIF9yZW1vdmVUcmFuc2l0aW9uKTtcclxuXHJcbiAgICAgIGRsZ0RvbS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9yZW1vdmVUcmFuc2l0aW9uKCl7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnRG9tLCd0cmFuc2l0aW9uZW5kJyxfcmVtb3ZlVHJhbnNpdGlvbik7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnRG9tLCd3ZWJraXRUcmFuc2l0aW9uRW5kJyxfcmVtb3ZlVHJhbnNpdGlvbik7XHJcbiAgICAgICAgZGxnRG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGxnRG9tKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlZnJlc2g6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBkaWFsb2dEb20gPSB0aGlzLmRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nJyksXHJcbiAgICAgICAgICBkbGdQb3MgPSB0aGlzLmdldFBvcyhkaWFsb2dEb20pO1xyXG5cclxuICAgICAgXy5hc3NpZ24oZGlhbG9nRG9tLnN0eWxlLHtcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIGxlZnQ6IGRsZ1Bvcy5sZWZ0ICsgJ3B4JyxcclxuICAgICAgICB0b3A6IGRsZ1Bvcy50b3AgKyAncHgnXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmRsZ1Njcm9sbC5yZWZyZXNoKCk7XHJcbiAgICB9LFxyXG4gICAgX2NsaWNrRXZlbnQ6IGZ1bmN0aW9uKGUsZGlhbG9nRG9tLG9wdGlvbnMpe1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXHJcbiAgICAgICAgICBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcclxuICAgICAgICAgIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgaWYodHlwZW9mIHRoaXMuY2FsbGJhY2tzW2lkXSA9PSAnZnVuY3Rpb24nICYmICF0aGlzLmNhbGxiYWNrc1tpZF0uY2FsbCh0aGlzLGUpKXtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBzZWxmLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgLy8gfSwxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb3h5OiBmdW5jdGlvbihmbil7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgIHdyYXBBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICBpZih3cmFwQXJncy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KHdyYXBBcmdzKTtcclxuXHJcbiAgICAgICAgZm4uYXBwbHkoc2VsZixhcmdzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBNb2RhbERpYWxvZy5hbGVydCA9IGZ1bmN0aW9uKGNvbnRlbnQsdGl0bGUsY2FsbGJhY2ssZG9tLGNscyl7XHJcbiAgICB2YXIgY2x6ID0gY29udGVudC5jbGF6eiA/IGNvbnRlbnQuY2xhenogOiAoY2xzID8gY2xzIDogJycpO1xyXG5cclxuICAgIGNseiArPSAnIGFsZXJ0LWRpYWxvZyc7XHJcblxyXG4gICAgaWYodHlwZW9mIGNvbnRlbnQgIT09ICdvYmplY3QnKXtcclxuICAgICAgY29udGVudCA9IHV0aWxzLmNyZWF0ZVBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgb2tDYWxsYmFjazpjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IGRvbVxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZW50Lm9rQ2FsbGJhY2sgPSBjb250ZW50Lm9rQ2FsbGJhY2sgfHwgbm9vcDtcclxuXHJcbiAgICBpZighY29udGVudC50aXRsZSlcclxuICAgICAgY2x6ICs9ICcgZGxnLW5vLXRpdGxlJztcclxuICAgIGVsc2VcclxuICAgICAgY2x6ICs9ICcgZGxnLWhhcy10aXRsZSc7XHJcblxyXG4gICAgY29udGVudC5jbGF6eiA9IGNsejtcclxuICAgIHJldHVybiBNb2RhbERpYWxvZyhjb250ZW50KTtcclxuICB9XHJcblxyXG4gIE1vZGFsRGlhbG9nLmNvbmZpcm0gPSBmdW5jdGlvbihjb250ZW50LHN1cmVGbix0aXRsZSxidFRleHQxLGJ0VGV4dDIsY2FuY2VsRm4sY2xzKXtcclxuICAgIHZhciBjbHogPSBjb250ZW50LmNsYXp6ID8gY29udGVudC5jbGF6eiA6IChjbHMgPyBjbHMgOiAnJyk7XHJcblxyXG4gICAgY2x6ICs9ICcgY29uZmlybS1kaWFsb2cnO1xyXG5cclxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XHJcbiAgICAgIGNvbnRlbnQgPSB1dGlscy5jcmVhdGVQYXJhbXMoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgIG9rQ2FsbGJhY2s6c3VyZUZuLFxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxDYWxsYmFjazpjYW5jZWxGbixcclxuICAgICAgICAgICAgICAgICAgc3VyZVN0cjogYnRUZXh0MixcclxuICAgICAgICAgICAgICAgICAgY2FuY2VsU3RyOmJ0VGV4dDFcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXHJcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XHJcbiAgICBlbHNlXHJcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xyXG5cclxuICAgIGNvbnRlbnQub2tDYWxsYmFjayA9IGNvbnRlbnQub2tDYWxsYmFjayB8fCBub29wO1xyXG4gICAgY29udGVudC5jYW5jZWxDYWxsYmFjayA9IGNvbnRlbnQuY2FuY2VsQ2FsbGJhY2sgfHwgbm9vcDtcclxuICAgIGNvbnRlbnQuY2xhenogPSBjbHo7XHJcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coY29udGVudCk7XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuYWZ0ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgIGFmdGVyTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICBhZnRlckxpc3RlbmVycyA9IGFmdGVyTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBNb2RhbERpYWxvZy5wcmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgIGJlZm9yZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgYmVmb3JlTGlzdGVuZXJzID0gYmVmb3JlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBNb2RhbERpYWxvZy5jbG9zZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgIGNsb3NlZExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgY2xvc2VkTGlzdGVuZXJzID0gY2xvc2VkTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgX3BsdWdpbnMgPSBbXTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuYWRkUGx1Z2luID0gZnVuY3Rpb24oZm4pe1xyXG4gICAgX3BsdWdpbnMucHVzaChmbik7XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuZGVmYXVsdENvbmZpZyA9IHt9O1xyXG4gIHZhciBpc0NvbmZpZyA9IGZhbHNlO1xyXG5cclxuICBNb2RhbERpYWxvZy5jb25maWcgPSBmdW5jdGlvbihjb25maWcpe1xyXG4gICAgdmFyIG9wdGlvbnMgPSB1dGlscy5hc3NpZ24oe30sTW9kYWxEaWFsb2cuZGVmYXVsdENvbmZpZyxjb25maWcpO1xyXG5cclxuICAgIE1vZGFsRGlhbG9nLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgaWYoaXNDb25maWcpe1xyXG4gICAgICBjb25zb2xlLmluZm8oJ21vZGFsZGlhbGcgb25seSBjYW4gY29uZmlnIG9uY2UnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcih2YXIgaT0wLCBsZW49X3BsdWdpbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xyXG4gICAgICBfcGx1Z2luc1tpXShNb2RhbERpYWxvZywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0U3R5bGVUb0hlYWQob3B0aW9ucy5iYXNlRm9udFNpemUgfHwgMTYpO1xyXG5cclxuICAgIGlzQ29uZmlnID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHV0aWxzLmJpbmRFdmVudCh3aW5kb3csIFwib3JpZW50YXRpb25jaGFuZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgT2JqZWN0LmtleXMoTW9kYWxEaWFsb2cuZGlhbG9nTGlzdCkuZm9yRWFjaChkaWFsb2c9PntcclxuICAgICAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdFtkaWFsb2ddLnJlZnJlc2goKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBNb2RhbERpYWxvZy5kaWFsb2dMaXN0ID0ge307XHJcbiAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCA9IDA7XHJcblxyXG5Nb2RhbERpYWxvZy5Eb21VdGlscyA9IHV0aWxzO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbERpYWxvZztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kYWwuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnJjLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcXG59XFxuLnJjLW1vZGFsIC5tb2RhbC1kaWFsb2cge1xcbiAgYm9yZGVyLXJhZGl1czogJGZuLnJlbSggMXB4ICk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB6LWluZGV4OiA5MDAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1vZGFsLWRpYWxvZy5kbGctbm8tdGl0bGUgaGVhZGVyIHtcXG4gIGhlaWdodDogJGZuLnJlbSggMjhweCApO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1uby10aXRsZSAuZGlhbG9nLWNvbnRlbnQge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLW5vLXRpdGxlIHNlY3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLm1vZGFsLWRpYWxvZy5kbGctaGFzLXRpdGxlIGhlYWRlciB7XFxuICBwYWRkaW5nOiAwIDAgJGZuLnJlbSggMTBweCApIDA7XFxuICBmb250LXNpemU6ICRmbi5yZW0oIDE4cHggKTtcXG59XFxuLm1vZGFsLWRpYWxvZy5hbGVydC1kaWFsb2cgc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbC1kaWFsb2cgLm1vZGFsLWRpYWxvZy1tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDkwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgZm9udC1zaXplOiAkZm4ucmVtKCAxNnB4ICk7XFxuICBib3JkZXItcmFkaXVzOiAkZm4ucmVtKCAzcHggKTtcXG4gIHBhZGRpbmctdG9wOiAkZm4ucmVtKCAyOHB4ICk7XFxufVxcbi5tb2RhbC1kaWFsb2cgLmRpYWxvZy10aXRsZSB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLm1vZGFsLWRpYWxvZyAuZGlhbG9nLWNvbnRlbnQge1xcbiAgY29sb3I6ICMzMjMyMzI7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG4ubW9kYWwtZGlhbG9nIGVtIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLm1vZGFsLWRpYWxvZyBzZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDBweCAkZm4ucmVtKCAyNnB4ICk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC1oZWlnaHQ6ICRmbi5yZW0oIDE4OHB4ICk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciB7XFxuICBib3JkZXItdG9wOiBzb2xpZCAjZDVkNWQ1O1xcbiAgYm9yZGVyLXRvcC13aWR0aDogJGZuLnJlbSggMXB4ICk7XFxuICBoZWlnaHQ6ICRmbi5yZW0oIDQ1cHggKTtcXG4gIGxpbmUtaGVpZ2h0OiAkZm4ucmVtKCA0NXB4ICk7XFxuICBtYXJnaW4tdG9wOiAkZm4ucmVtKCAyMHB4ICk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAkZm4ucmVtKCAxNnB4ICk7XFxuICBoZWlnaHQ6ICRmbi5yZW0oIDQ1cHggKTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uLm1vZGFsLWRpYWxvZy1vbmVidG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIGJ1dHRvbjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGJvcmRlci1yaWdodDogc29saWQgI2Q1ZDVkNTtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogJGZuLnJlbSggMXB4ICk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uLmxhc3Q6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLnN1cmUtYnRuLFxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIC5jYW5jbGUtYnRuIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLmNhbmNsZS1idG4ge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIC5zdXJlLWJ0biB7XFxuICBjb2xvcjogIzUxN2JkMTtcXG59XFxuLm1vZGFsLWRpYWxvZy5hbGVydC1kaWFsb2cgZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsLWRpYWxvZy5hbGVydC1kaWFsb2cgZm9vdGVyIC5zdXJlLWJ0biB7XFxuICBmbG9hdDogbm9uZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZGlhbG9nLW1hc2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA4OTk5O1xcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0FRTUFBQUMzL0YzK0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBTlFURlJGQUFBQXAzbzkyZ0FBQUFGMFVrNVRnSzFlVzBZQUFBQUxTVVJCVkFqWFkyREFCd0FBSGdBQmJvVkhNZ0FBQUFCSlJVNUVya0pnZ2c9PSk7XFxufVxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jc3MvYmFzZS5sZXNzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBjcmVhdGVIdG1sRG9tOiAoZnVuY3Rpb24gY3JlYXRlSHRtbCgpe1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbihodG1sKXtcclxuICAgICAgdmFyIHRlbXA7XHJcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0ZW1wID0gZGl2LmNoaWxkcmVuWzBdO1xyXG4gICAgICBkaXYucmVtb3ZlQ2hpbGQodGVtcCk7XHJcbiAgICAgIHJldHVybiB0ZW1wO1xyXG4gICAgfVxyXG4gIH0pKCksXHJcbiAgcmVwbGFjZVRlbWxhdGU6IGZ1bmN0aW9uKHN0cixkYXRhKXtcclxuICAgIHZhciByZWd4ID0gbmV3IFJlZ0V4cCgveyguKj8pfS9nKSxcclxuICAgICAgICB0ZW1wO1xyXG4gICAgd2hpbGUodGVtcCA9IHJlZ3guZXhlYyhzdHIpKXtcclxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UodGVtcFswXSxkYXRhW3RlbXBbMV1dIHx8ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcclxcbl0qL2csJycpO1xyXG4gIH0sXHJcbiAgZm5UZW1wbGF0ZTogZnVuY3Rpb24oc3RyLCBkYXRhKXtcclxuICAgIHZhciByZWd4ID0gbmV3IFJlZ0V4cCgvXFwkZm5cXC4oLis/KVxcKCguKj8pXFwpL2cpO1xyXG5cclxuICAgIHJldHVybiBzdHIucmVwbGFjZShyZWd4LCBmdW5jdGlvbihleHByLCBmbiwgdmFsKXtcclxuICAgICAgcmV0dXJuIGRhdGFbZm5dKHZhbCk7XHJcbiAgICB9KS5yZXBsYWNlKC9bXFxyXFxuXSovZywnJyk7O1xyXG5cclxuICB9LFxyXG4gIGJpbmRFdmVudDogZnVuY3Rpb24oZG9tLG5hbWUsZm4pe1xyXG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXJcclxuICAgICAgPyBkb20uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLGZuLGZhbHNlKVxyXG4gICAgICA6IGRvbS5hdHRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xyXG4gIH0sXHJcbiAgdW5CaW5kRXZlbnQ6IGZ1bmN0aW9uKGRvbSxuYW1lLGZuKXtcclxuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyXHJcbiAgICAgID8gZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSxmbixmYWxzZSlcclxuICAgICAgOiBkb20uZGV0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZuKTtcclxuICB9LFxyXG4gIGdldFVybFBhcmFtOiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiKF58JilcIiArIGtleSArIFwiPShbXiZdKikoJnwkKVwiLCBcImlcIik7XHJcbiAgICAgIHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcclxuICAgICAgaWYgKHIgIT0gbnVsbCkgcmV0dXJuIGRlY29kZVVSSShyWzJdKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfSxcclxuICBhc3NpZ246IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgdGVtcCA9IGFyZ3VtZW50c1swXTtcclxuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG4gICAgZm9yKHZhciBpPTAsbGVuPWFyZ3MubGVuZ3RoO2k8bGVuO2krKyl7XHJcbiAgICAgIHZhciBpdGVtID0gYXJnc1tpXTtcclxuICAgICAgaWYoIWl0ZW0pXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIGZvcih2YXIgcCBpbiBpdGVtKXtcclxuICAgICAgICBpZihpdGVtLmhhc093blByb3BlcnR5KHApKXtcclxuICAgICAgICAgIHRlbXBbcF0gPSBpdGVtW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbiAgfSxcclxuICBjbG9zZXN0OiBmdW5jdGlvbihkb20sY2xzKXtcclxuICAgIHZhciBjbHNSZWd4ID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMrKScrIGNscyArICcoXFxcXHMrfCQpJyksXHJcbiAgICAgICAgdGFnUmVneCA9IG5ldyBSZWdFeHAoJ14nKyBjbHMgKyAnJCcpLFxyXG4gICAgICAgIHBhcmVudCA9IGRvbTtcclxuXHJcbiAgICBpZih0ZXN0KGRvbSkpXHJcbiAgICAgIHJldHVybiBkb207XHJcblxyXG4gICAgd2hpbGUoISEocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpICYmICBwYXJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPSAnaHRtbCcpe1xyXG4gICAgICBpZih0ZXN0KHBhcmVudCkpe1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3QoZG9tKXtcclxuXHJcbiAgICAgIGlmKCEhZG9tLmNsYXNzTmFtZS5tYXRjaChjbHNSZWd4KSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1lbHNlIGlmKHRhZ1JlZ3gudGVzdChkb20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVQYXJhbXM6IGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgIHZhciByZXMgPSB7fTtcclxuXHJcbiAgICBmb3IodmFyIHAgaW4gcGFyYW0pe1xyXG4gICAgICBpZihwYXJhbS5oYXNPd25Qcm9wZXJ0eShwKSl7XHJcbiAgICAgICAgaWYodHlwZW9mIHBhcmFtW3BdICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgIHJlc1twXSA9IHBhcmFtW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kb20uanNcbiAqKi8iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL2RvbS5qcycpO1xyXG5cclxuZnVuY3Rpb24gZ2V0SGVpZ2h0KHNlbCxpc091dGVyKXtcclxuICB2YXIgc2VjdGlvblN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWwpLFxyXG4gICAgICBtYXJnaW5IID0gMDtcclxuXHJcbiAgaWYoaXNPdXRlcil7XHJcbiAgICBtYXJnaW5IID0gc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKS5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgICAgIHNlY3Rpb25TdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykucmVwbGFjZSgncHgnLCcnKSoxXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgICBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgIHNlY3Rpb25TdHlsZS5wYWRkaW5nVG9wLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBzZWN0aW9uU3R5bGUucGFkZGluZ0JvdHRvbS5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmJvcmRlclRvcFdpZHRoLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBzZWN0aW9uU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgIG1hcmdpbkhcclxuICAgICAgICApO1xyXG59XHJcblxyXG52YXIgZWFzZSA9IHtcclxuICBjaXJjdWxhcjoge1xyXG4gICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4xLCAwLjU3LCAwLjEsIDEpJ1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGluaXRUb3VjaDogZnVuY3Rpb24oZGlhbG9nKXtcclxuICAgIHZhciBkbGdDb250ZW50ID0gIGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKSxcclxuICAgICAgICBzZWN0aW9uID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKSxcclxuICAgICAgICBzY3JvbGxUYXJnZVN0eWxlID0gZGxnQ29udGVudC5zdHlsZSxcclxuICAgICAgICB3cmFwcGVySGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsJycpKjEsXHJcbiAgICAgICAgbWF4SGVpZ2h0LCBzdGFydFBvc3gsIHN0YXJ0UG9zeSwgaXNUb3VjaCxcclxuICAgICAgICBzdGFydFRpbWUsIGRpc3RZLCBkaXN0WCxcclxuICAgICAgICBlbmRUaW1lID0gMCwgeCA9MCwgeSA9MCwgc3RhcnRYLCBzdGFydFksIGlzSW5UcmFuc2l0aW9uO1xyXG5cclxuICAgIG1heEhlaWdodCA9IHdyYXBwZXJIZWlnaHQgLSBnZXRIZWlnaHQoZGxnQ29udGVudCx0cnVlKTtcclxuXHJcbiAgICBzY3JvbGxUYXJnZVN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IGVhc2UuY2lyY3VsYXIuc3R5bGU7XHJcblxyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2htb3ZlJyxzdG9wU2Nyb2xsTW92ZSk7XHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nLCd0b3VjaHN0YXJ0JyxzdGFydFRvdWNoKTtcclxuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2csJ3RvdWNoZW5kJyx0b3VjaGVFbmQpO1xyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3RyYW5zaXRpb25lbmQnLF90cmFuc2l0aW9uRW5kKTtcclxuICAgIHV0aWxzLmJpbmRFdmVudChkbGdDb250ZW50LCd3ZWJraXRUcmFuc2l0aW9uRW5kJyxfdHJhbnNpdGlvbkVuZCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGVzdHJveVNjcm9sbDogZnVuY3Rpb24oKXtcclxuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkaWFsb2csJ3RvdWNobW92ZScsc3RvcFNjcm9sbE1vdmUpO1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nLCd0b3VjaGVuZCcsdG91Y2hlRW5kKTtcclxuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkbGdDb250ZW50LCd0cmFuc2l0aW9uZW5kJyxfdHJhbnNpdGlvbkVuZCk7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnQ29udGVudCwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3RyYW5zaXRpb25FbmQpO1xyXG4gICAgICAgIGRsZ0NvbnRlbnQgPSBzZWN0aW9uID0gbnVsbDtcclxuICAgICAgfSxcclxuICAgICAgcmVmcmVzaDogZnVuY3Rpb24oKXtcclxuICAgICAgICB3cmFwcGVySGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsJycpKjE7XHJcbiAgICAgICAgbWF4SGVpZ2h0ID0gd3JhcHBlckhlaWdodCAtIGdldEhlaWdodChkbGdDb250ZW50LHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0VG91Y2goZSl7XHJcbiAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXSxcclxuICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNsb3Nlc3QoZS50YXJnZXQsJ2RpYWxvZy1jb250ZW50JyksXHJcbiAgICAgICAgICBwb3M7XHJcblxyXG4gICAgICBpZighIXRhcmdldCl7XHJcbiAgICAgICAgaWYoaXNJblRyYW5zaXRpb24pe1xyXG4gICAgICAgICAgX3RyYW5zaXRpb25UaW1lKCk7XHJcbiAgICAgICAgICBpc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgcG9zID0gZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgdHJhbnNsYXRlKE1hdGgucm91bmQocG9zLngpLCBNYXRoLnJvdW5kKHBvcy55KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXJ0UG9zeCA9IHRvdWNoLnBhZ2VYO1xyXG4gICAgICAgIHN0YXJ0UG9zeSA9IHRvdWNoLnBhZ2VZO1xyXG4gICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgZGlzdFggPSBkaXN0WSA9IDA7XHJcbiAgICAgICAgc3RhcnRYID0geDtcclxuICAgICAgICBzdGFydFkgPSB5O1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBpc1RvdWNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BTY3JvbGxNb3ZlKGUpe1xyXG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXHJcbiAgICAgICAgICBwb3NYID0gdG91Y2gucGFnZVgsXHJcbiAgICAgICAgICBwb3NZID0gdG91Y2gucGFnZVksXHJcbiAgICAgICAgICBub2RlTmFtZSA9IGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgdmFyIGRlbHRhWSA9IHBvc1kgLSBzdGFydFBvc3ksXHJcbiAgICAgICAgICBkZWx0YVggPSBwb3NYIC0gc3RhcnRQb3N4LFxyXG4gICAgICAgICAgbmV3WTtcclxuXHJcbiAgICAgIHN0YXJ0UG9zeCA9IHBvc1g7XHJcbiAgICAgIHN0YXJ0UG9zeSA9IHBvc1k7XHJcblxyXG4gICAgICBkaXN0WCArPSBkZWx0YVg7XHJcbiAgICAgIGRpc3RZICs9IGRlbHRhWTtcclxuXHJcbiAgICAgIGlmKCBub2RlTmFtZSAhPSAnaW5wdXQnICYmIG5vZGVOYW1lICE9ICdzZWxlY3QnICYmIG5vZGVOYW1lICE9ICd0ZXh0YXJlYScpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICggKHRpbWVzdGFtcCAtIGVuZFRpbWUgPiAzMDAgJiYgTWF0aC5hYnMoZGlzdFkpIDwgMTApIHx8ICFpc1RvdWNoIHx8IG1heEhlaWdodCA+PSAwKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3WSA9IHkgKyBkZWx0YVk7XHJcbiAgICAgIGlmICggbmV3WSA+IDAgfHwgbmV3WSA8IG1heEhlaWdodCApIHtcclxuICAgICAgICBuZXdZID0geSArIGRlbHRhWSAvIDM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyYW5zbGF0ZShkbGdDb250ZW50LG5ld1kpO1xyXG5cclxuICAgICAgaWYgKCB0aW1lc3RhbXAgLSBzdGFydFRpbWUgPiAzMDAgKSB7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZXN0YW1wO1xyXG4gICAgICAgIHN0YXJ0WCA9IHg7XHJcbiAgICAgICAgc3RhcnRZID0geTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG91Y2hlRW5kKGUpe1xyXG4gICAgICB2YXIgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxyXG4gICAgICAgICAgbmV3WSA9IE1hdGgucm91bmQoeSksXHJcbiAgICAgICAgICB0aW1lID0gMCxcclxuICAgICAgICAgIG1vbWVudHVtWTtcclxuXHJcbiAgICAgIHN0YXJ0UG9zeCA9IG51bGw7XHJcbiAgICAgIHN0YXJ0UG9zeSA9IG51bGw7XHJcbiAgICAgIGVuZFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICBpc0luVHJhbnNpdGlvbiA9IDA7XHJcblxyXG4gICAgICBpZiAocmVzZXRQb3NpdGlvbihkbGdDb250ZW50LDUwMCkgfHwgbWF4SGVpZ2h0ID49IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNjcm9sbFRvKGRsZ0NvbnRlbnQsIG5ld1kpO1xyXG5cclxuICAgICAgaWYoZHVyYXRpb24gPCAzMDApe1xyXG4gICAgICAgIG1vbWVudHVtWSA9IG1vbWVudHVtKHksIHN0YXJ0WSwgZHVyYXRpb24pO1xyXG4gICAgICAgIG5ld1kgPSBtb21lbnR1bVkuZGVzdGluYXRpb247XHJcbiAgICAgICAgdGltZSA9IG1vbWVudHVtWS5kdXJhdGlvbjtcclxuICAgICAgICBpc0luVHJhbnNpdGlvbiA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICggbmV3WSAhPSB5ICkge1xyXG4gICAgICAgIHNjcm9sbFRvKGRsZ0NvbnRlbnQsIG5ld1ksdGltZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCxwb3N5LHRpbWUpe1xyXG4gICAgICB0aW1lID0gdGltZSB8fCAwO1xyXG4gICAgICBpc0luVHJhbnNpdGlvbiA9IHRpbWUgPiAwO1xyXG4gICAgICBfdHJhbnNpdGlvblRpbWUodGltZSk7XHJcbiAgICAgIHRyYW5zbGF0ZSh0YXJnZXQscG9zeSlcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSh0YXJnZXQsIHBvc3kpIHtcclxuICAgICAgc2Nyb2xsVGFyZ2VTdHlsZS53ZWJraXRUcmFuc2Zvcm0gID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgcG9zeSArICdweCwwcHgpJztcclxuICAgICAgeSA9IHBvc3k7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNldFBvc2l0aW9uKHRhcmdldCx0aW1lKXtcclxuICAgICAgdmFyIHBvc1kgPSB5O1xyXG5cclxuICAgICAgdGltZSA9IHRpbWUgfHwgMDtcclxuXHJcbiAgICAgIGlmIChwb3NZID49IDAgKSB7XHJcbiAgICAgICAgcG9zWSA9IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9zWSA8IG1heEhlaWdodCApIHtcclxuICAgICAgICBwb3NZID0gbWF4SGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIHBvc1kgPT0geSApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNjcm9sbFRvKHRhcmdldCwgcG9zWSwgdGltZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vbWVudHVtKGN1cnJlbnQsIHN0YXJ0LCB0aW1lKXtcclxuICAgICAgdmFyIGRpc3RhbmNlID0gY3VycmVudCAtIHN0YXJ0LFxyXG4gICAgICAgICAgc3BlZWQgPSBNYXRoLmFicyhkaXN0YW5jZSkgLyB0aW1lLFxyXG4gICAgICAgICAgZGVjZWxlcmF0aW9uID0gMC4wMDA2LFxyXG4gICAgICAgICAgZGVzdGluYXRpb24sXHJcbiAgICAgICAgICBkdXJhdGlvbjtcclxuXHJcbiAgICAgIGRlc3RpbmF0aW9uID0gY3VycmVudCArICggc3BlZWQgKiBzcGVlZCApIC8gKCAyICogZGVjZWxlcmF0aW9uICkgKiAoIGRpc3RhbmNlIDwgMCA/IC0xIDogMSApOyAvLyBzPShhdF4yKS8yXHJcbiAgICAgIGR1cmF0aW9uID0gc3BlZWQgLyBkZWNlbGVyYXRpb247IC8vIHY9YXRcclxuXHJcbiAgICAgIGlmICggZGVzdGluYXRpb24gPCBtYXhIZWlnaHQgKSB7XHJcbiAgICAgICAgZGVzdGluYXRpb24gPSBtYXhIZWlnaHQgLSAoIHdyYXBwZXJIZWlnaHQgLyAyLjUgKiAoIHNwZWVkIC8gOCApICk7XHJcbiAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhkZXN0aW5hdGlvbiAtIGN1cnJlbnQpO1xyXG4gICAgICAgIGR1cmF0aW9uID0gZGlzdGFuY2UgLyBzcGVlZDtcclxuICAgICAgfWVsc2UgaWYoZGVzdGluYXRpb24gPiAwKXtcclxuICAgICAgICBkZXN0aW5hdGlvbiA9IHdyYXBwZXJIZWlnaHQgLyAyLjUgKiAoIHNwZWVkIC8gOCApO1xyXG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoY3VycmVudCkgKyBkZXN0aW5hdGlvbjtcclxuICAgICAgICBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IE1hdGgucm91bmQoZGVzdGluYXRpb24pLFxyXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXB1dGVkUG9zaXRpb24oKSB7XHJcbiAgICAgIHZhciBtYXRyaXggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkbGdDb250ZW50LCBudWxsKSxcclxuICAgICAgICB4LCB5O1xyXG5cclxuICAgICAgbWF0cml4ID0gbWF0cml4LndlYmtpdFRyYW5zZm9ybS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsICcpO1xyXG4gICAgICB4ID0gKyhtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSk7XHJcbiAgICAgIHkgPSArKG1hdHJpeFsxM10gfHwgbWF0cml4WzVdKTtcclxuXHJcbiAgICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfdHJhbnNpdGlvblRpbWUodGltZSl7XHJcbiAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XHJcbiAgICAgIHNjcm9sbFRhcmdlU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdGltZSArICdtcyc7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBfdHJhbnNpdGlvbkVuZCgpe1xyXG4gICAgICBpZighaXNJblRyYW5zaXRpb24pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBfdHJhbnNpdGlvblRpbWUoKTtcclxuICAgICAgaWYoIXJlc2V0UG9zaXRpb24oZGxnQ29udGVudCkpe1xyXG4gICAgICAgIGlzSW5UcmFuc2l0aW9uID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kbGdzY3JvbGwuanNcbiAqKi8iLCJmdW5jdGlvbiBpbml0QmFja1ByZXNzKE1vZGFsRGlhbG9nLCBvcHRpb25zKXtcclxuXHJcbiAgaWYoIW9wdGlvbnMudXNlSGFzaClcclxuICAgIHJldHVybjtcclxuXHJcbiAgbGV0IG5vdGlmeUJhY2twcmVzcyA9IG9wdGlvbnMubm90aWZ5QmFja3ByZXNzO1xyXG4gIGxldCBkaWFsb2dJZExpc3QgPSBbXTtcclxuXHJcbiAgbm90aWZ5QmFja3ByZXNzID0gbm90aWZ5QmFja3ByZXNzKG9wdGlvbnMpO1xyXG5cclxuICBNb2RhbERpYWxvZy5hZnRlckxpc3RlbmVyKGZ1bmN0aW9uKGRpYWxvZyl7XHJcbiAgICBkaWFsb2dJZExpc3QucHVzaChkaWFsb2cuaWQpO1xyXG5cclxuICAgIGRpYWxvZy5saXN0ZW5lckJhY2tQcmVzcyA9IG5vdGlmeUJhY2twcmVzcy5hZGRMaXN0ZW5lcihsaXN0ZW5lckJhY2twcmVzcygpLCAnYWRkJyk7XHJcblxyXG4gICAgZGlhbG9nLm5vdGlmeVByaW9yaXR5ID0gbm90aWZ5QmFja3ByZXNzLmNhbGxiYWNrUHJpb3JpdHk7XHJcbiAgfSk7XHJcblxyXG4gIE1vZGFsRGlhbG9nLmNsb3NlZExpc3RlbmVyKGZ1bmN0aW9uKGRpYWxvZyl7XHJcbiAgICBkaWFsb2dJZExpc3QgPSBkaWFsb2dJZExpc3QuZmlsdGVyKChpZCk9PntcclxuICAgICAgcmV0dXJuIGRpYWxvZy5pZCAhPT0gaWQ7XHJcbiAgICB9KTtcclxuICAgIC8vIG5vdGlmeUJhY2twcmVzcy5yZW1vdmVMaXN0ZW5lcihkaWFsb2cubGlzdGVuZXJCYWNrUHJlc3MpO1xyXG4gICAgZGlhbG9nLmxpc3RlbmVyQmFja1ByZXNzLnVwZGF0ZSgpO1xyXG4gICAgbm90aWZ5QmFja3ByZXNzLmdvQmFjaygpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBsaXN0ZW5lckJhY2twcmVzcygpIHtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgaWYoIWRpYWxvZ0lkTGlzdC5sZW5ndGgpe1xyXG4gICAgICAgIG9wdGlvbnMuYmFja1ByZXNzICYmIG9wdGlvbnMuYmFja1ByZXNzKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkbGdJZCA9IGRpYWxvZ0lkTGlzdC5wb3AoKTtcclxuXHJcbiAgICAgIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbZGxnSWRdLmNsb3NlRGlhbG9nKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaW5pdEJhY2tQcmVzcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wbHVnaW5zL2JhY2tQcmVzczIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9