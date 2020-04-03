const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

const User = require("../models/user");

module.exports = {
	showHome: (req, res) => {
		if(req.isAuthenticated()){
			res.redirect('/secrets');
		}else{
			res.render('home');
		}
	},

	showRegister: (req, res) => {
		if(req.isAuthenticated()){
			res.redirect('/secrets');
		}else{
			res.render('register');
		}
	},

	showLogin: (req, res) => {
		if(req.isAuthenticated()){
			res.redirect('/secrets');
		}else{
			res.render('login');
		}
	},

	showSecrets: (req, res) => {
		if(req.isAuthenticated()){
			res.render('secrets');
		}else{
			res.redirect('/login');
		}
	},

	createUser: (req, res) => {
		User.register({username: req.body.username}, req.body.password, (err, user) => {
			if(err){
				console.log(err);
				res.redirect('/register');
			}else{
				passport.authenticate("local")(req, res, function (){
					res.redirect("/secrets");
				});
			}
		});
	},

	loginUser: (req, res) => {
		var user = new User({
			username: req.body.username,
			password: req.body.password
		});

		req.login(user, (err) => {
			if(err){
				console.log(err);
				res.redirect('/login');
			}else{
				passport.authenticate("local")(req, res, function (){
					res.redirect("/secrets");
				});
			}
		});
	},

	logoutUser: (req, res) => {
		req.logout();
		res.redirect('/');
	}
};