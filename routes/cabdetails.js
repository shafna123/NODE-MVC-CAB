const express = require('express');
const cc = require('../controllers/cabdetailscontroller');

const router = express.Router()

// router.get('/all', function(req,res){
//     res.json({
//         "page": "LIST OF CUSTOMERS"
//     })
// });
          //OR

router.get('/cabdetails', cc.getAll);
// router.get('/customer/:id',cc.getOne);
// router.post('/customer',cc.validate('create'), cc.addOne);

// router.get('/one', function(req,res){
//     res.json({
//         "page": "GET ONE CUSTOMER"
//     })
// });

module.exports = router;