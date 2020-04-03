var express = require('express');
var router = express.Router();

const index = require('../controllers/index');

/* GET home page. */
router.get('/', index.showHome);

router.get('/secrets', index.showSecrets);

router.get('/logout', index.logoutUser);

router.get('/login', index.showLogin);
router.post('/login', index.loginUser);

router.get('/register', index.showRegister);
router.post('/register', index.createUser);

module.exports = router;
