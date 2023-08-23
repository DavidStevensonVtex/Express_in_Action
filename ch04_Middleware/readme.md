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