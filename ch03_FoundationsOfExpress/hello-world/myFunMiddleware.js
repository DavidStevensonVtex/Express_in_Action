// Listing 3.5 Empty middleware that does nothing

function myFunMiddleware(request, response, next) {
    // ...
    next() ;    // When finished, calls next() to defer to the next middleware in the chain.
}