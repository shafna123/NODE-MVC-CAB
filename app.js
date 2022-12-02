const express = require('express');
const parser = require('body-parser');
const passengerRoute = require('./routes/passenger');
const bookingRoute = require('./routes/booking');
const driverRoute = require('./routes/driver');
const paymentRoute = require('./routes/payment');
const cabdetailsRoute = require('./routes/cabdetails');
const loginRoute = require('./routes/login');
const homeRoute = require('./routes/home');
const home2Route = require('./routes/home2');
const path = require('path');
const cookieSession = require('cookie-session');
const {engine} = require('express-handlebars');
const authMiddleware = require('./middlewares/authenticationMiddleware');


const app = express();


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.use("/", parser.urlencoded({extended: true}));
app.use("/static", express.static(path.join(__dirname, 'static')));


app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(authMiddleware);



app.use(passengerRoute);
app.use(loginRoute);
app.use(homeRoute);
app.use(home2Route);
app.use("/booking", bookingRoute);
app.use("/driver", driverRoute);
app.use("/payment", paymentRoute);
app.use("/cabdetails", cabdetailsRoute);
app.listen(80);