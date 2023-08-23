// Listing 4.5 Adding static file middleware to the middleware stack

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

app.use(function ( req, res, next ) {
    // Uses path.join to find the path where the file should be.
    var filePath = path.join(__dirname, "static", req.url);
    console.log("__dirname", __dirname, "filePath", filePath, "req.url", req.url);
    fs.stat(filePath, function(err, fileInfo) {
        // If fs.stat fails, continue to the next middleware.
        if (err) {
            next();
            return ;
        }

        if (fileInfo.isFile()) {
            res.sendFile(filePath) ;
        } else {
            next();
        }
    });
}) ;



app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});