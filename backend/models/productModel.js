const {sequelize, DataTypes} = require('sequelize');
const Sequelize = require('../DB/DB_CONNECTION');

const productModel = Sequelize.define('products',{
    productId: {
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false
    },
    productName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    productDescription:{
        type:DataTypes.STRING,
        allowNull:false
    },
    productPrice:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = productModel;