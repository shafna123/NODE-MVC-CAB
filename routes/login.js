const express = require('express');
const lc = require('../controllers/logincontrollers');

const router = express.Router();

router.get('/login', lc.login);
router.post('/login', lc.loginPost);
router.get('/register', lc.register);
router.post('/register', lc.registerPost);

module.exports = router;