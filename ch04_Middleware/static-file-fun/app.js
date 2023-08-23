// Listing 4.3 Start app.js for your static file server

var express = require("express") ;
var path = require("path") ;
var fs = require("fs");

var app = express();

// Logs all incoming requests. (This has a bug. Forget next(); line ?)
app.use( function(req, res, next) {
    console.log("Request IP: " + req.url) ;
    console.log("Request date: " + new Date()) ;
}) ;

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});