// Listing 2-5. An example of the Mustache templating system

var Mustache = require("mustache");

var output = Mustache.render("Hello, {{first}} {{last}}", {
    first: "Nicholas",
    last: "Cage"
});
console.log(output);

output = Mustache.render("Hello, {{first}} {{last}}", {
    first: "Sheryl",
    last: "Sandberg"
}) ;

console.log(output);