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

var ease = {
  circular: {
    style: 'cubic-bezier(0.1, 0.57, 0.1, 1)'
  }
};

module.exports = {
  initTouch: function(dialog){
    var dlgContent =  dialog.querySelector('.dialog-content'),
        section = dialog.getElementsByTagName('section')[0],
        scrollTargeStyle = dlgContent.style,
        wrapperHeight = getComputedStyle(section).getPropertyValue('height').replace('px','')*1,
        maxHeight, startPosx, startPosy, isTouch,
        startTime, distY, distX,
        endTime = 0, x =0, y =0, startX, startY, isInTransition;

    maxHeight = wrapperHeight - getHeight(dlgContent,true);

    scrollTargeStyle.transitionTimingFunction = ease.circular.style;

    utils.bindEvent(dialog,'touchmove',stopScrollMove);
    utils.bindEvent(dialog,'touchstart',startTouch);
    utils.bindEvent(dialog,'touchend',toucheEnd);
    utils.bindEvent(dlgContent,'transitionend',_transitionEnd);
    utils.bindEvent(dlgContent,'webkitTransitionEnd',_transitionEnd);

    return {
      destroyScroll: function(){
        utils.unBindEvent(dialog,'touchmove',stopScrollMove);
        utils.unBindEvent(dialog,'touchstart',startTouch);
        utils.unBindEvent(dialog,'touchend',toucheEnd);
        utils.unBindEvent(dlgContent,'transitionend',_transitionEnd);
        utils.unBindEvent(dlgContent,'webkitTransitionEnd',_transitionEnd);
        dlgContent = section = null;
      },
      refresh: function(){
        wrapperHeight = getComputedStyle(section).getPropertyValue('height').replace('px','')*1;
        maxHeight = wrapperHeight - getHeight(dlgContent,true);
      }
    };

    function startTouch(e){
      var touch = e.touches[0],
          target = utils.closest(e.target,'dialog-content'),
          pos;

      if(!!target){
        if(isInTransition){
          _transitionTime();
          isInTransition = false;
          pos = getComputedPosition();
          translate(Math.round(pos.x), Math.round(pos.y));
        }
        startPosx = touch.pageX;
        startPosy = touch.pageY;
        startTime = Date.now();
        distX = distY = 0;
        startX = x;
        startY = y;
        isTouch = true;
      }else{
        isTouch = false;
      }
    }
    function stopScrollMove(e){
      var touch = e.touches[0],
          posX = touch.pageX,
          posY = touch.pageY,
          nodeName = e.target.nodeName.toLowerCase(),
          timestamp = Date.now();

      var deltaY = posY - startPosy,
          deltaX = posX - startPosx,
          newY;

      startPosx = posX;
      startPosy = posY;

      distX += deltaX;
      distY += deltaY;

      if ( (timestamp - endTime > 300 && Math.abs(distY) < 10) || !isTouch || maxHeight >= 0) {
        e.preventDefault();
        return;
      }

      newY = y + deltaY;
      if ( newY > 0 || newY < maxHeight ) {
        newY = y + deltaY / 3;
      }

      translate(dlgContent,newY);

      if( nodeName != 'input' && nodeName != 'select' && nodeName != 'textarea'){
        e.preventDefault();
        e.stopPropagation();
      }
      if ( timestamp - startTime > 300 ) {
        startTime = timestamp;
        startX = x;
        startY = y;
      }
    }
    function toucheEnd(e){
      var duration = Date.now() - startTime,
          newY = Math.round(y),
          distanceY = Math.abs(newY - startY),
          time = 0,
          momentumY;

      startPosx = null;
      startPosy = null;
      endTime = Date.now();
      isInTransition = 0;

      if (resetPosition(dlgContent,500) || maxHeight >= 0) {
        return;
      }

      scrollTo(dlgContent, newY);

      if(duration < 300){
        momentumY = momentum(y, startY, duration);
        newY = momentumY.destination;
        time = momentumY.duration;
        isInTransition = 1;
      }

      if ( newY != y ) {
        scrollTo(dlgContent, newY,time);
      }
    }
    function scrollTo(target,posy,time){
      time = time || 0;
      isInTransition = time > 0;
      _transitionTime(time);
      translate(target,posy)
    }
    function translate(target, posy) {
      scrollTargeStyle.webkitTransform  = 'translate3d(0px,' + posy + 'px,0px)';
      y = posy;
    }
    function resetPosition(target,time){
      var posY = y;

      time = time || 0;

      if (posY >= 0 ) {
        posY = 0;
      } else if (posY < maxHeight ) {
        posY = maxHeight;
      }

      if ( posY == y ) {
        return false;
      }

      scrollTo(target, posY, time);
      return true;
    }

    function momentum(current, start, time){
      var distance = current - start,
          speed = Math.abs(distance) / time,
          deceleration = 0.0006,
          destination,
          duration;

      destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 ); // s=(at^2)/2
      duration = speed / deceleration; // v=at

      if ( destination < maxHeight ) {
        destination = maxHeight - ( wrapperHeight / 2.5 * ( speed / 8 ) );
        distance = Math.abs(destination - current);
        duration = distance / speed;
      }else if(destination > 0){
        destination = wrapperHeight / 2.5 * ( speed / 8 );
        distance = Math.abs(current) + destination;
        duration = distance / speed;
      }

      return {
        destination: Math.round(destination),
        duration: duration
      };
    }

    function getComputedPosition() {
      var matrix = window.getComputedStyle(dlgContent, null),
        x, y;

      matrix = matrix.webkitTransform.split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);

      return { x: x, y: y };
    }

    function _transitionTime(time){
      time = time || 0;
      scrollTargeStyle.transitionDuration = time + 'ms';
    }
    function _transitionEnd(){
      if(!isInTransition)
        return;
      _transitionTime();
      if(!resetPosition(dlgContent)){
        isInTransition = 0;
      }
    }
  }
};