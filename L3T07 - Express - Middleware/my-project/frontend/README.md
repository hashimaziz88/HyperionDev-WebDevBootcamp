# To-Do List Application

This project is a full-stack React application for managing tasks effectively. Users can register, log in, and perform CRUD (Create, Read, Update, Delete) operations on their to-do list.

## Features

- Register and log in to access your personal to-do list.
- Add new tasks to your to-do list.
- Edit existing tasks to update their details.
- Delete tasks that are no longer needed.
- Secure endpoints ensuring only logged-in users can manage tasks.
- Middleware Security:
  - Only users with '@gmail.com' email addresses can access the application.
  - Tasks cannot exceed 140 characters in name or description.
  - All requests must be of the JSON content type.

## Technologies Used

- React: Frontend framework
- React Router: For routing
- Axios: For making HTTP requests
- Formik: For handling forms with validation
- Yup: For form validation
- Node.js: Backend runtime environment
- Express.js: Backend web framework
- MongoDB: Database
- JSON Web Tokens (JWT): For user authentication
- Bcrypt: For hashing passwords

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js and npm
- MongoDB
- Git (optional, for version control)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Ejects the project from Create React App.

## Deployment

To deploy the application, follow the steps in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/deployment).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
