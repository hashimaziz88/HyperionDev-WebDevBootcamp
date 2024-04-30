import React, { useState } from "react";
import { Badge, Button, Card, Alert } from "react-bootstrap";

const TotalPrice = ({ totalPrice, cartItems, removeItem, isVisible }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Return null if visibility is false or no total price and no cart items
  if (!isVisible || (!totalPrice && (!cartItems || cartItems.length === 0))) {
    return null;
  }

  // Toggle cart visibility
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  // Format total price
  const formattedTotalPrice = totalPrice ? totalPrice.toFixed(2) : "0.00";

  return (
    <div
      className="total-price"
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 999, // Set a high z-index to make sure it's above other content
        backgroundColor: "white",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
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
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Card style={{ width: "100%", padding: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      {item.name} - ${item.price} - {item.color}
                    </div>
                    <Button variant="danger" onClick={() => removeItem(index)}>
                      Remove
                    </Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TotalPrice;
