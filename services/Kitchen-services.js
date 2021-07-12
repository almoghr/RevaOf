const Kitchen = require('../models/Kitchen.js');
// CRUD
    function getKitchen(KitchenId){
        return Kitchen.findOne({ _id: KitchenId }).populate('Kitchen', 'name');
    }

    function createKitchen(Kitchen){
      Kitchen = new Kitchen(Kitchen)
          return Kitchen.save()
    }

    function updateKitchen (KitchenId, newInfo){
        return Kitchen.findOneAndUpdate({_id: KitchenId}, newInfo, {new:true})
    }

    function removeKitchen(KitchenId,){
        return Kitchen.findOneAndDelete({ _id: KitchenId })
    }



module.exports = {
  getKitchen,
  createKitchen,
  updateKitchen,
  removeKitchen,
};
