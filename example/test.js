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

	var dialog = __webpack_require__(1);
	
	dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少。<input type="text" style="width:100px;" />然而，我们可以看到 Webpack 打包后的 all.js 文件不仅没有压缩，而且代码当中的注释也没有去掉Webpack 同样提供了 UglifyJsPlugin 的插件来进行压缩代码操作。但是在我尝试的过程中，这个插件和 html-loader 配合使用的时候会出现错误，因此在这里我使用了 Gulp 来进行代码压缩的工作。Webpack 与 Gulp 配合使用也相当简单，只需要安装 gulp-webpack安装 Gulp 和其他所需的工具缺点：通过设备宽度范围区间这样的媒体查询来动态改变rem基准值，其实不够精确，比如：宽度为360px 和 宽度为320px的手机，因为屏宽在同一范围区间内(<375px)，所以会被同等对待(rem基准值相同)，而事实上他们的屏幕宽度并不相等，它们的布局也应该有所不同。最终，结论就是：这样的做法，没有做到足够的精确，但是够用。本部分将专注于 JavaScript 语言本身，而并非局限于网页或其他宿主环境。想要了解网页有关的 API',"确认放弃领奖",function(){
	   console.log('i am alert');
	 });
	
	// dialog.confirm('弹框内容区域此处展示各种描述弹框内容区域此处展示各种描述',function(){
	//   console.log('i am confirm');
	// },"确认放弃领奖");
	// dialog.confirm('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少。然而，我们可以看到 Webpack 打包后的 all.js 文件不仅没有压缩，而且代码当中的注释也没有去掉Webpack 同样提供了 UglifyJsPlugin 的插件来进行压缩代码操作。但是在我尝试的过程中，这个插件和 html-loader 配合使用的时候会出现错误，因此在这里我使用了 Gulp 来进行代码压缩的工作。Webpack 与 Gulp 配合使用也相当简单，只需要安装 gulp-webpack安装 Gulp 和其他所需的工具缺点：通过设备宽度范围区间这样的媒体查询来动态改变rem基准值，其实不够精确，比如：宽度为360px 和 宽度为320px的手机，因为屏宽在同一范围区间内(<375px)，所以会被同等对待(rem基准值相同)，而事实上他们的屏幕宽度并不相等，它们的布局也应该有所不同。最终，结论就是：这样的做法，没有做到足够的精确，但是够用。本部分将专注于 JavaScript 语言本身，而并非局限于网页或其他宿主环境。想要了解网页有关的 API',function(){
	//    console.log('i am confirm');
	//  },"确认放弃领奖",'放弃奖品','继续填写',function(){
	//    console.log('i am confirm cancel');
	//  })
	// dialog.alertAwardList([{imgUrl:'xx.jpg',name:'pro 5'},{imgUrl:'xx.jpg',name:'魅族 5'},{imgUrl:'xx.jpg',name:'pro 6'}],'确认放弃领奖?',
	//     function(){
	//       dialog.alertPersonInfoDlg();
	//     },
	//     function(){
	//      console.log('i am confirm');
	//    },function(){
	//      console.log('i am confirm cancel');
	//    },'确定','分享到朋友圈');
	
	
	// dialog.alert({selector:document.getElementById('info-form')});
	// dialog.confirm({selector:document.getElementById('info-form')});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pdDialog=t():e.pdDialog=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={exports:{},id:a,loaded:!1};return e[a].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,exports,t){function n(e){var t=[],n=e.okBtn,a=e.cancelBtn,l=e.header;return n=c.replaceTemlate(n,e),a=c.replaceTemlate(a,e),l=c.replaceTemlate(l,e),t.push('<div class="modal-dialog '+e.clazz+'" style="position:fixed;"><header>'),t.push(l),t.push('</header><section><div class="dialog-content"></div></section><footer>'),2==e.btnCount&&t.push('<div class="cancle-btn">'+a+"</div>"),t.push('<div class="sure-btn">'+n+"</div>"),t.push("</footer></div>"),t.join("")}function a(){function e(e){var t={};for(var n in e)e.hasOwnProperty(n)&&"undefined"!=typeof e[n]&&(t[n]=e[n]);return t}var t={clazz:"dialog-theme",cancelStr:"取消",sureStr:"确定",title:"温馨提示",okBtn:'<a href="javascript:void(0);">{sureStr}</a>',cancelBtn:'<a href="javascript:void(0);">{cancelStr}</a>',header:'<span class="dialog-title">{title}</span>'},a=window.innerHeight?window.innerHeight:document.documentElement.clientHeight,l=window.innerWidth?window.innerWidth:document.documentElement.clientWidth,i=document.querySelector(".dialog-mask"),r={insertContent:function(e,t){if(t.selector){var n=document.createComment("dialog-target replace"),a=t.selector,l=getComputedStyle(a).getPropertyValue("display");a.parentNode.replaceChild(n,a),e._commentDom=n,"none"==l&&(a.style.display="block"),e._originDisplay=l,e.querySelector(".dialog-content").appendChild(t.selector)}else e.querySelector(".dialog-content").innerHTML=t.content},createAlert:function(e){var t,a,l="alert-dialog ";return e.clazz&&(l+=e.clazz),a=o.assign({},e,{clazz:l,btnCount:1}),t=c.createHtmlDom(n(a)),t.setAttribute("data-pos",0),this.insertContent(t,e),document.body.appendChild(t),c.bindEvent(t.querySelector(".sure-btn"),"click",c.sureCallback),t},createConfirm:function(e){var t,a,l="alert-dialog ";return e.clazz&&(l+=e.clazz),t=o.assign({},e,{clazz:"confirm-dialog",btnCount:2}),a=c.createHtmlDom(n(t)),a.setAttribute("data-pos",0),this.insertContent(a,e),document.body.appendChild(a),c.bindEvent(a.querySelector(".cancle-btn"),"click",c.cancelCallback),c.bindEvent(a.querySelector(".sure-btn"),"click",c.sureCallback),a},createMyAwardDlg:function(e){function t(){e.inputCallback(),c.unBindEvent(l.querySelector(".dlg-input"),"click",t),l.style.display="none",i.style.display="none",l.parentNode.removeChild(l)}for(var a=o.assign({},e,{clazz:"myaward-dialog",btnCount:2}),l=c.createHtmlDom(n(a)),r=e.dataList||[],s=['<div class="dlg-award-list"><ul>'],d=0,u=r.length;u>d;d++){var p=r[d];s.push('<li><img src="'+p.imgUrl+'" /><div class="item-title">'+p.name+"</div></li>")}return s.push('</ul><div class="address-controller"><span class="dlg-address">收货地址:</span><span class="dlg-input">填写</span></div></div>'),l.setAttribute("data-pos",0),l.querySelector(".dialog-content").innerHTML=s.join(""),document.body.appendChild(l),c.bindEvent(l.querySelector(".cancle-btn"),"click",c.cancelCallback),c.bindEvent(l.querySelector(".sure-btn"),"click",c.sureCallback),c.bindEvent(l.querySelector(".dlg-input"),"click",t),l},createPersonInfoDlg:function(e){for(var t,a=o.assign({},e,{clazz:"personinfo-dialog",btnCount:2,header:""}),l=c.createHtmlDom(n(a)),i=["<form>"],r=e.values,s=e.formField||[{name:"recName",value:"收件人:"},{name:"mobilephone",value:"手机号码:"},{name:"recAddress",value:"收件地址:"},{name:"message",value:"留言:"}],d=0,u=s.length;u>d;d++){var p=s[d];i.push('<div class="form-item"><label>'),i.push(p.value),i.push('</label><input class="form-text" type="text" name="'+p.name+'"/></div>')}i.push("</form>"),l.setAttribute("data-pos",0),l.querySelector(".dialog-content").innerHTML=i.join(""),t=l.querySelectorAll(".dialog-content input");for(var d=0,u=t.length;u>d;d++)"undefined"!=typeof r[d]&&t[d]&&(t[d].value=r[d]);return document.body.appendChild(l),c.bindEvent(l.querySelector(".sure-btn"),"click",c.sureCallback),c.bindEvent(l.querySelector(".cancle-btn"),"click",c.cancelCallback),l}};return i||(i=c.createHtmlDom("<div class='dialog-mask'></div>"),c.bindEvent(i,"touchstart",function(e){e.preventDefault()}),document.body.appendChild(i)),{closeDialog:function(e,t){var n,a;this.hideMask(),e.style.display="none",t.selector&&(n=t.selector,a=e._commentDom,n.style.display=e._originDisplay,a.parentNode.replaceChild(n,a),e._commentDom=null,e._originDisplay=null),e.parentNode.removeChild(e)},dialog:function(e){var n,i,s,d,u,p=e.type,f=this;switch(e=o.assign({},t,e),p){case"alert":n=r.createAlert(e);break;case"confirm":n=r.createConfirm(e);break;case"awardlist":n=r.createMyAwardDlg(e);break;case"personinfo":n=r.createPersonInfoDlg(e)}this.initTouch(n),u=n.offsetHeight,d=n.offsetWidth,i=a-u>0?(a-u)/2:.1*a,s=l-d>0?(l-d)/2:.1*l,c.addCallback(function(t){setTimeout(function(){f.closeDialog(n,e)},1),"function"==typeof e.okCallback&&e.okCallback(t)},function(t){setTimeout(function(){f.closeDialog(n,e)},1),"function"==typeof e.cancelCallback&&e.cancelCallback(t)}),f.showMask(),o.assign(n.style,{display:"block",left:s+"px",top:i+"px"})},confirm:function(t,n,a,l,c,i){if("object"==typeof t)this.dialog(o.assign({type:"confirm"},t));else{var r={type:"confirm",title:a,content:t,okCallback:n,cancelCallback:i,sureStr:c,cancelStr:l};this.dialog(e(r))}},alert:function(t,n,a,l){if("object"==typeof t)this.dialog(o.assign({type:"alert"},t));else{var c={type:"alert",title:n,content:t,okCallback:a,selector:l};this.dialog(e(c))}},alertAwardList:function(t,n,a,l,o,c,i){var r={type:"awardlist",dataList:t,title:n,okCallback:l,cancelCallback:o,sureStr:i||"分享到朋友圈",cancelStr:c||"确定",inputCallback:a};this.dialog(e(r))},alertPersonInfoDlg:function(t,n,a,l,o,c){var i={type:"personinfo",formField:t,okCallback:a,cancelCallback:l,sureStr:c,cancelStr:o,values:n||[]};this.dialog(e(i))},showMask:function(){i.style.display="block"},hideMask:function(){i.style.display="none"},showLoading:function(){document.getElementById("loading-box")||$("body").append('<div id="loading-box" class="dialog-mask"><div class="load-contain"><span class="load1"></span><span class="load2"></span></div></div>'),document.getElementById("loading-box").style.display="block"},hideLoading:function(){document.getElementById("loading-box").style.display="none"},initTouch:function(e){function t(e){var t=e.touches[0];e.target.className.indexOf("dialog-content")>=0&&(i=t.screenX,r=t.screenY,s=!0)}function n(e){var t,n=e.touches[0],a=e.target,c=e.currentTarget,d=a.nodeName.toLowerCase(),u=n.screenX,p=n.screenY,f=1*c.attributes["data-pos"].value||0;return s&&Math.abs(u-i)<10&&Math.abs(p-r)>10&&(t=f+p-r,o>t?t=o:t>0&&(t=0),c.attributes["data-pos"].value=t,l(a,f,t),i=u,r=p),"input"!=d&&"select"!=d&&"textarea"!=d&&(e.preventDefault(),e.stopPropagation()),!1}function a(){i=null,r=null,s=!1}function l(e,t,n){function a(){t-=o,d>t&&(l(),t=d),e.style.webkitTransform="translate3d(0px,"+t+"px,0px)"}function l(){u=null,clearInterval(u)}var o=5;d=n,null!=u&&l(),u=setInterval(a,18),a()}var o,i,r,s,d,u,p=e.querySelector(".dialog-content"),f=e.getElementsByTagName("section")[0];o=1*getComputedStyle(f).getPropertyValue("height").replace("px","")-p.offsetHeight,c.bindEvent(e,"touchmove",n),c.bindEvent(e,"touchstart",t),c.bindEvent(e,"touchend",a)}}}t(1);var l=t(5),o={assign:l.assign},c=o.assign({callbacks:[],cancelCallback:function(e){var t=e.target,n=c.callbacks.pop();c.clearListener(t,n),n.cancelFn&&(n.cancelFn(e)?c.callbacks.push(n):c.clearListener(t,n))},sureCallback:function(e){var t=e.target,n=c.callbacks.pop();n.okFn&&(n.okFn(e)?c.callbacks.push(n):c.clearListener(t,n))},clearListener:function(e,t){t.cancelFn&&c.unBindEvent(e,"click",c.cancelCallback),t.okFn&&c.unBindEvent(e,"click",c.sureCallback)},addCallback:function(e,t){t?c.callbacks.push({okFn:e,cancelFn:t}):c.callbacks.push({okFn:e})}},l);e.exports=a()},function(e,exports){},,,,function(e,exports){e.exports={createHtmlDom:function(){var e=document.createElement("div");return function(t){var n;return e.innerHTML=t,n=e.children[0],e.removeChild(n),n}}(),replaceTemlate:function(e,t){for(var n,a=new RegExp(/{(.*?)}/g);n=a.exec(e);)e=e.replace(n[0],t[n[1]]);return e},bindEvent:function(e,t,n){e.addEventListener(t,n,!1)},unBindEvent:function(e,t,n){e.removeEventListener(t,n)},getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?decodeURI(n[2]):null},assign:function(){for(var e=arguments[0],t=[].slice.call(arguments,1),n=0,a=t.length;a>n;n++){var l=t[n];for(var o in l)l.hasOwnProperty(o)&&(e[o]=l[o])}return e}}}])});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=test.js.map