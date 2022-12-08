const db = require('../models/cabdetails');
const {body, validationResult} = require('express-validator');
const cabdetails = require('../models/cabdetails');


module.exports.cabdetailsIndex = (req, res, next) => {
   cabdetails.findAll().then(user => {
       res.render('cabdetails-index', {
           data: user,
           cab:req.identity.passenger,

       });
   })
}

module.exports.cabdetailsCreate = (req, res, next) => {
    res.render('cabdetails-create');
}

module.exports.cabdetailsCreatePost = (req, res, next) => {
 
 
   cabdetails.create({
      
      cab_id: req.body.cab_id,
      cab_model: req.body.cab_model,
      cab_number: req.body.cab_number,
      cab_capacity: req.body.cab_capacity,
      driver_id: req.body.driver_id
     
       })
       .then(user => {
           res.redirect("/cabdetails/");
       })
}

module.exports.cabdetailsUpdate = (req, res, next) => {
   cabdetails.findByPk(req.params.id)
       .then(user => {
           res.render('cabdetails-update', {
               data: user
           })
       });
}



module.exports.cabdetailsUpdatePost = async(req, res, next) => {
   var cabdetailsFromDb = await cabdetails.findByPk(req.params.id);
   await cabdetailsFromDb.update(
       {   
         cab_id: req.body.cab_id,
         cab_model: req.body.cab_model,
         cab_number: req.body.cab_number,
         cab_capacity: req.body.cab_capacity,
         driver_id: req.body.driver_id
       },
       {
           where: {id: req.params.id}
       }
   )
   res.redirect('/cabdetails/');
}

module.exports.cabdetailsDelete = async (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    let user = await cabdetails.findByPk(id);
    if (user) {
        await cabdetails.destroy({
            where: {
               cab_id: id
            }
        });
        res.redirect("/cabdetails/");
    }
}