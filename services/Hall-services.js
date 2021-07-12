const Hall = require('../models/Hall.js');
// CRUD
    function getHall(HallId){
        return Hall.findOne({ _id: HallOwnerId }).populate('HallOwner', 'name');
    }

    function createHall(Hall){
        Hall = new Hall(Hall)
        return Hall.save()
    }

    function updateHall(HallId, newInfo){
        return Hall.findOneAndUpdate({_id: HallId}, newInfo, {new:true})
    }

    function removeHall(HallId){
        return Hall.findOneAndDelete({ _id: HallId })
    }



module.exports = {
    getHall,
    createHall,
    updateHall,
    removeHall,
};
