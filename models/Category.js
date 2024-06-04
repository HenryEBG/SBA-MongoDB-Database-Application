const { Schema, model } = require('../config/db-connection');
const categorySchema = Schema({ 
  categoryId : {
    type: Number,
    required:true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  
});
module.exports = model('Category', categorySchema);