const db = require('../models/driver');
// const {body, validationResult} = require('express-validator');
const driver = require('../models/driver');
const cabdetails = require('../models/cabdetails')


const booking = require('../models/booking')


module.exports.driverLogin = (req, res, next) => {
   
    res.render('driverlogin');
}

module.exports.driverLoginPost = async (req, res, next) => {
    var credentials = await driver.findAll({where:{
        driver_email : req.body.email,
        driver_password: req.body.password

    }});
    
   
    if (credentials.length == 0) {
        return res.render('driverlogin',{message: 'Invalid credentials'})
    }
    req.session.driverId = credentials[0].dataValues.driver_id;
    console.log('this is from driver controller cookie driver id '+ req.session.driverId)
    req.session.role = 0;

    
    

    res.render('driverhome')
}
module.exports.driverHome = (req, res, next) => {
    res.render('driverhome')
}
//Registration

module.exports.driverRegistration = (req, res, next) => {
    res.render('driver-create')
}

//saving registered data
//
module.exports.driverRegistrationPost = (req, res, next) => {
    driver.create({
        driver_id: req.body.driver_id,
        driver_name: req.body.driver_name,
        driver_mobile_number: req.body.driver_mobile_number,
        gender: req.body.gender,
        driver_email: req.body.driver_email,
        driver_password: req.body.driver_password
    }).then(res.redirect('/driverlogin'))
}





















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
           gender: req.body.gender,
           driver_email: req.body.driver_email,
           driver_password: req.body.driver_password
          
       })
       .then(user => {
           res.redirect("/driver/driverlogin");
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
module.exports.driverUpdatePost = async (req, res, next) => {
   var driverFromDb = await driver.findByPk(req.params.id);
   await driverFromDb.update(
       { 
         driver_id: req.body.driver_id,
        driver_name: req.body.driver_name,
        driver_mobile_number: req.body.driver_mobile_number,
        gender: req.body.gender,
        driver_email: req.body.driver_email,
           driver_password: req.body.driver_password
        
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

module.exports.viewBooking =async(req,res,next)=>{

    console.log(req.session.driverId);

    const cabdetailsresult=await cabdetails.findOne({attributes:['cab_id'],where:{driver_id:req.session.driverId}})
    console.log(cabdetailsresult)

    const result = await booking.findAll({where : {cab_id : cabdetailsresult.dataValues.cab_id}})
    let data = {data : result}

    console.log(data);

    res.render('bookingdriver',data);

}


