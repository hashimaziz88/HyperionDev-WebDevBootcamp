// routes/secure/userDataRoute.js

// Import the necessary modules
const { getTodos } = require("../../controllers/userController");
const { jwtMiddleware } = require("../../middleware/jwtMiddleware");

const userDataRoute = (app) => {
  // Define a secured route for getting user data
  app.get("/user/data", jwtMiddleware, getTodos);
  // This route URL will be http://localhost:8080/user/data
};

// Export the userDataRoute function to be used in app.js
module.exports = userDataRoute;
