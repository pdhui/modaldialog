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
	
		var hashHistory = __webpack_require__(1);
	
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
	/* 1 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NjhkZTUwNGJiNjVlODMzMWQ0NiIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nV2l0aEhhc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RsZ3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2lucy9iYWNrUHJlc3MyLmpzIiwid2VicGFjazovLy8uLi9jb21tb24tcGFja2FnZS91dGlscy9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbImRpYWxvZyIsInJlcXVpcmUiLCJ1dGlscyIsImZseW1lVXRpbHMiLCJleGFtcGxlIiwiX2V2ZW50cyIsImFkZEV4YW1wbGUiLCJ2YWx1ZSIsImlkIiwiY2FsbGJhY2siLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUh0bWxEb20iLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5IiwiYmluZEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImJpbmQiLCJldnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJjb25maXJtIiwiYWxlcnQiLCJpc0FsZXJ0ZWQiLCJkbGciLCJkbGdEb20iLCJkaWFsb2dEb20iLCJxdWVyeVNlbGVjdG9yIiwicmVmcmVzaCIsImZpcnN0IiwibG9jYXRpb24iLCJocmVmIiwiY3JlYXRlTm9CdG5EaWFsb2ciLCJ2YyIsImdldFVybFBhcmFtIiwidHVyblRvIiwiY29uZmlnIiwidXNlSGFzaCIsImJhc2VGb250U2l6ZSIsIm5vdGlmeUJhY2twcmVzcyIsImJhY2tQcmVzcyIsIkV2ZW50SmF2YXNjcmlwdEludGVyZmFjZSIsIndpbmRvdyIsIm9uV2luZG93Q2hhbmdlZCIsImNvbnRlbnQiLCJ0aXRsZSIsImRvbSIsImNscyIsImNseiIsImNsYXp6IiwiY3JlYXRlUGFyYW1zIiwib2tDYWxsYmFjayIsInNlbGVjdG9yIiwiTW9kYWxEaWFsb2ciLCJiYWNrUHJlc3NQbHVnaW4iLCJkZWZhdWx0Q29uZmlnIiwiYWRkUGx1Z2luIiwibW9kdWxlIiwiZXhwb3J0cyIsImJhc2VDc3MiLCJzY3JvbGxEbGciLCJfIiwiYXNzaWduIiwid2luSCIsIndpblciLCJub29wIiwiaW5zZXJ0U3R5bGVUb0hlYWQiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJmblRlbXBsYXRlIiwicmVtIiwicHgiLCJyZXBsYWNlIiwiZXhwciIsInZhbCIsImhlYWREb20iLCJmaXJzdExpbmsiLCJpbnNlcnRCZWZvcmUiLCJnZXRIdG1sQ29udGVudCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZUh0bWwiLCJoZWFkZXIiLCJwdXNoIiwicmVwbGFjZVRlbWxhdGUiLCJjcmVhdGVCdXR0b25zIiwiY2FsbCIsImpvaW4iLCJyZXNpemVXaW4iLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImJ0bnMiLCJidXR0b25zIiwidGVtcGxhdGUiLCJidG5UbXBscyIsInNlbGYiLCJvbmVCdG5DbHoiLCJjYW5jZWxDYWxsYmFjayIsIm5hbWUiLCJjYW5jZWxTdHIiLCJsZW5ndGgiLCJzdXJlU3RyIiwicmV2ZXJzZSIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJjYWxsYmFja3MiLCJpbnNlcnRDb250ZW50IiwiY29tbWVudCIsImNyZWF0ZUNvbW1lbnQiLCJvcmlEaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiX2NvbW1lbnREb20iLCJkaXNwbGF5IiwiX29yaWdpbkRpc3BsYXkiLCJkZWZhdWx0U2V0dGluZ3MiLCJhbmltYXRlZCIsInVzZUJhY2tncm91bmQiLCJjb21wbGV0ZSIsImJlZm9yZUxpc3RlbmVycyIsImFmdGVyTGlzdGVuZXJzIiwiY2xvc2VkTGlzdGVuZXJzIiwiX2NvdW50IiwiX2NhbGxCYWNrcyIsIk9iamVjdCIsImtleXMiLCJsaXN0ZW5lciIsImRpYWxvZ0xpc3QiLCJjcmVhdGUiLCJtb2RhbENvdW50IiwiZGxnUG9zIiwiZGxnTWFpbkRvbSIsIm9mZnNldEgiLCJkb2N1bWVudEVsZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJkbGdTY3JvbGwiLCJpbml0VG91Y2giLCJnZXRQb3MiLCJsZWZ0IiwidG9wIiwiY2xhc3NOYW1lIiwidXNlcmJnciIsImRhdGFzZXQiLCJoZWlnaHQiLCJfZXZlbnRMaXN0ZW5lciIsInByb3h5IiwiX2NsaWNrRXZlbnQiLCJwcm90b3R5cGUiLCJkbGdIIiwiZGxnVyIsIm9mZnNldFdpZHRoIiwiZGxnUG9zWSIsImRsZ1Bvc1giLCJjbG9zZURpYWxvZyIsImlzTm90SW52b2tlIiwicmVtb3ZlRGlhbG9nIiwidW5CaW5kRXZlbnQiLCJkZXN0cm95U2Nyb2xsIiwiX3JlbW92ZVRyYW5zaXRpb24iLCJvcGFjaXR5IiwicmVtb3ZlQ2hpbGQiLCJlIiwiZm4iLCJ3cmFwQXJncyIsIkFycmF5Iiwic2xpY2UiLCJhcmd1bWVudHMiLCJhcmdzIiwiY29uY2F0IiwiYXBwbHkiLCJzdXJlRm4iLCJidFRleHQxIiwiYnRUZXh0MiIsImNhbmNlbEZuIiwiYWZ0ZXJMaXN0ZW5lciIsImZpbHRlciIsInByZUxpc3RlbmVyIiwiY2xvc2VkTGlzdGVuZXIiLCJfcGx1Z2lucyIsImlzQ29uZmlnIiwiY29uc29sZSIsImluZm8iLCJpIiwibGVuIiwiRG9tVXRpbHMiLCJjcmVhdGVIdG1sIiwiZGl2IiwiaHRtbCIsInRlbXAiLCJjaGlsZHJlbiIsInN0ciIsImRhdGEiLCJyZWd4IiwiUmVnRXhwIiwiZXhlYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsImtleSIsInJlZyIsInIiLCJzZWFyY2giLCJzdWJzdHIiLCJtYXRjaCIsImRlY29kZVVSSSIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsImNsb3Nlc3QiLCJjbHNSZWd4IiwidGFnUmVneCIsInBhcmVudCIsInRlc3QiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwicGFyYW0iLCJyZXMiLCJnZXRIZWlnaHQiLCJzZWwiLCJpc091dGVyIiwic2VjdGlvblN0eWxlIiwibWFyZ2luSCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImVhc2UiLCJjaXJjdWxhciIsImRsZ0NvbnRlbnQiLCJzZWN0aW9uIiwic2Nyb2xsVGFyZ2VTdHlsZSIsIndyYXBwZXJIZWlnaHQiLCJtYXhIZWlnaHQiLCJzdGFydFBvc3giLCJzdGFydFBvc3kiLCJpc1RvdWNoIiwic3RhcnRUaW1lIiwiZGlzdFkiLCJkaXN0WCIsImVuZFRpbWUiLCJ4IiwieSIsInN0YXJ0WCIsInN0YXJ0WSIsImlzSW5UcmFuc2l0aW9uIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwic3RvcFNjcm9sbE1vdmUiLCJzdGFydFRvdWNoIiwidG91Y2hlRW5kIiwiX3RyYW5zaXRpb25FbmQiLCJ0b3VjaCIsInRvdWNoZXMiLCJwb3MiLCJfdHJhbnNpdGlvblRpbWUiLCJnZXRDb21wdXRlZFBvc2l0aW9uIiwidHJhbnNsYXRlIiwiTWF0aCIsInJvdW5kIiwicGFnZVgiLCJwYWdlWSIsIkRhdGUiLCJub3ciLCJwb3NYIiwicG9zWSIsInRpbWVzdGFtcCIsImRlbHRhWSIsImRlbHRhWCIsIm5ld1kiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImFicyIsImR1cmF0aW9uIiwidGltZSIsIm1vbWVudHVtWSIsInJlc2V0UG9zaXRpb24iLCJzY3JvbGxUbyIsIm1vbWVudHVtIiwiZGVzdGluYXRpb24iLCJwb3N5Iiwid2Via2l0VHJhbnNmb3JtIiwiY3VycmVudCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJzcGVlZCIsImRlY2VsZXJhdGlvbiIsIm1hdHJpeCIsInNwbGl0IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaW5pdEJhY2tQcmVzcyIsImRpYWxvZ0lkTGlzdCIsImxpc3RlbmVyQmFja1ByZXNzIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lckJhY2twcmVzcyIsIm5vdGlmeVByaW9yaXR5IiwiY2FsbGJhY2tQcmlvcml0eSIsInVwZGF0ZSIsImdvQmFjayIsImRsZ0lkIiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdENBLEtBQUlBLFNBQVMsbUJBQUFDLENBQVEsQ0FBUixDQUFiO0FBQ0EsS0FBSUMsUUFBUSxtQkFBQUQsQ0FBUSxDQUFSLENBQVo7QUFDQTtBQUNBLEtBQUlFLGFBQWEsbUJBQUFGLENBQVEsQ0FBUixDQUFqQjs7QUFFQSxLQUFJRyxVQUFVO0FBQ1pDLFlBQVMsRUFERztBQUVaQyxhQUZZLHNCQUVEQyxLQUZDLEVBRUtDLEVBRkwsRUFFUUMsUUFGUixFQUVpQjtBQUMzQixVQUFLQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkJULE1BQU1VLGFBQU4sQ0FBb0Isa0JBQWtCSixFQUFsQixHQUF1Qix5QkFBdkIsR0FBa0RELEtBQWxELEdBQTBELE9BQTlFLENBQTNCO0FBQ0EsVUFBS0YsT0FBTCxDQUFhRyxFQUFiLElBQW1CQyxRQUFuQjtBQUNBLFlBQU8sSUFBUDtBQUNELElBTlc7QUFPWkksT0FQWSxrQkFPTjtBQUNKLFVBQUtILFNBQUwsR0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFNOztBQUVOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQSxFQUFDO0FBQ0QsRSIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NjhkZTUwNGJiNjVlODMzMWQ0NiIsInZhciBkaWFsb2cgPSByZXF1aXJlKCcuLi9kaWFsb2dXaXRoSGFzaC5qcycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vZG9tLmpzJyk7XG4vLyB2YXIgbm90aWZ5QmFja3ByZXNzID0gcmVxdWlyZSgnQGZseW1lL3V0aWxzL3NyYy9hcHBTdG9yZUNsaWVudC9ub3RpZnlCYWNrcHJlc3MuanMnKTtcbnZhciBmbHltZVV0aWxzID0gcmVxdWlyZSgnQGZseW1lL3V0aWxzJyk7XG5cbnZhciBleGFtcGxlID0ge1xuICBfZXZlbnRzOiB7fSxcbiAgYWRkRXhhbXBsZSh2YWx1ZSxpZCxjYWxsYmFjayl7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlSHRtbERvbSgnPGxpIGRhdGEtaWQ9XCInICsgaWQgKyAnXCIgc3R5bGU9XCJwYWRkaW5nOjVweDtcIj4nKyB2YWx1ZSArICc8L2xpPicpKTtcbiAgICB0aGlzLl9ldmVudHNbaWRdID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGluaXQoKXtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZUh0bWxEb20oJzx1bCBjbGFzcz1cImV4YW1wbGVMaXN0XCIgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7XCI+PC91bD4nKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4gICAgdXRpbHMuYmluZEV2ZW50KHRoaXMuY29udGFpbmVyLCdjbGljaycsIHRoaXMuZGlzcGF0Y2hFdmVudC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgZGlzcGF0Y2hFdmVudChldnQpe1xuICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0LFxuICAgICAgICBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgIGlmKCEhdGhpcy5fZXZlbnRzW2lkXSl7XG4gICAgICB0aGlzLl9ldmVudHNbaWRdKCk7XG4gICAgfVxuICB9XG59O1xuZXhhbXBsZS5pbml0KCk7XG5leGFtcGxlLmFkZEV4YW1wbGUoJ+S4jeW4puagh+mimC3noa7orqTmoYYy6KGMJywnY29uZmlybTInLGZ1bmN0aW9uKCl7XG5cbiAgZGlhbG9nLmNvbmZpcm0oJ+aJk+W8gOKAnOaQuueoi+KAneWuouaIt+err++8jOi/lOWbnuacrOmhteeri+WNs+WinuWKoDPmrKHmir3lpZbmnLrkvJrjgIIgJyxudWxsLFwiXCIsJ+S4jeS6hicsJ+eri+WNs+aJk+W8gCcpO1xufSkuYWRkRXhhbXBsZSgn5LiN5bim5qCH6aKYLeehruiupOahhjPooYwnLCdjb25maXJtMycsZnVuY3Rpb24oKXtcblxuICBkaWFsb2cuY29uZmlybSgn5omT5byA4oCc5pC656iL4oCd5a6i5oi356uv77yM6L+U5Zue5pys6aG156uL5Y2z5aKeIOWKoDPmrKHmir3lpZbmnLrkvJou6L+U5Zue5pys6aG156uL5Y2z5aKe5YqgM+asoSDmir3lpZbmnLrkvJrjgIIgJyxudWxsLFwiXCIsJ+S4jeS6hicsJ+eri+WNs+aJk+W8gCcpO1xufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeWPjemmiOivtOaYjicsJ2ZlZWRiYWNrJyxmdW5jdGlvbigpe1xuXG4gIGRpYWxvZy5jb25maXJtKCfmr4/lronoo4XkuIDkuKrlupTnlKjvvIzlpJrlop7liqAx5qyh5oq95aWW5py65LyaICcsbnVsbCxcIuiOt+W+lzHmrKHmir3lpZbmnLrkvJpcIiwn56Gu5a6aJywn57un57ut5a6J6KOFJyk7XG59KS5hZGRFeGFtcGxlKCfkuI3luKbmoIfpopgt5o+Q56S65qGGJywnYWxlcnQnLGZ1bmN0aW9uKCl7XG5cbiAgZGlhbG9nLmFsZXJ0KCfmj5DkuqTlpLHotKXvvIzor7fnqI3lkI7lho3or5UgJyk7XG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt5Y2V6KGM5o+Q56S65qGGJywndGxlLWFsZXJ0JyxmdW5jdGlvbigpe1xuXG4gIGRpYWxvZy5hbGVydCgn6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piOJywn6aKG5Y+W5oiQ5YqfJyk7XG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt5Lik6KGM5o+Q56S65qGGJywndGxlLWFsZXJ0MicsZnVuY3Rpb24oKXtcblxuICBkaWFsb2cuYWxlcnQoJ+ivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuOAgicsJ+mihuWPluaIkOWKnycpO1xufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeWkmuihjOaPkOekuuahhicsJ3RsZS1hbGVydDInLGZ1bmN0aW9uKCl7XG5cbiAgZGlhbG9nLmFsZXJ0KCfor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIw8aW5wdXQgdHlwZT1cInRleHRcIi8+6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO44CC6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piOXFxcbiAgICDor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI4nLCfpooblj5bmiJDlip8nKTtcbn0pLmFkZEV4YW1wbGUoJ+ahhuS4reahhicsJ2RsZ29mZGxnJyxmdW5jdGlvbigpe1xuICB2YXIgaXNBbGVydGVkID0gZmFsc2U7XG4gIGRpYWxvZy5hbGVydCgn54i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a65Jywn54i25qGG5qCH6aKYJyxmdW5jdGlvbigpe1xuICAgIGlmKGlzQWxlcnRlZCkgcmV0dXJuO1xuXG4gICAgZGlhbG9nLmFsZXJ0KCflrZDmoYblhoXlrrknLCcnKTtcblxuICAgIGlzQWxlcnRlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59KS5hZGRFeGFtcGxlKCfliqjmgIHlop7liqDlvLnmoYblhoXlrrknLCdhZGRkbGdoZWlnaHQnLGZ1bmN0aW9uKCl7XG4gIHZhciBpc0FsZXJ0ZWQgPSBmYWxzZTtcbiAgdmFyIGRsZyA9IGRpYWxvZy5hbGVydCgn54i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a65PGJ1dHRvbiBjbGFzcz1cImFkZENvbnRlbnRcIj7mt7vliqDlhoXlrrk8L2J1dHRvbj4nLCfniLbmoYbmoIfpopgnKTtcbiAgdmFyIGRsZ0RvbSA9IGRsZy5kaWFsb2dEb207XG5cbiAgdXRpbHMuYmluZEV2ZW50KGRsZ0RvbS5xdWVyeVNlbGVjdG9yKCcuYWRkQ29udGVudCcpLCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICBkbGdEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jb250ZW50JykuYXBwZW5kQ2hpbGQodXRpbHMuY3JlYXRlSHRtbERvbSgnPGRpdj5oZWxsbyB3b3JsZDwvZGl2PicpKTtcbiAgICBkbGcucmVmcmVzaCgpO1xuICB9KTtcbn0pLmFkZEV4YW1wbGUoJ+aPkOekuuahhi0+5o+Q56S65qGGJywnZGxnMXRvZGxnMicsZnVuY3Rpb24oKXtcbiAgZGlhbG9nLmFsZXJ0KCfniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrknLCfniLbmoYbmoIfpopgnLGZ1bmN0aW9uKCl7XG4gICAgZGlhbG9nLmFsZXJ0KCflrZDmoYblhoXlrrknLCcnKTtcbiAgfSk7XG59KS5hZGRFeGFtcGxlKCfmj5DnpLrmoYYo5LiN5YWz6ZetKS0+5o+Q56S65qGGJywnZGxnMU5vY2xvc2V0b2RsZzInLGZ1bmN0aW9uKCl7XG4gIGxldCBmaXJzdCA9IHRydWU7XG4gIGRpYWxvZy5hbGVydCgn54i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a6554i25qGG5YaF5a65Jywn54i25qGG5qCH6aKYJyxmdW5jdGlvbigpe1xuICAgIGRpYWxvZy5hbGVydCgn5a2Q5qGG5YaF5a65JywnJyk7XG4gICAgaWYoZmlyc3Qpe1xuICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59KS5hZGRFeGFtcGxlKCfliqjmgIHosIPmlbTlvLnmoYblpKflsI8tYmFzZUZvbnRTaXplLTMyJywnYWRqdXN0LWZ0LTMyJyxmdW5jdGlvbigpe1xuXG4gIGxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDk5L2V4YW1wbGUvaW5kZXguaHRtbD9iYXNlRm9udFNpemU9MzInO1xufSkuYWRkRXhhbXBsZSgn5Yqo5oCB6LCD5pW05by55qGG5aSn5bCPLeato+W4uOWkp+Wwjy1iYXNlRm9udFNpemUtMTYnLCdhZGp1c3QtZnQtMTYnLGZ1bmN0aW9uKCl7XG5cbiAgbG9jYXRpb24uaHJlZiA9ICdodHRwOi8vbG9jYWxob3N0OjgwOTkvZXhhbXBsZS9pbmRleC5odG1sP2Jhc2VGb250U2l6ZT0xNic7XG59KS5hZGRFeGFtcGxlKCfliJvlu7rmsqHmnInmjInpkq7nmoTlvLnmoYYnLCduby1idG4tZGlhbG9nJyxmdW5jdGlvbigpe1xuXG4gIGNyZWF0ZU5vQnRuRGlhbG9nKCfor6bmg4UnKVxufSlcblxuY29uc3QgdmMgPSB1dGlscy5nZXRVcmxQYXJhbSgndmMnKSAqIDEsXG4gICAgICB0dXJuVG8gPSB1dGlscy5nZXRVcmxQYXJhbSgndHVyblRvJyk7XG5cbmRpYWxvZy5jb25maWcoe1xuICB1c2VIYXNoOnRydWUsXG4gIGJhc2VGb250U2l6ZTogdXRpbHMuZ2V0VXJsUGFyYW0oJ2Jhc2VGb250U2l6ZScpKjEsXG4gIG5vdGlmeUJhY2twcmVzczogZmx5bWVVdGlscy5ub3RpZnlCYWNrcHJlc3MsXG4gIGJhY2tQcmVzcygpe1xuICAgIEV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5iYWNrUHJlc3MoKTtcbiAgfS8qLFxuICB1c2VCYWNrZ3JvdW5kOiBmYWxzZSovXG59KTtcblxuaWYodmMgPj0gNjEyICYmIHR1cm5UbyA9PSAnYScpe1xuICBkaWFsb2cuYWxlcnQoJ+i/m+WFpemhtemdouWQjumprOS4iuaJk+W8gOW8ueahhicpO1xufVxud2luZG93Lm9uV2luZG93Q2hhbmdlZCA9IGZ1bmN0aW9uKCl7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9CdG5EaWFsb2coY29udGVudCx0aXRsZSxjYWxsYmFjayxkb20sY2xzKXtcbiAgICB2YXIgY2x6ID0gY29udGVudC5jbGF6eiA/IGNvbnRlbnQuY2xhenogOiAoY2xzID8gY2xzIDogJycpO1xuXG4gICAgY2x6ICs9ICcgYWxlcnQtZGlhbG9nJztcblxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XG4gICAgICBjb250ZW50ID0gdXRpbHMuY3JlYXRlUGFyYW1zKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOmNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IGRvbVxuICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXG4gICAgICBjbHogKz0gJyBkbGctbm8tdGl0bGUnO1xuICAgIGVsc2VcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xuXG4gICAgY29udGVudC5jbGF6eiA9IGNsejtcbiAgICByZXR1cm4gZGlhbG9nKGNvbnRlbnQpO1xuICB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsIlxudmFyIE1vZGFsRGlhbG9nID0gcmVxdWlyZSgnLi9tb2RhbC5qcycpO1xuLy8gdmFyIGhpc3RvcnlQbHVnaW4gPSByZXF1aXJlKCcuL3BsdWdpbnMvaGlzdG9yeS5qcycpO1xudmFyIGJhY2tQcmVzc1BsdWdpbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy9iYWNrUHJlc3MyLmpzJyk7XG5cbk1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcudXNlSGFzaCA9IHRydWU7XG5cbi8vIGlmKHdpbmRvdy5FdmVudEphdmFzY3JpcHRJbnRlcmZhY2UgJiYgdHlwZW9mIHdpbmRvdy5FdmVudEphdmFzY3JpcHRJbnRlcmZhY2UubGlzdGVuQmFja1ByZXNzID09ICdmdW5jdGlvbicpXG4gIE1vZGFsRGlhbG9nLmFkZFBsdWdpbihiYWNrUHJlc3NQbHVnaW4pO1xuLy8gZWxzZVxuLy8gICBNb2RhbERpYWxvZy5hZGRQbHVnaW4oaGlzdG9yeVBsdWdpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kYWxEaWFsb2c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWxvZ1dpdGhIYXNoLmpzIiwidmFyIGJhc2VDc3MgPSByZXF1aXJlKCcuL2Nzcy9iYXNlLmxlc3MnKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi9kb20uanMnKTtcbnZhciBzY3JvbGxEbGcgPSByZXF1aXJlKCcuL2RsZ3Njcm9sbC5qcycpO1xudmFyIF8gPSB7XG4gIGFzc2lnbjogdXRpbHMuYXNzaWduXG59LCB3aW5ILCB3aW5XO1xuXG5mdW5jdGlvbiBub29wKCl7fVxuXG4vL+WKqOaAgeaPkuWFpWNzc+agt+W8j1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVUb0hlYWQoYmFzZUZvbnRTaXplKXtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBzdHlsZS5pbm5lckhUTUwgPSB1dGlscy5mblRlbXBsYXRlKFxuICAgIGJhc2VDc3MsXG4gICAge1xuICAgICAgcmVtOiBmdW5jdGlvbihweCl7XG4gICAgICAgIHJldHVybiBweC5yZXBsYWNlKC8oXFxkKylweC8sZnVuY3Rpb24oZXhwciwgdmFsKXtcbiAgICAgICAgICByZXR1cm4gKHZhbCAqMSAvIGJhc2VGb250U2l6ZSkgKyAncmVtJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIHZhciBoZWFkRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICB2YXIgZmlyc3RMaW5rID0gaGVhZERvbS5xdWVyeVNlbGVjdG9yKCdsaW5rJyk7XG5cbiAgaWYoIWZpcnN0TGluaylcbiAgICBoZWFkRG9tLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgZWxzZVxuICAgIGhlYWREb20uaW5zZXJ0QmVmb3JlKHN0eWxlLCBmaXJzdExpbmspO1xuXG59XG5cbi8qXG7nlJ/miJDlr7nor53moYbmqKHmnb/lhoXlrrlcbiAqL1xuICBmdW5jdGlvbiBnZXRIdG1sQ29udGVudChvcHRpb25zKXtcbiAgICB2YXIgdGVtcGxhdGVIdG1sID0gW10sXG4gICAgICAgIGhlYWRlciA9IG9wdGlvbnMuaGVhZGVyO1xuXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxkaXYgY2xhc3M9XCJyYy1tb2RhbFwiPjxkaXYgY2xhc3M9XCJkaWFsb2ctbWFza1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgJyArIG9wdGlvbnMuY2xhenogKyAnXCI+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZy1tYWluXCI+Jyk7XG4gICAgaWYob3B0aW9ucy50aXRsZSAhPSBudWxsICYmIG9wdGlvbnMudGl0bGUgIT0gJycpe1xuICAgICAgdGVtcGxhdGVIdG1sLnB1c2goJzxoZWFkZXI+JyArIHV0aWxzLnJlcGxhY2VUZW1sYXRlKGhlYWRlcixvcHRpb25zKSArICc8L2hlYWRlcj4nKTtcbiAgICB9XG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxzZWN0aW9uPjxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiPjwvZGl2Pjwvc2VjdGlvbj48Zm9vdGVyPicpO1xuICAgIHRlbXBsYXRlSHRtbC5wdXNoKGNyZWF0ZUJ1dHRvbnMuY2FsbCh0aGlzLG9wdGlvbnMpKTtcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICByZXR1cm4gdGVtcGxhdGVIdG1sLmpvaW4oJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzaXplV2luKCl7XG4gICAgd2luSCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICAgIHdpblcgPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgfVxuICAvLyB1dGlscy5iaW5kRXZlbnQod2luZG93LCdyZXNpemUnLHJlc2l6ZVdpbik7XG4vL1RPRE86XG4gIC8vIHJlc2l6ZVdpbigpO1xuICAvKlxuICDliJvlu7rlupXpg6jmjInpkq5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnMob3B0aW9ucyl7XG4gICAgdmFyIGJ0bnMgPSBvcHRpb25zLmJ1dHRvbnMgfHwgW10sXG4gICAgICAgIHRlbXBsYXRlID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie2Nsc31cIiBkYXRhLWlkPVwie2lkfVwiID57bmFtZX08L2J1dHRvbj4nLFxuICAgICAgICBidG5UbXBscyA9ICcnLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgb25lQnRuQ2x6PScnO1xuXG4gICAgaWYob3B0aW9ucy5jYW5jZWxDYWxsYmFjayl7XG4gICAgICBidG5zLnB1c2goe1xuICAgICAgICBpZDogJ2NhbmNlbCcsXG4gICAgICAgIG5hbWU6IG9wdGlvbnMuY2FuY2VsU3RyLFxuICAgICAgICBjYWxsYmFjazogb3B0aW9ucy5jYW5jZWxDYWxsYmFjayxcbiAgICAgICAgY2xzOiBcImNhbmNsZS1idG5cIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoYnRucy5sZW5ndGggPT0wKVxuICAgICAgb25lQnRuQ2x6ID0gJyBtb2RhbC1kaWFsb2ctb25lYnRuJztcblxuICAgIGlmKG9wdGlvbnMub2tDYWxsYmFjayl7XG4gICAgICBidG5zLnB1c2goe1xuICAgICAgICBpZDogJ29rJyxcbiAgICAgICAgbmFtZTogb3B0aW9ucy5zdXJlU3RyLFxuICAgICAgICBjYWxsYmFjazogb3B0aW9ucy5va0NhbGxiYWNrLFxuICAgICAgICBjbHM6IFwic3VyZS1idG5cIiArIG9uZUJ0bkNselxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKVxuICAgICAgYnRucyA9IGJ0bnMucmV2ZXJzZSgpO1xuXG4gICAgYnRucy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0saW5kZXgpe1xuICAgICAgaWYoKGJ0bnMubGVuZ3RoIC0gMSkgPT0gaW5kZXgpXG4gICAgICAgIGl0ZW0uY2xzICs9ICcgbGFzdCc7XG4gICAgICBidG5UbXBscyArPSB1dGlscy5yZXBsYWNlVGVtbGF0ZSh0ZW1wbGF0ZSxpdGVtKTtcbiAgICAgIHNlbGYuY2FsbGJhY2tzW2l0ZW0uaWRdID0gaXRlbS5jYWxsYmFjaztcbiAgICB9KTtcblxuICAgIHJldHVybiBidG5UbXBscztcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydENvbnRlbnQoZG9tLG9wdGlvbnMpe1xuICAgICAgaWYob3B0aW9ucy5zZWxlY3Rvcil7XG4gICAgICAgIHZhciBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcImRpYWxvZy10YXJnZXQgcmVwbGFjZVwiKSxcbiAgICAgICAgICAgIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcixcbiAgICAgICAgICAgIG9yaURpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHNlbGVjdG9yKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgaWYoc2VsZWN0b3IucGFyZW50Tm9kZSl7XG4gICAgICAgICAgc2VsZWN0b3IucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWVudCxzZWxlY3Rvcik7XG4gICAgICAgICAgZG9tLl9jb21tZW50RG9tID0gY29tbWVudDtcbiAgICAgICAgICBpZihvcmlEaXNwbGF5ID09ICdub25lJyl7XG4gICAgICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZG9tLl9vcmlnaW5EaXNwbGF5ID0gb3JpRGlzcGxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5pbm5lckhUTUwgPSBvcHRpb25zLmNvbnRlbnQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJzxici8+Jyk7XG4gICAgfVxuLyoqXG4gKiBbTW9kYWxEaWFsb2cgZGVzY3JpcHRpb25dXG4gKiBjbGF6ejog5by55Ye65qGG55qEY3Nz57G75ZCNXG4gKiBjYW5jZWxTdHIg5Y+W5raI5oyJ6ZKu55qE5oyJ6ZKu5ZCNXG4gKiBzdXJlU3RyIOehruWumuaMiemSrueahOaMiemSruWQjVxuICogdGl0bGUg5by55Ye65qGG55qE5qCH6aKYXG4gKiBoZWFkZXIg6KGo56S65aS06YOo55qEaHRtbOaooeadv1xuICogb2tDYWxsYmFjayDnoa7lrprmjInpkq7lm57osIPlh73mlbBcbiAqIGNhbmNlbENhbGxiYWNrIOWPlua2iOaMiemSruWbnuiwg+WHveaVsFxuICogYnV0dG9ucyBbe2Nsczonc3VyZScsY2FsbGJhY2s6Zm4sbmFtZTonbmFtZSd9XVxuICogdXNlQmFja2dyb3VuZCDljZXlh7vog4zmma/ml7bmiafooYznmoTlm57osIPlh73mlbBcbiAqL1xuICB2YXIgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgICAgICBjbGF6ejogJ2RpYWxvZy10aGVtZScsXG4gICAgICAgIGNhbmNlbFN0cjogJ+WPlua2iCcsXG4gICAgICAgIHN1cmVTdHI6ICfnoa7lrponLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj57dGl0bGV9PC9zcGFuPicsXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgYnV0dG9uczogbnVsbCxcbiAgICAgICAgdXNlQmFja2dyb3VuZDogJ2NhbmNlbCcsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGJlZm9yZUxpc3RlbmVycyA9IFtdLFxuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBbXSxcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IFtdLFxuICAgICAgX2NvdW50ID0gMDtcblxuICB2YXIgTW9kYWxEaWFsb2cgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICB2YXIgZGlhbG9nLFxuICAgICAgICBpZDtcblxuICAgIG9wdGlvbnMgPSBfLmFzc2lnbih7fSxkZWZhdWx0U2V0dGluZ3Msb3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLl9jYWxsQmFja3MgPSBvcHRpb25zLl9jYWxsQmFja3MgfHwge307XG4gICAgaWQgPSBvcHRpb25zLmlkID0gb3B0aW9ucy5pZCB8fCBfY291bnQ7XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMuX2NhbGxCYWNrc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBiZWZvcmVMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgICBsaXN0ZW5lcihvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbaWRdID0gZGlhbG9nID0gbmV3IE1vZGFsRGlhbG9nLmNyZWF0ZShvcHRpb25zKTtcblxuICAgIE1vZGFsRGlhbG9nLm1vZGFsQ291bnQgKys7XG5cbiAgICBhZnRlckxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICAgIGxpc3RlbmVyKGRpYWxvZyk7XG4gICAgfSk7XG5cbiAgICBfY291bnQgKys7XG5cbiAgICByZXR1cm4gZGlhbG9nO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIHZhciBkaWFsb2dEb20sXG4gICAgICAgIGRsZ1BvcyxcbiAgICAgICAgZGxnTWFpbkRvbSxcbiAgICAgICAgb2Zmc2V0SDtcblxuICAgIHRoaXMuY2FsbGJhY2tzID0gb3B0aW9ucy5fY2FsbEJhY2tzO1xuICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuXG4gICAgZGlhbG9nRG9tID0gdXRpbHMuY3JlYXRlSHRtbERvbShnZXRIdG1sQ29udGVudC5jYWxsKHRoaXMsb3B0aW9ucykpO1xuXG4gICAgaW5zZXJ0Q29udGVudChkaWFsb2dEb20sb3B0aW9ucyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dEb20pO1xuXG4gICAgb2Zmc2V0SCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLmRsZ1Njcm9sbCA9IHNjcm9sbERsZy5pbml0VG91Y2goZGlhbG9nRG9tKTtcblxuICAgIGRsZ01haW5Eb20gPSBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZycpO1xuICAgIGRsZ1BvcyA9IHRoaXMuZ2V0UG9zKGRsZ01haW5Eb20pO1xuXG4gICAgXy5hc3NpZ24oZGxnTWFpbkRvbS5zdHlsZSx7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxuICAgICAgdG9wOiBkbGdQb3MudG9wICsgJ3B4J1xuICAgIH0pO1xuXG4gICAgaWYob3B0aW9ucy5hbmltYXRlZClcbiAgICAgIGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLW1haW4nKS5jbGFzc05hbWUgKz0gJyBkbGctYW5pbWF0aW9uJztcblxuICAgIGlmKG9wdGlvbnMudXNlQmFja2dyb3VuZCl7XG4gICAgICB2YXIgdXNlcmJnciA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcbiAgICAgIGlmKCFvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0pe1xuICAgICAgICBvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0gPSBmdW5jdGlvbigpe307XG4gICAgICB9XG4gICAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuZGF0YXNldC5pZCA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuc3R5bGUuaGVpZ2h0ID0gb2Zmc2V0SCArICdweCc7XG5cbiAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gdGhpcy5wcm94eSh0aGlzLl9jbGlja0V2ZW50LGRpYWxvZ0RvbSxvcHRpb25zKTtcbiAgICB0aGlzLmRpYWxvZ0RvbSA9IGRpYWxvZ0RvbTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2dEb20sJ2NsaWNrJyx0aGlzLl9ldmVudExpc3RlbmVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBfLmFzc2lnbihNb2RhbERpYWxvZy5jcmVhdGUucHJvdG90eXBlLHtcbiAgICBjYWxsYmFja3M6IG51bGwsXG4gICAgZ2V0UG9zOiBmdW5jdGlvbihkaWFsb2dEb20pe1xuICAgICAgZGlhbG9nRG9tID0gZGlhbG9nRG9tIHx8IHRoaXMuZGlhbG9nRG9tO1xuICAgICAgaWYoIWRpYWxvZ0RvbSl7XG4gICAgICAgIHJldHVybiB7bGVmdDowLHRvcDowfTtcbiAgICAgIH1cbiAgICAgIHJlc2l6ZVdpbigpO1xuICAgICAgdmFyIGRsZ0ggPSBkaWFsb2dEb20ub2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIGRsZ1cgPSBkaWFsb2dEb20ub2Zmc2V0V2lkdGg7XG4gICAgICB2YXIgZGxnUG9zWSA9ICh3aW5IIC0gZGxnSCA+PSAwICkgPyAod2luSCAtIGRsZ0gpLzIgOiB3aW5IKjAuMTtcbiAgICAgIHZhciBkbGdQb3NYID0gKHdpblcgLSBkbGdXID49IDAgKSA/ICh3aW5XIC0gZGxnVykvMiA6IHdpblcqMC4xO1xuXG4gICAgICByZXR1cm4ge2xlZnQ6IGRsZ1Bvc1gsIHRvcDogZGxnUG9zWX07XG4gICAgfSxcbiAgICBjbG9zZURpYWxvZzpmdW5jdGlvbihpc05vdEludm9rZSl7XG4gICAgICB2YXIgZGlhbG9nRG9tID0gdGhpcy5kaWFsb2dEb20sXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICBfY29tbWVudERvbSxcbiAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgaWYoIWRpYWxvZ0RvbSlcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICAgIHRoaXMucmVtb3ZlRGlhbG9nKGRpYWxvZ0RvbSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmKG9wdGlvbnMuc2VsZWN0b3IgJiYgZGlhbG9nRG9tLl9jb21tZW50RG9tKXtcbiAgICAgICAgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yO1xuICAgICAgICBfY29tbWVudERvbSA9IGRpYWxvZ0RvbS5fY29tbWVudERvbTtcblxuICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gZGlhbG9nRG9tLl9vcmlnaW5EaXNwbGF5O1xuICAgICAgICBfY29tbWVudERvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzZWxlY3RvcixfY29tbWVudERvbSk7XG5cbiAgICAgICAgZGlhbG9nRG9tLl9jb21tZW50RG9tID0gbnVsbDtcbiAgICAgICAgZGlhbG9nRG9tLl9vcmlnaW5EaXNwbGF5ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZ0RvbSwnY2xpY2snLHRoaXMuX2V2ZW50TGlzdGVuZXIpO1xuICAgICAgLy8gZGlhbG9nRG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGlhbG9nRG9tKTtcbiAgICAgIHRoaXMuZGxnU2Nyb2xsLmRlc3Ryb3lTY3JvbGwgJiYgdGhpcy5kbGdTY3JvbGwuZGVzdHJveVNjcm9sbCgpO1xuXG4gICAgICBpZighaXNOb3RJbnZva2Upe1xuICAgICAgICBjbG9zZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgICAgICAgbGlzdGVuZXIoc2VsZik7XG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2spXG4gICAgICAgICAgb3B0aW9ucy5jYW5jZWxDYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gbnVsbDtcbiAgICAgIHRoaXMuZGlhbG9nRG9tID0gZGlhbG9nRG9tID0gbnVsbDtcblxuICAgICAgb3B0aW9ucy5jb21wbGV0ZSAmJiBvcHRpb25zLmNvbXBsZXRlKCk7XG5cbiAgICAgIGRlbGV0ZSBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W3RoaXMuaWRdO1xuXG4gICAgICBNb2RhbERpYWxvZy5tb2RhbENvdW50IC0tO1xuICAgIH0sXG4gICAgcmVtb3ZlRGlhbG9nOiBmdW5jdGlvbihkbGdEb20pe1xuICAgICAgdXRpbHMuYmluZEV2ZW50KGRsZ0RvbSwgJ3RyYW5zaXRpb25lbmQnLCBfcmVtb3ZlVHJhbnNpdGlvbilcbiAgICAgIHV0aWxzLmJpbmRFdmVudChkbGdEb20sJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBfcmVtb3ZlVHJhbnNpdGlvbik7XG5cbiAgICAgIGRsZ0RvbS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgICAgZnVuY3Rpb24gX3JlbW92ZVRyYW5zaXRpb24oKXtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnRG9tLCd0cmFuc2l0aW9uZW5kJyxfcmVtb3ZlVHJhbnNpdGlvbik7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0RvbSwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3JlbW92ZVRyYW5zaXRpb24pO1xuICAgICAgICBkbGdEb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkbGdEb20pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVmcmVzaDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBkaWFsb2dEb20gPSB0aGlzLmRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nJyksXG4gICAgICAgICAgZGxnUG9zID0gdGhpcy5nZXRQb3MoZGlhbG9nRG9tKTtcblxuICAgICAgXy5hc3NpZ24oZGlhbG9nRG9tLnN0eWxlLHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxuICAgICAgICB0b3A6IGRsZ1Bvcy50b3AgKyAncHgnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGxnU2Nyb2xsLnJlZnJlc2goKTtcbiAgICB9LFxuICAgIF9jbGlja0V2ZW50OiBmdW5jdGlvbihlLGRpYWxvZ0RvbSxvcHRpb25zKXtcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgICBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgaWYodHlwZW9mIHRoaXMuY2FsbGJhY2tzW2lkXSA9PSAnZnVuY3Rpb24nICYmICF0aGlzLmNhbGxiYWNrc1tpZF0uY2FsbCh0aGlzLGUpKXtcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHNlbGYuY2xvc2VEaWFsb2coKTtcbiAgICAgICAgLy8gfSwxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3h5OiBmdW5jdGlvbihmbil7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgd3JhcEFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYod3JhcEFyZ3MubGVuZ3RoID4gMClcbiAgICAgICAgICBhcmdzID0gYXJncy5jb25jYXQod3JhcEFyZ3MpO1xuXG4gICAgICAgIGZuLmFwcGx5KHNlbGYsYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBNb2RhbERpYWxvZy5hbGVydCA9IGZ1bmN0aW9uKGNvbnRlbnQsdGl0bGUsY2FsbGJhY2ssZG9tLGNscyl7XG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcblxuICAgIGNseiArPSAnIGFsZXJ0LWRpYWxvZyc7XG5cbiAgICBpZih0eXBlb2YgY29udGVudCAhPT0gJ29iamVjdCcpe1xuICAgICAgY29udGVudCA9IHV0aWxzLmNyZWF0ZVBhcmFtcyh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgb2tDYWxsYmFjazpjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBkb21cbiAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnRlbnQub2tDYWxsYmFjayA9IGNvbnRlbnQub2tDYWxsYmFjayB8fCBub29wO1xuXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXG4gICAgICBjbHogKz0gJyBkbGctbm8tdGl0bGUnO1xuICAgIGVsc2VcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xuXG4gICAgY29udGVudC5jbGF6eiA9IGNsejtcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coY29udGVudCk7XG4gIH1cblxuICBNb2RhbERpYWxvZy5jb25maXJtID0gZnVuY3Rpb24oY29udGVudCxzdXJlRm4sdGl0bGUsYnRUZXh0MSxidFRleHQyLGNhbmNlbEZuLGNscyl7XG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcblxuICAgIGNseiArPSAnIGNvbmZpcm0tZGlhbG9nJztcblxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XG4gICAgICBjb250ZW50ID0gdXRpbHMuY3JlYXRlUGFyYW1zKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOnN1cmVGbixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGxiYWNrOmNhbmNlbEZuLFxuICAgICAgICAgICAgICAgICAgc3VyZVN0cjogYnRUZXh0MixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFN0cjpidFRleHQxXG4gICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZighY29udGVudC50aXRsZSlcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XG4gICAgZWxzZVxuICAgICAgY2x6ICs9ICcgZGxnLWhhcy10aXRsZSc7XG5cbiAgICBjb250ZW50Lm9rQ2FsbGJhY2sgPSBjb250ZW50Lm9rQ2FsbGJhY2sgfHwgbm9vcDtcbiAgICBjb250ZW50LmNhbmNlbENhbGxiYWNrID0gY29udGVudC5jYW5jZWxDYWxsYmFjayB8fCBub29wO1xuICAgIGNvbnRlbnQuY2xhenogPSBjbHo7XG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nKGNvbnRlbnQpO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgYWZ0ZXJMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIGFmdGVyTGlzdGVuZXJzID0gYWZ0ZXJMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIE1vZGFsRGlhbG9nLnByZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xuICAgIGJlZm9yZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgYmVmb3JlTGlzdGVuZXJzID0gYmVmb3JlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICBNb2RhbERpYWxvZy5jbG9zZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICBjbG9zZWRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IGNsb3NlZExpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgIHJldHVybiBpdGVtICE9IGxpc3RlbmVyO1xuICAgICAgfSlcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9wbHVnaW5zID0gW107XG5cbiAgTW9kYWxEaWFsb2cuYWRkUGx1Z2luID0gZnVuY3Rpb24oZm4pe1xuICAgIF9wbHVnaW5zLnB1c2goZm4pO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcgPSB7fTtcbiAgdmFyIGlzQ29uZmlnID0gZmFsc2U7XG5cbiAgTW9kYWxEaWFsb2cuY29uZmlnID0gZnVuY3Rpb24oY29uZmlnKXtcbiAgICB2YXIgb3B0aW9ucyA9IHV0aWxzLmFzc2lnbih7fSxNb2RhbERpYWxvZy5kZWZhdWx0Q29uZmlnLGNvbmZpZyk7XG5cbiAgICBNb2RhbERpYWxvZy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBpZihpc0NvbmZpZyl7XG4gICAgICBjb25zb2xlLmluZm8oJ21vZGFsZGlhbGcgb25seSBjYW4gY29uZmlnIG9uY2UnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IodmFyIGk9MCwgbGVuPV9wbHVnaW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIF9wbHVnaW5zW2ldKE1vZGFsRGlhbG9nLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpbnNlcnRTdHlsZVRvSGVhZChvcHRpb25zLmJhc2VGb250U2l6ZSB8fCAxNik7XG5cbiAgICBpc0NvbmZpZyA9IHRydWU7XG4gIH1cblxuICB1dGlscy5iaW5kRXZlbnQod2luZG93LCBcIm9yaWVudGF0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXtcbiAgICBPYmplY3Qua2V5cyhNb2RhbERpYWxvZy5kaWFsb2dMaXN0KS5mb3JFYWNoKGRpYWxvZz0+e1xuICAgICAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdFtkaWFsb2ddLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdCA9IHt9O1xuICBNb2RhbERpYWxvZy5tb2RhbENvdW50ID0gMDtcblxuTW9kYWxEaWFsb2cuRG9tVXRpbHMgPSB1dGlscztcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbERpYWxvZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIucmMtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xcbn1cXG4ucmMtbW9kYWwgLm1vZGFsLWRpYWxvZyB7XFxuICBib3JkZXItcmFkaXVzOiAkZm4ucmVtKCAxcHggKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAkZm4ucmVtKCAzMjRweCApO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB6LWluZGV4OiA5MDAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1vZGFsLWRpYWxvZy5kbGctbm8tdGl0bGUgaGVhZGVyIHtcXG4gIGhlaWdodDogJGZuLnJlbSggMjhweCApO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1uby10aXRsZSAuZGlhbG9nLWNvbnRlbnQge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLW5vLXRpdGxlIHNlY3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLm1vZGFsLWRpYWxvZy5kbGctaGFzLXRpdGxlIGhlYWRlciB7XFxuICBwYWRkaW5nOiAwIDAgJGZuLnJlbSggMTBweCApIDA7XFxuICBmb250LXNpemU6ICRmbi5yZW0oIDE4cHggKTtcXG59XFxuLm1vZGFsLWRpYWxvZy5hbGVydC1kaWFsb2cgc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbC1kaWFsb2cgLm1vZGFsLWRpYWxvZy1tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDkwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgZm9udC1zaXplOiAkZm4ucmVtKCAxNnB4ICk7XFxuICBib3JkZXItcmFkaXVzOiAkZm4ucmVtKCAzcHggKTtcXG4gIHBhZGRpbmctdG9wOiAkZm4ucmVtKCAyOHB4ICk7XFxufVxcbi5tb2RhbC1kaWFsb2cgLmRpYWxvZy10aXRsZSB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLm1vZGFsLWRpYWxvZyAuZGlhbG9nLWNvbnRlbnQge1xcbiAgY29sb3I6ICMzMjMyMzI7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG4ubW9kYWwtZGlhbG9nIGVtIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLm1vZGFsLWRpYWxvZyBzZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDBweCAkZm4ucmVtKCAyNnB4ICk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC1oZWlnaHQ6ICRmbi5yZW0oIDE4OHB4ICk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciB7XFxuICBib3JkZXItdG9wOiBzb2xpZCAjZDVkNWQ1O1xcbiAgYm9yZGVyLXRvcC13aWR0aDogJGZuLnJlbSggMXB4ICk7XFxuICBoZWlnaHQ6ICRmbi5yZW0oIDQ1cHggKTtcXG4gIGxpbmUtaGVpZ2h0OiAkZm4ucmVtKCA0NXB4ICk7XFxuICBtYXJnaW4tdG9wOiAkZm4ucmVtKCAyMHB4ICk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAkZm4ucmVtKCAxNnB4ICk7XFxuICBoZWlnaHQ6ICRmbi5yZW0oIDQ1cHggKTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uLm1vZGFsLWRpYWxvZy1vbmVidG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIGJ1dHRvbjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGJvcmRlci1yaWdodDogc29saWQgI2Q1ZDVkNTtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogJGZuLnJlbSggMXB4ICk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uLmxhc3Q6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLnN1cmUtYnRuLFxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIC5jYW5jbGUtYnRuIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLmNhbmNsZS1idG4ge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIC5zdXJlLWJ0biB7XFxuICBjb2xvcjogIzUxN2JkMTtcXG59XFxuLm1vZGFsLWRpYWxvZy5hbGVydC1kaWFsb2cgZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsLWRpYWxvZy5hbGVydC1kaWFsb2cgZm9vdGVyIC5zdXJlLWJ0biB7XFxuICBmbG9hdDogbm9uZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZGlhbG9nLW1hc2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA4OTk5O1xcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0FRTUFBQUMzL0YzK0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBTlFURlJGQUFBQXAzbzkyZ0FBQUFGMFVrNVRnSzFlVzBZQUFBQUxTVVJCVkFqWFkyREFCd0FBSGdBQmJvVkhNZ0FBQUFCSlJVNUVya0pnZ2c9PSk7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2Jhc2UubGVzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlSHRtbERvbTogKGZ1bmN0aW9uIGNyZWF0ZUh0bWwoKXtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oaHRtbCl7XG4gICAgICB2YXIgdGVtcDtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgdGVtcCA9IGRpdi5jaGlsZHJlblswXTtcbiAgICAgIGRpdi5yZW1vdmVDaGlsZCh0ZW1wKTtcbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cbiAgfSkoKSxcbiAgcmVwbGFjZVRlbWxhdGU6IGZ1bmN0aW9uKHN0cixkYXRhKXtcbiAgICB2YXIgcmVneCA9IG5ldyBSZWdFeHAoL3soLio/KX0vZyksXG4gICAgICAgIHRlbXA7XG4gICAgd2hpbGUodGVtcCA9IHJlZ3guZXhlYyhzdHIpKXtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHRlbXBbMF0sZGF0YVt0ZW1wWzFdXSB8fCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcclxcbl0qL2csJycpO1xuICB9LFxuICBmblRlbXBsYXRlOiBmdW5jdGlvbihzdHIsIGRhdGEpe1xuICAgIHZhciByZWd4ID0gbmV3IFJlZ0V4cCgvXFwkZm5cXC4oLis/KVxcKCguKj8pXFwpL2cpO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ3gsIGZ1bmN0aW9uKGV4cHIsIGZuLCB2YWwpe1xuICAgICAgcmV0dXJuIGRhdGFbZm5dKHZhbCk7XG4gICAgfSkucmVwbGFjZSgvW1xcclxcbl0qL2csJycpOztcblxuICB9LFxuICBiaW5kRXZlbnQ6IGZ1bmN0aW9uKGRvbSxuYW1lLGZuKXtcbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lclxuICAgICAgPyBkb20uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLGZuLGZhbHNlKVxuICAgICAgOiBkb20uYXR0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZuKTtcbiAgfSxcbiAgdW5CaW5kRXZlbnQ6IGZ1bmN0aW9uKGRvbSxuYW1lLGZuKXtcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgPyBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLGZuLGZhbHNlKVxuICAgICAgOiBkb20uZGV0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZuKTtcbiAgfSxcbiAgZ2V0VXJsUGFyYW06IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiKF58JilcIiArIGtleSArIFwiPShbXiZdKikoJnwkKVwiLCBcImlcIik7XG4gICAgICB2YXIgciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpLm1hdGNoKHJlZyk7XG4gICAgICBpZiAociAhPSBudWxsKSByZXR1cm4gZGVjb2RlVVJJKHJbMl0pO1xuICAgICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGFzc2lnbjogZnVuY3Rpb24oKXtcbiAgICB2YXIgdGVtcCA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBmb3IodmFyIGk9MCxsZW49YXJncy5sZW5ndGg7aTxsZW47aSsrKXtcbiAgICAgIHZhciBpdGVtID0gYXJnc1tpXTtcbiAgICAgIGlmKCFpdGVtKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIGZvcih2YXIgcCBpbiBpdGVtKXtcbiAgICAgICAgaWYoaXRlbS5oYXNPd25Qcm9wZXJ0eShwKSl7XG4gICAgICAgICAgdGVtcFtwXSA9IGl0ZW1bcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRlbXA7XG4gIH0sXG4gIGNsb3Nlc3Q6IGZ1bmN0aW9uKGRvbSxjbHMpe1xuICAgIHZhciBjbHNSZWd4ID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMrKScrIGNscyArICcoXFxcXHMrfCQpJyksXG4gICAgICAgIHRhZ1JlZ3ggPSBuZXcgUmVnRXhwKCdeJysgY2xzICsgJyQnKSxcbiAgICAgICAgcGFyZW50ID0gZG9tO1xuXG4gICAgaWYodGVzdChkb20pKVxuICAgICAgcmV0dXJuIGRvbTtcblxuICAgIHdoaWxlKCEhKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSAmJiAgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT0gJ2h0bWwnKXtcbiAgICAgIGlmKHRlc3QocGFyZW50KSl7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG4gICAgZnVuY3Rpb24gdGVzdChkb20pe1xuXG4gICAgICBpZighIWRvbS5jbGFzc05hbWUubWF0Y2goY2xzUmVneCkpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1lbHNlIGlmKHRhZ1JlZ3gudGVzdChkb20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZVBhcmFtczogZnVuY3Rpb24ocGFyYW0pe1xuICAgIHZhciByZXMgPSB7fTtcblxuICAgIGZvcih2YXIgcCBpbiBwYXJhbSl7XG4gICAgICBpZihwYXJhbS5oYXNPd25Qcm9wZXJ0eShwKSl7XG4gICAgICAgIGlmKHR5cGVvZiBwYXJhbVtwXSAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgcmVzW3BdID0gcGFyYW1bcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kb20uanMiLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL2RvbS5qcycpO1xuXG5mdW5jdGlvbiBnZXRIZWlnaHQoc2VsLGlzT3V0ZXIpe1xuICB2YXIgc2VjdGlvblN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWwpLFxuICAgICAgbWFyZ2luSCA9IDA7XG5cbiAgaWYoaXNPdXRlcil7XG4gICAgbWFyZ2luSCA9IHNlY3Rpb25TdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykucmVwbGFjZSgncHgnLCcnKSoxICtcbiAgICAgICAgICAgICAgc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKS5yZXBsYWNlKCdweCcsJycpKjFcbiAgfVxuICByZXR1cm4gKFxuICAgICAgICAgIHNlY3Rpb25TdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIHNlY3Rpb25TdHlsZS5wYWRkaW5nVG9wLnJlcGxhY2UoJ3B4JywnJykqMSArXG4gICAgICAgICAgc2VjdGlvblN0eWxlLnBhZGRpbmdCb3R0b20ucmVwbGFjZSgncHgnLCcnKSoxICtcbiAgICAgICAgICBzZWN0aW9uU3R5bGUuYm9yZGVyVG9wV2lkdGgucmVwbGFjZSgncHgnLCcnKSoxICtcbiAgICAgICAgICBzZWN0aW9uU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgucmVwbGFjZSgncHgnLCcnKSoxICtcbiAgICAgICAgICBtYXJnaW5IXG4gICAgICAgICk7XG59XG5cbnZhciBlYXNlID0ge1xuICBjaXJjdWxhcjoge1xuICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMSwgMC41NywgMC4xLCAxKSdcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRUb3VjaDogZnVuY3Rpb24oZGlhbG9nKXtcbiAgICB2YXIgZGxnQ29udGVudCA9ICBkaWFsb2cucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jb250ZW50JyksXG4gICAgICAgIHNlY3Rpb24gPSBkaWFsb2cucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpLFxuICAgICAgICBzY3JvbGxUYXJnZVN0eWxlID0gZGxnQ29udGVudC5zdHlsZSxcbiAgICAgICAgd3JhcHBlckhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxLFxuICAgICAgICBtYXhIZWlnaHQsIHN0YXJ0UG9zeCwgc3RhcnRQb3N5LCBpc1RvdWNoLFxuICAgICAgICBzdGFydFRpbWUsIGRpc3RZLCBkaXN0WCxcbiAgICAgICAgZW5kVGltZSA9IDAsIHggPTAsIHkgPTAsIHN0YXJ0WCwgc3RhcnRZLCBpc0luVHJhbnNpdGlvbjtcblxuICAgIG1heEhlaWdodCA9IHdyYXBwZXJIZWlnaHQgLSBnZXRIZWlnaHQoZGxnQ29udGVudCx0cnVlKTtcblxuICAgIHNjcm9sbFRhcmdlU3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gZWFzZS5jaXJjdWxhci5zdHlsZTtcblxuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2csJ3RvdWNobW92ZScsc3RvcFNjcm9sbE1vdmUpO1xuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2csJ3RvdWNoc3RhcnQnLHN0YXJ0VG91Y2gpO1xuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2csJ3RvdWNoZW5kJyx0b3VjaGVFbmQpO1xuICAgIHV0aWxzLmJpbmRFdmVudChkbGdDb250ZW50LCd0cmFuc2l0aW9uZW5kJyxfdHJhbnNpdGlvbkVuZCk7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3dlYmtpdFRyYW5zaXRpb25FbmQnLF90cmFuc2l0aW9uRW5kKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95U2Nyb2xsOiBmdW5jdGlvbigpe1xuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkaWFsb2csJ3RvdWNobW92ZScsc3RvcFNjcm9sbE1vdmUpO1xuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkaWFsb2csJ3RvdWNoc3RhcnQnLHN0YXJ0VG91Y2gpO1xuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkaWFsb2csJ3RvdWNoZW5kJyx0b3VjaGVFbmQpO1xuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkbGdDb250ZW50LCd0cmFuc2l0aW9uZW5kJyxfdHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3dlYmtpdFRyYW5zaXRpb25FbmQnLF90cmFuc2l0aW9uRW5kKTtcbiAgICAgICAgZGxnQ29udGVudCA9IHNlY3Rpb24gPSBudWxsO1xuICAgICAgfSxcbiAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHdyYXBwZXJIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24pLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMTtcbiAgICAgICAgbWF4SGVpZ2h0ID0gd3JhcHBlckhlaWdodCAtIGdldEhlaWdodChkbGdDb250ZW50LHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzdGFydFRvdWNoKGUpe1xuICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdLFxuICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNsb3Nlc3QoZS50YXJnZXQsJ2RpYWxvZy1jb250ZW50JyksXG4gICAgICAgICAgcG9zO1xuXG4gICAgICBpZighIXRhcmdldCl7XG4gICAgICAgIGlmKGlzSW5UcmFuc2l0aW9uKXtcbiAgICAgICAgICBfdHJhbnNpdGlvblRpbWUoKTtcbiAgICAgICAgICBpc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICAgIHBvcyA9IGdldENvbXB1dGVkUG9zaXRpb24oKTtcbiAgICAgICAgICB0cmFuc2xhdGUoTWF0aC5yb3VuZChwb3MueCksIE1hdGgucm91bmQocG9zLnkpKTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydFBvc3ggPSB0b3VjaC5wYWdlWDtcbiAgICAgICAgc3RhcnRQb3N5ID0gdG91Y2gucGFnZVk7XG4gICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGRpc3RYID0gZGlzdFkgPSAwO1xuICAgICAgICBzdGFydFggPSB4O1xuICAgICAgICBzdGFydFkgPSB5O1xuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcbiAgICAgIH1lbHNle1xuICAgICAgICBpc1RvdWNoID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0b3BTY3JvbGxNb3ZlKGUpe1xuICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdLFxuICAgICAgICAgIHBvc1ggPSB0b3VjaC5wYWdlWCxcbiAgICAgICAgICBwb3NZID0gdG91Y2gucGFnZVksXG4gICAgICAgICAgbm9kZU5hbWUgPSBlLnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgIHZhciBkZWx0YVkgPSBwb3NZIC0gc3RhcnRQb3N5LFxuICAgICAgICAgIGRlbHRhWCA9IHBvc1ggLSBzdGFydFBvc3gsXG4gICAgICAgICAgbmV3WTtcblxuICAgICAgc3RhcnRQb3N4ID0gcG9zWDtcbiAgICAgIHN0YXJ0UG9zeSA9IHBvc1k7XG5cbiAgICAgIGRpc3RYICs9IGRlbHRhWDtcbiAgICAgIGRpc3RZICs9IGRlbHRhWTtcblxuICAgICAgaWYoIG5vZGVOYW1lICE9ICdpbnB1dCcgJiYgbm9kZU5hbWUgIT0gJ3NlbGVjdCcgJiYgbm9kZU5hbWUgIT0gJ3RleHRhcmVhJyl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICggKHRpbWVzdGFtcCAtIGVuZFRpbWUgPiAzMDAgJiYgTWF0aC5hYnMoZGlzdFkpIDwgMTApIHx8ICFpc1RvdWNoIHx8IG1heEhlaWdodCA+PSAwKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXdZID0geSArIGRlbHRhWTtcbiAgICAgIGlmICggbmV3WSA+IDAgfHwgbmV3WSA8IG1heEhlaWdodCApIHtcbiAgICAgICAgbmV3WSA9IHkgKyBkZWx0YVkgLyAzO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2xhdGUoZGxnQ29udGVudCxuZXdZKTtcblxuICAgICAgaWYgKCB0aW1lc3RhbXAgLSBzdGFydFRpbWUgPiAzMDAgKSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgc3RhcnRYID0geDtcbiAgICAgICAgc3RhcnRZID0geTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdG91Y2hlRW5kKGUpe1xuICAgICAgdmFyIGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSxcbiAgICAgICAgICBuZXdZID0gTWF0aC5yb3VuZCh5KSxcbiAgICAgICAgICB0aW1lID0gMCxcbiAgICAgICAgICBtb21lbnR1bVk7XG5cbiAgICAgIHN0YXJ0UG9zeCA9IG51bGw7XG4gICAgICBzdGFydFBvc3kgPSBudWxsO1xuICAgICAgZW5kVGltZSA9IERhdGUubm93KCk7XG4gICAgICBpc0luVHJhbnNpdGlvbiA9IDA7XG5cbiAgICAgIGlmIChyZXNldFBvc2l0aW9uKGRsZ0NvbnRlbnQsNTAwKSB8fCBtYXhIZWlnaHQgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNjcm9sbFRvKGRsZ0NvbnRlbnQsIG5ld1kpO1xuXG4gICAgICBpZihkdXJhdGlvbiA8IDMwMCl7XG4gICAgICAgIG1vbWVudHVtWSA9IG1vbWVudHVtKHksIHN0YXJ0WSwgZHVyYXRpb24pO1xuICAgICAgICBuZXdZID0gbW9tZW50dW1ZLmRlc3RpbmF0aW9uO1xuICAgICAgICB0aW1lID0gbW9tZW50dW1ZLmR1cmF0aW9uO1xuICAgICAgICBpc0luVHJhbnNpdGlvbiA9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmICggbmV3WSAhPSB5ICkge1xuICAgICAgICBzY3JvbGxUbyhkbGdDb250ZW50LCBuZXdZLHRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzY3JvbGxUbyh0YXJnZXQscG9zeSx0aW1lKXtcbiAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XG4gICAgICBpc0luVHJhbnNpdGlvbiA9IHRpbWUgPiAwO1xuICAgICAgX3RyYW5zaXRpb25UaW1lKHRpbWUpO1xuICAgICAgdHJhbnNsYXRlKHRhcmdldCxwb3N5KVxuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUodGFyZ2V0LCBwb3N5KSB7XG4gICAgICBzY3JvbGxUYXJnZVN0eWxlLndlYmtpdFRyYW5zZm9ybSAgPSAndHJhbnNsYXRlM2QoMHB4LCcgKyBwb3N5ICsgJ3B4LDBweCknO1xuICAgICAgeSA9IHBvc3k7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0UG9zaXRpb24odGFyZ2V0LHRpbWUpe1xuICAgICAgdmFyIHBvc1kgPSB5O1xuXG4gICAgICB0aW1lID0gdGltZSB8fCAwO1xuXG4gICAgICBpZiAocG9zWSA+PSAwICkge1xuICAgICAgICBwb3NZID0gMDtcbiAgICAgIH0gZWxzZSBpZiAocG9zWSA8IG1heEhlaWdodCApIHtcbiAgICAgICAgcG9zWSA9IG1heEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKCBwb3NZID09IHkgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2Nyb2xsVG8odGFyZ2V0LCBwb3NZLCB0aW1lKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbWVudHVtKGN1cnJlbnQsIHN0YXJ0LCB0aW1lKXtcbiAgICAgIHZhciBkaXN0YW5jZSA9IGN1cnJlbnQgLSBzdGFydCxcbiAgICAgICAgICBzcGVlZCA9IE1hdGguYWJzKGRpc3RhbmNlKSAvIHRpbWUsXG4gICAgICAgICAgZGVjZWxlcmF0aW9uID0gMC4wMDA2LFxuICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgIGR1cmF0aW9uO1xuXG4gICAgICBkZXN0aW5hdGlvbiA9IGN1cnJlbnQgKyAoIHNwZWVkICogc3BlZWQgKSAvICggMiAqIGRlY2VsZXJhdGlvbiApICogKCBkaXN0YW5jZSA8IDAgPyAtMSA6IDEgKTsgLy8gcz0oYXReMikvMlxuICAgICAgZHVyYXRpb24gPSBzcGVlZCAvIGRlY2VsZXJhdGlvbjsgLy8gdj1hdFxuXG4gICAgICBpZiAoIGRlc3RpbmF0aW9uIDwgbWF4SGVpZ2h0ICkge1xuICAgICAgICBkZXN0aW5hdGlvbiA9IG1heEhlaWdodCAtICggd3JhcHBlckhlaWdodCAvIDIuNSAqICggc3BlZWQgLyA4ICkgKTtcbiAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhkZXN0aW5hdGlvbiAtIGN1cnJlbnQpO1xuICAgICAgICBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XG4gICAgICB9ZWxzZSBpZihkZXN0aW5hdGlvbiA+IDApe1xuICAgICAgICBkZXN0aW5hdGlvbiA9IHdyYXBwZXJIZWlnaHQgLyAyLjUgKiAoIHNwZWVkIC8gOCApO1xuICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGN1cnJlbnQpICsgZGVzdGluYXRpb247XG4gICAgICAgIGR1cmF0aW9uID0gZGlzdGFuY2UgLyBzcGVlZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdGluYXRpb246IE1hdGgucm91bmQoZGVzdGluYXRpb24pLFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRQb3NpdGlvbigpIHtcbiAgICAgIHZhciBtYXRyaXggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkbGdDb250ZW50LCBudWxsKSxcbiAgICAgICAgeCwgeTtcblxuICAgICAgbWF0cml4ID0gbWF0cml4LndlYmtpdFRyYW5zZm9ybS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsICcpO1xuICAgICAgeCA9ICsobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0pO1xuICAgICAgeSA9ICsobWF0cml4WzEzXSB8fCBtYXRyaXhbNV0pO1xuXG4gICAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3RyYW5zaXRpb25UaW1lKHRpbWUpe1xuICAgICAgdGltZSA9IHRpbWUgfHwgMDtcbiAgICAgIHNjcm9sbFRhcmdlU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdGltZSArICdtcyc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF90cmFuc2l0aW9uRW5kKCl7XG4gICAgICBpZighaXNJblRyYW5zaXRpb24pXG4gICAgICAgIHJldHVybjtcbiAgICAgIF90cmFuc2l0aW9uVGltZSgpO1xuICAgICAgaWYoIXJlc2V0UG9zaXRpb24oZGxnQ29udGVudCkpe1xuICAgICAgICBpc0luVHJhbnNpdGlvbiA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kbGdzY3JvbGwuanMiLCJmdW5jdGlvbiBpbml0QmFja1ByZXNzKE1vZGFsRGlhbG9nLCBvcHRpb25zKXtcblxuICBpZighb3B0aW9ucy51c2VIYXNoKVxuICAgIHJldHVybjtcblxuICBsZXQgbm90aWZ5QmFja3ByZXNzID0gb3B0aW9ucy5ub3RpZnlCYWNrcHJlc3M7XG4gIGxldCBkaWFsb2dJZExpc3QgPSBbXTtcblxuICBub3RpZnlCYWNrcHJlc3MgPSBub3RpZnlCYWNrcHJlc3Mob3B0aW9ucyk7XG5cbiAgTW9kYWxEaWFsb2cuYWZ0ZXJMaXN0ZW5lcihmdW5jdGlvbihkaWFsb2cpe1xuICAgIGRpYWxvZ0lkTGlzdC5wdXNoKGRpYWxvZy5pZCk7XG5cbiAgICBkaWFsb2cubGlzdGVuZXJCYWNrUHJlc3MgPSBub3RpZnlCYWNrcHJlc3MuYWRkTGlzdGVuZXIobGlzdGVuZXJCYWNrcHJlc3MoKSwgJ2FkZCcpO1xuXG4gICAgZGlhbG9nLm5vdGlmeVByaW9yaXR5ID0gbm90aWZ5QmFja3ByZXNzLmNhbGxiYWNrUHJpb3JpdHk7XG4gIH0pO1xuXG4gIE1vZGFsRGlhbG9nLmNsb3NlZExpc3RlbmVyKGZ1bmN0aW9uKGRpYWxvZyl7XG4gICAgZGlhbG9nSWRMaXN0ID0gZGlhbG9nSWRMaXN0LmZpbHRlcigoaWQpPT57XG4gICAgICByZXR1cm4gZGlhbG9nLmlkICE9PSBpZDtcbiAgICB9KTtcbiAgICAvLyBub3RpZnlCYWNrcHJlc3MucmVtb3ZlTGlzdGVuZXIoZGlhbG9nLmxpc3RlbmVyQmFja1ByZXNzKTtcbiAgICBkaWFsb2cubGlzdGVuZXJCYWNrUHJlc3MudXBkYXRlKCk7XG4gICAgbm90aWZ5QmFja3ByZXNzLmdvQmFjaygpO1xuICB9KTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lckJhY2twcmVzcygpIHtcblxuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgaWYoIWRpYWxvZ0lkTGlzdC5sZW5ndGgpe1xuICAgICAgICBvcHRpb25zLmJhY2tQcmVzcyAmJiBvcHRpb25zLmJhY2tQcmVzcygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRsZ0lkID0gZGlhbG9nSWRMaXN0LnBvcCgpO1xuXG4gICAgICBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W2RsZ0lkXS5jbG9zZURpYWxvZyh0cnVlKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdEJhY2tQcmVzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGx1Z2lucy9iYWNrUHJlc3MyLmpzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZmx5bWVVdGlsc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmbHltZVV0aWxzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgaGFzaEhpc3RvcnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cdHZhciBnZW5lcmF0ZUZuID0gZnVuY3Rpb24gZ2VuZXJhdGVGbigpIHtcblxuXHQgIHZhciBpc1N1cHBvcnRCYWNrcHJlc3NMaXN0ZW5lciA9IHdpbmRvdy5FdmVudEphdmFzY3JpcHRJbnRlcmZhY2UgJiYgISF3aW5kb3cuRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlLmxpc3RlbkJhY2tQcmVzcyxcblx0ICAgICAgaGFzaExpc3RlbmVyID0gaGFzaEhpc3RvcnkoKTtcblxuXHQgIGlmICghaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIpIHtcblx0ICAgIGhhc2hMaXN0ZW5lci5saXN0ZW5lcihmdW5jdGlvbiAocGF0aCwgcHJlcGF0aCkge1xuXHQgICAgICB2YXIgcHJlcGF0aCA9IHByZXBhdGggKiAxO1xuXG5cdCAgICAgIGlmICghIXByZXBhdGggJiYgcGF0aCAtIHByZXBhdGggPCAwKSB7XG5cdCAgICAgICAgd2luZG93Ll9fYmFja3ByZXNzKCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBsaXN0ZW5CYWNrUHJlc3MoKTtcblx0ICB9XG5cblx0ICBmdW5jdGlvbiBsaXN0ZW5CYWNrUHJlc3MoKSB7XG5cdCAgICBpZiAoaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIpIEV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5saXN0ZW5CYWNrUHJlc3MoJ19fYmFja3ByZXNzJyk7XG5cdCAgfVxuXG5cdCAgd2luZG93Ll9fYmFja3ByZXNzID0gZnVuY3Rpb24gKGlzZnJvbSkge1xuXHQgICAgdmFyIGlzTVRvdWNoID0gaXNmcm9tID09ICdmcm9tX21lbnUnID8gZmFsc2UgOiB0cnVlO1xuXHQgICAgbm90aWZ5QmFja3ByZXNzLnJ1bihpc01Ub3VjaCk7XG5cdCAgICBsaXN0ZW5CYWNrUHJlc3MoKTtcblx0ICB9O1xuXG5cdCAgdmFyIF9jYWxsYmFja3MgPSB7fSxcblx0ICAgICAgZ2xvYmFsQ2FsbGJhY2tzID0gW10sXG5cdCAgICAgIF9wcmlvcml0eUZhY3RzID0gW107XG5cblx0ICB2YXIgbm90aWZ5QmFja3ByZXNzID0ge1xuXHQgICAgZ2xvYmFsT25jZTogZmFsc2UsXG5cdCAgICBpc0ZpbmlzaDogZmFsc2UsXG5cdCAgICBpc01lbnVDbG9zZTogdHJ1ZSxcblx0ICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjYikge1xuXHQgICAgICB2YXIgcHJpb3JpdHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG5cblx0ICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG5cdCAgICAgIGlmIChwcmlvcml0eSA9PT0gdHJ1ZSkgcmV0dXJuIGdsb2JhbENhbGxiYWNrcy5wdXNoKGNiKTtlbHNlIGlmIChwcmlvcml0eSA9PSAnYWRkJykge1xuXHQgICAgICAgIHByaW9yaXR5ID0gdGhpcy5pbmNyZWFzZVByaW9yaXR5KCk7XG5cdCAgICAgIH1cblxuXHQgICAgICB0aGlzLmFkZENhbGxiYWNrKGNiLCBwcmlvcml0eSk7XG5cblx0ICAgICAgaWYgKCFpc1N1cHBvcnRCYWNrcHJlc3NMaXN0ZW5lcikge1xuXHQgICAgICAgIGhhc2hMaXN0ZW5lci5hdXRvVXBkYXRlSGFzaCgpO1xuXHQgICAgICB9XG5cblx0ICAgICAgdGhpcy5jYWxsYmFja1ByaW9yaXR5ID0gcHJpb3JpdHk7XG5cblx0ICAgICAgcmV0dXJuIHtcblx0ICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0ICAgICAgICAgIHZhciBpbm5lclF1ZXVlcyA9IHZvaWQgMDtcblxuXHQgICAgICAgICAgaW5uZXJRdWV1ZXMgPSBfY2FsbGJhY2tzW3ByaW9yaXR5XSA9IF9jYWxsYmFja3NbcHJpb3JpdHldLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuXHQgICAgICAgICAgICByZXR1cm4gaXRlbSAhPSBjYjtcblx0ICAgICAgICAgIH0pO1xuXG5cdCAgICAgICAgICBpZiAoIWlubmVyUXVldWVzLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfcHJpb3JpdHlGYWN0cyA9IF9wcmlvcml0eUZhY3RzLmZpbHRlcihmdW5jdGlvbiAoZmFjdG9yKSB7XG5cdCAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvciAhPSBwcmlvcml0eTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblx0ICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShuZXdjYikge1xuXHQgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcblx0ICAgICAgICAgIHZhciBtYXhQcmlvcml0eSA9IHNlbGYuaW5jcmVhc2VQcmlvcml0eSgpO1xuXG5cdCAgICAgICAgICBzZWxmLmFkZENhbGxiYWNrKG5ld2NiIHx8IGZ1bmN0aW9uICgpIHt9LCBtYXhQcmlvcml0eSk7XG5cdCAgICAgICAgICAvLyBfY2FsbGJhY2tzW3ByaW9yaXR5XSA9IF9jYWxsYmFja3NbcHJpb3JpdHldLm1hcChpdGVtPT57XG5cdCAgICAgICAgICAvLyAgIGlmKGl0ZW0gPT09IGNiKXtcblx0ICAgICAgICAgIC8vICAgICByZXR1cm4gbmV3Y2IgfHwgZnVuY3Rpb24oKXt9O1xuXHQgICAgICAgICAgLy8gICB9O1xuXHQgICAgICAgICAgLy8gICByZXR1cm4gaXRlbTtcblx0ICAgICAgICAgIC8vIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfTtcblx0ICAgIH0sXG5cdCAgICBhZGRDYWxsYmFjazogZnVuY3Rpb24gYWRkQ2FsbGJhY2soY2IsIHByaW9yaXR5KSB7XG5cblx0ICAgICAgaWYgKCFfY2FsbGJhY2tzW3ByaW9yaXR5XSkge1xuXHQgICAgICAgIF9jYWxsYmFja3NbcHJpb3JpdHldID0gW107XG5cdCAgICAgIH1cblxuXHQgICAgICBfY2FsbGJhY2tzW3ByaW9yaXR5XS5wdXNoKGNiKTtcblxuXHQgICAgICBpZiAoIX5fcHJpb3JpdHlGYWN0cy5pbmRleE9mKHByaW9yaXR5KSkge1xuXHQgICAgICAgIF9wcmlvcml0eUZhY3RzLnB1c2gocHJpb3JpdHkpO1xuXHQgICAgICAgIF9wcmlvcml0eUZhY3RzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0ICAgICAgICAgIHJldHVybiBhIC0gYjtcblx0ICAgICAgICB9KTtcblx0ICAgICAgfVxuXHQgICAgfSxcblx0ICAgIGluY3JlYXNlUHJpb3JpdHk6IGZ1bmN0aW9uIGluY3JlYXNlUHJpb3JpdHkoKSB7XG5cdCAgICAgIHZhciBsZW4gPSBfcHJpb3JpdHlGYWN0cy5sZW5ndGg7XG5cblx0ICAgICAgaWYgKCFsZW4pIHJldHVybiAxO1xuXG5cdCAgICAgIHJldHVybiBfcHJpb3JpdHlGYWN0c1tfcHJpb3JpdHlGYWN0cy5sZW5ndGggLSAxXSArIDE7XG5cdCAgICB9LFxuXHQgICAgcmVtb3ZlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGNiKSB7XG5cdCAgICAgIHZhciB0ZW1wUHJpb3JpdHlGYWN0cyA9IF9wcmlvcml0eUZhY3RzO1xuXG5cdCAgICAgIF9wcmlvcml0eUZhY3RzLmZvckVhY2goZnVuY3Rpb24gKHByaW9yaXR5KSB7XG5cdCAgICAgICAgdmFyIHF1ZXVlcyA9IF9jYWxsYmFja3NbcHJpb3JpdHldO1xuXG5cdCAgICAgICAgcXVldWVzID0gcXVldWVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuXHQgICAgICAgICAgcmV0dXJuIGl0ZW0gIT0gY2I7XG5cdCAgICAgICAgfSk7XG5cblx0ICAgICAgICBfY2FsbGJhY2tzW3ByaW9yaXR5XSA9IHF1ZXVlcztcblxuXHQgICAgICAgIGlmICghcXVldWVzLmxlbmd0aCkge1xuXHQgICAgICAgICAgdGVtcFByaW9yaXR5RmFjdHMgPSB0ZW1wUHJpb3JpdHlGYWN0cy5maWx0ZXIoZnVuY3Rpb24gKGZhY3Rvcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZmFjdG9yICE9IHByaW9yaXR5O1xuXHQgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblxuXHQgICAgICBfcHJpb3JpdHlGYWN0cyA9IHRlbXBQcmlvcml0eUZhY3RzO1xuXHQgICAgfSxcblx0ICAgIHJlbW92ZUdsb2JhbExpc3RlbmVyczogZnVuY3Rpb24gcmVtb3ZlR2xvYmFsTGlzdGVuZXJzKGNiKSB7XG5cdCAgICAgIGlmIChjYiAhPSBudWxsKSB7XG5cdCAgICAgICAgZ2xvYmFsQ2FsbGJhY2tzID0gZ2xvYmFsQ2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbiAoZm4pIHtcblx0ICAgICAgICAgIHJldHVybiBjYiAhPSBmbjtcblx0ICAgICAgICB9KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBnbG9iYWxDYWxsYmFja3MgPSBbXTtcblx0ICAgICAgfVxuXHQgICAgfSxcblx0ICAgIHJ1bldpdGhQcmlvcml0eTogZnVuY3Rpb24gcnVuV2l0aFByaW9yaXR5KHByaW9yaXR5LCBpc1JtKSB7XG5cdCAgICAgIHZhciBxdWV1ZSA9IF9jYWxsYmFja3NbcHJpb3JpdHldO1xuXG5cdCAgICAgIGlmICghcXVldWUpIHJldHVybjtcblxuXHQgICAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuXHQgICAgICAgIGNiKCk7XG5cdCAgICAgIH0pO1xuXG5cdCAgICAgIGlmIChpc1JtKSBfY2FsbGJhY2tzW3ByaW9yaXR5XSA9IG51bGw7XG5cdCAgICB9LFxuXHQgICAgcnVuOiBmdW5jdGlvbiBydW4oaXNNVG91Y2gpIHtcblx0ICAgICAgaWYgKCFnbG9iYWxDYWxsYmFja3MubGVuZ3RoICYmICFfcHJpb3JpdHlGYWN0cy5sZW5ndGgpIHtcblx0ICAgICAgICB0aGlzLm5vdGlmeUJhY2tGbiAmJiB0aGlzLm5vdGlmeUJhY2tGbigpO1xuXHQgICAgICAgIGlmICh0aGlzLmlzRmluaXNoIHx8ICFpc01Ub3VjaCAmJiB0aGlzLmlzTWVudUNsb3NlKSB7XG5cdCAgICAgICAgICB0aGlzLmNsb3NlQWN0aXZpdHkoKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdGhpcy5nb0JhY2soKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cblx0ICAgICAgZ2xvYmFsQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG5cdCAgICAgICAgY2IoKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIGlmICh0aGlzLmdsb2JhbE9uY2UpIGdsb2JhbENhbGxiYWNrcyA9IFtdO1xuXG5cdCAgICAgIHZhciBjdXJQcmlvcml0eSA9IF9wcmlvcml0eUZhY3RzLnBvcCgpO1xuXHQgICAgICB0aGlzLnJ1bldpdGhQcmlvcml0eShjdXJQcmlvcml0eSwgdHJ1ZSk7XG5cdCAgICB9LFxuXHQgICAgZ29CYWNrOiBmdW5jdGlvbiBnb0JhY2soKSB7XG5cdCAgICAgIGlmIChpc1N1cHBvcnRCYWNrcHJlc3NMaXN0ZW5lcikgRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlLmJhY2tQcmVzcygpO2Vsc2UgaGFzaExpc3RlbmVyLmJhY2soKTtcblx0ICAgIH0sXG5cdCAgICBjbG9zZUFjdGl2aXR5OiBmdW5jdGlvbiBjbG9zZUFjdGl2aXR5KCkge1xuXHQgICAgICBpZiAoaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIpIEV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5maW5pc2goKTtlbHNlIGhhc2hMaXN0ZW5lci5iYWNrKCk7XG5cdCAgICB9LFxuXHQgICAgYWRkTm90aWZ5QmFjazogZnVuY3Rpb24gYWRkTm90aWZ5QmFjayhjYikge1xuXHQgICAgICB0aGlzLm5vdGlmeUJhY2tGbiA9IGNiO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICByZXR1cm4gbm90aWZ5QmFja3ByZXNzO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlRm4oKTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XG5cdHZhciBiaW5kRXZlbnQgPSBmdW5jdGlvbiBiaW5kRXZlbnQoZG9tLCBuYW1lLCBmbikge1xuXHQgIGRvbS5hZGRFdmVudExpc3RlbmVyID8gZG9tLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZm4sIGZhbHNlKSA6IGRvbS5hdHRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xuXHR9O1xuXHR2YXIgdW5CaW5kRXZlbnQgPSBmdW5jdGlvbiB1bkJpbmRFdmVudChkb20sIG5hbWUsIGZuKSB7XG5cdCAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBmbiwgZmFsc2UpIDogZG9tLmRldGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmbik7XG5cdH07XG5cblx0dmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblx0dmFyIHF1ZXJ5X2tleSA9ICdfZGdfaGFzaCc7XG5cblx0dmFyIGhhc2hIaXN0b3J5ID0gZnVuY3Rpb24gaGFzaEhpc3Rvcnkob3B0aW9ucykge1xuXG5cdCAgdmFyIHByZXZMb2NhdGlvbiA9ICcnLFxuXHQgICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuXHQgIHZhciBnZXRDdXJyZW50SGFzaFBhdGggPSBmdW5jdGlvbiBnZXRDdXJyZW50SGFzaFBhdGgoKSB7XG5cdCAgICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuXHQgICAgICAgIHJlZ3ggPSBuZXcgUmVnRXhwKCdeJyArIHF1ZXJ5X2tleSArICc9KC4qKScpO1xuXHQgICAgdmFyIGluZGV4ID0gaHJlZi5pbmRleE9mKCcjJyksXG5cdCAgICAgICAgcXVlcnlJbmRleCA9IHZvaWQgMCxcblx0ICAgICAgICBzdHIgPSAnJyxcblx0ICAgICAgICBtYXRjaGVzID0gdm9pZCAwO1xuXG5cdCAgICBpZiAoaW5kZXggIT0gLTEpIHtcblx0ICAgICAgc3RyID0gaHJlZi5zdWJzdHJpbmcoaW5kZXggKyAxKSB8fCAnJztcblx0ICAgICAgaWYgKHF1ZXJ5SW5kZXggPSBzdHIuaW5kZXhPZignPycpID4gMCkge1xuXHQgICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCk7XG5cdCAgICAgIH1cblx0ICAgICAgbWF0Y2hlcyA9IHJlZ3guZXhlYyhzdHIpO1xuXHQgICAgICBpZiAobWF0Y2hlcykge1xuXHQgICAgICAgIHN0ciA9IG1hdGNoZXNbMV07XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc3RyID0gJyc7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBzdHI7XG5cdCAgfTtcblxuXHQgIHZhciBzdG9wTGlzdGVuZXIgPSBmdW5jdGlvbiBzdG9wTGlzdGVuZXIoKSB7XG5cdCAgICB1bkJpbmRFdmVudCh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG5cdCAgfTtcblxuXHQgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKGNhbGxiYWNrKSB7XG5cdCAgICBsaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG5cblx0ICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHJldHVybiBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG5cdCAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGNhbGxiYWNrO1xuXHQgICAgICB9KTtcblx0ICAgIH07XG5cdCAgfTtcblxuXHQgIHZhciBwdXNoSGFzaFBhdGggPSBmdW5jdGlvbiBwdXNoSGFzaFBhdGgocGF0aCkge1xuXHQgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcblx0ICB9O1xuXG5cdCAgdmFyIHJlcGxhY2VIYXNoUGF0aCA9IGZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG5cdCAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xuXHQgIH07XG5cblx0ICB2YXIgYXV0b1VwZGF0ZUhhc2ggPSBmdW5jdGlvbiBhdXRvVXBkYXRlSGFzaCgpIHtcblx0ICAgIHZhciBoYXNoUGF0aCA9IGdldEN1cnJlbnRIYXNoUGF0aCgpICogMTtcblx0ICAgIGlmICghaGFzaFBhdGgpIGhhc2hQYXRoID0gMTtlbHNlIGhhc2hQYXRoKys7XG5cdCAgICBwdXNoSGFzaFBhdGgocXVlcnlfa2V5ICsgJz0nICsgaGFzaFBhdGgpO1xuXHQgICAgcmV0dXJuIGhhc2hQYXRoO1xuXHQgIH07XG5cblx0ICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG5cdCAgICBpZiAobikgd2luZG93Lmhpc3RvcnkuZ28obik7XG5cdCAgfTtcblx0ICB2YXIgYmFjayA9IGZ1bmN0aW9uIGJhY2soKSB7XG5cdCAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG5cdCAgfTtcblxuXHQgIHZhciBoYW5kbGVIYXNoQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcblx0ICAgIHZhciBjdXJyZW50TG9jYXRpb24gPSBnZXRDdXJyZW50SGFzaFBhdGgoKTtcblxuXHQgICAgaWYgKHByZXZMb2NhdGlvbiA9PT0gY3VycmVudExvY2F0aW9uKSByZXR1cm47XG5cblx0ICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuXHQgICAgICBsaXN0ZW5lcihjdXJyZW50TG9jYXRpb24sIHByZXZMb2NhdGlvbik7XG5cdCAgICB9KTtcblxuXHQgICAgcHJldkxvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xuXHQgIH07XG5cblx0ICBiaW5kRXZlbnQod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuXG5cdCAgcmV0dXJuIHtcblx0ICAgIGdldEN1cnJlbnRIYXNoUGF0aDogZ2V0Q3VycmVudEhhc2hQYXRoLFxuXHQgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuXHQgICAgc3RvcExpc3RlbmVyOiBzdG9wTGlzdGVuZXIsXG5cdCAgICBwdXNoSGFzaFBhdGg6IHB1c2hIYXNoUGF0aCxcblx0ICAgIHJlcGxhY2VIYXNoUGF0aDogcmVwbGFjZUhhc2hQYXRoLFxuXHQgICAgYXV0b1VwZGF0ZUhhc2g6IGF1dG9VcGRhdGVIYXNoLFxuXHQgICAgZ286IGdvLFxuXHQgICAgYmFjazogYmFja1xuXHQgIH07XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBoYXNoSGlzdG9yeTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9jb21tb24tcGFja2FnZS91dGlscy9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=