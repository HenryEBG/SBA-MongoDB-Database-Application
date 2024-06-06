const Cart = require('../models/Cart');
const Product = require('../models/Product');

module.exports = {
  //createUser,
  addProduct,
  getProducts,
  showCart,
  //deleteProduct

};

async function showCart(req,res) {
  res.render("cart", { title: `Thanks for buying here ${req.params.userid}`, userid: req.params.userid });
}

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
        }  //increment the product
        else {
          productUserCart.quantity++
        }
       await existUserCart.save();
       res.status(200).json(existUserCart);
     }

  }
  catch (err) {
    res.status(400).json(err);
  }
}

async function getProducts(req,res){
  try {
    const existUserCart = await Cart.findOne({'userId' : req.params.userid});
    
    if(existUserCart){
     
      const listProducts=[];
      
       for(let i=0;i<existUserCart.products.length;i++){
        console.log(existUserCart.products[i]);
          const foundProduct= await Product.findOne({'productId': existUserCart.products[i].productId });
         if(foundProduct){
             listProducts.push({product:foundProduct,quantity:existUserCart.products[i].quantity})
           }
       }
      // console.log(listProducts)
      res.status(200).json(listProducts);
    } else {
      res.status(200).json([]);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}