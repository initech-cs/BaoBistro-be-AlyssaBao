var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const foodRouter = require("./routes/foodRoute");
const orderRouter = require("./routes/orderRoute");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
const cors = require("cors");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);

// catch 404 and forward to error handler
// 404 handler
function notFound(req, res, next) {
  const err = new Error("Route not found");
  err.status = "fail";
  err.statusCode = 404;
  next(err);
}

app.route("*").all(notFound);

// error handler
app.use((err, req, res, next) => {
  // default err object of undefined
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
console.log("error", err)
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

mongoose
  .connect(process.env.DB, {
    // some options to deal with deprecated warning, you don't have to worry about them.
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"));

module.exports = app;
