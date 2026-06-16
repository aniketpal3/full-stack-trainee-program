const express = require("express");

const app = express();

const PORT = 3000;

let users = [
  {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com"
  },
  {
    id: 2,
    name: "Aditi",
    email: "aditi@example.com"
  },
  {
    id: 3,
    name: "Aman",
    email: "aman@example.com"
  }
];

app.get("/", (req, res) => {
  res.send("REST API Day 13");
});

// Practice Task
app.get("/users/:id", (req, res) => {
  const user = users.find(
    u => u.id == req.params.id
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
});

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});