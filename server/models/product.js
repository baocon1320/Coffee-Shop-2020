const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  dessert: { type: Boolean, require: true },
  drink: { type: Boolean, require: true },
  price: { type: Number, required: true },
  content: { type: String, required: true },
  productImage: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
