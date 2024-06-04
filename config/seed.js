// Require connection file to connect
const mongoose = require('./db-connection.js');
// Require Models for delete and create operations
//const Post = require('../models/Post.js');
const User = require('../models/User.js');

///////////////////////////
//CHANGE THIS SAMPLE DATA TO THE DATA YOU'RE WORKING WITH!!!
///////////////////////////
const users = [
  {
    email: "john@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    firstname: "john",
    lastname: "doe"

  },
  {
    email: "morrison@gmail.com",
    username: "mor_2314",
    password: "83r5^_",
    firstname: "david",
    lastname: "morrison"
  },
  {
    email: "kevin@gmail.com",
    username: "kevinryan",
    password: "kev02937@",
    firstname: "kevin",
    lastname: "ryan"
  },
  {
    email: "don@gmail.com",
    username: "donero",
    password: "ewedon",
    firstname: "don",
    lastname: "romer"
  },
  {
    email: "derek@gmail.com",
    username: "derek",
    password: "jklg*_56",
    firstname: "derek",
    lastname: "powell"
  },
  {
    email: "david_r@gmail.com",
    username: "david_r",
    password: "3478*#54",
    firstname: "david",
    lastname: "russell"
  },
  {
    email: "miriam@gmail.com",
    username: "snyder",
    password: "f238&@*$",
    firstname: "miriam",
    lastname: "snyder"
  },
  {
    email: "william@gmail.com",
    username: "hopkins",
    password: "William56$hj",
    firstname: "william",
    lastname: "hopkins"
  },
  {
    email: "kate@gmail.com",
    username: "kate_h",
    password: "kfejk@*_",
    firstname: "kate",
    lastname: "hale"
  },
  {
    email: "jimmie@gmail.com",
    username: "jimmie_k",
    password: "klein*#%*",
      firstname: "jimmie",
      lastname: "klein"
  }
];

// const posts = [
//   {
//     title: 'Star Wars',
//     content: 'its really cool',
//     author: 'Josh',
//   },
//   {
//     title: 'MongoDB',
//     content: 'its a database',
//     author: 'Per Scholas',
//   },
//   {
//     title: 'Dogs are Cool',
//     content: 'Do i really need to explain??',
//     author: 'Doglover123',
//     comments: [
//       {
//         content: 'you so right',
//         author: 'dogsdogsdogs',
//       },
//       {
//         content: 'true true',
//         author: 'albert',
//       },
//     ],
//   },
// ];

async function seed() {
  try {
  //  await Post.deleteMany({});
    await User.deleteMany({});

    // const createdPosts = await Post.create(posts);

    // console.log('Posts: ', createdPosts);

    const createdUsers = await User.create(users);

    console.log('Users: ', createdUsers);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();