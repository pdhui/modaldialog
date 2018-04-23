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

	module.exports = __webpack_require__(2);


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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2YmI3M2U1ZmE5OTA5NjQ3MDA0YSIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGxnc2Nyb2xsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFJLFVBQVUsb0JBQVEsQ0FBUixDQUFkOztBQUVBLEtBQUksUUFBUSxvQkFBUSxDQUFSLENBQVo7QUFDQSxLQUFJLFlBQVksb0JBQVEsQ0FBUixDQUFoQjtBQUNBLEtBQUksSUFBSTtBQUNOLFdBQVEsTUFBTTtBQURSLEVBQVI7S0FFRyxJQUZIO0tBRVMsSUFGVDs7QUFJQSxVQUFTLElBQVQsR0FBZSxDQUFFOzs7QUFHakIsVUFBUyxpQkFBVCxDQUEyQixZQUEzQixFQUF3QztBQUN0QyxPQUFJLFFBQVEsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVo7O0FBRUEsU0FBTSxTQUFOLEdBQWtCLE1BQU0sVUFBTixDQUNoQixPQURnQixFQUVoQjtBQUNFLFVBQUssYUFBUyxFQUFULEVBQVk7QUFDZixjQUFPLEdBQUcsT0FBSCxDQUFXLFNBQVgsRUFBcUIsVUFBUyxJQUFULEVBQWUsR0FBZixFQUFt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LEtBQWMsT0FBTyxDQUFQLENBQWhCLENBQUo7QUFDQSxXQUFJLEVBQUUsT0FBTyxFQUFQLEtBQWMsT0FBTyxDQUFQLENBQWhCLENBQUo7O0FBRUEsY0FBTyxFQUFFLEdBQUcsQ0FBTCxFQUFRLEdBQUcsQ0FBWCxFQUFQO0FBQ0Q7O0FBRUQsY0FBUyxlQUFULENBQXlCLElBQXpCLEVBQThCO0FBQzVCLGNBQU8sUUFBUSxDQUFmO0FBQ0Esd0JBQWlCLGtCQUFqQixHQUFzQyxPQUFPLElBQTdDO0FBQ0Q7QUFDRCxjQUFTLGNBQVQsR0FBeUI7QUFDdkIsV0FBRyxDQUFDLGNBQUosRUFDRTtBQUNGO0FBQ0EsV0FBRyxDQUFDLGNBQWMsVUFBZCxDQUFKLEVBQThCO0FBQzVCLDBCQUFpQixDQUFqQjtBQUNEO0FBQ0Y7QUFDRjtBQTlNYyxFQUFqQixDIiwiZmlsZSI6ImNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwZERpYWxvZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwZERpYWxvZ1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNmJiNzNlNWZhOTkwOTY0NzAwNGFcbiAqKi8iLCJ2YXIgYmFzZUNzcyA9IHJlcXVpcmUoJy4vY3NzL2Jhc2UubGVzcycpO1xyXG5cclxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi9kb20uanMnKTtcclxudmFyIHNjcm9sbERsZyA9IHJlcXVpcmUoJy4vZGxnc2Nyb2xsLmpzJyk7XHJcbnZhciBfID0ge1xyXG4gIGFzc2lnbjogdXRpbHMuYXNzaWduXHJcbn0sIHdpbkgsIHdpblc7XHJcblxyXG5mdW5jdGlvbiBub29wKCl7fVxyXG5cclxuLy/liqjmgIHmj5LlhaVjc3PmoLflvI9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVUb0hlYWQoYmFzZUZvbnRTaXplKXtcclxuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG5cclxuICBzdHlsZS5pbm5lckhUTUwgPSB1dGlscy5mblRlbXBsYXRlKFxyXG4gICAgYmFzZUNzcyxcclxuICAgIHtcclxuICAgICAgcmVtOiBmdW5jdGlvbihweCl7XHJcbiAgICAgICAgcmV0dXJuIHB4LnJlcGxhY2UoLyhcXGQrKXB4LyxmdW5jdGlvbihleHByLCB2YWwpe1xyXG4gICAgICAgICAgcmV0dXJuICh2YWwgKjEgLyBiYXNlRm9udFNpemUpICsgJ3JlbSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIHZhciBoZWFkRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xyXG4gIHZhciBmaXJzdExpbmsgPSBoZWFkRG9tLnF1ZXJ5U2VsZWN0b3IoJ2xpbmsnKTtcclxuXHJcbiAgaWYoIWZpcnN0TGluaylcclxuICAgIGhlYWREb20uYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gIGVsc2VcclxuICAgIGhlYWREb20uaW5zZXJ0QmVmb3JlKHN0eWxlLCBmaXJzdExpbmspO1xyXG5cclxufVxyXG5cclxuLypcclxu55Sf5oiQ5a+56K+d5qGG5qih5p2/5YaF5a65XHJcbiAqL1xyXG4gIGZ1bmN0aW9uIGdldEh0bWxDb250ZW50KG9wdGlvbnMpe1xyXG4gICAgdmFyIHRlbXBsYXRlSHRtbCA9IFtdLFxyXG4gICAgICAgIGhlYWRlciA9IG9wdGlvbnMuaGVhZGVyO1xyXG5cclxuICAgIHRlbXBsYXRlSHRtbC5wdXNoKCc8ZGl2IGNsYXNzPVwicmMtbW9kYWxcIj48ZGl2IGNsYXNzPVwiZGlhbG9nLW1hc2tcIj48L2Rpdj48ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nICcgKyBvcHRpb25zLmNsYXp6ICsgJ1wiPjxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2ctbWFpblwiPicpO1xyXG4gICAgaWYob3B0aW9ucy50aXRsZSAhPSBudWxsICYmIG9wdGlvbnMudGl0bGUgIT0gJycpe1xyXG4gICAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPGhlYWRlcj4nICsgdXRpbHMucmVwbGFjZVRlbWxhdGUoaGVhZGVyLG9wdGlvbnMpICsgJzwvaGVhZGVyPicpO1xyXG4gICAgfVxyXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxzZWN0aW9uPjxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiPjwvZGl2Pjwvc2VjdGlvbj48Zm9vdGVyPicpO1xyXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goY3JlYXRlQnV0dG9ucy5jYWxsKHRoaXMsb3B0aW9ucykpO1xyXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgIHJldHVybiB0ZW1wbGF0ZUh0bWwuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNpemVXaW4oKXtcclxuICAgIHdpbkggPSB3aW5kb3cuaW5uZXJIZWlnaHQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuICAgIHdpblcgPSB3aW5kb3cuaW5uZXJXaWR0aCA/IHdpbmRvdy5pbm5lcldpZHRoIDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICB9XHJcbiAgLy8gdXRpbHMuYmluZEV2ZW50KHdpbmRvdywncmVzaXplJyxyZXNpemVXaW4pO1xyXG4vL1RPRE86XHJcbiAgLy8gcmVzaXplV2luKCk7XHJcbiAgLypcclxuICDliJvlu7rlupXpg6jmjInpkq5cclxuICAgKi9cclxuICBmdW5jdGlvbiBjcmVhdGVCdXR0b25zKG9wdGlvbnMpe1xyXG4gICAgdmFyIGJ0bnMgPSBvcHRpb25zLmJ1dHRvbnMgfHwgW10sXHJcbiAgICAgICAgdGVtcGxhdGUgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ7Y2xzfVwiIGRhdGEtaWQ9XCJ7aWR9XCIgPntuYW1lfTwvYnV0dG9uPicsXHJcbiAgICAgICAgYnRuVG1wbHMgPSAnJyxcclxuICAgICAgICBzZWxmID0gdGhpcyxcclxuICAgICAgICBvbmVCdG5DbHo9Jyc7XHJcblxyXG4gICAgaWYob3B0aW9ucy5jYW5jZWxDYWxsYmFjayl7XHJcbiAgICAgIGJ0bnMucHVzaCh7XHJcbiAgICAgICAgaWQ6ICdjYW5jZWwnLFxyXG4gICAgICAgIG5hbWU6IG9wdGlvbnMuY2FuY2VsU3RyLFxyXG4gICAgICAgIGNhbGxiYWNrOiBvcHRpb25zLmNhbmNlbENhbGxiYWNrLFxyXG4gICAgICAgIGNsczogXCJjYW5jbGUtYnRuXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYnRucy5sZW5ndGggPT0wKVxyXG4gICAgICBvbmVCdG5DbHogPSAnIG1vZGFsLWRpYWxvZy1vbmVidG4nO1xyXG5cclxuICAgIGlmKG9wdGlvbnMub2tDYWxsYmFjayl7XHJcbiAgICAgIGJ0bnMucHVzaCh7XHJcbiAgICAgICAgaWQ6ICdvaycsXHJcbiAgICAgICAgbmFtZTogb3B0aW9ucy5zdXJlU3RyLFxyXG4gICAgICAgIGNhbGxiYWNrOiBvcHRpb25zLm9rQ2FsbGJhY2ssXHJcbiAgICAgICAgY2xzOiBcInN1cmUtYnRuXCIgKyBvbmVCdG5DbHpcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKVxyXG4gICAgICBidG5zID0gYnRucy5yZXZlcnNlKCk7XHJcblxyXG4gICAgYnRucy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0saW5kZXgpe1xyXG4gICAgICBpZigoYnRucy5sZW5ndGggLSAxKSA9PSBpbmRleClcclxuICAgICAgICBpdGVtLmNscyArPSAnIGxhc3QnO1xyXG4gICAgICBidG5UbXBscyArPSB1dGlscy5yZXBsYWNlVGVtbGF0ZSh0ZW1wbGF0ZSxpdGVtKTtcclxuICAgICAgc2VsZi5jYWxsYmFja3NbaXRlbS5pZF0gPSBpdGVtLmNhbGxiYWNrO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJ0blRtcGxzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChkb20sb3B0aW9ucyl7XHJcbiAgICAgIGlmKG9wdGlvbnMuc2VsZWN0b3Ipe1xyXG4gICAgICAgIHZhciBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcImRpYWxvZy10YXJnZXQgcmVwbGFjZVwiKSxcclxuICAgICAgICAgICAgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yLFxyXG4gICAgICAgICAgICBvcmlEaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWxlY3RvcikuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpO1xyXG5cclxuICAgICAgICBpZihzZWxlY3Rvci5wYXJlbnROb2RlKXtcclxuICAgICAgICAgIHNlbGVjdG9yLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbW1lbnQsc2VsZWN0b3IpO1xyXG4gICAgICAgICAgZG9tLl9jb21tZW50RG9tID0gY29tbWVudDtcclxuICAgICAgICAgIGlmKG9yaURpc3BsYXkgPT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkb20uX29yaWdpbkRpc3BsYXkgPSBvcmlEaXNwbGF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLmFwcGVuZENoaWxkKHNlbGVjdG9yKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgZG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLmlubmVySFRNTCA9IG9wdGlvbnMuY29udGVudC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnPGJyLz4nKTtcclxuICAgIH1cclxuLyoqXHJcbiAqIFtNb2RhbERpYWxvZyBkZXNjcmlwdGlvbl1cclxuICogY2xheno6IOW8ueWHuuahhueahGNzc+exu+WQjVxyXG4gKiBjYW5jZWxTdHIg5Y+W5raI5oyJ6ZKu55qE5oyJ6ZKu5ZCNXHJcbiAqIHN1cmVTdHIg56Gu5a6a5oyJ6ZKu55qE5oyJ6ZKu5ZCNXHJcbiAqIHRpdGxlIOW8ueWHuuahhueahOagh+mimFxyXG4gKiBoZWFkZXIg6KGo56S65aS06YOo55qEaHRtbOaooeadv1xyXG4gKiBva0NhbGxiYWNrIOehruWumuaMiemSruWbnuiwg+WHveaVsFxyXG4gKiBjYW5jZWxDYWxsYmFjayDlj5bmtojmjInpkq7lm57osIPlh73mlbBcclxuICogYnV0dG9ucyBbe2Nsczonc3VyZScsY2FsbGJhY2s6Zm4sbmFtZTonbmFtZSd9XVxyXG4gKiB1c2VCYWNrZ3JvdW5kIOWNleWHu+iDjOaZr+aXtuaJp+ihjOeahOWbnuiwg+WHveaVsFxyXG4gKi9cclxuICB2YXIgZGVmYXVsdFNldHRpbmdzID0ge1xyXG4gICAgICAgIGNsYXp6OiAnZGlhbG9nLXRoZW1lJyxcclxuICAgICAgICBjYW5jZWxTdHI6ICflj5bmtognLFxyXG4gICAgICAgIHN1cmVTdHI6ICfnoa7lrponLFxyXG4gICAgICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+e3RpdGxlfTwvc3Bhbj4nLFxyXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcclxuICAgICAgICBidXR0b25zOiBudWxsLFxyXG4gICAgICAgIHVzZUJhY2tncm91bmQ6ICdjYW5jZWwnLFxyXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBiZWZvcmVMaXN0ZW5lcnMgPSBbXSxcclxuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBbXSxcclxuICAgICAgY2xvc2VkTGlzdGVuZXJzID0gW10sXHJcbiAgICAgIF9jb3VudCA9IDA7XHJcblxyXG4gIHZhciBNb2RhbERpYWxvZyA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgdmFyIGRpYWxvZyxcclxuICAgICAgICBpZDtcclxuXHJcbiAgICBvcHRpb25zID0gXy5hc3NpZ24oe30sZGVmYXVsdFNldHRpbmdzLG9wdGlvbnMpO1xyXG5cclxuICAgIG9wdGlvbnMuX2NhbGxCYWNrcyA9IG9wdGlvbnMuX2NhbGxCYWNrcyB8fCB7fTtcclxuICAgIGlkID0gb3B0aW9ucy5pZCA9IG9wdGlvbnMuaWQgfHwgX2NvdW50O1xyXG5cclxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIG9wdGlvbnMuX2NhbGxCYWNrc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJlZm9yZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgICAgbGlzdGVuZXIob3B0aW9ucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W2lkXSA9IGRpYWxvZyA9IG5ldyBNb2RhbERpYWxvZy5jcmVhdGUob3B0aW9ucyk7XHJcblxyXG4gICAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCArKztcclxuXHJcbiAgICBhZnRlckxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgICAgbGlzdGVuZXIoZGlhbG9nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9jb3VudCArKztcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgdmFyIGRpYWxvZ0RvbSxcclxuICAgICAgICBkbGdQb3MsXHJcbiAgICAgICAgZGxnTWFpbkRvbSxcclxuICAgICAgICBvZmZzZXRIO1xyXG5cclxuICAgIHRoaXMuY2FsbGJhY2tzID0gb3B0aW9ucy5fY2FsbEJhY2tzO1xyXG4gICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XHJcblxyXG4gICAgZGlhbG9nRG9tID0gdXRpbHMuY3JlYXRlSHRtbERvbShnZXRIdG1sQ29udGVudC5jYWxsKHRoaXMsb3B0aW9ucykpO1xyXG5cclxuICAgIGluc2VydENvbnRlbnQoZGlhbG9nRG9tLG9wdGlvbnMpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dEb20pO1xyXG5cclxuICAgIG9mZnNldEggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuZGxnU2Nyb2xsID0gc2Nyb2xsRGxnLmluaXRUb3VjaChkaWFsb2dEb20pO1xyXG5cclxuICAgIGRsZ01haW5Eb20gPSBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZycpO1xyXG4gICAgZGxnUG9zID0gdGhpcy5nZXRQb3MoZGxnTWFpbkRvbSk7XHJcblxyXG4gICAgXy5hc3NpZ24oZGxnTWFpbkRvbS5zdHlsZSx7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIGxlZnQ6IGRsZ1Bvcy5sZWZ0ICsgJ3B4JyxcclxuICAgICAgdG9wOiBkbGdQb3MudG9wICsgJ3B4J1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYob3B0aW9ucy5hbmltYXRlZClcclxuICAgICAgZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2ctbWFpbicpLmNsYXNzTmFtZSArPSAnIGRsZy1hbmltYXRpb24nO1xyXG5cclxuICAgIGlmKG9wdGlvbnMudXNlQmFja2dyb3VuZCl7XHJcbiAgICAgIHZhciB1c2VyYmdyID0gb3B0aW9ucy51c2VCYWNrZ3JvdW5kO1xyXG4gICAgICBpZighb3B0aW9ucy5fY2FsbEJhY2tzW3VzZXJiZ3JdKXtcclxuICAgICAgICBvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0gPSBmdW5jdGlvbigpe307XHJcbiAgICAgIH1cclxuICAgICAgZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctbWFzaycpLmRhdGFzZXQuaWQgPSBvcHRpb25zLnVzZUJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctbWFzaycpLnN0eWxlLmhlaWdodCA9IG9mZnNldEggKyAncHgnO1xyXG5cclxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSB0aGlzLnByb3h5KHRoaXMuX2NsaWNrRXZlbnQsZGlhbG9nRG9tLG9wdGlvbnMpO1xyXG4gICAgdGhpcy5kaWFsb2dEb20gPSBkaWFsb2dEb207XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZ0RvbSwnY2xpY2snLHRoaXMuX2V2ZW50TGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcbiAgXy5hc3NpZ24oTW9kYWxEaWFsb2cuY3JlYXRlLnByb3RvdHlwZSx7XHJcbiAgICBjYWxsYmFja3M6IG51bGwsXHJcbiAgICBnZXRQb3M6IGZ1bmN0aW9uKGRpYWxvZ0RvbSl7XHJcbiAgICAgIGRpYWxvZ0RvbSA9IGRpYWxvZ0RvbSB8fCB0aGlzLmRpYWxvZ0RvbTtcclxuICAgICAgaWYoIWRpYWxvZ0RvbSl7XHJcbiAgICAgICAgcmV0dXJuIHtsZWZ0OjAsdG9wOjB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJlc2l6ZVdpbigpO1xyXG4gICAgICB2YXIgZGxnSCA9IGRpYWxvZ0RvbS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHZhciBkbGdXID0gZGlhbG9nRG9tLm9mZnNldFdpZHRoO1xyXG4gICAgICB2YXIgZGxnUG9zWSA9ICh3aW5IIC0gZGxnSCA+PSAwICkgPyAod2luSCAtIGRsZ0gpLzIgOiB3aW5IKjAuMTtcclxuICAgICAgdmFyIGRsZ1Bvc1ggPSAod2luVyAtIGRsZ1cgPj0gMCApID8gKHdpblcgLSBkbGdXKS8yIDogd2luVyowLjE7XHJcblxyXG4gICAgICByZXR1cm4ge2xlZnQ6IGRsZ1Bvc1gsIHRvcDogZGxnUG9zWX07XHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2c6ZnVuY3Rpb24oaXNOb3RJbnZva2Upe1xyXG4gICAgICB2YXIgZGlhbG9nRG9tID0gdGhpcy5kaWFsb2dEb20sXHJcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgc2VsZWN0b3IsXHJcbiAgICAgICAgICBfY29tbWVudERvbSxcclxuICAgICAgICAgIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgaWYoIWRpYWxvZ0RvbSlcclxuICAgICAgICByZXR1cm4gMTtcclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlRGlhbG9nKGRpYWxvZ0RvbSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICBpZihvcHRpb25zLnNlbGVjdG9yICYmIGRpYWxvZ0RvbS5fY29tbWVudERvbSl7XHJcbiAgICAgICAgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yO1xyXG4gICAgICAgIF9jb21tZW50RG9tID0gZGlhbG9nRG9tLl9jb21tZW50RG9tO1xyXG5cclxuICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gZGlhbG9nRG9tLl9vcmlnaW5EaXNwbGF5O1xyXG4gICAgICAgIF9jb21tZW50RG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHNlbGVjdG9yLF9jb21tZW50RG9tKTtcclxuXHJcbiAgICAgICAgZGlhbG9nRG9tLl9jb21tZW50RG9tID0gbnVsbDtcclxuICAgICAgICBkaWFsb2dEb20uX29yaWdpbkRpc3BsYXkgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZ0RvbSwnY2xpY2snLHRoaXMuX2V2ZW50TGlzdGVuZXIpO1xyXG4gICAgICAvLyBkaWFsb2dEb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaWFsb2dEb20pO1xyXG4gICAgICB0aGlzLmRsZ1Njcm9sbC5kZXN0cm95U2Nyb2xsICYmIHRoaXMuZGxnU2Nyb2xsLmRlc3Ryb3lTY3JvbGwoKTtcclxuXHJcbiAgICAgIGlmKCFpc05vdEludm9rZSl7XHJcbiAgICAgICAgY2xvc2VkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgICAgICAgbGlzdGVuZXIoc2VsZik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmKG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2spXHJcbiAgICAgICAgICBvcHRpb25zLmNhbmNlbENhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICB0aGlzLmRpYWxvZ0RvbSA9IGRpYWxvZ0RvbSA9IG51bGw7XHJcblxyXG4gICAgICBvcHRpb25zLmNvbXBsZXRlICYmIG9wdGlvbnMuY29tcGxldGUoKTtcclxuXHJcbiAgICAgIGRlbGV0ZSBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W3RoaXMuaWRdO1xyXG5cclxuICAgICAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCAtLTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVEaWFsb2c6IGZ1bmN0aW9uKGRsZ0RvbSl7XHJcbiAgICAgIHV0aWxzLmJpbmRFdmVudChkbGdEb20sICd0cmFuc2l0aW9uZW5kJywgX3JlbW92ZVRyYW5zaXRpb24pXHJcbiAgICAgIHV0aWxzLmJpbmRFdmVudChkbGdEb20sJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBfcmVtb3ZlVHJhbnNpdGlvbik7XHJcblxyXG4gICAgICBkbGdEb20uc3R5bGUub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfcmVtb3ZlVHJhbnNpdGlvbigpe1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0RvbSwndHJhbnNpdGlvbmVuZCcsX3JlbW92ZVRyYW5zaXRpb24pO1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0RvbSwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3JlbW92ZVRyYW5zaXRpb24pO1xyXG4gICAgICAgIGRsZ0RvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRsZ0RvbSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWZyZXNoOiBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgZGlhbG9nRG9tID0gdGhpcy5kaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZycpLFxyXG4gICAgICAgICAgZGxnUG9zID0gdGhpcy5nZXRQb3MoZGlhbG9nRG9tKTtcclxuXHJcbiAgICAgIF8uYXNzaWduKGRpYWxvZ0RvbS5zdHlsZSx7XHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICBsZWZ0OiBkbGdQb3MubGVmdCArICdweCcsXHJcbiAgICAgICAgdG9wOiBkbGdQb3MudG9wICsgJ3B4J1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5kbGdTY3JvbGwucmVmcmVzaCgpO1xyXG4gICAgfSxcclxuICAgIF9jbGlja0V2ZW50OiBmdW5jdGlvbihlLGRpYWxvZ0RvbSxvcHRpb25zKXtcclxuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxyXG4gICAgICAgICAgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXHJcbiAgICAgICAgICBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIGlmKHR5cGVvZiB0aGlzLmNhbGxiYWNrc1tpZF0gPT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5jYWxsYmFja3NbaWRdLmNhbGwodGhpcyxlKSl7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgc2VsZi5jbG9zZURpYWxvZygpO1xyXG4gICAgICAgIC8vIH0sMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm94eTogZnVuY3Rpb24oZm4pe1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICB3cmFwQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgaWYod3JhcEFyZ3MubGVuZ3RoID4gMClcclxuICAgICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdCh3cmFwQXJncyk7XHJcblxyXG4gICAgICAgIGZuLmFwcGx5KHNlbGYsYXJncyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuYWxlcnQgPSBmdW5jdGlvbihjb250ZW50LHRpdGxlLGNhbGxiYWNrLGRvbSxjbHMpe1xyXG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcclxuXHJcbiAgICBjbHogKz0gJyBhbGVydC1kaWFsb2cnO1xyXG5cclxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XHJcbiAgICAgIGNvbnRlbnQgPSB1dGlscy5jcmVhdGVQYXJhbXMoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgIG9rQ2FsbGJhY2s6Y2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBkb21cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudC5va0NhbGxiYWNrID0gY29udGVudC5va0NhbGxiYWNrIHx8IG5vb3A7XHJcblxyXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXHJcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XHJcbiAgICBlbHNlXHJcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xyXG5cclxuICAgIGNvbnRlbnQuY2xhenogPSBjbHo7XHJcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBNb2RhbERpYWxvZy5jb25maXJtID0gZnVuY3Rpb24oY29udGVudCxzdXJlRm4sdGl0bGUsYnRUZXh0MSxidFRleHQyLGNhbmNlbEZuLGNscyl7XHJcbiAgICB2YXIgY2x6ID0gY29udGVudC5jbGF6eiA/IGNvbnRlbnQuY2xhenogOiAoY2xzID8gY2xzIDogJycpO1xyXG5cclxuICAgIGNseiArPSAnIGNvbmZpcm0tZGlhbG9nJztcclxuXHJcbiAgICBpZih0eXBlb2YgY29udGVudCAhPT0gJ29iamVjdCcpe1xyXG4gICAgICBjb250ZW50ID0gdXRpbHMuY3JlYXRlUGFyYW1zKHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOnN1cmVGbixcclxuICAgICAgICAgICAgICAgICAgY2FuY2VsQ2FsbGJhY2s6Y2FuY2VsRm4sXHJcbiAgICAgICAgICAgICAgICAgIHN1cmVTdHI6IGJ0VGV4dDIsXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFN0cjpidFRleHQxXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCFjb250ZW50LnRpdGxlKVxyXG4gICAgICBjbHogKz0gJyBkbGctbm8tdGl0bGUnO1xyXG4gICAgZWxzZVxyXG4gICAgICBjbHogKz0gJyBkbGctaGFzLXRpdGxlJztcclxuXHJcbiAgICBjb250ZW50Lm9rQ2FsbGJhY2sgPSBjb250ZW50Lm9rQ2FsbGJhY2sgfHwgbm9vcDtcclxuICAgIGNvbnRlbnQuY2FuY2VsQ2FsbGJhY2sgPSBjb250ZW50LmNhbmNlbENhbGxiYWNrIHx8IG5vb3A7XHJcbiAgICBjb250ZW50LmNsYXp6ID0gY2x6O1xyXG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nKGNvbnRlbnQpO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICBhZnRlckxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBhZnRlckxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cucHJlTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICBiZWZvcmVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGJlZm9yZUxpc3RlbmVycyA9IGJlZm9yZUxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuY2xvc2VkTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICBjbG9zZWRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IGNsb3NlZExpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIF9wbHVnaW5zID0gW107XHJcblxyXG4gIE1vZGFsRGlhbG9nLmFkZFBsdWdpbiA9IGZ1bmN0aW9uKGZuKXtcclxuICAgIF9wbHVnaW5zLnB1c2goZm4pO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcgPSB7fTtcclxuICB2YXIgaXNDb25maWcgPSBmYWxzZTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuY29uZmlnID0gZnVuY3Rpb24oY29uZmlnKXtcclxuICAgIHZhciBvcHRpb25zID0gdXRpbHMuYXNzaWduKHt9LE1vZGFsRGlhbG9nLmRlZmF1bHRDb25maWcsY29uZmlnKTtcclxuXHJcbiAgICBNb2RhbERpYWxvZy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIGlmKGlzQ29uZmlnKXtcclxuICAgICAgY29uc29sZS5pbmZvKCdtb2RhbGRpYWxnIG9ubHkgY2FuIGNvbmZpZyBvbmNlJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IodmFyIGk9MCwgbGVuPV9wbHVnaW5zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcclxuICAgICAgX3BsdWdpbnNbaV0oTW9kYWxEaWFsb2csIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydFN0eWxlVG9IZWFkKG9wdGlvbnMuYmFzZUZvbnRTaXplIHx8IDE2KTtcclxuXHJcbiAgICBpc0NvbmZpZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB1dGlscy5iaW5kRXZlbnQod2luZG93LCBcIm9yaWVudGF0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXtcclxuICAgIE9iamVjdC5rZXlzKE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3QpLmZvckVhY2goZGlhbG9nPT57XHJcbiAgICAgIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbZGlhbG9nXS5yZWZyZXNoKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdCA9IHt9O1xyXG4gIE1vZGFsRGlhbG9nLm1vZGFsQ291bnQgPSAwO1xyXG5cclxuTW9kYWxEaWFsb2cuRG9tVXRpbHMgPSB1dGlscztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTW9kYWxEaWFsb2c7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGFsLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5yYy1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQ7XFxufVxcbi5yYy1tb2RhbCAubW9kYWwtZGlhbG9nIHtcXG4gIGJvcmRlci1yYWRpdXM6ICRmbi5yZW0oIDFweCApO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgei1pbmRleDogOTAwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLW5vLXRpdGxlIGhlYWRlciB7XFxuICBoZWlnaHQ6ICRmbi5yZW0oIDI4cHggKTtcXG59XFxuLm1vZGFsLWRpYWxvZy5kbGctbm8tdGl0bGUgLmRpYWxvZy1jb250ZW50IHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4ubW9kYWwtZGlhbG9nLmRsZy1uby10aXRsZSBzZWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5tb2RhbC1kaWFsb2cuZGxnLWhhcy10aXRsZSBoZWFkZXIge1xcbiAgcGFkZGluZzogMCAwICRmbi5yZW0oIDEwcHggKSAwO1xcbiAgZm9udC1zaXplOiAkZm4ucmVtKCAxOHB4ICk7XFxufVxcbi5tb2RhbC1kaWFsb2cuYWxlcnQtZGlhbG9nIHNlY3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1kaWFsb2ctbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA5MDAwO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogJGZuLnJlbSggMTZweCApO1xcbiAgYm9yZGVyLXJhZGl1czogJGZuLnJlbSggM3B4ICk7XFxuICBwYWRkaW5nLXRvcDogJGZuLnJlbSggMjhweCApO1xcbn1cXG4ubW9kYWwtZGlhbG9nIC5kaWFsb2ctdGl0bGUge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5tb2RhbC1kaWFsb2cgLmRpYWxvZy1jb250ZW50IHtcXG4gIGNvbG9yOiAjMzIzMjMyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuLm1vZGFsLWRpYWxvZyBlbSB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5tb2RhbC1kaWFsb2cgc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAwcHggJGZuLnJlbSggMjZweCApO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtaGVpZ2h0OiAkZm4ucmVtKCAxODhweCApO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIge1xcbiAgYm9yZGVyLXRvcDogc29saWQgI2Q1ZDVkNTtcXG4gIGJvcmRlci10b3Atd2lkdGg6ICRmbi5yZW0oIDFweCApO1xcbiAgaGVpZ2h0OiAkZm4ucmVtKCA0NXB4ICk7XFxuICBsaW5lLWhlaWdodDogJGZuLnJlbSggNDVweCApO1xcbiAgbWFyZ2luLXRvcDogJGZuLnJlbSggMjBweCApO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1vZGFsLWRpYWxvZyBmb290ZXIgYnV0dG9uIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogJGZuLnJlbSggMTZweCApO1xcbiAgaGVpZ2h0OiAkZm4ucmVtKCA0NXB4ICk7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIGJ1dHRvbi5tb2RhbC1kaWFsb2ctb25lYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciBidXR0b246YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkICNkNWQ1ZDU7XFxuICBib3JkZXItcmlnaHQtd2lkdGg6ICRmbi5yZW0oIDFweCApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAwcHg7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIGJ1dHRvbi5sYXN0OmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIC5zdXJlLWJ0bixcXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuY2FuY2xlLWJ0biB7XFxuICB3aWR0aDogNTAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tb2RhbC1kaWFsb2cgZm9vdGVyIC5jYW5jbGUtYnRuIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG4ubW9kYWwtZGlhbG9nIGZvb3RlciAuc3VyZS1idG4ge1xcbiAgY29sb3I6ICM1MTdiZDE7XFxufVxcbi5tb2RhbC1kaWFsb2cuYWxlcnQtZGlhbG9nIGZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbC1kaWFsb2cuYWxlcnQtZGlhbG9nIGZvb3RlciAuc3VyZS1idG4ge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmRpYWxvZy1tYXNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogODk5OTtcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtBUU1BQUFDMy9GMytBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQU5RVEZSRkFBQUFwM285MmdBQUFBRjBVazVUZ0sxZVcwWUFBQUFMU1VSQlZBalhZMkRBQndBQUhnQUJib1ZITWdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xcbn1cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY3NzL2Jhc2UubGVzc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgY3JlYXRlSHRtbERvbTogKGZ1bmN0aW9uIGNyZWF0ZUh0bWwoKXtcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oaHRtbCl7XHJcbiAgICAgIHZhciB0ZW1wO1xyXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgdGVtcCA9IGRpdi5jaGlsZHJlblswXTtcclxuICAgICAgZGl2LnJlbW92ZUNoaWxkKHRlbXApO1xyXG4gICAgICByZXR1cm4gdGVtcDtcclxuICAgIH1cclxuICB9KSgpLFxyXG4gIHJlcGxhY2VUZW1sYXRlOiBmdW5jdGlvbihzdHIsZGF0YSl7XHJcbiAgICB2YXIgcmVneCA9IG5ldyBSZWdFeHAoL3soLio/KX0vZyksXHJcbiAgICAgICAgdGVtcDtcclxuICAgIHdoaWxlKHRlbXAgPSByZWd4LmV4ZWMoc3RyKSl7XHJcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHRlbXBbMF0sZGF0YVt0ZW1wWzFdXSB8fCAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHJcXG5dKi9nLCcnKTtcclxuICB9LFxyXG4gIGZuVGVtcGxhdGU6IGZ1bmN0aW9uKHN0ciwgZGF0YSl7XHJcbiAgICB2YXIgcmVneCA9IG5ldyBSZWdFeHAoL1xcJGZuXFwuKC4rPylcXCgoLio/KVxcKS9nKTtcclxuXHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocmVneCwgZnVuY3Rpb24oZXhwciwgZm4sIHZhbCl7XHJcbiAgICAgIHJldHVybiBkYXRhW2ZuXSh2YWwpO1xyXG4gICAgfSkucmVwbGFjZSgvW1xcclxcbl0qL2csJycpOztcclxuXHJcbiAgfSxcclxuICBiaW5kRXZlbnQ6IGZ1bmN0aW9uKGRvbSxuYW1lLGZuKXtcclxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyXHJcbiAgICAgID8gZG9tLmFkZEV2ZW50TGlzdGVuZXIobmFtZSxmbixmYWxzZSlcclxuICAgICAgOiBkb20uYXR0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZuKTtcclxuICB9LFxyXG4gIHVuQmluZEV2ZW50OiBmdW5jdGlvbihkb20sbmFtZSxmbil7XHJcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lclxyXG4gICAgICA/IGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsZm4sZmFsc2UpXHJcbiAgICAgIDogZG9tLmRldGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmbik7XHJcbiAgfSxcclxuICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBrZXkgKyBcIj0oW14mXSopKCZ8JClcIiwgXCJpXCIpO1xyXG4gICAgICB2YXIgciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpLm1hdGNoKHJlZyk7XHJcbiAgICAgIGlmIChyICE9IG51bGwpIHJldHVybiBkZWNvZGVVUkkoclsyXSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH0sXHJcbiAgYXNzaWduOiBmdW5jdGlvbigpe1xyXG4gICAgdmFyIHRlbXAgPSBhcmd1bWVudHNbMF07XHJcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgIGZvcih2YXIgaT0wLGxlbj1hcmdzLmxlbmd0aDtpPGxlbjtpKyspe1xyXG4gICAgICB2YXIgaXRlbSA9IGFyZ3NbaV07XHJcbiAgICAgIGlmKCFpdGVtKVxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICBmb3IodmFyIHAgaW4gaXRlbSl7XHJcbiAgICAgICAgaWYoaXRlbS5oYXNPd25Qcm9wZXJ0eShwKSl7XHJcbiAgICAgICAgICB0ZW1wW3BdID0gaXRlbVtwXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wO1xyXG4gIH0sXHJcbiAgY2xvc2VzdDogZnVuY3Rpb24oZG9tLGNscyl7XHJcbiAgICB2YXIgY2xzUmVneCA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKyknKyBjbHMgKyAnKFxcXFxzK3wkKScpLFxyXG4gICAgICAgIHRhZ1JlZ3ggPSBuZXcgUmVnRXhwKCdeJysgY2xzICsgJyQnKSxcclxuICAgICAgICBwYXJlbnQgPSBkb207XHJcblxyXG4gICAgaWYodGVzdChkb20pKVxyXG4gICAgICByZXR1cm4gZG9tO1xyXG5cclxuICAgIHdoaWxlKCEhKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSAmJiAgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT0gJ2h0bWwnKXtcclxuICAgICAgaWYodGVzdChwYXJlbnQpKXtcclxuICAgICAgICByZXR1cm4gcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0KGRvbSl7XHJcblxyXG4gICAgICBpZighIWRvbS5jbGFzc05hbWUubWF0Y2goY2xzUmVneCkpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9ZWxzZSBpZih0YWdSZWd4LnRlc3QoZG9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlUGFyYW1zOiBmdW5jdGlvbihwYXJhbSl7XHJcbiAgICB2YXIgcmVzID0ge307XHJcblxyXG4gICAgZm9yKHZhciBwIGluIHBhcmFtKXtcclxuICAgICAgaWYocGFyYW0uaGFzT3duUHJvcGVydHkocCkpe1xyXG4gICAgICAgIGlmKHR5cGVvZiBwYXJhbVtwXSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICByZXNbcF0gPSBwYXJhbVtwXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZG9tLmpzXG4gKiovIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi9kb20uanMnKTtcclxuXHJcbmZ1bmN0aW9uIGdldEhlaWdodChzZWwsaXNPdXRlcil7XHJcbiAgdmFyIHNlY3Rpb25TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoc2VsKSxcclxuICAgICAgbWFyZ2luSCA9IDA7XHJcblxyXG4gIGlmKGlzT3V0ZXIpe1xyXG4gICAgbWFyZ2luSCA9IHNlY3Rpb25TdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgICAgICBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpLnJlcGxhY2UoJ3B4JywnJykqMVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBzZWN0aW9uU3R5bGUucGFkZGluZ1RvcC5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLnBhZGRpbmdCb3R0b20ucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgIHNlY3Rpb25TdHlsZS5ib3JkZXJUb3BXaWR0aC5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmJvcmRlckJvdHRvbVdpZHRoLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBtYXJnaW5IXHJcbiAgICAgICAgKTtcclxufVxyXG5cclxudmFyIGVhc2UgPSB7XHJcbiAgY2lyY3VsYXI6IHtcclxuICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMSwgMC41NywgMC4xLCAxKSdcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBpbml0VG91Y2g6IGZ1bmN0aW9uKGRpYWxvZyl7XHJcbiAgICB2YXIgZGxnQ29udGVudCA9ICBkaWFsb2cucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jb250ZW50JyksXHJcbiAgICAgICAgc2VjdGlvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyksXHJcbiAgICAgICAgc2Nyb2xsVGFyZ2VTdHlsZSA9IGRsZ0NvbnRlbnQuc3R5bGUsXHJcbiAgICAgICAgd3JhcHBlckhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxLFxyXG4gICAgICAgIG1heEhlaWdodCwgc3RhcnRQb3N4LCBzdGFydFBvc3ksIGlzVG91Y2gsXHJcbiAgICAgICAgc3RhcnRUaW1lLCBkaXN0WSwgZGlzdFgsXHJcbiAgICAgICAgZW5kVGltZSA9IDAsIHggPTAsIHkgPTAsIHN0YXJ0WCwgc3RhcnRZLCBpc0luVHJhbnNpdGlvbjtcclxuXHJcbiAgICBtYXhIZWlnaHQgPSB3cmFwcGVySGVpZ2h0IC0gZ2V0SGVpZ2h0KGRsZ0NvbnRlbnQsdHJ1ZSk7XHJcblxyXG4gICAgc2Nyb2xsVGFyZ2VTdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSBlYXNlLmNpcmN1bGFyLnN0eWxlO1xyXG5cclxuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2csJ3RvdWNobW92ZScsc3RvcFNjcm9sbE1vdmUpO1xyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nLCd0b3VjaGVuZCcsdG91Y2hlRW5kKTtcclxuICAgIHV0aWxzLmJpbmRFdmVudChkbGdDb250ZW50LCd0cmFuc2l0aW9uZW5kJyxfdHJhbnNpdGlvbkVuZCk7XHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGxnQ29udGVudCwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3RyYW5zaXRpb25FbmQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRlc3Ryb3lTY3JvbGw6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nLCd0b3VjaG1vdmUnLHN0b3BTY3JvbGxNb3ZlKTtcclxuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkaWFsb2csJ3RvdWNoc3RhcnQnLHN0YXJ0VG91Y2gpO1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnQ29udGVudCwndHJhbnNpdGlvbmVuZCcsX3RyYW5zaXRpb25FbmQpO1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3dlYmtpdFRyYW5zaXRpb25FbmQnLF90cmFuc2l0aW9uRW5kKTtcclxuICAgICAgICBkbGdDb250ZW50ID0gc2VjdGlvbiA9IG51bGw7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd3JhcHBlckhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxO1xyXG4gICAgICAgIG1heEhlaWdodCA9IHdyYXBwZXJIZWlnaHQgLSBnZXRIZWlnaHQoZGxnQ29udGVudCx0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydFRvdWNoKGUpe1xyXG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXHJcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jbG9zZXN0KGUudGFyZ2V0LCdkaWFsb2ctY29udGVudCcpLFxyXG4gICAgICAgICAgcG9zO1xyXG5cclxuICAgICAgaWYoISF0YXJnZXQpe1xyXG4gICAgICAgIGlmKGlzSW5UcmFuc2l0aW9uKXtcclxuICAgICAgICAgIF90cmFuc2l0aW9uVGltZSgpO1xyXG4gICAgICAgICAgaXNJblRyYW5zaXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgIHBvcyA9IGdldENvbXB1dGVkUG9zaXRpb24oKTtcclxuICAgICAgICAgIHRyYW5zbGF0ZShNYXRoLnJvdW5kKHBvcy54KSwgTWF0aC5yb3VuZChwb3MueSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGFydFBvc3ggPSB0b3VjaC5wYWdlWDtcclxuICAgICAgICBzdGFydFBvc3kgPSB0b3VjaC5wYWdlWTtcclxuICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGRpc3RYID0gZGlzdFkgPSAwO1xyXG4gICAgICAgIHN0YXJ0WCA9IHg7XHJcbiAgICAgICAgc3RhcnRZID0geTtcclxuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wU2Nyb2xsTW92ZShlKXtcclxuICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdLFxyXG4gICAgICAgICAgcG9zWCA9IHRvdWNoLnBhZ2VYLFxyXG4gICAgICAgICAgcG9zWSA9IHRvdWNoLnBhZ2VZLFxyXG4gICAgICAgICAgbm9kZU5hbWUgPSBlLnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIHZhciBkZWx0YVkgPSBwb3NZIC0gc3RhcnRQb3N5LFxyXG4gICAgICAgICAgZGVsdGFYID0gcG9zWCAtIHN0YXJ0UG9zeCxcclxuICAgICAgICAgIG5ld1k7XHJcblxyXG4gICAgICBzdGFydFBvc3ggPSBwb3NYO1xyXG4gICAgICBzdGFydFBvc3kgPSBwb3NZO1xyXG5cclxuICAgICAgZGlzdFggKz0gZGVsdGFYO1xyXG4gICAgICBkaXN0WSArPSBkZWx0YVk7XHJcblxyXG4gICAgICBpZiggbm9kZU5hbWUgIT0gJ2lucHV0JyAmJiBub2RlTmFtZSAhPSAnc2VsZWN0JyAmJiBub2RlTmFtZSAhPSAndGV4dGFyZWEnKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoICh0aW1lc3RhbXAgLSBlbmRUaW1lID4gMzAwICYmIE1hdGguYWJzKGRpc3RZKSA8IDEwKSB8fCAhaXNUb3VjaCB8fCBtYXhIZWlnaHQgPj0gMCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5ld1kgPSB5ICsgZGVsdGFZO1xyXG4gICAgICBpZiAoIG5ld1kgPiAwIHx8IG5ld1kgPCBtYXhIZWlnaHQgKSB7XHJcbiAgICAgICAgbmV3WSA9IHkgKyBkZWx0YVkgLyAzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cmFuc2xhdGUoZGxnQ29udGVudCxuZXdZKTtcclxuXHJcbiAgICAgIGlmICggdGltZXN0YW1wIC0gc3RhcnRUaW1lID4gMzAwICkge1xyXG4gICAgICAgIHN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcclxuICAgICAgICBzdGFydFggPSB4O1xyXG4gICAgICAgIHN0YXJ0WSA9IHk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvdWNoZUVuZChlKXtcclxuICAgICAgdmFyIGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSxcclxuICAgICAgICAgIG5ld1kgPSBNYXRoLnJvdW5kKHkpLFxyXG4gICAgICAgICAgdGltZSA9IDAsXHJcbiAgICAgICAgICBtb21lbnR1bVk7XHJcblxyXG4gICAgICBzdGFydFBvc3ggPSBudWxsO1xyXG4gICAgICBzdGFydFBvc3kgPSBudWxsO1xyXG4gICAgICBlbmRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgaXNJblRyYW5zaXRpb24gPSAwO1xyXG5cclxuICAgICAgaWYgKHJlc2V0UG9zaXRpb24oZGxnQ29udGVudCw1MDApIHx8IG1heEhlaWdodCA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzY3JvbGxUbyhkbGdDb250ZW50LCBuZXdZKTtcclxuXHJcbiAgICAgIGlmKGR1cmF0aW9uIDwgMzAwKXtcclxuICAgICAgICBtb21lbnR1bVkgPSBtb21lbnR1bSh5LCBzdGFydFksIGR1cmF0aW9uKTtcclxuICAgICAgICBuZXdZID0gbW9tZW50dW1ZLmRlc3RpbmF0aW9uO1xyXG4gICAgICAgIHRpbWUgPSBtb21lbnR1bVkuZHVyYXRpb247XHJcbiAgICAgICAgaXNJblRyYW5zaXRpb24gPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIG5ld1kgIT0geSApIHtcclxuICAgICAgICBzY3JvbGxUbyhkbGdDb250ZW50LCBuZXdZLHRpbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxUbyh0YXJnZXQscG9zeSx0aW1lKXtcclxuICAgICAgdGltZSA9IHRpbWUgfHwgMDtcclxuICAgICAgaXNJblRyYW5zaXRpb24gPSB0aW1lID4gMDtcclxuICAgICAgX3RyYW5zaXRpb25UaW1lKHRpbWUpO1xyXG4gICAgICB0cmFuc2xhdGUodGFyZ2V0LHBvc3kpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUodGFyZ2V0LCBwb3N5KSB7XHJcbiAgICAgIHNjcm9sbFRhcmdlU3R5bGUud2Via2l0VHJhbnNmb3JtICA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHBvc3kgKyAncHgsMHB4KSc7XHJcbiAgICAgIHkgPSBwb3N5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzZXRQb3NpdGlvbih0YXJnZXQsdGltZSl7XHJcbiAgICAgIHZhciBwb3NZID0geTtcclxuXHJcbiAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XHJcblxyXG4gICAgICBpZiAocG9zWSA+PSAwICkge1xyXG4gICAgICAgIHBvc1kgPSAwO1xyXG4gICAgICB9IGVsc2UgaWYgKHBvc1kgPCBtYXhIZWlnaHQgKSB7XHJcbiAgICAgICAgcG9zWSA9IG1heEhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCBwb3NZID09IHkgKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzY3JvbGxUbyh0YXJnZXQsIHBvc1ksIHRpbWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb21lbnR1bShjdXJyZW50LCBzdGFydCwgdGltZSl7XHJcbiAgICAgIHZhciBkaXN0YW5jZSA9IGN1cnJlbnQgLSBzdGFydCxcclxuICAgICAgICAgIHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZSxcclxuICAgICAgICAgIGRlY2VsZXJhdGlvbiA9IDAuMDAwNixcclxuICAgICAgICAgIGRlc3RpbmF0aW9uLFxyXG4gICAgICAgICAgZHVyYXRpb247XHJcblxyXG4gICAgICBkZXN0aW5hdGlvbiA9IGN1cnJlbnQgKyAoIHNwZWVkICogc3BlZWQgKSAvICggMiAqIGRlY2VsZXJhdGlvbiApICogKCBkaXN0YW5jZSA8IDAgPyAtMSA6IDEgKTsgLy8gcz0oYXReMikvMlxyXG4gICAgICBkdXJhdGlvbiA9IHNwZWVkIC8gZGVjZWxlcmF0aW9uOyAvLyB2PWF0XHJcblxyXG4gICAgICBpZiAoIGRlc3RpbmF0aW9uIDwgbWF4SGVpZ2h0ICkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uID0gbWF4SGVpZ2h0IC0gKCB3cmFwcGVySGVpZ2h0IC8gMi41ICogKCBzcGVlZCAvIDggKSApO1xyXG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoZGVzdGluYXRpb24gLSBjdXJyZW50KTtcclxuICAgICAgICBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XHJcbiAgICAgIH1lbHNlIGlmKGRlc3RpbmF0aW9uID4gMCl7XHJcbiAgICAgICAgZGVzdGluYXRpb24gPSB3cmFwcGVySGVpZ2h0IC8gMi41ICogKCBzcGVlZCAvIDggKTtcclxuICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGN1cnJlbnQpICsgZGVzdGluYXRpb247XHJcbiAgICAgICAgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBNYXRoLnJvdW5kKGRlc3RpbmF0aW9uKSxcclxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb21wdXRlZFBvc2l0aW9uKCkge1xyXG4gICAgICB2YXIgbWF0cml4ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGxnQ29udGVudCwgbnVsbCksXHJcbiAgICAgICAgeCwgeTtcclxuXHJcbiAgICAgIG1hdHJpeCA9IG1hdHJpeC53ZWJraXRUcmFuc2Zvcm0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCAnKTtcclxuICAgICAgeCA9ICsobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0pO1xyXG4gICAgICB5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XHJcblxyXG4gICAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX3RyYW5zaXRpb25UaW1lKHRpbWUpe1xyXG4gICAgICB0aW1lID0gdGltZSB8fCAwO1xyXG4gICAgICBzY3JvbGxUYXJnZVN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRpbWUgKyAnbXMnO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX3RyYW5zaXRpb25FbmQoKXtcclxuICAgICAgaWYoIWlzSW5UcmFuc2l0aW9uKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgX3RyYW5zaXRpb25UaW1lKCk7XHJcbiAgICAgIGlmKCFyZXNldFBvc2l0aW9uKGRsZ0NvbnRlbnQpKXtcclxuICAgICAgICBpc0luVHJhbnNpdGlvbiA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGxnc2Nyb2xsLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==