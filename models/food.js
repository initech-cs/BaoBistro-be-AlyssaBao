const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Category is required!"],
    trim: true
  },
  name: {
    type: String,
    required: [true, "Name is required!"],
    trim: true
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  name_vn: {
      type: String
  },
  inCart: {
    type: Boolean
  }
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;