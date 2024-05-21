import React, { useState } from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList"; // Corrected import path
import "./App.css";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

const App = () => {
  const [cars, setCars] = useState([]);

  const addCar = (car) => {
    setCars([...cars, car]); // Ensure immutability here
  };

  return (
    <div>
      <h1>Car Inventory</h1>
      <CarForm onAdd={addCar} />
      <CarList cars={cars} setCars={setCars} />{" "}
      {/* Pass the updated car list to CarList component */}
    </div>
  );
};

export default App;
