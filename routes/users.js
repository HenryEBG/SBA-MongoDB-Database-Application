const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

//router.post('/', usersCtrl.createUser);

router.get('/login', usersCtrl.loginUser);
router.post('/store', usersCtrl.userStore);

module.exports = router;
