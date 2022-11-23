const {Sequelize,DataTypes} = require('sequelize')
const sequelize = new Sequelize("cab", "root","Shafsam@11",{
    host:"localhost",
    dialect:"mysql"
});

module.exports.sequelize = sequelize;