var ModalDialog = require('./modal.js');
var historyPlugin = require('./plugins/history.js');

ModalDialog.defaultConfig.useHash = true;

ModalDialog.addPlugin(historyPlugin);

module.exports = ModalDialog;