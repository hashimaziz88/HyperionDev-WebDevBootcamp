// src/components/CarList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import CarItem from "./CarItem";

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
    <div>
      <h2>Car List</h2>
      <label for="time-filter">Filter Cars: </label>

      <select name="car-list" id="car-select" onChange={handleFilter}>
        <option value="All">All Cars</option>
        <option value="Older Cars">Cars older than 5 years</option>
      </select>

      <ul>
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
