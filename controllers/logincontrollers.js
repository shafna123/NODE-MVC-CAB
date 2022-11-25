const passenger = require('../models/passenger');

module.exports.login = (req, res, next)=>{
    res.render('login');
}

module.exports.loginPost = async (req, res, next)=>{
    console.log("hlo");
    console.log(req.body);
    const {email, password} = req.body;
    const userFromDb = await passenger.findOne({
        where: {email: email, password: password}
    });
    console.log(userFromDb);
    if(userFromDb == null){
        return res.render('login', {message: 'No user with this email or password was found.'})
    }

    req.session.userId = userFromDb.id;
    res.redirect('/');
}

module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.registerPost = async (req, res, next)=>{
    const {firstName, lastName, email, password } = req.body;
    let existingUser = await passenger.findOne({
        where: {
            email: email
        }
    });

    if(existingUser){
        return res.render('register', {message: 'Already registered.'});
    }

    await passenger.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });

    res.redirect('/login');
}