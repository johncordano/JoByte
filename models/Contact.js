var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  company: {
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
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  phone: {
    type: String,
    match: [
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
      'Please enter a valid 10 digit phone number.'
    ]
  },
  notes: {
    type: String
  }
});

var Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;
