// Listing 5-1. A simple Express app that shows Olivia's homepage

var express = require("express");
var app = express();

app.get("/olivia", function(request, response) {
    response.send("Welcome to Olivia's homepage!");
});

app.use( function(request, response) {
    response.status(404).send("Page not found!");
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});