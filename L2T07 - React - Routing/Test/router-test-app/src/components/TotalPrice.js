import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";

const TotalPrice = ({ totalPrice, cartItems, removeItem, isVisible }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  if (!isVisible || (!totalPrice && (!cartItems || cartItems.length === 0))) {
    return null;
  }

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const formattedTotalPrice = totalPrice ? totalPrice.toFixed(2) : "0.00";

  const handleRemoveItem = (index, price) => {
    removeItem(index);
  };

  return (
    <div
      className="total-price"
      style={{ position: "absolute", top: "10px", right: "10px" }}
    >
      <h2>
        Total price:{" "}
        <Badge pill bg="primary">
          ${formattedTotalPrice}
        </Badge>
      </h2>
      <Button onClick={toggleCartVisibility} variant="info">
        {isCartVisible ? "Hide Cart" : "Show Cart"}
      </Button>
      {isCartVisible && (
        <div>
          <h3>Cart</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}{" "}
                <button onClick={() => handleRemoveItem(index, item.price)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TotalPrice;
