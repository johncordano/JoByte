var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
  company: {
    type: String,
    trim: true,
    required: true
  },
  position: {
    type: String,
    trim: true
  },
  link: {
    type: String
  },
  status: {
    type: String
  },
  userId: {
    type: String
  },
  actions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Action'
    }
  ]
});

var Job = mongoose.model('Job', JobSchema);
module.exports = Job;
