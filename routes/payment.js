const express = require('express');
const pc = require('../controllers/paymentcontroller');

const router = express.Router()

router.get('/', pc.paymentIndex);
router.get('/create', pc.paymentCreate);
router.post('/create', pc.paymentCreatePost);
router.get('/update/:id', pc.paymentUpdate);
router.post('/update/:id', pc.paymentUpdatePost);
router.get('/delete/:id', pc.paymentDelete);

module.exports = router;