var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//test
var User = require('../models/user');
var Player = require('../models/location_model');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://keith:keith7195@soulgemrpg-shard-00-00-dcgj2.mongodb.net:27017,soulgemrpg-shard-00-01-dcgj2.mongodb.net:27017,soulgemrpg-shard-00-02-dcgj2.mongodb.net:27017/soulgemrpg?ssl=true&replicaSet=soulgemrpg-shard-0&authSource=admin';
var assert = require('assert');


// Register
router.get('/register', function(req, res){
	res.render('register');
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});

// Register User
router.post('/register', function(req, res){
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Validation
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);


	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors
		});
	} else {
		var newUser = new User({
			email:email,
			username: username,
			password: password
		});

		//check if user exists
		        User.getUserByUsername(username, function(err, username){
		            if(username){
		                 console.log("match:");
										 req.flash('error_msg', 'Username taken');
										 res.redirect('/users/register');
		            }
		       else{
						 User.getUserByEmail(email, function(err, email){
								 if(email){
											console.log("match:");
											req.flash('error_msg', 'Email already used');
											res.redirect('/users/register');
								 }else{
		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log("creating user"+user);

                        //Duh: Insert new player
                        MongoClient.connect(url, function(err, db) {
                            assert.equal(null, err);
                            User.insertDocument(db, user._id, user.username, function() {
                                db.close();
                            });
                        });
		});
		req.flash('success_msg', 'You are registered and can now login!!!');

		res.redirect('/users/login');
	}
		});
}
	});
}
});

passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getUserByUsername(username, function(err, user){
   	if(err) throw err;
   	if(!user){
   		return done(null, false, {message: 'Unknown User'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local', {failureRedirect:'/users/login',failureFlash: true}),
  function(req, res) {
				res.redirect('/');
	  });

router.get('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

module.exports = router;
