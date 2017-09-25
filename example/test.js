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
	var utils = __webpack_require__(2);
	var award1 = __webpack_require__(19);
	var award2 = __webpack_require__(20);
	var prize = __webpack_require__(21);
	var Clipboard = __webpack_require__(22);
	
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
	}).addExample('不带标题-填写手机号码框', 'confirmMobile', function () {
	
	  dialog.confirmMobile(null, function () {
	    dialog.alert('话费延时到账可能有说明，话费延时到账可能有说明。', '领取成功');
	  });
	}).addExample('不带标题-已填写手机号码框', 'hasConfirmMobile', function () {
	
	  dialog.confirmMobile(13212341234, null, null, true);
	}).addExample('带标题-我的奖品框多个', 'myAwards', function () {
	
	  dialog.alertAwardList([{ imgUrl: award1, name: '话费50元', type: 'call_charge', hascomfirm: true, phone: '12312341234' }, { imgUrl: award1, name: '话费50元', type: 'call_charge' }, {
	    imgUrl: award1,
	    name: '魅族优惠券 200 元',
	    type: 'electronic',
	    voucher: 'DORKE28048222823:12887570099',
	    desc: '魅族优惠券 200 元',
	    winMessage: '使用方法：前去美团－通用券兑换,输入该券,即可\r\n使用方法：前去美团－通用券兑换,输入该券,即可'
	  }, {
	    imgUrl: award1,
	    name: '一个码-魅族优惠券 200 元',
	    type: 'electronic',
	    voucher: 'DORKE28048222823',
	    desc: '魅族优惠券 200 元',
	    winMessage: '使用方法：前去美团－通用券兑换,输入该券,即可\r\n使用方法：前去美团－通用券兑换,输入该券,即可'
	  }, { imgUrl: award2, name: 'Pro 6', type: 'actual' }, { imgUrl: award2, name: 'Pro 6', type: 'actual', hascomfirm: true, values: ['panda', '1231234123', '广东省珠海市香洲区唐家湾嗷嗷啊666'] }], function (idx, item, data) {
	    console.log('ok', idx, item, data);
	  });
	}).addExample('带标题-我的奖品框两个', 'myAwardstwo', function () {
	
	  dialog.alertAwardList([{ imgUrl: award1, name: '话费50元', type: 'call_charge', hascomfirm: true, phone: '12312341234' }, { imgUrl: award2, name: 'Pro 6', type: 'actual' }]);
	}).addExample('带标题-我的奖品框一个', 'myAwardsone', function () {
	
	  dialog.alertAwardList([{ imgUrl: award1, name: '话费50元', type: 'call_charge', hascomfirm: true, phone: '12312341234' }]);
	}).addExample('带标题-活动说明', 'rule', function () {
	
	  dialog.alertRule('活动时间：2016.11.16-2016.11.18\n' + '1.每个用户每天有3此抽奖机会，另完成任务后获得更多机会。\n' + '2.实物奖品将在活动结束后统一发放，寄送前将联系获奖者确认收货地址。\n' + '3.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。\n' + '4.实物奖品将在活动结束后统一发放，寄送前将联系获奖者确认收货地址。\n' + '5.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。\n' + '6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 ');
	}).addExample('带标题-中奖名单', 'winnerDlg', function () {
	
	  dialog.alertWinnerList([{
	    nickName: '彼岸.花凋零',
	    title: 'CILINE-沁麟2.5L智能靠谱煲'
	  }, {
	    nickName: '几次深情几斤情话',
	    title: '获得魅族 pro 6 一台 拷贝'
	  }, {
	    nickName: '把心酸当成笑话说',
	    title: '游戏手柄NGDS N1pro双马达震动'
	  }, {
	    nickName: '东京巷尾的青苔',
	    title: '魅族移动电源（标准版）'
	  }, {
	    nickName: '丿Monster卩s冥彡',
	    title: '极路客 ( Goluk )G1 智能行车记录仪'
	  }, {
	    nickName: '◇╰未来、怎么来。',
	    title: '幻响B10无线运动蓝牙'
	  }]);
	}).addExample('带标题-话费奖品', 'chargeDlg', function () {
	
	  dialog.alertVirtualDlg({
	    imgUrl: prize,
	    desc: '话费50元',
	    winMessage: '智能网号码（130、131、132、155、156等号段）中奖用户，因运营商充值受限无法充值。'
	  }, function () {
	    console.log(this, arguments);
	  });
	}).addExample('带标题-虚拟券奖品', 'electronicDlg', function () {
	  dialog.alertElectronicDlg({
	    voucher: 'DORKE28048222823:12887570099',
	    winMessage: '使用方法：前去美团－通用券兑换,输入该券,即可',
	    desc: '美团优惠券500元'
	  });
	}).addExample('带标题-实物奖品', 'actualDlg', function () {
	  dialog.alertActualDlg({
	    imgUrl: prize,
	    desc: 'mx6 一台',
	    winMessage: '使用方法：前去美团－通用券兑换,输入该券,即可换行吧换行吧'
	  });
	}).addExample('修改标题-实物奖品', 'actualDlg', function () {
	  dialog.alertActualDlg({
	    imgUrl: prize,
	    desc: 'mx6 一台',
	    winMessage: '使用方法：前去美团－通用券兑换,输入该券,即可换行吧换行吧',
	    title: '抢到啦~'
	  });
	}).addExample('不带标题-填写实物奖品收件人信息', 'fillformDlg', function () {
	  dialog.alertPersonInfoDlg();
	}).addExample('带标题-一个虚拟券奖品', 'oneElectronicDlg', function () {
	  dialog.alertElectronicDlg({
	    voucher: 'DORKE28048222823',
	    winMessage: '使用方法：1.前去美团－通用券兑换,输入该券,即可\r\n2.前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可11',
	    desc: '美团优惠券500元'
	  });
	}).addExample('测试loading', 'loading', function () {
	  dialog.showLoading();
	  dialog.showLoading();
	  dialog.hideLoading();
	  setTimeout(function () {
	    dialog.hideLoading();
	  }, 1000);
	}).addExample('框中框', 'dlgofdlg', function () {
	  var isAlerted = false;
	  dialog.alert('父框内容父框内容父框内容父框内容父框内容父框内容', '父框标题', function () {
	    if (isAlerted) return;
	
	    dialog.alert('子框内容', '');
	
	    isAlerted = true;
	
	    return true;
	  });
	});
	
	var tools = {
	  supportCopy: true,
	  copyAndGo: function copyAndGo(btn, _text, url, options) {
	    var clipboard = new Clipboard(btn, {
	      text: function text(trigger) {
	        return _text;
	      }
	    });
	    options = options || {};
	
	    clipboard.on('success', function (e) {
	      e.clearSelection();
	      clipboard.destroy();
	
	      options.sucessCallback && options.sucessCallback();
	    });
	
	    clipboard.on('error', function (e) {
	      clipboard.destroy();
	      options.failCallback && options.failCallback();
	    });
	    return clipboard;
	  }
	};
	
	dialog.config({
	  useHash: true,
	  copyTool: tools
	});
	
	dialog.afterListener(function (dialog) {
	  $(dialog.dialogDom).delegate('input,textarea', 'focus', function () {
	    var charDlg = $(this).closest('.modal-dialog');
	    charDlg.attr('oritop', charDlg.css('top'));
	    charDlg.css('top', '30px');
	  }).delegate('input,textarea', 'blur', function (evt) {
	    console.log(evt.target);
	    var charDlg = $(this).closest('.modal-dialog'),
	        oritop = charDlg.attr('oritop');
	
	    if (oritop != null && oritop != '') charDlg.css('top', oritop);
	  });
	});

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
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	__webpack_require__(4);
	var domUtil = __webpack_require__(2);
	var ModalDialog = __webpack_require__(13);
	var hashHistory = __webpack_require__(1);
	var WrapMbIpt = __webpack_require__(15);
	var prizeTmpl = __webpack_require__(16);
	var elePrizeTmpl = __webpack_require__(17);
	var actualPrizeTmpl = __webpack_require__(18);
	
	prizeTmpl = prizeTmpl.replace(/\r\n/g, '');
	elePrizeTmpl = elePrizeTmpl.replace(/\r\n/g, '');
	actualPrizeTmpl = actualPrizeTmpl.replace(/\r\n/g, '');
	
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
	
	  if (!content.title) clz += ' dlg-no-title';else clz += ' dlg-has-title';
	
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
	
	  if (!content.title) clz += ' dlg-no-title';else clz += ' dlg-has-title';
	
	  content.okCallback = content.okCallback || noop;
	  content.cancelCallback = content.cancelCallback || noop;
	  content.clazz = clz;
	  return ModalDialog(content);
	};
	
	ModalDialog.confirmMobile = function (phone, okFn, cancelFn, isConfirm, title, btText1, btText2) {
	  var template = '<div class="charge-content"><div class="charge-form"><input type="tel" class="valid-input charge-phone"/><label>手机号码:</label>' + '<strong class="form-tip">请填写正确的手机号码' + '</strong></div></div>',
	      settings,
	      dlg,
	      inputDom,
	      temp,
	      wrapInput;
	
	  if (!isPlainObject(phone)) {
	    settings = createParams({
	      title: title || '',
	      okCallback: proxyOkFn,
	      cancelCallback: proxyCancelFn,
	      sureStr: btText2,
	      cancelStr: btText1,
	      phone: phone
	    });
	  } else {
	    settings = phone;
	  }
	
	  inputDom = settings.selector = domUtil.createHtmlDom(template);
	  temp = inputDom.querySelector('input');
	
	  settings.clazz = 'charge-dialog';
	
	  if (isConfirm) {
	    inputDom.classList.add('hasconfirm');
	    inputDom.querySelector('.form-tip').textContent = '已领奖';
	    temp.setAttribute('disabled', true);
	    temp.value = settings.phone;
	
	    settings.cancelCallback = null;
	    dlg = ModalDialog.alert(settings);
	  } else {
	    wrapInput = WrapMbIpt({ target: temp });
	    dlg = ModalDialog.confirm(settings);
	  }
	
	  return dlg;
	
	  function proxyOkFn(e) {
	    var iform = inputDom.querySelector('.charge-form');
	
	    if (wrapInput) {
	      wrapInput.handleKeyUp();
	      wrapInput.handleChange();
	    }
	    if (!iform.classList.contains('dlg-success') && !isConfirm) {
	      iform.classList.add('dlg-error');
	      return true;
	    }
	    wrapInput && wrapInput.destroy();
	    if (okFn && !okFn.call(dlg, iform.querySelector('input').value, e)) inputDom = null;
	  }
	
	  function proxyCancelFn(e) {
	    wrapInput && wrapInput.destroy();
	    cancelFn && cancelFn.call(dlg, e);
	    inputDom = null;
	  }
	};
	ModalDialog.alertAwardList = function (datalist, okFn, cancelFn, options) {
	  var awardListHtml = ['<div class="dlg-award-list"><ul>'],
	      settings,
	      result;
	
	  options = options || {};
	  settings = domUtil.assign(createParams({
	    dataList: datalist,
	    title: '我的奖品',
	    awardHandle: function awardHandle() {}
	  }), options);
	
	  settings.clazz = 'myaward-dialog';
	
	  result = settings.dataList || [];
	
	  for (var i = 0, len = result.length; i < len; i++) {
	    var item = result[i],
	        typeVl;
	
	    awardListHtml.push('<li data-idx="' + i + '"><img src="' + item.imgUrl + '" /><div class="item-title">' + item.name + '</div><em data-id="handlePrizes" class="item-oper');
	    switch (item.type) {
	      case 'electronic':
	        typeVl = '查看券码';
	        break;
	      case 'actual':
	        if (item.hasconfirm) {
	          typeVl = '修改地址';
	          awardListHtml.push(' hasconfirm');
	        } else {
	          typeVl = '填写地址';
	        }
	        break;
	      case 'call_charge':
	      case 'liumi_data_recharge':
	      case 'mz_money_recharge':
	      case 'mz_data_recharge':
	        if (item.hasconfirm) {
	          typeVl = '查看号码';
	          awardListHtml.push(' hasconfirm');
	        } else {
	          typeVl = '填写号码';
	        }
	        break;
	      default:
	        if (item.hasconfirm) {
	          typeVl = item.showconfirmBtn || '查看信息';
	          awardListHtml.push(' hasconfirm');
	        } else {
	          typeVl = item.confirmBtn || '填写信息';
	        }
	    }
	
	    awardListHtml.push('" >' + typeVl);
	    awardListHtml.push('</em></li>');
	  }
	  awardListHtml.push('</ul></div>');
	
	  settings.content = awardListHtml.join('');
	
	  settings.handlePrizes = function (evt) {
	    var target = evt.target,
	        liItem = domUtil.closest(target, 'li'),
	        idx = liItem.getAttribute('data-idx'),
	        hasconfirm = target.classList.contains('hasconfirm'),
	        awardItem = result[idx];
	
	    var proxyOkFn = okFn && okFn.bind(this, idx, awardItem),
	        proxyCancelFn = cancelFn && cancelFn.bind(this, idx, awardItem);
	
	    switch (awardItem.type) {
	      case 'electronic':
	        ModalDialog.alertElectronicDlg(awardItem, '', proxyOkFn, proxyCancelFn);
	        break;
	      case 'actual':
	        ModalDialog.alertPersonInfoDlg(proxyOkFn, proxyCancelFn, awardItem.values);
	        break;
	      case 'call_charge':
	      case 'liumi_data_recharge':
	      case 'mz_money_recharge':
	      case 'mz_data_recharge':
	        ModalDialog.confirmMobile(awardItem.phone, proxyOkFn, proxyCancelFn, hasconfirm);
	        break;
	      default:
	        settings.awardHandle(idx, awardItem);
	    }
	  };
	  return ModalDialog.alert(settings);
	};
	
	var isAlertRule = void 0;
	
	ModalDialog.alertRule = function (context) {
	  if (isAlertRule) return;
	
	  isAlertRule = true;
	
	  return ModalDialog.alert({
	    clazz: 'rule-dlg',
	    title: '活动说明',
	    content: context,
	    okCallback: isAlert,
	    cancelAlert: isAlert,
	    useBackground: 'cancelAlert'
	  });
	
	  function isAlert() {
	    isAlertRule = false;
	  }
	};
	
	ModalDialog.alertWinnerList = function (data) {
	  var winnerListTmpl = ['<div class="inr-winlist"><ul>'];
	
	  if (!data) {
	    ModalDialog.alert('大奖还没被抽走，赶紧参与活动');
	    return;
	  }
	
	  for (var i = 0, len = data.length; i < len; i++) {
	    var item = data[i];
	    winnerListTmpl.push('<li><em>' + item.nickName + '</em>');
	    winnerListTmpl.push('<div class="prz-tle">' + item.title + '</div></li>');
	  }
	
	  winnerListTmpl.push('</ul></div>');
	  return ModalDialog.alert(winnerListTmpl.join(''), '中奖名单', null, null, 'winner-list-dlg');
	};
	
	ModalDialog.alertVirtualDlg = function (data, okFn, cancelFn) {
	  var template = domUtil.createHtmlDom(domUtil.replaceTemlate(prizeTmpl, data)),
	      dlg,
	      wrapInput;
	
	  wrapInput = WrapMbIpt({ target: template.querySelector('input') });
	  dlg = ModalDialog.confirm({
	    selector: template,
	    title: data.title != null ? data.title : '中奖啦！',
	    clazz: 'virtual-dlg prize-dlg',
	    okCallback: proxyOkFn,
	    cancelCallback: proxyCancelFn,
	    sureStr: '领取',
	    cancelStr: '暂不领奖'
	  });
	
	  function proxyOkFn(e) {
	    var iform = template.querySelector('.charge-form');
	
	    if (wrapInput) {
	      wrapInput.handleKeyUp();
	      wrapInput.handleChange();
	    }
	
	    if (!iform.classList.contains('dlg-success')) {
	      iform.classList.add('dlg-error');
	      return true;
	    }
	
	    wrapInput && wrapInput.destroy();
	    if (okFn && !okFn.call(dlg, dlg.dialogDom.querySelector('.charge-phone').value, e)) template = null;
	  }
	
	  function proxyCancelFn(e) {
	    wrapInput && wrapInput.destroy();
	    cancelFn && cancelFn.call(dlg, e);
	    template = null;
	  }
	};
	ModalDialog.alertElectronicDlg = function (context, okFn, cancelFn, btText1) {
	
	  var vouchers = context.voucher.split(':'),
	      clz = 'electronic-dlg prize-dlg',
	      template;
	
	  var copyTool = ModalDialog.options.copyTool,
	      clipboard;
	
	  context.voucher1 = vouchers[0];
	  context.voucher2 = vouchers[1];
	
	  if (!context.voucher2) clz += ' single-ticket';
	
	  template = domUtil.replaceTemlate(elePrizeTmpl, context);
	
	  if (copyTool.supportCopy && !vouchers[1]) {
	    btText1 = '复制并兑换';
	    clipboard = copyTool.copyAndGo('.modal-dialog .sure-btn', vouchers[0]);
	  }
	  ModalDialog.confirm({
	    content: template,
	    title: context.title != null ? context.title : '中奖啦！',
	    clazz: clz,
	    okCallback: okFn,
	    cancelCallback: function cancelCallback() {
	      clipboard && clipboard.destroy();
	      return cancelFn && cancelFn();
	    },
	    sureStr: btText1 || '立即使用',
	    cancelStr: '确定'
	  });
	};
	ModalDialog.alertActualDlg = function (data, okFn, cancelFn) {
	  var template = domUtil.replaceTemlate(actualPrizeTmpl, data);
	
	  ModalDialog.confirm({
	    content: template,
	    title: data.title != null ? data.title : '中奖啦！',
	    clazz: 'actual-dlg prize-dlg',
	    okCallback: toFillForm,
	    cancelCallback: cancelFn,
	    sureStr: '填写地址',
	    cancelStr: '暂不领奖'
	  });
	
	  function toFillForm() {
	    ModalDialog.alertPersonInfoDlg(okFn, cancelFn);
	  }
	};
	
	ModalDialog.alertPersonInfoDlg = function (okFn, cancelFn, values, formField, btText1, btText2) {
	  var infoFormHtml = ["<form>"],
	      inputs,
	      values,
	      settings,
	      infoFormDom,
	      dlg,
	      validInputs = [];
	
	  var maxWPerL;
	
	  if (!isPlainObject(okFn)) {
	    settings = createParams({
	      formField: formField,
	      sureStr: btText2,
	      cancelStr: btText1,
	      values: values || []
	    });
	  } else {
	    settings = okFn;
	    okFn = settings.okCallback;
	    cancelFn = settings.cancelCallback;
	  }
	
	  formField = settings.formField = settings.formField || [{ name: 'recName', value: '联 系 人', option: {
	      keyDownValid: null,
	      keyUpValid: null,
	      changeValid: null
	    }
	  }, { name: 'mobilephone', value: '手机号码', errMsg: '请填写正确的手机号码', bevalid: true, option: { initValid: 'handleKeyUp' } }, {
	    name: 'recAddress', value: '收货地址', errMsg: '请填写正确的地址', multiLine: true, required: true, initValid: 'handleChange', minLen: 8,
	    option: {
	      keyDownValid: null,
	      keyUpValid: null,
	      changeValid: function changeValid(evt, value) {
	        return value.length >= 8;
	      }
	    }
	  }];
	  settings.clazz = 'personinfo-dialog charge-dialog';
	  settings.header = '';
	
	  for (var i = 0, len = formField.length; i < len; i++) {
	    var item = formField[i],
	        beValid = '';
	
	    if (item.bevalid) {
	      beValid = ' bevalid';
	    }
	    if (item.required) {
	      beValid += ' required';
	    }
	
	    infoFormHtml.push('<div class="charge-form' + beValid + '">');
	    if (item.multiLine) {
	      infoFormHtml.push('<span class="hiddentxt ' + item.name + '_hidden"></span>');
	      infoFormHtml.push('<textarea class="valid-input" type="text" name="' + item.name + '" rows="1"></textarea>');
	    } else infoFormHtml.push('<input class="valid-input" type="text" name="' + item.name + '"/>');
	
	    infoFormHtml.push('<label>');
	    infoFormHtml.push(item.value + '</label>');
	
	    if (item.errMsg) infoFormHtml.push('<strong class="form-tip">' + item.errMsg + '</strong>');
	
	    infoFormHtml.push('</div>');
	  }
	
	  infoFormHtml.push("</form>");
	
	  infoFormDom = domUtil.createHtmlDom(infoFormHtml.join(''));
	
	  inputs = infoFormDom.querySelectorAll('.valid-input');
	  values = settings.values;
	  for (var i = 0, len = inputs.length; i < len; i++) {
	    var inputItem = inputs[i],
	        fieldItem = formField[i],
	        wrapInput;
	
	    if (typeof values[i] != 'undefined') inputItem.value = values[i];
	
	    if (fieldItem.errMsg || fieldItem.option) {
	      wrapInput = WrapMbIpt(domUtil.assign({
	        target: inputItem
	      }, formField[i].option));
	
	      validInputs.push(wrapInput);
	    }
	
	    if (values[i] && fieldItem.initValid) {
	      inputItem.style.height = '3.625rem';
	      wrapInput[fieldItem.initValid]({ target: inputItem, isInitValid: true });
	    }
	
	    if (fieldItem.multiLine && (values[i] == null || values[i] == '')) {
	      inputItem.addEventListener('keyup', txtAreaKeyup, false);
	    }
	  }
	
	  settings.selector = infoFormDom;
	  settings.okCallback = proxyOkFn;
	  settings.cancelCallback = proxyCancelFn;
	
	  dlg = ModalDialog.confirm(settings);
	
	  return dlg;
	  function proxyOkFn(e) {
	    var iforms = infoFormDom.querySelectorAll('.charge-form'),
	        item,
	        styles,
	        dirty = 0,
	        formVals = [],
	        formValue,
	        fieldItem;
	
	    for (var vi = 0, vilen = validInputs.length; vi < vilen; vi++) {
	      var validitem = validInputs[vi];
	      validitem.handleKeyUp && validitem.handleKeyUp();
	      validitem.handleChange && validitem.handleChange();
	    }
	
	    for (var i = 0, len = iforms.length; i < len; i++) {
	      item = iforms[i];
	      styles = item.classList, formValue = item.querySelector('.valid-input').value;
	      fieldItem = formField[i];
	
	      if (styles.contains('bevalid') && !styles.contains('dlg-success') || item.classList.contains('required') && formValue.length < fieldItem.minLen) {
	
	        item.classList.add('dlg-error');
	        dirty++;
	      } else if (item.classList.contains('dlg-error')) {
	        dirty++;
	      }
	
	      formVals.push(formValue);
	    }
	    if (dirty > 0) return true;
	
	    clearInput();
	    if (okFn && !okFn.call(dlg, formVals, e)) infoFormDom = null;
	  }
	
	  function proxyCancelFn(e) {
	    clearInput();
	    cancelFn && cancelFn.call(dlg, e);
	    infoFormDom = null;
	  }
	
	  function clearInput() {
	    inputItem.removeEventListener('keyup', txtAreaKeyup);
	    validInputs.forEach(function (item) {
	      item.destroy();
	    });
	  }
	
	  function txtAreaKeyup(e) {
	    var target = e.target,
	        hiddentxt = target.previousElementSibling,
	        val = target.value,
	        hiddentxtWidth,
	        nextWidth;
	
	    if (!maxWPerL) {
	      hiddentxtWidth = Math.round(getComputedStyle(hiddentxt).width.replace('px', ''));
	    }
	
	    hiddentxt.textContent = val;
	    nextWidth = Math.round(getComputedStyle(hiddentxt).width.replace('px', ''));
	
	    if (!maxWPerL && target.scrollHeight > target.clientHeight) {
	      maxWPerL = hiddentxtWidth;
	      if (!maxWPerL) {
	        maxWPerL = nextWidth - 10;
	      }
	    }
	
	    if (nextWidth > maxWPerL) {
	      target.style.height = '3.625rem';
	    } else {
	      target.style.height = '2.0625rem';
	    }
	  }
	};
	var loadingCount = 0;
	ModalDialog.showLoading = function () {
	  loadingCount++;
	  if (!document.getElementById('loading-box')) {
	    document.body.appendChild(domUtil.createHtmlDom('<div id="loading-box" class="dialog-mask"><div class="load-contain">' + '<span class="load1"></span><span class="load2"></span></div></div>'));
	  }
	  document.getElementById('loading-box').style.display = 'block';
	};
	
	ModalDialog.hideLoading = function () {
	  if (!document.getElementById('loading-box')) return;
	
	  loadingCount--;
	  if (loadingCount < 0) loadingCount = 0;
	  if (loadingCount === 0) document.getElementById('loading-box').style.display = 'none';
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
	  useHash: false,
	  copyTool: {}
	},
	    isConfig = false;
	
	ModalDialog.config = function (config) {
	  var options = domUtil.assign({}, defaultConfig, config);
	
	  ModalDialog.options = options;
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var scrollDlg = __webpack_require__(14);
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var domUtil = __webpack_require__(2);
	
	var DEFAULTOPTIONS = {
	  keyDownValid: function keyDownValid(evt, value) {
	    if (value.length > 11 && evt.keyCode != 8 && evt.keyCode != 13) {
	      evt.preventDefault();
	    }
	  }, keyUpValid: function keyUpValid(evt, value) {
	    return (/^1\d{10}$/.test(value)
	    );
	  }, changeValid: function changeValid(evt, value) {
	    return (/^1\d{1,10}$/.test(value)
	    );
	  }
	};
	function WrapMbIpt(options) {
	
	  return new WrapMbIpt.create(options);
	}
	WrapMbIpt.create = function (options) {
	  var target = options.target;
	
	  this.options = domUtil.assign({}, DEFAULTOPTIONS, options);
	
	  if (options.initValid) this[options.initValid]({ target: target });
	
	  if (this.options.keyDownValid) domUtil.bindEvent(target, 'keydown', this.handleKeyDown.bind(this));
	
	  domUtil.bindEvent(target, 'keyup', this.handleKeyUp.bind(this));
	  domUtil.bindEvent(target, 'change', this.handleChange.bind(this));
	};
	
	WrapMbIpt.create.prototype = {
	  constructor: WrapMbIpt.create,
	  handleKeyDown: function handleKeyDown(e) {
	    e = e || { target: this.options.target };
	
	    var target = e.target,
	        value = target.value;
	
	    value += String.fromCharCode(e.keyCode);
	    this.options.keyDownValid && this.options.keyDownValid(e, value);
	  },
	  handleKeyUp: function handleKeyUp(e) {
	    e = e || { target: this.options.target };
	
	    var target = e.target,
	        value = target.value,
	        parentNd = target.parentNode;
	
	    if (this.options.keyUpValid) {
	      if (this.options.keyUpValid(e, value)) {
	        parentNd.classList.add('dlg-success');
	      } else {
	        parentNd.classList.remove('dlg-success');
	      }
	    }
	
	    if (e.keyCode != 13) parentNd.classList.remove('dlg-error');
	  },
	  handleChange: function handleChange(e) {
	    e = e || { target: this.options.target };
	
	    var target = e.target,
	        value = target.value,
	        styles = target.parentNode.classList,
	        isInitValid = e.isInitValid;
	
	    if (this.options.changeValid) {
	      if (!this.options.changeValid(e, value)) {
	        setTimeout(function () {
	          //不加定时器时，当鼠标点击确定按钮后，只触发change事件，而不触发鼠标的点击事件
	          styles.add('dlg-error');
	        }, 0);
	      } else {
	        styles.remove('dlg-error');
	      }
	    }
	
	    if (!isInitValid) {
	      if (value.length > 0) {
	        styles.add('dirty');
	      } else {
	        styles.remove('dirty');
	      }
	    }
	  },
	  destroy: function destroy() {
	    var target = this.options.target;
	
	    domUtil.bindEvent(target, 'keydown', this.handleKeyDown);
	    domUtil.bindEvent(target, 'keyup', this.handleKeyUp);
	    domUtil.bindEvent(target, 'change', this.handleChange);
	  }
	};
	
	module.exports = WrapMbIpt;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"inr-prz\">\r\n  <div><span>恭喜获得</span><strong class=\"prz-name\">{desc}</strong></div>\r\n  <div class=\"dec-prize\"><img src=\"{imgUrl}\" height=\"80px\" width=\"80px\" class=\"prz-logo\"></div>\r\n  <div class=\"charge-form\">\r\n    <input placeholder=\"填写手机号码\" type=\"text\" maxlength=\"11\" class=\"valid-input charge-phone\"/>\r\n    <strong class=\"form-tip\">请填写正确的手机号码</strong>\r\n  </div>\r\n  <div class=\"ele-userule\"><em class=\"rule-content\">{winMessage}</em></div>\r\n</div>";

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"inr-prz\">\r\n  <div class=\"prz-sub-tle\"><span>恭喜获得</span><strong class=\"prz-name\">{desc}</strong></div>\r\n  <div class=\"dec-code\">\r\n    <div class=\"ticket-code\"><span>{voucher1}</span></div>\r\n    <div class=\"ticket-code\"><span>{voucher2}</span></div>\r\n  </div>\r\n  <div class=\"ele-userule\"><em class=\"rule-content\">{winMessage}</em></div>\r\n</div>";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"inr-prz\">\r\n  <div class=\"prz-sub-tle\"><span>恭喜获得</span><strong class=\"prz-name\">{desc}</strong></div>\r\n  <div class=\"dec-prize\"><img src=\"{imgUrl}\" height=\"80px\" width=\"80px\" class=\"prz-logo\"></div>\r\n  <div class=\"ele-userule\"><em class=\"rule-content\">{winMessage}</em></div>\r\n</div>";

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/985b650d.myaward2.png";

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAMAAAAJixmgAAABYlBMVEUAAAD8WSb8WSb8cEv8WSb8WSb8XCr8b0r8WSb8WSb8WSb8WSb8WSb8WSb8Wyn8WSb8Wij8WSb8b0r8WSb8WSb8WSb8WSb8Zz78cEv8WSb8WSb8WSb8b0r8Wyr8WSb8WSb8WSb8b0r8WSb8Wyj8WSb8WSb8bEX8b0n8ZTn8cEv8cEv8cEv8WSb8cEv////8Wyj8aD38bkn8a0T8XCv8YDH8ZTr8bkj8Yjb+yrn8Xi78az3/+vn8YC//8/D8ZTb9dkv/5t7+2s/9nH7/+fj/5t/+wKz9lnX/9vL8aUH//fz/9/X//Pz+18r8Yzf9pYn/+/r8Zz38YjP/7+r+rJP9elD8cET9lHL+tJ39sZ39imf9e1f9gFj9mXr+4Nb/6+b/6eL+xbT/6uT/5Nv+08X+zb7+vKj9oIT9nX/8d1P+uKP9po79jmv9iGL+0cP+sJn9hF78c0/8ckf8gWD9jXD9kG79dk3EJ697AAAALHRSTlMAZjxmKOIDPA1c8yw/Fgjr2Jko+86GsmYNBsW7s4+Ccm5cVE83JMuKSfHeZVvHduYAAAtGSURBVHja7MGBAAAAAICg/akXqQIAAAAAAAAAAAAAAAAAYHbsHQdCGAYC6AQlKAmfbaCgAQq2m/ufb7stEPgAE78bjOwotp3T05cgrPS4uyjtwl1HaZ0H9sBaPHB7gXNYKGsJGQ/Kh5JqwYtvoqAU8SpWyqkDDAflHLDMck2dZph2itlhGylmhG2imAm2TDHZK9z4G14pZoVp0/uHN1hOyjlhGBqbpaNcQ9vbUhGs738f9ovHjz17e2kbigM4ngfpJoLXMQbOB5GpjN+5JCdN0mp1Vdc4F8VqL3Su7XB1wrQUwf+fVXPqzmmaA2tyOnb5PIa8fOmvvxOSf+6d1v/gv0uqwWRbgURvz+Ub38/79iplBhpoD64WD2I1d2HYrXdw5j8otIonedBAd/DuEY61XwHZbVG8e6vwnoI+7Bi4dIMLOJYvB9Orj3hI64aAHraFkA2haPDM3ASCqwEeoQY6uBbq4/MzN2NEZNbmdQdT3quv2LYHuQ4KMQCYX8sYo8wupB/8QQhmV3E39SAxXmkSACBZEw1QgIVZI85KkmC/GBQjunfwpIEH/MDzvM4BHmiWITGSdVCfC+zURAKyYsTLLCcIDvLlnYgygQHSxFxQewys1FuYO0+eyysdimTrGUNhamn84G4OlBqY8yhwt20cekcgIQfFWDSUXo4f/LUMSh0cKu7Ak5LPZ7wHCR2j0V4batPagnMt3nYPP213+NqqQ0LERJJDO7ywaqhNaQuu8h8zoCDYO+JXx17MTPoPc5QBnPKJVnuuLbjE0+ogurvEjy63x91UFAAYFXPNLIE+hh68+m3B1/th2ok86AHfWnn4Vfz4MUmOIgmFPuI6ymD9I70XBm+VQOKNG5xDXHQ/M2HCFw216T8mGBwUhwoTvmpoP5YImUywi4YcjnEsvVlKFlyuVj5df/tcqeRz2oMZklAGFhrmuEtThkqSR8suofdf2jjUrDd2tAYziiKL2UYyywaAZfW3wwTBwU0Hi7yevmCbIpFLwsWMRNQOj64NI05mBZIEn/lYdlbTFGxbSGaPfvTgc7CRMUbafJH2CwC/pCPYja5nKywTuOIcrG8qPqQlDJYVdtMOJsdCrmJBW/IcvF2c0Eu8gKQazKSxNamNYmUdJHqmKbhdr11cNOptPFBLMzi6mC00hGfKLG3B5z+YO/ffpmEgjiMESDwkQAgESCDeCOHUsZ0H7sp4lnVl3craMdbx6MZe3WAMEP8/SePEsc8J62iUfn6Ckox9c5c7353nRemXV5eT5g0uRrDnYwQTkc0ZUEtshgoSPPWRIQHfF4Kb30YV/P6JmX0s5VFfqwmFMt0LhB/44xY8Awu/6ndR2Q9GFdypmHnBYw+mjnnpITOW4gfYHfc7/HN9MWSuq1SDs8KnxynYSRIschpanIZyqS9Tk0nweOk+F5MUZ0TBe/WIfr+usBtakLYZEsp0sJ6gCU6VGMULZkLJYvdIQQvT0CGzlx4QCj50o4uLEQwZyJ7d6IK5J97BjIa7xKZWFh4a4grBRW9Z6sxGYfrNEQT7RIadvH4saTNYFpPkZnEvtewLpiJRDNPGxcupSPD7kQVjGzqmhGmBmesVMPI1E7MLdzM2Wl5EY2R74YiCueKkbaRDZa/OHJgRkVVUyI1T2fVw2YJ/zM93PqTpzKeIFjZuKhH5Hij4A9xUCYH9h7nDtJIFL0/NKrxNM/upprQrtQq4wfQphO0El4CmFhimjYmXRxG8WcnjeS2vXclRQjtaaTKbFDJMM7NcOZTgjZRg3OjnCv5SE3KMKIGNuJjbBQ3T5r88DVl8iRTqIg/vScGGycO7F1KwQ6ydXkT4tPamA3qVysJWMmwWHZ6srCtxsEOtooZpHVE71BEy7OdYXIqrIDFb2lQLj/W4jGQNSzIIbhx2S5bCIgxpWCZssKOlqGHa3mexuq8q4+9FsZbmcYkxY7psO54etoglOegHNv+ZKZimIlXyZwe0gYoapj37Ipz3PZLgQUWfg8b7G7aRhIsq8u3ASvMrcI8NO1OwK1uTiXsTsPnBKmqYxr7H2qZTZl8USuJXVkbg9T/ysewuiIf1WxH8O7h7mWUKdsRCi6XG4C7ozxc2TMMvp+LW+1Li0Otxp3YJxfRmxWcbsWI+34wfgqWwFXwUyJSC4UvsuTjt3ATr/XnxUE4XMEyrJj2tuY/dGq9Vvy0H7yuMZC8qsbyt1enwMpl1d600B/Ugna2qgpm9ghKo52tNLt9UJIdXXTk2zoUHbFK8ftLvz8kuZnMJSVYXKjFrG8FlclLx6cBKEwa8uWpacJhTPy9/i+MdQ5peCotksa6+dDb3yKXr6CjUPlUy2AIPxkRzJQ5CUWoKLd/BUnBkumDhsZXRxCQM9OcbcdS+nrdP66jl0mrTrGRfezB18xbjrWTtz4dvcDPQ9gPFghd2Iz9/VWl21J6IVEcsMDtF2MUo5CKQCfZajs7KU6NejlTeDSqQt5Fe0hIp9k0Y4AcWi7J3InhlobK4h2ARCSEui8K1MHLGXstTd/6nAdCdg466zaHzz0+BbmSUkdpYZJzdp+GHvWGewe6vsP1rhXTeVj6vysxELBMifItw3UIRF+4Atwb7pUfm3fvXqpAnzzDSaJOG260rW8TXdneG3sziVcyTZhj6VsJEExY7oeD1D/sf9vszgZ9XZTmUgSfCtdYsOX+2gCZe7cfm+tTCkOaLzjOOANE2o535uZnhda/W6itVK8Bz4gRXbw6D9ko0EQr4tRY6fUCQxGf71OTOsANAQXeosB/jme6tBnR5/i4UYv8JrupNRz050kIJm4Gu5kYvlZIHs5WYz10wEAeB2SjY8dumNm3h0LTrtVn8GLBSHs982lZU7Gw+Xxvy5WsP7gHw1MAMBfNW1MctQzCD/gf5tlXVwtHBTsjSuxqHBUQD09TSAwoWb1FJgtvABbN3esMRIMAhVivdDHBMgrlVomAgxDFuRgJ4LYxMcK68Jw34P/nIL1Ow39DsZtqMBKD+YffjMfDucGRLwWX8/DD2qaknkxN7qXP4LZc2GMYk//jg8dWyfkI8tcrn+RNBabVRTewlTo6tkEe3SzgDADquByeCEHuU2OBqT8BHjkVt9+SJ0k95GHbZXLAZyQTW7kQQV+16YE/5KzpzdiLO8fA9Jr9hgGeeHTLbENn1vpat3Xpr4k5qcQ2B2ZNWU18FmpfgvcSh5Z0nr03cWTyYwMAsI1FLi+GOeQknE69m4MuTdNqSA5dgNtOSjafFcDtvw5ot9CauMFEnpgUiHNVCpM3gxgZfi+EMAXjsG1IviS6bnBPTIhF22kLExSY/py75Z6aikW+0wbJ1Uk5MSxIRS0zs+TCUmTEWEm2mdPXiLzYZJ6YxWzcXhStmbGXhIiPcM15y7ljZ51o6jRxzwUgEIcZ73Ayvv3ms3JNLHZpvLqgA4iMAo5akhSTi5NKyzqZlHjRXZkzLxEM6LZL5PODZtMWfPgxjr9kcuYtrm3lAkqknTxykckbUDuWcL+1Cc+XFNCVBy3up6gzKl+NI5+T9LL13zqOiYf98Ix2a1dLCxNQcchTfb2AEOX/HfGLadVQsMPZCc/lArkzQJhMzeqgQeL28E9NYrAITg7l8c48HugeH7i8HGJAyDxBrxI0512RiD8wSzO5hw6madGdImYKd2GiYGJpbLW3Iq8JMJQSmIDoDyhSMGCzqjHnLZWb3gPfYmnkhk3EmHjNVfC6MxIo044LF9hyUy2QI1k2MuVIzUJifSUZAxhj9i+OT8Bu1HNVcLuHyKYC+NbfBmnQU7k3E70z7294d2wAAwjAAGzgi/38KSJU6sNDdXqJW+SFZJfc6WdHPp9oy3EwDAAAAAAAAAAAAAAAAAH5sicFjlq20IUAAAAAASUVORK5CYII="

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(23), __webpack_require__(25), __webpack_require__(26)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
	        global.clipboard = mod.exports;
	    }
	})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
	    'use strict';
	
	    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);
	
	    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);
	
	    var _goodListener2 = _interopRequireDefault(_goodListener);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }
	
	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }
	
	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }
	
	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }
	
	    var Clipboard = function (_Emitter) {
	        _inherits(Clipboard, _Emitter);
	
	        /**
	         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	         * @param {Object} options
	         */
	        function Clipboard(trigger, options) {
	            _classCallCheck(this, Clipboard);
	
	            var _this = _possibleConstructorReturn(this, _Emitter.call(this));
	
	            _this.resolveOptions(options);
	            _this.listenClick(trigger);
	            return _this;
	        }
	
	        /**
	         * Defines if attributes would be resolved using internal setter functions
	         * or custom functions that were passed in the constructor.
	         * @param {Object} options
	         */
	
	
	        Clipboard.prototype.resolveOptions = function resolveOptions() {
	            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
	            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
	            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
	        };
	
	        Clipboard.prototype.listenClick = function listenClick(trigger) {
	            var _this2 = this;
	
	            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
	                return _this2.onClick(e);
	            });
	        };
	
	        Clipboard.prototype.onClick = function onClick(e) {
	            var trigger = e.delegateTarget || e.currentTarget;
	
	            if (this.clipboardAction) {
	                this.clipboardAction = null;
	            }
	
	            this.clipboardAction = new _clipboardAction2.default({
	                action: this.action(trigger),
	                target: this.target(trigger),
	                text: this.text(trigger),
	                trigger: trigger,
	                emitter: this
	            });
	        };
	
	        Clipboard.prototype.defaultAction = function defaultAction(trigger) {
	            return getAttributeValue('action', trigger);
	        };
	
	        Clipboard.prototype.defaultTarget = function defaultTarget(trigger) {
	            var selector = getAttributeValue('target', trigger);
	
	            if (selector) {
	                return document.querySelector(selector);
	            }
	        };
	
	        Clipboard.prototype.defaultText = function defaultText(trigger) {
	            return getAttributeValue('text', trigger);
	        };
	
	        Clipboard.prototype.destroy = function destroy() {
	            this.listener.destroy();
	
	            if (this.clipboardAction) {
	                this.clipboardAction.destroy();
	                this.clipboardAction = null;
	            }
	        };
	
	        return Clipboard;
	    }(_tinyEmitter2.default);
	
	    /**
	     * Helper function to retrieve attribute value.
	     * @param {String} suffix
	     * @param {Element} element
	     */
	    function getAttributeValue(suffix, element) {
	        var attribute = 'data-clipboard-' + suffix;
	
	        if (!element.hasAttribute(attribute)) {
	            return;
	        }
	
	        return element.getAttribute(attribute);
	    }
	
	    module.exports = Clipboard;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(24)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('select'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.select);
	        global.clipboardAction = mod.exports;
	    }
	})(this, function (module, _select) {
	    'use strict';
	
	    var _select2 = _interopRequireDefault(_select);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	    };
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    var ClipboardAction = function () {
	        /**
	         * @param {Object} options
	         */
	        function ClipboardAction(options) {
	            _classCallCheck(this, ClipboardAction);
	
	            this.resolveOptions(options);
	            this.initSelection();
	        }
	
	        /**
	         * Defines base properties passed from constructor.
	         * @param {Object} options
	         */
	
	
	        ClipboardAction.prototype.resolveOptions = function resolveOptions() {
	            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	            this.action = options.action;
	            this.emitter = options.emitter;
	            this.target = options.target;
	            this.text = options.text;
	            this.trigger = options.trigger;
	
	            this.selectedText = '';
	        };
	
	        ClipboardAction.prototype.initSelection = function initSelection() {
	            if (this.text) {
	                this.selectFake();
	            } else if (this.target) {
	                this.selectTarget();
	            }
	        };
	
	        ClipboardAction.prototype.selectFake = function selectFake() {
	            var _this = this;
	
	            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
	
	            this.removeFake();
	
	            this.fakeHandlerCallback = function () {
	                return _this.removeFake();
	            };
	            this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback) || true;
	
	            this.fakeElem = document.createElement('textarea');
	            // Prevent zooming on iOS
	            this.fakeElem.style.fontSize = '12pt';
	            // Reset box model
	            this.fakeElem.style.border = '0';
	            this.fakeElem.style.padding = '0';
	            this.fakeElem.style.margin = '0';
	            // Move element out of screen horizontally
	            this.fakeElem.style.position = 'absolute';
	            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
	            // Move element to the same position vertically
	            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
	            this.fakeElem.addEventListener('focus', window.scrollTo(0, yPosition));
	            this.fakeElem.style.top = yPosition + 'px';
	
	            this.fakeElem.setAttribute('readonly', '');
	            this.fakeElem.value = this.text;
	
	            document.body.appendChild(this.fakeElem);
	
	            this.selectedText = (0, _select2.default)(this.fakeElem);
	            this.copyText();
	        };
	
	        ClipboardAction.prototype.removeFake = function removeFake() {
	            if (this.fakeHandler) {
	                document.body.removeEventListener('click', this.fakeHandlerCallback);
	                this.fakeHandler = null;
	                this.fakeHandlerCallback = null;
	            }
	
	            if (this.fakeElem) {
	                document.body.removeChild(this.fakeElem);
	                this.fakeElem = null;
	            }
	        };
	
	        ClipboardAction.prototype.selectTarget = function selectTarget() {
	            this.selectedText = (0, _select2.default)(this.target);
	            this.copyText();
	        };
	
	        ClipboardAction.prototype.copyText = function copyText() {
	            var succeeded = void 0;
	
	            try {
	                succeeded = document.execCommand(this.action);
	            } catch (err) {
	                succeeded = false;
	            }
	
	            this.handleResult(succeeded);
	        };
	
	        ClipboardAction.prototype.handleResult = function handleResult(succeeded) {
	            this.emitter.emit(succeeded ? 'success' : 'error', {
	                action: this.action,
	                text: this.selectedText,
	                trigger: this.trigger,
	                clearSelection: this.clearSelection.bind(this)
	            });
	        };
	
	        ClipboardAction.prototype.clearSelection = function clearSelection() {
	            if (this.target) {
	                this.target.blur();
	            }
	
	            window.getSelection().removeAllRanges();
	        };
	
	        ClipboardAction.prototype.destroy = function destroy() {
	            this.removeFake();
	        };
	
	        _createClass(ClipboardAction, [{
	            key: 'action',
	            set: function set() {
	                var action = arguments.length <= 0 || arguments[0] === undefined ? 'copy' : arguments[0];
	
	                this._action = action;
	
	                if (this._action !== 'copy' && this._action !== 'cut') {
	                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
	                }
	            },
	            get: function get() {
	                return this._action;
	            }
	        }, {
	            key: 'target',
	            set: function set(target) {
	                if (target !== undefined) {
	                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
	                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
	                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
	                        }
	
	                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
	                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
	                        }
	
	                        this._target = target;
	                    } else {
	                        throw new Error('Invalid "target" value, use a valid Element');
	                    }
	                }
	            },
	            get: function get() {
	                return this._target;
	            }
	        }]);
	
	        return ClipboardAction;
	    }();
	
	    module.exports = ClipboardAction;
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	function select(element) {
	    var selectedText;
	
	    if (element.nodeName === 'SELECT') {
	        element.focus();
	
	        selectedText = element.value;
	    }
	    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
	        element.focus();
	        element.setSelectionRange(0, element.value.length);
	
	        selectedText = element.value;
	    }
	    else {
	        if (element.hasAttribute('contenteditable')) {
	            element.focus();
	        }
	
	        var selection = window.getSelection();
	        var range = document.createRange();
	
	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);
	
	        selectedText = selection.toString();
	    }
	
	    return selectedText;
	}
	
	module.exports = select;


/***/ },
/* 25 */
/***/ function(module, exports) {

	function E () {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}
	
	E.prototype = {
	  on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});
	
	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });
	
	    return this;
	  },
	
	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    };
	
	    listener._ = callback
	    return this.on(name, listener, ctx);
	  },
	
	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;
	
	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }
	
	    return this;
	  },
	
	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];
	
	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }
	
	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
	
	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];
	
	    return this;
	  }
	};
	
	module.exports = E;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(27);
	var delegate = __webpack_require__(28);
	
	/**
	 * Validates all params and calls the right
	 * listener function based on its target type.
	 *
	 * @param {String|HTMLElement|HTMLCollection|NodeList} target
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listen(target, type, callback) {
	    if (!target && !type && !callback) {
	        throw new Error('Missing required arguments');
	    }
	
	    if (!is.string(type)) {
	        throw new TypeError('Second argument must be a String');
	    }
	
	    if (!is.fn(callback)) {
	        throw new TypeError('Third argument must be a Function');
	    }
	
	    if (is.node(target)) {
	        return listenNode(target, type, callback);
	    }
	    else if (is.nodeList(target)) {
	        return listenNodeList(target, type, callback);
	    }
	    else if (is.string(target)) {
	        return listenSelector(target, type, callback);
	    }
	    else {
	        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
	    }
	}
	
	/**
	 * Adds an event listener to a HTML element
	 * and returns a remove listener function.
	 *
	 * @param {HTMLElement} node
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNode(node, type, callback) {
	    node.addEventListener(type, callback);
	
	    return {
	        destroy: function() {
	            node.removeEventListener(type, callback);
	        }
	    }
	}
	
	/**
	 * Add an event listener to a list of HTML elements
	 * and returns a remove listener function.
	 *
	 * @param {NodeList|HTMLCollection} nodeList
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNodeList(nodeList, type, callback) {
	    Array.prototype.forEach.call(nodeList, function(node) {
	        node.addEventListener(type, callback);
	    });
	
	    return {
	        destroy: function() {
	            Array.prototype.forEach.call(nodeList, function(node) {
	                node.removeEventListener(type, callback);
	            });
	        }
	    }
	}
	
	/**
	 * Add an event listener to a selector
	 * and returns a remove listener function.
	 *
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenSelector(selector, type, callback) {
	    return delegate(document.body, selector, type, callback);
	}
	
	module.exports = listen;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Check if argument is a HTML element.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.node = function(value) {
	    return value !== undefined
	        && value instanceof HTMLElement
	        && value.nodeType === 1;
	};
	
	/**
	 * Check if argument is a list of HTML elements.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.nodeList = function(value) {
	    var type = Object.prototype.toString.call(value);
	
	    return value !== undefined
	        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
	        && ('length' in value)
	        && (value.length === 0 || exports.node(value[0]));
	};
	
	/**
	 * Check if argument is a string.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.string = function(value) {
	    return typeof value === 'string'
	        || value instanceof String;
	};
	
	/**
	 * Check if argument is a function.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.fn = function(value) {
	    var type = Object.prototype.toString.call(value);
	
	    return type === '[object Function]';
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var closest = __webpack_require__(29);
	
	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function delegate(element, selector, type, callback, useCapture) {
	    var listenerFn = listener.apply(this, arguments);
	
	    element.addEventListener(type, listenerFn, useCapture);
	
	    return {
	        destroy: function() {
	            element.removeEventListener(type, listenerFn, useCapture);
	        }
	    }
	}
	
	/**
	 * Finds closest match and invokes callback.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Function}
	 */
	function listener(element, selector, type, callback) {
	    return function(e) {
	        e.delegateTarget = closest(e.target, selector);
	
	        if (e.delegateTarget) {
	            callback.call(element, e);
	        }
	    }
	}
	
	module.exports = delegate;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * A polyfill for Element.matches()
	 */
	if (Element && !Element.prototype.matches) {
	    var proto = Element.prototype;
	
	    proto.matches = proto.matchesSelector ||
	                    proto.mozMatchesSelector ||
	                    proto.msMatchesSelector ||
	                    proto.oMatchesSelector ||
	                    proto.webkitMatchesSelector;
	}
	
	/**
	 * Finds the closest parent that matches a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @return {Function}
	 */
	function closest (element, selector) {
	    while (element && element !== document) {
	        if (element.matches(selector)) return element;
	        element = element.parentNode;
	    }
	}
	
	module.exports = closest;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5M2YyNGI0MjhhNzc1MmRjZGQwYSIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFzaEhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9kaWFsb2cubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RsZ3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd3JhcElucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ByaXplVG1wbC5odG1sIiwid2VicGFjazovLy8uL3NyYy92aWV3L2VsZWNwcml6ZVRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9hY3R1YWxQcml6ZVRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL215YXdhcmQxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL215YXdhcmQyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ByaXplLnBuZyIsIndlYnBhY2s6Ly8vLi9+L2NsaXBib2FyZC9saWIvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL34vY2xpcGJvYXJkL2xpYi9jbGlwYm9hcmQtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vc2VsZWN0L3NyYy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9nb29kLWxpc3RlbmVyL3NyYy9saXN0ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9nb29kLWxpc3RlbmVyL3NyYy9pcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JDQSxLQUFJLGNBQWMsb0JBQVEsQ0FBUixDQUFsQjtBQUNBLEtBQUksU0FBUyxvQkFBUSxDQUFSLENBQWI7QUFDQSxLQUFJLFFBQVEsb0JBQVEsQ0FBUixDQUFaO0FBQ0EsS0FBSSxTQUFTLG9CQUFRLEVBQVIsQ0FBYjtBQUNBLEtBQUksU0FBUyxvQkFBUSxFQUFSLENBQWI7QUFDQSxLQUFJLFFBQVEsb0JBQVEsRUFBUixDQUFaO0FBQ0EsS0FBSSxZQUFZLG9CQUFRLEVBQVIsQ0FBaEI7O0FBRUEsS0FBSSxVQUFVO0FBQ1osWUFBUyxFQURHO0FBRVosYUFGWSxzQkFFRCxLQUZDLEVBRUssRUFGTCxFQUVRLFFBRlIsRUFFaUI7QUFDM0IsVUFBSyxTQUFMLENBQWUsV0FBZixDQUEyQixNQUFNLGFBQU4sQ0FBb0Isa0JBQWtCLEVBQWxCLEdBQXVCLHlCQUF2QixHQUFrRCxLQUFsRCxHQUEwRCxPQUE5RSxDQUEzQjtBQUNBLFVBQUssT0FBTCxDQUFhLEVBQWIsSUFBbUIsUUFBbkI7QUFDQSxZQUFPLElBQVA7QUFDRCxJQU5XO0FBT1osT0FQWSxrQkFPTjtBQUNKLFVBQUssU0FBTCxHQUFpQixNQUFNLGFBQU4sQ0FBb0Isb0VBQXBCLENBQWpCOztBQUVBLGNBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsS0FBSyxTQUEvQjs7QUFFQSxXQUFNLFNBQU4sQ0FB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RTs7Ozs7O0FDN0pEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0Esb0JBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLE9BQU87QUFDMUI7OztBQUdBO0FBQ0EsbUZBQWtGOztBQUVsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FB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LE9BQU87QUFDbEIsWUFBVyxTQUFTO0FBQ3BCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsUUFBUTtBQUNuQixZQUFXLE9BQU87QUFDbEIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5M2YyNGI0MjhhNzc1MmRjZGQwYVxuICoqLyIsIi8vIGltcG9ydCBoYXNoSGlzdG9yeSBmcm9tICcuLi9oYXNoSGlzdG9yeS5qcyc7XHJcbnZhciBoYXNoSGlzdG9yeSA9IHJlcXVpcmUoJy4uL2hhc2hIaXN0b3J5LmpzJyk7XHJcbnZhciBkaWFsb2cgPSByZXF1aXJlKCcuLi9pbmRleC5qcycpO1xyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9kb20uanMnKTtcclxudmFyIGF3YXJkMSA9IHJlcXVpcmUoJy4uL2ltYWdlcy9teWF3YXJkMS5wbmcnKTtcclxudmFyIGF3YXJkMiA9IHJlcXVpcmUoJy4uL2ltYWdlcy9teWF3YXJkMi5wbmcnKTtcclxudmFyIHByaXplID0gcmVxdWlyZSgnLi4vaW1hZ2VzL3ByaXplLnBuZycpO1xyXG52YXIgQ2xpcGJvYXJkID0gcmVxdWlyZSgnY2xpcGJvYXJkJyk7XHJcblxyXG52YXIgZXhhbXBsZSA9IHtcclxuICBfZXZlbnRzOiB7fSxcclxuICBhZGRFeGFtcGxlKHZhbHVlLGlkLGNhbGxiYWNrKXtcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHV0aWxzLmNyZWF0ZUh0bWxEb20oJzxsaSBkYXRhLWlkPVwiJyArIGlkICsgJ1wiIHN0eWxlPVwicGFkZGluZzo1cHg7XCI+JysgdmFsdWUgKyAnPC9saT4nKSk7XHJcbiAgICB0aGlzLl9ldmVudHNbaWRdID0gY2FsbGJhY2s7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9LFxyXG4gIGluaXQoKXtcclxuICAgIHRoaXMuY29udGFpbmVyID0gdXRpbHMuY3JlYXRlSHRtbERvbSgnPHVsIGNsYXNzPVwiZXhhbXBsZUxpc3RcIiBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtcIj48L3VsPicpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG5cclxuICAgIHV0aWxzLmJpbmRFdmVudCh0aGlzLmNvbnRhaW5lciwnY2xpY2snLCB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICBkaXNwYXRjaEV2ZW50KGV2dCl7XHJcbiAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldCxcclxuICAgICAgICBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICBpZighIXRoaXMuX2V2ZW50c1tpZF0pe1xyXG4gICAgICB0aGlzLl9ldmVudHNbaWRdKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5leGFtcGxlLmluaXQoKTtcclxuZXhhbXBsZS5hZGRFeGFtcGxlKCfkuI3luKbmoIfpopgt56Gu6K6k5qGGMuihjCcsJ2NvbmZpcm0yJyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuY29uZmlybSgn5omT5byA4oCc5pC656iL4oCd5a6i5oi356uv77yM6L+U5Zue5pys6aG156uL5Y2z5aKe5YqgM+asoeaKveWlluacuuS8muOAgiAnLG51bGwsXCJcIiwn5LiN5LqGJywn56uL5Y2z5omT5byAJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+S4jeW4puagh+mimC3noa7orqTmoYYz6KGMJywnY29uZmlybTMnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5jb25maXJtKCfmiZPlvIDigJzmkLrnqIvigJ3lrqLmiLfnq6/vvIzov5Tlm57mnKzpobXnq4vljbPlop4g5YqgM+asoeaKveWlluacuuS8mi7ov5Tlm57mnKzpobXnq4vljbPlop7liqAz5qyhIOaKveWlluacuuS8muOAgiAnLG51bGwsXCJcIiwn5LiN5LqGJywn56uL5Y2z5omT5byAJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3lj43ppojor7TmmI4nLCdmZWVkYmFjaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgZGlhbG9nLmNvbmZpcm0oJ+avj+WuieijheS4gOS4quW6lOeUqO+8jOWkmuWinuWKoDHmrKHmir3lpZbmnLrkvJogJyxudWxsLFwi6I635b6XMeasoeaKveWlluacuuS8mlwiLCfnoa7lrponLCfnu6fnu63lronoo4UnKTtcclxufSkuYWRkRXhhbXBsZSgn5LiN5bim5qCH6aKYLeaPkOekuuahhicsJ2FsZXJ0JyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuYWxlcnQoJ+aPkOS6pOWksei0pe+8jOivt+eojeWQjuWGjeivlSAnLCcnKTtcclxufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeWNleihjOaPkOekuuahhicsJ3RsZS1hbGVydCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgZGlhbG9nLmFsZXJ0KCfor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI4nLCfpooblj5bmiJDlip8nKTtcclxufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeS4pOihjOaPkOekuuahhicsJ3RsZS1hbGVydDInLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5hbGVydCgn6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO77yM6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piO44CCJywn6aKG5Y+W5oiQ5YqfJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+S4jeW4puagh+mimC3loavlhpnmiYvmnLrlj7fnoIHmoYYnLCdjb25maXJtTW9iaWxlJyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuY29uZmlybU1vYmlsZShudWxsLCgpPT57XHJcbiAgICBkaWFsb2cuYWxlcnQoJ+ivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuOAgicsJ+mihuWPluaIkOWKnycpO1xyXG4gIH0pO1xyXG59KS5hZGRFeGFtcGxlKCfkuI3luKbmoIfpopgt5bey5aGr5YaZ5omL5py65Y+356CB5qGGJywnaGFzQ29uZmlybU1vYmlsZScsZnVuY3Rpb24oKXtcclxuXHJcbiAgZGlhbG9nLmNvbmZpcm1Nb2JpbGUoMTMyMTIzNDEyMzQsbnVsbCxudWxsLHRydWUpO1xyXG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt5oiR55qE5aWW5ZOB5qGG5aSa5LiqJywnbXlBd2FyZHMnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5hbGVydEF3YXJkTGlzdChbXHJcbiAgICB7aW1nVXJsOmF3YXJkMSxuYW1lOifor53otLk1MOWFgycsdHlwZTonY2FsbF9jaGFyZ2UnLGhhc2NvbWZpcm06dHJ1ZSxwaG9uZTogJzEyMzEyMzQxMjM0J30sXHJcbiAgICB7aW1nVXJsOmF3YXJkMSxuYW1lOifor53otLk1MOWFgycsdHlwZTonY2FsbF9jaGFyZ2UnfSxcclxuICAgIHtcclxuICAgICAgaW1nVXJsOmF3YXJkMSxcclxuICAgICAgbmFtZTon6a2F5peP5LyY5oOg5Yi4IDIwMCDlhYMnLFxyXG4gICAgICB0eXBlOidlbGVjdHJvbmljJyxcclxuICAgICAgdm91Y2hlcjogJ0RPUktFMjgwNDgyMjI4MjM6MTI4ODc1NzAwOTknLFxyXG4gICAgICBkZXNjOiAn6a2F5peP5LyY5oOg5Yi4IDIwMCDlhYMnLFxyXG4gICAgICB3aW5NZXNzYWdlOiAn5L2/55So5pa55rOV77ya5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj69cXHJcXG7kvb/nlKjmlrnms5XvvJrliY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPrydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltZ1VybDphd2FyZDEsXHJcbiAgICAgIG5hbWU6J+S4gOS4queggS3prYXml4/kvJjmg6DliLggMjAwIOWFgycsXHJcbiAgICAgIHR5cGU6J2VsZWN0cm9uaWMnLFxyXG4gICAgICB2b3VjaGVyOiAnRE9SS0UyODA0ODIyMjgyMycsXHJcbiAgICAgIGRlc2M6ICfprYXml4/kvJjmg6DliLggMjAwIOWFgycsXHJcbiAgICAgIHdpbk1lc3NhZ2U6ICfkvb/nlKjmlrnms5XvvJrliY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPr1xcclxcbuS9v+eUqOaWueazle+8muWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+vJ1xyXG4gICAgfSxcclxuICAgIHtpbWdVcmw6YXdhcmQyLG5hbWU6J1BybyA2Jyx0eXBlOidhY3R1YWwnfSxcclxuICAgIHtpbWdVcmw6YXdhcmQyLG5hbWU6J1BybyA2Jyx0eXBlOidhY3R1YWwnLGhhc2NvbWZpcm06dHJ1ZSx2YWx1ZXM6WydwYW5kYScsJzEyMzEyMzQxMjMnLCflub/kuJznnIHnj6DmtbfluILpppnmtLLljLrllJDlrrbmub7ll7fll7fllYo2NjYnXX1dLChpZHgsaXRlbSxkYXRhKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZygnb2snLGlkeCxpdGVtLGRhdGEpO1xyXG4gICAgfSk7XHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3miJHnmoTlpZblk4HmoYbkuKTkuKonLCdteUF3YXJkc3R3bycsZnVuY3Rpb24oKXtcclxuXHJcbiAgZGlhbG9nLmFsZXJ0QXdhcmRMaXN0KFtcclxuICAgIHtpbWdVcmw6YXdhcmQxLG5hbWU6J+ivnei0uTUw5YWDJyx0eXBlOidjYWxsX2NoYXJnZScsaGFzY29tZmlybTp0cnVlLHBob25lOiAnMTIzMTIzNDEyMzQnfSxcclxuICAgIHtpbWdVcmw6YXdhcmQyLG5hbWU6J1BybyA2Jyx0eXBlOidhY3R1YWwnfV0pO1xyXG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt5oiR55qE5aWW5ZOB5qGG5LiA5LiqJywnbXlBd2FyZHNvbmUnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5hbGVydEF3YXJkTGlzdChbXHJcbiAgICB7aW1nVXJsOmF3YXJkMSxuYW1lOifor53otLk1MOWFgycsdHlwZTonY2FsbF9jaGFyZ2UnLGhhc2NvbWZpcm06dHJ1ZSxwaG9uZTogJzEyMzEyMzQxMjM0J31dKTtcclxufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLea0u+WKqOivtOaYjicsJ3J1bGUnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5hbGVydFJ1bGUoJ+a0u+WKqOaXtumXtO+8mjIwMTYuMTEuMTYtMjAxNi4xMS4xOFxcbicrXHJcbiAgICAgICAgICAnMS7mr4/kuKrnlKjmiLfmr4/lpKnmnIkz5q2k5oq95aWW5py65Lya77yM5Y+m5a6M5oiQ5Lu75Yqh5ZCO6I635b6X5pu05aSa5py65Lya44CCXFxuJytcclxuICAgICAgICAgICcyLuWunueJqeWlluWTgeWwhuWcqOa0u+WKqOe7k+adn+WQjue7n+S4gOWPkeaUvu+8jOWvhOmAgeWJjeWwhuiBlOezu+iOt+WlluiAheehruiupOaUtui0p+WcsOWdgOOAglxcbicrXHJcbiAgICAgICAgICAnMy7mnKzmrKHmtLvliqjmnIDnu4jop6Pph4rmnYPlvZLprYXml4/np5HmioDmnInpmZDlhazlj7jmiYDmnIku5aaC5pyJ55aR6Zeu6K+36IGU57O75a6i5pyN5Lq65ZGY44CCXFxuJytcclxuICAgICAgICAgICc0LuWunueJqeWlluWTgeWwhuWcqOa0u+WKqOe7k+adn+WQjue7n+S4gOWPkeaUvu+8jOWvhOmAgeWJjeWwhuiBlOezu+iOt+WlluiAheehruiupOaUtui0p+WcsOWdgOOAglxcbicrXHJcbiAgICAgICAgICAnNS7mnKzmrKHmtLvliqjmnIDnu4jop6Pph4rmnYPlvZLprYXml4/np5HmioDmnInpmZDlhazlj7jmiYDmnIku5aaC5pyJ55aR6Zeu6K+36IGU57O75a6i5pyN5Lq65ZGY44CCXFxuJytcclxuICAgICAgICAgICc2LuacrOasoea0u+WKqOacgOe7iOino+mHiuadg+W9kumtheaXj+enkeaKgOaciemZkOWFrOWPuOaJgOaciS7lpoLmnInnlpHpl67or7fogZTns7vlrqLmnI3kurrlkZjjgILmnKzmrKHmtLvliqjmnIDnu4jop6Pph4rmnYPlvZLprYXml4/np5HmioDmnInpmZDlhazlj7jmiYDmnInjgIIgNi7mnKzmrKHmtLvliqjmnIDnu4jop6Pph4rmnYPlvZLprYXml4/np5HmioDmnInpmZDlhazlj7jmiYDmnIku5aaC5pyJ55aR6Zeu6K+36IGU57O75a6i5pyN5Lq65ZGY44CC5pys5qyh5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S6a2F5peP56eR5oqA5pyJ6ZmQ5YWs5Y+45omA5pyJ44CCIDYu5pys5qyh5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S6a2F5peP56eR5oqA5pyJ6ZmQ5YWs5Y+45omA5pyJLuWmguacieeWkemXruivt+iBlOezu+WuouacjeS6uuWRmOOAguacrOasoea0u+WKqOacgOe7iOino+mHiuadg+W9kumtheaXj+enkeaKgOaciemZkOWFrOWPuOaJgOacieOAgiA2LuacrOasoea0u+WKqOacgOe7iOino+mHiuadg+W9kumtheaXj+enkeaKgOaciemZkOWFrOWPuOaJgOaciS7lpoLmnInnlpHpl67or7fogZTns7vlrqLmnI3kurrlkZjjgILmnKzmrKHmtLvliqjmnIDnu4jop6Pph4rmnYPlvZLprYXml4/np5HmioDmnInpmZDlhazlj7jmiYDmnInjgIIgNi7mnKzmrKHmtLvliqjmnIDnu4jop6Pph4rmnYPlvZLprYXml4/np5HmioDmnInpmZDlhazlj7jmiYDmnIku5aaC5pyJ55aR6Zeu6K+36IGU57O75a6i5pyN5Lq65ZGY44CC5pys5qyh5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S6a2F5peP56eR5oqA5pyJ6ZmQ5YWs5Y+45omA5pyJ44CCIDYu5pys5qyh5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S6a2F5peP56eR5oqA5pyJ6ZmQ5YWs5Y+45omA5pyJLuWmguacieeWkemXruivt+iBlOezu+WuouacjeS6uuWRmOOAguacrOasoea0u+WKqOacgOe7iOino+mHiuadg+W9kumtheaXj+enkeaKgOaciemZkOWFrOWPuOaJgOacieOAgiAnKTtcclxufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeS4reWlluWQjeWNlScsJ3dpbm5lckRsZycsZnVuY3Rpb24oKXtcclxuXHJcbiAgZGlhbG9nLmFsZXJ0V2lubmVyTGlzdChbe1xyXG4gICAgbmlja05hbWU6ICflvbzlsrgu6Iqx5YeL6Zu2JyxcclxuICAgIHRpdGxlOiAnQ0lMSU5FLeaygem6nzIuNUzmmbrog73pnaDosLHnhbInXHJcbiAgfSx7XHJcbiAgICBuaWNrTmFtZTogJ+WHoOasoea3seaDheWHoOaWpOaDheivnScsXHJcbiAgICB0aXRsZTogJ+iOt+W+l+mtheaXjyBwcm8gNiDkuIDlj7Ag5ou36LSdJ1xyXG4gIH0se1xyXG4gICAgbmlja05hbWU6ICfmiorlv4PphbjlvZPmiJDnrJHor53or7QnLFxyXG4gICAgdGl0bGU6ICfmuLjmiI/miYvmn4ROR0RTIE4xcHJv5Y+M6ams6L6+6ZyH5YqoJ1xyXG4gIH0se1xyXG4gICAgbmlja05hbWU6ICfkuJzkuqzlt7flsL7nmoTpnZLoi5QnLFxyXG4gICAgdGl0bGU6ICfprYXml4/np7vliqjnlLXmupDvvIjmoIflh4bniYjvvIknXHJcbiAgfSx7XHJcbiAgICBuaWNrTmFtZTogJ+S4v01vbnN0ZXLljalz5Yal5b2hJyxcclxuICAgIHRpdGxlOiAn5p6B6Lev5a6iICggR29sdWsgKUcxIOaZuuiDveihjOi9puiusOW9leS7qidcclxuICB9LHtcclxuICAgIG5pY2tOYW1lOiAn4peH4pWw5pyq5p2l44CB5oCO5LmI5p2l44CCJyxcclxuICAgIHRpdGxlOiAn5bm75ZONQjEw5peg57q/6L+Q5Yqo6JOd54mZJ1xyXG4gIH1dKTtcclxuXHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3or53otLnlpZblk4EnLCdjaGFyZ2VEbGcnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5hbGVydFZpcnR1YWxEbGcoe1xyXG4gICAgICBpbWdVcmw6IHByaXplLFxyXG4gICAgICBkZXNjOiAn6K+d6LS5NTDlhYMnLFxyXG4gICAgICB3aW5NZXNzYWdlOiAn5pm66IO9572R5Y+356CB77yIMTMw44CBMTMx44CBMTMy44CBMTU144CBMTU2562J5Y+35q6177yJ5Lit5aWW55So5oi377yM5Zug6L+Q6JCl5ZWG5YWF5YC85Y+X6ZmQ5peg5rOV5YWF5YC844CCJ1xyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMsYXJndW1lbnRzKTtcclxuICAgIH1cclxuICApO1xyXG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt6Jma5ouf5Yi45aWW5ZOBJywnZWxlY3Ryb25pY0RsZycsZnVuY3Rpb24oKXtcclxuICBkaWFsb2cuYWxlcnRFbGVjdHJvbmljRGxnKHtcclxuICAgICAgdm91Y2hlcjogJ0RPUktFMjgwNDgyMjI4MjM6MTI4ODc1NzAwOTknLFxyXG4gICAgICB3aW5NZXNzYWdlOiAn5L2/55So5pa55rOV77ya5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj68nLFxyXG4gICAgICBkZXNjOiAn576O5Zui5LyY5oOg5Yi4NTAw5YWDJ1xyXG4gICAgfVxyXG4gICk7XHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3lrp7nianlpZblk4EnLCdhY3R1YWxEbGcnLGZ1bmN0aW9uKCl7XHJcbiAgZGlhbG9nLmFsZXJ0QWN0dWFsRGxnKHtcclxuICAgICAgaW1nVXJsOiBwcml6ZSxcclxuICAgICAgZGVzYzogJ214NiDkuIDlj7AnLFxyXG4gICAgICB3aW5NZXNzYWdlOiAn5L2/55So5pa55rOV77ya5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj6/mjaLooYzlkKfmjaLooYzlkKcnXHJcbiAgICB9XHJcbiAgKTtcclxufSkuYWRkRXhhbXBsZSgn5L+u5pS55qCH6aKYLeWunueJqeWlluWTgScsJ2FjdHVhbERsZycsZnVuY3Rpb24oKXtcclxuICBkaWFsb2cuYWxlcnRBY3R1YWxEbGcoe1xyXG4gICAgICBpbWdVcmw6IHByaXplLFxyXG4gICAgICBkZXNjOiAnbXg2IOS4gOWPsCcsXHJcbiAgICAgIHdpbk1lc3NhZ2U6ICfkvb/nlKjmlrnms5XvvJrliY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPr+aNouihjOWQp+aNouihjOWQpycsXHJcbiAgICAgIHRpdGxlOiAn5oqi5Yiw5ZWmfidcclxuICAgIH1cclxuICApO1xyXG59KS5hZGRFeGFtcGxlKCfkuI3luKbmoIfpopgt5aGr5YaZ5a6e54mp5aWW5ZOB5pS25Lu25Lq65L+h5oGvJywnZmlsbGZvcm1EbGcnLGZ1bmN0aW9uKCl7XHJcbiAgZGlhbG9nLmFsZXJ0UGVyc29uSW5mb0RsZygpO1xyXG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt5LiA5Liq6Jma5ouf5Yi45aWW5ZOBJywnb25lRWxlY3Ryb25pY0RsZycsZnVuY3Rpb24oKXtcclxuICBkaWFsb2cuYWxlcnRFbGVjdHJvbmljRGxnKHtcclxuICAgICAgdm91Y2hlcjogJ0RPUktFMjgwNDgyMjI4MjMnLFxyXG4gICAgICB3aW5NZXNzYWdlOiAn5L2/55So5pa55rOV77yaMS7liY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPr1xcclxcbjIu5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj6/kvb/nlKjmlrnms5XvvJrliY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPr+S9v+eUqOaWueazle+8muWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+v5L2/55So5pa55rOV77ya5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj6/kvb/nlKjmlrnms5XvvJrliY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPr+S9v+eUqOaWueazle+8muWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+v5L2/55So5pa55rOV77ya5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj6/kvb/nlKjmlrnms5XvvJrliY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPr+S9v+eUqOaWueazle+8muWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+vMTEnLFxyXG4gICAgICBkZXNjOiAn576O5Zui5LyY5oOg5Yi4NTAw5YWDJ1xyXG4gICAgfVxyXG4gICk7XHJcbn0pLmFkZEV4YW1wbGUoJ+a1i+ivlWxvYWRpbmcnLCdsb2FkaW5nJyxmdW5jdGlvbigpe1xyXG4gICAgZGlhbG9nLnNob3dMb2FkaW5nKCk7XHJcbiAgICBkaWFsb2cuc2hvd0xvYWRpbmcoKTtcclxuICAgIGRpYWxvZy5oaWRlTG9hZGluZygpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBkaWFsb2cuaGlkZUxvYWRpbmcoKTtcclxuICAgIH0sIDEwMDApO1xyXG59KS5hZGRFeGFtcGxlKCfmoYbkuK3moYYnLCdkbGdvZmRsZycsZnVuY3Rpb24oKXtcclxuICB2YXIgaXNBbGVydGVkID0gZmFsc2U7XHJcbiAgZGlhbG9nLmFsZXJ0KCfniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrnniLbmoYblhoXlrrknLCfniLbmoYbmoIfpopgnLGZ1bmN0aW9uKCl7XHJcbiAgICBpZihpc0FsZXJ0ZWQpIHJldHVybjtcclxuXHJcbiAgICBkaWFsb2cuYWxlcnQoJ+WtkOahhuWGheWuuScsJycpO1xyXG5cclxuICAgIGlzQWxlcnRlZCA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxudmFyIHRvb2xzID0ge1xyXG4gIHN1cHBvcnRDb3B5OiB0cnVlLFxyXG4gIGNvcHlBbmRHbzogZnVuY3Rpb24oYnRuLHRleHQsdXJsLG9wdGlvbnMpe1xyXG4gICAgdmFyIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmQoYnRuLCB7XHJcbiAgICAgICAgdGV4dDogZnVuY3Rpb24odHJpZ2dlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIGNsaXBib2FyZC5vbignc3VjY2VzcycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZS5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICBjbGlwYm9hcmQuZGVzdHJveSgpO1xyXG5cclxuICAgICAgb3B0aW9ucy5zdWNlc3NDYWxsYmFjayAmJiBvcHRpb25zLnN1Y2Vzc0NhbGxiYWNrKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNsaXBib2FyZC5vbignZXJyb3InLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNsaXBib2FyZC5kZXN0cm95KCk7XHJcbiAgICAgIG9wdGlvbnMuZmFpbENhbGxiYWNrICYmIG9wdGlvbnMuZmFpbENhbGxiYWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjbGlwYm9hcmQ7XHJcbiAgfVxyXG59O1xyXG5cclxuZGlhbG9nLmNvbmZpZyh7XHJcbiAgdXNlSGFzaDp0cnVlLFxyXG4gIGNvcHlUb29sOiB0b29sc1xyXG59KTtcclxuXHJcbmRpYWxvZy5hZnRlckxpc3RlbmVyKGZ1bmN0aW9uKGRpYWxvZyl7XHJcbiAgJChkaWFsb2cuZGlhbG9nRG9tKS5kZWxlZ2F0ZSgnaW5wdXQsdGV4dGFyZWEnLCdmb2N1cycsZnVuY3Rpb24oKXtcclxuICAgIHZhciBjaGFyRGxnID0gJCh0aGlzKS5jbG9zZXN0KCcubW9kYWwtZGlhbG9nJyk7XHJcbiAgICBjaGFyRGxnLmF0dHIoJ29yaXRvcCcsY2hhckRsZy5jc3MoJ3RvcCcpKTtcclxuICAgIGNoYXJEbGcuY3NzKCd0b3AnLCczMHB4Jyk7XHJcblxyXG4gIH0pLmRlbGVnYXRlKCdpbnB1dCx0ZXh0YXJlYScsJ2JsdXInLGZ1bmN0aW9uKGV2dCl7XHJcbiAgICBjb25zb2xlLmxvZyhldnQudGFyZ2V0KVxyXG4gICAgdmFyIGNoYXJEbGcgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKSxcclxuICAgICAgICBvcml0b3AgPSBjaGFyRGxnLmF0dHIoJ29yaXRvcCcpO1xyXG5cclxuICAgIGlmKG9yaXRvcCAhPSBudWxsICYmIG9yaXRvcCAhPSAnJylcclxuICAgICAgY2hhckRsZy5jc3MoJ3RvcCcsb3JpdG9wKTtcclxuICB9KTtcclxufSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9leGFtcGxlL2VudHJ5LmpzXG4gKiovIiwiaW1wb3J0IHtiaW5kRXZlbnQsdW5CaW5kRXZlbnR9IGZyb20gJy4vZG9tLmpzJztcclxuXHJcbmNvbnN0IEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcclxuY29uc3QgcXVlcnlfa2V5ID0gJ19kZ19oYXNoJ1xyXG5cclxuY29uc3QgaGFzaEhpc3RvcnkgPSAob3B0aW9ucyk9PntcclxuXHJcbiAgbGV0IHByZXZMb2NhdGlvbiA9ICcnLFxyXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcclxuXHJcbiAgY29uc3QgZ2V0Q3VycmVudEhhc2hQYXRoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgcmVneCA9bmV3IFJlZ0V4cChgXiR7cXVlcnlfa2V5fT0oLiopYCk7XHJcbiAgICBsZXQgaW5kZXggPSBocmVmLmluZGV4T2YoJyMnKSxcclxuICAgICAgICBxdWVyeUluZGV4LFxyXG4gICAgICAgIHN0ciA9ICcnLFxyXG4gICAgICAgIG1hdGNoZXM7XHJcblxyXG4gICAgaWYoaW5kZXggIT0gLTEpe1xyXG4gICAgICBzdHIgPSBocmVmLnN1YnN0cmluZyhpbmRleCArIDEpIHx8ICcnO1xyXG4gICAgICBpZihxdWVyeUluZGV4ID0gc3RyLmluZGV4T2YoJz8nKSA+IDApe1xyXG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCxxdWVyeUluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICBtYXRjaGVzID0gcmVneC5leGVjKHN0cik7XHJcbiAgICAgIGlmKG1hdGNoZXMpe1xyXG4gICAgICAgIHN0ciA9IG1hdGNoZXNbMV07XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBzdHIgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0b3BMaXN0ZW5lciA9ICgpPT57XHJcbiAgICB1bkJpbmRFdmVudCh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlzdGVuZXIgPSAoY2FsbGJhY2spPT57XHJcbiAgICBsaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+XHJcbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBjYWxsYmFjaylcclxuICB9O1xyXG5cclxuICBjb25zdCBwdXNoSGFzaFBhdGggPSAocGF0aCkgPT5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aFxyXG5cclxuICBjb25zdCByZXBsYWNlSGFzaFBhdGggPSAocGF0aCkgPT5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGF0aFxyXG4gICAgKVxyXG5cclxuICBjb25zdCBhdXRvVXBkYXRlSGFzaCA9ICgpPT57XHJcbiAgICBsZXQgaGFzaFBhdGggPSBnZXRDdXJyZW50SGFzaFBhdGgoKSoxO1xyXG4gICAgaWYoIWhhc2hQYXRoKVxyXG4gICAgICBoYXNoUGF0aCA9IDE7XHJcbiAgICBlbHNlXHJcbiAgICAgIGhhc2hQYXRoICsrO1xyXG4gICAgcHVzaEhhc2hQYXRoKHF1ZXJ5X2tleSArICc9JyArIGhhc2hQYXRoKTtcclxuICAgIHJldHVybiBoYXNoUGF0aDtcclxuICB9O1xyXG5cclxuICBjb25zdCBnbyA9IChuKSA9PiB7XHJcbiAgICBpZiAobilcclxuICAgICAgd2luZG93Lmhpc3RvcnkuZ28obik7XHJcbiAgfVxyXG4gIGNvbnN0IGJhY2sgPSAoKT0+e1xyXG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSGFzaENoYW5nZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGdldEN1cnJlbnRIYXNoUGF0aCgpO1xyXG5cclxuICAgIGlmIChwcmV2TG9jYXRpb24gPT09IGN1cnJlbnRMb2NhdGlvbilcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyPT57XHJcbiAgICAgIGxpc3RlbmVyKGN1cnJlbnRMb2NhdGlvbixwcmV2TG9jYXRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJldkxvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xyXG4gIH1cclxuXHJcbiAgYmluZEV2ZW50KHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEN1cnJlbnRIYXNoUGF0aCxcclxuICAgIGxpc3RlbmVyLFxyXG4gICAgc3RvcExpc3RlbmVyLFxyXG4gICAgcHVzaEhhc2hQYXRoLFxyXG4gICAgcmVwbGFjZUhhc2hQYXRoLFxyXG4gICAgYXV0b1VwZGF0ZUhhc2gsXHJcbiAgICBnbyxcclxuICAgIGJhY2tcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaGFzaEhpc3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaGFzaEhpc3RvcnkuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBjcmVhdGVIdG1sRG9tOiAoZnVuY3Rpb24gY3JlYXRlSHRtbCgpe1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbihodG1sKXtcclxuICAgICAgdmFyIHRlbXA7XHJcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0ZW1wID0gZGl2LmNoaWxkcmVuWzBdO1xyXG4gICAgICBkaXYucmVtb3ZlQ2hpbGQodGVtcCk7XHJcbiAgICAgIHJldHVybiB0ZW1wO1xyXG4gICAgfVxyXG4gIH0pKCksXHJcbiAgcmVwbGFjZVRlbWxhdGU6IGZ1bmN0aW9uKHN0cixkYXRhKXtcclxuICAgIHZhciByZWd4ID0gbmV3IFJlZ0V4cCgveyguKj8pfS9nKSxcclxuICAgICAgICB0ZW1wO1xyXG4gICAgd2hpbGUodGVtcCA9IHJlZ3guZXhlYyhzdHIpKXtcclxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UodGVtcFswXSxkYXRhW3RlbXBbMV1dIHx8ICcnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHI7XHJcbiAgfSxcclxuICBiaW5kRXZlbnQ6IGZ1bmN0aW9uKGRvbSxuYW1lLGZuKXtcclxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyXHJcbiAgICAgID8gZG9tLmFkZEV2ZW50TGlzdGVuZXIobmFtZSxmbixmYWxzZSlcclxuICAgICAgOiBkb20uYXR0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZuKTtcclxuICB9LFxyXG4gIHVuQmluZEV2ZW50OiBmdW5jdGlvbihkb20sbmFtZSxmbil7XHJcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lclxyXG4gICAgICA/IGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsZm4sZmFsc2UpXHJcbiAgICAgIDogZG9tLmRldGFjaEV2ZW50KCdvbicgKyBuYW1lLCBmbik7XHJcbiAgfSxcclxuICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBrZXkgKyBcIj0oW14mXSopKCZ8JClcIiwgXCJpXCIpO1xyXG4gICAgICB2YXIgciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpLm1hdGNoKHJlZyk7XHJcbiAgICAgIGlmIChyICE9IG51bGwpIHJldHVybiBkZWNvZGVVUkkoclsyXSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH0sXHJcbiAgYXNzaWduOiBmdW5jdGlvbigpe1xyXG4gICAgdmFyIHRlbXAgPSBhcmd1bWVudHNbMF07XHJcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgIGZvcih2YXIgaT0wLGxlbj1hcmdzLmxlbmd0aDtpPGxlbjtpKyspe1xyXG4gICAgICB2YXIgaXRlbSA9IGFyZ3NbaV07XHJcbiAgICAgIGlmKCFpdGVtKVxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICBmb3IodmFyIHAgaW4gaXRlbSl7XHJcbiAgICAgICAgaWYoaXRlbS5oYXNPd25Qcm9wZXJ0eShwKSl7XHJcbiAgICAgICAgICB0ZW1wW3BdID0gaXRlbVtwXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wO1xyXG4gIH0sXHJcbiAgY2xvc2VzdDogZnVuY3Rpb24oZG9tLGNscyl7XHJcbiAgICB2YXIgY2xzUmVneCA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKyknKyBjbHMgKyAnKFxcXFxzK3wkKScpLFxyXG4gICAgICAgIHRhZ1JlZ3ggPSBuZXcgUmVnRXhwKCdeJysgY2xzICsgJyQnKSxcclxuICAgICAgICBwYXJlbnQgPSBkb207XHJcblxyXG4gICAgaWYodGVzdChkb20pKVxyXG4gICAgICByZXR1cm4gZG9tO1xyXG5cclxuICAgIHdoaWxlKCEhKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSAmJiAgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT0gJ2h0bWwnKXtcclxuICAgICAgaWYodGVzdChwYXJlbnQpKXtcclxuICAgICAgICByZXR1cm4gcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0KGRvbSl7XHJcblxyXG4gICAgICBpZighIWRvbS5jbGFzc05hbWUubWF0Y2goY2xzUmVneCkpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9ZWxzZSBpZih0YWdSZWd4LnRlc3QoZG9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RvbS5qc1xuICoqLyIsInJlcXVpcmUoJy4vY3NzL2RpYWxvZy5sZXNzJyk7XHJcbnZhciBkb21VdGlsID0gcmVxdWlyZSgnLi9kb20uanMnKTtcclxudmFyIE1vZGFsRGlhbG9nID0gcmVxdWlyZSgnLi9tb2RhbC5qcycpO1xyXG52YXIgaGFzaEhpc3RvcnkgPSByZXF1aXJlKCcuL2hhc2hIaXN0b3J5LmpzJyk7XHJcbnZhciBXcmFwTWJJcHQgPSByZXF1aXJlKCcuL3dyYXBJbnB1dC5qcycpO1xyXG52YXIgcHJpemVUbXBsID0gcmVxdWlyZSgnLi92aWV3L3ByaXplVG1wbC5odG1sJyk7XHJcbnZhciBlbGVQcml6ZVRtcGwgPSByZXF1aXJlKCcuL3ZpZXcvZWxlY3ByaXplVG1wbC5odG1sJyk7XHJcbnZhciBhY3R1YWxQcml6ZVRtcGwgPSByZXF1aXJlKCcuL3ZpZXcvYWN0dWFsUHJpemVUbXBsLmh0bWwnKTtcclxuXHJcbnByaXplVG1wbCA9IHByaXplVG1wbC5yZXBsYWNlKC9cXHJcXG4vZywnJyk7XHJcbmVsZVByaXplVG1wbCA9IGVsZVByaXplVG1wbC5yZXBsYWNlKC9cXHJcXG4vZywnJyk7XHJcbmFjdHVhbFByaXplVG1wbCA9IGFjdHVhbFByaXplVG1wbC5yZXBsYWNlKC9cXHJcXG4vZywnJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhcmFtcyhwYXJhbSl7XHJcbiAgICB2YXIgcmVzID0ge307XHJcblxyXG4gICAgZm9yKHZhciBwIGluIHBhcmFtKXtcclxuICAgICAgaWYocGFyYW0uaGFzT3duUHJvcGVydHkocCkpe1xyXG4gICAgICAgIGlmKHR5cGVvZiBwYXJhbVtwXSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICByZXNbcF0gPSBwYXJhbVtwXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iail7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgT2JqZWN0XSc7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5vb3AoKXt9XHJcblxyXG4gIE1vZGFsRGlhbG9nLmFsZXJ0ID0gZnVuY3Rpb24oY29udGVudCx0aXRsZSxjYWxsYmFjayxkb20sY2xzKXtcclxuICAgIHZhciBjbHogPSBjb250ZW50LmNsYXp6ID8gY29udGVudC5jbGF6eiA6IChjbHMgPyBjbHMgOiAnJyk7XHJcblxyXG4gICAgY2x6ICs9ICcgYWxlcnQtZGlhbG9nJztcclxuXHJcbiAgICBpZih0eXBlb2YgY29udGVudCAhPT0gJ29iamVjdCcpe1xyXG4gICAgICBjb250ZW50ID0gY3JlYXRlUGFyYW1zKHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOmNhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogZG9tXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnQub2tDYWxsYmFjayA9IGNvbnRlbnQub2tDYWxsYmFjayB8fCBub29wO1xyXG5cclxuICAgIGlmKCFjb250ZW50LnRpdGxlKVxyXG4gICAgICBjbHogKz0gJyBkbGctbm8tdGl0bGUnO1xyXG4gICAgZWxzZVxyXG4gICAgICBjbHogKz0gJyBkbGctaGFzLXRpdGxlJztcclxuXHJcbiAgICBjb250ZW50LmNsYXp6ID0gY2x6O1xyXG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nKGNvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgTW9kYWxEaWFsb2cuY29uZmlybSA9IGZ1bmN0aW9uKGNvbnRlbnQsc3VyZUZuLHRpdGxlLGJ0VGV4dDEsYnRUZXh0MixjYW5jZWxGbixjbHMpe1xyXG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcclxuXHJcbiAgICBjbHogKz0gJyBjb25maXJtLWRpYWxvZyc7XHJcblxyXG4gICAgaWYodHlwZW9mIGNvbnRlbnQgIT09ICdvYmplY3QnKXtcclxuICAgICAgY29udGVudCA9IGNyZWF0ZVBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgb2tDYWxsYmFjazpzdXJlRm4sXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGxiYWNrOmNhbmNlbEZuLFxyXG4gICAgICAgICAgICAgICAgICBzdXJlU3RyOiBidFRleHQyLFxyXG4gICAgICAgICAgICAgICAgICBjYW5jZWxTdHI6YnRUZXh0MVxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZighY29udGVudC50aXRsZSlcclxuICAgICAgY2x6ICs9ICcgZGxnLW5vLXRpdGxlJztcclxuICAgIGVsc2VcclxuICAgICAgY2x6ICs9ICcgZGxnLWhhcy10aXRsZSc7XHJcblxyXG4gICAgY29udGVudC5va0NhbGxiYWNrID0gY29udGVudC5va0NhbGxiYWNrIHx8IG5vb3A7XHJcbiAgICBjb250ZW50LmNhbmNlbENhbGxiYWNrID0gY29udGVudC5jYW5jZWxDYWxsYmFjayB8fCBub29wO1xyXG4gICAgY29udGVudC5jbGF6eiA9IGNsejtcclxuICAgIHJldHVybiBNb2RhbERpYWxvZyhjb250ZW50KTtcclxuICB9O1xyXG5cclxuICBNb2RhbERpYWxvZy5jb25maXJtTW9iaWxlID0gZnVuY3Rpb24ocGhvbmUsb2tGbixjYW5jZWxGbixpc0NvbmZpcm0sdGl0bGUsYnRUZXh0MSxidFRleHQyKXtcclxuICAgIHZhciB0ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwiY2hhcmdlLWNvbnRlbnRcIj48ZGl2IGNsYXNzPVwiY2hhcmdlLWZvcm1cIj48aW5wdXQgdHlwZT1cInRlbFwiIGNsYXNzPVwidmFsaWQtaW5wdXQgY2hhcmdlLXBob25lXCIvPjxsYWJlbD7miYvmnLrlj7fnoIE6PC9sYWJlbD4nICtcclxuICAgICAgICAgICAgICAgICc8c3Ryb25nIGNsYXNzPVwiZm9ybS10aXBcIj7or7floavlhpnmraPnoa7nmoTmiYvmnLrlj7fnoIEnICtcclxuICAgICAgICAgICAgICAgICc8L3N0cm9uZz48L2Rpdj48L2Rpdj4nLFxyXG4gICAgICAgIHNldHRpbmdzLCBkbGcsXHJcbiAgICAgICAgaW5wdXREb20sdGVtcCxcclxuICAgICAgICB3cmFwSW5wdXQ7XHJcblxyXG4gICAgaWYoIWlzUGxhaW5PYmplY3QocGhvbmUpKXtcclxuICAgICAgc2V0dGluZ3MgPSBjcmVhdGVQYXJhbXMoe1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSB8fCAnJyxcclxuICAgICAgICBva0NhbGxiYWNrOnByb3h5T2tGbixcclxuICAgICAgICBjYW5jZWxDYWxsYmFjazpwcm94eUNhbmNlbEZuLFxyXG4gICAgICAgIHN1cmVTdHI6IGJ0VGV4dDIsXHJcbiAgICAgICAgY2FuY2VsU3RyOmJ0VGV4dDEsXHJcbiAgICAgICAgcGhvbmU6IHBob25lXHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHNldHRpbmdzID0gcGhvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXREb20gPSBzZXR0aW5ncy5zZWxlY3RvciA9IGRvbVV0aWwuY3JlYXRlSHRtbERvbSh0ZW1wbGF0ZSk7XHJcbiAgICB0ZW1wID0gaW5wdXREb20ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHJcbiAgICBzZXR0aW5ncy5jbGF6eiA9ICdjaGFyZ2UtZGlhbG9nJztcclxuXHJcbiAgICBpZihpc0NvbmZpcm0pe1xyXG4gICAgICBpbnB1dERvbS5jbGFzc0xpc3QuYWRkKCdoYXNjb25maXJtJyk7XHJcbiAgICAgIGlucHV0RG9tLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXRpcCcpLnRleHRDb250ZW50ID0gJ+W3sumihuWllic7XHJcbiAgICAgIHRlbXAuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcbiAgICAgIHRlbXAudmFsdWUgPSBzZXR0aW5ncy5waG9uZTtcclxuXHJcbiAgICAgIHNldHRpbmdzLmNhbmNlbENhbGxiYWNrID0gbnVsbDtcclxuICAgICAgZGxnID0gTW9kYWxEaWFsb2cuYWxlcnQoc2V0dGluZ3MpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHdyYXBJbnB1dCA9IFdyYXBNYklwdCh7dGFyZ2V0OiB0ZW1wfSk7XHJcbiAgICAgIGRsZyA9IE1vZGFsRGlhbG9nLmNvbmZpcm0oc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkbGc7XHJcblxyXG4gICAgZnVuY3Rpb24gcHJveHlPa0ZuKGUpe1xyXG4gICAgICB2YXIgaWZvcm0gPSBpbnB1dERvbS5xdWVyeVNlbGVjdG9yKCcuY2hhcmdlLWZvcm0nKTtcclxuXHJcbiAgICAgIGlmKHdyYXBJbnB1dCl7XHJcbiAgICAgICAgd3JhcElucHV0LmhhbmRsZUtleVVwKCk7XHJcbiAgICAgICAgd3JhcElucHV0LmhhbmRsZUNoYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCFpZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2RsZy1zdWNjZXNzJykgJiYgIWlzQ29uZmlybSl7XHJcbiAgICAgICAgaWZvcm0uY2xhc3NMaXN0LmFkZCgnZGxnLWVycm9yJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgd3JhcElucHV0ICYmIHdyYXBJbnB1dC5kZXN0cm95KCk7XHJcbiAgICAgIGlmKG9rRm4gJiYgIW9rRm4uY2FsbChkbGcsaWZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSxlKSlcclxuICAgICAgICBpbnB1dERvbSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJveHlDYW5jZWxGbihlKXtcclxuICAgICAgd3JhcElucHV0ICYmIHdyYXBJbnB1dC5kZXN0cm95KCk7XHJcbiAgICAgIGNhbmNlbEZuICYmIGNhbmNlbEZuLmNhbGwoZGxnLGUpO1xyXG4gICAgICBpbnB1dERvbSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcbiAgTW9kYWxEaWFsb2cuYWxlcnRBd2FyZExpc3QgPSBmdW5jdGlvbihkYXRhbGlzdCxva0ZuLGNhbmNlbEZuLG9wdGlvbnMpe1xyXG4gICAgdmFyIGF3YXJkTGlzdEh0bWwgPVsnPGRpdiBjbGFzcz1cImRsZy1hd2FyZC1saXN0XCI+PHVsPiddLFxyXG4gICAgICAgIHNldHRpbmdzLCByZXN1bHQ7XHJcblxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBzZXR0aW5ncyA9IGRvbVV0aWwuYXNzaWduKGNyZWF0ZVBhcmFtcyh7XHJcbiAgICAgIGRhdGFMaXN0OmRhdGFsaXN0LFxyXG4gICAgICB0aXRsZTogJ+aIkeeahOWlluWTgScsXHJcbiAgICAgIGF3YXJkSGFuZGxlOiBmdW5jdGlvbigpe31cclxuICAgIH0pLG9wdGlvbnMpO1xyXG5cclxuICAgIHNldHRpbmdzLmNsYXp6ID0gJ215YXdhcmQtZGlhbG9nJztcclxuXHJcbiAgICByZXN1bHQgPSBzZXR0aW5ncy5kYXRhTGlzdCB8fCBbXTtcclxuXHJcbiAgICBmb3IodmFyIGk9MCwgbGVuID0gcmVzdWx0Lmxlbmd0aDtpIDwgbGVuOyBpKyspe1xyXG4gICAgICB2YXIgaXRlbSA9IHJlc3VsdFtpXSxcclxuICAgICAgICAgIHR5cGVWbDtcclxuXHJcbiAgICAgIGF3YXJkTGlzdEh0bWwucHVzaCgnPGxpIGRhdGEtaWR4PVwiJyArIGkgKyAnXCI+PGltZyBzcmM9XCInICsgaXRlbS5pbWdVcmwgKyAnXCIgLz48ZGl2IGNsYXNzPVwiaXRlbS10aXRsZVwiPicgKyBpdGVtLm5hbWUgKyAnPC9kaXY+PGVtIGRhdGEtaWQ9XCJoYW5kbGVQcml6ZXNcIiBjbGFzcz1cIml0ZW0tb3BlcicpO1xyXG4gICAgICAgIHN3aXRjaChpdGVtLnR5cGUpe1xyXG4gICAgICAgICAgY2FzZSAnZWxlY3Ryb25pYyc6XHJcbiAgICAgICAgICAgIHR5cGVWbCA9ICfmn6XnnIvliLjnoIEnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2FjdHVhbCc6XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaGFzY29uZmlybSl7XHJcbiAgICAgICAgICAgICAgdHlwZVZsID0gJ+S/ruaUueWcsOWdgCc7XHJcbiAgICAgICAgICAgICAgYXdhcmRMaXN0SHRtbC5wdXNoKCcgaGFzY29uZmlybScpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICB0eXBlVmwgPSAn5aGr5YaZ5Zyw5Z2AJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NhbGxfY2hhcmdlJzpcclxuICAgICAgICAgIGNhc2UgJ2xpdW1pX2RhdGFfcmVjaGFyZ2UnOlxyXG4gICAgICAgICAgY2FzZSAnbXpfbW9uZXlfcmVjaGFyZ2UnOlxyXG4gICAgICAgICAgY2FzZSAnbXpfZGF0YV9yZWNoYXJnZSc6XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaGFzY29uZmlybSl7XHJcbiAgICAgICAgICAgICAgdHlwZVZsID0gJ+afpeeci+WPt+eggSc7XHJcbiAgICAgICAgICAgICAgYXdhcmRMaXN0SHRtbC5wdXNoKCcgaGFzY29uZmlybScpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICB0eXBlVmwgPSAn5aGr5YaZ5Y+356CBJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaGFzY29uZmlybSl7XHJcbiAgICAgICAgICAgICAgdHlwZVZsID0gaXRlbS5zaG93Y29uZmlybUJ0biB8fCAn5p+l55yL5L+h5oGvJztcclxuICAgICAgICAgICAgICBhd2FyZExpc3RIdG1sLnB1c2goJyBoYXNjb25maXJtJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHR5cGVWbCA9IGl0ZW0uY29uZmlybUJ0biB8fCAn5aGr5YaZ5L+h5oGvJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGF3YXJkTGlzdEh0bWwucHVzaCgnXCIgPicgKyB0eXBlVmwpO1xyXG4gICAgICBhd2FyZExpc3RIdG1sLnB1c2goJzwvZW0+PC9saT4nKTtcclxuICAgIH1cclxuICAgIGF3YXJkTGlzdEh0bWwucHVzaCgnPC91bD48L2Rpdj4nKTtcclxuXHJcbiAgICBzZXR0aW5ncy5jb250ZW50ID0gYXdhcmRMaXN0SHRtbC5qb2luKCcnKTtcclxuXHJcbiAgICBzZXR0aW5ncy5oYW5kbGVQcml6ZXMgPSBmdW5jdGlvbihldnQpe1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldCxcclxuICAgICAgICAgIGxpSXRlbSA9IGRvbVV0aWwuY2xvc2VzdCh0YXJnZXQsJ2xpJyksXHJcbiAgICAgICAgICBpZHggPSBsaUl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkeCcpLFxyXG4gICAgICAgICAgaGFzY29uZmlybSA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhc2NvbmZpcm0nKSxcclxuICAgICAgICAgIGF3YXJkSXRlbSA9IHJlc3VsdFtpZHhdO1xyXG5cclxuICAgICAgdmFyIHByb3h5T2tGbiA9IG9rRm4gJiYgb2tGbi5iaW5kKHRoaXMsaWR4LGF3YXJkSXRlbSksXHJcbiAgICAgICAgICBwcm94eUNhbmNlbEZuID0gY2FuY2VsRm4gJiYgY2FuY2VsRm4uYmluZCh0aGlzLGlkeCxhd2FyZEl0ZW0pO1xyXG5cclxuICAgICAgc3dpdGNoKGF3YXJkSXRlbS50eXBlKXtcclxuICAgICAgICAgIGNhc2UgJ2VsZWN0cm9uaWMnOlxyXG4gICAgICAgICAgICBNb2RhbERpYWxvZy5hbGVydEVsZWN0cm9uaWNEbGcoYXdhcmRJdGVtLCAnJyxwcm94eU9rRm4scHJveHlDYW5jZWxGbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnYWN0dWFsJzpcclxuICAgICAgICAgICAgTW9kYWxEaWFsb2cuYWxlcnRQZXJzb25JbmZvRGxnKHByb3h5T2tGbixwcm94eUNhbmNlbEZuLGF3YXJkSXRlbS52YWx1ZXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NhbGxfY2hhcmdlJzpcclxuICAgICAgICAgIGNhc2UgJ2xpdW1pX2RhdGFfcmVjaGFyZ2UnOlxyXG4gICAgICAgICAgY2FzZSAnbXpfbW9uZXlfcmVjaGFyZ2UnOlxyXG4gICAgICAgICAgY2FzZSAnbXpfZGF0YV9yZWNoYXJnZSc6XHJcbiAgICAgICAgICAgIE1vZGFsRGlhbG9nLmNvbmZpcm1Nb2JpbGUoYXdhcmRJdGVtLnBob25lLHByb3h5T2tGbixwcm94eUNhbmNlbEZuLGhhc2NvbmZpcm0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHNldHRpbmdzLmF3YXJkSGFuZGxlKGlkeCxhd2FyZEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBNb2RhbERpYWxvZy5hbGVydChzZXR0aW5ncyk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGlzQWxlcnRSdWxlO1xyXG5cclxuICBNb2RhbERpYWxvZy5hbGVydFJ1bGUgPSBmdW5jdGlvbihjb250ZXh0KXtcclxuICAgIGlmKGlzQWxlcnRSdWxlKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgaXNBbGVydFJ1bGUgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiBNb2RhbERpYWxvZy5hbGVydCh7XHJcbiAgICAgICAgICBjbGF6ejogJ3J1bGUtZGxnJyxcclxuICAgICAgICAgIHRpdGxlOiAn5rS75Yqo6K+05piOJyxcclxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRleHQsXHJcbiAgICAgICAgICBva0NhbGxiYWNrOiBpc0FsZXJ0LFxyXG4gICAgICAgICAgY2FuY2VsQWxlcnQ6IGlzQWxlcnQsXHJcbiAgICAgICAgICB1c2VCYWNrZ3JvdW5kOiAnY2FuY2VsQWxlcnQnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxlcnQoKXtcclxuICAgICAgaXNBbGVydFJ1bGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBNb2RhbERpYWxvZy5hbGVydFdpbm5lckxpc3QgPSBmdW5jdGlvbihkYXRhKXtcclxuICAgIHZhciB3aW5uZXJMaXN0VG1wbCA9IFsnPGRpdiBjbGFzcz1cImluci13aW5saXN0XCI+PHVsPiddO1xyXG5cclxuICAgIGlmKCFkYXRhKXtcclxuICAgICAgTW9kYWxEaWFsb2cuYWxlcnQoJ+Wkp+Wllui/mOayoeiiq+aKvei1sO+8jOi1tue0p+WPguS4jua0u+WKqCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKHZhciBpPTAsbGVuPWRhdGEubGVuZ3RoOyBpPCBsZW47IGkrKyl7XHJcbiAgICAgIHZhciBpdGVtID0gZGF0YVtpXVxyXG4gICAgICB3aW5uZXJMaXN0VG1wbC5wdXNoKCc8bGk+PGVtPicgKyBpdGVtLm5pY2tOYW1lICsgJzwvZW0+Jyk7XHJcbiAgICAgIHdpbm5lckxpc3RUbXBsLnB1c2goJzxkaXYgY2xhc3M9XCJwcnotdGxlXCI+JyArIGl0ZW0udGl0bGUgKyAnPC9kaXY+PC9saT4nKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5uZXJMaXN0VG1wbC5wdXNoKCc8L3VsPjwvZGl2PicpO1xyXG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nLmFsZXJ0KHdpbm5lckxpc3RUbXBsLmpvaW4oJycpLCfkuK3lpZblkI3ljZUnLG51bGwsbnVsbCwnd2lubmVyLWxpc3QtZGxnJyk7XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuYWxlcnRWaXJ0dWFsRGxnID0gZnVuY3Rpb24oZGF0YSxva0ZuLGNhbmNlbEZuKXtcclxuICAgIHZhciB0ZW1wbGF0ZSA9IGRvbVV0aWwuY3JlYXRlSHRtbERvbShkb21VdGlsLnJlcGxhY2VUZW1sYXRlKHByaXplVG1wbCxkYXRhKSksXHJcbiAgICAgICAgZGxnLFxyXG4gICAgICAgIHdyYXBJbnB1dDtcclxuXHJcbiAgICB3cmFwSW5wdXQgPSBXcmFwTWJJcHQoe3RhcmdldDogdGVtcGxhdGUucXVlcnlTZWxlY3RvcignaW5wdXQnKX0pO1xyXG4gICAgZGxnID0gTW9kYWxEaWFsb2cuY29uZmlybSh7XHJcbiAgICAgIHNlbGVjdG9yOiB0ZW1wbGF0ZSxcclxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUgIT0gbnVsbCA/IGRhdGEudGl0bGUgOiAn5Lit5aWW5ZWm77yBJyxcclxuICAgICAgY2xheno6ICd2aXJ0dWFsLWRsZyBwcml6ZS1kbGcnLFxyXG4gICAgICBva0NhbGxiYWNrOnByb3h5T2tGbixcclxuICAgICAgY2FuY2VsQ2FsbGJhY2s6cHJveHlDYW5jZWxGbixcclxuICAgICAgc3VyZVN0cjogJ+mihuWPlicsXHJcbiAgICAgIGNhbmNlbFN0cjogJ+aaguS4jemihuWllidcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByb3h5T2tGbihlKXtcclxuICAgICAgdmFyIGlmb3JtID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcignLmNoYXJnZS1mb3JtJyk7XHJcblxyXG4gICAgICBpZih3cmFwSW5wdXQpe1xyXG4gICAgICAgIHdyYXBJbnB1dC5oYW5kbGVLZXlVcCgpO1xyXG4gICAgICAgIHdyYXBJbnB1dC5oYW5kbGVDaGFuZ2UoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWlmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZGxnLXN1Y2Nlc3MnKSl7XHJcbiAgICAgICAgaWZvcm0uY2xhc3NMaXN0LmFkZCgnZGxnLWVycm9yJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdyYXBJbnB1dCAmJiB3cmFwSW5wdXQuZGVzdHJveSgpO1xyXG4gICAgICBpZihva0ZuICYmICFva0ZuLmNhbGwoZGxnLGRsZy5kaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmNoYXJnZS1waG9uZScpLnZhbHVlLGUpKVxyXG4gICAgICAgIHRlbXBsYXRlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm94eUNhbmNlbEZuKGUpe1xyXG4gICAgICB3cmFwSW5wdXQgJiYgd3JhcElucHV0LmRlc3Ryb3koKTtcclxuICAgICAgY2FuY2VsRm4gJiYgY2FuY2VsRm4uY2FsbChkbGcsZSk7XHJcbiAgICAgIHRlbXBsYXRlID0gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG4gIE1vZGFsRGlhbG9nLmFsZXJ0RWxlY3Ryb25pY0RsZyA9IGZ1bmN0aW9uKGNvbnRleHQsb2tGbixjYW5jZWxGbixidFRleHQxKXtcclxuXHJcbiAgICB2YXIgdm91Y2hlcnMgPSBjb250ZXh0LnZvdWNoZXIuc3BsaXQoJzonKSxcclxuICAgICAgICBjbHogPSAnZWxlY3Ryb25pYy1kbGcgcHJpemUtZGxnJyxcclxuICAgICAgICB0ZW1wbGF0ZTtcclxuXHJcbiAgICB2YXIgY29weVRvb2wgPSBNb2RhbERpYWxvZy5vcHRpb25zLmNvcHlUb29sLFxyXG4gICAgICAgIGNsaXBib2FyZDtcclxuXHJcbiAgICBjb250ZXh0LnZvdWNoZXIxID0gdm91Y2hlcnNbMF07XHJcbiAgICBjb250ZXh0LnZvdWNoZXIyID0gdm91Y2hlcnNbMV07XHJcblxyXG4gICAgaWYoIWNvbnRleHQudm91Y2hlcjIpXHJcbiAgICAgIGNseiArPSAnIHNpbmdsZS10aWNrZXQnO1xyXG5cclxuICAgIHRlbXBsYXRlID0gZG9tVXRpbC5yZXBsYWNlVGVtbGF0ZShlbGVQcml6ZVRtcGwsY29udGV4dCk7XHJcblxyXG4gICAgaWYoY29weVRvb2wuc3VwcG9ydENvcHkgJiYgIXZvdWNoZXJzWzFdKXtcclxuICAgICAgYnRUZXh0MSA9ICflpI3liLblubblhZHmjaInO1xyXG4gICAgICBjbGlwYm9hcmQgPSBjb3B5VG9vbC5jb3B5QW5kR28oJy5tb2RhbC1kaWFsb2cgLnN1cmUtYnRuJywgdm91Y2hlcnNbMF0pO1xyXG4gICAgfVxyXG4gICAgTW9kYWxEaWFsb2cuY29uZmlybSh7XHJcbiAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlLFxyXG4gICAgICB0aXRsZTogY29udGV4dC50aXRsZSAhPSBudWxsID8gY29udGV4dC50aXRsZSA6ICfkuK3lpZbllabvvIEnLFxyXG4gICAgICBjbGF6ejogY2x6LFxyXG4gICAgICBva0NhbGxiYWNrOm9rRm4sXHJcbiAgICAgIGNhbmNlbENhbGxiYWNrOigpPT57XHJcbiAgICAgICAgY2xpcGJvYXJkICYmIGNsaXBib2FyZC5kZXN0cm95KCk7XHJcbiAgICAgICAgcmV0dXJuIGNhbmNlbEZuICYmIGNhbmNlbEZuKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHN1cmVTdHI6IGJ0VGV4dDEgfHwgJ+eri+WNs+S9v+eUqCcsXHJcbiAgICAgIGNhbmNlbFN0cjogJ+ehruWumidcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgTW9kYWxEaWFsb2cuYWxlcnRBY3R1YWxEbGcgPSBmdW5jdGlvbihkYXRhLG9rRm4sY2FuY2VsRm4pe1xyXG4gICAgdmFyIHRlbXBsYXRlID0gZG9tVXRpbC5yZXBsYWNlVGVtbGF0ZShhY3R1YWxQcml6ZVRtcGwsZGF0YSk7XHJcblxyXG4gICAgTW9kYWxEaWFsb2cuY29uZmlybSh7XHJcbiAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlLFxyXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSAhPSBudWxsID8gZGF0YS50aXRsZSA6ICfkuK3lpZbllabvvIEnLFxyXG4gICAgICBjbGF6ejogJ2FjdHVhbC1kbGcgcHJpemUtZGxnJyxcclxuICAgICAgb2tDYWxsYmFjazp0b0ZpbGxGb3JtLFxyXG4gICAgICBjYW5jZWxDYWxsYmFjazpjYW5jZWxGbixcclxuICAgICAgc3VyZVN0cjogJ+Whq+WGmeWcsOWdgCcsXHJcbiAgICAgIGNhbmNlbFN0cjogJ+aaguS4jemihuWllidcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvRmlsbEZvcm0oKXtcclxuICAgICAgTW9kYWxEaWFsb2cuYWxlcnRQZXJzb25JbmZvRGxnKG9rRm4sY2FuY2VsRm4pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuYWxlcnRQZXJzb25JbmZvRGxnID0gZnVuY3Rpb24ob2tGbixjYW5jZWxGbix2YWx1ZXMsZm9ybUZpZWxkLGJ0VGV4dDEsYnRUZXh0Mil7XHJcbiAgICB2YXIgaW5mb0Zvcm1IdG1sID0gW1wiPGZvcm0+XCJdLFxyXG4gICAgICAgIGlucHV0cyx2YWx1ZXMsc2V0dGluZ3MsaW5mb0Zvcm1Eb20sXHJcbiAgICAgICAgZGxnLFxyXG4gICAgICAgIHZhbGlkSW5wdXRzID0gW107XHJcblxyXG4gICAgdmFyIG1heFdQZXJMO1xyXG5cclxuICAgIGlmKCFpc1BsYWluT2JqZWN0KG9rRm4pKXtcclxuICAgICAgc2V0dGluZ3MgPSBjcmVhdGVQYXJhbXMoe1xyXG4gICAgICAgIGZvcm1GaWVsZDpmb3JtRmllbGQsXHJcbiAgICAgICAgc3VyZVN0cjogYnRUZXh0MixcclxuICAgICAgICBjYW5jZWxTdHI6YnRUZXh0MSxcclxuICAgICAgICB2YWx1ZXM6dmFsdWVzIHx8IFtdXHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHNldHRpbmdzID0gb2tGbjtcclxuICAgICAgb2tGbiA9IHNldHRpbmdzLm9rQ2FsbGJhY2s7XHJcbiAgICAgIGNhbmNlbEZuID0gc2V0dGluZ3MuY2FuY2VsQ2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybUZpZWxkID0gc2V0dGluZ3MuZm9ybUZpZWxkID0gc2V0dGluZ3MuZm9ybUZpZWxkIHx8IFtcclxuICAgICAgICAgICAge25hbWU6J3JlY05hbWUnLHZhbHVlOifogZQg57O7IOS6uicsb3B0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBrZXlEb3duVmFsaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZXlVcFZhbGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlVmFsaWQ6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtuYW1lOidtb2JpbGVwaG9uZScsdmFsdWU6J+aJi+acuuWPt+eggScsZXJyTXNnOiAn6K+35aGr5YaZ5q2j56Gu55qE5omL5py65Y+356CBJyxiZXZhbGlkOiB0cnVlLG9wdGlvbjp7aW5pdFZhbGlkOidoYW5kbGVLZXlVcCd9fSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6J3JlY0FkZHJlc3MnLHZhbHVlOifmlLbotKflnLDlnYAnLGVyck1zZzogJ+ivt+Whq+WGmeato+ehrueahOWcsOWdgCcsbXVsdGlMaW5lOnRydWUscmVxdWlyZWQ6dHJ1ZSxpbml0VmFsaWQ6J2hhbmRsZUNoYW5nZScsbWluTGVuOjgsXHJcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBrZXlEb3duVmFsaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBrZXlVcFZhbGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlVmFsaWQ6IGZ1bmN0aW9uKGV2dCx2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPj0gODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF07XHJcbiAgICBzZXR0aW5ncy5jbGF6eiA9ICdwZXJzb25pbmZvLWRpYWxvZyBjaGFyZ2UtZGlhbG9nJztcclxuICAgIHNldHRpbmdzLmhlYWRlciA9ICcnO1xyXG5cclxuICAgIGZvcih2YXIgaT0wLCBsZW4gPSBmb3JtRmllbGQubGVuZ3RoO2kgPCBsZW47IGkrKyl7XHJcbiAgICAgIHZhciBpdGVtID0gZm9ybUZpZWxkW2ldLFxyXG4gICAgICAgICAgYmVWYWxpZCA9ICcnO1xyXG5cclxuICAgICAgaWYoaXRlbS5iZXZhbGlkKXtcclxuICAgICAgICBiZVZhbGlkID0gJyBiZXZhbGlkJztcclxuICAgICAgfVxyXG4gICAgICBpZihpdGVtLnJlcXVpcmVkKXtcclxuICAgICAgICBiZVZhbGlkICs9ICcgcmVxdWlyZWQnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbmZvRm9ybUh0bWwucHVzaCgnPGRpdiBjbGFzcz1cImNoYXJnZS1mb3JtJyArIGJlVmFsaWQgKyAnXCI+Jyk7XHJcbiAgICAgIGlmKGl0ZW0ubXVsdGlMaW5lKXtcclxuICAgICAgICBpbmZvRm9ybUh0bWwucHVzaCgnPHNwYW4gY2xhc3M9XCJoaWRkZW50eHQgJyArIGl0ZW0ubmFtZSArICdfaGlkZGVuXCI+PC9zcGFuPicpO1xyXG4gICAgICAgIGluZm9Gb3JtSHRtbC5wdXNoKCc8dGV4dGFyZWEgY2xhc3M9XCJ2YWxpZC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIicgKyBpdGVtLm5hbWUgKyAnXCIgcm93cz1cIjFcIj48L3RleHRhcmVhPicpO1xyXG4gICAgICB9ZWxzZVxyXG4gICAgICAgIGluZm9Gb3JtSHRtbC5wdXNoKCc8aW5wdXQgY2xhc3M9XCJ2YWxpZC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIicgKyBpdGVtLm5hbWUgKyAnXCIvPicpO1xyXG5cclxuICAgICAgaW5mb0Zvcm1IdG1sLnB1c2goJzxsYWJlbD4nKTtcclxuICAgICAgaW5mb0Zvcm1IdG1sLnB1c2goaXRlbS52YWx1ZSArICc8L2xhYmVsPicpO1xyXG5cclxuICAgICAgaWYoaXRlbS5lcnJNc2cpXHJcbiAgICAgICAgaW5mb0Zvcm1IdG1sLnB1c2goJzxzdHJvbmcgY2xhc3M9XCJmb3JtLXRpcFwiPicgKyBpdGVtLmVyck1zZyArICc8L3N0cm9uZz4nKTtcclxuXHJcbiAgICAgIGluZm9Gb3JtSHRtbC5wdXNoKCc8L2Rpdj4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmZvRm9ybUh0bWwucHVzaChcIjwvZm9ybT5cIik7XHJcblxyXG4gICAgaW5mb0Zvcm1Eb20gPSBkb21VdGlsLmNyZWF0ZUh0bWxEb20oaW5mb0Zvcm1IdG1sLmpvaW4oJycpKTtcclxuXHJcbiAgICBpbnB1dHMgPSBpbmZvRm9ybURvbS5xdWVyeVNlbGVjdG9yQWxsKCcudmFsaWQtaW5wdXQnKTtcclxuICAgIHZhbHVlcyA9IHNldHRpbmdzLnZhbHVlcztcclxuICAgIGZvcih2YXIgaT0wLGxlbj1pbnB1dHMubGVuZ3RoO2k8bGVuO2krKyl7XHJcbiAgICAgIHZhciBpbnB1dEl0ZW0gPSBpbnB1dHNbaV0sXHJcbiAgICAgICAgICBmaWVsZEl0ZW0gPSBmb3JtRmllbGRbaV0sXHJcbiAgICAgICAgICB3cmFwSW5wdXQ7XHJcblxyXG4gICAgICBpZih0eXBlb2YgdmFsdWVzW2ldICE9ICd1bmRlZmluZWQnKVxyXG4gICAgICAgIGlucHV0SXRlbS52YWx1ZSA9IHZhbHVlc1tpXTtcclxuXHJcbiAgICAgIGlmKGZpZWxkSXRlbS5lcnJNc2cgfHwgZmllbGRJdGVtLm9wdGlvbil7XHJcbiAgICAgICAgd3JhcElucHV0ID0gV3JhcE1iSXB0KGRvbVV0aWwuYXNzaWduKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBpbnB1dEl0ZW1cclxuICAgICAgICAgIH0sZm9ybUZpZWxkW2ldLm9wdGlvbikpO1xyXG5cclxuICAgICAgICB2YWxpZElucHV0cy5wdXNoKHdyYXBJbnB1dCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHZhbHVlc1tpXSAmJiBmaWVsZEl0ZW0uaW5pdFZhbGlkKXtcclxuICAgICAgICBpbnB1dEl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzMuNjI1cmVtJztcclxuICAgICAgICB3cmFwSW5wdXRbZmllbGRJdGVtLmluaXRWYWxpZF0oe3RhcmdldDppbnB1dEl0ZW0sIGlzSW5pdFZhbGlkOiB0cnVlfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGZpZWxkSXRlbS5tdWx0aUxpbmUgJiYgKHZhbHVlc1tpXSA9PSBudWxsIHx8IHZhbHVlc1tpXSA9PSAnJykpe1xyXG4gICAgICAgIGlucHV0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsdHh0QXJlYUtleXVwLGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHRpbmdzLnNlbGVjdG9yID0gaW5mb0Zvcm1Eb207XHJcbiAgICBzZXR0aW5ncy5va0NhbGxiYWNrID0gcHJveHlPa0ZuO1xyXG4gICAgc2V0dGluZ3MuY2FuY2VsQ2FsbGJhY2sgPSBwcm94eUNhbmNlbEZuO1xyXG5cclxuICAgIGRsZyA9IE1vZGFsRGlhbG9nLmNvbmZpcm0oc2V0dGluZ3MpO1xyXG5cclxuICAgIHJldHVybiBkbGc7XHJcbiAgICBmdW5jdGlvbiBwcm94eU9rRm4oZSl7XHJcbiAgICAgIHZhciBpZm9ybXMgPSBpbmZvRm9ybURvbS5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmdlLWZvcm0nKSxcclxuICAgICAgICAgIGl0ZW0sc3R5bGVzLFxyXG4gICAgICAgICAgZGlydHkgPSAwLFxyXG4gICAgICAgICAgZm9ybVZhbHMgPSBbXSxcclxuICAgICAgICAgIGZvcm1WYWx1ZSxcclxuICAgICAgICAgIGZpZWxkSXRlbTtcclxuXHJcbiAgICAgIGZvcih2YXIgdmk9MCx2aWxlbiA9IHZhbGlkSW5wdXRzLmxlbmd0aDsgdmkgPCB2aWxlbjsgdmkrKyl7XHJcbiAgICAgICAgdmFyIHZhbGlkaXRlbSA9IHZhbGlkSW5wdXRzW3ZpXTtcclxuICAgICAgICB2YWxpZGl0ZW0uaGFuZGxlS2V5VXAgJiYgdmFsaWRpdGVtLmhhbmRsZUtleVVwKCk7XHJcbiAgICAgICAgdmFsaWRpdGVtLmhhbmRsZUNoYW5nZSAmJiB2YWxpZGl0ZW0uaGFuZGxlQ2hhbmdlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcih2YXIgaT0wLGxlbj1pZm9ybXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xyXG4gICAgICAgIGl0ZW0gPSBpZm9ybXNbaV07XHJcbiAgICAgICAgc3R5bGVzID0gaXRlbS5jbGFzc0xpc3QsXHJcbiAgICAgICAgZm9ybVZhbHVlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcudmFsaWQtaW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBmaWVsZEl0ZW0gPSBmb3JtRmllbGRbaV07XHJcblxyXG4gICAgICAgIGlmKChzdHlsZXMuY29udGFpbnMoJ2JldmFsaWQnKSAmJiAhc3R5bGVzLmNvbnRhaW5zKCdkbGctc3VjY2VzcycpKSB8fFxyXG4gICAgICAgICAgICAgIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygncmVxdWlyZWQnKSAmJiBmb3JtVmFsdWUubGVuZ3RoIDwgZmllbGRJdGVtLm1pbkxlbikpe1xyXG5cclxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZGxnLWVycm9yJyk7XHJcbiAgICAgICAgICBkaXJ0eSArKztcclxuICAgICAgICB9ZWxzZSBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZGxnLWVycm9yJykpe1xyXG4gICAgICAgICAgZGlydHkgKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtVmFscy5wdXNoKGZvcm1WYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoZGlydHkgPiAwKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgY2xlYXJJbnB1dCgpO1xyXG4gICAgICBpZihva0ZuICYmICFva0ZuLmNhbGwoZGxnLGZvcm1WYWxzLGUpKVxyXG4gICAgICAgIGluZm9Gb3JtRG9tID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm94eUNhbmNlbEZuKGUpe1xyXG4gICAgICBjbGVhcklucHV0KCk7XHJcbiAgICAgIGNhbmNlbEZuICYmIGNhbmNlbEZuLmNhbGwoZGxnLGUpO1xyXG4gICAgICBpbmZvRm9ybURvbSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJJbnB1dCgpe1xyXG4gICAgICBpbnB1dEl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLHR4dEFyZWFLZXl1cCk7XHJcbiAgICAgIHZhbGlkSW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHR4dEFyZWFLZXl1cChlKXtcclxuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxyXG4gICAgICAgICAgaGlkZGVudHh0ID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcsXHJcbiAgICAgICAgICB2YWwgPSB0YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICBoaWRkZW50eHRXaWR0aCxcclxuICAgICAgICAgIG5leHRXaWR0aDtcclxuXHJcbiAgICAgIGlmKCFtYXhXUGVyTCl7XHJcbiAgICAgICAgaGlkZGVudHh0V2lkdGggPSBNYXRoLnJvdW5kKGdldENvbXB1dGVkU3R5bGUoaGlkZGVudHh0KS53aWR0aC5yZXBsYWNlKCdweCcsJycpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaGlkZGVudHh0LnRleHRDb250ZW50ID0gdmFsO1xyXG4gICAgICBuZXh0V2lkdGggPSBNYXRoLnJvdW5kKGdldENvbXB1dGVkU3R5bGUoaGlkZGVudHh0KS53aWR0aC5yZXBsYWNlKCdweCcsJycpKTtcclxuXHJcbiAgICAgIGlmKCFtYXhXUGVyTCAmJiB0YXJnZXQuc2Nyb2xsSGVpZ2h0ID4gdGFyZ2V0LmNsaWVudEhlaWdodCl7XHJcbiAgICAgICAgbWF4V1BlckwgPSBoaWRkZW50eHRXaWR0aDtcclxuICAgICAgICBpZighbWF4V1Blckwpe1xyXG4gICAgICAgICAgbWF4V1BlckwgPSBuZXh0V2lkdGggLSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG5leHRXaWR0aCA+IG1heFdQZXJMKXtcclxuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gJzMuNjI1cmVtJztcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9ICcyLjA2MjVyZW0nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICB2YXIgbG9hZGluZ0NvdW50ID0gMDtcclxuICBNb2RhbERpYWxvZy5zaG93TG9hZGluZyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsb2FkaW5nQ291bnQgKys7XHJcbiAgICBpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmctYm94Jykpe1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbVV0aWwuY3JlYXRlSHRtbERvbSgnPGRpdiBpZD1cImxvYWRpbmctYm94XCIgY2xhc3M9XCJkaWFsb2ctbWFza1wiPjxkaXYgY2xhc3M9XCJsb2FkLWNvbnRhaW5cIj4nICtcclxuICAgICAgICAnPHNwYW4gY2xhc3M9XCJsb2FkMVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImxvYWQyXCI+PC9zcGFuPjwvZGl2PjwvZGl2PicpKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nLWJveCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmhpZGVMb2FkaW5nID0gZnVuY3Rpb24oKXtcclxuICAgIGlmKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1ib3gnKSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGxvYWRpbmdDb3VudC0tO1xyXG4gICAgaWYobG9hZGluZ0NvdW50IDwgMClcclxuICAgICAgbG9hZGluZ0NvdW50ID0gMDtcclxuICAgIGlmKGxvYWRpbmdDb3VudCA9PT0gMClcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmctYm94Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9O1xyXG4gIE1vZGFsRGlhbG9nLnNob3dNYXNrID0gZnVuY3Rpb24oKXtcclxuICAgIHZhciBkaWFsb2dNYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1tYXNrJyk7XHJcblxyXG4gICAgaWYoIWRpYWxvZ01hc2spe1xyXG4gICAgICBkaWFsb2dNYXNrID0gZG9tVXRpbC5jcmVhdGVIdG1sRG9tKFwiPGRpdiBjbGFzcz0nZGlhbG9nLW1hc2snIGlkPSdhcHAtbWFzayc+PC9kaXY+XCIpO1xyXG4gICAgICBkb21VdGlsLmJpbmRFdmVudChkaWFsb2dNYXNrLCd0b3VjaHN0YXJ0JyxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nTWFzayk7XHJcbiAgICB9XHJcbiAgICBkaWFsb2dNYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH07XHJcbiAgTW9kYWxEaWFsb2cuaGlkZU1hc2sgPSBmdW5jdGlvbigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1tYXNrJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9O1xyXG5cclxuICB2YXIgZGVmYXVsdENvbmZpZyA9IHtcclxuICAgICAgdXNlSGFzaDogZmFsc2UsXHJcbiAgICAgIGNvcHlUb29sOiB7fVxyXG4gICAgfSxcclxuICAgIGlzQ29uZmlnID0gZmFsc2U7XHJcblxyXG4gIE1vZGFsRGlhbG9nLmNvbmZpZyA9IGZ1bmN0aW9uKGNvbmZpZyl7XHJcbiAgICB2YXIgb3B0aW9ucyA9IGRvbVV0aWwuYXNzaWduKHt9LGRlZmF1bHRDb25maWcsY29uZmlnKTtcclxuXHJcbiAgICBNb2RhbERpYWxvZy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIGlmKGlzQ29uZmlnKXtcclxuICAgICAgY29uc29sZS5pbmZvKCdtb2RhbGRpYWxnIG9ubHkgY2FuIGNvbmZpZyBvbmNlJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmKG9wdGlvbnMudXNlSGFzaCl7XHJcbiAgICAgIGluaXRIYXNoKCk7XHJcbiAgICB9XHJcbiAgICBpc0NvbmZpZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0SGFzaCgpe1xyXG4gICAgdmFyIGhhc2hMaXN0ZW5lciA9IGhhc2hIaXN0b3J5KCksXHJcbiAgICAgICAgZGlhbG9nTWFwID0ge30sXHJcbiAgICAgICAgaGFzaFF1ZXVlID0gW107XHJcblxyXG4gICAgaGFzaExpc3RlbmVyLmxpc3RlbmVyKGZ1bmN0aW9uKHBhdGgscHJlcGF0aCl7XHJcbiAgICAgIHZhciBwcmVwYXRoID0gcHJlcGF0aCAqIDE7XHJcblxyXG4gICAgICBpZighIXByZXBhdGggJiYgcGF0aCAtIHByZXBhdGggPCAwKXtcclxuICAgICAgICByZW1vdmVEaWFsb2dCeUhhc2gocHJlcGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICAgcXVldWUgLS0+IGhhc2ggLS0+IGRpYWxvZ0lkIC0tPiBtb2RhbFxyXG4gICAgICovXHJcbiAgICBNb2RhbERpYWxvZy5hZnRlckxpc3RlbmVyKGZ1bmN0aW9uKGRpYWxvZyl7XHJcbiAgICAgIHZhciBoYXNoVmwgPSBoYXNoTGlzdGVuZXIuYXV0b1VwZGF0ZUhhc2goKTtcclxuICAgICAgZGlhbG9nTWFwW2hhc2hWbF0gPSBkaWFsb2cuaWQ7XHJcbiAgICAgIGhhc2hRdWV1ZS5wdXNoKGhhc2hWbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBNb2RhbERpYWxvZy5jbG9zZWRMaXN0ZW5lcihmdW5jdGlvbihkaWFsb2cpe1xyXG4gICAgICB2YXIgdW5Vc3VhbElkeCA9IGhhc2hRdWV1ZS5sZW5ndGggLSAyLFxyXG4gICAgICAgICAgaGFzaHZsID0gaGFzaFF1ZXVlW3VuVXN1YWxJZHhdLFxyXG4gICAgICAgICAgbGFzdEl0ZW07XHJcblxyXG4gICAgICBpZihkaWFsb2dNYXBbaGFzaHZsXSA9PSBkaWFsb2cuaWQpe1xyXG4gICAgICAgIGhhc2hRdWV1ZS5zcGxpY2UodW5Vc3VhbElkeCwxKTtcclxuICAgICAgICBkaWFsb2dNYXBbaGFzaHZsXSA9IGRpYWxvZ01hcFtoYXNoUXVldWVbdW5Vc3VhbElkeF1dXHJcbiAgICAgICAgZGVsZXRlIGRpYWxvZ01hcFtoYXNoUXVldWVbdW5Vc3VhbElkeF1dO1xyXG4gICAgICAgIGhhc2hRdWV1ZVt1blVzdWFsSWR4XS0tO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBsYXN0SXRlbSA9IGhhc2hRdWV1ZS5wb3AoKTtcclxuICAgICAgICBkZWxldGUgZGlhbG9nTWFwW2xhc3RJdGVtXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoaGFzaExpc3RlbmVyLmdldEN1cnJlbnRIYXNoUGF0aCgpID4gMClcclxuICAgICAgICBoYXNoTGlzdGVuZXIuYmFjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRGlhbG9nQnlIYXNoKGhhc2h2bCl7XHJcbiAgICAgIHZhciBkaWFsb2dMaXN0ID0gTW9kYWxEaWFsb2cuZGlhbG9nTGlzdCxcclxuICAgICAgICAgIHNwbGl0SW5kZXg7XHJcblxyXG4gICAgICBoYXNoUXVldWUuZXZlcnkoZnVuY3Rpb24oaXRlbSxpbmRleCl7XHJcbiAgICAgICAgaWYoaXRlbSA9PSBoYXNodmwpe1xyXG4gICAgICAgICAgc3BsaXRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZihzcGxpdEluZGV4ICE9IG51bGwpe1xyXG5cclxuICAgICAgICBoYXNoUXVldWUuc2xpY2Uoc3BsaXRJbmRleCkuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgIGRpYWxvZ0xpc3RbZGlhbG9nTWFwW2l0ZW1dXS5jbG9zZURpYWxvZyh0cnVlKTtcclxuICAgICAgICAgIGRlbGV0ZSBkaWFsb2dNYXBbaXRlbV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFzaFF1ZXVlID0gaGFzaFF1ZXVlLnNsaWNlKDAsc3BsaXRJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBtb2R1bGUuZXhwb3J0cyA9IE1vZGFsRGlhbG9nO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jc3MvZGlhbG9nLmxlc3NcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL2RvbS5qcycpO1xyXG52YXIgc2Nyb2xsRGxnID0gcmVxdWlyZSgnLi9kbGdzY3JvbGwuanMnKTtcclxudmFyIF8gPSB7XHJcbiAgYXNzaWduOiB1dGlscy5hc3NpZ25cclxufSwgd2luSCwgd2luVztcclxuXHJcbi8qXHJcbueUn+aIkOWvueivneahhuaooeadv+WGheWuuVxyXG4gKi9cclxuICBmdW5jdGlvbiBnZXRIdG1sQ29udGVudChvcHRpb25zKXtcclxuICAgIHZhciB0ZW1wbGF0ZUh0bWwgPSBbXSxcclxuICAgICAgICBoZWFkZXIgPSBvcHRpb25zLmhlYWRlcjtcclxuXHJcbiAgICBoZWFkZXIgPSB1dGlscy5yZXBsYWNlVGVtbGF0ZShoZWFkZXIsb3B0aW9ucyk7XHJcblxyXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goJzxkaXYgY2xhc3M9XCJyYy1tb2RhbFwiPjxkaXYgY2xhc3M9XCJkaWFsb2ctbWFza1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgJyArIG9wdGlvbnMuY2xhenogKyAnXCI+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZy1tYWluXCI+PGhlYWRlcj4nKTtcclxuICAgIHRlbXBsYXRlSHRtbC5wdXNoKGhlYWRlcik7XHJcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPC9oZWFkZXI+PHNlY3Rpb24+PGRpdiBjbGFzcz1cImRpYWxvZy1jb250ZW50XCI+PC9kaXY+PC9zZWN0aW9uPjxmb290ZXI+Jyk7XHJcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaChjcmVhdGVCdXR0b25zLmNhbGwodGhpcyxvcHRpb25zKSk7XHJcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXBsYXRlSHRtbC5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2l6ZVdpbigpe1xyXG4gICAgd2luSCA9IHdpbmRvdy5pbm5lckhlaWdodCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgd2luVyA9IHdpbmRvdy5pbm5lcldpZHRoID8gd2luZG93LmlubmVyV2lkdGggOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gIH1cclxuICAvLyB1dGlscy5iaW5kRXZlbnQod2luZG93LCdyZXNpemUnLHJlc2l6ZVdpbik7XHJcbi8vVE9ETzpcclxuICAvLyByZXNpemVXaW4oKTtcclxuICAvKlxyXG4gIOWIm+W7uuW6lemDqOaMiemSrlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnMob3B0aW9ucyl7XHJcbiAgICB2YXIgYnRucyA9IG9wdGlvbnMuYnV0dG9ucyB8fCBbXSxcclxuICAgICAgICB0ZW1wbGF0ZSA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIntjbHN9XCIgZGF0YS1pZD1cIntpZH1cIiA+e25hbWV9PC9idXR0b24+JyxcclxuICAgICAgICBidG5UbXBscyA9ICcnLFxyXG4gICAgICAgIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIG9uZUJ0bkNsej0nJztcclxuXHJcbiAgICBpZihvcHRpb25zLmNhbmNlbENhbGxiYWNrKXtcclxuICAgICAgYnRucy5wdXNoKHtcclxuICAgICAgICBpZDogJ2NhbmNlbCcsXHJcbiAgICAgICAgbmFtZTogb3B0aW9ucy5jYW5jZWxTdHIsXHJcbiAgICAgICAgY2FsbGJhY2s6IG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2ssXHJcbiAgICAgICAgY2xzOiBcImNhbmNsZS1idG5cIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihidG5zLmxlbmd0aCA9PTApXHJcbiAgICAgIG9uZUJ0bkNseiA9ICcgbW9kYWwtZGlhbG9nLW9uZWJ0bic7XHJcblxyXG4gICAgaWYob3B0aW9ucy5va0NhbGxiYWNrKXtcclxuICAgICAgYnRucy5wdXNoKHtcclxuICAgICAgICBpZDogJ29rJyxcclxuICAgICAgICBuYW1lOiBvcHRpb25zLnN1cmVTdHIsXHJcbiAgICAgICAgY2FsbGJhY2s6IG9wdGlvbnMub2tDYWxsYmFjayxcclxuICAgICAgICBjbHM6IFwic3VyZS1idG5cIiArIG9uZUJ0bkNselxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihvcHRpb25zLnJldmVyc2UpXHJcbiAgICAgIGJ0bnMgPSBidG5zLnJldmVyc2UoKTtcclxuXHJcbiAgICBidG5zLmZvckVhY2goZnVuY3Rpb24oaXRlbSxpbmRleCl7XHJcbiAgICAgIGlmKChidG5zLmxlbmd0aCAtIDEpID09IGluZGV4KVxyXG4gICAgICAgIGl0ZW0uY2xzICs9ICcgbGFzdCc7XHJcbiAgICAgIGJ0blRtcGxzICs9IHV0aWxzLnJlcGxhY2VUZW1sYXRlKHRlbXBsYXRlLGl0ZW0pO1xyXG4gICAgICBzZWxmLmNhbGxiYWNrc1tpdGVtLmlkXSA9IGl0ZW0uY2FsbGJhY2s7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYnRuVG1wbHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbnNlcnRDb250ZW50KGRvbSxvcHRpb25zKXtcclxuICAgICAgaWYob3B0aW9ucy5zZWxlY3Rvcil7XHJcbiAgICAgICAgdmFyIGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiZGlhbG9nLXRhcmdldCByZXBsYWNlXCIpLFxyXG4gICAgICAgICAgICBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG9yaURpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHNlbGVjdG9yKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5Jyk7XHJcblxyXG4gICAgICAgIGlmKHNlbGVjdG9yLnBhcmVudE5vZGUpe1xyXG4gICAgICAgICAgc2VsZWN0b3IucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWVudCxzZWxlY3Rvcik7XHJcbiAgICAgICAgICBkb20uX2NvbW1lbnREb20gPSBjb21tZW50O1xyXG4gICAgICAgICAgaWYob3JpRGlzcGxheSA9PSAnbm9uZScpe1xyXG4gICAgICAgICAgICBzZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRvbS5fb3JpZ2luRGlzcGxheSA9IG9yaURpc3BsYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jb250ZW50JykuYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBkb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jb250ZW50JykuaW5uZXJIVE1MID0gb3B0aW9ucy5jb250ZW50LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sICc8YnIvPicpO1xyXG4gICAgfVxyXG4vKipcclxuICogW01vZGFsRGlhbG9nIGRlc2NyaXB0aW9uXVxyXG4gKiBjbGF6ejog5by55Ye65qGG55qEY3Nz57G75ZCNXHJcbiAqIGNhbmNlbFN0ciDlj5bmtojmjInpkq7nmoTmjInpkq7lkI1cclxuICogc3VyZVN0ciDnoa7lrprmjInpkq7nmoTmjInpkq7lkI1cclxuICogdGl0bGUg5by55Ye65qGG55qE5qCH6aKYXHJcbiAqIGhlYWRlciDooajnpLrlpLTpg6jnmoRodG1s5qih5p2/XHJcbiAqIG9rQ2FsbGJhY2sg56Gu5a6a5oyJ6ZKu5Zue6LCD5Ye95pWwXHJcbiAqIGNhbmNlbENhbGxiYWNrIOWPlua2iOaMiemSruWbnuiwg+WHveaVsFxyXG4gKiBidXR0b25zIFt7Y2xzOidzdXJlJyxjYWxsYmFjazpmbixuYW1lOiduYW1lJ31dXHJcbiAqIHVzZUJhY2tncm91bmQg5Y2V5Ye76IOM5pmv5pe25omn6KGM55qE5Zue6LCD5Ye95pWwXHJcbiAqL1xyXG4gIHZhciBkZWZhdWx0U2V0dGluZ3MgPSB7XHJcbiAgICAgICAgY2xheno6ICdkaWFsb2ctdGhlbWUnLFxyXG4gICAgICAgIGNhbmNlbFN0cjogJ+WPlua2iCcsXHJcbiAgICAgICAgc3VyZVN0cjogJ+ehruWumicsXHJcbiAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLFxyXG4gICAgICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+e3RpdGxlfTwvc3Bhbj4nLFxyXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcclxuICAgICAgICBidXR0b25zOiBudWxsLFxyXG4gICAgICAgIHVzZUJhY2tncm91bmQ6ICdjYW5jZWwnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJlZm9yZUxpc3RlbmVycyA9IFtdLFxyXG4gICAgICBhZnRlckxpc3RlbmVycyA9IFtdLFxyXG4gICAgICBjbG9zZWRMaXN0ZW5lcnMgPSBbXSxcclxuICAgICAgX2NvdW50ID0gMDtcclxuXHJcbiAgdmFyIE1vZGFsRGlhbG9nID0gZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICB2YXIgZGlhbG9nLFxyXG4gICAgICAgIGlkO1xyXG5cclxuICAgIG9wdGlvbnMgPSBfLmFzc2lnbih7fSxkZWZhdWx0U2V0dGluZ3Msb3B0aW9ucyk7XHJcblxyXG4gICAgb3B0aW9ucy5fY2FsbEJhY2tzID0gb3B0aW9ucy5fY2FsbEJhY2tzIHx8IHt9O1xyXG4gICAgaWQgPSBvcHRpb25zLmlkID0gb3B0aW9ucy5pZCB8fCBfY291bnQ7XHJcblxyXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbihuYW1lKXtcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgb3B0aW9ucy5fY2FsbEJhY2tzW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYmVmb3JlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgICBsaXN0ZW5lcihvcHRpb25zKTtcclxuICAgIH0pO1xyXG5cclxuICAgIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbaWRdID0gZGlhbG9nID0gbmV3IE1vZGFsRGlhbG9nLmNyZWF0ZShvcHRpb25zKTtcclxuXHJcbiAgICBNb2RhbERpYWxvZy5tb2RhbENvdW50ICsrO1xyXG5cclxuICAgIGFmdGVyTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgICBsaXN0ZW5lcihkaWFsb2cpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX2NvdW50ICsrO1xyXG5cclxuICAgIHJldHVybiBkaWFsb2c7XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICB2YXIgZGlhbG9nRG9tLFxyXG4gICAgICAgIGRsZ1BvcyxcclxuICAgICAgICBkbGdNYWluRG9tLFxyXG4gICAgICAgIG9mZnNldEg7XHJcblxyXG4gICAgdGhpcy5jYWxsYmFja3MgPSBvcHRpb25zLl9jYWxsQmFja3M7XHJcbiAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcclxuXHJcbiAgICBkaWFsb2dEb20gPSB1dGlscy5jcmVhdGVIdG1sRG9tKGdldEh0bWxDb250ZW50LmNhbGwodGhpcyxvcHRpb25zKSk7XHJcblxyXG4gICAgaW5zZXJ0Q29udGVudChkaWFsb2dEb20sb3B0aW9ucyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZ0RvbSk7XHJcblxyXG4gICAgb2Zmc2V0SCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5kbGdTY3JvbGwgPSBzY3JvbGxEbGcuaW5pdFRvdWNoKGRpYWxvZ0RvbSk7XHJcblxyXG4gICAgZGxnTWFpbkRvbSA9IGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nJyk7XHJcbiAgICBkbGdQb3MgPSB0aGlzLmdldFBvcyhkbGdNYWluRG9tKTtcclxuXHJcbiAgICBfLmFzc2lnbihkbGdNYWluRG9tLnN0eWxlLHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxyXG4gICAgICB0b3A6IGRsZ1Bvcy50b3AgKyAncHgnXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihvcHRpb25zLmFuaW1hdGVkKVxyXG4gICAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZy1tYWluJykuY2xhc3NOYW1lICs9ICcgZGxnLWFuaW1hdGlvbic7XHJcblxyXG4gICAgaWYob3B0aW9ucy51c2VCYWNrZ3JvdW5kKXtcclxuICAgICAgdmFyIHVzZXJiZ3IgPSBvcHRpb25zLnVzZUJhY2tncm91bmQ7XHJcbiAgICAgIGlmKCFvcHRpb25zLl9jYWxsQmFja3NbdXNlcmJncl0pe1xyXG4gICAgICAgIG9wdGlvbnMuX2NhbGxCYWNrc1t1c2VyYmdyXSA9IGZ1bmN0aW9uKCl7fTtcclxuICAgICAgfVxyXG4gICAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuZGF0YXNldC5pZCA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBkaWFsb2dEb20ucXVlcnlTZWxlY3RvcignLmRpYWxvZy1tYXNrJykuc3R5bGUuaGVpZ2h0ID0gb2Zmc2V0SCArICdweCc7XHJcblxyXG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lciA9IHRoaXMucHJveHkodGhpcy5fY2xpY2tFdmVudCxkaWFsb2dEb20sb3B0aW9ucyk7XHJcbiAgICB0aGlzLmRpYWxvZ0RvbSA9IGRpYWxvZ0RvbTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nRG9tLCdjbGljaycsdGhpcy5fZXZlbnRMaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuICBfLmFzc2lnbihNb2RhbERpYWxvZy5jcmVhdGUucHJvdG90eXBlLHtcclxuICAgIGNhbGxiYWNrczogbnVsbCxcclxuICAgIGdldFBvczogZnVuY3Rpb24oZGlhbG9nRG9tKXtcclxuICAgICAgZGlhbG9nRG9tID0gZGlhbG9nRG9tIHx8IHRoaXMuZGlhbG9nRG9tO1xyXG4gICAgICBpZighZGlhbG9nRG9tKXtcclxuICAgICAgICByZXR1cm4ge2xlZnQ6MCx0b3A6MH07XHJcbiAgICAgIH1cclxuICAgICAgcmVzaXplV2luKCk7XHJcbiAgICAgIHZhciBkbGdIID0gZGlhbG9nRG9tLm9mZnNldEhlaWdodDtcclxuICAgICAgdmFyIGRsZ1cgPSBkaWFsb2dEb20ub2Zmc2V0V2lkdGg7XHJcbiAgICAgIHZhciBkbGdQb3NZID0gKHdpbkggLSBkbGdIID4gMCApID8gKHdpbkggLSBkbGdIKS8yIDogd2luSCowLjE7XHJcbiAgICAgIHZhciBkbGdQb3NYID0gKHdpblcgLSBkbGdXID4gMCApID8gKHdpblcgLSBkbGdXKS8yIDogd2luVyowLjE7XHJcblxyXG4gICAgICByZXR1cm4ge2xlZnQ6IGRsZ1Bvc1gsIHRvcDogZGxnUG9zWX07XHJcbiAgICB9LFxyXG4gICAgY2xvc2VEaWFsb2c6ZnVuY3Rpb24oaXNOb3RJbnZva2Upe1xyXG4gICAgICB2YXIgZGlhbG9nRG9tID0gdGhpcy5kaWFsb2dEb20sXHJcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgc2VsZWN0b3IsXHJcbiAgICAgICAgICBfY29tbWVudERvbSxcclxuICAgICAgICAgIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgZGlhbG9nRG9tLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGlmKG9wdGlvbnMuc2VsZWN0b3IgJiYgZGlhbG9nRG9tLl9jb21tZW50RG9tKXtcclxuICAgICAgICBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3I7XHJcbiAgICAgICAgX2NvbW1lbnREb20gPSBkaWFsb2dEb20uX2NvbW1lbnREb207XHJcblxyXG4gICAgICAgIHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSBkaWFsb2dEb20uX29yaWdpbkRpc3BsYXk7XHJcbiAgICAgICAgX2NvbW1lbnREb20ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc2VsZWN0b3IsX2NvbW1lbnREb20pO1xyXG5cclxuICAgICAgICBkaWFsb2dEb20uX2NvbW1lbnREb20gPSBudWxsO1xyXG4gICAgICAgIGRpYWxvZ0RvbS5fb3JpZ2luRGlzcGxheSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nRG9tLCdjbGljaycsdGhpcy5fZXZlbnRMaXN0ZW5lcik7XHJcbiAgICAgIGRpYWxvZ0RvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpYWxvZ0RvbSk7XHJcbiAgICAgIHRoaXMuZGxnU2Nyb2xsLmRlc3Ryb3lTY3JvbGwgJiYgdGhpcy5kbGdTY3JvbGwuZGVzdHJveVNjcm9sbCgpO1xyXG5cclxuICAgICAgaWYoIWlzTm90SW52b2tlKXtcclxuICAgICAgICBjbG9zZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICAgICAgICBsaXN0ZW5lcihzZWxmKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYob3B0aW9ucy5jYW5jZWxDYWxsYmFjaylcclxuICAgICAgICAgIG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2soKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lciA9IG51bGw7XHJcbiAgICAgIHRoaXMuZGlhbG9nRG9tID0gZGlhbG9nRG9tID0gbnVsbDtcclxuXHJcbiAgICAgIGRlbGV0ZSBNb2RhbERpYWxvZy5kaWFsb2dMaXN0W3RoaXMuaWRdO1xyXG5cclxuICAgICAgTW9kYWxEaWFsb2cubW9kYWxDb3VudCAtLTtcclxuICAgIH0sXHJcbiAgICByZWZyZXNoOiBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgZGlhbG9nRG9tID0gdGhpcy5kaWFsb2dEb20sXHJcbiAgICAgICAgICBkbGdQb3MgPSB0aGlzLmdldFBvcyhkaWFsb2dEb20pO1xyXG5cclxuICAgICAgXy5hc3NpZ24oZGlhbG9nRG9tLnN0eWxlLHtcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIGxlZnQ6IGRsZ1Bvcy5sZWZ0ICsgJ3B4JyxcclxuICAgICAgICB0b3A6IGRsZ1Bvcy50b3AgKyAncHgnXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmRsZ1Njcm9sbC5yZWZyZXNoKCk7XHJcbiAgICB9LFxyXG4gICAgX2NsaWNrRXZlbnQ6IGZ1bmN0aW9uKGUsZGlhbG9nRG9tLG9wdGlvbnMpe1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXHJcbiAgICAgICAgICBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcclxuICAgICAgICAgIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgaWYodHlwZW9mIHRoaXMuY2FsbGJhY2tzW2lkXSA9PSAnZnVuY3Rpb24nICYmICF0aGlzLmNhbGxiYWNrc1tpZF0uY2FsbCh0aGlzLGUpKXtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBzZWxmLmNsb3NlRGlhbG9nKCk7XHJcbiAgICAgICAgLy8gfSwxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb3h5OiBmdW5jdGlvbihmbil7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgIHdyYXBBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICBpZih3cmFwQXJncy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KHdyYXBBcmdzKTtcclxuXHJcbiAgICAgICAgZm4uYXBwbHkoc2VsZixhcmdzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBNb2RhbERpYWxvZy5hZnRlckxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgYWZ0ZXJMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGFmdGVyTGlzdGVuZXJzID0gYWZ0ZXJMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgIHJldHVybiBpdGVtICE9IGxpc3RlbmVyO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLnByZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgYmVmb3JlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICBiZWZvcmVMaXN0ZW5lcnMgPSBiZWZvcmVMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgIHJldHVybiBpdGVtICE9IGxpc3RlbmVyO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmNsb3NlZExpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgY2xvc2VkTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICBjbG9zZWRMaXN0ZW5lcnMgPSBjbG9zZWRMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgIHJldHVybiBpdGVtICE9IGxpc3RlbmVyO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3QgPSB7fTtcclxuICBNb2RhbERpYWxvZy5tb2RhbENvdW50ID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTW9kYWxEaWFsb2c7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGFsLmpzXG4gKiovIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi9kb20uanMnKTtcclxuXHJcbmZ1bmN0aW9uIGdldEhlaWdodChzZWwsaXNPdXRlcil7XHJcbiAgdmFyIHNlY3Rpb25TdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoc2VsKSxcclxuICAgICAgbWFyZ2luSCA9IDA7XHJcblxyXG4gIGlmKGlzT3V0ZXIpe1xyXG4gICAgbWFyZ2luSCA9IHNlY3Rpb25TdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgICAgICBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpLnJlcGxhY2UoJ3B4JywnJykqMVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBzZWN0aW9uU3R5bGUucGFkZGluZ1RvcC5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLnBhZGRpbmdCb3R0b20ucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgIHNlY3Rpb25TdHlsZS5ib3JkZXJUb3BXaWR0aC5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmJvcmRlckJvdHRvbVdpZHRoLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBtYXJnaW5IXHJcbiAgICAgICAgKTtcclxufVxyXG5cclxudmFyIGVhc2UgPSB7XHJcbiAgY2lyY3VsYXI6IHtcclxuICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMSwgMC41NywgMC4xLCAxKSdcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBpbml0VG91Y2g6IGZ1bmN0aW9uKGRpYWxvZyl7XHJcbiAgICB2YXIgZGxnQ29udGVudCA9ICBkaWFsb2cucXVlcnlTZWxlY3RvcignLmRpYWxvZy1jb250ZW50JyksXHJcbiAgICAgICAgc2VjdGlvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyksXHJcbiAgICAgICAgc2Nyb2xsVGFyZ2VTdHlsZSA9IGRsZ0NvbnRlbnQuc3R5bGUsXHJcbiAgICAgICAgd3JhcHBlckhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxLFxyXG4gICAgICAgIG1heEhlaWdodCwgc3RhcnRQb3N4LCBzdGFydFBvc3ksIGlzVG91Y2gsXHJcbiAgICAgICAgc3RhcnRUaW1lLCBkaXN0WSwgZGlzdFgsXHJcbiAgICAgICAgZW5kVGltZSA9IDAsIHggPTAsIHkgPTAsIHN0YXJ0WCwgc3RhcnRZLCBpc0luVHJhbnNpdGlvbjtcclxuXHJcbiAgICBtYXhIZWlnaHQgPSB3cmFwcGVySGVpZ2h0IC0gZ2V0SGVpZ2h0KGRsZ0NvbnRlbnQsdHJ1ZSk7XHJcblxyXG4gICAgc2Nyb2xsVGFyZ2VTdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSBlYXNlLmNpcmN1bGFyLnN0eWxlO1xyXG5cclxuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2csJ3RvdWNobW92ZScsc3RvcFNjcm9sbE1vdmUpO1xyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nLCd0b3VjaGVuZCcsdG91Y2hlRW5kKTtcclxuICAgIHV0aWxzLmJpbmRFdmVudChkbGdDb250ZW50LCd0cmFuc2l0aW9uZW5kJyxfdHJhbnNpdGlvbkVuZCk7XHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGxnQ29udGVudCwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3RyYW5zaXRpb25FbmQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRlc3Ryb3lTY3JvbGw6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nLCd0b3VjaG1vdmUnLHN0b3BTY3JvbGxNb3ZlKTtcclxuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkaWFsb2csJ3RvdWNoc3RhcnQnLHN0YXJ0VG91Y2gpO1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hlbmQnLHRvdWNoZUVuZCk7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnQ29udGVudCwndHJhbnNpdGlvbmVuZCcsX3RyYW5zaXRpb25FbmQpO1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3dlYmtpdFRyYW5zaXRpb25FbmQnLF90cmFuc2l0aW9uRW5kKTtcclxuICAgICAgICBkbGdDb250ZW50ID0gc2VjdGlvbiA9IG51bGw7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd3JhcHBlckhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxO1xyXG4gICAgICAgIG1heEhlaWdodCA9IHdyYXBwZXJIZWlnaHQgLSBnZXRIZWlnaHQoZGxnQ29udGVudCx0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydFRvdWNoKGUpe1xyXG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXHJcbiAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jbG9zZXN0KGUudGFyZ2V0LCdkaWFsb2ctY29udGVudCcpLFxyXG4gICAgICAgICAgcG9zO1xyXG5cclxuICAgICAgaWYoISF0YXJnZXQpe1xyXG4gICAgICAgIGlmKGlzSW5UcmFuc2l0aW9uKXtcclxuICAgICAgICAgIF90cmFuc2l0aW9uVGltZSgpO1xyXG4gICAgICAgICAgaXNJblRyYW5zaXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgIHBvcyA9IGdldENvbXB1dGVkUG9zaXRpb24oKTtcclxuICAgICAgICAgIHRyYW5zbGF0ZShNYXRoLnJvdW5kKHBvcy54KSwgTWF0aC5yb3VuZChwb3MueSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGFydFBvc3ggPSB0b3VjaC5wYWdlWDtcclxuICAgICAgICBzdGFydFBvc3kgPSB0b3VjaC5wYWdlWTtcclxuICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGRpc3RYID0gZGlzdFkgPSAwO1xyXG4gICAgICAgIHN0YXJ0WCA9IHg7XHJcbiAgICAgICAgc3RhcnRZID0geTtcclxuICAgICAgICBpc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wU2Nyb2xsTW92ZShlKXtcclxuICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdLFxyXG4gICAgICAgICAgcG9zWCA9IHRvdWNoLnBhZ2VYLFxyXG4gICAgICAgICAgcG9zWSA9IHRvdWNoLnBhZ2VZLFxyXG4gICAgICAgICAgbm9kZU5hbWUgPSBlLnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIHZhciBkZWx0YVkgPSBwb3NZIC0gc3RhcnRQb3N5LFxyXG4gICAgICAgICAgZGVsdGFYID0gcG9zWCAtIHN0YXJ0UG9zeCxcclxuICAgICAgICAgIG5ld1k7XHJcblxyXG4gICAgICBzdGFydFBvc3ggPSBwb3NYO1xyXG4gICAgICBzdGFydFBvc3kgPSBwb3NZO1xyXG5cclxuICAgICAgZGlzdFggKz0gZGVsdGFYO1xyXG4gICAgICBkaXN0WSArPSBkZWx0YVk7XHJcblxyXG4gICAgICBpZiggbm9kZU5hbWUgIT0gJ2lucHV0JyAmJiBub2RlTmFtZSAhPSAnc2VsZWN0JyAmJiBub2RlTmFtZSAhPSAndGV4dGFyZWEnKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoICh0aW1lc3RhbXAgLSBlbmRUaW1lID4gMzAwICYmIE1hdGguYWJzKGRpc3RZKSA8IDEwKSB8fCAhaXNUb3VjaCB8fCBtYXhIZWlnaHQgPj0gMCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5ld1kgPSB5ICsgZGVsdGFZO1xyXG4gICAgICBpZiAoIG5ld1kgPiAwIHx8IG5ld1kgPCBtYXhIZWlnaHQgKSB7XHJcbiAgICAgICAgbmV3WSA9IHkgKyBkZWx0YVkgLyAzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cmFuc2xhdGUoZGxnQ29udGVudCxuZXdZKTtcclxuXHJcbiAgICAgIGlmICggdGltZXN0YW1wIC0gc3RhcnRUaW1lID4gMzAwICkge1xyXG4gICAgICAgIHN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcclxuICAgICAgICBzdGFydFggPSB4O1xyXG4gICAgICAgIHN0YXJ0WSA9IHk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvdWNoZUVuZChlKXtcclxuICAgICAgdmFyIGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSxcclxuICAgICAgICAgIG5ld1kgPSBNYXRoLnJvdW5kKHkpLFxyXG4gICAgICAgICAgdGltZSA9IDAsXHJcbiAgICAgICAgICBtb21lbnR1bVk7XHJcblxyXG4gICAgICBzdGFydFBvc3ggPSBudWxsO1xyXG4gICAgICBzdGFydFBvc3kgPSBudWxsO1xyXG4gICAgICBlbmRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgaXNJblRyYW5zaXRpb24gPSAwO1xyXG5cclxuICAgICAgaWYgKHJlc2V0UG9zaXRpb24oZGxnQ29udGVudCw1MDApIHx8IG1heEhlaWdodCA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzY3JvbGxUbyhkbGdDb250ZW50LCBuZXdZKTtcclxuXHJcbiAgICAgIGlmKGR1cmF0aW9uIDwgMzAwKXtcclxuICAgICAgICBtb21lbnR1bVkgPSBtb21lbnR1bSh5LCBzdGFydFksIGR1cmF0aW9uKTtcclxuICAgICAgICBuZXdZID0gbW9tZW50dW1ZLmRlc3RpbmF0aW9uO1xyXG4gICAgICAgIHRpbWUgPSBtb21lbnR1bVkuZHVyYXRpb247XHJcbiAgICAgICAgaXNJblRyYW5zaXRpb24gPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIG5ld1kgIT0geSApIHtcclxuICAgICAgICBzY3JvbGxUbyhkbGdDb250ZW50LCBuZXdZLHRpbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzY3JvbGxUbyh0YXJnZXQscG9zeSx0aW1lKXtcclxuICAgICAgdGltZSA9IHRpbWUgfHwgMDtcclxuICAgICAgaXNJblRyYW5zaXRpb24gPSB0aW1lID4gMDtcclxuICAgICAgX3RyYW5zaXRpb25UaW1lKHRpbWUpO1xyXG4gICAgICB0cmFuc2xhdGUodGFyZ2V0LHBvc3kpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUodGFyZ2V0LCBwb3N5KSB7XHJcbiAgICAgIHNjcm9sbFRhcmdlU3R5bGUud2Via2l0VHJhbnNmb3JtICA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHBvc3kgKyAncHgsMHB4KSc7XHJcbiAgICAgIHkgPSBwb3N5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzZXRQb3NpdGlvbih0YXJnZXQsdGltZSl7XHJcbiAgICAgIHZhciBwb3NZID0geTtcclxuXHJcbiAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XHJcblxyXG4gICAgICBpZiAocG9zWSA+PSAwICkge1xyXG4gICAgICAgIHBvc1kgPSAwO1xyXG4gICAgICB9IGVsc2UgaWYgKHBvc1kgPCBtYXhIZWlnaHQgKSB7XHJcbiAgICAgICAgcG9zWSA9IG1heEhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCBwb3NZID09IHkgKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzY3JvbGxUbyh0YXJnZXQsIHBvc1ksIHRpbWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb21lbnR1bShjdXJyZW50LCBzdGFydCwgdGltZSl7XHJcbiAgICAgIHZhciBkaXN0YW5jZSA9IGN1cnJlbnQgLSBzdGFydCxcclxuICAgICAgICAgIHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZSxcclxuICAgICAgICAgIGRlY2VsZXJhdGlvbiA9IDAuMDAwNixcclxuICAgICAgICAgIGRlc3RpbmF0aW9uLFxyXG4gICAgICAgICAgZHVyYXRpb247XHJcblxyXG4gICAgICBkZXN0aW5hdGlvbiA9IGN1cnJlbnQgKyAoIHNwZWVkICogc3BlZWQgKSAvICggMiAqIGRlY2VsZXJhdGlvbiApICogKCBkaXN0YW5jZSA8IDAgPyAtMSA6IDEgKTsgLy8gcz0oYXReMikvMlxyXG4gICAgICBkdXJhdGlvbiA9IHNwZWVkIC8gZGVjZWxlcmF0aW9uOyAvLyB2PWF0XHJcblxyXG4gICAgICBpZiAoIGRlc3RpbmF0aW9uIDwgbWF4SGVpZ2h0ICkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uID0gbWF4SGVpZ2h0IC0gKCB3cmFwcGVySGVpZ2h0IC8gMi41ICogKCBzcGVlZCAvIDggKSApO1xyXG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoZGVzdGluYXRpb24gLSBjdXJyZW50KTtcclxuICAgICAgICBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XHJcbiAgICAgIH1lbHNlIGlmKGRlc3RpbmF0aW9uID4gMCl7XHJcbiAgICAgICAgZGVzdGluYXRpb24gPSB3cmFwcGVySGVpZ2h0IC8gMi41ICogKCBzcGVlZCAvIDggKTtcclxuICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGN1cnJlbnQpICsgZGVzdGluYXRpb247XHJcbiAgICAgICAgZHVyYXRpb24gPSBkaXN0YW5jZSAvIHNwZWVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBNYXRoLnJvdW5kKGRlc3RpbmF0aW9uKSxcclxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb21wdXRlZFBvc2l0aW9uKCkge1xyXG4gICAgICB2YXIgbWF0cml4ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGxnQ29udGVudCwgbnVsbCksXHJcbiAgICAgICAgeCwgeTtcclxuXHJcbiAgICAgIG1hdHJpeCA9IG1hdHJpeC53ZWJraXRUcmFuc2Zvcm0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCAnKTtcclxuICAgICAgeCA9ICsobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0pO1xyXG4gICAgICB5ID0gKyhtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSk7XHJcblxyXG4gICAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX3RyYW5zaXRpb25UaW1lKHRpbWUpe1xyXG4gICAgICB0aW1lID0gdGltZSB8fCAwO1xyXG4gICAgICBzY3JvbGxUYXJnZVN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRpbWUgKyAnbXMnO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX3RyYW5zaXRpb25FbmQoKXtcclxuICAgICAgaWYoIWlzSW5UcmFuc2l0aW9uKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgX3RyYW5zaXRpb25UaW1lKCk7XHJcbiAgICAgIGlmKCFyZXNldFBvc2l0aW9uKGRsZ0NvbnRlbnQpKXtcclxuICAgICAgICBpc0luVHJhbnNpdGlvbiA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZGxnc2Nyb2xsLmpzXG4gKiovIiwidmFyIGRvbVV0aWwgPSByZXF1aXJlKCcuL2RvbS5qcycpO1xyXG5cclxudmFyIERFRkFVTFRPUFRJT05TID0ge1xyXG4gIGtleURvd25WYWxpZDogZnVuY3Rpb24oZXZ0LHZhbHVlKXtcclxuICAgIGlmKHZhbHVlLmxlbmd0aCA+IDExICYmIGV2dC5rZXlDb2RlICE9IDggJiYgZXZ0LmtleUNvZGUgIT0gMTMpe1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9LGtleVVwVmFsaWQ6IGZ1bmN0aW9uKGV2dCx2YWx1ZSl7XHJcbiAgICByZXR1cm4gL14xXFxkezEwfSQvLnRlc3QodmFsdWUpO1xyXG4gIH0sY2hhbmdlVmFsaWQ6IGZ1bmN0aW9uKGV2dCx2YWx1ZSl7XHJcbiAgIHJldHVybiAvXjFcXGR7MSwxMH0kLy50ZXN0KHZhbHVlKTtcclxuICB9XHJcbn07XHJcbmZ1bmN0aW9uIFdyYXBNYklwdChvcHRpb25zKXtcclxuXHJcbiAgcmV0dXJuIG5ldyBXcmFwTWJJcHQuY3JlYXRlKG9wdGlvbnMpO1xyXG59XHJcbldyYXBNYklwdC5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICB2YXIgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQ7XHJcblxyXG4gIHRoaXMub3B0aW9ucyA9IGRvbVV0aWwuYXNzaWduKHt9LERFRkFVTFRPUFRJT05TLG9wdGlvbnMpO1xyXG5cclxuICBpZihvcHRpb25zLmluaXRWYWxpZClcclxuICAgIHRoaXNbb3B0aW9ucy5pbml0VmFsaWRdKHt0YXJnZXQ6dGFyZ2V0fSk7XHJcblxyXG4gIGlmKHRoaXMub3B0aW9ucy5rZXlEb3duVmFsaWQpXHJcbiAgICBkb21VdGlsLmJpbmRFdmVudCh0YXJnZXQsJ2tleWRvd24nLHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgZG9tVXRpbC5iaW5kRXZlbnQodGFyZ2V0LCdrZXl1cCcsdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpKTtcclxuICBkb21VdGlsLmJpbmRFdmVudCh0YXJnZXQsJ2NoYW5nZScsdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbn07XHJcblxyXG5XcmFwTWJJcHQuY3JlYXRlLnByb3RvdHlwZSA9IHtcclxuICBjb25zdHJ1Y3RvcjogV3JhcE1iSXB0LmNyZWF0ZSxcclxuICBoYW5kbGVLZXlEb3duOiBmdW5jdGlvbihlKXtcclxuICAgIGU9IGUgfHwge3RhcmdldDogdGhpcy5vcHRpb25zLnRhcmdldH07XHJcblxyXG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIHZhbHVlICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKTtcclxuICAgIHRoaXMub3B0aW9ucy5rZXlEb3duVmFsaWQgJiYgdGhpcy5vcHRpb25zLmtleURvd25WYWxpZChlLHZhbHVlKTtcclxuICB9LFxyXG4gIGhhbmRsZUtleVVwKGUpe1xyXG4gICAgZT0gZSB8fCB7dGFyZ2V0OiB0aGlzLm9wdGlvbnMudGFyZ2V0fTtcclxuXHJcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXHJcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWUsXHJcbiAgICAgICAgcGFyZW50TmQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHJcbiAgICBpZih0aGlzLm9wdGlvbnMua2V5VXBWYWxpZCl7XHJcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5rZXlVcFZhbGlkKGUsdmFsdWUpKXtcclxuICAgICAgICBwYXJlbnROZC5jbGFzc0xpc3QuYWRkKCdkbGctc3VjY2VzcycpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBwYXJlbnROZC5jbGFzc0xpc3QucmVtb3ZlKCdkbGctc3VjY2VzcycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZS5rZXlDb2RlICE9IDEzKVxyXG4gICAgICBwYXJlbnROZC5jbGFzc0xpc3QucmVtb3ZlKCdkbGctZXJyb3InKTtcclxuICB9LFxyXG4gIGhhbmRsZUNoYW5nZShlKXtcclxuICAgIGU9IGUgfHwge3RhcmdldDogdGhpcy5vcHRpb25zLnRhcmdldH07XHJcblxyXG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LFxyXG4gICAgICAgIHZhbHVlID0gdGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIHN0eWxlcyA9IHRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdCxcclxuICAgICAgICBpc0luaXRWYWxpZCA9IGUuaXNJbml0VmFsaWQ7XHJcblxyXG4gICAgaWYodGhpcy5vcHRpb25zLmNoYW5nZVZhbGlkKXtcclxuICAgICAgaWYoIXRoaXMub3B0aW9ucy5jaGFuZ2VWYWxpZChlLHZhbHVlKSl7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpey8v5LiN5Yqg5a6a5pe25Zmo5pe277yM5b2T6byg5qCH54K55Ye756Gu5a6a5oyJ6ZKu5ZCO77yM5Y+q6Kem5Y+RY2hhbmdl5LqL5Lu277yM6ICM5LiN6Kem5Y+R6byg5qCH55qE54K55Ye75LqL5Lu2XHJcbiAgICAgICAgICBzdHlsZXMuYWRkKCdkbGctZXJyb3InKTtcclxuICAgICAgICB9LDApO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBzdHlsZXMucmVtb3ZlKCdkbGctZXJyb3InKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCFpc0luaXRWYWxpZCl7XHJcbiAgICAgIGlmKHZhbHVlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIHN0eWxlcy5hZGQoJ2RpcnR5Jyk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHN0eWxlcy5yZW1vdmUoJ2RpcnR5Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGRlc3Ryb3koKXtcclxuICAgIHZhciB0YXJnZXQgPSB0aGlzLm9wdGlvbnMudGFyZ2V0O1xyXG5cclxuICAgIGRvbVV0aWwuYmluZEV2ZW50KHRhcmdldCwna2V5ZG93bicsdGhpcy5oYW5kbGVLZXlEb3duKTtcclxuICAgIGRvbVV0aWwuYmluZEV2ZW50KHRhcmdldCwna2V5dXAnLHRoaXMuaGFuZGxlS2V5VXApO1xyXG4gICAgZG9tVXRpbC5iaW5kRXZlbnQodGFyZ2V0LCdjaGFuZ2UnLHRoaXMuaGFuZGxlQ2hhbmdlKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gV3JhcE1iSXB0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3dyYXBJbnB1dC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJpbnItcHJ6XFxcIj5cXHJcXG4gIDxkaXY+PHNwYW4+5oGt5Zac6I635b6XPC9zcGFuPjxzdHJvbmcgY2xhc3M9XFxcInByei1uYW1lXFxcIj57ZGVzY308L3N0cm9uZz48L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImRlYy1wcml6ZVxcXCI+PGltZyBzcmM9XFxcIntpbWdVcmx9XFxcIiBoZWlnaHQ9XFxcIjgwcHhcXFwiIHdpZHRoPVxcXCI4MHB4XFxcIiBjbGFzcz1cXFwicHJ6LWxvZ29cXFwiPjwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2hhcmdlLWZvcm1cXFwiPlxcclxcbiAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XFxcIuWhq+WGmeaJi+acuuWPt+eggVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbWF4bGVuZ3RoPVxcXCIxMVxcXCIgY2xhc3M9XFxcInZhbGlkLWlucHV0IGNoYXJnZS1waG9uZVxcXCIvPlxcclxcbiAgICA8c3Ryb25nIGNsYXNzPVxcXCJmb3JtLXRpcFxcXCI+6K+35aGr5YaZ5q2j56Gu55qE5omL5py65Y+356CBPC9zdHJvbmc+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImVsZS11c2VydWxlXFxcIj48ZW0gY2xhc3M9XFxcInJ1bGUtY29udGVudFxcXCI+e3dpbk1lc3NhZ2V9PC9lbT48L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXcvcHJpemVUbXBsLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImluci1wcnpcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicHJ6LXN1Yi10bGVcXFwiPjxzcGFuPuaBreWWnOiOt+W+lzwvc3Bhbj48c3Ryb25nIGNsYXNzPVxcXCJwcnotbmFtZVxcXCI+e2Rlc2N9PC9zdHJvbmc+PC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJkZWMtY29kZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRpY2tldC1jb2RlXFxcIj48c3Bhbj57dm91Y2hlcjF9PC9zcGFuPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0aWNrZXQtY29kZVxcXCI+PHNwYW4+e3ZvdWNoZXIyfTwvc3Bhbj48L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZWxlLXVzZXJ1bGVcXFwiPjxlbSBjbGFzcz1cXFwicnVsZS1jb250ZW50XFxcIj57d2luTWVzc2FnZX08L2VtPjwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlldy9lbGVjcHJpemVUbXBsLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImluci1wcnpcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicHJ6LXN1Yi10bGVcXFwiPjxzcGFuPuaBreWWnOiOt+W+lzwvc3Bhbj48c3Ryb25nIGNsYXNzPVxcXCJwcnotbmFtZVxcXCI+e2Rlc2N9PC9zdHJvbmc+PC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJkZWMtcHJpemVcXFwiPjxpbWcgc3JjPVxcXCJ7aW1nVXJsfVxcXCIgaGVpZ2h0PVxcXCI4MHB4XFxcIiB3aWR0aD1cXFwiODBweFxcXCIgY2xhc3M9XFxcInByei1sb2dvXFxcIj48L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImVsZS11c2VydWxlXFxcIj48ZW0gY2xhc3M9XFxcInJ1bGUtY29udGVudFxcXCI+e3dpbk1lc3NhZ2V9PC9lbT48L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZpZXcvYWN0dWFsUHJpemVUbXBsLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUEFBQUFEd0NBTUFBQUFKaXhtZ0FBQUNRRkJNVkVVQUFBRCswQUtKZEJQKzBnSDZ6d1A2endMNXp3VCswZ0VsSkIvLzB3RCswZ0ZFUFJvZkh5RDkwZ0grMGdELzFBTDkwZ0VnSUNBZkh5RDgwQUg5MFFINzBBSDF5d0loSUI4NU14d2ZIeUFqSWgvenlRTDcwQUgrMHdIKzB3VCswZ0VnSUNENzBBSDkwZ0VwSng3OTBnUDgwUUVpSVI4ME1CMzgwUU1mSUNEKzBnSC8xQVgrMGdBbEpCLy8wd0Y1WnhORFBCb21KUjRtSkI4aUlSOG5KUjVkVVJjaElSOWlWQmRxV3hWUlJ4bkpxZ2ovMHdSY1R4Y3VLeDVMUXhsdFhoVjBZeFJIUHhvbkpSNDZOUncyTWh3dEt4NysyaTdmdVFXWmdRK0xkaEgrMFFBZklDRC8yelAvM0RiLy8vLysxQW9iSEI3LzBnSC8xaEgrMlNuLzJpNy8yQjhZR0JnVUZCVDl5Z0QvMml6OTBBMyszRHovMXhja0l4ODRPRGdxS3lyKzF4di8yU1ZJU0VqLzFRRC8vdmd4TVRILy9mTCszVWNsSlNXVWxKUzB0TFI3ZTN2Lzlzcis0bC8rNEZYLzJRRC8zd0QvNDJmLzZvM1cxdGIrMVNVVkZ5SCsyREhnNE9EejgvUC84S3Fpb3FMLzk5TC85TDllWGw1V1ZsYi8vT3kvdjcvLzhiTVBFaUwvK05seWNuSnJhMnRCUVVILzY1YisxeXovKythb3FLZ09EZzZQajQ5UFQwL0d4c2I0endILyt0L2IyOXVlbnA1a1pHVHU3dTdMeTh1dHJhMlptWmtzS2g3cTZ1cm01dWFCZ1lINCtQai83WjNRME5ELzZZYUZoWVgvNW5jeUxoMzkweGE3dTd2LzVYRnZZQldLaW9yOTB4bi81MzMrM2s3OTB5QzN0N2YvN3FQUXN3WUZCUVh1eUFKa1Z4WitiUkxkdlFYLzZRQkVQQnRSUnhtVWZ3L254QU1CQkNTZGh3NjZuUXFtalExYlR4ZU1keEN0bGd5RkR6K0JBQUFBU25SU1RsTUEvZ2JiQ0J3T29ocjM0eExpY2ZIUndMbWxPWkdIRlMvKzlqb3NJK20zbXNpdU1pVm5STzNiVHRQSFYzeHJYaXJNU295WVdZQjhiMEtRL2FpaDZiZFhIS1gzNmJqTTI1MUhmaXU2Z2JRQUFDRFBTVVJCVkhqYTdOaS9TOE5BRkFmd0k5TkJzaVNEeDhVbFVMaVE0V2grTlZYd1oxVVEzbkpUblRTVG9LNFNGQ2VIdG9QaUlGWndrQTcrQS82TElvcWdUVU83ZWRmM1dXNyszcnU3OXppQ0VFSUlJWVFRUWdnaGhCQkNDQ0dFRUVJSW9YK2x4UXJQdDhqUzhMMUlpTFJObGdPVjZUNEhxSnhEc2dRc1B5OGMrTVRqSlFoczA4VGxIRDZwc0x0Q1ROY3EzSWpEbHlvMHZjQldVbVFPL0ZDYlhac1lqRElad0MrOXVOczJOekpMSXdmKzRPRldoeElUMFR4ekJVeFI4QmJtQnRhWUpVVUE5VlRscmhHeldOVDNCSWRaS3Q0bFJyR2xGd2hvRUc0VGcvZ3lqYUJKMVZzM1o1Nm1MSEU1TkRxdWhEbTltQmFSd3dHYXFkNnVHWStXbFdlZUEvUFk2N1IzaU81YXVYUmhUaS94Um9kcC9SRmdVVDhUSEJiQU0wYjBaVXMzRUxBQXBTcEhFbDB4bVFhd3NPTmRQYyswelpKTVFDMzF2UndwcUxHM3JtVmdLdDFaZlVpcHI5U3FyK28yUTh2V2xLUmVCTE9VcHlWQS8vMStOQnoxcHdOei9hWXRtdVFlaDVuSzRmbFRlWFQyTUx5YkRPb3FIT3MxVDFzMmxSR0hCaWMzNDl2aGFQQjhQWjRNeXByei9yYXh1cUxSTFU2OEF3ZWE5R0Z3ZWYwNHVYb2RYenlkUXAzTmVDc25ldmlnNWt5NDByaWlPRjQwUzIwYlRacWxudGFZcGtuYU5HblQ1WFJOMm5UZlptQVkxaEdSQVVjUkVEZEVoYURnQm1nVWlBcTQ3MHVJMXJna3paNjBYNjMzQVM3QXM1bUthZXd2a1RNekpqbm5mKzk5OTkzNzdwaFQ3MysyVlZFVlQxRjA5N0p4cEplaXFLRlI2d2pMZEdNU05WM2ZSaC82UDh4ZDlyM3g2NWR2MDF2ckJSaWxVYytOV0tsUmExOGtZTzMzZVZoR3VVVzV0ZXZicG94ajV3OWV2SzZwSjdkQXozR3NscVJkL2JZUVJkbk1ScjA1YkxjUE8veGFFc3VQdTcySGVPUG9wWnlTbFllNTlmVllIelBrU0NCUTNtY085bE9VMVVhMWNNdmRyZ0FFOW1nTHg1QVljci9iMVI0K2R1YkNpV3hDVWtJczNWdDljZ2ZuWlliMDJZWkRvd0YzMTdqUHN4anFZL1h1TG12WVlWcHM4ZU1FMHg5K3M0dlg4TEc4MCtleUJBUlFVbjN0OXRMalhGeFl3N1pyN2d2M3NYNlhrUzBmTW5rY29lRnlsNUxtL0ZvYVY0cGQzc1hWMXBrajV6S0pHSkxxNnBLYTI2c2tOcXFOV3BaallWZGluR0Y3WUh3b2JHYU5Ybk9Rd1RxWS91SFRYZXJodlJmZXk4OG1ObEh5eC8xVm5GNFF5blF2ZHpQTXNyYlBEbG1yTDhncGpaSGhMZ2gySEpvUHYvbGllNnM0Ny9CbTNrSzhnY2pMeTlzTEhBUDJBWHYyYk1PaUdYbUgzOHNoa3FoWnV0Tkc0dEd6UnBwV2NtRnFPR0RXczVHZ2RtVElHcVFaWEE5QnYzMzVxOCszTlhjNSt0SUdtWm1aT1RubkRoN01QM255NUtYOUo0NGNPWEwwdlFNSERweStjT0g4K2JObndCeGdCN0FCMG84all3T2tObVBQbVV1WjJVUWlKWktWaDROdEpKM3lDL0JHQmp3dUx4dHNzWm80b3pGb1hlUzRXV3BSdjZ6VjR0YUE1dnQzUDl1TzRoTUVocXlzck96czdPUEhqNE1Od0FqQU9iRER3Zng4TUFYWTR0SitIQ2RPbkFBTEhUMzZIaGpwOU9uVEI0N3NQNWhGSkZOU3ZYUzkva0ZiQ3ZXMFVtKzIyVzJnbFEwNmc3NGc2ZThkOVduTm84Tk8wdW56THVQV01mM21hMmtJNW9sRUl0bjZXd1FoeUFJN3hTSWxFK1Zsak9EYkQ2K3ZYazloZFZxcDkzU1Z6N1pFb0NOa3VOa0J2ZGJYMjYvblptMG1jTGxiU2VQVzhidW50aUg0UU9aTFdmOUtNWkV1MXpEVUxEMUJhZHFvMWVzaGZobHQwTU9Tck52c05UcjdJaXc3NldaeFFUMzQwMGN2YnVMbERINXA5UENGSE9JL0JIeGNYVk5UQTErYlB5QjFRekhOQUNBTXhHbVJidlJoWktIZVJGOFlORysvR2VmUW9VT3ZIdnFZNzRyZWQrUTQ4Yno1NC9hZHRzM2xpRklaL1lCc0JpWkFkeng0OXpYK1VVMDhiMnB1WDUvV2tHbEJ2L0lhYnc5bkU4K2JFbUxscjFVTlRmSWpQUS9ubmM0UkVNK2Q2cHByRDZmVEV2ek9weS96ckhSenNvaGRRRW4xbzl4MEJIL045eXp6eUM1d0w5SmJzcEtPaDlGUjVzNFZIbUl4OGF3QnZYODkwYVFqR1ByRm5SSXMxaFVyZEVVelVyR0VlR2JVck55N08waW1BU3hobm1jK3B3OG1yV0ZKc2tQRk1yVmFKQlRLRmMvTzBiQVA1N2FSNmZFaHo3Y2g5dTA5bTVNZ1Z5ZExWQ2FScWtSUkVoNkx4VHZxOEQrV3BoK1FlR2pNSlE3TlQ2ZjQ3c01uc3RiVlNuVXlvVWdsVFJCY3BBTC9Da0d3SkNuTXBaSWRGRXcrd01xQmVuUHRlYXpxMmhvb1BIanl5N3Bna0F1dUZNckVtd1hyNURIQlJadTlEcy9rTWgyczYyZGJhZEZhampQR2o2YU5YcWNyWGxPblYybnRQVm15NWpjRjZBSnRDZEVyTGhaR0JRdWxxYy9rdWgxYTE1S1NsY2QzU1RyVnY2NnVmcmVlVmdMZFNsZExpNHRtMERYVzBXK2U0bnRnL05JbUlWSEJJSVJZUjZxSzZTMFdiNHB5dVVpRVlrRmV0Rk5SWFFKNU92WDRscWJkdGxHYnd3c2E0YkJMSHdpWnlXVUdVS2FSdE01ZU9pN1pwRTRtaXNxVFNTWHJxelhxVExVY25pVGJSUWlSc0dPQ3F4OWpCSlBjWlBtb1BlSXh1OTBlWjNDY2F2SDRuUzRYbDlJZTAveTNwVjlLSkFrWktpb1BTZGtJODVnSjRNSDZJM2xNTURoOXgxaFp1b1U5b0dlNHJvQnAwZFpySFErUDJ5bDdvTHdsRUM0M2E1bVUxd0tnc3R5R1lFSWNkN0ZLS2xtUGFQUUF4S1VzYXBsMEJ3dVB4OWZ2NExZZFNOS2MzK3NiRHdkNlI2a2hxOVhhMjJzYnR2cTAzZHQrRCtJSWtRQXN6MFFYZzh1Uk16ZktEZ25FZU95UEZFbDJzUEM0VzYvQjcwcEsrR1Q5bkhPV29reWNjOEFXOWpnOWZxTnkyeUY5ZnYrNTdGZ2RBY1JDR0FDRk16RjVpbGoweXNTSnkxeUVNdlJPRmg2YUJ4aTV0TmZqTkM0ek1ETmVkb1o3VGVUeU1oZXdlc2h1ZXR0SkN6aDJQb2NRRittS2lxUXhkS3ExQllxSTMwR09qaE1QYVBSOXlSbzdVM2hnRnJEUzNXdjFHSkVEbldHcTNFdVRXdGNzTmVRbWxYUTZsZGF4azRSWUpaS3ZJNHdDaFFVQ1hTRGtLbG1jdUY2aHJHamRTbUpKMm9JdllnWFRidXVvcmQ5cDVBWjZxZEZ3WDE5Ly82eU5vbHFjU21WYWxkWitRaXhVaXphSUsxWWoxdTgyaU40aUU4aFZLakFEL05hbExiam0vcTFjRGFhTVpqMWRJV3BBN3h5bnFORHc4QkFpUkNGZjAybFVXb2NQSXNIQ2Y4MkdCUlNTOVB2aCsvZnVZRlFvbGQ1SXYxblBSUng5anE0K2sybGdZSExFWVcxeGtxa3VmdnRIZmlHOTUvREpySmlIbjU5Z29McjY5aTI2SHBPbDRYaGVpOFpzQ0gzMG1KNTF1NzJwTzVpRzU0aDg3d0UwQUVLQ2srQ3ZXeWhQWHpBYWxmOUp0MkducUVZOXM4eDFkZmxwLzRBYkJsQURIbFpySkZPWS9wRmZSTDkxTUZadXdIcUVSWW5ZNU1DTkszVVNJbUNIUFh4eGxhN0h0c05CbjZzN1NGRm1tS3lWRy8yOWxJTk4zWlpvT3ZlcmIva0p6bysxZTBYU0lzaTZPa1dVWWdEeU1XaVBBMWVKSU1PZ3B3M1JHMTM2YS9qYXhWdlRKQTZsZG1ESVlYVFpoenhhODFBWDZSOFBtVmdHOTByQWJ5L3dFM3hKRUZXTUVLT3ZUU2pXU3NnaWNTTFNPTWhHQ0duNnBlWFNYWHh2ejlDdXNOMUhCdTIyWUV4d09PVERDU1p6Zjl2SGJ4T0dOekN5Q0N4aVdWd3czb0Z4SXlIU2RyQ2s1aEg1QUM5WTd4Z2Q5ek5tKzdoTE94SnkwUDd4b1lnZTkzcmU0SWUvWmZEcy83R2pwWTAyQ1ZXVnp4cEo5U01hSzVnaDNjT2hTWkkyMmN1OTJzbVFRK215RGs5eWtLc3h2UFBSaXhuODh4WmVMNEJ2OG5kZXNBWW5tR1pjNDFRL3EvUUg3Q2F0Tm1MdkE4RTJjOURzMW1PaTJ2ampaNi96R3k3bFk4cGhDZWpsM2VTblQ4bnRQM054R1pwelVIWXpvelhaUTU1dXZROEVPM3Q3elo0dVNOU1l2UFg5SzUveGNmR2VBemxGQ0VqVTYwQmVVb2xpZ2xXSkdRdGxOZ1N4dzBDbGxadFNhU21ONWlIWWhiU200ZEFBdTh6MlVWMU0wQmJxN3hydlR4V3NHZFNROE5KSHh0T1BwYy8vTEVkYkMwSUZvQ1pCb1ZQSTRFSVZGYXhBNk1BS015Z3Q2NUJwTm15VFlJdjBwb2NYVit2clV3Uzd4d1BjTW1zZGNtZ1podlgxUmhoWFlEUmt0MDVxbVdTOTA3bHc3UG51UjA4VHZPZnNwWjlGNjZ4MVJqS1YybUFRYmQ2SVZUSjBxcU5DMjY4OGhpcUdEQ2lPb2hDbkozanBPZ2hPUnU5eUdydjE3aEVYbkZUQ01TMm4xSnBid3VFQmpxUlRCSU5lemRQTDZYMm5rZDZFeWxndXI2cTllYVcxOVVySG5Cb2tpd0NWekREVk1UYldNYitna29tU1FYT1loazZWVEVjSTRvUEkrSVhnWDUzaEVZL3h6UU5heWNaWVdrYmZwL1YrbDR2RmRNT0RnMmhrbXNGSGNBS2diZTVtTXhXbHZiWktGUFc0dW5Lc3NheTB0S3g5ckZLZFZIU3BLeWNtSnVibnA2Ym1MRlVHUTJ3SGs4Z01DMVZWQzJyK0xwY1E5Lzk2UW1LaG8wZTA0R0FBZlRMZDNiaHRHRHhNOG5rQmM4LzUvSWFFVHFCWVh0dFRTc1VwYTdLSTVLQjN2akgrcUxSaVFxMFNJdFk2aklXeHNuV2FyODdyMElabXVObUQ3aG9yeFJMZXcxTDBpaTBlR3BGZ0FPeDVSMjR1Q1QvOThjSFRLNjBMK1FyVXcwUHZnSkNKcHRxUmIyL1dqalZkQllHdEJqalJtYXVBUjgyTmpjanhGWmJOQzBBb3FtcWxObEdySUFqaFJFVVpGYVd4VmkzbU8zZTRSN2FSV0l4ZVA0TGpPSy9YRyswUW9WWENoalNzNFIrKy9PTGJsLys1NkxodzlKd1k4aTlLd0NnRml3MU55STlUQnBHaHFoWUVYclVvRk9vcjROK21xVXJMUkZNWm1LQktoanBDVmJTN2tzbVI0T2IyeHNiMjlwNzJua2FMbEJCUElVTlZOQ0Y3bFkwVjh4UjhIM3BERGJaM1lFM2xYU2FmS1liUDV6UEI1QVUvUGRUQVAvREQ1UzgvMlZyeHZyeXorN01UWDdJVFYvVlFWSStsN3ZlNnVzS0cxbEtxckZZaHJxb0FsMWNXRkFnS0YrQ3FlYTRZOVJPNmFPY2dWVlNDZ1ZybkxKYTVxYW1wK1RtMWhCQzFndERXU3ZWQ2JYc3AyRXZLOTd4akdoL1NER2VsYk9WZDVZdmxpN096aTR1QklXcVJvOGwvNHRDcGYrajlNN09UNnl0TFUzdjdGZldOdXM3T3dzSzVkcXAwVENZRmx6WFAzeWdBWmpyS0lHeWhMVVRsQ09vY0NMR2xnaXFidUZFSXpNQ3ZRa0lLZjRtNllpZ3NLUHpkQWxldGFrRjB4SjVVcVFpU1hYeHRDVTU0dGhUczhKbDhrY2praU5udFF6OE9vZHhpcmNmUDhyYllpODhjM1ovU05FZ1ZRa09seFZMVjBDbnMxQWtLS3h0QmNKME9WUFpVQ1FvRVJFSGhGUGovcGtFbGh5MDVWbUZMd0JwWExRVnJDQVIxWTJWVW1hVVEzZFNCODVzckN3aXhlbjVpd2lMY21GeW9LeTJWY25GeVVOOGF4SVkwTjA3TkJsM0JvQk53K2MxV2FoWXJXRE1ZSDdmUzJQOFhZZStaOC9tQ2xIWmhCZzNEZjc5eDQvY0dtS0tBdk5xclZPbkVUQjNFYU9NQ2JLM3dwTElDbkZhbFVzVktUdlIzYWt1cENrTmNMWEpkQTZoc05JQnlRVUVoeW1jV0FTR2RieTR0N1lGOEZrTlExTkhZWG1FcFNtcUlheDdkeGUzRERCeHhoTTN1a1JIenlNZ2tIT0NGcUZrdlZuQnVibHp3Tzkra0NzNDdtcG1kcWxjaFI5bW9zN096b1FHR2g0SkNBNmpycVJTb294S2lhZ1FMY04xVXFWS0oxaVlQMHB2d1lLRXdDb0V3dEZObFZ4b0tvdWE1QW9LbjRNOU1VTUJWdzVwZ1VTT3M4dmtieWNQRFIzZEpyT0N3M2RheU9MdFkzZzg0Rm9mdC9TeEQ0eHc4R0wrNmpObWE4bDlLN1FhTFlzTi9BRDZMRmFxRjJvcFNxcmxEWFZoVmdRUVRHNEl0Y3RYNnVFa0hYcXpvNkdpRndteGVSc1NTWHRsWUorZ0Z3UjJsc09LbElMZ1ViZUdXZUJCMzFwYkMzZFJNVW1XNWNndnptcGFXWlRuM3lDUTRGOXc3R1lsRVRBNkhXVTl2c1NzaDZNSExtTE90djJrNTgrY1Y0akNPejdydmF6RE9jVFBHTVJqMzhZdmhsOVNtaTdTT0pHM1Nac29xcTZnbTZVQ1NJeUpKR2lXTmV4am52K2I5MlYxUmZkQVludkdkYjltK1A3ejJlWG8rejdsOUpRNERXaW9kWFBNQnZoNW9SNkx3eldVKzNmS0ZPOEEybjZ4aEJOa1FlYTdIQk9CTWhpV1NLZnR3S0FrRTJLUjhPZ0FYbDdKb2FpQ0VUci9idEpBaDcrckdMZ1cvMlBxRjRyVGNqaE9lMndWVXBMUFFyZ2QrT2hhTFBmWVVUeVNQMHpTc0FxK2h0QkVYakprNzRRZTB3VURVQzFwVnZYYTdBRWFJTStLenRVd0UyS3NDRTIxTFQwMW1Ucms3WmhQTUh1SjBFU1EyNGRNREdHYWhBa1BEQkxnUkFLRFRLWEdLS2NIQW8yelVyKy9lQzNoMWgxS1VkbC93aEU0VHVhNUlpRWpwN3Mwc3FVdlR2OE1JUHJadkhqVzJ0OWV3ZXZ6VVNkK0hwSUY3VkxWbXhWQU5laFdZelZjYkZwTWdBek1kNFBaVFhxajdCUUhSc2s3cjl3STMzRTVKQ1JZUzF4cGs0S01xTUltOTdCbzdnTU5oWjhJdiszVlQyNW53T3FOK1c5YzV2UFhsbmpQVWZjVHpOeTZlSkhJUC8yU3JSZ3dDRGYvR3FBL3RXTFpyVlY4SVBYMzJpa2svR3R3L2NIVW1PRitEMlYrcHBPSjVnTloxb2d6TUtRZ0MrRkpDS3VMMUlwU0tTSDR0WDVVaWdhZndjNEpFNGpLZjNnL2dnUGdUY0VOakFiQlVacDBCb2xTREw1eEpTUUJtZmdaR1Vmb1F0U2g5K1VpeTRDSHk3UFp0MmFJOW51SjV6TWZUSXkzMWp3NGRXazZkenVvQW16cTQ1cU55NDk4QW45dmlBeUFPKzJYZ3lFL0FBWVRXaXJnQ1FUSDlWQWpLcHk0WGNjSVZtUUNjQ1ZpVVQ1ZFpVTlkwSXNBRDFTZ2JOd1BTR0hCNWZTbldKVEE5cXk0QXBzaitTOW43SlF3NTNNSkdjZWhXTG5lcnhLSS92UDhQRTJ3eko5UHlwQjVnb21XaVhrVVlJSWpsS0pnNElRRmczVS9BZmltUmdiaGM0YVkyalpCTUZGdEF0bFV5c0drQjRWV204aE53UlFGT0NXMVh3cTluTkxvSUcwbFhlb0dQdmY3dytkQ3ZnRDBYemllVHhidDNDeGR2bkwvNG1BMWRkSGVBcWRSTHgwMlpSU3QxVE9vYWNpRHF0UmdSQXNxbEdzUU5RUENIaVlzaUdvNEhHUm1obmdBd3gva0VRZkJYSzAyZjlnQndjVzZuUlZ1TmZEclJKTUROSDhCc3hhWXg0WGViNDcxT3FXRTExdk9zMUFLd2orbmVkSGtQbzZZRldwZXlaMjlkT1ZFNEZ6dDdNM2F1ZUtMd2dMMmVkUDhtMU1JeTA2cTF0R2g2OXJhNWlucU5sZ05LVmNOeUVITEFWMjM2dVlQR1JxMW1hL2prdUlwbzFjc3hLRm94dFVBR3dDSmpJOUpJeTdVT0NMbGRZcm9PNEh5RkFGZnRDbkNiQkJoNlRSREFrdGlRMkRCblRVdk9oR0FMOUFJajhEajJZUVl0KzNkNDJOUG9raFppWjB1M245dzcrZkFXRzBydTJVZmxKVlc4cGR1M3JQOUZLRDJtNDdFZ3FGa2ROQmdRYXZuYVRqWWZNTnNQSEVpM2dsVWtEeEpQc1BNK0k2cFdlbEZ5RXVCYXJkSEFIYkdZVEp5L1h2ZHpaaENiZ3VRcm42ajd3dkRTcXRPS2svUVNDVExBcFhRamhUY01sMkRMTnFiTXVwNzJBWDk2UzR1MEhObFM5dno1R3plS2Q2OC94SHpXMWR2M1Q2TTVUTmZ2ekhITGYvMkE0b1ZET3pNNXFqSEw0eXc4TVVNdkQzU3o2YWtVSlg2Smp5UGlxcEw2Z0VVK2Rac2luREtzR0hhczU3MlpURmdnTlJBTFY0YWJqdkNjbHlXYTFFQXNFWEkwV3pVNmlYd25iUFdvcTYwVlhNNjZGYXAzOGRiZVNJdVdQS0FaZlBKY0VhZlJGYy9OMHUwVGlMUnVQN2g5ZGU5ZVNpaDlCNjVxL2FKUnYyNndUSjBvYjZRQjAwUncxZmtkRTd3cEcyMzdlWjRYVWlRMXJvdkJaaDRKZlQxdE1qMXRSL0ZLYUgydjd4elY2THpFRVdzdEVNRUw3VmNhTFZBcTlxcUhzcDF4c0hNRW1HT1FYbnRURWFlWFI1QU5ZS1k3SC83NGFnYlZCem11bkR1WFJmcy9kN2JrS1pJU3dJbVREamV0cExWNzNmcFpRMzdiK0YrOGN0NmtNZkxJTUhITkt2QlJYZ0t4SzFKT2xlTVpsbGkwS1BKeG92V3EzOTkyc2ZCSVFWR3RnZ0hZRHRmc2pGUjVqcFBQNGFnUEFiUUx0OENNVEZrblJlR2tXd3F3eEZtWnBpdEQwcStHdGRhallSajAxcy9VNXZEK3k0NUM5dHk1UWxFR2xnc2Z4U2ZuM2ZzcEpqMy9qNC80SERKcytKS1JHa2pYQkdXYWw0Q2xDTUI5NU5ScEpsakE1UE80Z0FDeHBlS1NKb3hCUjI1R1hrcVZvVi9vTTJoRmZpR0gxZnhUa0pNc2kySElEVU1DWlVWZVFieUIxZHFBaGpscmwwRi9KVzJIZm5HN3J6NEJZeEhBOSsvR0VFOC9mcHlUNXc3N1plYXVRVVlleGpQZHdCd1hEUG9DeUJ1SVpDSUI4T0xieWxXQkkwdFVFa1JVcGxWZzVJYzJYeHlYWEprb1MzaDVjaDQzaWFyRFhtOEd2SDZiQ3R6V010YWdCR2RRRnEzV2xzUkdlNEEvSVZXaTlNSnZYRUhpY0E0cXp0NjZYL0lVUUY0b25EaDUvakMxZWJocTdBREFYUm8yeWsyVm1vaGtLWlZLQlpvQ0o0cEJnTFZFM0FSdkl1R05OM25SZE1Dcy9RR01yTGtTbDAwaUlWV2dUZzI0VU90VDdNTmJ0WkVDRDlHNXBHV1lXaFVuQUlJUHBoVm5uWHczOEVkYUZYNy9rWk1leEpJZWtpamxRcWZ4RWtKeXBwTzBnMm5jeGo4REw0Uko5d21KT1JqNW9FVklJWWRnTGVaYUEyV1pPb0pJcG9hcENLUlduVDRxQ2h0Y0tod094K3VJTUJrMXhVaDVFN2c5WmFGRjNodTRWRDRmTUdtZzZrZytybU1BWEk3bU9XdDNhUG1Gc3RTeXorMUl5am1EbkRFVXoyV1ZGREdYb3dQL1djTWpwazJnQTh2Q2ZBZlcxcjdmQWl1UURBYTFjNnl1UnVCYVF5VFJKVjZvZjI5ckJkR2I0bHJRTDVGYTBPZlQyVFRFR3Z5OGpaSHZTRVhzaWJSZWZLUjFIakN5ZE9RNEJDTkwrTGwweWFFSXphUjNUbDcvUitEaGs0NXA2Q0pyTHQyeFhDWFVKTGlVQ1dweVJiMm9pdktXL0toM2dORXo2cTBBTDM3WEVJcHErczdoUTdTWnBZNmd3ZElSaW42WGJWbTdhTWlmbHgxKzB3clJpNEJTdUhwS3EwWTBFcnN1S1BLempmVDlUK2VDOGh0M3AyL1hVZ0dtUXN2Vm5pUGtXS2JDRXYyaWt2Vm5HYmFZVXR6cURBbHJWZWxyZ3hyVldSY0EvNjBBdHdmNEdrb0FkTUdpUE5wb3g1TVl2NlBCcXJYWndhYTBwaThjVDE4T1Z3ZmpnU1Z2UDNUTFFmblNQMTE0T1BXYWJPTFJwMXJPRis2NUwrKzdHc1BqNHA0ZnZuZlNRUVVlVE1PUU9TTzdtZy9kVS81MExJTmRBVGIvTzJBU2VHQWpuajZubFR3ZHVyaDM3OG1ib2VUZXl4ZXY1ODVUVWd4UzExbTNlZXhnbzZYakYxQnFtTEorVlFYMzN3d1YyUDd2Z04rOFUzaXBjeTJlczU3ajduTm5zMGYyWC9MZ01VeVg2ZW4vblFHM1BJYU1XRDJobDlmNGc5ZmN4NnR1ZlpEV2crSC9BeCs1ZFBWQ01lUnhZSHFwY09USWxiT2hDK2lOLzZLSk5tdEFvNTQydW5kNzlnY3ZiWW9TbTNrZDNmOHo0QStIenREVlczeHdLNFF3T25hZkRUMTdmSmU5LzZ4UVNOTDdwUU0rSlcvSStLRTk2cldZTzd3MHYyVDREd042cEM3OStSRjF5ZU1ocWIzblNpeDcvZFpwc3JwMFBmVGczdkY5Vk9EQnhvZG5MK2lpSVNYNURpOXFtTCtZMFB2SFcxclE4UXYwMHFobkVnbXlydDVtUy9ldVhvQ2dUSDBEVlhpcTExbzAwTUhVcFdBVUE4d0tMNFFqNlIvTmdldFVZTU8vQk1aanhmb1g4VER1NExnRTRnc3hObmZWZmZpNElrZW9qd0RZaEVCcm9MSEQwWjBOYUdOWEI0Sml6MTNiaVRxTDVuOEQ3ei8rOEhFdTVzbG1INTlsUTluaU9Vdzh5SE1QSngxd1hEMkJ4NVlCMTdSbUR6Mm1kSmVNOXFNSE9zb2xMdzdZOVQvR2hDa1dyYlgvUTk1ajE5NS9ldHNIZlBuNENYU1ZzTVhDbmlVYkxUZnZzMmZ2bGtvM2IrYjZuaHQzWnNlR3NZTUNuOUtBMWtLeTNHNzFmbVB1YWx1VENzT3dMN21hNVR5VnRscExhbGxXbHBWV2k3YUtCUldjNHV3YzJ4SXpQR1lNMXZ5d2dZd2RCa3BJNjhQTzJyRHBSaXF5RHhGOWlLSkZid3ZxcjNXZmx6MmRPay8ycEFjOGw2QWdmcmw4M3U3bnV1LzdPbEh1MTdyZXJEQkVOeVZqOXl5UWVONkNwSVc3SGtyU08vQ2NmNUpacTY2Q3YrY2lxRDJ6Qzg5MEkwenM0dUh3MksyY3ZGR3BiRkdHaWRNTWFoelZGOEl2VmNLdk9kcklZNGt0c05pTFE3SmFyOVV6dkJpRFFjMDlGc3FacDJNOFpoWHZDd3hldEpCR1dsWjFXYUxSQlJuejkzMVoxKzBDSDFIYVNNTHJYd3ZZUHEzOGFvV0JwdUcwWEthVm4zMGh2S25tYjcwVGNjNmVwTGJpdG1NSEhpckJFMUpmbzhPNlVFUEQxL2daRFZ2Vzk2OEZUQnpOcjgzVWhGcEp6aEhYNjVCTG0yRUVJYnVReEo3RHhHYTFmWGJVUXd0dmNSQ3A4UnN6QXBKM0RDUzhnWE5wRWNmbW1lTENTajBMbzF5REpyektpMXFwbklVazB6S3JwOHhHYktRK20zYmxjRTFJQ1pjVW9vdVowd2dKSTY2R0JKb1dQN2N3TjVaZXpzeVhTaXRWRUxjbWhFbzF0N280a1FQQ09rUUlMWUg3dkYyeVZ3ZmtWa2J2NjUwNVVOTzBkbFlieUJjSkFIQXM0YXZON3I2RFMwTTV6Ykl4TmxPWnljV1MrZlE0em1PN24renE0S0s2bEVFY1JlVnl1R0RqRHB4YjZpc3VwV1pvb3dsRDQxSUJ0MHREN2JDWXp6THp0MFF3eWE4SzJieFVzOFRxRlkraHE0UnVXcFRPZ0FjRHVUY0xBWDVxT0thbUxuMHFzTGg4cVNqbXk4eGlMaGFEemZrUlUzNTJGK2RqT2gzb3Q1SE42RkQ3M2VGa0xMMWR4MVdYOHNtbjZlWEhVdElmc2k3aStBcnpFdTgyUFgyZDBFMXJTN0Q5L245eTl2RGJlNnlrTmJZOHUxZ1NpbXZKR0orYnkxVm5hck5KTEdFMmNQNDAyVzI0ejJNM2dXUGE1T1QzQXJhVmRqeFRaSVFKdVBHTC9QTmlzY0lVbi9Cb2YyNHUwdXJZNy9lMW4vRWtqWTIwUUpiTlEwRzQ1RDRrcDVsZVBrY09wbnJzUFU5cWlleHYrekxtSGk2dHd3amp3SS9IeE5qbWNrNWlxMWxRNEdFaFJOQkp0eGxBK1BQZkRBQ2xqaGJVM05IUXdaU1U4QlpYKzQxYWFmckR4cWRHRm9BcTQ0YUdhV0d5TmR3YjhwbkIxbkpxNlhOTHBualhBbGV1RXZIZDdYWFRaZ0RVaDM4c3RPRHllSm53V09vOWFZcHpHSnhhbGpaYUdXSDIra1ZDRmQ0RVByd1N1QzgvWUEyM1FQZ01xY0lUOUF3TUhEcms4MUhVQ1FCMTRnRHFpNFhvV2hzMkl6c0UybmlBaG9jNkxac2tIT2duVkMwNzlqajJPQkI2ai9pUVlTZklkU01qRCs1WlVVK0VYUEdDdVM5TExkUXQ4dVUrdklMY1VpdllCN0ZsTTg4SDh0eElKRURNVUcvOUdqa0FkQytscVJybEc1Q2tDYTRmaXZjSG1jcmxQQUYrK1hZbk5DRjBkWFlxVHZyd0NKZjNCYTEvR0R2OS84TWRPTlVFNFQ3MzZHMWtZaEZOYWJtbEZBVWdFUi8rZzY2cWQ0RmdrdnBuZk1HNUJ6eXVVTWp2Y3AwRWVMMGVEendxWVN2ZzV1QXVMWVlHaDZTUG5Rb09BbzREZGtnNGV2VG9Qb0NlOFBTdUpnZzd2TTc3R0RFREdhZWh3ZzdrNm9ya1BRSlpyOHRPQlR0c05qbWUxUUE5RWtQNzNmYnRZT3QvdUx1N3U2ZW41K3pacytmT25UcDE0Y0tGY0RnY2lVU1V2MEwrRjNab0VHNkNzRzMvVnJzYkczZ05ieEpHVTFwUzcwZVFkcSs0QmpZQzUvVHUzdDloYVFMd0IyeVhzRTNHWVJuZE1ucTBPR3hwQnJ2OUlSZEZjM3BWUzVNRlYrY3lhdXhDbWVRR3NGSmVmNi9GcFBBN09VektVT0dsVG5ndStrRERWczVFY1EwM3FxM0hMT2JGRWNxcUs0S0lieExtTkdVUjZuZHlVOTdmK1ZvNzNTZk4vWnpDb04yS1Q0TERXMHFmTnIzZFdNWHNQT1EvNHJDWUdEL2JPWmZjQm1FZ0RFT2NFQm5KR0NtWURROExCSklGS0ZkaGdicm9ycjMvSlFvSmlRb0IxK25LaHZsdU1PSm5YdnpNSVJyUFRjK09LNDlmL2VkM3RvZHdKV3BHR1NzdHZYRllzdWJhbW5wNjJxL2VKUEFwRXpOMktUbnByT1ViWWZiaU9CMEZQYy9FYmRkSmQ5VDJXZVNocFQxSGd0Wk1EdlBXb20wbFRWVVZrTnd5Z2hOTEVFMWVCTjBIcmU3cVNLcjA2bGltVUxLckNQQTAzdkdFdUJvNENhTHdhQm1ERXpzSFFlMVJ6MzI4YjE2VDlndWhiVk1sOGF2aHliL0Z5dGVrM1N6UXVhbGFKVS94cytOUTl6aGdselphTnhteTdiejkxTE95MFJCbnRRbDFhQW5oUHc2WnFMdXlFQ2NYeTFTWU53UTh4S3RvRmZab1Nnd1Y4NDB5N1J1bCswS2pEL2ZQZUxGM0xrTno2dTRDRHZHUWovcEZiYWNTTDIzcXlES2NpQkV4VEJHRFhieVRMbSs4bEJlR1pxckZXdHgrZkV2aXRSUEVjKzNuSVZXYzI0Y242WUhPcXNoTlRsVXpRcDdJSndST2hOR1pha1o0ZFdXSm1hYk12STVaaXFoa2RTZ1ZadGVoQlNRUEdERngyVXlxZWhMeGxUcms4MkpEbVdxeW4zWlJZczh6RlRycnZvYjhOOGVMRUhOTEJDV1hlSHRpbm5naTNGOWl6cHA2bTJKZTNHRWlQekIzL0h0N0xZODlXc1JicTBOTG5PN1dVNC9YNVI3Q3RXTG1EaDB6YjR3Zi94UXBxZTJodE43RnczMWNaQTd5WGJ5N0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFMQXpmZ0JLQXlaZFRuVys0Z0FBQUFCSlJVNUVya0pnZ2c9PVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbWFnZXMvbXlhd2FyZDEucG5nXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvOTg1YjY1MGQubXlhd2FyZDIucG5nXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbWFnZXMvbXlhd2FyZDIucG5nXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVBBQUFBRHdDQU1BQUFBSml4bWdBQUFCWWxCTVZFVUFBQUQ4V1NiOFdTYjhjRXY4V1NiOFdTYjhYQ3I4YjByOFdTYjhXU2I4V1NiOFdTYjhXU2I4V1NiOFd5bjhXU2I4V2lqOFdTYjhiMHI4V1NiOFdTYjhXU2I4V1NiOFp6NzhjRXY4V1NiOFdTYjhXU2I4YjByOFd5cjhXU2I4V1NiOFdTYjhiMHI4V1NiOFd5ajhXU2I4V1NiOGJFWDhiMG44WlRuOGNFdjhjRXY4Y0V2OFdTYjhjRXYvLy8vOFd5ajhhRDM4YmtuOGEwVDhYQ3Y4WURIOFpUcjhia2o4WWpiK3lybjhYaTc4YXozLyt2bjhZQy8vOC9EOFpUYjlka3YvNXQ3KzJzLzluSDcvK2ZqLzV0Lyt3S3o5bG5YLzl2TDhhVUgvL2Z6LzkvWC8vUHorMThyOFl6ZjlwWW4vKy9yOFp6MzhZalAvNytyK3JKUDllbEQ4Y0VUOWxITCt0SjM5c1ozOWltZjllMWY5Z0ZqOW1Ycis0TmIvNitiLzZlTCt4YlQvNnVULzVOdiswOFgremI3K3ZLajlvSVQ5blgvOGQxUCt1S1A5cG83OWptdjlpR0wrMGNQK3NKbjloRjc4YzAvOGNrZjhnV0Q5alhEOWtHNzlkazNFSjY5N0FBQUFMSFJTVGxNQVpqeG1LT0lEUEExYzh5dy9GZ2pyMkprbys4NkdzbVlOQnNXN3M0K0NjbTVjVkU4M0pNdUtTZkhlWlZ2SGR1WUFBQXRHU1VSQlZIamE3TUdCQUFBQUFJQ2cvYWtYcVFJQUFBQUFBQUFBQUFBQUFBQUFZSGJzSFFkQ0dBWUM2QVFsS0FtZmJhQ2dBUXEybS91ZmI3c3RFUGdBRTc4YmpPd290cDNUMDVjZ3JQUzR1eWp0d2wxSGFaMEg5c0JhUEhCN2dYTllLR3NKR1EvS2g1SnF3WXR2b3FBVThTcFd5cWtEREFmbEhMRE1jazJkWnBoMml0bGhHeWxtaEcyaW1BbTJUREhaSzl6NEcxNHBab1ZwMC91SE4xaE95amxoR0JxYnBhTmNROXZiVWhHczczOGY5b3ZIanoxN2Uya2JpZ000bmdmcEpvTFhNUWJPQjVHcGpOKzVKQ2ROMG1wMVZkYzRGOFZxTDNTdTdYQjF3clFVd2YrZlZYUHF6bW1hQTJ0eU9uYjVQSWE4Zk9tdnZ4T1NmKzZkMXYvZ3YwdXF3V1JiZ1VSdnorVWIzOC83OWlwbEJocG9ENjRXRDJJMWQySFlyWGR3NWo4b3RJb25lZEJBZC9EdUVZNjFYd0haYlZHOGU2dndub0krN0JpNGRJTUxPSll2QjlPcmozaEk2NGFBSHJhRmtBMmhhUERNM0FTQ3F3RWVvUVk2dUJicTQvTXpOMk5FWk5ibWRRZFQzcXV2MkxZSHVRNEtNUUNZWDhzWW84d3VwQi84UVFobVYzRTM5U0F4WG1rU0FDQlpFdzFRZ0lWWkk4NUtrbUMvR0JRanVuZndwSUVIL01EenZNNEJIbWlXSVRHU2RWQ2ZDK3pVUkFLeVlzVExMQ2NJRHZMbG5ZZ3lnUUhTeEZ4UWV3eXMxRnVZTzArZXl5c2RpbVRyR1VOaGFtbjg0RzRPbEJxWTh5aHd0MjBjZWtjZ0lRZkZXRFNVWG80Zi9MVU1TaDBjS3U3QWs1TFBaN3dIQ1IyajBWNGJhdFBhZ25NdDNuWVBQMjEzK05xcVEwTEVSSkpETzd5d2FxaE5hUXV1OGg4em9DRFlPK0pYeDE3TVRQb1BjNVFCblBLSlZudXVMYmpFMCtvZ3VydkVqeTYzeDkxVUZBQVlGWFBOTElFK2hoNjgrbTNCMS90aDJvazg2QUhmV25uNFZmejRNVW1PSWdtRlB1STZ5bUQ5STcwWEJtK1ZRT0tORzV4RFhIUS9NMkhDRncyMTZUOG1HQndVaHdvVHZtcG9QNVlJbVV5d2k0WWNqbkVzdlZsS0ZseXVWajVkZi90Y3FlUnoyb01aa2xBR0Zocm11RXRUaGtxU1I4c3VvZmRmMmpqVXJEZDJ0QVl6aWlLTDJVWXl5d2FBWmZXM3d3VEJ3VTBIaTd5ZXZtQ2JJcEZMd3NXTVJOUU9qNjROSTA1bUJaSUVuL2xZZGxiVEZHeGJTR2FQZnZUZ2M3Q1JNVWJhZkpIMkN3Qy9wQ1BZamE1bkt5d1R1T0ljckc4cVBxUWxESllWZHRNT0pzZENybUpCVy9JY3ZGMmMwRXU4Z0tRYXpLU3hOYW1OWW1VZEpIcW1LYmhkcjExY05PcHRQRkJMTXppNm1DMDBoR2ZLTEczQjV6K1lPL2ZmcG1FZ2ppTUVTRHdrUUFnRVNDRGVDT0hVc1owSDdzcDRsblZsM2NyYU1kYng2TVplM1dBTUVQOC9TZVBFc2M4SjYyaVVmbjZDa294OWM1YzczNTNuUmVtWFY1ZVQ1ZzB1UnJEbll3UVRrYzBaVUV0c2hnb1NQUFdSSVFIZkY0S2IzMFlWL1A2Sm1YMHM1VkZmcXdtRk10MExoQi80NHhZOEF3dS82bmRSMlE5R0ZkeXBtSG5CWXcrbWpubnBJVE9XNGdmWUhmYzcvSE45TVdTdXExU0RzOEtueHluWVNSSXNjaHBhbklaeXFTOVRrMG53ZU9rK0Y1TVVaMFRCZS9XSWZyK3VzQnRha0xZWkVzcDBzSjZnQ1U2VkdNVUxaa0xKWXZkSVFRdlQwQ0d6bHg0UUNqNTBvNHVMRVF3WnlKN2Q2SUs1Sjk3QmpJYTd4S1pXRmg0YTRnckJSVzlaNnN4R1lmck5FUVQ3UklhZHZINHNhVE5ZRnBQa1puRXZ0ZXdMcGlKUkROUEd4Y3VwU1BEN2tRVmpHenFtaEdtQm1lc1ZNUEkxRTdNTGR6TTJXbDVFWTJSNzRZaUN1ZUtrYmFSRFphL09ISmdSa1ZWVXlJMVQyZlZ3MllKL3pNOTNQcVRwektlSUZqWnVLaEg1SGlqNEE5eFVDWUg5aDduRHRKSUZMMC9OS3J4Tk0vdXBwclFydFFxNHdmUXBoTzBFbDRDbUZoaW1qWW1YUnhHOFdjbmplUzJ2WGNsUlFqdGFhVEtiRkRKTU03TmNPWlRnalpSZzNPam5DdjVTRTNLTUtJR051SmpiQlEzVDVyODhEVmw4aVJUcUlnL3ZTY0dHeWNPN0YxS3dRNnlkWGtUNHRQYW1BM3FWeXNKV01td1dIWjZzckN0eHNFT3Rvb1pwSFZFNzFCRXk3T2RZWElxcklERmIybFFMai9XNGpHUU5TeklJYmh4MlM1YkNJZ3hwV0Nac3NLT2xxR0hhM21leHVxOHE0KzlGc1pibWNZa3hZN3BzTzU0ZXRvZ2xPZWdITnYrWktaaW1JbFh5WndlMGdZb2FwajM3SXB6M1BaTGdRVVdmZzhiN0c3YVJoSXNxOHUzQVN2TXJjSThOTzFPd0sxdVRpWHNUc1BuQkttcVl4cjdIMnFaVFpsOFVTdUpYVmtiZzlUL3lzZXd1aUlmMVd4SDhPN2g3bVdVS2RzUkNpNlhHNEM3b3p4YzJUTU12cCtMVysxTGkwT3R4cDNZSnhmUm14V2Nic1dJKzM0d2ZncVd3Rlh3VXlKU0M0VXZzdVRqdDNBVHIvWG54VUU0WE1FeXJKajJ0dVkvZEdxOVZ2eTBIN3l1TVpDOHFzYnl0MWVud01wbDFkNjAwQi9VZ25hMnFncG05Z2hLbzUydE5MdDlVSklkWFhUazJ6b1VIYkZLOGZ0THZ6OGt1Wm5NSlNWWVhLakZyRzhGbGNsTHg2Y0JLRXdhOHVXcGFjSmhUUHk5L2krTWRRNXBlQ290a3NhNitkRGIzeUtYcjZDalVQbFV5MkFJUHhrUnpKUTVDVVdvS0xkL0JVbkJrdW1EaHNaWFJ4Q1FNOU9jYmNkUytucmRQNjZqbDBtclRyR1JmZXpCMTh4YmpyV1R0ejRkdmNEUFE5Z1BGZ2hkMkl6OS9WV2wyMUo2SVZFY3NNRHRGMk1VbzVDS1FDZlphanM3S1U2TmVqbFRlRFNxUXQ1RmUwaElwOWswWTRBY1dpN0ozSW5obG9iSzRoMkFSQ1NFdWk4SzFNSExHWHN0VGQvNm5BZENkZzQ2NnphSHp6MCtCYm1TVWtkcFlaSnpkcCtHSHZXR2V3ZTZ2c1AxcmhYVGVWajZ2eXN4RUxCTWlmSXR3M1VJUkYrNEF0d2I3cFVmbTNmdlhxcEFuenpEU2FKT0cyNjByVzhUWGRuZUczc3ppVmN5VFpoajZWc0pFRXhZN29lRDFEL3NmOXZzemdaOVhaVG1VZ1NmQ3RkWXNPWCsyZ0NaZTdjZm0rdFRDa09hTHpqT09BTkUybzUzNXVabmhkYS9XNml0Vks4Qno0Z1JYYnc2RDlrbzBFUXI0dFJZNmZVQ1F4R2Y3MU9UT3NBTkFRWGVvc0Ivam1lNnRCblI1L2k0VVl2OEpydXBOUnowNTBrSUptNEd1NWtZdmxaSUhzNVdZejEwd0VBZUIyU2pZOGR1bU5tM2gwTFRydFZuOEdMQlNIczk4MmxaVTdHdytYeHZ5NVdzUDdnSHcxTUFNQmZOVzFNY3RRekNEL2dmNXRsWFZ3dEhCVHNqU3V4cUhCVVFEMDlUU0F3b1diMUZKZ3R2QUJiTjNlc01SSU1BaFZpdmRESEJNZ3JsVm9tQWd4REZ1UmdKNExZeE1jSzY4SnczNFAvbklMMU93MzlEc1p0cU1CS0QrWWZmak1mRHVjR1JMd1dYOC9ERDJxYWtua3hON3FYUDRMWmMyR01Zay8vamc4ZFd5ZmtJOHRjcm4rUk5CYWJWUlRld2xUbzZ0a0VlM1N6Z0RBRHF1QnllQ0VIdVUyT0JxVDhCSGprVnQ5K1NKMGs5NUdIYlpYTEFaeVFUVzdrUVFWKzE2WUUvNUt6cHpkaUxPOGZBOUpyOWhnR2VlSFRMYkVObjF2cGF0M1hwcjRrNXFjUTJCMlpOV1UxOEZtcGZndmNTaDVaMG5yMDNjV1R5WXdNQXNJMUZMaStHT2VRa25FNjltNE11VGROcVNBNWRnTnRPU2phZkZjRHR2dzVvdDlDYXVNRkVucGdVaUhOVkNwTTNneGdaZmkrRU1BWGpzRzFJdmlTNmJuQlBUSWhGMjJrTEV4U1kvcHk3NVo2YWlrVyswd2JKMVVrNU1TeElSUzB6cytUQ1VtVEVXRW0ybWRQWGlMellaSjZZeFd6Y1hoU3RtYkdYaElpUGNNMTV5N2xqWjUxbzZqUnh6d1VnRUljWjczQXl2djNtczNKTkxIWnB2THFnQTRpTUFvNWFraFNUaTVOS3l6cVpsSGpSWFprekx4RU02TFpMNVBPRFp0TVdmUGd4anI5a2N1WXRybTNsQWtxa25UeHlrY2tiVUR1V2NMKzFDYytYRk5DVkJ5M3VwNmd6S2wrTkk1K1Q5TEwxM3pxT2lZZjk4SXgyYTFkTEN4TlFjY2hUZmIyQUVPWC9IZkdMYWRWUXNNUFpDYy9sQXJrelFKaE16ZXFnUWVMMjhFOU5ZckFJVGc3bDhjNDhIdWdlSDdpOEhHSkF5RHhCcnhJMDUxMlJpRDh3U3pPNWh3Nm1hZEdkSW1ZS2QyR2lZR0pwYkxXM0lxOEpNSlFTbUlEb0R5aFNNR0N6cWpIbkxaV2IzZ1BmWW1ua2hrM0VtSGpOVmZDNk14SW8wNDRMRjloeVV5MlFJMWsyTXVWSXpVSmlmU1VaQXhoajlpK09UOEJ1MUhOVmNMdUh5S1lDK05iZkJtblFVN2szRTcwejcyOTRkMndBQXdqQUFHemdpLzM4S1NKVTZzTkRkWHFKVytTRlpKZmM2V2RIUHA5b3kzRXdEQUFBQUFBQUFBQUFBQUFBQUFINXNpY0ZqbHEyMElVQUFBQUFBU1VWT1JLNUNZSUk9XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ltYWdlcy9wcml6ZS5wbmdcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnbW9kdWxlJywgJy4vY2xpcGJvYXJkLWFjdGlvbicsICd0aW55LWVtaXR0ZXInLCAnZ29vZC1saXN0ZW5lciddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGZhY3RvcnkobW9kdWxlLCByZXF1aXJlKCcuL2NsaXBib2FyZC1hY3Rpb24nKSwgcmVxdWlyZSgndGlueS1lbWl0dGVyJyksIHJlcXVpcmUoJ2dvb2QtbGlzdGVuZXInKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1vZCA9IHtcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGZhY3RvcnkobW9kLCBnbG9iYWwuY2xpcGJvYXJkQWN0aW9uLCBnbG9iYWwudGlueUVtaXR0ZXIsIGdsb2JhbC5nb29kTGlzdGVuZXIpO1xuICAgICAgICBnbG9iYWwuY2xpcGJvYXJkID0gbW9kLmV4cG9ydHM7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24gKG1vZHVsZSwgX2NsaXBib2FyZEFjdGlvbiwgX3RpbnlFbWl0dGVyLCBfZ29vZExpc3RlbmVyKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIF9jbGlwYm9hcmRBY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xpcGJvYXJkQWN0aW9uKTtcblxuICAgIHZhciBfdGlueUVtaXR0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGlueUVtaXR0ZXIpO1xuXG4gICAgdmFyIF9nb29kTGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZExpc3RlbmVyKTtcblxuICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgICAgICBpZiAoIXNlbGYpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgICAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gICAgfVxuXG4gICAgdmFyIENsaXBib2FyZCA9IGZ1bmN0aW9uIChfRW1pdHRlcikge1xuICAgICAgICBfaW5oZXJpdHMoQ2xpcGJvYXJkLCBfRW1pdHRlcik7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0cmlnZ2VyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBDbGlwYm9hcmQodHJpZ2dlciwgb3B0aW9ucykge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaXBib2FyZCk7XG5cbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9FbWl0dGVyLmNhbGwodGhpcykpO1xuXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIF90aGlzLmxpc3RlbkNsaWNrKHRyaWdnZXIpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgaWYgYXR0cmlidXRlcyB3b3VsZCBiZSByZXNvbHZlZCB1c2luZyBpbnRlcm5hbCBzZXR0ZXIgZnVuY3Rpb25zXG4gICAgICAgICAqIG9yIGN1c3RvbSBmdW5jdGlvbnMgdGhhdCB3ZXJlIHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgQ2xpcGJvYXJkLnByb3RvdHlwZS5yZXNvbHZlT3B0aW9ucyA9IGZ1bmN0aW9uIHJlc29sdmVPcHRpb25zKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSB0eXBlb2Ygb3B0aW9ucy5hY3Rpb24gPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmFjdGlvbiA6IHRoaXMuZGVmYXVsdEFjdGlvbjtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIG9wdGlvbnMudGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50YXJnZXQgOiB0aGlzLmRlZmF1bHRUYXJnZXQ7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0eXBlb2Ygb3B0aW9ucy50ZXh0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50ZXh0IDogdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICBDbGlwYm9hcmQucHJvdG90eXBlLmxpc3RlbkNsaWNrID0gZnVuY3Rpb24gbGlzdGVuQ2xpY2sodHJpZ2dlcikge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSAoMCwgX2dvb2RMaXN0ZW5lcjIuZGVmYXVsdCkodHJpZ2dlciwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBDbGlwYm9hcmQucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyID0gZS5kZWxlZ2F0ZVRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBuZXcgX2NsaXBib2FyZEFjdGlvbjIuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbih0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0KHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCh0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgIGVtaXR0ZXI6IHRoaXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIENsaXBib2FyZC5wcm90b3R5cGUuZGVmYXVsdEFjdGlvbiA9IGZ1bmN0aW9uIGRlZmF1bHRBY3Rpb24odHJpZ2dlcikge1xuICAgICAgICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZhbHVlKCdhY3Rpb24nLCB0cmlnZ2VyKTtcbiAgICAgICAgfTtcblxuICAgICAgICBDbGlwYm9hcmQucHJvdG90eXBlLmRlZmF1bHRUYXJnZXQgPSBmdW5jdGlvbiBkZWZhdWx0VGFyZ2V0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IGdldEF0dHJpYnV0ZVZhbHVlKCd0YXJnZXQnLCB0cmlnZ2VyKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIENsaXBib2FyZC5wcm90b3R5cGUuZGVmYXVsdFRleHQgPSBmdW5jdGlvbiBkZWZhdWx0VGV4dCh0cmlnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ3RleHQnLCB0cmlnZ2VyKTtcbiAgICAgICAgfTtcblxuICAgICAgICBDbGlwYm9hcmQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIENsaXBib2FyZDtcbiAgICB9KF90aW55RW1pdHRlcjIuZGVmYXVsdCk7XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdWZmaXhcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShzdWZmaXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9ICdkYXRhLWNsaXBib2FyZC0nICsgc3VmZml4O1xuXG4gICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmQ7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGlwYm9hcmQvbGliL2NsaXBib2FyZC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydtb2R1bGUnLCAnc2VsZWN0J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZmFjdG9yeShtb2R1bGUsIHJlcXVpcmUoJ3NlbGVjdCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeShtb2QsIGdsb2JhbC5zZWxlY3QpO1xuICAgICAgICBnbG9iYWwuY2xpcGJvYXJkQWN0aW9uID0gbW9kLmV4cG9ydHM7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24gKG1vZHVsZSwgX3NlbGVjdCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBfc2VsZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NlbGVjdCk7XG5cbiAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgdmFyIENsaXBib2FyZEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBDbGlwYm9hcmRBY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaXBib2FyZEFjdGlvbik7XG5cbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLmluaXRTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmVzIGJhc2UgcHJvcGVydGllcyBwYXNzZWQgZnJvbSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG5cblxuICAgICAgICBDbGlwYm9hcmRBY3Rpb24ucHJvdG90eXBlLnJlc29sdmVPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyID0gb3B0aW9ucy5lbWl0dGVyO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlciA9IG9wdGlvbnMudHJpZ2dlcjtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAnJztcbiAgICAgICAgfTtcblxuICAgICAgICBDbGlwYm9hcmRBY3Rpb24ucHJvdG90eXBlLmluaXRTZWxlY3Rpb24gPSBmdW5jdGlvbiBpbml0U2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmFrZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFyZ2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgQ2xpcGJvYXJkQWN0aW9uLnByb3RvdHlwZS5zZWxlY3RGYWtlID0gZnVuY3Rpb24gc2VsZWN0RmFrZSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBpc1JUTCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpID09ICdydGwnO1xuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZha2UoKTtcblxuICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVGYWtlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlciA9IGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2spIHx8IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgLy8gUHJldmVudCB6b29taW5nIG9uIGlPU1xuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5mb250U2l6ZSA9ICcxMnB0JztcbiAgICAgICAgICAgIC8vIFJlc2V0IGJveCBtb2RlbFxuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5ib3JkZXIgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudCBvdXQgb2Ygc2NyZWVuIGhvcml6b250YWxseVxuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQgdG8gdGhlIHNhbWUgcG9zaXRpb24gdmVydGljYWxseVxuICAgICAgICAgICAgdmFyIHlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHdpbmRvdy5zY3JvbGxUbygwLCB5UG9zaXRpb24pKTtcbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUudG9wID0geVBvc2l0aW9uICsgJ3B4JztcblxuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS52YWx1ZSA9IHRoaXMudGV4dDtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZha2VFbGVtKTtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAoMCwgX3NlbGVjdDIuZGVmYXVsdCkodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ2xpcGJvYXJkQWN0aW9uLnByb3RvdHlwZS5yZW1vdmVGYWtlID0gZnVuY3Rpb24gcmVtb3ZlRmFrZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZha2VIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmFrZUVsZW0pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIENsaXBib2FyZEFjdGlvbi5wcm90b3R5cGUuc2VsZWN0VGFyZ2V0ID0gZnVuY3Rpb24gc2VsZWN0VGFyZ2V0KCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAoMCwgX3NlbGVjdDIuZGVmYXVsdCkodGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5jb3B5VGV4dCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIENsaXBib2FyZEFjdGlvbi5wcm90b3R5cGUuY29weVRleHQgPSBmdW5jdGlvbiBjb3B5VGV4dCgpIHtcbiAgICAgICAgICAgIHZhciBzdWNjZWVkZWQgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3VjY2VlZGVkID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQodGhpcy5hY3Rpb24pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VlZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ2xpcGJvYXJkQWN0aW9uLnByb3RvdHlwZS5oYW5kbGVSZXN1bHQgPSBmdW5jdGlvbiBoYW5kbGVSZXN1bHQoc3VjY2VlZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChzdWNjZWVkZWQgPyAnc3VjY2VzcycgOiAnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbixcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnNlbGVjdGVkVGV4dCxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb246IHRoaXMuY2xlYXJTZWxlY3Rpb24uYmluZCh0aGlzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ2xpcGJvYXJkQWN0aW9uLnByb3RvdHlwZS5jbGVhclNlbGVjdGlvbiA9IGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ2xpcGJvYXJkQWN0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhDbGlwYm9hcmRBY3Rpb24sIFt7XG4gICAgICAgICAgICBrZXk6ICdhY3Rpb24nLFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/ICdjb3B5JyA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hY3Rpb24gIT09ICdjb3B5JyAmJiB0aGlzLl9hY3Rpb24gIT09ICdjdXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcImFjdGlvblwiIHZhbHVlLCB1c2UgZWl0aGVyIFwiY29weVwiIG9yIFwiY3V0XCInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAndGFyZ2V0JyxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmICh0eXBlb2YgdGFyZ2V0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0YXJnZXQpKSA9PT0gJ29iamVjdCcgJiYgdGFyZ2V0Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjb3B5JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBQbGVhc2UgdXNlIFwicmVhZG9ubHlcIiBpbnN0ZWFkIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnY3V0JyAmJiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKSB8fCB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gWW91IGNhblxcJ3QgY3V0IHRleHQgZnJvbSBlbGVtZW50cyB3aXRoIFwicmVhZG9ubHlcIiBvciBcImRpc2FibGVkXCIgYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiB2YWx1ZSwgdXNlIGEgdmFsaWQgRWxlbWVudCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gQ2xpcGJvYXJkQWN0aW9uO1xuICAgIH0oKTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0gQ2xpcGJvYXJkQWN0aW9uO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xpcGJvYXJkL2xpYi9jbGlwYm9hcmQtYWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImZ1bmN0aW9uIHNlbGVjdChlbGVtZW50KSB7XG4gICAgdmFyIHNlbGVjdGVkVGV4dDtcblxuICAgIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBlbGVtZW50Lm5vZGVOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBlbGVtZW50LnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsZW1lbnQpO1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG5cbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gc2VsZWN0aW9uLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZWxlY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zZWxlY3Qvc3JjL3NlbGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3RpbnktZW1pdHRlci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXMgPSByZXF1aXJlKCcuL2lzJyk7XG52YXIgZGVsZWdhdGUgPSByZXF1aXJlKCdkZWxlZ2F0ZScpO1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhbGwgcGFyYW1zIGFuZCBjYWxscyB0aGUgcmlnaHRcbiAqIGxpc3RlbmVyIGZ1bmN0aW9uIGJhc2VkIG9uIGl0cyB0YXJnZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRhcmdldCAmJiAhdHlwZSAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGlmICghaXMuc3RyaW5nKHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5mbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcmQgYXJndW1lbnQgbXVzdCBiZSBhIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzLm5vZGUodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZSh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMubm9kZUxpc3QodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZUxpc3QodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLnN0cmluZyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5TZWxlY3Rvcih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcsIEhUTUxFbGVtZW50LCBIVE1MQ29sbGVjdGlvbiwgb3IgTm9kZUxpc3QnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhIEhUTUwgZWxlbWVudFxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGUobm9kZSwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50c1xuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn0gbm9kZUxpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlTGlzdChub2RlTGlzdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgc2VsZWN0b3JcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3RlblNlbGVjdG9yKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RlbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2dvb2QtbGlzdGVuZXIvc3JjL2xpc3Rlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgSFRNTCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZUxpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmICh0eXBlID09PSAnW29iamVjdCBOb2RlTGlzdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXScpXG4gICAgICAgICYmICgnbGVuZ3RoJyBpbiB2YWx1ZSlcbiAgICAgICAgJiYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCBleHBvcnRzLm5vZGUodmFsdWVbMF0pKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLnN0cmluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmc7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLmZuID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdHlwZSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9nb29kLWxpc3RlbmVyL3NyYy9pcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2xvc2VzdCA9IHJlcXVpcmUoJy4vY2xvc2VzdCcpO1xuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IG1hdGNoIGFuZCBpbnZva2VzIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBsaXN0ZW5lcihlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChlLmRlbGVnYXRlVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGVsZWdhdGUvc3JjL2RlbGVnYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKEVsZW1lbnQgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBlbGVtZW50O1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGVsZWdhdGUvc3JjL2Nsb3Nlc3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==