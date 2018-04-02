const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const UserSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  }
})

// define schema methods...
UserSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hasPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}


// Define hooks for pre-saving
UserSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/User.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/User.js hashPassword in pre save');
    
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
