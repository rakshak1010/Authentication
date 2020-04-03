// const List = require("../models/list");


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
};