// Listing 3.6 Logging middleware

var express = require("express");
var http = require("http");
var app = express() ;

app.use(function(request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url);
    next() ;
});

app.use(function(request, response) {
    response.writeHead(200, { "content-Type": "text/plain" });
    response.end("Hello, world!");
});

http.createServer(app).listen(3000);