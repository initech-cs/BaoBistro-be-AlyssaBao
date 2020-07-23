const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required!"],
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    required: [true, "Phone number is required!"]
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Address is required!"]
  },
  district: {
    type: String,
    required: [true, "District is required!"]
  },
  ward: {
    type: String,
    required: [true, "Ward is required!"]
  },
  residenceType: {
    type: String
  },
  deliveryNotes: {
    type: String,
  },
  paymentType: {
      type: String,
      required: [true, "Payment type is required!"]
  },
  creditCardName: {
      type: String
  },
  creditCardNumber: {
      type: Number
  },
  creditCardExpiration: {
    type: String  
  },
  creditCardCvv: {
      type: Number
  },
  productList: {
      type: Array,
      required: [true, "Products are required!"]
  },
  quantities: {
    type: Array,
    required: [true, "Quantities are required!"]
  },
  totalCost: {
      type: Number,
      required: [true, "Total cost is required!"]
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;