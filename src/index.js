require('./css/dialog.less');
var domUtil = require('./dom.js');
var _ = {
  assign: domUtil.assign
};
/*
生成对话框模板内容
 */
  function getHtmlContent(options){
    var templateHtml = [],
        sureBtn = options.okBtn,
        cancelBtn = options.cancelBtn,
        header = options.header;

    sureBtn = utils.replaceTemlate(sureBtn,options);
    cancelBtn = utils.replaceTemlate(cancelBtn,options);
    header = utils.replaceTemlate(header,options);
    // options.
    templateHtml.push('<div class="modal-dialog ' + options.clazz + '" style="position:fixed;"><header>');
    templateHtml.push(header);
    templateHtml.push('</header><section><div class="dialog-content"></div></section><footer>');
    if(options.btnCount == 2){
      templateHtml.push('<div class="cancle-btn">' + cancelBtn +'</div>');
    }
    templateHtml.push('<div class="sure-btn">' + sureBtn +'</div>');
    templateHtml.push('</footer></div>');

    return templateHtml.join('');
  }
/**
 * [ModalDialog description]
 * clazz: 弹出框的css类名
 * cancelStr 取消按钮的按钮名
 * sureStr 确定按钮的按钮名
 * title 弹出框的标题
 * okBtn 表示确定按钮的html模板
 * cancelBtn 表示取消按钮的html模板
 * header 表示头部的html模板
 * type 创建提示框还是确定提示框
 */
  function ModalDialog(){
    var defaultSettings = {
          clazz: 'dialog-theme',
          cancelStr: '取消',
          sureStr: '确定',
          title: '温馨提示',
          okBtn: '<a href="javascript:void(0);">{sureStr}</a>',
          cancelBtn: '<a href="javascript:void(0);">{cancelStr}</a>',
          header: '<span class="dialog-title">{title}</span>'
        },
        winH = document.documentElement.clientHeight,
        winW = document.documentElement.clientWidth,
        dialogMask = document.querySelector('.dialog-mask');

    var dialogType = {
      insertContent: function(dom,options){
        if(options.selector){
          var comment = document.createComment("dialog-target replace"),
              selector = options.selector,
              oriDisplay = getComputedStyle(selector).getPropertyValue('display');

          selector.parentNode.replaceChild(comment,selector);
          dom._commentDom = comment;

          if(oriDisplay == 'none'){
            selector.style.display = 'block';
          }
          dom._originDisplay = oriDisplay;
          dom.querySelector('.dialog-content').appendChild(options.selector);
        }
        else
          dom.querySelector('.dialog-content').innerHTML = options.content;
      },
      createAlert: function(options){
        var clz = 'alert-dialog ',
            dialog,
            settings;

        if(options.clazz)
          clz += options.clazz;

        settings = _.assign({},options,{clazz: clz,btnCount:1});
        dialog = utils.createHtmlDom(getHtmlContent(settings))
        dialog.setAttribute('data-pos',0);
        this.insertContent(dialog,options);

        document.body.appendChild(dialog);
        utils.bindEvent(dialog.querySelector('.sure-btn'),'click',utils.sureCallback);

        return dialog;
      },
      createConfirm: function(options){
        var clz = 'alert-dialog ',
            settings,
            dialog;

        if(options.clazz)
          clz += options.clazz;

        settings = _.assign({},options,{clazz: 'confirm-dialog',btnCount:2});
        dialog = utils.createHtmlDom(getHtmlContent(settings));
        dialog.setAttribute('data-pos',0);
        this.insertContent(dialog,options);

        document.body.appendChild(dialog);
        utils.bindEvent(dialog.querySelector('.cancle-btn'),'click',utils.cancelCallback);
        utils.bindEvent(dialog.querySelector('.sure-btn'),'click',utils.sureCallback);

        return dialog;
      },
      createMyAwardDlg: function(options){
        var settings = _.assign({},options,{clazz: 'myaward-dialog',btnCount:2}),
            dialog = utils.createHtmlDom(getHtmlContent(settings)),
            result = options.dataList || [],
            awardListHtml =['<div class="dlg-award-list"><ul>'];

        for(var i=0, len = result.length;i < len; i++){
          var item = result[i];
          awardListHtml.push('<li><img src="' + item.imgUrl + '" /><div class="item-title">' + item.name +"</div></li>");
        }
        awardListHtml.push('</ul><div class="address-controller"><span class="dlg-address">收货地址:</span><span class="dlg-input">填写</span></div></div>');
        dialog.setAttribute('data-pos',0);
        dialog.querySelector('.dialog-content').innerHTML = awardListHtml.join('');

        document.body.appendChild(dialog);
        utils.bindEvent(dialog.querySelector('.cancle-btn'),'click',utils.cancelCallback);
        utils.bindEvent(dialog.querySelector('.sure-btn'),'click',utils.sureCallback);
        utils.bindEvent(dialog.querySelector('.dlg-input'),'click',inputCallbackProxy);

        return dialog;

        function inputCallbackProxy(){
          options.inputCallback();
          utils.unBindEvent(dialog.querySelector('.dlg-input'),'click',inputCallbackProxy);
          dialog.style.display = 'none';
          dialogMask.style.display = 'none';
          dialog.parentNode.removeChild(dialog);
        }
      },
      createPersonInfoDlg: function(options){
        var settings = _.assign({},options,{clazz: 'personinfo-dialog',btnCount:2,header:''}),
            dialog = utils.createHtmlDom(getHtmlContent(settings)),
            infoFormHtml = ["<form>"],
            values = options.values,
            formField = options.formField || [
                {name:'recName',value:'收件人:'},
                {name:'mobilephone',value:'手机号码:'},
                {name:'recAddress',value:'收件地址:'},
                {name:'message',value:'留言:'}
              ],inputs;

        for(var i=0, len = formField.length;i < len; i++){
          var item = formField[i];
          infoFormHtml.push('<div class="form-item"><label>');
          infoFormHtml.push(item.value);
          infoFormHtml.push('</label><input class="form-text" type="text" name="' + item.name + '"/></div>');
        }

        infoFormHtml.push("</form>");

        dialog.setAttribute('data-pos',0);
        dialog.querySelector('.dialog-content').innerHTML = infoFormHtml.join('');
        inputs = dialog.querySelectorAll('.dialog-content input');
        for(var i=0,len=inputs.length;i<len;i++){
          if(typeof values[i] != 'undefined' && !!inputs[i])
            inputs[i].value = values[i];
        }
        document.body.appendChild(dialog);
        utils.bindEvent(dialog.querySelector('.sure-btn'),'click',utils.sureCallback);
        utils.bindEvent(dialog.querySelector('.cancle-btn'),'click',utils.cancelCallback);

        return dialog;
      }
    }

    if(!dialogMask){
      dialogMask = utils.createHtmlDom("<div class='dialog-mask'></div>");
      utils.bindEvent(dialogMask,'touchstart',function(event){
        event.preventDefault();
      });
      document.body.appendChild(dialogMask);
    }

    return {
      closeDialog:function(dialogDom,options){
        var selector,
            _commentDom;
        this.hideMask();
        dialogDom.style.display = 'none';
        if(options.selector){
          selector = options.selector;
          _commentDom = dialogDom._commentDom;

          selector.style.display = dialogDom._originDisplay;
          _commentDom.parentNode.replaceChild(selector,_commentDom);

          dialogDom._commentDom = null;
          dialogDom._originDisplay = null;
        }
        dialogDom.parentNode.removeChild(dialogDom);
      },
      dialog: function(options){
        var type = options.type,
            self = this,
            dialogDom,
            dlgPosY,dlgPosX,
            dlgW, dlgH;

        options = _.assign({},defaultSettings,options);
        switch(type){
          case 'alert':
            dialogDom = dialogType.createAlert(options);
            break;
          case 'confirm':
            dialogDom = dialogType.createConfirm(options);
            break;
          case 'awardlist':
            dialogDom = dialogType.createMyAwardDlg(options);
            break;
          case 'personinfo':
            dialogDom = dialogType.createPersonInfoDlg(options);
            break;
        }

        this.initTouch(dialogDom);

        dlgH = dialogDom.offsetHeight;
        dlgW = dialogDom.offsetWidth;
        dlgPosY = (winH - dlgH > 0 ) ? (winH - dlgH)/2 : winH*0.1;
        dlgPosX = (winW - dlgW > 0 ) ? (winW - dlgW)/2 : winW*0.1;

        utils.addCallback(function(event){
          if(typeof options.okCallback == 'function'){
            options.okCallback(event);
          }
          self.closeDialog(dialogDom,options);
        },function(event){
          if(typeof options.cancelCallback == 'function'){
            options.cancelCallback(event);
          }
          self.closeDialog(dialogDom,options);
        });

        self.showMask();
        _.assign(dialogDom.style,{
          display: 'block',
          left: dlgPosX + 'px',
          top: dlgPosY + 'px'
        });

      },
      confirm: function(msg,sureFn,title,btText1,btText2,cancelFn){
        if(typeof msg == 'object')
          this.dialog(_.assign({type:'confirm'},msg));
        else{
          var context = {
            type:'confirm',
            title: title,
            content: msg,
            okCallback:sureFn,
            cancelCallback:cancelFn,
            sureStr: btText2,
            cancelStr:btText1
          };
          this.dialog(createParams(context));
        }
      },
      alert: function(content,title,callback,dom){
        if(typeof content == 'object')
          this.dialog(_.assign({type:'alert'},content));
        else{
          var context = {
            type:'alert',
            title: title,
            content: content,
            okCallback:callback,
            selector: dom
          };
          this.dialog(createParams(context));
        }
      },
      //deprecated
      alertAwardList: function(datalist,title,inputCallback,okFn,cancelFn,btText1,btText2){

        var context = {
          type:'awardlist',
          dataList:datalist,
          title: title,
          okCallback:okFn,
          cancelCallback:cancelFn,
          sureStr: btText2 || "分享到朋友圈",
          cancelStr:btText1 || "确定",
          inputCallback: inputCallback
        };
        this.dialog(createParams(context));
      },
      //deprecated
      alertPersonInfoDlg: function(formField,values,okFn,cancelFn,btText1,btText2){
        var context = {
          type: 'personinfo',
          formField:formField,
          okCallback:okFn,
          cancelCallback:cancelFn,
          sureStr: btText2,
          cancelStr:btText1,
          values:values || []
        };
        this.dialog(createParams(context));
      },
      showMask: function(){
        dialogMask.style.display = 'block';
      },
      hideMask: function(){
        dialogMask.style.display = 'none';
      },
      initTouch: function(dialog){
        var dlgContent =  dialog.querySelector('.dialog-content'),
            section = dialog.getElementsByTagName('section')[0],
            maxHeight, startPosx, startPosy, isTouch,
            lastPosY, timer;

        maxHeight = getComputedStyle(section).getPropertyValue('height').replace('px','')*1 -dlgContent.offsetHeight;

        utils.bindEvent(dialog,'touchmove',stopScrollMove);
        utils.bindEvent(dialog,'touchstart',startTouch);
        utils.bindEvent(dialog,'touchend',toucheEnd);

        function startTouch(e){
          var touch = e.touches[0];

          if(e.target.className.indexOf('dialog-content') >= 0){
            startPosx = touch.screenX;
            startPosy = touch.screenY;
            isTouch = true;
          }
        }
        function stopScrollMove(e){
          var touch = e.touches[0],
              target = e.target,
              currentTarget = e.currentTarget,
              posX = touch.screenX,
              posY = touch.screenY,
              currentPosY = currentTarget.attributes['data-pos'].value*1 || 0,
              distance;

          if(isTouch){
            if(Math.abs(posX - startPosx) < 10 && Math.abs(posY - startPosy) > 10){
              distance = currentPosY + posY - startPosy ;
              if(distance < maxHeight)
                distance = maxHeight;
              else if(distance > 0)
                distance = 0;
              currentTarget.attributes['data-pos'].value = distance;
              scrollTo(target,currentPosY,distance);

              startPosx = posX;
              startPosy = posY;
            }
          }

          e.preventDefault();
          e.stopPropagation()

          return false;
        }
        function toucheEnd(){
          startPosx = null;
          startPosy = null;
          isTouch = false;
        }

        function scrollTo(target,curPosY,y){
          var step = 5;

          lastPosY = y;
          if(timer != null){
            clearTimer();
          }

          timer = setInterval(_innerScroll,18);
          _innerScroll();

          function _innerScroll(){
            curPosY -= step;
            if(curPosY < lastPosY){
              clearTimer();
              curPosY = lastPosY;
            }
            target.style.webkitTransform  = 'translate3d(0px,' + curPosY + 'px,0px)';
          }
          function clearTimer(){
            timer = null;
            clearInterval(timer);
          }
        }
      }
    }

    function createParams(param){
      var res = {};

      for(var p in param){
        if(param.hasOwnProperty(p)){
          if(typeof param[p] != 'undefined'){
            res[p] = param[p];
          }
        }
      }
      return res;
    }
  }

  var utils = _.assign({
    callbacks: [],
    cancelCallback: function(event){
      var target = event.target,
          callback = utils.callbacks.pop();

      utils.clearListener(target,callback);
      if(callback.cancelFn)
        callback.cancelFn(event);

    },
    sureCallback: function(event){
      var target = event.target,
          callback = utils.callbacks.pop();

      utils.clearListener(target,callback);
      if(callback.okFn)
        callback.okFn(event);

    },
    clearListener: function(target,callback){
      if(callback.cancelFn)
        utils.unBindEvent(target,'click',utils.cancelCallback);
      if(callback.okFn)
        utils.unBindEvent(target,'click',utils.sureCallback);
    },
    addCallback: function(okCallback,cancelCallback){
      if(!!cancelCallback){
        utils.callbacks.push({okFn:okCallback, cancelFn: cancelCallback});
      }else{
        utils.callbacks.push({okFn:okCallback});
      }
    }
  },domUtil);

  module.exports = ModalDialog() ;
  // export default ModalDialog();
