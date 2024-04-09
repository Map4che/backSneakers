const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  special_price: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("user", userSchema);
