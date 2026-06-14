const express = require("express");

const app = express();

const PORT = 3002;

// Middleware to log request method, URL and time
app.use((req, res, next) => {
  const currentTime = new Date().toLocaleString();

  console.log(`Request Time: ${currentTime}`);
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);

  next();
});

app.get("/", (req, res) => {
  res.send("Home Page with Middleware Logging");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});