const {Sequelize,DataTypes} = require('sequelize')

const db = require('./db');


const cabdetails = db.sequelize.define('cabdetails',{
    cab_model:{
        type: DataTypes.STRING(200),
        allowNull: false

    },
    cab_id:{
        type: DataTypes.INTEGER,
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
        references:{
            model:'drivers',
            key:'driver_id'
        },
        allowNull: false
    }
    
   
});

module.exports = cabdetails;