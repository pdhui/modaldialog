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
	  notifyBackpress: flymeUtils.notifyBackpress,
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

	module.exports = ".rc-modal {\n  position: absolute;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  transition: opacity 0.3s ease-out;\n}\n.rc-modal .modal-dialog {\n  border-radius: $fn.rem( 1px );\n  text-align: center;\n  width: $fn.rem( 324px );\n  margin: 0 auto;\n  z-index: 9000;\n  position: fixed;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);\n}\n.modal-dialog.dlg-no-title header {\n  height: $fn.rem( 28px );\n}\n.modal-dialog.dlg-no-title .dialog-content {\n  color: #000;\n}\n.modal-dialog.dlg-no-title section {\n  text-align: left;\n}\n.modal-dialog.dlg-has-title header {\n  padding: 0 0 $fn.rem( 10px ) 0;\n  font-size: $fn.rem( 18px );\n}\n.modal-dialog.alert-dialog section {\n  text-align: center;\n}\n.modal-dialog .modal-dialog-main {\n  position: relative;\n  z-index: 9000;\n  background: #fafafa;\n  font-size: $fn.rem( 16px );\n  border-radius: $fn.rem( 3px );\n  padding-top: $fn.rem( 28px );\n}\n.modal-dialog .dialog-title {\n  color: #000;\n}\n.modal-dialog .dialog-content {\n  color: #323232;\n  line-height: 1.6;\n}\n.modal-dialog em {\n  font-style: normal;\n}\n.modal-dialog section {\n  padding: 0px $fn.rem( 26px );\n  margin: 0 auto;\n  max-height: $fn.rem( 188px );\n  overflow: hidden;\n  position: relative;\n}\n.modal-dialog footer {\n  border-top: solid #d5d5d5;\n  border-top-width: $fn.rem( 1px );\n  height: $fn.rem( 45px );\n  line-height: $fn.rem( 45px );\n  margin-top: $fn.rem( 20px );\n  overflow: hidden;\n}\n.modal-dialog footer button {\n  outline: none;\n  border: 0;\n  padding: 0;\n  background: none;\n  font-size: $fn.rem( 16px );\n  height: $fn.rem( 45px );\n}\n.modal-dialog footer button.modal-dialog-onebtn {\n  width: 100%;\n}\n.modal-dialog footer button:after {\n  content: '';\n  border-right: solid #d5d5d5;\n  border-right-width: $fn.rem( 1px );\n  position: absolute;\n  top: 0px;\n  display: block;\n  height: 100%;\n  right: 0px;\n}\n.modal-dialog footer button.last:after {\n  display: none;\n}\n.modal-dialog footer .sure-btn,\n.modal-dialog footer .cancle-btn {\n  width: 50%;\n  float: left;\n  position: relative;\n}\n.modal-dialog footer .cancle-btn {\n  color: #000000;\n}\n.modal-dialog footer .sure-btn {\n  color: #517bd1;\n}\n.modal-dialog.alert-dialog footer {\n  text-align: center;\n}\n.modal-dialog.alert-dialog footer .sure-btn {\n  float: none;\n  margin: 0 auto;\n}\n.dialog-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 8999;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABGdBTUEAALGPC/xhBQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TgK1eW0YAAAALSURBVAjXY2DABwAAHgABboVHMgAAAABJRU5ErkJggg==);\n}\n"

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
	
		var generateFn = function generateFn() {
	
		  var isSupportBackpressListener = window.EventJavascriptInterface && !!window.EventJavascriptInterface.listenBackPress,
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
		module.exports = generateFn();
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNmEzMzM4NWUwZTllYTgxODE4YSIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nV2l0aEhhc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RsZ3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2lucy9iYWNrUHJlc3MyLmpzIiwid2VicGFjazovLy8uLi9jb21tb24tcGFja2FnZS91dGlscy9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbImRpYWxvZyIsInJlcXVpcmUiLCJ1dGlscyIsImZseW1lVXRpbHMiLCJleGFtcGxlIiwiX2V2ZW50cyIsImFkZEV4YW1wbGUiLCJ2YWx1ZSIsImlkIiwiY2FsbGJhY2siLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUh0bWxEb20iLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5IiwiYmluZEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImJpbmQiLCJldnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJjb25maXJtIiwiYWxlcnQiLCJpc0FsZXJ0ZWQiLCJkbGciLCJkbGdEb20iLCJkaWFsb2dEb20iLCJxdWVyeVNlbGVjdG9yIiwicmVmcmVzaCIsImZpcnN0IiwibG9jYXRpb24iLCJocmVmIiwiY3JlYXRlTm9CdG5EaWFsb2ciLCJ2YyIsImdldFVybFBhcmFtIiwidHVyblRvIiwiY29uZmlnIiwidXNlSGFzaCIsImJhc2VGb250U2l6ZSIsIm5vdGlmeUJhY2twcmVzcyIsImJhY2tQcmVzcyIsIkV2ZW50SmF2YXNjcmlwdEludGVyZmFjZSIsIndpbmRvdyIsIm9uV2luZG93Q2hhbmdlZCIsImNvbnRlbnQiLCJ0aXRsZSIsImRvbSIsImNscyIsImNseiIsImNsYXp6IiwiY3JlYXRlUGFyYW1zIiwib2tDYWxsYmFjayIsInNlbGVjdG9yIiwiTW9kYWxEaWFsb2ciLCJiYWNrUHJlc3NQbHVnaW4iLCJkZWZhdWx0Q29uZmlnIiwiYWRkUGx1Z2luIiwibW9kdWxlIiwiZXhwb3J0cyIsImJhc2VDc3MiLCJzY3JvbGxEbGciLCJfIiwiYXNzaWduIiwid2luSCIsIndpblciLCJub29wIiwiaW5zZXJ0U3R5bGVUb0hlYWQiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJmblRlbXBsYXRlIiwicmVtIiwicHgiLCJyZXBsYWNlIiwiZXhwciIsInZhbCIsImhlYWREb20iLCJmaXJzdExpbmsiLCJpbnNlcnRCZWZvcmUiLCJnZXRIdG1sQ29udGVudCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZUh0bWwiLCJoZWFkZXIiLCJwdXNoIiwicmVwbGFjZVRlbWxhdGUiLCJjcmVhdGVCdXR0b25zIiwiY2FsbCIsImpvaW4iLCJyZXNpemVXaW4iLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImJ0bnMiLCJidXR0b25zIiwidGVtcGxhdGUiLCJidG5UbXBscyIsInNlbGYiLCJvbmVCdG5DbHoiLCJjYW5jZWxDYWxsYmFjayIsIm5hbWUiLCJjYW5jZWxTdHIiLCJsZW5ndGgiLCJzdXJlU3RyIiwicmV2ZXJzZSIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJjYWxsYmFja3MiLCJpbnNlcnRDb250ZW50IiwiY29tbWVudCIsImNyZWF0ZUNvbW1lbnQiLCJvcmlEaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiX2NvbW1lbnREb20iLCJkaXNwbGF5IiwiX29yaWdpbkRpc3BsYXkiLCJkZWZhdWx0U2V0dGluZ3MiLCJhbmltYXRlZCIsInVzZUJhY2tncm91bmQiLCJjb21wbGV0ZSIsImJlZm9yZUxpc3RlbmVycyIsImFmdGVyTGlzdGVuZXJzIiwiY2xvc2VkTGlzdGVuZXJzIiwiX2NvdW50IiwiX2NhbGxCYWNrcyIsIk9iamVjdCIsImtleXMiLCJsaXN0ZW5lciIsImRpYWxvZ0xpc3QiLCJjcmVhdGUiLCJtb2RhbENvdW50IiwiZGxnUG9zIiwiZGxnTWFpbkRvbSIsIm9mZnNldEgiLCJkb2N1bWVudEVsZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJkbGdTY3JvbGwiLCJpbml0VG91Y2giLCJnZXRQb3MiLCJsZWZ0IiwidG9wIiwiY2xhc3NOYW1lIiwidXNlcmJnciIsImRhdGFzZXQiLCJoZWlnaHQiLCJfZXZlbnRMaXN0ZW5lciIsInByb3h5IiwiX2NsaWNrRXZlbnQiLCJwcm90b3R5cGUiLCJkbGdIIiwiZGxnVyIsIm9mZnNldFdpZHRoIiwiZGxnUG9zWSIsImRsZ1Bvc1giLCJjbG9zZURpYWxvZyIsImlzTm90SW52b2tlIiwicmVtb3ZlRGlhbG9nIiwidW5CaW5kRXZlbnQiLCJkZXN0cm95U2Nyb2xsIiwiX3JlbW92ZVRyYW5zaXRpb24iLCJvcGFjaXR5IiwicmVtb3ZlQ2hpbGQiLCJlIiwiZm4iLCJ3cmFwQXJncyIsIkFycmF5Iiwic2xpY2UiLCJhcmd1bWVudHMiLCJhcmdzIiwiY29uY2F0IiwiYXBwbHkiLCJzdXJlRm4iLCJidFRleHQxIiwiYnRUZXh0MiIsImNhbmNlbEZuIiwiYWZ0ZXJMaXN0ZW5lciIsImZpbHRlciIsInByZUxpc3RlbmVyIiwiY2xvc2VkTGlzdGVuZXIiLCJfcGx1Z2lucyIsImlzQ29uZmlnIiwiY29uc29sZSIsImluZm8iLCJpIiwibGVuIiwiRG9tVXRpbHMiLCJjcmVhdGVIdG1sIiwiZGl2IiwiaHRtbCIsInRlbXAiLCJjaGlsZHJlbiIsInN0ciIsImRhdGEiLCJyZWd4IiwiUmVnRXhwIiwiZXhlYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsImtleSIsInJlZyIsInIiLCJzZWFyY2giLCJzdWJzdHIiLCJtYXRjaCIsImRlY29kZVVSSSIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsImNsb3Nlc3QiLCJjbHNSZWd4IiwidGFnUmVneCIsInBhcmVudCIsInRlc3QiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwicGFyYW0iLCJyZXMiLCJnZXRIZWlnaHQiLCJzZWwiLCJpc091dGVyIiwic2VjdGlvblN0eWxlIiwibWFyZ2luSCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImVhc2UiLCJjaXJjdWxhciIsImRsZ0NvbnRlbnQiLCJzZWN0aW9uIiwic2Nyb2xsVGFyZ2VTdHlsZSIsIndyYXBwZXJIZWlnaHQiLCJtYXhIZWlnaHQiLCJzdGFydFBvc3giLCJzdGFydFBvc3kiLCJpc1RvdWNoIiwic3RhcnRUaW1lIiwiZGlzdFkiLCJkaXN0WCIsImVuZFRpbWUiLCJ4IiwieSIsInN0YXJ0WCIsInN0YXJ0WSIsImlzSW5UcmFuc2l0aW9uIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwic3RvcFNjcm9sbE1vdmUiLCJzdGFydFRvdWNoIiwidG91Y2hlRW5kIiwiX3RyYW5zaXRpb25FbmQiLCJ0b3VjaCIsInRvdWNoZXMiLCJwb3MiLCJfdHJhbnNpdGlvblRpbWUiLCJnZXRDb21wdXRlZFBvc2l0aW9uIiwidHJhbnNsYXRlIiwiTWF0aCIsInJvdW5kIiwicGFnZVgiLCJwYWdlWSIsIkRhdGUiLCJub3ciLCJwb3NYIiwicG9zWSIsInRpbWVzdGFtcCIsImRlbHRhWSIsImRlbHRhWCIsIm5ld1kiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImFicyIsImR1cmF0aW9uIiwidGltZSIsIm1vbWVudHVtWSIsInJlc2V0UG9zaXRpb24iLCJzY3JvbGxUbyIsIm1vbWVudHVtIiwiZGVzdGluYXRpb24iLCJwb3N5Iiwid2Via2l0VHJhbnNmb3JtIiwiY3VycmVudCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJzcGVlZCIsImRlY2VsZXJhdGlvbiIsIm1hdHJpeCIsInNwbGl0IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaW5pdEJhY2tQcmVzcyIsImRpYWxvZ0lkTGlzdCIsImxpc3RlbmVyQmFja1ByZXNzIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lckJhY2twcmVzcyIsIm5vdGlmeVByaW9yaXR5IiwiY2FsbGJhY2tQcmlvcml0eSIsInVwZGF0ZSIsImdvQmFjayIsImRsZ0lkIiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdENBLEtBQUlBLFNBQVMsbUJBQUFDLENBQVEsQ0FBUixDQUFiO0FBQ0EsS0FBSUMsUUFBUSxtQkFBQUQsQ0FBUSxDQUFSLENBQVo7QUFDQTtBQUNBLEtBQUlFLGFBQWEsbUJBQUFGLENBQVEsQ0FBUixDQUFqQjs7QUFFQSxLQUFJRyxVQUFVO0FBQ1pDLFlBQVMsRUFERztBQUVaQyxhQUZZLHNCQUVEQyxLQUZDLEVBRUtDLEVBRkwsRUFFUUMsUUFGUixFQUVpQjtBQUMzQixVQUFLQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkJULE1BQU1VLGFBQU4sQ0FBb0Isa0JBQWtCSixFQUFsQixHQUF1Qix5QkFBdkIsR0FBa0RELEtBQWxELEdBQTBELE9BQTlFLENBQTNCO0FBQ0EsVUFBS0YsT0FBTCxDQUFhRyxFQUFiLElBQW1CQyxRQUFuQjtBQUNBLFlBQU8sSUFBUDtBQUNELElBTlc7QUFPWkksT0FQWSxrQkFPTjtBQUNKLFVBQUtILFNBQUwsR0FB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TztBQUNQO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU07O0FBRU47QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQU87QUFDUDtBQUNBLEVBQUM7QUFDRCxFIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI2YTMzMzg1ZTBlOWVhODE4MThhIiwidmFyIGRpYWxvZyA9IHJlcXVpcmUoJy4uL2RpYWxvZ1dpdGhIYXNoLmpzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9kb20uanMnKTtcbi8vIHZhciBub3RpZnlCYWNrcHJlc3MgPSByZXF1aXJlKCdAZmx5bWUvdXRpbHMvc3JjL2FwcFN0b3JlQ2xpZW50L25vdGlmeUJhY2twcmVzcy5qcycpO1xudmFyIGZseW1lVXRpbHMgPSByZXF1aXJlKCdAZmx5bWUvdXRpbHMnKTtcblxudmFyIGV4YW1wbGUgPSB7XG4gIF9ldmVudHM6IHt9LFxuICBhZGRFeGFtcGxlKHZhbHVlLGlkLGNhbGxiYWNrKXtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVIdG1sRG9tKCc8bGkgZGF0YS1pZD1cIicgKyBpZCArICdcIiBzdHlsZT1cInBhZGRpbmc6NXB4O1wiPicrIHZhbHVlICsgJzwvbGk+JykpO1xuICAgIHRoaXMuX2V2ZW50c1tpZF0gPSBjYWxsYmFjaztcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgaW5pdCgpe1xuICAgIHRoaXMuY29udGFpbmVyID0gdXRpbHMuY3JlYXRlSHRtbERvbSgnPHVsIGNsYXNzPVwiZXhhbXBsZUxpc3RcIiBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtcIj48L3VsPicpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICB1dGlscy5iaW5kRXZlbnQodGhpcy5jb250YWluZXIsJ2NsaWNrJywgdGhpcy5kaXNwYXRjaEV2ZW50LmJpbmQodGhpcykpO1xuICB9LFxuICBkaXNwYXRjaEV2ZW50KGV2dCl7XG4gICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQsXG4gICAgICAgIGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgaWYoISF0aGlzLl9ldmVudHNbaWRdKXtcbiAgICAgIHRoaXMuX2V2ZW50c1tpZF0oKTtcbiAgICB9XG4gIH1cbn07XG5leGFtcGxlLmluaXQoKTtcbmV4YW1wbGUuYWRkRXhhbXBsZSgn5LiN5bim5qCH6aKYLeehruiupOahhjLooYwnLCdjb25maXJtMicsZnVuY3Rpb24oKXtcblxuICBkaWFsb2cuY29uZmlybSgn5omT5byA4oCc5pC656iL4oCd5a6i5oi356uv77yM6L+U5Zue5pys6aG156uL5Y2z5aKe5YqgM+asoeaKveWlluacuuS8muOAgiAnLG51bGwsXCJcIiwn5LiN5LqGJywn56uL5Y2z5omT5byAJyk7XG59KS5hZGRFeGFtcGxlKCfkuI3luKbmoIfpopgt56Gu6K6k5qGGM+ihjCcsJ2NvbmZpcm0zJyxmdW5jdGlvbigpe1xuXG4gIGRpYWxvZy5jb25maXJtKCfmiZPlvIDigJzmkLrnqIvigJ3lrqLmiLfnq6/vvIzov5Tlm57mnKzpobXnq4vljbPlop4g5YqgM+asoeaKveWlluacuuS8mi7ov5Tlm57mnKzpobXnq4vljbPlop7liqAz5qyhIOaKveWlluacuuS8muOAgiAnLG51bGwsXCJcIiwn5LiN5LqGJywn56uL5Y2z5omT5byAJyk7XG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt5Y+N6aaI6K+05piOJywnZmVlZGJhY2snLGZ1bmN0aW9uKCl7XG5cbiAgZGlhbG9nLmNvbmZpcm0oJ+avj+WuieijheS4gOS4quW6lOeUqO+8jOWkmuWinuWKoDHmrKHmir3lpZbmnLrkvJogJyxudWxsLFwi6I635b6XMeasoeaKveWlluacuuS8mlwiLCfnoa7lrponLCfnu6fnu63lronoo4UnKTtcbn0pLmFkZEV4YW1wbGUoJ+S4jeW4puagh+mimC3mj5DnpLrmoYYnLCdhbGVydCcsZnVuY3Rpb24oKXtcblxuICBkaWFsb2cuYWxlcnQoJ+aPkOS6pOWksei0pe+8jOivt+eojeWQjuWGjeivlSAnKTtcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3ljZXooYzmj5DnpLrmoYYnLCd0bGUtYWxlcnQnLGZ1bmN0aW9uKCl7XG5cbiAgZGlhbG9nLmFsZXJ0KCfor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI4nLCfpooblj5bmiJDlip8nKTtcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3kuKTooYzmj5DnpLrmoYYnLCd0bGUtYWxlcnQyJyxmdW5jdGlvbigpe1xuXG4gIGRpYWxvZy5hbGVydCgn6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO44CCJywn6aKG5Y+W5oiQ5YqfJyk7XG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt5aSa6KGM5o+Q56S65qGGJywndGxlLWFsZXJ0MicsZnVuY3Rpb24oKXtcblxuICBkaWFsb2cuYWxlcnQoJ+ivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jDxpbnB1dCB0eXBlPVwidGV4dFwiLz7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7jgILor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI5cXFxuICAgIOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjicsJ+mihuWPluaIkOWKnycpO1xufSkuYWRkRXhhbXBsZSgn5qGG5Lit5qGGJywnZGxnb2ZkbGcnLGZ1bmN0aW9uKCl7XG4gIHZhciBpc0FsZXJ0ZWQgPSBmYWxzZTtcbiAgZGlhbG9nLmFsZXJ0KCfniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrknLCfniLbmoYbmoIfpopgnLGZ1bmN0aW9uKCl7XG4gICAgaWYoaXNBbGVydGVkKSByZXR1cm47XG5cbiAgICBkaWFsb2cuYWxlcnQoJ+WtkOahhuWGheWuuScsJycpO1xuXG4gICAgaXNBbGVydGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn0pLmFkZEV4YW1wbGUoJ+WKqOaAgeWinuWKoOW8ueahhuWGheWuuScsJ2FkZGRsZ2hlaWdodCcsZnVuY3Rpb24oKXtcbiAgdmFyIGlzQWxlcnRlZCA9IGZhbHNlO1xuICB2YXIgZGxnID0gZGlhbG9nLmFsZXJ0KCfniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrk8YnV0dG9uIGNsYXNzPVwiYWRkQ29udGVudFwiPua3u+WKoOWGheWuuTwvYnV0dG9uPicsJ+eItuahhuagh+mimCcpO1xuICB2YXIgZGxnRG9tID0gZGxnLmRpYWxvZ0RvbTtcblxuICB1dGlscy5iaW5kRXZlbnQoZGxnRG9tLnF1ZXJ5U2VsZWN0b3IoJy5hZGRDb250ZW50JyksJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgIGRsZ0RvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVIdG1sRG9tKCc8ZGl2PmhlbGxvIHdvcmxkPC9kaXY+JykpO1xuICAgIGRsZy5yZWZyZXNoKCk7XG4gIH0pO1xufSkuYWRkRXhhbXBsZSgn5o+Q56S65qGGLT7mj5DnpLrmoYYnLCdkbGcxdG9kbGcyJyxmdW5jdGlvbigpe1xuICBkaWFsb2cuYWxlcnQoJ+eItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuuScsJ+eItuahhuagh+mimCcsZnVuY3Rpb24oKXtcbiAgICBkaWFsb2cuYWxlcnQoJ+WtkOahhuWGheWuuScsJycpO1xuICB9KTtcbn0pLmFkZEV4YW1wbGUoJ+aPkOekuuahhijkuI3lhbPpl60pLT7mj5DnpLrmoYYnLCdkbGcxTm9jbG9zZXRvZGxnMicsZnVuY3Rpb24oKXtcbiAgbGV0IGZpcnN0ID0gdHJ1ZTtcbiAgZGlhbG9nLmFsZXJ0KCfniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrknLCfniLbmoYbmoIfpopgnLGZ1bmN0aW9uKCl7XG4gICAgZGlhbG9nLmFsZXJ0KCflrZDmoYblhoXlrrknLCcnKTtcbiAgICBpZihmaXJzdCl7XG4gICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn0pLmFkZEV4YW1wbGUoJ+WKqOaAgeiwg+aVtOW8ueahhuWkp+Wwjy1iYXNlRm9udFNpemUtMzInLCdhZGp1c3QtZnQtMzInLGZ1bmN0aW9uKCl7XG5cbiAgbG9jYXRpb24uaHJlZiA9ICdodHRwOi8vbG9jYWxob3N0OjgwOTkvZXhhbXBsZS9pbmRleC5odG1sP2Jhc2VGb250U2l6ZT0zMic7XG59KS5hZGRFeGFtcGxlKCfliqjmgIHosIPmlbTlvLnmoYblpKflsI8t5q2j5bi45aSn5bCPLWJhc2VGb250U2l6ZS0xNicsJ2FkanVzdC1mdC0xNicsZnVuY3Rpb24oKXtcblxuICBsb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5OS9leGFtcGxlL2luZGV4Lmh0bWw/YmFzZUZvbnRTaXplPTE2Jztcbn0pLmFkZEV4YW1wbGUoJ+WIm+W7uuayoeacieaMiemSrueahOW8ueahhicsJ25vLWJ0bi1kaWFsb2cnLGZ1bmN0aW9uKCl7XG5cbiAgY3JlYXRlTm9CdG5EaWFsb2coJ+ivpuaDhScpXG59KVxuXG5jb25zdCB2YyA9IHV0aWxzLmdldFVybFBhcmFtKCd2YycpICogMSxcbiAgICAgIHR1cm5UbyA9IHV0aWxzLmdldFVybFBhcmFtKCd0dXJuVG8nKTtcblxuZGlhbG9nLmNvbmZpZyh7XG4gIHVzZUhhc2g6dHJ1ZSxcbiAgYmFzZUZvbnRTaXplOiB1dGlscy5nZXRVcmxQYXJhbSgnYmFzZUZvbnRTaXplJykqMSxcbiAgbm90aWZ5QmFja3ByZXNzOiBmbHltZVV0aWxzLm5vdGlmeUJhY2twcmVzcyxcbiAgYmFja1ByZXNzKCl7XG4gICAgRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlLmJhY2tQcmVzcygpO1xuICB9LyosXG4gIHVzZUJhY2tncm91bmQ6IGZhbHNlKi9cbn0pO1xuXG5pZih2YyA+PSA2MTIgJiYgdHVyblRvID09ICdhJyl7XG4gIGRpYWxvZy5hbGVydCgn6L+b5YWl6aG16Z2i5ZCO6ams5LiK5omT5byA5by55qGGJyk7XG59XG53aW5kb3cub25XaW5kb3dDaGFuZ2VkID0gZnVuY3Rpb24oKXtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVOb0J0bkRpYWxvZyhjb250ZW50LHRpdGxlLGNhbGxiYWNrLGRvbSxjbHMpe1xuICAgIHZhciBjbHogPSBjb250ZW50LmNsYXp6ID8gY29udGVudC5jbGF6eiA6IChjbHMgPyBjbHMgOiAnJyk7XG5cbiAgICBjbHogKz0gJyBhbGVydC1kaWFsb2cnO1xuXG4gICAgaWYodHlwZW9mIGNvbnRlbnQgIT09ICdvYmplY3QnKXtcbiAgICAgIGNvbnRlbnQgPSB1dGlscy5jcmVhdGVQYXJhbXMoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgICAgIG9rQ2FsbGJhY2s6Y2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogZG9tXG4gICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZighY29udGVudC50aXRsZSlcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XG4gICAgZWxzZVxuICAgICAgY2x6ICs9ICcgZGxnLWhhcy10aXRsZSc7XG5cbiAgICBjb250ZW50LmNsYXp6ID0gY2x6O1xuICAgIHJldHVybiBkaWFsb2coY29udGVudCk7XG4gIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9leGFtcGxlL2VudHJ5LmpzIiwiXG52YXIgTW9kYWxEaWFsb2cgPSByZXF1aXJlKCcuL21vZGFsLmpzJyk7XG4vLyB2YXIgaGlzdG9yeVBsdWdpbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy9oaXN0b3J5LmpzJyk7XG52YXIgYmFja1ByZXNzUGx1Z2luID0gcmVxdWlyZSgnLi9wbHVnaW5zL2JhY2tQcmVzczIuanMnKTtcblxuTW9kYWxEaWFsb2cuZGVmYXVsdENvbmZpZy51c2VIYXNoID0gdHJ1ZTtcblxuLy8gaWYod2luZG93LkV2ZW50SmF2YXNjcmlwdEludGVyZmFjZSAmJiB0eXBlb2Ygd2luZG93LkV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5saXN0ZW5CYWNrUHJlc3MgPT0gJ2Z1bmN0aW9uJylcbiAgTW9kYWxEaWFsb2cuYWRkUGx1Z2luKGJhY2tQcmVzc1BsdWdpbik7XG4vLyBlbHNlXG4vLyAgIE1vZGFsRGlhbG9nLmFkZFBsdWdpbihoaXN0b3J5UGx1Z2luKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbERpYWxvZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhbG9nV2l0aEhhc2guanMiLCJ2YXIgYmFzZUNzcyA9IHJlcXVpcmUoJy4vY3NzL2Jhc2UubGVzcycpO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL2RvbS5qcycpO1xudmFyIHNjcm9sbERsZyA9IHJlcXVpcmUoJy4vZGxnc2Nyb2xsLmpzJyk7XG52YXIgXyA9IHtcbiAgYXNzaWduOiB1dGlscy5hc3NpZ25cbn0sIHdpbkgsIHdpblc7XG5cbmZ1bmN0aW9uIG5vb3AoKXt9XG5cbi8v5Yqo5oCB5o+S5YWlY3Nz5qC35byPXG5mdW5jdGlvbiBpbnNlcnRTdHlsZVRvSGVhZChiYXNlRm9udFNpemUpe1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIHN0eWxlLmlubmVySFRNTCA9IHV0aWxzLmZuVGVtcGxhdGUoXG4gICAgYmFzZUNzcyxcbiAgICB7XG4gICAgICByZW06IGZ1bmN0aW9uKHB4KXtcbiAgICAgICAgcmV0dXJuIHB4LnJlcGxhY2UoLyhcXGQrKXB4LyxmdW5jdGlvbihleHByLCB2YWwpe1xuICAgICAgICAgIHJldHVybiAodmFsICoxIC8gYmFzZUZvbnRTaXplKSArICdyZW0nO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgdmFyIGhlYWREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gIHZhciBmaXJzdExpbmsgPSBoZWFkRG9tLnF1ZXJ5U2VsZWN0b3IoJ2xpbmsnKTtcblxuICBpZighZmlyc3RMaW5rKVxuICAgIGhlYWREb20uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICBlbHNlXG4gICAgaGVhZERvbS5pbnNlcnRCZWZvcmUoc3R5bGUsIGZpcnN0TGluayk7XG5cbn1cblxuLypcbueUn+aIkOWvueivneahhuaooeadv+WGheWuuVxuICovXG4gIGZ1bmN0aW9uIGdldEh0bWxDb250ZW50KG9wdGlvbnMpe1xuICAgIHZhciB0ZW1wbGF0ZUh0bWwgPSBbXSxcbiAgICAgICAgaGVhZGVyID0gb3B0aW9ucy5oZWFkZXI7XG5cbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPGRpdiBjbGFzcz1cInJjLW1vZGFsXCI+PGRpdiBjbGFzcz1cImRpYWxvZy1tYXNrXCI+PC9kaXY+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyAnICsgb3B0aW9ucy5jbGF6eiArICdcIj48ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nLW1haW5cIj4nKTtcbiAgICBpZihvcHRpb25zLnRpdGxlICE9IG51bGwgJiYgb3B0aW9ucy50aXRsZSAhPSAnJyl7XG4gICAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPGhlYWRlcj4nICsgdXRpbHMucmVwbGFjZVRlbWxhdGUoaGVhZGVyLG9wdGlvbnMpICsgJzwvaGVhZGVyPicpO1xuICAgIH1cbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPHNlY3Rpb24+PGRpdiBjbGFzcz1cImRpYWxvZy1jb250ZW50XCI+PC9kaXY+PC9zZWN0aW9uPjxmb290ZXI+Jyk7XG4gICAgdGVtcGxhdGVIdG1sLnB1c2goY3JlYXRlQnV0dG9ucy5jYWxsKHRoaXMsb3B0aW9ucykpO1xuICAgIHRlbXBsYXRlSHRtbC5wdXNoKCc8L2Zvb3Rlcj48L2Rpdj48L2Rpdj48L2Rpdj4nKTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZUh0bWwuam9pbignJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemVXaW4oKXtcbiAgICB3aW5IID0gd2luZG93LmlubmVySGVpZ2h0ID8gd2luZG93LmlubmVySGVpZ2h0IDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgd2luVyA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICB9XG4gIC8vIHV0aWxzLmJpbmRFdmVudCh3aW5kb3csJ3Jlc2l6ZScscmVzaXplV2luKTtcbi8vVE9ETzpcbiAgLy8gcmVzaXplV2luKCk7XG4gIC8qXG4gIOWIm+W7uuW6lemDqOaMiemSrlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlQnV0dG9ucyhvcHRpb25zKXtcbiAgICB2YXIgYnRucyA9IG9wdGlvbnMuYnV0dG9ucyB8fCBbXSxcbiAgICAgICAgdGVtcGxhdGUgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ7Y2xzfVwiIGRhdGEtaWQ9XCJ7aWR9XCIgPntuYW1lfTwvYnV0dG9uPicsXG4gICAgICAgIGJ0blRtcGxzID0gJycsXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBvbmVCdG5DbHo9Jyc7XG5cbiAgICBpZihvcHRpb25zLmNhbmNlbENhbGxiYWNrKXtcbiAgICAgIGJ0bnMucHVzaCh7XG4gICAgICAgIGlkOiAnY2FuY2VsJyxcbiAgICAgICAgbmFtZTogb3B0aW9ucy5jYW5jZWxTdHIsXG4gICAgICAgIGNhbGxiYWNrOiBvcHRpb25zLmNhbmNlbENhbGxiYWNrLFxuICAgICAgICBjbHM6IFwiY2FuY2xlLWJ0blwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihidG5zLmxlbmd0aCA9PTApXG4gICAgICBvbmVCdG5DbHogPSAnIG1vZGFsLWRpYWxvZy1vbmVidG4nO1xuXG4gICAgaWYob3B0aW9ucy5va0NhbGxiYWNrKXtcbiAgICAgIGJ0bnMucHVzaCh7XG4gICAgICAgIGlkOiAnb2snLFxuICAgICAgICBuYW1lOiBvcHRpb25zLnN1cmVTdHIsXG4gICAgICAgIGNhbGxiYWNrOiBvcHRpb25zLm9rQ2FsbGJhY2ssXG4gICAgICAgIGNsczogXCJzdXJlLWJ0blwiICsgb25lQnRuQ2x6XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLnJldmVyc2UpXG4gICAgICBidG5zID0gYnRucy5yZXZlcnNlKCk7XG5cbiAgICBidG5zLmZvckVhY2goZnVuY3Rpb24oaXRlbSxpbmRleCl7XG4gICAgICBpZigoYnRucy5sZW5ndGggLSAxKSA9PSBpbmRleClcbiAgICAgICAgaXRlbS5jbHMgKz0gJyBsYXN0JztcbiAgICAgIGJ0blRtcGxzICs9IHV0aWxzLnJlcGxhY2VUZW1sYXRlKHRlbXBsYXRlLGl0ZW0pO1xuICAgICAgc2VsZi5jYWxsYmFja3NbaXRlbS5pZF0gPSBpdGVtLmNhbGxiYWNrO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJ0blRtcGxzO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChkb20sb3B0aW9ucyl7XG4gICAgICBpZihvcHRpb25zLnNlbGVjdG9yKXtcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiZGlhbG9nLXRhcmdldCByZXBsYWNlXCIpLFxuICAgICAgICAgICAgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yLFxuICAgICAgICAgICAgb3JpRGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUoc2VsZWN0b3IpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKTtcblxuICAgICAgICBpZihzZWxlY3Rvci5wYXJlbnROb2RlKXtcbiAgICAgICAgICBzZWxlY3Rvci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb21tZW50LHNlbGVjdG9yKTtcbiAgICAgICAgICBkb20uX2NvbW1lbnREb20gPSBjb21tZW50O1xuICAgICAgICAgIGlmKG9yaURpc3BsYXkgPT0gJ25vbmUnKXtcbiAgICAgICAgICAgIHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkb20uX29yaWdpbkRpc3BsYXkgPSBvcmlEaXNwbGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgZG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLmFwcGVuZENoaWxkKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgICAgZG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLmlubmVySFRNTCA9IG9wdGlvbnMuY29udGVudC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnPGJyLz4nKTtcbiAgICB9XG4vKipcbiAqIFtNb2RhbERpYWxvZyBkZXNjcmlwdGlvbl1cbiAqIGNsYXp6OiDlvLnlh7rmoYbnmoRjc3PnsbvlkI1cbiAqIGNhbmNlbFN0ciDlj5bmtojmjInpkq7nmoTmjInpkq7lkI1cbiAqIHN1cmVTdHIg56Gu5a6a5oyJ6ZKu55qE5oyJ6ZKu5ZCNXG4gKiB0aXRsZSDlvLnlh7rmoYbnmoTmoIfpophcbiAqIGhlYWRlciDooajnpLrlpLTpg6jnmoRodG1s5qih5p2/XG4gKiBva0NhbGxiYWNrIOehruWumuaMiemSruWbnuiwg+WHveaVsFxuICogY2FuY2VsQ2FsbGJhY2sg5Y+W5raI5oyJ6ZKu5Zue6LCD5Ye95pWwXG4gKiBidXR0b25zIFt7Y2xzOidzdXJlJyxjYWxsYmFjazpmbixuYW1lOiduYW1lJ31dXG4gKiB1c2VCYWNrZ3JvdW5kIOWNleWHu+iDjOaZr+aXtuaJp+ihjOeahOWbnuiwg+WHveaVsFxuICovXG4gIHZhciBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgICAgIGNsYXp6OiAnZGlhbG9nLXRoZW1lJyxcbiAgICAgICAgY2FuY2VsU3RyOiAn5Y+W5raIJyxcbiAgICAgICAgc3VyZVN0cjogJ+ehruWumicsXG4gICAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgICBoZWFkZXI6ICc8c3BhbiBjbGFzcz1cImRpYWxvZy10aXRsZVwiPnt0aXRsZX08L3NwYW4+JyxcbiAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICAgICAgICBidXR0b25zOiBudWxsLFxuICAgICAgICB1c2VCYWNrZ3JvdW5kOiAnY2FuY2VsJyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYmVmb3JlTGlzdGVuZXJzID0gW10sXG4gICAgICBhZnRlckxpc3RlbmVycyA9IFtdLFxuICAgICAgY2xvc2VkTGlzdGVuZXJzID0gW10sXG4gICAgICBfY291bnQgPSAwO1xuXG4gIHZhciBNb2RhbERpYWxvZyA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIHZhciBkaWFsb2csXG4gICAgICAgIGlkO1xuXG4gICAgb3B0aW9ucyA9IF8uYXNzaWduKHt9LGRlZmF1bHRTZXR0aW5ncyxvcHRpb25zKTtcblxuICAgIG9wdGlvbnMuX2NhbGxCYWNrcyA9IG9wdGlvbnMuX2NhbGxCYWNrcyB8fCB7fTtcbiAgICBpZCA9IG9wdGlvbnMuaWQgPSBvcHRpb25zLmlkIHx8IF9jb3VudDtcblxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucy5fY2FsbEJhY2tzW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJlZm9yZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICAgIGxpc3RlbmVyKG9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdFtpZF0gPSBkaWFsb2cgPSBuZXcgTW9kYWxEaWFsb2cuY3JlYXRlKG9wdGlvbnMpO1xuXG4gICAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCArKztcblxuICAgIGFmdGVyTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpe1xuICAgICAgbGlzdGVuZXIoZGlhbG9nKTtcbiAgICB9KTtcblxuICAgIF9jb3VudCArKztcblxuICAgIHJldHVybiBkaWFsb2c7XG4gIH07XG5cbiAgTW9kYWxEaWFsb2cuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgdmFyIGRpYWxvZ0RvbSxcbiAgICAgICAgZGxnUG9zLFxuICAgICAgICBkbGdNYWluRG9tLFxuICAgICAgICBvZmZzZXRIO1xuXG4gICAgdGhpcy5jYWxsYmFja3MgPSBvcHRpb25zLl9jYWxsQmFja3M7XG4gICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG5cbiAgICBkaWFsb2dEb20gPSB1dGlscy5jcmVhdGVIdG1sRG9tKGdldEh0bWxDb250ZW50LmNhbGwodGhpcyxvcHRpb25zKSk7XG5cbiAgICBpbnNlcnRDb250ZW50KGRpYWxvZ0RvbSxvcHRpb25zKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZ0RvbSk7XG5cbiAgICBvZmZzZXRIID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIHRoaXMuZGxnU2Nyb2xsID0gc2Nyb2xsRGxnLmluaXRUb3VjaChkaWFsb2dEb20pO1xuXG4gICAgZGxnTWFpbkRvbSA9IGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nJyk7XG4gICAgZGxnUG9zID0gdGhpcy5nZXRQb3MoZGxnTWFpbkRvbSk7XG5cbiAgICBfLmFzc2lnbihkbGdNYWluRG9tLnN0eWxlLHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBsZWZ0OiBkbGdQb3MubGVmdCArICdweCcsXG4gICAgICB0b3A6IGRsZ1Bvcy50b3AgKyAncHgnXG4gICAgfSk7XG5cbiAgICBpZihvcHRpb25zLmFuaW1hdGVkKVxuICAgICAgZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2ctbWFpbicpLmNsYXNzTmFtZSArPSAnIGRsZy1hbmltYXRpb24nO1xuXG4gICAgaWYob3B0aW9ucy51c2VCYWNrZ3JvdW5kKXtcbiAgICAgIHZhciB1c2VyYmdyID0gb3B0aW9ucy51c2VCYWNrZ3JvdW5kO1xuICAgICAgaWYoIW9wdGlvbnMuX2NhbGxCYWNrc1t1c2VyYmdyXSl7XG4gICAgICAgIG9wdGlvbnMuX2NhbGxCYWNrc1t1c2VyYmdyXSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgIH1cbiAgICAgIGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLW1hc2snKS5kYXRhc2V0LmlkID0gb3B0aW9ucy51c2VCYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLW1hc2snKS5zdHlsZS5oZWlnaHQgPSBvZmZzZXRIICsgJ3B4JztcblxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMuX2NsaWNrRXZlbnQsZGlhbG9nRG9tLG9wdGlvbnMpO1xuICAgIHRoaXMuZGlhbG9nRG9tID0gZGlhbG9nRG9tO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZ0RvbSwnY2xpY2snLHRoaXMuX2V2ZW50TGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIF8uYXNzaWduKE1vZGFsRGlhbG9nLmNyZWF0ZS5wcm90b3R5cGUse1xuICAgIGNhbGxiYWNrczogbnVsbCxcbiAgICBnZXRQb3M6IGZ1bmN0aW9uKGRpYWxvZ0RvbSl7XG4gICAgICBkaWFsb2dEb20gPSBkaWFsb2dEb20gfHwgdGhpcy5kaWFsb2dEb207XG4gICAgICBpZighZGlhbG9nRG9tKXtcbiAgICAgICAgcmV0dXJuIHtsZWZ0OjAsdG9wOjB9O1xuICAgICAgfVxuICAgICAgcmVzaXplV2luKCk7XG4gICAgICB2YXIgZGxnSCA9IGRpYWxvZ0RvbS5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgZGxnVyA9IGRpYWxvZ0RvbS5vZmZzZXRXaWR0aDtcbiAgICAgIHZhciBkbGdQb3NZID0gKHdpbkggLSBkbGdIID49IDAgKSA/ICh3aW5IIC0gZGxnSCkvMiA6IHdpbkgqMC4xO1xuICAgICAgdmFyIGRsZ1Bvc1ggPSAod2luVyAtIGRsZ1cgPj0gMCApID8gKHdpblcgLSBkbGdXKS8yIDogd2luVyowLjE7XG5cbiAgICAgIHJldHVybiB7bGVmdDogZGxnUG9zWCwgdG9wOiBkbGdQb3NZfTtcbiAgICB9LFxuICAgIGNsb3NlRGlhbG9nOmZ1bmN0aW9uKGlzTm90SW52b2tlKXtcbiAgICAgIHZhciBkaWFsb2dEb20gPSB0aGlzLmRpYWxvZ0RvbSxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgIF9jb21tZW50RG9tLFxuICAgICAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZighZGlhbG9nRG9tKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgICAgdGhpcy5yZW1vdmVEaWFsb2coZGlhbG9nRG9tLCBvcHRpb25zKTtcblxuICAgICAgaWYob3B0aW9ucy5zZWxlY3RvciAmJiBkaWFsb2dEb20uX2NvbW1lbnREb20pe1xuICAgICAgICBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3I7XG4gICAgICAgIF9jb21tZW50RG9tID0gZGlhbG9nRG9tLl9jb21tZW50RG9tO1xuXG4gICAgICAgIHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSBkaWFsb2dEb20uX29yaWdpbkRpc3BsYXk7XG4gICAgICAgIF9jb21tZW50RG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHNlbGVjdG9yLF9jb21tZW50RG9tKTtcblxuICAgICAgICBkaWFsb2dEb20uX2NvbW1lbnREb20gPSBudWxsO1xuICAgICAgICBkaWFsb2dEb20uX29yaWdpbkRpc3BsYXkgPSBudWxsO1xuICAgICAgfVxuICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nRG9tLCdjbGljaycsdGhpcy5fZXZlbnRMaXN0ZW5lcik7XG4gICAgICAvLyBkaWFsb2dEb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaWFsb2dEb20pO1xuICAgICAgdGhpcy5kbGdTY3JvbGwuZGVzdHJveVNjcm9sbCAmJiB0aGlzLmRsZ1Njcm9sbC5kZXN0cm95U2Nyb2xsKCk7XG5cbiAgICAgIGlmKCFpc05vdEludm9rZSl7XG4gICAgICAgIGNsb3NlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICAgICAgICBsaXN0ZW5lcihzZWxmKTtcbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYob3B0aW9ucy5jYW5jZWxDYWxsYmFjaylcbiAgICAgICAgICBvcHRpb25zLmNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgICAgdGhpcy5kaWFsb2dEb20gPSBkaWFsb2dEb20gPSBudWxsO1xuXG4gICAgICBvcHRpb25zLmNvbXBsZXRlICYmIG9wdGlvbnMuY29tcGxldGUoKTtcblxuICAgICAgZGVsZXRlIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbdGhpcy5pZF07XG5cbiAgICAgIE1vZGFsRGlhbG9nLm1vZGFsQ291bnQgLS07XG4gICAgfSxcbiAgICByZW1vdmVEaWFsb2c6IGZ1bmN0aW9uKGRsZ0RvbSl7XG4gICAgICB1dGlscy5iaW5kRXZlbnQoZGxnRG9tLCAndHJhbnNpdGlvbmVuZCcsIF9yZW1vdmVUcmFuc2l0aW9uKVxuICAgICAgdXRpbHMuYmluZEV2ZW50KGRsZ0RvbSwnd2Via2l0VHJhbnNpdGlvbkVuZCcsIF9yZW1vdmVUcmFuc2l0aW9uKTtcblxuICAgICAgZGxnRG9tLnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgICBmdW5jdGlvbiBfcmVtb3ZlVHJhbnNpdGlvbigpe1xuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkbGdEb20sJ3RyYW5zaXRpb25lbmQnLF9yZW1vdmVUcmFuc2l0aW9uKTtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnRG9tLCd3ZWJraXRUcmFuc2l0aW9uRW5kJyxfcmVtb3ZlVHJhbnNpdGlvbik7XG4gICAgICAgIGRsZ0RvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRsZ0RvbSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZWZyZXNoOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGRpYWxvZ0RvbSA9IHRoaXMuZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cnKSxcbiAgICAgICAgICBkbGdQb3MgPSB0aGlzLmdldFBvcyhkaWFsb2dEb20pO1xuXG4gICAgICBfLmFzc2lnbihkaWFsb2dEb20uc3R5bGUse1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBsZWZ0OiBkbGdQb3MubGVmdCArICdweCcsXG4gICAgICAgIHRvcDogZGxnUG9zLnRvcCArICdweCdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kbGdTY3JvbGwucmVmcmVzaCgpO1xuICAgIH0sXG4gICAgX2NsaWNrRXZlbnQ6IGZ1bmN0aW9uKGUsZGlhbG9nRG9tLG9wdGlvbnMpe1xuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxuICAgICAgICAgIGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxuICAgICAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZih0eXBlb2YgdGhpcy5jYWxsYmFja3NbaWRdID09ICdmdW5jdGlvbicgJiYgIXRoaXMuY2FsbGJhY2tzW2lkXS5jYWxsKHRoaXMsZSkpe1xuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgc2VsZi5jbG9zZURpYWxvZygpO1xuICAgICAgICAvLyB9LDEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJveHk6IGZ1bmN0aW9uKGZuKXtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICB3cmFwQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgICBpZih3cmFwQXJncy5sZW5ndGggPiAwKVxuICAgICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdCh3cmFwQXJncyk7XG5cbiAgICAgICAgZm4uYXBwbHkoc2VsZixhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIE1vZGFsRGlhbG9nLmFsZXJ0ID0gZnVuY3Rpb24oY29udGVudCx0aXRsZSxjYWxsYmFjayxkb20sY2xzKXtcbiAgICB2YXIgY2x6ID0gY29udGVudC5jbGF6eiA/IGNvbnRlbnQuY2xhenogOiAoY2xzID8gY2xzIDogJycpO1xuXG4gICAgY2x6ICs9ICcgYWxlcnQtZGlhbG9nJztcblxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XG4gICAgICBjb250ZW50ID0gdXRpbHMuY3JlYXRlUGFyYW1zKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOmNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IGRvbVxuICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29udGVudC5va0NhbGxiYWNrID0gY29udGVudC5va0NhbGxiYWNrIHx8IG5vb3A7XG5cbiAgICBpZighY29udGVudC50aXRsZSlcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XG4gICAgZWxzZVxuICAgICAgY2x6ICs9ICcgZGxnLWhhcy10aXRsZSc7XG5cbiAgICBjb250ZW50LmNsYXp6ID0gY2x6O1xuICAgIHJldHVybiBNb2RhbERpYWxvZyhjb250ZW50KTtcbiAgfVxuXG4gIE1vZGFsRGlhbG9nLmNvbmZpcm0gPSBmdW5jdGlvbihjb250ZW50LHN1cmVGbix0aXRsZSxidFRleHQxLGJ0VGV4dDIsY2FuY2VsRm4sY2xzKXtcbiAgICB2YXIgY2x6ID0gY29udGVudC5jbGF6eiA/IGNvbnRlbnQuY2xhenogOiAoY2xzID8gY2xzIDogJycpO1xuXG4gICAgY2x6ICs9ICcgY29uZmlybS1kaWFsb2cnO1xuXG4gICAgaWYodHlwZW9mIGNvbnRlbnQgIT09ICdvYmplY3QnKXtcbiAgICAgIGNvbnRlbnQgPSB1dGlscy5jcmVhdGVQYXJhbXMoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgICAgIG9rQ2FsbGJhY2s6c3VyZUZuLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsQ2FsbGJhY2s6Y2FuY2VsRm4sXG4gICAgICAgICAgICAgICAgICBzdXJlU3RyOiBidFRleHQyLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsU3RyOmJ0VGV4dDFcbiAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKCFjb250ZW50LnRpdGxlKVxuICAgICAgY2x6ICs9ICcgZGxnLW5vLXRpdGxlJztcbiAgICBlbHNlXG4gICAgICBjbHogKz0gJyBkbGctaGFzLXRpdGxlJztcblxuICAgIGNvbnRlbnQub2tDYWxsYmFjayA9IGNvbnRlbnQub2tDYWxsYmFjayB8fCBub29wO1xuICAgIGNvbnRlbnQuY2FuY2VsQ2FsbGJhY2sgPSBjb250ZW50LmNhbmNlbENhbGxiYWNrIHx8IG5vb3A7XG4gICAgY29udGVudC5jbGF6eiA9IGNsejtcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coY29udGVudCk7XG4gIH07XG5cbiAgTW9kYWxEaWFsb2cuYWZ0ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICBhZnRlckxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBhZnRlckxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgIHJldHVybiBpdGVtICE9IGxpc3RlbmVyO1xuICAgICAgfSlcbiAgICB9XG4gIH07XG5cbiAgTW9kYWxEaWFsb2cucHJlTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgYmVmb3JlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICBiZWZvcmVMaXN0ZW5lcnMgPSBiZWZvcmVMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmNsb3NlZExpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xuICAgIGNsb3NlZExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgY2xvc2VkTGlzdGVuZXJzID0gY2xvc2VkTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICB2YXIgX3BsdWdpbnMgPSBbXTtcblxuICBNb2RhbERpYWxvZy5hZGRQbHVnaW4gPSBmdW5jdGlvbihmbil7XG4gICAgX3BsdWdpbnMucHVzaChmbik7XG4gIH07XG5cbiAgTW9kYWxEaWFsb2cuZGVmYXVsdENvbmZpZyA9IHt9O1xuICB2YXIgaXNDb25maWcgPSBmYWxzZTtcblxuICBNb2RhbERpYWxvZy5jb25maWcgPSBmdW5jdGlvbihjb25maWcpe1xuICAgIHZhciBvcHRpb25zID0gdXRpbHMuYXNzaWduKHt9LE1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcsY29uZmlnKTtcblxuICAgIE1vZGFsRGlhbG9nLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIGlmKGlzQ29uZmlnKXtcbiAgICAgIGNvbnNvbGUuaW5mbygnbW9kYWxkaWFsZyBvbmx5IGNhbiBjb25maWcgb25jZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcih2YXIgaT0wLCBsZW49X3BsdWdpbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuICAgICAgX3BsdWdpbnNbaV0oTW9kYWxEaWFsb2csIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluc2VydFN0eWxlVG9IZWFkKG9wdGlvbnMuYmFzZUZvbnRTaXplIHx8IDE2KTtcblxuICAgIGlzQ29uZmlnID0gdHJ1ZTtcbiAgfVxuXG4gIHV0aWxzLmJpbmRFdmVudCh3aW5kb3csIFwib3JpZW50YXRpb25jaGFuZ2VcIixmdW5jdGlvbigpe1xuICAgIE9iamVjdC5rZXlzKE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3QpLmZvckVhY2goZGlhbG9nPT57XG4gICAgICBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W2RpYWxvZ10ucmVmcmVzaCgpO1xuICAgIH0pO1xuICB9KTtcblxuICBNb2RhbERpYWxvZy5kaWFsb2dMaXN0ID0ge307XG4gIE1vZGFsRGlhbG9nLm1vZGFsQ291bnQgPSAwO1xuXG5Nb2RhbERpYWxvZy5Eb21VdGlscyA9IHV0aWxzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsRGlhbG9nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGFsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5yYy1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQ7XFxufVxcbi5yYy1tb2RhbCAubW9kYWwtZGlhbG9nIHtcXG4gIGJvcmRlci1yYWRpdXM6ICRmbi5yZW0oIDFweCApO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6ICRmbi5yZW0oIDMyNHB4ICk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHotaW5kZXg6IDkwMDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1uby10aXRsZSBoZWFkZXIge1xcbiAgaGVpZ2h0OiAkZm4ucmVtKCAyOHB4ICk7XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLW5vLXRpdGxlIC5kaWFsb2ctY29udGVudCB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLm1vZGFsLWRpYWxvZy5kbGctbm8tdGl0bGUgc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1oYXMtdGl0bGUgaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDAgMCAkZm4ucmVtKCAxMHB4ICkgMDtcXG4gIGZvbnQtc2l6ZTogJGZuLnJlbSggMThweCApO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBzZWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZGlhbG9nLW1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogOTAwMDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBmb250LXNpemU6ICRmbi5yZW0oIDE2cHggKTtcXG4gIGJvcmRlci1yYWRpdXM6ICRmbi5yZW0oIDNweCApO1xcbiAgcGFkZGluZy10b3A6ICRmbi5yZW0oIDI4cHggKTtcXG59XFxuLm1vZGFsLWRpYWxvZyAuZGlhbG9nLXRpdGxlIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5kaWFsb2ctY29udGVudCB7XFxuICBjb2xvcjogIzMyMzIzMjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcbi5tb2RhbC1kaWFsb2cgZW0ge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4ubW9kYWwtZGlhbG9nIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogMHB4ICRmbi5yZW0oIDI2cHggKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LWhlaWdodDogJGZuLnJlbSggMTg4cHggKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IHNvbGlkICNkNWQ1ZDU7XFxuICBib3JkZXItdG9wLXdpZHRoOiAkZm4ucmVtKCAxcHggKTtcXG4gIGhlaWdodDogJGZuLnJlbSggNDVweCApO1xcbiAgbGluZS1oZWlnaHQ6ICRmbi5yZW0oIDQ1cHggKTtcXG4gIG1hcmdpbi10b3A6ICRmbi5yZW0oIDIwcHggKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIGJ1dHRvbiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6ICRmbi5yZW0oIDE2cHggKTtcXG4gIGhlaWdodDogJGZuLnJlbSggNDVweCApO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b24ubW9kYWwtZGlhbG9nLW9uZWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjZDVkNWQ1O1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAkZm4ucmVtKCAxcHggKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogMHB4O1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b24ubGFzdDphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuc3VyZS1idG4sXFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLmNhbmNsZS1idG4ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuY2FuY2xlLWJ0biB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLnN1cmUtYnRuIHtcXG4gIGNvbG9yOiAjNTE3YmQxO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBmb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBmb290ZXIgLnN1cmUtYnRuIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5kaWFsb2ctbWFzayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDg5OTk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQVFNQUFBQzMvRjMrQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFOUVRGUkZBQUFBcDNvOTJnQUFBQUYwVWs1VGdLMWVXMFlBQUFBTFNVUkJWQWpYWTJEQUJ3QUFIZ0FCYm9WSE1nQUFBQUJKUlU1RXJrSmdnZz09KTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvYmFzZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVIdG1sRG9tOiAoZnVuY3Rpb24gY3JlYXRlSHRtbCgpe1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHJldHVybiBmdW5jdGlvbihodG1sKXtcbiAgICAgIHZhciB0ZW1wO1xuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICB0ZW1wID0gZGl2LmNoaWxkcmVuWzBdO1xuICAgICAgZGl2LnJlbW92ZUNoaWxkKHRlbXApO1xuICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuICB9KSgpLFxuICByZXBsYWNlVGVtbGF0ZTogZnVuY3Rpb24oc3RyLGRhdGEpe1xuICAgIHZhciByZWd4ID0gbmV3IFJlZ0V4cCgveyguKj8pfS9nKSxcbiAgICAgICAgdGVtcDtcbiAgICB3aGlsZSh0ZW1wID0gcmVneC5leGVjKHN0cikpe1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UodGVtcFswXSxkYXRhW3RlbXBbMV1dIHx8ICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFxyXFxuXSovZywnJyk7XG4gIH0sXG4gIGZuVGVtcGxhdGU6IGZ1bmN0aW9uKHN0ciwgZGF0YSl7XG4gICAgdmFyIHJlZ3ggPSBuZXcgUmVnRXhwKC9cXCRmblxcLiguKz8pXFwoKC4qPylcXCkvZyk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocmVneCwgZnVuY3Rpb24oZXhwciwgZm4sIHZhbCl7XG4gICAgICByZXR1cm4gZGF0YVtmbl0odmFsKTtcbiAgICB9KS5yZXBsYWNlKC9bXFxyXFxuXSovZywnJyk7O1xuXG4gIH0sXG4gIGJpbmRFdmVudDogZnVuY3Rpb24oZG9tLG5hbWUsZm4pe1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyXG4gICAgICA/IGRvbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsZm4sZmFsc2UpXG4gICAgICA6IGRvbS5hdHRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xuICB9LFxuICB1bkJpbmRFdmVudDogZnVuY3Rpb24oZG9tLG5hbWUsZm4pe1xuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICA/IGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsZm4sZmFsc2UpXG4gICAgICA6IGRvbS5kZXRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xuICB9LFxuICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwmKVwiICsga2V5ICsgXCI9KFteJl0qKSgmfCQpXCIsIFwiaVwiKTtcbiAgICAgIHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyICE9IG51bGwpIHJldHVybiBkZWNvZGVVUkkoclsyXSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgYXNzaWduOiBmdW5jdGlvbigpe1xuICAgIHZhciB0ZW1wID0gYXJndW1lbnRzWzBdO1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGZvcih2YXIgaT0wLGxlbj1hcmdzLmxlbmd0aDtpPGxlbjtpKyspe1xuICAgICAgdmFyIGl0ZW0gPSBhcmdzW2ldO1xuICAgICAgaWYoIWl0ZW0pXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgZm9yKHZhciBwIGluIGl0ZW0pe1xuICAgICAgICBpZihpdGVtLmhhc093blByb3BlcnR5KHApKXtcbiAgICAgICAgICB0ZW1wW3BdID0gaXRlbVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGVtcDtcbiAgfSxcbiAgY2xvc2VzdDogZnVuY3Rpb24oZG9tLGNscyl7XG4gICAgdmFyIGNsc1JlZ3ggPSBuZXcgUmVnRXhwKCcoXnxcXFxccyspJysgY2xzICsgJyhcXFxccyt8JCknKSxcbiAgICAgICAgdGFnUmVneCA9IG5ldyBSZWdFeHAoJ14nKyBjbHMgKyAnJCcpLFxuICAgICAgICBwYXJlbnQgPSBkb207XG5cbiAgICBpZih0ZXN0KGRvbSkpXG4gICAgICByZXR1cm4gZG9tO1xuXG4gICAgd2hpbGUoISEocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpICYmICBwYXJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPSAnaHRtbCcpe1xuICAgICAgaWYodGVzdChwYXJlbnQpKXtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgICBmdW5jdGlvbiB0ZXN0KGRvbSl7XG5cbiAgICAgIGlmKCEhZG9tLmNsYXNzTmFtZS5tYXRjaChjbHNSZWd4KSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfWVsc2UgaWYodGFnUmVneC50ZXN0KGRvbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlUGFyYW1zOiBmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIHJlcyA9IHt9O1xuXG4gICAgZm9yKHZhciBwIGluIHBhcmFtKXtcbiAgICAgIGlmKHBhcmFtLmhhc093blByb3BlcnR5KHApKXtcbiAgICAgICAgaWYodHlwZW9mIHBhcmFtW3BdICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICByZXNbcF0gPSBwYXJhbVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RvbS5qcyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4vZG9tLmpzJyk7XG5cbmZ1bmN0aW9uIGdldEhlaWdodChzZWwsaXNPdXRlcil7XG4gIHZhciBzZWN0aW9uU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHNlbCksXG4gICAgICBtYXJnaW5IID0gMDtcblxuICBpZihpc091dGVyKXtcbiAgICBtYXJnaW5IID0gc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKS5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgICAgICBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpLnJlcGxhY2UoJ3B4JywnJykqMVxuICB9XG4gIHJldHVybiAoXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMSArXG4gICAgICAgICAgc2VjdGlvblN0eWxlLnBhZGRpbmdUb3AucmVwbGFjZSgncHgnLCcnKSoxICtcbiAgICAgICAgICBzZWN0aW9uU3R5bGUucGFkZGluZ0JvdHRvbS5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIHNlY3Rpb25TdHlsZS5ib3JkZXJUb3BXaWR0aC5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIHNlY3Rpb25TdHlsZS5ib3JkZXJCb3R0b21XaWR0aC5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIG1hcmdpbkhcbiAgICAgICAgKTtcbn1cblxudmFyIGVhc2UgPSB7XG4gIGNpcmN1bGFyOiB7XG4gICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4xLCAwLjU3LCAwLjEsIDEpJ1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdFRvdWNoOiBmdW5jdGlvbihkaWFsb2cpe1xuICAgIHZhciBkbGdDb250ZW50ID0gIGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKSxcbiAgICAgICAgc2VjdGlvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyksXG4gICAgICAgIHNjcm9sbFRhcmdlU3R5bGUgPSBkbGdDb250ZW50LnN0eWxlLFxuICAgICAgICB3cmFwcGVySGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsJycpKjEsXG4gICAgICAgIG1heEhlaWdodCwgc3RhcnRQb3N4LCBzdGFydFBvc3ksIGlzVG91Y2gsXG4gICAgICAgIHN0YXJ0VGltZSwgZGlzdFksIGRpc3RYLFxuICAgICAgICBlbmRUaW1lID0gMCwgeCA9MCwgeSA9MCwgc3RhcnRYLCBzdGFydFksIGlzSW5UcmFuc2l0aW9uO1xuXG4gICAgbWF4SGVpZ2h0ID0gd3JhcHBlckhlaWdodCAtIGdldEhlaWdodChkbGdDb250ZW50LHRydWUpO1xuXG4gICAgc2Nyb2xsVGFyZ2VTdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSBlYXNlLmNpcmN1bGFyLnN0eWxlO1xuXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2htb3ZlJyxzdG9wU2Nyb2xsTW92ZSk7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3RyYW5zaXRpb25lbmQnLF90cmFuc2l0aW9uRW5kKTtcbiAgICB1dGlscy5iaW5kRXZlbnQoZGxnQ29udGVudCwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3RyYW5zaXRpb25FbmQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3lTY3JvbGw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2htb3ZlJyxzdG9wU2Nyb2xsTW92ZSk7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3RyYW5zaXRpb25lbmQnLF90cmFuc2l0aW9uRW5kKTtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnQ29udGVudCwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3RyYW5zaXRpb25FbmQpO1xuICAgICAgICBkbGdDb250ZW50ID0gc2VjdGlvbiA9IG51bGw7XG4gICAgICB9LFxuICAgICAgcmVmcmVzaDogZnVuY3Rpb24oKXtcbiAgICAgICAgd3JhcHBlckhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxO1xuICAgICAgICBtYXhIZWlnaHQgPSB3cmFwcGVySGVpZ2h0IC0gZ2V0SGVpZ2h0KGRsZ0NvbnRlbnQsdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0VG91Y2goZSl7XG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXG4gICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY2xvc2VzdChlLnRhcmdldCwnZGlhbG9nLWNvbnRlbnQnKSxcbiAgICAgICAgICBwb3M7XG5cbiAgICAgIGlmKCEhdGFyZ2V0KXtcbiAgICAgICAgaWYoaXNJblRyYW5zaXRpb24pe1xuICAgICAgICAgIF90cmFuc2l0aW9uVGltZSgpO1xuICAgICAgICAgIGlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgcG9zID0gZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xuICAgICAgICAgIHRyYW5zbGF0ZShNYXRoLnJvdW5kKHBvcy54KSwgTWF0aC5yb3VuZChwb3MueSkpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0UG9zeCA9IHRvdWNoLnBhZ2VYO1xuICAgICAgICBzdGFydFBvc3kgPSB0b3VjaC5wYWdlWTtcbiAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgZGlzdFggPSBkaXN0WSA9IDA7XG4gICAgICAgIHN0YXJ0WCA9IHg7XG4gICAgICAgIHN0YXJ0WSA9IHk7XG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlzVG91Y2ggPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcFNjcm9sbE1vdmUoZSl7XG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXG4gICAgICAgICAgcG9zWCA9IHRvdWNoLnBhZ2VYLFxuICAgICAgICAgIHBvc1kgPSB0b3VjaC5wYWdlWSxcbiAgICAgICAgICBub2RlTmFtZSA9IGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgdmFyIGRlbHRhWSA9IHBvc1kgLSBzdGFydFBvc3ksXG4gICAgICAgICAgZGVsdGFYID0gcG9zWCAtIHN0YXJ0UG9zeCxcbiAgICAgICAgICBuZXdZO1xuXG4gICAgICBzdGFydFBvc3ggPSBwb3NYO1xuICAgICAgc3RhcnRQb3N5ID0gcG9zWTtcblxuICAgICAgZGlzdFggKz0gZGVsdGFYO1xuICAgICAgZGlzdFkgKz0gZGVsdGFZO1xuXG4gICAgICBpZiggbm9kZU5hbWUgIT0gJ2lucHV0JyAmJiBub2RlTmFtZSAhPSAnc2VsZWN0JyAmJiBub2RlTmFtZSAhPSAndGV4dGFyZWEnKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCAodGltZXN0YW1wIC0gZW5kVGltZSA+IDMwMCAmJiBNYXRoLmFicyhkaXN0WSkgPCAxMCkgfHwgIWlzVG91Y2ggfHwgbWF4SGVpZ2h0ID49IDApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5ld1kgPSB5ICsgZGVsdGFZO1xuICAgICAgaWYgKCBuZXdZID4gMCB8fCBuZXdZIDwgbWF4SGVpZ2h0ICkge1xuICAgICAgICBuZXdZID0geSArIGRlbHRhWSAvIDM7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zbGF0ZShkbGdDb250ZW50LG5ld1kpO1xuXG4gICAgICBpZiAoIHRpbWVzdGFtcCAtIHN0YXJ0VGltZSA+IDMwMCApIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuICAgICAgICBzdGFydFggPSB4O1xuICAgICAgICBzdGFydFkgPSB5O1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b3VjaGVFbmQoZSl7XG4gICAgICB2YXIgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxuICAgICAgICAgIG5ld1kgPSBNYXRoLnJvdW5kKHkpLFxuICAgICAgICAgIHRpbWUgPSAwLFxuICAgICAgICAgIG1vbWVudHVtWTtcblxuICAgICAgc3RhcnRQb3N4ID0gbnVsbDtcbiAgICAgIHN0YXJ0UG9zeSA9IG51bGw7XG4gICAgICBlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIGlzSW5UcmFuc2l0aW9uID0gMDtcblxuICAgICAgaWYgKHJlc2V0UG9zaXRpb24oZGxnQ29udGVudCw1MDApIHx8IG1heEhlaWdodCA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2Nyb2xsVG8oZGxnQ29udGVudCwgbmV3WSk7XG5cbiAgICAgIGlmKGR1cmF0aW9uIDwgMzAwKXtcbiAgICAgICAgbW9tZW50dW1ZID0gbW9tZW50dW0oeSwgc3RhcnRZLCBkdXJhdGlvbik7XG4gICAgICAgIG5ld1kgPSBtb21lbnR1bVkuZGVzdGluYXRpb247XG4gICAgICAgIHRpbWUgPSBtb21lbnR1bVkuZHVyYXRpb247XG4gICAgICAgIGlzSW5UcmFuc2l0aW9uID0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBuZXdZICE9IHkgKSB7XG4gICAgICAgIHNjcm9sbFRvKGRsZ0NvbnRlbnQsIG5ld1ksdGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCxwb3N5LHRpbWUpe1xuICAgICAgdGltZSA9IHRpbWUgfHwgMDtcbiAgICAgIGlzSW5UcmFuc2l0aW9uID0gdGltZSA+IDA7XG4gICAgICBfdHJhbnNpdGlvblRpbWUodGltZSk7XG4gICAgICB0cmFuc2xhdGUodGFyZ2V0LHBvc3kpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSh0YXJnZXQsIHBvc3kpIHtcbiAgICAgIHNjcm9sbFRhcmdlU3R5bGUud2Via2l0VHJhbnNmb3JtICA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHBvc3kgKyAncHgsMHB4KSc7XG4gICAgICB5ID0gcG9zeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzZXRQb3NpdGlvbih0YXJnZXQsdGltZSl7XG4gICAgICB2YXIgcG9zWSA9IHk7XG5cbiAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XG5cbiAgICAgIGlmIChwb3NZID49IDAgKSB7XG4gICAgICAgIHBvc1kgPSAwO1xuICAgICAgfSBlbHNlIGlmIChwb3NZIDwgbWF4SGVpZ2h0ICkge1xuICAgICAgICBwb3NZID0gbWF4SGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAoIHBvc1kgPT0geSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzY3JvbGxUbyh0YXJnZXQsIHBvc1ksIHRpbWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9tZW50dW0oY3VycmVudCwgc3RhcnQsIHRpbWUpe1xuICAgICAgdmFyIGRpc3RhbmNlID0gY3VycmVudCAtIHN0YXJ0LFxuICAgICAgICAgIHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZSxcbiAgICAgICAgICBkZWNlbGVyYXRpb24gPSAwLjAwMDYsXG4gICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgZHVyYXRpb247XG5cbiAgICAgIGRlc3RpbmF0aW9uID0gY3VycmVudCArICggc3BlZWQgKiBzcGVlZCApIC8gKCAyICogZGVjZWxlcmF0aW9uICkgKiAoIGRpc3RhbmNlIDwgMCA/IC0xIDogMSApOyAvLyBzPShhdF4yKS8yXG4gICAgICBkdXJhdGlvbiA9IHNwZWVkIC8gZGVjZWxlcmF0aW9uOyAvLyB2PWF0XG5cbiAgICAgIGlmICggZGVzdGluYXRpb24gPCBtYXhIZWlnaHQgKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uID0gbWF4SGVpZ2h0IC0gKCB3cmFwcGVySGVpZ2h0IC8gMi41ICogKCBzcGVlZCAvIDggKSApO1xuICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGRlc3RpbmF0aW9uIC0gY3VycmVudCk7XG4gICAgICAgIGR1cmF0aW9uID0gZGlzdGFuY2UgLyBzcGVlZDtcbiAgICAgIH1lbHNlIGlmKGRlc3RpbmF0aW9uID4gMCl7XG4gICAgICAgIGRlc3RpbmF0aW9uID0gd3JhcHBlckhlaWdodCAvIDIuNSAqICggc3BlZWQgLyA4ICk7XG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoY3VycmVudCkgKyBkZXN0aW5hdGlvbjtcbiAgICAgICAgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZXN0aW5hdGlvbjogTWF0aC5yb3VuZChkZXN0aW5hdGlvbiksXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb21wdXRlZFBvc2l0aW9uKCkge1xuICAgICAgdmFyIG1hdHJpeCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRsZ0NvbnRlbnQsIG51bGwpLFxuICAgICAgICB4LCB5O1xuXG4gICAgICBtYXRyaXggPSBtYXRyaXgud2Via2l0VHJhbnNmb3JtLnNwbGl0KCcpJylbMF0uc3BsaXQoJywgJyk7XG4gICAgICB4ID0gKyhtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSk7XG4gICAgICB5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XG5cbiAgICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdHJhbnNpdGlvblRpbWUodGltZSl7XG4gICAgICB0aW1lID0gdGltZSB8fCAwO1xuICAgICAgc2Nyb2xsVGFyZ2VTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0aW1lICsgJ21zJztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3RyYW5zaXRpb25FbmQoKXtcbiAgICAgIGlmKCFpc0luVHJhbnNpdGlvbilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgX3RyYW5zaXRpb25UaW1lKCk7XG4gICAgICBpZighcmVzZXRQb3NpdGlvbihkbGdDb250ZW50KSl7XG4gICAgICAgIGlzSW5UcmFuc2l0aW9uID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RsZ3Njcm9sbC5qcyIsImZ1bmN0aW9uIGluaXRCYWNrUHJlc3MoTW9kYWxEaWFsb2csIG9wdGlvbnMpe1xuXG4gIGlmKCFvcHRpb25zLnVzZUhhc2gpXG4gICAgcmV0dXJuO1xuXG4gIGxldCBub3RpZnlCYWNrcHJlc3MgPSBvcHRpb25zLm5vdGlmeUJhY2twcmVzcztcbiAgbGV0IGRpYWxvZ0lkTGlzdCA9IFtdO1xuXG4gIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIoZnVuY3Rpb24oZGlhbG9nKXtcbiAgICBkaWFsb2dJZExpc3QucHVzaChkaWFsb2cuaWQpO1xuXG4gICAgZGlhbG9nLmxpc3RlbmVyQmFja1ByZXNzID0gbm90aWZ5QmFja3ByZXNzLmFkZExpc3RlbmVyKGxpc3RlbmVyQmFja3ByZXNzKCksICdhZGQnKTtcblxuICAgIGRpYWxvZy5ub3RpZnlQcmlvcml0eSA9IG5vdGlmeUJhY2twcmVzcy5jYWxsYmFja1ByaW9yaXR5O1xuICB9KTtcblxuICBNb2RhbERpYWxvZy5jbG9zZWRMaXN0ZW5lcihmdW5jdGlvbihkaWFsb2cpe1xuICAgIGRpYWxvZ0lkTGlzdCA9IGRpYWxvZ0lkTGlzdC5maWx0ZXIoKGlkKT0+e1xuICAgICAgcmV0dXJuIGRpYWxvZy5pZCAhPT0gaWQ7XG4gICAgfSk7XG4gICAgLy8gbm90aWZ5QmFja3ByZXNzLnJlbW92ZUxpc3RlbmVyKGRpYWxvZy5saXN0ZW5lckJhY2tQcmVzcyk7XG4gICAgZGlhbG9nLmxpc3RlbmVyQmFja1ByZXNzLnVwZGF0ZSgpO1xuICAgIG5vdGlmeUJhY2twcmVzcy5nb0JhY2soKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXJCYWNrcHJlc3MoKSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIGlmKCFkaWFsb2dJZExpc3QubGVuZ3RoKXtcbiAgICAgICAgb3B0aW9ucy5iYWNrUHJlc3MgJiYgb3B0aW9ucy5iYWNrUHJlc3MoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkbGdJZCA9IGRpYWxvZ0lkTGlzdC5wb3AoKTtcblxuICAgICAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdFtkbGdJZF0uY2xvc2VEaWFsb2codHJ1ZSk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRCYWNrUHJlc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BsdWdpbnMvYmFja1ByZXNzMi5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZseW1lVXRpbHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZmx5bWVVdGlsc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gaW1wb3J0IGEgZnJvbSBcIi4uL2xpYi9hcHBTdG9yZUNsaWVudC9XaW5DaGFuZ2VkTWFuYWdlLmpzXCI7XG5cdC8vIGltcG9ydCBiIGZyb20gXCIuLi9saWIvZG9tVXRpbHMvUmF0ZUluVmlld1BvcnRNYW5hZ2UuanNcIjtcblxuXHR2YXIgbm90aWZ5QmFja3ByZXNzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBub3RpZnlCYWNrcHJlc3M6IG5vdGlmeUJhY2twcmVzc1xuXHR9O1xuXHQvLyBleHBvcnQgZGVmYXVsdCB7XG5cdC8vICAgbm90aWZ5QmFja3ByZXNzXG5cdC8vIH1cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGhhc2hIaXN0b3J5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgZ2VuZXJhdGVGbiA9IGZ1bmN0aW9uIGdlbmVyYXRlRm4oKSB7XG5cblx0ICB2YXIgaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIgPSB3aW5kb3cuRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlICYmICEhd2luZG93LkV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5saXN0ZW5CYWNrUHJlc3MsXG5cdCAgICAgIGhhc2hMaXN0ZW5lciA9IGhhc2hIaXN0b3J5KCk7XG5cblx0ICBpZiAoIWlzU3VwcG9ydEJhY2twcmVzc0xpc3RlbmVyKSB7XG5cdCAgICBoYXNoTGlzdGVuZXIubGlzdGVuZXIoZnVuY3Rpb24gKHBhdGgsIHByZXBhdGgpIHtcblx0ICAgICAgdmFyIHByZXBhdGggPSBwcmVwYXRoICogMTtcblxuXHQgICAgICBpZiAoISFwcmVwYXRoICYmIHBhdGggLSBwcmVwYXRoIDwgMCkge1xuXHQgICAgICAgIHdpbmRvdy5fX2JhY2twcmVzcygpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICB9IGVsc2Uge1xuXHQgICAgbGlzdGVuQmFja1ByZXNzKCk7XG5cdCAgfVxuXG5cdCAgZnVuY3Rpb24gbGlzdGVuQmFja1ByZXNzKCkge1xuXHQgICAgaWYgKGlzU3VwcG9ydEJhY2twcmVzc0xpc3RlbmVyKSBFdmVudEphdmFzY3JpcHRJbnRlcmZhY2UubGlzdGVuQmFja1ByZXNzKCdfX2JhY2twcmVzcycpO1xuXHQgIH1cblxuXHQgIHdpbmRvdy5fX2JhY2twcmVzcyA9IGZ1bmN0aW9uIChpc2Zyb20pIHtcblx0ICAgIHZhciBpc01Ub3VjaCA9IGlzZnJvbSA9PSAnZnJvbV9tZW51JyA/IGZhbHNlIDogdHJ1ZTtcblx0ICAgIG5vdGlmeUJhY2twcmVzcy5ydW4oaXNNVG91Y2gpO1xuXHQgICAgbGlzdGVuQmFja1ByZXNzKCk7XG5cdCAgfTtcblxuXHQgIHZhciBfY2FsbGJhY2tzID0ge30sXG5cdCAgICAgIGdsb2JhbENhbGxiYWNrcyA9IFtdLFxuXHQgICAgICBfcHJpb3JpdHlGYWN0cyA9IFtdO1xuXG5cdCAgdmFyIG5vdGlmeUJhY2twcmVzcyA9IHtcblx0ICAgIGdsb2JhbE9uY2U6IGZhbHNlLFxuXHQgICAgaXNGaW5pc2g6IGZhbHNlLFxuXHQgICAgaXNNZW51Q2xvc2U6IHRydWUsXG5cdCAgICBhZGRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkTGlzdGVuZXIoY2IpIHtcblx0ICAgICAgdmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuXG5cdCAgICAgIHZhciBzZWxmID0gdGhpcztcblxuXHQgICAgICBpZiAocHJpb3JpdHkgPT09IHRydWUpIHJldHVybiBnbG9iYWxDYWxsYmFja3MucHVzaChjYik7ZWxzZSBpZiAocHJpb3JpdHkgPT0gJ2FkZCcpIHtcblx0ICAgICAgICBwcmlvcml0eSA9IHRoaXMuaW5jcmVhc2VQcmlvcml0eSgpO1xuXHQgICAgICB9XG5cblx0ICAgICAgdGhpcy5hZGRDYWxsYmFjayhjYiwgcHJpb3JpdHkpO1xuXG5cdCAgICAgIGlmICghaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIpIHtcblx0ICAgICAgICBoYXNoTGlzdGVuZXIuYXV0b1VwZGF0ZUhhc2goKTtcblx0ICAgICAgfVxuXG5cdCAgICAgIHRoaXMuY2FsbGJhY2tQcmlvcml0eSA9IHByaW9yaXR5O1xuXG5cdCAgICAgIHJldHVybiB7XG5cdCAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdCAgICAgICAgICB2YXIgaW5uZXJRdWV1ZXMgPSB2b2lkIDA7XG5cblx0ICAgICAgICAgIGlubmVyUXVldWVzID0gX2NhbGxiYWNrc1twcmlvcml0eV0gPSBfY2FsbGJhY2tzW3ByaW9yaXR5XS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT0gY2I7XG5cdCAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgaWYgKCFpbm5lclF1ZXVlcy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3ByaW9yaXR5RmFjdHMgPSBfcHJpb3JpdHlGYWN0cy5maWx0ZXIoZnVuY3Rpb24gKGZhY3Rvcikge1xuXHQgICAgICAgICAgICAgIHJldHVybiBmYWN0b3IgIT0gcHJpb3JpdHk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUobmV3Y2IpIHtcblx0ICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG5cdCAgICAgICAgICB2YXIgbWF4UHJpb3JpdHkgPSBzZWxmLmluY3JlYXNlUHJpb3JpdHkoKTtcblxuXHQgICAgICAgICAgc2VsZi5hZGRDYWxsYmFjayhuZXdjYiB8fCBmdW5jdGlvbiAoKSB7fSwgbWF4UHJpb3JpdHkpO1xuXHQgICAgICAgICAgLy8gX2NhbGxiYWNrc1twcmlvcml0eV0gPSBfY2FsbGJhY2tzW3ByaW9yaXR5XS5tYXAoaXRlbT0+e1xuXHQgICAgICAgICAgLy8gICBpZihpdGVtID09PSBjYil7XG5cdCAgICAgICAgICAvLyAgICAgcmV0dXJuIG5ld2NiIHx8IGZ1bmN0aW9uKCl7fTtcblx0ICAgICAgICAgIC8vICAgfTtcblx0ICAgICAgICAgIC8vICAgcmV0dXJuIGl0ZW07XG5cdCAgICAgICAgICAvLyB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgIH07XG5cdCAgICB9LFxuXHQgICAgYWRkQ2FsbGJhY2s6IGZ1bmN0aW9uIGFkZENhbGxiYWNrKGNiLCBwcmlvcml0eSkge1xuXG5cdCAgICAgIGlmICghX2NhbGxiYWNrc1twcmlvcml0eV0pIHtcblx0ICAgICAgICBfY2FsbGJhY2tzW3ByaW9yaXR5XSA9IFtdO1xuXHQgICAgICB9XG5cblx0ICAgICAgX2NhbGxiYWNrc1twcmlvcml0eV0ucHVzaChjYik7XG5cblx0ICAgICAgaWYgKCF+X3ByaW9yaXR5RmFjdHMuaW5kZXhPZihwcmlvcml0eSkpIHtcblx0ICAgICAgICBfcHJpb3JpdHlGYWN0cy5wdXNoKHByaW9yaXR5KTtcblx0ICAgICAgICBfcHJpb3JpdHlGYWN0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdCAgICAgICAgICByZXR1cm4gYSAtIGI7XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBpbmNyZWFzZVByaW9yaXR5OiBmdW5jdGlvbiBpbmNyZWFzZVByaW9yaXR5KCkge1xuXHQgICAgICB2YXIgbGVuID0gX3ByaW9yaXR5RmFjdHMubGVuZ3RoO1xuXG5cdCAgICAgIGlmICghbGVuKSByZXR1cm4gMTtcblxuXHQgICAgICByZXR1cm4gX3ByaW9yaXR5RmFjdHNbX3ByaW9yaXR5RmFjdHMubGVuZ3RoIC0gMV0gKyAxO1xuXHQgICAgfSxcblx0ICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihjYikge1xuXHQgICAgICB2YXIgdGVtcFByaW9yaXR5RmFjdHMgPSBfcHJpb3JpdHlGYWN0cztcblxuXHQgICAgICBfcHJpb3JpdHlGYWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcmlvcml0eSkge1xuXHQgICAgICAgIHZhciBxdWV1ZXMgPSBfY2FsbGJhY2tzW3ByaW9yaXR5XTtcblxuXHQgICAgICAgIHF1ZXVlcyA9IHF1ZXVlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgICAgICAgIHJldHVybiBpdGVtICE9IGNiO1xuXHQgICAgICAgIH0pO1xuXG5cdCAgICAgICAgX2NhbGxiYWNrc1twcmlvcml0eV0gPSBxdWV1ZXM7XG5cblx0ICAgICAgICBpZiAoIXF1ZXVlcy5sZW5ndGgpIHtcblx0ICAgICAgICAgIHRlbXBQcmlvcml0eUZhY3RzID0gdGVtcFByaW9yaXR5RmFjdHMuZmlsdGVyKGZ1bmN0aW9uIChmYWN0b3IpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZhY3RvciAhPSBwcmlvcml0eTtcblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSk7XG5cblx0ICAgICAgX3ByaW9yaXR5RmFjdHMgPSB0ZW1wUHJpb3JpdHlGYWN0cztcblx0ICAgIH0sXG5cdCAgICByZW1vdmVHbG9iYWxMaXN0ZW5lcnM6IGZ1bmN0aW9uIHJlbW92ZUdsb2JhbExpc3RlbmVycyhjYikge1xuXHQgICAgICBpZiAoY2IgIT0gbnVsbCkge1xuXHQgICAgICAgIGdsb2JhbENhbGxiYWNrcyA9IGdsb2JhbENhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24gKGZuKSB7XG5cdCAgICAgICAgICByZXR1cm4gY2IgIT0gZm47XG5cdCAgICAgICAgfSk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZ2xvYmFsQ2FsbGJhY2tzID0gW107XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBydW5XaXRoUHJpb3JpdHk6IGZ1bmN0aW9uIHJ1bldpdGhQcmlvcml0eShwcmlvcml0eSwgaXNSbSkge1xuXHQgICAgICB2YXIgcXVldWUgPSBfY2FsbGJhY2tzW3ByaW9yaXR5XTtcblxuXHQgICAgICBpZiAoIXF1ZXVlKSByZXR1cm47XG5cblx0ICAgICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcblx0ICAgICAgICBjYigpO1xuXHQgICAgICB9KTtcblxuXHQgICAgICBpZiAoaXNSbSkgX2NhbGxiYWNrc1twcmlvcml0eV0gPSBudWxsO1xuXHQgICAgfSxcblx0ICAgIHJ1bjogZnVuY3Rpb24gcnVuKGlzTVRvdWNoKSB7XG5cdCAgICAgIGlmICghZ2xvYmFsQ2FsbGJhY2tzLmxlbmd0aCAmJiAhX3ByaW9yaXR5RmFjdHMubGVuZ3RoKSB7XG5cdCAgICAgICAgdGhpcy5ub3RpZnlCYWNrRm4gJiYgdGhpcy5ub3RpZnlCYWNrRm4oKTtcblx0ICAgICAgICBpZiAodGhpcy5pc0ZpbmlzaCB8fCAhaXNNVG91Y2ggJiYgdGhpcy5pc01lbnVDbG9zZSkge1xuXHQgICAgICAgICAgdGhpcy5jbG9zZUFjdGl2aXR5KCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXG5cdCAgICAgIGdsb2JhbENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuXHQgICAgICAgIGNiKCk7XG5cdCAgICAgIH0pO1xuXHQgICAgICBpZiAodGhpcy5nbG9iYWxPbmNlKSBnbG9iYWxDYWxsYmFja3MgPSBbXTtcblxuXHQgICAgICB2YXIgY3VyUHJpb3JpdHkgPSBfcHJpb3JpdHlGYWN0cy5wb3AoKTtcblx0ICAgICAgdGhpcy5ydW5XaXRoUHJpb3JpdHkoY3VyUHJpb3JpdHksIHRydWUpO1xuXHQgICAgfSxcblx0ICAgIGdvQmFjazogZnVuY3Rpb24gZ29CYWNrKCkge1xuXHQgICAgICBpZiAoaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIpIEV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5iYWNrUHJlc3MoKTtlbHNlIGhhc2hMaXN0ZW5lci5iYWNrKCk7XG5cdCAgICB9LFxuXHQgICAgY2xvc2VBY3Rpdml0eTogZnVuY3Rpb24gY2xvc2VBY3Rpdml0eSgpIHtcblx0ICAgICAgaWYgKGlzU3VwcG9ydEJhY2twcmVzc0xpc3RlbmVyKSBFdmVudEphdmFzY3JpcHRJbnRlcmZhY2UuZmluaXNoKCk7ZWxzZSBoYXNoTGlzdGVuZXIuYmFjaygpO1xuXHQgICAgfSxcblx0ICAgIGFkZE5vdGlmeUJhY2s6IGZ1bmN0aW9uIGFkZE5vdGlmeUJhY2soY2IpIHtcblx0ICAgICAgdGhpcy5ub3RpZnlCYWNrRm4gPSBjYjtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgcmV0dXJuIG5vdGlmeUJhY2twcmVzcztcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZUZuKCk7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFxuXHR2YXIgYmluZEV2ZW50ID0gZnVuY3Rpb24gYmluZEV2ZW50KGRvbSwgbmFtZSwgZm4pIHtcblx0ICBkb20uYWRkRXZlbnRMaXN0ZW5lciA/IGRvbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZuLCBmYWxzZSkgOiBkb20uYXR0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZuKTtcblx0fTtcblx0dmFyIHVuQmluZEV2ZW50ID0gZnVuY3Rpb24gdW5CaW5kRXZlbnQoZG9tLCBuYW1lLCBmbikge1xuXHQgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyID8gZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZm4sIGZhbHNlKSA6IGRvbS5kZXRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xuXHR9O1xuXG5cdHZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cdHZhciBxdWVyeV9rZXkgPSAnX2RnX2hhc2gnO1xuXG5cdHZhciBoYXNoSGlzdG9yeSA9IGZ1bmN0aW9uIGhhc2hIaXN0b3J5KG9wdGlvbnMpIHtcblxuXHQgIHZhciBwcmV2TG9jYXRpb24gPSAnJyxcblx0ICAgICAgbGlzdGVuZXJzID0gW107XG5cblx0ICB2YXIgZ2V0Q3VycmVudEhhc2hQYXRoID0gZnVuY3Rpb24gZ2V0Q3VycmVudEhhc2hQYXRoKCkge1xuXHQgICAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZixcblx0ICAgICAgICByZWd4ID0gbmV3IFJlZ0V4cCgnXicgKyBxdWVyeV9rZXkgKyAnPSguKiknKTtcblx0ICAgIHZhciBpbmRleCA9IGhyZWYuaW5kZXhPZignIycpLFxuXHQgICAgICAgIHF1ZXJ5SW5kZXggPSB2b2lkIDAsXG5cdCAgICAgICAgc3RyID0gJycsXG5cdCAgICAgICAgbWF0Y2hlcyA9IHZvaWQgMDtcblxuXHQgICAgaWYgKGluZGV4ICE9IC0xKSB7XG5cdCAgICAgIHN0ciA9IGhyZWYuc3Vic3RyaW5nKGluZGV4ICsgMSkgfHwgJyc7XG5cdCAgICAgIGlmIChxdWVyeUluZGV4ID0gc3RyLmluZGV4T2YoJz8nKSA+IDApIHtcblx0ICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXgpO1xuXHQgICAgICB9XG5cdCAgICAgIG1hdGNoZXMgPSByZWd4LmV4ZWMoc3RyKTtcblx0ICAgICAgaWYgKG1hdGNoZXMpIHtcblx0ICAgICAgICBzdHIgPSBtYXRjaGVzWzFdO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHN0ciA9ICcnO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICByZXR1cm4gc3RyO1xuXHQgIH07XG5cblx0ICB2YXIgc3RvcExpc3RlbmVyID0gZnVuY3Rpb24gc3RvcExpc3RlbmVyKCkge1xuXHQgICAgdW5CaW5kRXZlbnQod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuXHQgIH07XG5cblx0ICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihjYWxsYmFjaykge1xuXHQgICAgbGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuXG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgICByZXR1cm4gbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuXHQgICAgICAgIHJldHVybiBpdGVtICE9PSBjYWxsYmFjaztcblx0ICAgICAgfSk7XG5cdCAgICB9O1xuXHQgIH07XG5cblx0ICB2YXIgcHVzaEhhc2hQYXRoID0gZnVuY3Rpb24gcHVzaEhhc2hQYXRoKHBhdGgpIHtcblx0ICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG5cdCAgfTtcblxuXHQgIHZhciByZXBsYWNlSGFzaFBhdGggPSBmdW5jdGlvbiByZXBsYWNlSGFzaFBhdGgocGF0aCkge1xuXHQgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcblx0ICB9O1xuXG5cdCAgdmFyIGF1dG9VcGRhdGVIYXNoID0gZnVuY3Rpb24gYXV0b1VwZGF0ZUhhc2goKSB7XG5cdCAgICB2YXIgaGFzaFBhdGggPSBnZXRDdXJyZW50SGFzaFBhdGgoKSAqIDE7XG5cdCAgICBpZiAoIWhhc2hQYXRoKSBoYXNoUGF0aCA9IDE7ZWxzZSBoYXNoUGF0aCsrO1xuXHQgICAgcHVzaEhhc2hQYXRoKHF1ZXJ5X2tleSArICc9JyArIGhhc2hQYXRoKTtcblx0ICAgIHJldHVybiBoYXNoUGF0aDtcblx0ICB9O1xuXG5cdCAgdmFyIGdvID0gZnVuY3Rpb24gZ28obikge1xuXHQgICAgaWYgKG4pIHdpbmRvdy5oaXN0b3J5LmdvKG4pO1xuXHQgIH07XG5cdCAgdmFyIGJhY2sgPSBmdW5jdGlvbiBiYWNrKCkge1xuXHQgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuXHQgIH07XG5cblx0ICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG5cdCAgICB2YXIgY3VycmVudExvY2F0aW9uID0gZ2V0Q3VycmVudEhhc2hQYXRoKCk7XG5cblx0ICAgIGlmIChwcmV2TG9jYXRpb24gPT09IGN1cnJlbnRMb2NhdGlvbikgcmV0dXJuO1xuXG5cdCAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcblx0ICAgICAgbGlzdGVuZXIoY3VycmVudExvY2F0aW9uLCBwcmV2TG9jYXRpb24pO1xuXHQgICAgfSk7XG5cblx0ICAgIHByZXZMb2NhdGlvbiA9IGN1cnJlbnRMb2NhdGlvbjtcblx0ICB9O1xuXG5cdCAgYmluZEV2ZW50KHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcblxuXHQgIHJldHVybiB7XG5cdCAgICBnZXRDdXJyZW50SGFzaFBhdGg6IGdldEN1cnJlbnRIYXNoUGF0aCxcblx0ICAgIGxpc3RlbmVyOiBsaXN0ZW5lcixcblx0ICAgIHN0b3BMaXN0ZW5lcjogc3RvcExpc3RlbmVyLFxuXHQgICAgcHVzaEhhc2hQYXRoOiBwdXNoSGFzaFBhdGgsXG5cdCAgICByZXBsYWNlSGFzaFBhdGg6IHJlcGxhY2VIYXNoUGF0aCxcblx0ICAgIGF1dG9VcGRhdGVIYXNoOiBhdXRvVXBkYXRlSGFzaCxcblx0ICAgIGdvOiBnbyxcblx0ICAgIGJhY2s6IGJhY2tcblx0ICB9O1xuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gaGFzaEhpc3Rvcnk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vY29tbW9uLXBhY2thZ2UvdXRpbHMvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9