const db = require('../models/booking');
const { body, validationResult } = require('express-validator');
const booking = require('../models/booking');

const cabdetails = require('../models/cabdetails');
const payment = require('../models/payment');


module.exports.bookingIndex = (req, res, next) => {
    booking.findAll().then(user => {
        // console.log(user)
        res.render('booking-index', {
            data: user
        });
    })
}

module.exports.bookingCreate = (req, res, next) => {
    // res.render('booking-create',{cab_id : req.params.cab_id});
    res.render('booking-create', { cab_id: req.params.cab_id });
}

module.exports.bookingCreatePost = (req, res, next) => {


    cabdetails.findByPk(req.params.cab_id).then((data) => {
        // console.log(req.params);
        // console.log('🚗🚗🚗🚗🚗')
        // console.log("pick_up_location:" + req.body.pick_up_location)
        // console.log("drop_off_location:" + req.body.drop_off_location)

        payment.findOne({
            where: {
                pick_up_location: req.body.pick_up_location,
                drop_off_location: req.body.drop_off_location,
            }
        }).then((paymentDetails) => {   
            // console.log('🚗🚗🚗🚗🚗')
            // console.log(paymentDetails)

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



            }) .then(user => {
                console.log("hello")
                // res.redirect("/booking/paymemtDetails/"+user.booking_id);
                res.redirect("/booking/paymentDetails/"+user.booking_id);
            })
        })
           




    })





}

module.exports.bookingUpdate = (req, res, next) => {
    console.log("REQUEST VALUE")
    console.log(req.params.id)
    booking.findByPk(req.params.id)
        .then(user => {
            // console.log(user.dataValues);
            res.render('booking-update', {
                data: user, 
                id: req.params.id
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

module.exports.bookingUpdatePost = async (req, res, next) => {
    console.log(req.params.id);
    var bookingFromDb = await booking.findByPk(req.params.id);
    let loc = await payment.findOne({where :{drop_off_location : req.body.drop_off_location}})
    console.log(loc);
    await booking.update(
        { //       booking_id: req.body.booking_id,
            cab_model: req.body.cab_model,
            date_of_booking: req.body.date_of_booking,
            date_of_travel: req.body.date_of_travel,
            pick_up_location: req.body.pick_up_location,
            drop_off_location: req.body.drop_off_location,
            pick_up_time: req.body.pick_up_time,
            // id: req.session.userId,
            // cab_id: req.params.cab_id,
            cost: loc.dataValues.cost
           
             

        },
        {
            where: { booking_id: req.params.id }
        }
    )
    res.redirect("/booking/paymentDetails/"+bookingFromDb.dataValues.booking_id);
}

module.exports.bookingDelete = async (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    let user = await booking.findByPk(id);
    if (user) {
        await booking.destroy({
            where: {
                booking_id: id
            }
        });
        res.redirect("/cabdetails/");
    }
}

module.exports.paymentInvoice = async (req, res, next)=>{

    booking.findOne({where: {booking_id: req.params.id}})

    .then(result=>{

        let name = req.identity.passenger.firstName + " " + req.identity.passenger.lastName
  
        // console.log(name);
        res.render('invoice',{

            invoice: result,

            name: name
        })

    })

}


module.exports.paymentDetails = async (req, res, next) => {
    console.log('🚗🚗🚗🚗🚗')
    var paymentDetails = await booking.findOne({ where: { booking_id: req.params.id } })
    console.log(paymentDetails);
    res.render('paymentDetails',
        {
            data: paymentDetails
        })
}




module.exports.viewBooking = (req, res, next) => {

    booking.findAll().then(result => {
        res.render('viewBookings',{
            data :  result
        }

        )

    })

}

module.exports.searchBookingByDate = async (req, res, next)=>{
    // console.log(req.body.date)
    // var date = new Date(req.body.date)
    // console.log(date)
    date = req.body.date
    console.log(date)

    allbookings = await booking.findAll({
        where : {
            date_of_travel : date
        }
    }

    )
    console.log(allbookings)

    if (allbookings.length != 0) {
        res.render('viewBookings',{
            data : allbookings
        })

    }
    else{
         res.send('Not found')

    }

    let isFound = 1
    booking.findAll().then(result => {
       res.render('viewBookings',{
           data : result,
           found : isFound

       })
    }

    )
 }