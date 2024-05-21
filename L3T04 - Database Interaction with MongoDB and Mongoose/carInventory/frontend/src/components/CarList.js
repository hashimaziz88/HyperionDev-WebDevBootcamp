// src/components/CarList.js
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import CarItem from "./CarItem"; // Import the CarItem component to render individual car items
import "./CarList.css"; // Import CSS file for styling

const CarList = ({ cars, setCars }) => {
  // State to manage the filter options
  const [selectOptions, setOptions] = useState("All");

  // Effect to fetch cars data from the server when the component mounts or when the cars state changes
  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Send a GET request to fetch cars data from the server
        const response = await axios.get("http://localhost:5000/api/cars");
        // Update the cars state with the fetched data
        setCars(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCars(); // Call the fetchCars function when the component mounts or when the cars state changes
  }, [setCars]); // Dependency array to re-run the effect when setCars changes

  // Function to handle deleting a car
  const handleDelete = (id) => {
    // Update the cars state by filtering out the deleted car
    setCars(cars.filter((car) => car._id !== id));
  };

  // Function to handle updating a car
  const handleUpdate = (updatedCar) => {
    // Update the cars state by replacing the old car with the updated car
    setCars(cars.map((car) => (car._id === updatedCar._id ? updatedCar : car)));
  };

  // Function to handle filtering cars based on select option
  const handleFilter = (event) => {
    // Update the selectOptions state with the selected option
    setOptions(event.target.value);
  };

  // Filter the cars data based on the selected option
  const filteredData =
    selectOptions === "All"
      ? cars // Show all cars if "All" option is selected
      : cars.filter((car) => car.year < new Date().getFullYear() - 5); // Show cars older than 5 years if "Older Cars" option is selected

  return (
    // Render the list of cars
    <div className="car-list-container">
      <h2 className="car-list-header">Car List</h2>
      {/* Dropdown menu for filtering cars */}
      <div className="car-list-filter">
        <label htmlFor="car-select">Filter Cars:</label>
        <select
          className="car-select"
          name="car-list"
          id="car-select"
          onChange={handleFilter}
        >
          <option value="All">All Cars</option>
          <option value="Older Cars">Cars older than 5 years</option>
        </select>
      </div>
      {/* Render individual car items */}
      <ul className="car-item-list">
        {filteredData.map((car) => (
          <CarItem
            key={car._id}
            car={car}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default CarList;
