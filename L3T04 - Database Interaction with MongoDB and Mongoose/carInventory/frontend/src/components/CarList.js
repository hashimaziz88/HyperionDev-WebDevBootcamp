// src/components/CarList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const CarList = () => {
  const [cars, setCars] = useState([]);

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
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            {car.make} {car.model} - {car.registrationNumber} (Owner:{" "}
            {car.owner})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
