const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());

let users = [
  {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com",
    age: 22
  },
  {
    id: 2,
    name: "Aditi",
    email: "aditi@example.com",
    age: 19
  },
  {
    id: 3,
    name: "Aman",
    email: "aman@example.com",
    age: 25
  }
];

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to User Management API",
    version: "1.0"
  });
});

// GET All Users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET User By ID
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
});

// POST Create User
app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({
      message: "Name, Email and Age are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    age
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});

// PUT Update User
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.age = req.body.age || user.age;

  res.json({
    message: "User updated successfully",
    user
  });
});

// DELETE User
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const exists = users.some(user => user.id === id);

  if (!exists) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users = users.filter(user => user.id !== id);

  res.json({
    message: "User deleted successfully"
  });
});

// Search User
app.get("/users/search/:name", (req, res) => {
  const name = req.params.name.toLowerCase();

  const result = users.filter(user =>
    user.name.toLowerCase().includes(name)
  );

  res.json(result);
});

// Adult Users
app.get("/users/adults/list", (req, res) => {
  const adults = users.filter(user => user.age >= 18);

  res.json(adults);
});

// User Emails
app.get("/users/emails/list", (req, res) => {
  const emails = users.map(user => user.email);

  res.json(emails);
});

app.listen(PORT, () => {
  console.log(`User Management API running at http://localhost:${PORT}`);
});