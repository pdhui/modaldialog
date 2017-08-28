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
	    title: '中奖啦！',
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
	ModalDialog.alertElectronicDlg = function (context, title, okFn, cancelFn, btText1) {
	
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
	    title: title != null ? title : '中奖啦！',
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
	    title: '中奖啦！',
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

	module.exports = "data:image/png;base64,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"

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlMDVlNjNjYmJlMWVjNjk1NDA2YyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFzaEhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9kaWFsb2cubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RsZ3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd3JhcElucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ByaXplVG1wbC5odG1sIiwid2VicGFjazovLy8uL3NyYy92aWV3L2VsZWNwcml6ZVRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9hY3R1YWxQcml6ZVRtcGwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL215YXdhcmQxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL215YXdhcmQyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ByaXplLnBuZyIsIndlYnBhY2s6Ly8vLi9+L2NsaXBib2FyZC9saWIvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL34vY2xpcGJvYXJkL2xpYi9jbGlwYm9hcmQtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vc2VsZWN0L3NyYy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9nb29kLWxpc3RlbmVyL3NyYy9saXN0ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9nb29kLWxpc3RlbmVyL3NyYy9pcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlbGVnYXRlL3NyYy9kZWxlZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JDQSxLQUFJLGNBQWMsb0JBQVEsQ0FBUixDQUFsQjtBQUNBLEtBQUksU0FBUyxvQkFBUSxDQUFSLENBQWI7QUFDQSxLQUFJLFFBQVEsb0JBQVEsQ0FBUixDQUFaO0FBQ0EsS0FBSSxTQUFTLG9CQUFRLEVBQVIsQ0FBYjtBQUNBLEtBQUksU0FBUyxvQkFBUSxFQUFSLENBQWI7QUFDQSxLQUFJLFFBQVEsb0JBQVEsRUFBUixDQUFaO0FBQ0EsS0FBSSxZQUFZLG9CQUFRLEVBQVIsQ0FBaEI7O0FBRUEsS0FBSSxVQUFVO0FBQ1osWUFBUyxFQURHO0FBRVosYUFGWSxzQkFFRCxLQUZDLEVBRUssRUFGTCxFQUVRLFFBRlIsRUFFaUI7QUFDM0IsVUFBSyxTQUFMLENBQWUsV0FBZixDQUEyQixNQUFNLGFBQU4sQ0FBb0Isa0JBQWtCLEVBQWxCLEdBQXVCLHlCQUF2QixHQUFrRCxLQUFsRCxHQUEwRCxPQUE5RSxDQUEzQjtBQUNBLFVBQUssT0FBTCxDQUFhLEVBQWIsSUFBbUIsUUFBbkI7QUFDQSxZQUFPLElBQVA7QUFDRCxJQU5XO0FBT1osT0FQWSxrQkFPTjtBQUNKLFVBQUssU0FBTCxHQUFpQixNQUFNLGFBQU4sQ0FBb0Isb0VBQXBCLENBQWpCOztBQUVBLGNBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsS0FBSyxTQUEvQjs7QUFFQSxXQUFNLFNBQU4sQ0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLG9CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFtQixPQUFPO0FBQzFCOzs7QUFHQTtBQUNBLG1GQUFrRjs7QUFFbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLEVBQUMsRTs7Ozs7O0FDM05EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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ImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZTA1ZTYzY2JiZTFlYzY5NTQwNmNcbiAqKi8iLCIvLyBpbXBvcnQgaGFzaEhpc3RvcnkgZnJvbSAnLi4vaGFzaEhpc3RvcnkuanMnO1xyXG52YXIgaGFzaEhpc3RvcnkgPSByZXF1aXJlKCcuLi9oYXNoSGlzdG9yeS5qcycpO1xyXG52YXIgZGlhbG9nID0gcmVxdWlyZSgnLi4vaW5kZXguanMnKTtcclxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vZG9tLmpzJyk7XHJcbnZhciBhd2FyZDEgPSByZXF1aXJlKCcuLi9pbWFnZXMvbXlhd2FyZDEucG5nJyk7XHJcbnZhciBhd2FyZDIgPSByZXF1aXJlKCcuLi9pbWFnZXMvbXlhd2FyZDIucG5nJyk7XHJcbnZhciBwcml6ZSA9IHJlcXVpcmUoJy4uL2ltYWdlcy9wcml6ZS5wbmcnKTtcclxudmFyIENsaXBib2FyZCA9IHJlcXVpcmUoJ2NsaXBib2FyZCcpO1xyXG5cclxudmFyIGV4YW1wbGUgPSB7XHJcbiAgX2V2ZW50czoge30sXHJcbiAgYWRkRXhhbXBsZSh2YWx1ZSxpZCxjYWxsYmFjayl7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh1dGlscy5jcmVhdGVIdG1sRG9tKCc8bGkgZGF0YS1pZD1cIicgKyBpZCArICdcIiBzdHlsZT1cInBhZGRpbmc6NXB4O1wiPicrIHZhbHVlICsgJzwvbGk+JykpO1xyXG4gICAgdGhpcy5fZXZlbnRzW2lkXSA9IGNhbGxiYWNrO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSxcclxuICBpbml0KCl7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZUh0bWxEb20oJzx1bCBjbGFzcz1cImV4YW1wbGVMaXN0XCIgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7XCI+PC91bD4nKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuXHJcbiAgICB1dGlscy5iaW5kRXZlbnQodGhpcy5jb250YWluZXIsJ2NsaWNrJywgdGhpcy5kaXNwYXRjaEV2ZW50LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgZGlzcGF0Y2hFdmVudChldnQpe1xyXG4gICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQsXHJcbiAgICAgICAgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgaWYoISF0aGlzLl9ldmVudHNbaWRdKXtcclxuICAgICAgdGhpcy5fZXZlbnRzW2lkXSgpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuZXhhbXBsZS5pbml0KCk7XHJcbmV4YW1wbGUuYWRkRXhhbXBsZSgn5LiN5bim5qCH6aKYLeehruiupOahhjLooYwnLCdjb25maXJtMicsZnVuY3Rpb24oKXtcclxuXHJcbiAgZGlhbG9nLmNvbmZpcm0oJ+aJk+W8gOKAnOaQuueoi+KAneWuouaIt+err++8jOi/lOWbnuacrOmhteeri+WNs+WinuWKoDPmrKHmir3lpZbmnLrkvJrjgIIgJyxudWxsLFwiXCIsJ+S4jeS6hicsJ+eri+WNs+aJk+W8gCcpO1xyXG59KS5hZGRFeGFtcGxlKCfkuI3luKbmoIfpopgt56Gu6K6k5qGGM+ihjCcsJ2NvbmZpcm0zJyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuY29uZmlybSgn5omT5byA4oCc5pC656iL4oCd5a6i5oi356uv77yM6L+U5Zue5pys6aG156uL5Y2z5aKeIOWKoDPmrKHmir3lpZbmnLrkvJou6L+U5Zue5pys6aG156uL5Y2z5aKe5YqgM+asoSDmir3lpZbmnLrkvJrjgIIgJyxudWxsLFwiXCIsJ+S4jeS6hicsJ+eri+WNs+aJk+W8gCcpO1xyXG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt5Y+N6aaI6K+05piOJywnZmVlZGJhY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5jb25maXJtKCfmr4/lronoo4XkuIDkuKrlupTnlKjvvIzlpJrlop7liqAx5qyh5oq95aWW5py65LyaICcsbnVsbCxcIuiOt+W+lzHmrKHmir3lpZbmnLrkvJpcIiwn56Gu5a6aJywn57un57ut5a6J6KOFJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+S4jeW4puagh+mimC3mj5DnpLrmoYYnLCdhbGVydCcsZnVuY3Rpb24oKXtcclxuXHJcbiAgZGlhbG9nLmFsZXJ0KCfmj5DkuqTlpLHotKXvvIzor7fnqI3lkI7lho3or5UgJywnJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3ljZXooYzmj5DnpLrmoYYnLCd0bGUtYWxlcnQnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5hbGVydCgn6K+d6LS55bu25pe25Yiw6LSm5Y+v6IO95pyJ6K+05piOJywn6aKG5Y+W5oiQ5YqfJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3kuKTooYzmj5DnpLrmoYYnLCd0bGUtYWxlcnQyJyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuYWxlcnQoJ+ivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYju+8jOivnei0ueW7tuaXtuWIsOi0puWPr+iDveacieivtOaYjuOAgicsJ+mihuWPluaIkOWKnycpO1xyXG59KS5hZGRFeGFtcGxlKCfkuI3luKbmoIfpopgt5aGr5YaZ5omL5py65Y+356CB5qGGJywnY29uZmlybU1vYmlsZScsZnVuY3Rpb24oKXtcclxuXHJcbiAgZGlhbG9nLmNvbmZpcm1Nb2JpbGUobnVsbCwoKT0+e1xyXG4gICAgZGlhbG9nLmFsZXJ0KCfor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7vvIzor53otLnlu7bml7bliLDotKblj6/og73mnInor7TmmI7jgIInLCfpooblj5bmiJDlip8nKTtcclxuICB9KTtcclxufSkuYWRkRXhhbXBsZSgn5LiN5bim5qCH6aKYLeW3suWhq+WGmeaJi+acuuWPt+eggeahhicsJ2hhc0NvbmZpcm1Nb2JpbGUnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5jb25maXJtTW9iaWxlKDEzMjEyMzQxMjM0LG51bGwsbnVsbCx0cnVlKTtcclxufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeaIkeeahOWlluWTgeahhuWkmuS4qicsJ215QXdhcmRzJyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuYWxlcnRBd2FyZExpc3QoW1xyXG4gICAge2ltZ1VybDphd2FyZDEsbmFtZTon6K+d6LS5NTDlhYMnLHR5cGU6J2NhbGxfY2hhcmdlJyxoYXNjb21maXJtOnRydWUscGhvbmU6ICcxMjMxMjM0MTIzNCd9LFxyXG4gICAge2ltZ1VybDphd2FyZDEsbmFtZTon6K+d6LS5NTDlhYMnLHR5cGU6J2NhbGxfY2hhcmdlJ30sXHJcbiAgICB7XHJcbiAgICAgIGltZ1VybDphd2FyZDEsXHJcbiAgICAgIG5hbWU6J+mtheaXj+S8mOaDoOWIuCAyMDAg5YWDJyxcclxuICAgICAgdHlwZTonZWxlY3Ryb25pYycsXHJcbiAgICAgIHZvdWNoZXI6ICdET1JLRTI4MDQ4MjIyODIzOjEyODg3NTcwMDk5JyxcclxuICAgICAgZGVzYzogJ+mtheaXj+S8mOaDoOWIuCAyMDAg5YWDJyxcclxuICAgICAgd2luTWVzc2FnZTogJ+S9v+eUqOaWueazle+8muWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+vXFxyXFxu5L2/55So5pa55rOV77ya5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj68nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWdVcmw6YXdhcmQxLFxyXG4gICAgICBuYW1lOifkuIDkuKrnoIEt6a2F5peP5LyY5oOg5Yi4IDIwMCDlhYMnLFxyXG4gICAgICB0eXBlOidlbGVjdHJvbmljJyxcclxuICAgICAgdm91Y2hlcjogJ0RPUktFMjgwNDgyMjI4MjMnLFxyXG4gICAgICBkZXNjOiAn6a2F5peP5LyY5oOg5Yi4IDIwMCDlhYMnLFxyXG4gICAgICB3aW5NZXNzYWdlOiAn5L2/55So5pa55rOV77ya5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj69cXHJcXG7kvb/nlKjmlrnms5XvvJrliY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPrydcclxuICAgIH0sXHJcbiAgICB7aW1nVXJsOmF3YXJkMixuYW1lOidQcm8gNicsdHlwZTonYWN0dWFsJ30sXHJcbiAgICB7aW1nVXJsOmF3YXJkMixuYW1lOidQcm8gNicsdHlwZTonYWN0dWFsJyxoYXNjb21maXJtOnRydWUsdmFsdWVzOlsncGFuZGEnLCcxMjMxMjM0MTIzJywn5bm/5Lic55yB54+g5rW35biC6aaZ5rSy5Yy65ZSQ5a625rm+5Ze35Ze35ZWKNjY2J119XSwoaWR4LGl0ZW0sZGF0YSk9PntcclxuICAgICAgY29uc29sZS5sb2coJ29rJyxpZHgsaXRlbSxkYXRhKTtcclxuICAgIH0pO1xyXG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt5oiR55qE5aWW5ZOB5qGG5Lik5LiqJywnbXlBd2FyZHN0d28nLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5hbGVydEF3YXJkTGlzdChbXHJcbiAgICB7aW1nVXJsOmF3YXJkMSxuYW1lOifor53otLk1MOWFgycsdHlwZTonY2FsbF9jaGFyZ2UnLGhhc2NvbWZpcm06dHJ1ZSxwaG9uZTogJzEyMzEyMzQxMjM0J30sXHJcbiAgICB7aW1nVXJsOmF3YXJkMixuYW1lOidQcm8gNicsdHlwZTonYWN0dWFsJ31dKTtcclxufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeaIkeeahOWlluWTgeahhuS4gOS4qicsJ215QXdhcmRzb25lJyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuYWxlcnRBd2FyZExpc3QoW1xyXG4gICAge2ltZ1VybDphd2FyZDEsbmFtZTon6K+d6LS5NTDlhYMnLHR5cGU6J2NhbGxfY2hhcmdlJyxoYXNjb21maXJtOnRydWUscGhvbmU6ICcxMjMxMjM0MTIzNCd9XSk7XHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3mtLvliqjor7TmmI4nLCdydWxlJyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuYWxlcnRSdWxlKCfmtLvliqjml7bpl7TvvJoyMDE2LjExLjE2LTIwMTYuMTEuMThcXG4nK1xyXG4gICAgICAgICAgJzEu5q+P5Liq55So5oi35q+P5aSp5pyJM+atpOaKveWlluacuuS8mu+8jOWPpuWujOaIkOS7u+WKoeWQjuiOt+W+l+abtOWkmuacuuS8muOAglxcbicrXHJcbiAgICAgICAgICAnMi7lrp7nianlpZblk4HlsIblnKjmtLvliqjnu5PmnZ/lkI7nu5/kuIDlj5HmlL7vvIzlr4TpgIHliY3lsIbogZTns7vojrflpZbogIXnoa7orqTmlLbotKflnLDlnYDjgIJcXG4nK1xyXG4gICAgICAgICAgJzMu5pys5qyh5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S6a2F5peP56eR5oqA5pyJ6ZmQ5YWs5Y+45omA5pyJLuWmguacieeWkemXruivt+iBlOezu+WuouacjeS6uuWRmOOAglxcbicrXHJcbiAgICAgICAgICAnNC7lrp7nianlpZblk4HlsIblnKjmtLvliqjnu5PmnZ/lkI7nu5/kuIDlj5HmlL7vvIzlr4TpgIHliY3lsIbogZTns7vojrflpZbogIXnoa7orqTmlLbotKflnLDlnYDjgIJcXG4nK1xyXG4gICAgICAgICAgJzUu5pys5qyh5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S6a2F5peP56eR5oqA5pyJ6ZmQ5YWs5Y+45omA5pyJLuWmguacieeWkemXruivt+iBlOezu+WuouacjeS6uuWRmOOAglxcbicrXHJcbiAgICAgICAgICAnNi7mnKzmrKHmtLvliqjmnIDnu4jop6Pph4rmnYPlvZLprYXml4/np5HmioDmnInpmZDlhazlj7jmiYDmnIku5aaC5pyJ55aR6Zeu6K+36IGU57O75a6i5pyN5Lq65ZGY44CC5pys5qyh5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S6a2F5peP56eR5oqA5pyJ6ZmQ5YWs5Y+45omA5pyJ44CCIDYu5pys5qyh5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S6a2F5peP56eR5oqA5pyJ6ZmQ5YWs5Y+45omA5pyJLuWmguacieeWkemXruivt+iBlOezu+WuouacjeS6uuWRmOOAguacrOasoea0u+WKqOacgOe7iOino+mHiuadg+W9kumtheaXj+enkeaKgOaciemZkOWFrOWPuOaJgOacieOAgiA2LuacrOasoea0u+WKqOacgOe7iOino+mHiuadg+W9kumtheaXj+enkeaKgOaciemZkOWFrOWPuOaJgOaciS7lpoLmnInnlpHpl67or7fogZTns7vlrqLmnI3kurrlkZjjgILmnKzmrKHmtLvliqjmnIDnu4jop6Pph4rmnYPlvZLprYXml4/np5HmioDmnInpmZDlhazlj7jmiYDmnInjgIIgNi7mnKzmrKHmtLvliqjmnIDnu4jop6Pph4rmnYPlvZLprYXml4/np5HmioDmnInpmZDlhazlj7jmiYDmnIku5aaC5pyJ55aR6Zeu6K+36IGU57O75a6i5pyN5Lq65ZGY44CC5pys5qyh5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S6a2F5peP56eR5oqA5pyJ6ZmQ5YWs5Y+45omA5pyJ44CCIDYu5pys5qyh5rS75Yqo5pyA57uI6Kej6YeK5p2D5b2S6a2F5peP56eR5oqA5pyJ6ZmQ5YWs5Y+45omA5pyJLuWmguacieeWkemXruivt+iBlOezu+WuouacjeS6uuWRmOOAguacrOasoea0u+WKqOacgOe7iOino+mHiuadg+W9kumtheaXj+enkeaKgOaciemZkOWFrOWPuOaJgOacieOAgiA2LuacrOasoea0u+WKqOacgOe7iOino+mHiuadg+W9kumtheaXj+enkeaKgOaciemZkOWFrOWPuOaJgOaciS7lpoLmnInnlpHpl67or7fogZTns7vlrqLmnI3kurrlkZjjgILmnKzmrKHmtLvliqjmnIDnu4jop6Pph4rmnYPlvZLprYXml4/np5HmioDmnInpmZDlhazlj7jmiYDmnInjgIIgJyk7XHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3kuK3lpZblkI3ljZUnLCd3aW5uZXJEbGcnLGZ1bmN0aW9uKCl7XHJcblxyXG4gIGRpYWxvZy5hbGVydFdpbm5lckxpc3QoW3tcclxuICAgIG5pY2tOYW1lOiAn5b285bK4LuiKseWHi+mbticsXHJcbiAgICB0aXRsZTogJ0NJTElORS3msoHpup8yLjVM5pm66IO96Z2g6LCx54WyJ1xyXG4gIH0se1xyXG4gICAgbmlja05hbWU6ICflh6DmrKHmt7Hmg4Xlh6DmlqTmg4Xor50nLFxyXG4gICAgdGl0bGU6ICfojrflvpfprYXml48gcHJvIDYg5LiA5Y+wIOaLt+i0nSdcclxuICB9LHtcclxuICAgIG5pY2tOYW1lOiAn5oqK5b+D6YW45b2T5oiQ56yR6K+d6K+0JyxcclxuICAgIHRpdGxlOiAn5ri45oiP5omL5p+ETkdEUyBOMXByb+WPjOmprOi+vumch+WKqCdcclxuICB9LHtcclxuICAgIG5pY2tOYW1lOiAn5Lic5Lqs5be35bC+55qE6Z2S6IuUJyxcclxuICAgIHRpdGxlOiAn6a2F5peP56e75Yqo55S15rqQ77yI5qCH5YeG54mI77yJJ1xyXG4gIH0se1xyXG4gICAgbmlja05hbWU6ICfkuL9Nb25zdGVy5Y2pc+WGpeW9oScsXHJcbiAgICB0aXRsZTogJ+aegei3r+WuoiAoIEdvbHVrIClHMSDmmbrog73ooYzovaborrDlvZXku6onXHJcbiAgfSx7XHJcbiAgICBuaWNrTmFtZTogJ+KXh+KVsOacquadpeOAgeaAjuS5iOadpeOAgicsXHJcbiAgICB0aXRsZTogJ+W5u+WTjUIxMOaXoOe6v+i/kOWKqOiTneeJmSdcclxuICB9XSk7XHJcblxyXG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt6K+d6LS55aWW5ZOBJywnY2hhcmdlRGxnJyxmdW5jdGlvbigpe1xyXG5cclxuICBkaWFsb2cuYWxlcnRWaXJ0dWFsRGxnKHtcclxuICAgICAgaW1nVXJsOiBwcml6ZSxcclxuICAgICAgZGVzYzogJ+ivnei0uTUw5YWDJyxcclxuICAgICAgd2luTWVzc2FnZTogJ+aZuuiDvee9keWPt+egge+8iDEzMOOAgTEzMeOAgTEzMuOAgTE1NeOAgTE1NuetieWPt+aute+8ieS4reWllueUqOaIt++8jOWboOi/kOiQpeWVhuWFheWAvOWPl+mZkOaXoOazleWFheWAvOOAgidcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbigpe1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgKTtcclxufSkuYWRkRXhhbXBsZSgn5bim5qCH6aKYLeiZmuaLn+WIuOWlluWTgScsJ2VsZWN0cm9uaWNEbGcnLGZ1bmN0aW9uKCl7XHJcbiAgZGlhbG9nLmFsZXJ0RWxlY3Ryb25pY0RsZyh7XHJcbiAgICAgIHZvdWNoZXI6ICdET1JLRTI4MDQ4MjIyODIzOjEyODg3NTcwMDk5JyxcclxuICAgICAgd2luTWVzc2FnZTogJ+S9v+eUqOaWueazle+8muWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+vJyxcclxuICAgICAgZGVzYzogJ+e+juWbouS8mOaDoOWIuDUwMOWFgydcclxuICAgIH1cclxuICApO1xyXG59KS5hZGRFeGFtcGxlKCfluKbmoIfpopgt5a6e54mp5aWW5ZOBJywnYWN0dWFsRGxnJyxmdW5jdGlvbigpe1xyXG4gIGRpYWxvZy5hbGVydEFjdHVhbERsZyh7XHJcbiAgICAgIGltZ1VybDogcHJpemUsXHJcbiAgICAgIGRlc2M6ICdteDYg5LiA5Y+wJyxcclxuICAgICAgd2luTWVzc2FnZTogJ+S9v+eUqOaWueazle+8muWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+v5o2i6KGM5ZCn5o2i6KGM5ZCnJ1xyXG4gICAgfVxyXG4gICk7XHJcbn0pLmFkZEV4YW1wbGUoJ+S4jeW4puagh+mimC3loavlhpnlrp7nianlpZblk4HmlLbku7bkurrkv6Hmga8nLCdmaWxsZm9ybURsZycsZnVuY3Rpb24oKXtcclxuICBkaWFsb2cuYWxlcnRQZXJzb25JbmZvRGxnKCk7XHJcbn0pLmFkZEV4YW1wbGUoJ+W4puagh+mimC3kuIDkuKromZrmi5/liLjlpZblk4EnLCdvbmVFbGVjdHJvbmljRGxnJyxmdW5jdGlvbigpe1xyXG4gIGRpYWxvZy5hbGVydEVsZWN0cm9uaWNEbGcoe1xyXG4gICAgICB2b3VjaGVyOiAnRE9SS0UyODA0ODIyMjgyMycsXHJcbiAgICAgIHdpbk1lc3NhZ2U6ICfkvb/nlKjmlrnms5XvvJoxLuWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+vXFxyXFxuMi7liY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPr+S9v+eUqOaWueazle+8muWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+v5L2/55So5pa55rOV77ya5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj6/kvb/nlKjmlrnms5XvvJrliY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPr+S9v+eUqOaWueazle+8muWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+v5L2/55So5pa55rOV77ya5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj6/kvb/nlKjmlrnms5XvvJrliY3ljrvnvo7lm6LvvI3pgJrnlKjliLjlhZHmjaIs6L6T5YWl6K+l5Yi4LOWNs+WPr+S9v+eUqOaWueazle+8muWJjeWOu+e+juWbou+8jemAmueUqOWIuOWFkeaNoizovpPlhaXor6XliLgs5Y2z5Y+v5L2/55So5pa55rOV77ya5YmN5Y67576O5Zui77yN6YCa55So5Yi45YWR5o2iLOi+k+WFpeivpeWIuCzljbPlj68xMScsXHJcbiAgICAgIGRlc2M6ICfnvo7lm6LkvJjmg6DliLg1MDDlhYMnXHJcbiAgICB9XHJcbiAgKTtcclxufSkuYWRkRXhhbXBsZSgn5rWL6K+VbG9hZGluZycsJ2xvYWRpbmcnLGZ1bmN0aW9uKCl7XHJcbiAgICBkaWFsb2cuc2hvd0xvYWRpbmcoKTtcclxuICAgIGRpYWxvZy5zaG93TG9hZGluZygpO1xyXG4gICAgZGlhbG9nLmhpZGVMb2FkaW5nKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIGRpYWxvZy5oaWRlTG9hZGluZygpO1xyXG4gICAgfSwgMTAwMCk7XHJcbn0pLmFkZEV4YW1wbGUoJ+ahhuS4reahhicsJ2RsZ29mZGxnJyxmdW5jdGlvbigpe1xyXG4gIHZhciBpc0FsZXJ0ZWQgPSBmYWxzZTtcclxuICBkaWFsb2cuYWxlcnQoJ+eItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuueeItuahhuWGheWuuScsJ+eItuahhuagh+mimCcsZnVuY3Rpb24oKXtcclxuICAgIGlmKGlzQWxlcnRlZCkgcmV0dXJuO1xyXG5cclxuICAgIGRpYWxvZy5hbGVydCgn5a2Q5qGG5YaF5a65JywnJyk7XHJcblxyXG4gICAgaXNBbGVydGVkID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9KTtcclxufSk7XHJcblxyXG52YXIgdG9vbHMgPSB7XHJcbiAgc3VwcG9ydENvcHk6IHRydWUsXHJcbiAgY29weUFuZEdvOiBmdW5jdGlvbihidG4sdGV4dCx1cmwsb3B0aW9ucyl7XHJcbiAgICB2YXIgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZChidG4sIHtcclxuICAgICAgICB0ZXh0OiBmdW5jdGlvbih0cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgIGNsaXBib2FyZC5kZXN0cm95KCk7XHJcblxyXG4gICAgICBvcHRpb25zLnN1Y2Vzc0NhbGxiYWNrICYmIG9wdGlvbnMuc3VjZXNzQ2FsbGJhY2soKTtcclxuICAgIH0pXHJcblxyXG4gICAgY2xpcGJvYXJkLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY2xpcGJvYXJkLmRlc3Ryb3koKTtcclxuICAgICAgb3B0aW9ucy5mYWlsQ2FsbGJhY2sgJiYgb3B0aW9ucy5mYWlsQ2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNsaXBib2FyZDtcclxuICB9XHJcbn07XHJcblxyXG5kaWFsb2cuY29uZmlnKHtcclxuICB1c2VIYXNoOnRydWUsXHJcbiAgY29weVRvb2w6IHRvb2xzXHJcbn0pO1xyXG5cclxuZGlhbG9nLmFmdGVyTGlzdGVuZXIoZnVuY3Rpb24oZGlhbG9nKXtcclxuICAkKGRpYWxvZy5kaWFsb2dEb20pLmRlbGVnYXRlKCdpbnB1dCx0ZXh0YXJlYScsJ2ZvY3VzJyxmdW5jdGlvbigpe1xyXG4gICAgdmFyIGNoYXJEbGcgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKTtcclxuICAgIGNoYXJEbGcuYXR0cignb3JpdG9wJyxjaGFyRGxnLmNzcygndG9wJykpO1xyXG4gICAgY2hhckRsZy5jc3MoJ3RvcCcsJzMwcHgnKTtcclxuXHJcbiAgfSkuZGVsZWdhdGUoJ2lucHV0LHRleHRhcmVhJywnYmx1cicsZnVuY3Rpb24oZXZ0KXtcclxuICAgIGNvbnNvbGUubG9nKGV2dC50YXJnZXQpXHJcbiAgICB2YXIgY2hhckRsZyA9ICQodGhpcykuY2xvc2VzdCgnLm1vZGFsLWRpYWxvZycpLFxyXG4gICAgICAgIG9yaXRvcCA9IGNoYXJEbGcuYXR0cignb3JpdG9wJyk7XHJcblxyXG4gICAgaWYob3JpdG9wICE9IG51bGwgJiYgb3JpdG9wICE9ICcnKVxyXG4gICAgICBjaGFyRGxnLmNzcygndG9wJyxvcml0b3ApO1xyXG4gIH0pO1xyXG59KVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V4YW1wbGUvZW50cnkuanNcbiAqKi8iLCJpbXBvcnQge2JpbmRFdmVudCx1bkJpbmRFdmVudH0gZnJvbSAnLi9kb20uanMnO1xyXG5cclxuY29uc3QgSGFzaENoYW5nZUV2ZW50ID0gJ2hhc2hjaGFuZ2UnO1xyXG5jb25zdCBxdWVyeV9rZXkgPSAnX2RnX2hhc2gnXHJcblxyXG5jb25zdCBoYXNoSGlzdG9yeSA9IChvcHRpb25zKT0+e1xyXG5cclxuICBsZXQgcHJldkxvY2F0aW9uID0gJycsXHJcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xyXG5cclxuICBjb25zdCBnZXRDdXJyZW50SGFzaFBhdGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICAgICAgICByZWd4ID1uZXcgUmVnRXhwKGBeJHtxdWVyeV9rZXl9PSguKilgKTtcclxuICAgIGxldCBpbmRleCA9IGhyZWYuaW5kZXhPZignIycpLFxyXG4gICAgICAgIHF1ZXJ5SW5kZXgsXHJcbiAgICAgICAgc3RyID0gJycsXHJcbiAgICAgICAgbWF0Y2hlcztcclxuXHJcbiAgICBpZihpbmRleCAhPSAtMSl7XHJcbiAgICAgIHN0ciA9IGhyZWYuc3Vic3RyaW5nKGluZGV4ICsgMSkgfHwgJyc7XHJcbiAgICAgIGlmKHF1ZXJ5SW5kZXggPSBzdHIuaW5kZXhPZignPycpID4gMCl7XHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICAgIG1hdGNoZXMgPSByZWd4LmV4ZWMoc3RyKTtcclxuICAgICAgaWYobWF0Y2hlcyl7XHJcbiAgICAgICAgc3RyID0gbWF0Y2hlc1sxXTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHN0ciA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RvcExpc3RlbmVyID0gKCk9PntcclxuICAgIHVuQmluZEV2ZW50KHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsaXN0ZW5lciA9IChjYWxsYmFjayk9PntcclxuICAgIGxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT5cclxuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGNhbGxiYWNrKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHB1c2hIYXNoUGF0aCA9IChwYXRoKSA9PlxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoXHJcblxyXG4gIGNvbnN0IHJlcGxhY2VIYXNoUGF0aCA9IChwYXRoKSA9PlxyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoXHJcbiAgICApXHJcblxyXG4gIGNvbnN0IGF1dG9VcGRhdGVIYXNoID0gKCk9PntcclxuICAgIGxldCBoYXNoUGF0aCA9IGdldEN1cnJlbnRIYXNoUGF0aCgpKjE7XHJcbiAgICBpZighaGFzaFBhdGgpXHJcbiAgICAgIGhhc2hQYXRoID0gMTtcclxuICAgIGVsc2VcclxuICAgICAgaGFzaFBhdGggKys7XHJcbiAgICBwdXNoSGFzaFBhdGgocXVlcnlfa2V5ICsgJz0nICsgaGFzaFBhdGgpO1xyXG4gICAgcmV0dXJuIGhhc2hQYXRoO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvID0gKG4pID0+IHtcclxuICAgIGlmIChuKVxyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcclxuICB9XHJcbiAgY29uc3QgYmFjayA9ICgpPT57XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVIYXNoQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gZ2V0Q3VycmVudEhhc2hQYXRoKCk7XHJcblxyXG4gICAgaWYgKHByZXZMb2NhdGlvbiA9PT0gY3VycmVudExvY2F0aW9uKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXI9PntcclxuICAgICAgbGlzdGVuZXIoY3VycmVudExvY2F0aW9uLHByZXZMb2NhdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmV2TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XHJcbiAgfVxyXG5cclxuICBiaW5kRXZlbnQod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0Q3VycmVudEhhc2hQYXRoLFxyXG4gICAgbGlzdGVuZXIsXHJcbiAgICBzdG9wTGlzdGVuZXIsXHJcbiAgICBwdXNoSGFzaFBhdGgsXHJcbiAgICByZXBsYWNlSGFzaFBhdGgsXHJcbiAgICBhdXRvVXBkYXRlSGFzaCxcclxuICAgIGdvLFxyXG4gICAgYmFja1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGlzdG9yeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9oYXNoSGlzdG9yeS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGNyZWF0ZUh0bWxEb206IChmdW5jdGlvbiBjcmVhdGVIdG1sKCl7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGh0bWwpe1xyXG4gICAgICB2YXIgdGVtcDtcclxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIHRlbXAgPSBkaXYuY2hpbGRyZW5bMF07XHJcbiAgICAgIGRpdi5yZW1vdmVDaGlsZCh0ZW1wKTtcclxuICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9XHJcbiAgfSkoKSxcclxuICByZXBsYWNlVGVtbGF0ZTogZnVuY3Rpb24oc3RyLGRhdGEpe1xyXG4gICAgdmFyIHJlZ3ggPSBuZXcgUmVnRXhwKC97KC4qPyl9L2cpLFxyXG4gICAgICAgIHRlbXA7XHJcbiAgICB3aGlsZSh0ZW1wID0gcmVneC5leGVjKHN0cikpe1xyXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSh0ZW1wWzBdLGRhdGFbdGVtcFsxXV0gfHwgJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9LFxyXG4gIGJpbmRFdmVudDogZnVuY3Rpb24oZG9tLG5hbWUsZm4pe1xyXG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXJcclxuICAgICAgPyBkb20uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLGZuLGZhbHNlKVxyXG4gICAgICA6IGRvbS5hdHRhY2hFdmVudCgnb24nICsgbmFtZSwgZm4pO1xyXG4gIH0sXHJcbiAgdW5CaW5kRXZlbnQ6IGZ1bmN0aW9uKGRvbSxuYW1lLGZuKXtcclxuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyXHJcbiAgICAgID8gZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSxmbixmYWxzZSlcclxuICAgICAgOiBkb20uZGV0YWNoRXZlbnQoJ29uJyArIG5hbWUsIGZuKTtcclxuICB9LFxyXG4gIGdldFVybFBhcmFtOiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiKF58JilcIiArIGtleSArIFwiPShbXiZdKikoJnwkKVwiLCBcImlcIik7XHJcbiAgICAgIHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcclxuICAgICAgaWYgKHIgIT0gbnVsbCkgcmV0dXJuIGRlY29kZVVSSShyWzJdKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfSxcclxuICBhc3NpZ246IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgdGVtcCA9IGFyZ3VtZW50c1swXTtcclxuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG4gICAgZm9yKHZhciBpPTAsbGVuPWFyZ3MubGVuZ3RoO2k8bGVuO2krKyl7XHJcbiAgICAgIHZhciBpdGVtID0gYXJnc1tpXTtcclxuICAgICAgaWYoIWl0ZW0pXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIGZvcih2YXIgcCBpbiBpdGVtKXtcclxuICAgICAgICBpZihpdGVtLmhhc093blByb3BlcnR5KHApKXtcclxuICAgICAgICAgIHRlbXBbcF0gPSBpdGVtW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbiAgfSxcclxuICBjbG9zZXN0OiBmdW5jdGlvbihkb20sY2xzKXtcclxuICAgIHZhciBjbHNSZWd4ID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMrKScrIGNscyArICcoXFxcXHMrfCQpJyksXHJcbiAgICAgICAgdGFnUmVneCA9IG5ldyBSZWdFeHAoJ14nKyBjbHMgKyAnJCcpLFxyXG4gICAgICAgIHBhcmVudCA9IGRvbTtcclxuXHJcbiAgICBpZih0ZXN0KGRvbSkpXHJcbiAgICAgIHJldHVybiBkb207XHJcblxyXG4gICAgd2hpbGUoISEocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpICYmICBwYXJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPSAnaHRtbCcpe1xyXG4gICAgICBpZih0ZXN0KHBhcmVudCkpe1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3QoZG9tKXtcclxuXHJcbiAgICAgIGlmKCEhZG9tLmNsYXNzTmFtZS5tYXRjaChjbHNSZWd4KSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1lbHNlIGlmKHRhZ1JlZ3gudGVzdChkb20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZG9tLmpzXG4gKiovIiwicmVxdWlyZSgnLi9jc3MvZGlhbG9nLmxlc3MnKTtcclxudmFyIGRvbVV0aWwgPSByZXF1aXJlKCcuL2RvbS5qcycpO1xyXG52YXIgTW9kYWxEaWFsb2cgPSByZXF1aXJlKCcuL21vZGFsLmpzJyk7XHJcbnZhciBoYXNoSGlzdG9yeSA9IHJlcXVpcmUoJy4vaGFzaEhpc3RvcnkuanMnKTtcclxudmFyIFdyYXBNYklwdCA9IHJlcXVpcmUoJy4vd3JhcElucHV0LmpzJyk7XHJcbnZhciBwcml6ZVRtcGwgPSByZXF1aXJlKCcuL3ZpZXcvcHJpemVUbXBsLmh0bWwnKTtcclxudmFyIGVsZVByaXplVG1wbCA9IHJlcXVpcmUoJy4vdmlldy9lbGVjcHJpemVUbXBsLmh0bWwnKTtcclxudmFyIGFjdHVhbFByaXplVG1wbCA9IHJlcXVpcmUoJy4vdmlldy9hY3R1YWxQcml6ZVRtcGwuaHRtbCcpO1xyXG5cclxucHJpemVUbXBsID0gcHJpemVUbXBsLnJlcGxhY2UoL1xcclxcbi9nLCcnKTtcclxuZWxlUHJpemVUbXBsID0gZWxlUHJpemVUbXBsLnJlcGxhY2UoL1xcclxcbi9nLCcnKTtcclxuYWN0dWFsUHJpemVUbXBsID0gYWN0dWFsUHJpemVUbXBsLnJlcGxhY2UoL1xcclxcbi9nLCcnKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUGFyYW1zKHBhcmFtKXtcclxuICAgIHZhciByZXMgPSB7fTtcclxuXHJcbiAgICBmb3IodmFyIHAgaW4gcGFyYW0pe1xyXG4gICAgICBpZihwYXJhbS5oYXNPd25Qcm9wZXJ0eShwKSl7XHJcbiAgICAgICAgaWYodHlwZW9mIHBhcmFtW3BdICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgIHJlc1twXSA9IHBhcmFtW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKXtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBPYmplY3RdJztcclxuICB9XHJcbiAgZnVuY3Rpb24gbm9vcCgpe31cclxuXHJcbiAgTW9kYWxEaWFsb2cuYWxlcnQgPSBmdW5jdGlvbihjb250ZW50LHRpdGxlLGNhbGxiYWNrLGRvbSxjbHMpe1xyXG4gICAgdmFyIGNseiA9IGNvbnRlbnQuY2xhenogPyBjb250ZW50LmNsYXp6IDogKGNscyA/IGNscyA6ICcnKTtcclxuXHJcbiAgICBjbHogKz0gJyBhbGVydC1kaWFsb2cnO1xyXG5cclxuICAgIGlmKHR5cGVvZiBjb250ZW50ICE9PSAnb2JqZWN0Jyl7XHJcbiAgICAgIGNvbnRlbnQgPSBjcmVhdGVQYXJhbXMoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgIG9rQ2FsbGJhY2s6Y2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBkb21cclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudC5va0NhbGxiYWNrID0gY29udGVudC5va0NhbGxiYWNrIHx8IG5vb3A7XHJcblxyXG4gICAgaWYoIWNvbnRlbnQudGl0bGUpXHJcbiAgICAgIGNseiArPSAnIGRsZy1uby10aXRsZSc7XHJcbiAgICBlbHNlXHJcbiAgICAgIGNseiArPSAnIGRsZy1oYXMtdGl0bGUnO1xyXG5cclxuICAgIGNvbnRlbnQuY2xhenogPSBjbHo7XHJcbiAgICByZXR1cm4gTW9kYWxEaWFsb2coY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBNb2RhbERpYWxvZy5jb25maXJtID0gZnVuY3Rpb24oY29udGVudCxzdXJlRm4sdGl0bGUsYnRUZXh0MSxidFRleHQyLGNhbmNlbEZuLGNscyl7XHJcbiAgICB2YXIgY2x6ID0gY29udGVudC5jbGF6eiA/IGNvbnRlbnQuY2xhenogOiAoY2xzID8gY2xzIDogJycpO1xyXG5cclxuICAgIGNseiArPSAnIGNvbmZpcm0tZGlhbG9nJztcclxuXHJcbiAgICBpZih0eXBlb2YgY29udGVudCAhPT0gJ29iamVjdCcpe1xyXG4gICAgICBjb250ZW50ID0gY3JlYXRlUGFyYW1zKHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICBva0NhbGxiYWNrOnN1cmVGbixcclxuICAgICAgICAgICAgICAgICAgY2FuY2VsQ2FsbGJhY2s6Y2FuY2VsRm4sXHJcbiAgICAgICAgICAgICAgICAgIHN1cmVTdHI6IGJ0VGV4dDIsXHJcbiAgICAgICAgICAgICAgICAgIGNhbmNlbFN0cjpidFRleHQxXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCFjb250ZW50LnRpdGxlKVxyXG4gICAgICBjbHogKz0gJyBkbGctbm8tdGl0bGUnO1xyXG4gICAgZWxzZVxyXG4gICAgICBjbHogKz0gJyBkbGctaGFzLXRpdGxlJztcclxuXHJcbiAgICBjb250ZW50Lm9rQ2FsbGJhY2sgPSBjb250ZW50Lm9rQ2FsbGJhY2sgfHwgbm9vcDtcclxuICAgIGNvbnRlbnQuY2FuY2VsQ2FsbGJhY2sgPSBjb250ZW50LmNhbmNlbENhbGxiYWNrIHx8IG5vb3A7XHJcbiAgICBjb250ZW50LmNsYXp6ID0gY2x6O1xyXG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nKGNvbnRlbnQpO1xyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmNvbmZpcm1Nb2JpbGUgPSBmdW5jdGlvbihwaG9uZSxva0ZuLGNhbmNlbEZuLGlzQ29uZmlybSx0aXRsZSxidFRleHQxLGJ0VGV4dDIpe1xyXG4gICAgdmFyIHRlbXBsYXRlID0gJzxkaXYgY2xhc3M9XCJjaGFyZ2UtY29udGVudFwiPjxkaXYgY2xhc3M9XCJjaGFyZ2UtZm9ybVwiPjxpbnB1dCB0eXBlPVwidGVsXCIgY2xhc3M9XCJ2YWxpZC1pbnB1dCBjaGFyZ2UtcGhvbmVcIi8+PGxhYmVsPuaJi+acuuWPt+eggTo8L2xhYmVsPicgK1xyXG4gICAgICAgICAgICAgICAgJzxzdHJvbmcgY2xhc3M9XCJmb3JtLXRpcFwiPuivt+Whq+WGmeato+ehrueahOaJi+acuuWPt+eggScgK1xyXG4gICAgICAgICAgICAgICAgJzwvc3Ryb25nPjwvZGl2PjwvZGl2PicsXHJcbiAgICAgICAgc2V0dGluZ3MsIGRsZyxcclxuICAgICAgICBpbnB1dERvbSx0ZW1wLFxyXG4gICAgICAgIHdyYXBJbnB1dDtcclxuXHJcbiAgICBpZighaXNQbGFpbk9iamVjdChwaG9uZSkpe1xyXG4gICAgICBzZXR0aW5ncyA9IGNyZWF0ZVBhcmFtcyh7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlIHx8ICcnLFxyXG4gICAgICAgIG9rQ2FsbGJhY2s6cHJveHlPa0ZuLFxyXG4gICAgICAgIGNhbmNlbENhbGxiYWNrOnByb3h5Q2FuY2VsRm4sXHJcbiAgICAgICAgc3VyZVN0cjogYnRUZXh0MixcclxuICAgICAgICBjYW5jZWxTdHI6YnRUZXh0MSxcclxuICAgICAgICBwaG9uZTogcGhvbmVcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgc2V0dGluZ3MgPSBwaG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dERvbSA9IHNldHRpbmdzLnNlbGVjdG9yID0gZG9tVXRpbC5jcmVhdGVIdG1sRG9tKHRlbXBsYXRlKTtcclxuICAgIHRlbXAgPSBpbnB1dERvbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cclxuICAgIHNldHRpbmdzLmNsYXp6ID0gJ2NoYXJnZS1kaWFsb2cnO1xyXG5cclxuICAgIGlmKGlzQ29uZmlybSl7XHJcbiAgICAgIGlucHV0RG9tLmNsYXNzTGlzdC5hZGQoJ2hhc2NvbmZpcm0nKTtcclxuICAgICAgaW5wdXREb20ucXVlcnlTZWxlY3RvcignLmZvcm0tdGlwJykudGV4dENvbnRlbnQgPSAn5bey6aKG5aWWJztcclxuICAgICAgdGVtcC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJyx0cnVlKTtcclxuICAgICAgdGVtcC52YWx1ZSA9IHNldHRpbmdzLnBob25lO1xyXG5cclxuICAgICAgc2V0dGluZ3MuY2FuY2VsQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICBkbGcgPSBNb2RhbERpYWxvZy5hbGVydChzZXR0aW5ncyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgd3JhcElucHV0ID0gV3JhcE1iSXB0KHt0YXJnZXQ6IHRlbXB9KTtcclxuICAgICAgZGxnID0gTW9kYWxEaWFsb2cuY29uZmlybShzZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRsZztcclxuXHJcbiAgICBmdW5jdGlvbiBwcm94eU9rRm4oZSl7XHJcbiAgICAgIHZhciBpZm9ybSA9IGlucHV0RG9tLnF1ZXJ5U2VsZWN0b3IoJy5jaGFyZ2UtZm9ybScpO1xyXG5cclxuICAgICAgaWYod3JhcElucHV0KXtcclxuICAgICAgICB3cmFwSW5wdXQuaGFuZGxlS2V5VXAoKTtcclxuICAgICAgICB3cmFwSW5wdXQuaGFuZGxlQ2hhbmdlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoIWlmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZGxnLXN1Y2Nlc3MnKSAmJiAhaXNDb25maXJtKXtcclxuICAgICAgICBpZm9ybS5jbGFzc0xpc3QuYWRkKCdkbGctZXJyb3InKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB3cmFwSW5wdXQgJiYgd3JhcElucHV0LmRlc3Ryb3koKTtcclxuICAgICAgaWYob2tGbiAmJiAhb2tGbi5jYWxsKGRsZyxpZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlLGUpKVxyXG4gICAgICAgIGlucHV0RG9tID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm94eUNhbmNlbEZuKGUpe1xyXG4gICAgICB3cmFwSW5wdXQgJiYgd3JhcElucHV0LmRlc3Ryb3koKTtcclxuICAgICAgY2FuY2VsRm4gJiYgY2FuY2VsRm4uY2FsbChkbGcsZSk7XHJcbiAgICAgIGlucHV0RG9tID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuICBNb2RhbERpYWxvZy5hbGVydEF3YXJkTGlzdCA9IGZ1bmN0aW9uKGRhdGFsaXN0LG9rRm4sY2FuY2VsRm4sb3B0aW9ucyl7XHJcbiAgICB2YXIgYXdhcmRMaXN0SHRtbCA9Wyc8ZGl2IGNsYXNzPVwiZGxnLWF3YXJkLWxpc3RcIj48dWw+J10sXHJcbiAgICAgICAgc2V0dGluZ3MsIHJlc3VsdDtcclxuXHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIHNldHRpbmdzID0gZG9tVXRpbC5hc3NpZ24oY3JlYXRlUGFyYW1zKHtcclxuICAgICAgZGF0YUxpc3Q6ZGF0YWxpc3QsXHJcbiAgICAgIHRpdGxlOiAn5oiR55qE5aWW5ZOBJyxcclxuICAgICAgYXdhcmRIYW5kbGU6IGZ1bmN0aW9uKCl7fVxyXG4gICAgfSksb3B0aW9ucyk7XHJcblxyXG4gICAgc2V0dGluZ3MuY2xhenogPSAnbXlhd2FyZC1kaWFsb2cnO1xyXG5cclxuICAgIHJlc3VsdCA9IHNldHRpbmdzLmRhdGFMaXN0IHx8IFtdO1xyXG5cclxuICAgIGZvcih2YXIgaT0wLCBsZW4gPSByZXN1bHQubGVuZ3RoO2kgPCBsZW47IGkrKyl7XHJcbiAgICAgIHZhciBpdGVtID0gcmVzdWx0W2ldLFxyXG4gICAgICAgICAgdHlwZVZsO1xyXG5cclxuICAgICAgYXdhcmRMaXN0SHRtbC5wdXNoKCc8bGkgZGF0YS1pZHg9XCInICsgaSArICdcIj48aW1nIHNyYz1cIicgKyBpdGVtLmltZ1VybCArICdcIiAvPjxkaXYgY2xhc3M9XCJpdGVtLXRpdGxlXCI+JyArIGl0ZW0ubmFtZSArICc8L2Rpdj48ZW0gZGF0YS1pZD1cImhhbmRsZVByaXplc1wiIGNsYXNzPVwiaXRlbS1vcGVyJyk7XHJcbiAgICAgICAgc3dpdGNoKGl0ZW0udHlwZSl7XHJcbiAgICAgICAgICBjYXNlICdlbGVjdHJvbmljJzpcclxuICAgICAgICAgICAgdHlwZVZsID0gJ+afpeeci+WIuOeggSc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnYWN0dWFsJzpcclxuICAgICAgICAgICAgaWYoaXRlbS5oYXNjb25maXJtKXtcclxuICAgICAgICAgICAgICB0eXBlVmwgPSAn5L+u5pS55Zyw5Z2AJztcclxuICAgICAgICAgICAgICBhd2FyZExpc3RIdG1sLnB1c2goJyBoYXNjb25maXJtJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHR5cGVWbCA9ICfloavlhpnlnLDlnYAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2FsbF9jaGFyZ2UnOlxyXG4gICAgICAgICAgY2FzZSAnbGl1bWlfZGF0YV9yZWNoYXJnZSc6XHJcbiAgICAgICAgICBjYXNlICdtel9tb25leV9yZWNoYXJnZSc6XHJcbiAgICAgICAgICBjYXNlICdtel9kYXRhX3JlY2hhcmdlJzpcclxuICAgICAgICAgICAgaWYoaXRlbS5oYXNjb25maXJtKXtcclxuICAgICAgICAgICAgICB0eXBlVmwgPSAn5p+l55yL5Y+356CBJztcclxuICAgICAgICAgICAgICBhd2FyZExpc3RIdG1sLnB1c2goJyBoYXNjb25maXJtJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHR5cGVWbCA9ICfloavlhpnlj7fnoIEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaWYoaXRlbS5oYXNjb25maXJtKXtcclxuICAgICAgICAgICAgICB0eXBlVmwgPSBpdGVtLnNob3djb25maXJtQnRuIHx8ICfmn6XnnIvkv6Hmga8nO1xyXG4gICAgICAgICAgICAgIGF3YXJkTGlzdEh0bWwucHVzaCgnIGhhc2NvbmZpcm0nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgdHlwZVZsID0gaXRlbS5jb25maXJtQnRuIHx8ICfloavlhpnkv6Hmga8nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgYXdhcmRMaXN0SHRtbC5wdXNoKCdcIiA+JyArIHR5cGVWbCk7XHJcbiAgICAgIGF3YXJkTGlzdEh0bWwucHVzaCgnPC9lbT48L2xpPicpO1xyXG4gICAgfVxyXG4gICAgYXdhcmRMaXN0SHRtbC5wdXNoKCc8L3VsPjwvZGl2PicpO1xyXG5cclxuICAgIHNldHRpbmdzLmNvbnRlbnQgPSBhd2FyZExpc3RIdG1sLmpvaW4oJycpO1xyXG5cclxuICAgIHNldHRpbmdzLmhhbmRsZVByaXplcyA9IGZ1bmN0aW9uKGV2dCl7XHJcbiAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0LFxyXG4gICAgICAgICAgbGlJdGVtID0gZG9tVXRpbC5jbG9zZXN0KHRhcmdldCwnbGknKSxcclxuICAgICAgICAgIGlkeCA9IGxpSXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWR4JyksXHJcbiAgICAgICAgICBoYXNjb25maXJtID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGFzY29uZmlybScpLFxyXG4gICAgICAgICAgYXdhcmRJdGVtID0gcmVzdWx0W2lkeF07XHJcblxyXG4gICAgICB2YXIgcHJveHlPa0ZuID0gb2tGbiAmJiBva0ZuLmJpbmQodGhpcyxpZHgsYXdhcmRJdGVtKSxcclxuICAgICAgICAgIHByb3h5Q2FuY2VsRm4gPSBjYW5jZWxGbiAmJiBjYW5jZWxGbi5iaW5kKHRoaXMsaWR4LGF3YXJkSXRlbSk7XHJcblxyXG4gICAgICBzd2l0Y2goYXdhcmRJdGVtLnR5cGUpe1xyXG4gICAgICAgICAgY2FzZSAnZWxlY3Ryb25pYyc6XHJcbiAgICAgICAgICAgIE1vZGFsRGlhbG9nLmFsZXJ0RWxlY3Ryb25pY0RsZyhhd2FyZEl0ZW0sICcnLHByb3h5T2tGbixwcm94eUNhbmNlbEZuKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdhY3R1YWwnOlxyXG4gICAgICAgICAgICBNb2RhbERpYWxvZy5hbGVydFBlcnNvbkluZm9EbGcocHJveHlPa0ZuLHByb3h5Q2FuY2VsRm4sYXdhcmRJdGVtLnZhbHVlcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2FsbF9jaGFyZ2UnOlxyXG4gICAgICAgICAgY2FzZSAnbGl1bWlfZGF0YV9yZWNoYXJnZSc6XHJcbiAgICAgICAgICBjYXNlICdtel9tb25leV9yZWNoYXJnZSc6XHJcbiAgICAgICAgICBjYXNlICdtel9kYXRhX3JlY2hhcmdlJzpcclxuICAgICAgICAgICAgTW9kYWxEaWFsb2cuY29uZmlybU1vYmlsZShhd2FyZEl0ZW0ucGhvbmUscHJveHlPa0ZuLHByb3h5Q2FuY2VsRm4saGFzY29uZmlybSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgc2V0dGluZ3MuYXdhcmRIYW5kbGUoaWR4LGF3YXJkSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nLmFsZXJ0KHNldHRpbmdzKTtcclxuICB9O1xyXG5cclxuICBsZXQgaXNBbGVydFJ1bGU7XHJcblxyXG4gIE1vZGFsRGlhbG9nLmFsZXJ0UnVsZSA9IGZ1bmN0aW9uKGNvbnRleHQpe1xyXG4gICAgaWYoaXNBbGVydFJ1bGUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBpc0FsZXJ0UnVsZSA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIE1vZGFsRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgICAgIGNsYXp6OiAncnVsZS1kbGcnLFxyXG4gICAgICAgICAgdGl0bGU6ICfmtLvliqjor7TmmI4nLFxyXG4gICAgICAgICAgY29udGVudDogY29udGV4dCxcclxuICAgICAgICAgIG9rQ2FsbGJhY2s6IGlzQWxlcnQsXHJcbiAgICAgICAgICBjYW5jZWxBbGVydDogaXNBbGVydCxcclxuICAgICAgICAgIHVzZUJhY2tncm91bmQ6ICdjYW5jZWxBbGVydCdcclxuICAgICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbGVydCgpe1xyXG4gICAgICBpc0FsZXJ0UnVsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIE1vZGFsRGlhbG9nLmFsZXJ0V2lubmVyTGlzdCA9IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgdmFyIHdpbm5lckxpc3RUbXBsID0gWyc8ZGl2IGNsYXNzPVwiaW5yLXdpbmxpc3RcIj48dWw+J107XHJcblxyXG4gICAgaWYoIWRhdGEpe1xyXG4gICAgICBNb2RhbERpYWxvZy5hbGVydCgn5aSn5aWW6L+Y5rKh6KKr5oq96LWw77yM6LW257Sn5Y+C5LiO5rS75YqoJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IodmFyIGk9MCxsZW49ZGF0YS5sZW5ndGg7IGk8IGxlbjsgaSsrKXtcclxuICAgICAgdmFyIGl0ZW0gPSBkYXRhW2ldXHJcbiAgICAgIHdpbm5lckxpc3RUbXBsLnB1c2goJzxsaT48ZW0+JyArIGl0ZW0ubmlja05hbWUgKyAnPC9lbT4nKTtcclxuICAgICAgd2lubmVyTGlzdFRtcGwucHVzaCgnPGRpdiBjbGFzcz1cInByei10bGVcIj4nICsgaXRlbS50aXRsZSArICc8L2Rpdj48L2xpPicpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbm5lckxpc3RUbXBsLnB1c2goJzwvdWw+PC9kaXY+Jyk7XHJcbiAgICByZXR1cm4gTW9kYWxEaWFsb2cuYWxlcnQod2lubmVyTGlzdFRtcGwuam9pbignJyksJ+S4reWlluWQjeWNlScsbnVsbCxudWxsLCd3aW5uZXItbGlzdC1kbGcnKTtcclxuICB9O1xyXG5cclxuICBNb2RhbERpYWxvZy5hbGVydFZpcnR1YWxEbGcgPSBmdW5jdGlvbihkYXRhLG9rRm4sY2FuY2VsRm4pe1xyXG4gICAgdmFyIHRlbXBsYXRlID0gZG9tVXRpbC5jcmVhdGVIdG1sRG9tKGRvbVV0aWwucmVwbGFjZVRlbWxhdGUocHJpemVUbXBsLGRhdGEpKSxcclxuICAgICAgICBkbGcsXHJcbiAgICAgICAgd3JhcElucHV0O1xyXG5cclxuICAgIHdyYXBJbnB1dCA9IFdyYXBNYklwdCh7dGFyZ2V0OiB0ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpfSk7XHJcbiAgICBkbGcgPSBNb2RhbERpYWxvZy5jb25maXJtKHtcclxuICAgICAgc2VsZWN0b3I6IHRlbXBsYXRlLFxyXG4gICAgICB0aXRsZTogJ+S4reWlluWVpu+8gScsXHJcbiAgICAgIGNsYXp6OiAndmlydHVhbC1kbGcgcHJpemUtZGxnJyxcclxuICAgICAgb2tDYWxsYmFjazpwcm94eU9rRm4sXHJcbiAgICAgIGNhbmNlbENhbGxiYWNrOnByb3h5Q2FuY2VsRm4sXHJcbiAgICAgIHN1cmVTdHI6ICfpooblj5YnLFxyXG4gICAgICBjYW5jZWxTdHI6ICfmmoLkuI3pooblpZYnXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBwcm94eU9rRm4oZSl7XHJcbiAgICAgIHZhciBpZm9ybSA9IHRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5jaGFyZ2UtZm9ybScpO1xyXG5cclxuICAgICAgaWYod3JhcElucHV0KXtcclxuICAgICAgICB3cmFwSW5wdXQuaGFuZGxlS2V5VXAoKTtcclxuICAgICAgICB3cmFwSW5wdXQuaGFuZGxlQ2hhbmdlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCFpZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2RsZy1zdWNjZXNzJykpe1xyXG4gICAgICAgIGlmb3JtLmNsYXNzTGlzdC5hZGQoJ2RsZy1lcnJvcicpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3cmFwSW5wdXQgJiYgd3JhcElucHV0LmRlc3Ryb3koKTtcclxuICAgICAgaWYob2tGbiAmJiAhb2tGbi5jYWxsKGRsZyxkbGcuZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5jaGFyZ2UtcGhvbmUnKS52YWx1ZSxlKSlcclxuICAgICAgICB0ZW1wbGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJveHlDYW5jZWxGbihlKXtcclxuICAgICAgd3JhcElucHV0ICYmIHdyYXBJbnB1dC5kZXN0cm95KCk7XHJcbiAgICAgIGNhbmNlbEZuICYmIGNhbmNlbEZuLmNhbGwoZGxnLGUpO1xyXG4gICAgICB0ZW1wbGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuICBNb2RhbERpYWxvZy5hbGVydEVsZWN0cm9uaWNEbGcgPSBmdW5jdGlvbihjb250ZXh0LHRpdGxlLG9rRm4sY2FuY2VsRm4sYnRUZXh0MSl7XHJcblxyXG4gICAgdmFyIHZvdWNoZXJzID0gY29udGV4dC52b3VjaGVyLnNwbGl0KCc6JyksXHJcbiAgICAgICAgY2x6ID0gJ2VsZWN0cm9uaWMtZGxnIHByaXplLWRsZycsXHJcbiAgICAgICAgdGVtcGxhdGU7XHJcblxyXG4gICAgdmFyIGNvcHlUb29sID0gTW9kYWxEaWFsb2cub3B0aW9ucy5jb3B5VG9vbCxcclxuICAgICAgICBjbGlwYm9hcmQ7XHJcblxyXG4gICAgY29udGV4dC52b3VjaGVyMSA9IHZvdWNoZXJzWzBdO1xyXG4gICAgY29udGV4dC52b3VjaGVyMiA9IHZvdWNoZXJzWzFdO1xyXG5cclxuICAgIGlmKCFjb250ZXh0LnZvdWNoZXIyKVxyXG4gICAgICBjbHogKz0gJyBzaW5nbGUtdGlja2V0JztcclxuXHJcbiAgICB0ZW1wbGF0ZSA9IGRvbVV0aWwucmVwbGFjZVRlbWxhdGUoZWxlUHJpemVUbXBsLGNvbnRleHQpO1xyXG5cclxuICAgIGlmKGNvcHlUb29sLnN1cHBvcnRDb3B5ICYmICF2b3VjaGVyc1sxXSl7XHJcbiAgICAgIGJ0VGV4dDEgPSAn5aSN5Yi25bm25YWR5o2iJztcclxuICAgICAgY2xpcGJvYXJkID0gY29weVRvb2wuY29weUFuZEdvKCcubW9kYWwtZGlhbG9nIC5zdXJlLWJ0bicsIHZvdWNoZXJzWzBdKTtcclxuICAgIH1cclxuICAgIE1vZGFsRGlhbG9nLmNvbmZpcm0oe1xyXG4gICAgICBjb250ZW50OiB0ZW1wbGF0ZSxcclxuICAgICAgdGl0bGU6IHRpdGxlICE9IG51bGwgPyB0aXRsZSA6ICfkuK3lpZbllabvvIEnLFxyXG4gICAgICBjbGF6ejogY2x6LFxyXG4gICAgICBva0NhbGxiYWNrOm9rRm4sXHJcbiAgICAgIGNhbmNlbENhbGxiYWNrOigpPT57XHJcbiAgICAgICAgY2xpcGJvYXJkICYmIGNsaXBib2FyZC5kZXN0cm95KCk7XHJcbiAgICAgICAgcmV0dXJuIGNhbmNlbEZuICYmIGNhbmNlbEZuKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHN1cmVTdHI6IGJ0VGV4dDEgfHwgJ+eri+WNs+S9v+eUqCcsXHJcbiAgICAgIGNhbmNlbFN0cjogJ+ehruWumidcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgTW9kYWxEaWFsb2cuYWxlcnRBY3R1YWxEbGcgPSBmdW5jdGlvbihkYXRhLG9rRm4sY2FuY2VsRm4pe1xyXG4gICAgdmFyIHRlbXBsYXRlID0gZG9tVXRpbC5yZXBsYWNlVGVtbGF0ZShhY3R1YWxQcml6ZVRtcGwsZGF0YSk7XHJcblxyXG4gICAgTW9kYWxEaWFsb2cuY29uZmlybSh7XHJcbiAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlLFxyXG4gICAgICB0aXRsZTogJ+S4reWlluWVpu+8gScsXHJcbiAgICAgIGNsYXp6OiAnYWN0dWFsLWRsZyBwcml6ZS1kbGcnLFxyXG4gICAgICBva0NhbGxiYWNrOnRvRmlsbEZvcm0sXHJcbiAgICAgIGNhbmNlbENhbGxiYWNrOmNhbmNlbEZuLFxyXG4gICAgICBzdXJlU3RyOiAn5aGr5YaZ5Zyw5Z2AJyxcclxuICAgICAgY2FuY2VsU3RyOiAn5pqC5LiN6aKG5aWWJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9GaWxsRm9ybSgpe1xyXG4gICAgICBNb2RhbERpYWxvZy5hbGVydFBlcnNvbkluZm9EbGcob2tGbixjYW5jZWxGbilcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBNb2RhbERpYWxvZy5hbGVydFBlcnNvbkluZm9EbGcgPSBmdW5jdGlvbihva0ZuLGNhbmNlbEZuLHZhbHVlcyxmb3JtRmllbGQsYnRUZXh0MSxidFRleHQyKXtcclxuICAgIHZhciBpbmZvRm9ybUh0bWwgPSBbXCI8Zm9ybT5cIl0sXHJcbiAgICAgICAgaW5wdXRzLHZhbHVlcyxzZXR0aW5ncyxpbmZvRm9ybURvbSxcclxuICAgICAgICBkbGcsXHJcbiAgICAgICAgdmFsaWRJbnB1dHMgPSBbXTtcclxuXHJcbiAgICB2YXIgbWF4V1Blckw7XHJcblxyXG4gICAgaWYoIWlzUGxhaW5PYmplY3Qob2tGbikpe1xyXG4gICAgICBzZXR0aW5ncyA9IGNyZWF0ZVBhcmFtcyh7XHJcbiAgICAgICAgZm9ybUZpZWxkOmZvcm1GaWVsZCxcclxuICAgICAgICBzdXJlU3RyOiBidFRleHQyLFxyXG4gICAgICAgIGNhbmNlbFN0cjpidFRleHQxLFxyXG4gICAgICAgIHZhbHVlczp2YWx1ZXMgfHwgW11cclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgc2V0dGluZ3MgPSBva0ZuO1xyXG4gICAgICBva0ZuID0gc2V0dGluZ3Mub2tDYWxsYmFjaztcclxuICAgICAgY2FuY2VsRm4gPSBzZXR0aW5ncy5jYW5jZWxDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmb3JtRmllbGQgPSBzZXR0aW5ncy5mb3JtRmllbGQgPSBzZXR0aW5ncy5mb3JtRmllbGQgfHwgW1xyXG4gICAgICAgICAgICB7bmFtZToncmVjTmFtZScsdmFsdWU6J+iBlCDns7sg5Lq6JyxvcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGtleURvd25WYWxpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtleVVwVmFsaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VWYWxpZDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge25hbWU6J21vYmlsZXBob25lJyx2YWx1ZTon5omL5py65Y+356CBJyxlcnJNc2c6ICfor7floavlhpnmraPnoa7nmoTmiYvmnLrlj7fnoIEnLGJldmFsaWQ6IHRydWUsb3B0aW9uOntpbml0VmFsaWQ6J2hhbmRsZUtleVVwJ319LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZToncmVjQWRkcmVzcycsdmFsdWU6J+aUtui0p+WcsOWdgCcsZXJyTXNnOiAn6K+35aGr5YaZ5q2j56Gu55qE5Zyw5Z2AJyxtdWx0aUxpbmU6dHJ1ZSxyZXF1aXJlZDp0cnVlLGluaXRWYWxpZDonaGFuZGxlQ2hhbmdlJyxtaW5MZW46OCxcclxuICAgICAgICAgICAgICBvcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGtleURvd25WYWxpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtleVVwVmFsaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VWYWxpZDogZnVuY3Rpb24oZXZ0LHZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+PSA4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXTtcclxuICAgIHNldHRpbmdzLmNsYXp6ID0gJ3BlcnNvbmluZm8tZGlhbG9nIGNoYXJnZS1kaWFsb2cnO1xyXG4gICAgc2V0dGluZ3MuaGVhZGVyID0gJyc7XHJcblxyXG4gICAgZm9yKHZhciBpPTAsIGxlbiA9IGZvcm1GaWVsZC5sZW5ndGg7aSA8IGxlbjsgaSsrKXtcclxuICAgICAgdmFyIGl0ZW0gPSBmb3JtRmllbGRbaV0sXHJcbiAgICAgICAgICBiZVZhbGlkID0gJyc7XHJcblxyXG4gICAgICBpZihpdGVtLmJldmFsaWQpe1xyXG4gICAgICAgIGJlVmFsaWQgPSAnIGJldmFsaWQnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGl0ZW0ucmVxdWlyZWQpe1xyXG4gICAgICAgIGJlVmFsaWQgKz0gJyByZXF1aXJlZCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGluZm9Gb3JtSHRtbC5wdXNoKCc8ZGl2IGNsYXNzPVwiY2hhcmdlLWZvcm0nICsgYmVWYWxpZCArICdcIj4nKTtcclxuICAgICAgaWYoaXRlbS5tdWx0aUxpbmUpe1xyXG4gICAgICAgIGluZm9Gb3JtSHRtbC5wdXNoKCc8c3BhbiBjbGFzcz1cImhpZGRlbnR4dCAnICsgaXRlbS5uYW1lICsgJ19oaWRkZW5cIj48L3NwYW4+Jyk7XHJcbiAgICAgICAgaW5mb0Zvcm1IdG1sLnB1c2goJzx0ZXh0YXJlYSBjbGFzcz1cInZhbGlkLWlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiJyArIGl0ZW0ubmFtZSArICdcIiByb3dzPVwiMVwiPjwvdGV4dGFyZWE+Jyk7XHJcbiAgICAgIH1lbHNlXHJcbiAgICAgICAgaW5mb0Zvcm1IdG1sLnB1c2goJzxpbnB1dCBjbGFzcz1cInZhbGlkLWlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiJyArIGl0ZW0ubmFtZSArICdcIi8+Jyk7XHJcblxyXG4gICAgICBpbmZvRm9ybUh0bWwucHVzaCgnPGxhYmVsPicpO1xyXG4gICAgICBpbmZvRm9ybUh0bWwucHVzaChpdGVtLnZhbHVlICsgJzwvbGFiZWw+Jyk7XHJcblxyXG4gICAgICBpZihpdGVtLmVyck1zZylcclxuICAgICAgICBpbmZvRm9ybUh0bWwucHVzaCgnPHN0cm9uZyBjbGFzcz1cImZvcm0tdGlwXCI+JyArIGl0ZW0uZXJyTXNnICsgJzwvc3Ryb25nPicpO1xyXG5cclxuICAgICAgaW5mb0Zvcm1IdG1sLnB1c2goJzwvZGl2PicpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZm9Gb3JtSHRtbC5wdXNoKFwiPC9mb3JtPlwiKTtcclxuXHJcbiAgICBpbmZvRm9ybURvbSA9IGRvbVV0aWwuY3JlYXRlSHRtbERvbShpbmZvRm9ybUh0bWwuam9pbignJykpO1xyXG5cclxuICAgIGlucHV0cyA9IGluZm9Gb3JtRG9tLnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWxpZC1pbnB1dCcpO1xyXG4gICAgdmFsdWVzID0gc2V0dGluZ3MudmFsdWVzO1xyXG4gICAgZm9yKHZhciBpPTAsbGVuPWlucHV0cy5sZW5ndGg7aTxsZW47aSsrKXtcclxuICAgICAgdmFyIGlucHV0SXRlbSA9IGlucHV0c1tpXSxcclxuICAgICAgICAgIGZpZWxkSXRlbSA9IGZvcm1GaWVsZFtpXSxcclxuICAgICAgICAgIHdyYXBJbnB1dDtcclxuXHJcbiAgICAgIGlmKHR5cGVvZiB2YWx1ZXNbaV0gIT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgaW5wdXRJdGVtLnZhbHVlID0gdmFsdWVzW2ldO1xyXG5cclxuICAgICAgaWYoZmllbGRJdGVtLmVyck1zZyB8fCBmaWVsZEl0ZW0ub3B0aW9uKXtcclxuICAgICAgICB3cmFwSW5wdXQgPSBXcmFwTWJJcHQoZG9tVXRpbC5hc3NpZ24oe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IGlucHV0SXRlbVxyXG4gICAgICAgICAgfSxmb3JtRmllbGRbaV0ub3B0aW9uKSk7XHJcblxyXG4gICAgICAgIHZhbGlkSW5wdXRzLnB1c2god3JhcElucHV0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodmFsdWVzW2ldICYmIGZpZWxkSXRlbS5pbml0VmFsaWQpe1xyXG4gICAgICAgIGlucHV0SXRlbS5zdHlsZS5oZWlnaHQgPSAnMy42MjVyZW0nO1xyXG4gICAgICAgIHdyYXBJbnB1dFtmaWVsZEl0ZW0uaW5pdFZhbGlkXSh7dGFyZ2V0OmlucHV0SXRlbSwgaXNJbml0VmFsaWQ6IHRydWV9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoZmllbGRJdGVtLm11bHRpTGluZSAmJiAodmFsdWVzW2ldID09IG51bGwgfHwgdmFsdWVzW2ldID09ICcnKSl7XHJcbiAgICAgICAgaW5wdXRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyx0eHRBcmVhS2V5dXAsZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dGluZ3Muc2VsZWN0b3IgPSBpbmZvRm9ybURvbTtcclxuICAgIHNldHRpbmdzLm9rQ2FsbGJhY2sgPSBwcm94eU9rRm47XHJcbiAgICBzZXR0aW5ncy5jYW5jZWxDYWxsYmFjayA9IHByb3h5Q2FuY2VsRm47XHJcblxyXG4gICAgZGxnID0gTW9kYWxEaWFsb2cuY29uZmlybShzZXR0aW5ncyk7XHJcblxyXG4gICAgcmV0dXJuIGRsZztcclxuICAgIGZ1bmN0aW9uIHByb3h5T2tGbihlKXtcclxuICAgICAgdmFyIGlmb3JtcyA9IGluZm9Gb3JtRG9tLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyZ2UtZm9ybScpLFxyXG4gICAgICAgICAgaXRlbSxzdHlsZXMsXHJcbiAgICAgICAgICBkaXJ0eSA9IDAsXHJcbiAgICAgICAgICBmb3JtVmFscyA9IFtdLFxyXG4gICAgICAgICAgZm9ybVZhbHVlLFxyXG4gICAgICAgICAgZmllbGRJdGVtO1xyXG5cclxuICAgICAgZm9yKHZhciB2aT0wLHZpbGVuID0gdmFsaWRJbnB1dHMubGVuZ3RoOyB2aSA8IHZpbGVuOyB2aSsrKXtcclxuICAgICAgICB2YXIgdmFsaWRpdGVtID0gdmFsaWRJbnB1dHNbdmldO1xyXG4gICAgICAgIHZhbGlkaXRlbS5oYW5kbGVLZXlVcCAmJiB2YWxpZGl0ZW0uaGFuZGxlS2V5VXAoKTtcclxuICAgICAgICB2YWxpZGl0ZW0uaGFuZGxlQ2hhbmdlICYmIHZhbGlkaXRlbS5oYW5kbGVDaGFuZ2UoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yKHZhciBpPTAsbGVuPWlmb3Jtcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XHJcbiAgICAgICAgaXRlbSA9IGlmb3Jtc1tpXTtcclxuICAgICAgICBzdHlsZXMgPSBpdGVtLmNsYXNzTGlzdCxcclxuICAgICAgICBmb3JtVmFsdWUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy52YWxpZC1pbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGZpZWxkSXRlbSA9IGZvcm1GaWVsZFtpXTtcclxuXHJcbiAgICAgICAgaWYoKHN0eWxlcy5jb250YWlucygnYmV2YWxpZCcpICYmICFzdHlsZXMuY29udGFpbnMoJ2RsZy1zdWNjZXNzJykpIHx8XHJcbiAgICAgICAgICAgICAgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXF1aXJlZCcpICYmIGZvcm1WYWx1ZS5sZW5ndGggPCBmaWVsZEl0ZW0ubWluTGVuKSl7XHJcblxyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkbGctZXJyb3InKTtcclxuICAgICAgICAgIGRpcnR5ICsrO1xyXG4gICAgICAgIH1lbHNlIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkbGctZXJyb3InKSl7XHJcbiAgICAgICAgICBkaXJ0eSArKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1WYWxzLnB1c2goZm9ybVZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZihkaXJ0eSA+IDApXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICBjbGVhcklucHV0KCk7XHJcbiAgICAgIGlmKG9rRm4gJiYgIW9rRm4uY2FsbChkbGcsZm9ybVZhbHMsZSkpXHJcbiAgICAgICAgaW5mb0Zvcm1Eb20gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb3h5Q2FuY2VsRm4oZSl7XHJcbiAgICAgIGNsZWFySW5wdXQoKTtcclxuICAgICAgY2FuY2VsRm4gJiYgY2FuY2VsRm4uY2FsbChkbGcsZSk7XHJcbiAgICAgIGluZm9Gb3JtRG9tID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhcklucHV0KCl7XHJcbiAgICAgIGlucHV0SXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsdHh0QXJlYUtleXVwKTtcclxuICAgICAgdmFsaWRJbnB1dHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHh0QXJlYUtleXVwKGUpe1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXHJcbiAgICAgICAgICBoaWRkZW50eHQgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZyxcclxuICAgICAgICAgIHZhbCA9IHRhcmdldC52YWx1ZSxcclxuICAgICAgICAgIGhpZGRlbnR4dFdpZHRoLFxyXG4gICAgICAgICAgbmV4dFdpZHRoO1xyXG5cclxuICAgICAgaWYoIW1heFdQZXJMKXtcclxuICAgICAgICBoaWRkZW50eHRXaWR0aCA9IE1hdGgucm91bmQoZ2V0Q29tcHV0ZWRTdHlsZShoaWRkZW50eHQpLndpZHRoLnJlcGxhY2UoJ3B4JywnJykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoaWRkZW50eHQudGV4dENvbnRlbnQgPSB2YWw7XHJcbiAgICAgIG5leHRXaWR0aCA9IE1hdGgucm91bmQoZ2V0Q29tcHV0ZWRTdHlsZShoaWRkZW50eHQpLndpZHRoLnJlcGxhY2UoJ3B4JywnJykpO1xyXG5cclxuICAgICAgaWYoIW1heFdQZXJMICYmIHRhcmdldC5zY3JvbGxIZWlnaHQgPiB0YXJnZXQuY2xpZW50SGVpZ2h0KXtcclxuICAgICAgICBtYXhXUGVyTCA9IGhpZGRlbnR4dFdpZHRoO1xyXG4gICAgICAgIGlmKCFtYXhXUGVyTCl7XHJcbiAgICAgICAgICBtYXhXUGVyTCA9IG5leHRXaWR0aCAtIDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYobmV4dFdpZHRoID4gbWF4V1Blckwpe1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAnMy42MjVyZW0nO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gJzIuMDYyNXJlbSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHZhciBsb2FkaW5nQ291bnQgPSAwO1xyXG4gIE1vZGFsRGlhbG9nLnNob3dMb2FkaW5nID0gZnVuY3Rpb24oKXtcclxuICAgIGxvYWRpbmdDb3VudCArKztcclxuICAgIGlmKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1ib3gnKSl7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tVXRpbC5jcmVhdGVIdG1sRG9tKCc8ZGl2IGlkPVwibG9hZGluZy1ib3hcIiBjbGFzcz1cImRpYWxvZy1tYXNrXCI+PGRpdiBjbGFzcz1cImxvYWQtY29udGFpblwiPicgK1xyXG4gICAgICAgICc8c3BhbiBjbGFzcz1cImxvYWQxXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwibG9hZDJcIj48L3NwYW4+PC9kaXY+PC9kaXY+JykpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmctYm94Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuaGlkZUxvYWRpbmcgPSBmdW5jdGlvbigpe1xyXG4gICAgaWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nLWJveCcpKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgbG9hZGluZ0NvdW50LS07XHJcbiAgICBpZihsb2FkaW5nQ291bnQgPCAwKVxyXG4gICAgICBsb2FkaW5nQ291bnQgPSAwO1xyXG4gICAgaWYobG9hZGluZ0NvdW50ID09PSAwKVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1ib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH07XHJcbiAgTW9kYWxEaWFsb2cuc2hvd01hc2sgPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGRpYWxvZ01hc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLW1hc2snKTtcclxuXHJcbiAgICBpZighZGlhbG9nTWFzayl7XHJcbiAgICAgIGRpYWxvZ01hc2sgPSBkb21VdGlsLmNyZWF0ZUh0bWxEb20oXCI8ZGl2IGNsYXNzPSdkaWFsb2ctbWFzaycgaWQ9J2FwcC1tYXNrJz48L2Rpdj5cIik7XHJcbiAgICAgIGRvbVV0aWwuYmluZEV2ZW50KGRpYWxvZ01hc2ssJ3RvdWNoc3RhcnQnLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dNYXNrKTtcclxuICAgIH1cclxuICAgIGRpYWxvZ01hc2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfTtcclxuICBNb2RhbERpYWxvZy5oaWRlTWFzayA9IGZ1bmN0aW9uKCl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLW1hc2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH07XHJcblxyXG4gIHZhciBkZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgICB1c2VIYXNoOiBmYWxzZSxcclxuICAgICAgY29weVRvb2w6IHt9XHJcbiAgICB9LFxyXG4gICAgaXNDb25maWcgPSBmYWxzZTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuY29uZmlnID0gZnVuY3Rpb24oY29uZmlnKXtcclxuICAgIHZhciBvcHRpb25zID0gZG9tVXRpbC5hc3NpZ24oe30sZGVmYXVsdENvbmZpZyxjb25maWcpO1xyXG5cclxuICAgIE1vZGFsRGlhbG9nLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgaWYoaXNDb25maWcpe1xyXG4gICAgICBjb25zb2xlLmluZm8oJ21vZGFsZGlhbGcgb25seSBjYW4gY29uZmlnIG9uY2UnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYob3B0aW9ucy51c2VIYXNoKXtcclxuICAgICAgaW5pdEhhc2goKTtcclxuICAgIH1cclxuICAgIGlzQ29uZmlnID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRIYXNoKCl7XHJcbiAgICB2YXIgaGFzaExpc3RlbmVyID0gaGFzaEhpc3RvcnkoKSxcclxuICAgICAgICBkaWFsb2dNYXAgPSB7fSxcclxuICAgICAgICBoYXNoUXVldWUgPSBbXTtcclxuXHJcbiAgICBoYXNoTGlzdGVuZXIubGlzdGVuZXIoZnVuY3Rpb24ocGF0aCxwcmVwYXRoKXtcclxuICAgICAgdmFyIHByZXBhdGggPSBwcmVwYXRoICogMTtcclxuXHJcbiAgICAgIGlmKCEhcHJlcGF0aCAmJiBwYXRoIC0gcHJlcGF0aCA8IDApe1xyXG4gICAgICAgIHJlbW92ZURpYWxvZ0J5SGFzaChwcmVwYXRoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLypcclxuICAgICBxdWV1ZSAtLT4gaGFzaCAtLT4gZGlhbG9nSWQgLS0+IG1vZGFsXHJcbiAgICAgKi9cclxuICAgIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIoZnVuY3Rpb24oZGlhbG9nKXtcclxuICAgICAgdmFyIGhhc2hWbCA9IGhhc2hMaXN0ZW5lci5hdXRvVXBkYXRlSGFzaCgpO1xyXG4gICAgICBkaWFsb2dNYXBbaGFzaFZsXSA9IGRpYWxvZy5pZDtcclxuICAgICAgaGFzaFF1ZXVlLnB1c2goaGFzaFZsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIE1vZGFsRGlhbG9nLmNsb3NlZExpc3RlbmVyKGZ1bmN0aW9uKGRpYWxvZyl7XHJcbiAgICAgIHZhciB1blVzdWFsSWR4ID0gaGFzaFF1ZXVlLmxlbmd0aCAtIDIsXHJcbiAgICAgICAgICBoYXNodmwgPSBoYXNoUXVldWVbdW5Vc3VhbElkeF0sXHJcbiAgICAgICAgICBsYXN0SXRlbTtcclxuXHJcbiAgICAgIGlmKGRpYWxvZ01hcFtoYXNodmxdID09IGRpYWxvZy5pZCl7XHJcbiAgICAgICAgaGFzaFF1ZXVlLnNwbGljZSh1blVzdWFsSWR4LDEpO1xyXG4gICAgICAgIGRpYWxvZ01hcFtoYXNodmxdID0gZGlhbG9nTWFwW2hhc2hRdWV1ZVt1blVzdWFsSWR4XV1cclxuICAgICAgICBkZWxldGUgZGlhbG9nTWFwW2hhc2hRdWV1ZVt1blVzdWFsSWR4XV07XHJcbiAgICAgICAgaGFzaFF1ZXVlW3VuVXN1YWxJZHhdLS07XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGxhc3RJdGVtID0gaGFzaFF1ZXVlLnBvcCgpO1xyXG4gICAgICAgIGRlbGV0ZSBkaWFsb2dNYXBbbGFzdEl0ZW1dO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihoYXNoTGlzdGVuZXIuZ2V0Q3VycmVudEhhc2hQYXRoKCkgPiAwKVxyXG4gICAgICAgIGhhc2hMaXN0ZW5lci5iYWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVEaWFsb2dCeUhhc2goaGFzaHZsKXtcclxuICAgICAgdmFyIGRpYWxvZ0xpc3QgPSBNb2RhbERpYWxvZy5kaWFsb2dMaXN0LFxyXG4gICAgICAgICAgc3BsaXRJbmRleDtcclxuXHJcbiAgICAgIGhhc2hRdWV1ZS5ldmVyeShmdW5jdGlvbihpdGVtLGluZGV4KXtcclxuICAgICAgICBpZihpdGVtID09IGhhc2h2bCl7XHJcbiAgICAgICAgICBzcGxpdEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmKHNwbGl0SW5kZXggIT0gbnVsbCl7XHJcblxyXG4gICAgICAgIGhhc2hRdWV1ZS5zbGljZShzcGxpdEluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgZGlhbG9nTGlzdFtkaWFsb2dNYXBbaXRlbV1dLmNsb3NlRGlhbG9nKHRydWUpO1xyXG4gICAgICAgICAgZGVsZXRlIGRpYWxvZ01hcFtpdGVtXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBoYXNoUXVldWUgPSBoYXNoUXVldWUuc2xpY2UoMCxzcGxpdEluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG1vZHVsZS5leHBvcnRzID0gTW9kYWxEaWFsb2c7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2Nzcy9kaWFsb2cubGVzc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4vZG9tLmpzJyk7XHJcbnZhciBzY3JvbGxEbGcgPSByZXF1aXJlKCcuL2RsZ3Njcm9sbC5qcycpO1xyXG52YXIgXyA9IHtcclxuICBhc3NpZ246IHV0aWxzLmFzc2lnblxyXG59LCB3aW5ILCB3aW5XO1xyXG5cclxuLypcclxu55Sf5oiQ5a+56K+d5qGG5qih5p2/5YaF5a65XHJcbiAqL1xyXG4gIGZ1bmN0aW9uIGdldEh0bWxDb250ZW50KG9wdGlvbnMpe1xyXG4gICAgdmFyIHRlbXBsYXRlSHRtbCA9IFtdLFxyXG4gICAgICAgIGhlYWRlciA9IG9wdGlvbnMuaGVhZGVyO1xyXG5cclxuICAgIGhlYWRlciA9IHV0aWxzLnJlcGxhY2VUZW1sYXRlKGhlYWRlcixvcHRpb25zKTtcclxuXHJcbiAgICB0ZW1wbGF0ZUh0bWwucHVzaCgnPGRpdiBjbGFzcz1cInJjLW1vZGFsXCI+PGRpdiBjbGFzcz1cImRpYWxvZy1tYXNrXCI+PC9kaXY+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyAnICsgb3B0aW9ucy5jbGF6eiArICdcIj48ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nLW1haW5cIj48aGVhZGVyPicpO1xyXG4gICAgdGVtcGxhdGVIdG1sLnB1c2goaGVhZGVyKTtcclxuICAgIHRlbXBsYXRlSHRtbC5wdXNoKCc8L2hlYWRlcj48c2VjdGlvbj48ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRlbnRcIj48L2Rpdj48L3NlY3Rpb24+PGZvb3Rlcj4nKTtcclxuICAgIHRlbXBsYXRlSHRtbC5wdXNoKGNyZWF0ZUJ1dHRvbnMuY2FsbCh0aGlzLG9wdGlvbnMpKTtcclxuICAgIHRlbXBsYXRlSHRtbC5wdXNoKCc8L2Zvb3Rlcj48L2Rpdj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGVIdG1sLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzaXplV2luKCl7XHJcbiAgICB3aW5IID0gd2luZG93LmlubmVySGVpZ2h0ID8gd2luZG93LmlubmVySGVpZ2h0IDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XHJcbiAgICB3aW5XID0gd2luZG93LmlubmVyV2lkdGggPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgfVxyXG4gIC8vIHV0aWxzLmJpbmRFdmVudCh3aW5kb3csJ3Jlc2l6ZScscmVzaXplV2luKTtcclxuLy9UT0RPOlxyXG4gIC8vIHJlc2l6ZVdpbigpO1xyXG4gIC8qXHJcbiAg5Yib5bu65bqV6YOo5oyJ6ZKuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY3JlYXRlQnV0dG9ucyhvcHRpb25zKXtcclxuICAgIHZhciBidG5zID0gb3B0aW9ucy5idXR0b25zIHx8IFtdLFxyXG4gICAgICAgIHRlbXBsYXRlID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie2Nsc31cIiBkYXRhLWlkPVwie2lkfVwiID57bmFtZX08L2J1dHRvbj4nLFxyXG4gICAgICAgIGJ0blRtcGxzID0gJycsXHJcbiAgICAgICAgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgb25lQnRuQ2x6PScnO1xyXG5cclxuICAgIGlmKG9wdGlvbnMuY2FuY2VsQ2FsbGJhY2spe1xyXG4gICAgICBidG5zLnB1c2goe1xyXG4gICAgICAgIGlkOiAnY2FuY2VsJyxcclxuICAgICAgICBuYW1lOiBvcHRpb25zLmNhbmNlbFN0cixcclxuICAgICAgICBjYWxsYmFjazogb3B0aW9ucy5jYW5jZWxDYWxsYmFjayxcclxuICAgICAgICBjbHM6IFwiY2FuY2xlLWJ0blwiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGJ0bnMubGVuZ3RoID09MClcclxuICAgICAgb25lQnRuQ2x6ID0gJyBtb2RhbC1kaWFsb2ctb25lYnRuJztcclxuXHJcbiAgICBpZihvcHRpb25zLm9rQ2FsbGJhY2spe1xyXG4gICAgICBidG5zLnB1c2goe1xyXG4gICAgICAgIGlkOiAnb2snLFxyXG4gICAgICAgIG5hbWU6IG9wdGlvbnMuc3VyZVN0cixcclxuICAgICAgICBjYWxsYmFjazogb3B0aW9ucy5va0NhbGxiYWNrLFxyXG4gICAgICAgIGNsczogXCJzdXJlLWJ0blwiICsgb25lQnRuQ2x6XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG9wdGlvbnMucmV2ZXJzZSlcclxuICAgICAgYnRucyA9IGJ0bnMucmV2ZXJzZSgpO1xyXG5cclxuICAgIGJ0bnMuZm9yRWFjaChmdW5jdGlvbihpdGVtLGluZGV4KXtcclxuICAgICAgaWYoKGJ0bnMubGVuZ3RoIC0gMSkgPT0gaW5kZXgpXHJcbiAgICAgICAgaXRlbS5jbHMgKz0gJyBsYXN0JztcclxuICAgICAgYnRuVG1wbHMgKz0gdXRpbHMucmVwbGFjZVRlbWxhdGUodGVtcGxhdGUsaXRlbSk7XHJcbiAgICAgIHNlbGYuY2FsbGJhY2tzW2l0ZW0uaWRdID0gaXRlbS5jYWxsYmFjaztcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBidG5UbXBscztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluc2VydENvbnRlbnQoZG9tLG9wdGlvbnMpe1xyXG4gICAgICBpZihvcHRpb25zLnNlbGVjdG9yKXtcclxuICAgICAgICB2YXIgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJkaWFsb2ctdGFyZ2V0IHJlcGxhY2VcIiksXHJcbiAgICAgICAgICAgIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcixcclxuICAgICAgICAgICAgb3JpRGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUoc2VsZWN0b3IpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKTtcclxuXHJcbiAgICAgICAgaWYoc2VsZWN0b3IucGFyZW50Tm9kZSl7XHJcbiAgICAgICAgICBzZWxlY3Rvci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb21tZW50LHNlbGVjdG9yKTtcclxuICAgICAgICAgIGRvbS5fY29tbWVudERvbSA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICBpZihvcmlEaXNwbGF5ID09ICdub25lJyl7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZG9tLl9vcmlnaW5EaXNwbGF5ID0gb3JpRGlzcGxheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChzZWxlY3Rvcik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICAgIGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKS5pbm5lckhUTUwgPSBvcHRpb25zLmNvbnRlbnQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJzxici8+Jyk7XHJcbiAgICB9XHJcbi8qKlxyXG4gKiBbTW9kYWxEaWFsb2cgZGVzY3JpcHRpb25dXHJcbiAqIGNsYXp6OiDlvLnlh7rmoYbnmoRjc3PnsbvlkI1cclxuICogY2FuY2VsU3RyIOWPlua2iOaMiemSrueahOaMiemSruWQjVxyXG4gKiBzdXJlU3RyIOehruWumuaMiemSrueahOaMiemSruWQjVxyXG4gKiB0aXRsZSDlvLnlh7rmoYbnmoTmoIfpophcclxuICogaGVhZGVyIOihqOekuuWktOmDqOeahGh0bWzmqKHmnb9cclxuICogb2tDYWxsYmFjayDnoa7lrprmjInpkq7lm57osIPlh73mlbBcclxuICogY2FuY2VsQ2FsbGJhY2sg5Y+W5raI5oyJ6ZKu5Zue6LCD5Ye95pWwXHJcbiAqIGJ1dHRvbnMgW3tjbHM6J3N1cmUnLGNhbGxiYWNrOmZuLG5hbWU6J25hbWUnfV1cclxuICogdXNlQmFja2dyb3VuZCDljZXlh7vog4zmma/ml7bmiafooYznmoTlm57osIPlh73mlbBcclxuICovXHJcbiAgdmFyIGRlZmF1bHRTZXR0aW5ncyA9IHtcclxuICAgICAgICBjbGF6ejogJ2RpYWxvZy10aGVtZScsXHJcbiAgICAgICAgY2FuY2VsU3RyOiAn5Y+W5raIJyxcclxuICAgICAgICBzdXJlU3RyOiAn56Gu5a6aJyxcclxuICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcbiAgICAgICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj57dGl0bGV9PC9zcGFuPicsXHJcbiAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvbnM6IG51bGwsXHJcbiAgICAgICAgdXNlQmFja2dyb3VuZDogJ2NhbmNlbCdcclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlTGlzdGVuZXJzID0gW10sXHJcbiAgICAgIGFmdGVyTGlzdGVuZXJzID0gW10sXHJcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IFtdLFxyXG4gICAgICBfY291bnQgPSAwO1xyXG5cclxuICB2YXIgTW9kYWxEaWFsb2cgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgIHZhciBkaWFsb2csXHJcbiAgICAgICAgaWQ7XHJcblxyXG4gICAgb3B0aW9ucyA9IF8uYXNzaWduKHt9LGRlZmF1bHRTZXR0aW5ncyxvcHRpb25zKTtcclxuXHJcbiAgICBvcHRpb25zLl9jYWxsQmFja3MgPSBvcHRpb25zLl9jYWxsQmFja3MgfHwge307XHJcbiAgICBpZCA9IG9wdGlvbnMuaWQgPSBvcHRpb25zLmlkIHx8IF9jb3VudDtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBvcHRpb25zLl9jYWxsQmFja3NbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBiZWZvcmVMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICAgIGxpc3RlbmVyKG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdFtpZF0gPSBkaWFsb2cgPSBuZXcgTW9kYWxEaWFsb2cuY3JlYXRlKG9wdGlvbnMpO1xyXG5cclxuICAgIE1vZGFsRGlhbG9nLm1vZGFsQ291bnQgKys7XHJcblxyXG4gICAgYWZ0ZXJMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICAgIGxpc3RlbmVyKGRpYWxvZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfY291bnQgKys7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZztcclxuICB9O1xyXG5cclxuICBNb2RhbERpYWxvZy5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgIHZhciBkaWFsb2dEb20sXHJcbiAgICAgICAgZGxnUG9zLFxyXG4gICAgICAgIGRsZ01haW5Eb20sXHJcbiAgICAgICAgb2Zmc2V0SDtcclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrcyA9IG9wdGlvbnMuX2NhbGxCYWNrcztcclxuICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xyXG5cclxuICAgIGRpYWxvZ0RvbSA9IHV0aWxzLmNyZWF0ZUh0bWxEb20oZ2V0SHRtbENvbnRlbnQuY2FsbCh0aGlzLG9wdGlvbnMpKTtcclxuXHJcbiAgICBpbnNlcnRDb250ZW50KGRpYWxvZ0RvbSxvcHRpb25zKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nRG9tKTtcclxuXHJcbiAgICBvZmZzZXRIID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICB0aGlzLmRsZ1Njcm9sbCA9IHNjcm9sbERsZy5pbml0VG91Y2goZGlhbG9nRG9tKTtcclxuXHJcbiAgICBkbGdNYWluRG9tID0gZGlhbG9nRG9tLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cnKTtcclxuICAgIGRsZ1BvcyA9IHRoaXMuZ2V0UG9zKGRsZ01haW5Eb20pO1xyXG5cclxuICAgIF8uYXNzaWduKGRsZ01haW5Eb20uc3R5bGUse1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBsZWZ0OiBkbGdQb3MubGVmdCArICdweCcsXHJcbiAgICAgIHRvcDogZGxnUG9zLnRvcCArICdweCdcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKG9wdGlvbnMuYW5pbWF0ZWQpXHJcbiAgICAgIGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLW1haW4nKS5jbGFzc05hbWUgKz0gJyBkbGctYW5pbWF0aW9uJztcclxuXHJcbiAgICBpZihvcHRpb25zLnVzZUJhY2tncm91bmQpe1xyXG4gICAgICB2YXIgdXNlcmJnciA9IG9wdGlvbnMudXNlQmFja2dyb3VuZDtcclxuICAgICAgaWYoIW9wdGlvbnMuX2NhbGxCYWNrc1t1c2VyYmdyXSl7XHJcbiAgICAgICAgb3B0aW9ucy5fY2FsbEJhY2tzW3VzZXJiZ3JdID0gZnVuY3Rpb24oKXt9O1xyXG4gICAgICB9XHJcbiAgICAgIGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLW1hc2snKS5kYXRhc2V0LmlkID0gb3B0aW9ucy51c2VCYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGRpYWxvZ0RvbS5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLW1hc2snKS5zdHlsZS5oZWlnaHQgPSBvZmZzZXRIICsgJ3B4JztcclxuXHJcbiAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gdGhpcy5wcm94eSh0aGlzLl9jbGlja0V2ZW50LGRpYWxvZ0RvbSxvcHRpb25zKTtcclxuICAgIHRoaXMuZGlhbG9nRG9tID0gZGlhbG9nRG9tO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2dEb20sJ2NsaWNrJyx0aGlzLl9ldmVudExpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gIF8uYXNzaWduKE1vZGFsRGlhbG9nLmNyZWF0ZS5wcm90b3R5cGUse1xyXG4gICAgY2FsbGJhY2tzOiBudWxsLFxyXG4gICAgZ2V0UG9zOiBmdW5jdGlvbihkaWFsb2dEb20pe1xyXG4gICAgICBkaWFsb2dEb20gPSBkaWFsb2dEb20gfHwgdGhpcy5kaWFsb2dEb207XHJcbiAgICAgIGlmKCFkaWFsb2dEb20pe1xyXG4gICAgICAgIHJldHVybiB7bGVmdDowLHRvcDowfTtcclxuICAgICAgfVxyXG4gICAgICByZXNpemVXaW4oKTtcclxuICAgICAgdmFyIGRsZ0ggPSBkaWFsb2dEb20ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB2YXIgZGxnVyA9IGRpYWxvZ0RvbS5vZmZzZXRXaWR0aDtcclxuICAgICAgdmFyIGRsZ1Bvc1kgPSAod2luSCAtIGRsZ0ggPiAwICkgPyAod2luSCAtIGRsZ0gpLzIgOiB3aW5IKjAuMTtcclxuICAgICAgdmFyIGRsZ1Bvc1ggPSAod2luVyAtIGRsZ1cgPiAwICkgPyAod2luVyAtIGRsZ1cpLzIgOiB3aW5XKjAuMTtcclxuXHJcbiAgICAgIHJldHVybiB7bGVmdDogZGxnUG9zWCwgdG9wOiBkbGdQb3NZfTtcclxuICAgIH0sXHJcbiAgICBjbG9zZURpYWxvZzpmdW5jdGlvbihpc05vdEludm9rZSl7XHJcbiAgICAgIHZhciBkaWFsb2dEb20gPSB0aGlzLmRpYWxvZ0RvbSxcclxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgICBzZWxlY3RvcixcclxuICAgICAgICAgIF9jb21tZW50RG9tLFxyXG4gICAgICAgICAgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICBkaWFsb2dEb20uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaWYob3B0aW9ucy5zZWxlY3RvciAmJiBkaWFsb2dEb20uX2NvbW1lbnREb20pe1xyXG4gICAgICAgIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcjtcclxuICAgICAgICBfY29tbWVudERvbSA9IGRpYWxvZ0RvbS5fY29tbWVudERvbTtcclxuXHJcbiAgICAgICAgc2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9IGRpYWxvZ0RvbS5fb3JpZ2luRGlzcGxheTtcclxuICAgICAgICBfY29tbWVudERvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzZWxlY3RvcixfY29tbWVudERvbSk7XHJcblxyXG4gICAgICAgIGRpYWxvZ0RvbS5fY29tbWVudERvbSA9IG51bGw7XHJcbiAgICAgICAgZGlhbG9nRG9tLl9vcmlnaW5EaXNwbGF5ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB1dGlscy51bkJpbmRFdmVudChkaWFsb2dEb20sJ2NsaWNrJyx0aGlzLl9ldmVudExpc3RlbmVyKTtcclxuICAgICAgZGlhbG9nRG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGlhbG9nRG9tKTtcclxuICAgICAgdGhpcy5kbGdTY3JvbGwuZGVzdHJveVNjcm9sbCAmJiB0aGlzLmRsZ1Njcm9sbC5kZXN0cm95U2Nyb2xsKCk7XHJcblxyXG4gICAgICBpZighaXNOb3RJbnZva2Upe1xyXG4gICAgICAgIGNsb3NlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3RlbmVyKXtcclxuICAgICAgICAgIGxpc3RlbmVyKHNlbGYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBpZihvcHRpb25zLmNhbmNlbENhbGxiYWNrKVxyXG4gICAgICAgICAgb3B0aW9ucy5jYW5jZWxDYWxsYmFjaygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gbnVsbDtcclxuICAgICAgdGhpcy5kaWFsb2dEb20gPSBkaWFsb2dEb20gPSBudWxsO1xyXG5cclxuICAgICAgZGVsZXRlIE1vZGFsRGlhbG9nLmRpYWxvZ0xpc3RbdGhpcy5pZF07XHJcblxyXG4gICAgICBNb2RhbERpYWxvZy5tb2RhbENvdW50IC0tO1xyXG4gICAgfSxcclxuICAgIHJlZnJlc2g6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBkaWFsb2dEb20gPSB0aGlzLmRpYWxvZ0RvbSxcclxuICAgICAgICAgIGRsZ1BvcyA9IHRoaXMuZ2V0UG9zKGRpYWxvZ0RvbSk7XHJcblxyXG4gICAgICBfLmFzc2lnbihkaWFsb2dEb20uc3R5bGUse1xyXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgbGVmdDogZGxnUG9zLmxlZnQgKyAncHgnLFxyXG4gICAgICAgIHRvcDogZGxnUG9zLnRvcCArICdweCdcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZGxnU2Nyb2xsLnJlZnJlc2goKTtcclxuICAgIH0sXHJcbiAgICBfY2xpY2tFdmVudDogZnVuY3Rpb24oZSxkaWFsb2dEb20sb3B0aW9ucyl7XHJcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCxcclxuICAgICAgICAgIGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxyXG4gICAgICAgICAgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICBpZih0eXBlb2YgdGhpcy5jYWxsYmFja3NbaWRdID09ICdmdW5jdGlvbicgJiYgIXRoaXMuY2FsbGJhY2tzW2lkXS5jYWxsKHRoaXMsZSkpe1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHNlbGYuY2xvc2VEaWFsb2coKTtcclxuICAgICAgICAvLyB9LDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJveHk6IGZ1bmN0aW9uKGZuKXtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgd3JhcEFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7XHJcblxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIGlmKHdyYXBBcmdzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICBhcmdzID0gYXJncy5jb25jYXQod3JhcEFyZ3MpO1xyXG5cclxuICAgICAgICBmbi5hcHBseShzZWxmLGFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIE1vZGFsRGlhbG9nLmFmdGVyTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICBhZnRlckxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgYWZ0ZXJMaXN0ZW5lcnMgPSBhZnRlckxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cucHJlTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICBiZWZvcmVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGJlZm9yZUxpc3RlbmVycyA9IGJlZm9yZUxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuY2xvc2VkTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICBjbG9zZWRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNsb3NlZExpc3RlbmVycyA9IGNsb3NlZExpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT0gbGlzdGVuZXI7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgTW9kYWxEaWFsb2cuZGlhbG9nTGlzdCA9IHt9O1xyXG4gIE1vZGFsRGlhbG9nLm1vZGFsQ291bnQgPSAwO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbERpYWxvZztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kYWwuanNcbiAqKi8iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL2RvbS5qcycpO1xyXG5cclxuZnVuY3Rpb24gZ2V0SGVpZ2h0KHNlbCxpc091dGVyKXtcclxuICB2YXIgc2VjdGlvblN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWwpLFxyXG4gICAgICBtYXJnaW5IID0gMDtcclxuXHJcbiAgaWYoaXNPdXRlcil7XHJcbiAgICBtYXJnaW5IID0gc2VjdGlvblN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKS5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgICAgIHNlY3Rpb25TdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykucmVwbGFjZSgncHgnLCcnKSoxXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgICBzZWN0aW9uU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgIHNlY3Rpb25TdHlsZS5wYWRkaW5nVG9wLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBzZWN0aW9uU3R5bGUucGFkZGluZ0JvdHRvbS5yZXBsYWNlKCdweCcsJycpKjEgK1xyXG4gICAgICAgICAgc2VjdGlvblN0eWxlLmJvcmRlclRvcFdpZHRoLnJlcGxhY2UoJ3B4JywnJykqMSArXHJcbiAgICAgICAgICBzZWN0aW9uU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgucmVwbGFjZSgncHgnLCcnKSoxICtcclxuICAgICAgICAgIG1hcmdpbkhcclxuICAgICAgICApO1xyXG59XHJcblxyXG52YXIgZWFzZSA9IHtcclxuICBjaXJjdWxhcjoge1xyXG4gICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4xLCAwLjU3LCAwLjEsIDEpJ1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGluaXRUb3VjaDogZnVuY3Rpb24oZGlhbG9nKXtcclxuICAgIHZhciBkbGdDb250ZW50ID0gIGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWNvbnRlbnQnKSxcclxuICAgICAgICBzZWN0aW9uID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKSxcclxuICAgICAgICBzY3JvbGxUYXJnZVN0eWxlID0gZGxnQ29udGVudC5zdHlsZSxcclxuICAgICAgICB3cmFwcGVySGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsJycpKjEsXHJcbiAgICAgICAgbWF4SGVpZ2h0LCBzdGFydFBvc3gsIHN0YXJ0UG9zeSwgaXNUb3VjaCxcclxuICAgICAgICBzdGFydFRpbWUsIGRpc3RZLCBkaXN0WCxcclxuICAgICAgICBlbmRUaW1lID0gMCwgeCA9MCwgeSA9MCwgc3RhcnRYLCBzdGFydFksIGlzSW5UcmFuc2l0aW9uO1xyXG5cclxuICAgIG1heEhlaWdodCA9IHdyYXBwZXJIZWlnaHQgLSBnZXRIZWlnaHQoZGxnQ29udGVudCx0cnVlKTtcclxuXHJcbiAgICBzY3JvbGxUYXJnZVN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiA9IGVhc2UuY2lyY3VsYXIuc3R5bGU7XHJcblxyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRpYWxvZywndG91Y2htb3ZlJyxzdG9wU2Nyb2xsTW92ZSk7XHJcbiAgICB1dGlscy5iaW5kRXZlbnQoZGlhbG9nLCd0b3VjaHN0YXJ0JyxzdGFydFRvdWNoKTtcclxuICAgIHV0aWxzLmJpbmRFdmVudChkaWFsb2csJ3RvdWNoZW5kJyx0b3VjaGVFbmQpO1xyXG4gICAgdXRpbHMuYmluZEV2ZW50KGRsZ0NvbnRlbnQsJ3RyYW5zaXRpb25lbmQnLF90cmFuc2l0aW9uRW5kKTtcclxuICAgIHV0aWxzLmJpbmRFdmVudChkbGdDb250ZW50LCd3ZWJraXRUcmFuc2l0aW9uRW5kJyxfdHJhbnNpdGlvbkVuZCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGVzdHJveVNjcm9sbDogZnVuY3Rpb24oKXtcclxuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkaWFsb2csJ3RvdWNobW92ZScsc3RvcFNjcm9sbE1vdmUpO1xyXG4gICAgICAgIHV0aWxzLnVuQmluZEV2ZW50KGRpYWxvZywndG91Y2hzdGFydCcsc3RhcnRUb3VjaCk7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGlhbG9nLCd0b3VjaGVuZCcsdG91Y2hlRW5kKTtcclxuICAgICAgICB1dGlscy51bkJpbmRFdmVudChkbGdDb250ZW50LCd0cmFuc2l0aW9uZW5kJyxfdHJhbnNpdGlvbkVuZCk7XHJcbiAgICAgICAgdXRpbHMudW5CaW5kRXZlbnQoZGxnQ29udGVudCwnd2Via2l0VHJhbnNpdGlvbkVuZCcsX3RyYW5zaXRpb25FbmQpO1xyXG4gICAgICAgIGRsZ0NvbnRlbnQgPSBzZWN0aW9uID0gbnVsbDtcclxuICAgICAgfSxcclxuICAgICAgcmVmcmVzaDogZnVuY3Rpb24oKXtcclxuICAgICAgICB3cmFwcGVySGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsJycpKjE7XHJcbiAgICAgICAgbWF4SGVpZ2h0ID0gd3JhcHBlckhlaWdodCAtIGdldEhlaWdodChkbGdDb250ZW50LHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0VG91Y2goZSl7XHJcbiAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXSxcclxuICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNsb3Nlc3QoZS50YXJnZXQsJ2RpYWxvZy1jb250ZW50JyksXHJcbiAgICAgICAgICBwb3M7XHJcblxyXG4gICAgICBpZighIXRhcmdldCl7XHJcbiAgICAgICAgaWYoaXNJblRyYW5zaXRpb24pe1xyXG4gICAgICAgICAgX3RyYW5zaXRpb25UaW1lKCk7XHJcbiAgICAgICAgICBpc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgcG9zID0gZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgdHJhbnNsYXRlKE1hdGgucm91bmQocG9zLngpLCBNYXRoLnJvdW5kKHBvcy55KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXJ0UG9zeCA9IHRvdWNoLnBhZ2VYO1xyXG4gICAgICAgIHN0YXJ0UG9zeSA9IHRvdWNoLnBhZ2VZO1xyXG4gICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgZGlzdFggPSBkaXN0WSA9IDA7XHJcbiAgICAgICAgc3RhcnRYID0geDtcclxuICAgICAgICBzdGFydFkgPSB5O1xyXG4gICAgICAgIGlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBpc1RvdWNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BTY3JvbGxNb3ZlKGUpe1xyXG4gICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF0sXHJcbiAgICAgICAgICBwb3NYID0gdG91Y2gucGFnZVgsXHJcbiAgICAgICAgICBwb3NZID0gdG91Y2gucGFnZVksXHJcbiAgICAgICAgICBub2RlTmFtZSA9IGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgdmFyIGRlbHRhWSA9IHBvc1kgLSBzdGFydFBvc3ksXHJcbiAgICAgICAgICBkZWx0YVggPSBwb3NYIC0gc3RhcnRQb3N4LFxyXG4gICAgICAgICAgbmV3WTtcclxuXHJcbiAgICAgIHN0YXJ0UG9zeCA9IHBvc1g7XHJcbiAgICAgIHN0YXJ0UG9zeSA9IHBvc1k7XHJcblxyXG4gICAgICBkaXN0WCArPSBkZWx0YVg7XHJcbiAgICAgIGRpc3RZICs9IGRlbHRhWTtcclxuXHJcbiAgICAgIGlmKCBub2RlTmFtZSAhPSAnaW5wdXQnICYmIG5vZGVOYW1lICE9ICdzZWxlY3QnICYmIG5vZGVOYW1lICE9ICd0ZXh0YXJlYScpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICggKHRpbWVzdGFtcCAtIGVuZFRpbWUgPiAzMDAgJiYgTWF0aC5hYnMoZGlzdFkpIDwgMTApIHx8ICFpc1RvdWNoIHx8IG1heEhlaWdodCA+PSAwKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3WSA9IHkgKyBkZWx0YVk7XHJcbiAgICAgIGlmICggbmV3WSA+IDAgfHwgbmV3WSA8IG1heEhlaWdodCApIHtcclxuICAgICAgICBuZXdZID0geSArIGRlbHRhWSAvIDM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyYW5zbGF0ZShkbGdDb250ZW50LG5ld1kpO1xyXG5cclxuICAgICAgaWYgKCB0aW1lc3RhbXAgLSBzdGFydFRpbWUgPiAzMDAgKSB7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZXN0YW1wO1xyXG4gICAgICAgIHN0YXJ0WCA9IHg7XHJcbiAgICAgICAgc3RhcnRZID0geTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG91Y2hlRW5kKGUpe1xyXG4gICAgICB2YXIgZHVyYXRpb24gPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lLFxyXG4gICAgICAgICAgbmV3WSA9IE1hdGgucm91bmQoeSksXHJcbiAgICAgICAgICB0aW1lID0gMCxcclxuICAgICAgICAgIG1vbWVudHVtWTtcclxuXHJcbiAgICAgIHN0YXJ0UG9zeCA9IG51bGw7XHJcbiAgICAgIHN0YXJ0UG9zeSA9IG51bGw7XHJcbiAgICAgIGVuZFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICBpc0luVHJhbnNpdGlvbiA9IDA7XHJcblxyXG4gICAgICBpZiAocmVzZXRQb3NpdGlvbihkbGdDb250ZW50LDUwMCkgfHwgbWF4SGVpZ2h0ID49IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNjcm9sbFRvKGRsZ0NvbnRlbnQsIG5ld1kpO1xyXG5cclxuICAgICAgaWYoZHVyYXRpb24gPCAzMDApe1xyXG4gICAgICAgIG1vbWVudHVtWSA9IG1vbWVudHVtKHksIHN0YXJ0WSwgZHVyYXRpb24pO1xyXG4gICAgICAgIG5ld1kgPSBtb21lbnR1bVkuZGVzdGluYXRpb247XHJcbiAgICAgICAgdGltZSA9IG1vbWVudHVtWS5kdXJhdGlvbjtcclxuICAgICAgICBpc0luVHJhbnNpdGlvbiA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICggbmV3WSAhPSB5ICkge1xyXG4gICAgICAgIHNjcm9sbFRvKGRsZ0NvbnRlbnQsIG5ld1ksdGltZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCxwb3N5LHRpbWUpe1xyXG4gICAgICB0aW1lID0gdGltZSB8fCAwO1xyXG4gICAgICBpc0luVHJhbnNpdGlvbiA9IHRpbWUgPiAwO1xyXG4gICAgICBfdHJhbnNpdGlvblRpbWUodGltZSk7XHJcbiAgICAgIHRyYW5zbGF0ZSh0YXJnZXQscG9zeSlcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSh0YXJnZXQsIHBvc3kpIHtcclxuICAgICAgc2Nyb2xsVGFyZ2VTdHlsZS53ZWJraXRUcmFuc2Zvcm0gID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgcG9zeSArICdweCwwcHgpJztcclxuICAgICAgeSA9IHBvc3k7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNldFBvc2l0aW9uKHRhcmdldCx0aW1lKXtcclxuICAgICAgdmFyIHBvc1kgPSB5O1xyXG5cclxuICAgICAgdGltZSA9IHRpbWUgfHwgMDtcclxuXHJcbiAgICAgIGlmIChwb3NZID49IDAgKSB7XHJcbiAgICAgICAgcG9zWSA9IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9zWSA8IG1heEhlaWdodCApIHtcclxuICAgICAgICBwb3NZID0gbWF4SGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIHBvc1kgPT0geSApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNjcm9sbFRvKHRhcmdldCwgcG9zWSwgdGltZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vbWVudHVtKGN1cnJlbnQsIHN0YXJ0LCB0aW1lKXtcclxuICAgICAgdmFyIGRpc3RhbmNlID0gY3VycmVudCAtIHN0YXJ0LFxyXG4gICAgICAgICAgc3BlZWQgPSBNYXRoLmFicyhkaXN0YW5jZSkgLyB0aW1lLFxyXG4gICAgICAgICAgZGVjZWxlcmF0aW9uID0gMC4wMDA2LFxyXG4gICAgICAgICAgZGVzdGluYXRpb24sXHJcbiAgICAgICAgICBkdXJhdGlvbjtcclxuXHJcbiAgICAgIGRlc3RpbmF0aW9uID0gY3VycmVudCArICggc3BlZWQgKiBzcGVlZCApIC8gKCAyICogZGVjZWxlcmF0aW9uICkgKiAoIGRpc3RhbmNlIDwgMCA/IC0xIDogMSApOyAvLyBzPShhdF4yKS8yXHJcbiAgICAgIGR1cmF0aW9uID0gc3BlZWQgLyBkZWNlbGVyYXRpb247IC8vIHY9YXRcclxuXHJcbiAgICAgIGlmICggZGVzdGluYXRpb24gPCBtYXhIZWlnaHQgKSB7XHJcbiAgICAgICAgZGVzdGluYXRpb24gPSBtYXhIZWlnaHQgLSAoIHdyYXBwZXJIZWlnaHQgLyAyLjUgKiAoIHNwZWVkIC8gOCApICk7XHJcbiAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhkZXN0aW5hdGlvbiAtIGN1cnJlbnQpO1xyXG4gICAgICAgIGR1cmF0aW9uID0gZGlzdGFuY2UgLyBzcGVlZDtcclxuICAgICAgfWVsc2UgaWYoZGVzdGluYXRpb24gPiAwKXtcclxuICAgICAgICBkZXN0aW5hdGlvbiA9IHdyYXBwZXJIZWlnaHQgLyAyLjUgKiAoIHNwZWVkIC8gOCApO1xyXG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoY3VycmVudCkgKyBkZXN0aW5hdGlvbjtcclxuICAgICAgICBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gc3BlZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IE1hdGgucm91bmQoZGVzdGluYXRpb24pLFxyXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbXB1dGVkUG9zaXRpb24oKSB7XHJcbiAgICAgIHZhciBtYXRyaXggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkbGdDb250ZW50LCBudWxsKSxcclxuICAgICAgICB4LCB5O1xyXG5cclxuICAgICAgbWF0cml4ID0gbWF0cml4LndlYmtpdFRyYW5zZm9ybS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsICcpO1xyXG4gICAgICB4ID0gKyhtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSk7XHJcbiAgICAgIHkgPSArKG1hdHJpeFsxM10gfHwgbWF0cml4WzVdKTtcclxuXHJcbiAgICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfdHJhbnNpdGlvblRpbWUodGltZSl7XHJcbiAgICAgIHRpbWUgPSB0aW1lIHx8IDA7XHJcbiAgICAgIHNjcm9sbFRhcmdlU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdGltZSArICdtcyc7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBfdHJhbnNpdGlvbkVuZCgpe1xyXG4gICAgICBpZighaXNJblRyYW5zaXRpb24pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBfdHJhbnNpdGlvblRpbWUoKTtcclxuICAgICAgaWYoIXJlc2V0UG9zaXRpb24oZGxnQ29udGVudCkpe1xyXG4gICAgICAgIGlzSW5UcmFuc2l0aW9uID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kbGdzY3JvbGwuanNcbiAqKi8iLCJ2YXIgZG9tVXRpbCA9IHJlcXVpcmUoJy4vZG9tLmpzJyk7XHJcblxyXG52YXIgREVGQVVMVE9QVElPTlMgPSB7XHJcbiAga2V5RG93blZhbGlkOiBmdW5jdGlvbihldnQsdmFsdWUpe1xyXG4gICAgaWYodmFsdWUubGVuZ3RoID4gMTEgJiYgZXZ0LmtleUNvZGUgIT0gOCAmJiBldnQua2V5Q29kZSAhPSAxMyl7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH0sa2V5VXBWYWxpZDogZnVuY3Rpb24oZXZ0LHZhbHVlKXtcclxuICAgIHJldHVybiAvXjFcXGR7MTB9JC8udGVzdCh2YWx1ZSk7XHJcbiAgfSxjaGFuZ2VWYWxpZDogZnVuY3Rpb24oZXZ0LHZhbHVlKXtcclxuICAgcmV0dXJuIC9eMVxcZHsxLDEwfSQvLnRlc3QodmFsdWUpO1xyXG4gIH1cclxufTtcclxuZnVuY3Rpb24gV3JhcE1iSXB0KG9wdGlvbnMpe1xyXG5cclxuICByZXR1cm4gbmV3IFdyYXBNYklwdC5jcmVhdGUob3B0aW9ucyk7XHJcbn1cclxuV3JhcE1iSXB0LmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gIHZhciB0YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcclxuXHJcbiAgdGhpcy5vcHRpb25zID0gZG9tVXRpbC5hc3NpZ24oe30sREVGQVVMVE9QVElPTlMsb3B0aW9ucyk7XHJcblxyXG4gIGlmKG9wdGlvbnMuaW5pdFZhbGlkKVxyXG4gICAgdGhpc1tvcHRpb25zLmluaXRWYWxpZF0oe3RhcmdldDp0YXJnZXR9KTtcclxuXHJcbiAgaWYodGhpcy5vcHRpb25zLmtleURvd25WYWxpZClcclxuICAgIGRvbVV0aWwuYmluZEV2ZW50KHRhcmdldCwna2V5ZG93bicsdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcykpO1xyXG5cclxuICBkb21VdGlsLmJpbmRFdmVudCh0YXJnZXQsJ2tleXVwJyx0aGlzLmhhbmRsZUtleVVwLmJpbmQodGhpcykpO1xyXG4gIGRvbVV0aWwuYmluZEV2ZW50KHRhcmdldCwnY2hhbmdlJyx0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpKTtcclxufTtcclxuXHJcbldyYXBNYklwdC5jcmVhdGUucHJvdG90eXBlID0ge1xyXG4gIGNvbnN0cnVjdG9yOiBXcmFwTWJJcHQuY3JlYXRlLFxyXG4gIGhhbmRsZUtleURvd246IGZ1bmN0aW9uKGUpe1xyXG4gICAgZT0gZSB8fCB7dGFyZ2V0OiB0aGlzLm9wdGlvbnMudGFyZ2V0fTtcclxuXHJcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXHJcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcblxyXG4gICAgdmFsdWUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGUpO1xyXG4gICAgdGhpcy5vcHRpb25zLmtleURvd25WYWxpZCAmJiB0aGlzLm9wdGlvbnMua2V5RG93blZhbGlkKGUsdmFsdWUpO1xyXG4gIH0sXHJcbiAgaGFuZGxlS2V5VXAoZSl7XHJcbiAgICBlPSBlIHx8IHt0YXJnZXQ6IHRoaXMub3B0aW9ucy50YXJnZXR9O1xyXG5cclxuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCxcclxuICAgICAgICB2YWx1ZSA9IHRhcmdldC52YWx1ZSxcclxuICAgICAgICBwYXJlbnROZCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmKHRoaXMub3B0aW9ucy5rZXlVcFZhbGlkKXtcclxuICAgICAgaWYodGhpcy5vcHRpb25zLmtleVVwVmFsaWQoZSx2YWx1ZSkpe1xyXG4gICAgICAgIHBhcmVudE5kLmNsYXNzTGlzdC5hZGQoJ2RsZy1zdWNjZXNzJyk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHBhcmVudE5kLmNsYXNzTGlzdC5yZW1vdmUoJ2RsZy1zdWNjZXNzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihlLmtleUNvZGUgIT0gMTMpXHJcbiAgICAgIHBhcmVudE5kLmNsYXNzTGlzdC5yZW1vdmUoJ2RsZy1lcnJvcicpO1xyXG4gIH0sXHJcbiAgaGFuZGxlQ2hhbmdlKGUpe1xyXG4gICAgZT0gZSB8fCB7dGFyZ2V0OiB0aGlzLm9wdGlvbnMudGFyZ2V0fTtcclxuXHJcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQsXHJcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWUsXHJcbiAgICAgICAgc3R5bGVzID0gdGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LFxyXG4gICAgICAgIGlzSW5pdFZhbGlkID0gZS5pc0luaXRWYWxpZDtcclxuXHJcbiAgICBpZih0aGlzLm9wdGlvbnMuY2hhbmdlVmFsaWQpe1xyXG4gICAgICBpZighdGhpcy5vcHRpb25zLmNoYW5nZVZhbGlkKGUsdmFsdWUpKXtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Ly/kuI3liqDlrprml7blmajml7bvvIzlvZPpvKDmoIfngrnlh7vnoa7lrprmjInpkq7lkI7vvIzlj6rop6blj5FjaGFuZ2Xkuovku7bvvIzogIzkuI3op6blj5HpvKDmoIfnmoTngrnlh7vkuovku7ZcclxuICAgICAgICAgIHN0eWxlcy5hZGQoJ2RsZy1lcnJvcicpO1xyXG4gICAgICAgIH0sMCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHN0eWxlcy5yZW1vdmUoJ2RsZy1lcnJvcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWlzSW5pdFZhbGlkKXtcclxuICAgICAgaWYodmFsdWUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgc3R5bGVzLmFkZCgnZGlydHknKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgc3R5bGVzLnJlbW92ZSgnZGlydHknKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVzdHJveSgpe1xyXG4gICAgdmFyIHRhcmdldCA9IHRoaXMub3B0aW9ucy50YXJnZXQ7XHJcblxyXG4gICAgZG9tVXRpbC5iaW5kRXZlbnQodGFyZ2V0LCdrZXlkb3duJyx0aGlzLmhhbmRsZUtleURvd24pO1xyXG4gICAgZG9tVXRpbC5iaW5kRXZlbnQodGFyZ2V0LCdrZXl1cCcsdGhpcy5oYW5kbGVLZXlVcCk7XHJcbiAgICBkb21VdGlsLmJpbmRFdmVudCh0YXJnZXQsJ2NoYW5nZScsdGhpcy5oYW5kbGVDaGFuZ2UpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXcmFwTWJJcHQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvd3JhcElucHV0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImluci1wcnpcXFwiPlxcclxcbiAgPGRpdj48c3Bhbj7mga3llpzojrflvpc8L3NwYW4+PHN0cm9uZyBjbGFzcz1cXFwicHJ6LW5hbWVcXFwiPntkZXNjfTwvc3Ryb25nPjwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZGVjLXByaXplXFxcIj48aW1nIHNyYz1cXFwie2ltZ1VybH1cXFwiIGhlaWdodD1cXFwiODBweFxcXCIgd2lkdGg9XFxcIjgwcHhcXFwiIGNsYXNzPVxcXCJwcnotbG9nb1xcXCI+PC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjaGFyZ2UtZm9ybVxcXCI+XFxyXFxuICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cXFwi5aGr5YaZ5omL5py65Y+356CBXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBtYXhsZW5ndGg9XFxcIjExXFxcIiBjbGFzcz1cXFwidmFsaWQtaW5wdXQgY2hhcmdlLXBob25lXFxcIi8+XFxyXFxuICAgIDxzdHJvbmcgY2xhc3M9XFxcImZvcm0tdGlwXFxcIj7or7floavlhpnmraPnoa7nmoTmiYvmnLrlj7fnoIE8L3N0cm9uZz5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZWxlLXVzZXJ1bGVcXFwiPjxlbSBjbGFzcz1cXFwicnVsZS1jb250ZW50XFxcIj57d2luTWVzc2FnZX08L2VtPjwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlldy9wcml6ZVRtcGwuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaW5yLXByelxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJwcnotc3ViLXRsZVxcXCI+PHNwYW4+5oGt5Zac6I635b6XPC9zcGFuPjxzdHJvbmcgY2xhc3M9XFxcInByei1uYW1lXFxcIj57ZGVzY308L3N0cm9uZz48L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImRlYy1jb2RlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidGlja2V0LWNvZGVcXFwiPjxzcGFuPnt2b3VjaGVyMX08L3NwYW4+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRpY2tldC1jb2RlXFxcIj48c3Bhbj57dm91Y2hlcjJ9PC9zcGFuPjwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJlbGUtdXNlcnVsZVxcXCI+PGVtIGNsYXNzPVxcXCJydWxlLWNvbnRlbnRcXFwiPnt3aW5NZXNzYWdlfTwvZW0+PC9kaXY+XFxyXFxuPC9kaXY+XCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92aWV3L2VsZWNwcml6ZVRtcGwuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaW5yLXByelxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJwcnotc3ViLXRsZVxcXCI+PHNwYW4+5oGt5Zac6I635b6XPC9zcGFuPjxzdHJvbmcgY2xhc3M9XFxcInByei1uYW1lXFxcIj57ZGVzY308L3N0cm9uZz48L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImRlYy1wcml6ZVxcXCI+PGltZyBzcmM9XFxcIntpbWdVcmx9XFxcIiBoZWlnaHQ9XFxcIjgwcHhcXFwiIHdpZHRoPVxcXCI4MHB4XFxcIiBjbGFzcz1cXFwicHJ6LWxvZ29cXFwiPjwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZWxlLXVzZXJ1bGVcXFwiPjxlbSBjbGFzcz1cXFwicnVsZS1jb250ZW50XFxcIj57d2luTWVzc2FnZX08L2VtPjwvZGl2PlxcclxcbjwvZGl2PlwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmlldy9hY3R1YWxQcml6ZVRtcGwuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFQQUFBQUR3Q0FNQUFBQUppeG1nQUFBQ1FGQk1WRVVBQUFEKzBBS0pkQlArMGdINnp3UDZ6d0w1endUKzBnRWxKQi8vMHdEKzBnRkVQUm9mSHlEOTBnSCswZ0QvMUFMOTBnRWdJQ0FmSHlEODBBSDkwUUg3MEFIMXl3SWhJQjg1TXh3Zkh5QWpJaC96eVFMNzBBSCswd0grMHdUKzBnRWdJQ0Q3MEFIOTBnRXBKeDc5MGdQODBRRWlJUjgwTUIzODBRTWZJQ0QrMGdILzFBWCswZ0FsSkIvLzB3RjVaeE5EUEJvbUpSNG1KQjhpSVI4bkpSNWRVUmNoSVI5aVZCZHFXeFZSUnhuSnFnai8wd1JjVHhjdUt4NUxReGx0WGhWMFl4UkhQeG9uSlI0Nk5SdzJNaHd0S3g3KzJpN2Z1UVdaZ1ErTGRoSCswUUFmSUNELzJ6UC8zRGIvLy8vKzFBb2JIQjcvMGdILzFoSCsyU24vMmk3LzJCOFlHQmdVRkJUOXlnRC8yaXo5MEEzKzNEei8xeGNrSXg4NE9EZ3FLeXIrMXh2LzJTVklTRWovMVFELy92Z3hNVEgvL2ZMKzNVY2xKU1dVbEpTMHRMUjdlM3YvOXNyKzRsLys0RlgvMlFELzN3RC80MmYvNm8zVzF0YisxU1VWRnlIKzJESGc0T0R6OC9QLzhLcWlvcUwvOTlMLzlMOWVYbDVXVmxiLy9PeS92Ny8vOGJNUEVpTC8rTmx5Y25KcmEydEJRVUgvNjViKzF5ei8rK2FvcUtnT0RnNlBqNDlQVDAvR3hzYjR6d0gvK3QvYjI5dWVucDVrWkdUdTd1N0x5OHV0cmEyWm1aa3NLaDdxNnVybTV1YUJnWUg0K1BqLzdaM1EwTkQvNllhRmhZWC81bmN5TGgzOTB4YTd1N3YvNVhGdllCV0tpb3I5MHhuLzUzMyszazc5MHlDM3Q3Zi83cVBRc3dZRkJRWHV5QUprVnhaK2JSTGR2UVgvNlFCRVBCdFJSeG1VZncvbnhBTUJCQ1NkaHc2Nm5RcW1qUTFiVHhlTWR4Q3RsZ3lGRHorQkFBQUFTblJTVGxNQS9nYmJDQndPb2hyMzR4TGljZkhSd0xtbE9aR0hGUy8rOWpvc0krbTNtc2l1TWlWblJPM2JUdFBIVjN4clhpck1Tb3lZV1lCOGIwS1EvYWloNmJkWEhLWDM2YmpNMjUxSGZpdTZnYlFBQUNEUFNVUkJWSGphN05pL1M4TkFGQWZ3STlOQnNpU0R4OFVsVUxpUTRXaCtOVlh3WjFVUTNuSlRuVFNUb0s0U0ZDZUh0b1BpSUZad2tBNytBLzZMSW9xZ1RVTzdlZGYzV1c3KzNydTc5emlDRUVJSUlZUVFRZ2doaEJCQ0NDR0VFRUlJb1grbHhRclB0OGpTOEwxSWlMUk5sZ09WNlQ0SHFKeERzZ1FzUHk4YytNVGpKUWhzMDhUbEhENnBzTHRDVE5jcTNJakRseW8wdmNCV1VtUU8vRkNiWFpzWWpESVp3Qys5dU5zMk56SkxJd2YrNE9GV2h4SVQwVHh6QlV4UjhCYm1CdGFZSlVVQTlWVGxyaEd6V05UM0JJZFpLdDRsUnJHbEZ3aG9FRzRUZy9neWphQkoxVnMzWjU2bUxIRTVORHF1aERtOW1CYVJ3d0dhcWQ2dUdZK1dsV2VlQS9QWTY3UjNpTzVhdVhSaFRpL3hSb2RwL1JGZ1VUOFRIQmJBTTBiMFpVczNFTEFBcFNwSEVsMHhtUWF3c09OZFBjKzB6WkpNUUMzMXZSd3BxTEczcm1WZ0t0MVpmVWlwcjlTcXIrbzJROHZXbEtSZUJMT1VweVZBLy8xK05CejFwd056L2FZdG11UWVoNW5LNGZsVGVYVDJNTHliRE9vcUhPczFUMXMybFJHSEJpYzM0OXZoYVBCOFBaNE15cHJ6L3JheHVxTFJMVTY4QXdlYTlHRndlZjA0dVhvZFh6eWRRcDNOZUNzbmV2aWc1a3k0MHJpaU9GNDBTMjBiVFpxbG50YVlwa25hTkduVDVYUk4yblRmWm1BWTFoR1JBVWNSRURkRWhhRGdCbWdVaUFxNDcwdUkxcmdrelo2MFg2MzNBUzdBczVtS2Fld3ZrVE16SmpubmYrOTk5OTM3N3BoVDczKzJWVkVWVDFGMDk3SnhwSmVpcUtGUjZ3akxkR01TTlYzZlJoLzZQOHhkOXIzeDY1ZHYwMXZyQlJpbFVjK05XS2xSYTE4a1lPMzNlVmhHdVVXNXRldmJwb3hqNXc5ZXZLNnBKN2RBejNHc2xxUmQvYllRUmRuTVJyMDViTGNQTy94YUVzdVB1NzJIZU9Qb3BaeVNsWWU1OWZWWUh6UGtTQ0JRM21jTzlsT1UxVWExY012ZHJnQUU5bWdMeDVBWWNyL2IxUjQrZHViQ2lXeENVa0lzM1Z0OWNnZm5aWWIwMllaRG93RjMxN2pQc3hqcVkvWHVMbXZZWVZwczhlTUUweDkrczR2WDhMRzgwK2V5QkFSUVVuM3Q5dExqWEZ4WXc3WnI3Z3Yzc1g2WGtTMGZNbmtjb2VGeWw1TG0vRm9hVjRwZDNzWFYxcGtqNXpLSkdKTHE2cEthMjZza05xcU5XcFpqWVZkaW5HRjdZSHdvYkdhTlhuT1F3VHFZL3VIVFhlcmh2UmZleTg4bU5sSHl4LzFWbkY0UXluUXZkelBNc3JiUERsbXJMOGdwalpIaExnaDJISm9Qdi9saWU2czQ3L0JtM2tLOGdjakx5OXNMSEFQMkFYdjJiTU9pR1htSDM4c2hrcWhadXRORzR0R3pScHBXY21GcU9HRFdzNUdnZG1USUdxUVpYQTlCdjMzNXE4KzNOWGM1K3RJR21abVpPVG5uRGg3TVAzbnk1S1g5SjQ0Y09YTDB2UU1IRHB5K2NPSDgrYk5ud0J4Z0I3QUIwbzhqWXdPa05tUFBtVXVaMlVRaUpaS1ZoNE50SkozeUMvQkdCand1THh0c3NabzRvekZvWGVTNFdXcFJ2NnpWNHRhQTV2dDNQOXVPNGhNRWhxeXNyT3pzN09QSGo0TU53QWpBT2JERHdmeDhNQVhZNHRKK0hDZE9uQUFMSFQzNkhoanA5T25UQjQ3c1A1aEZKRk5TdlhTOS9rRmJDdlcwVW0rMjJXMmdsUTA2Zzc0ZzZlOGQ5V25ObzhOTzB1bnpMdVBXTWYzbWEya0k1b2xFSXRuNld3UWh5QUk3eFNJbEUrVmxqT0RiRDYrdlhrOWhkVnFwOTNTVno3WkVvQ05rdU5rQnZkYlgyNi9uWm0wbWNMbGJTZVBXOGJ1bnRpSDRRT1pMV2Y5S01aRXUxekRVTEQxQmFkcW8xZXNoZmhsdDBNT1NyTnZzTlRyN0lpdzc2V1p4UVQzNDAwY3ZidUxsREg1cDlQQ0ZIT0kvQkh4Y1hWTlRBMStiUHlCMVF6SE5BQ0FNeEdtUmJ2UmhaS0hlUkY4WU5HKy9HZWZRb1VPdkh2cVk3NHJlZCtRNDhiejU0L2FkdHMzbGlGSVovWUJzQmlaQWR6eDQ5elgrVVUwOGIycHVYNS9Xa0dsQnYvSWFidzluRTgrYkVtTGxyMVVOVGZJalBRL25uYzRSRU0rZDZwcHJENmZURXZ6T3B5L3pySFJ6c29oZFFFbjFvOXgwQkgvTjl5enp5QzV3TDlKYnNwS09oOUZSNXM0VkhtSXg4YXdCdlg4OTBhUWpHUHJGblJJczFoVXJkRVV6VXJHRWVHYlVyTnk3TzBpbUFTeGhubWMrcHc4bXJXRkpza1BGTXJWYUpCVEtGYy9PMGJBUDU3YVI2ZkVoejdjaDl1MDltNU1nVnlkTFZDYVJxa1JSRWg2THhUdnE4RCtXcGgrUWVHak1KUTdOVDZmNDdzTW5zdGJWU25VeW9VZ2xUUkJjcEFML0NrR3dKQ25NcFpJZEZFdyt3TXFCZW5QdGVhenEyaG9vUEhqeXk3cGdrQXV1Rk1yRW13WHI1REhCUlp1OURzL2tNaDJzNjJkYmFkRmFqalBHajZhTlhxY3JYbE9uVjJudFBWbXk1amNGNkFKdENkRXJMaFpHQlF1bHFjL2t1aDFhMTVLU2xjZDNTVHJWdjY2dWZyZWVWZ0xkU2xkTGk0dG0wRFhXMFcrZTRudGcvTkltSVZIQklJUllSNnFLNlMwV2I0cHl1VWlFWWtGZXRGTlJYUUo1T3ZYNGxxYmR0bEdid3dzYTRiQkxId2laeVdVR1VLYVJ0TTVlT2k3WnBFNG1pc3FUU1NYcnF6WHFUTFVjbmlUYlJRaVJzR09DcXg5akJKUGNaUG1vUGVJeHU5MGVaM0NjYXZING5TNFhsOUllMC95M3BWOUtKQWtaS2lvUFNka0k4NWdKNE1INkkzbE1NRGg5eDFoWnVvVTlvR2U0cm9CcDBkWnJIUStQMnlsN29Md2xFQzQzYTVtVTF3S2dzdHlHWUVJY2Q3RktLbG1QYVBRQXhLVXNhcGwwQnd1UHg5ZnY0TFlkU05LYzMrc2JEd2Q2UjZraHE5WGEyMnNidHZxMDNkdCtEK0lJa1FBc3owUVhnOHVSTXpmS0RnbkVlT3lQRkVsMnNQQzRXNi9CNzBwSytHVDluSE9Xb2t5Y2M4QVc5amc5ZnFOeTJ5Rjlmdis1N0ZnZEFjUkNHQUNGTXpGNWlsajB5c1NKeTF5RU12Uk9GaDZhQnhpNXROZmpOQzR6TUROZWRvWjdUZVR5TWhld2VzaHVldHRKQ3poMlBvY1FGK21LaXFReGRLcTFCWXFJMzBHT2poTVBhUFI5eVJvN1UzaGdGckRTM1d2MUdKRURuV0dxM0V1VFd0Y3NOZVFtbFhRNmxkYXhrNFJZSlpLdkk0d0NoUVVDWFNEa0tsbWN1RjZockdqZFNtSkoyb0l2WWdYVGJ1dW9yZDlwNUFaNnFkRndYMTkvLzZ5Tm9scWNTbVZhbGRaK1FpeFVpemFJSzFZajF1ODJpTjRpRThoVktqQUQvTmFsTGJqbS9xMWNEYWFNWmoxZElXcEE3eHlucU5EdzhCQWlSQ0ZmMDJsVVdvY1BJc0hDZjgyR0JSU1M5UHZoKy9mdVlGUW9sZDVJdjFuUFJSeDlqcTQrazJsZ1lITEVZVzF4a3FrdWZ2dEhmaUc5NS9ESnJKaUhuNTlnb0xyNjlpMjZIcE9sNFhoZWk4WnNDSDMwbUo1MXU3MnBPNWlHNTRoODd3RTBBRUtDaytDdld5aFBYekFhbGY5SnQyR25xRVk5czh4MWRmbHAvNEFiQmxBREhsWnJKRk9ZL3BGZlJMOTFNRlp1d0hxRVJZblk1TUNOSzNVU0ltQ0hQWHh4bGE3SHRzTkJuNnM3U0ZGbW1LeVZHLzI5bElOTjNaWm9PdmVyYi9rSnpvKzFlMFhTSXNpNk9rV1VZZ0R5TVdpUEExZUpJTU9ncHczUkcxMzZhL2pheFZ2VEpBNmxkbURJWVhUWmh6eGE4MUFYNlI4UG1WZ0c5MHJBYnkvd0UzeEpFRldNRUtPdlRTaldTc2dpY1NMU09NaEdDR242cGVYU1hYeHZ6OUN1c04xSEJ1MjJZRXh3T09URENTWnpmOXZIYnhPR056Q3lDQ3hpV1Z3dzNvRnhJeUhTZHJDazVoSDVBQzlZN3hnZDl6Tm0rN2hMT3hKeTBQN3hvWWdlOTNyZTRJZS9aZkRzLzdHanBZMDJDVldWenhwSjlTTWFLNWdoM2NPaFNaSTIyY3U5MnNtUVErbXlEazl5a0tzeHZQUFJpeG44OHhaZUw0QnY4bmRlc0FZbm1HWmM0MVEvcS9RSDdDYXRObUx2QThFMmM5RHMxbU9pMnZqalo2L3pHeTdsWThwaENlamwzZVNuVDhudFAzTnhHWnB6VUhZem96WFpRNTV1dlE4RU8zdDd6WjR1U05TWXZQWDlLNS94Y2ZHZUF6bEZDRWpVNjBCZVVvbGlnbFdKR1F0bE5nU3h3MENsbFp0U2FTbU41aUhZaGJTbTRkQUF1OHoyVVYxTTBCYnE3eHJ2VHhXc0dkU1E4TkpIeHRPUHBjLy9MRWRiQzBJRm9DWkJvVlBJNEVJVkZheEE2TUFLTXlndDY1QnBObXlUWUl2MHBvY1hWK3ZyVXdTN3h3UGNNbXNkY21nWmh2WDFSaGhYWURSa3QwNXFtV1M5MDdsdzdQbnVSMDhUdk9mc3BaOUY2NngxUmpLVjJtQVFiZDZJVlRKMHFxTkMyNjg4aGlxR0RDaU9vaENuSjNqcE9naE9SdTl5R3J2MTdoRVhuRlRDTVMybjFKcGJ3dUVCanFSVEJJTmV6ZFBMNlgybmtkNkV5bGd1cjZxOWVhVzE5VXJIbkJva2l3Q1Z6RERWTVRiV01iK2drb21TUVhPWWhrNlZURWNJNG9QSStJWGdYNTNoRVkveHpRTmF5Y1pZV2tiZnAvVitsNHZGZE1PRGcyaGttc0ZIY0FLZ2JlNW1NeFdsdmJaS0ZQVzR1bktzc2F5MHRLeDlyRktkVkhTcEt5Y21KdWJucDZibUxGVUdRMndIazhnTUMxVlZDMnIrTHBjUTkvOTZRbUtobzBlMDRHQUFmVExkM2JodEdEeE04bmtCYzgvNS9JYUVUcUJZWHR0VFNzVXBhN0tJNUtCM3ZqSCtxTFJpUXEwU0l0WTZqSVd4c25XYXI4N3IwSVptdU5tRDdob3J4UkxldzFMMGlpMGVHcEZnQU94NVIyNHVDVC85OGNIVEs2MEwrUXJVdzBQdmdKQ0pwdHFSYjIvV2pqVmRCWUd0QmpqUm1hdUFSODJOamNqeEZaYk5DMEFvcW1xbE5sR3JJQWpoUkVVWkZhV3hWaTNtTzNlNFI3YVJXSXhlUDRMak9LL1hHKzBRb1ZYQ2hqU3M0UisrL09MYmwvKzU2TGh3OUp3WThpOUt3Q2dGaXcxTnlJOVRCcEdocWhZRVhyVW9GT29yNE4rbXFVckxSRk1abUtCS2hqcENWYlM3a3NtUjRPYjJ4c2IyOXA3Mm5rYUxsQkJQSVVOVk5DRjdsWTBWOHhSOEgzcEREYlozWUUzbFhTYWZLWWJQNXpQQjVBVS9QZFRBUC9ERDVTOC8yVnJ4dnJ5eis3TVRYN0lUVi9WUVZJK2w3dmU2dXNLRzFsS3FyRllocnFvQWwxY1dGQWdLRitDcWVhNFk5Uk82YU9jZ1ZWU0NnVnJuTEphNXFhbXArVG0xaEJDMWd0RFdTdlZDYlhzcDJFdks5N3hqR2gvU0RHZWxiT1ZkNVl2bGk3T3ppNHVCSVdxUm84bC80dENwZitqOU03T1Q2eXRMVTN2N0ZmV051czdPd3NLNWRxcDBUQ1lGbHpYUDN5Z0FaanJLSUd5aExVVGxDT29jQ0xHbGdpcWJ1RkVJek1DdlFrSUtmNG02WWlnc0tQemRBbGV0YWtGMHhKNVVxUWlTWFh4dENVNTR0aFRzOEpsOGtjamtpTm50UXo4T29keGlyY2ZQOHJiWWk4OGMzWi9TTkVnVlFrT2x4VkxWMENuczFBa0tLeHRCY0owT1ZQWlVDUW9FUkVIaEZQai9wa0VsaHkwNVZtRkx3QnBYTFFWckNBUjFZMlZVbWFVUTNkU0I4NXNyQ3dpeGVuNWl3aUxjbUZ5b0t5MlZjbkZ5VU44YXhJWTBOMDdOQmwzQm9CTncrYzFXYWhZcldETVlIN2ZTMlA4WFllK1o4L21DbEhaaEJnM0RmNzl4NC9jR21LS0F2TnFyVk9uRVRCM0VhT01DYkszd3BMSUNuRmFsVXNWS1R2UjNha3VwQ2tOY0xYSmRBNmhzTklCeVFVRWh5bWNXQVNHZGJ5NHQ3WUY4RmtOUTFOSFlYbUVwU21xSWF4N2R4ZTNEREJ4eGhNM3VrUkh6eU1na0hPQ0ZxRmt2Vm5CdWJsendPOStrQ3M0N21wbWRxbGNoUjltb3M3T3pvUUdHaDRKQ0E2anJxUlNvb3hLaWFnUUxjTjFVcVZLSjFpWVAwcHZ3WUtFd0NvRXd0Rk5sVnhvS291YTVBb0tuNE05TVVNQlZ3NXBnVVNPczh2a2J5Y1BEUjNkSnJPQ3czZGF5T0x0WTNnODRGb2Z0L1N4RDR4dzhHTCs2ak5tYThsOUs3UWFMWXNOL0FENkxGYXFGMm9wU3FybERYVmhWZ1FRVEc0SXRjdFg2dUVrSFhxem82R2lGd214ZVJzU1NYdGxZSitnRndSMmxzT0tsSUxnVWJlR1dlQkIzMXBiQzNkUk1VbVc1Y2d2em1wYVdaVG4zeUNRNEY5dzdHWWxFVEE2SFdVOXZzU3NoNk1ITG1MT3R2Mms1OCtjVjRqQ096N3J2YXpET2NUUEdNUmozOFl2aGw5U21pN1NPSkczU1pzb3FxNmdtNlVDU0l5SkpHaVdOZXhqbnYrYjkyVjFSZmRBWW52R2RiOW0rUDd6MmVYbyt6N2w5SlE0RFdpb2RYUE1Cdmg1b1I2THd6V1UrM2ZLRk84QTJuNnhoQk5rUWVhN0hCT0JNaGlXU0tmdHdLQWtFMktSOE9nQVhsN0pvYWlDRVRyL2J0SkFoNytyR0xnVy8yUHFGNHJUY2poT2Uyd1ZVcExQUXJnZCtPaGFMUGZZVVR5U1AwelNzQXEraHRCRVhqSms3NFFlMHdVRFVDMXBWdlhhN0FFYUlNK0t6dFV3RTJLc0NFMjFMVDAxbVRyazdaaFBNSHVKMEVTUTI0ZE1ER0dhaEFrUERCTGdSQUtEVEtYR0tLY0hBbzJ6VXIrL2VDM2gxaDFLVWRsL3doRTRUdWE1SWlFanA3czBzcVV2VHY4TUlQclp2SGpXMnQ5ZXdldnpVU2QrSHBJRjdWTFZteFZBTmVoV1l6VmNiRnBNZ0F6TWQ0UFpUWHFqN0JRSFJzazdyOXdJMzNFNUpDUllTMXhwazRLTXFNSW05N0JvN2dNTmhaOEl2KzNWVDI1bndPcU4rVzljNXZQWGxualBVZmNUek55NmVKSElQLzJTclJnd0NEZi9HcUEvdFdMWnJWVjhJUFgzMmlray9HdHcvY0hVbU9GK0QyVitwcE9KNWdOWjFvZ3pNS1FnQytGSkNLdUwxSXBTS1NINHRYNVVpZ2Fmd2M0SkU0aktmM2cvZ2dQZ1RjRU5qQWJCVVpwMEJvbFNETDV4SlNRQm1mZ1pHVWZvUXRTaDkrVWl5NENIeTdQWnQyYUk5bnVKNXpNZlRJeTMxanc0ZFdrNmR6dW9BbXpxNDVxTnk0OThBbjl2aUF5QU8rMlhneUUvQUFZVFdpcmdDUVRIOVZBaktweTRYY2NJVm1RQ2NDVmlVVDVkWlVOWTBJc0FEMVNnYk53UFNHSEI1ZlNuV0pUQTlxeTRBcHNqK1M5bjdKUXc1M01KR2NlaFdMbmVyeEtJL3ZQOFBFMnd6SjlQeXBCNWdvbVdpWGtVWUlJamxLSmc0SVFGZzNVL0FmaW1SZ2JoYzRhWTJqWkJNRkZ0QXRsVXlzR2tCNFZXbThoTndSUUZPQ1cxWHdxOW5OTG9JRzBsWGVvR1B2Zjd3K2RDdmdEMFh6aWVUeGJ0M0N4ZHZuTC80bUExZGRIZUFxZFJMeDAyWlJTdDFUT29hY2lEcXRSZ1JBc3FsR3NRTlFQQ0hpWXNpR280SEdSbWhuZ0F3eC9rRVFmQlhLMDJmOWdCd2NXNm5SVnVOZkRyUkpNRE5IOEJzeGFZeDRYZWI0NzFPcVdFMTF2T3MxQUt3aituZWRIa1BvNllGV3BleVoyOWRPVkU0Rnp0N00zYXVlS0x3Z0wyZWRQOG0xTUl5MDZxMXRHaDY5cmE1aW5xTmxnTktWY055RUhMQVYyMzZ1WVBHUnExbWEvamt1SXBvMWNzeEtGb3h0VUFHd0NKakk5Skl5N1VPQ0xsZFlyb080SHlGQUZmdENuQ2JCQmg2VFJEQWt0aVEyREJuVFV2T2hHQUw5QUlqOERqMllRWXQrM2Q0Mk5Qb2toWmlaMHUzbjl3NytmQVdHMHJ1MlVmbEpWVzhwZHUzclA5RktEMm00N0VncUZrZE5CZ1Fhdm5hVGpZZk1Oc1BIRWkzZ2xVa0R4SlBzUE0rSTZwV2VsRnlFdUJhcmRIQUhiR1lUSnkvWHZkelpoQ2JndVFybjZqN3d2RFNxdE9Lay9RU0NUTEFwWFFqaFRjTWwyRExOcWJNdXA3MkFYOTZTNHUwSE5sUzl2ejVHemVLZDY4L3hIelcxZHYzVDZNNVROZnZ6SEhMZi8yQTRvVkRPek01cWpITDR5dzhNVU12RDNTejZha1VKWDZKanlQaXFwTDZnRVUrZFpzaW5ES3NHSGFzNTcyWlRGZ2dOUkFMVjRhYmp2Q2NseVdhMUVBc0VYSTBXelU2aVh3bmJQV29xNjBWWE02NkZhcDM4ZGJlU0l1V1BLQVpmUEpjRWFmUkZjL04wdTBUaUxSdVA3aDlkZTllU2loOUI2NXEvYUpSdjI2d1RKMG9iNlFCMDBSdzFma2RFN3dwRzIzN2VaNFhVaVExcm92QlpoNEpmVDF0TWoxdFIvRkthSDJ2N3h6VjZMekVFV3N0RU1FTDdWY2FMVkFxOXFxSHNwMXhzSE1FbUdPUVhudFRFYWVYUjVBTllLWTdILzc0YWdiVkJ6bXVuRHVYUmZzL2Q3YmtLWklTd0ltVERqZXRwTFY3M2ZwWlEzN2IrRis4Y3Q2a01mTElNSEhOS3ZCUlhnS3hLMUpPbGVNWmxsaTBLUEp4b3ZXcTM5OTJzZkJJUVZHdGdnSFlEdGZzakZSNWpwUFA0YWdQQWJRTHQ4Q01URmtuUmVHa1d3cXd4Rm1acGl0RDBxK0d0ZGFqWVJqMDFzL1U1dkQreTQ1Qzl0eTVRbEVHbGdzZnhTZm4zZnNwSmozL2o0LzRIREpzK0pLUkdralhCR1dhbDRDbENNQjk1TlJwSmxqQTVQTzRnQUN4cGVLU0pveEJSMjVHWGtxVm9WL29NMmhGZmlHSDFmeFRrSk1zaTJISURVTUNaVVZlUWJ5QjFkcUFoamxybDBGL0pXMkhmbkc3cno0Qll4SEE5Ky9HRUU4L2ZweVQ1dzc3WmVhdVFVWWV4alBkd0J3WERQb0N5QnVJWkNJQjhPTGJ5bFdCSTB0VUVrUlVwbFZnNUljMlh4eVhYSmtvUzNoNWNoNDNpYXJEWG04R3ZINmJDdHpXTXRhZ0JHZFFGcTNXbHNSR2U0QS9JVldpOU1KdlhFSGljQTRxenQ2NlgvSVVRRjRvbkRoNS9qQzFlYmhxN0FEQVhSbzJ5azJWbW9oa0taVktCWm9DSjRwQmdMVkUzQVJ2SXVHTk4zblJkTUNzL1FHTXJMa1NsMDBpSVZXZ1RnMjRVT3RUN01OYnRaRUNEOUc1cEdXWVdoVW5BSUlQcGhWbm5YdzM4RWRhRlg3L2taTWV4Sklla2lqbFFxZnhFa0p5cHBPMGcybmN4ajhETDRSSjl3bUpPUmo1b0VWSUlZZGdMZVphQTJXWk9vSklwb2FwQ0tSV25UNHFDaHRjS2h3T3grdUlNQmsxeFVoNUU3ZzlaYUZGM2h1NFZENGZNR21nNmtnK3JtTUFYSTdtT1d0M2FQbUZzdFN5eisxSXlqbURuREVVejJXVkZER1hvd1AvV2NNanBrMmdBOHZDZkFmVzFyN2ZBaXVRREFhMWM2eXVSdUJhUXlUUkpWNm9mMjlyQmRHYjRsclFMNUZhME9mVDJUVEVHdnk4alpIdlNFWHNpYlJlZktSMUhqQ3lkT1E0QkNOTCtMbDB5YUVJemFSM1RsNy9SK0RoazQ1cDZDSnJMdDJ4WENYVUpMaVVDV3B5UmIyb2l2S1cvS2gzZ05FejZxMEFMMzdYRUlwcStzN2hRN1NacFk2Z3dkSVJpbjZYYlZtN2FNaWZseDErMHdyUmk0QlN1SHBLcTBZMEVyc3VLUEt6amZUOVQrZUM4aHQzcDIvWFVnR21Rc3ZWbmlQa1dLYkNFdjJpa3ZWbkdiYVlVdHpxREFsclZlbHJneHJWV1JjQS82MEF0d2Y0R2tvQWRNR2lQTnBveDVNWXY2UEJxclhad2FhMHBpOGNUMThPVndmamdTVnZQM1RMUWZuU1AxMTRPUFdhYk9MUnAxck9GKzY1TCsrN0dzUGo0cDRmdm5mU1FRVWVUTU9RT1NPN21nL2RVLzUwTElOZEFUYi9PMkFTZUdBam5qNm5sVHdkdXJoMzc4bWJvZVRleXhldjU4NVRVZ3hTMTFtM2VleGdvNlhqRjFCcW1MSitWUVgzM3d3VjJQN3ZnTis4VTNpcGN5MmVzNTdqN25ObnMwZjJYL0xnTVV5WDZlbi9uUUczUElhTVdEMmhsOWY0ZzlmY3g2dHVmWkRXZytIL0F4KzVkUFZDTWVSeFlIcXBjT1RJbGJPaEMraU4vNktKTm10QW81NDJ1bmQ3OWdjdmJZb1NtM2tkM2Y4ejRBK0h6dERWVzN4d0s0UXdPbmFmRFQxN2ZKZTkvNnhRU05MN3BRTStKVy9JK0tFOTZyV1lPN3cwdjJUNER3TjZwQzc5K1JGMXllTWhxYjNuU2l4Ny9kWnBzcnAwUGZUZzN2RjlWT0RCeG9kbkwraWlJU1g1RGk5cW1MK1kwUHZIVzFyUThRdjAwcWhuRWdteXJ0NW1TL2V1WG9DZ1RIMERWWGlxMTFvMDBNSFVwV0FVQTh3S0w0UWo2Ui9OZ2V0VVlNTy9CTVpqeGZvWDhURHU0TGdFNGdzeE5uZlZmZmk0SWtlb2p3RFloRUJyb0xIRDBaME5hR05YQjRKaXoxM2JpVHFMNW44RDd6Lys4SEV1NXNsbUg1OWxROW5pT1V3OHlITVBKeDF3WEQyQng1WUIxN1JtRHoybWRKZU05cU1IT3NvbEx3N1k5VC9HaENrV3JiWC9ROTVqMTk1L2V0c0hmUG40Q1hTVnNNWENuaVViTFRmdnMyZnZsa28zYitiNm5odDNac2VHc1lNQ245S0Exa0t5M0c3MWZtUHVhbHVUQ3NPd0w3bWE1VHlWdGxwTGFsbFdscFZXaTdhS0JSV2M0dXdjMnhJelBHWU0xdnl3Z1l3ZEJrcEk2OFBPMnJEcFJpcXlEeEY5aUtKRmJ3dnFyM1dmbHoyZE9rLzJwQWM4bDZBZ2ZybDgzdTdudXUvN09sSHUxN3JlckRCRU55Vmo5eXlRZU42Q3BJVzdIa3JTTy9DY2Y1SlpxNjZDditjaXFEMnpDODkwSTB6czR1SHcySzJjdkZHcGJGR0dpZE1NYWh6VkY4SXZWY0t2T2RySVk0a3RzTmlMUTdKYXI5VXp2QmlEUWMwOUZzcVpwMk04WmhYdkN3eGV0SkJHV2xaMVdhTFJCUm56OTMxWjErMENIMUhhU01Mclh3dllQcTM4YW9XQnB1RzBYS2FWbjMwaHZLbm1iNzBUY2M2ZXBMYml0bU1ISGlyQkUxSmZvOE82VUVQRDEvZ1pEVnZXOTY4RlRCek5yODNVaEZwSnpoSFg2NUJMbTJFRUlidVF4SjdEeEdhMWZYYlVRd3R2Y1JDcDhSc3pBcEozRENTOGdYTnBFY2ZtbWVMQ1NqMExvMXlESnJ6S2kxcXBuSVVrMHpLcnA4eEdiS1ErbTNibGNFMUlDWmNVb291WjB3Z0pJNjZHQkpvV1A3Y3dONVplenN5WFNpdFZFTGNtaEVvMXQ3bzRrUVBDT2tRSUxZSDd2RjJ5Vndma1ZrYnY2NTA1VU5PMGRsWWJ5QmNKQUhBczRhdk43cjZEUzBNNXpiSXhObE9aeWNXUytmUTR6bU83bit6cTRLSzZsRUVjUmVWeXVHRGpEcHhiNmlzdXBXWm9vd2xENDFJQnQwdEQ3YkNZenpMenQwUXd5YThLMmJ4VXM4VHFGWStocTRSdVdwVE9nQWNEdVRjTEFYNXFPS2FtTG4wcXNMaDhxU2pteTh4aUxoYUR6ZmtSVTM1MkYrZGpPaDNvdDVITjZGRDczZUZrTEwxZHgxV1g4c21uNmVYSFV0SWZzaTdpK0FyekV1ODJQWDJkMEUxclM3RDkvbjl5OXZEYmU2eWtOYlk4dTFnU2ltdkpHSitieTFWbmFyTkpMR0UyY1A0MDJXMjR6Mk0zZ1dQYTVPVDNBcmFWZGp4VFpJUUp1UEdML1BOaXNjSVVuL0JvZjI0dTB1clk3L2Uxbi9Fa2pZMjBRSmJOUTBHNDVENGtwNWxlUGtjT3BucnNQVTlxaWV4dit6TG1IaTZ0d3dqandJL0h4TmptY2s1aXExbFE0R0VoUk5CSnR4bEErUFBmREFDbGpoYlUzTkhRd1pTVThCWlgrNDFhYWZyRHhxZEdGb0FxNDRhR2FXR3lOZHdiOHBuQjFuSnE2WE5McG5qWEFsZXVFdkhkN1hYVFpnRFVoMzhzdE9EeWVKbndXT285YVlwekdKeGFsalphR1dIMitrVkNGZDRFUHJ3U3VDOC9ZQTIzUVBnTXFjSVQ5QXdNSERyazgxSFVDUUIxNGdEcWk0WG9XaHMySXpzRTJuaUFob2M2TFpza0hPZ25WQzA3OWpqMk9CQjZqL2lRWVNmSWRTTWpEKzVaVVUrRVhQR0N1UzlMTGRRdDh1VSt2SUxjVWl2WUI3RmxNODhIOHR4SUpFRE1VRy85R2prQWRDK2xxUnJsRzVDa0NhNGZpdmNIbWNybFBBRisrWFluTkNGMGRYWXFUdnJ3Q0pmM0JhMS9HRHY5LzhNZE9OVUU0VDczNkcxa1loRk5hYm1sRkFVZ0VSLytnNjZxZDRGZ2t2cG5mTUc1Qnp5dVVNanZjcDBFZUwwZUR6d3FZU3ZnNXVBdUxZWUdoNlNQblFvT0FvNERka2c0ZXZUb1BvQ2U4UFN1SmdnN3ZNNzdHREVER2FlaHdnN2s2b3JrUFFKWnI4dE9CVHRzTmptZTFRQTlFa1A3M2ZidFlPdC91THU3dTZlbjUrelpzK2ZPblRwMTRjS0ZjRGdjaVVTVXYwTCtGM1pvRUc2Q3NHMy9WcnNiRzNnTmJ4SkdVMXBTNzBlUWRxKzRCallDNS9UdTN0OWhhUUx3QjJ5WHNFM0dZUm5kTW5xME9HeHBCcnY5SVJkRmMzcFZTNU1GVitjeWF1eENtZVFHc0ZKZWY2L0ZwUEE3T1V6S1VPR2xUbmd1K2tERFZzNUVjUTAzcXEzSExPYkZFY3FxSzRLSWJ4TG1OR1VSNm5keVU5N2YrVm83M1NmTi9aekNvTjJLVDRMRFcwcWZOcjNkV01Yc1BPUS80ckNZR0QvYk9aZmNCbUVnREVPY0VCbkpHQ21ZRFE4TEJKSUZLRmRoZ2Jyb3JyMy9KUW9KaVFvQjErbktodmx1TU9Kblh2ek1JUnJQVGMrT0s0OWYvZWQzdG9kd0pXcEdHU3N0dlhGWXN1YmFtbnA2MnEvZUpQQXBFek4yS1RucHJPVWJZZmJpT0IwRlBjL0ViZGRKZDlUMldlU2hwVDFIZ3RaTUR2UFdvbTBsVFZVVmtOd3lnaE5MRUUxZUJOMEhyZTdxU0tyMDZsaW1VTEtyQ1BBMDN2R0V1Qm80Q2FMd2FCbURFenNIUWUxUnozMjhiMTZUOWd1aGJWTWw4YXZoeWIvRnl0ZWszU3pRdWFsYUpVL3hzK05ROXpoZ2x6WmFOeG15N2J6OTFMT3kwUkJudFFsMWFBbmhQdzZacUx1eUVDY1h5MVNZTndROHhLdG9GZlpvU2d3Vjg0MHk3UnVsKzBLakQvZlBlTEYzTGtOejZ1NENEdkdRai9wRmJhY1NMMjNxeURLY2lCRXhUQkdEWGJ5VExtKzhsQmVHWnFyRld0eCtmRXZpdFJQRWMrM25JVldjMjRjbjZZSE9xc2hOVGxVelFwN0lKd1JPaE5HWmFrWjRkV1dKbWFiTXZJNVppcWhrZFNnVlp0ZWhCU1FQR0RGeDJVeXFlaEx4bFRyazgySkRtV3F5bjNaUllzOHpGVHJydm9iOE44ZUxFSE5MQkNXWGVIdGlubmdpM0Y5aXpwcDZtMkplM0dFaVB6QjMvSHQ3TFk4OVdzUmJxME5Mbk83V1U0L1g1UjdDdFdMbURoMHpiNHdmL3hRcHFlMmh0TjdGdzMxY1pBN3lYYnk3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUxBemZnQktBeVpkVG5XKzRnQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ltYWdlcy9teWF3YXJkMS5wbmdcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy85ODViNjUwZC5teWF3YXJkMi5wbmdcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ltYWdlcy9teWF3YXJkMi5wbmdcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUEFBQUFEd0NBTUFBQUFKaXhtZ0FBQUJZbEJNVkVVQUFBRDhXU2I4V1NiOGNFdjhXU2I4V1NiOFhDcjhiMHI4V1NiOFdTYjhXU2I4V1NiOFdTYjhXU2I4V3luOFdTYjhXaWo4V1NiOGIwcjhXU2I4V1NiOFdTYjhXU2I4Wno3OGNFdjhXU2I4V1NiOFdTYjhiMHI4V3lyOFdTYjhXU2I4V1NiOGIwcjhXU2I4V3lqOFdTYjhXU2I4YkVYOGIwbjhaVG44Y0V2OGNFdjhjRXY4V1NiOGNFdi8vLy84V3lqOGFEMzhia244YTBUOFhDdjhZREg4WlRyOGJrajhZamIreXJuOFhpNzhhejMvK3ZuOFlDLy84L0Q4WlRiOWRrdi81dDcrMnMvOW5INy8rZmovNXQvK3dLejlsblgvOXZMOGFVSC8vZnovOS9YLy9QeisxOHI4WXpmOXBZbi8rL3I4WnozOFlqUC83K3IrckpQOWVsRDhjRVQ5bEhMK3RKMzlzWjM5aW1mOWUxZjlnRmo5bVhyKzROYi82K2IvNmVMK3hiVC82dVQvNU52KzA4WCt6YjcrdktqOW9JVDluWC84ZDFQK3VLUDlwbzc5am12OWlHTCswY1Arc0puOWhGNzhjMC84Y2tmOGdXRDlqWEQ5a0c3OWRrM0VKNjk3QUFBQUxIUlNUbE1BWmp4bUtPSURQQTFjOHl3L0ZnanIySmtvKzg2R3NtWU5Cc1c3czQrQ2NtNWNWRTgzSk11S1NmSGVaVnZIZHVZQUFBdEdTVVJCVkhqYTdNR0JBQUFBQUlDZy9ha1hxUUlBQUFBQUFBQUFBQUFBQUFBQVlIYnNIUWRDR0FZQzZBUWxLQW1mYmFDZ0FRcTJtL3VmYjdzdEVQZ0FFNzhiak93b3RwM1QwNWNnclBTNHV5anR3bDFIYVowSDlzQmFQSEI3Z1hOWUtHc0pHUS9LaDVKcXdZdHZvcUFVOFNwV3lxa0REQWZsSExETWNrMmRacGgyaXRsaEd5bG1oRzJpbUFtMlRESFpLOXo0RzE0cFpvVnAwL3VITjFoT3lqbGhHQnFicGFOY1E5dmJVaEdzNzM4ZjlvdkhqejE3ZTJrYmlnTTRuZ2ZwSm9MWE1RYk9CNUdwak4rNUpDZE4wbXAxVmRjNEY4VnFMM1N1N1hCMXdyUVV3ZitmVlhQcXptbWFBMnR5T25iNVBJYThmT212dnhPU2YrNmQxdi9ndjB1cXdXUmJnVVJ2eitVYjM4Lzc5aXBsQmhwb0Q2NFdEMkkxZDJIWXJYZHc1ajhvdElvbmVkQkFkL0R1RVk2MVh3SFpiVkc4ZTZ2d25vSSs3Qmk0ZElNTE9KWXZCOU9yajNoSTY0YUFIcmFGa0EyaGFQRE0zQVNDcXdFZW9RWTZ1QmJxNC9Nek4yTkVaTmJtZFFkVDNxdXYyTFlIdVE0S01RQ1lYOHNZbzh3dXBCLzhRUWhtVjNFMzlTQXhYbWtTQUNCWkV3MVFnSVZaSTg1S2ttQy9HQlFqdW5md3BJRUgvTUR6dk00QkhtaVdJVEdTZFZDZkMrelVSQUt5WXNUTExDY0lEdkxsbllneWdRSFN4RnhRZXd5czFGdVlPMCtleXlzZGltVHJHVU5oYW1uODRHNE9sQnFZOHlod3QyMGNla2NnSVFmRldEU1VYbzRmL0xVTVNoMGNLdTdBazVMUFo3d0hDUjJqMFY0YmF0UGFnbk10M25ZUFAyMTMrTnFxUTBMRVJKSkRPN3l3YXFoTmFRdXU4aDh6b0NEWU8rSlh4MTdNVFBvUGM1UUJuUEtKVm51dUxiakUwK29ndXJ2RWp5NjN4OTFVRkFBWUZYUE5MSUUraGg2OCttM0IxL3RoMm9rODZBSGZXbm40VmZ6NE1VbU9JZ21GUHVJNnltRDlJNzBYQm0rVlFPS05HNXhEWEhRL00ySENGdzIxNlQ4bUdCd1Vod29Udm1wb1A1WUltVXl3aTRZY2puRXN2VmxLRmx5dVZqNWRmL3RjcWVSejJvTVprbEFHRmhybXVFdFRoa3FTUjhzdW9mZGYyampVckRkMnRBWXppaUtMMlVZeXl3YUFaZlczd3dUQndVMEhpN3lldm1DYklwRkx3c1dNUk5RT2o2NE5JMDVtQlpJRW4vbFlkbGJURkd4YlNHYVBmdlRnYzdDUk1VYmFmSkgyQ3dDL3BDUFlqYTVuS3l3VHVPSWNyRzhxUHFRbERKWVZkdE1PSnNkQ3JtSkJXL0ljdkYyYzBFdThnS1FhektTeE5hbU5ZbVVkSkhxbUtiaGRyMTFjTk9wdFBGQkxNemk2bUMwMGhHZktMRzNCNXorWU8vZmZwbUVnamlNRVNEd2tRQWdFU0NEZUNPSFVzWjBIN3NwNGxuVmwzY3JhTWRieDZNWmUzV0FNRVA4L1NlUEVzYzhKNjJpVWZuNkNrb3g5YzVjNzM1M25SZW1YVjVlVDVnMHVSckRuWXdRVGtjMFpVRXRzaGdvU1BQV1JJUUhmRjRLYjMwWVYvUDZKbVgwczVWRmZxd21GTXQwTGhCLzQ0eFk4QXd1LzZuZFIyUTlHRmR5cG1IbkJZdyttam5ucElUT1c0Z2ZZSGZjNy9ITjlNV1N1cTFTRHM4S254eW5ZU1JJc2NocGFuSVp5cVM5VGswbndlT2srRjVNVVowVEJlL1dJZnIrdXNCdGFrTFlaRXNwMHNKNmdDVTZWR01VTFprTEpZdmRJUVF2VDBDR3pseDRRQ2o1MG80dUxFUXdaeUo3ZDZJSzVKOTdCaklhN3hLWldGaDRhNGdyQlJXOVo2c3hHWWZyTkVRVDdSSWFkdkg0c2FUTllGcFBrWm5FdnRld0xwaUpSRE5QR3hjdXBTUEQ3a1FWakd6cW1oR21CbWVzVk1QSTFFN01MZHpNMldsNUVZMlI3NFlpQ3VlS2tiYVJEWmEvT0hKZ1JrVlZVeUkxVDJmVncyWUovek05M1BxVHB6S2VJRmpadUtoSDVIaWo0QTl4VUNZSDloN25EdEpJRkwwL05LcnhOTS91cHByUXJ0UXE0d2ZRcGhPMEVsNENtRmhpbWpZbVhSeEc4V2NuamVTMnZYY2xSUWp0YWFUS2JGREpNTTdOY09aVGdqWlJnM09qbkN2NVNFM0tNS0lHTnVKamJCUTNUNXI4OERWbDhpUlRxSWcvdlNjR0d5Y083RjFLd1E2eWRYa1Q0dFBhbUEzcVZ5c0pXTW13V0haNnNyQ3R4c0VPdG9vWnBIVkU3MUJFeTdPZFlYSXFySURGYjJsUUxqL1c0akdRTlN6SUliaHgyUzViQ0lneHBXQ1pzc0tPbHFHSGEzbWV4dXE4cTQrOUZzWmJtY1lreFk3cHNPNTRldG9nbE9lZ0hOditaS1ppbUlsWHlad2UwZ1lvYXBqMzdJcHozUFpMZ1FVV2ZnOGI3RzdhUmhJc3E4dTNBU3ZNcmNJOE5PMU93SzF1VGlYc1RzUG5CS21xWXhyN0gycVpUWmw4VVN1SlhWa2JnOVQveXNld3VpSWYxV3hIOE83aDdtV1VLZHNSQ2k2WEc0QzdvenhjMlRNTXZwK0xXKzFMaTBPdHhwM1lKeGZSbXhXY2JzV0krMzR3ZmdxV3dGWHdVeUpTQzRVdnN1VGp0M0FUci9YbnhVRTRYTUV5ckpqMnR1WS9kR3E5VnZ5MEg3eXVNWkM4cXNieXQxZW53TXBsMWQ2MDBCL1VnbmEycWdwbTlnaEtvNTJ0Tkx0OVVKSWRYWFRrMnpvVUhiRks4ZnRMdno4a3Vabk1KU1ZZWEtqRnJHOEZsY2xMeDZjQktFd2E4dVdwYWNKaFRQeTkvaStNZFE1cGVDb3Rrc2E2K2REYjN5S1hyNkNqVVBsVXkyQUlQeGtSekpRNUNVV29LTGQvQlVuQmt1bURoc1pYUnhDUU05T2NiY2RTK25yZFA2NmpsMG1yVHJHUmZlekIxOHhianJXVHR6NGR2Y0RQUTlnUEZnaGQySXo5L1ZXbDIxSjZJVkVjc01EdEYyTVVvNUNLUUNmWmFqczdLVTZOZWpsVGVEU3FRdDVGZTBoSXA5azBZNEFjV2k3SjNJbmhsb2JLNGgyQVJDU0V1aThLMU1ITEdYc3RUZC82bkFkQ2RnNDY2emFIenowK0JibVNVa2RwWVpKemRwK0dIdldHZXdlNnZzUDFyaFhUZVZqNnZ5c3hFTEJNaWZJdHczVUlSRis0QXR3YjdwVWZtM2Z2WHFwQW56ekRTYUpPRzI2MHJXOFRYZG5lRzNzemlWY3lUWmhqNlZzSkVFeFk3b2VEMUQvc2Y5dnN6Z1o5WFpUbVVnU2ZDdGRZc09YKzJnQ1plN2NmbSt0VENrT2FMempPT0FORTJvNTM1dVpuaGRhL1c2aXRWSzhCejRnUlhidzZEOWtvMEVRcjR0Ulk2ZlVDUXhHZjcxT1RPc0FOQVFYZW9zQi9qbWU2dEJuUjUvaTRVWXY4SnJ1cE5SejA1MGtJSm00R3U1a1l2bFpJSHM1V1l6MTB3RUFlQjJTalk4ZHVtTm0zaDBMVHJ0Vm44R0xCU0hzOTgybFpVN0d3K1h4dnk1V3NQN2dIdzFNQU1CZk5XMU1jdFF6Q0QvZ2Y1dGxYVnd0SEJUc2pTdXhxSEJVUUQwOVRTQXdvV2IxRkpndHZBQmJOM2VzTVJJTUFoVml2ZERIQk1ncmxWb21BZ3hERnVSZ0o0TFl4TWNLNjhKdzM0UC9uSUwxT3czOURzWnRxTUJLRCtZZmZqTWZEdWNHUkx3V1g4L0REMnFha25reE43cVhQNExaYzJHTVlrLy9qZzhkV3lma0k4dGNybitSTkJhYlZSVGV3bFRvNnRrRWUzU3pnREFEcXVCeWVDRUh1VTJPQnFUOEJIamtWdDkrU0owazk1R0hiWlhMQVp5UVRXN2tRUVYrMTZZRS81S3pwemRpTE84ZkE5SnI5aGdHZWVIVExiRU5uMXZwYXQzWHByNGs1cWNRMkIyWk5XVTE4Rm1wZmd2Y1NoNVowbnIwM2NXVHlZd01Bc0kxRkxpK0dPZVFrbkU2OW00TXVUZE5xU0E1ZGdOdE9TamFmRmNEdHZ3NW90OUNhdU1GRW5wZ1VpSE5WQ3BNM2d4Z1pmaStFTUFYanNHMUl2aVM2Ym5CUFRJaEYyMmtMRXhTWS9weTc1WjZhaWtXKzB3YkoxVWs1TVN4SVJTMHpzK1RDVW1URVdFbTJtZFBYaUx6WVpKNll4V3pjWGhTdG1iR1hoSWlQY00xNXk3bGpaNTFvNmpSeHp3VWdFSWNaNzNBeXZ2M21zM0pOTEhacHZMcWdBNGlNQW81YWtoU1RpNU5LeXpxWmxIalJYWmt6THhFTTZMWkw1UE9EWnRNV2ZQZ3hqcjlrY3VZdHJtM2xBa3FrblR4eWtja2JVRHVXY0wrMUNjK1hGTkNWQnkzdXA2Z3pLbCtOSTUrVDlMTDEzenFPaVlmOThJeDJhMWRMQ3hOUWNjaFRmYjJBRU9YL0hmR0xhZFZRc01QWkNjL2xBcmt6UUpoTXplcWdRZUwyOEU5TllyQUlUZzdsOGM0OEh1Z2VIN2k4SEdKQXlEeEJyeEkwNTEyUmlEOHdTek81aHc2bWFkR2RJbVlLZDJHaVlHSnBiTFczSXE4Sk1KUVNtSURvRHloU01HQ3pxakhuTFpXYjNnUGZZbW5raGszRW1Iak5WZkM2TXhJbzA0NExGOWh5VXkyUUkxazJNdVZJelVKaWZTVVpBeGhqOWkrT1Q4QnUxSE5WY0x1SHlLWUMrTmJmQm1uUVU3azNFNzB6NzI5NGQyd0FBd2pBQUd6Z2kvMzhLU0pVNnNORGRYcUpXK1NGWkpmYzZXZEhQcDlveTNFd0RBQUFBQUFBQUFBQUFBQUFBQUg1c2ljRmpscTIwSVVBQUFBQUFTVVZPUks1Q1lJST1cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW1hZ2VzL3ByaXplLnBuZ1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydtb2R1bGUnLCAnLi9jbGlwYm9hcmQtYWN0aW9uJywgJ3RpbnktZW1pdHRlcicsICdnb29kLWxpc3RlbmVyJ10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZmFjdG9yeShtb2R1bGUsIHJlcXVpcmUoJy4vY2xpcGJvYXJkLWFjdGlvbicpLCByZXF1aXJlKCd0aW55LWVtaXR0ZXInKSwgcmVxdWlyZSgnZ29vZC1saXN0ZW5lcicpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeShtb2QsIGdsb2JhbC5jbGlwYm9hcmRBY3Rpb24sIGdsb2JhbC50aW55RW1pdHRlciwgZ2xvYmFsLmdvb2RMaXN0ZW5lcik7XG4gICAgICAgIGdsb2JhbC5jbGlwYm9hcmQgPSBtb2QuZXhwb3J0cztcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlLCBfY2xpcGJvYXJkQWN0aW9uLCBfdGlueUVtaXR0ZXIsIF9nb29kTGlzdGVuZXIpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgX2NsaXBib2FyZEFjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGlwYm9hcmRBY3Rpb24pO1xuXG4gICAgdmFyIF90aW55RW1pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW55RW1pdHRlcik7XG5cbiAgICB2YXIgX2dvb2RMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29kTGlzdGVuZXIpO1xuXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgICAgIGlmICghc2VsZikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgICB9XG5cbiAgICB2YXIgQ2xpcGJvYXJkID0gZnVuY3Rpb24gKF9FbWl0dGVyKSB7XG4gICAgICAgIF9pbmhlcml0cyhDbGlwYm9hcmQsIF9FbWl0dGVyKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENsaXBib2FyZCh0cmlnZ2VyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkKTtcblxuICAgICAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0VtaXR0ZXIuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgICAgIF90aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMubGlzdGVuQ2xpY2sodHJpZ2dlcik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyBpZiBhdHRyaWJ1dGVzIHdvdWxkIGJlIHJlc29sdmVkIHVzaW5nIGludGVybmFsIHNldHRlciBmdW5jdGlvbnNcbiAgICAgICAgICogb3IgY3VzdG9tIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG5cblxuICAgICAgICBDbGlwYm9hcmQucHJvdG90eXBlLnJlc29sdmVPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IHR5cGVvZiBvcHRpb25zLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuYWN0aW9uIDogdGhpcy5kZWZhdWx0QWN0aW9uO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0eXBlb2Ygb3B0aW9ucy50YXJnZXQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRhcmdldCA6IHRoaXMuZGVmYXVsdFRhcmdldDtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHR5cGVvZiBvcHRpb25zLnRleHQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRleHQgOiB0aGlzLmRlZmF1bHRUZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIENsaXBib2FyZC5wcm90b3R5cGUubGlzdGVuQ2xpY2sgPSBmdW5jdGlvbiBsaXN0ZW5DbGljayh0cmlnZ2VyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9ICgwLCBfZ29vZExpc3RlbmVyMi5kZWZhdWx0KSh0cmlnZ2VyLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIENsaXBib2FyZC5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSBlLmRlbGVnYXRlVGFyZ2V0IHx8IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG5ldyBfY2xpcGJvYXJkQWN0aW9uMi5kZWZhdWx0KHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuYWN0aW9uKHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQodHJpZ2dlciksXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0KHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXIsXG4gICAgICAgICAgICAgICAgZW1pdHRlcjogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ2xpcGJvYXJkLnByb3RvdHlwZS5kZWZhdWx0QWN0aW9uID0gZnVuY3Rpb24gZGVmYXVsdEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ2FjdGlvbicsIHRyaWdnZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIENsaXBib2FyZC5wcm90b3R5cGUuZGVmYXVsdFRhcmdldCA9IGZ1bmN0aW9uIGRlZmF1bHRUYXJnZXQodHJpZ2dlcikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gZ2V0QXR0cmlidXRlVmFsdWUoJ3RhcmdldCcsIHRyaWdnZXIpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgQ2xpcGJvYXJkLnByb3RvdHlwZS5kZWZhdWx0VGV4dCA9IGZ1bmN0aW9uIGRlZmF1bHRUZXh0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgndGV4dCcsIHRyaWdnZXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIENsaXBib2FyZC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQ2xpcGJvYXJkO1xuICAgIH0oX3RpbnlFbWl0dGVyMi5kZWZhdWx0KTtcblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN1ZmZpeFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZVZhbHVlKHN1ZmZpeCwgZWxlbWVudCkge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gJ2RhdGEtY2xpcGJvYXJkLScgKyBzdWZmaXg7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IENsaXBib2FyZDtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsaXBib2FyZC9saWIvY2xpcGJvYXJkLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ21vZHVsZScsICdzZWxlY3QnXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBmYWN0b3J5KG1vZHVsZSwgcmVxdWlyZSgnc2VsZWN0JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtb2QgPSB7XG4gICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICB9O1xuICAgICAgICBmYWN0b3J5KG1vZCwgZ2xvYmFsLnNlbGVjdCk7XG4gICAgICAgIGdsb2JhbC5jbGlwYm9hcmRBY3Rpb24gPSBtb2QuZXhwb3J0cztcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlLCBfc2VsZWN0KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIF9zZWxlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VsZWN0KTtcblxuICAgIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICAgICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICB2YXIgQ2xpcGJvYXJkQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkQWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgYmFzZSBwcm9wZXJ0aWVzIHBhc3NlZCBmcm9tIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cblxuXG4gICAgICAgIENsaXBib2FyZEFjdGlvbi5wcm90b3R5cGUucmVzb2x2ZU9wdGlvbnMgPSBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIgPSBvcHRpb25zLmVtaXR0ZXI7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyID0gb3B0aW9ucy50cmlnZ2VyO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICcnO1xuICAgICAgICB9O1xuXG4gICAgICAgIENsaXBib2FyZEFjdGlvbi5wcm90b3R5cGUuaW5pdFNlbGVjdGlvbiA9IGZ1bmN0aW9uIGluaXRTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGYWtlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYXJnZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBDbGlwYm9hcmRBY3Rpb24ucHJvdG90eXBlLnNlbGVjdEZha2UgPSBmdW5jdGlvbiBzZWxlY3RGYWtlKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT0gJ3J0bCc7XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUZha2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyID0gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjaykgfHwgdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLmZvbnRTaXplID0gJzEycHQnO1xuICAgICAgICAgICAgLy8gUmVzZXQgYm94IG1vZGVsXG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLmJvcmRlciA9ICcwJztcbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICAgICAgLy8gTW92ZSBlbGVtZW50IG91dCBvZiBzY3JlZW4gaG9yaXpvbnRhbGx5XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGVbaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnXSA9ICctOTk5OXB4JztcbiAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudCB0byB0aGUgc2FtZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICB2YXIgeVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgd2luZG93LnNjcm9sbFRvKDAsIHlQb3NpdGlvbikpO1xuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS50b3AgPSB5UG9zaXRpb24gKyAncHgnO1xuXG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnZhbHVlID0gdGhpcy50ZXh0O1xuXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZmFrZUVsZW0pO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICgwLCBfc2VsZWN0Mi5kZWZhdWx0KSh0aGlzLmZha2VFbGVtKTtcbiAgICAgICAgICAgIHRoaXMuY29weVRleHQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBDbGlwYm9hcmRBY3Rpb24ucHJvdG90eXBlLnJlbW92ZUZha2UgPSBmdW5jdGlvbiByZW1vdmVGYWtlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmFrZUhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5mYWtlRWxlbSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgQ2xpcGJvYXJkQWN0aW9uLnByb3RvdHlwZS5zZWxlY3RUYXJnZXQgPSBmdW5jdGlvbiBzZWxlY3RUYXJnZXQoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICgwLCBfc2VsZWN0Mi5kZWZhdWx0KSh0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ2xpcGJvYXJkQWN0aW9uLnByb3RvdHlwZS5jb3B5VGV4dCA9IGZ1bmN0aW9uIGNvcHlUZXh0KCkge1xuICAgICAgICAgICAgdmFyIHN1Y2NlZWRlZCA9IHZvaWQgMDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBkb2N1bWVudC5leGVjQ29tbWFuZCh0aGlzLmFjdGlvbik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQoc3VjY2VlZGVkKTtcbiAgICAgICAgfTtcblxuICAgICAgICBDbGlwYm9hcmRBY3Rpb24ucHJvdG90eXBlLmhhbmRsZVJlc3VsdCA9IGZ1bmN0aW9uIGhhbmRsZVJlc3VsdChzdWNjZWVkZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHN1Y2NlZWRlZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuYWN0aW9uLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuc2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRoaXMudHJpZ2dlcixcbiAgICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbjogdGhpcy5jbGVhclNlbGVjdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBDbGlwYm9hcmRBY3Rpb24ucHJvdG90eXBlLmNsZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBDbGlwYm9hcmRBY3Rpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGYWtlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKENsaXBib2FyZEFjdGlvbiwgW3tcbiAgICAgICAgICAgIGtleTogJ2FjdGlvbicsXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJ2NvcHknIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGlvbiAhPT0gJ2NvcHknICYmIHRoaXMuX2FjdGlvbiAhPT0gJ2N1dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiYWN0aW9uXCIgdmFsdWUsIHVzZSBlaXRoZXIgXCJjb3B5XCIgb3IgXCJjdXRcIicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICd0YXJnZXQnLFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpID09PSAnb2JqZWN0JyAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2NvcHknICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjdXQnICYmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpIHx8IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBZb3UgY2FuXFwndCBjdXQgdGV4dCBmcm9tIGVsZW1lbnRzIHdpdGggXCJyZWFkb25seVwiIG9yIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBDbGlwYm9hcmRBY3Rpb247XG4gICAgfSgpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmRBY3Rpb247XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGlwYm9hcmQvbGliL2NsaXBib2FyZC1hY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZnVuY3Rpb24gc2VsZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZWN0ZWRUZXh0O1xuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICBlbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGVsZW1lbnQudmFsdWUubGVuZ3RoKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NlbGVjdC9zcmMvc2VsZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdGlueS1lbWl0dGVyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpcyA9IHJlcXVpcmUoJy4vaXMnKTtcbnZhciBkZWxlZ2F0ZSA9IHJlcXVpcmUoJ2RlbGVnYXRlJyk7XG5cbi8qKlxuICogVmFsaWRhdGVzIGFsbCBwYXJhbXMgYW5kIGNhbGxzIHRoZSByaWdodFxuICogbGlzdGVuZXIgZnVuY3Rpb24gYmFzZWQgb24gaXRzIHRhcmdldCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW4odGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghdGFyZ2V0ICYmICF0eXBlICYmICFjYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5zdHJpbmcodHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzLmZuKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlyZCBhcmd1bWVudCBtdXN0IGJlIGEgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAoaXMubm9kZSh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5ub2RlTGlzdCh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlTGlzdCh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMuc3RyaW5nKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblNlbGVjdG9yKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZywgSFRNTEVsZW1lbnQsIEhUTUxDb2xsZWN0aW9uLCBvciBOb2RlTGlzdCcpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgSFRNTCBlbGVtZW50XG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuTm9kZShub2RlLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSBub2RlTGlzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGVMaXN0KG5vZGVMaXN0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBzZWxlY3RvclxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuU2VsZWN0b3Ioc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZ29vZC1saXN0ZW5lci9zcmMvbGlzdGVuLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBIVE1MIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHR5cGUgPT09ICdbb2JqZWN0IE5vZGVMaXN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJylcbiAgICAgICAgJiYgKCdsZW5ndGgnIGluIHZhbHVlKVxuICAgICAgICAmJiAodmFsdWUubGVuZ3RoID09PSAwIHx8IGV4cG9ydHMubm9kZSh2YWx1ZVswXSkpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuc3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuZm4gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2dvb2QtbGlzdGVuZXIvc3JjL2lzLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjbG9zZXN0ID0gcmVxdWlyZSgnLi9jbG9zZXN0Jyk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHZhciBsaXN0ZW5lckZuID0gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgbWF0Y2ggYW5kIGludm9rZXMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuZGVsZWdhdGVUYXJnZXQgPSBjbG9zZXN0KGUudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kZWxlZ2F0ZS9zcmMvZGVsZWdhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIHBvbHlmaWxsIGZvciBFbGVtZW50Lm1hdGNoZXMoKVxuICovXG5pZiAoRWxlbWVudCAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kZWxlZ2F0ZS9zcmMvY2xvc2VzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9