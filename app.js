const express = require('express');
const parser = require('body-parser');
const passengerRoute = require('./routes/passenger')
const app = express();




app.use(parser.urlencoded({extended: true}));
app.use(passengerRoute);
app.use("/api",passengerRoute);
app.listen(3000);