// Listing 4.13 Printing whether a file successfully sent

let express = require("express") ;
let path = require("path") ;

let app = express();

let filePath = path.join(__dirname, "really_cool.jpg");
app.use(function(req, res) {
    res.sendFile(filePath, function(err) {
        if (err) {
            console.error("File failed to send.");
        } else {
            console.log("File sent!");
        }
    });
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});
