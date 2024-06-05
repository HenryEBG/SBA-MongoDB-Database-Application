const { Router } = require('express');
const categoriesCtrl = require('../controllers/categories.js');

const router = Router();

router.get('/', categoriesCtrl.allCategories);
//router.post('/store', usersCtrl.userStore);

module.exports = router;