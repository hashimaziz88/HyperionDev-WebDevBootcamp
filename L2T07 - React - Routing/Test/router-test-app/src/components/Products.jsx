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
      name: "Elegant Leather Wallet",
      description:
        "Crafted from genuine leather, this wallet features a sleek design with ample space for cards and cash.",
      price: 45,
      colors: ["Brown", "Black", "Navy Blue"],
      image: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Wallet",
    },
    {
      id: 2,
      name: "Classic Analog Watch",
      description:
        "A timeless accessory for any occasion, this analog watch features a stainless steel case and leather strap.",
      price: 80,
      colors: ["Silver", "Gold", "Rose Gold"],
      image: "https://via.placeholder.com/300/3C40C6/FFFFFF?text=Watch",
    },
    {
      id: 3,
      name: "Cozy Knit Sweater",
      description:
        "Stay warm and stylish with this cozy knit sweater, perfect for layering during the colder months.",
      price: 60,
      colors: ["Gray", "Burgundy", "Navy"],
      image: "https://via.placeholder.com/300/6A5ACD/FFFFFF?text=Sweater",
    },
    {
      id: 4,
      name: "Portable Bluetooth Speaker",
      description:
        "Take your music anywhere with this portable Bluetooth speaker, delivering crisp sound quality in a compact design.",
      price: 35,
      colors: ["Black", "Red", "Blue"],
      image: "https://via.placeholder.com/300/20B2AA/FFFFFF?text=Speaker",
    },
    {
      id: 5,
      name: "Professional Chef's Knife",
      description:
        "Slice and dice like a pro with this high-quality chef's knife, featuring a razor-sharp stainless steel blade.",
      price: 50,
      colors: ["Silver", "Black"],
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
      colors: ["White"],
      image: "https://via.placeholder.com/300/FFFF00/FFFFFF?text=Pillow",
    },
    {
      id: 8,
      name: "Gourmet Coffee Sampler",
      description:
        "Explore a variety of gourmet coffee flavors with this sampler pack, perfect for coffee enthusiasts.",
      price: 20,
      colors: ["Brown"],
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
      colors: ["Black", "White", "Silver"],
      image: "https://via.placeholder.com/300/008080/FFFFFF?text=Lamp",
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
              <a href="#">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="img-fluid"
                />
              </a>
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
