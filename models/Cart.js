const { Schema, model } = require('../config/db-connection');
const cartSchema = Schema({ 
  cartId : {
    type: Number,
    required:true,  
    unique:true
  },
  userId : {
    type: Number,
    required:true,   
  },
  products :[
    {
      productId: {
        type:Number,
        required:true,       
      },
      quantity:{
        type:Number,
        required:true,
       
      },
    }
  ],  
});
cartSchema.index({ userId: 1 }); 
module.exports = model('Cart', cartSchema);