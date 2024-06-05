const Category = require('../models/Category');

module.exports = {
  //createUser,
  allCategories,
  
};

async function allCategories(req,res){
  try {
    const categories = await Category.find({
    });    
    if(categories){
      res.status(200).json(categories);
    }else {
       res.status(200).json({
         message: 'There is no categories',
       });
     }
  } catch (err) {
    res.status(400).json(err);
  }
}

