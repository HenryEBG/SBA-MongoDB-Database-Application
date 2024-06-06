const { Router } = require('express');
const cartCtrl = require('../controllers/carts.js');

const router = Router();

router.patch('/add', cartCtrl.addProduct);
//router.delete('/delete:id', categoriesCtrl.deleteProduct);
//router.post('/store', usersCtrl.userStore);

module.exports = router;