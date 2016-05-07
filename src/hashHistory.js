import {bindEvent,unBindEvent} from './dom.js';

const HashChangeEvent = 'hashchange';

const hashHistory = (options)=>{

  let prevLocation = '',
      listeners = [];

  const getCurrentHashPath = () => {
    const href = window.location.href
    const index = href.indexOf('#')
    return index === -1 ? '' : href.substring(index + 1)
  }

  const stopListener = ()=>{
    unBindEvent(window, HashChangeEvent, handleHashChange);
  };

  const listener = (callback)=>{
    listeners.push(callback);

    return () =>
      listeners = listeners.filter(item => item !== callback)
  };

  const pushHashPath = (path) =>
    window.location.hash = path

  const replaceHashPath = (path) =>
    window.location.replace(
      window.location.pathname + window.location.search + '#' + path
    )

  const autoUpdateHash = ()=>{
    let hashPath = getCurrentHashPath()*1;
    if(!hashPath)
      hashPath = 1;
    else
      hashPath ++;
    pushHashPath(hashPath);
    return hashPath;
  };

  const go = (n) => {
    if (n)
      window.history.go(n);
  }
  const back = ()=>{
    window.history.back();
  }

  const handleHashChange = () => {
    const currentLocation = getCurrentHashPath();

    if (prevLocation === currentLocation)
      return;

    listeners.forEach(listener=>{
      listener(currentLocation,prevLocation);
    });

    prevLocation = currentLocation;
  }

  bindEvent(window, HashChangeEvent, handleHashChange);

  return {
    getCurrentHashPath,
    listener,
    stopListener,
    pushHashPath,
    replaceHashPath,
    autoUpdateHash,
    go,
    back
  }
}

module.exports = hashHistory;