const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/day15-crud-db";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    updateUsers();
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

async function updateUsers() {
  try {
    const updatedEmailUser = await User.findOneAndUpdate(
      { name: "Rahul" },
      { email: "rahul.updated@example.com" },
      { new: true }
    );

    console.log("Updated User Email:");
    console.log(updatedEmailUser);

    const users = await User.find();

    for (const user of users) {
      user.age = user.age + 1;
      await user.save();
    }

    const updatedUsers = await User.find();

    console.log("All Users After Age Increment:");
    console.log(updatedUsers);

    mongoose.connection.close();
  } catch (error) {
    console.log("Update Users Error:", error.message);
    mongoose.connection.close();
  }
}