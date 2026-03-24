const mongoose = require('mongoose');

const violationSchema = new mongoose.Schema({
  vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  officer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  violation_type: { type: String, required: true },
  location: String,
  violation_date: { type: Date, default: Date.now },
  fine_amount: { type: Number, required: true },
  status: { type: String, enum: ['Pending','Paid'], default: 'Pending' }
});

module.exports = mongoose.model('Violation', violationSchema);
