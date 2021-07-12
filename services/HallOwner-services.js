const HallOwner = require('../models/HallOwner.js');
// CRUD
    function getHallOwner(HallOwnerId){
        return HallOwner.findOne({ _id: HallOwnerId }).populate('HallOwner', 'name');
    }

    function createHallOwner(HallOwner){
      HallOwner = new HallOwner(HallOwner)
          return HallOwner.save()
    }

    function updateHallOwner (HallOwnerId, newInfo){
        return HallOwner.findOneAndUpdate({_id: HallOwnerId}, newInfo, {new:true})
    }

    function removeHallOwner(HallOwnerId,){
        return HallOwner.findOneAndDelete({ _id: HallOwnerId })
    }



module.exports = {
  getHallOwner,
  createHallOwner,
  updateHallOwner,
  removeHallOwner,
};
