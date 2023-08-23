// Listing 4.4 Fixing your logging middleware

var express = require("express") ;
var path = require("path") ;
var fs = require("fs");

var app = express();

// Logs all incoming requests. Bug fixed with next(); statement.
app.use( function(req, res, next) {
    console.log("Request IP: " + req.url) ;
    console.log("Request date: " + new Date()) ;
    next();     // This is the critical new line.
}) ;

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});