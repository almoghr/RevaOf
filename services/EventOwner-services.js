const EventOwner = require('../models/EventOwner.js');
// CRUD
    function getEventOwner(EventOwnerId){
        return EventOwner.findOne({ _id: EventOwnerId }).populate('EventOwner', 'name');
    }

    function createEventOwner(EventOwner){
      EventOwner = new EventOwner(EventOwner)
        return EventOwner.save()
    }

    function updateEventOwner(EventOwnerId, newInfo){
        return EventOwner.findOneAndUpdate({_id: EventOwnerId}, newInfo, {new:true})
    }

    function removeEventOwner(EventOwnerId){
        return EventOwner.findOneAndDelete({ _id: EventOwnerId })
    }
console.log('hi vebuy')

module.exports = {
  getEventOwner,
  createEventOwner,
  updateEventOwner,
  removeEventOwner,
};
