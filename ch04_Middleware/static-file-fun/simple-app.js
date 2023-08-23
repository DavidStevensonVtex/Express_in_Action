// Listing 4.14 Entering error mode if a file fails to send

let express = require("express") ;
let path = require("path") ;

let app = express();

let filePath = path.join(__dirname, "really_cool.jpg");
app.use(function(req, res, next) {
    res.sendFile(filePath, function(err) {
        if (err) {
            next(new Error("Error sending file!"));
        } else {
            console.log("File sent!");
        }
    });
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});
