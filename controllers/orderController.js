const Order = require("../models/order");
const { catchAsync, AppError } = require("../utils/appError");

exports.createOrder = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const order = await Order.create({
    ...req.body,
  });
  console.log("blalaekhsf")
  res.send(order);
});

exports.getOrder = async (req, res, next) => {
  const order = await Order.find({});
  //   next(new AppError(404, "testing"));
  res.send(order);
};

exports.updateOrder = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const order = await Order.findByIdAndUpdate(req.params.fid, req.body, {
    new: true,
  });
  res.send(order);
});

exports.deleteOrder = async (req, res, next) => {
  const order = await Order.findByIdAndDelete(req.params.fid);
  res.status(204).end();
};
