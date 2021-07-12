const KitchenManager = require('../models/KitchenManager.js');
// CRUD
    function getKitchenManager(KitchenManagerId){
        return KitchenManager.findOne({ _id: KitchenManagerId }).populate('KitchenManager', 'name');
    }

    function createKitchenManager(KitchenManager){
      KitchenManager = new KitchenManager(KitchenManager)
          return KitchenManager.save()
    }

    function updateKitchenManager (KitchenManagerId, newInfo){
        return KitchenManager.findOneAndUpdate({_id: KitchenManagerId}, newInfo, {new:true})
    }

    function removeKitchenManager(KitchenManagerId,){
        return KitchenManager.findOneAndDelete({ _id: KitchenManagerId })
    }



module.exports = {
  getKitchenManager,
  createKitchenManager,
  updateKitchenManager,
  removeKitchenManager,
};
