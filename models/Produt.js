const { Schema, model } = require('../config/db-connection');
const productSchema = Schema({ 
  productId : {
    type: Number,
    required:true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price : {
    type: Number,
    required:true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    unique: false,
  },
  image :  {
    type: String,
    required: true,
    unique: false,
  },

});
module.exports = model('Product', productSchema);