// Listing 2.2: Requiring Node's url module

var url = require("url");
var parsedURL = url.parse("http://www.example.com/profile?name=barry");

console.log("parsedURL.protocol", parsedURL.protocol);
console.log("parsedURL.host    ", parsedURL.host);
console.log("parsedURL.query   ", parsedURL.query);

// parsedURL.protocol http:
// parsedURL.host     www.example.com
// parsedURL.query    name=barry