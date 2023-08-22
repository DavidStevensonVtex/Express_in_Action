// Listing 2-7. Using the Mustache module

var Mustache = require("mustache");

var output = Mustache.render("Hello, {{first}} {{last}}", {
    first: "Nicholas",
    last: "Cage"
});
console.log(output);

// Hello, Nicholas Cage