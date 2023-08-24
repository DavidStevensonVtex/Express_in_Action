// Listing 5-3. Using regular expressions for numeric routes

let express = require("express");
let app = express();

app.get("/olivia", function(request, response) {
    response.send("Welcome to Olivia's homepage!");
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