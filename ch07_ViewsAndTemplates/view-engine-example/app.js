// Listing 7.2 Complex rendering example

let express = require("express");
let path = require("path");
let ejs = require("ejs");

let app = express();

app.locals.appName = "Song Lyrics" ;

app.set("view engine", "ejs");
// app.set("view engine", "jade");
app.set("views", path.resolve(__dirname, "views"));
app.engine("html", ejs.renderFile);

app.use(function(req, res, next) {
    res.locals.userAgent = req.headers["user-agent"] ;
    next() ;
});

app.get("/about", function(req, res) {
    res.render("about", {
        currentUser: "india-arie123"
    }) ;
}) ;

app.get("/contact", function(req, res) {
    res.render("contact.ejs");
});

app.get("/", function(req, res) {
    res.render("index") ;
}) ;

app.get("/tonyhawk", function(req, res) {
    res.render("tonyhawk", {
        name: "Tony Hawk",
        birthyear: 1968,
        career: "skateboarding",
        bio: "<b>Tony Hawk</b> is the coolest skateboarder around."
    }) ;
}) ;

app.use(function(req, res) {
    res.status(404);
    res.render("404.ejs", { 
        urlAttempted: req.url
    }) ;
}) ;

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});