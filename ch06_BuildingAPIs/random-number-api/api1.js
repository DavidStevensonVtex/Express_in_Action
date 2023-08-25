// Listing 6.5 Version 1 of your API, in api1.js

let express = require("express");

// Creates a new router, a mini-application

let api = express.Router() ;

// Example routes

api.get("/timezone", function ( req, res) {
    res.send("Sample response for /timezone");
});

api.get("/all_timezones", function(req, res) {
    res.send("Sample response for /all_timezones");
});

module.exports = api ;      // Exports the router so that other files can use it