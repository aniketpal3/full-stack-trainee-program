const http = require("http");
const moment = require("moment");

const PORT = 3001;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end("Welcome to Node.js Server Assignment");
  }

  else if (req.url === "/time") {
    const currentTime = moment().format("MMMM Do YYYY, h:mm:ss A");

    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end(`Current Date and Time: ${currentTime}`);
  }

  else if (req.url === "/api") {
    const data = {
      success: true,
      message: "JSON data from Node.js server",
      trainee: "Aniket Pal",
      course: "Full Stack Trainee Program",
      day: "Day 11",
      topic: "Node.js and npm"
    };

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(data));
  }

  else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    });

    res.end("404 Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Assignment server running at http://localhost:${PORT}`);
});