// Listing 2-8. A function that returns a random integer between 0 and 100

var MAX = 100 ;

function randomInteger() {
    return Math.floor( (Math.random() * MAX ) ) ;
}