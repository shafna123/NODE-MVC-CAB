const express = require('express');
const pc = require('../controllers/passengercontroller');

const router = express.Router()

router.get('/', pc.index);
router.get('/create', pc.create);
router.post('/create', pc.createPost);
router.get('/update/:id', pc.update);
router.post('/update/:id', pc.updatePost);
router.get('/delete/:id', pc.delete);

module.exports = router;