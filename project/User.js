const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ['Admin','Officer','Citizen'], required: true },
  email: { type: String, unique: true, required: true },
  phone: String,
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
