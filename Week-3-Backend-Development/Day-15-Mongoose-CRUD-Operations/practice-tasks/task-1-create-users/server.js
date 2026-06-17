const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/day15-crud-db";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    createUsers();
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 1
  }
});

const User = mongoose.model("User", userSchema);

async function createUsers() {
  try {
    await User.deleteMany();

    const users = [
      {
        name: "Rahul",
        email: "rahul@example.com",
        age: 22
      },
      {
        name: "Aditi",
        email: "aditi@example.com",
        age: 19
      },
      {
        name: "Aman",
        email: "aman@example.com",
        age: 26
      }
    ];

    const createdUsers = await User.insertMany(users);

    console.log("Users Created Successfully:");
    console.log(createdUsers);

    mongoose.connection.close();
  } catch (error) {
    console.log("Create Users Error:", error.message);
    mongoose.connection.close();
  }
}