var dialog = require('../../build/main.js');

dialog.alert('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少。然而，我们可以看到 Webpack 打包后的 all.js 文件不仅没有压缩，而且代码当中的注释也没有去掉Webpack 同样提供了 UglifyJsPlugin 的插件来进行压缩代码操作。但是在我尝试的过程中，这个插件和 html-loader 配合使用的时候会出现错误，因此在这里我使用了 Gulp 来进行代码压缩的工作。Webpack 与 Gulp 配合使用也相当简单，只需要安装 gulp-webpack安装 Gulp 和其他所需的工具缺点：通过设备宽度范围区间这样的媒体查询来动态改变rem基准值，其实不够精确，比如：宽度为360px 和 宽度为320px的手机，因为屏宽在同一范围区间内(<375px)，所以会被同等对待(rem基准值相同)，而事实上他们的屏幕宽度并不相等，它们的布局也应该有所不同。最终，结论就是：这样的做法，没有做到足够的精确，但是够用。本部分将专注于 JavaScript 语言本身，而并非局限于网页或其他宿主环境。想要了解网页有关的 API',"确认放弃领奖",function(){
   console.log('i am alert');
 });

// dialog.confirm('弹框内容区域此处展示各种描述弹框内容区域此处展示各种描述',function(){
//   console.log('i am confirm');
// },"确认放弃领奖");
// dialog.confirm('在上线之前，我们还应该将代码进行压缩尽量把文件的体积减到最少。然而，我们可以看到 Webpack 打包后的 all.js 文件不仅没有压缩，而且代码当中的注释也没有去掉Webpack 同样提供了 UglifyJsPlugin 的插件来进行压缩代码操作。但是在我尝试的过程中，这个插件和 html-loader 配合使用的时候会出现错误，因此在这里我使用了 Gulp 来进行代码压缩的工作。Webpack 与 Gulp 配合使用也相当简单，只需要安装 gulp-webpack安装 Gulp 和其他所需的工具缺点：通过设备宽度范围区间这样的媒体查询来动态改变rem基准值，其实不够精确，比如：宽度为360px 和 宽度为320px的手机，因为屏宽在同一范围区间内(<375px)，所以会被同等对待(rem基准值相同)，而事实上他们的屏幕宽度并不相等，它们的布局也应该有所不同。最终，结论就是：这样的做法，没有做到足够的精确，但是够用。本部分将专注于 JavaScript 语言本身，而并非局限于网页或其他宿主环境。想要了解网页有关的 API',function(){
//    console.log('i am confirm');
//  },"确认放弃领奖",'放弃奖品','继续填写',function(){
//    console.log('i am confirm cancel');
//  })
// dialog.alertAwardList([{imgUrl:'xx.jpg',name:'pro 5'},{imgUrl:'xx.jpg',name:'魅族 5'},{imgUrl:'xx.jpg',name:'pro 6'}],'确认放弃领奖?',
//     function(){
//       dialog.alertPersonInfoDlg();
//     },
//     function(){
//      console.log('i am confirm');
//    },function(){
//      console.log('i am confirm cancel');
//    },'确定','分享到朋友圈');


// dialog.alert({selector:document.getElementById('info-form')});
// dialog.confirm({selector:document.getElementById('info-form')});