// Listing 5-7 Routers in action: the main app

let express = require("express");
let path = require("path");
let apiRouter = require("./routes/api_router");

let app = express();

let staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));

app.use("/api", apiRouter);

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});