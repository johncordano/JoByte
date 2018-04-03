const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../passport')

router.post('/', (req, res) => {
    console.log('user signup');
    const { name, password, email } = req.body
    // ADD VALIDATION
    db.User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the email: ${email}`
            })
        }
        else {
            db.User.create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            name: req.user.name
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router