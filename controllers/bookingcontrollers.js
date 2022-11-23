const db = require('../models/booking');
const {body, validationResult} = require('express-validator');


module.exports.getAll = (req,res,next)=>{
   db.findAll()
   .then(result=>{
    res.json(result);
   });
}