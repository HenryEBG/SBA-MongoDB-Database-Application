const Cart = require('../models/Cart');
const Product = require('../models/Produt');

module.exports = {
  //createUser,
  addProduct,
  //deleteProduct

};

async function addProduct(req, res) {
  try {
    //get the cart of the user
    console.log(req.body)
    const existUserCart = await Cart.findOne({'userId' : req.body.userid});
    
    //res.status(200).json(existUserCart);
    if (!existUserCart) {
       //get the id of the last cart 
       const lastCart = await Cart.findOne().sort({ cartId : -1 });
       const newCart =
       {
         cartId: lastCart.cartId + 1,
         userId: parseInt(req.body.userid),
         products:
           [
             {
               productId: parseInt(req.body.id),
               quantity: 1
             },
           ],
       };
      // console.log(newCart)
       const cart = new Cart(newCart);

       await cart.save();

       res.status(200).json(cart);
     } else {
      //if cart exist find the product inside the cart
        productUserCart=existUserCart.products.find((p) => p.productId == req.body.id)
        console.log(productUserCart)
        if (productUserCart === undefined) {
      //    //console.log("estoy en que existe la cart pero no el producto")
          existUserCart.products.push({ productId: req.body.id, quantity: 1 })
          console.log(existUserCart)
        }  //increment the product
        else {
          productUserCart.quantity++
          console.log(existUserCart)
        }
       await existUserCart.save();
       res.status(200).json(existUserCart);
     }

  }
  catch (err) {
    res.status(400).json(err);
  }
}