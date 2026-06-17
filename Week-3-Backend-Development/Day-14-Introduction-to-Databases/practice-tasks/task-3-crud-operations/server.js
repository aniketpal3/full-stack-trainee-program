const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/day14db";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    runCRUDOperations();
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:");
    console.log(error.message);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

async function runCRUDOperations() {
  try {
    // Clear old data
    await User.deleteMany();

    // CREATE
    const newUser = new User({
      name: "Rahul",
      email: "rahul@example.com",
      age: 22
    });

    await newUser.save();
    console.log("User Created:");
    console.log(newUser);

    // READ
    const users = await User.find();
    console.log("All Users:");
    console.log(users);

    // UPDATE
    const updatedUser = await User.updateOne(
      { name: "Rahul" },
      { age: 23 }
    );

    console.log("User Updated:");
    console.log(updatedUser);

    // READ AFTER UPDATE
    const updatedUsers = await User.find();
    console.log("Users After Update:");
    console.log(updatedUsers);

    // DELETE
    const deletedUser = await User.deleteOne({
      name: "Rahul"
    });

    console.log("User Deleted:");
    console.log(deletedUser);

    // READ AFTER DELETE
    const finalUsers = await User.find();
    console.log("Users After Delete:");
    console.log(finalUsers);

    mongoose.connection.close();
  } catch (error) {
    console.log("CRUD Error:");
    console.log(error.message);

    mongoose.connection.close();
  }
}