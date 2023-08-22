// Listing 3.11 Grabbing data from routes

var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

console.log("__dirname", __dirname);
var publicPath = path.resolve(__dirname, "public");
console.log(publicPath);
app.use(express.static(publicPath));

app.get("/", function(request, response) {
    response.end("Welcome to my homepage!");
});

app.get("/about", function (request, response) {
    response.end("Welcome to the about page!");
});

app.get("/weather", function(request,response) {
    response.end("The current weather is NICE.");
});

app.get("/hello/:who", function(request, response) {
    response.end("Hello, " + request.params.who + ".");
    // Fun fact: this has some security issues, which we'll get to!
})

app.use(function(request,response) {
    response.statusCode = 404 ;
    response.end("404!");
})

http.createServer(app).listen(3000) ;