# Car Inventory Frontend

This repository contains the frontend of the Car Inventory web application, built using React.js. It allows users to manage a collection of cars, including adding new cars, updating car information, deleting cars, and viewing the list of cars.

## Getting Started

Follow these instructions to set up and run the frontend of the Car Inventory application.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Navigate to the project directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. The development server will start running at `http://localhost:3000`.

## Components

### CarForm

- **Description:** Component for adding a new car to the inventory.
- **Features:**
  - Form fields for entering car details.
  - Form submission to add a new car.
  - Error handling and notifications for success/failure.

### CarItem

- **Description:** Component to display individual car details and options for editing or deleting a car.
- **Features:**
  - Display car details.
  - Buttons to edit or delete a car.
  - Toggle between editing mode and display mode.

### CarList

- **Description:** Component to display the list of cars.
- **Features:**
  - Filter options to display all cars or cars older than five years.
  - Display each car using the `CarItem` component.
  - Fetch cars data from the backend API.

### UpdateCarForm

- **Description:** Component for updating car details.
- **Features:**
  - Form fields for editing car details.
  - Form submission to update car information.
  - Cancel button to exit editing mode.

## App

- **Description:** Main component to render the entire application.
- **Features:**
  - Renders `CarForm` for adding new cars.
  - Renders `CarList` to display the list of cars.

## Libraries Used

- **axios:** For making HTTP requests to the backend API.
- **react-toastify:** For displaying notifications.
- **react:** For building user interfaces.
- **react-dom:** For rendering React components.
- **react-scripts:** For running the development server.

## Folder Structure

```
car-inventory-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── CarForm.js
│   │   ├── CarItem.js
│   │   ├── CarList.js
│   │   └── UpdateCarForm.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

- **`public/`**: Contains static assets and the HTML template.
- **`src/`**: Contains the source code of the application.
  - **`components/`**: Contains React components.
  - **`App.js`**: Main component to render the application.
  - **`index.js`**: Entry point of the application.
  - **`index.css`**: Global CSS styles.
- **`.gitignore`**: Specifies intentionally untracked files to ignore.
- **`package.json`**: Dependency and script configuration file.
- **`README.md`**: Project documentation.

## Authors

- Hashim Aziz Muhammad

## Acknowledgments

- [OpenAI](https://openai.com) for providing AI-powered assistance.
- React community for developing a powerful frontend library.
- [axios](https://axios-http.com/) for making HTTP requests.
- [react-toastify](https://fkhadra.github.io/react-toastify/) for displaying notifications.
