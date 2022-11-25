const passenger = require('../models/passenger');

module.exports = async (req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        user: null
    }

    if(req.url == "/login" || req.url == "/create"){
        return next();
    }

    let userId = req.session.userId;
    if(!userId || userId == null){
        return res.redirect("/login");
    }

    let userFromDb = await passenger.findByPk(userId);
    if(userFromDb == null){
        return res.redirect("/login");
    }

    req.identity.isAuthenticated = true;
    req.identity.passenger = {
        id: userFromDb.dataValues.id,
        firstName: userFromDb.dataValues.firstName,
        lastName: userFromDb.dataValues.lastName,
        email: userFromDb.dataValues.email,
        role: 'user'
    }
    next();
}