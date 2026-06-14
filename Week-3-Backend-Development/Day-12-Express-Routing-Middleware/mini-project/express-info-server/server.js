const express = require("express");
const path = require("path");

const app = express();

const PORT = 5000;

// Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Routes

app.get("/", (req, res) => {
  res.send("Welcome to Express Info Server");
});

app.get("/about", (req, res) => {
  res.send("This is Day 12 Express Mini Project");
});

app.get("/contact", (req, res) => {
  res.send("Email: aniket@example.com");
});

app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Rahul"
    },
    {
      id: 2,
      name: "Aditi"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});