const db = require('../models/booking');
const {body, validationResult} = require('express-validator');
const booking = require('../models/booking');

const cabdetails = require('../models/cabdetails');
const payment = require('../models/payment');


module.exports.bookingIndex = (req, res, next) => {
   booking.findAll().then(user => {
       res.render('booking-index', {
           data: user
       });
   })
}

module.exports.bookingCreate = (req, res, next) => {
    // res.render('booking-create',{cab_id : req.params.cab_id});
    res.render('booking-create',{cab_id : req.params.cab_id});
}

module.exports.bookingCreatePost =  (req, res, next) => {


  cabdetails.findByPk(req.params.cab_id).then((data)=>{
   console.log(req.params);
   payment.findOne({where : {
     pick_up_location: req.body.pick_up_location,
    drop_off_location: req.body.drop_off_location,
   }}).then((paymentDetails)=>{
    console.log(paymentDetails)
   
    booking.create({
      
        cab_model: data.cab_model,
        date_of_booking: req.body.date_of_booking,
        date_of_travel: req.body.date_of_travel,
        pick_up_location: req.body.pick_up_location,
        drop_off_location: req.body.drop_off_location,
        pick_up_time: req.body.pick_up_time,
        id: req.session.userId,
        cab_id: req.params.cab_id,
        cost: paymentDetails.cost
        
      
  
        })
    })
         .then(user => {
             res.redirect("/payment/");
         })


     
 })
                                         
 


   
}

module.exports.bookingUpdate = (req, res, next) => {
   booking.findByPk(req.params.id)
       .then(user => {
        console.log(user.dataValues);
           res.render('booking-update', {
               data: user,id:req.params.id
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

module.exports.bookingUpdatePost = async(req, res, next) => {
    console.log(req.params.id);
   var bookingFromDb = await booking.findByPk(req.params.id);
   await bookingFromDb.update(
      { //       booking_id: req.body.booking_id,
         cab_model: req.body.cab_model,
         date_of_booking: req.body.date_of_booking,
         date_of_travel: req.body.date_of_travel,
         pick_up_location: req.body.pick_up_location,
         drop_off_location: req.body.drop_off_location,
         pick_up_time: req.body.pick_up_time,
        //  id: req.body.id,
        //  driver_id: req.body.driver_id,
        //  cab_id: req.body.cab_id
           
       },
       {
           where: {id: req.params.id}
       }
   )
   res.redirect('/booking/');
}

module.exports.bookingDelete = async (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    let user = await booking.findByPk(id);
    if (user) {
        await booking.destroy({
            where: {
              booking_id:id
            }
        });
        res.redirect("/booking/");
    }
}