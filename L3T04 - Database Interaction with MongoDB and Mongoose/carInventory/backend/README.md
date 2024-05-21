# Car Inventory Backend

This repository contains the backend of the Car Inventory web application, built using Express.js and MongoDB with Mongoose. It provides endpoints to perform CRUD operations on a collection of cars.

## Getting Started

Follow these instructions to set up and run the backend of the Car Inventory application.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Navigate to the project directory:

   ```bash
   cd carInventory
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGO_URI=your-mongodb-connection-uri
   PORT=5000
   ```

   Replace `your-mongodb-connection-uri` with the connection URI of your MongoDB database.

### Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. The server will start running at `http://localhost:5000`.

## Endpoints

### Create a Car

- **URL:** `/api/cars`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "make": "Toyota",
    "model": "Camry",
    "registrationNumber": "ABC123",
    "owner": "John Doe",
    "year": 2018
  }
  ```
- **Response:** Newly created car object

### Update a Car

- **URL:** `/api/cars/:id`
- **Method:** `PUT`
- **Request Parameters:** `id` (Car ID)
- **Request Body:** Updated car data
- **Response:** Updated car object

### Update Multiple Cars

- **URL:** `/api/cars`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "filter": { "make": "Toyota" },
    "update": { "owner": "Jane Doe" }
  }
  ```
- **Response:** Result of the update operation

### Delete a Car

- **URL:** `/api/cars/:id`
- **Method:** `DELETE`
- **Request Parameters:** `id` (Car ID)
- **Response:** `{ "message": "Car deleted" }`

### Get All Cars

- **URL:** `/api/cars`
- **Method:** `GET`
- **Response:** Array of all car objects

### Get Cars Older Than Five Years

- **URL:** `/api/cars/olderThanFiveYears`
- **Method:** `GET`
- **Response:** Array of car objects older than five years, containing model, make, registration number, and current owner

## Directory Structure

```
carInventory/
├── controllers/
│   └── car.controller.js
├── models/
│   └── car.model.js
├── routes/
│   └── car.routes.js
├── .env
├── app.js
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

- **`controllers/`**: Contains controller functions to handle HTTP requests.
- **`models/`**: Contains Mongoose models for MongoDB documents.
- **`routes/`**: Defines routes and connects them to corresponding controller functions.
- **`.env`**: Configuration file for environment variables.
- **`app.js`**: Main Express application file.
- **`package.json`**: Dependency and script configuration file.
- **`server.js`**: Entry point to start the Express server.

## Authors

- Hashim Aziz Muhammad

## Acknowledgments

- [OpenAI](https://openai.com) for providing AI-powered assistance.
- [Express.js](https://expressjs.com/) for the web framework.
- [MongoDB](https://www.mongodb.com/) for the database.
- [Mongoose](https://mongoosejs.com/) for MongoDB object modeling.
- [dotenv](https://www.npmjs.com/package/dotenv) for loading environment variables.
- [cors](https://www.npmjs.com/package/cors) for enabling Cross-Origin Resource Sharing.
- [body-parser](https://www.npmjs.com/package/body-parser) for parsing request bodies.
