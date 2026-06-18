require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(
  cors({
    origin: "*"
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => {
    console.log("MongoDB Connection Error:");
    console.log(error.message);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Day 20 Capstone Task Manager API",
    status: "Running"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});