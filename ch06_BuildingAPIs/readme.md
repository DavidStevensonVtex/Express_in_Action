# Chapter 6: Building APIs

## 6.1 A basic JSON API example

## 6.2 A simple Express-powered JSON API

Listing 6.1 package.json for your random number project

```
{
    "name": "random-number-api",
    "private": true,
    "scripts": {
        "start": "nodemon app.js"
    },
    "dependencies": {
        "express": "^4.18.2"
    }
}
```

### 6.3 Create, read, update, delete APIs

```
// Listing 6.4 Handling different HTTP verbs

let express = require("express");

let app = express() ;

app.get("/", function(req, res) {
    res.send("You just sent a GET request, friend");
});

app.post("/", function(req, res) {
    res.send("a POST request? nice");
});

app.put("/", function(req, res) {
    res.send("I don't see a lot of PUT requests anymore");
});

app.delete("/", function(req, res) {
    res.send("Oh my, a DELETE??");
});

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});
```

Testing Web API With PowerShell

```
Invoke-WebRequest -Method GET    -Uri "http://localhost:3000" | Select-Object StatusCode, StatusDescription, RawContentLength, Content
Invoke-WebRequest -Method POST   -Uri "http://localhost:3000" | Select-Object StatusCode, StatusDescription, RawContentLength, Content
Invoke-WebRequest -Method PUT    -Uri "http://localhost:3000" | Select-Object StatusCode, StatusDescription, RawContentLength, Content
Invoke-WebRequest -Method DELETE -Uri "http://localhost:3000" | Select-Object StatusCode, StatusDescription, RawContentLength, Content

Invoke-RestMethod -Method GET    -Uri "http://localhost:3000" 
Invoke-RestMethod -Method POST   -Uri "http://localhost:3000" 
Invoke-RestMethod -Method PUT    -Uri "http://localhost:3000" 
Invoke-RestMethod -Method DELETE -Uri "http://localhost:3000" 
```

Testing the Web API with curl

```
curl -w "\n" -X GET    http://localhost:3000
curl -w "\n" -X POST   http://localhost:3000
curl -w "\n" -X PUT    http://localhost:3000
curl -w "\n" -X DELETE http://localhost:3000
```
## 6.4 API Versioning

Listing 6.5 Version 1 of your API, in app1.js

```
let express = require("express");

// Creates a new router, a mini-application

let api = express.Router() ;

// Example routes

api.get("/timezone", function ( req, res) {
    res.send("Sample response for /timezone");
});

api.get("/all_timezones", function(req, res) {
    res.send("Sample response for /all_timezones");
});

module.exports = api ;      // Exports the router so that other files can use it
```

Listing 6.7 Version 2 of your API, in api2.js

```
let express = require("express");

let api = express.Router() ;

api.get("/timezone", function ( req, res) {
    res.send("API 2: super cooll new response for /timezone");
});

module.exports = api ;      // Exports the router so that other files can use it
```

Listing 6.8 The main app code in app.js

```
let express = require("express");

let apiVersion1 = require("./api1.js");
let apiVersion2 = require("./api2.js");

let app = express();

app.use("/v1", apiVersion1);
app.use("/v2", apiVersion2);

app.listen(3000, function() {
    console.log("App started on port 3000: http://localhost:3000/")
});
```

Testing Version 1 and 2 Routing

```
curl -w "\n" -X GET    http://localhost:3000/v1/timezone
curl -w "\n" -X GET    http://localhost:3000/v1/all_timezones
curl -w "\n" -X GET    http://localhost:3000/v2/timezone

# Sample response for /timezone
# Sample response for /all_timezones
# API 2: super cool new response for /timezones
```

Listing 6.9 Setting the HTTP status code in Express

```
res.status(404)
```

Listing 6.10 Setting the HTTP status code and sending some JSON

```
res.status(404).json( { error: "Resource nto found!" });

// This is equivalent to:
res.status(404);
res.json( { error: "Resource not found!" } ) ;
```

Listing 6.11 Setting the status code the raw way

```
res.statusCode = 404 ;
```

## Chapter 7: Views and templates: Pug and EJS

### Express's view features

#### A simple view rendering

app.js
Listing 7.1 Simple view rendering example
```
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
```

views/index.ejs

```
<html>
    <head>
        <title>Index view</title>
    </head>
    <body>
        <h1> Index View</h1>
        <h2> Date:  <%= (new Date()).toDateString() %></h2>
    </body>
</html>
```

#### 7.1.2 A complicated view rendering

#### Making all view engines compatible with Express: Consolidate.js

Consolidate.js https://github.com/tj/consolidate.js

View Engines: EJS, Pug, Mustache, Handlebars, and Hogan

Walrus is another JavaScript view engine that's not compatible with Express out of the box.

### 7.2 Everything you need to know about EJS

EJS - Embeeded JavaScript

Two versions of EJS

* EJS - Embedded Javascript Templating, a templating engine used by Node.js
* Good one. TJ Holowaychuck, the creator of Express.
* Wrong one. http://embeddedjs.com/ Last updated in 2009, doesn't work in Node.

#### 7.2.1 The syntax of EJS

