const express = require('express');
const pc = require('../controllers/passengercontroller');

const router = express.Router()

// router.get('/all', function(req,res){
//     res.json({
//         "page": "LIST OF CUSTOMERS"
//     })
// });
          //OR

router.get('/passenger', pc.getAll);
// router.get('/customer/:id',cc.getOne);
// router.post('/customer',cc.validate('create'), cc.addOne);

// router.get('/one', function(req,res){
//     res.json({
//         "page": "GET ONE CUSTOMER"
//     })
// });

module.exports = router;