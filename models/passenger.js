const {Sequelize,DataTypes} = require('sequelize')

const db = require('./db');


const passenger = db.sequelize.define('passenger',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull : false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull : false
    },
    

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },

    mobile_number:{
        type: DataTypes.INTEGER,
        allowNull: false,
    
    },

    password:{
        type: DataTypes.STRING(200),
        allowNull:false,
    }

});

module.exports = passenger;