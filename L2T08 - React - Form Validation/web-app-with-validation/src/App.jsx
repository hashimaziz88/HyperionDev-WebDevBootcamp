import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavigationMenu from "./components/NavigationMenu";
import Products from "./components/Products";
import Login from "./components/Login"; // Import the Login component
import Register from "./components/Register"; // Import the Register component
import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* Navigation Menu Component */}
      <NavigationMenu />

      {/* Router Setup */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} /> {/* Add route for Login */}
        <Route path="/register" element={<Register />} />{" "}
        {/* Add route for Register */}
      </Routes>
    </div>
  );
}
