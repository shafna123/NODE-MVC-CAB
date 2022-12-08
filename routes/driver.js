
const express = require('express');
const dc = require('../controllers/drivercontroller');

const router = express.Router()

router.get('/driverlogin',dc.driverLogin);

//getting login credentials
router.post('/driverlogin', dc.driverLoginPost)

// router.get('/driverhome',dc.driverHome)


//driver registration page

// router.get('/driverregister', dc.driverRegistration);

//saving new driver details

// router.post('/driverregister',dc.driverRegistrationPost);






router.get('/', dc.driverIndex);
router.get('/create', dc.driverCreate);
router.post('/create', dc.driverCreatePost);
router.get('/update/:id', dc.driverUpdate);
router.post('/update/:id', dc.driverUpdatePost);
router.get('/delete/:id', dc.driverDelete);
router.get('/home', dc.driverHome);
router.get('/viewBooking', dc.viewBooking);



module.exports = router;