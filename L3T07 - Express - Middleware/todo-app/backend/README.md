# MyProject Backend

This repository contains the backend code for the MyProject task, which involves developing a full-stack React to-do list application. The backend is responsible for handling API requests, managing the database, and implementing business logic.

## Technologies Used

- **Node.js**: Backend JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js used for building APIs.
- **MongoDB**: NoSQL database used to store application data.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **JSON Web Tokens (JWT)**: Used for user authentication and authorization.
- **dotenv**: Module to load environment variables from a .env file.
- **Other dependencies**: Various other dependencies for middleware, error handling, etc.

## Project Structure

The project structure is organized as follows:

- **`/controllers`**: Contains controller functions that handle incoming requests and send responses.
- **`/middleware`**: Contains middleware functions used for request processing.
- **`/models`**: Contains Mongoose models for interacting with the database.
- **`/routes`**: Contains route definitions that map HTTP requests to the appropriate controller functions.
- **`server.js`**: Main entry point for the application where the server is created and configured.
- **`.env`**: Configuration file for storing environment variables.
- **`package.json`**: File that contains metadata about the project and manages project dependencies.

## Middleware

The middleware functions implemented in the backend include:

- **`checkEmailMiddleware`**: Responds with an HTTP 403 to all requests by users whose usernames don’t end with the substring ‘@gmail.com’.
- **`todoTooLargeMiddleware`**: Rejects the addition of tasks that exceed 140 characters.
- **`jsonCheckMiddleware`**: Rejects any requests that are not of the JSON content type.

## API Endpoints

The backend provides the following API endpoints:

- **`POST /todos/register`**: Register a new user.
- **`POST /todos/login`**: Login user and generate JWT token.
- **`POST /todos/add`**: Create a new todo.
- **`GET /todos/getTodos/:user_id`**: Retrieve all todos for a specific user.
- **`PUT /todos/update-todo/:todo_id`**: Update a todo by its ID.
- **`DELETE /todos/delete-todo/:todo_id`**: Delete a todo by its ID.

## Getting Started

1. Clone this repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up environment variables by creating a `.env` file in the root directory with the required variables (e.g., `PORT`, `MONGODB_URI`, `JWT_SECRET`).
4. Start the server: `npm start`
