const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  violation_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Violation', required: true },
  amount: { type: Number, required: true },
  payment_date: { type: Date, default: Date.now },
  mode: { type: String, enum: ['Cash','Card','Online'], required: true },
  status: { type: String, enum: ['Success','Failed'], default: 'Success' }
});

module.exports = mongoose.model('Payment', paymentSchema);
