var domUtil = require('./dom.js');

var DEFAULTOPTIONS = {
  keyDownValid: function(evt,value){
    if(value.length > 11 && evt.keyCode != 8 && evt.keyCode != 13){
      evt.preventDefault();
    }
  },keyUpValid: function(evt,value){
    return /^1\d{10}$/.test(value);
  },changeValid: function(evt,value){
   return /^1\d{1,10}$/.test(value);
  }
};
function WrapMbIpt(options){

  return new WrapMbIpt.create(options);
}
WrapMbIpt.create = function(options){
  var target = options.target;

  this.options = domUtil.assign({},DEFAULTOPTIONS,options);

  if(options.initValid)
    this[options.initValid]({target:target});

  if(this.options.keyDownValid)
    domUtil.bindEvent(target,'keydown',this.handleKeyDown.bind(this));

  domUtil.bindEvent(target,'keyup',this.handleKeyUp.bind(this));
  domUtil.bindEvent(target,'change',this.handleChange.bind(this));
};

WrapMbIpt.create.prototype = {
  constructor: WrapMbIpt.create,
  handleKeyDown: function(e){
    var target = e.target,
        value = target.value;

    value += String.fromCharCode(e.keyCode);
    this.options.keyDownValid && this.options.keyDownValid(e,value);
  },
  handleKeyUp(e){
    var target = e.target,
        value = target.value,
        parentNd = target.parentNode;

    if(this.options.keyUpValid){
      if(this.options.keyUpValid(e,value)){
        parentNd.classList.add('dlg-success');
      }else{
        parentNd.classList.remove('dlg-success');
      }
    }

    if(e.keyCode != 13)
      parentNd.classList.remove('dlg-error');
  },
  handleChange(e){
    var target = e.target,
        value = target.value,
        styles = target.parentNode.classList,
        isInitValid = e.isInitValid;

    if(this.options.changeValid){
      if(!this.options.changeValid(e,value)){
        setTimeout(function(){//不加定时器时，当鼠标点击确定按钮后，只触发change事件，而不触发鼠标的点击事件
          styles.add('dlg-error');
        },0);
      }else{
        styles.remove('dlg-error');
      }
    }

    if(!isInitValid){
      if(value.length > 0){
        styles.add('dirty');
      }else{
        styles.remove('dirty');
      }
    }
  },
  destroy(){
    var target = this.options.target;

    domUtil.bindEvent(target,'keydown',this.handleKeyDown);
    domUtil.bindEvent(target,'keyup',this.handleKeyUp);
    domUtil.bindEvent(target,'change',this.handleChange);
  }
}

module.exports = WrapMbIpt;