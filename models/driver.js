const {Sequelize,DataTypes} = require('sequelize')

const db = require('./db');


const driver = db.sequelize.define('driver',{
    driver_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    driver_name: {
        type: DataTypes.STRING,
        allowNull : false
    },
    driver_mobile_number: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    

    gender: {
        type: DataTypes.STRING,
        allowNull: false,
       
    }

 
});

module.exports = driver;