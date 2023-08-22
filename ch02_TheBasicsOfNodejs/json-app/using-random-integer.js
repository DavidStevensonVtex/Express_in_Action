// Listing 2.10 Using our module from another file

var randomInt = require("./random-integer");    // a relative path
console.log(randomInt()) ;
console.log(randomInt()) ;
console.log(randomInt()) ;

// 68
// 2
// 73