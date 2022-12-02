const db = require('./db');
const {Sequelize,DataTypes} = require('sequelize');

const User = db.sequelize.define('User', {
    
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

module.exports = User;