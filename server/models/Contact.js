var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  position: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  phone: {
    type: String
  },
  notes: {
    type: String
  }
});

var Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;
