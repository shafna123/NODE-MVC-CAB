const {Sequelize,DataTypes} = require('sequelize')

const db = require('./db');


const driver = db.sequelize.define('driver',{
    driver_id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false

    },
    driver_name:{
        type: DataTypes.STRING(200),
        allowNull: false

    },
    driver_mobile_number:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
  
    gender:{
        type: DataTypes.STRING(50),
        allowNull: false

    }
    
    
    
   
});

module.exports = driver;
