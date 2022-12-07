
const express = require('express');
const bc = require('../controllers/bookingcontrollers');

const router = express.Router()

router.get('/', bc.bookingIndex);
router.get('/create/:cab_id', bc.bookingCreate);
router.post('/create/:cab_id', bc.bookingCreatePost);
router.get('/update/:id', bc.bookingUpdate);
router.post('/update/:id', bc.bookingUpdatePost);
router.get('/delete/:id', bc.bookingDelete);
router.get('/invoice/:id', bc.paymentInvoice);
router.get('/paymentDetails/:id', bc.paymentDetails);
router.get('/viewBookings',bc.viewBooking);
router.post('/viewBookings',bc.searchBookingByDate)
// router.post('/paymentDetails/:id',bc.paymentDetails)
// // router.post('/booking/:cab_id', bc.booking);

module.exports = router;