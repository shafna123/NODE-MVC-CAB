
const express = require('express');
const cabc = require('../controllers/cabdetailscontroller');

const router = express.Router()

router.get('/', cabc.cabdetailsIndex);
router.get('/create', cabc.cabdetailsCreate);
router.post('/create', cabc.cabdetailsCreatePost);
router.get('/update/:id', cabc.cabdetailsUpdate);
router.post('/update/:id', cabc.cabdetailsUpdatePost);
router.get('/delete/:id', cabc.cabdetailsDelete);


module.exports = router;