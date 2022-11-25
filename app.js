const express = require('express');
const parser = require('body-parser');
const passengerRoute = require('./routes/passenger');
const loginRoute = require('./routes/login');
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
app.listen(3000);