(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var dialog = __webpack_require__(2);
	var utils = __webpack_require__(5);
	// var notifyBackpress = require('@flyme/utils/src/appStoreClient/notifyBackpress.js');
	var flymeUtils = __webpack_require__(8);
	
	var example = {
	  _events: {},
	  addExample: function addExample(value, id, callback) {
	    this.container.appendChild(utils.createHtmlDom('<li data-id="' + id + '" style="padding:5px;">' + value + '</li>'));
	    this._events[id] = callback;
	    return this;
	  },
	  init: function init() {
	    this.container = utils.createHtmlDom('<ul class="exampleList" style="position:relative;z-index:1;"></ul>');
	
	    document.body.appendChild(this.container);
	
	    utils.bindEvent(this.container, 'click', this.dispatchEvent.bind(this));
	  },
	  dispatchEvent: function dispatchEvent(evt) {
	    var target = evt.target,
	        id = target.getAttribute('data-id');
	
	    if (!!this._events[id]) {
	      this._events[id]();
	    }
	  }
	};
	example.init();
	example.addExample('不带标题-确认框2行', 'confirm2', function () {
	
	  dialog.confirm('打开“携程”客户端，返回本页立即增加3次抽奖机会。 ', null, "", '不了', '立即打开');
	}).addExample('不带标题-确认框3行', 'confirm3', function () {
	
	  dialog.confirm('打开“携程”客户端，返回本页立即增 加3次抽奖机会.返回本页立即增加3次 抽奖机会。 ', null, "", '不了', '立即打开');
	}).addExample('带标题-反馈说明', 'feedback', function () {
	
	  dialog.confirm('每安装一个应用，多增加1次抽奖机会 ', null, "获得1次抽奖机会", '确定', '继续安装');
	}).addExample('不带标题-提示框', 'alert', function () {
	
	  dialog.alert('提交失败，请稍后再试 ');
	}).addExample('带标题-单行提示框', 'tle-alert', function () {
	
	  dialog.alert('话费延时到账可能有说明', '领取成功');
	}).addExample('带标题-两行提示框', 'tle-alert2', function () {
	
	  dialog.alert('话费延时到账可能有说明，话费延时到账可能有说明。', '领取成功');
	}).addExample('带标题-多行提示框', 'tle-alert2', function () {
	
	  dialog.alert('话费延时到账可能有说明，<input type="text"/>话费延时到账可能有说明。话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明\
	    话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明', '领取成功');
	}).addExample('框中框', 'dlgofdlg', function () {
	  var isAlerted = false;
	  dialog.alert('父框内容父框内容父框内容父框内容父框内容父框内容', '父框标题', function () {
	    if (isAlerted) return;
	
	    dialog.alert('子框内容', '');
	
	    isAlerted = true;
	
	    return true;
	  });
	}).addExample('动态增加弹框内容', 'adddlgheight', function () {
	  var isAlerted = false;
	  var dlg = dialog.alert('父框内容父框内容父框内容父框内容父框内容父框内容<button class="addContent">添加内容</button>', '父框标题');
	  var dlgDom = dlg.dialogDom;
	
	  utils.bindEvent(dlgDom.querySelector('.addContent'), 'click', function () {
	    dlgDom.querySelector('.dialog-content').appendChild(utils.createHtmlDom('<div>hello world</div>'));
	    dlg.refresh();
	  });
	}).addExample('提示框->提示框', 'dlg1todlg2', function () {
	  dialog.alert('父框内容父框内容父框内容父框内容父框内容父框内容', '父框标题', function () {
	    dialog.alert('子框内容', '');
	  });
	}).addExample('提示框(不关闭)->提示框', 'dlg1Noclosetodlg2', function () {
	  var first = true;
	  dialog.alert('父框内容父框内容父框内容父框内容父框内容父框内容', '父框标题', function () {
	    dialog.alert('子框内容', '');
	    if (first) {
	      first = false;
	      return true;
	    }
	  });
	}).addExample('动态调整弹框大小-baseFontSize-32', 'adjust-ft-32', function () {
	
	  location.href = 'http://localhost:8099/example/index.html?baseFontSize=32';
	}).addExample('动态调整弹框大小-正常大小-baseFontSize-16', 'adjust-ft-16', function () {
	
	  location.href = 'http://localhost:8099/example/index.html?baseFontSize=16';
	}).addExample('创建没有按钮的弹框', 'no-btn-dialog', function () {
	
	  createNoBtnDialog('详情');
	});
	
	var vc = utils.getUrlParam('vc') * 1,
	    turnTo = utils.getUrlParam('turnTo');
	
	dialog.config({
	  useHash: true,
	  baseFontSize: utils.getUrlParam('baseFontSize') * 1,
	  notifyBackpress: flymeUtils.notifyBackpress(),
	  backPress: function backPress() {
	    EventJavascriptInterface.backPress();
	  } /*,
	    useBackground: false*/
	
	});
	
	if (vc >= 612 && turnTo == 'a') {
	  dialog.alert('进入页面后马上打开弹框');
	}
	window.onWindowChanged = function () {};
	
	function createNoBtnDialog(content, title, callback, dom, cls) {
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
	
	  if (!content.title) clz += ' dlg-no-title';else clz += ' dlg-has-title';
	
	  content.clazz = clz;
	  return dialog(content);
	}

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ModalDialog = __webpack_require__(3);
	// var historyPlugin = require('./plugins/history.js');
	var backPressPlugin = __webpack_require__(7);
	
	ModalDialog.defaultConfig.useHash = true;
	
	// if(window.EventJavascriptInterface && typeof window.EventJavascriptInterface.listenBackPress == 'function')
	ModalDialog.addPlugin(backPressPlugin);
	// else
	//   ModalDialog.addPlugin(historyPlugin);
	
	module.exports = ModalDialog;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseCss = __webpack_require__(4);
	
	var utils = __webpack_require__(5);
	var scrollDlg = __webpack_require__(6);
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = ".rc-modal {\n  position: absolute;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  transition: opacity 0.3s ease-out;\n}\n.rc-modal .modal-dialog {\n  border-radius: $fn.rem( 1px );\n  text-align: center;\n  width: 90%;\n  margin: 0 auto;\n  z-index: 9000;\n  position: fixed;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);\n}\n.modal-dialog.dlg-no-title header {\n  height: $fn.rem( 28px );\n}\n.modal-dialog.dlg-no-title .dialog-content {\n  color: #000;\n}\n.modal-dialog.dlg-no-title section {\n  text-align: left;\n}\n.modal-dialog.dlg-has-title header {\n  padding: 0 0 $fn.rem( 10px ) 0;\n  font-size: $fn.rem( 18px );\n}\n.modal-dialog.alert-dialog section {\n  text-align: center;\n}\n.modal-dialog .modal-dialog-main {\n  position: relative;\n  z-index: 9000;\n  background: #fafafa;\n  font-size: $fn.rem( 16px );\n  border-radius: $fn.rem( 3px );\n  padding-top: $fn.rem( 28px );\n}\n.modal-dialog .dialog-title {\n  color: #000;\n}\n.modal-dialog .dialog-content {\n  color: #323232;\n  line-height: 1.6;\n}\n.modal-dialog em {\n  font-style: normal;\n}\n.modal-dialog section {\n  padding: 0px $fn.rem( 26px );\n  margin: 0 auto;\n  max-height: $fn.rem( 188px );\n  overflow: hidden;\n  position: relative;\n}\n.modal-dialog footer {\n  border-top: solid #d5d5d5;\n  border-top-width: $fn.rem( 1px );\n  height: $fn.rem( 45px );\n  line-height: $fn.rem( 45px );\n  margin-top: $fn.rem( 20px );\n  overflow: hidden;\n}\n.modal-dialog footer button {\n  outline: none;\n  border: 0;\n  padding: 0;\n  background: none;\n  font-size: $fn.rem( 16px );\n  height: $fn.rem( 45px );\n}\n.modal-dialog footer button.modal-dialog-onebtn {\n  width: 100%;\n}\n.modal-dialog footer button:after {\n  content: '';\n  border-right: solid #d5d5d5;\n  border-right-width: $fn.rem( 1px );\n  position: absolute;\n  top: 0px;\n  display: block;\n  height: 100%;\n  right: 0px;\n}\n.modal-dialog footer button.last:after {\n  display: none;\n}\n.modal-dialog footer .sure-btn,\n.modal-dialog footer .cancle-btn {\n  width: 50%;\n  float: left;\n  position: relative;\n}\n.modal-dialog footer .cancle-btn {\n  color: #000000;\n}\n.modal-dialog footer .sure-btn {\n  color: #517bd1;\n}\n.modal-dialog.alert-dialog footer {\n  text-align: center;\n}\n.modal-dialog.alert-dialog footer .sure-btn {\n  float: none;\n  margin: 0 auto;\n}\n.dialog-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 8999;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABGdBTUEAALGPC/xhBQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TgK1eW0YAAAALSURBVAjXY2DABwAAHgABboVHMgAAAABJRU5ErkJggg==);\n}\n"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(5);
	
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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	function initBackPress(ModalDialog, options) {
	
	  if (!options.useHash) return;
	
	  var notifyBackpress = options.notifyBackpress;
	  var dialogIdList = [];
	
	  // notifyBackpress = notifyBackpress(options);
	
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlYmM1ZWU0MGNiZDUwZmNlOGVjZSIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nV2l0aEhhc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RsZ3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2lucy9iYWNrUHJlc3MyLmpzIiwid2VicGFjazovLy8uL2V4dHJhLWxpYi9ub3RpZnlCYWNrcHJlc3MuanMiXSwibmFtZXMiOlsiZGlhbG9nIiwicmVxdWlyZSIsInV0aWxzIiwiZmx5bWVVdGlscyIsImV4YW1wbGUiLCJfZXZlbnRzIiwiYWRkRXhhbXBsZSIsInZhbHVlIiwiaWQiLCJjYWxsYmFjayIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiY3JlYXRlSHRtbERvbSIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiLCJiaW5kRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiYmluZCIsImV2dCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNvbmZpcm0iLCJhbGVydCIsImlzQWxlcnRlZCIsImRsZyIsImRsZ0RvbSIsImRpYWxvZ0RvbSIsInF1ZXJ5U2VsZWN0b3IiLCJyZWZyZXNoIiwiZmlyc3QiLCJsb2NhdGlvbiIsImhyZWYiLCJjcmVhdGVOb0J0bkRpYWxvZyIsInZjIiwiZ2V0VXJsUGFyYW0iLCJ0dXJuVG8iLCJjb25maWciLCJ1c2VIYXNoIiwiYmFzZUZvbnRTaXplIiwibm90aWZ5QmFja3ByZXNzIiwiYmFja1ByZXNzIiwiRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlIiwid2luZG93Iiwib25XaW5kb3dDaGFuZ2VkIiwiY29udGVudCIsInRpdGxlIiwiZG9tIiwiY2xzIiwiY2x6IiwiY2xhenoiLCJjcmVhdGVQYXJhbXMiLCJva0NhbGxiYWNrIiwic2VsZWN0b3IiLCJNb2RhbERpYWxvZyIsImJhY2tQcmVzc1BsdWdpbiIsImRlZmF1bHRDb25maWciLCJhZGRQbHVnaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiYmFzZUNzcyIsInNjcm9sbERsZyIsIl8iLCJhc3NpZ24iLCJ3aW5IIiwid2luVyIsIm5vb3AiLCJpbnNlcnRTdHlsZVRvSGVhZCIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImZuVGVtcGxhdGUiLCJyZW0iLCJweCIsInJlcGxhY2UiLCJleHByIiwidmFsIiwiaGVhZERvbSIsImZpcnN0TGluayIsImluc2VydEJlZm9yZSIsImdldEh0bWxDb250ZW50Iiwib3B0aW9ucyIsInRlbXBsYXRlSHRtbCIsImhlYWRlciIsInB1c2giLCJyZXBsYWNlVGVtbGF0ZSIsImNyZWF0ZUJ1dHRvbnMiLCJjYWxsIiwiam9pbiIsInJlc2l6ZVdpbiIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiYnRucyIsImJ1dHRvbnMiLCJ0ZW1wbGF0ZSIsImJ0blRtcGxzIiwic2VsZiIsIm9uZUJ0bkNseiIsImNhbmNlbENhbGxiYWNrIiwibmFtZSIsImNhbmNlbFN0ciIsImxlbmd0aCIsInN1cmVTdHIiLCJyZXZlcnNlIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImNhbGxiYWNrcyIsImluc2VydENvbnRlbnQiLCJjb21tZW50IiwiY3JlYXRlQ29tbWVudCIsIm9yaURpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJfY29tbWVudERvbSIsImRpc3BsYXkiLCJfb3JpZ2luRGlzcGxheSIsImRlZmF1bHRTZXR0aW5ncyIsImFuaW1hdGVkIiwidXNlQmFja2dyb3VuZCIsImNvbXBsZXRlIiwiYmVmb3JlTGlzdGVuZXJzIiwiYWZ0ZXJMaXN0ZW5lcnMiLCJjbG9zZWRMaXN0ZW5lcnMiLCJfY291bnQiLCJfY2FsbEJhY2tzIiwiT2JqZWN0Iiwia2V5cyIsImxpc3RlbmVyIiwiZGlhbG9nTGlzdCIsImNyZWF0ZSIsIm1vZGFsQ291bnQiLCJkbGdQb3MiLCJkbGdNYWluRG9tIiwib2Zmc2V0SCIsImRvY3VtZW50RWxlbWVudCIsIm9mZnNldEhlaWdodCIsImRsZ1Njcm9sbCIsImluaXRUb3VjaCIsImdldFBvcyIsImxlZnQiLCJ0b3AiLCJjbGFzc05hbWUiLCJ1c2VyYmdyIiwiZGF0YXNldCIsImhlaWdodCIsIl9ldmVudExpc3RlbmVyIiwicHJveHkiLCJfY2xpY2tFdmVudCIsInByb3RvdHlwZSIsImRsZ0giLCJkbGdXIiwib2Zmc2V0V2lkdGgiLCJkbGdQb3NZIiwiZGxnUG9zWCIsImNsb3NlRGlhbG9nIiwiaXNOb3RJbnZva2UiLCJyZW1vdmVEaWFsb2ciLCJ1bkJpbmRFdmVudCIsImRlc3Ryb3lTY3JvbGwiLCJfcmVtb3ZlVHJhbnNpdGlvbiIsIm9wYWNpdHkiLCJyZW1vdmVDaGlsZCIsImUiLCJmbiIsIndyYXBBcmdzIiwiQXJyYXkiLCJzbGljZSIsImFyZ3VtZW50cyIsImFyZ3MiLCJjb25jYXQiLCJhcHBseSIsInN1cmVGbiIsImJ0VGV4dDEiLCJidFRleHQyIiwiY2FuY2VsRm4iLCJhZnRlckxpc3RlbmVyIiwiZmlsdGVyIiwicHJlTGlzdGVuZXIiLCJjbG9zZWRMaXN0ZW5lciIsIl9wbHVnaW5zIiwiaXNDb25maWciLCJjb25zb2xlIiwiaW5mbyIsImkiLCJsZW4iLCJEb21VdGlscyIsImNyZWF0ZUh0bWwiLCJkaXYiLCJodG1sIiwidGVtcCIsImNoaWxkcmVuIiwic3RyIiwiZGF0YSIsInJlZ3giLCJSZWdFeHAiLCJleGVjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50Iiwia2V5IiwicmVnIiwiciIsInNlYXJjaCIsInN1YnN0ciIsIm1hdGNoIiwiZGVjb2RlVVJJIiwicCIsImhhc093blByb3BlcnR5IiwiY2xvc2VzdCIsImNsc1JlZ3giLCJ0YWdSZWd4IiwicGFyZW50IiwidGVzdCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJwYXJhbSIsInJlcyIsImdldEhlaWdodCIsInNlbCIsImlzT3V0ZXIiLCJzZWN0aW9uU3R5bGUiLCJtYXJnaW5IIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiZWFzZSIsImNpcmN1bGFyIiwiZGxnQ29udGVudCIsInNlY3Rpb24iLCJzY3JvbGxUYXJnZVN0eWxlIiwid3JhcHBlckhlaWdodCIsIm1heEhlaWdodCIsInN0YXJ0UG9zeCIsInN0YXJ0UG9zeSIsImlzVG91Y2giLCJzdGFydFRpbWUiLCJkaXN0WSIsImRpc3RYIiwiZW5kVGltZSIsIngiLCJ5Iiwic3RhcnRYIiwic3RhcnRZIiwiaXNJblRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJzdG9wU2Nyb2xsTW92ZSIsInN0YXJ0VG91Y2giLCJ0b3VjaGVFbmQiLCJfdHJhbnNpdGlvbkVuZCIsInRvdWNoIiwidG91Y2hlcyIsInBvcyIsIl90cmFuc2l0aW9uVGltZSIsImdldENvbXB1dGVkUG9zaXRpb24iLCJ0cmFuc2xhdGUiLCJNYXRoIiwicm91bmQiLCJwYWdlWCIsInBhZ2VZIiwiRGF0ZSIsIm5vdyIsInBvc1giLCJwb3NZIiwidGltZXN0YW1wIiwiZGVsdGFZIiwiZGVsdGFYIiwibmV3WSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWJzIiwiZHVyYXRpb24iLCJ0aW1lIiwibW9tZW50dW1ZIiwicmVzZXRQb3NpdGlvbiIsInNjcm9sbFRvIiwibW9tZW50dW0iLCJkZXN0aW5hdGlvbiIsInBvc3kiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJjdXJyZW50Iiwic3RhcnQiLCJkaXN0YW5jZSIsInNwZWVkIiwiZGVjZWxlcmF0aW9uIiwibWF0cml4Iiwic3BsaXQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJpbml0QmFja1ByZXNzIiwiZGlhbG9nSWRMaXN0IiwibGlzdGVuZXJCYWNrUHJlc3MiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyQmFja3ByZXNzIiwibm90aWZ5UHJpb3JpdHkiLCJjYWxsYmFja1ByaW9yaXR5IiwidXBkYXRlIiwiZ29CYWNrIiwiZGxnSWQiLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBSUEsU0FBUyxtQkFBQUMsQ0FBUSxDQUFSLENBQWI7QUFDQSxLQUFJQyxRQUFRLG1CQUFBRCxDQUFRLENBQVIsQ0FBWjtBQUNBO0FBQ0EsS0FBSUUsYUFBYSxtQkFBQUYsQ0FBUSxDQUFSLENBQWpCOztBQUVBLEtBQUlHLFVBQVU7QUFDWkMsWUFBUyxFQURHO0FBRVpDLGFBRlksc0JBRURDLEtBRkMsRUFFS0MsRUFGTCxFQUVRQyxRQUZSLEVBRWlCO0FBQzNCLFVBQUtDLFNBQUwsQ0FBZUMsV0FBZixDQUEyQlQsTUFBTVUsYUFBTixDQUFvQixrQkFBa0JKLEVBQWxCLEdBQXVCLHlCQUF2QixHQUFrREQsS0FBbEQsR0FBMEQsT0FBOUUsQ0FBM0I7QUFDQSxVQUFLRixPQUFMLENBQWFHLEVBQWIsSUFBbUJDLFFBQW5CO0FBQ0EsWUFBTyxJQUFQO0FBQ0QsSUFOVztBQU9aSSxPQVBZLGtCQU9OO0FBQ0osVUFBS0gsU0FBTCxHQUFpQlIsTUFB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QUVBLFFBQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFNOztBQUVOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQSxFQUFDO0FBQ0QsRSIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYmM1ZWU0MGNiZDUwZmNlOGVjZSIsInZhciBkaWFsb2cgPSByZXF1aXJlKCcuLi9kaWFsb2dXaXRoSGFzaC5qcycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vZG9tLmpzJyk7XG4vLyB2YXIgbm90aWZ5QmFja3ByZXNzID0gcmVxdWlyZSgnQGZseW1lL3V0aWxzL3NyYy9hcHBTdG9yZUNsaWVudC9ub3RpZnlCYWNrcHJlc3MuanMnKTtcbnZhciBmbHltZVV0aWxzID0gcmVxdWlyZSgnLi4vLi4vZXh0cmEtbGliL25vdGlmeUJhY2twcmVzcy5qcycpO1xuXG52YXIgZXhhbXBsZSA9IHtcbiAgX2V2ZW50czoge30sXG4gIGFkZEV4YW1wbGUodmFsdWUsaWQsY2FsbGJhY2spe1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUh0bWxEb20oJzxsaSBkYXRhLWlkPVwiJyArIGlkICsgJ1wiIHN0eWxlPVwicGFkZGluZzo1cHg7XCI+JysgdmFsdWUgKyAnPC9saT4nKSk7XG4gICAgdGhpcy5fZXZlbnRzW2lkXSA9IGNhbGxiYWNrO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBpbml0KCl7XG4gICAgdGhpcy5jb250YWluZXIgPSB1dGlscy5jcmVhdGVIdG1sRG9tKCc8dWwgY2xhc3M9XCJleGFtcGxlTGlzdFwiIHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO1wiPjwvdWw+Jyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcblxuICAgIHV0aWxzLmJpbmRFdmVudCh0aGlzLmNvbnRhaW5lciwnY2xpY2snLCB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGRpc3BhdGNoRXZlbnQoZXZ0KXtcbiAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldCxcbiAgICAgICAgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICBpZighIXRoaXMuX2V2ZW50c1tpZF0pe1xuICAgICAgdGhpcy5fZXZlbnRzW2lkXSgpO1xuICAgIH1cbiAgfVxufTtcbmV4YW1wbGUuaW5pdCgpO1xuZXhhbXBsZS5hZGRFeGFtcGxlKCfkuI3luKbmoIfpopgt56Gu6K6k5qGGMuihjCcsJ2NvbmZpcm0yJyxmdW5jdGlvbigpe1xuXG4gIGRpYWxvZy5jb25maXJtKCfmiZPlvIDigJzmkLrnqIvigJ3lrqLmiLfnq6/vvIzov5Tlm57mnKzpobXnq4vljbPlop7liqAz5qyh5oq95aWW5py65Lya44CCICcsbnVsbCxcIlwiLCfkuI3kuoYnLCfnq4vljbPmiZPlvIAnKTtcbn0pLmFkZEV4YW1wbGUoJ+S4jeW4puagh+mimC3noa7orqTmoYYz6KGMJywnY29uZmlybTMnLGZ1bmN0aW9uKCl7XG5cbiAgZGlhbG9nLmNvbmZpcm0oJ+aJk+W8gOKAnOaQuueoi+KAneWuouaIt+err++8jOi/lOWbnuacrOmhteeri+WNs+WiniDliqAz5qyh5oq95aWW5py65LyaLui/lOWbnuacrOmhteeri+WNs+WinuWKoDPmrKEg5oq95aWW5py65Lya44CCICcsbnVsbCxcIlwiLCfkuI3kuoYnLCfnq4vljbPmiZPlvIAnKTtcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3lj43ppojor7TmmI4nLCdmZWVkYmFjaycsZnVuY3Rpb24oKXtcblxuICBkaWFsb2cuY29uZmlybSgn5q+P5a6J6KOF5LiA5Liq5bqU55So77yM5aSa5aKe5YqgMeasoeaKveWlluacuuS8miAnLG51bGwsXCLojrflvpcx5qyh5oq95aWW5py65LyaXCIsJ+ehruWumicsJ+e7p+e7reWuieijhScpO1xufSkuYWRkRXhhbXBsZSgn5LiN5bim5qCH6aKYLeaPkOekuuahhicsJ2FsZXJ0JyxmdW5jdGlvbigpe1xuXG4gIGRpYWxvZy5hbGVydCgn5o+Q5Lqk5aSx6LSl77yM6K+356iN5ZCO5YaN6K+VICcpO1xufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeWNleihjOaPkOekuuahhicsJ3RsZS1hbGVydCcsZnVuY3Rpb24oKXtcblxuICBkaWFsb2cuYWxlcnQoJ+ivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjicsJ+mihuWPluaIkOWKnycpO1xufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeS4pOihjOaPkOekuuahhicsJ3RsZS1hbGVydDInLGZ1bmN0aW9uKCl7XG5cbiAgZGlhbG9nLmFsZXJ0KCfor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7jgIInLCfpooblj5bmiJDlip8nKTtcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3lpJrooYzmj5DnpLrmoYYnLCd0bGUtYWxlcnQyJyxmdW5jdGlvbigpe1xuXG4gIGRpYWxvZy5hbGVydCgn6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yMPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPuivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuOAguivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjlxcXG4gICAg6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piOJywn6aKG5Y+W5oiQ5YqfJyk7XG59KS5hZGRFeGFtcGxlKCfmoYbkuK3moYYnLCdkbGdvZmRsZycsZnVuY3Rpb24oKXtcbiAgdmFyIGlzQWxlcnRlZCA9IGZhbHNlO1xuICBkaWFsb2cuYWxlcnQoJ+eItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuuScsJ+eItuahhuagh+mimCcsZnVuY3Rpb24oKXtcbiAgICBpZihpc0FsZXJ0ZWQpIHJldHVybjtcblxuICAgIGRpYWxvZy5hbGVydCgn5a2Q5qGG5YaF5a65JywnJyk7XG5cbiAgICBpc0FsZXJ0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufSkuYWRkRXhhbXBsZSgn5Yqo5oCB5aKe5Yqg5by55qGG5YaF5a65JywnYWRkZGxnaGVpZ2h0JyxmdW5jdGlvbigpe1xuICB2YXIgaXNBbGVydGVkID0gZmFsc2U7XG4gIHZhciBkbGcgPSBkaWFsb2cuYWxlcnQoJ+eItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuuTxidXR0b24gY2xhc3M9XCJhZGRDb250ZW50XCI+5re75Yqg5YaF5a65PC9idXR0b24+Jywn54i25qGG5qCH6aKYJyk7XG4gIHZhciBkbGdEb20gPSBkbGcuZGlhbG9nRG9tO1xuXG4gIHV0aWxzLmJpbmRFdmVudChkbGdEb20ucXVlcnlTZWxlY3RvcignLmFkZENvbnRlbnQnKSwnY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgZGxnRG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUh0bWxEb20oJzxkaXY+aGVsbG8gd29ybGQ8L2Rpdj4nKSk7XG4gICAgZGxnLnJlZnJlc2goKTtcbiAgfSk7XG59KS5hZGRFeGFtcGxlKCfmj5DnpLrmoYYtPuaPkOekuuahhicsJ2RsZzF0b2RsZzInLGZ1bmN0aW9uKCl7XG4gIGRpYWxvZy5hbGVydCgn54i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a65Jywn54i25qGG5qCH6aKYJyxmdW5jdGlvbigpe1xuICAgIGRpYWxvZy5hbGVydCgn5a2Q5qGG5YaF5a65JywnJyk7XG4gIH0pO1xufSkuYWRkRXhhbXBsZSgn5o+Q56S65qGGKOS4jeWFs+mXrSktPuaPkOekuuahhicsJ2RsZzFOb2Nsb3NldG9kbGcyJyxmdW5jdGlvbigpe1xuICBsZXQgZmlyc3QgPSB0cnVlO1xuICBkaWFsb2cuYWxlcnQoJ+eItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuuScsJ+eItuahhuagh+mimCcsZnVuY3Rpb24oKXtcbiAgICBkaWFsb2cuYWxlcnQoJ+WtkOahhuWGheWuuScsJycpO1xuICAgIGlmKGZpcnN0KXtcbiAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufSkuYWRkRXhhbXBsZSgn5Yqo5oCB6LCD5pW05by55qGG5aSn5bCPLWJhc2VGb250U2l6ZS0zMicsJ2FkanVzdC1mdC0zMicsZnVuY3Rpb24oKXtcblxuICBsb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5OS9leGFtcGxlL2luZGV4Lmh0bWw/YmFzZUZvbnRTaXplPTMyJztcbn0pLmFkZEV4YW1wbGUoJ+WKqOaAgeiwg+aVtOW8ueahhuWkp+Wwjy3mraPluLjlpKflsI8tYmFzZUZvbnRTaXplLTE2JywnYWRqdXN0LWZ0LTE2JyxmdW5jdGlvbigpe1xuXG4gIGxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDk5L2V4YW1wbGUvaW5kZXguaHRtbD9iYXNlRm9udFNpemU9MTYnO1xufSkuYWRkRXhhbXBsZSgn5Yib5bu65rKh5pyJ5oyJ6ZKu55qE5by55qGGJywnbm8tYnRuLWRpYWxvZycsZnVuY3Rpb24oKXtcblxuICBjcmVhdGVOb0J0bkRpYWxvZygn6K+m5oOFJylcbn0pXG5cbmNvbnN0IHZjID0gdXRpbHMuZ2V0VXJsUGFyYW0oJ3ZjJykgKiAxLFxuICAgICAgdHVyblRvID0gdXRpbHMuZ2V0VXJsUGFyYW0oJ3R1cm5UbycpO1xuXG5kaWFsb2cuY29uZmlnKHtcbiAgdXNlSGFzaDp0cnVlLFxuICBiYXNlRm9udFNpemU6IHV0aWxzLmdldFVybFBhcmFtKCdiYXNlRm9udFNpemUnKSoxLFxuICBub3RpZnlCYWNrcHJlc3M6IGZseW1lVXRpbHMubm90aWZ5QmFja3ByZXNzKCksXG4gIGJhY2tQcmVzcygpe1xuICAgIEV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5iYWNrUHJlc3MoKTtcbiAgfS8qLFxuICB1c2VCYWNrZ3JvdW5kOiBmYWxzZSovXG59KTtcblxuaWYodmMgPj0gNjEyICYmIHR1cm5UbyA9PSAnYScpe1xuICBkaWFsb2cuYWxlcnQoJ+i/m+WFpemhtemdouWQjumprOS4iuaJk+W8gOW8ueahhicpO1xufVxud2luZG93Lm9uV2luZG93Q2hhbmdlZCA9IGZ1bmN0aW9uKCl7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9CdG5EaWFsb2coY29udGVudCx0aXRsZSxjYWxsYmFjayxkb20sY2xzKXtcbiAgICB2YXIgY2x6ID0gY29udGVudC5jbGF6eiA/IGNvbnRlbnQuY2xhenogOiAoY2xzID8gY2xzIDogJycpO1xuXG4gICAgY2x6ICs9ICcgYWxlcnQtZGlhbG9nJztcblxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XG4gICAgICBjb250ZW50ID0gdXRpbHMuY3JlYXRlUGFyYW1zKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOmNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IGRvbVxuICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXG4gICAgICBjbHogKz0gJyBkbGctbm8tdGl0bGUnO1xuICAgIGVsc2VcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xuXG4gICAgY29udGVudC5jbGF6eiA9IGNsejtcbiAgICByZXR1cm4gZGlhbG9nKGNvbnRlbnQpO1xuICB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsIlxudmFyIE1vZGFsRGlhbG9nID0gcmVxdWlyZSgnLi9tb2RhbC5qcycpO1xuLy8gdmFyIGhpc3RvcnlQbHVnaW4gPSByZXF1aXJlKCcuL3BsdWdpbnMvaGlzdG9yeS5qcycpO1xudmFyIGJhY2tQcmVzc1BsdWdpbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy9iYWNrUHJlc3MyLmpzJyk7XG5cbk1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcudXNlSGFzaCA9IHRydWU7XG5cbi8vIGlmKHdpbmRvdy5FdmVudEphdmFzY3JpcHRJbnRlcmZhY2UgJiYgdHlwZW9mIHdpbmRvdy5FdmVudEphdmFzY3JpcHRJbnRlcmZhY2UubGlzdGVuQmFja1ByZXNzID09ICdmdW5jdGlvbicpXG4gIE1vZGFsRGlhbG9nLmFkZFBsdWdpbihiYWNrUHJlc3NQbHVnaW4pO1xuLy8gZWxzZVxuLy8gICBNb2RhbERpYWxvZy5hZGRQbHVnaW4oaGlzdG9yeVBsdWdpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kYWxEaWFsb2c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWxvZ1dpdGhIYXNoLmpzIiwidmFyIGJhc2VDc3MgPSByZXF1aXJlKCcuL2Nzcy9iYXNlLmxlc3MnKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi9kb20uanMnKTtcbnZhciBzY3JvbGxEbGcgPSByZXF1aXJlKCcuL2RsZ3Njcm9sbC5qcycpO1xudmFyIF8gPSB7XG4gIGFzc2lnbjogdXRpbHMuYXNzaWduXG59LCB3aW5ILCB3aW5XO1xuXG5mdW5jdGlvbiBub29wKCl7fVxuXG4vL+WKqOaAgeaPkuWFpWNzc+agt+W8j1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVUb0hlYWQoYmFzZUZvbnRTaXplKXtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBzdHlsZS5pbm5lckhUTUwgPSB1dGlscy5mblRlbXBsYXRlKFxuICAgIGJhc2VDc3MsXG4gICAge1xuICAgICAgcmVtOiBmdW5jdGlvbihweCl7XG4gICAgICAgIHJldHVybiBweC5yZXBsYWNlKC8oXFxkKylweC8sZnVuY3Rpb24oZXhwciwgdmFsKXtcbiAgICAgICAgICByZXR1cm4gKHZhbCAqMSAvIGJhc2VGb250U2l6ZSkgKyAncmVtJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIHZhciBoZWFkRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICB2YXIgZmlyc3RMaW5rID0gaGVhZERvbS5xdWVyeVNlbGVjdG9yKCdsaW5rJyk7XG5cbiAgaWYoIWZpcnN0TGluaylcbiAgICBoZWFkRG9tLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgZWxzZVxuICAgIGhlYWREb20uaW5zZXJ0QmVmb3JlKHN0eWxlLCBmaXJzdExpbmspO1xuXG59XG5cbi8qXG7nlJ/miJDlr7nor53moYbmqKHmnb/lhoXlrrlcbiAqL1xuICBmdW5jdGlvbiBnZXRIdG1sQ29udGVudChvcHRpb25zKXtcbiAgICB2YXIgdGVtcGxhdGVIdG1sID0gW10sXG4gICAgICAgIGhlYWRlciA9IG9wdGlvbnMuaGVhZGVyO1xuXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxkaXYgY2xhc3M9XCJyYy1tb2RhbFwiPjxkaXYgY2xhc3M9XCJkaWFsb2ctbWFza1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgJyArIG9wdGlvbnMuY2xhenogKyAnXCI+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZy1tYWluXCI+Jyk7XG4gICAgaWYob3B0aW9ucy50aXRsZSAhPSBudWxsICYmIG9wdGlvbnMudGl0bGUgIT0gJycpe1xuICAgICAgdGVtcGxhdGVIdG1sLnB1c2goJzxoZWFkZXI+JyArIHV0aWxzLnJlcGxhY2VUZW1sYXRlKGhlYWRlcixvcHRpb25zKSArICc8L2hlYWRlcj4nKTtcbiAgICB9XG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxzZWN0aW9uPjxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiPjwvZGl2Pjwvc2VjdGlvbj48Zm9vdGVyPicpO1xuICAgIHRlbXBsYXRlSHRtbC5wdXNoKGNyZWF0ZUJ1dHRvbnMuY2FsbCh0aGlzLG9wdGlvbnMpKTtcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICByZXR1cm4gdGVtcGxhdGVIdG1sLmpvaW4oJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzaXplV2luKCl7XG4gICAgd2luSCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICAgIHdpblcgPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgfVxuICAvLyB1dGlscy5iaW5kRXZlbnQod2luZG93LCdyZXNpemUnLHJlc2l6ZVdpbik7XG4vL1RPRE86XG4gIC8vIHJlc2l6ZVdpbigpO1xuICAvKlxuICDliJvlu7rlupXpg6jmjInpkq5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnMob3B0aW9ucyl7XG4gICAgdmFyIGJ0bnMgPSBvcHRpb25zLmJ1dHRvbnMgfHwgW10sXG4gICAgICAgIHRlbXBsYXRlID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie2Nsc31cIiBkYXRhLWlkPVwie2lkfVwiID57bmFtZX08L2J1dHRvbj4nLFxuICAgICAgICBidG5UbXBscyA9ICcnLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgb25lQnRuQ2x6PScnO1xuXG4gICAgaWYob3B0aW9ucy5jYW5jZWxDYWxsYmFjayl7XG4gICAgICBidG5zLnB1c2goe1xuICAgICAgICBpZDogJ2NhbmNlbCcsXG4gICAgICAgIG5hbWU6IG9wdGlvbnMuY2FuY2VsU3RyLFxuICAgICAgICBjYWxsYmFjazogb3B0aW9ucy5jYW5jZWxDYWxsYmFjayxcbiAgICAgICAgY2xzOiBcImNhbmNsZS1idG5cIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoYnRucy5sZW5ndGggPT0wKVxuICAgICAgb25lQnRuQ2x6ID0gJyBtb2RhbC1kaWFsb2ctb25lYnRuJztcblxuICAgIGlmKG9wdGlvbnMub2tDYWxsYmFjayl7XG4gICAgICBidG5zLnB1c2goe1xuICAgICAgICBpZDogJ29rJyxcbiAgICAgICAgbmFtZTogb3B0aW9ucy5zdXJlU3RyLFxuICAgICAgICBjYWxsYmFjazogb3B0aW9ucy5va0NhbGxiYWNrLFxuICAgICAgICBjbHM6IFwic3VyZS1idG5cIiArIG9uZUJ0bkNselxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKVxuICAgICAgYnRucyA9IGJ0bnMucmV2ZXJzZSgpO1xuXG4gICAgYnRucy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0saW5kZXgpe1xuICAgICAgaWYoKGJ0bnMubGVuZ3RoIC0gMSkgPT0gaW5kZXgpXG4gICAgICAgIGl0ZW0uY2xzICs9ICcgbGFzdCc7XG4gICAgICBidG5UbXBscyArPSB1dGlscy5yZXBsYWNlVGVtbGF0ZSh0ZW1wbGF0ZSxpdGVtKTtcbiAgICAgIHNlbGYuY2FsbGJhY2tzW2l0ZW0uaWRdID0gaXRlbS5jYWxsYmFjaztcbiAgICB9KTtcblxuICAgIHJldHVybiBidG5UbXBscztcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydENvbnRlbnQoZG9tLG9wdGlvbnMpe1xuICAgICAgaWYob3B0aW9ucy5zZWxlY3Rvcil7XG4gICAgICAgIHZhciBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcImRpYWxvZy10YXJnZXQgcmVwbGFjZVwiKSxcbiAgICAgICAgICAgIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcixcbiAgICAgICAgICAgIG9yaURpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHNlbGVjdG9yKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgaWYoc2VsZWN0b3IucGFyZW50Tm9kZSl7XG4gICAgICAgICAgc2VsZWN0b3IucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWVudCxzZWxlY3Rvcik7XG4gICAgICAgICAgZG9tLl9jb21tZW50RG9tID0gY29tbWVudDtcbiAgICAgICAgICBpZihvcmlEaXNwbGF5ID09ICdub25lJyl7XG4gICAgICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZG9tLl9vcmlnaW5EaXNwbGF5ID0gb3JpRGlzcGxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5pbm5lckhUTUwgPSBvcHRpb25zLmNvbnRlbnQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJzxici8+Jyk7XG4gICAgfVxuLyoqXG4gKiBbTW9kYWxEaWFsb2cgZGVzY3JpcHRpb25dXG4gKiBjbGF6ejog5by55Ye65qGG55qEY3Nz57G75ZCNXG4gKiBjYW5jZWxTdHIg5Y+W5raI5oyJ6ZKu55qE5oyJ6ZKu5ZCNXG4gKiBzdXJlU3RyIOehruWumuaMiemSrueahOaMiemSruWQjVxuICogdGl0bGUg5by55Ye65qGG55qE5qCH6aKYXG4gKiBoZWFkZXIg6KGo56S65aS06YOo55qEaHRtbOaooeadv1xuICogb2tDYWxsYmFjayDnoa7lrprmjInpkq7lm57osIPlh73mlbBcbiAqIGNhbmNlbENhbGxiYWNrIOWPlua2iOaMiemSruWbnuiwg+WHveaVsFxuICogYnV0dG9ucyBbe2Nsczonc3VyZScsY2FsbGJhY2s6Zm4sbmFtZTonbmFtZSd9XVxuICogdXNlQmFja2dyb3VuZCDljZXlh7vog4zmma/ml7bmiafooYznmoTlm57osIPlh73mlbBcbiAqL1xuICB2YXIgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgICAgICBjbGF6ejogJ2RpYWxvZy10aGVtZScsXG4gICAgICAgIGNhbmNlbFN0cjogJ+WPlua2iCcsXG4gICAgICAgIHN1cmVTdHI6ICfnoa7lrponLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj57dGl0bGV9PC9zcGFuPicsXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgYnV0dG9uczogbnVsbCxcbiAgICAgICAgdXNlQmFja2dyb3VuZDogJ2NhbmNlbCcsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGJlZm9yZUxpc3RlbmVycyA9IFtdLFxuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBbXSxcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IFtdLFxuICAgICAgX2NvdW50ID0gMDtcblxuICB2YXIgTW9kYWxEaWFsb2cgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICB2YXIgZGlhbG9nLFxuICAgICAgICBpZDtcblxuICAgIG9wdGlvbnMgPSBfLmFzc2lnbih7fSxkZWZhdWx0U2V0dGluZ3Msb3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLl9jYWxsQmFja3MgPSBvcHRpb25zLl9jYWxsQmFja3MgfHwge307XG4gICAgaWQgPSBvcHRpb25zLmlkID0gb3B0aW9ucy5pZCB8fCBfY291bnQ7XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMuX2NhbGxCYWNrc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBiZWZvcmVMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgICBsaXN0ZW5lcihvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbaWRdID0gZGlhbG9nID0gbmV3IE1vZGFsRGlhbG9nLmNyZWF0ZShvcHRpb25zKTtcblxuICAgIE1vZGFsRGlhbG9nLm1vZGFsQ291bnQgKys7XG5cbiAgICBhZnRlckxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICAgIGxpc3RlbmVyKGRpYWxvZyk7XG4gICAgfSk7XG5cbiAgICBfY291bnQgKys7XG5cbiAgICByZXR1cm4gZGlhbG9nO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIHZhciBkaWFsb2dEb20sXG4gICAgICAgIGRsZ1BvcyxcbiAgICAgICAgZGxnTWFpbkRvbSxcbiAgICAgICAgb2Zmc2V0SDtcblxuICAgIHRoaXMuY2FsbGJhY2tzID0gb3B0aW9ucy5fY2FsbEJhY2tzO1xuICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuXG4gICAgZGlhbG9nRG9tID0gdXRpbHMuY3JlYXRlSHRtbERvbShnZXRIdG1sQ29udGVudC5jYWxsKHRoaXMsb3B0aW9ucykpO1xuXG4gICAgaW5zZXJ0Q29udGVudChkaWFsb2dEb20sb3B0aW9ucyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dEb20pO1xuXG4gICAgb2Zmc2V0SCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLmRsZ1Njcm9sbCA9IHNjcm9sbERsZy5pbml0VG91Y2goZGlhbG9nRG9tKTtcblxuICAgIGRsZ01haW5Eb20gPSBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZycpO1xuICAgIGRsZ1BvcyA9IHRoaXMuZ2V0UG9zKGRsZ01haW5Eb20pO1xuXG4gICAgXy5hc3NpZ24oZGxnTWFpbkRvbS5zdHlsZSx7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxuICAgICAgdG9wOiBkbGdQb3MudG9wICsgJ3B4J1xuICAgIH0pO1xuXG4gICAgaWYob3B0aW9ucy5hbmltYXRlZClcbiAgICAgIGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLW1haW4nKS5jbGFzc05hbWUgKz0gJyBkbGctYW5pbWF0aW9uJztcblxuICAgIGlmKG9wdGlvbnMudXNlQmFja2dyb3VuZCl7XG4gICAgICB2YXIgdXNlcmJnciA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcbiAgICAgIGlmKCFvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0pe1xuICAgICAgICBvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0gPSBmdW5jdGlvbigpe307XG4gICAgICB9XG4gICAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuZGF0YXNldC5pZCA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuc3R5bGUuaGVpZ2h0ID0gb2Zmc2V0SCArICdweCc7XG5cbiAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gdGhpcy5wcm94eSh0aGlzLl9jbGlja0V2ZW50LGRpYWxvZ0RvbSxvcHRpb25zKTtcbiAgICB0aGlzLmRpYWxvZ0RvbSA9IGRpYWxvZ0RvbTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2dEb20sJ2NsaWNrJyx0aGlzLl9ldmVudExpc3RlbmVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBfLmFzc2lnbihNb2RhbERpYWxvZy5jcmVhdGUucHJvdG90eXBlLHtcbiAgICBjYWxsYmFja3M6IG51bGwsXG4gICAgZ2V0UG9zOiBmdW5jdGlvbihkaWFsb2dEb20pe1xuICAgICAgZGlhbG9nRG9tID0gZGlhbG9nRG9tIHx8IHRoaXMuZGlhbG9nRG9tO1xuICAgICAgaWYoIWRpYWxvZ0RvbSl7XG4gICAgICAgIHJldHVybiB7bGVmdDowLHRvcDowfTtcbiAgICAgIH1cbiAgICAgIHJlc2l6ZVdpbigpO1xuICAgICAgdmFyIGRsZ0ggPSBkaWFsb2dEb20ub2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIGRsZ1cgPSBkaWFsb2dEb20ub2Zmc2V0V2lkdGg7XG4gICAgICB2YXIgZGxnUG9zWSA9ICh3aW5IIC0gZGxnSCA+PSAwICkgPyAod2luSCAtIGRsZ0gpLzIgOiB3aW5IKjAuMTtcbiAgICAgIHZhciBkbGdQb3NYID0gKHdpblcgLSBkbGdXID49IDAgKSA/ICh3aW5XIC0gZGxnVykvMiA6IHdpblcqMC4xO1xuXG4gICAgICByZXR1cm4ge2xlZnQ6IGRsZ1Bvc1gsIHRvcDogZGxnUG9zWX07XG4gICAgfSxcbiAgICBjbG9zZURpYWxvZzpmdW5jdGlvbihpc05vdEludm9rZSl7XG4gICAgICB2YXIgZGlhbG9nRG9tID0gdGhpcy5kaWFsb2dEb20sXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICBfY29tbWVudERvbSxcbiAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgaWYoIWRpYWxvZ0RvbSlcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICAgIHRoaXMucmVtb3ZlRGlhbG9nKGRpYWxvZ0RvbSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmKG9wdGlvbnMuc2VsZWN0b3IgJiYgZGlhbG9nRG9tLl9jb21tZW50RG9tKXtcbiAgICAgICAgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yO1xuICAgICAgICBfY29tbWVudERvbSA9IGRpYWxvZ0RvbS5fY29tbWVudERvbTtcblxuICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gZGlhbG9nRG9tLl9vcmlnaW5EaXNwbGF5O1xuICAgICAgICBfY29tbWVudERvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzZWxlY3RvcixfY29tbWVudERvbSk7XG5cbiAgICAgICAgZGlhbG9nRG9tLl9jb21tZW50RG9tID0gbnVsbDtcbiAgICAgICAgZGlhbG9nRG9tLl9vcmlnaW5EaXNwbGF5ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZ0RvbSwnY2xpY2snLHRoaXMuX2V2ZW50TGlzdGVuZXIpO1xuICAgICAgLy8gZGlhbG9nRG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGlhbG9nRG9tKTtcbiAgICAgIHRoaXMuZGxnU2Nyb2xsLmRlc3Ryb3lTY3JvbGwgJiYgdGhpcy5kbGdTY3JvbGwuZGVzdHJveVNjcm9sbCgpO1xuXG4gICAgICBpZighaXNOb3RJbnZva2Upe1xuICAgICAgICBjbG9zZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgICAgICAgbGlzdGVuZXIoc2VsZik7XG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2spXG4gICAgICAgICAgb3B0aW9ucy5jYW5jZWxDYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gbnVsbDtcbiAgICAgIHRoaXMuZGlhbG9nRG9tID0gZGlhbG9nRG9tID0gbnVsbDtcblxuICAgICAgb3B0aW9ucy5jb21wbGV0ZSAmJiBvcHRpb25zLmNvbXBsZXRlKCk7XG5cbiAgICAgIGRlbGV0ZSBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W3RoaXMuaWRdO1xuXG4gICAgICBNb2RhbERpYWxvZy5tb2RhbENvdW50IC0tO1xuICAgIH0sXG4gICAgcmVtb3ZlRGlhbG9nOiBmdW5jdGlvbihkbGdEb20pe1xuICAgICAgdXRpbHMuYmluZEV2ZW50KGRsZ0RvbSwgJ3RyYW5zaXRpb25lbmQnLCBfcmVtb3ZlVHJhbnNpdGlvbilcbiAgICAgIHV0aWxzLmJpbmRFdmVudChkbGdEb20sJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBfcmVtb3ZlVHJhbnNpdGlvbik7XG5cbiAgICAgIGRsZ0RvbS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgICAgZnVuY3Rpb24gX3JlbW92ZVRyYW5zaXRpb24oKXtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnRG9tLCd0cmFuc2l0aW9uZW5kJyxfcmVtb3ZlVHJhbnNpdGlvbik7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0RvbSwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3JlbW92ZVRyYW5zaXRpb24pO1xuICAgICAgICBkbGdEb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkbGdEb20pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVmcmVzaDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBkaWFsb2dEb20gPSB0aGlzLmRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nJyksXG4gICAgICAgICAgZGxnUG9zID0gdGhpcy5nZXRQb3MoZGlhbG9nRG9tKTtcblxuICAgICAgXy5hc3NpZ24oZGlhbG9nRG9tLnN0eWxlLHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxuICAgICAgICB0b3A6IGRsZ1Bvcy50b3AgKyAncHgnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGxnU2Nyb2xsLnJlZnJlc2goKTtcbiAgICB9LFxuICAgIF9jbGlja0V2ZW50OiBmdW5jdGlvbihlLGRpYWxvZ0RvbSxvcHRpb25zKXtcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgICBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgaWYodHlwZW9mIHRoaXMuY2FsbGJhY2tzW2lkXSA9PSAnZnVuY3Rpb24nICYmICF0aGlzLmNhbGxiYWNrc1tpZF0uY2FsbCh0aGlzLGUpKXtcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHNlbGYuY2xvc2VEaWFsb2coKTtcbiAgICAgICAgLy8gfSwxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3h5OiBmdW5jdGlvbihmbil7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgd3JhcEFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYod3JhcEFyZ3MubGVuZ3RoID4gMClcbiAgICAgICAgICBhcmdzID0gYXJncy5jb25jYXQod3JhcEFyZ3MpO1xuXG4gICAgICAgIGZuLmFwcGx5KHNlbGYsYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBNb2RhbERpYWxvZy5hbGVydCA9IGZ1bmN0aW9uKGNvbnRlbnQsdGl0bGUsY2FsbGJhY2ssZG9tLGNscyl7XG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcblxuICAgIGNseiArPSAnIGFsZXJ0LWRpYWxvZyc7XG5cbiAgICBpZih0eXBlb2YgY29udGVudCAhPT0gJ29iamVjdCcpe1xuICAgICAgY29udGVudCA9IHV0aWxzLmNyZWF0ZVBhcmFtcyh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgb2tDYWxsYmFjazpjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBkb21cbiAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnRlbnQub2tDYWxsYmFjayA9IGNvbnRlbnQub2tDYWxsYmFjayB8fCBub29wO1xuXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXG4gICAgICBjbHogKz0gJyBkbGctbm8tdGl0bGUnO1xuICAgIGVsc2VcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xuXG4gICAgY29udGVudC5jbGF6eiA9IGNsejtcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coY29udGVudCk7XG4gIH1cblxuICBNb2RhbERpYWxvZy5jb25maXJtID0gZnVuY3Rpb24oY29udGVudCxzdXJlRm4sdGl0bGUsYnRUZXh0MSxidFRleHQyLGNhbmNlbEZuLGNscyl7XG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcblxuICAgIGNseiArPSAnIGNvbmZpcm0tZGlhbG9nJztcblxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XG4gICAgICBjb250ZW50ID0gdXRpbHMuY3JlYXRlUGFyYW1zKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOnN1cmVGbixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGxiYWNrOmNhbmNlbEZuLFxuICAgICAgICAgICAgICAgICAgc3VyZVN0cjogYnRUZXh0MixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFN0cjpidFRleHQxXG4gICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZighY29udGVudC50aXRsZSlcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XG4gICAgZWxzZVxuICAgICAgY2x6ICs9ICcgZGxnLWhhcy10aXRsZSc7XG5cbiAgICBjb250ZW50Lm9rQ2FsbGJhY2sgPSBjb250ZW50Lm9rQ2FsbGJhY2sgfHwgbm9vcDtcbiAgICBjb250ZW50LmNhbmNlbENhbGxiYWNrID0gY29udGVudC5jYW5jZWxDYWxsYmFjayB8fCBub29wO1xuICAgIGNvbnRlbnQuY2xhenogPSBjbHo7XG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nKGNvbnRlbnQpO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgYWZ0ZXJMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIGFmdGVyTGlzdGVuZXJzID0gYWZ0ZXJMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIE1vZGFsRGlhbG9nLnByZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xuICAgIGJlZm9yZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgYmVmb3JlTGlzdGVuZXJzID0gYmVmb3JlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICBNb2RhbERpYWxvZy5jbG9zZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICBjbG9zZWRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IGNsb3NlZExpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgIHJldHVybiBpdGVtICE9IGxpc3RlbmVyO1xuICAgICAgfSlcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9wbHVnaW5zID0gW107XG5cbiAgTW9kYWxEaWFsb2cuYWRkUGx1Z2luID0gZnVuY3Rpb24oZm4pe1xuICAgIF9wbHVnaW5zLnB1c2goZm4pO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcgPSB7fTtcbiAgdmFyIGlzQ29uZmlnID0gZmFsc2U7XG5cbiAgTW9kYWxEaWFsb2cuY29uZmlnID0gZnVuY3Rpb24oY29uZmlnKXtcbiAgICB2YXIgb3B0aW9ucyA9IHV0aWxzLmFzc2lnbih7fSxNb2RhbERpYWxvZy5kZWZhdWx0Q29uZmlnLGNvbmZpZyk7XG5cbiAgICBNb2RhbERpYWxvZy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBpZihpc0NvbmZpZyl7XG4gICAgICBjb25zb2xlLmluZm8oJ21vZGFsZGlhbGcgb25seSBjYW4gY29uZmlnIG9uY2UnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IodmFyIGk9MCwgbGVuPV9wbHVnaW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIF9wbHVnaW5zW2ldKE1vZGFsRGlhbG9nLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpbnNlcnRTdHlsZVRvSGVhZChvcHRpb25zLmJhc2VGb250U2l6ZSB8fCAxNik7XG5cbiAgICBpc0NvbmZpZyA9IHRydWU7XG4gIH1cblxuICB1dGlscy5iaW5kRXZlbnQod2luZG93LCBcIm9yaWVudGF0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXtcbiAgICBPYmplY3Qua2V5cyhNb2RhbERpYWxvZy5kaWFsb2dMaXN0KS5mb3JFYWNoKGRpYWxvZz0+e1xuICAgICAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdFtkaWFsb2ddLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdCA9IHt9O1xuICBNb2RhbERpYWxvZy5tb2RhbENvdW50ID0gMDtcblxuTW9kYWxEaWFsb2cuRG9tVXRpbHMgPSB1dGlscztcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbERpYWxvZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIucmMtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xcbn1cXG4ucmMtbW9kYWwgLm1vZGFsLWRpYWxvZyB7XFxuICBib3JkZXItcmFkaXVzOiAkZm4ucmVtKCAxcHggKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHotaW5kZXg6IDkwMDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1uby10aXRsZSBoZWFkZXIge1xcbiAgaGVpZ2h0OiAkZm4ucmVtKCAyOHB4ICk7XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLW5vLXRpdGxlIC5kaWFsb2ctY29udGVudCB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLm1vZGFsLWRpYWxvZy5kbGctbm8tdGl0bGUgc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1oYXMtdGl0bGUgaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDAgMCAkZm4ucmVtKCAxMHB4ICkgMDtcXG4gIGZvbnQtc2l6ZTogJGZuLnJlbSggMThweCApO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBzZWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZGlhbG9nLW1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogOTAwMDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBmb250LXNpemU6ICRmbi5yZW0oIDE2cHggKTtcXG4gIGJvcmRlci1yYWRpdXM6ICRmbi5yZW0oIDNweCApO1xcbiAgcGFkZGluZy10b3A6ICRmbi5yZW0oIDI4cHggKTtcXG59XFxuLm1vZGFsLWRpYWxvZyAuZGlhbG9nLXRpdGxlIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5kaWFsb2ctY29udGVudCB7XFxuICBjb2xvcjogIzMyMzIzMjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcbi5tb2RhbC1kaWFsb2cgZW0ge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4ubW9kYWwtZGlhbG9nIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogMHB4ICRmbi5yZW0oIDI2cHggKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LWhlaWdodDogJGZuLnJlbSggMTg4cHggKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IHNvbGlkICNkNWQ1ZDU7XFxuICBib3JkZXItdG9wLXdpZHRoOiAkZm4ucmVtKCAxcHggKTtcXG4gIGhlaWdodDogJGZuLnJlbSggNDVweCApO1xcbiAgbGluZS1oZWlnaHQ6ICRmbi5yZW0oIDQ1cHggKTtcXG4gIG1hcmdpbi10b3A6ICRmbi5yZW0oIDIwcHggKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIGJ1dHRvbiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6ICRmbi5yZW0oIDE2cHggKTtcXG4gIGhlaWdodDogJGZuLnJlbSggNDVweCApO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b24ubW9kYWwtZGlhbG9nLW9uZWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjZDVkNWQ1O1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAkZm4ucmVtKCAxcHggKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogMHB4O1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b24ubGFzdDphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuc3VyZS1idG4sXFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLmNhbmNsZS1idG4ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuY2FuY2xlLWJ0biB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLnN1cmUtYnRuIHtcXG4gIGNvbG9yOiAjNTE3YmQxO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBmb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBmb290ZXIgLnN1cmUtYnRuIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5kaWFsb2ctbWFzayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDg5OTk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQVFNQUFBQzMvRjMrQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFOUVRGUkZBQUFBcDNvOTJnQUFBQUYwVWs1VGdLMWVXMFlBQUFBTFNVUkJWQWpYWTJEQUJ3QUFIZ0FCYm9WSE1nQUFBQUJKUlU1RXJrSmdnZz09KTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvYmFzZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVIdG1sRG9tOiAoZnVuY3Rpb24gY3JlYXRlSHRtbCgpe1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHJldHVybiBmdW5jdGlvbihodG1sKXtcbiAgICAgIHZhciB0ZW1wO1xuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICB0ZW1wID0gZGl2LmNoaWxkcmVuWzBdO1xuICAgICAgZGl2LnJlbW92ZUNoaWxkKHRlbXApO1xuICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuICB9KSgpLFxuICByZXBsYWNlVGVtbGF0ZTogZnVuY3Rpb24oc3RyLGRhdGEpe1xuICAgIHZhciByZWd4ID0gbmV3IFJlZ0V4cCgveyguKj8pfS9nKSxcbiAgICAgICAgdGVtcDtcbiAgICB3aGlsZSh0ZW1wID0gcmVneC5leGVjKHN0cikpe1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UodGVtcFswXSxkYXRhW3RlbXBbMV1dIHx8ICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFxyXFxuXSovZywnJyk7XG4gIH0sXG4gIGZuVGVtcGxhdGU6IGZ1bmN0aW9uKHN0ciwgZGF0YSl7XG4gICAgdmFyIHJlZ3ggPSBuZXcgUmVnRXhwKC9cXCRmblxcLiguKz8pXFwoKC4qPylcXCkvZyk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocmVneCwgZnVuY3Rpb24oZXhwciwgZm4sIHZhbCl7XG4gICAgICByZXR1cm4gZGF0YVtmbl0odmFsKTtcbiAgICB9KS5yZXBsYWNlKC9bXFxyXFxuXSovZywnJyk7O1xuXG4gIH0sXG4gIGJpbmRFdmVudDogZnVuY3Rpb24oZG9tLG5hbWUsZm4pe1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyXG4gICAgICA/IGRvbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsZm4sZmFsc2UpXG4gICAgICA6IGRvbS5hdHRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xuICB9LFxuICB1bkJpbmRFdmVudDogZnVuY3Rpb24oZG9tLG5hbWUsZm4pe1xuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICA/IGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsZm4sZmFsc2UpXG4gICAgICA6IGRvbS5kZXRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xuICB9LFxuICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwmKVwiICsga2V5ICsgXCI9KFteJl0qKSgmfCQpXCIsIFwiaVwiKTtcbiAgICAgIHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyICE9IG51bGwpIHJldHVybiBkZWNvZGVVUkkoclsyXSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgYXNzaWduOiBmdW5jdGlvbigpe1xuICAgIHZhciB0ZW1wID0gYXJndW1lbnRzWzBdO1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGZvcih2YXIgaT0wLGxlbj1hcmdzLmxlbmd0aDtpPGxlbjtpKyspe1xuICAgICAgdmFyIGl0ZW0gPSBhcmdzW2ldO1xuICAgICAgaWYoIWl0ZW0pXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgZm9yKHZhciBwIGluIGl0ZW0pe1xuICAgICAgICBpZihpdGVtLmhhc093blByb3BlcnR5KHApKXtcbiAgICAgICAgICB0ZW1wW3BdID0gaXRlbVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGVtcDtcbiAgfSxcbiAgY2xvc2VzdDogZnVuY3Rpb24oZG9tLGNscyl7XG4gICAgdmFyIGNsc1JlZ3ggPSBuZXcgUmVnRXhwKCcoXnxcXFxccyspJysgY2xzICsgJyhcXFxccyt8JCknKSxcbiAgICAgICAgdGFnUmVneCA9IG5ldyBSZWdFeHAoJ14nKyBjbHMgKyAnJCcpLFxuICAgICAgICBwYXJlbnQgPSBkb207XG5cbiAgICBpZih0ZXN0KGRvbSkpXG4gICAgICByZXR1cm4gZG9tO1xuXG4gICAgd2hpbGUoISEocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpICYmICBwYXJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPSAnaHRtbCcpe1xuICAgICAgaWYodGVzdChwYXJlbnQpKXtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgICBmdW5jdGlvbiB0ZXN0KGRvbSl7XG5cbiAgICAgIGlmKCEhZG9tLmNsYXNzTmFtZS5tYXRjaChjbHNSZWd4KSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfWVsc2UgaWYodGFnUmVneC50ZXN0KGRvbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlUGFyYW1zOiBmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIHJlcyA9IHt9O1xuXG4gICAgZm9yKHZhciBwIGluIHBhcmFtKXtcbiAgICAgIGlmKHBhcmFtLmhhc093blByb3BlcnR5KHApKXtcbiAgICAgICAgaWYodHlwZW9mIHBhcmFtW3BdICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICByZXNbcF0gPSBwYXJhbVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RvbS5qcyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4vZG9tLmpzJyk7XG5cbmZ1bmN0aW9uIGdldEhlaWdodChzZWwsaXNPdXRlcil7XG4gIHZhciBzZWN0aW9uU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHNlbCksXG4gICAgICBtYXJnaW5IID0gMDtcblxuICBpZihpc091dGVyKXtcbiAgICBtYXJnaW5IID0gc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKS5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgICAgICBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpLnJlcGxhY2UoJ3B4JywnJykqMVxuICB9XG4gIHJldHVybiAoXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMSArXG4gICAgICAgICAgc2VjdGlvblN0eWxlLnBhZGRpbmdUb3AucmVwbGFjZSgncHgnLCcnKSoxICtcbiAgICAgICAgICBzZWN0aW9uU3R5bGUucGFkZGluZ0JvdHRvbS5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIHNlY3Rpb25TdHlsZS5ib3JkZXJUb3BXaWR0aC5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIHNlY3Rpb25TdHlsZS5ib3JkZXJCb3R0b21XaWR0aC5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIG1hcmdpbkhcbiAgICAgICAgKTtcbn1cblxudmFyIGVhc2UgPSB7XG4gIGNpcmN1bGFyOiB7XG4gICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4xLCAwLjU3LCAwLjEsIDEpJ1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdFRvdWNoOiBmdW5jdGlvbihkaWFsb2cpe1xuICAgIHZhciBkbGdDb250ZW50ID0gIGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKSxcbiAgICAgICAgc2VjdGlvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyksXG4gICAgICAgIHNjcm9sbFRhcmdlU3R5bGUgPSBkbGdDb250ZW50LnN0eWxlLFxuICAgICAgICB3cmFwcGVySGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsJycpKjEsXG4gICAgICAgIG1heEhlaWdodCwgc3RhcnRQb3N4LCBzdGFydFBvc3ksIGlzVG91Y2gsXG4gICAgICAgIHN0YXJ0VGltZSwgZGlzdFksIGRpc3RYLFxuICAgICAgICBlbmRUaW1lID0gMCwgeCA9MCwgeSA9MCwgc3RhcnRYLCBzdGFydFksIGlzSW5UcmFuc2l0aW9uO1xuXG4gICAgbWF4SGVpZ2h0ID0gd3JhcHBlckhlaWdodCAtIGdldEhlaWdodChkbGdDb250ZW50LHRydWUpO1xuXG4gICAgc2Nyb2xsVGFyZ2VTdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSBlYXNlLmNpcmN1bGFyLnN0eWxlO1xuXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2htb3ZlJyxzdG9wU2Nyb2xsTW92ZSk7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3RyYW5zaXRpb25lbmQnLF90cmFuc2l0aW9uRW5kKTtcbiAgICB1dGlscy5iaW5kRXZlbnQoZGxnQ29udGVudCwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3RyYW5zaXRpb25FbmQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3lTY3JvbGw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2htb3ZlJyxzdG9wU2Nyb2xsTW92ZSk7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3RyYW5zaXRpb25lbmQnLF90cmFuc2l0aW9uRW5kKTtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnQ29udGVudCwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3RyYW5zaXRpb25FbmQpO1xuICAgICAgICBkbGdDb250ZW50ID0gc2VjdGlvbiA9IG51bGw7XG4gICAgICB9LFxuICAgICAgcmVmcmVzaDogZnVuY3Rpb24oKXtcbiAgICAgICAgd3JhcHBlckhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxO1xuICAgICAgICBtYXhIZWlnaHQgPSB3cmFwcGVySGVpZ2h0IC0gZ2V0SGVpZ2h0KGRsZ0NvbnRlbnQsdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0VG91Y2goZSl7XG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXG4gICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY2xvc2VzdChlLnRhcmdldCwnZGlhbG9nLWNvbnRlbnQnKSxcbiAgICAgICAgICBwb3M7XG5cbiAgICAgIGlmKCEhdGFyZ2V0KXtcbiAgICAgICAgaWYoaXNJblRyYW5zaXRpb24pe1xuICAgICAgICAgIF90cmFuc2l0aW9uVGltZSgpO1xuICAgICAgICAgIGlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgcG9zID0gZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xuICAgICAgICAgIHRyYW5zbGF0ZShNYXRoLnJvdW5kKHBvcy54KSwgTWF0aC5yb3VuZChwb3MueSkpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0UG9zeCA9IHRvdWNoLnBhZ2VYO1xuICAgICAgICBzdGFydFBvc3kgPSB0b3VjaC5wYWdlWTtcbiAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgZGlzdFggPSBkaXN0WSA9IDA7XG4gICAgICAgIHN0YXJ0WCA9IHg7XG4gICAgICAgIHN0YXJ0WSA9IHk7XG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlzVG91Y2ggPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcFNjcm9sbE1vdmUoZSl7XG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXG4gICAgICAgICAgcG9zWCA9IHRvdWNoLnBhZ2VYLFxuICAgICAgICAgIHBvc1kgPSB0b3VjaC5wYWdlWSxcbiAgICAgICAgICBub2RlTmFtZSA9IGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgdmFyIGRlbHRhWSA9IHBvc1kgLSBzdGFydFBvc3ksXG4gICAgICAgICAgZGVsdGFYID0gcG9zWCAtIHN0YXJ0UG9zeCxcbiAgICAgICAgICBuZXdZO1xuXG4gICAgICBzdGFydFBvc3ggPSBwb3NYO1xuICAgICAgc3RhcnRQb3N5ID0gcG9zWTtcblxuICAgICAgZGlzdFggKz0gZGVsdGFYO1xuICAgICAgZGlzdFkgKz0gZGVsdGFZO1xuXG4gICAgICBpZiggbm9kZU5hbWUgIT0gJ2lucHV0JyAmJiBub2RlTmFtZSAhPSAnc2VsZWN0JyAmJiBub2RlTmFtZSAhPSAndGV4dGFyZWEnKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCAodGltZXN0YW1wIC0gZW5kVGltZSA+IDMwMCAmJiBNYXRoLmFicyhkaXN0WSkgPCAxMCkgfHwgIWlzVG91Y2ggfHwgbWF4SGVpZ2h0ID49IDApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5ld1kgPSB5ICsgZGVsdGFZO1xuICAgICAgaWYgKCBuZXdZID4gMCB8fCBuZXdZIDwgbWF4SGVpZ2h0ICkge1xuICAgICAgICBuZXdZID0geSArIGRlbHRhWSAvIDM7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zbGF0ZShkbGdDb250ZW50LG5ld1kpO1xuXG4gICAgICBpZiAoIHRpbWVzdGFtcCAtIHN0YXJ0VGltZSA+IDMwMCApIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuICAgICAgICBzdGFydFggPSB4O1xuICAgICAgICBzdGFydFkgPSB5O1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b3VjaGVFbmQoZSl7XG4gICAgICB2YXIgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxuICAgICAgICAgIG5ld1kgPSBNYXRoLnJvdW5kKHkpLFxuICAgICAgICAgIHRpbWUgPSAwLFxuICAgICAgICAgIG1vbWVudHVtWTtcblxuICAgICAgc3RhcnRQb3N4ID0gbnVsbDtcbiAgICAgIHN0YXJ0UG9zeSA9IG51bGw7XG4gICAgICBlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIGlzSW5UcmFuc2l0aW9uID0gMDtcblxuICAgICAgaWYgKHJlc2V0UG9zaXRpb24oZGxnQ29udGVudCw1MDApIHx8IG1heEhlaWdodCA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2Nyb2xsVG8oZGxnQ29udGVudCwgbmV3WSk7XG5cbiAgICAgIGlmKGR1cmF0aW9uIDwgMzAwKXtcbiAgICAgICAgbW9tZW50dW1ZID0gbW9tZW50dW0oeSwgc3RhcnRZLCBkdXJhdGlvbik7XG4gICAgICAgIG5ld1kgPSBtb21lbnR1bVkuZGVzdGluYXRpb247XG4gICAgICAgIHRpbWUgPSBtb21lbnR1bVkuZHVyYXRpb247XG4gICAgICAgIGlzSW5UcmFuc2l0aW9uID0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBuZXdZICE9IHkgKSB7XG4gICAgICAgIHNjcm9sbFRvKGRsZ0NvbnRlbnQsIG5ld1ksdGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCxwb3N5LHRpbWUpe1xuICAgICAgdGltZSA9IHRpbWUgfHwgMDtcbiAgICAgIGlzSW5UcmFuc2l0aW9uID0gdGltZSA+IDA7XG4gICAgICBfdHJhbnNpdGlvblRpbWUodGltZSk7XG4gICAgICB0cmFuc2xhdGUodGFyZ2V0LHBvc3kpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSh0YXJnZXQsIHBvc3kpIHtcbiAgICAgIHNjcm9sbFRhcmdlU3R5bGUud2Via2l0VHJhbnNmb3JtICA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHBvc3kgKyAncHgsMHB4KSc7XG4gICAgICB5ID0gcG9zeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzZXRQb3NpdGlvbih0YXJnZXQsdGltZSl7XG4gICAgICB2YXIgcG9zWSA9IHk7XG5cbiAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XG5cbiAgICAgIGlmIChwb3NZID49IDAgKSB7XG4gICAgICAgIHBvc1kgPSAwO1xuICAgICAgfSBlbHNlIGlmIChwb3NZIDwgbWF4SGVpZ2h0ICkge1xuICAgICAgICBwb3NZID0gbWF4SGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAoIHBvc1kgPT0geSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzY3JvbGxUbyh0YXJnZXQsIHBvc1ksIHRpbWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9tZW50dW0oY3VycmVudCwgc3RhcnQsIHRpbWUpe1xuICAgICAgdmFyIGRpc3RhbmNlID0gY3VycmVudCAtIHN0YXJ0LFxuICAgICAgICAgIHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZSxcbiAgICAgICAgICBkZWNlbGVyYXRpb24gPSAwLjAwMDYsXG4gICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgZHVyYXRpb247XG5cbiAgICAgIGRlc3RpbmF0aW9uID0gY3VycmVudCArICggc3BlZWQgKiBzcGVlZCApIC8gKCAyICogZGVjZWxlcmF0aW9uICkgKiAoIGRpc3RhbmNlIDwgMCA/IC0xIDogMSApOyAvLyBzPShhdF4yKS8yXG4gICAgICBkdXJhdGlvbiA9IHNwZWVkIC8gZGVjZWxlcmF0aW9uOyAvLyB2PWF0XG5cbiAgICAgIGlmICggZGVzdGluYXRpb24gPCBtYXhIZWlnaHQgKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uID0gbWF4SGVpZ2h0IC0gKCB3cmFwcGVySGVpZ2h0IC8gMi41ICogKCBzcGVlZCAvIDggKSApO1xuICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGRlc3RpbmF0aW9uIC0gY3VycmVudCk7XG4gICAgICAgIGR1cmF0aW9uID0gZGlzdGFuY2UgLyBzcGVlZDtcbiAgICAgIH1lbHNlIGlmKGRlc3RpbmF0aW9uID4gMCl7XG4gICAgICAgIGRlc3RpbmF0aW9uID0gd3JhcHBlckhlaWdodCAvIDIuNSAqICggc3BlZWQgLyA4ICk7XG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoY3VycmVudCkgKyBkZXN0aW5hdGlvbjtcbiAgICAgICAgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZXN0aW5hdGlvbjogTWF0aC5yb3VuZChkZXN0aW5hdGlvbiksXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb21wdXRlZFBvc2l0aW9uKCkge1xuICAgICAgdmFyIG1hdHJpeCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRsZ0NvbnRlbnQsIG51bGwpLFxuICAgICAgICB4LCB5O1xuXG4gICAgICBtYXRyaXggPSBtYXRyaXgud2Via2l0VHJhbnNmb3JtLnNwbGl0KCcpJylbMF0uc3BsaXQoJywgJyk7XG4gICAgICB4ID0gKyhtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSk7XG4gICAgICB5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XG5cbiAgICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdHJhbnNpdGlvblRpbWUodGltZSl7XG4gICAgICB0aW1lID0gdGltZSB8fCAwO1xuICAgICAgc2Nyb2xsVGFyZ2VTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0aW1lICsgJ21zJztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3RyYW5zaXRpb25FbmQoKXtcbiAgICAgIGlmKCFpc0luVHJhbnNpdGlvbilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgX3RyYW5zaXRpb25UaW1lKCk7XG4gICAgICBpZighcmVzZXRQb3NpdGlvbihkbGdDb250ZW50KSl7XG4gICAgICAgIGlzSW5UcmFuc2l0aW9uID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RsZ3Njcm9sbC5qcyIsImZ1bmN0aW9uIGluaXRCYWNrUHJlc3MoTW9kYWxEaWFsb2csIG9wdGlvbnMpe1xuXG4gIGlmKCFvcHRpb25zLnVzZUhhc2gpXG4gICAgcmV0dXJuO1xuXG4gIGxldCBub3RpZnlCYWNrcHJlc3MgPSBvcHRpb25zLm5vdGlmeUJhY2twcmVzcztcbiAgbGV0IGRpYWxvZ0lkTGlzdCA9IFtdO1xuXG4gIC8vIG5vdGlmeUJhY2twcmVzcyA9IG5vdGlmeUJhY2twcmVzcyhvcHRpb25zKTtcblxuICBNb2RhbERpYWxvZy5hZnRlckxpc3RlbmVyKGZ1bmN0aW9uKGRpYWxvZyl7XG4gICAgZGlhbG9nSWRMaXN0LnB1c2goZGlhbG9nLmlkKTtcblxuICAgIGRpYWxvZy5saXN0ZW5lckJhY2tQcmVzcyA9IG5vdGlmeUJhY2twcmVzcy5hZGRMaXN0ZW5lcihsaXN0ZW5lckJhY2twcmVzcygpLCAnYWRkJyk7XG5cbiAgICBkaWFsb2cubm90aWZ5UHJpb3JpdHkgPSBub3RpZnlCYWNrcHJlc3MuY2FsbGJhY2tQcmlvcml0eTtcbiAgfSk7XG5cbiAgTW9kYWxEaWFsb2cuY2xvc2VkTGlzdGVuZXIoZnVuY3Rpb24oZGlhbG9nKXtcbiAgICBkaWFsb2dJZExpc3QgPSBkaWFsb2dJZExpc3QuZmlsdGVyKChpZCk9PntcbiAgICAgIHJldHVybiBkaWFsb2cuaWQgIT09IGlkO1xuICAgIH0pO1xuICAgIC8vIG5vdGlmeUJhY2twcmVzcy5yZW1vdmVMaXN0ZW5lcihkaWFsb2cubGlzdGVuZXJCYWNrUHJlc3MpO1xuICAgIGRpYWxvZy5saXN0ZW5lckJhY2tQcmVzcy51cGRhdGUoKTtcbiAgICBub3RpZnlCYWNrcHJlc3MuZ29CYWNrKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbmVyQmFja3ByZXNzKCkge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICBpZighZGlhbG9nSWRMaXN0Lmxlbmd0aCl7XG4gICAgICAgIG9wdGlvbnMuYmFja1ByZXNzICYmIG9wdGlvbnMuYmFja1ByZXNzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGxnSWQgPSBkaWFsb2dJZExpc3QucG9wKCk7XG5cbiAgICAgIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbZGxnSWRdLmNsb3NlRGlhbG9nKHRydWUpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbml0QmFja1ByZXNzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbHVnaW5zL2JhY2tQcmVzczIuanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmbHltZVV0aWxzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZseW1lVXRpbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vIGltcG9ydCBhIGZyb20gXCIuLi9saWIvYXBwU3RvcmVDbGllbnQvV2luQ2hhbmdlZE1hbmFnZS5qc1wiO1xuXHQvLyBpbXBvcnQgYiBmcm9tIFwiLi4vbGliL2RvbVV0aWxzL1JhdGVJblZpZXdQb3J0TWFuYWdlLmpzXCI7XG5cblx0dmFyIG5vdGlmeUJhY2twcmVzcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgbm90aWZ5QmFja3ByZXNzOiBub3RpZnlCYWNrcHJlc3Ncblx0fTtcblx0Ly8gZXhwb3J0IGRlZmF1bHQge1xuXHQvLyAgIG5vdGlmeUJhY2twcmVzc1xuXHQvLyB9XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBoYXNoSGlzdG9yeSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIGdlbmVyYXRlRm4gPSBmdW5jdGlvbiBnZW5lcmF0ZUZuKG9wdGlvbnMpIHtcblxuXHQgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdCAgdmFyIGlzU3VwcG9ydEJhY2twcmVzc0xpc3RlbmVyID0gIW9wdGlvbnMudXNlQnJvd3NlciAmJiB3aW5kb3cuRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlICYmICEhd2luZG93LkV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5saXN0ZW5CYWNrUHJlc3MsXG5cdCAgICAgIGhhc2hMaXN0ZW5lciA9IGhhc2hIaXN0b3J5KCk7XG5cblx0ICBpZiAoIWlzU3VwcG9ydEJhY2twcmVzc0xpc3RlbmVyKSB7XG5cdCAgICBoYXNoTGlzdGVuZXIubGlzdGVuZXIoZnVuY3Rpb24gKHBhdGgsIHByZXBhdGgpIHtcblx0ICAgICAgdmFyIHByZXBhdGggPSBwcmVwYXRoICogMTtcblxuXHQgICAgICBpZiAoISFwcmVwYXRoICYmIHBhdGggLSBwcmVwYXRoIDwgMCkge1xuXHQgICAgICAgIHdpbmRvdy5fX2JhY2twcmVzcygpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICB9IGVsc2Uge1xuXHQgICAgbGlzdGVuQmFja1ByZXNzKCk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gbGlzdGVuQmFja1ByZXNzKCkge1xuXHQgICAgaWYgKGlzU3VwcG9ydEJhY2twcmVzc0xpc3RlbmVyKSBFdmVudEphdmFzY3JpcHRJbnRlcmZhY2UubGlzdGVuQmFja1ByZXNzKCdfX2JhY2twcmVzcycpO1xuXHQgIH1cblxuXHQgIHdpbmRvdy5fX2JhY2twcmVzcyA9IGZ1bmN0aW9uIChpc2Zyb20pIHtcblx0ICAgIHZhciBpc01Ub3VjaCA9IGlzZnJvbSA9PSAnZnJvbV9tZW51JyA/IGZhbHNlIDogdHJ1ZTtcblx0ICAgIG5vdGlmeUJhY2twcmVzcy5ydW4oaXNNVG91Y2gpO1xuXHQgICAgbGlzdGVuQmFja1ByZXNzKCk7XG5cdCAgfTtcblxuXHQgIHZhciBfY2FsbGJhY2tzID0ge30sXG5cdCAgICAgIGdsb2JhbENhbGxiYWNrcyA9IFtdLFxuXHQgICAgICBfcHJpb3JpdHlGYWN0cyA9IFtdO1xuXG5cdCAgdmFyIG5vdGlmeUJhY2twcmVzcyA9IHtcblx0ICAgIGdsb2JhbE9uY2U6IGZhbHNlLFxuXHQgICAgaXNGaW5pc2g6IGZhbHNlLFxuXHQgICAgaXNNZW51Q2xvc2U6IHRydWUsXG5cdCAgICBhZGRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkTGlzdGVuZXIoY2IpIHtcblx0ICAgICAgdmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuXG5cdCAgICAgIHZhciBzZWxmID0gdGhpcztcblxuXHQgICAgICBpZiAocHJpb3JpdHkgPT09IHRydWUpIHJldHVybiBnbG9iYWxDYWxsYmFja3MucHVzaChjYik7ZWxzZSBpZiAocHJpb3JpdHkgPT0gJ2FkZCcpIHtcblx0ICAgICAgICBwcmlvcml0eSA9IHRoaXMuaW5jcmVhc2VQcmlvcml0eSgpO1xuXHQgICAgICB9XG5cblx0ICAgICAgdGhpcy5hZGRDYWxsYmFjayhjYiwgcHJpb3JpdHkpO1xuXG5cdCAgICAgIGlmICghaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIpIHtcblx0ICAgICAgICBoYXNoTGlzdGVuZXIuYXV0b1VwZGF0ZUhhc2goKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHRoaXMuY2FsbGJhY2tQcmlvcml0eSA9IHByaW9yaXR5O1xuXG5cdCAgICAgIHJldHVybiB7XG5cdCAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdCAgICAgICAgICB2YXIgaW5uZXJRdWV1ZXMgPSB2b2lkIDA7XG5cblx0ICAgICAgICAgIGlubmVyUXVldWVzID0gX2NhbGxiYWNrc1twcmlvcml0eV0gPSBfY2FsbGJhY2tzW3ByaW9yaXR5XS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT0gY2I7XG5cdCAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgaWYgKCFpbm5lclF1ZXVlcy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3ByaW9yaXR5RmFjdHMgPSBfcHJpb3JpdHlGYWN0cy5maWx0ZXIoZnVuY3Rpb24gKGZhY3Rvcikge1xuXHQgICAgICAgICAgICAgIHJldHVybiBmYWN0b3IgIT0gcHJpb3JpdHk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUobmV3Y2IpIHtcblx0ICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG5cdCAgICAgICAgICB2YXIgbWF4UHJpb3JpdHkgPSBzZWxmLmluY3JlYXNlUHJpb3JpdHkoKTtcblxuXHQgICAgICAgICAgc2VsZi5hZGRDYWxsYmFjayhuZXdjYiB8fCBmdW5jdGlvbiAoKSB7fSwgbWF4UHJpb3JpdHkpO1xuXHQgICAgICAgICAgLy8gX2NhbGxiYWNrc1twcmlvcml0eV0gPSBfY2FsbGJhY2tzW3ByaW9yaXR5XS5tYXAoaXRlbT0+e1xuXHQgICAgICAgICAgLy8gICBpZihpdGVtID09PSBjYil7XG5cdCAgICAgICAgICAvLyAgICAgcmV0dXJuIG5ld2NiIHx8IGZ1bmN0aW9uKCl7fTtcblx0ICAgICAgICAgIC8vICAgfTtcblx0ICAgICAgICAgIC8vICAgcmV0dXJuIGl0ZW07XG5cdCAgICAgICAgICAvLyB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgIH07XG5cdCAgICB9LFxuXHQgICAgYWRkQ2FsbGJhY2s6IGZ1bmN0aW9uIGFkZENhbGxiYWNrKGNiLCBwcmlvcml0eSkge1xuXG5cdCAgICAgIGlmICghX2NhbGxiYWNrc1twcmlvcml0eV0pIHtcblx0ICAgICAgICBfY2FsbGJhY2tzW3ByaW9yaXR5XSA9IFtdO1xuXHQgICAgICB9XG5cblx0ICAgICAgX2NhbGxiYWNrc1twcmlvcml0eV0ucHVzaChjYik7XG5cblx0ICAgICAgaWYgKCF+X3ByaW9yaXR5RmFjdHMuaW5kZXhPZihwcmlvcml0eSkpIHtcblx0ICAgICAgICBfcHJpb3JpdHlGYWN0cy5wdXNoKHByaW9yaXR5KTtcblx0ICAgICAgICBfcHJpb3JpdHlGYWN0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdCAgICAgICAgICByZXR1cm4gYSAtIGI7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBpbmNyZWFzZVByaW9yaXR5OiBmdW5jdGlvbiBpbmNyZWFzZVByaW9yaXR5KCkge1xuXHQgICAgICB2YXIgbGVuID0gX3ByaW9yaXR5RmFjdHMubGVuZ3RoO1xuXG5cdCAgICAgIGlmICghbGVuKSByZXR1cm4gMTtcblxuXHQgICAgICByZXR1cm4gX3ByaW9yaXR5RmFjdHNbX3ByaW9yaXR5RmFjdHMubGVuZ3RoIC0gMV0gKyAxO1xuXHQgICAgfSxcblx0ICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihjYikge1xuXHQgICAgICB2YXIgdGVtcFByaW9yaXR5RmFjdHMgPSBfcHJpb3JpdHlGYWN0cztcblxuXHQgICAgICBfcHJpb3JpdHlGYWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcmlvcml0eSkge1xuXHQgICAgICAgIHZhciBxdWV1ZXMgPSBfY2FsbGJhY2tzW3ByaW9yaXR5XTtcblxuXHQgICAgICAgIHF1ZXVlcyA9IHF1ZXVlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgICAgICAgIHJldHVybiBpdGVtICE9IGNiO1xuXHQgICAgICAgIH0pO1xuXG5cdCAgICAgICAgX2NhbGxiYWNrc1twcmlvcml0eV0gPSBxdWV1ZXM7XG5cblx0ICAgICAgICBpZiAoIXF1ZXVlcy5sZW5ndGgpIHtcblx0ICAgICAgICAgIHRlbXBQcmlvcml0eUZhY3RzID0gdGVtcFByaW9yaXR5RmFjdHMuZmlsdGVyKGZ1bmN0aW9uIChmYWN0b3IpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZhY3RvciAhPSBwcmlvcml0eTtcblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cblx0ICAgICAgX3ByaW9yaXR5RmFjdHMgPSB0ZW1wUHJpb3JpdHlGYWN0cztcblx0ICAgIH0sXG5cdCAgICByZW1vdmVHbG9iYWxMaXN0ZW5lcnM6IGZ1bmN0aW9uIHJlbW92ZUdsb2JhbExpc3RlbmVycyhjYikge1xuXHQgICAgICBpZiAoY2IgIT0gbnVsbCkge1xuXHQgICAgICAgIGdsb2JhbENhbGxiYWNrcyA9IGdsb2JhbENhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24gKGZuKSB7XG5cdCAgICAgICAgICByZXR1cm4gY2IgIT0gZm47XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZ2xvYmFsQ2FsbGJhY2tzID0gW107XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBydW5XaXRoUHJpb3JpdHk6IGZ1bmN0aW9uIHJ1bldpdGhQcmlvcml0eShwcmlvcml0eSwgaXNSbSkge1xuXHQgICAgICB2YXIgcXVldWUgPSBfY2FsbGJhY2tzW3ByaW9yaXR5XTtcblxuXHQgICAgICBpZiAoIXF1ZXVlKSByZXR1cm47XG5cblx0ICAgICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcblx0ICAgICAgICBjYigpO1xuXHQgICAgICB9KTtcblxuXHQgICAgICBpZiAoaXNSbSkgX2NhbGxiYWNrc1twcmlvcml0eV0gPSBudWxsO1xuXHQgICAgfSxcblx0ICAgIHJ1bjogZnVuY3Rpb24gcnVuKGlzTVRvdWNoKSB7XG5cdCAgICAgIGlmICghZ2xvYmFsQ2FsbGJhY2tzLmxlbmd0aCAmJiAhX3ByaW9yaXR5RmFjdHMubGVuZ3RoKSB7XG5cdCAgICAgICAgdGhpcy5ub3RpZnlCYWNrRm4gJiYgdGhpcy5ub3RpZnlCYWNrRm4oKTtcblx0ICAgICAgICBpZiAodGhpcy5pc0ZpbmlzaCB8fCAhaXNNVG91Y2ggJiYgdGhpcy5pc01lbnVDbG9zZSkge1xuXHQgICAgICAgICAgdGhpcy5jbG9zZUFjdGl2aXR5KCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXG5cdCAgICAgIGdsb2JhbENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuXHQgICAgICAgIGNiKCk7XG5cdCAgICAgIH0pO1xuXHQgICAgICBpZiAodGhpcy5nbG9iYWxPbmNlKSBnbG9iYWxDYWxsYmFja3MgPSBbXTtcblxuXHQgICAgICB2YXIgY3VyUHJpb3JpdHkgPSBfcHJpb3JpdHlGYWN0cy5wb3AoKTtcblx0ICAgICAgdGhpcy5ydW5XaXRoUHJpb3JpdHkoY3VyUHJpb3JpdHksIHRydWUpO1xuXHQgICAgfSxcblx0ICAgIGdvQmFjazogZnVuY3Rpb24gZ29CYWNrKCkge1xuXHQgICAgICBpZiAoaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIpIEV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5iYWNrUHJlc3MoKTtlbHNlIGhhc2hMaXN0ZW5lci5iYWNrKCk7XG5cdCAgICB9LFxuXHQgICAgY2xvc2VBY3Rpdml0eTogZnVuY3Rpb24gY2xvc2VBY3Rpdml0eSgpIHtcblx0ICAgICAgaWYgKGlzU3VwcG9ydEJhY2twcmVzc0xpc3RlbmVyKSBFdmVudEphdmFzY3JpcHRJbnRlcmZhY2UuZmluaXNoKCk7ZWxzZSBoYXNoTGlzdGVuZXIuYmFjaygpO1xuXHQgICAgfSxcblx0ICAgIGFkZE5vdGlmeUJhY2s6IGZ1bmN0aW9uIGFkZE5vdGlmeUJhY2soY2IpIHtcblx0ICAgICAgdGhpcy5ub3RpZnlCYWNrRm4gPSBjYjtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgcmV0dXJuIG5vdGlmeUJhY2twcmVzcztcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZUZuO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcblx0dmFyIGJpbmRFdmVudCA9IGZ1bmN0aW9uIGJpbmRFdmVudChkb20sIG5hbWUsIGZuKSB7XG5cdCAgZG9tLmFkZEV2ZW50TGlzdGVuZXIgPyBkb20uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmbiwgZmFsc2UpIDogZG9tLmF0dGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmbik7XG5cdH07XG5cdHZhciB1bkJpbmRFdmVudCA9IGZ1bmN0aW9uIHVuQmluZEV2ZW50KGRvbSwgbmFtZSwgZm4pIHtcblx0ICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lciA/IGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGZuLCBmYWxzZSkgOiBkb20uZGV0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZuKTtcblx0fTtcblxuXHR2YXIgSGFzaENoYW5nZUV2ZW50ID0gJ2hhc2hjaGFuZ2UnO1xuXHR2YXIgcXVlcnlfa2V5ID0gJ19kZ19oYXNoJztcblxuXHR2YXIgaGFzaEhpc3RvcnkgPSBmdW5jdGlvbiBoYXNoSGlzdG9yeShvcHRpb25zKSB7XG5cblx0ICB2YXIgcHJldkxvY2F0aW9uID0gJycsXG5cdCAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG5cdCAgdmFyIGdldEN1cnJlbnRIYXNoUGF0aCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRIYXNoUGF0aCgpIHtcblx0ICAgIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYsXG5cdCAgICAgICAgcmVneCA9IG5ldyBSZWdFeHAoJ14nICsgcXVlcnlfa2V5ICsgJz0oLiopJyk7XG5cdCAgICB2YXIgaW5kZXggPSBocmVmLmluZGV4T2YoJyMnKSxcblx0ICAgICAgICBxdWVyeUluZGV4ID0gdm9pZCAwLFxuXHQgICAgICAgIHN0ciA9ICcnLFxuXHQgICAgICAgIG1hdGNoZXMgPSB2b2lkIDA7XG5cblx0ICAgIGlmIChpbmRleCAhPSAtMSkge1xuXHQgICAgICBzdHIgPSBocmVmLnN1YnN0cmluZyhpbmRleCArIDEpIHx8ICcnO1xuXHQgICAgICBpZiAocXVlcnlJbmRleCA9IHN0ci5pbmRleE9mKCc/JykgPiAwKSB7XG5cdCAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBxdWVyeUluZGV4KTtcblx0ICAgICAgfVxuXHQgICAgICBtYXRjaGVzID0gcmVneC5leGVjKHN0cik7XG5cdCAgICAgIGlmIChtYXRjaGVzKSB7XG5cdCAgICAgICAgc3RyID0gbWF0Y2hlc1sxXTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzdHIgPSAnJztcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIHN0cjtcblx0ICB9O1xuXG5cdCAgdmFyIHN0b3BMaXN0ZW5lciA9IGZ1bmN0aW9uIHN0b3BMaXN0ZW5lcigpIHtcblx0ICAgIHVuQmluZEV2ZW50KHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcblx0ICB9O1xuXG5cdCAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoY2FsbGJhY2spIHtcblx0ICAgIGxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcblxuXHQgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgcmV0dXJuIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgICAgICByZXR1cm4gaXRlbSAhPT0gY2FsbGJhY2s7XG5cdCAgICAgIH0pO1xuXHQgICAgfTtcblx0ICB9O1xuXG5cdCAgdmFyIHB1c2hIYXNoUGF0aCA9IGZ1bmN0aW9uIHB1c2hIYXNoUGF0aChwYXRoKSB7XG5cdCAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xuXHQgIH07XG5cblx0ICB2YXIgcmVwbGFjZUhhc2hQYXRoID0gZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcblx0ICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGF0aCk7XG5cdCAgfTtcblxuXHQgIHZhciBhdXRvVXBkYXRlSGFzaCA9IGZ1bmN0aW9uIGF1dG9VcGRhdGVIYXNoKCkge1xuXHQgICAgdmFyIGhhc2hQYXRoID0gZ2V0Q3VycmVudEhhc2hQYXRoKCkgKiAxO1xuXHQgICAgaWYgKCFoYXNoUGF0aCkgaGFzaFBhdGggPSAxO2Vsc2UgaGFzaFBhdGgrKztcblx0ICAgIHB1c2hIYXNoUGF0aChxdWVyeV9rZXkgKyAnPScgKyBoYXNoUGF0aCk7XG5cdCAgICByZXR1cm4gaGFzaFBhdGg7XG5cdCAgfTtcblxuXHQgIHZhciBnbyA9IGZ1bmN0aW9uIGdvKG4pIHtcblx0ICAgIGlmIChuKSB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcblx0ICB9O1xuXHQgIHZhciBiYWNrID0gZnVuY3Rpb24gYmFjaygpIHtcblx0ICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcblx0ICB9O1xuXG5cdCAgdmFyIGhhbmRsZUhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuXHQgICAgdmFyIGN1cnJlbnRMb2NhdGlvbiA9IGdldEN1cnJlbnRIYXNoUGF0aCgpO1xuXG5cdCAgICBpZiAocHJldkxvY2F0aW9uID09PSBjdXJyZW50TG9jYXRpb24pIHJldHVybjtcblxuXHQgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG5cdCAgICAgIGxpc3RlbmVyKGN1cnJlbnRMb2NhdGlvbiwgcHJldkxvY2F0aW9uKTtcblx0ICAgIH0pO1xuXG5cdCAgICBwcmV2TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG5cdCAgfTtcblxuXHQgIGJpbmRFdmVudCh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG5cblx0ICByZXR1cm4ge1xuXHQgICAgZ2V0Q3VycmVudEhhc2hQYXRoOiBnZXRDdXJyZW50SGFzaFBhdGgsXG5cdCAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG5cdCAgICBzdG9wTGlzdGVuZXI6IHN0b3BMaXN0ZW5lcixcblx0ICAgIHB1c2hIYXNoUGF0aDogcHVzaEhhc2hQYXRoLFxuXHQgICAgcmVwbGFjZUhhc2hQYXRoOiByZXBsYWNlSGFzaFBhdGgsXG5cdCAgICBhdXRvVXBkYXRlSGFzaDogYXV0b1VwZGF0ZUhhc2gsXG5cdCAgICBnbzogZ28sXG5cdCAgICBiYWNrOiBiYWNrXG5cdCAgfTtcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGhhc2hIaXN0b3J5O1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZXh0cmEtbGliL25vdGlmeUJhY2twcmVzcy5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9