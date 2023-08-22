// Listing 3.9 Using express.static

var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

var publicPath = path.resolve(__dirname, "public");
console.log(publicPath);
app.use(express.static(publicPath));

app.use ( function ( request, response ) {
    response.writeHead(200, { "content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.!");
});

http.createServer(app).listen(3000);

// ::1 - GET /contacts HTTP/1.1 200 - - 2.375 ms
// ::1 - GET /about HTTP/1.1 200 - - 0.516 ms
// ::1 - GET /hello HTTP/1.1 200 - - 0.155 ms