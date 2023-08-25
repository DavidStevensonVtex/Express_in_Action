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