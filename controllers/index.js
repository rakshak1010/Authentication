const User = require("../models/user");


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
		var user = new User({
			email: req.body.username,
			password: req.body.password
		});

		user.save((err, user) => {
			if(err){
				res.send(err);
			}else{
				res.render('secrets');
			}
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
					if(user.password === password){
						res.render('secrets');
					}else{
						res.send("Invalid password");
					}
				}else{
					res.send("Given email is not registered");
				}
			}
		})
	}
};