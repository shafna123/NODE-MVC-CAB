const passenger = require('./passenger')

passenger.sync({alter:true});

const booking = require('./booking')

booking.sync();

const driver = require('./driver')

driver.sync();

const cabdetails = require('./cabdetails');


cabdetails.sync();

const payment = require('./payment')

payment.sync({alter:true});


// const user = require('./user')

// user.sync();


driver.hasMany(cabdetails,{foreignKey:'driver_id'});
cabdetails.belongsTo(driver,{
    foreignKey:'driver_id'
});

// driver.hasMany(booking,{foreignKey:'driver_id'});
// booking.belongsTo(driver,{
//     foreignKey:'driver_id'
// });

cabdetails.hasMany(booking,{foreignKey:'cab_id'});
booking.belongsTo(cabdetails,{
    foreignKey:'cab_id'
});

passenger.hasMany(booking,{foreignKey:'id'});
booking.belongsTo(passenger,{
    foreignKey:'id'
});