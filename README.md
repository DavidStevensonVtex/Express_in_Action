# Express in Action, by Evan M. Hahn
My self-training in Express In Action. Writing, building, and testing Node.js applications

## Chapter 4: Middleware
### 4.2 Example app: a static file server
#### 4.2.5 Switching your logger to an open source one: Morgan

MOrgan describes itself as "request logger middleware," which is exactly what you want.

[Morgan logging software](https://github.com/expressjs/morgan)

```
npm install morgan --save
```

#### 4.2.6 Switching to Express's built-in static file middleware

There's only one piece of middleware that's bundled with Express, 
and it replaces your second middleware.

It's called express.static. If you're interested in more of its benefits,
you can read my [blog post](http://evanhahn.com/express-dot-static-deep-dive).

### 4.3 Error-handling middleware

There's a second kind that's much less-used: error-handling middleware. When your
app is in error mode, all regular middleware is ignroed and Express will execute
only error-handling middleware functions.

Toe enter error mode, simply call next with an argument. It's convention to call it
with an error object as in 

```
next(new Error("Something bad happened!"));
```

These middleware functions take four arguments instead of two or three. The first
one is the error (the argument passed into next), and the remainder are the three 
from before: req, res, and next. You can do anything you want in this middleware.
When you'r e done, it's just liek other middleware: you can call res.end or next.
Calling next with no arguments will exit error mode and move onto the next normal
middleware; calling it with an argument will continue onto the next error-handling
middleware if one exists.

While not enforced, error-handling middleware is conventionally placed at the end
of your middleware stack, after all the normal middleware has been added. This is
because you want to catch any errors that come cascading down from earlier in the
stack.

No catching here

Express's error-handling middleware does not handle errors that are thrown with the
_throw_ keyword, only when you call next with an argument.

Express uses the number of arguments of a function to dettermine which middleware
handles errors and which doesn't.

### 4.4 Other useful middleware

Although these modules aren't bundled with Express, the Express team maintains a number
of middleware modules:

* _body-parser for parsing request bodies_. https://github.com/expressjs/body-parser

* _cookie-parser for parsing cookies from users_. It needs to be paired with another 
Express supported middleware like express-session. https://github.com/expressjs/cookie-session

* _Compression for compressing responses to save on bytes. See more at https://github.com/expressjs/compression

You can find a full list on the Express homepage at https://expressjs.com/en/api.html#middleware-callback-function-examples

* _Helmet_ Helps to secure your applications. https://github.com/helmetjs/helmet

* _connect-assets_ -- Compiles and minifies your CSS and JavaScript assets. https://github.com/adunkman/connect-assets

See Appendix A for more helpers


