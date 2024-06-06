//File with the configuration of the connection to the database
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

mongoose.connection
  .on('open', () => console.log('Connected to Mongoose'))
  .on('close', () => console.log('Disconnected from Mongoose'))
  .on('error', (error) => console.log(error));

module.exports = mongoose;
