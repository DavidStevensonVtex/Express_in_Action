// Listing 5-2. The simplest parameter

let express = require("express");
let app = express();

app.get("/olivia", function(request, response) {
    response.send("Welcome to Olivia's homepage!");
});

app.get("/users/:userid", function(req, res) {
    try {
        let userId = parseInt(req.params.userid, 10);
        if (Number.isNaN(userId)) {
            res.send("Invalid user: user id must be a number.");
        } else {
            res.send("Welcome user: " + userId);
        }
    } catch (e) {
        console.error("User ids must be a valid integer: ", req.params.userid, "\n", e) ;
    }
}) ;

app.use( function(request, response) {
    response.status(404).send("Page not found!");
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});