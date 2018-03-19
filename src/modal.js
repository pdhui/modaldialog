var baseCss = require('./css/base.less');

var utils = require('./dom.js');
var scrollDlg = require('./dlgscroll.js');
var _ = {
  assign: utils.assign
}, winH, winW;

function noop(){}

//动态插入css样式
function insertStyleToHead(baseFontSize){
  var style = document.createElement('style');

  style.innerHTML = utils.fnTemplate(
    baseCss,
    {
      rem: function(px){
        return px.replace(/(\d+)px/,function(expr, val){
          return (val *1 / baseFontSize) + 'rem';
        });
      }
    });
  var headDom = document.querySelector('head');
  var firstLink = headDom.querySelector('link');

  if(!firstLink)
    headDom.appendChild(style);
  else
    headDom.insertBefore(style, firstLink);

}

/*
生成对话框模板内容
 */
  function getHtmlContent(options){
    var templateHtml = [],
        header = options.header;

    templateHtml.push('<div class="rc-modal"><div class="dialog-mask"></div><div class="modal-dialog ' + options.clazz + '"><div class="modal-dialog-main">');
    if(options.title != null && options.title != ''){
      templateHtml.push('<header>' + utils.replaceTemlate(header,options) + '</header>');
    }
    templateHtml.push('<section><div class="dialog-content"></div></section><footer>');
    templateHtml.push(createButtons.call(this,options));
    templateHtml.push('</footer></div></div></div>');

    return templateHtml.join('');
  }

  function resizeWin(){
    winH = window.innerHeight ? window.innerHeight : document.body.clientHeight;
    winW = window.innerWidth ? window.innerWidth : document.body.clientWidth;
  }
  // utils.bindEvent(window,'resize',resizeWin);
//TODO:
  // resizeWin();
  /*
  创建底部按钮
   */
  function createButtons(options){
    var btns = options.buttons || [],
        template = '<button type="button" class="{cls}" data-id="{id}" >{name}</button>',
        btnTmpls = '',
        self = this,
        oneBtnClz='';

    if(options.cancelCallback){
      btns.push({
        id: 'cancel',
        name: options.cancelStr,
        callback: options.cancelCallback,
        cls: "cancle-btn"
      });
    }

    if(btns.length ==0)
      oneBtnClz = ' modal-dialog-onebtn';

    if(options.okCallback){
      btns.push({
        id: 'ok',
        name: options.sureStr,
        callback: options.okCallback,
        cls: "sure-btn" + oneBtnClz
      });
    }

    if(options.reverse)
      btns = btns.reverse();

    btns.forEach(function(item,index){
      if((btns.length - 1) == index)
        item.cls += ' last';
      btnTmpls += utils.replaceTemlate(template,item);
      self.callbacks[item.id] = item.callback;
    });

    return btnTmpls;
  }

  function insertContent(dom,options){
      if(options.selector){
        var comment = document.createComment("dialog-target replace"),
            selector = options.selector,
            oriDisplay = getComputedStyle(selector).getPropertyValue('display');

        if(selector.parentNode){
          selector.parentNode.replaceChild(comment,selector);
          dom._commentDom = comment;
          if(oriDisplay == 'none'){
            selector.style.display = 'block';
          }
          dom._originDisplay = oriDisplay;
        }

        dom.querySelector('.dialog-content').appendChild(selector);
      }
      else
        dom.querySelector('.dialog-content').innerHTML = options.content.replace(/(\r\n|\n|\r)/gm, '<br/>');
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

  var ModalDialog = function(options){
    var dialog,
        id;

    options = _.assign({},defaultSettings,options);

    options._callBacks = options._callBacks || {};
    id = options.id = options.id || _count;

    Object.keys(options).forEach(function(name){
      if (typeof options[name] === 'function') {
        options._callBacks[name] = options[name];
      }
    });

    beforeListeners.forEach(function(listener){
      listener(options);
    });

    ModalDialog.dialogList[id] = dialog = new ModalDialog.create(options);

    ModalDialog.modalCount ++;

    afterListeners.forEach(function(listener){
      listener(dialog);
    });

    _count ++;

    return dialog;
  };

  ModalDialog.create = function(options){
    var dialogDom,
        dlgPos,
        dlgMainDom,
        offsetH;

    this.callbacks = options._callBacks;
    this.id = options.id;

    dialogDom = utils.createHtmlDom(getHtmlContent.call(this,options));

    insertContent(dialogDom,options);
    document.body.appendChild(dialogDom);

    offsetH = document.documentElement.offsetHeight;

    this.dlgScroll = scrollDlg.initTouch(dialogDom);

    dlgMainDom = dialogDom.querySelector('.modal-dialog');
    dlgPos = this.getPos(dlgMainDom);

    _.assign(dlgMainDom.style,{
      display: 'block',
      left: dlgPos.left + 'px',
      top: dlgPos.top + 'px'
    });

    if(options.animated)
      dialogDom.querySelector('.modal-dialog-main').className += ' dlg-animation';

    if(options.useBackground){
      var userbgr = options.useBackground;
      if(!options._callBacks[userbgr]){
        options._callBacks[userbgr] = function(){};
      }
      dialogDom.querySelector('.dialog-mask').dataset.id = options.useBackground;
    }

    dialogDom.querySelector('.dialog-mask').style.height = offsetH + 'px';

    this._eventListener = this.proxy(this._clickEvent,dialogDom,options);
    this.dialogDom = dialogDom;
    this.options = options;
    utils.bindEvent(dialogDom,'click',this._eventListener);

    return this;
  };
  _.assign(ModalDialog.create.prototype,{
    callbacks: null,
    getPos: function(dialogDom){
      dialogDom = dialogDom || this.dialogDom;
      if(!dialogDom){
        return {left:0,top:0};
      }
      resizeWin();
      var dlgH = dialogDom.offsetHeight;
      var dlgW = dialogDom.offsetWidth;
      var dlgPosY = (winH - dlgH >= 0 ) ? (winH - dlgH)/2 : winH*0.1;
      var dlgPosX = (winW - dlgW >= 0 ) ? (winW - dlgW)/2 : winW*0.1;

      return {left: dlgPosX, top: dlgPosY};
    },
    closeDialog:function(isNotInvoke){
      var dialogDom = this.dialogDom,
          options = this.options,
          selector,
          _commentDom,
          self = this;

      if(!dialogDom)
        return 1;

      this.removeDialog(dialogDom, options);

      if(options.selector && dialogDom._commentDom){
        selector = options.selector;
        _commentDom = dialogDom._commentDom;

        selector.style.display = dialogDom._originDisplay;
        _commentDom.parentNode.replaceChild(selector,_commentDom);

        dialogDom._commentDom = null;
        dialogDom._originDisplay = null;
      }
      utils.unBindEvent(dialogDom,'click',this._eventListener);
      // dialogDom.parentNode.removeChild(dialogDom);
      this.dlgScroll.destroyScroll && this.dlgScroll.destroyScroll();

      if(!isNotInvoke){
        closedListeners.forEach(function(listener){
          listener(self);
        });
      }else{
        if(options.cancelCallback)
          options.cancelCallback();
      }

      this._eventListener = null;
      this.dialogDom = dialogDom = null;

      options.complete && options.complete();

      delete ModalDialog.dialogList[this.id];

      ModalDialog.modalCount --;
    },
    removeDialog: function(dlgDom){
      utils.bindEvent(dlgDom, 'transitionend', _removeTransition)
      utils.bindEvent(dlgDom,'webkitTransitionEnd', _removeTransition);

      dlgDom.style.opacity = 0;

      function _removeTransition(){
        utils.unBindEvent(dlgDom,'transitionend',_removeTransition);
        utils.unBindEvent(dlgDom,'webkitTransitionEnd',_removeTransition);
        dlgDom.parentNode.removeChild(dlgDom);
      }
    },
    refresh: function(){
      var dialogDom = this.dialogDom.querySelector('.modal-dialog'),
          dlgPos = this.getPos(dialogDom);

      _.assign(dialogDom.style,{
        display: 'block',
        left: dlgPos.left + 'px',
        top: dlgPos.top + 'px'
      });
      this.dlgScroll.refresh();
    },
    _clickEvent: function(e,dialogDom,options){
      var target = e.target,
          id = target.getAttribute('data-id'),
          self = this;

      if(typeof this.callbacks[id] == 'function' && !this.callbacks[id].call(this,e)){
        // setTimeout(function(){
          self.closeDialog();
        // },1);
      }
    },
    proxy: function(fn){
      var self = this,
          wrapArgs = Array.prototype.slice.call(arguments,1);

      return function(){
        var args = Array.prototype.slice.call(arguments);

        if(wrapArgs.length > 0)
          args = args.concat(wrapArgs);

        fn.apply(self,args);
      }
    }
  });

  ModalDialog.alert = function(content,title,callback,dom,cls){
    var clz = content.clazz ? content.clazz : (cls ? cls : '');

    clz += ' alert-dialog';

    if(typeof content !== 'object'){
      content = utils.createParams({
                  title: title,
                  content: content,
                  okCallback:callback,
                  selector: dom
               });
    }

    content.okCallback = content.okCallback || noop;

    if(!content.title)
      clz += ' dlg-no-title';
    else
      clz += ' dlg-has-title';

    content.clazz = clz;
    return ModalDialog(content);
  }

  ModalDialog.confirm = function(content,sureFn,title,btText1,btText2,cancelFn,cls){
    var clz = content.clazz ? content.clazz : (cls ? cls : '');

    clz += ' confirm-dialog';

    if(typeof content !== 'object'){
      content = utils.createParams({
                  title: title,
                  content: content,
                  okCallback:sureFn,
                  cancelCallback:cancelFn,
                  sureStr: btText2,
                  cancelStr:btText1
               });
    }

    if(!content.title)
      clz += ' dlg-no-title';
    else
      clz += ' dlg-has-title';

    content.okCallback = content.okCallback || noop;
    content.cancelCallback = content.cancelCallback || noop;
    content.clazz = clz;
    return ModalDialog(content);
  };

  ModalDialog.afterListener = function(listener){
    afterListeners.push(listener);

    return function(){
      afterListeners = afterListeners.filter(function(item){
        return item != listener;
      })
    }
  };

  ModalDialog.preListener = function(listener){
    beforeListeners.push(listener);

    return function(){
      beforeListeners = beforeListeners.filter(function(item){
        return item != listener;
      })
    }
  };

  ModalDialog.closedListener = function(listener){
    closedListeners.push(listener);

    return function(){
      closedListeners = closedListeners.filter(function(item){
        return item != listener;
      })
    }
  };

  var _plugins = [];

  ModalDialog.addPlugin = function(fn){
    _plugins.push(fn);
  };

  ModalDialog.defaultConfig = {};
  var isConfig = false;

  ModalDialog.config = function(config){
    var options = utils.assign({},ModalDialog.defaultConfig,config);

    ModalDialog.options = options;
    if(isConfig){
      console.info('modaldialg only can config once');
      return;
    }

    for(var i=0, len=_plugins.length; i < len; i++){
      _plugins[i](ModalDialog, options);
    }

    insertStyleToHead(options.baseFontSize || 16);

    isConfig = true;
  }

  utils.bindEvent(window, "orientationchange",function(){
    Object.keys(ModalDialog.dialogList).forEach(dialog=>{
      ModalDialog.dialogList[dialog].refresh();
    });
  });

  ModalDialog.dialogList = {};
  ModalDialog.modalCount = 0;

ModalDialog.DomUtils = utils;

module.exports = ModalDialog;
