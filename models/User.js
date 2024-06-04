const { Schema, model } = require('../config/db-connection');

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
  username : {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
  firstname : {
    type: String,
    required: true,
    unique: true,
    min: 3, 
  },
  lastname : {
    type: String,
    required: true,
    unique: true,
    min: 3, 
  },

});

module.exports = model('User', userSchema);
