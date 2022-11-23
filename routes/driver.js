const express = require('express');
const dc = require('../controllers/drivercontroller');

const router = express.Router()

// router.get('/all', function(req,res){
//     res.json({
//         "page": "LIST OF CUSTOMERS"
//     })
// });
          //OR

router.get('/driver', dc.getAll);
// router.get('/customer/:id',cc.getOne);
// router.post('/customer',cc.validate('create'), cc.addOne);

// router.get('/one', function(req,res){
//     res.json({
//         "page": "GET ONE CUSTOMER"
//     })
// });

module.exports = router;