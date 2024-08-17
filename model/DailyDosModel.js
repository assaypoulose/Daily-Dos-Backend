const mongoose = require('mongoose');

const dailydoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true  // Corrected from 'require' to 'required'
  }
});

module.exports = mongoose.model('DailyDos', dailydoSchema);
