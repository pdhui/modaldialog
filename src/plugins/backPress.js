function initBackPress(ModalDialog, options){

  if(!options.useHash)
    return;

  let dialogIdList = [];

  listenBackPress();

  ModalDialog.afterListener(function(dialog){
    dialogIdList.push(dialog.id);
  });

  ModalDialog.closedListener(function(dialog){
    dialogIdList = dialogIdList.filter((id)=>{
      return dialog.id !== id;
    })
  });

  function listenBackPress(){
    EventJavascriptInterface.listenBackPress('backpress');
  }

  window.backpress = function () {

    if(!dialogIdList.length){
       EventJavascriptInterface.backPress();
       options.backPress && options.backPress();
      return;
    }

    listenBackPress();

    const dlgId = dialogIdList.pop();

    ModalDialog.dialogList[dlgId].closeDialog(true);
  }
};

module.exports = initBackPress;