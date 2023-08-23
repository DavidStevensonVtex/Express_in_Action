// Listing 4.16 Responding to the error

let express = require("express") ;
let path = require("path") ;

let app = express();

let filePath = path.join(__dirname, "file_not_found.jpg");
app.use(function(req, res, next) {
    res.sendFile(filePath, function(err) {
        if (err) {
            next(new Error("Error sending file!"));
        } else {
            console.log("File sent!");
        }
    });
});

app.use(function(err, req, res, next) {
    console.error(err);
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.send("Internal server error.");
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});
