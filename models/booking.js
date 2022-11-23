const {Sequelize,DataTypes} = require('sequelize')

const db = require('./db');


const booking = db.sequelize.define('booking',{
    cab_model:{
        type: DataTypes.STRING(200),
        allowNull: false

    },
    date_of_booking:{
        type: DataTypes.DATE,
        allowNull: false

    },
    date_of_travel:{
        type: DataTypes.DATE,
        allowNull: false

    },
    pick_up_location:{
        type: DataTypes.STRING(200),
        allowNull: false

    },
    drop_off_location:{
        type: DataTypes.STRING(200),
        allowNull: false

    },
    passenger_number:{
        type: DataTypes.INTEGER,
        allowNull: false

    }
   
});

module.exports = booking;