const db = require('../models/driver');
const {body, validationResult} = require('express-validator');
const driver = require('../models/driver');


module.exports.driverIndex = (req, res, next) => {
   driver.findAll().then(user => {
    console.log(req.identity.passenger.role);
       res.render('driver-index', {
           data: user,
           role : req.identity.passenger.role
       });
   })
}

module.exports.driverCreate = (req, res, next) => {
    res.render('driver-create');
}

module.exports.driverCreatePost = (req, res, next) => {
   driver.create({
           driver_id: req.body.driver_id,
           driver_name: req.body.driver_name,
           driver_mobile_number: req.body.driver_mobile_number,
           gender: req.body.gender
          
       })
       .then(user => {
           res.redirect("/driver/");
       })
}

module.exports.driverUpdate = (req, res, next) => {
   driver.findByPk(req.params.id)

       .then(user => {
           console.log('🚗🚗🚗');
           console.log(user)
           res.render('driver-update', {
               data: user
           })
       });
}

// module.exports.updatePost = (req, res, next) => {
//     movie.findByPk(req.params.id)
//         .then(user => {
//             movie.update({
//                     name: req.body.name,
//                     releaseDate: req.body.releasedate,
//                     summary: req.body.summary,
//                     director: req.body.director
//                 }, {
//                     where: {
//                         id: req.params.id
//                     }
//                 })
//                 .then(count => {
//                     res.redirect('/');
//                 });
//         });
// }

module.exports.driverUpdatePost = async (req, res, next) => {
   var driverFromDb = await driver.findByPk(req.params.id);
   await driverFromDb.update(
       { 
         driver_id: req.body.driver_id,
        driver_name: req.body.driver_name,
        driver_mobile_number: req.body.driver_mobile_number,
        gender: req.body.gender
        
       },
       {
           where: {id: req.params.id}
       }
   )
   res.redirect('/driver/');
}

module.exports.driverDelete = async (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    let user = await driver.findByPk(id);
    if (user) {
        await driver.destroy({
            where: {
                driver_id: id
            }
        });
        res.redirect("/driver/");
    }
}



