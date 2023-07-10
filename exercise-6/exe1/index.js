const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    res.end("saravana");
  })
  .listen(3000);
