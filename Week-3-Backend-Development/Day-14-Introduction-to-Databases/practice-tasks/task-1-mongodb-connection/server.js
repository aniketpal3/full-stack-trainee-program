const mongoose = require("mongoose");

mongoose
  .connect("YOUR_ATLAS_CONNECTION_STRING")
  .then(() => {
    console.log("MongoDB Atlas Connected");
  })
  .catch((error) => {
    console.log(error.message);
  });