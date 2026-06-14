const express = require("express");
const path = require("path");

const app = express();

const PORT = 4000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

let users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Aditi" }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Day 12 Assignment Server");
});

// Weather Route
app.get("/weather/:city", (req, res) => {
  res.json({
    city: req.params.city,
    temp: "30°C"
  });
});

// Get Users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Add User
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.json({
    message: "User Added",
    user: newUser
  });
});

app.listen(PORT, () => {
  console.log(`Assignment running at http://localhost:${PORT}`);
});