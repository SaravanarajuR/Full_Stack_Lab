const http = require("http");
const path = require("path");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.write(process.cwd() + "\n");
    res.write(__dirname + "\n\n");
    fs.appendFile(
      path.join(__dirname, "data.txt"),
      "saravana\naaa\nbbb",
      (err, res) => {}
    );
    fs.readFile(path.join(__dirname, "data.txt"), "utf8", (err, data) => {
      res.write(data);
      res.end();
    });
  })
  .listen(3000);
