// Listing 5-12 Serving static files from multiple directories without conflict

let express = require("express");
let path = require("path");
let http = require("http");
let app = express();

let publicPath = path.resolve(__dirname, "public");
let userUploadsPath = path.resolve(__dirname, "user_uploads");

app.use("/public", express.static(publicPath));
app.use("/uploads", express.static(userUploadsPath));

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.");
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});