const mongoose = require('mongoose');

const EventOwnerSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  ceremony: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  guests:{
    type: Number,
    required: true
  },
  Hall: {
    type: mongoose.Types.ObjectId,
    ref: 'Hall',
    required: true
  },
  HallOwner: {
    type: mongoose.Types.ObjectId,
    ref: 'HallOwner',
    required: true
  },
  HallManager: {
    type: mongoose.Types.ObjectId,
    ref: 'HallManager',
    required: true
  },
  KitchenManager: {
    type: mongoose.Types.ObjectId,
    ref: 'KitchenManager',
    required: true
  },
  Kitchen: {
    type: mongoose.Types.ObjectId,
    ref: 'Kitchen',
    required: true
  }
});

const EventOwner = mongoose.model('EventOwner', EventOwnerSchema);

module.exports = EventOwner;