const express = require("express");
const path = require("path");

const app = express();

const PORT = 3003;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Static files server is running. Visit /index.html");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});