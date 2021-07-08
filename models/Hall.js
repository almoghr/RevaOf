const mongoose = require('mongoose');

const HallSchema = new mongoose.Schema({
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
  capacity:{
    type: Number,
    required: true
  },
  HallOwner: {
    type: mongoose.Types.ObjectId,
    ref: 'HallOwner',
    required: true
  }
});

const Hall = mongoose.model('Hall', HallSchema);

module.exports = Hall;