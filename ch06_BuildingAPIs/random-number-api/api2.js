// Listing 6.7 Version 2 of your API, in api2.js

let express = require("express");

let api = express.Router() ;

api.get("/timezone", function ( req, res) {
    res.send("API 2: super cool new response for /timezone");
});

module.exports = api ;      // Exports the router so that other files can use it