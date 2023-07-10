const http = require("http");
const { default: remaining } = require("./remainingTime");
const rem = require("./remainingTime");
const daysLeft = require("./daysLeft");
const fs = require("fs");
const path = require("path");
const bp = require("body-parser");

http
  .createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
      const remainingTime = rem();
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      res.end(days + " Days left till august 15");
    } else if (req.url == "/find") {
      fs.readFile(
        path.join(__dirname, "index.html"),
        "utf8",
        (err, response) => {
          res.write(response);
          res.end();
        }
      );
    }
    if (req.method == "POST") {
      bp.urlencoded({ extended: false })(req, res, () => {
        res.end(String(daysLeft(req.body.date)) + " Days left");
      });
    }
  })
  .listen(3000);
