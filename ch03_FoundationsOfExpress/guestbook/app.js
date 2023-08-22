// Listing 3.20 The Express guestbook, in app.js

let http = require("http");
let path = require("path") ;
let express = require("express");
let logger = require("morgan");
let bodyParser = require("body-parser");

let app = express() ;

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

let entries = [] ;
app.locals.entries = entries ;

app.use(logger("dev"));     // Uses Morgan to log every request

// Populates a variable called req.body if the user is submitting a form. 
// The extended option is required.
app.use(bodyParser.urlencoded( { extended: false })) ;

// Homepage is rendered as views/index.ejs
app.get("/", function(request, response) {
    response.render("index");
}) ;

// REnders the "new entry" page at views/new-entry.ejs when getting the url
app.post("/new-entry", function(request, response) {
    response.render("new-entry");
});

app.post("/new-entry", function(request, resonse) {
    if (! request.body.title || !request.body.body ) {
        response.status(400).send("Entries must have a title and a body.");
        return ;
    }

    entries.push ( {
        title: request.body.title,
        content: request.body.body,
        published: new Date()
    }) ;

    response.redirecxt("/");
});

app.use( function (request, response) {
    response.status(404).render("404");
});

http.createServer(app).listen(3000, function() {
    console.log("Guestbook app started on port 3000: http://localhost:3000/");
});
