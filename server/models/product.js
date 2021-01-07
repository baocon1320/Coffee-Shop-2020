const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  //dessert: { type: Boolean, require: true },
  //drink: { type: Boolean, require: true },
  price: { 
    type: Number
  },
  content: { 
    type: String
  },
  productImage: { 
    type: String, 
    required: true 
  },
  category: {
    type: mongoose.Types.ObjectId, 
    required: true, 
    ref: 'Category'
}
});

module.exports = mongoose.model('Product', productSchema);
