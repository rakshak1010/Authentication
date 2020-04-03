var express = require('express');
var router = express.Router();

const index = require('../controllers/index');

/* GET home page. */
router.get('/', index.showHome);

router.get('/login', index.showLogin);

router.get('/register', index.showRegister);

module.exports = router;
