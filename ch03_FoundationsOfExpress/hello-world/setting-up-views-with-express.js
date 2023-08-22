// Listing 3.17 Rendering a view from Express

var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("index", {
        message: "Hey everyone! This is my webpage."
    }) ;
})

http.createServer(app).listen(3000);