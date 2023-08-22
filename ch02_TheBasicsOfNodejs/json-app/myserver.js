// Listing 2.14 Parsing the request URL with a request handler function
var http = require("http");

function requestHandler(req, res) {
    console.log("In comes a response to: " + req.url);
       if (req.url === "/" ) {
        res.end("Welcome to the homepage!");
    } else if (req.url === "/about" ) {
        res.end("Welcome to the about page!");
    } else {
        res.end("Error! File not found.");
    }
}

var server = http.createServer(requestHandler);

server.listen(3000) ;

// In comes a response to: /
// In comes a response to: /about
// In comes a response to: /badpage