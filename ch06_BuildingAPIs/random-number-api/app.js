// Listing 6.4 Handling different HTTP verbs

let express = require("express");

let app = express() ;

app.get("/", function(req, res) {
    res.send("You just sent a GET request, friend");
});

app.post("/", function(req, res) {
    res.send("a POST request? nice");
});

app.put("/", function(req, res) {
    res.send("I don't see a lot of PUT requests anymore");
});

app.delete("/", function(req, res) {
    res.send("Oh my, a DELETE??");
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});