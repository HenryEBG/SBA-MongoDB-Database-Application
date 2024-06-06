const Product = require('../models/Product');

module.exports = {
  //createUser,
  allProducts,
  productsByCategory,
  productsById
  
};

async function allProducts(req,res){
  try {
    const products = await Product.find({
    });    
    if(products){
      res.status(200).json(products);
    }else {
       res.status(200).json({
         message: 'There is no products',
       });
     }
  } catch (err) {
    res.status(400).json(err);
  }
}


async function productsByCategory(req,res){
  try {
    const products = await Product.find({
   'category':req.params.category });    
    if(products){
      res.status(200).json(products);
    }else {
       res.status(200).json({
         message: 'There is no products',
       });
     }
  } catch (err) {
    res.status(400).json(err);
  } 
}

async function productsById(req,res){
  try {
    const products = await Product.find({
   'productId':req.params.id });    
    if(products){
      res.status(200).json(products);
    }else {
       res.status(200).json({
         message: 'There is no product with this Id',
       });
     }
  } catch (err) {
    res.status(400).json(err);
  } 
}