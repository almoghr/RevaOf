const mongoose = require('mongoose');

const KitchenManagerSchema = new mongoose.Schema({
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
  HallManager: {
    type: mongoose.Types.ObjectId,
    ref: 'HallManager',
    required: true
  }
});

const KitchenManager = mongoose.model('KitchenManager', KitchenManagerSchema);

module.exports = KitchenManager;