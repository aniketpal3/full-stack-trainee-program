const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/day15-validation-db";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    testValidation();
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+\..+/
  },
  age: {
    type: Number,
    min: 1,
    max: 100
  }
});

const User = mongoose.model("ValidationUser", userSchema);

async function testValidation() {
  try {
    await User.deleteMany();

    const userWithoutName = new User({
      email: "noname@example.com",
      age: 20
    });

    await userWithoutName.save();
  } catch (error) {
    console.log("Validation Error 1:");
    console.log(error.message);
  }

  try {
    const invalidEmailUser = new User({
      name: "Aman",
      email: "invalid-email",
      age: 25
    });

    await invalidEmailUser.save();
  } catch (error) {
    console.log("Validation Error 2:");
    console.log(error.message);
  }

  try {
    const validUser = new User({
      name: "Neha",
      email: "neha@example.com",
      age: 24
    });

    const savedUser = await validUser.save();

    console.log("Valid User Saved:");
    console.log(savedUser);
  } catch (error) {
    console.log("Unexpected Error:", error.message);
  }

  mongoose.connection.close();
}