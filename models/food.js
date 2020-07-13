const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Title is required!"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    trim: true
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  }
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;