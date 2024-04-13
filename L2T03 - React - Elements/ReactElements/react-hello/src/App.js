import React from "react";
import "./App.css"; // Import the custom stylesheet
import myImage from "./profilepic.jpg";

// Define user data object
const user = {
  name: "Hashim",
  surname: "Aziz Muhammad",
  date_of_birth: new Date("1999-09-03"), // Use Date object for birthdate
  address: "Victory Park, Johannesburg",
  country: "South Africa",
  email: "hashimazizm@gmail.com",
  telephone: "+27 83-252-1214",
  company: "HyperionDev",
  profile_picture: myImage,
  shopping_cart: [
    {
      id: 1,
      name: "Potatoes",
      price: 59.99,
    },
    {
      id: 2,
      name: "Lightly Salted Chips",
      price: 26.95,
    },
    {
      id: 3,
      name: "Cola Flavoured Drink",
      price: 25.95,
    },
  ],
};

function App() {
  return (
    <div className="user-profile">
      {/* Display the user's profile picture */}
      <img
        src={user.profile_picture}
        alt="Profile"
        className="profile-picture"
      />
      <div className="user-info-container">
        {/* Display user information */}
        <h2>
          {user.name} {user.surname}
        </h2>
        {/* Display user's date of birth */}
        <p>Date of Birth: {user.date_of_birth.toLocaleDateString()}</p>
        {/* Display user's address and country */}
        <p>
          Address: {user.address}, {user.country}
        </p>
        {/* Display user's email */}
        <p>Email: {user.email}</p>
        {/* Display user's telephone number */}
        <p>Telephone: {user.telephone}</p>
        {/* Display user's company */}
        <p>Company: {user.company}</p>
        {/* Display the user's shopping cart */}
        <h3>Shopping Cart:</h3>
        <ul>
          {/* Map through each item in the shopping cart and display its details */}
          {user.shopping_cart.map((item) => (
            <li key={item.id}>
              {/* Display item name and price */}
              {item.name} - R {item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
