
// myLoggerRoute.js 
// Step 2: Import the middleware functions and controller functions
// You must destructure the imported functions using {}.
// 📝 Read more on destructuring here: https://www.w3schools.com/react/react_es6_destructuring.asp
const { loggerMiddleware } = require('../middleware/myLogger');
const { loggerController } = require('../controllers/loggerController');

//Step 3:  Define route function
const myLoggerRoute = (app) => {
  // 'app' parameter is the express app object.

  /* 
  When a GET request is made to the 'http://localhost:8080/',   
  the 'loggerMiddleware' middleware function will be executed first,   
  followed by the 'loggerController' controller function.  
  
  NOTE ⚠: The middleware MUST be placed before the controller functions.  
  More middleware functions and controller functions can be added to the route,   
  but they must be placed in the correct order.  
  For example: app.get('/', middleware1, middleware2, controller1, etc...)
  */

  
  app.get('/', loggerMiddleware, loggerController);
  // This route URL will be 'http://localhost:8080/'
};

//export the myLoggerRoute function to be used in "../app.js"
module.exports = myLoggerRoute;
