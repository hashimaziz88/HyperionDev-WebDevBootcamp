/* 
** This file contains a middleware function that will be used when a request is made a route.
** A middleware function has access to the request and response (req, res) objects. This means that it can read the request and response,
** and modify them if needed.
** This myLogger.js middleware function will only log **MIDDLEWARE LOGGED
** to the console when this middleware function is called. 
** IMPORTANT: This middleware function is mainly used to perform tasks that are common to all routes,
** such as logging, authentication, etc. 
** We can also call it a 'preprocessor' function, because it runs before the controller.
** Middleware can also be thought of as a **AKA: security check point***.
** Whenever a request is made to a route, the middleware function will run first(security check), then the controller function will run.
*/

const loggerMiddleware = function (req, res, next) {
    console.log('MIDDLEWARE LOGGED')

/* Simply put, the next() function calls the next function on the route -in this case the next function 
** is the loggerController controller function.
** For example:  app.get('/', loggerMiddleware, loggerController)
** If we don't call the next() function, the controller function will not run.
*/ 
    next()
}

//NOTE: You can create as many middleware functions as you want, just make sure to export them below.


// Here we export middleware functions to be used in "routes/myLoggerRoute.js"
module.exports = {
    loggerMiddleware,
    //another middleware can be placed here
};