const User = require("../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;

module.exports = {
	showHome: (req, res) => {
		res.render('home');
	},

	showRegister: (req, res) => {
		res.render('register');
	},

	showLogin: (req, res) => {
		res.render('login');
	},

	createUser: (req, res) => {

		bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
			var user = new User({
				email: req.body.username,
				password: hash
			});

			user.save((err, user) => {
				if(err){
					res.send(err);
				}else{
					res.render('secrets');
				}
			});
		});
	},

	loginUser: (req, res) => {
		var email = req.body.username;
		var	password = req.body.password;

		User.findOne({email: email}, (err, user) => {
			if(err){
				res.send(err);
			}else{
				if(user){
					bcrypt.compare(password, user.password, (err, result) => {
						if(err){
							res.send(err);
						}else if(result === true){
							res.render('secrets');
						}else{
							res.send("Invalid password");
						}
					});
				}else{
					res.send("Given email is not registered");
				}
			}
		})
	}
};