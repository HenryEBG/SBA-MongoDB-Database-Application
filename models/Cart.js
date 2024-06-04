const { Schema, model } = require('../config/db-connection');
const cartSchema = Schema({ 
  cartId : {
    type: Number,
    required:true,
    unique: true,
  },
  userId : {
    type: Number,
    required:true,
    unique: false,
  },
  products :[
    {
      productId: {
        type:Number,
        required:true,
        unique:true
      },
      quatity:{
        type:Number,
        required:true,
        unique:true
      },
    }
  ],
  name: {
    type: String,
    required: true,
    unique: true,
  },
  
});
module.exports = model('Cart', cartSchema);