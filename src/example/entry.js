// import hashHistory from '../hashHistory.js';
var hashHistory = require('../hashHistory.js');
var dialog = require('../index.js');
var utils = require('../dom.js');
var award1 = require('../images/myaward1.png');
var award2 = require('../images/myaward2.png');
var prize = require('../images/prize.png');

var hasClose;

dialog.config({useHash:true});

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
}).addExample('不带标题-填写手机号码框','confirmMobile',function(){

  dialog.confirmMobile(null,()=>{
    dialog.alert('话费延时到账可能有说明，话费延时到账可能有说明。','领取成功');
  });
}).addExample('不带标题-已填写手机号码框','hasConfirmMobile',function(){

  dialog.confirmMobile(13212341234,null,null,true);
}).addExample('带标题-我的奖品框多个','myAwards',function(){

  dialog.alertAwardList([
    {imgUrl:award1,name:'话费50元',type:'call_charge',hascomfirm:true,phone: '12312341234'},
    {imgUrl:award1,name:'话费50元',type:'call_charge'},
    {
      imgUrl:award1,
      name:'魅族优惠券 200 元',
      type:'electronic',
      voucher: 'DORKE28048222823:12887570099',
      desc: '魅族优惠券 200 元',
      winMessage: '使用方法：前去美团－通用券兑换,输入该券,即可\r\n使用方法：前去美团－通用券兑换,输入该券,即可'
    },
    {imgUrl:award2,name:'Pro 6',type:'actual'},
    {imgUrl:award2,name:'Pro 6',type:'actual',hascomfirm:true,values:['panda','1231234123','广东省珠海市666']}],(idx,item,data)=>{
      console.log('ok',idx,item,data);
    });
}).addExample('带标题-我的奖品框两个','myAwardstwo',function(){

  dialog.alertAwardList([
    {imgUrl:award1,name:'话费50元',type:'call_charge',hascomfirm:true,phone: '12312341234'},
    {imgUrl:award2,name:'Pro 6',type:'actual'}]);
}).addExample('带标题-我的奖品框一个','myAwardsone',function(){

  dialog.alertAwardList([
    {imgUrl:award1,name:'话费50元',type:'call_charge',hascomfirm:true,phone: '12312341234'}]);
}).addExample('带标题-活动说明','rule',function(){

  dialog.alertRule('活动时间：2016.11.16-2016.11.18\n'+
          '1.每个用户每天有3此抽奖机会，另完成任务后获得更多机会。\n'+
          '2.实物奖品将在活动结束后统一发放，寄送前将联系获奖者确认收货地址。\n'+
          '3.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。\n'+
          '4.实物奖品将在活动结束后统一发放，寄送前将联系获奖者确认收货地址。\n'+
          '5.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。\n'+
          '6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 6.本次活动最终解释权归魅族科技有限公司所有.如有疑问请联系客服人员。本次活动最终解释权归魅族科技有限公司所有。 ');
}).addExample('带标题-中奖名单','winnerDlg',function(){

  dialog.alertWinnerList([{
    nickName: '彼岸.花凋零',
    title: 'CILINE-沁麟2.5L智能靠谱煲'
  },{
    nickName: '几次深情几斤情话',
    title: '获得魅族 pro 6 一台 拷贝'
  },{
    nickName: '把心酸当成笑话说',
    title: '游戏手柄NGDS N1pro双马达震动'
  },{
    nickName: '东京巷尾的青苔',
    title: '魅族移动电源（标准版）'
  },{
    nickName: '丿Monster卩s冥彡',
    title: '极路客 ( Goluk )G1 智能行车记录仪'
  },{
    nickName: '◇╰未来、怎么来。',
    title: '幻响B10无线运动蓝牙'
  }]);

}).addExample('带标题-话费奖品','chargeDlg',function(){

  dialog.alertVirtualDlg({
      imgUrl: prize,
      desc: '话费50元'
    }
  );
}).addExample('带标题-虚拟券奖品','electronicDlg',function(){
  dialog.alertElectronicDlg({
      voucher: 'DORKE28048222823:12887570099',
      winMessage: '使用方法：前去美团－通用券兑换,输入该券,即可',
      desc: '美团优惠券500元'
    }
  );
}).addExample('带标题-实物奖品','actualDlg',function(){
  dialog.alertActualDlg({
      imgUrl: prize,
      desc: 'mx6 一台'
    }
  );
}).addExample('不带标题-填写实物奖品收件人信息','fillformDlg',function(){
  dialog.alertPersonInfoDlg();
}).addExample('带标题-一个虚拟券奖品','oneElectronicDlg',function(){
  dialog.alertElectronicDlg({
      voucher: 'DORKE28048222823',
      winMessage: '使用方法：1.前去美团－通用券兑换,输入该券,即可\r\n2.前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可使用方法：前去美团－通用券兑换,输入该券,即可11',
      desc: '美团优惠券500元'
    }
  );
});