var dialog = require('../dialogWithHash.js');
var utils = require('../dom.js');

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

  dialog.alert('提交失败，请稍后再试 ','');
}).addExample('带标题-单行提示框','tle-alert',function(){

  dialog.alert('话费延时到账可能有说明','领取成功');
}).addExample('带标题-两行提示框','tle-alert2',function(){

  dialog.alert('话费延时到账可能有说明，话费延时到账可能有说明。','领取成功');
})

dialog.config({
  useHash:true
});

