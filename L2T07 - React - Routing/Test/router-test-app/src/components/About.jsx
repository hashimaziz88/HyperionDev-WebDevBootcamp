import React, { useEffect, useState } from "react";
import { Card, Figure, Container } from "react-bootstrap";
import TotalPrice from "./TotalPrice";

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
    <div className="container">
      <TotalPrice
        totalPrice={totalPrice}
        cartItems={cartItems}
        updateCart={updateCart}
        removeItem={removeItem}
        isVisible={true}
      />
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Card className="text-center" style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title className="mb-4">Contact Us</Card.Title>
            <Card.Subtitle className="mb-4 text-muted">
              contact@example.com
            </Card.Subtitle>

            <div className="d-flex justify-content-center mb-4">
              <Figure>
                <Figure.Image
                  width={200}
                  height={200}
                  alt="Store Logo"
                  src="https://via.placeholder.com/400x400?text=Store+Logo"
                  className="mx-auto"
                />
                <Figure.Caption className="text-center">
                  Short description of your store
                </Figure.Caption>
              </Figure>
            </div>
            <Card.Text>
              Welcome to our store! We strive to provide the best products and
              excellent customer service. Explore our wide range of products and
              enjoy a seamless shopping experience.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Placeholder images with titles */}
        <Figure className="mx-3">
          <Figure.Image
            width={400}
            height={400}
            alt="Placeholder Store 1"
            src="https://via.placeholder.com/400"
          />
          <Figure.Caption className="text-center mt-3">
            Placeholder Store 1
          </Figure.Caption>
        </Figure>

        <Figure className="mx-3">
          <Figure.Image
            width={400}
            height={400}
            alt="Placeholder Store 2"
            src="https://via.placeholder.com/400"
          />
          <Figure.Caption className="text-center mt-3">
            Placeholder Store 2
          </Figure.Caption>
        </Figure>
      </Container>
    </div>
  );
};

export default About;
