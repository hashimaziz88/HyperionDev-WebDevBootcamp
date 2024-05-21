// src/components/CarList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import CarItem from "./CarItem";
import "./CarList.css"; // Import CSS file

const CarList = ({ cars, setCars }) => {
  const [selectOptions, setOptions] = useState("All");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cars");
        setCars(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCars();
  }, [setCars]);

  const handleDelete = (id) => {
    setCars(cars.filter((car) => car._id !== id));
  };

  const handleUpdate = (updatedCar) => {
    setCars(cars.map((car) => (car._id === updatedCar._id ? updatedCar : car)));
  };

  const handleFilter = (event) => {
    setOptions(event.target.value);
  };

  const filteredData =
    selectOptions === "All"
      ? cars
      : cars.filter((car) => car.year < new Date().getFullYear() - 5);

  return (
    <div className="car-list-container">
      <h2 className="car-list-header">Car List</h2>
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
