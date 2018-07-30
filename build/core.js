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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = ".rc-modal {\n  position: absolute;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  transition: opacity 0.3s ease-out;\n}\n.rc-modal .modal-dialog {\n  border-radius: $fn.rem( 1px );\n  text-align: center;\n  width: 90%;\n  margin: 0 auto;\n  z-index: 9000;\n  position: fixed;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);\n}\n.modal-dialog.dlg-no-title header {\n  height: $fn.rem( 28px );\n}\n.modal-dialog.dlg-no-title .dialog-content {\n  color: #000;\n}\n.modal-dialog.dlg-no-title section {\n  text-align: left;\n}\n.modal-dialog.dlg-has-title header {\n  padding: 0 0 $fn.rem( 10px ) 0;\n  font-size: $fn.rem( 18px );\n}\n.modal-dialog.alert-dialog section {\n  text-align: center;\n}\n.modal-dialog .modal-dialog-main {\n  position: relative;\n  z-index: 9000;\n  background: #fafafa;\n  font-size: $fn.rem( 16px );\n  border-radius: $fn.rem( 3px );\n  padding-top: $fn.rem( 28px );\n}\n.modal-dialog .dialog-title {\n  color: #000;\n}\n.modal-dialog .dialog-content {\n  color: #323232;\n  line-height: 1.6;\n}\n.modal-dialog em {\n  font-style: normal;\n}\n.modal-dialog section {\n  padding: 0px $fn.rem( 26px );\n  margin: 0 auto;\n  max-height: $fn.rem( 188px );\n  overflow: hidden;\n  position: relative;\n}\n.modal-dialog footer {\n  border-top: solid #d5d5d5;\n  border-top-width: $fn.rem( 1px );\n  height: $fn.rem( 45px );\n  line-height: $fn.rem( 45px );\n  margin-top: $fn.rem( 20px );\n  overflow: hidden;\n}\n.modal-dialog footer button {\n  outline: none;\n  border: 0;\n  padding: 0;\n  background: none;\n  font-size: $fn.rem( 16px );\n  height: $fn.rem( 45px );\n}\n.modal-dialog footer button.modal-dialog-onebtn {\n  width: 100%;\n}\n.modal-dialog footer button:after {\n  content: '';\n  border-right: solid #d5d5d5;\n  border-right-width: $fn.rem( 1px );\n  position: absolute;\n  top: 0px;\n  display: block;\n  height: 100%;\n  right: 0px;\n}\n.modal-dialog footer button.last:after {\n  display: none;\n}\n.modal-dialog footer .sure-btn,\n.modal-dialog footer .cancle-btn {\n  width: 50%;\n  float: left;\n  position: relative;\n}\n.modal-dialog footer .cancle-btn {\n  color: #000000;\n}\n.modal-dialog footer .sure-btn {\n  color: #517bd1;\n}\n.modal-dialog.alert-dialog footer {\n  text-align: center;\n}\n.modal-dialog.alert-dialog footer .sure-btn {\n  float: none;\n  margin: 0 auto;\n}\n.dialog-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 8999;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABGdBTUEAALGPC/xhBQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TgK1eW0YAAAALSURBVAjXY2DABwAAHgABboVHMgAAAABJRU5ErkJggg==);\n}\n"

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNTJhMjEwNzBiNmE1NWYxYmY3MSIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGxnc2Nyb2xsLmpzIl0sIm5hbWVzIjpbImJhc2VDc3MiLCJyZXF1aXJlIiwidXRpbHMiLCJzY3JvbGxEbGciLCJfIiwiYXNzaWduIiwid2luSCIsIndpblciLCJub29wIiwiaW5zZXJ0U3R5bGVUb0hlYWQiLCJiYXNlRm9udFNpemUiLCJzdHlsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImZuVGVtcGxhdGUiLCJyZW0iLCJweCIsInJlcGxhY2UiLCJleHByIiwidmFsIiwiaGVhZERvbSIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdExpbmsiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImdldEh0bWxDb250ZW50Iiwib3B0aW9ucyIsInRlbXBsYXRlSHRtbCIsImhlYWRlciIsInB1c2giLCJjbGF6eiIsInRpdGxlIiwicmVwbGFjZVRlbWxhdGUiLCJjcmVhdGVCdXR0b25zIiwiY2FsbCIsImpvaW4iLCJyZXNpemVXaW4iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImJvZHkiLCJjbGllbnRIZWlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJidG5zIiwiYnV0dG9ucyIsInRlbXBsYXRlIiwiYnRuVG1wbHMiLCJzZWxmIiwib25lQnRuQ2x6IiwiY2FuY2VsQ2FsbGJhY2siLCJpZCIsIm5hbWUiLCJjYW5jZWxTdHIiLCJjYWxsYmFjayIsImNscyIsImxlbmd0aCIsIm9rQ2FsbGJhY2siLCJzdXJlU3RyIiwicmV2ZXJzZSIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJjYWxsYmFja3MiLCJpbnNlcnRDb250ZW50IiwiZG9tIiwic2VsZWN0b3IiLCJjb21tZW50IiwiY3JlYXRlQ29tbWVudCIsIm9yaURpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJfY29tbWVudERvbSIsImRpc3BsYXkiLCJfb3JpZ2luRGlzcGxheSIsImNvbnRlbnQiLCJkZWZhdWx0U2V0dGluZ3MiLCJhbmltYXRlZCIsInVzZUJhY2tncm91bmQiLCJjb21wbGV0ZSIsImJlZm9yZUxpc3RlbmVycyIsImFmdGVyTGlzdGVuZXJzIiwiY2xvc2VkTGlzdGVuZXJzIiwiX2NvdW50IiwiTW9kYWxEaWFsb2ciLCJkaWFsb2ciLCJfY2FsbEJhY2tzIiwiT2JqZWN0Iiwia2V5cyIsImxpc3RlbmVyIiwiZGlhbG9nTGlzdCIsImNyZWF0ZSIsIm1vZGFsQ291bnQiLCJkaWFsb2dEb20iLCJkbGdQb3MiLCJkbGdNYWluRG9tIiwib2Zmc2V0SCIsImNyZWF0ZUh0bWxEb20iLCJkb2N1bWVudEVsZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJkbGdTY3JvbGwiLCJpbml0VG91Y2giLCJnZXRQb3MiLCJsZWZ0IiwidG9wIiwiY2xhc3NOYW1lIiwidXNlcmJnciIsImRhdGFzZXQiLCJoZWlnaHQiLCJfZXZlbnRMaXN0ZW5lciIsInByb3h5IiwiX2NsaWNrRXZlbnQiLCJiaW5kRXZlbnQiLCJwcm90b3R5cGUiLCJkbGdIIiwiZGxnVyIsIm9mZnNldFdpZHRoIiwiZGxnUG9zWSIsImRsZ1Bvc1giLCJjbG9zZURpYWxvZyIsImlzTm90SW52b2tlIiwicmVtb3ZlRGlhbG9nIiwidW5CaW5kRXZlbnQiLCJkZXN0cm95U2Nyb2xsIiwiZGxnRG9tIiwiX3JlbW92ZVRyYW5zaXRpb24iLCJvcGFjaXR5IiwicmVtb3ZlQ2hpbGQiLCJyZWZyZXNoIiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImZuIiwid3JhcEFyZ3MiLCJBcnJheSIsInNsaWNlIiwiYXJndW1lbnRzIiwiYXJncyIsImNvbmNhdCIsImFwcGx5IiwiYWxlcnQiLCJjbHoiLCJjcmVhdGVQYXJhbXMiLCJjb25maXJtIiwic3VyZUZuIiwiYnRUZXh0MSIsImJ0VGV4dDIiLCJjYW5jZWxGbiIsImFmdGVyTGlzdGVuZXIiLCJmaWx0ZXIiLCJwcmVMaXN0ZW5lciIsImNsb3NlZExpc3RlbmVyIiwiX3BsdWdpbnMiLCJhZGRQbHVnaW4iLCJkZWZhdWx0Q29uZmlnIiwiaXNDb25maWciLCJjb25maWciLCJjb25zb2xlIiwiaW5mbyIsImkiLCJsZW4iLCJEb21VdGlscyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVIdG1sIiwiZGl2IiwiaHRtbCIsInRlbXAiLCJjaGlsZHJlbiIsInN0ciIsImRhdGEiLCJyZWd4IiwiUmVnRXhwIiwiZXhlYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsImdldFVybFBhcmFtIiwia2V5IiwicmVnIiwiciIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyIiwibWF0Y2giLCJkZWNvZGVVUkkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJjbG9zZXN0IiwiY2xzUmVneCIsInRhZ1JlZ3giLCJwYXJlbnQiLCJ0ZXN0Iiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcmFtIiwicmVzIiwiZ2V0SGVpZ2h0Iiwic2VsIiwiaXNPdXRlciIsInNlY3Rpb25TdHlsZSIsIm1hcmdpbkgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJlYXNlIiwiY2lyY3VsYXIiLCJkbGdDb250ZW50Iiwic2VjdGlvbiIsInNjcm9sbFRhcmdlU3R5bGUiLCJ3cmFwcGVySGVpZ2h0IiwibWF4SGVpZ2h0Iiwic3RhcnRQb3N4Iiwic3RhcnRQb3N5IiwiaXNUb3VjaCIsInN0YXJ0VGltZSIsImRpc3RZIiwiZGlzdFgiLCJlbmRUaW1lIiwieCIsInkiLCJzdGFydFgiLCJzdGFydFkiLCJpc0luVHJhbnNpdGlvbiIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInN0b3BTY3JvbGxNb3ZlIiwic3RhcnRUb3VjaCIsInRvdWNoZUVuZCIsIl90cmFuc2l0aW9uRW5kIiwidG91Y2giLCJ0b3VjaGVzIiwicG9zIiwiX3RyYW5zaXRpb25UaW1lIiwiZ2V0Q29tcHV0ZWRQb3NpdGlvbiIsInRyYW5zbGF0ZSIsIk1hdGgiLCJyb3VuZCIsInBhZ2VYIiwicGFnZVkiLCJEYXRlIiwibm93IiwicG9zWCIsInBvc1kiLCJ0aW1lc3RhbXAiLCJkZWx0YVkiLCJkZWx0YVgiLCJuZXdZIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJhYnMiLCJkdXJhdGlvbiIsInRpbWUiLCJtb21lbnR1bVkiLCJyZXNldFBvc2l0aW9uIiwic2Nyb2xsVG8iLCJtb21lbnR1bSIsImRlc3RpbmF0aW9uIiwicG9zeSIsIndlYmtpdFRyYW5zZm9ybSIsImN1cnJlbnQiLCJzdGFydCIsImRpc3RhbmNlIiwic3BlZWQiLCJkZWNlbGVyYXRpb24iLCJtYXRyaXgiLCJzcGxpdCIsInRyYW5zaXRpb25EdXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLEtBQUlBLFVBQVUsbUJBQUFDLENBQVEsQ0FBUixDQUFkOztBQUVBLEtBQUlDLFFBQVEsbUJBQUFELENBQVEsQ0FBUixDQUFaO0FBQ0EsS0FBSUUsWUFBWSxtQkFBQUYsQ0FBUSxDQUFSLENBQWhCO0FBQ0EsS0FBSUcsSUFBSTtBQUNOQyxXQUFRSCxNQUFNRztBQURSLEVBQVI7QUFBQSxLQUVHQyxJQUZIO0FBQUEsS0FFU0MsSUFGVDs7QUFJQSxVQUFTQyxJQUFULEdBQWUsQ0FBRTs7QUFFakI7QUFDQSxVQUFTQyxpQkFBVCxDQUEyQkMsWUFBM0IsRUFBd0M7QUFDdEMsT0FBSUMsUUFBUUMsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFaOztBQUVBRixTQUFNRyxTQUFOLEdBQWtCWixNQUFNYSxVQUFOLENBQ2hCZixPQURnQixFQUVoQjtBQUNFZ0IsVUFBSyxhQUFTQyxFQUFULEVBQVk7QUFDZixjQUFPQSxHQUFHQyxPQUFILENBQVcsU0FBWCxFQUFxQixVQUFTQyxJQUFULEVBQWVDLEdBQWYsRUFBbUI7QUFDN0MsZ0JBQVFBLE1BQUssQ0FBTCxHQUFTVixZQUFWLEdBQTBCLEtBQWpDO0FBQ0QsUUFGTSxDQUFQO0FBR0Q7QUFMSCxJQUZnQixDQUFsQjtBQVNBLE9BQUlXLFVBQVVULFNBQVNVLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZDtBQUNBLE9BQUlDLFlBQVlGLFFBQVFDLGFBQVIsQ0FBc0IsTUFBdEIsQ0FBaEI7O0FBRUEsT0FBRyxDQUFDQyxTQUFKLEVBQ0VGLFFBQVFHLFdBQVIsQ0FBb0JiLEtBQXBCLEVBREYsS0FHRVUsUUFBUUksWUFBUixDQUFxQmQsS0FBckIsRUFBNEJZLFNBQTVCO0FBRUg7O0FBRUQ7OztBQUdFLFVBQVNHLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWdDO0FBQzlCLE9BQUlDLGVBQWUsRUFBbkI7QUFBQSxPQUNJQyxTQUFTRixRQUFRRSxNQURyQjs7QUFHQUQsZ0JBQWFFLElBQWIsQ0FBa0IsbUZBQW1GSCxRQUFRSSxLQUEzRixHQUFtRyxtQ0FBckg7QUFDQSxPQUFHSixRQUFRSyxLQUFSLElBQWlCLElBQWpCLElBQXlCTCxRQUFRSyxLQUFSLElBQWlCLEVBQTdDLEVBQWdEO0FBQzlDSixrQkFBYUUsSUFBYixDQUFrQixhQUFhNUIsTUFBTStCLGNBQU4sQ0FBcUJKLE1BQXJCLEVBQTRCRixPQUE1QixDQUFiLEdBQW9ELFdBQXRFO0FBQ0Q7QUFDREMsZ0JBQWFFLElBQWIsQ0FBa0IsK0RBQWxCO0FBQ0FGLGdCQUFhRSxJQUFiLENBQWtCSSxjQUFjQyxJQUFkLENBQW1CLElBQW5CLEVBQXdCUixPQUF4QixDQUFsQjtBQUNBQyxnQkFBYUUsSUFBYixDQUFrQiw2QkFBbEI7O0FBRUEsVUFBT0YsYUFBYVEsSUFBYixDQUFrQixFQUFsQixDQUFQO0FBQ0Q7O0FBRUQsVUFBU0MsU0FBVCxHQUFvQjtBQUNsQi9CLFVBQU9nQyxPQUFPQyxXQUFQLEdBQXFCRCxPQUFPQyxXQUE1QixHQUEwQzNCLFNBQVM0QixJQUFULENBQWNDLFlBQS9EO0FBQ0FsQyxVQUFPK0IsT0FBT0ksVUFBUCxHQUFvQkosT0FBT0ksVUFBM0IsR0FBd0M5QixTQUFTNEIsSUFBVCxDQUFjRyxXQUE3RDtBQUNEO0FBQ0Q7QUFDRjtBQUNFO0FBQ0E7OztBQUdBLFVBQVNULGFBQVQsQ0FBdUJQLE9BQXZCLEVBQStCO0FBQzdCLE9BQUlpQixPQUFPakIsUUFBUWtCLE9BQVIsSUFBbUIsRUFBOUI7QUFBQSxPQUNJQyxXQUFXLHFFQURmO0FBQUEsT0FFSUMsV0FBVyxFQUZmO0FBQUEsT0FHSUMsT0FBTyxJQUhYO0FBQUEsT0FJSUMsWUFBVSxFQUpkOztBQU1BLE9BQUd0QixRQUFRdUIsY0FBWCxFQUEwQjtBQUN4Qk4sVUFBS2QsSUFBTCxDQUFVO0FBQ1JxQixXQUFJLFFBREk7QUFFUkMsYUFBTXpCLFFBQVEwQixTQUZOO0FBR1JDLGlCQUFVM0IsUUFBUXVCLGNBSFY7QUFJUkssWUFBSztBQUpHLE1BQVY7QUFNRDs7QUFFRCxPQUFHWCxLQUFLWSxNQUFMLElBQWMsQ0FBakIsRUFDRVAsWUFBWSxzQkFBWjs7QUFFRixPQUFHdEIsUUFBUThCLFVBQVgsRUFBc0I7QUFDcEJiLFVBQUtkLElBQUwsQ0FBVTtBQUNScUIsV0FBSSxJQURJO0FBRVJDLGFBQU16QixRQUFRK0IsT0FGTjtBQUdSSixpQkFBVTNCLFFBQVE4QixVQUhWO0FBSVJGLFlBQUssYUFBYU47QUFKVixNQUFWO0FBTUQ7O0FBRUQsT0FBR3RCLFFBQVFnQyxPQUFYLEVBQ0VmLE9BQU9BLEtBQUtlLE9BQUwsRUFBUDs7QUFFRmYsUUFBS2dCLE9BQUwsQ0FBYSxVQUFTQyxJQUFULEVBQWNDLEtBQWQsRUFBb0I7QUFDL0IsU0FBSWxCLEtBQUtZLE1BQUwsR0FBYyxDQUFmLElBQXFCTSxLQUF4QixFQUNFRCxLQUFLTixHQUFMLElBQVksT0FBWjtBQUNGUixpQkFBWTdDLE1BQU0rQixjQUFOLENBQXFCYSxRQUFyQixFQUE4QmUsSUFBOUIsQ0FBWjtBQUNBYixVQUFLZSxTQUFMLENBQWVGLEtBQUtWLEVBQXBCLElBQTBCVSxLQUFLUCxRQUEvQjtBQUNELElBTEQ7O0FBT0EsVUFBT1AsUUFBUDtBQUNEOztBQUVELFVBQVNpQixhQUFULENBQXVCQyxHQUF2QixFQUEyQnRDLE9BQTNCLEVBQW1DO0FBQy9CLE9BQUdBLFFBQVF1QyxRQUFYLEVBQW9CO0FBQ2xCLFNBQUlDLFVBQVV2RCxTQUFTd0QsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBZDtBQUFBLFNBQ0lGLFdBQVd2QyxRQUFRdUMsUUFEdkI7QUFBQSxTQUVJRyxhQUFhQyxpQkFBaUJKLFFBQWpCLEVBQTJCSyxnQkFBM0IsQ0FBNEMsU0FBNUMsQ0FGakI7O0FBSUEsU0FBR0wsU0FBU00sVUFBWixFQUF1QjtBQUNyQk4sZ0JBQVNNLFVBQVQsQ0FBb0JDLFlBQXBCLENBQWlDTixPQUFqQyxFQUF5Q0QsUUFBekM7QUFDQUQsV0FBSVMsV0FBSixHQUFrQlAsT0FBbEI7QUFDQSxXQUFHRSxjQUFjLE1BQWpCLEVBQXdCO0FBQ3RCSCxrQkFBU3ZELEtBQVQsQ0FBZWdFLE9BQWYsR0FBeUIsT0FBekI7QUFDRDtBQUNEVixXQUFJVyxjQUFKLEdBQXFCUCxVQUFyQjtBQUNEOztBQUVESixTQUFJM0MsYUFBSixDQUFrQixpQkFBbEIsRUFBcUNFLFdBQXJDLENBQWlEMEMsUUFBakQ7QUFDRCxJQWZELE1BaUJFRCxJQUFJM0MsYUFBSixDQUFrQixpQkFBbEIsRUFBcUNSLFNBQXJDLEdBQWlEYSxRQUFRa0QsT0FBUixDQUFnQjNELE9BQWhCLENBQXdCLGdCQUF4QixFQUEwQyxPQUExQyxDQUFqRDtBQUNIO0FBQ0w7Ozs7Ozs7Ozs7OztBQVlFLEtBQUk0RCxrQkFBa0I7QUFDaEIvQyxVQUFPLGNBRFM7QUFFaEJzQixjQUFXLElBRks7QUFHaEJLLFlBQVMsSUFITztBQUloQjFCLFVBQU8sSUFKUztBQUtoQkgsV0FBUSwyQ0FMUTtBQU1oQmtELGFBQVUsS0FOTTtBQU9oQmxDLFlBQVMsSUFQTztBQVFoQm1DLGtCQUFlLFFBUkM7QUFTaEJDLGFBQVU7QUFUTSxFQUF0QjtBQUFBLEtBV0lDLGtCQUFrQixFQVh0QjtBQUFBLEtBWUlDLGlCQUFpQixFQVpyQjtBQUFBLEtBYUlDLGtCQUFrQixFQWJ0QjtBQUFBLEtBY0lDLFNBQVMsQ0FkYjs7QUFnQkEsS0FBSUMsY0FBYyxTQUFkQSxXQUFjLENBQVMzRCxPQUFULEVBQWlCO0FBQ2pDLE9BQUk0RCxNQUFKLEVBQ0lwQyxFQURKOztBQUdBeEIsYUFBVXZCLEVBQUVDLE1BQUYsQ0FBUyxFQUFULEVBQVl5RSxlQUFaLEVBQTRCbkQsT0FBNUIsQ0FBVjs7QUFFQUEsV0FBUTZELFVBQVIsR0FBcUI3RCxRQUFRNkQsVUFBUixJQUFzQixFQUEzQztBQUNBckMsUUFBS3hCLFFBQVF3QixFQUFSLEdBQWF4QixRQUFRd0IsRUFBUixJQUFja0MsTUFBaEM7O0FBRUFJLFVBQU9DLElBQVAsQ0FBWS9ELE9BQVosRUFBcUJpQyxPQUFyQixDQUE2QixVQUFTUixJQUFULEVBQWM7QUFDekMsU0FBSSxPQUFPekIsUUFBUXlCLElBQVIsQ0FBUCxLQUF5QixVQUE3QixFQUF5QztBQUN2Q3pCLGVBQVE2RCxVQUFSLENBQW1CcEMsSUFBbkIsSUFBMkJ6QixRQUFReUIsSUFBUixDQUEzQjtBQUNEO0FBQ0YsSUFKRDs7QUFNQThCLG1CQUFnQnRCLE9BQWhCLENBQXdCLFVBQVMrQixRQUFULEVBQWtCO0FBQ3hDQSxjQUFTaEUsT0FBVDtBQUNELElBRkQ7O0FBSUEyRCxlQUFZTSxVQUFaLENBQXVCekMsRUFBdkIsSUFBNkJvQyxTQUFTLElBQUlELFlBQVlPLE1BQWhCLENBQXVCbEUsT0FBdkIsQ0FBdEM7O0FBRUEyRCxlQUFZUSxVQUFaOztBQUVBWCxrQkFBZXZCLE9BQWYsQ0FBdUIsVUFBUytCLFFBQVQsRUFBa0I7QUFDdkNBLGNBQVNKLE1BQVQ7QUFDRCxJQUZEOztBQUlBRjs7QUFFQSxVQUFPRSxNQUFQO0FBQ0QsRUE5QkQ7O0FBZ0NBRCxhQUFZTyxNQUFaLEdBQXFCLFVBQVNsRSxPQUFULEVBQWlCO0FBQ3BDLE9BQUlvRSxTQUFKLEVBQ0lDLE1BREosRUFFSUMsVUFGSixFQUdJQyxPQUhKOztBQUtBLFFBQUtuQyxTQUFMLEdBQWlCcEMsUUFBUTZELFVBQXpCO0FBQ0EsUUFBS3JDLEVBQUwsR0FBVXhCLFFBQVF3QixFQUFsQjs7QUFFQTRDLGVBQVk3RixNQUFNaUcsYUFBTixDQUFvQnpFLGVBQWVTLElBQWYsQ0FBb0IsSUFBcEIsRUFBeUJSLE9BQXpCLENBQXBCLENBQVo7O0FBRUFxQyxpQkFBYytCLFNBQWQsRUFBd0JwRSxPQUF4QjtBQUNBZixZQUFTNEIsSUFBVCxDQUFjaEIsV0FBZCxDQUEwQnVFLFNBQTFCOztBQUVBRyxhQUFVdEYsU0FBU3dGLGVBQVQsQ0FBeUJDLFlBQW5DOztBQUVBLFFBQUtDLFNBQUwsR0FBaUJuRyxVQUFVb0csU0FBVixDQUFvQlIsU0FBcEIsQ0FBakI7O0FBRUFFLGdCQUFhRixVQUFVekUsYUFBVixDQUF3QixlQUF4QixDQUFiO0FBQ0EwRSxZQUFTLEtBQUtRLE1BQUwsQ0FBWVAsVUFBWixDQUFUOztBQUVBN0YsS0FBRUMsTUFBRixDQUFTNEYsV0FBV3RGLEtBQXBCLEVBQTBCO0FBQ3hCZ0UsY0FBUyxPQURlO0FBRXhCOEIsV0FBTVQsT0FBT1MsSUFBUCxHQUFjLElBRkk7QUFHeEJDLFVBQUtWLE9BQU9VLEdBQVAsR0FBYTtBQUhNLElBQTFCOztBQU1BLE9BQUcvRSxRQUFRb0QsUUFBWCxFQUNFZ0IsVUFBVXpFLGFBQVYsQ0FBd0Isb0JBQXhCLEVBQThDcUYsU0FBOUMsSUFBMkQsZ0JBQTNEOztBQUVGLE9BQUdoRixRQUFRcUQsYUFBWCxFQUF5QjtBQUN2QixTQUFJNEIsVUFBVWpGLFFBQVFxRCxhQUF0QjtBQUNBLFNBQUcsQ0FBQ3JELFFBQVE2RCxVQUFSLENBQW1Cb0IsT0FBbkIsQ0FBSixFQUFnQztBQUM5QmpGLGVBQVE2RCxVQUFSLENBQW1Cb0IsT0FBbkIsSUFBOEIsWUFBVSxDQUFFLENBQTFDO0FBQ0Q7QUFDRGIsZUFBVXpFLGFBQVYsQ0FBd0IsY0FBeEIsRUFBd0N1RixPQUF4QyxDQUFnRDFELEVBQWhELEdBQXFEeEIsUUFBUXFELGFBQTdEO0FBQ0Q7O0FBRURlLGFBQVV6RSxhQUFWLENBQXdCLGNBQXhCLEVBQXdDWCxLQUF4QyxDQUE4Q21HLE1BQTlDLEdBQXVEWixVQUFVLElBQWpFOztBQUVBLFFBQUthLGNBQUwsR0FBc0IsS0FBS0MsS0FBTCxDQUFXLEtBQUtDLFdBQWhCLEVBQTRCbEIsU0FBNUIsRUFBc0NwRSxPQUF0QyxDQUF0QjtBQUNBLFFBQUtvRSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFFBQUtwRSxPQUFMLEdBQWVBLE9BQWY7QUFDQXpCLFNBQU1nSCxTQUFOLENBQWdCbkIsU0FBaEIsRUFBMEIsT0FBMUIsRUFBa0MsS0FBS2dCLGNBQXZDOztBQUVBLFVBQU8sSUFBUDtBQUNELEVBOUNEO0FBK0NBM0csR0FBRUMsTUFBRixDQUFTaUYsWUFBWU8sTUFBWixDQUFtQnNCLFNBQTVCLEVBQXNDO0FBQ3BDcEQsY0FBVyxJQUR5QjtBQUVwQ3lDLFdBQVEsZ0JBQVNULFNBQVQsRUFBbUI7QUFDekJBLGlCQUFZQSxhQUFhLEtBQUtBLFNBQTlCO0FBQ0EsU0FBRyxDQUFDQSxTQUFKLEVBQWM7QUFDWixjQUFPLEVBQUNVLE1BQUssQ0FBTixFQUFRQyxLQUFJLENBQVosRUFBUDtBQUNEO0FBQ0RyRTtBQUNBLFNBQUkrRSxPQUFPckIsVUFBVU0sWUFBckI7QUFDQSxTQUFJZ0IsT0FBT3RCLFVBQVV1QixXQUFyQjtBQUNBLFNBQUlDLFVBQVdqSCxPQUFPOEcsSUFBUCxJQUFlLENBQWhCLEdBQXNCLENBQUM5RyxPQUFPOEcsSUFBUixJQUFjLENBQXBDLEdBQXdDOUcsT0FBSyxHQUEzRDtBQUNBLFNBQUlrSCxVQUFXakgsT0FBTzhHLElBQVAsSUFBZSxDQUFoQixHQUFzQixDQUFDOUcsT0FBTzhHLElBQVIsSUFBYyxDQUFwQyxHQUF3QzlHLE9BQUssR0FBM0Q7O0FBRUEsWUFBTyxFQUFDa0csTUFBTWUsT0FBUCxFQUFnQmQsS0FBS2EsT0FBckIsRUFBUDtBQUNELElBZG1DO0FBZXBDRSxnQkFBWSxxQkFBU0MsV0FBVCxFQUFxQjtBQUMvQixTQUFJM0IsWUFBWSxLQUFLQSxTQUFyQjtBQUFBLFNBQ0lwRSxVQUFVLEtBQUtBLE9BRG5CO0FBQUEsU0FFSXVDLFFBRko7QUFBQSxTQUdJUSxXQUhKO0FBQUEsU0FJSTFCLE9BQU8sSUFKWDs7QUFNQSxTQUFHLENBQUMrQyxTQUFKLEVBQ0UsT0FBTyxDQUFQOztBQUVGLFVBQUs0QixZQUFMLENBQWtCNUIsU0FBbEIsRUFBNkJwRSxPQUE3Qjs7QUFFQSxTQUFHQSxRQUFRdUMsUUFBUixJQUFvQjZCLFVBQVVyQixXQUFqQyxFQUE2QztBQUMzQ1Isa0JBQVd2QyxRQUFRdUMsUUFBbkI7QUFDQVEscUJBQWNxQixVQUFVckIsV0FBeEI7O0FBRUFSLGdCQUFTdkQsS0FBVCxDQUFlZ0UsT0FBZixHQUF5Qm9CLFVBQVVuQixjQUFuQztBQUNBRixtQkFBWUYsVUFBWixDQUF1QkMsWUFBdkIsQ0FBb0NQLFFBQXBDLEVBQTZDUSxXQUE3Qzs7QUFFQXFCLGlCQUFVckIsV0FBVixHQUF3QixJQUF4QjtBQUNBcUIsaUJBQVVuQixjQUFWLEdBQTJCLElBQTNCO0FBQ0Q7QUFDRDFFLFdBQU0wSCxXQUFOLENBQWtCN0IsU0FBbEIsRUFBNEIsT0FBNUIsRUFBb0MsS0FBS2dCLGNBQXpDO0FBQ0E7QUFDQSxVQUFLVCxTQUFMLENBQWV1QixhQUFmLElBQWdDLEtBQUt2QixTQUFMLENBQWV1QixhQUFmLEVBQWhDOztBQUVBLFNBQUcsQ0FBQ0gsV0FBSixFQUFnQjtBQUNkdEMsdUJBQWdCeEIsT0FBaEIsQ0FBd0IsVUFBUytCLFFBQVQsRUFBa0I7QUFDeENBLGtCQUFTM0MsSUFBVDtBQUNELFFBRkQ7QUFHRCxNQUpELE1BSUs7QUFDSCxXQUFHckIsUUFBUXVCLGNBQVgsRUFDRXZCLFFBQVF1QixjQUFSO0FBQ0g7O0FBRUQsVUFBSzZELGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxVQUFLaEIsU0FBTCxHQUFpQkEsWUFBWSxJQUE3Qjs7QUFFQXBFLGFBQVFzRCxRQUFSLElBQW9CdEQsUUFBUXNELFFBQVIsRUFBcEI7O0FBRUEsWUFBT0ssWUFBWU0sVUFBWixDQUF1QixLQUFLekMsRUFBNUIsQ0FBUDs7QUFFQW1DLGlCQUFZUSxVQUFaO0FBQ0QsSUExRG1DO0FBMkRwQzZCLGlCQUFjLHNCQUFTRyxNQUFULEVBQWdCO0FBQzVCNUgsV0FBTWdILFNBQU4sQ0FBZ0JZLE1BQWhCLEVBQXdCLGVBQXhCLEVBQXlDQyxpQkFBekM7QUFDQTdILFdBQU1nSCxTQUFOLENBQWdCWSxNQUFoQixFQUF1QixxQkFBdkIsRUFBOENDLGlCQUE5Qzs7QUFFQUQsWUFBT25ILEtBQVAsQ0FBYXFILE9BQWIsR0FBdUIsQ0FBdkI7O0FBRUEsY0FBU0QsaUJBQVQsR0FBNEI7QUFDMUI3SCxhQUFNMEgsV0FBTixDQUFrQkUsTUFBbEIsRUFBeUIsZUFBekIsRUFBeUNDLGlCQUF6QztBQUNBN0gsYUFBTTBILFdBQU4sQ0FBa0JFLE1BQWxCLEVBQXlCLHFCQUF6QixFQUErQ0MsaUJBQS9DO0FBQ0FELGNBQU90RCxVQUFQLENBQWtCeUQsV0FBbEIsQ0FBOEJILE1BQTlCO0FBQ0Q7QUFDRixJQXRFbUM7QUF1RXBDSSxZQUFTLG1CQUFVO0FBQ2pCLFNBQUluQyxZQUFZLEtBQUtBLFNBQUwsQ0FBZXpFLGFBQWYsQ0FBNkIsZUFBN0IsQ0FBaEI7QUFBQSxTQUNJMEUsU0FBUyxLQUFLUSxNQUFMLENBQVlULFNBQVosQ0FEYjs7QUFHQTNGLE9BQUVDLE1BQUYsQ0FBUzBGLFVBQVVwRixLQUFuQixFQUF5QjtBQUN2QmdFLGdCQUFTLE9BRGM7QUFFdkI4QixhQUFNVCxPQUFPUyxJQUFQLEdBQWMsSUFGRztBQUd2QkMsWUFBS1YsT0FBT1UsR0FBUCxHQUFhO0FBSEssTUFBekI7QUFLQSxVQUFLSixTQUFMLENBQWU0QixPQUFmO0FBQ0QsSUFqRm1DO0FBa0ZwQ2pCLGdCQUFhLHFCQUFTa0IsQ0FBVCxFQUFXcEMsU0FBWCxFQUFxQnBFLE9BQXJCLEVBQTZCO0FBQ3hDLFNBQUl5RyxTQUFTRCxFQUFFQyxNQUFmO0FBQUEsU0FDSWpGLEtBQUtpRixPQUFPQyxZQUFQLENBQW9CLFNBQXBCLENBRFQ7QUFBQSxTQUVJckYsT0FBTyxJQUZYOztBQUlBLFNBQUcsT0FBTyxLQUFLZSxTQUFMLENBQWVaLEVBQWYsQ0FBUCxJQUE2QixVQUE3QixJQUEyQyxDQUFDLEtBQUtZLFNBQUwsQ0FBZVosRUFBZixFQUFtQmhCLElBQW5CLENBQXdCLElBQXhCLEVBQTZCZ0csQ0FBN0IsQ0FBL0MsRUFBK0U7QUFDN0U7QUFDRW5GLFlBQUt5RSxXQUFMO0FBQ0Y7QUFDRDtBQUNGLElBNUZtQztBQTZGcENULFVBQU8sZUFBU3NCLEVBQVQsRUFBWTtBQUNqQixTQUFJdEYsT0FBTyxJQUFYO0FBQUEsU0FDSXVGLFdBQVdDLE1BQU1yQixTQUFOLENBQWdCc0IsS0FBaEIsQ0FBc0J0RyxJQUF0QixDQUEyQnVHLFNBQTNCLEVBQXFDLENBQXJDLENBRGY7O0FBR0EsWUFBTyxZQUFVO0FBQ2YsV0FBSUMsT0FBT0gsTUFBTXJCLFNBQU4sQ0FBZ0JzQixLQUFoQixDQUFzQnRHLElBQXRCLENBQTJCdUcsU0FBM0IsQ0FBWDs7QUFFQSxXQUFHSCxTQUFTL0UsTUFBVCxHQUFrQixDQUFyQixFQUNFbUYsT0FBT0EsS0FBS0MsTUFBTCxDQUFZTCxRQUFaLENBQVA7O0FBRUZELFVBQUdPLEtBQUgsQ0FBUzdGLElBQVQsRUFBYzJGLElBQWQ7QUFDRCxNQVBEO0FBUUQ7QUF6R21DLEVBQXRDOztBQTRHQXJELGFBQVl3RCxLQUFaLEdBQW9CLFVBQVNqRSxPQUFULEVBQWlCN0MsS0FBakIsRUFBdUJzQixRQUF2QixFQUFnQ1csR0FBaEMsRUFBb0NWLEdBQXBDLEVBQXdDO0FBQzFELE9BQUl3RixNQUFNbEUsUUFBUTlDLEtBQVIsR0FBZ0I4QyxRQUFROUMsS0FBeEIsR0FBaUN3QixNQUFNQSxHQUFOLEdBQVksRUFBdkQ7O0FBRUF3RixVQUFPLGVBQVA7O0FBRUEsT0FBRyxRQUFPbEUsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUF0QixFQUErQjtBQUM3QkEsZUFBVTNFLE1BQU04SSxZQUFOLENBQW1CO0FBQ2pCaEgsY0FBT0EsS0FEVTtBQUVqQjZDLGdCQUFTQSxPQUZRO0FBR2pCcEIsbUJBQVdILFFBSE07QUFJakJZLGlCQUFVRDtBQUpPLE1BQW5CLENBQVY7QUFNRDs7QUFFRFksV0FBUXBCLFVBQVIsR0FBcUJvQixRQUFRcEIsVUFBUixJQUFzQmpELElBQTNDOztBQUVBLE9BQUcsQ0FBQ3FFLFFBQVE3QyxLQUFaLEVBQ0UrRyxPQUFPLGVBQVAsQ0FERixLQUdFQSxPQUFPLGdCQUFQOztBQUVGbEUsV0FBUTlDLEtBQVIsR0FBZ0JnSCxHQUFoQjtBQUNBLFVBQU96RCxZQUFZVCxPQUFaLENBQVA7QUFDRCxFQXZCRDs7QUF5QkFTLGFBQVkyRCxPQUFaLEdBQXNCLFVBQVNwRSxPQUFULEVBQWlCcUUsTUFBakIsRUFBd0JsSCxLQUF4QixFQUE4Qm1ILE9BQTlCLEVBQXNDQyxPQUF0QyxFQUE4Q0MsUUFBOUMsRUFBdUQ5RixHQUF2RCxFQUEyRDtBQUMvRSxPQUFJd0YsTUFBTWxFLFFBQVE5QyxLQUFSLEdBQWdCOEMsUUFBUTlDLEtBQXhCLEdBQWlDd0IsTUFBTUEsR0FBTixHQUFZLEVBQXZEOztBQUVBd0YsVUFBTyxpQkFBUDs7QUFFQSxPQUFHLFFBQU9sRSxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQXRCLEVBQStCO0FBQzdCQSxlQUFVM0UsTUFBTThJLFlBQU4sQ0FBbUI7QUFDakJoSCxjQUFPQSxLQURVO0FBRWpCNkMsZ0JBQVNBLE9BRlE7QUFHakJwQixtQkFBV3lGLE1BSE07QUFJakJoRyx1QkFBZW1HLFFBSkU7QUFLakIzRixnQkFBUzBGLE9BTFE7QUFNakIvRixrQkFBVThGO0FBTk8sTUFBbkIsQ0FBVjtBQVFEOztBQUVELE9BQUcsQ0FBQ3RFLFFBQVE3QyxLQUFaLEVBQ0UrRyxPQUFPLGVBQVAsQ0FERixLQUdFQSxPQUFPLGdCQUFQOztBQUVGbEUsV0FBUXBCLFVBQVIsR0FBcUJvQixRQUFRcEIsVUFBUixJQUFzQmpELElBQTNDO0FBQ0FxRSxXQUFRM0IsY0FBUixHQUF5QjJCLFFBQVEzQixjQUFSLElBQTBCMUMsSUFBbkQ7QUFDQXFFLFdBQVE5QyxLQUFSLEdBQWdCZ0gsR0FBaEI7QUFDQSxVQUFPekQsWUFBWVQsT0FBWixDQUFQO0FBQ0QsRUF6QkQ7O0FBMkJBUyxhQUFZZ0UsYUFBWixHQUE0QixVQUFTM0QsUUFBVCxFQUFrQjtBQUM1Q1Isa0JBQWVyRCxJQUFmLENBQW9CNkQsUUFBcEI7O0FBRUEsVUFBTyxZQUFVO0FBQ2ZSLHNCQUFpQkEsZUFBZW9FLE1BQWYsQ0FBc0IsVUFBUzFGLElBQVQsRUFBYztBQUNuRCxjQUFPQSxRQUFROEIsUUFBZjtBQUNELE1BRmdCLENBQWpCO0FBR0QsSUFKRDtBQUtELEVBUkQ7O0FBVUFMLGFBQVlrRSxXQUFaLEdBQTBCLFVBQVM3RCxRQUFULEVBQWtCO0FBQzFDVCxtQkFBZ0JwRCxJQUFoQixDQUFxQjZELFFBQXJCOztBQUVBLFVBQU8sWUFBVTtBQUNmVCx1QkFBa0JBLGdCQUFnQnFFLE1BQWhCLENBQXVCLFVBQVMxRixJQUFULEVBQWM7QUFDckQsY0FBT0EsUUFBUThCLFFBQWY7QUFDRCxNQUZpQixDQUFsQjtBQUdELElBSkQ7QUFLRCxFQVJEOztBQVVBTCxhQUFZbUUsY0FBWixHQUE2QixVQUFTOUQsUUFBVCxFQUFrQjtBQUM3Q1AsbUJBQWdCdEQsSUFBaEIsQ0FBcUI2RCxRQUFyQjs7QUFFQSxVQUFPLFlBQVU7QUFDZlAsdUJBQWtCQSxnQkFBZ0JtRSxNQUFoQixDQUF1QixVQUFTMUYsSUFBVCxFQUFjO0FBQ3JELGNBQU9BLFFBQVE4QixRQUFmO0FBQ0QsTUFGaUIsQ0FBbEI7QUFHRCxJQUpEO0FBS0QsRUFSRDs7QUFVQSxLQUFJK0QsV0FBVyxFQUFmOztBQUVBcEUsYUFBWXFFLFNBQVosR0FBd0IsVUFBU3JCLEVBQVQsRUFBWTtBQUNsQ29CLFlBQVM1SCxJQUFULENBQWN3RyxFQUFkO0FBQ0QsRUFGRDs7QUFJQWhELGFBQVlzRSxhQUFaLEdBQTRCLEVBQTVCO0FBQ0EsS0FBSUMsV0FBVyxLQUFmOztBQUVBdkUsYUFBWXdFLE1BQVosR0FBcUIsVUFBU0EsTUFBVCxFQUFnQjtBQUNuQyxPQUFJbkksVUFBVXpCLE1BQU1HLE1BQU4sQ0FBYSxFQUFiLEVBQWdCaUYsWUFBWXNFLGFBQTVCLEVBQTBDRSxNQUExQyxDQUFkOztBQUVBeEUsZUFBWTNELE9BQVosR0FBc0JBLE9BQXRCO0FBQ0EsT0FBR2tJLFFBQUgsRUFBWTtBQUNWRSxhQUFRQyxJQUFSLENBQWEsaUNBQWI7QUFDQTtBQUNEOztBQUVELFFBQUksSUFBSUMsSUFBRSxDQUFOLEVBQVNDLE1BQUlSLFNBQVNsRyxNQUExQixFQUFrQ3lHLElBQUlDLEdBQXRDLEVBQTJDRCxHQUEzQyxFQUErQztBQUM3Q1AsY0FBU08sQ0FBVCxFQUFZM0UsV0FBWixFQUF5QjNELE9BQXpCO0FBQ0Q7O0FBRURsQixxQkFBa0JrQixRQUFRakIsWUFBUixJQUF3QixFQUExQzs7QUFFQW1KLGNBQVcsSUFBWDtBQUNELEVBaEJEOztBQWtCQTNKLE9BQU1nSCxTQUFOLENBQWdCNUUsTUFBaEIsRUFBd0IsbUJBQXhCLEVBQTRDLFlBQVU7QUFDcERtRCxVQUFPQyxJQUFQLENBQVlKLFlBQVlNLFVBQXhCLEVBQW9DaEMsT0FBcEMsQ0FBNEMsa0JBQVE7QUFDbEQwQixpQkFBWU0sVUFBWixDQUF1QkwsTUFBdkIsRUFBK0IyQyxPQUEvQjtBQUNELElBRkQ7QUFHRCxFQUpEOztBQU1BNUMsYUFBWU0sVUFBWixHQUF5QixFQUF6QjtBQUNBTixhQUFZUSxVQUFaLEdBQXlCLENBQXpCOztBQUVGUixhQUFZNkUsUUFBWixHQUF1QmpLLEtBQXZCOztBQUVBa0ssUUFBT0MsT0FBUCxHQUFpQi9FLFdBQWpCLEM7Ozs7OztBQ3pjQSw4QkFBNkIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLFdBQVcsc0NBQXNDLEdBQUcsMkJBQTJCLGtDQUFrQyx1QkFBdUIsZUFBZSxtQkFBbUIsa0JBQWtCLG9CQUFvQixtREFBbUQsR0FBRyxxQ0FBcUMsNEJBQTRCLEdBQUcsOENBQThDLGdCQUFnQixHQUFHLHNDQUFzQyxxQkFBcUIsR0FBRyxzQ0FBc0MsbUNBQW1DLCtCQUErQixHQUFHLHNDQUFzQyx1QkFBdUIsR0FBRyxvQ0FBb0MsdUJBQXVCLGtCQUFrQix3QkFBd0IsK0JBQStCLGtDQUFrQyxpQ0FBaUMsR0FBRywrQkFBK0IsZ0JBQWdCLEdBQUcsaUNBQWlDLG1CQUFtQixxQkFBcUIsR0FBRyxvQkFBb0IsdUJBQXVCLEdBQUcseUJBQXlCLGlDQUFpQyxtQkFBbUIsaUNBQWlDLHFCQUFxQix1QkFBdUIsR0FBRyx3QkFBd0IsOEJBQThCLHFDQUFxQyw0QkFBNEIsaUNBQWlDLGdDQUFnQyxxQkFBcUIsR0FBRywrQkFBK0Isa0JBQWtCLGNBQWMsZUFBZSxxQkFBcUIsK0JBQStCLDRCQUE0QixHQUFHLG1EQUFtRCxnQkFBZ0IsR0FBRyxxQ0FBcUMsZ0JBQWdCLGdDQUFnQyx1Q0FBdUMsdUJBQXVCLGFBQWEsbUJBQW1CLGlCQUFpQixlQUFlLEdBQUcsMENBQTBDLGtCQUFrQixHQUFHLHFFQUFxRSxlQUFlLGdCQUFnQix1QkFBdUIsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLHFDQUFxQyx1QkFBdUIsR0FBRywrQ0FBK0MsZ0JBQWdCLG1CQUFtQixHQUFHLGdCQUFnQix1QkFBdUIsV0FBVyxjQUFjLFlBQVksYUFBYSxnQkFBZ0Isa0JBQWtCLG1DQUFtQyxpS0FBaUssR0FBRyxHOzs7Ozs7OztBQ0Fob0Y4RSxRQUFPQyxPQUFQLEdBQWlCO0FBQ2ZsRSxrQkFBZ0IsU0FBU21FLFVBQVQsR0FBcUI7QUFDbkMsU0FBSUMsTUFBTTNKLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjs7QUFFQSxZQUFPLFVBQVMySixJQUFULEVBQWM7QUFDbkIsV0FBSUMsSUFBSjtBQUNBRixXQUFJekosU0FBSixHQUFnQjBKLElBQWhCO0FBQ0FDLGNBQU9GLElBQUlHLFFBQUosQ0FBYSxDQUFiLENBQVA7QUFDQUgsV0FBSXRDLFdBQUosQ0FBZ0J3QyxJQUFoQjtBQUNBLGNBQU9BLElBQVA7QUFDRCxNQU5EO0FBT0QsSUFWYyxFQURBO0FBWWZ4SSxtQkFBZ0Isd0JBQVMwSSxHQUFULEVBQWFDLElBQWIsRUFBa0I7QUFDaEMsU0FBSUMsT0FBTyxJQUFJQyxNQUFKLENBQVcsVUFBWCxDQUFYO0FBQUEsU0FDSUwsSUFESjtBQUVBLFlBQU1BLE9BQU9JLEtBQUtFLElBQUwsQ0FBVUosR0FBVixDQUFiLEVBQTRCO0FBQzFCQSxhQUFNQSxJQUFJekosT0FBSixDQUFZdUosS0FBSyxDQUFMLENBQVosRUFBb0JHLEtBQUtILEtBQUssQ0FBTCxDQUFMLEtBQWlCLEVBQXJDLENBQU47QUFDRDtBQUNELFlBQU9FLElBQUl6SixPQUFKLENBQVksVUFBWixFQUF1QixFQUF2QixDQUFQO0FBQ0QsSUFuQmM7QUFvQmZILGVBQVksb0JBQVM0SixHQUFULEVBQWNDLElBQWQsRUFBbUI7QUFDN0IsU0FBSUMsT0FBTyxJQUFJQyxNQUFKLENBQVcsdUJBQVgsQ0FBWDs7QUFFQSxZQUFPSCxJQUFJekosT0FBSixDQUFZMkosSUFBWixFQUFrQixVQUFTMUosSUFBVCxFQUFlbUgsRUFBZixFQUFtQmxILEdBQW5CLEVBQXVCO0FBQzlDLGNBQU93SixLQUFLdEMsRUFBTCxFQUFTbEgsR0FBVCxDQUFQO0FBQ0QsTUFGTSxFQUVKRixPQUZJLENBRUksVUFGSixFQUVlLEVBRmYsQ0FBUCxDQUUwQjtBQUUzQixJQTNCYztBQTRCZmdHLGNBQVcsbUJBQVNqRCxHQUFULEVBQWFiLElBQWIsRUFBa0JrRixFQUFsQixFQUFxQjtBQUM5QnJFLFNBQUkrRyxnQkFBSixHQUNJL0csSUFBSStHLGdCQUFKLENBQXFCNUgsSUFBckIsRUFBMEJrRixFQUExQixFQUE2QixLQUE3QixDQURKLEdBRUlyRSxJQUFJZ0gsV0FBSixDQUFnQixPQUFPN0gsSUFBdkIsRUFBNkJrRixFQUE3QixDQUZKO0FBR0QsSUFoQ2M7QUFpQ2ZWLGdCQUFhLHFCQUFTM0QsR0FBVCxFQUFhYixJQUFiLEVBQWtCa0YsRUFBbEIsRUFBcUI7QUFDaENyRSxTQUFJaUgsbUJBQUosR0FDSWpILElBQUlpSCxtQkFBSixDQUF3QjlILElBQXhCLEVBQTZCa0YsRUFBN0IsRUFBZ0MsS0FBaEMsQ0FESixHQUVJckUsSUFBSWtILFdBQUosQ0FBZ0IsT0FBTy9ILElBQXZCLEVBQTZCa0YsRUFBN0IsQ0FGSjtBQUdELElBckNjO0FBc0NmOEMsZ0JBQWEscUJBQVVDLEdBQVYsRUFBZTtBQUN4QixTQUFJQyxNQUFNLElBQUlSLE1BQUosQ0FBVyxVQUFVTyxHQUFWLEdBQWdCLGVBQTNCLEVBQTRDLEdBQTVDLENBQVY7QUFDQSxTQUFJRSxJQUFJakosT0FBT2tKLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxNQUF2QixDQUE4QixDQUE5QixFQUFpQ0MsS0FBakMsQ0FBdUNMLEdBQXZDLENBQVI7QUFDQSxTQUFJQyxLQUFLLElBQVQsRUFBZSxPQUFPSyxVQUFVTCxFQUFFLENBQUYsQ0FBVixDQUFQO0FBQ2YsWUFBTyxJQUFQO0FBQ0gsSUEzQ2M7QUE0Q2ZsTCxXQUFRLGtCQUFVO0FBQ2hCLFNBQUlvSyxPQUFPL0IsVUFBVSxDQUFWLENBQVg7QUFDQSxTQUFJQyxPQUFPLEdBQUdGLEtBQUgsQ0FBU3RHLElBQVQsQ0FBY3VHLFNBQWQsRUFBeUIsQ0FBekIsQ0FBWDtBQUNBLFVBQUksSUFBSXVCLElBQUUsQ0FBTixFQUFRQyxNQUFJdkIsS0FBS25GLE1BQXJCLEVBQTRCeUcsSUFBRUMsR0FBOUIsRUFBa0NELEdBQWxDLEVBQXNDO0FBQ3BDLFdBQUlwRyxPQUFPOEUsS0FBS3NCLENBQUwsQ0FBWDtBQUNBLFdBQUcsQ0FBQ3BHLElBQUosRUFDRTtBQUNGLFlBQUksSUFBSWdJLENBQVIsSUFBYWhJLElBQWIsRUFBa0I7QUFDaEIsYUFBR0EsS0FBS2lJLGNBQUwsQ0FBb0JELENBQXBCLENBQUgsRUFBMEI7QUFDeEJwQixnQkFBS29CLENBQUwsSUFBVWhJLEtBQUtnSSxDQUFMLENBQVY7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxZQUFPcEIsSUFBUDtBQUNELElBMURjO0FBMkRmc0IsWUFBUyxpQkFBUzlILEdBQVQsRUFBYVYsR0FBYixFQUFpQjtBQUN4QixTQUFJeUksVUFBVSxJQUFJbEIsTUFBSixDQUFXLGFBQVl2SCxHQUFaLEdBQWtCLFVBQTdCLENBQWQ7QUFBQSxTQUNJMEksVUFBVSxJQUFJbkIsTUFBSixDQUFXLE1BQUt2SCxHQUFMLEdBQVcsR0FBdEIsQ0FEZDtBQUFBLFNBRUkySSxTQUFTakksR0FGYjs7QUFJQSxTQUFHa0ksS0FBS2xJLEdBQUwsQ0FBSCxFQUNFLE9BQU9BLEdBQVA7O0FBRUYsWUFBTSxDQUFDLEVBQUVpSSxTQUFTQSxPQUFPMUgsVUFBbEIsQ0FBRCxJQUFtQzBILE9BQU9FLFFBQVAsQ0FBZ0JDLFdBQWhCLE1BQWlDLE1BQTFFLEVBQWlGO0FBQy9FLFdBQUdGLEtBQUtELE1BQUwsQ0FBSCxFQUFnQjtBQUNkLGdCQUFPQSxNQUFQO0FBQ0Q7QUFDRjtBQUNELFlBQU8sSUFBUDs7QUFFQSxjQUFTQyxJQUFULENBQWNsSSxHQUFkLEVBQWtCOztBQUVoQixXQUFHLENBQUMsQ0FBQ0EsSUFBSTBDLFNBQUosQ0FBY2dGLEtBQWQsQ0FBb0JLLE9BQXBCLENBQUwsRUFBa0M7QUFDaEMsZ0JBQU8sSUFBUDtBQUNELFFBRkQsTUFFTSxJQUFHQyxRQUFRRSxJQUFSLENBQWFsSSxJQUFJbUksUUFBSixDQUFhQyxXQUFiLEVBQWIsQ0FBSCxFQUE0QztBQUNoRCxnQkFBTyxJQUFQO0FBQ0Q7QUFDRjtBQUNGLElBbEZjO0FBbUZmckQsaUJBQWMsc0JBQVNzRCxLQUFULEVBQWU7QUFDM0IsU0FBSUMsTUFBTSxFQUFWOztBQUVBLFVBQUksSUFBSVYsQ0FBUixJQUFhUyxLQUFiLEVBQW1CO0FBQ2pCLFdBQUdBLE1BQU1SLGNBQU4sQ0FBcUJELENBQXJCLENBQUgsRUFBMkI7QUFDekIsYUFBRyxPQUFPUyxNQUFNVCxDQUFOLENBQVAsSUFBbUIsV0FBdEIsRUFBa0M7QUFDaENVLGVBQUlWLENBQUosSUFBU1MsTUFBTVQsQ0FBTixDQUFUO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsWUFBT1UsR0FBUDtBQUNEO0FBOUZjLEVBQWpCLEM7Ozs7Ozs7O0FDQUEsS0FBSXJNLFFBQVEsbUJBQUFELENBQVEsQ0FBUixDQUFaOztBQUVBLFVBQVN1TSxTQUFULENBQW1CQyxHQUFuQixFQUF1QkMsT0FBdkIsRUFBK0I7QUFDN0IsT0FBSUMsZUFBZXJJLGlCQUFpQm1JLEdBQWpCLENBQW5CO0FBQUEsT0FDSUcsVUFBVSxDQURkOztBQUdBLE9BQUdGLE9BQUgsRUFBVztBQUNURSxlQUFVRCxhQUFhcEksZ0JBQWIsQ0FBOEIsWUFBOUIsRUFBNENyRCxPQUE1QyxDQUFvRCxJQUFwRCxFQUF5RCxFQUF6RCxJQUE2RCxDQUE3RCxHQUNBeUwsYUFBYXBJLGdCQUFiLENBQThCLGVBQTlCLEVBQStDckQsT0FBL0MsQ0FBdUQsSUFBdkQsRUFBNEQsRUFBNUQsSUFBZ0UsQ0FEMUU7QUFFRDtBQUNELFVBQ1F5TCxhQUFhcEksZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0NyRCxPQUF4QyxDQUFnRCxJQUFoRCxFQUFxRCxFQUFyRCxJQUF5RCxDQUF6RCxHQUNBeUwsYUFBYUUsVUFBYixDQUF3QjNMLE9BQXhCLENBQWdDLElBQWhDLEVBQXFDLEVBQXJDLElBQXlDLENBRHpDLEdBRUF5TCxhQUFhRyxhQUFiLENBQTJCNUwsT0FBM0IsQ0FBbUMsSUFBbkMsRUFBd0MsRUFBeEMsSUFBNEMsQ0FGNUMsR0FHQXlMLGFBQWFJLGNBQWIsQ0FBNEI3TCxPQUE1QixDQUFvQyxJQUFwQyxFQUF5QyxFQUF6QyxJQUE2QyxDQUg3QyxHQUlBeUwsYUFBYUssaUJBQWIsQ0FBK0I5TCxPQUEvQixDQUF1QyxJQUF2QyxFQUE0QyxFQUE1QyxJQUFnRCxDQUpoRCxHQUtBMEwsT0FOUjtBQVFEOztBQUVELEtBQUlLLE9BQU87QUFDVEMsYUFBVTtBQUNSdk0sWUFBTztBQURDO0FBREQsRUFBWDs7QUFNQXlKLFFBQU9DLE9BQVAsR0FBaUI7QUFDZjlELGNBQVcsbUJBQVNoQixNQUFULEVBQWdCO0FBQ3pCLFNBQUk0SCxhQUFjNUgsT0FBT2pFLGFBQVAsQ0FBcUIsaUJBQXJCLENBQWxCO0FBQUEsU0FDSThMLFVBQVU3SCxPQUFPakUsYUFBUCxDQUFxQixTQUFyQixDQURkO0FBQUEsU0FFSStMLG1CQUFtQkYsV0FBV3hNLEtBRmxDO0FBQUEsU0FHSTJNLGdCQUFnQmhKLGlCQUFpQjhJLE9BQWpCLEVBQTBCN0ksZ0JBQTFCLENBQTJDLFFBQTNDLEVBQXFEckQsT0FBckQsQ0FBNkQsSUFBN0QsRUFBa0UsRUFBbEUsSUFBc0UsQ0FIMUY7QUFBQSxTQUlJcU0sU0FKSjtBQUFBLFNBSWVDLFNBSmY7QUFBQSxTQUkwQkMsU0FKMUI7QUFBQSxTQUlxQ0MsT0FKckM7QUFBQSxTQUtJQyxTQUxKO0FBQUEsU0FLZUMsS0FMZjtBQUFBLFNBS3NCQyxLQUx0QjtBQUFBLFNBTUlDLFVBQVUsQ0FOZDtBQUFBLFNBTWlCQyxJQUFHLENBTnBCO0FBQUEsU0FNdUJDLElBQUcsQ0FOMUI7QUFBQSxTQU02QkMsTUFON0I7QUFBQSxTQU1xQ0MsTUFOckM7QUFBQSxTQU02Q0MsY0FON0M7O0FBUUFaLGlCQUFZRCxnQkFBZ0JkLFVBQVVXLFVBQVYsRUFBcUIsSUFBckIsQ0FBNUI7O0FBRUFFLHNCQUFpQmUsd0JBQWpCLEdBQTRDbkIsS0FBS0MsUUFBTCxDQUFjdk0sS0FBMUQ7O0FBRUFULFdBQU1nSCxTQUFOLENBQWdCM0IsTUFBaEIsRUFBdUIsV0FBdkIsRUFBbUM4SSxjQUFuQztBQUNBbk8sV0FBTWdILFNBQU4sQ0FBZ0IzQixNQUFoQixFQUF1QixZQUF2QixFQUFvQytJLFVBQXBDO0FBQ0FwTyxXQUFNZ0gsU0FBTixDQUFnQjNCLE1BQWhCLEVBQXVCLFVBQXZCLEVBQWtDZ0osU0FBbEM7QUFDQXJPLFdBQU1nSCxTQUFOLENBQWdCaUcsVUFBaEIsRUFBMkIsZUFBM0IsRUFBMkNxQixjQUEzQztBQUNBdE8sV0FBTWdILFNBQU4sQ0FBZ0JpRyxVQUFoQixFQUEyQixxQkFBM0IsRUFBaURxQixjQUFqRDs7QUFFQSxZQUFPO0FBQ0wzRyxzQkFBZSx5QkFBVTtBQUN2QjNILGVBQU0wSCxXQUFOLENBQWtCckMsTUFBbEIsRUFBeUIsV0FBekIsRUFBcUM4SSxjQUFyQztBQUNBbk8sZUFBTTBILFdBQU4sQ0FBa0JyQyxNQUFsQixFQUF5QixZQUF6QixFQUFzQytJLFVBQXRDO0FBQ0FwTyxlQUFNMEgsV0FBTixDQUFrQnJDLE1BQWxCLEVBQXlCLFVBQXpCLEVBQW9DZ0osU0FBcEM7QUFDQXJPLGVBQU0wSCxXQUFOLENBQWtCdUYsVUFBbEIsRUFBNkIsZUFBN0IsRUFBNkNxQixjQUE3QztBQUNBdE8sZUFBTTBILFdBQU4sQ0FBa0J1RixVQUFsQixFQUE2QixxQkFBN0IsRUFBbURxQixjQUFuRDtBQUNBckIsc0JBQWFDLFVBQVUsSUFBdkI7QUFDRCxRQVJJO0FBU0xsRixnQkFBUyxtQkFBVTtBQUNqQm9GLHlCQUFnQmhKLGlCQUFpQjhJLE9BQWpCLEVBQTBCN0ksZ0JBQTFCLENBQTJDLFFBQTNDLEVBQXFEckQsT0FBckQsQ0FBNkQsSUFBN0QsRUFBa0UsRUFBbEUsSUFBc0UsQ0FBdEY7QUFDQXFNLHFCQUFZRCxnQkFBZ0JkLFVBQVVXLFVBQVYsRUFBcUIsSUFBckIsQ0FBNUI7QUFDRDtBQVpJLE1BQVA7O0FBZUEsY0FBU21CLFVBQVQsQ0FBb0JuRyxDQUFwQixFQUFzQjtBQUNwQixXQUFJc0csUUFBUXRHLEVBQUV1RyxPQUFGLENBQVUsQ0FBVixDQUFaO0FBQUEsV0FDSXRHLFNBQVNsSSxNQUFNNkwsT0FBTixDQUFjNUQsRUFBRUMsTUFBaEIsRUFBdUIsZ0JBQXZCLENBRGI7QUFBQSxXQUVJdUcsR0FGSjs7QUFJQSxXQUFHLENBQUMsQ0FBQ3ZHLE1BQUwsRUFBWTtBQUNWLGFBQUcrRixjQUFILEVBQWtCO0FBQ2hCUztBQUNBVCw0QkFBaUIsS0FBakI7QUFDQVEsaUJBQU1FLHFCQUFOO0FBQ0FDLHFCQUFVQyxLQUFLQyxLQUFMLENBQVdMLElBQUlaLENBQWYsQ0FBVixFQUE2QmdCLEtBQUtDLEtBQUwsQ0FBV0wsSUFBSVgsQ0FBZixDQUE3QjtBQUNEO0FBQ0RSLHFCQUFZaUIsTUFBTVEsS0FBbEI7QUFDQXhCLHFCQUFZZ0IsTUFBTVMsS0FBbEI7QUFDQXZCLHFCQUFZd0IsS0FBS0MsR0FBTCxFQUFaO0FBQ0F2QixpQkFBUUQsUUFBUSxDQUFoQjtBQUNBSyxrQkFBU0YsQ0FBVDtBQUNBRyxrQkFBU0YsQ0FBVDtBQUNBTixtQkFBVSxJQUFWO0FBQ0QsUUFkRCxNQWNLO0FBQ0hBLG1CQUFVLEtBQVY7QUFDRDtBQUNGO0FBQ0QsY0FBU1csY0FBVCxDQUF3QmxHLENBQXhCLEVBQTBCO0FBQ3hCLFdBQUlzRyxRQUFRdEcsRUFBRXVHLE9BQUYsQ0FBVSxDQUFWLENBQVo7QUFBQSxXQUNJVyxPQUFPWixNQUFNUSxLQURqQjtBQUFBLFdBRUlLLE9BQU9iLE1BQU1TLEtBRmpCO0FBQUEsV0FHSTlDLFdBQVdqRSxFQUFFQyxNQUFGLENBQVNnRSxRQUFULENBQWtCQyxXQUFsQixFQUhmO0FBQUEsV0FJSWtELFlBQVlKLEtBQUtDLEdBQUwsRUFKaEI7O0FBTUEsV0FBSUksU0FBU0YsT0FBTzdCLFNBQXBCO0FBQUEsV0FDSWdDLFNBQVNKLE9BQU83QixTQURwQjtBQUFBLFdBRUlrQyxJQUZKOztBQUlBbEMsbUJBQVk2QixJQUFaO0FBQ0E1QixtQkFBWTZCLElBQVo7O0FBRUF6QixnQkFBUzRCLE1BQVQ7QUFDQTdCLGdCQUFTNEIsTUFBVDs7QUFFQSxXQUFJcEQsWUFBWSxPQUFaLElBQXVCQSxZQUFZLFFBQW5DLElBQStDQSxZQUFZLFVBQS9ELEVBQTBFO0FBQ3hFakUsV0FBRXdILGNBQUY7QUFDQXhILFdBQUV5SCxlQUFGO0FBQ0QsUUFIRCxNQUdLO0FBQ0g7QUFDRDs7QUFFRCxXQUFNTCxZQUFZekIsT0FBWixHQUFzQixHQUF0QixJQUE2QmlCLEtBQUtjLEdBQUwsQ0FBU2pDLEtBQVQsSUFBa0IsRUFBaEQsSUFBdUQsQ0FBQ0YsT0FBeEQsSUFBbUVILGFBQWEsQ0FBckYsRUFBd0Y7QUFDdEZwRixXQUFFd0gsY0FBRjtBQUNBO0FBQ0Q7O0FBRURELGNBQU8xQixJQUFJd0IsTUFBWDtBQUNBLFdBQUtFLE9BQU8sQ0FBUCxJQUFZQSxPQUFPbkMsU0FBeEIsRUFBb0M7QUFDbENtQyxnQkFBTzFCLElBQUl3QixTQUFTLENBQXBCO0FBQ0Q7O0FBRURWLGlCQUFVM0IsVUFBVixFQUFxQnVDLElBQXJCOztBQUVBLFdBQUtILFlBQVk1QixTQUFaLEdBQXdCLEdBQTdCLEVBQW1DO0FBQ2pDQSxxQkFBWTRCLFNBQVo7QUFDQXRCLGtCQUFTRixDQUFUO0FBQ0FHLGtCQUFTRixDQUFUO0FBQ0Q7QUFDRjtBQUNELGNBQVNPLFNBQVQsQ0FBbUJwRyxDQUFuQixFQUFxQjtBQUNuQixXQUFJMkgsV0FBV1gsS0FBS0MsR0FBTCxLQUFhekIsU0FBNUI7QUFBQSxXQUNJK0IsT0FBT1gsS0FBS0MsS0FBTCxDQUFXaEIsQ0FBWCxDQURYO0FBQUEsV0FFSStCLE9BQU8sQ0FGWDtBQUFBLFdBR0lDLFNBSEo7O0FBS0F4QyxtQkFBWSxJQUFaO0FBQ0FDLG1CQUFZLElBQVo7QUFDQUssaUJBQVVxQixLQUFLQyxHQUFMLEVBQVY7QUFDQWpCLHdCQUFpQixDQUFqQjs7QUFFQSxXQUFJOEIsY0FBYzlDLFVBQWQsRUFBeUIsR0FBekIsS0FBaUNJLGFBQWEsQ0FBbEQsRUFBcUQ7QUFDbkQ7QUFDRDs7QUFFRDJDLGdCQUFTL0MsVUFBVCxFQUFxQnVDLElBQXJCOztBQUVBLFdBQUdJLFdBQVcsR0FBZCxFQUFrQjtBQUNoQkUscUJBQVlHLFNBQVNuQyxDQUFULEVBQVlFLE1BQVosRUFBb0I0QixRQUFwQixDQUFaO0FBQ0FKLGdCQUFPTSxVQUFVSSxXQUFqQjtBQUNBTCxnQkFBT0MsVUFBVUYsUUFBakI7QUFDQTNCLDBCQUFpQixDQUFqQjtBQUNEOztBQUVELFdBQUt1QixRQUFRMUIsQ0FBYixFQUFpQjtBQUNma0Msa0JBQVMvQyxVQUFULEVBQXFCdUMsSUFBckIsRUFBMEJLLElBQTFCO0FBQ0Q7QUFDRjtBQUNELGNBQVNHLFFBQVQsQ0FBa0I5SCxNQUFsQixFQUF5QmlJLElBQXpCLEVBQThCTixJQUE5QixFQUFtQztBQUNqQ0EsY0FBT0EsUUFBUSxDQUFmO0FBQ0E1Qix3QkFBaUI0QixPQUFPLENBQXhCO0FBQ0FuQix1QkFBZ0JtQixJQUFoQjtBQUNBakIsaUJBQVUxRyxNQUFWLEVBQWlCaUksSUFBakI7QUFDRDtBQUNELGNBQVN2QixTQUFULENBQW1CMUcsTUFBbkIsRUFBMkJpSSxJQUEzQixFQUFpQztBQUMvQmhELHdCQUFpQmlELGVBQWpCLEdBQW9DLHFCQUFxQkQsSUFBckIsR0FBNEIsU0FBaEU7QUFDQXJDLFdBQUlxQyxJQUFKO0FBQ0Q7QUFDRCxjQUFTSixhQUFULENBQXVCN0gsTUFBdkIsRUFBOEIySCxJQUE5QixFQUFtQztBQUNqQyxXQUFJVCxPQUFPdEIsQ0FBWDs7QUFFQStCLGNBQU9BLFFBQVEsQ0FBZjs7QUFFQSxXQUFJVCxRQUFRLENBQVosRUFBZ0I7QUFDZEEsZ0JBQU8sQ0FBUDtBQUNELFFBRkQsTUFFTyxJQUFJQSxPQUFPL0IsU0FBWCxFQUF1QjtBQUM1QitCLGdCQUFPL0IsU0FBUDtBQUNEOztBQUVELFdBQUsrQixRQUFRdEIsQ0FBYixFQUFpQjtBQUNmLGdCQUFPLEtBQVA7QUFDRDs7QUFFRGtDLGdCQUFTOUgsTUFBVCxFQUFpQmtILElBQWpCLEVBQXVCUyxJQUF2QjtBQUNBLGNBQU8sSUFBUDtBQUNEOztBQUVELGNBQVNJLFFBQVQsQ0FBa0JJLE9BQWxCLEVBQTJCQyxLQUEzQixFQUFrQ1QsSUFBbEMsRUFBdUM7QUFDckMsV0FBSVUsV0FBV0YsVUFBVUMsS0FBekI7QUFBQSxXQUNJRSxRQUFRM0IsS0FBS2MsR0FBTCxDQUFTWSxRQUFULElBQXFCVixJQURqQztBQUFBLFdBRUlZLGVBQWUsTUFGbkI7QUFBQSxXQUdJUCxXQUhKO0FBQUEsV0FJSU4sUUFKSjs7QUFNQU0scUJBQWNHLFVBQVlHLFFBQVFBLEtBQVYsSUFBc0IsSUFBSUMsWUFBMUIsS0FBNkNGLFdBQVcsQ0FBWCxHQUFlLENBQUMsQ0FBaEIsR0FBb0IsQ0FBakUsQ0FBeEIsQ0FQcUMsQ0FPeUQ7QUFDOUZYLGtCQUFXWSxRQUFRQyxZQUFuQixDQVJxQyxDQVFKOztBQUVqQyxXQUFLUCxjQUFjN0MsU0FBbkIsRUFBK0I7QUFDN0I2Qyx1QkFBYzdDLFlBQWNELGdCQUFnQixHQUFoQixJQUF3Qm9ELFFBQVEsQ0FBaEMsQ0FBNUI7QUFDQUQsb0JBQVcxQixLQUFLYyxHQUFMLENBQVNPLGNBQWNHLE9BQXZCLENBQVg7QUFDQVQsb0JBQVdXLFdBQVdDLEtBQXRCO0FBQ0QsUUFKRCxNQUlNLElBQUdOLGNBQWMsQ0FBakIsRUFBbUI7QUFDdkJBLHVCQUFjOUMsZ0JBQWdCLEdBQWhCLElBQXdCb0QsUUFBUSxDQUFoQyxDQUFkO0FBQ0FELG9CQUFXMUIsS0FBS2MsR0FBTCxDQUFTVSxPQUFULElBQW9CSCxXQUEvQjtBQUNBTixvQkFBV1csV0FBV0MsS0FBdEI7QUFDRDs7QUFFRCxjQUFPO0FBQ0xOLHNCQUFhckIsS0FBS0MsS0FBTCxDQUFXb0IsV0FBWCxDQURSO0FBRUxOLG1CQUFVQTtBQUZMLFFBQVA7QUFJRDs7QUFFRCxjQUFTakIsbUJBQVQsR0FBK0I7QUFDN0IsV0FBSStCLFNBQVN0TyxPQUFPZ0MsZ0JBQVAsQ0FBd0I2SSxVQUF4QixFQUFvQyxJQUFwQyxDQUFiO0FBQUEsV0FDRVksQ0FERjtBQUFBLFdBQ0tDLENBREw7O0FBR0E0QyxnQkFBU0EsT0FBT04sZUFBUCxDQUF1Qk8sS0FBdkIsQ0FBNkIsR0FBN0IsRUFBa0MsQ0FBbEMsRUFBcUNBLEtBQXJDLENBQTJDLElBQTNDLENBQVQ7QUFDQTlDLFdBQUksRUFBRTZDLE9BQU8sRUFBUCxLQUFjQSxPQUFPLENBQVAsQ0FBaEIsQ0FBSjtBQUNBNUMsV0FBSSxFQUFFNEMsT0FBTyxFQUFQLEtBQWNBLE9BQU8sQ0FBUCxDQUFoQixDQUFKOztBQUVBLGNBQU8sRUFBRTdDLEdBQUdBLENBQUwsRUFBUUMsR0FBR0EsQ0FBWCxFQUFQO0FBQ0Q7O0FBRUQsY0FBU1ksZUFBVCxDQUF5Qm1CLElBQXpCLEVBQThCO0FBQzVCQSxjQUFPQSxRQUFRLENBQWY7QUFDQTFDLHdCQUFpQnlELGtCQUFqQixHQUFzQ2YsT0FBTyxJQUE3QztBQUNEO0FBQ0QsY0FBU3ZCLGNBQVQsR0FBeUI7QUFDdkIsV0FBRyxDQUFDTCxjQUFKLEVBQ0U7QUFDRlM7QUFDQSxXQUFHLENBQUNxQixjQUFjOUMsVUFBZCxDQUFKLEVBQThCO0FBQzVCZ0IsMEJBQWlCLENBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBOU1jLEVBQWpCLEMiLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBkRGlhbG9nXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBkRGlhbG9nXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI1MmEyMTA3MGI2YTU1ZjFiZjcxIiwidmFyIGJhc2VDc3MgPSByZXF1aXJlKCcuL2Nzcy9iYXNlLmxlc3MnKTtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi9kb20uanMnKTtcbnZhciBzY3JvbGxEbGcgPSByZXF1aXJlKCcuL2RsZ3Njcm9sbC5qcycpO1xudmFyIF8gPSB7XG4gIGFzc2lnbjogdXRpbHMuYXNzaWduXG59LCB3aW5ILCB3aW5XO1xuXG5mdW5jdGlvbiBub29wKCl7fVxuXG4vL+WKqOaAgeaPkuWFpWNzc+agt+W8j1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVUb0hlYWQoYmFzZUZvbnRTaXplKXtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBzdHlsZS5pbm5lckhUTUwgPSB1dGlscy5mblRlbXBsYXRlKFxuICAgIGJhc2VDc3MsXG4gICAge1xuICAgICAgcmVtOiBmdW5jdGlvbihweCl7XG4gICAgICAgIHJldHVybiBweC5yZXBsYWNlKC8oXFxkKylweC8sZnVuY3Rpb24oZXhwciwgdmFsKXtcbiAgICAgICAgICByZXR1cm4gKHZhbCAqMSAvIGJhc2VGb250U2l6ZSkgKyAncmVtJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIHZhciBoZWFkRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICB2YXIgZmlyc3RMaW5rID0gaGVhZERvbS5xdWVyeVNlbGVjdG9yKCdsaW5rJyk7XG5cbiAgaWYoIWZpcnN0TGluaylcbiAgICBoZWFkRG9tLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgZWxzZVxuICAgIGhlYWREb20uaW5zZXJ0QmVmb3JlKHN0eWxlLCBmaXJzdExpbmspO1xuXG59XG5cbi8qXG7nlJ/miJDlr7nor53moYbmqKHmnb/lhoXlrrlcbiAqL1xuICBmdW5jdGlvbiBnZXRIdG1sQ29udGVudChvcHRpb25zKXtcbiAgICB2YXIgdGVtcGxhdGVIdG1sID0gW10sXG4gICAgICAgIGhlYWRlciA9IG9wdGlvbnMuaGVhZGVyO1xuXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxkaXYgY2xhc3M9XCJyYy1tb2RhbFwiPjxkaXYgY2xhc3M9XCJkaWFsb2ctbWFza1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgJyArIG9wdGlvbnMuY2xhenogKyAnXCI+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZy1tYWluXCI+Jyk7XG4gICAgaWYob3B0aW9ucy50aXRsZSAhPSBudWxsICYmIG9wdGlvbnMudGl0bGUgIT0gJycpe1xuICAgICAgdGVtcGxhdGVIdG1sLnB1c2goJzxoZWFkZXI+JyArIHV0aWxzLnJlcGxhY2VUZW1sYXRlKGhlYWRlcixvcHRpb25zKSArICc8L2hlYWRlcj4nKTtcbiAgICB9XG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxzZWN0aW9uPjxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiPjwvZGl2Pjwvc2VjdGlvbj48Zm9vdGVyPicpO1xuICAgIHRlbXBsYXRlSHRtbC5wdXNoKGNyZWF0ZUJ1dHRvbnMuY2FsbCh0aGlzLG9wdGlvbnMpKTtcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICByZXR1cm4gdGVtcGxhdGVIdG1sLmpvaW4oJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzaXplV2luKCl7XG4gICAgd2luSCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICAgIHdpblcgPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgfVxuICAvLyB1dGlscy5iaW5kRXZlbnQod2luZG93LCdyZXNpemUnLHJlc2l6ZVdpbik7XG4vL1RPRE86XG4gIC8vIHJlc2l6ZVdpbigpO1xuICAvKlxuICDliJvlu7rlupXpg6jmjInpkq5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnMob3B0aW9ucyl7XG4gICAgdmFyIGJ0bnMgPSBvcHRpb25zLmJ1dHRvbnMgfHwgW10sXG4gICAgICAgIHRlbXBsYXRlID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie2Nsc31cIiBkYXRhLWlkPVwie2lkfVwiID57bmFtZX08L2J1dHRvbj4nLFxuICAgICAgICBidG5UbXBscyA9ICcnLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgb25lQnRuQ2x6PScnO1xuXG4gICAgaWYob3B0aW9ucy5jYW5jZWxDYWxsYmFjayl7XG4gICAgICBidG5zLnB1c2goe1xuICAgICAgICBpZDogJ2NhbmNlbCcsXG4gICAgICAgIG5hbWU6IG9wdGlvbnMuY2FuY2VsU3RyLFxuICAgICAgICBjYWxsYmFjazogb3B0aW9ucy5jYW5jZWxDYWxsYmFjayxcbiAgICAgICAgY2xzOiBcImNhbmNsZS1idG5cIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoYnRucy5sZW5ndGggPT0wKVxuICAgICAgb25lQnRuQ2x6ID0gJyBtb2RhbC1kaWFsb2ctb25lYnRuJztcblxuICAgIGlmKG9wdGlvbnMub2tDYWxsYmFjayl7XG4gICAgICBidG5zLnB1c2goe1xuICAgICAgICBpZDogJ29rJyxcbiAgICAgICAgbmFtZTogb3B0aW9ucy5zdXJlU3RyLFxuICAgICAgICBjYWxsYmFjazogb3B0aW9ucy5va0NhbGxiYWNrLFxuICAgICAgICBjbHM6IFwic3VyZS1idG5cIiArIG9uZUJ0bkNselxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKVxuICAgICAgYnRucyA9IGJ0bnMucmV2ZXJzZSgpO1xuXG4gICAgYnRucy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0saW5kZXgpe1xuICAgICAgaWYoKGJ0bnMubGVuZ3RoIC0gMSkgPT0gaW5kZXgpXG4gICAgICAgIGl0ZW0uY2xzICs9ICcgbGFzdCc7XG4gICAgICBidG5UbXBscyArPSB1dGlscy5yZXBsYWNlVGVtbGF0ZSh0ZW1wbGF0ZSxpdGVtKTtcbiAgICAgIHNlbGYuY2FsbGJhY2tzW2l0ZW0uaWRdID0gaXRlbS5jYWxsYmFjaztcbiAgICB9KTtcblxuICAgIHJldHVybiBidG5UbXBscztcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydENvbnRlbnQoZG9tLG9wdGlvbnMpe1xuICAgICAgaWYob3B0aW9ucy5zZWxlY3Rvcil7XG4gICAgICAgIHZhciBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcImRpYWxvZy10YXJnZXQgcmVwbGFjZVwiKSxcbiAgICAgICAgICAgIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcixcbiAgICAgICAgICAgIG9yaURpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHNlbGVjdG9yKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgaWYoc2VsZWN0b3IucGFyZW50Tm9kZSl7XG4gICAgICAgICAgc2VsZWN0b3IucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWVudCxzZWxlY3Rvcik7XG4gICAgICAgICAgZG9tLl9jb21tZW50RG9tID0gY29tbWVudDtcbiAgICAgICAgICBpZihvcmlEaXNwbGF5ID09ICdub25lJyl7XG4gICAgICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZG9tLl9vcmlnaW5EaXNwbGF5ID0gb3JpRGlzcGxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5pbm5lckhUTUwgPSBvcHRpb25zLmNvbnRlbnQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJzxici8+Jyk7XG4gICAgfVxuLyoqXG4gKiBbTW9kYWxEaWFsb2cgZGVzY3JpcHRpb25dXG4gKiBjbGF6ejog5by55Ye65qGG55qEY3Nz57G75ZCNXG4gKiBjYW5jZWxTdHIg5Y+W5raI5oyJ6ZKu55qE5oyJ6ZKu5ZCNXG4gKiBzdXJlU3RyIOehruWumuaMiemSrueahOaMiemSruWQjVxuICogdGl0bGUg5by55Ye65qGG55qE5qCH6aKYXG4gKiBoZWFkZXIg6KGo56S65aS06YOo55qEaHRtbOaooeadv1xuICogb2tDYWxsYmFjayDnoa7lrprmjInpkq7lm57osIPlh73mlbBcbiAqIGNhbmNlbENhbGxiYWNrIOWPlua2iOaMiemSruWbnuiwg+WHveaVsFxuICogYnV0dG9ucyBbe2Nsczonc3VyZScsY2FsbGJhY2s6Zm4sbmFtZTonbmFtZSd9XVxuICogdXNlQmFja2dyb3VuZCDljZXlh7vog4zmma/ml7bmiafooYznmoTlm57osIPlh73mlbBcbiAqL1xuICB2YXIgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgICAgICBjbGF6ejogJ2RpYWxvZy10aGVtZScsXG4gICAgICAgIGNhbmNlbFN0cjogJ+WPlua2iCcsXG4gICAgICAgIHN1cmVTdHI6ICfnoa7lrponLFxuICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj57dGl0bGV9PC9zcGFuPicsXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgYnV0dG9uczogbnVsbCxcbiAgICAgICAgdXNlQmFja2dyb3VuZDogJ2NhbmNlbCcsXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGJlZm9yZUxpc3RlbmVycyA9IFtdLFxuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBbXSxcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IFtdLFxuICAgICAgX2NvdW50ID0gMDtcblxuICB2YXIgTW9kYWxEaWFsb2cgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICB2YXIgZGlhbG9nLFxuICAgICAgICBpZDtcblxuICAgIG9wdGlvbnMgPSBfLmFzc2lnbih7fSxkZWZhdWx0U2V0dGluZ3Msb3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLl9jYWxsQmFja3MgPSBvcHRpb25zLl9jYWxsQmFja3MgfHwge307XG4gICAgaWQgPSBvcHRpb25zLmlkID0gb3B0aW9ucy5pZCB8fCBfY291bnQ7XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdGlvbnMuX2NhbGxCYWNrc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBiZWZvcmVMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgICBsaXN0ZW5lcihvcHRpb25zKTtcbiAgICB9KTtcblxuICAgIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbaWRdID0gZGlhbG9nID0gbmV3IE1vZGFsRGlhbG9nLmNyZWF0ZShvcHRpb25zKTtcblxuICAgIE1vZGFsRGlhbG9nLm1vZGFsQ291bnQgKys7XG5cbiAgICBhZnRlckxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICAgIGxpc3RlbmVyKGRpYWxvZyk7XG4gICAgfSk7XG5cbiAgICBfY291bnQgKys7XG5cbiAgICByZXR1cm4gZGlhbG9nO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIHZhciBkaWFsb2dEb20sXG4gICAgICAgIGRsZ1BvcyxcbiAgICAgICAgZGxnTWFpbkRvbSxcbiAgICAgICAgb2Zmc2V0SDtcblxuICAgIHRoaXMuY2FsbGJhY2tzID0gb3B0aW9ucy5fY2FsbEJhY2tzO1xuICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuXG4gICAgZGlhbG9nRG9tID0gdXRpbHMuY3JlYXRlSHRtbERvbShnZXRIdG1sQ29udGVudC5jYWxsKHRoaXMsb3B0aW9ucykpO1xuXG4gICAgaW5zZXJ0Q29udGVudChkaWFsb2dEb20sb3B0aW9ucyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dEb20pO1xuXG4gICAgb2Zmc2V0SCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLmRsZ1Njcm9sbCA9IHNjcm9sbERsZy5pbml0VG91Y2goZGlhbG9nRG9tKTtcblxuICAgIGRsZ01haW5Eb20gPSBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZycpO1xuICAgIGRsZ1BvcyA9IHRoaXMuZ2V0UG9zKGRsZ01haW5Eb20pO1xuXG4gICAgXy5hc3NpZ24oZGxnTWFpbkRvbS5zdHlsZSx7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxuICAgICAgdG9wOiBkbGdQb3MudG9wICsgJ3B4J1xuICAgIH0pO1xuXG4gICAgaWYob3B0aW9ucy5hbmltYXRlZClcbiAgICAgIGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLW1haW4nKS5jbGFzc05hbWUgKz0gJyBkbGctYW5pbWF0aW9uJztcblxuICAgIGlmKG9wdGlvbnMudXNlQmFja2dyb3VuZCl7XG4gICAgICB2YXIgdXNlcmJnciA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcbiAgICAgIGlmKCFvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0pe1xuICAgICAgICBvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0gPSBmdW5jdGlvbigpe307XG4gICAgICB9XG4gICAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuZGF0YXNldC5pZCA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuc3R5bGUuaGVpZ2h0ID0gb2Zmc2V0SCArICdweCc7XG5cbiAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gdGhpcy5wcm94eSh0aGlzLl9jbGlja0V2ZW50LGRpYWxvZ0RvbSxvcHRpb25zKTtcbiAgICB0aGlzLmRpYWxvZ0RvbSA9IGRpYWxvZ0RvbTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2dEb20sJ2NsaWNrJyx0aGlzLl9ldmVudExpc3RlbmVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBfLmFzc2lnbihNb2RhbERpYWxvZy5jcmVhdGUucHJvdG90eXBlLHtcbiAgICBjYWxsYmFja3M6IG51bGwsXG4gICAgZ2V0UG9zOiBmdW5jdGlvbihkaWFsb2dEb20pe1xuICAgICAgZGlhbG9nRG9tID0gZGlhbG9nRG9tIHx8IHRoaXMuZGlhbG9nRG9tO1xuICAgICAgaWYoIWRpYWxvZ0RvbSl7XG4gICAgICAgIHJldHVybiB7bGVmdDowLHRvcDowfTtcbiAgICAgIH1cbiAgICAgIHJlc2l6ZVdpbigpO1xuICAgICAgdmFyIGRsZ0ggPSBkaWFsb2dEb20ub2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIGRsZ1cgPSBkaWFsb2dEb20ub2Zmc2V0V2lkdGg7XG4gICAgICB2YXIgZGxnUG9zWSA9ICh3aW5IIC0gZGxnSCA+PSAwICkgPyAod2luSCAtIGRsZ0gpLzIgOiB3aW5IKjAuMTtcbiAgICAgIHZhciBkbGdQb3NYID0gKHdpblcgLSBkbGdXID49IDAgKSA/ICh3aW5XIC0gZGxnVykvMiA6IHdpblcqMC4xO1xuXG4gICAgICByZXR1cm4ge2xlZnQ6IGRsZ1Bvc1gsIHRvcDogZGxnUG9zWX07XG4gICAgfSxcbiAgICBjbG9zZURpYWxvZzpmdW5jdGlvbihpc05vdEludm9rZSl7XG4gICAgICB2YXIgZGlhbG9nRG9tID0gdGhpcy5kaWFsb2dEb20sXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICBfY29tbWVudERvbSxcbiAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgaWYoIWRpYWxvZ0RvbSlcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICAgIHRoaXMucmVtb3ZlRGlhbG9nKGRpYWxvZ0RvbSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmKG9wdGlvbnMuc2VsZWN0b3IgJiYgZGlhbG9nRG9tLl9jb21tZW50RG9tKXtcbiAgICAgICAgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yO1xuICAgICAgICBfY29tbWVudERvbSA9IGRpYWxvZ0RvbS5fY29tbWVudERvbTtcblxuICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gZGlhbG9nRG9tLl9vcmlnaW5EaXNwbGF5O1xuICAgICAgICBfY29tbWVudERvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzZWxlY3RvcixfY29tbWVudERvbSk7XG5cbiAgICAgICAgZGlhbG9nRG9tLl9jb21tZW50RG9tID0gbnVsbDtcbiAgICAgICAgZGlhbG9nRG9tLl9vcmlnaW5EaXNwbGF5ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZ0RvbSwnY2xpY2snLHRoaXMuX2V2ZW50TGlzdGVuZXIpO1xuICAgICAgLy8gZGlhbG9nRG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGlhbG9nRG9tKTtcbiAgICAgIHRoaXMuZGxnU2Nyb2xsLmRlc3Ryb3lTY3JvbGwgJiYgdGhpcy5kbGdTY3JvbGwuZGVzdHJveVNjcm9sbCgpO1xuXG4gICAgICBpZighaXNOb3RJbnZva2Upe1xuICAgICAgICBjbG9zZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgICAgICAgbGlzdGVuZXIoc2VsZik7XG4gICAgICAgIH0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2spXG4gICAgICAgICAgb3B0aW9ucy5jYW5jZWxDYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gbnVsbDtcbiAgICAgIHRoaXMuZGlhbG9nRG9tID0gZGlhbG9nRG9tID0gbnVsbDtcblxuICAgICAgb3B0aW9ucy5jb21wbGV0ZSAmJiBvcHRpb25zLmNvbXBsZXRlKCk7XG5cbiAgICAgIGRlbGV0ZSBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W3RoaXMuaWRdO1xuXG4gICAgICBNb2RhbERpYWxvZy5tb2RhbENvdW50IC0tO1xuICAgIH0sXG4gICAgcmVtb3ZlRGlhbG9nOiBmdW5jdGlvbihkbGdEb20pe1xuICAgICAgdXRpbHMuYmluZEV2ZW50KGRsZ0RvbSwgJ3RyYW5zaXRpb25lbmQnLCBfcmVtb3ZlVHJhbnNpdGlvbilcbiAgICAgIHV0aWxzLmJpbmRFdmVudChkbGdEb20sJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBfcmVtb3ZlVHJhbnNpdGlvbik7XG5cbiAgICAgIGRsZ0RvbS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgICAgZnVuY3Rpb24gX3JlbW92ZVRyYW5zaXRpb24oKXtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnRG9tLCd0cmFuc2l0aW9uZW5kJyxfcmVtb3ZlVHJhbnNpdGlvbik7XG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0RvbSwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3JlbW92ZVRyYW5zaXRpb24pO1xuICAgICAgICBkbGdEb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkbGdEb20pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVmcmVzaDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBkaWFsb2dEb20gPSB0aGlzLmRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nJyksXG4gICAgICAgICAgZGxnUG9zID0gdGhpcy5nZXRQb3MoZGlhbG9nRG9tKTtcblxuICAgICAgXy5hc3NpZ24oZGlhbG9nRG9tLnN0eWxlLHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxuICAgICAgICB0b3A6IGRsZ1Bvcy50b3AgKyAncHgnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGxnU2Nyb2xsLnJlZnJlc2goKTtcbiAgICB9LFxuICAgIF9jbGlja0V2ZW50OiBmdW5jdGlvbihlLGRpYWxvZ0RvbSxvcHRpb25zKXtcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgICBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgaWYodHlwZW9mIHRoaXMuY2FsbGJhY2tzW2lkXSA9PSAnZnVuY3Rpb24nICYmICF0aGlzLmNhbGxiYWNrc1tpZF0uY2FsbCh0aGlzLGUpKXtcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgIHNlbGYuY2xvc2VEaWFsb2coKTtcbiAgICAgICAgLy8gfSwxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3h5OiBmdW5jdGlvbihmbil7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgd3JhcEFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgaWYod3JhcEFyZ3MubGVuZ3RoID4gMClcbiAgICAgICAgICBhcmdzID0gYXJncy5jb25jYXQod3JhcEFyZ3MpO1xuXG4gICAgICAgIGZuLmFwcGx5KHNlbGYsYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBNb2RhbERpYWxvZy5hbGVydCA9IGZ1bmN0aW9uKGNvbnRlbnQsdGl0bGUsY2FsbGJhY2ssZG9tLGNscyl7XG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcblxuICAgIGNseiArPSAnIGFsZXJ0LWRpYWxvZyc7XG5cbiAgICBpZih0eXBlb2YgY29udGVudCAhPT0gJ29iamVjdCcpe1xuICAgICAgY29udGVudCA9IHV0aWxzLmNyZWF0ZVBhcmFtcyh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgb2tDYWxsYmFjazpjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBkb21cbiAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnRlbnQub2tDYWxsYmFjayA9IGNvbnRlbnQub2tDYWxsYmFjayB8fCBub29wO1xuXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXG4gICAgICBjbHogKz0gJyBkbGctbm8tdGl0bGUnO1xuICAgIGVsc2VcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xuXG4gICAgY29udGVudC5jbGF6eiA9IGNsejtcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coY29udGVudCk7XG4gIH1cblxuICBNb2RhbERpYWxvZy5jb25maXJtID0gZnVuY3Rpb24oY29udGVudCxzdXJlRm4sdGl0bGUsYnRUZXh0MSxidFRleHQyLGNhbmNlbEZuLGNscyl7XG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcblxuICAgIGNseiArPSAnIGNvbmZpcm0tZGlhbG9nJztcblxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XG4gICAgICBjb250ZW50ID0gdXRpbHMuY3JlYXRlUGFyYW1zKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOnN1cmVGbixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGxiYWNrOmNhbmNlbEZuLFxuICAgICAgICAgICAgICAgICAgc3VyZVN0cjogYnRUZXh0MixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFN0cjpidFRleHQxXG4gICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZighY29udGVudC50aXRsZSlcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XG4gICAgZWxzZVxuICAgICAgY2x6ICs9ICcgZGxnLWhhcy10aXRsZSc7XG5cbiAgICBjb250ZW50Lm9rQ2FsbGJhY2sgPSBjb250ZW50Lm9rQ2FsbGJhY2sgfHwgbm9vcDtcbiAgICBjb250ZW50LmNhbmNlbENhbGxiYWNrID0gY29udGVudC5jYW5jZWxDYWxsYmFjayB8fCBub29wO1xuICAgIGNvbnRlbnQuY2xhenogPSBjbHo7XG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nKGNvbnRlbnQpO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XG4gICAgYWZ0ZXJMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIGFmdGVyTGlzdGVuZXJzID0gYWZ0ZXJMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcbiAgICAgIH0pXG4gICAgfVxuICB9O1xuXG4gIE1vZGFsRGlhbG9nLnByZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xuICAgIGJlZm9yZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgYmVmb3JlTGlzdGVuZXJzID0gYmVmb3JlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XG4gICAgICB9KVxuICAgIH1cbiAgfTtcblxuICBNb2RhbERpYWxvZy5jbG9zZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcbiAgICBjbG9zZWRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IGNsb3NlZExpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgIHJldHVybiBpdGVtICE9IGxpc3RlbmVyO1xuICAgICAgfSlcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9wbHVnaW5zID0gW107XG5cbiAgTW9kYWxEaWFsb2cuYWRkUGx1Z2luID0gZnVuY3Rpb24oZm4pe1xuICAgIF9wbHVnaW5zLnB1c2goZm4pO1xuICB9O1xuXG4gIE1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcgPSB7fTtcbiAgdmFyIGlzQ29uZmlnID0gZmFsc2U7XG5cbiAgTW9kYWxEaWFsb2cuY29uZmlnID0gZnVuY3Rpb24oY29uZmlnKXtcbiAgICB2YXIgb3B0aW9ucyA9IHV0aWxzLmFzc2lnbih7fSxNb2RhbERpYWxvZy5kZWZhdWx0Q29uZmlnLGNvbmZpZyk7XG5cbiAgICBNb2RhbERpYWxvZy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBpZihpc0NvbmZpZyl7XG4gICAgICBjb25zb2xlLmluZm8oJ21vZGFsZGlhbGcgb25seSBjYW4gY29uZmlnIG9uY2UnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IodmFyIGk9MCwgbGVuPV9wbHVnaW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIF9wbHVnaW5zW2ldKE1vZGFsRGlhbG9nLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpbnNlcnRTdHlsZVRvSGVhZChvcHRpb25zLmJhc2VGb250U2l6ZSB8fCAxNik7XG5cbiAgICBpc0NvbmZpZyA9IHRydWU7XG4gIH1cblxuICB1dGlscy5iaW5kRXZlbnQod2luZG93LCBcIm9yaWVudGF0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXtcbiAgICBPYmplY3Qua2V5cyhNb2RhbERpYWxvZy5kaWFsb2dMaXN0KS5mb3JFYWNoKGRpYWxvZz0+e1xuICAgICAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdFtkaWFsb2ddLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdCA9IHt9O1xuICBNb2RhbERpYWxvZy5tb2RhbENvdW50ID0gMDtcblxuTW9kYWxEaWFsb2cuRG9tVXRpbHMgPSB1dGlscztcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbERpYWxvZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIucmMtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xcbn1cXG4ucmMtbW9kYWwgLm1vZGFsLWRpYWxvZyB7XFxuICBib3JkZXItcmFkaXVzOiAkZm4ucmVtKCAxcHggKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHotaW5kZXg6IDkwMDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1uby10aXRsZSBoZWFkZXIge1xcbiAgaGVpZ2h0OiAkZm4ucmVtKCAyOHB4ICk7XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLW5vLXRpdGxlIC5kaWFsb2ctY29udGVudCB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLm1vZGFsLWRpYWxvZy5kbGctbm8tdGl0bGUgc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1oYXMtdGl0bGUgaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDAgMCAkZm4ucmVtKCAxMHB4ICkgMDtcXG4gIGZvbnQtc2l6ZTogJGZuLnJlbSggMThweCApO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBzZWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZGlhbG9nLW1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogOTAwMDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBmb250LXNpemU6ICRmbi5yZW0oIDE2cHggKTtcXG4gIGJvcmRlci1yYWRpdXM6ICRmbi5yZW0oIDNweCApO1xcbiAgcGFkZGluZy10b3A6ICRmbi5yZW0oIDI4cHggKTtcXG59XFxuLm1vZGFsLWRpYWxvZyAuZGlhbG9nLXRpdGxlIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5kaWFsb2ctY29udGVudCB7XFxuICBjb2xvcjogIzMyMzIzMjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcbi5tb2RhbC1kaWFsb2cgZW0ge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4ubW9kYWwtZGlhbG9nIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogMHB4ICRmbi5yZW0oIDI2cHggKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LWhlaWdodDogJGZuLnJlbSggMTg4cHggKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IHNvbGlkICNkNWQ1ZDU7XFxuICBib3JkZXItdG9wLXdpZHRoOiAkZm4ucmVtKCAxcHggKTtcXG4gIGhlaWdodDogJGZuLnJlbSggNDVweCApO1xcbiAgbGluZS1oZWlnaHQ6ICRmbi5yZW0oIDQ1cHggKTtcXG4gIG1hcmdpbi10b3A6ICRmbi5yZW0oIDIwcHggKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIGJ1dHRvbiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6ICRmbi5yZW0oIDE2cHggKTtcXG4gIGhlaWdodDogJGZuLnJlbSggNDVweCApO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b24ubW9kYWwtZGlhbG9nLW9uZWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjZDVkNWQ1O1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAkZm4ucmVtKCAxcHggKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogMHB4O1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b24ubGFzdDphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuc3VyZS1idG4sXFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLmNhbmNsZS1idG4ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuY2FuY2xlLWJ0biB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgLnN1cmUtYnRuIHtcXG4gIGNvbG9yOiAjNTE3YmQxO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBmb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmFsZXJ0LWRpYWxvZyBmb290ZXIgLnN1cmUtYnRuIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5kaWFsb2ctbWFzayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDg5OTk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQVFNQUFBQzMvRjMrQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFOUVRGUkZBQUFBcDNvOTJnQUFBQUYwVWs1VGdLMWVXMFlBQUFBTFNVUkJWQWpYWTJEQUJ3QUFIZ0FCYm9WSE1nQUFBQUJKUlU1RXJrSmdnZz09KTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvYmFzZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUh0bWxEb206IChmdW5jdGlvbiBjcmVhdGVIdG1sKCl7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGh0bWwpe1xuICAgICAgdmFyIHRlbXA7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgIHRlbXAgPSBkaXYuY2hpbGRyZW5bMF07XG4gICAgICBkaXYucmVtb3ZlQ2hpbGQodGVtcCk7XG4gICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG4gIH0pKCksXG4gIHJlcGxhY2VUZW1sYXRlOiBmdW5jdGlvbihzdHIsZGF0YSl7XG4gICAgdmFyIHJlZ3ggPSBuZXcgUmVnRXhwKC97KC4qPyl9L2cpLFxuICAgICAgICB0ZW1wO1xuICAgIHdoaWxlKHRlbXAgPSByZWd4LmV4ZWMoc3RyKSl7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSh0ZW1wWzBdLGRhdGFbdGVtcFsxXV0gfHwgJycpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHJcXG5dKi9nLCcnKTtcbiAgfSxcbiAgZm5UZW1wbGF0ZTogZnVuY3Rpb24oc3RyLCBkYXRhKXtcbiAgICB2YXIgcmVneCA9IG5ldyBSZWdFeHAoL1xcJGZuXFwuKC4rPylcXCgoLio/KVxcKS9nKTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZShyZWd4LCBmdW5jdGlvbihleHByLCBmbiwgdmFsKXtcbiAgICAgIHJldHVybiBkYXRhW2ZuXSh2YWwpO1xuICAgIH0pLnJlcGxhY2UoL1tcXHJcXG5dKi9nLCcnKTs7XG5cbiAgfSxcbiAgYmluZEV2ZW50OiBmdW5jdGlvbihkb20sbmFtZSxmbil7XG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXJcbiAgICAgID8gZG9tLmFkZEV2ZW50TGlzdGVuZXIobmFtZSxmbixmYWxzZSlcbiAgICAgIDogZG9tLmF0dGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmbik7XG4gIH0sXG4gIHVuQmluZEV2ZW50OiBmdW5jdGlvbihkb20sbmFtZSxmbil7XG4gICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgID8gZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSxmbixmYWxzZSlcbiAgICAgIDogZG9tLmRldGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmbik7XG4gIH0sXG4gIGdldFVybFBhcmFtOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBrZXkgKyBcIj0oW14mXSopKCZ8JClcIiwgXCJpXCIpO1xuICAgICAgdmFyIHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5tYXRjaChyZWcpO1xuICAgICAgaWYgKHIgIT0gbnVsbCkgcmV0dXJuIGRlY29kZVVSSShyWzJdKTtcbiAgICAgIHJldHVybiBudWxsO1xuICB9LFxuICBhc3NpZ246IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRlbXAgPSBhcmd1bWVudHNbMF07XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgZm9yKHZhciBpPTAsbGVuPWFyZ3MubGVuZ3RoO2k8bGVuO2krKyl7XG4gICAgICB2YXIgaXRlbSA9IGFyZ3NbaV07XG4gICAgICBpZighaXRlbSlcbiAgICAgICAgY29udGludWU7XG4gICAgICBmb3IodmFyIHAgaW4gaXRlbSl7XG4gICAgICAgIGlmKGl0ZW0uaGFzT3duUHJvcGVydHkocCkpe1xuICAgICAgICAgIHRlbXBbcF0gPSBpdGVtW3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZW1wO1xuICB9LFxuICBjbG9zZXN0OiBmdW5jdGlvbihkb20sY2xzKXtcbiAgICB2YXIgY2xzUmVneCA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKyknKyBjbHMgKyAnKFxcXFxzK3wkKScpLFxuICAgICAgICB0YWdSZWd4ID0gbmV3IFJlZ0V4cCgnXicrIGNscyArICckJyksXG4gICAgICAgIHBhcmVudCA9IGRvbTtcblxuICAgIGlmKHRlc3QoZG9tKSlcbiAgICAgIHJldHVybiBkb207XG5cbiAgICB3aGlsZSghIShwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkgJiYgIHBhcmVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdodG1sJyl7XG4gICAgICBpZih0ZXN0KHBhcmVudCkpe1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHRlc3QoZG9tKXtcblxuICAgICAgaWYoISFkb20uY2xhc3NOYW1lLm1hdGNoKGNsc1JlZ3gpKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9ZWxzZSBpZih0YWdSZWd4LnRlc3QoZG9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjcmVhdGVQYXJhbXM6IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICB2YXIgcmVzID0ge307XG5cbiAgICBmb3IodmFyIHAgaW4gcGFyYW0pe1xuICAgICAgaWYocGFyYW0uaGFzT3duUHJvcGVydHkocCkpe1xuICAgICAgICBpZih0eXBlb2YgcGFyYW1bcF0gIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgIHJlc1twXSA9IHBhcmFtW3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZG9tLmpzIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi9kb20uanMnKTtcblxuZnVuY3Rpb24gZ2V0SGVpZ2h0KHNlbCxpc091dGVyKXtcbiAgdmFyIHNlY3Rpb25TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoc2VsKSxcbiAgICAgIG1hcmdpbkggPSAwO1xuXG4gIGlmKGlzT3V0ZXIpe1xuICAgIG1hcmdpbkggPSBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpLnJlcGxhY2UoJ3B4JywnJykqMSArXG4gICAgICAgICAgICAgIHNlY3Rpb25TdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykucmVwbGFjZSgncHgnLCcnKSoxXG4gIH1cbiAgcmV0dXJuIChcbiAgICAgICAgICBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxICtcbiAgICAgICAgICBzZWN0aW9uU3R5bGUucGFkZGluZ1RvcC5yZXBsYWNlKCdweCcsJycpKjEgK1xuICAgICAgICAgIHNlY3Rpb25TdHlsZS5wYWRkaW5nQm90dG9tLnJlcGxhY2UoJ3B4JywnJykqMSArXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmJvcmRlclRvcFdpZHRoLnJlcGxhY2UoJ3B4JywnJykqMSArXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmJvcmRlckJvdHRvbVdpZHRoLnJlcGxhY2UoJ3B4JywnJykqMSArXG4gICAgICAgICAgbWFyZ2luSFxuICAgICAgICApO1xufVxuXG52YXIgZWFzZSA9IHtcbiAgY2lyY3VsYXI6IHtcbiAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjEsIDAuNTcsIDAuMSwgMSknXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0VG91Y2g6IGZ1bmN0aW9uKGRpYWxvZyl7XG4gICAgdmFyIGRsZ0NvbnRlbnQgPSAgZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLFxuICAgICAgICBzZWN0aW9uID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKSxcbiAgICAgICAgc2Nyb2xsVGFyZ2VTdHlsZSA9IGRsZ0NvbnRlbnQuc3R5bGUsXG4gICAgICAgIHdyYXBwZXJIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24pLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMSxcbiAgICAgICAgbWF4SGVpZ2h0LCBzdGFydFBvc3gsIHN0YXJ0UG9zeSwgaXNUb3VjaCxcbiAgICAgICAgc3RhcnRUaW1lLCBkaXN0WSwgZGlzdFgsXG4gICAgICAgIGVuZFRpbWUgPSAwLCB4ID0wLCB5ID0wLCBzdGFydFgsIHN0YXJ0WSwgaXNJblRyYW5zaXRpb247XG5cbiAgICBtYXhIZWlnaHQgPSB3cmFwcGVySGVpZ2h0IC0gZ2V0SGVpZ2h0KGRsZ0NvbnRlbnQsdHJ1ZSk7XG5cbiAgICBzY3JvbGxUYXJnZVN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IGVhc2UuY2lyY3VsYXIuc3R5bGU7XG5cbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nLCd0b3VjaG1vdmUnLHN0b3BTY3JvbGxNb3ZlKTtcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nLCd0b3VjaHN0YXJ0JyxzdGFydFRvdWNoKTtcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nLCd0b3VjaGVuZCcsdG91Y2hlRW5kKTtcbiAgICB1dGlscy5iaW5kRXZlbnQoZGxnQ29udGVudCwndHJhbnNpdGlvbmVuZCcsX3RyYW5zaXRpb25FbmQpO1xuICAgIHV0aWxzLmJpbmRFdmVudChkbGdDb250ZW50LCd3ZWJraXRUcmFuc2l0aW9uRW5kJyxfdHJhbnNpdGlvbkVuZCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVzdHJveVNjcm9sbDogZnVuY3Rpb24oKXtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nLCd0b3VjaG1vdmUnLHN0b3BTY3JvbGxNb3ZlKTtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nLCd0b3VjaHN0YXJ0JyxzdGFydFRvdWNoKTtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nLCd0b3VjaGVuZCcsdG91Y2hlRW5kKTtcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnQ29udGVudCwndHJhbnNpdGlvbmVuZCcsX3RyYW5zaXRpb25FbmQpO1xuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkbGdDb250ZW50LCd3ZWJraXRUcmFuc2l0aW9uRW5kJyxfdHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIGRsZ0NvbnRlbnQgPSBzZWN0aW9uID0gbnVsbDtcbiAgICAgIH0sXG4gICAgICByZWZyZXNoOiBmdW5jdGlvbigpe1xuICAgICAgICB3cmFwcGVySGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsJycpKjE7XG4gICAgICAgIG1heEhlaWdodCA9IHdyYXBwZXJIZWlnaHQgLSBnZXRIZWlnaHQoZGxnQ29udGVudCx0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc3RhcnRUb3VjaChlKXtcbiAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXSxcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jbG9zZXN0KGUudGFyZ2V0LCdkaWFsb2ctY29udGVudCcpLFxuICAgICAgICAgIHBvcztcblxuICAgICAgaWYoISF0YXJnZXQpe1xuICAgICAgICBpZihpc0luVHJhbnNpdGlvbil7XG4gICAgICAgICAgX3RyYW5zaXRpb25UaW1lKCk7XG4gICAgICAgICAgaXNJblRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgICBwb3MgPSBnZXRDb21wdXRlZFBvc2l0aW9uKCk7XG4gICAgICAgICAgdHJhbnNsYXRlKE1hdGgucm91bmQocG9zLngpLCBNYXRoLnJvdW5kKHBvcy55KSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRQb3N4ID0gdG91Y2gucGFnZVg7XG4gICAgICAgIHN0YXJ0UG9zeSA9IHRvdWNoLnBhZ2VZO1xuICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBkaXN0WCA9IGRpc3RZID0gMDtcbiAgICAgICAgc3RhcnRYID0geDtcbiAgICAgICAgc3RhcnRZID0geTtcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaXNUb3VjaCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wU2Nyb2xsTW92ZShlKXtcbiAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXSxcbiAgICAgICAgICBwb3NYID0gdG91Y2gucGFnZVgsXG4gICAgICAgICAgcG9zWSA9IHRvdWNoLnBhZ2VZLFxuICAgICAgICAgIG5vZGVOYW1lID0gZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICB2YXIgZGVsdGFZID0gcG9zWSAtIHN0YXJ0UG9zeSxcbiAgICAgICAgICBkZWx0YVggPSBwb3NYIC0gc3RhcnRQb3N4LFxuICAgICAgICAgIG5ld1k7XG5cbiAgICAgIHN0YXJ0UG9zeCA9IHBvc1g7XG4gICAgICBzdGFydFBvc3kgPSBwb3NZO1xuXG4gICAgICBkaXN0WCArPSBkZWx0YVg7XG4gICAgICBkaXN0WSArPSBkZWx0YVk7XG5cbiAgICAgIGlmKCBub2RlTmFtZSAhPSAnaW5wdXQnICYmIG5vZGVOYW1lICE9ICdzZWxlY3QnICYmIG5vZGVOYW1lICE9ICd0ZXh0YXJlYScpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoICh0aW1lc3RhbXAgLSBlbmRUaW1lID4gMzAwICYmIE1hdGguYWJzKGRpc3RZKSA8IDEwKSB8fCAhaXNUb3VjaCB8fCBtYXhIZWlnaHQgPj0gMCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV3WSA9IHkgKyBkZWx0YVk7XG4gICAgICBpZiAoIG5ld1kgPiAwIHx8IG5ld1kgPCBtYXhIZWlnaHQgKSB7XG4gICAgICAgIG5ld1kgPSB5ICsgZGVsdGFZIC8gMztcbiAgICAgIH1cblxuICAgICAgdHJhbnNsYXRlKGRsZ0NvbnRlbnQsbmV3WSk7XG5cbiAgICAgIGlmICggdGltZXN0YW1wIC0gc3RhcnRUaW1lID4gMzAwICkge1xuICAgICAgICBzdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgIHN0YXJ0WCA9IHg7XG4gICAgICAgIHN0YXJ0WSA9IHk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvdWNoZUVuZChlKXtcbiAgICAgIHZhciBkdXJhdGlvbiA9IERhdGUubm93KCkgLSBzdGFydFRpbWUsXG4gICAgICAgICAgbmV3WSA9IE1hdGgucm91bmQoeSksXG4gICAgICAgICAgdGltZSA9IDAsXG4gICAgICAgICAgbW9tZW50dW1ZO1xuXG4gICAgICBzdGFydFBvc3ggPSBudWxsO1xuICAgICAgc3RhcnRQb3N5ID0gbnVsbDtcbiAgICAgIGVuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgaXNJblRyYW5zaXRpb24gPSAwO1xuXG4gICAgICBpZiAocmVzZXRQb3NpdGlvbihkbGdDb250ZW50LDUwMCkgfHwgbWF4SGVpZ2h0ID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzY3JvbGxUbyhkbGdDb250ZW50LCBuZXdZKTtcblxuICAgICAgaWYoZHVyYXRpb24gPCAzMDApe1xuICAgICAgICBtb21lbnR1bVkgPSBtb21lbnR1bSh5LCBzdGFydFksIGR1cmF0aW9uKTtcbiAgICAgICAgbmV3WSA9IG1vbWVudHVtWS5kZXN0aW5hdGlvbjtcbiAgICAgICAgdGltZSA9IG1vbWVudHVtWS5kdXJhdGlvbjtcbiAgICAgICAgaXNJblRyYW5zaXRpb24gPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoIG5ld1kgIT0geSApIHtcbiAgICAgICAgc2Nyb2xsVG8oZGxnQ29udGVudCwgbmV3WSx0aW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0LHBvc3ksdGltZSl7XG4gICAgICB0aW1lID0gdGltZSB8fCAwO1xuICAgICAgaXNJblRyYW5zaXRpb24gPSB0aW1lID4gMDtcbiAgICAgIF90cmFuc2l0aW9uVGltZSh0aW1lKTtcbiAgICAgIHRyYW5zbGF0ZSh0YXJnZXQscG9zeSlcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKHRhcmdldCwgcG9zeSkge1xuICAgICAgc2Nyb2xsVGFyZ2VTdHlsZS53ZWJraXRUcmFuc2Zvcm0gID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgcG9zeSArICdweCwwcHgpJztcbiAgICAgIHkgPSBwb3N5O1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldFBvc2l0aW9uKHRhcmdldCx0aW1lKXtcbiAgICAgIHZhciBwb3NZID0geTtcblxuICAgICAgdGltZSA9IHRpbWUgfHwgMDtcblxuICAgICAgaWYgKHBvc1kgPj0gMCApIHtcbiAgICAgICAgcG9zWSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHBvc1kgPCBtYXhIZWlnaHQgKSB7XG4gICAgICAgIHBvc1kgPSBtYXhIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICggcG9zWSA9PSB5ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNjcm9sbFRvKHRhcmdldCwgcG9zWSwgdGltZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb21lbnR1bShjdXJyZW50LCBzdGFydCwgdGltZSl7XG4gICAgICB2YXIgZGlzdGFuY2UgPSBjdXJyZW50IC0gc3RhcnQsXG4gICAgICAgICAgc3BlZWQgPSBNYXRoLmFicyhkaXN0YW5jZSkgLyB0aW1lLFxuICAgICAgICAgIGRlY2VsZXJhdGlvbiA9IDAuMDAwNixcbiAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICBkdXJhdGlvbjtcblxuICAgICAgZGVzdGluYXRpb24gPSBjdXJyZW50ICsgKCBzcGVlZCAqIHNwZWVkICkgLyAoIDIgKiBkZWNlbGVyYXRpb24gKSAqICggZGlzdGFuY2UgPCAwID8gLTEgOiAxICk7IC8vIHM9KGF0XjIpLzJcbiAgICAgIGR1cmF0aW9uID0gc3BlZWQgLyBkZWNlbGVyYXRpb247IC8vIHY9YXRcblxuICAgICAgaWYgKCBkZXN0aW5hdGlvbiA8IG1heEhlaWdodCApIHtcbiAgICAgICAgZGVzdGluYXRpb24gPSBtYXhIZWlnaHQgLSAoIHdyYXBwZXJIZWlnaHQgLyAyLjUgKiAoIHNwZWVkIC8gOCApICk7XG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoZGVzdGluYXRpb24gLSBjdXJyZW50KTtcbiAgICAgICAgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xuICAgICAgfWVsc2UgaWYoZGVzdGluYXRpb24gPiAwKXtcbiAgICAgICAgZGVzdGluYXRpb24gPSB3cmFwcGVySGVpZ2h0IC8gMi41ICogKCBzcGVlZCAvIDggKTtcbiAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhjdXJyZW50KSArIGRlc3RpbmF0aW9uO1xuICAgICAgICBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBNYXRoLnJvdW5kKGRlc3RpbmF0aW9uKSxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbXB1dGVkUG9zaXRpb24oKSB7XG4gICAgICB2YXIgbWF0cml4ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGxnQ29udGVudCwgbnVsbCksXG4gICAgICAgIHgsIHk7XG5cbiAgICAgIG1hdHJpeCA9IG1hdHJpeC53ZWJraXRUcmFuc2Zvcm0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCAnKTtcbiAgICAgIHggPSArKG1hdHJpeFsxMl0gfHwgbWF0cml4WzRdKTtcbiAgICAgIHkgPSArKG1hdHJpeFsxM10gfHwgbWF0cml4WzVdKTtcblxuICAgICAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF90cmFuc2l0aW9uVGltZSh0aW1lKXtcbiAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XG4gICAgICBzY3JvbGxUYXJnZVN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRpbWUgKyAnbXMnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfdHJhbnNpdGlvbkVuZCgpe1xuICAgICAgaWYoIWlzSW5UcmFuc2l0aW9uKVxuICAgICAgICByZXR1cm47XG4gICAgICBfdHJhbnNpdGlvblRpbWUoKTtcbiAgICAgIGlmKCFyZXNldFBvc2l0aW9uKGRsZ0NvbnRlbnQpKXtcbiAgICAgICAgaXNJblRyYW5zaXRpb24gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGxnc2Nyb2xsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==