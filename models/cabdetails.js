const {Sequelize,DataTypes} = require('sequelize')

const db = require('./db');


const cabdetails = db.sequelize.define('cabdetails',{

    cab_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false

    },
    cab_model:{
        type: DataTypes.STRING(200),
        allowNull: false

    },
    
    cab_number:{
        type: DataTypes.STRING(200),
        allowNull: false

    },
    cab_capacity:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
    driver_id:{
        type:DataTypes.INTEGER,

        allowNull: false
    }
 
    
   
});

module.exports = cabdetails;
