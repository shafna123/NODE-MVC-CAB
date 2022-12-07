const {Sequelize,DataTypes, INTEGER} = require('sequelize')

const db = require('./db');


const booking = db.sequelize.define('booking',{

    booking_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    cab_model:{
        type: DataTypes.STRING(200),
        allowNull: false

    },
    date_of_booking:{
        type: DataTypes.DATEONLY,
        allowNull: false

    },
    date_of_travel:{
        type: DataTypes.DATEONLY,
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
     pick_up_time:{
       type: DataTypes.TIME,
       allowNull:false 
     },
    // passenger_number:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false

    // }
    id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cab_id:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
    cost:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
   
});

module.exports = booking;