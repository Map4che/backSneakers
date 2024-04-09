const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  stock: {
    type: Number,
    trim: true,
    required: true,
  },
  base_price: {
    type: Number,
    trim: true,
    required: true,
  },
  special_price: {
    type: Number,
    trim: true,
    required: false,
  },
  brand: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
