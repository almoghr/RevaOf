const mongoose = require('mongoose');

const KitchenSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
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

const Kitchen = mongoose.model('Kitchen', KitchenSchema);

module.exports = Kitchen;