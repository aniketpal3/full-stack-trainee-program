const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/day15-crud-db";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    readUsers();
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

async function readUsers() {
  try {
    const allUsers = await User.find();

    console.log("All Users:");
    console.log(allUsers);

    const youngerThan25 = await User.find({
      age: {
        $lt: 25
      }
    });

    console.log("Users Younger Than 25:");
    console.log(youngerThan25);

    const userByEmail = await User.findOne({
      email: "rahul@example.com"
    });

    console.log("User Found By Email:");
    console.log(userByEmail);

    mongoose.connection.close();
  } catch (error) {
    console.log("Read Users Error:", error.message);
    mongoose.connection.close();
  }
}