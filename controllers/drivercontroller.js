const db = require('../models/driver');
const {body, validationResult} = require('express-validator');


module.exports.getAll = (req,res,next)=>{
   db.findAll()
   .then(result=>{
    res.json(result);
   });
}

// module.exports.getOne = (req,res,next)=>{
//    let id = req.params.id;
//    db.findByPk(id).then(user=>{
//       res.status(user==null?404:200)
//       res.json(user)
//    })
// }

// module.exports.addOne = (req,res,next)=>{
//    const errors = validationResult(req);
//    if(!errors.isEmpty()){
//       return res.status(400)
//       .json({
//          errors:errors.array()
//       });
//    }
//    db.create({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       country: req.body.country
   
//      }) 
//      .then((user)=>{
//       res.json(user);
//      })
   




  
// module.exports.validate = function(action){
//    switch(action){
//        case 'create':
//            return[
//                body('firstName',"Invalid firstName").exists().isLength({min:2,max:6}),
//                body('email',"Invalid Email.").exists().isEmail()
//            ]
//    }
// }