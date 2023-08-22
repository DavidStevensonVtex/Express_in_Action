// Listing 3.8 Using Morgan for logging

var express = require("express");
var logger = require("morgan");
var http = require("http");

var app = express();

app.use(logger("short"));

app.use ( function ( request, response ) {
    response.writeHead(200, { "content-Type": "text/plain" });
    response.end("Hello, world!");
});

http.createServer(app).listen(3000);

// ::1 - GET /contacts HTTP/1.1 200 - - 2.375 ms
// ::1 - GET /about HTTP/1.1 200 - - 0.516 ms
// ::1 - GET /hello HTTP/1.1 200 - - 0.155 ms