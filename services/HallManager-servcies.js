const HallManager = require('../models/HallManager.js');
// CRUD
    function getHallManager(HallManagerId){
        return HallManager.findOne({ _id: HallManagerId }).populate('HallManager', 'name');
    }

    function createHallManager(HallManager){
        HallManager = new HallManager(HallManager)
          return HallManager.save()
    }

    function updateHallManager (HallManagerId, newInfo){
        return HallManager.findOneAndUpdate({_id: HallManagerId}, newInfo, {new:true})
    }

    function removeHallManager(HallManagerId,){
        return HallManager.findOneAndDelete({ _id: HallManagerId })
    }



module.exports = {
  getHallManager,
  createHallManager,
  updateHallManager,
  removeHallManager,
};
