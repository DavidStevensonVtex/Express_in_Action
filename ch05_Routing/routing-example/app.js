// Listing 5-2. The simplest parameter

let express = require("express");
let app = express();

app.get("/olivia", function(request, response) {
    response.send("Welcome to Olivia's homepage!");
});

app.get("/users/:userid", function(req, res) {
    let userId = parseInt(req.params.userid, 10);
    res.send( Number.isNaN(userId) ? 
        "Invalid user: user id must be a number." :
        "Welcome user: " + userId);
}) ;

app.use( function(request, response) {
    response.status(404).send("Page not found!");
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});