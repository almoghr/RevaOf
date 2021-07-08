const mongoose = require('mongoose');

const HallManagerSchema = new mongoose.Schema({
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
  HallOwner: {
    type: mongoose.Types.ObjectId,
    ref: 'HallOwner',
    required: true
  },
  KitchenManager: {
    type: mongoose.Types.ObjectId,
    ref: 'KitchenManager',
    required: true
  }
});

const HallManager = mongoose.model('HallManager', HallManagerSchema);

module.exports = HallManager;