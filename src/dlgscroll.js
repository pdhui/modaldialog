var utils = require('./dom.js');

function getHeight(sel,isOuter){
  var sectionStyle = getComputedStyle(sel),
      marginH = 0;

  if(isOuter){
    marginH = sectionStyle.getPropertyValue('margin-top').replace('px','')*1 +
              sectionStyle.getPropertyValue('margin-bottom').replace('px','')*1
  }
  return (
          sectionStyle.getPropertyValue('height').replace('px','')*1 +
          sectionStyle.paddingTop.replace('px','')*1 +
          sectionStyle.paddingBottom.replace('px','')*1 +
          sectionStyle.borderTopWidth.replace('px','')*1 +
          sectionStyle.borderBottomWidth.replace('px','')*1 +
          marginH
        );
}

module.exports = {
  initTouch: function(dialog){
    var dlgContent =  dialog.querySelector('.dialog-content'),
        section = dialog.getElementsByTagName('section')[0],
        maxHeight, startPosx, startPosy, isTouch,
        lastPosY, timer;

    maxHeight = getComputedStyle(section).getPropertyValue('height').replace('px','')*1 -
                getHeight(dlgContent,true);

    utils.bindEvent(dialog,'touchmove',stopScrollMove);
    utils.bindEvent(dialog,'touchstart',startTouch);
    utils.bindEvent(dialog,'touchend',toucheEnd);

    return function(){
      utils.unBindEvent(dialog,'touchmove',stopScrollMove);
      utils.unBindEvent(dialog,'touchstart',startTouch);
      utils.unBindEvent(dialog,'touchend',toucheEnd);
    }

    function startTouch(e){
      var touch = e.touches[0],
          target = utils.closest(e.target,'dialog-content');

      if(!!target){
        startPosx = touch.screenX;
        startPosy = touch.screenY;
        isTouch = true;
      }
    }
    function stopScrollMove(e){
      var touch = e.touches[0],
          target = e.target,
          currentTarget = e.currentTarget,
          nodeName = target.nodeName.toLowerCase(),
          posX = touch.screenX,
          posY = touch.screenY,
          currentPosY = currentTarget.attributes['data-pos'].value*1 || 0,
          distance;

      if(isTouch){
        if(Math.abs(posX - startPosx) < 10 && Math.abs(posY - startPosy) > 10){
          distance = currentPosY + posY - startPosy ;
          if(distance < maxHeight)
            distance = maxHeight;
          else if(distance > 0)
            distance = 0;
          currentTarget.attributes['data-pos'].value = distance;
          scrollTo(dlgContent,currentPosY,distance);

          startPosx = posX;
          startPosy = posY;
        }
      }
      if( nodeName != 'input' && nodeName != 'select' && nodeName != 'textarea'){
        e.preventDefault();
        e.stopPropagation();
      }
      return false;
    }
    function toucheEnd(){
      startPosx = null;
      startPosy = null;
      isTouch = false;
    }
    function scrollTo(target,curPosY,y){
      target.style.webkitTransform  = 'translate3d(0px,' + y + 'px,0px)';
    }
    function scrollTo_test(target,curPosY,y){
      var step = 5;

      lastPosY = y;
      if(timer != null){
        clearTimer();
      }

      timer = setInterval(_innerScroll,18);
      _innerScroll();

      function _innerScroll(){
        curPosY -= step;
        if(curPosY < lastPosY){
          clearTimer();
          curPosY = lastPosY;
        }
        target.style.webkitTransform  = 'translate3d(0px,' + curPosY + 'px,0px)';
      }
      function clearTimer(){
        timer = null;
        clearInterval(timer);
      }
    }
  }
};