console.log("hello world");
var http = require("http");
var mom = require("./app2.js");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(
      "created my own module to display date and time: " + mom.myDateTime()
    );
    res.end("\n Hello World");
  })
  .listen(3000);
console.log(`Example app listening at http://localhost:3000`);
