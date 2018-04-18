function initBackPress(ModalDialog, options){

  if(!options.useHash)
    return;

  let notifyBackpress = options.notifyBackpress;
  let dialogIdList = [];

  notifyBackpress = notifyBackpress(options);

  ModalDialog.afterListener(function(dialog){
    dialogIdList.push(dialog.id);

    dialog.listenerBackPress = notifyBackpress.addListener(listenerBackpress(), 'add');

    dialog.notifyPriority = notifyBackpress.callbackPriority;
  });

  ModalDialog.closedListener(function(dialog){
    dialogIdList = dialogIdList.filter((id)=>{
      return dialog.id !== id;
    });
    // notifyBackpress.removeListener(dialog.listenerBackPress);
    dialog.listenerBackPress.update();
    notifyBackpress.goBack();
  });

  function listenerBackpress() {

    return function(){
      if(!dialogIdList.length){
        options.backPress && options.backPress();
        return;
      }

      const dlgId = dialogIdList.pop();

      ModalDialog.dialogList[dlgId].closeDialog(true);
    }
  }
};

module.exports = initBackPress;