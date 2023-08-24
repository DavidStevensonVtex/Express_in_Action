// Listing 5.8 A sample router definition (at routes/api_router.js)

let express = require("express");

let ALLOWED_IPS = [
    "::1",
    "127.0.0.1",
    "123.456.7.89"
] ;

let api = express.Router() ;

api.use(function ( req, res, next ) {
    console.log("authorize: ", req.ip);
    let userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1 ;
    if (! userIsAllowed ) {
        res.status(401).send("Not authorized!");
    } else {
        next() ;
    }
}) ;

api.get("/users", function(req, res) {
    res.send("users page selected");
});

api.post("/user", function( req, res) { 
    res.send("posting a new user");
});

api.get("/messages", function(req, res) {
    res.send("messages page selected");
});

api.post("/message", function ( req, res ) {
    res.send("posting a new message");
});

module.exports = api ;