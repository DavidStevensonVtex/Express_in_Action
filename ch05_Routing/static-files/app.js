// Listing 5-9 A simple example of express.static

let express = require("express");
let path = require("path");
let http = require("http");
let app = express();

let publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.");
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});