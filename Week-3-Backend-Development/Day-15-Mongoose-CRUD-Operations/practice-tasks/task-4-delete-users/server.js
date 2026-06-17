const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/day15-crud-db";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    deleteUsers();
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

async function deleteUsers() {
  try {
    const user = await User.findOne({
      email: "aman@example.com"
    });

    if (user) {
      const deletedById = await User.findByIdAndDelete(user._id);

      console.log("Deleted User By ID:");
      console.log(deletedById);
    } else {
      console.log("User not found for deletion by ID.");
    }

    const deleteOlderThan60 = await User.deleteMany({
      age: {
        $gt: 60
      }
    });

    console.log("Deleted Users Older Than 60:");
    console.log(deleteOlderThan60);

    const remainingUsers = await User.find();

    console.log("Remaining Users:");
    console.log(remainingUsers);

    mongoose.connection.close();
  } catch (error) {
    console.log("Delete Users Error:", error.message);
    mongoose.connection.close();
  }
}