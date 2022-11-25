const db = require('../models/passenger');
const {body, validationResult} = require('express-validator');
const passenger = require('../models/passenger');
// const passenger = require('../models/passenger');

module.exports.index = (req, res, next) => {
   passenger.findAll().then(user => {
       res.render('passenger-index', {
           data: user
       });
   })
}

module.exports.create = (req, res, next) => {
    res.render('passenger-create');
}

module.exports.createPost = (req, res, next) => {
   passenger.create({
           firstName: req.body.firstName,
           lastName: req.body.lastName,
           email: req.body.email,
           mobile_number: req.body.mobile_number,
           password: req.body.password
       })
       .then(user => {
           res.redirect("/");
       })
}

module.exports.update = (req, res, next) => {
   passenger.findByPk(req.params.id)
       .then(user => {
           res.render('passenger-update', {
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

module.exports.updatePost = async (req, res, next) => {
   var passengerFromDb = await passenger.findByPk(req.params.id);
   await passengerFromDb.update(
       { 
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
         mobile_number: req.body.mobile_number,
         password: req.body.password
           
       },
       {
           where: {id: req.params.id}
       }
   )
   res.redirect('/');
}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    let user = await passenger.findByPk(id);
    if (user) {
        await passenger.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/");
    }
}