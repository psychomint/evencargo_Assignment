const productModel = require('../models/productModel');
const Sequelize = require('../DB/DB_CONNECTION');
const sequelize = require('../DB/DB_CONNECTION');
const addProduct = async (req,res) => {
    // tranction use for consistency or mid-crash 
    const t = await Sequelize.transaction();
    try{
        const {productName, productDescription, productPrice} = req.body;
        // check missing fields
        if(!productName || !productDescription || !productPrice){
            return res.status(404).send({message: "Require all fields"});
        }
        const productInfo = await productModel.create({
            productName,
            productDescription,
            productPrice
        },
        { transaction: t }
        );
        await t.commit();
        // only for debug
        console.log("productController", "addProduct", productInfo);
        return res.status(201).json(productInfo);
    }
    catch(err){
        // only for dubug
        await t.rollback();
        console.log("productController", "addProduct", err);
        return res.status(500).send('Server Error');
    }
}

const removeProduct = async (req,res) => {
    const t = sequelize.transaction();
    try{
        const {id} = req.params;
        
        const updatedRows = await productModel.destroy({
           where:{
            productId:id
           }
        },
        { transaction: t }
    );
        console.log("productController", "removeProduct", updatedRows);
        if(updatedRows === 0) return res.status(400).json({message:"product Not Found"});
        (await t).commit();
        res.status(200).json({message:"Product deleted", updatedRows})
    }
    catch(err){
        (await t).rollback();
        console.log("productController", "removeProduct", err);
        res.status(500).json({message:"Server error"});
    }
    
}

const getAllProducts = async (req,res) => {
    try{
        const allProcductsData = await productModel.findAll({});
        if(allProcductsData.length === 0){
            return res.status(200).json({message : 'You have not any products'})
        }
        res.status(200).json({message:"done",allProcductsData});

    }
    catch(err){
        console.log("productController", "getAllProducts", err);
        res.status(500).json({message:"Server error"});
    }
}

module.exports = {
    addProduct,
    removeProduct,
    getAllProducts
}