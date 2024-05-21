// src/components/CarList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import CarItem from "./CarItem";

const CarList = ({ cars, setCars }) => {
  // const [cars, setCars] = useState([]);

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

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
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
