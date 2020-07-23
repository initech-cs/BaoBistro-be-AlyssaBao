const Food = require("../models/food");
const { catchAsync, AppError } = require("../utils/appError");

exports.getCategories = catchAsync(async (req, res, next) => {
    console.log(req.body);
    const food = await Food.create({
      ...req.body,
    });
    res.send(food);
  });
  
  exports.createFood = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const food = await Food.create({
    ...req.body,
  });
  res.send(food);
});

exports.getFoods = async (req, res, next) => {
  const food = await Food.find({});
//   next(new AppError(404, "testing"));
  res.send(food)
};

exports.updateFood = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const food = await Food.findByIdAndUpdate(req.params.fid, req.body, {
    new: true,
  });
  res.send(food);
});

exports.deleteFood = async (req, res, next) => {
  const food = await Food.findByIdAndDelete(req.params.fid);
  res.status(204).end();
};
