const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/day14db")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model(
  "User",
  userSchema
);

console.log("Schema Created");
console.log("Model Created");

console.log(User);