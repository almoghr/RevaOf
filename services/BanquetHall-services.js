const BanquetHall = require('../models/BanquetHall.js');
// CRUD
    function getBanquetHall(banquetHallId){
        return BanquetHall.findOne({ _id: banquetHallId }).populate('banquetHallOwner', 'name');
    }

    function createBanquetHall(banquetHall){
        banquetHall = new BanquetHall(banquetHall)
        return banquetHall.save()
    }

    function updateBanquetHall(banquetHallId, newInfo){
        return BanquetHall.findOneAndUpdate({_id: banquetHallId}, newInfo, {new:true})
    }

    function removeBanquetHall(banquetHallId){
        return BanquetHall.findOneAndDelete({ _id: banquetHallId })
    }



module.exports = {
    getBanquetHall,
    createBanquetHall,
    updateBanquetHall,
    removeBanquetHall,
};
