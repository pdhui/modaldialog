##modalDialog 弹出框

内含了 提示框，确认框，我的奖品列表框，填写个人信息框，加载中提示框。
##公共参数

 * clazz: 弹出框的css类名
 * cancelStr: 取消按钮的按钮名
 * sureStr: 确定按钮的按钮名
 * title: 弹出框的标题
 * content: 弹出框内容
 * header: 表示头部的html模板
 * okCallback：确定按钮的回调函数【alert框时只有这个回调函数，没有其他的回调函数】
 * cancelCallback：取消按钮的回调函数
 * selector：html页面的某个dom元素节点，会作为弹出框的内容，此时，content定义的内容无效【只有提示框和确认框有用】

弹出框里面的dom元素如果有data-id属性值，则相当于绑定了click事件，事件的回调函数名为传给ModalDialog的options对象中key等于data-id的值所对应的value。

 -----首先
```javascript
    require('@flyme/modaldialog/lib/main.css')'//加载css文件，然后在html页面可引用
    var dialog = require('@flyme/modaldialog')
```

每种类型的弹出框都有两种调用方式，直接传多个参数或者使用对象作为参数。

1. 提示框：
```javascript
dialog.alert(content,title,callback,dom)
```
或者
```javascript
var context = {
            title: title,
            content: content,
            okCallback:callback,
            selector: dom
          };
dialog.alert(context)
```
2. 确认框

```javascript
dialog.confirm(msg,sureFn,title,btText1,btText2,cancelFn)
```
或者
```javascript
var context = {
        title: title,
        content: msg,
        okCallback:sureFn,
        cancelCallback:cancelFn,
        sureStr: btText2,
        cancelStr:btText1
    };
dialog.confirm(context)
```
3.奖品列表框
```javascript
dialog.alertAwardList(datalist,title,inputCallback,okFn,cancelFn,btText1,btText2)
```
调用方式：
```javascript
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
```
hascomfirm表示已经领取过，只针对虚拟券和实物奖品

4.个人信息框

```javascript
dialog.alertPersonInfoDlg(okFn,cancelFn,values,formField,btText1,btText2)
```
5.中奖框

* 虚拟券：alertElectronicDlg (context,title,okFn,cancelFn,btText1)

```javascript
    addExample('带标题-一个虚拟券奖品','oneElectronicDlg',function(){
      dialog.alertElectronicDlg({
          voucher: 'DORKE28048222823',
          winMessage: '使用方法：1.前去美团－通用券兑换,输入该券,即可\r\n2.前去美团－通用券兑换,
          desc: '美团优惠券500元'
        }
      );
    })
    .addExample('带标题-虚拟券奖品-两个码','electronicDlg',function(){
      dialog.alertElectronicDlg({
          voucher: 'DORKE28048222823:12887570099',
          winMessage: '使用方法：前去美团－通用券兑换,输入该券,即可',
          desc: '美团优惠券500元'
        }
      );
    })
```

* 实物奖：alertActualDlg(data,okFn,cancelFn)

```javascript
    dialog.alertActualDlg({
      imgUrl: prizeUrl,
      desc: 'mx6 一台'
    }
  );
```

* 流量|话费：alertVirtualDlg(data,okFn,cancelFn)
```javascript
   dialog.alertVirtualDlg({
      imgUrl: prize,
      desc: '话费50元'
    }
  );
```
6.加载提示框

* 显示
```javascript
dialog.showLoading()
```
* 隐藏
```javascript
dialog.hideLoading()
```
更多请参考例子demo

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以在issues提意见或用以下联系方式跟我交流

* 邮件(xuweixiong2006@gmail.com)
