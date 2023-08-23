// Listing 4.12 A simple app that always sends a file

let express = require("express") ;
let path = require("path") ;

let app = express();

let filePath = path.join(__dirname, "really_cool.jpg");
app.use(function(req, res) {
    res.sendFile(filePath);
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});
