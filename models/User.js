const { Schema, model } = require('../config/db-connection');

const userSchema = Schema({
  userId : {
    type: Number,
    required:true,
    unique: true,
  },
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
    unique: false,
    min: 3, 
  },
  lastname : {
    type: String,
    required: true,
    unique: false,
    min: 3, 
  },

});
userSchema.index({ username: 1 }); 

module.exports = model('User', userSchema);
