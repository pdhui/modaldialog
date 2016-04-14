##modalDialog ������

�ں��� ��ʾ��ȷ�Ͽ��ҵĽ�Ʒ�б����д������Ϣ�򣬼�������ʾ��
##��������

 * clazz: �������css����
 * cancelStr: ȡ����ť�İ�ť��
 * sureStr: ȷ����ť�İ�ť��
 * title: ������ı���
 * content: ����������
 * okBtn: ��ʾȷ����ť��htmlģ��
 * cancelBtn: ��ʾȡ����ť��htmlģ��
 * header: ��ʾͷ����htmlģ��
 * type: ������ʾ����ȷ����ʾ��
 * okCallback��ȷ����ť�Ļص�������alert��ʱֻ������ص�������û�������Ļص�������
 * cancelCallback��ȡ����ť�Ļص�����
 * selector��htmlҳ���ĳ��domԪ�ؽڵ㣬����Ϊ����������ݣ���ʱ��content�����������Ч��ֻ����ʾ���ȷ�Ͽ����á�
 
 -----���� 
```javascript 
    var dialog = require('modaldialog')
```
ÿ�����͵ĵ����������ֵ��÷�ʽ��ֱ�Ӵ������������ʹ�ö�����Ϊ������

1. ��ʾ��
```javascript 
dialog.alert(content,title,callback,dom)
```
����
```javascript 
var context = {
            title: title,
            content: content,
            okCallback:callback,
            selector: dom
          };
dialog.alert(context)
```
2. ȷ�Ͽ�

```javascript 
dialog.confirm(msg,sureFn,title,btText1,btText2,cancelFn)
```
����
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
3.��Ʒ�б��

inputCallback����д��ť�Ļص�����

datalist������ʽ���£�[{imgUrl:'xx.jpg',name:'pro 5'},{imgUrl:'xx.jpg',name:'���� 5'},{imgUrl:'xx.jpg',name:'pro 6'}]
```javascript 
dialog.alertAwardList(datalist,title,inputCallback,okFn,cancelFn,btText1,btText2)
```
4.������Ϣ��

formField�������ı������Ĭ��ֵ�����

[
    {name:'recName',value:'�ռ���:'},
    {name:'mobilephone',value:'�ֻ�����:'},
    {name:'recAddress',value:'�ռ���ַ:'},
    {name:'message',value:'����:'}
]

values��ÿ�������ֵ���������ͣ���formField��˳��һһ��Ӧ��
```javascript 
dialog.alertPersonInfoDlg(formField,values,okFn,cancelFn,cancelStr,sureStr)
```
5.������ʾ��

* ��ʾ
```javascript 
dialog.showLoading()
```
* ����
```javascript 
dialog.hideLoading()
```

##�����ⷴ��
��ʹ�������κ����⣬��ӭ�������ң�������������ϵ��ʽ���ҽ���

* �ʼ�(xuweixiong@meizu.com)