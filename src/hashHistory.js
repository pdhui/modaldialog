import {bindEvent,unBindEvent} from './dom.js';

const HashChangeEvent = 'hashchange';
const query_key = '_dg_hash'

const hashHistory = (options)=>{

  let prevLocation = '',
      listeners = [];

  const getCurrentHashPath = () => {
    const href = window.location.href,
          regx =new RegExp(`^${query_key}=(.*)`);
    let index = href.indexOf('#'),
        queryIndex,
        str = '',
        matches;

    if(index != -1){
      str = href.substring(index + 1) || '';
      if(queryIndex = str.indexOf('?') > 0){
        str = str.substring(0,queryIndex);
      }
      matches = regx.exec(str);
      if(matches){
        str = matches[1];
      }else {
        str = '';
      }
    }
    return str;
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
    pushHashPath(query_key + '=' + hashPath);
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