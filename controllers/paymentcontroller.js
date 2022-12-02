const db = require('../models/payment');
const {body, validationResult} = require('express-validator');
const payment = require('../models/payment');


module.exports.paymentIndex = (req, res, next) => {
   payment.findAll().then(user => {
       res.render('payment-index', {
           data: user
       });
   })
}

module.exports.paymentCreate = (req, res, next) => {
    res.render('payment-create');
}

module.exports.paymentCreatePost = (req, res, next) => {
   payment.create({
           pick_up_location: req.body.pick_up_location,
           drop_off_location: req.body.drop_off_location,
           cost: req.body.cost
          
       })
       .then(user => {
           res.redirect("/payment/");
       })
}

module.exports.paymentUpdate = (req, res, next) => {
   payment.findByPk(req.params.id)

       .then(user => {
           console.log('🚗🚗🚗');
           console.log(user)
           res.render('payment-update', {
               data: user
           })
       });
}



module.exports.paymentUpdatePost = async (req, res, next) => {
   var paymentFromDb = await payment.findByPk(req.params.id);
   await paymentFromDb.update(
       { 
        pick_up_location: req.body.pick_up_location,
        drop_off_location: req.body.drop_off_location,
        cost: req.body.cost
        
       },
       {
           where: {id: req.params.id}
       }
   )
   res.redirect('/payment/');
}

module.exports.paymentDelete = async (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    let user = await payment.findByPk(id);
    if (user) {
        await payment.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/payment/");
    }
}

