// Listing 6.6 The main app code in app.js

let express = require("express");

let apiVersion1 = require("./api1.js");

let app = express();

app.use("/v1", apiVersion1);

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});