const express = require('express');
const router = express.Router();
const Violation = require('../models/Violation');

// Create violation
router.post('/', async (req, res) => {
  try {
    const violation = new Violation(req.body);
    await violation.save();
    res.status(201).json(violation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all violations
router.get('/', async (req, res) => {
  const violations = await Violation.find().populate('vehicle_id officer_id');
  res.json(violations);
});

// Update violation status
router.put('/:id', async (req, res) => {
  try {
    const violation = await Violation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(violation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
