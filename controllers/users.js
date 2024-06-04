const User = require('../models/User');

module.exports = {
  //createUser,
  loginUser,
};

// async function createUser(req, res) {
//   try {
//     const user = await User.create(req.body);

//     res.status(200).json(user);
//   } catch (err) {
//     res.status(400).json('No Beuno:(');
//   }
// }

async function loginUser(req,res){
  try {
    res.render("login",{title:"Login Customer Fake Store"});

  } catch (err) {
    res.status(400).json(err);
  }
}

async function userStore(req,res){
  try {
    if (req.body.username && req.body.password) {

    }
  } catch (err) {
    res.status(400).json(err);
  }
}

