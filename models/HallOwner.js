const mongoose = require('mongoose');

const HallOwnerSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  Hall: {
    type: mongoose.Types.ObjectId,
    ref: 'Hall',
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
  },
});

const HallOwner = mongoose.model('HallOwner', HallOwnerSchema);

module.exports = HallOwner;