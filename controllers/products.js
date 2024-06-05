const Product = require('../models/Produt');

module.exports = {
  //createUser,
  allProducts,
  productsByCategory
  
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