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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ".rc-modal {\n  position: absolute;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  transition: opacity 0.3s ease-out;\n}\n.rc-modal .modal-dialog {\n  border-radius: $fn.rem( 1px );\n  text-align: center;\n  width: 90%;\n  margin: 0 auto;\n  z-index: 9000;\n  position: fixed;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);\n}\n.modal-dialog.dlg-no-title header {\n  height: $fn.rem( 28px );\n}\n.modal-dialog.dlg-no-title .dialog-content {\n  color: #000;\n}\n.modal-dialog.dlg-no-title section {\n  text-align: left;\n}\n.modal-dialog.dlg-has-title header {\n  padding: 0 0 $fn.rem( 10px ) 0;\n  font-size: $fn.rem( 18px );\n}\n.modal-dialog.alert-dialog section {\n  text-align: center;\n}\n.modal-dialog .modal-dialog-main {\n  position: relative;\n  z-index: 9000;\n  background: #fafafa;\n  font-size: $fn.rem( 16px );\n  border-radius: $fn.rem( 3px );\n  padding-top: $fn.rem( 28px );\n}\n.modal-dialog .dialog-title {\n  color: #000;\n}\n.modal-dialog .dialog-content {\n  color: #323232;\n  line-height: 1.6;\n}\n.modal-dialog em {\n  font-style: normal;\n}\n.modal-dialog section {\n  padding: 0px $fn.rem( 26px );\n  margin: 0 auto;\n  max-height: $fn.rem( 188px );\n  overflow: hidden;\n  position: relative;\n}\n.modal-dialog footer {\n  border-top: solid #d5d5d5;\n  border-top-width: $fn.rem( 1px );\n  height: $fn.rem( 45px );\n  line-height: $fn.rem( 45px );\n  margin-top: $fn.rem( 20px );\n  overflow: hidden;\n}\n.modal-dialog footer button {\n  outline: none;\n  border: 0;\n  padding: 0;\n  background: none;\n  font-size: $fn.rem( 16px );\n  height: $fn.rem( 45px );\n}\n.modal-dialog footer button.modal-dialog-onebtn {\n  width: 100%;\n}\n.modal-dialog footer button:after {\n  content: '';\n  border-right: solid #d5d5d5;\n  border-right-width: $fn.rem( 1px );\n  position: absolute;\n  top: 0px;\n  display: block;\n  height: 100%;\n  right: 0px;\n}\n.modal-dialog footer button.last:after {\n  display: none;\n}\n.modal-dialog footer .sure-btn,\n.modal-dialog footer .cancle-btn {\n  width: 50%;\n  float: left;\n  position: relative;\n}\n.modal-dialog footer .cancle-btn {\n  color: #000000;\n}\n.modal-dialog footer .sure-btn {\n  color: #517bd1;\n}\n.modal-dialog.alert-dialog footer {\n  text-align: center;\n}\n.modal-dialog.alert-dialog footer .sure-btn {\n  float: none;\n  margin: 0 auto;\n}\n.dialog-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 8999;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABGdBTUEAALGPC/xhBQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TgK1eW0YAAAALSURBVAjXY2DABwAAHgABboVHMgAAAABJRU5ErkJggg==);\n}\n"

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 7 */
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjYWRjMTBmOWFiNDE3MDAxYjIwZCIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nV2l0aEhhc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RsZ3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2lucy9iYWNrUHJlc3MyLmpzIiwid2VicGFjazovLy8uL2V4dHJhLWxpYi9ub3RpZnlCYWNrcHJlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3RDQSxLQUFJLFNBQVMsb0JBQVEsQ0FBUixDQUFiO0FBQ0EsS0FBSSxRQUFRLG9CQUFRLENBQVIsQ0FBWjs7QUFFQSxLQUFJLGFBQWEsb0JBQVEsQ0FBUixDQUFqQjs7QUFFQSxLQUFJLFVBQVU7QUFDWixZQUFTLEVBREc7QUFFWixhQUZZLHNCQUVELEtBRkMsRUFFSyxFQUZMLEVBRVEsUUFGUixFQUVpQjtBQUMzQixVQUFLLFNBQUwsQ0FBZSxXQUFmLENBQTJCLE1BQU0sYUFBTixDQUFvQixrQkFBa0IsRUFBbEIsR0FBdUIseUJBQXZC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QUFPO0FBQ1A7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTTs7QUFFTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsUUFBTztBQUNQO0FBQ0EsRUFBQztBQUNELEUiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGNhZGMxMGY5YWI0MTcwMDFiMjBkXG4gKiovIiwidmFyIGRpYWxvZyA9IHJlcXVpcmUoJy4uL2RpYWxvZ1dpdGhIYXNoLmpzJyk7XHJcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2RvbS5qcycpO1xyXG4vLyB2YXIgbm90aWZ5QmFja3ByZXNzID0gcmVxdWlyZSgnQGZseW1lL3V0aWxzL3NyYy9hcHBTdG9yZUNsaWVudC9ub3RpZnlCYWNrcHJlc3MuanMnKTtcclxudmFyIGZseW1lVXRpbHMgPSByZXF1aXJlKCcuLi8uLi9leHRyYS1saWIvbm90aWZ5QmFja3ByZXNzLmpzJyk7XHJcblxyXG52YXIgZXhhbXBsZSA9IHtcclxuICBfZXZlbnRzOiB7fSxcclxuICBhZGRFeGFtcGxlKHZhbHVlLGlkLGNhbGxiYWNrKXtcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUh0bWxEb20oJzxsaSBkYXRhLWlkPVwiJyArIGlkICsgJ1wiIHN0eWxlPVwicGFkZGluZzo1cHg7XCI+JysgdmFsdWUgKyAnPC9saT4nKSk7XHJcbiAgICB0aGlzLl9ldmVudHNbaWRdID0gY2FsbGJhY2s7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9LFxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuY29udGFpbmVyID0gdXRpbHMuY3JlYXRlSHRtbERvbSgnPHVsIGNsYXNzPVwiZXhhbXBsZUxpc3RcIiBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtcIj48L3VsPicpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG5cclxuICAgIHV0aWxzLmJpbmRFdmVudCh0aGlzLmNvbnRhaW5lciwnY2xpY2snLCB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICBkaXNwYXRjaEV2ZW50KGV2dCl7XHJcbiAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldCxcclxuICAgICAgICBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICBpZighIXRoaXMuX2V2ZW50c1tpZF0pe1xyXG4gICAgICB0aGlzLl9ldmVudHNbaWRdKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5leGFtcGxlLmluaXQoKTtcclxuZXhhbXBsZS5hZGRFeGFtcGxlKCfkuI3luKbmoIfpopgt56Gu6K6k5qGGMuihjCcsJ2NvbmZpcm0yJyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuY29uZmlybSgn5omT5byA4oCc5pC656iL4oCd5a6i5oi356uv77yM6L+U5Zue5pys6aG156uL5Y2z5aKe5YqgM+asoeaKveWlluacuuS8muOAgiAnLG51bGwsXCJcIiwn5LiN5LqGJywn56uL5Y2z5omT5byAJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+S4jeW4puagh+mimC3noa7orqTmoYYz6KGMJywnY29uZmlybTMnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5jb25maXJtKCfmiZPlvIDigJzmkLrnqIvigJ3lrqLmiLfnq6/vvIzov5Tlm57mnKzpobXnq4vljbPlop4g5YqgM+asoeaKveWlluacuuS8mi7ov5Tlm57mnKzpobXnq4vljbPlop7liqAz5qyhIOaKveWlluacuuS8muOAgiAnLG51bGwsXCJcIiwn5LiN5LqGJywn56uL5Y2z5omT5byAJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3lj43ppojor7TmmI4nLCdmZWVkYmFjaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgZGlhbG9nLmNvbmZpcm0oJ+avj+WuieijheS4gOS4quW6lOeUqO+8jOWkmuWinuWKoDHmrKHmir3lpZbmnLrkvJogJyxudWxsLFwi6I635b6XMeasoeaKveWlluacuuS8mlwiLCfnoa7lrponLCfnu6fnu63lronoo4UnKTtcclxufSkuYWRkRXhhbXBsZSgn5LiN5bim5qCH6aKYLeaPkOekuuahhicsJ2FsZXJ0JyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuYWxlcnQoJ+aPkOS6pOWksei0pe+8jOivt+eojeWQjuWGjeivlSAnKTtcclxufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeWNleihjOaPkOekuuahhicsJ3RsZS1hbGVydCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgZGlhbG9nLmFsZXJ0KCfor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI4nLCfpooblj5bmiJDlip8nKTtcclxufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeS4pOihjOaPkOekuuahhicsJ3RsZS1hbGVydDInLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5hbGVydCgn6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO44CCJywn6aKG5Y+W5oiQ5YqfJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3lpJrooYzmj5DnpLrmoYYnLCd0bGUtYWxlcnQyJyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuYWxlcnQoJ+ivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jDxpbnB1dCB0eXBlPVwidGV4dFwiLz7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7jgILor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7or53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI5cXFxyXG4gICAg6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piOJywn6aKG5Y+W5oiQ5YqfJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+ahhuS4reahhicsJ2RsZ29mZGxnJyxmdW5jdGlvbigpe1xyXG4gIHZhciBpc0FsZXJ0ZWQgPSBmYWxzZTtcclxuICBkaWFsb2cuYWxlcnQoJ+eItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuuScsJ+eItuahhuagh+mimCcsZnVuY3Rpb24oKXtcclxuICAgIGlmKGlzQWxlcnRlZCkgcmV0dXJuO1xyXG5cclxuICAgIGRpYWxvZy5hbGVydCgn5a2Q5qGG5YaF5a65JywnJyk7XHJcblxyXG4gICAgaXNBbGVydGVkID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9KTtcclxufSkuYWRkRXhhbXBsZSgn5Yqo5oCB5aKe5Yqg5by55qGG5YaF5a65JywnYWRkZGxnaGVpZ2h0JyxmdW5jdGlvbigpe1xyXG4gIHZhciBpc0FsZXJ0ZWQgPSBmYWxzZTtcclxuICB2YXIgZGxnID0gZGlhbG9nLmFsZXJ0KCfniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrk8YnV0dG9uIGNsYXNzPVwiYWRkQ29udGVudFwiPua3u+WKoOWGheWuuTwvYnV0dG9uPicsJ+eItuahhuagh+mimCcpO1xyXG4gIHZhciBkbGdEb20gPSBkbGcuZGlhbG9nRG9tO1xyXG5cclxuICB1dGlscy5iaW5kRXZlbnQoZGxnRG9tLnF1ZXJ5U2VsZWN0b3IoJy5hZGRDb250ZW50JyksJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgZGxnRG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUh0bWxEb20oJzxkaXY+aGVsbG8gd29ybGQ8L2Rpdj4nKSk7XHJcbiAgICBkbGcucmVmcmVzaCgpO1xyXG4gIH0pO1xyXG59KS5hZGRFeGFtcGxlKCfmj5DnpLrmoYYtPuaPkOekuuahhicsJ2RsZzF0b2RsZzInLGZ1bmN0aW9uKCl7XHJcbiAgZGlhbG9nLmFsZXJ0KCfniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrknLCfniLbmoYbmoIfpopgnLGZ1bmN0aW9uKCl7XHJcbiAgICBkaWFsb2cuYWxlcnQoJ+WtkOahhuWGheWuuScsJycpO1xyXG4gIH0pO1xyXG59KS5hZGRFeGFtcGxlKCfmj5DnpLrmoYYo5LiN5YWz6ZetKS0+5o+Q56S65qGGJywnZGxnMU5vY2xvc2V0b2RsZzInLGZ1bmN0aW9uKCl7XHJcbiAgbGV0IGZpcnN0ID0gdHJ1ZTtcclxuICBkaWFsb2cuYWxlcnQoJ+eItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuuScsJ+eItuahhuagh+mimCcsZnVuY3Rpb24oKXtcclxuICAgIGRpYWxvZy5hbGVydCgn5a2Q5qGG5YaF5a65JywnJyk7XHJcbiAgICBpZihmaXJzdCl7XHJcbiAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KS5hZGRFeGFtcGxlKCfliqjmgIHosIPmlbTlvLnmoYblpKflsI8tYmFzZUZvbnRTaXplLTMyJywnYWRqdXN0LWZ0LTMyJyxmdW5jdGlvbigpe1xyXG5cclxuICBsb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA5OS9leGFtcGxlL2luZGV4Lmh0bWw/YmFzZUZvbnRTaXplPTMyJztcclxufSkuYWRkRXhhbXBsZSgn5Yqo5oCB6LCD5pW05by55qGG5aSn5bCPLeato+W4uOWkp+Wwjy1iYXNlRm9udFNpemUtMTYnLCdhZGp1c3QtZnQtMTYnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDk5L2V4YW1wbGUvaW5kZXguaHRtbD9iYXNlRm9udFNpemU9MTYnO1xyXG59KS5hZGRFeGFtcGxlKCfliJvlu7rmsqHmnInmjInpkq7nmoTlvLnmoYYnLCduby1idG4tZGlhbG9nJyxmdW5jdGlvbigpe1xyXG5cclxuICBjcmVhdGVOb0J0bkRpYWxvZygn6K+m5oOFJylcclxufSlcclxuXHJcbmNvbnN0IHZjID0gdXRpbHMuZ2V0VXJsUGFyYW0oJ3ZjJykgKiAxLFxyXG4gICAgICB0dXJuVG8gPSB1dGlscy5nZXRVcmxQYXJhbSgndHVyblRvJyk7XHJcblxyXG5kaWFsb2cuY29uZmlnKHtcclxuICB1c2VIYXNoOnRydWUsXHJcbiAgYmFzZUZvbnRTaXplOiB1dGlscy5nZXRVcmxQYXJhbSgnYmFzZUZvbnRTaXplJykqMSxcclxuICBub3RpZnlCYWNrcHJlc3M6IGZseW1lVXRpbHMubm90aWZ5QmFja3ByZXNzLFxyXG4gIGJhY2tQcmVzcygpe1xyXG4gICAgRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlLmJhY2tQcmVzcygpO1xyXG4gIH0vKixcclxuICB1c2VCYWNrZ3JvdW5kOiBmYWxzZSovXHJcbn0pO1xyXG5cclxuaWYodmMgPj0gNjEyICYmIHR1cm5UbyA9PSAnYScpe1xyXG4gIGRpYWxvZy5hbGVydCgn6L+b5YWl6aG16Z2i5ZCO6ams5LiK5omT5byA5by55qGGJyk7XHJcbn1cclxud2luZG93Lm9uV2luZG93Q2hhbmdlZCA9IGZ1bmN0aW9uKCl7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOb0J0bkRpYWxvZyhjb250ZW50LHRpdGxlLGNhbGxiYWNrLGRvbSxjbHMpe1xyXG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcclxuXHJcbiAgICBjbHogKz0gJyBhbGVydC1kaWFsb2cnO1xyXG5cclxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XHJcbiAgICAgIGNvbnRlbnQgPSB1dGlscy5jcmVhdGVQYXJhbXMoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgIG9rQ2FsbGJhY2s6Y2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBkb21cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXHJcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XHJcbiAgICBlbHNlXHJcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xyXG5cclxuICAgIGNvbnRlbnQuY2xhenogPSBjbHo7XHJcbiAgICByZXR1cm4gZGlhbG9nKGNvbnRlbnQpO1xyXG4gIH1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXhhbXBsZS9lbnRyeS5qc1xuICoqLyIsIlxyXG52YXIgTW9kYWxEaWFsb2cgPSByZXF1aXJlKCcuL21vZGFsLmpzJyk7XHJcbi8vIHZhciBoaXN0b3J5UGx1Z2luID0gcmVxdWlyZSgnLi9wbHVnaW5zL2hpc3RvcnkuanMnKTtcclxudmFyIGJhY2tQcmVzc1BsdWdpbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy9iYWNrUHJlc3MyLmpzJyk7XHJcblxyXG5Nb2RhbERpYWxvZy5kZWZhdWx0Q29uZmlnLnVzZUhhc2ggPSB0cnVlO1xyXG5cclxuLy8gaWYod2luZG93LkV2ZW50SmF2YXNjcmlwdEludGVyZmFjZSAmJiB0eXBlb2Ygd2luZG93LkV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5saXN0ZW5CYWNrUHJlc3MgPT0gJ2Z1bmN0aW9uJylcclxuICBNb2RhbERpYWxvZy5hZGRQbHVnaW4oYmFja1ByZXNzUGx1Z2luKTtcclxuLy8gZWxzZVxyXG4vLyAgIE1vZGFsRGlhbG9nLmFkZFBsdWdpbihoaXN0b3J5UGx1Z2luKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTW9kYWxEaWFsb2c7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGlhbG9nV2l0aEhhc2guanNcbiAqKi8iLCJ2YXIgYmFzZUNzcyA9IHJlcXVpcmUoJy4vY3NzL2Jhc2UubGVzcycpO1xyXG5cclxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi9kb20uanMnKTtcclxudmFyIHNjcm9sbERsZyA9IHJlcXVpcmUoJy4vZGxnc2Nyb2xsLmpzJyk7XHJcbnZhciBfID0ge1xyXG4gIGFzc2lnbjogdXRpbHMuYXNzaWduXHJcbn0sIHdpbkgsIHdpblc7XHJcblxyXG5mdW5jdGlvbiBub29wKCl7fVxyXG5cclxuLy/liqjmgIHmj5LlhaVjc3PmoLflvI9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVUb0hlYWQoYmFzZUZvbnRTaXplKXtcclxuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG5cclxuICBzdHlsZS5pbm5lckhUTUwgPSB1dGlscy5mblRlbXBsYXRlKFxyXG4gICAgYmFzZUNzcyxcclxuICAgIHtcclxuICAgICAgcmVtOiBmdW5jdGlvbihweCl7XHJcbiAgICAgICAgcmV0dXJuIHB4LnJlcGxhY2UoLyhcXGQrKXB4LyxmdW5jdGlvbihleHByLCB2YWwpe1xyXG4gICAgICAgICAgcmV0dXJuICh2YWwgKjEgLyBiYXNlRm9udFNpemUpICsgJ3JlbSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIHZhciBoZWFkRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xyXG4gIHZhciBmaXJzdExpbmsgPSBoZWFkRG9tLnF1ZXJ5U2VsZWN0b3IoJ2xpbmsnKTtcclxuXHJcbiAgaWYoIWZpcnN0TGluaylcclxuICAgIGhlYWREb20uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gIGVsc2VcclxuICAgIGhlYWREb20uaW5zZXJ0QmVmb3JlKHN0eWxlLCBmaXJzdExpbmspO1xyXG5cclxufVxyXG5cclxuLypcclxu55Sf5oiQ5a+56K+d5qGG5qih5p2/5YaF5a65XHJcbiAqL1xyXG4gIGZ1bmN0aW9uIGdldEh0bWxDb250ZW50KG9wdGlvbnMpe1xyXG4gICAgdmFyIHRlbXBsYXRlSHRtbCA9IFtdLFxyXG4gICAgICAgIGhlYWRlciA9IG9wdGlvbnMuaGVhZGVyO1xyXG5cclxuICAgIHRlbXBsYXRlSHRtbC5wdXNoKCc8ZGl2IGNsYXNzPVwicmMtbW9kYWxcIj48ZGl2IGNsYXNzPVwiZGlhbG9nLW1hc2tcIj48L2Rpdj48ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nICcgKyBvcHRpb25zLmNsYXp6ICsgJ1wiPjxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2ctbWFpblwiPicpO1xyXG4gICAgaWYob3B0aW9ucy50aXRsZSAhPSBudWxsICYmIG9wdGlvbnMudGl0bGUgIT0gJycpe1xyXG4gICAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPGhlYWRlcj4nICsgdXRpbHMucmVwbGFjZVRlbWxhdGUoaGVhZGVyLG9wdGlvbnMpICsgJzwvaGVhZGVyPicpO1xyXG4gICAgfVxyXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxzZWN0aW9uPjxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiPjwvZGl2Pjwvc2VjdGlvbj48Zm9vdGVyPicpO1xyXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goY3JlYXRlQnV0dG9ucy5jYWxsKHRoaXMsb3B0aW9ucykpO1xyXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgIHJldHVybiB0ZW1wbGF0ZUh0bWwuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNpemVXaW4oKXtcclxuICAgIHdpbkggPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuICAgIHdpblcgPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICB9XHJcbiAgLy8gdXRpbHMuYmluZEV2ZW50KHdpbmRvdywncmVzaXplJyxyZXNpemVXaW4pO1xyXG4vL1RPRE86XHJcbiAgLy8gcmVzaXplV2luKCk7XHJcbiAgLypcclxuICDliJvlu7rlupXpg6jmjInpkq5cclxuICAgKi9cclxuICBmdW5jdGlvbiBjcmVhdGVCdXR0b25zKG9wdGlvbnMpe1xyXG4gICAgdmFyIGJ0bnMgPSBvcHRpb25zLmJ1dHRvbnMgfHwgW10sXHJcbiAgICAgICAgdGVtcGxhdGUgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ7Y2xzfVwiIGRhdGEtaWQ9XCJ7aWR9XCIgPntuYW1lfTwvYnV0dG9uPicsXHJcbiAgICAgICAgYnRuVG1wbHMgPSAnJyxcclxuICAgICAgICBzZWxmID0gdGhpcyxcclxuICAgICAgICBvbmVCdG5DbHo9Jyc7XHJcblxyXG4gICAgaWYob3B0aW9ucy5jYW5jZWxDYWxsYmFjayl7XHJcbiAgICAgIGJ0bnMucHVzaCh7XHJcbiAgICAgICAgaWQ6ICdjYW5jZWwnLFxyXG4gICAgICAgIG5hbWU6IG9wdGlvbnMuY2FuY2VsU3RyLFxyXG4gICAgICAgIGNhbGxiYWNrOiBvcHRpb25zLmNhbmNlbENhbGxiYWNrLFxyXG4gICAgICAgIGNsczogXCJjYW5jbGUtYnRuXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYnRucy5sZW5ndGggPT0wKVxyXG4gICAgICBvbmVCdG5DbHogPSAnIG1vZGFsLWRpYWxvZy1vbmVidG4nO1xyXG5cclxuICAgIGlmKG9wdGlvbnMub2tDYWxsYmFjayl7XHJcbiAgICAgIGJ0bnMucHVzaCh7XHJcbiAgICAgICAgaWQ6ICdvaycsXHJcbiAgICAgICAgbmFtZTogb3B0aW9ucy5zdXJlU3RyLFxyXG4gICAgICAgIGNhbGxiYWNrOiBvcHRpb25zLm9rQ2FsbGJhY2ssXHJcbiAgICAgICAgY2xzOiBcInN1cmUtYnRuXCIgKyBvbmVCdG5DbHpcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKVxyXG4gICAgICBidG5zID0gYnRucy5yZXZlcnNlKCk7XHJcblxyXG4gICAgYnRucy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0saW5kZXgpe1xyXG4gICAgICBpZigoYnRucy5sZW5ndGggLSAxKSA9PSBpbmRleClcclxuICAgICAgICBpdGVtLmNscyArPSAnIGxhc3QnO1xyXG4gICAgICBidG5UbXBscyArPSB1dGlscy5yZXBsYWNlVGVtbGF0ZSh0ZW1wbGF0ZSxpdGVtKTtcclxuICAgICAgc2VsZi5jYWxsYmFja3NbaXRlbS5pZF0gPSBpdGVtLmNhbGxiYWNrO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJ0blRtcGxzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChkb20sb3B0aW9ucyl7XHJcbiAgICAgIGlmKG9wdGlvbnMuc2VsZWN0b3Ipe1xyXG4gICAgICAgIHZhciBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcImRpYWxvZy10YXJnZXQgcmVwbGFjZVwiKSxcclxuICAgICAgICAgICAgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yLFxyXG4gICAgICAgICAgICBvcmlEaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWxlY3RvcikuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpO1xyXG5cclxuICAgICAgICBpZihzZWxlY3Rvci5wYXJlbnROb2RlKXtcclxuICAgICAgICAgIHNlbGVjdG9yLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbW1lbnQsc2VsZWN0b3IpO1xyXG4gICAgICAgICAgZG9tLl9jb21tZW50RG9tID0gY29tbWVudDtcclxuICAgICAgICAgIGlmKG9yaURpc3BsYXkgPT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkb20uX29yaWdpbkRpc3BsYXkgPSBvcmlEaXNwbGF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLmFwcGVuZENoaWxkKHNlbGVjdG9yKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgZG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLmlubmVySFRNTCA9IG9wdGlvbnMuY29udGVudC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnPGJyLz4nKTtcclxuICAgIH1cclxuLyoqXHJcbiAqIFtNb2RhbERpYWxvZyBkZXNjcmlwdGlvbl1cclxuICogY2xheno6IOW8ueWHuuahhueahGNzc+exu+WQjVxyXG4gKiBjYW5jZWxTdHIg5Y+W5raI5oyJ6ZKu55qE5oyJ6ZKu5ZCNXHJcbiAqIHN1cmVTdHIg56Gu5a6a5oyJ6ZKu55qE5oyJ6ZKu5ZCNXHJcbiAqIHRpdGxlIOW8ueWHuuahhueahOagh+mimFxyXG4gKiBoZWFkZXIg6KGo56S65aS06YOo55qEaHRtbOaooeadv1xyXG4gKiBva0NhbGxiYWNrIOehruWumuaMiemSruWbnuiwg+WHveaVsFxyXG4gKiBjYW5jZWxDYWxsYmFjayDlj5bmtojmjInpkq7lm57osIPlh73mlbBcclxuICogYnV0dG9ucyBbe2Nsczonc3VyZScsY2FsbGJhY2s6Zm4sbmFtZTonbmFtZSd9XVxyXG4gKiB1c2VCYWNrZ3JvdW5kIOWNleWHu+iDjOaZr+aXtuaJp+ihjOeahOWbnuiwg+WHveaVsFxyXG4gKi9cclxuICB2YXIgZGVmYXVsdFNldHRpbmdzID0ge1xyXG4gICAgICAgIGNsYXp6OiAnZGlhbG9nLXRoZW1lJyxcclxuICAgICAgICBjYW5jZWxTdHI6ICflj5bmtognLFxyXG4gICAgICAgIHN1cmVTdHI6ICfnoa7lrponLFxyXG4gICAgICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+e3RpdGxlfTwvc3Bhbj4nLFxyXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcclxuICAgICAgICBidXR0b25zOiBudWxsLFxyXG4gICAgICAgIHVzZUJhY2tncm91bmQ6ICdjYW5jZWwnLFxyXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBiZWZvcmVMaXN0ZW5lcnMgPSBbXSxcclxuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBbXSxcclxuICAgICAgY2xvc2VkTGlzdGVuZXJzID0gW10sXHJcbiAgICAgIF9jb3VudCA9IDA7XHJcblxyXG4gIHZhciBNb2RhbERpYWxvZyA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgdmFyIGRpYWxvZyxcclxuICAgICAgICBpZDtcclxuXHJcbiAgICBvcHRpb25zID0gXy5hc3NpZ24oe30sZGVmYXVsdFNldHRpbmdzLG9wdGlvbnMpO1xyXG5cclxuICAgIG9wdGlvbnMuX2NhbGxCYWNrcyA9IG9wdGlvbnMuX2NhbGxCYWNrcyB8fCB7fTtcclxuICAgIGlkID0gb3B0aW9ucy5pZCA9IG9wdGlvbnMuaWQgfHwgX2NvdW50O1xyXG5cclxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIG9wdGlvbnMuX2NhbGxCYWNrc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJlZm9yZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgICAgbGlzdGVuZXIob3B0aW9ucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W2lkXSA9IGRpYWxvZyA9IG5ldyBNb2RhbERpYWxvZy5jcmVhdGUob3B0aW9ucyk7XHJcblxyXG4gICAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCArKztcclxuXHJcbiAgICBhZnRlckxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgICAgbGlzdGVuZXIoZGlhbG9nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9jb3VudCArKztcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgdmFyIGRpYWxvZ0RvbSxcclxuICAgICAgICBkbGdQb3MsXHJcbiAgICAgICAgZGxnTWFpbkRvbSxcclxuICAgICAgICBvZmZzZXRIO1xyXG5cclxuICAgIHRoaXMuY2FsbGJhY2tzID0gb3B0aW9ucy5fY2FsbEJhY2tzO1xyXG4gICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XHJcblxyXG4gICAgZGlhbG9nRG9tID0gdXRpbHMuY3JlYXRlSHRtbERvbShnZXRIdG1sQ29udGVudC5jYWxsKHRoaXMsb3B0aW9ucykpO1xyXG5cclxuICAgIGluc2VydENvbnRlbnQoZGlhbG9nRG9tLG9wdGlvbnMpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dEb20pO1xyXG5cclxuICAgIG9mZnNldEggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuZGxnU2Nyb2xsID0gc2Nyb2xsRGxnLmluaXRUb3VjaChkaWFsb2dEb20pO1xyXG5cclxuICAgIGRsZ01haW5Eb20gPSBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZycpO1xyXG4gICAgZGxnUG9zID0gdGhpcy5nZXRQb3MoZGxnTWFpbkRvbSk7XHJcblxyXG4gICAgXy5hc3NpZ24oZGxnTWFpbkRvbS5zdHlsZSx7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIGxlZnQ6IGRsZ1Bvcy5sZWZ0ICsgJ3B4JyxcclxuICAgICAgdG9wOiBkbGdQb3MudG9wICsgJ3B4J1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYob3B0aW9ucy5hbmltYXRlZClcclxuICAgICAgZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2ctbWFpbicpLmNsYXNzTmFtZSArPSAnIGRsZy1hbmltYXRpb24nO1xyXG5cclxuICAgIGlmKG9wdGlvbnMudXNlQmFja2dyb3VuZCl7XHJcbiAgICAgIHZhciB1c2VyYmdyID0gb3B0aW9ucy51c2VCYWNrZ3JvdW5kO1xyXG4gICAgICBpZighb3B0aW9ucy5fY2FsbEJhY2tzW3VzZXJiZ3JdKXtcclxuICAgICAgICBvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0gPSBmdW5jdGlvbigpe307XHJcbiAgICAgIH1cclxuICAgICAgZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctbWFzaycpLmRhdGFzZXQuaWQgPSBvcHRpb25zLnVzZUJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctbWFzaycpLnN0eWxlLmhlaWdodCA9IG9mZnNldEggKyAncHgnO1xyXG5cclxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMuX2NsaWNrRXZlbnQsZGlhbG9nRG9tLG9wdGlvbnMpO1xyXG4gICAgdGhpcy5kaWFsb2dEb20gPSBkaWFsb2dEb207XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZ0RvbSwnY2xpY2snLHRoaXMuX2V2ZW50TGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbiAgXy5hc3NpZ24oTW9kYWxEaWFsb2cuY3JlYXRlLnByb3RvdHlwZSx7XHJcbiAgICBjYWxsYmFja3M6IG51bGwsXHJcbiAgICBnZXRQb3M6IGZ1bmN0aW9uKGRpYWxvZ0RvbSl7XHJcbiAgICAgIGRpYWxvZ0RvbSA9IGRpYWxvZ0RvbSB8fCB0aGlzLmRpYWxvZ0RvbTtcclxuICAgICAgaWYoIWRpYWxvZ0RvbSl7XHJcbiAgICAgICAgcmV0dXJuIHtsZWZ0OjAsdG9wOjB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJlc2l6ZVdpbigpO1xyXG4gICAgICB2YXIgZGxnSCA9IGRpYWxvZ0RvbS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHZhciBkbGdXID0gZGlhbG9nRG9tLm9mZnNldFdpZHRoO1xyXG4gICAgICB2YXIgZGxnUG9zWSA9ICh3aW5IIC0gZGxnSCA+PSAwICkgPyAod2luSCAtIGRsZ0gpLzIgOiB3aW5IKjAuMTtcclxuICAgICAgdmFyIGRsZ1Bvc1ggPSAod2luVyAtIGRsZ1cgPj0gMCApID8gKHdpblcgLSBkbGdXKS8yIDogd2luVyowLjE7XHJcblxyXG4gICAgICByZXR1cm4ge2xlZnQ6IGRsZ1Bvc1gsIHRvcDogZGxnUG9zWX07XHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2c6ZnVuY3Rpb24oaXNOb3RJbnZva2Upe1xyXG4gICAgICB2YXIgZGlhbG9nRG9tID0gdGhpcy5kaWFsb2dEb20sXHJcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgc2VsZWN0b3IsXHJcbiAgICAgICAgICBfY29tbWVudERvbSxcclxuICAgICAgICAgIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgaWYoIWRpYWxvZ0RvbSlcclxuICAgICAgICByZXR1cm4gMTtcclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlRGlhbG9nKGRpYWxvZ0RvbSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICBpZihvcHRpb25zLnNlbGVjdG9yICYmIGRpYWxvZ0RvbS5fY29tbWVudERvbSl7XHJcbiAgICAgICAgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yO1xyXG4gICAgICAgIF9jb21tZW50RG9tID0gZGlhbG9nRG9tLl9jb21tZW50RG9tO1xyXG5cclxuICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gZGlhbG9nRG9tLl9vcmlnaW5EaXNwbGF5O1xyXG4gICAgICAgIF9jb21tZW50RG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHNlbGVjdG9yLF9jb21tZW50RG9tKTtcclxuXHJcbiAgICAgICAgZGlhbG9nRG9tLl9jb21tZW50RG9tID0gbnVsbDtcclxuICAgICAgICBkaWFsb2dEb20uX29yaWdpbkRpc3BsYXkgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZ0RvbSwnY2xpY2snLHRoaXMuX2V2ZW50TGlzdGVuZXIpO1xyXG4gICAgICAvLyBkaWFsb2dEb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaWFsb2dEb20pO1xyXG4gICAgICB0aGlzLmRsZ1Njcm9sbC5kZXN0cm95U2Nyb2xsICYmIHRoaXMuZGxnU2Nyb2xsLmRlc3Ryb3lTY3JvbGwoKTtcclxuXHJcbiAgICAgIGlmKCFpc05vdEludm9rZSl7XHJcbiAgICAgICAgY2xvc2VkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgICAgICAgbGlzdGVuZXIoc2VsZik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmKG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2spXHJcbiAgICAgICAgICBvcHRpb25zLmNhbmNlbENhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICB0aGlzLmRpYWxvZ0RvbSA9IGRpYWxvZ0RvbSA9IG51bGw7XHJcblxyXG4gICAgICBvcHRpb25zLmNvbXBsZXRlICYmIG9wdGlvbnMuY29tcGxldGUoKTtcclxuXHJcbiAgICAgIGRlbGV0ZSBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W3RoaXMuaWRdO1xyXG5cclxuICAgICAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCAtLTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVEaWFsb2c6IGZ1bmN0aW9uKGRsZ0RvbSl7XHJcbiAgICAgIHV0aWxzLmJpbmRFdmVudChkbGdEb20sICd0cmFuc2l0aW9uZW5kJywgX3JlbW92ZVRyYW5zaXRpb24pXHJcbiAgICAgIHV0aWxzLmJpbmRFdmVudChkbGdEb20sJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBfcmVtb3ZlVHJhbnNpdGlvbik7XHJcblxyXG4gICAgICBkbGdEb20uc3R5bGUub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfcmVtb3ZlVHJhbnNpdGlvbigpe1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0RvbSwndHJhbnNpdGlvbmVuZCcsX3JlbW92ZVRyYW5zaXRpb24pO1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0RvbSwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3JlbW92ZVRyYW5zaXRpb24pO1xyXG4gICAgICAgIGRsZ0RvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRsZ0RvbSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWZyZXNoOiBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgZGlhbG9nRG9tID0gdGhpcy5kaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZycpLFxyXG4gICAgICAgICAgZGxnUG9zID0gdGhpcy5nZXRQb3MoZGlhbG9nRG9tKTtcclxuXHJcbiAgICAgIF8uYXNzaWduKGRpYWxvZ0RvbS5zdHlsZSx7XHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICBsZWZ0OiBkbGdQb3MubGVmdCArICdweCcsXHJcbiAgICAgICAgdG9wOiBkbGdQb3MudG9wICsgJ3B4J1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5kbGdTY3JvbGwucmVmcmVzaCgpO1xyXG4gICAgfSxcclxuICAgIF9jbGlja0V2ZW50OiBmdW5jdGlvbihlLGRpYWxvZ0RvbSxvcHRpb25zKXtcclxuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxyXG4gICAgICAgICAgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXHJcbiAgICAgICAgICBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIGlmKHR5cGVvZiB0aGlzLmNhbGxiYWNrc1tpZF0gPT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5jYWxsYmFja3NbaWRdLmNhbGwodGhpcyxlKSl7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgc2VsZi5jbG9zZURpYWxvZygpO1xyXG4gICAgICAgIC8vIH0sMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm94eTogZnVuY3Rpb24oZm4pe1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICB3cmFwQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgaWYod3JhcEFyZ3MubGVuZ3RoID4gMClcclxuICAgICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdCh3cmFwQXJncyk7XHJcblxyXG4gICAgICAgIGZuLmFwcGx5KHNlbGYsYXJncyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuYWxlcnQgPSBmdW5jdGlvbihjb250ZW50LHRpdGxlLGNhbGxiYWNrLGRvbSxjbHMpe1xyXG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcclxuXHJcbiAgICBjbHogKz0gJyBhbGVydC1kaWFsb2cnO1xyXG5cclxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XHJcbiAgICAgIGNvbnRlbnQgPSB1dGlscy5jcmVhdGVQYXJhbXMoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgIG9rQ2FsbGJhY2s6Y2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBkb21cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudC5va0NhbGxiYWNrID0gY29udGVudC5va0NhbGxiYWNrIHx8IG5vb3A7XHJcblxyXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXHJcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XHJcbiAgICBlbHNlXHJcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xyXG5cclxuICAgIGNvbnRlbnQuY2xhenogPSBjbHo7XHJcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBNb2RhbERpYWxvZy5jb25maXJtID0gZnVuY3Rpb24oY29udGVudCxzdXJlRm4sdGl0bGUsYnRUZXh0MSxidFRleHQyLGNhbmNlbEZuLGNscyl7XHJcbiAgICB2YXIgY2x6ID0gY29udGVudC5jbGF6eiA/IGNvbnRlbnQuY2xhenogOiAoY2xzID8gY2xzIDogJycpO1xyXG5cclxuICAgIGNseiArPSAnIGNvbmZpcm0tZGlhbG9nJztcclxuXHJcbiAgICBpZih0eXBlb2YgY29udGVudCAhPT0gJ29iamVjdCcpe1xyXG4gICAgICBjb250ZW50ID0gdXRpbHMuY3JlYXRlUGFyYW1zKHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOnN1cmVGbixcclxuICAgICAgICAgICAgICAgICAgY2FuY2VsQ2FsbGJhY2s6Y2FuY2VsRm4sXHJcbiAgICAgICAgICAgICAgICAgIHN1cmVTdHI6IGJ0VGV4dDIsXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFN0cjpidFRleHQxXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCFjb250ZW50LnRpdGxlKVxyXG4gICAgICBjbHogKz0gJyBkbGctbm8tdGl0bGUnO1xyXG4gICAgZWxzZVxyXG4gICAgICBjbHogKz0gJyBkbGctaGFzLXRpdGxlJztcclxuXHJcbiAgICBjb250ZW50Lm9rQ2FsbGJhY2sgPSBjb250ZW50Lm9rQ2FsbGJhY2sgfHwgbm9vcDtcclxuICAgIGNvbnRlbnQuY2FuY2VsQ2FsbGJhY2sgPSBjb250ZW50LmNhbmNlbENhbGxiYWNrIHx8IG5vb3A7XHJcbiAgICBjb250ZW50LmNsYXp6ID0gY2x6O1xyXG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nKGNvbnRlbnQpO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICBhZnRlckxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBhZnRlckxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cucHJlTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICBiZWZvcmVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGJlZm9yZUxpc3RlbmVycyA9IGJlZm9yZUxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuY2xvc2VkTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICBjbG9zZWRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IGNsb3NlZExpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9wbHVnaW5zID0gW107XHJcblxyXG4gIE1vZGFsRGlhbG9nLmFkZFBsdWdpbiA9IGZ1bmN0aW9uKGZuKXtcclxuICAgIF9wbHVnaW5zLnB1c2goZm4pO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcgPSB7fTtcclxuICB2YXIgaXNDb25maWcgPSBmYWxzZTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuY29uZmlnID0gZnVuY3Rpb24oY29uZmlnKXtcclxuICAgIHZhciBvcHRpb25zID0gdXRpbHMuYXNzaWduKHt9LE1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcsY29uZmlnKTtcclxuXHJcbiAgICBNb2RhbERpYWxvZy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIGlmKGlzQ29uZmlnKXtcclxuICAgICAgY29uc29sZS5pbmZvKCdtb2RhbGRpYWxnIG9ubHkgY2FuIGNvbmZpZyBvbmNlJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IodmFyIGk9MCwgbGVuPV9wbHVnaW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcclxuICAgICAgX3BsdWdpbnNbaV0oTW9kYWxEaWFsb2csIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydFN0eWxlVG9IZWFkKG9wdGlvbnMuYmFzZUZvbnRTaXplIHx8IDE2KTtcclxuXHJcbiAgICBpc0NvbmZpZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB1dGlscy5iaW5kRXZlbnQod2luZG93LCBcIm9yaWVudGF0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXtcclxuICAgIE9iamVjdC5rZXlzKE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3QpLmZvckVhY2goZGlhbG9nPT57XHJcbiAgICAgIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbZGlhbG9nXS5yZWZyZXNoKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdCA9IHt9O1xyXG4gIE1vZGFsRGlhbG9nLm1vZGFsQ291bnQgPSAwO1xyXG5cclxuTW9kYWxEaWFsb2cuRG9tVXRpbHMgPSB1dGlscztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTW9kYWxEaWFsb2c7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGFsLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5yYy1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQ7XFxufVxcbi5yYy1tb2RhbCAubW9kYWwtZGlhbG9nIHtcXG4gIGJvcmRlci1yYWRpdXM6ICRmbi5yZW0oIDFweCApO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgei1pbmRleDogOTAwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLW5vLXRpdGxlIGhlYWRlciB7XFxuICBoZWlnaHQ6ICRmbi5yZW0oIDI4cHggKTtcXG59XFxuLm1vZGFsLWRpYWxvZy5kbGctbm8tdGl0bGUgLmRpYWxvZy1jb250ZW50IHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1uby10aXRsZSBzZWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLWhhcy10aXRsZSBoZWFkZXIge1xcbiAgcGFkZGluZzogMCAwICRmbi5yZW0oIDEwcHggKSAwO1xcbiAgZm9udC1zaXplOiAkZm4ucmVtKCAxOHB4ICk7XFxufVxcbi5tb2RhbC1kaWFsb2cuYWxlcnQtZGlhbG9nIHNlY3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1kaWFsb2ctbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA5MDAwO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogJGZuLnJlbSggMTZweCApO1xcbiAgYm9yZGVyLXJhZGl1czogJGZuLnJlbSggM3B4ICk7XFxuICBwYWRkaW5nLXRvcDogJGZuLnJlbSggMjhweCApO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5kaWFsb2ctdGl0bGUge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5tb2RhbC1kaWFsb2cgLmRpYWxvZy1jb250ZW50IHtcXG4gIGNvbG9yOiAjMzIzMjMyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuLm1vZGFsLWRpYWxvZyBlbSB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5tb2RhbC1kaWFsb2cgc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAwcHggJGZuLnJlbSggMjZweCApO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtaGVpZ2h0OiAkZm4ucmVtKCAxODhweCApO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIge1xcbiAgYm9yZGVyLXRvcDogc29saWQgI2Q1ZDVkNTtcXG4gIGJvcmRlci10b3Atd2lkdGg6ICRmbi5yZW0oIDFweCApO1xcbiAgaGVpZ2h0OiAkZm4ucmVtKCA0NXB4ICk7XFxuICBsaW5lLWhlaWdodDogJGZuLnJlbSggNDVweCApO1xcbiAgbWFyZ2luLXRvcDogJGZuLnJlbSggMjBweCApO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogJGZuLnJlbSggMTZweCApO1xcbiAgaGVpZ2h0OiAkZm4ucmVtKCA0NXB4ICk7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIGJ1dHRvbi5tb2RhbC1kaWFsb2ctb25lYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b246YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkICNkNWQ1ZDU7XFxuICBib3JkZXItcmlnaHQtd2lkdGg6ICRmbi5yZW0oIDFweCApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAwcHg7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIGJ1dHRvbi5sYXN0OmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIC5zdXJlLWJ0bixcXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuY2FuY2xlLWJ0biB7XFxuICB3aWR0aDogNTAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIC5jYW5jbGUtYnRuIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuc3VyZS1idG4ge1xcbiAgY29sb3I6ICM1MTdiZDE7XFxufVxcbi5tb2RhbC1kaWFsb2cuYWxlcnQtZGlhbG9nIGZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbC1kaWFsb2cuYWxlcnQtZGlhbG9nIGZvb3RlciAuc3VyZS1idG4ge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmRpYWxvZy1tYXNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogODk5OTtcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtBUU1BQUFDMy9GMytBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQU5RVEZSRkFBQUFwM285MmdBQUFBRjBVazVUZ0sxZVcwWUFBQUFMU1VSQlZBalhZMkRBQndBQUhnQUJib1ZITWdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY3NzL2Jhc2UubGVzc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGNyZWF0ZUh0bWxEb206IChmdW5jdGlvbiBjcmVhdGVIdG1sKCl7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGh0bWwpe1xyXG4gICAgICB2YXIgdGVtcDtcclxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHRlbXAgPSBkaXYuY2hpbGRyZW5bMF07XHJcbiAgICAgIGRpdi5yZW1vdmVDaGlsZCh0ZW1wKTtcclxuICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9XHJcbiAgfSkoKSxcclxuICByZXBsYWNlVGVtbGF0ZTogZnVuY3Rpb24oc3RyLGRhdGEpe1xyXG4gICAgdmFyIHJlZ3ggPSBuZXcgUmVnRXhwKC97KC4qPyl9L2cpLFxyXG4gICAgICAgIHRlbXA7XHJcbiAgICB3aGlsZSh0ZW1wID0gcmVneC5leGVjKHN0cikpe1xyXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSh0ZW1wWzBdLGRhdGFbdGVtcFsxXV0gfHwgJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFxyXFxuXSovZywnJyk7XHJcbiAgfSxcclxuICBmblRlbXBsYXRlOiBmdW5jdGlvbihzdHIsIGRhdGEpe1xyXG4gICAgdmFyIHJlZ3ggPSBuZXcgUmVnRXhwKC9cXCRmblxcLiguKz8pXFwoKC4qPylcXCkvZyk7XHJcblxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ3gsIGZ1bmN0aW9uKGV4cHIsIGZuLCB2YWwpe1xyXG4gICAgICByZXR1cm4gZGF0YVtmbl0odmFsKTtcclxuICAgIH0pLnJlcGxhY2UoL1tcXHJcXG5dKi9nLCcnKTs7XHJcblxyXG4gIH0sXHJcbiAgYmluZEV2ZW50OiBmdW5jdGlvbihkb20sbmFtZSxmbil7XHJcbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAgICA/IGRvbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsZm4sZmFsc2UpXHJcbiAgICAgIDogZG9tLmF0dGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmbik7XHJcbiAgfSxcclxuICB1bkJpbmRFdmVudDogZnVuY3Rpb24oZG9tLG5hbWUsZm4pe1xyXG4gICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXJcclxuICAgICAgPyBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLGZuLGZhbHNlKVxyXG4gICAgICA6IGRvbS5kZXRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xyXG4gIH0sXHJcbiAgZ2V0VXJsUGFyYW06IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwmKVwiICsga2V5ICsgXCI9KFteJl0qKSgmfCQpXCIsIFwiaVwiKTtcclxuICAgICAgdmFyIHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5tYXRjaChyZWcpO1xyXG4gICAgICBpZiAociAhPSBudWxsKSByZXR1cm4gZGVjb2RlVVJJKHJbMl0pO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9LFxyXG4gIGFzc2lnbjogZnVuY3Rpb24oKXtcclxuICAgIHZhciB0ZW1wID0gYXJndW1lbnRzWzBdO1xyXG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcbiAgICBmb3IodmFyIGk9MCxsZW49YXJncy5sZW5ndGg7aTxsZW47aSsrKXtcclxuICAgICAgdmFyIGl0ZW0gPSBhcmdzW2ldO1xyXG4gICAgICBpZighaXRlbSlcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgZm9yKHZhciBwIGluIGl0ZW0pe1xyXG4gICAgICAgIGlmKGl0ZW0uaGFzT3duUHJvcGVydHkocCkpe1xyXG4gICAgICAgICAgdGVtcFtwXSA9IGl0ZW1bcF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9LFxyXG4gIGNsb3Nlc3Q6IGZ1bmN0aW9uKGRvbSxjbHMpe1xyXG4gICAgdmFyIGNsc1JlZ3ggPSBuZXcgUmVnRXhwKCcoXnxcXFxccyspJysgY2xzICsgJyhcXFxccyt8JCknKSxcclxuICAgICAgICB0YWdSZWd4ID0gbmV3IFJlZ0V4cCgnXicrIGNscyArICckJyksXHJcbiAgICAgICAgcGFyZW50ID0gZG9tO1xyXG5cclxuICAgIGlmKHRlc3QoZG9tKSlcclxuICAgICAgcmV0dXJuIGRvbTtcclxuXHJcbiAgICB3aGlsZSghIShwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkgJiYgIHBhcmVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdodG1sJyl7XHJcbiAgICAgIGlmKHRlc3QocGFyZW50KSl7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gdGVzdChkb20pe1xyXG5cclxuICAgICAgaWYoISFkb20uY2xhc3NOYW1lLm1hdGNoKGNsc1JlZ3gpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfWVsc2UgaWYodGFnUmVneC50ZXN0KGRvbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZVBhcmFtczogZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgdmFyIHJlcyA9IHt9O1xyXG5cclxuICAgIGZvcih2YXIgcCBpbiBwYXJhbSl7XHJcbiAgICAgIGlmKHBhcmFtLmhhc093blByb3BlcnR5KHApKXtcclxuICAgICAgICBpZih0eXBlb2YgcGFyYW1bcF0gIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgcmVzW3BdID0gcGFyYW1bcF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RvbS5qc1xuICoqLyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4vZG9tLmpzJyk7XHJcblxyXG5mdW5jdGlvbiBnZXRIZWlnaHQoc2VsLGlzT3V0ZXIpe1xyXG4gIHZhciBzZWN0aW9uU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHNlbCksXHJcbiAgICAgIG1hcmdpbkggPSAwO1xyXG5cclxuICBpZihpc091dGVyKXtcclxuICAgIG1hcmdpbkggPSBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICAgICAgc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKS5yZXBsYWNlKCdweCcsJycpKjFcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgICAgICAgIHNlY3Rpb25TdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLnBhZGRpbmdUb3AucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgIHNlY3Rpb25TdHlsZS5wYWRkaW5nQm90dG9tLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBzZWN0aW9uU3R5bGUuYm9yZGVyVG9wV2lkdGgucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgIHNlY3Rpb25TdHlsZS5ib3JkZXJCb3R0b21XaWR0aC5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgbWFyZ2luSFxyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbnZhciBlYXNlID0ge1xyXG4gIGNpcmN1bGFyOiB7XHJcbiAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjEsIDAuNTcsIDAuMSwgMSknXHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaW5pdFRvdWNoOiBmdW5jdGlvbihkaWFsb2cpe1xyXG4gICAgdmFyIGRsZ0NvbnRlbnQgPSAgZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLFxyXG4gICAgICAgIHNlY3Rpb24gPSBkaWFsb2cucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpLFxyXG4gICAgICAgIHNjcm9sbFRhcmdlU3R5bGUgPSBkbGdDb250ZW50LnN0eWxlLFxyXG4gICAgICAgIHdyYXBwZXJIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24pLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMSxcclxuICAgICAgICBtYXhIZWlnaHQsIHN0YXJ0UG9zeCwgc3RhcnRQb3N5LCBpc1RvdWNoLFxyXG4gICAgICAgIHN0YXJ0VGltZSwgZGlzdFksIGRpc3RYLFxyXG4gICAgICAgIGVuZFRpbWUgPSAwLCB4ID0wLCB5ID0wLCBzdGFydFgsIHN0YXJ0WSwgaXNJblRyYW5zaXRpb247XHJcblxyXG4gICAgbWF4SGVpZ2h0ID0gd3JhcHBlckhlaWdodCAtIGdldEhlaWdodChkbGdDb250ZW50LHRydWUpO1xyXG5cclxuICAgIHNjcm9sbFRhcmdlU3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gZWFzZS5jaXJjdWxhci5zdHlsZTtcclxuXHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nLCd0b3VjaG1vdmUnLHN0b3BTY3JvbGxNb3ZlKTtcclxuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2csJ3RvdWNoc3RhcnQnLHN0YXJ0VG91Y2gpO1xyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGxnQ29udGVudCwndHJhbnNpdGlvbmVuZCcsX3RyYW5zaXRpb25FbmQpO1xyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3dlYmtpdFRyYW5zaXRpb25FbmQnLF90cmFuc2l0aW9uRW5kKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkZXN0cm95U2Nyb2xsOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2htb3ZlJyxzdG9wU2Nyb2xsTW92ZSk7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nLCd0b3VjaHN0YXJ0JyxzdGFydFRvdWNoKTtcclxuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkaWFsb2csJ3RvdWNoZW5kJyx0b3VjaGVFbmQpO1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3RyYW5zaXRpb25lbmQnLF90cmFuc2l0aW9uRW5kKTtcclxuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkbGdDb250ZW50LCd3ZWJraXRUcmFuc2l0aW9uRW5kJyxfdHJhbnNpdGlvbkVuZCk7XHJcbiAgICAgICAgZGxnQ29udGVudCA9IHNlY3Rpb24gPSBudWxsO1xyXG4gICAgICB9LFxyXG4gICAgICByZWZyZXNoOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHdyYXBwZXJIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24pLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMTtcclxuICAgICAgICBtYXhIZWlnaHQgPSB3cmFwcGVySGVpZ2h0IC0gZ2V0SGVpZ2h0KGRsZ0NvbnRlbnQsdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRUb3VjaChlKXtcclxuICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdLFxyXG4gICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY2xvc2VzdChlLnRhcmdldCwnZGlhbG9nLWNvbnRlbnQnKSxcclxuICAgICAgICAgIHBvcztcclxuXHJcbiAgICAgIGlmKCEhdGFyZ2V0KXtcclxuICAgICAgICBpZihpc0luVHJhbnNpdGlvbil7XHJcbiAgICAgICAgICBfdHJhbnNpdGlvblRpbWUoKTtcclxuICAgICAgICAgIGlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICBwb3MgPSBnZXRDb21wdXRlZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICB0cmFuc2xhdGUoTWF0aC5yb3VuZChwb3MueCksIE1hdGgucm91bmQocG9zLnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhcnRQb3N4ID0gdG91Y2gucGFnZVg7XHJcbiAgICAgICAgc3RhcnRQb3N5ID0gdG91Y2gucGFnZVk7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBkaXN0WCA9IGRpc3RZID0gMDtcclxuICAgICAgICBzdGFydFggPSB4O1xyXG4gICAgICAgIHN0YXJ0WSA9IHk7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFNjcm9sbE1vdmUoZSl7XHJcbiAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXSxcclxuICAgICAgICAgIHBvc1ggPSB0b3VjaC5wYWdlWCxcclxuICAgICAgICAgIHBvc1kgPSB0b3VjaC5wYWdlWSxcclxuICAgICAgICAgIG5vZGVOYW1lID0gZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICB2YXIgZGVsdGFZID0gcG9zWSAtIHN0YXJ0UG9zeSxcclxuICAgICAgICAgIGRlbHRhWCA9IHBvc1ggLSBzdGFydFBvc3gsXHJcbiAgICAgICAgICBuZXdZO1xyXG5cclxuICAgICAgc3RhcnRQb3N4ID0gcG9zWDtcclxuICAgICAgc3RhcnRQb3N5ID0gcG9zWTtcclxuXHJcbiAgICAgIGRpc3RYICs9IGRlbHRhWDtcclxuICAgICAgZGlzdFkgKz0gZGVsdGFZO1xyXG5cclxuICAgICAgaWYoIG5vZGVOYW1lICE9ICdpbnB1dCcgJiYgbm9kZU5hbWUgIT0gJ3NlbGVjdCcgJiYgbm9kZU5hbWUgIT0gJ3RleHRhcmVhJyl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCAodGltZXN0YW1wIC0gZW5kVGltZSA+IDMwMCAmJiBNYXRoLmFicyhkaXN0WSkgPCAxMCkgfHwgIWlzVG91Y2ggfHwgbWF4SGVpZ2h0ID49IDApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXdZID0geSArIGRlbHRhWTtcclxuICAgICAgaWYgKCBuZXdZID4gMCB8fCBuZXdZIDwgbWF4SGVpZ2h0ICkge1xyXG4gICAgICAgIG5ld1kgPSB5ICsgZGVsdGFZIC8gMztcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJhbnNsYXRlKGRsZ0NvbnRlbnQsbmV3WSk7XHJcblxyXG4gICAgICBpZiAoIHRpbWVzdGFtcCAtIHN0YXJ0VGltZSA+IDMwMCApIHtcclxuICAgICAgICBzdGFydFRpbWUgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgc3RhcnRYID0geDtcclxuICAgICAgICBzdGFydFkgPSB5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0b3VjaGVFbmQoZSl7XHJcbiAgICAgIHZhciBkdXJhdGlvbiA9IERhdGUubm93KCkgLSBzdGFydFRpbWUsXHJcbiAgICAgICAgICBuZXdZID0gTWF0aC5yb3VuZCh5KSxcclxuICAgICAgICAgIHRpbWUgPSAwLFxyXG4gICAgICAgICAgbW9tZW50dW1ZO1xyXG5cclxuICAgICAgc3RhcnRQb3N4ID0gbnVsbDtcclxuICAgICAgc3RhcnRQb3N5ID0gbnVsbDtcclxuICAgICAgZW5kVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgIGlzSW5UcmFuc2l0aW9uID0gMDtcclxuXHJcbiAgICAgIGlmIChyZXNldFBvc2l0aW9uKGRsZ0NvbnRlbnQsNTAwKSB8fCBtYXhIZWlnaHQgPj0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2Nyb2xsVG8oZGxnQ29udGVudCwgbmV3WSk7XHJcblxyXG4gICAgICBpZihkdXJhdGlvbiA8IDMwMCl7XHJcbiAgICAgICAgbW9tZW50dW1ZID0gbW9tZW50dW0oeSwgc3RhcnRZLCBkdXJhdGlvbik7XHJcbiAgICAgICAgbmV3WSA9IG1vbWVudHVtWS5kZXN0aW5hdGlvbjtcclxuICAgICAgICB0aW1lID0gbW9tZW50dW1ZLmR1cmF0aW9uO1xyXG4gICAgICAgIGlzSW5UcmFuc2l0aW9uID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCBuZXdZICE9IHkgKSB7XHJcbiAgICAgICAgc2Nyb2xsVG8oZGxnQ29udGVudCwgbmV3WSx0aW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0LHBvc3ksdGltZSl7XHJcbiAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XHJcbiAgICAgIGlzSW5UcmFuc2l0aW9uID0gdGltZSA+IDA7XHJcbiAgICAgIF90cmFuc2l0aW9uVGltZSh0aW1lKTtcclxuICAgICAgdHJhbnNsYXRlKHRhcmdldCxwb3N5KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKHRhcmdldCwgcG9zeSkge1xyXG4gICAgICBzY3JvbGxUYXJnZVN0eWxlLndlYmtpdFRyYW5zZm9ybSAgPSAndHJhbnNsYXRlM2QoMHB4LCcgKyBwb3N5ICsgJ3B4LDBweCknO1xyXG4gICAgICB5ID0gcG9zeTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc2V0UG9zaXRpb24odGFyZ2V0LHRpbWUpe1xyXG4gICAgICB2YXIgcG9zWSA9IHk7XHJcblxyXG4gICAgICB0aW1lID0gdGltZSB8fCAwO1xyXG5cclxuICAgICAgaWYgKHBvc1kgPj0gMCApIHtcclxuICAgICAgICBwb3NZID0gMDtcclxuICAgICAgfSBlbHNlIGlmIChwb3NZIDwgbWF4SGVpZ2h0ICkge1xyXG4gICAgICAgIHBvc1kgPSBtYXhIZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICggcG9zWSA9PSB5ICkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2Nyb2xsVG8odGFyZ2V0LCBwb3NZLCB0aW1lKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW9tZW50dW0oY3VycmVudCwgc3RhcnQsIHRpbWUpe1xyXG4gICAgICB2YXIgZGlzdGFuY2UgPSBjdXJyZW50IC0gc3RhcnQsXHJcbiAgICAgICAgICBzcGVlZCA9IE1hdGguYWJzKGRpc3RhbmNlKSAvIHRpbWUsXHJcbiAgICAgICAgICBkZWNlbGVyYXRpb24gPSAwLjAwMDYsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbixcclxuICAgICAgICAgIGR1cmF0aW9uO1xyXG5cclxuICAgICAgZGVzdGluYXRpb24gPSBjdXJyZW50ICsgKCBzcGVlZCAqIHNwZWVkICkgLyAoIDIgKiBkZWNlbGVyYXRpb24gKSAqICggZGlzdGFuY2UgPCAwID8gLTEgOiAxICk7IC8vIHM9KGF0XjIpLzJcclxuICAgICAgZHVyYXRpb24gPSBzcGVlZCAvIGRlY2VsZXJhdGlvbjsgLy8gdj1hdFxyXG5cclxuICAgICAgaWYgKCBkZXN0aW5hdGlvbiA8IG1heEhlaWdodCApIHtcclxuICAgICAgICBkZXN0aW5hdGlvbiA9IG1heEhlaWdodCAtICggd3JhcHBlckhlaWdodCAvIDIuNSAqICggc3BlZWQgLyA4ICkgKTtcclxuICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGRlc3RpbmF0aW9uIC0gY3VycmVudCk7XHJcbiAgICAgICAgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xyXG4gICAgICB9ZWxzZSBpZihkZXN0aW5hdGlvbiA+IDApe1xyXG4gICAgICAgIGRlc3RpbmF0aW9uID0gd3JhcHBlckhlaWdodCAvIDIuNSAqICggc3BlZWQgLyA4ICk7XHJcbiAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhjdXJyZW50KSArIGRlc3RpbmF0aW9uO1xyXG4gICAgICAgIGR1cmF0aW9uID0gZGlzdGFuY2UgLyBzcGVlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogTWF0aC5yb3VuZChkZXN0aW5hdGlvbiksXHJcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRQb3NpdGlvbigpIHtcclxuICAgICAgdmFyIG1hdHJpeCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRsZ0NvbnRlbnQsIG51bGwpLFxyXG4gICAgICAgIHgsIHk7XHJcblxyXG4gICAgICBtYXRyaXggPSBtYXRyaXgud2Via2l0VHJhbnNmb3JtLnNwbGl0KCcpJylbMF0uc3BsaXQoJywgJyk7XHJcbiAgICAgIHggPSArKG1hdHJpeFsxMl0gfHwgbWF0cml4WzRdKTtcclxuICAgICAgeSA9ICsobWF0cml4WzEzXSB8fCBtYXRyaXhbNV0pO1xyXG5cclxuICAgICAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF90cmFuc2l0aW9uVGltZSh0aW1lKXtcclxuICAgICAgdGltZSA9IHRpbWUgfHwgMDtcclxuICAgICAgc2Nyb2xsVGFyZ2VTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0aW1lICsgJ21zJztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIF90cmFuc2l0aW9uRW5kKCl7XHJcbiAgICAgIGlmKCFpc0luVHJhbnNpdGlvbilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIF90cmFuc2l0aW9uVGltZSgpO1xyXG4gICAgICBpZighcmVzZXRQb3NpdGlvbihkbGdDb250ZW50KSl7XHJcbiAgICAgICAgaXNJblRyYW5zaXRpb24gPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RsZ3Njcm9sbC5qc1xuICoqLyIsImZ1bmN0aW9uIGluaXRCYWNrUHJlc3MoTW9kYWxEaWFsb2csIG9wdGlvbnMpe1xyXG5cclxuICBpZighb3B0aW9ucy51c2VIYXNoKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBsZXQgbm90aWZ5QmFja3ByZXNzID0gb3B0aW9ucy5ub3RpZnlCYWNrcHJlc3M7XHJcbiAgbGV0IGRpYWxvZ0lkTGlzdCA9IFtdO1xyXG5cclxuICBub3RpZnlCYWNrcHJlc3MgPSBub3RpZnlCYWNrcHJlc3Mob3B0aW9ucyk7XHJcblxyXG4gIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIoZnVuY3Rpb24oZGlhbG9nKXtcclxuICAgIGRpYWxvZ0lkTGlzdC5wdXNoKGRpYWxvZy5pZCk7XHJcblxyXG4gICAgZGlhbG9nLmxpc3RlbmVyQmFja1ByZXNzID0gbm90aWZ5QmFja3ByZXNzLmFkZExpc3RlbmVyKGxpc3RlbmVyQmFja3ByZXNzKCksICdhZGQnKTtcclxuXHJcbiAgICBkaWFsb2cubm90aWZ5UHJpb3JpdHkgPSBub3RpZnlCYWNrcHJlc3MuY2FsbGJhY2tQcmlvcml0eTtcclxuICB9KTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuY2xvc2VkTGlzdGVuZXIoZnVuY3Rpb24oZGlhbG9nKXtcclxuICAgIGRpYWxvZ0lkTGlzdCA9IGRpYWxvZ0lkTGlzdC5maWx0ZXIoKGlkKT0+e1xyXG4gICAgICByZXR1cm4gZGlhbG9nLmlkICE9PSBpZDtcclxuICAgIH0pO1xyXG4gICAgLy8gbm90aWZ5QmFja3ByZXNzLnJlbW92ZUxpc3RlbmVyKGRpYWxvZy5saXN0ZW5lckJhY2tQcmVzcyk7XHJcbiAgICBkaWFsb2cubGlzdGVuZXJCYWNrUHJlc3MudXBkYXRlKCk7XHJcbiAgICBub3RpZnlCYWNrcHJlc3MuZ29CYWNrKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGxpc3RlbmVyQmFja3ByZXNzKCkge1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICBpZighZGlhbG9nSWRMaXN0Lmxlbmd0aCl7XHJcbiAgICAgICAgb3B0aW9ucy5iYWNrUHJlc3MgJiYgb3B0aW9ucy5iYWNrUHJlc3MoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRsZ0lkID0gZGlhbG9nSWRMaXN0LnBvcCgpO1xyXG5cclxuICAgICAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdFtkbGdJZF0uY2xvc2VEaWFsb2codHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbml0QmFja1ByZXNzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BsdWdpbnMvYmFja1ByZXNzMi5qc1xuICoqLyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XHJcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXHJcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xyXG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxyXG5cdFx0ZXhwb3J0c1tcImZseW1lVXRpbHNcIl0gPSBmYWN0b3J5KCk7XHJcblx0ZWxzZVxyXG5cdFx0cm9vdFtcImZseW1lVXRpbHNcIl0gPSBmYWN0b3J5KCk7XHJcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xyXG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxyXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcclxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xyXG5cclxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxyXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcclxuXHJcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcclxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxyXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcclxuXHJcbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxyXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xyXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcclxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxyXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXHJcbi8qKioqKiovIFx0XHR9O1xyXG5cclxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxyXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XHJcblxyXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxyXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XHJcblxyXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcclxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcclxuLyoqKioqKi8gXHR9XHJcblxyXG5cclxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxyXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XHJcblxyXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXHJcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcclxuXHJcbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xyXG5cclxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcclxuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcclxuLyoqKioqKi8gfSlcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyoqKioqKi8gKFtcclxuLyogMCAqL1xyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG5cdC8vIGltcG9ydCBhIGZyb20gXCIuLi9saWIvYXBwU3RvcmVDbGllbnQvV2luQ2hhbmdlZE1hbmFnZS5qc1wiO1xyXG5cdC8vIGltcG9ydCBiIGZyb20gXCIuLi9saWIvZG9tVXRpbHMvUmF0ZUluVmlld1BvcnRNYW5hZ2UuanNcIjtcclxuXHJcblx0dmFyIG5vdGlmeUJhY2twcmVzcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XHJcblxyXG5cdG1vZHVsZS5leHBvcnRzID0ge1xyXG5cdCAgbm90aWZ5QmFja3ByZXNzOiBub3RpZnlCYWNrcHJlc3NcclxuXHR9O1xyXG5cdC8vIGV4cG9ydCBkZWZhdWx0IHtcclxuXHQvLyAgIG5vdGlmeUJhY2twcmVzc1xyXG5cdC8vIH1cclxuXHJcbi8qKiovIH0pLFxyXG4vKiAxICovXHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuXHJcblx0dmFyIGhhc2hIaXN0b3J5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcclxuXHJcblx0dmFyIGdlbmVyYXRlRm4gPSBmdW5jdGlvbiBnZW5lcmF0ZUZuKG9wdGlvbnMpIHtcclxuXHJcblx0ICB2YXIgaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIgPSAhb3B0aW9ucy51c2VCcm93c2VyICYmIHdpbmRvdy5FdmVudEphdmFzY3JpcHRJbnRlcmZhY2UgJiYgISF3aW5kb3cuRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlLmxpc3RlbkJhY2tQcmVzcyxcclxuXHQgICAgICBoYXNoTGlzdGVuZXIgPSBoYXNoSGlzdG9yeSgpO1xyXG5cclxuXHQgIGlmICghaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIpIHtcclxuXHQgICAgaGFzaExpc3RlbmVyLmxpc3RlbmVyKGZ1bmN0aW9uIChwYXRoLCBwcmVwYXRoKSB7XHJcblx0ICAgICAgdmFyIHByZXBhdGggPSBwcmVwYXRoICogMTtcclxuXHJcblx0ICAgICAgaWYgKCEhcHJlcGF0aCAmJiBwYXRoIC0gcHJlcGF0aCA8IDApIHtcclxuXHQgICAgICAgIHdpbmRvdy5fX2JhY2twcmVzcygpO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfSk7XHJcblx0ICB9IGVsc2Uge1xyXG5cdCAgICBsaXN0ZW5CYWNrUHJlc3MoKTtcclxuXHQgIH1cclxuXHJcblx0ICBmdW5jdGlvbiBsaXN0ZW5CYWNrUHJlc3MoKSB7XHJcblx0ICAgIGlmIChpc1N1cHBvcnRCYWNrcHJlc3NMaXN0ZW5lcikgRXZlbnRKYXZhc2NyaXB0SW50ZXJmYWNlLmxpc3RlbkJhY2tQcmVzcygnX19iYWNrcHJlc3MnKTtcclxuXHQgIH1cclxuXHJcblx0ICB3aW5kb3cuX19iYWNrcHJlc3MgPSBmdW5jdGlvbiAoaXNmcm9tKSB7XHJcblx0ICAgIHZhciBpc01Ub3VjaCA9IGlzZnJvbSA9PSAnZnJvbV9tZW51JyA/IGZhbHNlIDogdHJ1ZTtcclxuXHQgICAgbm90aWZ5QmFja3ByZXNzLnJ1bihpc01Ub3VjaCk7XHJcblx0ICAgIGxpc3RlbkJhY2tQcmVzcygpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB2YXIgX2NhbGxiYWNrcyA9IHt9LFxyXG5cdCAgICAgIGdsb2JhbENhbGxiYWNrcyA9IFtdLFxyXG5cdCAgICAgIF9wcmlvcml0eUZhY3RzID0gW107XHJcblxyXG5cdCAgdmFyIG5vdGlmeUJhY2twcmVzcyA9IHtcclxuXHQgICAgZ2xvYmFsT25jZTogZmFsc2UsXHJcblx0ICAgIGlzRmluaXNoOiBmYWxzZSxcclxuXHQgICAgaXNNZW51Q2xvc2U6IHRydWUsXHJcblx0ICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjYikge1xyXG5cdCAgICAgIHZhciBwcmlvcml0eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcclxuXHJcblx0ICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHQgICAgICBpZiAocHJpb3JpdHkgPT09IHRydWUpIHJldHVybiBnbG9iYWxDYWxsYmFja3MucHVzaChjYik7ZWxzZSBpZiAocHJpb3JpdHkgPT0gJ2FkZCcpIHtcclxuXHQgICAgICAgIHByaW9yaXR5ID0gdGhpcy5pbmNyZWFzZVByaW9yaXR5KCk7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICB0aGlzLmFkZENhbGxiYWNrKGNiLCBwcmlvcml0eSk7XHJcblxyXG5cdCAgICAgIGlmICghaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIpIHtcclxuXHQgICAgICAgIGhhc2hMaXN0ZW5lci5hdXRvVXBkYXRlSGFzaCgpO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgdGhpcy5jYWxsYmFja1ByaW9yaXR5ID0gcHJpb3JpdHk7XHJcblxyXG5cdCAgICAgIHJldHVybiB7XHJcblx0ICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuXHQgICAgICAgICAgdmFyIGlubmVyUXVldWVzID0gdm9pZCAwO1xyXG5cclxuXHQgICAgICAgICAgaW5uZXJRdWV1ZXMgPSBfY2FsbGJhY2tzW3ByaW9yaXR5XSA9IF9jYWxsYmFja3NbcHJpb3JpdHldLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG5cdCAgICAgICAgICAgIHJldHVybiBpdGVtICE9IGNiO1xyXG5cdCAgICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICAgIGlmICghaW5uZXJRdWV1ZXMubGVuZ3RoKSB7XHJcblx0ICAgICAgICAgICAgX3ByaW9yaXR5RmFjdHMgPSBfcHJpb3JpdHlGYWN0cy5maWx0ZXIoZnVuY3Rpb24gKGZhY3Rvcikge1xyXG5cdCAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvciAhPSBwcmlvcml0eTtcclxuXHQgICAgICAgICAgICB9KTtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSxcclxuXHQgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG5ld2NiKSB7XHJcblx0ICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcblx0ICAgICAgICAgIHZhciBtYXhQcmlvcml0eSA9IHNlbGYuaW5jcmVhc2VQcmlvcml0eSgpO1xyXG5cclxuXHQgICAgICAgICAgc2VsZi5hZGRDYWxsYmFjayhuZXdjYiB8fCBmdW5jdGlvbiAoKSB7fSwgbWF4UHJpb3JpdHkpO1xyXG5cdCAgICAgICAgICAvLyBfY2FsbGJhY2tzW3ByaW9yaXR5XSA9IF9jYWxsYmFja3NbcHJpb3JpdHldLm1hcChpdGVtPT57XHJcblx0ICAgICAgICAgIC8vICAgaWYoaXRlbSA9PT0gY2Ipe1xyXG5cdCAgICAgICAgICAvLyAgICAgcmV0dXJuIG5ld2NiIHx8IGZ1bmN0aW9uKCl7fTtcclxuXHQgICAgICAgICAgLy8gICB9O1xyXG5cdCAgICAgICAgICAvLyAgIHJldHVybiBpdGVtO1xyXG5cdCAgICAgICAgICAvLyB9KTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9O1xyXG5cdCAgICB9LFxyXG5cdCAgICBhZGRDYWxsYmFjazogZnVuY3Rpb24gYWRkQ2FsbGJhY2soY2IsIHByaW9yaXR5KSB7XHJcblxyXG5cdCAgICAgIGlmICghX2NhbGxiYWNrc1twcmlvcml0eV0pIHtcclxuXHQgICAgICAgIF9jYWxsYmFja3NbcHJpb3JpdHldID0gW107XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBfY2FsbGJhY2tzW3ByaW9yaXR5XS5wdXNoKGNiKTtcclxuXHJcblx0ICAgICAgaWYgKCF+X3ByaW9yaXR5RmFjdHMuaW5kZXhPZihwcmlvcml0eSkpIHtcclxuXHQgICAgICAgIF9wcmlvcml0eUZhY3RzLnB1c2gocHJpb3JpdHkpO1xyXG5cdCAgICAgICAgX3ByaW9yaXR5RmFjdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICAgICAgICByZXR1cm4gYSAtIGI7XHJcblx0ICAgICAgICB9KTtcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0ICAgIGluY3JlYXNlUHJpb3JpdHk6IGZ1bmN0aW9uIGluY3JlYXNlUHJpb3JpdHkoKSB7XHJcblx0ICAgICAgdmFyIGxlbiA9IF9wcmlvcml0eUZhY3RzLmxlbmd0aDtcclxuXHJcblx0ICAgICAgaWYgKCFsZW4pIHJldHVybiAxO1xyXG5cclxuXHQgICAgICByZXR1cm4gX3ByaW9yaXR5RmFjdHNbX3ByaW9yaXR5RmFjdHMubGVuZ3RoIC0gMV0gKyAxO1xyXG5cdCAgICB9LFxyXG5cdCAgICByZW1vdmVMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoY2IpIHtcclxuXHQgICAgICB2YXIgdGVtcFByaW9yaXR5RmFjdHMgPSBfcHJpb3JpdHlGYWN0cztcclxuXHJcblx0ICAgICAgX3ByaW9yaXR5RmFjdHMuZm9yRWFjaChmdW5jdGlvbiAocHJpb3JpdHkpIHtcclxuXHQgICAgICAgIHZhciBxdWV1ZXMgPSBfY2FsbGJhY2tzW3ByaW9yaXR5XTtcclxuXHJcblx0ICAgICAgICBxdWV1ZXMgPSBxdWV1ZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0ICAgICAgICAgIHJldHVybiBpdGVtICE9IGNiO1xyXG5cdCAgICAgICAgfSk7XHJcblxyXG5cdCAgICAgICAgX2NhbGxiYWNrc1twcmlvcml0eV0gPSBxdWV1ZXM7XHJcblxyXG5cdCAgICAgICAgaWYgKCFxdWV1ZXMubGVuZ3RoKSB7XHJcblx0ICAgICAgICAgIHRlbXBQcmlvcml0eUZhY3RzID0gdGVtcFByaW9yaXR5RmFjdHMuZmlsdGVyKGZ1bmN0aW9uIChmYWN0b3IpIHtcclxuXHQgICAgICAgICAgICByZXR1cm4gZmFjdG9yICE9IHByaW9yaXR5O1xyXG5cdCAgICAgICAgICB9KTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9KTtcclxuXHJcblx0ICAgICAgX3ByaW9yaXR5RmFjdHMgPSB0ZW1wUHJpb3JpdHlGYWN0cztcclxuXHQgICAgfSxcclxuXHQgICAgcmVtb3ZlR2xvYmFsTGlzdGVuZXJzOiBmdW5jdGlvbiByZW1vdmVHbG9iYWxMaXN0ZW5lcnMoY2IpIHtcclxuXHQgICAgICBpZiAoY2IgIT0gbnVsbCkge1xyXG5cdCAgICAgICAgZ2xvYmFsQ2FsbGJhY2tzID0gZ2xvYmFsQ2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbiAoZm4pIHtcclxuXHQgICAgICAgICAgcmV0dXJuIGNiICE9IGZuO1xyXG5cdCAgICAgICAgfSk7XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGdsb2JhbENhbGxiYWNrcyA9IFtdO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfSxcclxuXHQgICAgcnVuV2l0aFByaW9yaXR5OiBmdW5jdGlvbiBydW5XaXRoUHJpb3JpdHkocHJpb3JpdHksIGlzUm0pIHtcclxuXHQgICAgICB2YXIgcXVldWUgPSBfY2FsbGJhY2tzW3ByaW9yaXR5XTtcclxuXHJcblx0ICAgICAgaWYgKCFxdWV1ZSkgcmV0dXJuO1xyXG5cclxuXHQgICAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xyXG5cdCAgICAgICAgY2IoKTtcclxuXHQgICAgICB9KTtcclxuXHJcblx0ICAgICAgaWYgKGlzUm0pIF9jYWxsYmFja3NbcHJpb3JpdHldID0gbnVsbDtcclxuXHQgICAgfSxcclxuXHQgICAgcnVuOiBmdW5jdGlvbiBydW4oaXNNVG91Y2gpIHtcclxuXHQgICAgICBpZiAoIWdsb2JhbENhbGxiYWNrcy5sZW5ndGggJiYgIV9wcmlvcml0eUZhY3RzLmxlbmd0aCkge1xyXG5cdCAgICAgICAgdGhpcy5ub3RpZnlCYWNrRm4gJiYgdGhpcy5ub3RpZnlCYWNrRm4oKTtcclxuXHQgICAgICAgIGlmICh0aGlzLmlzRmluaXNoIHx8ICFpc01Ub3VjaCAmJiB0aGlzLmlzTWVudUNsb3NlKSB7XHJcblx0ICAgICAgICAgIHRoaXMuY2xvc2VBY3Rpdml0eSgpO1xyXG5cdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICAgIHJldHVybjtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIGdsb2JhbENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xyXG5cdCAgICAgICAgY2IoKTtcclxuXHQgICAgICB9KTtcclxuXHQgICAgICBpZiAodGhpcy5nbG9iYWxPbmNlKSBnbG9iYWxDYWxsYmFja3MgPSBbXTtcclxuXHJcblx0ICAgICAgdmFyIGN1clByaW9yaXR5ID0gX3ByaW9yaXR5RmFjdHMucG9wKCk7XHJcblx0ICAgICAgdGhpcy5ydW5XaXRoUHJpb3JpdHkoY3VyUHJpb3JpdHksIHRydWUpO1xyXG5cdCAgICB9LFxyXG5cdCAgICBnb0JhY2s6IGZ1bmN0aW9uIGdvQmFjaygpIHtcclxuXHQgICAgICBpZiAoaXNTdXBwb3J0QmFja3ByZXNzTGlzdGVuZXIpIEV2ZW50SmF2YXNjcmlwdEludGVyZmFjZS5iYWNrUHJlc3MoKTtlbHNlIGhhc2hMaXN0ZW5lci5iYWNrKCk7XHJcblx0ICAgIH0sXHJcblx0ICAgIGNsb3NlQWN0aXZpdHk6IGZ1bmN0aW9uIGNsb3NlQWN0aXZpdHkoKSB7XHJcblx0ICAgICAgaWYgKGlzU3VwcG9ydEJhY2twcmVzc0xpc3RlbmVyKSBFdmVudEphdmFzY3JpcHRJbnRlcmZhY2UuZmluaXNoKCk7ZWxzZSBoYXNoTGlzdGVuZXIuYmFjaygpO1xyXG5cdCAgICB9LFxyXG5cdCAgICBhZGROb3RpZnlCYWNrOiBmdW5jdGlvbiBhZGROb3RpZnlCYWNrKGNiKSB7XHJcblx0ICAgICAgdGhpcy5ub3RpZnlCYWNrRm4gPSBjYjtcclxuXHQgICAgfVxyXG5cdCAgfTtcclxuXHJcblx0ICByZXR1cm4gbm90aWZ5QmFja3ByZXNzO1xyXG5cdH07XHJcblx0bW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZUZuO1xyXG5cclxuLyoqKi8gfSksXHJcbi8qIDIgKi9cclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG5cclxuXHRcclxuXHR2YXIgYmluZEV2ZW50ID0gZnVuY3Rpb24gYmluZEV2ZW50KGRvbSwgbmFtZSwgZm4pIHtcclxuXHQgIGRvbS5hZGRFdmVudExpc3RlbmVyID8gZG9tLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZm4sIGZhbHNlKSA6IGRvbS5hdHRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xyXG5cdH07XHJcblx0dmFyIHVuQmluZEV2ZW50ID0gZnVuY3Rpb24gdW5CaW5kRXZlbnQoZG9tLCBuYW1lLCBmbikge1xyXG5cdCAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBmbiwgZmFsc2UpIDogZG9tLmRldGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmbik7XHJcblx0fTtcclxuXHJcblx0dmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcclxuXHR2YXIgcXVlcnlfa2V5ID0gJ19kZ19oYXNoJztcclxuXHJcblx0dmFyIGhhc2hIaXN0b3J5ID0gZnVuY3Rpb24gaGFzaEhpc3Rvcnkob3B0aW9ucykge1xyXG5cclxuXHQgIHZhciBwcmV2TG9jYXRpb24gPSAnJyxcclxuXHQgICAgICBsaXN0ZW5lcnMgPSBbXTtcclxuXHJcblx0ICB2YXIgZ2V0Q3VycmVudEhhc2hQYXRoID0gZnVuY3Rpb24gZ2V0Q3VycmVudEhhc2hQYXRoKCkge1xyXG5cdCAgICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxyXG5cdCAgICAgICAgcmVneCA9IG5ldyBSZWdFeHAoJ14nICsgcXVlcnlfa2V5ICsgJz0oLiopJyk7XHJcblx0ICAgIHZhciBpbmRleCA9IGhyZWYuaW5kZXhPZignIycpLFxyXG5cdCAgICAgICAgcXVlcnlJbmRleCA9IHZvaWQgMCxcclxuXHQgICAgICAgIHN0ciA9ICcnLFxyXG5cdCAgICAgICAgbWF0Y2hlcyA9IHZvaWQgMDtcclxuXHJcblx0ICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG5cdCAgICAgIHN0ciA9IGhyZWYuc3Vic3RyaW5nKGluZGV4ICsgMSkgfHwgJyc7XHJcblx0ICAgICAgaWYgKHF1ZXJ5SW5kZXggPSBzdHIuaW5kZXhPZignPycpID4gMCkge1xyXG5cdCAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBxdWVyeUluZGV4KTtcclxuXHQgICAgICB9XHJcblx0ICAgICAgbWF0Y2hlcyA9IHJlZ3guZXhlYyhzdHIpO1xyXG5cdCAgICAgIGlmIChtYXRjaGVzKSB7XHJcblx0ICAgICAgICBzdHIgPSBtYXRjaGVzWzFdO1xyXG5cdCAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICBzdHIgPSAnJztcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHQgICAgcmV0dXJuIHN0cjtcclxuXHQgIH07XHJcblxyXG5cdCAgdmFyIHN0b3BMaXN0ZW5lciA9IGZ1bmN0aW9uIHN0b3BMaXN0ZW5lcigpIHtcclxuXHQgICAgdW5CaW5kRXZlbnQod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihjYWxsYmFjaykge1xyXG5cdCAgICBsaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcblxyXG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgIHJldHVybiBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0ICAgICAgICByZXR1cm4gaXRlbSAhPT0gY2FsbGJhY2s7XHJcblx0ICAgICAgfSk7XHJcblx0ICAgIH07XHJcblx0ICB9O1xyXG5cclxuXHQgIHZhciBwdXNoSGFzaFBhdGggPSBmdW5jdGlvbiBwdXNoSGFzaFBhdGgocGF0aCkge1xyXG5cdCAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xyXG5cdCAgfTtcclxuXHJcblx0ICB2YXIgcmVwbGFjZUhhc2hQYXRoID0gZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcclxuXHQgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdmFyIGF1dG9VcGRhdGVIYXNoID0gZnVuY3Rpb24gYXV0b1VwZGF0ZUhhc2goKSB7XHJcblx0ICAgIHZhciBoYXNoUGF0aCA9IGdldEN1cnJlbnRIYXNoUGF0aCgpICogMTtcclxuXHQgICAgaWYgKCFoYXNoUGF0aCkgaGFzaFBhdGggPSAxO2Vsc2UgaGFzaFBhdGgrKztcclxuXHQgICAgcHVzaEhhc2hQYXRoKHF1ZXJ5X2tleSArICc9JyArIGhhc2hQYXRoKTtcclxuXHQgICAgcmV0dXJuIGhhc2hQYXRoO1xyXG5cdCAgfTtcclxuXHJcblx0ICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XHJcblx0ICAgIGlmIChuKSB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcclxuXHQgIH07XHJcblx0ICB2YXIgYmFjayA9IGZ1bmN0aW9uIGJhY2soKSB7XHJcblx0ICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdmFyIGhhbmRsZUhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xyXG5cdCAgICB2YXIgY3VycmVudExvY2F0aW9uID0gZ2V0Q3VycmVudEhhc2hQYXRoKCk7XHJcblxyXG5cdCAgICBpZiAocHJldkxvY2F0aW9uID09PSBjdXJyZW50TG9jYXRpb24pIHJldHVybjtcclxuXHJcblx0ICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xyXG5cdCAgICAgIGxpc3RlbmVyKGN1cnJlbnRMb2NhdGlvbiwgcHJldkxvY2F0aW9uKTtcclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICBwcmV2TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XHJcblx0ICB9O1xyXG5cclxuXHQgIGJpbmRFdmVudCh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XHJcblxyXG5cdCAgcmV0dXJuIHtcclxuXHQgICAgZ2V0Q3VycmVudEhhc2hQYXRoOiBnZXRDdXJyZW50SGFzaFBhdGgsXHJcblx0ICAgIGxpc3RlbmVyOiBsaXN0ZW5lcixcclxuXHQgICAgc3RvcExpc3RlbmVyOiBzdG9wTGlzdGVuZXIsXHJcblx0ICAgIHB1c2hIYXNoUGF0aDogcHVzaEhhc2hQYXRoLFxyXG5cdCAgICByZXBsYWNlSGFzaFBhdGg6IHJlcGxhY2VIYXNoUGF0aCxcclxuXHQgICAgYXV0b1VwZGF0ZUhhc2g6IGF1dG9VcGRhdGVIYXNoLFxyXG5cdCAgICBnbzogZ28sXHJcblx0ICAgIGJhY2s6IGJhY2tcclxuXHQgIH07XHJcblx0fTtcclxuXHJcblx0bW9kdWxlLmV4cG9ydHMgPSBoYXNoSGlzdG9yeTtcclxuXHJcbi8qKiovIH0pXHJcbi8qKioqKiovIF0pXHJcbn0pO1xyXG47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2V4dHJhLWxpYi9ub3RpZnlCYWNrcHJlc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9