var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
