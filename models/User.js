var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

// the default value for node.bcrypt.js for reducing password attacks
var SALT_WORK_FACTOR = 10;

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
  //  unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: 'Job'
  }
});

UserSchema.pre("save", function(next) {
  var user = this;
  
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
  
  
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

var User = mongoose.model('User', UserSchema);

// // create a user a new user
// var testUser = new User({
//     name: "rhonda",
//     password: "Password",
//     email: "c@b.com"
// });
// 
// // save user to database
// testUser.save(function(err) {
//   if (err) throw err;
// });

module.exports = User;
