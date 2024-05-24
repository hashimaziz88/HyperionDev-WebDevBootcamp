const express = require("express");
const app = express();

// import the myLoggerRoute
const myLoggerRoute = require("./routes/myLoggerRoute");
// . . .
// import the login route
const loginRoute = require("./routes/loginRoute.js");

// import the userData route
const userDataRoute = require("./routes/secure/userDataRoute");
userDataRoute(app);

// From here go to routes/myLoggerRoute.js
myLoggerRoute(app);

// Step 1: call the myLoggerRoute function and pass in the app object as an argument

loginRoute(app);
// ==> From here go to routes/myLoggerRoute.js

//Listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// The server will run on port 8080 / http://localhost:8080

/*
 ** Getting started: Installation
 ** Step 1: Open the current directory in your terminal
 ** Step 2: Run the command: npm install
 ** Step 3: Run the command: npm start
 */
