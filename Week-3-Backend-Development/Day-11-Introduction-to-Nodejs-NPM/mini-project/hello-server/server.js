const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  if (req.url === "/") {
    res.end("Welcome to My First Node.js Server");
  }

  else if (req.url === "/about") {
    res.end("About Page");
  }

  else if (req.url === "/contact") {
    res.end("Contact Page");
  }

  else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    });

    res.end("404 Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Hello Server running at http://localhost:${PORT}`);
});