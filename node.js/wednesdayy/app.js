var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("./file.html", function (err, data) {
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      res.write(data);
      return res.end();
    });
  })
  .listen(3005);
console.log(`server running at http://127.0.0.1:3005`);
