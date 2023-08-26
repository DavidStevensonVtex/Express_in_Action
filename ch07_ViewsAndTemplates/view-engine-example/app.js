// Listing 7.1 Simple view rendering example

let express = require("express");
let path = require("path");

let app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", function(req, res) {
    res.render("index") ;
}) ;

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});