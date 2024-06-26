const { Router } = require('express');
const cartCtrl = require('../controllers/carts.js');

const router = Router();

router.patch('/add', cartCtrl.addProduct);
router.get('/products/:userid', cartCtrl.getProducts);
router.get('/:userid',cartCtrl.showCart);
router.delete('/delete/:id', cartCtrl.deleteProduct);
//router.post('/store', usersCtrl.userStore);

module.exports = router;