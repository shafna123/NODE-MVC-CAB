
const express = require('express');
const dc = require('../controllers/drivercontroller');

const router = express.Router()

router.get('/', dc.driverIndex);
router.get('/create', dc.driverCreate);
router.post('/create', dc.driverCreatePost);
router.get('/update/:id', dc.driverUpdate);
router.post('/update/:id', dc.driverUpdatePost);
router.get('/delete/:id', dc.driverDelete);

module.exports = router;