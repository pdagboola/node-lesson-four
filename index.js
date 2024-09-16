const fs = require("fs");
const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    // console.log(q);
    var filename = "." + q.pathname;
    if (q.pathname === "/") {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (
      q.pathname !== "/" &&
      q.pathname !== "/about.html" &&
      q.pathname !== "/contact-me.html"
    ) {
      fs.readFile("404.html", function (err, data) {
        res.end(data);
      });
    } else {
      fs.readFile(filename, function (err, data) {
        console.log(filename);
        //   res.writeHead(200, { "Content-Type": "text/html" });
        //   res.write(data);
        res.end(data);
      });
    }
  })
  .listen(8080);
