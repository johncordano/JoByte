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
    type: String,
    default: false
  },
  jobId: {
    type: String
  }
});

var Action = mongoose.model('Action', ActionSchema);
module.exports = Action;
