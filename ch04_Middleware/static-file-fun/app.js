// Listing 4.8 app.js that now uses Morgan

var express = require("express") ;
var morgan = require("morgan");
var path = require("path") ;
var fs = require("fs");

var app = express();

app.use(morgan("short"));

app.use(function ( req, res, next ) {
    // Uses path.join to find the path where the file should be.
    var filePath = path.join(__dirname, "static", req.url);
    // console.log("__dirname", __dirname, "filePath", filePath, "req.url", req.url);
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

app.use( function(req, res) {
    res.status(404) ;
    res.send("File not found!");
})

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});