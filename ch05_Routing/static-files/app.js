// Listing 5-13 Sending profile pictures

let express = require("express");
let path = require("path");
let http = require("http");
let app = express();

let publicPath = path.resolve(__dirname, "public");
let userUploadsPath = path.resolve(__dirname, "user_uploads");

app.use("/public", express.static(publicPath));
app.use("/uploads", express.static(userUploadsPath));

function getProfilePhotoPath ( userid ) {
    console.log("userid: " + userid) ;
    let userId = parseInt(userid, 10);
    if (! Number.isNaN(userId)) {
        return "public/images/dinosaurs.jpg";
    } else {
        return "public/images/really_cool.jpg" ;
    }
}

app.get("/users/:user_id/profile_photo", function(req, res) {
    console.log("profile photo") ;
    let options = { root: __dirname }
    res.sendFile(getProfilePhotoPath(req.params.user_id), options);
}) ;

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.");
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});