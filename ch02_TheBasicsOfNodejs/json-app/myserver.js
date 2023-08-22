// Listing 2.13 A simple "Hello world" web server with Node

var http = require("http");

function requestHandler(request, response) {
    console.log("In comes a response to: " + request.url);
    response.end("Hello, world!");
}

var server = http.createServer(requestHandler);

server.listen(3000) ;

// In comes a response to: /abc
// In comes a response to: /
// In comes a response to: /goodbye