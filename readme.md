## modalDialog 弹出框

 提示框，确认框。

## 公共参数

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

 -----

 加载弹框样式和js库

```javascript
    //默认引入的是可以点击back键关闭弹框的库
    var dialog = require('@flyme/modaldialog')
    //若想引入最小的弹框库，则这么引入：
    var dialog = require('@flyme/modaldialog/build/core.js')
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

## 有问题反馈
在使用中有任何问题，欢迎反馈给我，可以在issues提意见或用以下联系方式跟我交流

* 邮件(xuweixiong2006@gmail.com)
