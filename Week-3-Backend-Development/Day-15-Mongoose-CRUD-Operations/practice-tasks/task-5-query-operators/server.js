const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/day15-crud-db";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    queryOperators();
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

async function queryOperators() {
  try {
    const usersBetween20And30 = await User.find({
      age: {
        $gte: 20,
        $lte: 30
      }
    });

    console.log("Users Aged Between 20 and 30:");
    console.log(usersBetween20And30);

    const usersByName = await User.find({
      $or: [
        { name: "Aman" },
        { name: "Neha" }
      ]
    });

    console.log("Users Whose Name is Aman or Neha:");
    console.log(usersByName);

    mongoose.connection.close();
  } catch (error) {
    console.log("Query Operators Error:", error.message);
    mongoose.connection.close();
  }
}