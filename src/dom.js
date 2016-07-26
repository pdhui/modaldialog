module.exports = {
  createHtmlDom: (function createHtml(){
    var div = document.createElement('div');

    return function(html){
      var temp;
      div.innerHTML = html;
      temp = div.children[0];
      div.removeChild(temp);
      return temp;
    }
  })(),
  replaceTemlate: function(str,data){
    var regx = new RegExp(/{(.*?)}/g),
        temp;
    while(temp = regx.exec(str)){
      str = str.replace(temp[0],data[temp[1]]);
    }
    return str;
  },
  bindEvent: function(dom,name,fn){
    dom.addEventListener
      ? dom.addEventListener(name,fn,false)
      : dom.attachEvent('on' + name, fn);
  },
  unBindEvent: function(dom,name,fn){
    dom.removeEventListener
      ? dom.removeEventListener(name,fn,false)
      : dom.detachEvent('on' + name, fn);
  },
  getUrlParam: function (key) {
      var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURI(r[2]);
      return null;
  },
  assign: function(){
    var temp = arguments[0];
    var args = [].slice.call(arguments, 1);
    for(var i=0,len=args.length;i<len;i++){
      var item = args[i];
      for(var p in item){
        if(item.hasOwnProperty(p)){
          temp[p] = item[p];
        }
      }
    }
    return temp;
  },
  closest: function(dom,cls){
    var clsRegx = new RegExp('(^|\\s+)'+ cls + '(\\s+|$)'),
        parent = dom;

    if(!!dom.className.match(clsRegx))
      return dom;

    while(!!(parent = parent.parentNode) &&  parent.nodeName.toLowerCase() != 'html'){
      if(!!parent.className.match(clsRegx)){
        return parent;
      }
    }
    return null;
  }
}