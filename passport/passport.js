const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const db = require('../models')
//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
    // var User = user;
    const User  = require('../models').User;
    const LocalStrategy = require('passport-local').Strategy;

	// called on login, saves the id to session req.session.passport.user = {id:'..'}
	passport.serializeUser((user, done) => {
		console.log('*** serializeUser called, user: ')
		console.log(user) // the whole raw user object!
		console.log('---------')
		done(null, { _id: user._id })
	})

	// user object attaches to the request as req.user
	passport.deserializeUser((id, done) => {
		console.log('DeserializeUser called')
		db.User.findOne(
			{ _id: id },
			'email',
			(err, user) => {
				console.log('*** Deserialize user, user:')
				console.log(user)
				console.log('--------------')
				done(null, user)
			}
		)
	})

	passport.use('local-signup', new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		function(req, email, password, done) {
	        var generateHash = function(password) {
	                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
	            };

			db.User.findOne({email: email}, (user) => {
				if(user) {
					return done(null, false, {
						message: 'That email is already taken.'
					})
				} else {
					let userPassword = generateHash(password)
					let data = {
						email: email,
						password: userPassword,
						username: req.body.username
					}
					db.User.create(data)
						.then(function(newUser, created) {
							if (!newUser) {
								return done(null, false)
							}
							if (newUser) {
								console.log('newUser',newUser)
								return done(null, newUser)
							}
						})
					}
			})
		}))

	passport.use('local-signin', new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		function(req, email, password, done) {
			// let User = user;
			let isValidPassword = function(userpass, password) {
				return bCrypt.compareSync(password, userpass);
			}
			User.findOne({email: email})
				.then(function(user) {
					if (!user) {
						return done(null, false, {
							message: 'Email does not exist'
						})
					}
					if (!isValidPassword(user.password, password)) {
						return done(null, false, {
							message: 'Incorrect password.'
						})
					}
					let userInfo = user;
					return done(null, userInfo);
				}).catch(function(err) {
					console.log('Error:', err)
					return done(null, false, {
						message: 'Something went wrong with your signin'
					})
				})
		}
	))

}

// // called on login, saves the id to session req.session.passport.user = {id:'..'}
// passport.serializeUser((user, done) => {
// 	console.log('*** serializeUser called, user: ')
// 	console.log(user) // the whole raw user object!
// 	console.log('---------')
// 	done(null, { _id: user._id })
// })

// // user object attaches to the request as req.user
// passport.deserializeUser((id, done) => {
// 	console.log('DeserializeUser called')
// 	db.User.findOne(
// 		{ _id: id },
// 		'email',
// 		(err, user) => {
// 			console.log('*** Deserialize user, user:')
// 			console.log(user)
// 			console.log('--------------')
// 			done(null, user)
// 		}
// 	)
// })

// //  Use Strategies 
// passport.use(LocalStrategy)

// module.exports = passport
