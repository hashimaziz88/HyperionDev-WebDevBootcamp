# Car Inventory Application

This repository contains the backend and frontend of the Car Inventory web application.

## Project Directory Structure

```
car-inventory/
├── backend/
│   ├── controllers/
│   │   └── car.controller.js
│   ├── models/
│   │   └── car.model.js
│   ├── routes/
│   │   └── car.routes.js
│   ├── .env
│   ├── app.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CarForm.js
│   │   │   ├── CarItem.js
│   │   │   ├── CarList.js
│   │   │   └── UpdateCarForm.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── .gitignore
│   ├── package.json
│   └── README.md
└── README.md
```

- **`backend/`**: Contains the backend code of the application.

  - **`controllers/`**: Contains controller functions to handle HTTP requests.
  - **`models/`**: Contains Mongoose models for MongoDB documents.
  - **`routes/`**: Defines routes and connects them to corresponding controller functions.
  - **`.env`**: Configuration file for environment variables.
  - **`app.js`**: Main Express application file.
  - **`package.json`**: Dependency and script configuration file for the backend.
  - **`server.js`**: Entry point to start the Express server.

- **`frontend/`**: Contains the frontend code of the application.

  - **`public/`**: Contains static assets and the HTML template.
  - **`src/`**: Contains the source code of the frontend application.
    - **`components/`**: Contains React components.
    - **`App.js`**: Main component to render the frontend application.
    - **`index.js`**: Entry point of the frontend application.
    - **`index.css`**: Global CSS styles.
  - **`.gitignore`**: Specifies intentionally untracked files to ignore for the frontend.
  - **`package.json`**: Dependency and script configuration file for the frontend.
  - **`README.md`**: Frontend documentation.

- **`README.md`**: Main project documentation.

## Backend

The backend of the Car Inventory application is built using Express.js and MongoDB with Mongoose. It provides endpoints to perform CRUD operations on a collection of cars.

### Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd carInventory
   ```

To run the backend server:

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

The server will start running at `http://localhost:5000`.

## Frontend

The frontend of the Car Inventory application is built using React.js. It allows users to manage a collection of cars, including adding new cars, updating car information, deleting cars, and viewing the list of cars.

### Getting Started

To run the frontend development server, go back to the car inventory directory `carInventory`:

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The development server will start running at `http://localhost:3000`.

## Authors

- Hashim Aziz Muhammad
