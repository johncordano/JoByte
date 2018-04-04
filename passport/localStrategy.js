// const User = require('../models/User')
// const LocalStrategy = require('passport-local').Strategy

// const strategy = new LocalStrategy(
// 	{
// 		usernameField: 'username' // not necessary, DEFAULT
// 	},
// 	function(username, password, done) {
// 		User.findOne({ username: username }, (err, user) => {
// 			if (err) {
// 				return done(err)
// 			}
// 			if (!user) {
// 				return done(null, false, { message: 'Incorrect username' })
// 			}
// 			if (!user.checkPassword(password)) {
// 				return done(null, false, { message: 'Incorrect password' })
// 			}
// 			return done(null, user)
// 		})
// 	}
// )


// //passport config for local signup
// passport.use('local-signup', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true

//     },
//     function(req, email, password, done) {
//         process.nextTick(function() {
//             db.User.findOne({
//                 where: {
//                     email: email
//                 }
//             }).then(function(user) {
//                 // if (err) 
//                 //     return done(err);

//                 if (user) {
//                     console.log('signupMessage', 'That email is already taken.');
//                     return done(null, false, { message: 'That email is already taken.' });
//                 } else {

//                     console.log("firstname" + req.body.firstname);
//                     console.log("lastname" + req.body.lastname);
//                     console.log("email" + req.body.email);

//                     var userPassword = generateHash(password);
//                     db.User.create({
//                         username: req.body.username,
//                         email: req.body.email,
//                         password: userPassword,
//                         authMethod: "local"
//                     }).then(function(dbUser, created) {
//                         if (!dbUser) {
//                             return done(null, false);
//                         } else {
//                             return done(null, dbUser);
//                         }
//                     })
//                 }
//             });

//         });
//     }
// ));

// //passport config for local signin
// passport.use('local-signin', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true // allows us to pass back the entire request to the callback
//     },
//     function(req, email, password, done) {

//         var isValidPassword = function(userpass, password) {
//             return bCrypt.compareSync(password, userpass);
//         }

//         db.User.findOne({
//             where: {
//                 email: email
//             }
//         }).then(function(user) {
//             if (!user) {
//                 return done(null, false, {
//                     message: 'Email does not exist'
//                 });
//             }

//             if (!isValidPassword(user.password, password)) {
//                 return done(null, false, {
//                     message: 'Incorrect password.'
//                 });
//             }

//             var userinfo = user.get();
//             return done(null, userinfo);


//         }).catch(function(err) {
//             console.log("Error:", err);
//             return done(null, false, {
//                 message: 'Something went wrong with your Signin'
//             });
// m
