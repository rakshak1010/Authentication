var express = require('express');
var router = express.Router();

const index = require('../controllers/index');

/* GET home page. */
router.get('/', index.showHome);

router.get('/secrets', index.showSecrets);

router.get('/auth/google', index.googleAuth);
router.get('/auth/google/secrets', index.googleCallback);

router.get('/auth/github', index.githubAuth);
router.get('/auth/github/secrets', index.githubCallback);

router.get('/logout', index.logoutUser);

router.get('/login', index.showLogin);
router.post('/login', index.loginUser);

router.get('/register', index.showRegister);
router.post('/register', index.createUser);

module.exports = router;
