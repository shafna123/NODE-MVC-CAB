const passenger = require('../models/passenger');
const driver = require('../models/driver');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        user: null
    }

    // if(req.url == "/login" || req.url == "/register"){
//     return next();
// }

// let userId = req.session.userId;
// if(!userId || userId == null){
//     return res.redirect("/login");
// }

//     let userFromDb = await passenger.findByPk(userId);
//     if(userFromDb == null){
//         return res.redirect("/login");
//     }
//     req.identity.isAuthenticated = true;
//     req.identity.passenger = {
//         id: userFromDb.dataValues.id,
//         firstName: userFromDb.dataValues.firstName,
//         lastName: userFromDb.dataValues.lastName,
//         email: userFromDb.dataValues.email,
//         role: userFromDb.dataValues.role
//     }
//     next();
// }



// var role = req.session.role
console.log('my role is: ' + req.session.role)

if (req.session.role == 1) {
    console.log(req.session.role)
    if (req.url == '/login' || req.url == '/create' || req.url == '/driver/driverlogin' || req.url == '/driverregister') {
        return next();
    }

    // let passengerId = req.session.passengerId;
    // if(!passengerId || passengerId == null){
    //     return res.redirect("/login");
    // }

    let userId = req.session.userId;
    if (!userId || userId == null) {
        return res.redirect("/login");
    }

    let userFromDb = await passenger.findByPk(userId);
    if (userFromDb == null) {
        return res.redirect("/login");
    }
    console.log('this is from passenger login')
    // console.log('%%%%%%%%%%%%%%%%')
    console.log(userFromDb)
    req.identity.isAuthenticated = true;
    req.identity.passenger = {
        id: userFromDb.dataValues.id,
        firstName: userFromDb.dataValues.firstName,
        lastName: userFromDb.dataValues.lastName,
        email: userFromDb.dataValues.email,
        role: userFromDb.dataValues.role
    }
    next();

}



// let passengerFromDb = await passenger.findByPk(passengerId);
// // console.log("checking passenger user name and password in authentication middleware")
// if (passengerFromDb == null) {
//     return res.redirect('/login');
// }

// console.log('line 25')
// //Saving login details of a user for further reference
// req.identity.isAuthenticated = true;
// req.identity.passenger = {
//     id : passengerFromDb.dataValues.Passenger_id,
//     firstName : passengerFromDb.dataValues.firstName,
//     lastName : passengerFromDb.dataValues.lastName,
//     email : passengerFromDb.dataValues.email,
//     mobile : passengerFromDb.dataValues.mobile,
//     dob : passengerFromDb.dataValues.dob,

//     role : passengerFromDb.dataValues.role,
//     book_id : null
// }
// next();





else {
    if (req.url == '/login' || req.url == '/create' || req.url == '/driver/driverlogin' || req.url == '/driverregister') {
        return next();
    }
    console.log('this is from driver login post')
    let driverId = req.session.driverId;
    console.log('this is  from driver id :' + driverId)
    if (!driverId || driverId == null) {
        return res.redirect("/driverlogin");
    }

    let userFromDb = driver.findByPk(driverId);
    console.log("checking passenger user name and password in authentication middleware")
    if (userFromDb == null) {
        return res.redirect('/driverlogin');
    }


    //Saving login details of a user for further reference
    req.identity.isAuthenticated = true;
    // req.identity.driver = {
    //     driver_id: req.body.driver_id,
    //     driver_name: req.body.driver_name,
    //     driver_mobile_number: req.body.driver_mobile_number,
    //     gender: req.body.gender,
    //     driver_email: req.body.driver_email,
    //     driver_password: req.body.driver_password
    // }
    next();

}


}

