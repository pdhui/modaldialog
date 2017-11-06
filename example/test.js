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
	
	var dialog = __webpack_require__(1);
	var utils = __webpack_require__(8);
	
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
	
	  dialog.alert('提交失败，请稍后再试 ', '');
	}).addExample('带标题-单行提示框', 'tle-alert', function () {
	
	  dialog.alert('话费延时到账可能有说明', '领取成功');
	}).addExample('带标题-两行提示框', 'tle-alert2', function () {
	
	  dialog.alert('话费延时到账可能有说明，话费延时到账可能有说明。', '领取成功');
	});
	
	dialog.config({
	  useHash: true
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ModalDialog = __webpack_require__(2);
	var historyPlugin = __webpack_require__(10);
	
	ModalDialog.defaultConfig.useHash = true;
	
	ModalDialog.addPlugin(historyPlugin);
	
	module.exports = ModalDialog;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	__webpack_require__(3);
	
	var utils = __webpack_require__(8);
	var scrollDlg = __webpack_require__(9);
	var _ = {
	  assign: utils.assign
	},
	    winH,
	    winW;
	
	function noop() {}
	
	/*
	生成对话框模板内容
	 */
	function getHtmlContent(options) {
	  var templateHtml = [],
	      header = options.header;
	
	  header = utils.replaceTemlate(header, options);
	
	  templateHtml.push('<div class="rc-modal"><div class="dialog-mask"></div><div class="modal-dialog ' + options.clazz + '"><div class="modal-dialog-main"><header>');
	  templateHtml.push(header);
	  templateHtml.push('</header><section><div class="dialog-content"></div></section><footer>');
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
	  title: '温馨提示',
	  header: '<span class="dialog-title">{title}</span>',
	  animated: false,
	  buttons: null,
	  useBackground: 'cancel'
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
	    var dlgPosY = winH - dlgH > 0 ? (winH - dlgH) / 2 : winH * 0.1;
	    var dlgPosX = winW - dlgW > 0 ? (winW - dlgW) / 2 : winW * 0.1;
	
	    return { left: dlgPosX, top: dlgPosY };
	  },
	  closeDialog: function closeDialog(isNotInvoke) {
	    var dialogDom = this.dialogDom,
	        options = this.options,
	        selector,
	        _commentDom,
	        self = this;
	
	    dialogDom.style.display = 'none';
	    if (options.selector && dialogDom._commentDom) {
	      selector = options.selector;
	      _commentDom = dialogDom._commentDom;
	
	      selector.style.display = dialogDom._originDisplay;
	      _commentDom.parentNode.replaceChild(selector, _commentDom);
	
	      dialogDom._commentDom = null;
	      dialogDom._originDisplay = null;
	    }
	    utils.unBindEvent(dialogDom, 'click', this._eventListener);
	    dialogDom.parentNode.removeChild(dialogDom);
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
	
	    delete ModalDialog.dialogList[this.id];
	
	    ModalDialog.modalCount--;
	  },
	  refresh: function refresh() {
	    var dialogDom = this.dialogDom,
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
	
	  isConfig = true;
	};
	
	ModalDialog.dialogList = {};
	ModalDialog.modalCount = 0;
	
	module.exports = ModalDialog;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./base.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./base.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".rc-modal {\n  position: absolute;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n.rc-modal .modal-dialog {\n  border-radius: 0.0625rem;\n  text-align: center;\n  width: 20.25rem;\n  margin: 0 auto;\n  z-index: 9000;\n  position: fixed;\n  box-shadow: 0px 0px 0.4375rem 0px rgba(0, 0, 0, 0.2);\n}\n.modal-dialog.dlg-no-title header {\n  height: 1.75rem;\n}\n.modal-dialog.dlg-no-title .dialog-content {\n  color: #000;\n}\n.modal-dialog.dlg-no-title section {\n  text-align: left;\n}\n.modal-dialog.dlg-has-title header {\n  padding: 1.8125rem 0px 0.625rem 0px;\n  font-size: 1.125rem;\n}\n.modal-dialog.alert-dialog section {\n  text-align: center;\n}\n.modal-dialog .modal-dialog-main {\n  position: relative;\n  z-index: 9000;\n  background: #fafafa;\n  font-size: 1rem;\n  border-radius: 0.1875rem;\n}\n.modal-dialog .dialog-title {\n  color: #000;\n}\n.modal-dialog .dialog-content {\n  color: #323232;\n  line-height: 1.6;\n}\n.modal-dialog em {\n  font-style: normal;\n}\n.modal-dialog section {\n  padding: 0px 1.625rem;\n  margin: 0 auto;\n  max-height: 11.75rem;\n  overflow: hidden;\n  position: relative;\n}\n.modal-dialog footer {\n  border-top: 0.0625rem solid #d5d5d5;\n  height: 2.8125rem;\n  line-height: 2.8125rem;\n  margin-top: 1.25rem;\n  overflow: hidden;\n}\n.modal-dialog footer button {\n  outline: none;\n  border: 0;\n  padding: 0;\n  background: none;\n  font-size: 1rem;\n  height: 2.8125rem;\n}\n.modal-dialog footer button.modal-dialog-onebtn {\n  width: 100%;\n}\n.modal-dialog footer button:after {\n  content: '';\n  border-right: 0.0625rem solid #d5d5d5;\n  position: absolute;\n  top: 0px;\n  display: block;\n  height: 100%;\n  right: 0px;\n}\n.modal-dialog footer button.last:after {\n  display: none;\n}\n.modal-dialog footer .sure-btn,\n.modal-dialog footer .cancle-btn {\n  width: 50%;\n  float: left;\n  position: relative;\n}\n.modal-dialog footer .cancle-btn {\n  color: #000000;\n}\n.modal-dialog footer .sure-btn {\n  color: #517bd1;\n}\n.modal-dialog.alert-dialog footer {\n  text-align: center;\n}\n.modal-dialog.alert-dialog footer .sure-btn {\n  float: none;\n  margin: 0 auto;\n}\n.dialog-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 8999;\n  background: url(" + __webpack_require__(6) + ");\n}\n", ""]);
	
	// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABGdBTUEAALGPC/xhBQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TgK1eW0YAAAALSURBVAjXY2DABwAAHgABboVHMgAAAABJRU5ErkJggg=="

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 8 */
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
	    return str;
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(8);
	
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hashHistory = __webpack_require__(11);
	
	function initHash(ModalDialog, options) {
	
	  if (!options.useHash) return;
	
	  var hashListener = hashHistory(),
	      dialogMap = {},
	      hashQueue = [];
	
	  hashListener.listener(function (path, prepath) {
	    var prepath = prepath * 1;
	
	    if (!!prepath && path - prepath < 0) {
	      removeDialogByHash(prepath);
	    }
	  });
	
	  /*
	   queue --> hash --> dialogId --> modal
	   */
	  ModalDialog.afterListener(function (dialog) {
	    var hashVl = hashListener.autoUpdateHash();
	    dialogMap[hashVl] = dialog.id;
	    hashQueue.push(hashVl);
	  });
	
	  ModalDialog.closedListener(function (dialog) {
	    var unUsualIdx = hashQueue.length - 2,
	        hashvl = hashQueue[unUsualIdx],
	        lastItem;
	
	    if (dialogMap[hashvl] == dialog.id) {
	      hashQueue.splice(unUsualIdx, 1);
	      dialogMap[hashvl] = dialogMap[hashQueue[unUsualIdx]];
	      delete dialogMap[hashQueue[unUsualIdx]];
	      hashQueue[unUsualIdx]--;
	    } else {
	      lastItem = hashQueue.pop();
	      delete dialogMap[lastItem];
	    }
	
	    if (hashListener.getCurrentHashPath() > 0) hashListener.back();
	  });
	
	  function removeDialogByHash(hashvl) {
	    var dialogList = ModalDialog.dialogList,
	        splitIndex;
	
	    hashQueue.every(function (item, index) {
	      if (item == hashvl) {
	        splitIndex = index;
	      } else return true;
	    });
	
	    if (splitIndex != null) {
	
	      hashQueue.slice(splitIndex).forEach(function (item) {
	        dialogList[dialogMap[item]].closeDialog(true);
	        delete dialogMap[item];
	      });
	      hashQueue = hashQueue.slice(0, splitIndex);
	    }
	  }
	}
	
	module.exports = initHash;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _dom = __webpack_require__(8);
	
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
	    (0, _dom.unBindEvent)(window, HashChangeEvent, handleHashChange);
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
	
	  (0, _dom.bindEvent)(window, HashChangeEvent, handleHashChange);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NTllZjI2MjNmNGU0MDMzZmI0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nV2l0aEhhc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5sZXNzPzg1NTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hc2sucG5nIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9kbGdzY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbnMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFzaEhpc3RvcnkuanMiXSwibmFtZXMiOlsiZGlhbG9nIiwicmVxdWlyZSIsInV0aWxzIiwiZXhhbXBsZSIsIl9ldmVudHMiLCJhZGRFeGFtcGxlIiwidmFsdWUiLCJpZCIsImNhbGxiYWNrIiwiY29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVIdG1sRG9tIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSIsImJpbmRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJiaW5kIiwiZXZ0IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY29uZmlybSIsImFsZXJ0IiwiY29uZmlnIiwidXNlSGFzaCIsIk1vZGFsRGlhbG9nIiwiaGlzdG9yeVBsdWdpbiIsImRlZmF1bHRDb25maWciLCJhZGRQbHVnaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwic2Nyb2xsRGxnIiwiXyIsImFzc2lnbiIsIndpbkgiLCJ3aW5XIiwibm9vcCIsImdldEh0bWxDb250ZW50Iiwib3B0aW9ucyIsInRlbXBsYXRlSHRtbCIsImhlYWRlciIsInJlcGxhY2VUZW1sYXRlIiwicHVzaCIsImNsYXp6IiwiY3JlYXRlQnV0dG9ucyIsImNhbGwiLCJqb2luIiwicmVzaXplV2luIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJidG5zIiwiYnV0dG9ucyIsInRlbXBsYXRlIiwiYnRuVG1wbHMiLCJzZWxmIiwib25lQnRuQ2x6IiwiY2FuY2VsQ2FsbGJhY2siLCJuYW1lIiwiY2FuY2VsU3RyIiwiY2xzIiwibGVuZ3RoIiwib2tDYWxsYmFjayIsInN1cmVTdHIiLCJyZXZlcnNlIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImNhbGxiYWNrcyIsImluc2VydENvbnRlbnQiLCJkb20iLCJzZWxlY3RvciIsImNvbW1lbnQiLCJjcmVhdGVDb21tZW50Iiwib3JpRGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsIl9jb21tZW50RG9tIiwic3R5bGUiLCJkaXNwbGF5IiwiX29yaWdpbkRpc3BsYXkiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiY29udGVudCIsInJlcGxhY2UiLCJkZWZhdWx0U2V0dGluZ3MiLCJ0aXRsZSIsImFuaW1hdGVkIiwidXNlQmFja2dyb3VuZCIsImJlZm9yZUxpc3RlbmVycyIsImFmdGVyTGlzdGVuZXJzIiwiY2xvc2VkTGlzdGVuZXJzIiwiX2NvdW50IiwiX2NhbGxCYWNrcyIsIk9iamVjdCIsImtleXMiLCJsaXN0ZW5lciIsImRpYWxvZ0xpc3QiLCJjcmVhdGUiLCJtb2RhbENvdW50IiwiZGlhbG9nRG9tIiwiZGxnUG9zIiwiZGxnTWFpbkRvbSIsIm9mZnNldEgiLCJkb2N1bWVudEVsZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJkbGdTY3JvbGwiLCJpbml0VG91Y2giLCJnZXRQb3MiLCJsZWZ0IiwidG9wIiwiY2xhc3NOYW1lIiwidXNlcmJnciIsImRhdGFzZXQiLCJoZWlnaHQiLCJfZXZlbnRMaXN0ZW5lciIsInByb3h5IiwiX2NsaWNrRXZlbnQiLCJwcm90b3R5cGUiLCJkbGdIIiwiZGxnVyIsIm9mZnNldFdpZHRoIiwiZGxnUG9zWSIsImRsZ1Bvc1giLCJjbG9zZURpYWxvZyIsImlzTm90SW52b2tlIiwidW5CaW5kRXZlbnQiLCJyZW1vdmVDaGlsZCIsImRlc3Ryb3lTY3JvbGwiLCJyZWZyZXNoIiwiZSIsImZuIiwid3JhcEFyZ3MiLCJBcnJheSIsInNsaWNlIiwiYXJndW1lbnRzIiwiYXJncyIsImNvbmNhdCIsImFwcGx5IiwiY2x6IiwiY3JlYXRlUGFyYW1zIiwic3VyZUZuIiwiYnRUZXh0MSIsImJ0VGV4dDIiLCJjYW5jZWxGbiIsImFmdGVyTGlzdGVuZXIiLCJmaWx0ZXIiLCJwcmVMaXN0ZW5lciIsImNsb3NlZExpc3RlbmVyIiwiX3BsdWdpbnMiLCJpc0NvbmZpZyIsImNvbnNvbGUiLCJpbmZvIiwiaSIsImxlbiIsImNyZWF0ZUh0bWwiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaHRtbCIsInRlbXAiLCJjaGlsZHJlbiIsInN0ciIsImRhdGEiLCJyZWd4IiwiUmVnRXhwIiwiZXhlYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsImdldFVybFBhcmFtIiwia2V5IiwicmVnIiwiciIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyIiwibWF0Y2giLCJkZWNvZGVVUkkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJjbG9zZXN0IiwiY2xzUmVneCIsInRhZ1JlZ3giLCJwYXJlbnQiLCJ0ZXN0Iiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcmFtIiwicmVzIiwiZ2V0SGVpZ2h0Iiwic2VsIiwiaXNPdXRlciIsInNlY3Rpb25TdHlsZSIsIm1hcmdpbkgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJlYXNlIiwiY2lyY3VsYXIiLCJkbGdDb250ZW50Iiwic2VjdGlvbiIsInNjcm9sbFRhcmdlU3R5bGUiLCJ3cmFwcGVySGVpZ2h0IiwibWF4SGVpZ2h0Iiwic3RhcnRQb3N4Iiwic3RhcnRQb3N5IiwiaXNUb3VjaCIsInN0YXJ0VGltZSIsImRpc3RZIiwiZGlzdFgiLCJlbmRUaW1lIiwieCIsInkiLCJzdGFydFgiLCJzdGFydFkiLCJpc0luVHJhbnNpdGlvbiIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInN0b3BTY3JvbGxNb3ZlIiwic3RhcnRUb3VjaCIsInRvdWNoZUVuZCIsIl90cmFuc2l0aW9uRW5kIiwidG91Y2giLCJ0b3VjaGVzIiwicG9zIiwiX3RyYW5zaXRpb25UaW1lIiwiZ2V0Q29tcHV0ZWRQb3NpdGlvbiIsInRyYW5zbGF0ZSIsIk1hdGgiLCJyb3VuZCIsInBhZ2VYIiwicGFnZVkiLCJEYXRlIiwibm93IiwicG9zWCIsInBvc1kiLCJ0aW1lc3RhbXAiLCJkZWx0YVkiLCJkZWx0YVgiLCJuZXdZIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJhYnMiLCJkdXJhdGlvbiIsInRpbWUiLCJtb21lbnR1bVkiLCJyZXNldFBvc2l0aW9uIiwic2Nyb2xsVG8iLCJtb21lbnR1bSIsImRlc3RpbmF0aW9uIiwicG9zeSIsIndlYmtpdFRyYW5zZm9ybSIsImN1cnJlbnQiLCJzdGFydCIsImRpc3RhbmNlIiwic3BlZWQiLCJkZWNlbGVyYXRpb24iLCJtYXRyaXgiLCJzcGxpdCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhhc2hIaXN0b3J5IiwiaW5pdEhhc2giLCJoYXNoTGlzdGVuZXIiLCJkaWFsb2dNYXAiLCJoYXNoUXVldWUiLCJwYXRoIiwicHJlcGF0aCIsInJlbW92ZURpYWxvZ0J5SGFzaCIsImhhc2hWbCIsImF1dG9VcGRhdGVIYXNoIiwidW5Vc3VhbElkeCIsImhhc2h2bCIsImxhc3RJdGVtIiwic3BsaWNlIiwicG9wIiwiZ2V0Q3VycmVudEhhc2hQYXRoIiwiYmFjayIsInNwbGl0SW5kZXgiLCJldmVyeSIsIkhhc2hDaGFuZ2VFdmVudCIsInF1ZXJ5X2tleSIsInByZXZMb2NhdGlvbiIsImxpc3RlbmVycyIsImhyZWYiLCJpbmRleE9mIiwicXVlcnlJbmRleCIsIm1hdGNoZXMiLCJzdWJzdHJpbmciLCJzdG9wTGlzdGVuZXIiLCJoYW5kbGVIYXNoQ2hhbmdlIiwicHVzaEhhc2hQYXRoIiwiaGFzaCIsInJlcGxhY2VIYXNoUGF0aCIsInBhdGhuYW1lIiwiaGFzaFBhdGgiLCJnbyIsIm4iLCJoaXN0b3J5IiwiY3VycmVudExvY2F0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxLQUFJQSxTQUFTLG1CQUFBQyxDQUFRLENBQVIsQ0FBYjtBQUNBLEtBQUlDLFFBQVEsbUJBQUFELENBQVEsQ0FBUixDQUFaOztBQUVBLEtBQUlFLFVBQVU7QUFDWkMsWUFBUyxFQURHO0FBRVpDLGFBRlksc0JBRURDLEtBRkMsRUFFS0MsRUFGTCxFQUVRQyxRQUZSLEVBRWlCO0FBQzNCLFVBQUtDLFNBQUwsQ0FBZUMsV0FBZixDQUEyQlIsTUFBTVMsYUFBTixDQUFvQixrQkFBa0JKLEVBQWxCLEdBQXVCLHlCQUF2QixHQUFrREQsS0FBbEQsR0FBMEQsT0FBOUUsQ0FBM0I7QUFDQSxVQUFLRixPQUFMLENBQWFHLEVBQWIsSUFBbUJDLFFBQW5CO0FBQ0Es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QWlCaUIsZUFBckIsRUFDRTs7QUFFRmhCLGVBQVU1TixPQUFWLENBQWtCLG9CQUFVO0FBQzFCaUMsZ0JBQVMyTSxlQUFULEVBQXlCakIsWUFBekI7QUFDRCxNQUZEOztBQUlBQSxvQkFBZWlCLGVBQWY7QUFDRCxJQVhEOztBQWFBLHVCQUFVL1AsTUFBVixFQUFrQjRPLGVBQWxCLEVBQW1DVSxnQkFBbkM7O0FBRUEsVUFBTztBQUNMZCwyQ0FESztBQUVMcEwsdUJBRks7QUFHTGlNLCtCQUhLO0FBSUxFLCtCQUpLO0FBS0xFLHFDQUxLO0FBTUx2QixtQ0FOSztBQU9MMEIsV0FQSztBQVFMbkI7QUFSSyxJQUFQO0FBVUQsRUExRkQ7O0FBNEZBNVAsUUFBT0MsT0FBUCxHQUFpQjJPLFdBQWpCLEMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDU5ZWYyNjIzZjRlNDAzM2ZiNGYiLCJ2YXIgZGlhbG9nID0gcmVxdWlyZSgnLi4vZGlhbG9nV2l0aEhhc2guanMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2RvbS5qcycpO1xuXG52YXIgZXhhbXBsZSA9IHtcbiAgX2V2ZW50czoge30sXG4gIGFkZEV4YW1wbGUodmFsdWUsaWQsY2FsbGJhY2spe1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUh0bWxEb20oJzxsaSBkYXRhLWlkPVwiJyArIGlkICsgJ1wiIHN0eWxlPVwicGFkZGluZzo1cHg7XCI+JysgdmFsdWUgKyAnPC9saT4nKSk7XG4gICAgdGhpcy5fZXZlbnRzW2lkXSA9IGNhbGxiYWNrO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBpbml0KCl7XG4gICAgdGhpcy5jb250YWluZXIgPSB1dGlscy5jcmVhdGVIdG1sRG9tKCc8dWwgY2xhc3M9XCJleGFtcGxlTGlzdFwiIHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO1wiPjwvdWw+Jyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcblxuICAgIHV0aWxzLmJpbmRFdmVudCh0aGlzLmNvbnRhaW5lciwnY2xpY2snLCB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGRpc3BhdGNoRXZlbnQoZXZ0KXtcbiAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldCxcbiAgICAgICAgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgICBpZighIXRoaXMuX2V2ZW50c1tpZF0pe1xuICAgICAgdGhpcy5fZXZlbnRzW2lkXSgpO1xuICAgIH1cbiAgfVxufTtcbmV4YW1wbGUuaW5pdCgpO1xuZXhhbXBsZS5hZGRFeGFtcGxlKCfkuI3luKbmoIfpopgt56Gu6K6k5qGGMuihjCcsJ2NvbmZpcm0yJyxmdW5jdGlvbigpe1xuXG4gIGRpYWxvZy5jb25maXJtKCfmiZPlvIDigJzmkLrnqIvigJ3lrqLmiLfnq6/vvIzov5Tlm57mnKzpobXnq4vljbPlop7liqAz5qyh5oq95aWW5py65Lya44CCICcsbnVsbCxcIlwiLCfkuI3kuoYnLCfnq4vljbPmiZPlvIAnKTtcbn0pLmFkZEV4YW1wbGUoJ+S4jeW4puagh+mimC3noa7orqTmoYYz6KGMJywnY29uZmlybTMnLGZ1bmN0aW9uKCl7XG5cbiAgZGlhbG9nLmNvbmZpcm0oJ+aJk+W8gOKAnOaQuueoi+KAneWuouaIt+err++8jOi/lOWbnuacrOmhteeri+WNs+WiniDliqAz5qyh5oq95aWW5py65LyaLui/lOWbnuacrOmhteeri+WNs+WinuWKoDPmrKEg5oq95aWW5py65Lya44CCICcsbnVsbCxcIlwiLCfkuI3kuoYnLCfnq4vljbPmiZPlvIAnKTtcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3lj43ppojor7TmmI4nLCdmZWVkYmFjaycsZnVuY3Rpb24oKXtcblxuICBkaWFsb2cuY29uZmlybSgn5q+P5a6J6KOF5LiA5Liq5bqU55So77yM5aSa5aKe5YqgMeasoeaKveWlluacuuS8miAnLG51bGwsXCLojrflvpcx5qyh5oq95aWW5py65LyaXCIsJ+ehruWumicsJ+e7p+e7reWuieijhScpO1xufSkuYWRkRXhhbXBsZSgn5LiN5bim5qCH6aKYLeaPkOekuuahhicsJ2FsZXJ0JyxmdW5jdGlvbigpe1xuXG4gIGRpYWxvZy5hbGVydCgn5o+Q5Lqk5aSx6LSl77yM6K+356iN5ZCO5YaN6K+VICcsJycpO1xufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeWNleihjOaPkOekuuahhicsJ3RsZS1hbGVydCcsZnVuY3Rpb24oKXtcblxuICBkaWFsb2cuYWxlcnQoJ+ivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjicsJ+mihuWPluaIkOWKnycpO1xufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeS4pOihjOaPkOekuuahhicsJ3RsZS1hbGVydDInLGZ1bmN0aW9uKCl7XG5cbiAgZGlhbG9nLmFsZXJ0KCfor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7jgIInLCfpooblj5bmiJDlip8nKTtcbn0pXG5cbmRpYWxvZy5jb25maWcoe1xuICB1c2VIYXNoOnRydWVcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsInZhciBNb2RhbERpYWxvZyA9IHJlcXVpcmUoJy4vbW9kYWwuanMnKTtcbnZhciBoaXN0b3J5UGx1Z2luID0gcmVxdWlyZSgnLi9wbHVnaW5zL2hpc3RvcnkuanMnKTtcblxuTW9kYWxEaWFsb2cuZGVmYXVsdENvbmZpZy51c2VIYXNoID0gdHJ1ZTtcblxuTW9kYWxEaWFsb2cuYWRkUGx1Z2luKGhpc3RvcnlQbHVnaW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsRGlhbG9nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFsb2dXaXRoSGFzaC5qcyIsInJlcXVpcmUoJy4vY3NzL2Jhc2UubGVzcycpO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL2RvbS5qcycpO1xudmFyIHNjcm9sbERsZyA9IHJlcXVpcmUoJy4vZGxnc2Nyb2xsLmpzJyk7XG52YXIgXyA9IHtcbiAgYXNzaWduOiB1dGlscy5hc3NpZ25cbn0sIHdpbkgsIHdpblc7XG5cbmZ1bmN0aW9uIG5vb3AoKXt9XG5cbi8qXG7nlJ/miJDlr7nor53moYbmqKHmnb/lhoXlrrlcbiAqL1xuICBmdW5jdGlvbiBnZXRIdG1sQ29udGVudChvcHRpb25zKXtcbiAgICB2YXIgdGVtcGxhdGVIdG1sID0gW10sXG4gICAgICAgIGhlYWRlciA9IG9wdGlvbnMuaGVhZGVyO1xuXG4gICAgaGVhZGVyID0gdXRpbHMucmVwbGFjZVRlbWxhdGUoaGVhZGVyLG9wdGlvbnMpO1xuXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxkaXYgY2xhc3M9XCJyYy1tb2RhbFwiPjxkaXYgY2xhc3M9XCJkaWFsb2ctbWFza1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgJyArIG9wdGlvbnMuY2xhenogKyAnXCI+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZy1tYWluXCI+PGhlYWRlcj4nKTtcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaChoZWFkZXIpO1xuICAgIHRlbXBsYXRlSHRtbC5wdXNoKCc8L2hlYWRlcj48c2VjdGlvbj48ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRlbnRcIj48L2Rpdj48L3NlY3Rpb24+PGZvb3Rlcj4nKTtcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaChjcmVhdGVCdXR0b25zLmNhbGwodGhpcyxvcHRpb25zKSk7XG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PicpO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlSHRtbC5qb2luKCcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZVdpbigpe1xuICAgIHdpbkggPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICB3aW5XID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gIH1cbiAgLy8gdXRpbHMuYmluZEV2ZW50KHdpbmRvdywncmVzaXplJyxyZXNpemVXaW4pO1xuLy9UT0RPOlxuICAvLyByZXNpemVXaW4oKTtcbiAgLypcbiAg5Yib5bu65bqV6YOo5oyJ6ZKuXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVCdXR0b25zKG9wdGlvbnMpe1xuICAgIHZhciBidG5zID0gb3B0aW9ucy5idXR0b25zIHx8IFtdLFxuICAgICAgICB0ZW1wbGF0ZSA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIntjbHN9XCIgZGF0YS1pZD1cIntpZH1cIiA+e25hbWV9PC9idXR0b24+JyxcbiAgICAgICAgYnRuVG1wbHMgPSAnJyxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIG9uZUJ0bkNsej0nJztcblxuICAgIGlmKG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2spe1xuICAgICAgYnRucy5wdXNoKHtcbiAgICAgICAgaWQ6ICdjYW5jZWwnLFxuICAgICAgICBuYW1lOiBvcHRpb25zLmNhbmNlbFN0cixcbiAgICAgICAgY2FsbGJhY2s6IG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2ssXG4gICAgICAgIGNsczogXCJjYW5jbGUtYnRuXCJcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKGJ0bnMubGVuZ3RoID09MClcbiAgICAgIG9uZUJ0bkNseiA9ICcgbW9kYWwtZGlhbG9nLW9uZWJ0bic7XG5cbiAgICBpZihvcHRpb25zLm9rQ2FsbGJhY2spe1xuICAgICAgYnRucy5wdXNoKHtcbiAgICAgICAgaWQ6ICdvaycsXG4gICAgICAgIG5hbWU6IG9wdGlvbnMuc3VyZVN0cixcbiAgICAgICAgY2FsbGJhY2s6IG9wdGlvbnMub2tDYWxsYmFjayxcbiAgICAgICAgY2xzOiBcInN1cmUtYnRuXCIgKyBvbmVCdG5DbHpcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMucmV2ZXJzZSlcbiAgICAgIGJ0bnMgPSBidG5zLnJldmVyc2UoKTtcblxuICAgIGJ0bnMuZm9yRWFjaChmdW5jdGlvbihpdGVtLGluZGV4KXtcbiAgICAgIGlmKChidG5zLmxlbmd0aCAtIDEpID09IGluZGV4KVxuICAgICAgICBpdGVtLmNscyArPSAnIGxhc3QnO1xuICAgICAgYnRuVG1wbHMgKz0gdXRpbHMucmVwbGFjZVRlbWxhdGUodGVtcGxhdGUsaXRlbSk7XG4gICAgICBzZWxmLmNhbGxiYWNrc1tpdGVtLmlkXSA9IGl0ZW0uY2FsbGJhY2s7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnRuVG1wbHM7XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRDb250ZW50KGRvbSxvcHRpb25zKXtcbiAgICAgIGlmKG9wdGlvbnMuc2VsZWN0b3Ipe1xuICAgICAgICB2YXIgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJkaWFsb2ctdGFyZ2V0IHJlcGxhY2VcIiksXG4gICAgICAgICAgICBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IsXG4gICAgICAgICAgICBvcmlEaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWxlY3RvcikuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpO1xuXG4gICAgICAgIGlmKHNlbGVjdG9yLnBhcmVudE5vZGUpe1xuICAgICAgICAgIHNlbGVjdG9yLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbW1lbnQsc2VsZWN0b3IpO1xuICAgICAgICAgIGRvbS5fY29tbWVudERvbSA9IGNvbW1lbnQ7XG4gICAgICAgICAgaWYob3JpRGlzcGxheSA9PSAnbm9uZScpe1xuICAgICAgICAgICAgc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRvbS5fb3JpZ2luRGlzcGxheSA9IG9yaURpc3BsYXk7XG4gICAgICAgIH1cblxuICAgICAgICBkb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jb250ZW50JykuYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAgICBkb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jb250ZW50JykuaW5uZXJIVE1MID0gb3B0aW9ucy5jb250ZW50LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sICc8YnIvPicpO1xuICAgIH1cbi8qKlxuICogW01vZGFsRGlhbG9nIGRlc2NyaXB0aW9uXVxuICogY2xheno6IOW8ueWHuuahhueahGNzc+exu+WQjVxuICogY2FuY2VsU3RyIOWPlua2iOaMiemSrueahOaMiemSruWQjVxuICogc3VyZVN0ciDnoa7lrprmjInpkq7nmoTmjInpkq7lkI1cbiAqIHRpdGxlIOW8ueWHuuahhueahOagh+mimFxuICogaGVhZGVyIOihqOekuuWktOmDqOeahGh0bWzmqKHmnb9cbiAqIG9rQ2FsbGJhY2sg56Gu5a6a5oyJ6ZKu5Zue6LCD5Ye95pWwXG4gKiBjYW5jZWxDYWxsYmFjayDlj5bmtojmjInpkq7lm57osIPlh73mlbBcbiAqIGJ1dHRvbnMgW3tjbHM6J3N1cmUnLGNhbGxiYWNrOmZuLG5hbWU6J25hbWUnfV1cbiAqIHVzZUJhY2tncm91bmQg5Y2V5Ye76IOM5pmv5pe25omn6KGM55qE5Zue6LCD5Ye95pWwXG4gKi9cbiAgdmFyIGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICAgICAgY2xheno6ICdkaWFsb2ctdGhlbWUnLFxuICAgICAgICBjYW5jZWxTdHI6ICflj5bmtognLFxuICAgICAgICBzdXJlU3RyOiAn56Gu5a6aJyxcbiAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLFxuICAgICAgICBoZWFkZXI6ICc8c3BhbiBjbGFzcz1cImRpYWxvZy10aXRsZVwiPnt0aXRsZX08L3NwYW4+JyxcbiAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICAgICAgICBidXR0b25zOiBudWxsLFxuICAgICAgICB1c2VCYWNrZ3JvdW5kOiAnY2FuY2VsJ1xuICAgICAgfSxcbiAgICAgIGJlZm9yZUxpc3RlbmVycyA9IFtdLFxuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBbXSxcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IFtdLFxuICAgICAgX2NvdW50ID0gMDtcblxuICB2YXIgTW9kYWxEaWFsb2cgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICB2YXIgZGlhbG9nLFxuICAgICAgICBpZDtcblxuICAgIG9wdGlvbnMgPSBfLmFzc2lnbih7fSxkZWZhdWx0U2V0dGluZ3Msb3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLl9jYWxsQmFja3MgPSBvcHRpb25zLl9jYWxsQmFja3MgfHwge307XG4gICAgaWQgPSBvcHRpb25zLmlkID0gb3B0aW9ucy5pZCB8fCBfY291bnQ7XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMuX2NhbGxCYWNrc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBiZWZvcmVMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgICBsaXN0ZW5lcihvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbaWRdID0gZGlhbG9nID0gbmV3IE1vZGFsRGlhbG9nLmNyZWF0ZShvcHRpb25zKTtcblxuICAgIE1vZGFsRGlhbG9nLm1vZGFsQ291bnQgKys7XG5cbiAgICBhZnRlckxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICAgIGxpc3RlbmVyKGRpYWxvZyk7XG4gICAgfSk7XG5cbiAgICBfY291bnQgKys7XG5cbiAgICByZXR1cm4gZGlhbG9nO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIHZhciBkaWFsb2dEb20sXG4gICAgICAgIGRsZ1BvcyxcbiAgICAgICAgZGxnTWFpbkRvbSxcbiAgICAgICAgb2Zmc2V0SDtcblxuICAgIHRoaXMuY2FsbGJhY2tzID0gb3B0aW9ucy5fY2FsbEJhY2tzO1xuICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuXG4gICAgZGlhbG9nRG9tID0gdXRpbHMuY3JlYXRlSHRtbERvbShnZXRIdG1sQ29udGVudC5jYWxsKHRoaXMsb3B0aW9ucykpO1xuXG4gICAgaW5zZXJ0Q29udGVudChkaWFsb2dEb20sb3B0aW9ucyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dEb20pO1xuXG4gICAgb2Zmc2V0SCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLmRsZ1Njcm9sbCA9IHNjcm9sbERsZy5pbml0VG91Y2goZGlhbG9nRG9tKTtcblxuICAgIGRsZ01haW5Eb20gPSBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZycpO1xuICAgIGRsZ1BvcyA9IHRoaXMuZ2V0UG9zKGRsZ01haW5Eb20pO1xuXG4gICAgXy5hc3NpZ24oZGxnTWFpbkRvbS5zdHlsZSx7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxuICAgICAgdG9wOiBkbGdQb3MudG9wICsgJ3B4J1xuICAgIH0pO1xuXG4gICAgaWYob3B0aW9ucy5hbmltYXRlZClcbiAgICAgIGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLW1haW4nKS5jbGFzc05hbWUgKz0gJyBkbGctYW5pbWF0aW9uJztcblxuICAgIGlmKG9wdGlvbnMudXNlQmFja2dyb3VuZCl7XG4gICAgICB2YXIgdXNlcmJnciA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcbiAgICAgIGlmKCFvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0pe1xuICAgICAgICBvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0gPSBmdW5jdGlvbigpe307XG4gICAgICB9XG4gICAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuZGF0YXNldC5pZCA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuc3R5bGUuaGVpZ2h0ID0gb2Zmc2V0SCArICdweCc7XG5cbiAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gdGhpcy5wcm94eSh0aGlzLl9jbGlja0V2ZW50LGRpYWxvZ0RvbSxvcHRpb25zKTtcbiAgICB0aGlzLmRpYWxvZ0RvbSA9IGRpYWxvZ0RvbTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2dEb20sJ2NsaWNrJyx0aGlzLl9ldmVudExpc3RlbmVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBfLmFzc2lnbihNb2RhbERpYWxvZy5jcmVhdGUucHJvdG90eXBlLHtcbiAgICBjYWxsYmFja3M6IG51bGwsXG4gICAgZ2V0UG9zOiBmdW5jdGlvbihkaWFsb2dEb20pe1xuICAgICAgZGlhbG9nRG9tID0gZGlhbG9nRG9tIHx8IHRoaXMuZGlhbG9nRG9tO1xuICAgICAgaWYoIWRpYWxvZ0RvbSl7XG4gICAgICAgIHJldHVybiB7bGVmdDowLHRvcDowfTtcbiAgICAgIH1cbiAgICAgIHJlc2l6ZVdpbigpO1xuICAgICAgdmFyIGRsZ0ggPSBkaWFsb2dEb20ub2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIGRsZ1cgPSBkaWFsb2dEb20ub2Zmc2V0V2lkdGg7XG4gICAgICB2YXIgZGxnUG9zWSA9ICh3aW5IIC0gZGxnSCA+IDAgKSA/ICh3aW5IIC0gZGxnSCkvMiA6IHdpbkgqMC4xO1xuICAgICAgdmFyIGRsZ1Bvc1ggPSAod2luVyAtIGRsZ1cgPiAwICkgPyAod2luVyAtIGRsZ1cpLzIgOiB3aW5XKjAuMTtcblxuICAgICAgcmV0dXJuIHtsZWZ0OiBkbGdQb3NYLCB0b3A6IGRsZ1Bvc1l9O1xuICAgIH0sXG4gICAgY2xvc2VEaWFsb2c6ZnVuY3Rpb24oaXNOb3RJbnZva2Upe1xuICAgICAgdmFyIGRpYWxvZ0RvbSA9IHRoaXMuZGlhbG9nRG9tLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgX2NvbW1lbnREb20sXG4gICAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGRpYWxvZ0RvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgaWYob3B0aW9ucy5zZWxlY3RvciAmJiBkaWFsb2dEb20uX2NvbW1lbnREb20pe1xuICAgICAgICBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3I7XG4gICAgICAgIF9jb21tZW50RG9tID0gZGlhbG9nRG9tLl9jb21tZW50RG9tO1xuXG4gICAgICAgIHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSBkaWFsb2dEb20uX29yaWdpbkRpc3BsYXk7XG4gICAgICAgIF9jb21tZW50RG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHNlbGVjdG9yLF9jb21tZW50RG9tKTtcblxuICAgICAgICBkaWFsb2dEb20uX2NvbW1lbnREb20gPSBudWxsO1xuICAgICAgICBkaWFsb2dEb20uX29yaWdpbkRpc3BsYXkgPSBudWxsO1xuICAgICAgfVxuICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nRG9tLCdjbGljaycsdGhpcy5fZXZlbnRMaXN0ZW5lcik7XG4gICAgICBkaWFsb2dEb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaWFsb2dEb20pO1xuICAgICAgdGhpcy5kbGdTY3JvbGwuZGVzdHJveVNjcm9sbCAmJiB0aGlzLmRsZ1Njcm9sbC5kZXN0cm95U2Nyb2xsKCk7XG5cbiAgICAgIGlmKCFpc05vdEludm9rZSl7XG4gICAgICAgIGNsb3NlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICAgICAgICBsaXN0ZW5lcihzZWxmKTtcbiAgICAgICAgfSk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYob3B0aW9ucy5jYW5jZWxDYWxsYmFjaylcbiAgICAgICAgICBvcHRpb25zLmNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgICAgdGhpcy5kaWFsb2dEb20gPSBkaWFsb2dEb20gPSBudWxsO1xuXG4gICAgICBkZWxldGUgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdFt0aGlzLmlkXTtcblxuICAgICAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCAtLTtcbiAgICB9LFxuICAgIHJlZnJlc2g6IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgZGlhbG9nRG9tID0gdGhpcy5kaWFsb2dEb20sXG4gICAgICAgICAgZGxnUG9zID0gdGhpcy5nZXRQb3MoZGlhbG9nRG9tKTtcblxuICAgICAgXy5hc3NpZ24oZGlhbG9nRG9tLnN0eWxlLHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxuICAgICAgICB0b3A6IGRsZ1Bvcy50b3AgKyAncHgnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGxnU2Nyb2xsLnJlZnJlc2goKTtcbiAgICB9LFxuICAgIF9jbGlja0V2ZW50OiBmdW5jdGlvbihlLGRpYWxvZ0RvbSxvcHRpb25zKXtcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgICBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgaWYodHlwZW9mIHRoaXMuY2FsbGJhY2tzW2lkXSA9PSAnZnVuY3Rpb24nICYmICF0aGlzLmNhbGxiYWNrc1tpZF0uY2FsbCh0aGlzLGUpKXtcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHNlbGYuY2xvc2VEaWFsb2coKTtcbiAgICAgICAgLy8gfSwxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3h5OiBmdW5jdGlvbihmbil7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgd3JhcEFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYod3JhcEFyZ3MubGVuZ3RoID4gMClcbiAgICAgICAgICBhcmdzID0gYXJncy5jb25jYXQod3JhcEFyZ3MpO1xuXG4gICAgICAgIGZuLmFwcGx5KHNlbGYsYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBNb2RhbERpYWxvZy5hbGVydCA9IGZ1bmN0aW9uKGNvbnRlbnQsdGl0bGUsY2FsbGJhY2ssZG9tLGNscyl7XG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcblxuICAgIGNseiArPSAnIGFsZXJ0LWRpYWxvZyc7XG5cbiAgICBpZih0eXBlb2YgY29udGVudCAhPT0gJ29iamVjdCcpe1xuICAgICAgY29udGVudCA9IHV0aWxzLmNyZWF0ZVBhcmFtcyh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgb2tDYWxsYmFjazpjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBkb21cbiAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnRlbnQub2tDYWxsYmFjayA9IGNvbnRlbnQub2tDYWxsYmFjayB8fCBub29wO1xuXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXG4gICAgICBjbHogKz0gJyBkbGctbm8tdGl0bGUnO1xuICAgIGVsc2VcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xuXG4gICAgY29udGVudC5jbGF6eiA9IGNsejtcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coY29udGVudCk7XG4gIH1cblxuICBNb2RhbERpYWxvZy5jb25maXJtID0gZnVuY3Rpb24oY29udGVudCxzdXJlRm4sdGl0bGUsYnRUZXh0MSxidFRleHQyLGNhbmNlbEZuLGNscyl7XG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcblxuICAgIGNseiArPSAnIGNvbmZpcm0tZGlhbG9nJztcblxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XG4gICAgICBjb250ZW50ID0gdXRpbHMuY3JlYXRlUGFyYW1zKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOnN1cmVGbixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGxiYWNrOmNhbmNlbEZuLFxuICAgICAgICAgICAgICAgICAgc3VyZVN0cjogYnRUZXh0MixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFN0cjpidFRleHQxXG4gICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZighY29udGVudC50aXRsZSlcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XG4gICAgZWxzZVxuICAgICAgY2x6ICs9ICcgZGxnLWhhcy10aXRsZSc7XG5cbiAgICBjb250ZW50Lm9rQ2FsbGJhY2sgPSBjb250ZW50Lm9rQ2FsbGJhY2sgfHwgbm9vcDtcbiAgICBjb250ZW50LmNhbmNlbENhbGxiYWNrID0gY29udGVudC5jYW5jZWxDYWxsYmFjayB8fCBub29wO1xuICAgIGNvbnRlbnQuY2xhenogPSBjbHo7XG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nKGNvbnRlbnQpO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgYWZ0ZXJMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIGFmdGVyTGlzdGVuZXJzID0gYWZ0ZXJMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIE1vZGFsRGlhbG9nLnByZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xuICAgIGJlZm9yZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgYmVmb3JlTGlzdGVuZXJzID0gYmVmb3JlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICBNb2RhbERpYWxvZy5jbG9zZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICBjbG9zZWRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IGNsb3NlZExpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgIHJldHVybiBpdGVtICE9IGxpc3RlbmVyO1xuICAgICAgfSlcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9wbHVnaW5zID0gW107XG5cbiAgTW9kYWxEaWFsb2cuYWRkUGx1Z2luID0gZnVuY3Rpb24oZm4pe1xuICAgIF9wbHVnaW5zLnB1c2goZm4pO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcgPSB7fTtcbiAgdmFyIGlzQ29uZmlnID0gZmFsc2U7XG5cbiAgTW9kYWxEaWFsb2cuY29uZmlnID0gZnVuY3Rpb24oY29uZmlnKXtcbiAgICB2YXIgb3B0aW9ucyA9IHV0aWxzLmFzc2lnbih7fSxNb2RhbERpYWxvZy5kZWZhdWx0Q29uZmlnLGNvbmZpZyk7XG5cbiAgICBNb2RhbERpYWxvZy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBpZihpc0NvbmZpZyl7XG4gICAgICBjb25zb2xlLmluZm8oJ21vZGFsZGlhbGcgb25seSBjYW4gY29uZmlnIG9uY2UnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IodmFyIGk9MCwgbGVuPV9wbHVnaW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIF9wbHVnaW5zW2ldKE1vZGFsRGlhbG9nLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpc0NvbmZpZyA9IHRydWU7XG4gIH1cblxuXG4gIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3QgPSB7fTtcbiAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCA9IDA7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kYWxEaWFsb2c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kYWwuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vYmFzZS5sZXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL2Jhc2UubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vYmFzZS5sZXNzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvYmFzZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yYy1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxufVxcbi5yYy1tb2RhbCAubW9kYWwtZGlhbG9nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMDYyNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyMC4yNXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgei1pbmRleDogOTAwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMC40Mzc1cmVtIDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLW5vLXRpdGxlIGhlYWRlciB7XFxuICBoZWlnaHQ6IDEuNzVyZW07XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLW5vLXRpdGxlIC5kaWFsb2ctY29udGVudCB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLm1vZGFsLWRpYWxvZy5kbGctbm8tdGl0bGUgc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1oYXMtdGl0bGUgaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEuODEyNXJlbSAwcHggMC42MjVyZW0gMHB4O1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuLm1vZGFsLWRpYWxvZy5hbGVydC1kaWFsb2cgc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbC1kaWFsb2cgLm1vZGFsLWRpYWxvZy1tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDkwMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5kaWFsb2ctdGl0bGUge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5tb2RhbC1kaWFsb2cgLmRpYWxvZy1jb250ZW50IHtcXG4gIGNvbG9yOiAjMzIzMjMyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuLm1vZGFsLWRpYWxvZyBlbSB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5tb2RhbC1kaWFsb2cgc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAwcHggMS42MjVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC1oZWlnaHQ6IDExLjc1cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIge1xcbiAgYm9yZGVyLXRvcDogMC4wNjI1cmVtIHNvbGlkICNkNWQ1ZDU7XFxuICBoZWlnaHQ6IDIuODEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjgxMjVyZW07XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGhlaWdodDogMi44MTI1cmVtO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b24ubW9kYWwtZGlhbG9nLW9uZWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjA2MjVyZW0gc29saWQgI2Q1ZDVkNTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogMHB4O1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b24ubGFzdDphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuc3VyZS1idG4sXFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLmNhbmNsZS1idG4ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuY2FuY2xlLWJ0biB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLnN1cmUtYnRuIHtcXG4gIGNvbG9yOiAjNTE3YmQxO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBmb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBmb290ZXIgLnN1cmUtYnRuIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5kaWFsb2ctbWFzayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDg5OTk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1hZ2VzL21hc2sucG5nXCIpICsgXCIpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvY3NzL2Jhc2UubGVzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtBUU1BQUFDMy9GMytBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQU5RVEZSRkFBQUFwM285MmdBQUFBRjBVazVUZ0sxZVcwWUFBQUFMU1VSQlZBalhZMkRBQndBQUhnQUJib1ZITWdBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlcy9tYXNrLnBuZ1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlSHRtbERvbTogKGZ1bmN0aW9uIGNyZWF0ZUh0bWwoKXtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oaHRtbCl7XG4gICAgICB2YXIgdGVtcDtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgdGVtcCA9IGRpdi5jaGlsZHJlblswXTtcbiAgICAgIGRpdi5yZW1vdmVDaGlsZCh0ZW1wKTtcbiAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cbiAgfSkoKSxcbiAgcmVwbGFjZVRlbWxhdGU6IGZ1bmN0aW9uKHN0cixkYXRhKXtcbiAgICB2YXIgcmVneCA9IG5ldyBSZWdFeHAoL3soLio/KX0vZyksXG4gICAgICAgIHRlbXA7XG4gICAgd2hpbGUodGVtcCA9IHJlZ3guZXhlYyhzdHIpKXtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHRlbXBbMF0sZGF0YVt0ZW1wWzFdXSB8fCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH0sXG4gIGJpbmRFdmVudDogZnVuY3Rpb24oZG9tLG5hbWUsZm4pe1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyXG4gICAgICA/IGRvbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsZm4sZmFsc2UpXG4gICAgICA6IGRvbS5hdHRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xuICB9LFxuICB1bkJpbmRFdmVudDogZnVuY3Rpb24oZG9tLG5hbWUsZm4pe1xuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICA/IGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsZm4sZmFsc2UpXG4gICAgICA6IGRvbS5kZXRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xuICB9LFxuICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwmKVwiICsga2V5ICsgXCI9KFteJl0qKSgmfCQpXCIsIFwiaVwiKTtcbiAgICAgIHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcbiAgICAgIGlmIChyICE9IG51bGwpIHJldHVybiBkZWNvZGVVUkkoclsyXSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgYXNzaWduOiBmdW5jdGlvbigpe1xuICAgIHZhciB0ZW1wID0gYXJndW1lbnRzWzBdO1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGZvcih2YXIgaT0wLGxlbj1hcmdzLmxlbmd0aDtpPGxlbjtpKyspe1xuICAgICAgdmFyIGl0ZW0gPSBhcmdzW2ldO1xuICAgICAgaWYoIWl0ZW0pXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgZm9yKHZhciBwIGluIGl0ZW0pe1xuICAgICAgICBpZihpdGVtLmhhc093blByb3BlcnR5KHApKXtcbiAgICAgICAgICB0ZW1wW3BdID0gaXRlbVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGVtcDtcbiAgfSxcbiAgY2xvc2VzdDogZnVuY3Rpb24oZG9tLGNscyl7XG4gICAgdmFyIGNsc1JlZ3ggPSBuZXcgUmVnRXhwKCcoXnxcXFxccyspJysgY2xzICsgJyhcXFxccyt8JCknKSxcbiAgICAgICAgdGFnUmVneCA9IG5ldyBSZWdFeHAoJ14nKyBjbHMgKyAnJCcpLFxuICAgICAgICBwYXJlbnQgPSBkb207XG5cbiAgICBpZih0ZXN0KGRvbSkpXG4gICAgICByZXR1cm4gZG9tO1xuXG4gICAgd2hpbGUoISEocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpICYmICBwYXJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPSAnaHRtbCcpe1xuICAgICAgaWYodGVzdChwYXJlbnQpKXtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgICBmdW5jdGlvbiB0ZXN0KGRvbSl7XG5cbiAgICAgIGlmKCEhZG9tLmNsYXNzTmFtZS5tYXRjaChjbHNSZWd4KSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfWVsc2UgaWYodGFnUmVneC50ZXN0KGRvbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlUGFyYW1zOiBmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIHJlcyA9IHt9O1xuXG4gICAgZm9yKHZhciBwIGluIHBhcmFtKXtcbiAgICAgIGlmKHBhcmFtLmhhc093blByb3BlcnR5KHApKXtcbiAgICAgICAgaWYodHlwZW9mIHBhcmFtW3BdICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICByZXNbcF0gPSBwYXJhbVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RvbS5qcyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4vZG9tLmpzJyk7XG5cbmZ1bmN0aW9uIGdldEhlaWdodChzZWwsaXNPdXRlcil7XG4gIHZhciBzZWN0aW9uU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHNlbCksXG4gICAgICBtYXJnaW5IID0gMDtcblxuICBpZihpc091dGVyKXtcbiAgICBtYXJnaW5IID0gc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKS5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgICAgICBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpLnJlcGxhY2UoJ3B4JywnJykqMVxuICB9XG4gIHJldHVybiAoXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMSArXG4gICAgICAgICAgc2VjdGlvblN0eWxlLnBhZGRpbmdUb3AucmVwbGFjZSgncHgnLCcnKSoxICtcbiAgICAgICAgICBzZWN0aW9uU3R5bGUucGFkZGluZ0JvdHRvbS5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIHNlY3Rpb25TdHlsZS5ib3JkZXJUb3BXaWR0aC5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIHNlY3Rpb25TdHlsZS5ib3JkZXJCb3R0b21XaWR0aC5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIG1hcmdpbkhcbiAgICAgICAgKTtcbn1cblxudmFyIGVhc2UgPSB7XG4gIGNpcmN1bGFyOiB7XG4gICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4xLCAwLjU3LCAwLjEsIDEpJ1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdFRvdWNoOiBmdW5jdGlvbihkaWFsb2cpe1xuICAgIHZhciBkbGdDb250ZW50ID0gIGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKSxcbiAgICAgICAgc2VjdGlvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyksXG4gICAgICAgIHNjcm9sbFRhcmdlU3R5bGUgPSBkbGdDb250ZW50LnN0eWxlLFxuICAgICAgICB3cmFwcGVySGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsJycpKjEsXG4gICAgICAgIG1heEhlaWdodCwgc3RhcnRQb3N4LCBzdGFydFBvc3ksIGlzVG91Y2gsXG4gICAgICAgIHN0YXJ0VGltZSwgZGlzdFksIGRpc3RYLFxuICAgICAgICBlbmRUaW1lID0gMCwgeCA9MCwgeSA9MCwgc3RhcnRYLCBzdGFydFksIGlzSW5UcmFuc2l0aW9uO1xuXG4gICAgbWF4SGVpZ2h0ID0gd3JhcHBlckhlaWdodCAtIGdldEhlaWdodChkbGdDb250ZW50LHRydWUpO1xuXG4gICAgc2Nyb2xsVGFyZ2VTdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSBlYXNlLmNpcmN1bGFyLnN0eWxlO1xuXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2htb3ZlJyxzdG9wU2Nyb2xsTW92ZSk7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XG4gICAgdXRpbHMuYmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3RyYW5zaXRpb25lbmQnLF90cmFuc2l0aW9uRW5kKTtcbiAgICB1dGlscy5iaW5kRXZlbnQoZGxnQ29udGVudCwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3RyYW5zaXRpb25FbmQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3lTY3JvbGw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2htb3ZlJyxzdG9wU2Nyb2xsTW92ZSk7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3RyYW5zaXRpb25lbmQnLF90cmFuc2l0aW9uRW5kKTtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnQ29udGVudCwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3RyYW5zaXRpb25FbmQpO1xuICAgICAgICBkbGdDb250ZW50ID0gc2VjdGlvbiA9IG51bGw7XG4gICAgICB9LFxuICAgICAgcmVmcmVzaDogZnVuY3Rpb24oKXtcbiAgICAgICAgd3JhcHBlckhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxO1xuICAgICAgICBtYXhIZWlnaHQgPSB3cmFwcGVySGVpZ2h0IC0gZ2V0SGVpZ2h0KGRsZ0NvbnRlbnQsdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0VG91Y2goZSl7XG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXG4gICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY2xvc2VzdChlLnRhcmdldCwnZGlhbG9nLWNvbnRlbnQnKSxcbiAgICAgICAgICBwb3M7XG5cbiAgICAgIGlmKCEhdGFyZ2V0KXtcbiAgICAgICAgaWYoaXNJblRyYW5zaXRpb24pe1xuICAgICAgICAgIF90cmFuc2l0aW9uVGltZSgpO1xuICAgICAgICAgIGlzSW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgcG9zID0gZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xuICAgICAgICAgIHRyYW5zbGF0ZShNYXRoLnJvdW5kKHBvcy54KSwgTWF0aC5yb3VuZChwb3MueSkpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0UG9zeCA9IHRvdWNoLnBhZ2VYO1xuICAgICAgICBzdGFydFBvc3kgPSB0b3VjaC5wYWdlWTtcbiAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgZGlzdFggPSBkaXN0WSA9IDA7XG4gICAgICAgIHN0YXJ0WCA9IHg7XG4gICAgICAgIHN0YXJ0WSA9IHk7XG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlzVG91Y2ggPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcFNjcm9sbE1vdmUoZSl7XG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXG4gICAgICAgICAgcG9zWCA9IHRvdWNoLnBhZ2VYLFxuICAgICAgICAgIHBvc1kgPSB0b3VjaC5wYWdlWSxcbiAgICAgICAgICBub2RlTmFtZSA9IGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgdmFyIGRlbHRhWSA9IHBvc1kgLSBzdGFydFBvc3ksXG4gICAgICAgICAgZGVsdGFYID0gcG9zWCAtIHN0YXJ0UG9zeCxcbiAgICAgICAgICBuZXdZO1xuXG4gICAgICBzdGFydFBvc3ggPSBwb3NYO1xuICAgICAgc3RhcnRQb3N5ID0gcG9zWTtcblxuICAgICAgZGlzdFggKz0gZGVsdGFYO1xuICAgICAgZGlzdFkgKz0gZGVsdGFZO1xuXG4gICAgICBpZiggbm9kZU5hbWUgIT0gJ2lucHV0JyAmJiBub2RlTmFtZSAhPSAnc2VsZWN0JyAmJiBub2RlTmFtZSAhPSAndGV4dGFyZWEnKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCAodGltZXN0YW1wIC0gZW5kVGltZSA+IDMwMCAmJiBNYXRoLmFicyhkaXN0WSkgPCAxMCkgfHwgIWlzVG91Y2ggfHwgbWF4SGVpZ2h0ID49IDApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5ld1kgPSB5ICsgZGVsdGFZO1xuICAgICAgaWYgKCBuZXdZID4gMCB8fCBuZXdZIDwgbWF4SGVpZ2h0ICkge1xuICAgICAgICBuZXdZID0geSArIGRlbHRhWSAvIDM7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zbGF0ZShkbGdDb250ZW50LG5ld1kpO1xuXG4gICAgICBpZiAoIHRpbWVzdGFtcCAtIHN0YXJ0VGltZSA+IDMwMCApIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuICAgICAgICBzdGFydFggPSB4O1xuICAgICAgICBzdGFydFkgPSB5O1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b3VjaGVFbmQoZSl7XG4gICAgICB2YXIgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxuICAgICAgICAgIG5ld1kgPSBNYXRoLnJvdW5kKHkpLFxuICAgICAgICAgIHRpbWUgPSAwLFxuICAgICAgICAgIG1vbWVudHVtWTtcblxuICAgICAgc3RhcnRQb3N4ID0gbnVsbDtcbiAgICAgIHN0YXJ0UG9zeSA9IG51bGw7XG4gICAgICBlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIGlzSW5UcmFuc2l0aW9uID0gMDtcblxuICAgICAgaWYgKHJlc2V0UG9zaXRpb24oZGxnQ29udGVudCw1MDApIHx8IG1heEhlaWdodCA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2Nyb2xsVG8oZGxnQ29udGVudCwgbmV3WSk7XG5cbiAgICAgIGlmKGR1cmF0aW9uIDwgMzAwKXtcbiAgICAgICAgbW9tZW50dW1ZID0gbW9tZW50dW0oeSwgc3RhcnRZLCBkdXJhdGlvbik7XG4gICAgICAgIG5ld1kgPSBtb21lbnR1bVkuZGVzdGluYXRpb247XG4gICAgICAgIHRpbWUgPSBtb21lbnR1bVkuZHVyYXRpb247XG4gICAgICAgIGlzSW5UcmFuc2l0aW9uID0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBuZXdZICE9IHkgKSB7XG4gICAgICAgIHNjcm9sbFRvKGRsZ0NvbnRlbnQsIG5ld1ksdGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCxwb3N5LHRpbWUpe1xuICAgICAgdGltZSA9IHRpbWUgfHwgMDtcbiAgICAgIGlzSW5UcmFuc2l0aW9uID0gdGltZSA+IDA7XG4gICAgICBfdHJhbnNpdGlvblRpbWUodGltZSk7XG4gICAgICB0cmFuc2xhdGUodGFyZ2V0LHBvc3kpXG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSh0YXJnZXQsIHBvc3kpIHtcbiAgICAgIHNjcm9sbFRhcmdlU3R5bGUud2Via2l0VHJhbnNmb3JtICA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHBvc3kgKyAncHgsMHB4KSc7XG4gICAgICB5ID0gcG9zeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzZXRQb3NpdGlvbih0YXJnZXQsdGltZSl7XG4gICAgICB2YXIgcG9zWSA9IHk7XG5cbiAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XG5cbiAgICAgIGlmIChwb3NZID49IDAgKSB7XG4gICAgICAgIHBvc1kgPSAwO1xuICAgICAgfSBlbHNlIGlmIChwb3NZIDwgbWF4SGVpZ2h0ICkge1xuICAgICAgICBwb3NZID0gbWF4SGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAoIHBvc1kgPT0geSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzY3JvbGxUbyh0YXJnZXQsIHBvc1ksIHRpbWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9tZW50dW0oY3VycmVudCwgc3RhcnQsIHRpbWUpe1xuICAgICAgdmFyIGRpc3RhbmNlID0gY3VycmVudCAtIHN0YXJ0LFxuICAgICAgICAgIHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZSxcbiAgICAgICAgICBkZWNlbGVyYXRpb24gPSAwLjAwMDYsXG4gICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgZHVyYXRpb247XG5cbiAgICAgIGRlc3RpbmF0aW9uID0gY3VycmVudCArICggc3BlZWQgKiBzcGVlZCApIC8gKCAyICogZGVjZWxlcmF0aW9uICkgKiAoIGRpc3RhbmNlIDwgMCA/IC0xIDogMSApOyAvLyBzPShhdF4yKS8yXG4gICAgICBkdXJhdGlvbiA9IHNwZWVkIC8gZGVjZWxlcmF0aW9uOyAvLyB2PWF0XG5cbiAgICAgIGlmICggZGVzdGluYXRpb24gPCBtYXhIZWlnaHQgKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uID0gbWF4SGVpZ2h0IC0gKCB3cmFwcGVySGVpZ2h0IC8gMi41ICogKCBzcGVlZCAvIDggKSApO1xuICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGRlc3RpbmF0aW9uIC0gY3VycmVudCk7XG4gICAgICAgIGR1cmF0aW9uID0gZGlzdGFuY2UgLyBzcGVlZDtcbiAgICAgIH1lbHNlIGlmKGRlc3RpbmF0aW9uID4gMCl7XG4gICAgICAgIGRlc3RpbmF0aW9uID0gd3JhcHBlckhlaWdodCAvIDIuNSAqICggc3BlZWQgLyA4ICk7XG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoY3VycmVudCkgKyBkZXN0aW5hdGlvbjtcbiAgICAgICAgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZXN0aW5hdGlvbjogTWF0aC5yb3VuZChkZXN0aW5hdGlvbiksXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb21wdXRlZFBvc2l0aW9uKCkge1xuICAgICAgdmFyIG1hdHJpeCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRsZ0NvbnRlbnQsIG51bGwpLFxuICAgICAgICB4LCB5O1xuXG4gICAgICBtYXRyaXggPSBtYXRyaXgud2Via2l0VHJhbnNmb3JtLnNwbGl0KCcpJylbMF0uc3BsaXQoJywgJyk7XG4gICAgICB4ID0gKyhtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSk7XG4gICAgICB5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XG5cbiAgICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdHJhbnNpdGlvblRpbWUodGltZSl7XG4gICAgICB0aW1lID0gdGltZSB8fCAwO1xuICAgICAgc2Nyb2xsVGFyZ2VTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0aW1lICsgJ21zJztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3RyYW5zaXRpb25FbmQoKXtcbiAgICAgIGlmKCFpc0luVHJhbnNpdGlvbilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgX3RyYW5zaXRpb25UaW1lKCk7XG4gICAgICBpZighcmVzZXRQb3NpdGlvbihkbGdDb250ZW50KSl7XG4gICAgICAgIGlzSW5UcmFuc2l0aW9uID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RsZ3Njcm9sbC5qcyIsInZhciBoYXNoSGlzdG9yeSA9IHJlcXVpcmUoJy4uL2hhc2hIaXN0b3J5LmpzJyk7XG5cbmZ1bmN0aW9uIGluaXRIYXNoKE1vZGFsRGlhbG9nLCBvcHRpb25zKXtcblxuICBpZighb3B0aW9ucy51c2VIYXNoKVxuICAgIHJldHVybjtcblxuICB2YXIgaGFzaExpc3RlbmVyID0gaGFzaEhpc3RvcnkoKSxcbiAgICAgIGRpYWxvZ01hcCA9IHt9LFxuICAgICAgaGFzaFF1ZXVlID0gW107XG5cbiAgaGFzaExpc3RlbmVyLmxpc3RlbmVyKGZ1bmN0aW9uKHBhdGgscHJlcGF0aCl7XG4gICAgdmFyIHByZXBhdGggPSBwcmVwYXRoICogMTtcblxuICAgIGlmKCEhcHJlcGF0aCAmJiBwYXRoIC0gcHJlcGF0aCA8IDApe1xuICAgICAgcmVtb3ZlRGlhbG9nQnlIYXNoKHByZXBhdGgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLypcbiAgIHF1ZXVlIC0tPiBoYXNoIC0tPiBkaWFsb2dJZCAtLT4gbW9kYWxcbiAgICovXG4gIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIoZnVuY3Rpb24oZGlhbG9nKXtcbiAgICB2YXIgaGFzaFZsID0gaGFzaExpc3RlbmVyLmF1dG9VcGRhdGVIYXNoKCk7XG4gICAgZGlhbG9nTWFwW2hhc2hWbF0gPSBkaWFsb2cuaWQ7XG4gICAgaGFzaFF1ZXVlLnB1c2goaGFzaFZsKTtcbiAgfSk7XG5cbiAgTW9kYWxEaWFsb2cuY2xvc2VkTGlzdGVuZXIoZnVuY3Rpb24oZGlhbG9nKXtcbiAgICB2YXIgdW5Vc3VhbElkeCA9IGhhc2hRdWV1ZS5sZW5ndGggLSAyLFxuICAgICAgICBoYXNodmwgPSBoYXNoUXVldWVbdW5Vc3VhbElkeF0sXG4gICAgICAgIGxhc3RJdGVtO1xuXG4gICAgaWYoZGlhbG9nTWFwW2hhc2h2bF0gPT0gZGlhbG9nLmlkKXtcbiAgICAgIGhhc2hRdWV1ZS5zcGxpY2UodW5Vc3VhbElkeCwxKTtcbiAgICAgIGRpYWxvZ01hcFtoYXNodmxdID0gZGlhbG9nTWFwW2hhc2hRdWV1ZVt1blVzdWFsSWR4XV1cbiAgICAgIGRlbGV0ZSBkaWFsb2dNYXBbaGFzaFF1ZXVlW3VuVXN1YWxJZHhdXTtcbiAgICAgIGhhc2hRdWV1ZVt1blVzdWFsSWR4XS0tO1xuICAgIH1lbHNle1xuICAgICAgbGFzdEl0ZW0gPSBoYXNoUXVldWUucG9wKCk7XG4gICAgICBkZWxldGUgZGlhbG9nTWFwW2xhc3RJdGVtXTtcbiAgICB9XG5cbiAgICBpZihoYXNoTGlzdGVuZXIuZ2V0Q3VycmVudEhhc2hQYXRoKCkgPiAwKVxuICAgICAgaGFzaExpc3RlbmVyLmJhY2soKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRGlhbG9nQnlIYXNoKGhhc2h2bCl7XG4gICAgdmFyIGRpYWxvZ0xpc3QgPSBNb2RhbERpYWxvZy5kaWFsb2dMaXN0LFxuICAgICAgICBzcGxpdEluZGV4O1xuXG4gICAgaGFzaFF1ZXVlLmV2ZXJ5KGZ1bmN0aW9uKGl0ZW0saW5kZXgpe1xuICAgICAgaWYoaXRlbSA9PSBoYXNodmwpe1xuICAgICAgICBzcGxpdEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYoc3BsaXRJbmRleCAhPSBudWxsKXtcblxuICAgICAgaGFzaFF1ZXVlLnNsaWNlKHNwbGl0SW5kZXgpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgIGRpYWxvZ0xpc3RbZGlhbG9nTWFwW2l0ZW1dXS5jbG9zZURpYWxvZyh0cnVlKTtcbiAgICAgICAgZGVsZXRlIGRpYWxvZ01hcFtpdGVtXTtcbiAgICAgIH0pO1xuICAgICAgaGFzaFF1ZXVlID0gaGFzaFF1ZXVlLnNsaWNlKDAsc3BsaXRJbmRleCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdEhhc2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BsdWdpbnMvaGlzdG9yeS5qcyIsImltcG9ydCB7YmluZEV2ZW50LHVuQmluZEV2ZW50fSBmcm9tICcuL2RvbS5qcyc7XG5cbmNvbnN0IEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcbmNvbnN0IHF1ZXJ5X2tleSA9ICdfZGdfaGFzaCdcblxuY29uc3QgaGFzaEhpc3RvcnkgPSAob3B0aW9ucyk9PntcblxuICBsZXQgcHJldkxvY2F0aW9uID0gJycsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRDdXJyZW50SGFzaFBhdGggPSAoKSA9PiB7XG4gICAgY29uc3QgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgIHJlZ3ggPW5ldyBSZWdFeHAoYF4ke3F1ZXJ5X2tleX09KC4qKWApO1xuICAgIGxldCBpbmRleCA9IGhyZWYuaW5kZXhPZignIycpLFxuICAgICAgICBxdWVyeUluZGV4LFxuICAgICAgICBzdHIgPSAnJyxcbiAgICAgICAgbWF0Y2hlcztcblxuICAgIGlmKGluZGV4ICE9IC0xKXtcbiAgICAgIHN0ciA9IGhyZWYuc3Vic3RyaW5nKGluZGV4ICsgMSkgfHwgJyc7XG4gICAgICBpZihxdWVyeUluZGV4ID0gc3RyLmluZGV4T2YoJz8nKSA+IDApe1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAscXVlcnlJbmRleCk7XG4gICAgICB9XG4gICAgICBtYXRjaGVzID0gcmVneC5leGVjKHN0cik7XG4gICAgICBpZihtYXRjaGVzKXtcbiAgICAgICAgc3RyID0gbWF0Y2hlc1sxXTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgc3RyID0gJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBjb25zdCBzdG9wTGlzdGVuZXIgPSAoKT0+e1xuICAgIHVuQmluZEV2ZW50KHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgfTtcblxuICBjb25zdCBsaXN0ZW5lciA9IChjYWxsYmFjayk9PntcbiAgICBsaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gKCkgPT5cbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBjYWxsYmFjaylcbiAgfTtcblxuICBjb25zdCBwdXNoSGFzaFBhdGggPSAocGF0aCkgPT5cbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGhcblxuICBjb25zdCByZXBsYWNlSGFzaFBhdGggPSAocGF0aCkgPT5cbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoXG4gICAgKVxuXG4gIGNvbnN0IGF1dG9VcGRhdGVIYXNoID0gKCk9PntcbiAgICBsZXQgaGFzaFBhdGggPSBnZXRDdXJyZW50SGFzaFBhdGgoKSoxO1xuICAgIGlmKCFoYXNoUGF0aClcbiAgICAgIGhhc2hQYXRoID0gMTtcbiAgICBlbHNlXG4gICAgICBoYXNoUGF0aCArKztcbiAgICBwdXNoSGFzaFBhdGgocXVlcnlfa2V5ICsgJz0nICsgaGFzaFBhdGgpO1xuICAgIHJldHVybiBoYXNoUGF0aDtcbiAgfTtcblxuICBjb25zdCBnbyA9IChuKSA9PiB7XG4gICAgaWYgKG4pXG4gICAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbiAgfVxuICBjb25zdCBiYWNrID0gKCk9PntcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVIYXNoQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGdldEN1cnJlbnRIYXNoUGF0aCgpO1xuXG4gICAgaWYgKHByZXZMb2NhdGlvbiA9PT0gY3VycmVudExvY2F0aW9uKVxuICAgICAgcmV0dXJuO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXI9PntcbiAgICAgIGxpc3RlbmVyKGN1cnJlbnRMb2NhdGlvbixwcmV2TG9jYXRpb24pO1xuICAgIH0pO1xuXG4gICAgcHJldkxvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xuICB9XG5cbiAgYmluZEV2ZW50KHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcblxuICByZXR1cm4ge1xuICAgIGdldEN1cnJlbnRIYXNoUGF0aCxcbiAgICBsaXN0ZW5lcixcbiAgICBzdG9wTGlzdGVuZXIsXG4gICAgcHVzaEhhc2hQYXRoLFxuICAgIHJlcGxhY2VIYXNoUGF0aCxcbiAgICBhdXRvVXBkYXRlSGFzaCxcbiAgICBnbyxcbiAgICBiYWNrXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGlzdG9yeTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFzaEhpc3RvcnkuanMiXSwic291cmNlUm9vdCI6IiJ9