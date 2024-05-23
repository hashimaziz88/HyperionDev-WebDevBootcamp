

/***  Defining the controller functions ***
* The controller functions are the functions that will be called when the route is 'hit', 'called' or 'requested by the client'-same thing.
* The controller functions are mainly used to query the database and send responses to the client.
* A common use for the controller functions is to query 
* the database by performing CRUD operations (Create, Read, Update, Delete) then send that information to the client/front end. 
* In this example, we are not querying the database, we are just sending a response-string to the client.
*/

const loggerController = (req, res) => {
  //The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
  // The req would contain the request parameters, such as the query string or form parameters.

  console.log('CONTROLLER LOGGED')
  res.send('Server response from loggerController')
}

//Here the controller functions is exported to be used on the route: myLoggerRoute.js
module.exports = {
  loggerController,
  //another function here
};