var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  }
});

var Action = mongoose.model('Action', ActionSchema);
module.exports = Action;
