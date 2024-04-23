import React, { useEffect, useState } from "react";
import { Card, Button, Dropdown, Alert } from "react-bootstrap";
import TotalPrice from "./TotalPrice";

const Products = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const [alertShow, setAlertShow] = useState(false);

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      price: 10,
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      price: 15,
      colors: ["Yellow", "Orange", "Pink"],
    },
  ];

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

  const handleBuy = (price) => {
    if (!alertShow) {
      setTotalPrice((prevPrice) => {
        const newTotalPrice = prevPrice + price;
        localStorage.setItem("totalPrice", newTotalPrice.toString());
        return newTotalPrice;
      });
    }
  };

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));

    // Hide the alert if a valid color is chosen
    setAlertShow(false);
  };

  const addToCart = (product) => {
    const selectedColor = selectedColors[product.id];
    if (!selectedColor) {
      setAlertShow(true); // Show alert if no color is selected
      return;
    }

    const newCart = [...cartItems, { ...product, color: selectedColor }];
    setCartItems(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));

    // Update total price
    const newTotal = newCart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotal);
    localStorage.setItem("totalPrice", newTotal.toString());
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    const newTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotal);
    localStorage.setItem("totalPrice", newTotal.toString());
  };

  return (
    <div className="container">
      <TotalPrice
        totalPrice={totalPrice}
        cartItems={cartItems}
        removeItem={removeItem}
        isVisible={isVisible}
      />
      <h1>Products Page</h1>
      <Alert
        variant="danger"
        show={alertShow}
        onClose={() => setAlertShow(false)}
        dismissible
      >
        Please select a color from the dropdown before adding to cart.
      </Alert>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{`$${product.price}`}</Card.Text>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id={`dropdown-basic-${product.id}`}
                    style={{
                      backgroundColor:
                      //   selectedColors[product.id] === "Color"
                      //     ? "secondary"
                      //     : selectedColors[product.id] || "secondary",
                      // color: "white",
                      selectedColors[product.id] === undefined
                      ? "secondary"
                      : selectedColors[product.id],
                  color: "white",
                    }}
                  >
                    {selectedColors[product.id] || "Color"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {product.colors.map((color, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => handleColorSelect(product.id, color)}
                      >
                        {color}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  variant="primary"
                  onClick={() => {
                    const selectedColor = selectedColors[product.id];
                    if (!selectedColor) {
                      setAlertShow(true);
                      return;
                    }
                    handleBuy(product.price);
                    addToCart(product);

                    // Reset selected color for the product
                    setSelectedColors((prevColors) => ({
                      ...prevColors,
                      [product.id]: null,
                    }));

                    // Reset the dropdown toggle color back to secondary
                    document.getElementById(
                      `dropdown-basic-${product.id}`
                    ).style.backgroundColor = "secondary";
                  }}
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
