import React, { useEffect, useState } from "react";
import { Card, Button, Dropdown, Alert } from "react-bootstrap";
import TotalPrice from "./TotalPrice";

const Products = () => {
  // State variables
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const [buyClickedProductId, setBuyClickedProductId] = useState(null);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      description: "Basic cotton t-shirt for everyday wear.",
      price: 15,
      colors: ["Red", "Blue", "Green"],
      image: "https://via.placeholder.com/300/FF5733/FFFFFF?text=T-Shirt",
    },
    {
      id: 2,
      name: "Jeans",
      description: "Classic denim jeans for casual occasions.",
      price: 40,
      colors: ["Blue", "Black", "Gray"],
      image: "https://via.placeholder.com/300/3C40C6/FFFFFF?text=Jeans",
    },
    {
      id: 3,
      name: "Sneakers",
      description: "Comfortable sneakers for daily use.",
      price: 50,
      colors: ["Orange", "Black", "Gray"],
      image: "https://via.placeholder.com/300/6A5ACD/FFFFFF?text=Sneakers",
    },
    {
      id: 4,
      name: "Backpack",
      description: "Durable backpack for carrying essentials.",
      price: 30,
      colors: ["Black", "Blue", "Green"],
      image: "https://via.placeholder.com/300/20B2AA/FFFFFF?text=Backpack",
    },
    {
      id: 5,
      name: "Professional Chef's Knife",
      description:
        "Slice and dice like a pro with this high-quality chef's knife, featuring a razor-sharp stainless steel blade.",
      price: 50,
      colors: ["Silver", "Black", "Red"],
      image: "https://via.placeholder.com/300/FFA07A/FFFFFF?text=Knife",
    },
    {
      id: 6,
      name: "Stylish Aviator Sunglasses",
      description:
        "Shield your eyes from the sun in style with these classic aviator sunglasses, featuring UV protection lenses.",
      price: 25,
      colors: ["Gold", "Silver", "Black"],
      image: "https://via.placeholder.com/300/778899/FFFFFF?text=Sunglasses",
    },
    {
      id: 7,
      name: "Comfortable Memory Foam Pillow",
      description:
        "Enjoy a restful night's sleep with this memory foam pillow, designed to provide optimal support and comfort.",
      price: 30,
      colors: ["Gold", "Silver", "Black"],
      image: "https://via.placeholder.com/300/FFFF00/FFFFFF?text=Pillow",
    },
    {
      id: 8,
      name: "Gourmet Coffee Sampler",
      description:
        "Explore a variety of gourmet coffee flavors with this sampler pack, perfect for coffee enthusiasts.",
      price: 20,
      colors: ["Brown", "Gray", "Navy"],
      image: "https://via.placeholder.com/300/CD5C5C/FFFFFF?text=Coffee",
    },
    {
      id: 9,
      name: "Luxurious Bathrobe Set",
      description:
        "Wrap yourself in luxury with this plush bathrobe set, includes a soft robe and matching slippers.",
      price: 70,
      colors: ["White", "Gray", "Navy"],
      image: "https://via.placeholder.com/300/800080/FFFFFF?text=Bathrobe",
    },
    {
      id: 10,
      name: "Modern Desk Lamp",
      description:
        "Illuminate your workspace with this modern desk lamp, featuring adjustable brightness settings.",
      price: 40,
      colors: ["Black", "Blue", "Silver"],
      image: "https://via.placeholder.com/300/008080/FFFFFF?text=Lamp",
    },
  ];

  // Load cart items and total price from local storage on component mount
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

  // Function to handle buy button click
  const handleBuy = (productId, price) => {
    const selectedColor = selectedColors[productId];
    if (!selectedColor) {
      setBuyClickedProductId(productId);
      return;
    }
    const newTotalPrice = totalPrice + price;
    setTotalPrice(newTotalPrice);
    localStorage.setItem("totalPrice", newTotalPrice.toString());
    addToCart(productId);
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: null,
    }));
    setBuyClickedProductId(null);
  };

  // Function to handle color selection
  const handleColorSelect = (productId, color) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));
  };

  // Function to add product to cart
  const addToCart = (productId) => {
    const selectedColor = selectedColors[productId];
    const product = products.find((p) => p.id === productId);
    if (!selectedColor || !product) return;
    const newCart = [...cartItems, { ...product, color: selectedColor }];
    setCartItems(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  // Function to remove item from cart
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
      {/* Component to display total price */}
      <TotalPrice
        totalPrice={totalPrice}
        cartItems={cartItems}
        removeItem={removeItem}
        isVisible={isVisible}
      />
      <h1 className="text-center">Products Page</h1>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.image}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{`$${product.price}`}</Card.Text>
                {/* Dropdown for selecting product color */}
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id={`dropdown-basic-${product.id}`}
                    style={{
                      backgroundColor:
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
                {/* Button to buy the product */}
                <Button
                  variant="primary"
                  onClick={() => handleBuy(product.id, product.price)}
                >
                  Buy
                </Button>
                {/* Alert if color is not selected */}
                {buyClickedProductId === product.id &&
                  !selectedColors[product.id] && (
                    <Alert variant="danger">
                      Please select a color before adding to cart.
                    </Alert>
                  )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
