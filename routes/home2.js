const express = require('express');
const hcc = require('../controllers/home2controllers');

const router = express.Router();

router.get('/home2', hcc.home2);


module.exports = router;