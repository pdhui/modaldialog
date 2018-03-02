function initHash(ModalDialog, options){

  if(!options.useHash)
    return;

  let notifyBackpress = options.notifyBackpress;
  let dialogIdList = [];

  ModalDialog.afterListener(function(dialog){
    dialogIdList.push(dialog.id);

    dialog.notifyBackPress = listenerBackpress();

    notifyBackpress.addListener(dialog.notifyBackPress, 'add');

  });

  ModalDialog.closedListener(function(dialog){
    dialogIdList = dialogIdList.filter((id)=>{
      return dialog.id !== id;
    });
    notifyBackpress.removeListener(dialog.notifyBackPress);
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

module.exports = initHash;