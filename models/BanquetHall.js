const mongoose = require('mongoose');

const BanquetHallSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  banquetHallOwner: {
    type: mongoose.Types.ObjectId,
    ref: 'BanquetHallOwner',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  capacity:{
    type: Number,
    required: true
  }  
});

const BanquetHall = mongoose.model('BanquetHall', BanquetHallSchema);

module.exports = BanquetHall;
