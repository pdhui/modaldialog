var hashHistory = require('../hashHistory.js');

function initHash(ModalDialog, options){

  if(!options.useHash)
    return;

  var hashListener = hashHistory(),
      dialogMap = {},
      hashQueue = [];

  hashListener.listener(function(path,prepath){
    var prepath = prepath * 1;

    if(!!prepath && path - prepath < 0){
      removeDialogByHash(prepath);
    }
  });

  /*
   queue --> hash --> dialogId --> modal
   */
  ModalDialog.afterListener(function(dialog){
    var hashVl = hashListener.autoUpdateHash();
    dialogMap[hashVl] = dialog.id;
    hashQueue.push(hashVl);
  });

  ModalDialog.closedListener(function(dialog){
    var unUsualIdx = hashQueue.length - 2,
        hashvl = hashQueue[unUsualIdx],
        lastItem;

    if(dialogMap[hashvl] == dialog.id){
      hashQueue.splice(unUsualIdx,1);
      dialogMap[hashvl] = dialogMap[hashQueue[unUsualIdx]]
      delete dialogMap[hashQueue[unUsualIdx]];
      hashQueue[unUsualIdx]--;
    }else{
      lastItem = hashQueue.pop();
      delete dialogMap[lastItem];
    }

    if(hashListener.getCurrentHashPath() > 0)
      hashListener.back();
  });

  function removeDialogByHash(hashvl){
    var dialogList = ModalDialog.dialogList,
        splitIndex;

    hashQueue.every(function(item,index){
      if(item == hashvl){
        splitIndex = index;
      }
      else
        return true;
    });

    if(splitIndex != null){

      hashQueue.slice(splitIndex).forEach(function(item){
        dialogList[dialogMap[item]].closeDialog(true);
        delete dialogMap[item];
      });
      hashQueue = hashQueue.slice(0,splitIndex);
    }
  }
}

module.exports = initHash;