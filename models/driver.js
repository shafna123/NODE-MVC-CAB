const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('User', {
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