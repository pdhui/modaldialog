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

inputCallback是填写按钮的回调函数

datalist参数格式如下：[{imgUrl:'xx.jpg',name:'pro 5'},{imgUrl:'xx.jpg',name:'魅族 5'},{imgUrl:'xx.jpg',name:'pro 6'}]
```javascript
dialog.alertAwardList(datalist,title,inputCallback,okFn,cancelFn,btText1,btText2)
```
4.个人信息框

formField：表单的文本域对象，默认值是这个

[
    {name:'recName',value:'收件人:'},
    {name:'mobilephone',value:'手机号码:'},
    {name:'recAddress',value:'收件地址:'},
    {name:'message',value:'留言:'}
]

values：每个表单域的值，数组类型，与formField的顺序一一对应。
```javascript
dialog.alertPersonInfoDlg(formField,values,okFn,cancelFn,cancelStr,sureStr)
```
5.加载提示框

* 显示
```javascript
dialog.showLoading()
```
* 隐藏
```javascript
dialog.hideLoading()
```

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以在issues提意见或用以下联系方式跟我交流

* 邮件(xuweixiong2006@gmail.com)
