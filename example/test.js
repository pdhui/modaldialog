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
	
	// import hashHistory from '../hashHistory.js';
	var hashHistory = __webpack_require__(1);
	var dialog = __webpack_require__(3);
	var hasClose;
	
	// dialog.config({useHash:true});
	document.getElementById('btn').addEventListener('click', function () {
	  dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少。<input type="text" style="width:100px;" />然而，我们可以看到 Webpack 打包后的 all.js 文件不仅没有压缩，而且代码当中的注释也没有去掉Webpack 同样提供了 UglifyJsPlugin 的插件来进行压缩代码操作。但是在我尝试的过程中，这个插件和 html-loader 配合使用的时候会出现错误，因此在这里我使用了 Gulp 来进行代码压缩的工作。Webpack 与 Gulp 配合使用也相当简单，只需要安装 gulp-webpack安装 Gulp 和其他所需的工具缺点：通过设备宽度范围区间这样的媒体查询来动态改变rem基准值，其实不够精确，比如：宽度为360px 和 宽度为320px的手机，因为屏宽在同一范围区间内(<375px)，所以会被同等对待(rem基准值相同)，而事实上他们的屏幕宽度并不相等，它们的布局也应该有所不同。最终，结论就是：这样的做法，没有做到足够的精确，但是够用。本部分将专注于 JavaScript 语言本身，而并非局限于网页或其他宿主环境。想要了解网页有关的 API', "确认放弃领奖", function () {
	
	    console.log('i am alert');
	    if (!hasClose) {
	      dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少。1<input type="t', 'kk', function () {
	        // hasClose = true;
	        dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少');
	        return true;
	      });
	      return true;
	    }
	  });
	}, false);
	
	// dialog.confirm('弹框内容区域此处展示各种描述弹框内容区域此处展示各种描述',function(){
	//   console.log('i am confirm');
	//   dialog.alert('在上线之前');
	// },"确认放弃领奖");
	// dialog.confirm('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少。然而，我们可以看到 Webpack 打包后的 all.js 文件不仅没有压缩，而且代码当中的注释也没有去掉Webpack 同样提供了 UglifyJsPlugin 的插件来进行压缩代码操作。但是在我尝试的过程中，这个插件和 html-loader 配合使用的时候会出现错误，因此在这里我使用了 Gulp 来进行代码压缩的工作。Webpack 与 Gulp 配合使用也相当简单，只需要安装 gulp-webpack安装 Gulp 和其他所需的工具缺点：通过设备宽度范围区间这样的媒体查询来动态改变rem基准值，其实不够精确，比如：宽度为360px 和 宽度为320px的手机，因为屏宽在同一范围区间内(<375px)，所以会被同等对待(rem基准值相同)，而事实上他们的屏幕宽度并不相等，它们的布局也应该有所不同。最终，结论就是：这样的做法，没有做到足够的精确，但是够用。本部分将专注于 JavaScript 语言本身，而并非局限于网页或其他宿主环境。想要了解网页有关的 API',function(){
	//    console.log('i am confirm');
	//  },"确认放弃领奖",'放弃奖品','继续填写',function(){
	//    console.log('i am confirm cancel');
	//  })
	// dialog.alertAwardList([{imgUrl:'xx.jpg',name:'pro 5'},{imgUrl:'xx.jpg',name:'魅族 5'},{imgUrl:'xx.jpg',name:'pro 6'}],'确认放弃领奖?',
	//     function(){
	//       dialog.alertPersonInfoDlg({okCallback:function(){
	//         var inputs = document.querySelectorAll('.personinfo-dialog input');
	//         [].slice.call(inputs).every(function(item){
	//           console.log(item.value)
	//           return true;
	//         })

	//       },values:[1,2,'sfwe e而无法','ef']});
	//     },
	//     function(){
	//      console.log('i am confirm');
	//    },function(){
	//      console.log('i am confirm cancel');
	//    },'确定','分享到朋友圈');

	// dialog.alert({selector:document.getElementsByTagName('h1')[0]});
	// dialog.confirm({selector:document.getElementById('info-form')});

	// dialog.confirm({content:'弹框内容区域此处展示各种描述弹框内容区域此处展示各种描述<input type="text" id="username" />',okCallback:function(){
	//   console.log('i am confirm: ' + document.getElementById('username').value);
	//   dialog.alert('在上线之前');
	// },title:"确认放弃领奖",reverse:true});

	// dialog.showLoading();
	// setTimeout(function(){
	//   dialog.hideLoading();
	// },3000);

	// dialog.showMask();
	// setTimeout(function(){
	//   dialog.hideMask();
	// },3000);

	// hashHistory().startListener(function(path){
	//   console.log(path);
	// })

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _dom = __webpack_require__(2);
	
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

/***/ },
/* 2 */
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
	      str = str.replace(temp[0], data[temp[1]]);
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
	      for (var p in item) {
	        if (item.hasOwnProperty(p)) {
	          temp[p] = item[p];
	        }
	      }
	    }
	    return temp;
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	__webpack_require__(4);
	var domUtil = __webpack_require__(2);
	var ModalDialog = __webpack_require__(8);
	var hashHistory = __webpack_require__(1);
	
	function createParams(param) {
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
	
	function isPlainObject(obj) {
	  return Object.prototype.toString.call(obj) == '[object Object]';
	}
	function noop() {}
	
	ModalDialog.alert = function (content, title, callback, dom, cls) {
	  var clz = content.clazz ? content.clazz : cls ? cls : '';
	
	  clz += ' alert-dialog';
	
	  if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) !== 'object') {
	    content = createParams({
	      title: title,
	      content: content,
	      okCallback: callback,
	      selector: dom
	    });
	  }
	
	  content.okCallback = content.okCallback || noop;
	  content.clazz = clz;
	  return ModalDialog(content);
	};
	
	ModalDialog.confirm = function (content, sureFn, title, btText1, btText2, cancelFn, cls) {
	  var clz = content.clazz ? content.clazz : cls ? cls : '';
	
	  clz += ' confirm-dialog';
	
	  if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) !== 'object') {
	    content = createParams({
	      title: title,
	      content: content,
	      okCallback: sureFn,
	      cancelCallback: cancelFn,
	      sureStr: btText2,
	      cancelStr: btText1
	    });
	  }
	
	  content.okCallback = content.okCallback || noop;
	  content.cancelCallback = content.cancelCallback || noop;
	  content.clazz = clz;
	  return ModalDialog(content);
	};
	
	ModalDialog.alertAwardList = function (datalist, title, inputCallback, okFn, cancelFn, btText1, btText2) {
	  var awardListHtml = ['<div class="dlg-award-list"><ul>'],
	      settings,
	      result;
	
	  if (!isPlainObject(datalist)) {
	    settings = createParams({
	      dataList: datalist,
	      title: title,
	      okCallback: okFn,
	      cancelCallback: cancelFn,
	      sureStr: btText2 || "分享到朋友圈",
	      cancelStr: btText1 || "确定",
	      fillform: inputCallback
	    });
	  } else {
	    settings = datalist;
	  }
	
	  settings.clazz = 'myaward-dialog';
	
	  result = settings.dataList || [];
	
	  for (var i = 0, len = result.length; i < len; i++) {
	    var item = result[i];
	    awardListHtml.push('<li><img src="' + item.imgUrl + '" /><div class="item-title">' + item.name + "</div></li>");
	  }
	  awardListHtml.push('</ul><div class="address-controller"><span class="dlg-address">收货地址:</span><span class="dlg-input" data-id="fillform">填写</span></div></div>');
	
	  settings.content = awardListHtml.join('');
	  return ModalDialog(settings);
	};
	
	ModalDialog.alertPersonInfoDlg = function (formField, values, okFn, cancelFn, btText1, btText2) {
	  var infoFormHtml = ["<form>"],
	      inputs,
	      values,
	      settings,
	      infoFormDom;
	
	  if (!isPlainObject(formField)) {
	    settings = createParams({
	      formField: formField,
	      okCallback: okFn,
	      cancelCallback: cancelFn,
	      sureStr: btText2,
	      cancelStr: btText1,
	      values: values || []
	    });
	  } else {
	    settings = formField;
	  }
	
	  settings.okCallback = settings.okCallback || noop;
	  settings.cancelCallback = settings.cancelCallback || noop;
	  formField = settings.formField = settings.formField || [{ name: 'recName', value: '收件人:' }, { name: 'mobilephone', value: '手机号码:' }, { name: 'recAddress', value: '收件地址:' }, { name: 'message', value: '留言:' }];
	  settings.clazz = 'personinfo-dialog';
	  settings.header = '';
	
	  for (var i = 0, len = formField.length; i < len; i++) {
	    var item = formField[i];
	    infoFormHtml.push('<div class="form-item"><label>');
	    infoFormHtml.push(item.value);
	    infoFormHtml.push('</label><input class="form-text" type="text" name="' + item.name + '"/></div>');
	  }
	
	  infoFormHtml.push("</form>");
	
	  infoFormDom = domUtil.createHtmlDom(infoFormHtml.join(''));
	
	  inputs = infoFormDom.querySelectorAll('input');
	  values = settings.values;
	  for (var i = 0, len = inputs.length; i < len; i++) {
	    if (typeof values[i] != 'undefined') inputs[i].value = values[i];
	  }
	
	  settings.selector = infoFormDom;
	  return ModalDialog(settings);
	};
	
	ModalDialog.showLoading = function () {
	  if (!document.getElementById('loading-box')) {
	    document.body.appendChild(domUtil.createHtmlDom('<div id="loading-box" class="dialog-mask"><div class="load-contain">' + '<span class="load1"></span><span class="load2"></span></div></div>'));
	  }
	  document.getElementById('loading-box').style.display = 'block';
	};
	
	ModalDialog.hideLoading = function () {
	  document.getElementById('loading-box').style.display = 'none';
	};
	ModalDialog.showMask = function () {
	  var dialogMask = document.getElementById('app-mask');
	
	  if (!dialogMask) {
	    dialogMask = domUtil.createHtmlDom("<div class='dialog-mask' id='app-mask'></div>");
	    domUtil.bindEvent(dialogMask, 'touchstart', function (event) {
	      event.preventDefault();
	    });
	    document.body.appendChild(dialogMask);
	  }
	  dialogMask.style.display = 'block';
	};
	ModalDialog.hideMask = function () {
	  document.getElementById('app-mask').style.display = 'none';
	};
	
	var defaultConfig = {
	  useHash: false
	};
	ModalDialog.config = function (config) {
	  var options = domUtil.assign({}, defaultConfig, config);
	
	  if (options.useHash) {
	    initHash();
	  }
	};
	
	function initHash() {
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
	
	module.exports = ModalDialog;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var scrollDlg = __webpack_require__(9);
	var _ = {
	  assign: utils.assign
	};
	/*
	生成对话框模板内容
	 */
	function getHtmlContent(options) {
	  var templateHtml = [],
	      header = options.header;
	
	  header = utils.replaceTemlate(header, options);
	
	  templateHtml.push('<div class="modal-dialog ' + options.clazz + '" style="position:fixed;"><div class="dialog-mask"></div><div class="modal-dialog-main"><header>');
	  templateHtml.push(header);
	  templateHtml.push('</header><section><div class="dialog-content"></div></section><footer>');
	  templateHtml.push(createButtons.call(this, options));
	  templateHtml.push('</footer></div></div>');
	
	  return templateHtml.join('');
	}
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
	 */
	var defaultSettings = {
	  clazz: 'dialog-theme',
	  cancelStr: '取消',
	  sureStr: '确定',
	  title: '温馨提示',
	  header: '<span class="dialog-title">{title}</span>',
	  animated: true,
	  buttons: null
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
	
	  afterListeners.forEach(function (listener) {
	    listener(dialog);
	  });
	
	  _count++;
	
	  return dialog;
	};
	
	ModalDialog.create = function (options) {
	  var dialogDom, dlgPosY, dlgPosX, dlgW, dlgH;
	
	  this.callbacks = options._callBacks;
	  this.id = options.id;
	
	  dialogDom = utils.createHtmlDom(getHtmlContent.call(this, options));
	  dialogDom.setAttribute('data-pos', 0);
	  insertContent(dialogDom, options);
	  document.body.appendChild(dialogDom);
	
	  this.destroyScroll = scrollDlg.initTouch(dialogDom);
	
	  if (!this.winH) this.winH = window.innerHeight ? window.innerHeight : document.body.clientHeight;
	  if (!this.winW) this.winW = window.innerWidth ? window.innerWidth : document.body.clientWidth;
	
	  dlgH = dialogDom.offsetHeight;
	  dlgW = dialogDom.offsetWidth;
	  dlgPosY = this.winH - dlgH > 0 ? (this.winH - dlgH) / 2 : this.winH * 0.1;
	  dlgPosX = this.winW - dlgW > 0 ? (this.winW - dlgW) / 2 : this.winW * 0.1;
	
	  _.assign(dialogDom.style, {
	    display: 'block',
	    left: dlgPosX + 'px',
	    top: dlgPosY + 'px'
	  });
	
	  if (options.animated) dialogDom.className += ' dlg-animation';
	
	  this._eventListener = this.proxy(this._clickEvent, dialogDom, options);
	  this.dialogDom = dialogDom;
	  this.options = options;
	  utils.bindEvent(dialogDom, 'click', this._eventListener);
	
	  return this;
	};
	_.assign(ModalDialog.create.prototype, {
	  callbacks: null,
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
	    this.destroyScroll();
	
	    if (!isNotInvoke) closedListeners.forEach(function (listener) {
	      listener(self);
	    });
	
	    this._eventListener = null;
	    this.dialogDom = dialogDom = null;
	
	    delete ModalDialog.dialogList[this.id];
	  },
	  _clickEvent: function _clickEvent(e, dialogDom, options) {
	    var target = e.target,
	        id = target.getAttribute('data-id'),
	        self = this;
	
	    if (typeof this.callbacks[id] == 'function' && !this.callbacks[id].call(this, e)) {
	      setTimeout(function () {
	        self.closeDialog();
	      }, 1);
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
	
	ModalDialog.dialogList = {};
	
	module.exports = ModalDialog;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function getHeight(sel, isOuter) {
	  var sectionStyle = getComputedStyle(sel),
	      marginH = 0;
	
	  if (isOuter) {
	    marginH = sectionStyle.getPropertyValue('margin-top').replace('px', '') * 1 + sectionStyle.getPropertyValue('margin-bottom').replace('px', '') * 1;
	  }
	  return sectionStyle.getPropertyValue('height').replace('px', '') * 1 + sectionStyle.paddingTop.replace('px', '') * 1 + sectionStyle.paddingBottom.replace('px', '') * 1 + sectionStyle.borderTopWidth.replace('px', '') * 1 + sectionStyle.borderBottomWidth.replace('px', '') * 1 + marginH;
	}
	
	module.exports = {
	  initTouch: function initTouch(dialog) {
	    var dlgContent = dialog.querySelector('.dialog-content'),
	        section = dialog.getElementsByTagName('section')[0],
	        maxHeight,
	        startPosx,
	        startPosy,
	        isTouch,
	        lastPosY,
	        timer;
	
	    maxHeight = getComputedStyle(section).getPropertyValue('height').replace('px', '') * 1 - getHeight(dlgContent, true);
	
	    utils.bindEvent(dialog, 'touchmove', stopScrollMove);
	    utils.bindEvent(dialog, 'touchstart', startTouch);
	    utils.bindEvent(dialog, 'touchend', toucheEnd);
	
	    return function () {
	      utils.unBindEvent(dialog, 'touchmove', stopScrollMove);
	      utils.unBindEvent(dialog, 'touchstart', startTouch);
	      utils.unBindEvent(dialog, 'touchend', toucheEnd);
	    };
	
	    function startTouch(e) {
	      var touch = e.touches[0];
	
	      if (e.target.className.indexOf('dialog-content') >= 0) {
	        startPosx = touch.screenX;
	        startPosy = touch.screenY;
	        isTouch = true;
	      }
	    }
	    function stopScrollMove(e) {
	      var touch = e.touches[0],
	          target = e.target,
	          currentTarget = e.currentTarget,
	          nodeName = target.nodeName.toLowerCase(),
	          posX = touch.screenX,
	          posY = touch.screenY,
	          currentPosY = currentTarget.attributes['data-pos'].value * 1 || 0,
	          distance;
	
	      if (isTouch) {
	        if (Math.abs(posX - startPosx) < 10 && Math.abs(posY - startPosy) > 10) {
	          distance = currentPosY + posY - startPosy;
	          if (distance < maxHeight) distance = maxHeight;else if (distance > 0) distance = 0;
	          currentTarget.attributes['data-pos'].value = distance;
	          scrollTo(target, currentPosY, distance);
	
	          startPosx = posX;
	          startPosy = posY;
	        }
	      }
	      if (nodeName != 'input' && nodeName != 'select' && nodeName != 'textarea') {
	        e.preventDefault();
	        e.stopPropagation();
	      }
	      return false;
	    }
	    function toucheEnd() {
	      startPosx = null;
	      startPosy = null;
	      isTouch = false;
	    }
	
	    function scrollTo(target, curPosY, y) {
	      var step = 5;
	
	      lastPosY = y;
	      if (timer != null) {
	        clearTimer();
	      }
	
	      timer = setInterval(_innerScroll, 18);
	      _innerScroll();
	
	      function _innerScroll() {
	        curPosY -= step;
	        if (curPosY < lastPosY) {
	          clearTimer();
	          curPosY = lastPosY;
	        }
	        target.style.webkitTransform = 'translate3d(0px,' + curPosY + 'px,0px)';
	      }
	      function clearTimer() {
	        timer = null;
	        clearInterval(timer);
	      }
	    }
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=test.js.map