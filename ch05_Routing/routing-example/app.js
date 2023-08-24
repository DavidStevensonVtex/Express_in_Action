// Listing 5-6 Handling a search query string

let express = require("express");
let app = express();

app.get("/olivia", function(request, response) {
    response.send("Welcome to Olivia's homepage!");
});

app.get("/search", function(req, res) {
    // http://localhost:3000/search?q=javascript-themed%20burrito
    // http://localhost:3000/search?q=something&q=somethingelse
    console.log(req.query.q);
    console.log(typeof req.query.q);
    if (typeof req.query.q === "string") {
        res.send("Searching for query: " + req.query.q);
    } else if ( Array.isArray(req.query.q)) {
        let output = req.query.q.join(", ");
        res.send("Searching for query: " + output);
    }

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