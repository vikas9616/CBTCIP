const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create a new event
router.post('/', async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    await newEvent.save();
    res.status(201).send(newEvent);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).send(events);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update an event
router.put('/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(updatedEvent);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
