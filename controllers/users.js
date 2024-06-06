const User = require('../models/User');

module.exports = {
  //createUser,
  loginUser,
  userStore,
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
    console.log(req.body)
     if (req.body.username && req.body.password) {
       const user = await User.find({
        'username': req.body.username, 
        'password': req.body.password
      }).limit(1);
     if(user){
        res.render("store", { title: `Welcome to my Fake Store ${req.body.username}`,username: req.body.username, userid :user[0].userId});
      } else {
        res.status(200).json({
          message: 'Wrong username or password',
        });
      }
      // res.status(200).json({message: 'I received username or password',});
      
    }else {
       res.status(200).json({
         message: 'You have to add username and password',
       });
     }
  } catch (err) {
    res.status(400).json(err);
  }
}

