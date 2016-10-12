require('./css/dialog.less');
var domUtil = require('./dom.js');
var ModalDialog = require('./modal.js');
var hashHistory = require('./hashHistory.js');
var WrapMbIpt = require('./wrapInput.js');
var prizeTmpl = require('./view/prizeTmpl.html');
var elePrizeTmpl = require('./view/elecprizeTmpl.html');
var actualPrizeTmpl = require('./view/actualPrizeTmpl.html');

prizeTmpl = prizeTmpl.replace(/\r\n/g,'');
elePrizeTmpl = elePrizeTmpl.replace(/\r\n/g,'');
actualPrizeTmpl = actualPrizeTmpl.replace(/\r\n/g,'');

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
      content = createParams({
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

  ModalDialog.confirmMobile = function(phone,okFn,cancelFn,isConfirm,title,btText1,btText2){
    var template = '<div class="charge-content"><div class="charge-form"><input type="text" class="valid-input charge-phone"/><label>手机号码:</label>' +
                '<strong class="form-tip">请填写正确的手机号码' +
                '</strong></div></div>',
        settings, dlg,
        inputDom,temp,
        wrapInput;

    if(!isPlainObject(phone)){
      settings = createParams({
        title: title || '',
        okCallback:proxyOkFn,
        cancelCallback:proxyCancelFn,
        sureStr: btText2,
        cancelStr:btText1,
        phone: phone
      });
    }else{
      settings = phone;
    }

    inputDom = settings.selector = domUtil.createHtmlDom(template);


    settings.clazz = 'charge-dialog';

    if(isConfirm){
      inputDom.classList.add('hascomfirm');
      inputDom.querySelector('.form-tip').textContent = '已领奖';
      temp = inputDom.querySelector('input');
      temp.setAttribute('disabled',true);
      temp.value = settings.phone;

      settings.cancelCallback = null;
      dlg = ModalDialog.alert(settings);
    }else{
      wrapInput = WrapMbIpt({target: inputDom});
      dlg = ModalDialog.confirm(settings);
    }

    return dlg;

    function proxyOkFn(e){
      var iform = inputDom.querySelector('.charge-form');
      if(!iform.classList.contains('dlg-success') && !isConfirm){
        iform.classList.add('dlg-error');
        return true;
      }
      wrapInput && wrapInput.destroy();
      if(okFn && !okFn.call(dlg,iform.querySelector('input').value,e))
        inputDom = null;
    }

    function proxyCancelFn(e){
      wrapInput && wrapInput.destroy();
      cancelFn && cancelFn.call(dlg,e);
      inputDom = null;
    }

  };
  ModalDialog.alertAwardList = function(datalist,okFn,cancelFn,title,btText1){
    var awardListHtml =['<div class="dlg-award-list"><ul>'],
        settings, result;

    settings = createParams({
      dataList:datalist,
      title: title || '我的奖品',
      sureStr: btText1
    });

    settings.clazz = 'myaward-dialog';

    result = settings.dataList || [];

    for(var i=0, len = result.length;i < len; i++){
      var item = result[i],
          typeVl;

      awardListHtml.push('<li data-idx="' + i + '"><img src="' + item.imgUrl + '" /><div class="item-title">' + item.name + '</div><em data-id="handlePrizes" class="item-oper');
        switch(item.type){
          case 'electronic':
            typeVl = '查看券码';
            break;
          case 'actual':
            if(item.hascomfirm){
              typeVl = '修改地址';
              awardListHtml.push(' hascomfirm');
            }else{
              typeVl = '填写地址';
            }
            break;
          case 'call_charge':
          case 'wangsu_data_recharge':
            if(item.hascomfirm){
              typeVl = '查看号码';
              awardListHtml.push(' hascomfirm');
            }else{
              typeVl = '填写号码';
            }
            break;
        }

      awardListHtml.push('" >' + typeVl);
      awardListHtml.push('</em></li>');
    }
    awardListHtml.push('</ul></div>');

    settings.content = awardListHtml.join('');

    settings.handlePrizes = function(evt){
      var target = evt.target,
          liItem = domUtil.closest(target,'li'),
          idx = liItem.getAttribute('data-idx'),
          hascomfirm = target.classList.contains('hascomfirm'),
          awardItem = result[idx];

      var proxyOkFn = okFn && okFn.bind(this,idx,awardItem),
          proxyCancelFn = cancelFn && cancelFn.bind(this,idx,awardItem);

      switch(awardItem.type){
          case 'electronic':
            ModalDialog.alertElectronicDlg(awardItem, '',proxyOkFn,proxyCancelFn);
            break;
          case 'actual':
            ModalDialog.alertPersonInfoDlg(proxyOkFn,proxyCancelFn,awardItem.values);
            break;
          case 'call_charge':
          case 'wangsu_data_recharge':
            ModalDialog.confirmMobile(awardItem.phone,proxyOkFn,proxyCancelFn,hascomfirm);
            break;
        }

        return true;
    }
    return ModalDialog.alert(settings);
  };

  ModalDialog.alertRule = function(context){
    return ModalDialog.alert(context,'活动说明',null,null,'rule-dlg');
  };

  ModalDialog.alertWinnerList = function(data){
    var winnerListTmpl = ['<div class="inr-winlist"><ul>'];

    if(!data){
      ModalDialog.alert('大奖还没被抽走，赶紧参与活动');
      return;
    }

    for(var i=0,len=data.length; i< len; i++){
      var item = data[i]
      winnerListTmpl.push('<li><em>' + item.nickName + '</em>');
      winnerListTmpl.push('<div class="prz-tle">' + item.title + '</div></li>');
    }

    winnerListTmpl.push('</ul></div>');
    return ModalDialog.alert(winnerListTmpl.join(''),'中奖名单',null,null,'winner-list-dlg');
  };

  ModalDialog.alertVirtualDlg = function(data,okFn,cancelFn){
    var template = domUtil.createHtmlDom(domUtil.replaceTemlate(prizeTmpl,data)),
        wrapInput;

    wrapInput = WrapMbIpt({target: template});
    ModalDialog.confirm({
      selector: template,
      title: '中奖啦！',
      clazz: 'virtual-dlg prize-dlg',
      okCallback:proxyOkFn,
      cancelCallback:proxyCancelFn,
      sureStr: '领取',
      cancelStr: '暂不领奖'
    });

    function proxyOkFn(e){
      var iform = template.querySelector('.charge-form');

      if(!iform.classList.contains('dlg-success')){
        iform.classList.add('dlg-error');
        return true;
      }

      wrapInput && wrapInput.destroy();
      if(okFn && !okFn.call(dlg,e))
        template = null;
    }

    function proxyCancelFn(e){
      wrapInput && wrapInput.destroy();
      cancelFn && cancelFn.call(dlg,e);
      template = null;
    }
  };
  ModalDialog.alertElectronicDlg = function(context,title,okFn,cancelFn,btText1){

    var vouchers = context.voucher.split(':'),
        clz = 'electronic-dlg prize-dlg',
        template;

    context.voucher1 = vouchers[0];
    context.voucher2 = vouchers[1];

    if(!context.voucher2)
      clz += ' single-ticket';

    template = domUtil.replaceTemlate(elePrizeTmpl,context);

    ModalDialog.confirm({
      content: template,
      title: title != null ? title : '中奖啦！',
      clazz: clz,
      okCallback:okFn,
      cancelCallback:cancelFn,
      sureStr: btText1 || '立即使用',
      cancelStr: '确定'
    });
  };
  ModalDialog.alertActualDlg = function(data,okFn,cancelFn){
    var template = domUtil.replaceTemlate(actualPrizeTmpl,data);

    ModalDialog.confirm({
      content: template,
      title: '中奖啦！',
      clazz: 'actual-dlg prize-dlg',
      okCallback:toFillForm,
      cancelCallback:cancelFn,
      sureStr: '填写地址',
      cancelStr: '暂不领奖'
    });

    function toFillForm(){
      ModalDialog.alertPersonInfoDlg(okFn,cancelFn)
    }
  };

  ModalDialog.alertPersonInfoDlg = function(okFn,cancelFn,values,formField,btText1,btText2){
    var infoFormHtml = ["<form>"],
        inputs,values,settings,infoFormDom,
        dlg,
        validInputs = [];

    if(!isPlainObject(okFn)){
      settings = createParams({
        formField:formField,
        sureStr: btText2,
        cancelStr:btText1,
        values:values || []
      });
    }else{
      settings = okFn;
      okFn = settings.okCallback;
      cancelFn = settings.cancelCallback;
    }

    formField = settings.formField = settings.formField || [
            {name:'recName',value:'联系人',option: {
                keyDownValid: null,
                keyUpValid: null,
                changeValid: null
              }
            },
            {name:'mobilephone',value:'手机号码',errMsg: '请填写正确的手机号码',bevalid: true,option:{initValid:'handleKeyUp'}},
            {
              name:'recAddress',value:'收货地址',errMsg: '请填写正确的地址',required:true,initValid:'handleChange',
              option: {
                keyDownValid: null,
                keyUpValid: null,
                changeValid: function(evt,value){
                  return value.length >= 8;
                }
              }
            }
          ];
    settings.clazz = 'personinfo-dialog charge-dialog';
    settings.header = '';

    for(var i=0, len = formField.length;i < len; i++){
      var item = formField[i],
          beValid = '';

      if(item.bevalid){
        beValid = ' bevalid';
      }
      if(item.required){
        beValid += ' required';
      }
      infoFormHtml.push('<div class="charge-form' + beValid + '"><input class="valid-input" type="text" name="' + item.name + '"/><label>');
      infoFormHtml.push(item.value + '</label>');

      if(item.errMsg)
        infoFormHtml.push('<strong class="form-tip">' + item.errMsg + '</strong>');

      infoFormHtml.push('</div>');
    }

    infoFormHtml.push("</form>");

    infoFormDom = domUtil.createHtmlDom(infoFormHtml.join(''));

    inputs = infoFormDom.querySelectorAll('input');
    values = settings.values;
    for(var i=0,len=inputs.length;i<len;i++){
      var inputItem = inputs[i],
          fieldItem = formField[i],
          wrapInput;

      if(typeof values[i] != 'undefined')
        inputItem.value = values[i];

      if(fieldItem.errMsg || fieldItem.option){
        wrapInput = WrapMbIpt(domUtil.assign({
            target: inputItem
          },formField[i].option));

        validInputs.push(wrapInput);
      }

      if(values[i] && fieldItem.initValid){
        wrapInput[fieldItem.initValid]({target:inputItem});
      }
    }

    settings.selector = infoFormDom;
    settings.okCallback = proxyOkFn;
    settings.cancelCallback = proxyCancelFn;

    dlg = ModalDialog.confirm(settings);

    return dlg;
    function proxyOkFn(e){
      var iforms = infoFormDom.querySelectorAll('.charge-form'),
          item,styles,
          dirty = 0,
          formVals = [],
          formValue;

      for(var i=0,len=iforms.length; i < len; i++){
        item = iforms[i];
        styles = item.classList,
        formValue = item.querySelector('.valid-input').value;

        if((styles.contains('bevalid') && !styles.contains('dlg-success')) ||
              (item.classList.contains('required') && formValue.length == 0)){

          item.classList.add('dlg-error');
          dirty ++;
        }else if(item.classList.contains('dlg-error')){
          dirty ++;
        }

        formVals.push(formValue);
      }
      if(dirty > 0)
        return true;

      clearInput();
      if(okFn && !okFn.call(dlg,formVals,e))
        infoFormDom = null;
    }

    function proxyCancelFn(e){
      clearInput();
      cancelFn && cancelFn.call(dlg,e);
      infoFormDom = null;
    }

    function clearInput(){
      validInputs.forEach(function(item){
        item.destroy();
      });
    }
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
      var hashVl = hashListener.autoUpdateHash();
      dialogMap[hashVl] = dialog.id;
      hashQueue.push(hashVl);
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
