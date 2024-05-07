// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* // ADD OTHER COMPONENTS HERE */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}
