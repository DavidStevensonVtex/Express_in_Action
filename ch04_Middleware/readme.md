# Express in Action, by Evan M. Hahn
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
