const express = require('express');
const hc = require('../controllers/homecontrollers');

const router = express.Router();

router.get('/home', hc.home);


module.exports = router;