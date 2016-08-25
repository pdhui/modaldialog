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
	
	dialog.config({ useHash: true });
	
	document.getElementById('btn2').addEventListener('click', function () {
	  // dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少然而，我们可以看到 Webpack 打包后的 all.js 件不然而，我们可以看到 Webpack 打包后的 all.js 文件不然而，我们可件不然而，我们可以看到 Webpack 打包后的 all.js 文件不然而，我们可件不然而，我们可以看到 Webpack 打包后的 all.js 文件不然而，我们可件不然而，我们可以看到 Webpack 打包后的 all.js 文件不然而，我们可文件不然而，我们可以看到 Webpack 打包后的 all.js 文件不然而，我们可以看到 Webpack 打包后的 all.js 文件不。然而，我们可以看到 Webpack 打包后的 all.js 文件不仅没有压缩，而且代码当中的注释也没有去掉Webpack 同样提供了 UglifyJsPlugin 的插件来进行压缩代码操作。但是在我尝试的过程中，这个插件和 html-loader 配合使用的时候会出现错误，因此在这里我使用了 Gulp 来进行代码压缩的工作。Webpack 与 Gulp 配合使用也相当简单，只需要安装 gulp-webpack安装 Gulp 和其他所需的工具缺点：通过设备宽度范围区间这样的媒体查询来动态改变rem基准值，其实不够精确，比如：宽度为360px 和 宽度为320px的手机，因为屏宽在同一范围区间内(<375px)，所以会被同等对待(rem基准值相同)，而事实上他们的屏幕宽度并不相等，它们的布局也应该有所不同。最终，结论就是：这样的做法，没有做到足够的精确，但是够用。本部分将专注于 JavaScript 语言本身，而并非局限于网页或其他宿主环境。想要了解网页有关的 API',"确认放弃领奖",function(){
	  // dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少');
	  console.log('i am alert');
	  if (!hasClose) {
	    dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少。1<input type="t', 'kk', function () {
	      // hasClose = true;
	      dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少');
	      return true;
	    });
	    return true;
	  }
	  // });
	  // dialog.confirm('弹框内容区域此处展示各种描述弹框内容区域此处展示各种描述',function(){
	  //    console.log('i am confirm');
	  //    dialog.alert('在上线之前');
	  //  },"确认放弃领奖");
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
	/*dialog.alertAwardList([{imgUrl:'xx.jpg',name:'pro 5'},{imgUrl:'xx.jpg',name:'魅族 5'},{imgUrl:'xx.jpg',name:'pro 6'}],'确认放弃领奖?',
	    function(){
	      dialog.alertPersonInfoDlg({okCallback:function(){
	        var inputs = document.querySelectorAll('.personinfo-dialog input');
	        [].slice.call(inputs).every(function(item){
	          console.log(item.value)
	          return true;
	        })

	      },values:[1,2,'sfwe e而无法','ef']});
	    },
	    function(){
	     console.log('i am confirm');
	   },function(){
	     console.log('i am confirm cancel');
	   },'确定','分享到朋友圈');*/

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
	//

	// var template = '<input type="text"/><ul class="winner-list"><li><span class="winner-name">test</span><div class="winner-awards">标题文案1</div></li><li><span class="winner-name">test1</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test2</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test(1)</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test4</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test4</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test4</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test4</span><div class="winner-awards">标题文案2</div></li></ul>';
	// document.getElementById('btn').addEventListener('click',function(){
	//   var dlg = dialog.alert(template,null,function(){
	//     dlg.closeDialog();
	//     dialog.alert('<div class="normal-txt-color">充值成功！</div>','');
	//     return true;
	//   });
	// });
	// var template = '<div class="dialog-content"><div class="permi-block"><strong> 您的位置</strong><p> 大致位置（基于网络）</p><p> 精确位置（基于GPS和网络）</p></div><div class="permi-block"><strong> 系统工具</strong><p> 获取额外的位置信息提供程序命令</p><p> 发送持久广播</p><p> 用户间互动</p><p> 完全允许在用户之间进行互动</p><p> 访问SD卡文件系统</p><p> 修改系统设置</p><p> 安装快捷方式</p><p> 卸载快捷方式</p></div><div class="permi-block"><strong> 网络通信</strong><p> 查看网络连接</p><p> 查看WLAN连接</p><p> 更改网络连接性</p><p> 连接WLAN网络和断开连接</p><p> 完全的网络访问权限</p></div><div class="permi-block"><strong> 相机</strong><p> 拍摄照片和视频</p></div><div class="permi-block"><strong> 状态栏</strong><p> 展开/收拢状态栏</p></div><div class="permi-block"><strong> 影响电池的使用</strong><p> 控制闪光灯</p><p> 控制振动</p><p> 防止手机休眠</p></div><div class="permi-block"><strong> 您的帐户</strong><p> 查找设备上的帐户</p><p> 使用设备上的帐户</p></div><div class="permi-block"><strong> 您的应用信息</strong><p> 检索正在运行的应用</p><p> 开机启动</p><p> 对正在运行的应用重新排序</p></div><div class="permi-block"><strong> 音频设置</strong><p> 更改您的音频设置</p></div><div class="permi-block"><strong> 存储</strong><p> 读取您的SD卡中的内容</p><p> 修改或删除您的SD卡中的内容</p></div><div class="permi-block"><strong> 电话</strong><p> 读取手机状态和身份</p></div><div class="permi-block"><strong> 麦克风</strong><p> 录音</p></div><div class="permi-block"><strong> 其他应用的用户界面</strong><p> 在其他应用之上显示内容</p></div></div>';
	// dialog.alert(template,'');

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
	  },
	  closest: function closest(dom, cls) {
	    var clsRegx = new RegExp('(^|\\s+)' + cls + '(\\s+|$)'),
	        parent = dom;
	
	    if (!!dom.className.match(clsRegx)) return dom;
	
	    while (!!(parent = parent.parentNode) && parent.nodeName.toLowerCase() != 'html') {
	      if (!!parent.className.match(clsRegx)) {
	        return parent;
	      }
	    }
	    return null;
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
	  infoFormHtml.push('<div class="error-tip"></div>');
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
	  if (!document.getElementById('loading-box')) return;
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
	},
	    isConfig = false;
	
	ModalDialog.config = function (config) {
	  var options = domUtil.assign({}, defaultConfig, config);
	
	  if (isConfig) {
	    console.info('modaldialg only can config once');
	    return;
	  }
	  if (options.useHash) {
	    initHash();
	  }
	  isConfig = true;
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
	    setTimeout(function () {
	      var hashVl = hashListener.autoUpdateHash();
	      dialogMap[hashVl] = dialog.id;
	      hashQueue.push(hashVl);
	    }, Math.min(ModalDialog.modalCount, 10));
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
	},
	    winH,
	    winW;
	/*
	生成对话框模板内容
	 */
	function getHtmlContent(options) {
	  var templateHtml = [],
	      header = options.header;
	
	  header = utils.replaceTemlate(header, options);
	
	  templateHtml.push('<div class="modal-dialog ' + options.clazz + '"><div class="dialog-mask"></div><div class="modal-dialog-main"><header>');
	  templateHtml.push(header);
	  templateHtml.push('</header><section><div class="dialog-content"></div></section><footer>');
	  templateHtml.push(createButtons.call(this, options));
	  templateHtml.push('</footer></div></div>');
	
	  return templateHtml.join('');
	}
	
	function resizeWin() {
	  winH = window.innerHeight ? window.innerHeight : document.body.clientHeight;
	  winW = window.innerWidth ? window.innerWidth : document.body.clientWidth;
	}
	utils.bindEvent(window, 'resize', resizeWin);
	
	resizeWin();
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
	  animated: true,
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
	  var dialogDom, dlgPosY, dlgPosX, dlgW, dlgH;
	
	  this.callbacks = options._callBacks;
	  this.id = options.id;
	
	  dialogDom = utils.createHtmlDom(getHtmlContent.call(this, options));
	  dialogDom.setAttribute('data-pos', 0);
	  insertContent(dialogDom, options);
	  document.body.appendChild(dialogDom);
	
	  this.destroyScroll = scrollDlg.initTouch(dialogDom);
	
	  this.winH = winH;
	  this.winW = winW;
	
	  dlgH = dialogDom.offsetHeight;
	  dlgW = dialogDom.offsetWidth;
	  dlgPosY = this.winH - dlgH > 0 ? (this.winH - dlgH) / 2 : this.winH * 0.1;
	  dlgPosX = this.winW - dlgW > 0 ? (this.winW - dlgW) / 2 : this.winW * 0.1;
	
	  _.assign(dialogDom.style, {
	    display: 'block',
	    left: dlgPosX + 'px',
	    top: dlgPosY + 'px'
	  });
	
	  // _.assign(dialogDom.querySelector('.dialog-mask').style,{
	  //   height: ModalDialog.maxH + 50 + 'px'
	  // });
	
	  if (options.animated) dialogDom.querySelector('.modal-dialog-main').className += ' dlg-animation';
	  if (options.useBackground) {
	    var userbgr = options.useBackground;
	    if (!options._callBacks[userbgr]) {
	      options._callBacks[userbgr] = function () {};
	    }
	    dialogDom.querySelector('.dialog-mask').dataset.id = options.useBackground;
	  }
	
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
	    this.destroyScroll && this.destroyScroll();
	
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
	ModalDialog.modalCount = 0;
	
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
	      var touch = e.touches[0],
	          target = utils.closest(e.target, 'dialog-content');
	
	      if (!!target) {
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
	
	      if (isTouch && maxHeight < 0) {
	        if (Math.abs(posX - startPosx) < 5 && Math.abs(posY - startPosy) > 5) {
	          distance = currentPosY + posY - startPosy;
	          if (distance < maxHeight) distance = maxHeight;else if (distance > 0) distance = 0;
	          currentTarget.attributes['data-pos'].value = distance;
	          scrollTo(dlgContent, currentPosY, distance);
	
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
	      target.style.webkitTransform = 'translate3d(0px,' + y + 'px,0px)';
	    }
	    function scrollTo_test(target, curPosY, y) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwZjEyZmE3ZjhkZGIxNGExMjU4ZSIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFzaEhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9kaWFsb2cubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RsZ3Njcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyQ0EsS0FBSSxjQUFjLG9CQUFRLENBQVIsQ0FBbEI7QUFDQSxLQUFJLFNBQVMsb0JBQVEsQ0FBUixDQUFiO0FBQ0EsS0FBSSxRQUFKOztBQUVBLFFBQU8sTUFBUCxDQUFjLEVBQUMsU0FBUSxJQUFULEVBQWQ7O0FBRUEsVUFBUyxjQUFULENBQXdCLE1BQXhCLEVBQWdDLGdCQUFoQyxDQUFpRCxPQUFqRCxFQUF5RCxZQUFVOzs7QUFHaEUsV0FBUSxHQUFSLENBQVksWUFBWjtBQUNBLE9BQUcsQ0FBQyxRQUFKLEVBQWE7QUFDWixZQUFPLEtBQVAsQ0FBYSxnREFBYixFQUE4RCxJQUE5RCxFQUFtRSxZQUFVOztBQUUzRSxjQUFPLEtBQVAsQ0FB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LENBQXJCLEdBQXlCLFNBQXpEO0FBQ0Q7QUFDRCxjQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFBOEIsT0FBOUIsRUFBc0MsQ0FBdEMsRUFBd0M7QUFDdEMsV0FBSSxPQUFPLENBQVg7O0FBRUEsa0JBQVcsQ0FBWDtBQUNBLFdBQUcsU0FBUyxJQUFaLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFRCxlQUFRLFlBQVksWUFBWixFQUF5QixFQUF6QixDQUFSO0FBQ0E7O0FBRUEsZ0JBQVMsWUFBVCxHQUF1QjtBQUNyQixvQkFBVyxJQUFYO0FBQ0EsYUFBRyxVQUFVLFFBQWIsRUFBc0I7QUFDcEI7QUFDQSxxQkFBVSxRQUFWO0FBQ0Q7QUFDRCxnQkFBTyxLQUFQLENBQWEsZUFBYixHQUFnQyxxQkFBcUIsT0FBckIsR0FBK0IsU0FBL0Q7QUFDRDtBQUNELGdCQUFTLFVBQVQsR0FBcUI7QUFDbkIsaUJBQVEsSUFBUjtBQUNBLHVCQUFjLEtBQWQ7QUFDRDtBQUNGO0FBQ0Y7QUE1RmMsRUFBakIsQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMGYxMmZhN2Y4ZGRiMTRhMTI1OGVcbiAqKi8iLCIvLyBpbXBvcnQgaGFzaEhpc3RvcnkgZnJvbSAnLi4vaGFzaEhpc3RvcnkuanMnO1xyXG52YXIgaGFzaEhpc3RvcnkgPSByZXF1aXJlKCcuLi9oYXNoSGlzdG9yeS5qcycpO1xyXG52YXIgZGlhbG9nID0gcmVxdWlyZSgnLi4vaW5kZXguanMnKTtcclxudmFyIGhhc0Nsb3NlO1xyXG5cclxuZGlhbG9nLmNvbmZpZyh7dXNlSGFzaDp0cnVlfSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuMicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gIC8vIGRpYWxvZy5hbGVydCgn5Zyo5LiK57q/5LmL5YmN77yM5oiR5Lus6L+Y5bqU6K+l5bCG5Luj56CB6L+b6KGM5Y6L57yp5bC96YeP5oqK5paH5Lu255qE5L2T56ev5YeP5Yiw5pyA5bCR54S26ICM77yM5oiR5Lus5Y+v5Lul55yL5YiwIFdlYnBhY2sg5omT5YyF5ZCO55qEIGFsbC5qcyDku7bkuI3nhLbogIzvvIzmiJHku6zlj6/ku6XnnIvliLAgV2VicGFjayDmiZPljIXlkI7nmoQgYWxsLmpzIOaWh+S7tuS4jeeEtuiAjO+8jOaIkeS7rOWPr+S7tuS4jeeEtuiAjO+8jOaIkeS7rOWPr+S7peeci+WIsCBXZWJwYWNrIOaJk+WMheWQjueahCBhbGwuanMg5paH5Lu25LiN54S26ICM77yM5oiR5Lus5Y+v5Lu25LiN54S26ICM77yM5oiR5Lus5Y+v5Lul55yL5YiwIFdlYnBhY2sg5omT5YyF5ZCO55qEIGFsbC5qcyDmlofku7bkuI3nhLbogIzvvIzmiJHku6zlj6/ku7bkuI3nhLbogIzvvIzmiJHku6zlj6/ku6XnnIvliLAgV2VicGFjayDmiZPljIXlkI7nmoQgYWxsLmpzIOaWh+S7tuS4jeeEtuiAjO+8jOaIkeS7rOWPr+aWh+S7tuS4jeeEtuiAjO+8jOaIkeS7rOWPr+S7peeci+WIsCBXZWJwYWNrIOaJk+WMheWQjueahCBhbGwuanMg5paH5Lu25LiN54S26ICM77yM5oiR5Lus5Y+v5Lul55yL5YiwIFdlYnBhY2sg5omT5YyF5ZCO55qEIGFsbC5qcyDmlofku7bkuI3jgILnhLbogIzvvIzmiJHku6zlj6/ku6XnnIvliLAgV2VicGFjayDmiZPljIXlkI7nmoQgYWxsLmpzIOaWh+S7tuS4jeS7heayoeacieWOi+e8qe+8jOiAjOS4lOS7o+eggeW9k+S4reeahOazqOmHiuS5n+ayoeacieWOu+aOiVdlYnBhY2sg5ZCM5qC35o+Q5L6b5LqGIFVnbGlmeUpzUGx1Z2luIOeahOaPkuS7tuadpei/m+ihjOWOi+e8qeS7o+eggeaTjeS9nOOAguS9huaYr+WcqOaIkeWwneivleeahOi/h+eoi+S4re+8jOi/meS4quaPkuS7tuWSjCBodG1sLWxvYWRlciDphY3lkIjkvb/nlKjnmoTml7blgJnkvJrlh7rnjrDplJnor6/vvIzlm6DmraTlnKjov5nph4zmiJHkvb/nlKjkuoYgR3VscCDmnaXov5vooYzku6PnoIHljovnvKnnmoTlt6XkvZzjgIJXZWJwYWNrIOS4jiBHdWxwIOmFjeWQiOS9v+eUqOS5n+ebuOW9k+eugOWNle+8jOWPqumcgOimgeWuieijhSBndWxwLXdlYnBhY2vlronoo4UgR3VscCDlkozlhbbku5bmiYDpnIDnmoTlt6XlhbfnvLrngrnvvJrpgJrov4forr7lpIflrr3luqbojIPlm7TljLrpl7Tov5nmoLfnmoTlqpLkvZPmn6Xor6LmnaXliqjmgIHmlLnlj5hyZW3ln7rlh4blgLzvvIzlhbblrp7kuI3lpJ/nsr7noa7vvIzmr5TlpoLvvJrlrr3luqbkuLozNjBweCDlkowg5a695bqm5Li6MzIwcHjnmoTmiYvmnLrvvIzlm6DkuLrlsY/lrr3lnKjlkIzkuIDojIPlm7TljLrpl7TlhoUoPDM3NXB4Ke+8jOaJgOS7peS8muiiq+WQjOetieWvueW+hShyZW3ln7rlh4blgLznm7jlkIwp77yM6ICM5LqL5a6e5LiK5LuW5Lus55qE5bGP5bmV5a695bqm5bm25LiN55u4562J77yM5a6D5Lus55qE5biD5bGA5Lmf5bqU6K+l5pyJ5omA5LiN5ZCM44CC5pyA57uI77yM57uT6K665bCx5piv77ya6L+Z5qC355qE5YGa5rOV77yM5rKh5pyJ5YGa5Yiw6Laz5aSf55qE57K+56Gu77yM5L2G5piv5aSf55So44CC5pys6YOo5YiG5bCG5LiT5rOo5LqOIEphdmFTY3JpcHQg6K+t6KiA5pys6Lqr77yM6ICM5bm26Z2e5bGA6ZmQ5LqO572R6aG15oiW5YW25LuW5a6/5Li7546v5aKD44CC5oOz6KaB5LqG6Kej572R6aG15pyJ5YWz55qEIEFQSScsXCLnoa7orqTmlL7lvIPpooblpZZcIixmdW5jdGlvbigpe1xyXG4vLyBkaWFsb2cuYWxlcnQoJ+WcqOS4iue6v+S5i+WJje+8jOaIkeS7rOi/mOW6lOivpeWwhuS7o+eggei/m+ihjOWOi+e8qeWwvemHj+aKiuaWh+S7tueahOS9k+enr+WHj+WIsOacgOWwkScpO1xyXG4gICBjb25zb2xlLmxvZygnaSBhbSBhbGVydCcpO1xyXG4gICBpZighaGFzQ2xvc2Upe1xyXG4gICAgZGlhbG9nLmFsZXJ0KCflnKjkuIrnur/kuYvliY3vvIzmiJHku6zov5jlupTor6XlsIbku6PnoIHov5vooYzljovnvKnlsL3ph4/miormlofku7bnmoTkvZPnp6/lh4/liLDmnIDlsJHjgIIxPGlucHV0IHR5cGU9XCJ0Jywna2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIGhhc0Nsb3NlID0gdHJ1ZTtcclxuICAgICAgZGlhbG9nLmFsZXJ0KCflnKjkuIrnur/kuYvliY3vvIzmiJHku6zov5jlupTor6XlsIbku6PnoIHov5vooYzljovnvKnlsL3ph4/miormlofku7bnmoTkvZPnp6/lh4/liLDmnIDlsJEnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH0pO1xyXG4gICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gIC8vIH0pO1xyXG4gICAvLyBkaWFsb2cuY29uZmlybSgn5by55qGG5YaF5a655Yy65Z+f5q2k5aSE5bGV56S65ZCE56eN5o+P6L+w5by55qGG5YaF5a655Yy65Z+f5q2k5aSE5bGV56S65ZCE56eN5o+P6L+wJyxmdW5jdGlvbigpe1xyXG4gICAvLyAgICBjb25zb2xlLmxvZygnaSBhbSBjb25maXJtJyk7XHJcbiAgIC8vICAgIGRpYWxvZy5hbGVydCgn5Zyo5LiK57q/5LmL5YmNJyk7XHJcbiAgIC8vICB9LFwi56Gu6K6k5pS+5byD6aKG5aWWXCIpO1xyXG59LGZhbHNlKVxyXG5cclxuLy8gZGlhbG9nLmNvbmZpcm0oJ+W8ueahhuWGheWuueWMuuWfn+atpOWkhOWxleekuuWQhOenjeaPj+i/sOW8ueahhuWGheWuueWMuuWfn+atpOWkhOWxleekuuWQhOenjeaPj+i/sCcsZnVuY3Rpb24oKXtcclxuLy8gICBjb25zb2xlLmxvZygnaSBhbSBjb25maXJtJyk7XHJcbi8vICAgZGlhbG9nLmFsZXJ0KCflnKjkuIrnur/kuYvliY0nKTtcclxuLy8gfSxcIuehruiupOaUvuW8g+mihuWlllwiKTtcclxuLy8gZGlhbG9nLmNvbmZpcm0oJ+WcqOS4iue6v+S5i+WJje+8jOaIkeS7rOi/mOW6lOivpeWwhuS7o+eggei/m+ihjOWOi+e8qeWwvemHj+aKiuaWh+S7tueahOS9k+enr+WHj+WIsOacgOWwkeOAgueEtuiAjO+8jOaIkeS7rOWPr+S7peeci+WIsCBXZWJwYWNrIOaJk+WMheWQjueahCBhbGwuanMg5paH5Lu25LiN5LuF5rKh5pyJ5Y6L57yp77yM6ICM5LiU5Luj56CB5b2T5Lit55qE5rOo6YeK5Lmf5rKh5pyJ5Y675o6JV2VicGFjayDlkIzmoLfmj5DkvpvkuoYgVWdsaWZ5SnNQbHVnaW4g55qE5o+S5Lu25p2l6L+b6KGM5Y6L57yp5Luj56CB5pON5L2c44CC5L2G5piv5Zyo5oiR5bCd6K+V55qE6L+H56iL5Lit77yM6L+Z5Liq5o+S5Lu25ZKMIGh0bWwtbG9hZGVyIOmFjeWQiOS9v+eUqOeahOaXtuWAmeS8muWHuueOsOmUmeivr++8jOWboOatpOWcqOi/memHjOaIkeS9v+eUqOS6hiBHdWxwIOadpei/m+ihjOS7o+eggeWOi+e8qeeahOW3peS9nOOAgldlYnBhY2sg5LiOIEd1bHAg6YWN5ZCI5L2/55So5Lmf55u45b2T566A5Y2V77yM5Y+q6ZyA6KaB5a6J6KOFIGd1bHAtd2VicGFja+WuieijhSBHdWxwIOWSjOWFtuS7luaJgOmcgOeahOW3peWFt+e8uueCue+8mumAmui/h+iuvuWkh+WuveW6puiMg+WbtOWMuumXtOi/meagt+eahOWqkuS9k+afpeivouadpeWKqOaAgeaUueWPmHJlbeWfuuWHhuWAvO+8jOWFtuWunuS4jeWkn+eyvuehru+8jOavlOWmgu+8muWuveW6puS4ujM2MHB4IOWSjCDlrr3luqbkuLozMjBweOeahOaJi+acuu+8jOWboOS4uuWxj+WuveWcqOWQjOS4gOiMg+WbtOWMuumXtOWGhSg8Mzc1cHgp77yM5omA5Lul5Lya6KKr5ZCM562J5a+55b6FKHJlbeWfuuWHhuWAvOebuOWQjCnvvIzogIzkuovlrp7kuIrku5bku6znmoTlsY/luZXlrr3luqblubbkuI3nm7jnrYnvvIzlroPku6znmoTluIPlsYDkuZ/lupTor6XmnInmiYDkuI3lkIzjgILmnIDnu4jvvIznu5PorrrlsLHmmK/vvJrov5nmoLfnmoTlgZrms5XvvIzmsqHmnInlgZrliLDotrPlpJ/nmoTnsr7noa7vvIzkvYbmmK/lpJ/nlKjjgILmnKzpg6jliIblsIbkuJPms6jkuo4gSmF2YVNjcmlwdCDor63oqIDmnKzouqvvvIzogIzlubbpnZ7lsYDpmZDkuo7nvZHpobXmiJblhbbku5blrr/kuLvnjq/looPjgILmg7PopoHkuobop6PnvZHpobXmnInlhbPnmoQgQVBJJyxmdW5jdGlvbigpe1xyXG4vLyAgICBjb25zb2xlLmxvZygnaSBhbSBjb25maXJtJyk7XHJcbi8vICB9LFwi56Gu6K6k5pS+5byD6aKG5aWWXCIsJ+aUvuW8g+WlluWTgScsJ+e7p+e7reWhq+WGmScsZnVuY3Rpb24oKXtcclxuLy8gICAgY29uc29sZS5sb2coJ2kgYW0gY29uZmlybSBjYW5jZWwnKTtcclxuLy8gIH0pXHJcbi8qZGlhbG9nLmFsZXJ0QXdhcmRMaXN0KFt7aW1nVXJsOid4eC5qcGcnLG5hbWU6J3BybyA1J30se2ltZ1VybDoneHguanBnJyxuYW1lOifprYXml48gNSd9LHtpbWdVcmw6J3h4LmpwZycsbmFtZToncHJvIDYnfV0sJ+ehruiupOaUvuW8g+mihuWllj8nLFxyXG4gICAgZnVuY3Rpb24oKXtcclxuICAgICAgZGlhbG9nLmFsZXJ0UGVyc29uSW5mb0RsZyh7b2tDYWxsYmFjazpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGVyc29uaW5mby1kaWFsb2cgaW5wdXQnKTtcclxuICAgICAgICBbXS5zbGljZS5jYWxsKGlucHV0cykuZXZlcnkoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLnZhbHVlKVxyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIH0sdmFsdWVzOlsxLDIsJ3Nmd2UgZeiAjOaXoOazlScsJ2VmJ119KTtcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbigpe1xyXG4gICAgIGNvbnNvbGUubG9nKCdpIGFtIGNvbmZpcm0nKTtcclxuICAgfSxmdW5jdGlvbigpe1xyXG4gICAgIGNvbnNvbGUubG9nKCdpIGFtIGNvbmZpcm0gY2FuY2VsJyk7XHJcbiAgIH0sJ+ehruWumicsJ+WIhuS6q+WIsOaci+WPi+WciCcpOyovXHJcblxyXG5cclxuLy8gZGlhbG9nLmFsZXJ0KHtzZWxlY3Rvcjpkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDEnKVswXX0pO1xyXG4vLyBkaWFsb2cuY29uZmlybSh7c2VsZWN0b3I6ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZm9ybScpfSk7XHJcblxyXG4vLyBkaWFsb2cuY29uZmlybSh7Y29udGVudDon5by55qGG5YaF5a655Yy65Z+f5q2k5aSE5bGV56S65ZCE56eN5o+P6L+w5by55qGG5YaF5a655Yy65Z+f5q2k5aSE5bGV56S65ZCE56eN5o+P6L+wPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIC8+Jyxva0NhbGxiYWNrOmZ1bmN0aW9uKCl7XHJcbi8vICAgY29uc29sZS5sb2coJ2kgYW0gY29uZmlybTogJyArIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpLnZhbHVlKTtcclxuLy8gICBkaWFsb2cuYWxlcnQoJ+WcqOS4iue6v+S5i+WJjScpO1xyXG4vLyB9LHRpdGxlOlwi56Gu6K6k5pS+5byD6aKG5aWWXCIscmV2ZXJzZTp0cnVlfSk7XHJcblxyXG4vLyBkaWFsb2cuc2hvd0xvYWRpbmcoKTtcclxuLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4vLyAgIGRpYWxvZy5oaWRlTG9hZGluZygpO1xyXG4vLyB9LDMwMDApO1xyXG5cclxuLy8gZGlhbG9nLnNob3dNYXNrKCk7XHJcbi8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuLy8gICBkaWFsb2cuaGlkZU1hc2soKTtcclxuLy8gfSwzMDAwKTtcclxuXHJcbi8vIGhhc2hIaXN0b3J5KCkuc3RhcnRMaXN0ZW5lcihmdW5jdGlvbihwYXRoKXtcclxuLy8gICBjb25zb2xlLmxvZyhwYXRoKTtcclxuLy8gfSlcclxuLy9cclxuXHJcbi8vIHZhciB0ZW1wbGF0ZSA9ICc8aW5wdXQgdHlwZT1cInRleHRcIi8+PHVsIGNsYXNzPVwid2lubmVyLWxpc3RcIj48bGk+PHNwYW4gY2xhc3M9XCJ3aW5uZXItbmFtZVwiPnRlc3Q8L3NwYW4+PGRpdiBjbGFzcz1cIndpbm5lci1hd2FyZHNcIj7moIfpopjmlofmoYgxPC9kaXY+PC9saT48bGk+PHNwYW4gY2xhc3M9XCJ3aW5uZXItbmFtZVwiPnRlc3QxPC9zcGFuPjxkaXYgY2xhc3M9XCJ3aW5uZXItYXdhcmRzXCI+5qCH6aKY5paH5qGIMjwvZGl2PjwvbGk+PGxpPjxzcGFuIGNsYXNzPVwid2lubmVyLW5hbWVcIj50ZXN0Mjwvc3Bhbj48ZGl2IGNsYXNzPVwid2lubmVyLWF3YXJkc1wiPuagh+mimOaWh+ahiDI8L2Rpdj48L2xpPjxsaT48c3BhbiBjbGFzcz1cIndpbm5lci1uYW1lXCI+dGVzdCgxKTwvc3Bhbj48ZGl2IGNsYXNzPVwid2lubmVyLWF3YXJkc1wiPuagh+mimOaWh+ahiDI8L2Rpdj48L2xpPjxsaT48c3BhbiBjbGFzcz1cIndpbm5lci1uYW1lXCI+dGVzdDQ8L3NwYW4+PGRpdiBjbGFzcz1cIndpbm5lci1hd2FyZHNcIj7moIfpopjmlofmoYgyPC9kaXY+PC9saT48bGk+PHNwYW4gY2xhc3M9XCJ3aW5uZXItbmFtZVwiPnRlc3Q0PC9zcGFuPjxkaXYgY2xhc3M9XCJ3aW5uZXItYXdhcmRzXCI+5qCH6aKY5paH5qGIMjwvZGl2PjwvbGk+PGxpPjxzcGFuIGNsYXNzPVwid2lubmVyLW5hbWVcIj50ZXN0NDwvc3Bhbj48ZGl2IGNsYXNzPVwid2lubmVyLWF3YXJkc1wiPuagh+mimOaWh+ahiDI8L2Rpdj48L2xpPjxsaT48c3BhbiBjbGFzcz1cIndpbm5lci1uYW1lXCI+dGVzdDQ8L3NwYW4+PGRpdiBjbGFzcz1cIndpbm5lci1hd2FyZHNcIj7moIfpopjmlofmoYgyPC9kaXY+PC9saT48L3VsPic7XHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuLy8gICB2YXIgZGxnID0gZGlhbG9nLmFsZXJ0KHRlbXBsYXRlLG51bGwsZnVuY3Rpb24oKXtcclxuLy8gICAgIGRsZy5jbG9zZURpYWxvZygpO1xyXG4vLyAgICAgZGlhbG9nLmFsZXJ0KCc8ZGl2IGNsYXNzPVwibm9ybWFsLXR4dC1jb2xvclwiPuWFheWAvOaIkOWKn++8gTwvZGl2PicsJycpO1xyXG4vLyAgICAgcmV0dXJuIHRydWU7XHJcbi8vICAgfSk7XHJcbi8vIH0pO1xyXG4vLyB2YXIgdGVtcGxhdGUgPSAnPGRpdiBjbGFzcz1cImRpYWxvZy1jb250ZW50XCI+PGRpdiBjbGFzcz1cInBlcm1pLWJsb2NrXCI+PHN0cm9uZz4g5oKo55qE5L2N572uPC9zdHJvbmc+PHA+IOWkp+iHtOS9jee9ru+8iOWfuuS6jue9kee7nO+8iTwvcD48cD4g57K+56Gu5L2N572u77yI5Z+65LqOR1BT5ZKM572R57uc77yJPC9wPjwvZGl2PjxkaXYgY2xhc3M9XCJwZXJtaS1ibG9ja1wiPjxzdHJvbmc+IOezu+e7n+W3peWFtzwvc3Ryb25nPjxwPiDojrflj5bpop3lpJbnmoTkvY3nva7kv6Hmga/mj5DkvpvnqIvluo/lkb3ku6Q8L3A+PHA+IOWPkemAgeaMgeS5heW5v+aSrTwvcD48cD4g55So5oi36Ze05LqS5YqoPC9wPjxwPiDlrozlhajlhYHorrjlnKjnlKjmiLfkuYvpl7Tov5vooYzkupLliqg8L3A+PHA+IOiuv+mXrlNE5Y2h5paH5Lu257O757ufPC9wPjxwPiDkv67mlLnns7vnu5/orr7nva48L3A+PHA+IOWuieijheW/q+aNt+aWueW8jzwvcD48cD4g5Y246L295b+r5o235pa55byPPC9wPjwvZGl2PjxkaXYgY2xhc3M9XCJwZXJtaS1ibG9ja1wiPjxzdHJvbmc+IOe9kee7nOmAmuS/oTwvc3Ryb25nPjxwPiDmn6XnnIvnvZHnu5zov57mjqU8L3A+PHA+IOafpeeci1dMQU7ov57mjqU8L3A+PHA+IOabtOaUuee9kee7nOi/nuaOpeaApzwvcD48cD4g6L+e5o6lV0xBTue9kee7nOWSjOaWreW8gOi/nuaOpTwvcD48cD4g5a6M5YWo55qE572R57uc6K6/6Zeu5p2D6ZmQPC9wPjwvZGl2PjxkaXYgY2xhc3M9XCJwZXJtaS1ibG9ja1wiPjxzdHJvbmc+IOebuOacujwvc3Ryb25nPjxwPiDmi43mkYTnhafniYflkozop4bpopE8L3A+PC9kaXY+PGRpdiBjbGFzcz1cInBlcm1pLWJsb2NrXCI+PHN0cm9uZz4g54q25oCB5qCPPC9zdHJvbmc+PHA+IOWxleW8gC/mlLbmi6LnirbmgIHmoI88L3A+PC9kaXY+PGRpdiBjbGFzcz1cInBlcm1pLWJsb2NrXCI+PHN0cm9uZz4g5b2x5ZON55S15rGg55qE5L2/55SoPC9zdHJvbmc+PHA+IOaOp+WItumXquWFieeBrzwvcD48cD4g5o6n5Yi25oyv5YqoPC9wPjxwPiDpmLLmraLmiYvmnLrkvJHnnKA8L3A+PC9kaXY+PGRpdiBjbGFzcz1cInBlcm1pLWJsb2NrXCI+PHN0cm9uZz4g5oKo55qE5biQ5oi3PC9zdHJvbmc+PHA+IOafpeaJvuiuvuWkh+S4iueahOW4kOaItzwvcD48cD4g5L2/55So6K6+5aSH5LiK55qE5biQ5oi3PC9wPjwvZGl2PjxkaXYgY2xhc3M9XCJwZXJtaS1ibG9ja1wiPjxzdHJvbmc+IOaCqOeahOW6lOeUqOS/oeaBrzwvc3Ryb25nPjxwPiDmo4DntKLmraPlnKjov5DooYznmoTlupTnlKg8L3A+PHA+IOW8gOacuuWQr+WKqDwvcD48cD4g5a+55q2j5Zyo6L+Q6KGM55qE5bqU55So6YeN5paw5o6S5bqPPC9wPjwvZGl2PjxkaXYgY2xhc3M9XCJwZXJtaS1ibG9ja1wiPjxzdHJvbmc+IOmfs+mikeiuvue9rjwvc3Ryb25nPjxwPiDmm7TmlLnmgqjnmoTpn7PpopHorr7nva48L3A+PC9kaXY+PGRpdiBjbGFzcz1cInBlcm1pLWJsb2NrXCI+PHN0cm9uZz4g5a2Y5YKoPC9zdHJvbmc+PHA+IOivu+WPluaCqOeahFNE5Y2h5Lit55qE5YaF5a65PC9wPjxwPiDkv67mlLnmiJbliKDpmaTmgqjnmoRTROWNoeS4reeahOWGheWuuTwvcD48L2Rpdj48ZGl2IGNsYXNzPVwicGVybWktYmxvY2tcIj48c3Ryb25nPiDnlLXor508L3N0cm9uZz48cD4g6K+75Y+W5omL5py654q25oCB5ZKM6Lqr5Lu9PC9wPjwvZGl2PjxkaXYgY2xhc3M9XCJwZXJtaS1ibG9ja1wiPjxzdHJvbmc+IOm6puWFi+mjjjwvc3Ryb25nPjxwPiDlvZXpn7M8L3A+PC9kaXY+PGRpdiBjbGFzcz1cInBlcm1pLWJsb2NrXCI+PHN0cm9uZz4g5YW25LuW5bqU55So55qE55So5oi355WM6Z2iPC9zdHJvbmc+PHA+IOWcqOWFtuS7luW6lOeUqOS5i+S4iuaYvuekuuWGheWuuTwvcD48L2Rpdj48L2Rpdj4nO1xyXG4vLyBkaWFsb2cuYWxlcnQodGVtcGxhdGUsJycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V4YW1wbGUvZW50cnkuanNcbiAqKi8iLCJpbXBvcnQge2JpbmRFdmVudCx1bkJpbmRFdmVudH0gZnJvbSAnLi9kb20uanMnO1xyXG5cclxuY29uc3QgSGFzaENoYW5nZUV2ZW50ID0gJ2hhc2hjaGFuZ2UnO1xyXG5jb25zdCBxdWVyeV9rZXkgPSAnX2RnX2hhc2gnXHJcblxyXG5jb25zdCBoYXNoSGlzdG9yeSA9IChvcHRpb25zKT0+e1xyXG5cclxuICBsZXQgcHJldkxvY2F0aW9uID0gJycsXHJcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xyXG5cclxuICBjb25zdCBnZXRDdXJyZW50SGFzaFBhdGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICAgICAgICByZWd4ID1uZXcgUmVnRXhwKGBeJHtxdWVyeV9rZXl9PSguKilgKTtcclxuICAgIGxldCBpbmRleCA9IGhyZWYuaW5kZXhPZignIycpLFxyXG4gICAgICAgIHF1ZXJ5SW5kZXgsXHJcbiAgICAgICAgc3RyID0gJycsXHJcbiAgICAgICAgbWF0Y2hlcztcclxuXHJcbiAgICBpZihpbmRleCAhPSAtMSl7XHJcbiAgICAgIHN0ciA9IGhyZWYuc3Vic3RyaW5nKGluZGV4ICsgMSkgfHwgJyc7XHJcbiAgICAgIGlmKHF1ZXJ5SW5kZXggPSBzdHIuaW5kZXhPZignPycpID4gMCl7XHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICAgIG1hdGNoZXMgPSByZWd4LmV4ZWMoc3RyKTtcclxuICAgICAgaWYobWF0Y2hlcyl7XHJcbiAgICAgICAgc3RyID0gbWF0Y2hlc1sxXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3BMaXN0ZW5lciA9ICgpPT57XHJcbiAgICB1bkJpbmRFdmVudCh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlzdGVuZXIgPSAoY2FsbGJhY2spPT57XHJcbiAgICBsaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+XHJcbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBjYWxsYmFjaylcclxuICB9O1xyXG5cclxuICBjb25zdCBwdXNoSGFzaFBhdGggPSAocGF0aCkgPT5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aFxyXG5cclxuICBjb25zdCByZXBsYWNlSGFzaFBhdGggPSAocGF0aCkgPT5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGF0aFxyXG4gICAgKVxyXG5cclxuICBjb25zdCBhdXRvVXBkYXRlSGFzaCA9ICgpPT57XHJcbiAgICBsZXQgaGFzaFBhdGggPSBnZXRDdXJyZW50SGFzaFBhdGgoKSoxO1xyXG4gICAgaWYoIWhhc2hQYXRoKVxyXG4gICAgICBoYXNoUGF0aCA9IDE7XHJcbiAgICBlbHNlXHJcbiAgICAgIGhhc2hQYXRoICsrO1xyXG4gICAgcHVzaEhhc2hQYXRoKHF1ZXJ5X2tleSArICc9JyArIGhhc2hQYXRoKTtcclxuICAgIHJldHVybiBoYXNoUGF0aDtcclxuICB9O1xyXG5cclxuICBjb25zdCBnbyA9IChuKSA9PiB7XHJcbiAgICBpZiAobilcclxuICAgICAgd2luZG93Lmhpc3RvcnkuZ28obik7XHJcbiAgfVxyXG4gIGNvbnN0IGJhY2sgPSAoKT0+e1xyXG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSGFzaENoYW5nZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGdldEN1cnJlbnRIYXNoUGF0aCgpO1xyXG5cclxuICAgIGlmIChwcmV2TG9jYXRpb24gPT09IGN1cnJlbnRMb2NhdGlvbilcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyPT57XHJcbiAgICAgIGxpc3RlbmVyKGN1cnJlbnRMb2NhdGlvbixwcmV2TG9jYXRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJldkxvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xyXG4gIH1cclxuXHJcbiAgYmluZEV2ZW50KHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEN1cnJlbnRIYXNoUGF0aCxcclxuICAgIGxpc3RlbmVyLFxyXG4gICAgc3RvcExpc3RlbmVyLFxyXG4gICAgcHVzaEhhc2hQYXRoLFxyXG4gICAgcmVwbGFjZUhhc2hQYXRoLFxyXG4gICAgYXV0b1VwZGF0ZUhhc2gsXHJcbiAgICBnbyxcclxuICAgIGJhY2tcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaGFzaEhpc3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaGFzaEhpc3RvcnkuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBjcmVhdGVIdG1sRG9tOiAoZnVuY3Rpb24gY3JlYXRlSHRtbCgpe1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbihodG1sKXtcclxuICAgICAgdmFyIHRlbXA7XHJcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0ZW1wID0gZGl2LmNoaWxkcmVuWzBdO1xyXG4gICAgICBkaXYucmVtb3ZlQ2hpbGQodGVtcCk7XHJcbiAgICAgIHJldHVybiB0ZW1wO1xyXG4gICAgfVxyXG4gIH0pKCksXHJcbiAgcmVwbGFjZVRlbWxhdGU6IGZ1bmN0aW9uKHN0cixkYXRhKXtcclxuICAgIHZhciByZWd4ID0gbmV3IFJlZ0V4cCgveyguKj8pfS9nKSxcclxuICAgICAgICB0ZW1wO1xyXG4gICAgd2hpbGUodGVtcCA9IHJlZ3guZXhlYyhzdHIpKXtcclxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UodGVtcFswXSxkYXRhW3RlbXBbMV1dKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHI7XHJcbiAgfSxcclxuICBiaW5kRXZlbnQ6IGZ1bmN0aW9uKGRvbSxuYW1lLGZuKXtcclxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyXHJcbiAgICAgID8gZG9tLmFkZEV2ZW50TGlzdGVuZXIobmFtZSxmbixmYWxzZSlcclxuICAgICAgOiBkb20uYXR0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZuKTtcclxuICB9LFxyXG4gIHVuQmluZEV2ZW50OiBmdW5jdGlvbihkb20sbmFtZSxmbil7XHJcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lclxyXG4gICAgICA/IGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsZm4sZmFsc2UpXHJcbiAgICAgIDogZG9tLmRldGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmbik7XHJcbiAgfSxcclxuICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBrZXkgKyBcIj0oW14mXSopKCZ8JClcIiwgXCJpXCIpO1xyXG4gICAgICB2YXIgciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpLm1hdGNoKHJlZyk7XHJcbiAgICAgIGlmIChyICE9IG51bGwpIHJldHVybiBkZWNvZGVVUkkoclsyXSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH0sXHJcbiAgYXNzaWduOiBmdW5jdGlvbigpe1xyXG4gICAgdmFyIHRlbXAgPSBhcmd1bWVudHNbMF07XHJcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgIGZvcih2YXIgaT0wLGxlbj1hcmdzLmxlbmd0aDtpPGxlbjtpKyspe1xyXG4gICAgICB2YXIgaXRlbSA9IGFyZ3NbaV07XHJcbiAgICAgIGZvcih2YXIgcCBpbiBpdGVtKXtcclxuICAgICAgICBpZihpdGVtLmhhc093blByb3BlcnR5KHApKXtcclxuICAgICAgICAgIHRlbXBbcF0gPSBpdGVtW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbiAgfSxcclxuICBjbG9zZXN0OiBmdW5jdGlvbihkb20sY2xzKXtcclxuICAgIHZhciBjbHNSZWd4ID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMrKScrIGNscyArICcoXFxcXHMrfCQpJyksXHJcbiAgICAgICAgcGFyZW50ID0gZG9tO1xyXG5cclxuICAgIGlmKCEhZG9tLmNsYXNzTmFtZS5tYXRjaChjbHNSZWd4KSlcclxuICAgICAgcmV0dXJuIGRvbTtcclxuXHJcbiAgICB3aGlsZSghIShwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkgJiYgIHBhcmVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdodG1sJyl7XHJcbiAgICAgIGlmKCEhcGFyZW50LmNsYXNzTmFtZS5tYXRjaChjbHNSZWd4KSl7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZG9tLmpzXG4gKiovIiwicmVxdWlyZSgnLi9jc3MvZGlhbG9nLmxlc3MnKTtcclxudmFyIGRvbVV0aWwgPSByZXF1aXJlKCcuL2RvbS5qcycpO1xyXG52YXIgTW9kYWxEaWFsb2cgPSByZXF1aXJlKCcuL21vZGFsLmpzJyk7XHJcbnZhciBoYXNoSGlzdG9yeSA9IHJlcXVpcmUoJy4vaGFzaEhpc3RvcnkuanMnKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUGFyYW1zKHBhcmFtKXtcclxuICAgIHZhciByZXMgPSB7fTtcclxuXHJcbiAgICBmb3IodmFyIHAgaW4gcGFyYW0pe1xyXG4gICAgICBpZihwYXJhbS5oYXNPd25Qcm9wZXJ0eShwKSl7XHJcbiAgICAgICAgaWYodHlwZW9mIHBhcmFtW3BdICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgIHJlc1twXSA9IHBhcmFtW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKXtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBPYmplY3RdJztcclxuICB9XHJcbiAgZnVuY3Rpb24gbm9vcCgpe31cclxuXHJcbiAgTW9kYWxEaWFsb2cuYWxlcnQgPSBmdW5jdGlvbihjb250ZW50LHRpdGxlLGNhbGxiYWNrLGRvbSxjbHMpe1xyXG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcclxuXHJcbiAgICBjbHogKz0gJyBhbGVydC1kaWFsb2cnO1xyXG5cclxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XHJcbiAgICAgIGNvbnRlbnQgPSBjcmVhdGVQYXJhbXMoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgIG9rQ2FsbGJhY2s6Y2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBkb21cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudC5va0NhbGxiYWNrID0gY29udGVudC5va0NhbGxiYWNrIHx8IG5vb3A7XHJcbiAgICBjb250ZW50LmNsYXp6ID0gY2x6O1xyXG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nKGNvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgTW9kYWxEaWFsb2cuY29uZmlybSA9IGZ1bmN0aW9uKGNvbnRlbnQsc3VyZUZuLHRpdGxlLGJ0VGV4dDEsYnRUZXh0MixjYW5jZWxGbixjbHMpe1xyXG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcclxuXHJcbiAgICBjbHogKz0gJyBjb25maXJtLWRpYWxvZyc7XHJcblxyXG4gICAgaWYodHlwZW9mIGNvbnRlbnQgIT09ICdvYmplY3QnKXtcclxuICAgICAgY29udGVudCA9IGNyZWF0ZVBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgb2tDYWxsYmFjazpzdXJlRm4sXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGxiYWNrOmNhbmNlbEZuLFxyXG4gICAgICAgICAgICAgICAgICBzdXJlU3RyOiBidFRleHQyLFxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxTdHI6YnRUZXh0MVxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZW50Lm9rQ2FsbGJhY2sgPSBjb250ZW50Lm9rQ2FsbGJhY2sgfHwgbm9vcDtcclxuICAgIGNvbnRlbnQuY2FuY2VsQ2FsbGJhY2sgPSBjb250ZW50LmNhbmNlbENhbGxiYWNrIHx8IG5vb3A7XHJcbiAgICBjb250ZW50LmNsYXp6ID0gY2x6O1xyXG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nKGNvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgTW9kYWxEaWFsb2cuYWxlcnRBd2FyZExpc3QgPSBmdW5jdGlvbihkYXRhbGlzdCx0aXRsZSxpbnB1dENhbGxiYWNrLG9rRm4sY2FuY2VsRm4sYnRUZXh0MSxidFRleHQyKXtcclxuICAgIHZhciBhd2FyZExpc3RIdG1sID1bJzxkaXYgY2xhc3M9XCJkbGctYXdhcmQtbGlzdFwiPjx1bD4nXSxcclxuICAgICAgICBzZXR0aW5ncywgcmVzdWx0O1xyXG5cclxuICAgIGlmKCFpc1BsYWluT2JqZWN0KGRhdGFsaXN0KSl7XHJcbiAgICAgIHNldHRpbmdzID0gY3JlYXRlUGFyYW1zKHtcclxuICAgICAgICBkYXRhTGlzdDpkYXRhbGlzdCxcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgb2tDYWxsYmFjazpva0ZuLFxyXG4gICAgICAgIGNhbmNlbENhbGxiYWNrOmNhbmNlbEZuLFxyXG4gICAgICAgIHN1cmVTdHI6IGJ0VGV4dDIgfHwgXCLliIbkuqvliLDmnIvlj4vlnIhcIixcclxuICAgICAgICBjYW5jZWxTdHI6YnRUZXh0MSB8fCBcIuehruWumlwiLFxyXG4gICAgICAgIGZpbGxmb3JtOiBpbnB1dENhbGxiYWNrXHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHNldHRpbmdzID0gZGF0YWxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dGluZ3MuY2xhenogPSAnbXlhd2FyZC1kaWFsb2cnO1xyXG5cclxuICAgIHJlc3VsdCA9IHNldHRpbmdzLmRhdGFMaXN0IHx8IFtdO1xyXG5cclxuICAgIGZvcih2YXIgaT0wLCBsZW4gPSByZXN1bHQubGVuZ3RoO2kgPCBsZW47IGkrKyl7XHJcbiAgICAgIHZhciBpdGVtID0gcmVzdWx0W2ldO1xyXG4gICAgICBhd2FyZExpc3RIdG1sLnB1c2goJzxsaT48aW1nIHNyYz1cIicgKyBpdGVtLmltZ1VybCArICdcIiAvPjxkaXYgY2xhc3M9XCJpdGVtLXRpdGxlXCI+JyArIGl0ZW0ubmFtZSArXCI8L2Rpdj48L2xpPlwiKTtcclxuICAgIH1cclxuICAgIGF3YXJkTGlzdEh0bWwucHVzaCgnPC91bD48ZGl2IGNsYXNzPVwiYWRkcmVzcy1jb250cm9sbGVyXCI+PHNwYW4gY2xhc3M9XCJkbGctYWRkcmVzc1wiPuaUtui0p+WcsOWdgDo8L3NwYW4+PHNwYW4gY2xhc3M9XCJkbGctaW5wdXRcIiBkYXRhLWlkPVwiZmlsbGZvcm1cIj7loavlhpk8L3NwYW4+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgc2V0dGluZ3MuY29udGVudCA9IGF3YXJkTGlzdEh0bWwuam9pbignJyk7XHJcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coc2V0dGluZ3MpO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmFsZXJ0UGVyc29uSW5mb0RsZyA9IGZ1bmN0aW9uKGZvcm1GaWVsZCx2YWx1ZXMsb2tGbixjYW5jZWxGbixidFRleHQxLGJ0VGV4dDIpe1xyXG4gICAgdmFyIGluZm9Gb3JtSHRtbCA9IFtcIjxmb3JtPlwiXSxcclxuICAgICAgICBpbnB1dHMsdmFsdWVzLHNldHRpbmdzLGluZm9Gb3JtRG9tIDtcclxuXHJcbiAgICBpZighaXNQbGFpbk9iamVjdChmb3JtRmllbGQpKXtcclxuICAgICAgc2V0dGluZ3MgPSBjcmVhdGVQYXJhbXMoe1xyXG4gICAgICAgIGZvcm1GaWVsZDpmb3JtRmllbGQsXHJcbiAgICAgICAgb2tDYWxsYmFjazpva0ZuLFxyXG4gICAgICAgIGNhbmNlbENhbGxiYWNrOmNhbmNlbEZuLFxyXG4gICAgICAgIHN1cmVTdHI6IGJ0VGV4dDIsXHJcbiAgICAgICAgY2FuY2VsU3RyOmJ0VGV4dDEsXHJcbiAgICAgICAgdmFsdWVzOnZhbHVlcyB8fCBbXVxyXG4gICAgICB9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICBzZXR0aW5ncyA9IGZvcm1GaWVsZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXR0aW5ncy5va0NhbGxiYWNrID0gc2V0dGluZ3Mub2tDYWxsYmFjayB8fCBub29wO1xyXG4gICAgc2V0dGluZ3MuY2FuY2VsQ2FsbGJhY2sgPSBzZXR0aW5ncy5jYW5jZWxDYWxsYmFjayB8fCBub29wO1xyXG4gICAgZm9ybUZpZWxkID0gc2V0dGluZ3MuZm9ybUZpZWxkID0gc2V0dGluZ3MuZm9ybUZpZWxkIHx8IFtcclxuICAgICAgICAgICAge25hbWU6J3JlY05hbWUnLHZhbHVlOifmlLbku7bkuro6J30sXHJcbiAgICAgICAgICAgIHtuYW1lOidtb2JpbGVwaG9uZScsdmFsdWU6J+aJi+acuuWPt+eggTonfSxcclxuICAgICAgICAgICAge25hbWU6J3JlY0FkZHJlc3MnLHZhbHVlOifmlLbku7blnLDlnYA6J30sXHJcbiAgICAgICAgICAgIHtuYW1lOidtZXNzYWdlJyx2YWx1ZTon55WZ6KiAOid9XHJcbiAgICAgICAgICBdO1xyXG4gICAgc2V0dGluZ3MuY2xhenogPSAncGVyc29uaW5mby1kaWFsb2cnO1xyXG4gICAgc2V0dGluZ3MuaGVhZGVyID0gJyc7XHJcblxyXG4gICAgZm9yKHZhciBpPTAsIGxlbiA9IGZvcm1GaWVsZC5sZW5ndGg7aSA8IGxlbjsgaSsrKXtcclxuICAgICAgdmFyIGl0ZW0gPSBmb3JtRmllbGRbaV07XHJcbiAgICAgIGluZm9Gb3JtSHRtbC5wdXNoKCc8ZGl2IGNsYXNzPVwiZm9ybS1pdGVtXCI+PGxhYmVsPicpO1xyXG4gICAgICBpbmZvRm9ybUh0bWwucHVzaChpdGVtLnZhbHVlKTtcclxuICAgICAgaW5mb0Zvcm1IdG1sLnB1c2goJzwvbGFiZWw+PGlucHV0IGNsYXNzPVwiZm9ybS10ZXh0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiJyArIGl0ZW0ubmFtZSArICdcIi8+PC9kaXY+Jyk7XHJcbiAgICB9XHJcbiAgICBpbmZvRm9ybUh0bWwucHVzaCgnPGRpdiBjbGFzcz1cImVycm9yLXRpcFwiPjwvZGl2PicpO1xyXG4gICAgaW5mb0Zvcm1IdG1sLnB1c2goXCI8L2Zvcm0+XCIpO1xyXG5cclxuICAgIGluZm9Gb3JtRG9tID0gZG9tVXRpbC5jcmVhdGVIdG1sRG9tKGluZm9Gb3JtSHRtbC5qb2luKCcnKSk7XHJcblxyXG4gICAgaW5wdXRzID0gaW5mb0Zvcm1Eb20ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgIHZhbHVlcyA9IHNldHRpbmdzLnZhbHVlcztcclxuICAgIGZvcih2YXIgaT0wLGxlbj1pbnB1dHMubGVuZ3RoO2k8bGVuO2krKyl7XHJcbiAgICAgIGlmKHR5cGVvZiB2YWx1ZXNbaV0gIT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgaW5wdXRzW2ldLnZhbHVlID0gdmFsdWVzW2ldO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHRpbmdzLnNlbGVjdG9yID0gaW5mb0Zvcm1Eb207XHJcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coc2V0dGluZ3MpO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLnNob3dMb2FkaW5nID0gZnVuY3Rpb24oKXtcclxuICAgIGlmKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1ib3gnKSl7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tVXRpbC5jcmVhdGVIdG1sRG9tKCc8ZGl2IGlkPVwibG9hZGluZy1ib3hcIiBjbGFzcz1cImRpYWxvZy1tYXNrXCI+PGRpdiBjbGFzcz1cImxvYWQtY29udGFpblwiPicgK1xyXG4gICAgICAgICc8c3BhbiBjbGFzcz1cImxvYWQxXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwibG9hZDJcIj48L3NwYW4+PC9kaXY+PC9kaXY+JykpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmctYm94Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbigpe1xyXG4gICAgaWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nLWJveCcpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH07XHJcbiAgTW9kYWxEaWFsb2cuc2hvd01hc2sgPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGRpYWxvZ01hc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLW1hc2snKTtcclxuXHJcbiAgICBpZighZGlhbG9nTWFzayl7XHJcbiAgICAgIGRpYWxvZ01hc2sgPSBkb21VdGlsLmNyZWF0ZUh0bWxEb20oXCI8ZGl2IGNsYXNzPSdkaWFsb2ctbWFzaycgaWQ9J2FwcC1tYXNrJz48L2Rpdj5cIik7XHJcbiAgICAgIGRvbVV0aWwuYmluZEV2ZW50KGRpYWxvZ01hc2ssJ3RvdWNoc3RhcnQnLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dNYXNrKTtcclxuICAgIH1cclxuICAgIGRpYWxvZ01hc2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfTtcclxuICBNb2RhbERpYWxvZy5oaWRlTWFzayA9IGZ1bmN0aW9uKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH07XHJcblxyXG4gIHZhciBkZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgICB1c2VIYXNoOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGlzQ29uZmlnID0gZmFsc2U7XHJcblxyXG4gIE1vZGFsRGlhbG9nLmNvbmZpZyA9IGZ1bmN0aW9uKGNvbmZpZyl7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGRvbVV0aWwuYXNzaWduKHt9LGRlZmF1bHRDb25maWcsY29uZmlnKTtcclxuXHJcbiAgICBpZihpc0NvbmZpZyl7XHJcbiAgICAgIGNvbnNvbGUuaW5mbygnbW9kYWxkaWFsZyBvbmx5IGNhbiBjb25maWcgb25jZScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZihvcHRpb25zLnVzZUhhc2gpe1xyXG4gICAgICBpbml0SGFzaCgpO1xyXG4gICAgfVxyXG4gICAgaXNDb25maWcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdEhhc2goKXtcclxuICAgIHZhciBoYXNoTGlzdGVuZXIgPSBoYXNoSGlzdG9yeSgpLFxyXG4gICAgICAgIGRpYWxvZ01hcCA9IHt9LFxyXG4gICAgICAgIGhhc2hRdWV1ZSA9IFtdO1xyXG5cclxuICAgIGhhc2hMaXN0ZW5lci5saXN0ZW5lcihmdW5jdGlvbihwYXRoLHByZXBhdGgpe1xyXG4gICAgICB2YXIgcHJlcGF0aCA9IHByZXBhdGggKiAxO1xyXG5cclxuICAgICAgaWYoISFwcmVwYXRoICYmIHBhdGggLSBwcmVwYXRoIDwgMCl7XHJcbiAgICAgICAgcmVtb3ZlRGlhbG9nQnlIYXNoKHByZXBhdGgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgIHF1ZXVlIC0tPiBoYXNoIC0tPiBkaWFsb2dJZCAtLT4gbW9kYWxcclxuICAgICAqL1xyXG4gICAgTW9kYWxEaWFsb2cuYWZ0ZXJMaXN0ZW5lcihmdW5jdGlvbihkaWFsb2cpe1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGhhc2hWbCA9IGhhc2hMaXN0ZW5lci5hdXRvVXBkYXRlSGFzaCgpO1xyXG4gICAgICAgIGRpYWxvZ01hcFtoYXNoVmxdID0gZGlhbG9nLmlkO1xyXG4gICAgICAgIGhhc2hRdWV1ZS5wdXNoKGhhc2hWbCk7XHJcbiAgICAgIH0sTWF0aC5taW4oTW9kYWxEaWFsb2cubW9kYWxDb3VudCwxMCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgTW9kYWxEaWFsb2cuY2xvc2VkTGlzdGVuZXIoZnVuY3Rpb24oZGlhbG9nKXtcclxuICAgICAgdmFyIHVuVXN1YWxJZHggPSBoYXNoUXVldWUubGVuZ3RoIC0gMixcclxuICAgICAgICAgIGhhc2h2bCA9IGhhc2hRdWV1ZVt1blVzdWFsSWR4XSxcclxuICAgICAgICAgIGxhc3RJdGVtO1xyXG5cclxuICAgICAgaWYoZGlhbG9nTWFwW2hhc2h2bF0gPT0gZGlhbG9nLmlkKXtcclxuICAgICAgICBoYXNoUXVldWUuc3BsaWNlKHVuVXN1YWxJZHgsMSk7XHJcbiAgICAgICAgZGlhbG9nTWFwW2hhc2h2bF0gPSBkaWFsb2dNYXBbaGFzaFF1ZXVlW3VuVXN1YWxJZHhdXVxyXG4gICAgICAgIGRlbGV0ZSBkaWFsb2dNYXBbaGFzaFF1ZXVlW3VuVXN1YWxJZHhdXTtcclxuICAgICAgICBoYXNoUXVldWVbdW5Vc3VhbElkeF0tLTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgbGFzdEl0ZW0gPSBoYXNoUXVldWUucG9wKCk7XHJcbiAgICAgICAgZGVsZXRlIGRpYWxvZ01hcFtsYXN0SXRlbV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGhhc2hMaXN0ZW5lci5nZXRDdXJyZW50SGFzaFBhdGgoKSA+IDApXHJcbiAgICAgICAgaGFzaExpc3RlbmVyLmJhY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZURpYWxvZ0J5SGFzaChoYXNodmwpe1xyXG4gICAgICB2YXIgZGlhbG9nTGlzdCA9IE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3QsXHJcbiAgICAgICAgICBzcGxpdEluZGV4O1xyXG5cclxuICAgICAgaGFzaFF1ZXVlLmV2ZXJ5KGZ1bmN0aW9uKGl0ZW0saW5kZXgpe1xyXG4gICAgICAgIGlmKGl0ZW0gPT0gaGFzaHZsKXtcclxuICAgICAgICAgIHNwbGl0SW5kZXggPSBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYoc3BsaXRJbmRleCAhPSBudWxsKXtcclxuXHJcbiAgICAgICAgaGFzaFF1ZXVlLnNsaWNlKHNwbGl0SW5kZXgpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICBkaWFsb2dMaXN0W2RpYWxvZ01hcFtpdGVtXV0uY2xvc2VEaWFsb2codHJ1ZSk7XHJcbiAgICAgICAgICBkZWxldGUgZGlhbG9nTWFwW2l0ZW1dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhhc2hRdWV1ZSA9IGhhc2hRdWV1ZS5zbGljZSgwLHNwbGl0SW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBNb2RhbERpYWxvZztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY3NzL2RpYWxvZy5sZXNzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi9kb20uanMnKTtcclxudmFyIHNjcm9sbERsZyA9IHJlcXVpcmUoJy4vZGxnc2Nyb2xsLmpzJyk7XHJcbnZhciBfID0ge1xyXG4gIGFzc2lnbjogdXRpbHMuYXNzaWduXHJcbn0sIHdpbkgsIHdpblc7XHJcbi8qXHJcbueUn+aIkOWvueivneahhuaooeadv+WGheWuuVxyXG4gKi9cclxuICBmdW5jdGlvbiBnZXRIdG1sQ29udGVudChvcHRpb25zKXtcclxuICAgIHZhciB0ZW1wbGF0ZUh0bWwgPSBbXSxcclxuICAgICAgICBoZWFkZXIgPSBvcHRpb25zLmhlYWRlcjtcclxuXHJcbiAgICBoZWFkZXIgPSB1dGlscy5yZXBsYWNlVGVtbGF0ZShoZWFkZXIsb3B0aW9ucyk7XHJcblxyXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgJyArIG9wdGlvbnMuY2xhenogKyAnXCI+PGRpdiBjbGFzcz1cImRpYWxvZy1tYXNrXCI+PC9kaXY+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZy1tYWluXCI+PGhlYWRlcj4nKTtcclxuICAgIHRlbXBsYXRlSHRtbC5wdXNoKGhlYWRlcik7XHJcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPC9oZWFkZXI+PHNlY3Rpb24+PGRpdiBjbGFzcz1cImRpYWxvZy1jb250ZW50XCI+PC9kaXY+PC9zZWN0aW9uPjxmb290ZXI+Jyk7XHJcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaChjcmVhdGVCdXR0b25zLmNhbGwodGhpcyxvcHRpb25zKSk7XHJcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPC9mb290ZXI+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXBsYXRlSHRtbC5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2l6ZVdpbigpe1xyXG4gICAgd2luSCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgd2luVyA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gIH1cclxuICB1dGlscy5iaW5kRXZlbnQod2luZG93LCdyZXNpemUnLHJlc2l6ZVdpbik7XHJcblxyXG4gIHJlc2l6ZVdpbigpO1xyXG4gIC8qXHJcbiAg5Yib5bu65bqV6YOo5oyJ6ZKuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY3JlYXRlQnV0dG9ucyhvcHRpb25zKXtcclxuICAgIHZhciBidG5zID0gb3B0aW9ucy5idXR0b25zIHx8IFtdLFxyXG4gICAgICAgIHRlbXBsYXRlID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie2Nsc31cIiBkYXRhLWlkPVwie2lkfVwiID57bmFtZX08L2J1dHRvbj4nLFxyXG4gICAgICAgIGJ0blRtcGxzID0gJycsXHJcbiAgICAgICAgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgb25lQnRuQ2x6PScnO1xyXG5cclxuICAgIGlmKG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2spe1xyXG4gICAgICBidG5zLnB1c2goe1xyXG4gICAgICAgIGlkOiAnY2FuY2VsJyxcclxuICAgICAgICBuYW1lOiBvcHRpb25zLmNhbmNlbFN0cixcclxuICAgICAgICBjYWxsYmFjazogb3B0aW9ucy5jYW5jZWxDYWxsYmFjayxcclxuICAgICAgICBjbHM6IFwiY2FuY2xlLWJ0blwiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGJ0bnMubGVuZ3RoID09MClcclxuICAgICAgb25lQnRuQ2x6ID0gJyBtb2RhbC1kaWFsb2ctb25lYnRuJztcclxuXHJcbiAgICBpZihvcHRpb25zLm9rQ2FsbGJhY2spe1xyXG4gICAgICBidG5zLnB1c2goe1xyXG4gICAgICAgIGlkOiAnb2snLFxyXG4gICAgICAgIG5hbWU6IG9wdGlvbnMuc3VyZVN0cixcclxuICAgICAgICBjYWxsYmFjazogb3B0aW9ucy5va0NhbGxiYWNrLFxyXG4gICAgICAgIGNsczogXCJzdXJlLWJ0blwiICsgb25lQnRuQ2x6XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG9wdGlvbnMucmV2ZXJzZSlcclxuICAgICAgYnRucyA9IGJ0bnMucmV2ZXJzZSgpO1xyXG5cclxuICAgIGJ0bnMuZm9yRWFjaChmdW5jdGlvbihpdGVtLGluZGV4KXtcclxuICAgICAgaWYoKGJ0bnMubGVuZ3RoIC0gMSkgPT0gaW5kZXgpXHJcbiAgICAgICAgaXRlbS5jbHMgKz0gJyBsYXN0JztcclxuICAgICAgYnRuVG1wbHMgKz0gdXRpbHMucmVwbGFjZVRlbWxhdGUodGVtcGxhdGUsaXRlbSk7XHJcbiAgICAgIHNlbGYuY2FsbGJhY2tzW2l0ZW0uaWRdID0gaXRlbS5jYWxsYmFjaztcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBidG5UbXBscztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluc2VydENvbnRlbnQoZG9tLG9wdGlvbnMpe1xyXG4gICAgICBpZihvcHRpb25zLnNlbGVjdG9yKXtcclxuICAgICAgICB2YXIgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJkaWFsb2ctdGFyZ2V0IHJlcGxhY2VcIiksXHJcbiAgICAgICAgICAgIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcixcclxuICAgICAgICAgICAgb3JpRGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUoc2VsZWN0b3IpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKTtcclxuXHJcbiAgICAgICAgaWYoc2VsZWN0b3IucGFyZW50Tm9kZSl7XHJcbiAgICAgICAgICBzZWxlY3Rvci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb21tZW50LHNlbGVjdG9yKTtcclxuICAgICAgICAgIGRvbS5fY29tbWVudERvbSA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICBpZihvcmlEaXNwbGF5ID09ICdub25lJyl7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZG9tLl9vcmlnaW5EaXNwbGF5ID0gb3JpRGlzcGxheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChzZWxlY3Rvcik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5pbm5lckhUTUwgPSBvcHRpb25zLmNvbnRlbnQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJzxici8+Jyk7XHJcbiAgICB9XHJcbi8qKlxyXG4gKiBbTW9kYWxEaWFsb2cgZGVzY3JpcHRpb25dXHJcbiAqIGNsYXp6OiDlvLnlh7rmoYbnmoRjc3PnsbvlkI1cclxuICogY2FuY2VsU3RyIOWPlua2iOaMiemSrueahOaMiemSruWQjVxyXG4gKiBzdXJlU3RyIOehruWumuaMiemSrueahOaMiemSruWQjVxyXG4gKiB0aXRsZSDlvLnlh7rmoYbnmoTmoIfpophcclxuICogaGVhZGVyIOihqOekuuWktOmDqOeahGh0bWzmqKHmnb9cclxuICogb2tDYWxsYmFjayDnoa7lrprmjInpkq7lm57osIPlh73mlbBcclxuICogY2FuY2VsQ2FsbGJhY2sg5Y+W5raI5oyJ6ZKu5Zue6LCD5Ye95pWwXHJcbiAqIGJ1dHRvbnMgW3tjbHM6J3N1cmUnLGNhbGxiYWNrOmZuLG5hbWU6J25hbWUnfV1cclxuICogdXNlQmFja2dyb3VuZCDljZXlh7vog4zmma/ml7bmiafooYznmoTlm57osIPlh73mlbBcclxuICovXHJcbiAgdmFyIGRlZmF1bHRTZXR0aW5ncyA9IHtcclxuICAgICAgICBjbGF6ejogJ2RpYWxvZy10aGVtZScsXHJcbiAgICAgICAgY2FuY2VsU3RyOiAn5Y+W5raIJyxcclxuICAgICAgICBzdXJlU3RyOiAn56Gu5a6aJyxcclxuICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcbiAgICAgICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj57dGl0bGV9PC9zcGFuPicsXHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgYnV0dG9uczogbnVsbCxcclxuICAgICAgICB1c2VCYWNrZ3JvdW5kOiAnY2FuY2VsJ1xyXG4gICAgICB9LFxyXG4gICAgICBiZWZvcmVMaXN0ZW5lcnMgPSBbXSxcclxuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBbXSxcclxuICAgICAgY2xvc2VkTGlzdGVuZXJzID0gW10sXHJcbiAgICAgIF9jb3VudCA9IDA7XHJcblxyXG4gIHZhciBNb2RhbERpYWxvZyA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgdmFyIGRpYWxvZyxcclxuICAgICAgICBpZDtcclxuXHJcbiAgICBvcHRpb25zID0gXy5hc3NpZ24oe30sZGVmYXVsdFNldHRpbmdzLG9wdGlvbnMpO1xyXG5cclxuICAgIG9wdGlvbnMuX2NhbGxCYWNrcyA9IG9wdGlvbnMuX2NhbGxCYWNrcyB8fCB7fTtcclxuICAgIGlkID0gb3B0aW9ucy5pZCA9IG9wdGlvbnMuaWQgfHwgX2NvdW50O1xyXG5cclxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIG9wdGlvbnMuX2NhbGxCYWNrc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJlZm9yZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgICAgbGlzdGVuZXIob3B0aW9ucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W2lkXSA9IGRpYWxvZyA9IG5ldyBNb2RhbERpYWxvZy5jcmVhdGUob3B0aW9ucyk7XHJcblxyXG4gICAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCArKztcclxuXHJcbiAgICBhZnRlckxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgICAgbGlzdGVuZXIoZGlhbG9nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9jb3VudCArKztcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgdmFyIGRpYWxvZ0RvbSxcclxuICAgICAgICBkbGdQb3NZLGRsZ1Bvc1gsXHJcbiAgICAgICAgZGxnVywgZGxnSDtcclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrcyA9IG9wdGlvbnMuX2NhbGxCYWNrcztcclxuICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xyXG5cclxuICAgIGRpYWxvZ0RvbSA9IHV0aWxzLmNyZWF0ZUh0bWxEb20oZ2V0SHRtbENvbnRlbnQuY2FsbCh0aGlzLG9wdGlvbnMpKTtcclxuICAgIGRpYWxvZ0RvbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zJywwKTtcclxuICAgIGluc2VydENvbnRlbnQoZGlhbG9nRG9tLG9wdGlvbnMpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dEb20pO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveVNjcm9sbCA9IHNjcm9sbERsZy5pbml0VG91Y2goZGlhbG9nRG9tKTtcclxuXHJcbiAgICB0aGlzLndpbkggPSB3aW5IO1xyXG4gICAgdGhpcy53aW5XID0gd2luVztcclxuXHJcbiAgICBkbGdIID0gZGlhbG9nRG9tLm9mZnNldEhlaWdodDtcclxuICAgIGRsZ1cgPSBkaWFsb2dEb20ub2Zmc2V0V2lkdGg7XHJcbiAgICBkbGdQb3NZID0gKHRoaXMud2luSCAtIGRsZ0ggPiAwICkgPyAodGhpcy53aW5IIC0gZGxnSCkvMiA6IHRoaXMud2luSCowLjE7XHJcbiAgICBkbGdQb3NYID0gKHRoaXMud2luVyAtIGRsZ1cgPiAwICkgPyAodGhpcy53aW5XIC0gZGxnVykvMiA6IHRoaXMud2luVyowLjE7XHJcblxyXG5cclxuICAgIF8uYXNzaWduKGRpYWxvZ0RvbS5zdHlsZSx7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIGxlZnQ6IGRsZ1Bvc1ggKyAncHgnLFxyXG4gICAgICB0b3A6IGRsZ1Bvc1kgKyAncHgnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBfLmFzc2lnbihkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuc3R5bGUse1xyXG4gICAgLy8gICBoZWlnaHQ6IE1vZGFsRGlhbG9nLm1heEggKyA1MCArICdweCdcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGlmKG9wdGlvbnMuYW5pbWF0ZWQpXHJcbiAgICAgIGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLW1haW4nKS5jbGFzc05hbWUgKz0gJyBkbGctYW5pbWF0aW9uJztcclxuICAgIGlmKG9wdGlvbnMudXNlQmFja2dyb3VuZCl7XHJcbiAgICAgIHZhciB1c2VyYmdyID0gb3B0aW9ucy51c2VCYWNrZ3JvdW5kO1xyXG4gICAgICBpZighb3B0aW9ucy5fY2FsbEJhY2tzW3VzZXJiZ3JdKXtcclxuICAgICAgICBvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0gPSBmdW5jdGlvbigpe307XHJcbiAgICAgIH1cclxuICAgICAgZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctbWFzaycpLmRhdGFzZXQuaWQgPSBvcHRpb25zLnVzZUJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lciA9IHRoaXMucHJveHkodGhpcy5fY2xpY2tFdmVudCxkaWFsb2dEb20sb3B0aW9ucyk7XHJcbiAgICB0aGlzLmRpYWxvZ0RvbSA9IGRpYWxvZ0RvbTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nRG9tLCdjbGljaycsdGhpcy5fZXZlbnRMaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuICBfLmFzc2lnbihNb2RhbERpYWxvZy5jcmVhdGUucHJvdG90eXBlLHtcclxuICAgIGNhbGxiYWNrczogbnVsbCxcclxuICAgIGNsb3NlRGlhbG9nOmZ1bmN0aW9uKGlzTm90SW52b2tlKXtcclxuICAgICAgdmFyIGRpYWxvZ0RvbSA9IHRoaXMuZGlhbG9nRG9tLFxyXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgIHNlbGVjdG9yLFxyXG4gICAgICAgICAgX2NvbW1lbnREb20sXHJcbiAgICAgICAgICBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIGRpYWxvZ0RvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBpZihvcHRpb25zLnNlbGVjdG9yICYmIGRpYWxvZ0RvbS5fY29tbWVudERvbSl7XHJcbiAgICAgICAgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yO1xyXG4gICAgICAgIF9jb21tZW50RG9tID0gZGlhbG9nRG9tLl9jb21tZW50RG9tO1xyXG5cclxuICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gZGlhbG9nRG9tLl9vcmlnaW5EaXNwbGF5O1xyXG4gICAgICAgIF9jb21tZW50RG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHNlbGVjdG9yLF9jb21tZW50RG9tKTtcclxuXHJcbiAgICAgICAgZGlhbG9nRG9tLl9jb21tZW50RG9tID0gbnVsbDtcclxuICAgICAgICBkaWFsb2dEb20uX29yaWdpbkRpc3BsYXkgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZ0RvbSwnY2xpY2snLHRoaXMuX2V2ZW50TGlzdGVuZXIpO1xyXG4gICAgICBkaWFsb2dEb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaWFsb2dEb20pO1xyXG4gICAgICB0aGlzLmRlc3Ryb3lTY3JvbGwgJiYgdGhpcy5kZXN0cm95U2Nyb2xsKCk7XHJcblxyXG4gICAgICBpZighaXNOb3RJbnZva2Upe1xyXG4gICAgICAgIGNsb3NlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgICAgICAgIGxpc3RlbmVyKHNlbGYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBpZihvcHRpb25zLmNhbmNlbENhbGxiYWNrKVxyXG4gICAgICAgICAgb3B0aW9ucy5jYW5jZWxDYWxsYmFjaygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gbnVsbDtcclxuICAgICAgdGhpcy5kaWFsb2dEb20gPSBkaWFsb2dEb20gPSBudWxsO1xyXG5cclxuICAgICAgZGVsZXRlIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbdGhpcy5pZF07XHJcblxyXG4gICAgICBNb2RhbERpYWxvZy5tb2RhbENvdW50IC0tO1xyXG4gICAgfSxcclxuICAgIF9jbGlja0V2ZW50OiBmdW5jdGlvbihlLGRpYWxvZ0RvbSxvcHRpb25zKXtcclxuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxyXG4gICAgICAgICAgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXHJcbiAgICAgICAgICBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIGlmKHR5cGVvZiB0aGlzLmNhbGxiYWNrc1tpZF0gPT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5jYWxsYmFja3NbaWRdLmNhbGwodGhpcyxlKSl7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgc2VsZi5jbG9zZURpYWxvZygpO1xyXG4gICAgICAgIH0sMSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm94eTogZnVuY3Rpb24oZm4pe1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICB3cmFwQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgaWYod3JhcEFyZ3MubGVuZ3RoID4gMClcclxuICAgICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdCh3cmFwQXJncyk7XHJcblxyXG4gICAgICAgIGZuLmFwcGx5KHNlbGYsYXJncyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuYWZ0ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgIGFmdGVyTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICBhZnRlckxpc3RlbmVycyA9IGFmdGVyTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBNb2RhbERpYWxvZy5wcmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgIGJlZm9yZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgYmVmb3JlTGlzdGVuZXJzID0gYmVmb3JlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBNb2RhbERpYWxvZy5jbG9zZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgIGNsb3NlZExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgY2xvc2VkTGlzdGVuZXJzID0gY2xvc2VkTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPSBsaXN0ZW5lcjtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBNb2RhbERpYWxvZy5kaWFsb2dMaXN0ID0ge307XHJcbiAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCA9IDA7XHJcblxyXG4gIG1vZHVsZS5leHBvcnRzID0gTW9kYWxEaWFsb2c7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGFsLmpzXG4gKiovIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi9kb20uanMnKTtcclxuXHJcbmZ1bmN0aW9uIGdldEhlaWdodChzZWwsaXNPdXRlcil7XHJcbiAgdmFyIHNlY3Rpb25TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoc2VsKSxcclxuICAgICAgbWFyZ2luSCA9IDA7XHJcblxyXG4gIGlmKGlzT3V0ZXIpe1xyXG4gICAgbWFyZ2luSCA9IHNlY3Rpb25TdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgICAgICBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpLnJlcGxhY2UoJ3B4JywnJykqMVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBzZWN0aW9uU3R5bGUucGFkZGluZ1RvcC5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLnBhZGRpbmdCb3R0b20ucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgIHNlY3Rpb25TdHlsZS5ib3JkZXJUb3BXaWR0aC5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmJvcmRlckJvdHRvbVdpZHRoLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBtYXJnaW5IXHJcbiAgICAgICAgKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaW5pdFRvdWNoOiBmdW5jdGlvbihkaWFsb2cpe1xyXG4gICAgdmFyIGRsZ0NvbnRlbnQgPSAgZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctY29udGVudCcpLFxyXG4gICAgICAgIHNlY3Rpb24gPSBkaWFsb2cuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlY3Rpb24nKVswXSxcclxuICAgICAgICBtYXhIZWlnaHQsIHN0YXJ0UG9zeCwgc3RhcnRQb3N5LCBpc1RvdWNoLFxyXG4gICAgICAgIGxhc3RQb3NZLCB0aW1lcjtcclxuXHJcbiAgICBtYXhIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24pLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMSAtXHJcbiAgICAgICAgICAgICAgICBnZXRIZWlnaHQoZGxnQ29udGVudCx0cnVlKTtcclxuXHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nLCd0b3VjaG1vdmUnLHN0b3BTY3JvbGxNb3ZlKTtcclxuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2csJ3RvdWNoc3RhcnQnLHN0YXJ0VG91Y2gpO1xyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2htb3ZlJyxzdG9wU2Nyb2xsTW92ZSk7XHJcbiAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XHJcbiAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRUb3VjaChlKXtcclxuICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdLFxyXG4gICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY2xvc2VzdChlLnRhcmdldCwnZGlhbG9nLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgIGlmKCEhdGFyZ2V0KXtcclxuICAgICAgICBzdGFydFBvc3ggPSB0b3VjaC5zY3JlZW5YO1xyXG4gICAgICAgIHN0YXJ0UG9zeSA9IHRvdWNoLnNjcmVlblk7XHJcbiAgICAgICAgaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BTY3JvbGxNb3ZlKGUpe1xyXG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXHJcbiAgICAgICAgICB0YXJnZXQgPSBlLnRhcmdldCxcclxuICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQsXHJcbiAgICAgICAgICBub2RlTmFtZSA9IHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgcG9zWCA9IHRvdWNoLnNjcmVlblgsXHJcbiAgICAgICAgICBwb3NZID0gdG91Y2guc2NyZWVuWSxcclxuICAgICAgICAgIGN1cnJlbnRQb3NZID0gY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXBvcyddLnZhbHVlKjEgfHwgMCxcclxuICAgICAgICAgIGRpc3RhbmNlO1xyXG5cclxuICAgICAgaWYoaXNUb3VjaCAmJiBtYXhIZWlnaHQgPCAwKXtcclxuICAgICAgICBpZihNYXRoLmFicyhwb3NYIC0gc3RhcnRQb3N4KSA8IDUgJiYgTWF0aC5hYnMocG9zWSAtIHN0YXJ0UG9zeSkgPiA1KXtcclxuICAgICAgICAgIGRpc3RhbmNlID0gY3VycmVudFBvc1kgKyBwb3NZIC0gc3RhcnRQb3N5IDtcclxuICAgICAgICAgIGlmKGRpc3RhbmNlIDwgbWF4SGVpZ2h0KVxyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IG1heEhlaWdodDtcclxuICAgICAgICAgIGVsc2UgaWYoZGlzdGFuY2UgPiAwKVxyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgICBjdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtcG9zJ10udmFsdWUgPSBkaXN0YW5jZTtcclxuICAgICAgICAgIHNjcm9sbFRvKGRsZ0NvbnRlbnQsY3VycmVudFBvc1ksZGlzdGFuY2UpO1xyXG5cclxuICAgICAgICAgIHN0YXJ0UG9zeCA9IHBvc1g7XHJcbiAgICAgICAgICBzdGFydFBvc3kgPSBwb3NZO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiggbm9kZU5hbWUgIT0gJ2lucHV0JyAmJiBub2RlTmFtZSAhPSAnc2VsZWN0JyAmJiBub2RlTmFtZSAhPSAndGV4dGFyZWEnKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0b3VjaGVFbmQoKXtcclxuICAgICAgc3RhcnRQb3N4ID0gbnVsbDtcclxuICAgICAgc3RhcnRQb3N5ID0gbnVsbDtcclxuICAgICAgaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG8odGFyZ2V0LGN1clBvc1kseSl7XHJcbiAgICAgIHRhcmdldC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgeSArICdweCwwcHgpJztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvX3Rlc3QodGFyZ2V0LGN1clBvc1kseSl7XHJcbiAgICAgIHZhciBzdGVwID0gNTtcclxuXHJcbiAgICAgIGxhc3RQb3NZID0geTtcclxuICAgICAgaWYodGltZXIgIT0gbnVsbCl7XHJcbiAgICAgICAgY2xlYXJUaW1lcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aW1lciA9IHNldEludGVydmFsKF9pbm5lclNjcm9sbCwxOCk7XHJcbiAgICAgIF9pbm5lclNjcm9sbCgpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gX2lubmVyU2Nyb2xsKCl7XHJcbiAgICAgICAgY3VyUG9zWSAtPSBzdGVwO1xyXG4gICAgICAgIGlmKGN1clBvc1kgPCBsYXN0UG9zWSl7XHJcbiAgICAgICAgICBjbGVhclRpbWVyKCk7XHJcbiAgICAgICAgICBjdXJQb3NZID0gbGFzdFBvc1k7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgY3VyUG9zWSArICdweCwwcHgpJztcclxuICAgICAgfVxyXG4gICAgICBmdW5jdGlvbiBjbGVhclRpbWVyKCl7XHJcbiAgICAgICAgdGltZXIgPSBudWxsO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RsZ3Njcm9sbC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=