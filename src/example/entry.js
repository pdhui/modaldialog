// import hashHistory from '../hashHistory.js';
var hashHistory = require('../hashHistory.js');
var dialog = require('../index.js');
var hasClose;

dialog.config({useHash:true});

// document.getElementById('btn2').addEventListener('click',function(){
//   dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少然而，我们可以看到 Webpack 打包后的 all.js 件不然而，我们可以看到 Webpack 打包后的 all.js 文件不然而，我们可件不然而，我们可以看到 Webpack 打包后的 all.js 文件不然而，我们可件不然而，我们可以看到 Webpack 打包后的 all.js 文件不然而，我们可件不然而，我们可以看到 Webpack 打包后的 all.js 文件不然而，我们可文件不然而，我们可以看到 Webpack 打包后的 all.js 文件不然而，我们可以看到 Webpack 打包后的 all.js 文件不。然而，我们可以看到 Webpack 打包后的 all.js 文件不仅没有压缩，而且代码当中的注释也没有去掉Webpack 同样提供了 UglifyJsPlugin 的插件来进行压缩代码操作。但是在我尝试的过程中，这个插件和 html-loader 配合使用的时候会出现错误，因此在这里我使用了 Gulp 来进行代码压缩的工作。Webpack 与 Gulp 配合使用也相当简单，只需要安装 gulp-webpack安装 Gulp 和其他所需的工具缺点：通过设备宽度范围区间这样的媒体查询来动态改变rem基准值，其实不够精确，比如：宽度为360px 和 宽度为320px的手机，因为屏宽在同一范围区间内(<375px)，所以会被同等对待(rem基准值相同)，而事实上他们的屏幕宽度并不相等，它们的布局也应该有所不同。最终，结论就是：这样的做法，没有做到足够的精确，但是够用。本部分将专注于 JavaScript 语言本身，而并非局限于网页或其他宿主环境。想要了解网页有关的 API',"确认放弃领奖",function(){
// dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少');
   // console.log('i am alert');
   // if(!hasClose){
   //  dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少。1<input type="t','kk',function(){
   //    // hasClose = true;
   //    dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少');
   //    return true;
   // });
   // return true;
   // }
  // });
   // dialog.confirm('弹框内容区域此处展示各种描述弹框内容区域此处展示各种描述',function(){
   //    console.log('i am confirm');
   //    dialog.alert('在上线之前');
   //  },"确认放弃领奖");
// },false)

// dialog.confirm('弹框内容区域此处展示各种描述弹框内容区域此处展示各种描述',function(){
//   console.log('i am confirm');
//   dialog.alert('在上线之前');
// },"确认放弃领奖");
// dialog.confirm('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少。然而，我们可以看到 Webpack 打包后的 all.js 文件不仅没有压缩，而且代码当中的注释也没有去掉Webpack 同样提供了 UglifyJsPlugin 的插件来进行压缩代码操作。但是在我尝试的过程中，这个插件和 html-loader 配合使用的时候会出现错误，因此在这里我使用了 Gulp 来进行代码压缩的工作。Webpack 与 Gulp 配合使用也相当简单，只需要安装 gulp-webpack安装 Gulp 和其他所需的工具缺点：通过设备宽度范围区间这样的媒体查询来动态改变rem基准值，其实不够精确，比如：宽度为360px 和 宽度为320px的手机，因为屏宽在同一范围区间内(<375px)，所以会被同等对待(rem基准值相同)，而事实上他们的屏幕宽度并不相等，它们的布局也应该有所不同。最终，结论就是：这样的做法，没有做到足够的精确，但是够用。本部分将专注于 JavaScript 语言本身，而并非局限于网页或其他宿主环境。想要了解网页有关的 API',function(){
//    console.log('i am confirm');
//  },"确认放弃领奖",'放弃奖品','继续填写',function(){
//    console.log('i am confirm cancel');
//  })
/*dialog.alertAwardList([{imgUrl:'xx.jpg',name:'pro 5'},{imgUrl:'xx.jpg',name:'魅族 5'},{imgUrl:'xx.jpg',name:'pro 6'}],'确认放弃领奖?',
    function(){
      dialog.alertPersonInfoDlg({okCallback:function(){
        var inputs = document.querySelectorAll('.personinfo-dialog input');
        [].slice.call(inputs).every(function(item){
          console.log(item.value)
          return true;
        })

      },values:[1,2,'sfwe e而无法','ef']});
    },
    function(){
     console.log('i am confirm');
   },function(){
     console.log('i am confirm cancel');
   },'确定','分享到朋友圈');*/


// dialog.alert({selector:document.getElementsByTagName('h1')[0]});
// dialog.confirm({selector:document.getElementById('info-form')});

var conDlg = dialog.confirm({content:'弹框内容区域此处展示各种描述弹框内容区域此处展示各种描述内容区域此处展示各种描述内容区域此处展示各种描述内容区域此处展示各种描述<input type="text" id="username" />',okCallback:function(){
  console.log('i am confirm: ' + document.getElementById('username').value);
  var username = document.getElementById('username');
  var txt = document.createElement('div');
  txt.innerHTML = '请输入正确的内容<div >weff描述弹框内容区域此处展示各种描述内容区域此处展示各种描述内容区域此处展示各种描述内容区域此处展描述弹框内容区域此处展示各种描述内容区域此处展示各种描述内容区域此处展示各种描述内容区域此处展</div>';
  username.parentNode.appendChild(txt);
  // dialog.alert('在上线之前');
  conDlg.refresh();
  return true;
},title:"确认放弃领奖",reverse:true});

// dialog.showLoading();
// setTimeout(function(){
//   dialog.hideLoading();
// },3000);

// dialog.showMask();
// setTimeout(function(){
//   dialog.hideMask();
// },3000);

// hashHistory().startListener(function(path){
//   console.log(path);
// })
//

// var template = '<input type="text"/><ul class="winner-list"><li><span class="winner-name">test</span><div class="winner-awards">标题文案1</div></li><li><span class="winner-name">test1</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test2</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test(1)</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test4</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test4</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test4</span><div class="winner-awards">标题文案2</div></li><li><span class="winner-name">test4</span><div class="winner-awards">标题文案2</div></li></ul>';
// document.getElementById('btn').addEventListener('click',function(){
//   var dlg = dialog.alert(template,null,function(){
//     dlg.closeDialog();
//     dialog.alert('<div class="normal-txt-color">充值成功！</div>','');
//     return true;
//   });
// });
// var template = '<div class="dialog-content"><div class="permi-block"><strong> 您的位置</strong><p> 大致位置（基于网络）</p><p> 精确位置（基于GPS和网络）</p></div><div class="permi-block"><strong> 系统工具</strong><p> 获取额外的位置信息提供程序命令</p><p> 发送持久广播</p><p> 用户间互动</p><p> 完全允许在用户之间进行互动</p><p> 访问SD卡文件系统</p><p> 修改系统设置</p><p> 安装快捷方式</p><p> 卸载快捷方式</p></div><div class="permi-block"><strong> 网络通信</strong><p> 查看网络连接</p><p> 查看WLAN连接</p><p> 更改网络连接性</p><p> 连接WLAN网络和断开连接</p><p> 完全的网络访问权限</p></div><div class="permi-block"><strong> 相机</strong><p> 拍摄照片和视频</p></div><div class="permi-block"><strong> 状态栏</strong><p> 展开/收拢状态栏</p></div><div class="permi-block"><strong> 影响电池的使用</strong><p> 控制闪光灯</p><p> 控制振动</p><p> 防止手机休眠</p></div><div class="permi-block"><strong> 您的帐户</strong><p> 查找设备上的帐户</p><p> 使用设备上的帐户</p></div><div class="permi-block"><strong> 您的应用信息</strong><p> 检索正在运行的应用</p><p> 开机启动</p><p> 对正在运行的应用重新排序</p></div><div class="permi-block"><strong> 音频设置</strong><p> 更改您的音频设置</p></div><div class="permi-block"><strong> 存储</strong><p> 读取您的SD卡中的内容</p><p> 修改或删除您的SD卡中的内容</p></div><div class="permi-block"><strong> 电话</strong><p> 读取手机状态和身份</p></div><div class="permi-block"><strong> 麦克风</strong><p> 录音</p></div><div class="permi-block"><strong> 其他应用的用户界面</strong><p> 在其他应用之上显示内容</p></div></div>';
// dialog.alert(template,'');