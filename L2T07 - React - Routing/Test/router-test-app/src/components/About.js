import React, { useEffect, useState } from "react";
import { Figure } from "react-bootstrap";
import TotalPrice from "./TotalPrice";
import Home from "./Home";
const About = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cartItems"));
    const totalFromStorage = parseFloat(localStorage.getItem("totalPrice"));
    if (cartFromStorage) {
      setCartItems(cartFromStorage);
    }
    if (totalFromStorage) {
      setTotalPrice(totalFromStorage);
    }
  }, []);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    const newTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotal);
    localStorage.setItem("totalPrice", newTotal.toString());
  };

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  return (
    <div>
      <TotalPrice
        totalPrice={totalPrice}
        cartItems={cartItems}
        updateCart={updateCart}
        removeItem={removeItem}
        isVisible={true}
      />

      <Figure>
        <Figure.Image
          width={200}
          height={200}
          alt="Store Logo"
          src="https://via.placeholder.com/200"
        />
        <Figure.Caption>Short description of your store</Figure.Caption>
      </Figure>
      <p>Contact: contact@example.com</p>
    </div>
  );
};

export default About;
