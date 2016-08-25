require('./css/dialog.less');
var domUtil = require('./dom.js');
var ModalDialog = require('./modal.js');
var hashHistory = require('./hashHistory.js');

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

  function isPlainObject(obj){
    return Object.prototype.toString.call(obj) == '[object Object]';
  }
  function noop(){}

  ModalDialog.alert = function(content,title,callback,dom,cls){
    var clz = content.clazz ? content.clazz : (cls ? cls : '');

    clz += ' alert-dialog';

    if(typeof content !== 'object'){
      content = createParams({
                  title: title,
                  content: content,
                  okCallback:callback,
                  selector: dom
               });
    }

    content.okCallback = content.okCallback || noop;
    content.clazz = clz;
    return ModalDialog(content);
  }

  ModalDialog.confirm = function(content,sureFn,title,btText1,btText2,cancelFn,cls){
    var clz = content.clazz ? content.clazz : (cls ? cls : '');

    clz += ' confirm-dialog';

    if(typeof content !== 'object'){
      content = createParams({
                  title: title,
                  content: content,
                  okCallback:sureFn,
                  cancelCallback:cancelFn,
                  sureStr: btText2,
                  cancelStr:btText1
               });
    }

    content.okCallback = content.okCallback || noop;
    content.cancelCallback = content.cancelCallback || noop;
    content.clazz = clz;
    return ModalDialog(content);
  }

  ModalDialog.alertAwardList = function(datalist,title,inputCallback,okFn,cancelFn,btText1,btText2){
    var awardListHtml =['<div class="dlg-award-list"><ul>'],
        settings, result;

    if(!isPlainObject(datalist)){
      settings = createParams({
        dataList:datalist,
        title: title,
        okCallback:okFn,
        cancelCallback:cancelFn,
        sureStr: btText2 || "分享到朋友圈",
        cancelStr:btText1 || "确定",
        fillform: inputCallback
      });
    }else{
      settings = datalist;
    }

    settings.clazz = 'myaward-dialog';

    result = settings.dataList || [];

    for(var i=0, len = result.length;i < len; i++){
      var item = result[i];
      awardListHtml.push('<li><img src="' + item.imgUrl + '" /><div class="item-title">' + item.name +"</div></li>");
    }
    awardListHtml.push('</ul><div class="address-controller"><span class="dlg-address">收货地址:</span><span class="dlg-input" data-id="fillform">填写</span></div></div>');

    settings.content = awardListHtml.join('');
    return ModalDialog(settings);
  };

  ModalDialog.alertPersonInfoDlg = function(formField,values,okFn,cancelFn,btText1,btText2){
    var infoFormHtml = ["<form>"],
        inputs,values,settings,infoFormDom ;

    if(!isPlainObject(formField)){
      settings = createParams({
        formField:formField,
        okCallback:okFn,
        cancelCallback:cancelFn,
        sureStr: btText2,
        cancelStr:btText1,
        values:values || []
      });
    }else{
      settings = formField;
    }

    settings.okCallback = settings.okCallback || noop;
    settings.cancelCallback = settings.cancelCallback || noop;
    formField = settings.formField = settings.formField || [
            {name:'recName',value:'收件人:'},
            {name:'mobilephone',value:'手机号码:'},
            {name:'recAddress',value:'收件地址:'},
            {name:'message',value:'留言:'}
          ];
    settings.clazz = 'personinfo-dialog';
    settings.header = '';

    for(var i=0, len = formField.length;i < len; i++){
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
    for(var i=0,len=inputs.length;i<len;i++){
      if(typeof values[i] != 'undefined')
        inputs[i].value = values[i];
    }

    settings.selector = infoFormDom;
    return ModalDialog(settings);
  };

  ModalDialog.showLoading = function(){
    if(!document.getElementById('loading-box')){
      document.body.appendChild(domUtil.createHtmlDom('<div id="loading-box" class="dialog-mask"><div class="load-contain">' +
        '<span class="load1"></span><span class="load2"></span></div></div>'));
    }
    document.getElementById('loading-box').style.display = 'block';
  };

  ModalDialog.hideLoading = function(){
    if(!document.getElementById('loading-box'))
      return;
    document.getElementById('loading-box').style.display = 'none';
  };
  ModalDialog.showMask = function(){
    var dialogMask = document.getElementById('app-mask');

    if(!dialogMask){
      dialogMask = domUtil.createHtmlDom("<div class='dialog-mask' id='app-mask'></div>");
      domUtil.bindEvent(dialogMask,'touchstart',function(event){
        event.preventDefault();
      });
      document.body.appendChild(dialogMask);
    }
    dialogMask.style.display = 'block';
  };
  ModalDialog.hideMask = function(){
    document.getElementById('app-mask').style.display = 'none';
  };

  var defaultConfig = {
      useHash: false
    },
    isConfig = false;

  ModalDialog.config = function(config){
    var options = domUtil.assign({},defaultConfig,config);

    if(isConfig){
      console.info('modaldialg only can config once');
      return;
    }
    if(options.useHash){
      initHash();
    }
    isConfig = true;
  }

  function initHash(){
    var hashListener = hashHistory(),
        dialogMap = {},
        hashQueue = [];

    hashListener.listener(function(path,prepath){
      var prepath = prepath * 1;

      if(!!prepath && path - prepath < 0){
        removeDialogByHash(prepath);
      }
    });

    /*
     queue --> hash --> dialogId --> modal
     */
    ModalDialog.afterListener(function(dialog){
      setTimeout(function(){
        var hashVl = hashListener.autoUpdateHash();
        dialogMap[hashVl] = dialog.id;
        hashQueue.push(hashVl);
      },Math.min(ModalDialog.modalCount,10));
    });

    ModalDialog.closedListener(function(dialog){
      var unUsualIdx = hashQueue.length - 2,
          hashvl = hashQueue[unUsualIdx],
          lastItem;

      if(dialogMap[hashvl] == dialog.id){
        hashQueue.splice(unUsualIdx,1);
        dialogMap[hashvl] = dialogMap[hashQueue[unUsualIdx]]
        delete dialogMap[hashQueue[unUsualIdx]];
        hashQueue[unUsualIdx]--;
      }else{
        lastItem = hashQueue.pop();
        delete dialogMap[lastItem];
      }

      if(hashListener.getCurrentHashPath() > 0)
        hashListener.back();
    });

    function removeDialogByHash(hashvl){
      var dialogList = ModalDialog.dialogList,
          splitIndex;

      hashQueue.every(function(item,index){
        if(item == hashvl){
          splitIndex = index;
        }
        else
          return true;
      });

      if(splitIndex != null){

        hashQueue.slice(splitIndex).forEach(function(item){
          dialogList[dialogMap[item]].closeDialog(true);
          delete dialogMap[item];
        });
        hashQueue = hashQueue.slice(0,splitIndex);
      }
    }
  }


  module.exports = ModalDialog;
