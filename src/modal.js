var utils = require('./dom.js');
var scrollDlg = require('./dlgscroll.js');
var _ = {
  assign: utils.assign
};
/*
生成对话框模板内容
 */
  function getHtmlContent(options){
    var templateHtml = [],
        header = options.header;

    header = utils.replaceTemlate(header,options);

    templateHtml.push('<div class="modal-dialog ' + options.clazz + '" style="position:fixed;"><div class="dialog-mask"></div><div class="modal-dialog-main"><header>');
    templateHtml.push(header);
    templateHtml.push('</header><section><div class="dialog-content"></div></section><footer>');
    templateHtml.push(createButtons.call(this,options));
    templateHtml.push('</footer></div></div>');

    return templateHtml.join('');
  }
  /*
  创建底部按钮
   */
  function createButtons(options){
    var btns = options.buttons || [],
        template = '<button class="{cls}" data-id="{id}" >{name}</button>',
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
 * type 创建提示框还是确定提示框
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
      };

  var ModalDialog = function(options){
    options = _.assign({},defaultSettings,options);

    options._callBacks = options._callBacks || {};

    Object.keys(options).forEach(function(name){
      if (typeof options[name] === 'function') {
        options._callBacks[name] = options[name];
      }
    });
    return new ModalDialog.create(options);
  };

  ModalDialog.create = function(options){
    var dialogDom,
        dlgPosY,dlgPosX,
        dlgW, dlgH;

    this.callbacks = options._callBacks;
    dialogDom = utils.createHtmlDom(getHtmlContent.call(this,options));
    dialogDom.setAttribute('data-pos',0);
    insertContent(dialogDom,options);
    document.body.appendChild(dialogDom);

    this.destroyScroll = scrollDlg.initTouch(dialogDom);

    if(!this.winH)
      this.winH = window.innerHeight ? window.innerHeight : document.body.clientHeight;
    if(!this.winW)
      this.winW = window.innerWidth ? window.innerWidth : document.body.clientWidth;

    dlgH = dialogDom.offsetHeight;
    dlgW = dialogDom.offsetWidth;
    dlgPosY = (this.winH - dlgH > 0 ) ? (this.winH - dlgH)/2 : this.winH*0.1;
    dlgPosX = (this.winW - dlgW > 0 ) ? (this.winW - dlgW)/2 : this.winW*0.1;

    _.assign(dialogDom.style,{
      display: 'block',
      left: dlgPosX + 'px',
      top: dlgPosY + 'px'
    });

    if(options.animated)
      dialogDom.className += ' dlg-animation';

    this._eventListener = this.proxy(this._clickEvent,dialogDom,options);
    utils.bindEvent(dialogDom,'click',this._eventListener);

    return this;
  };
  _.assign(ModalDialog.create.prototype,{
    callbacks: null,
    closeDialog:function(dialogDom,options){
      var selector,
          _commentDom;

      dialogDom.style.display = 'none';
      if(options.selector && dialogDom._commentDom){
        selector = options.selector;
        _commentDom = dialogDom._commentDom;

        selector.style.display = dialogDom._originDisplay;
        _commentDom.parentNode.replaceChild(selector,_commentDom);

        dialogDom._commentDom = null;
        dialogDom._originDisplay = null;
      }
      utils.unBindEvent(dialogDom,'click',this._eventListener);
      dialogDom.parentNode.removeChild(dialogDom);
      this.destroyScroll();
      this._eventListener = null;
      dialogDom = null;
    },
    _clickEvent: function(e,dialogDom,options){
      var target = e.target,
          id = target.getAttribute('data-id'),
          self = this;

      if(typeof this.callbacks[id] == 'function' && !this.callbacks[id].call(this,e)){
        setTimeout(function(){
          self.closeDialog(dialogDom,options);
        },1);
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

  module.exports = ModalDialog;
