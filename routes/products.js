const { Router } = require('express');
const productsCtrl = require('../controllers/products.js');

const router = Router();

router.get('/', productsCtrl.allProducts);
router.get('/category/:category', productsCtrl.productsByCategory);
//router.post('/store', usersCtrl.userStore);

module.exports = router;
