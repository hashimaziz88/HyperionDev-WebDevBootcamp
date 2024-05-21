import React, { useState } from "react";
import CarForm from "./components/CarForm"; // Import the CarForm component
import CarList from "./components/CarList"; // Import the CarList component
import "./App.css"; // Import CSS file for styling
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS for notifications

const App = () => {
  // State to manage the list of cars
  const [cars, setCars] = useState([]);

  // Function to add a new car to the list
  const addCar = (car) => {
    setCars([...cars, car]); // Update the cars state with the new car using spread operator to ensure immutability
  };

  return (
    <div>
      {/* Main heading */}
      <h1>Car Inventory</h1>
      {/* Form to add a new car, passing the addCar function as a prop */}
      <CarForm onAdd={addCar} />
      {/* CarList component to display the list of cars, passing the cars state and setCars function as props */}
      <CarList cars={cars} setCars={setCars} />
      {/* Pass the updated car list to the CarList component */}
    </div>
  );
};

export default App;
