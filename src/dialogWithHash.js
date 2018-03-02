
var ModalDialog = require('./modal.js');
// var historyPlugin = require('./plugins/history.js');
var backPressPlugin = require('./plugins/backPress2.js');

ModalDialog.defaultConfig.useHash = true;

// if(window.EventJavascriptInterface && typeof window.EventJavascriptInterface.listenBackPress == 'function')
  ModalDialog.addPlugin(backPressPlugin);
// else
//   ModalDialog.addPlugin(historyPlugin);

module.exports = ModalDialog;