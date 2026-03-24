const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  registration_no: { type: String, unique: true, required: true },
  model: String,
  color: String
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
