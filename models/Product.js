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
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  image :  {
    type: String,
    required: true,
  },

});
productSchema.index({ productId: 1 }); 
module.exports = model('Product', productSchema);