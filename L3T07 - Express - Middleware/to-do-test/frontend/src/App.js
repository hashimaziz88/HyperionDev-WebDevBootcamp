// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/sitewide/Navbar";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Home from "./components/Home";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        {/* <Route path="/todos" element={<TodoPage />} />{" "} */}
        {/* Use TodoPage component */}
      </Routes>
    </>
  );
}

export default App;
