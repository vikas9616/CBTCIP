const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  budget: Number,
  guests: [String],
  vendors: [String],
  tasks: [String],
});

module.exports = mongoose.model('Event', eventSchema);
