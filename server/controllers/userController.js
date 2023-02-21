const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/user');
const Shelf = require('../models/shelf');

exports.user_create_get = function(req, res, next) {
    res.render('index');
};

exports.user_create_post = function(req, res, next) {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.save(err => {
        if (err) {
            return next(err)
        }
    
    })
};

exports.user_strategy = new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) { 
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  })

exports.user_serialize = function(user, done) {
    done(null, user.id);
}

exports.user_deserialize = function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    })
}

exports.user_authenticate = passport.authenticate("local");

exports.user_authenticate_callback = function(req, res, next) {
  if (req.user) {
    res.json(req.user);
  } else {
    res.statusCode = 503;
    res.send({message: 'Not Found'});
  }
};

exports.user_send = function(req, res, next) {
  res.json(req.user);
}