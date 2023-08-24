// Listing 5-4 Using regular expressions for complex routes

let express = require("express");
let app = express();

app.get("/olivia", function(request, response) {
    response.send("Welcome to Olivia's homepage!");
});

app.get(/^\/users\/(\d+)-(\d+)$/, function ( req, res ) {
    let startId = parseInt(req.params[0], 10);
    let endId   = parseInt(req.params[1], 10);
    res.send(`Displaying information for users: ${startId} through ${endId}`);
});

app.get(/^\/users\/(\d+)$/, function(req, res) {
    let userId = parseInt(req.params[0], 10);
    res.send("Welcome user: " + userId);
}) ;

app.use( function(request, response) {
    response.status(404).send("Page not found!");
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});