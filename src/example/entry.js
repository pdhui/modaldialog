var dialog = require('../dialogWithHash.js');
var utils = require('../dom.js');
// var notifyBackpress = require('@flyme/utils/src/appStoreClient/notifyBackpress.js');
var flymeUtils = require('../../extra-lib/notifyBackpress.js');

var example = {
  _events: {},
  addExample(value,id,callback){
    this.container.appendChild(utils.createHtmlDom('<li data-id="' + id + '" style="padding:5px;">'+ value + '</li>'));
    this._events[id] = callback;
    return this;
  },
  init(){
    this.container = utils.createHtmlDom('<ul class="exampleList" style="position:relative;z-index:1;"></ul>');

    document.body.appendChild(this.container);

    utils.bindEvent(this.container,'click', this.dispatchEvent.bind(this));
  },
  dispatchEvent(evt){
    var target = evt.target,
        id = target.getAttribute('data-id');

    if(!!this._events[id]){
      this._events[id]();
    }
  }
};
example.init();
example.addExample('不带标题-确认框2行','confirm2',function(){

  dialog.confirm('打开“携程”客户端，返回本页立即增加3次抽奖机会。 ',null,"",'不了','立即打开');
}).addExample('不带标题-确认框3行','confirm3',function(){

  dialog.confirm('打开“携程”客户端，返回本页立即增 加3次抽奖机会.返回本页立即增加3次 抽奖机会。 ',null,"",'不了','立即打开');
}).addExample('带标题-反馈说明','feedback',function(){

  dialog.confirm('每安装一个应用，多增加1次抽奖机会 ',null,"获得1次抽奖机会",'确定','继续安装');
}).addExample('不带标题-提示框','alert',function(){

  dialog.alert('提交失败，请稍后再试 ');
}).addExample('带标题-单行提示框','tle-alert',function(){

  dialog.alert('话费延时到账可能有说明','领取成功');
}).addExample('带标题-两行提示框','tle-alert2',function(){

  dialog.alert('话费延时到账可能有说明，话费延时到账可能有说明。','领取成功');
}).addExample('带标题-多行提示框','tle-alert2',function(){

  dialog.alert('话费延时到账可能有说明，<input type="text"/>话费延时到账可能有说明。话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明\
    话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明话费延时到账可能有说明，话费延时到账可能有说明','领取成功');
}).addExample('框中框','dlgofdlg',function(){
  var isAlerted = false;
  dialog.alert('父框内容父框内容父框内容父框内容父框内容父框内容','父框标题',function(){
    if(isAlerted) return;

    dialog.alert('子框内容','');

    isAlerted = true;

    return true;
  });
}).addExample('动态增加弹框内容','adddlgheight',function(){
  var isAlerted = false;
  var dlg = dialog.alert('父框内容父框内容父框内容父框内容父框内容父框内容<button class="addContent">添加内容</button>','父框标题');
  var dlgDom = dlg.dialogDom;

  utils.bindEvent(dlgDom.querySelector('.addContent'),'click',function(){
    dlgDom.querySelector('.dialog-content').appendChild(utils.createHtmlDom('<div>hello world</div>'));
    dlg.refresh();
  });
}).addExample('提示框->提示框','dlg1todlg2',function(){
  dialog.alert('父框内容父框内容父框内容父框内容父框内容父框内容','父框标题',function(){
    dialog.alert('子框内容','');
  });
}).addExample('提示框(不关闭)->提示框','dlg1Noclosetodlg2',function(){
  let first = true;
  dialog.alert('父框内容父框内容父框内容父框内容父框内容父框内容','父框标题',function(){
    dialog.alert('子框内容','');
    if(first){
      first = false;
      return true;
    }
  });
}).addExample('动态调整弹框大小-baseFontSize-32','adjust-ft-32',function(){

  location.href = 'http://localhost:8099/example/index.html?baseFontSize=32';
}).addExample('动态调整弹框大小-正常大小-baseFontSize-16','adjust-ft-16',function(){

  location.href = 'http://localhost:8099/example/index.html?baseFontSize=16';
}).addExample('创建没有按钮的弹框','no-btn-dialog',function(){

  createNoBtnDialog('详情')
})

const vc = utils.getUrlParam('vc') * 1,
      turnTo = utils.getUrlParam('turnTo');

dialog.config({
  useHash:true,
  baseFontSize: utils.getUrlParam('baseFontSize')*1,
  notifyBackpress: flymeUtils.notifyBackpress,
  backPress(){
    EventJavascriptInterface.backPress();
  }/*,
  useBackground: false*/
});

if(vc >= 612 && turnTo == 'a'){
  dialog.alert('进入页面后马上打开弹框');
}
window.onWindowChanged = function(){

}

function createNoBtnDialog(content,title,callback,dom,cls){
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

    if(!content.title)
      clz += ' dlg-no-title';
    else
      clz += ' dlg-has-title';

    content.clazz = clz;
    return dialog(content);
  }
