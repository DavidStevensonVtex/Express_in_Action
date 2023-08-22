// Listing 2.12 Adding a console.log after the asynchronous operations

var fs = require("fs");

var options = { encoding: "utf-8" } ;
fs.readFile("myfile.txt", options, function(err, data) {
    if (err) {
        console.error("Error reading file!") ;
        return ;
    }
    console.log(data.match(/x/gi).length + " letter X's");
});

console.log("Hello world!");

// Hello world!
// 288 letter X's