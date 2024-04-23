import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import NavigationMenu from "./components/NavigationMenu";
import Products from "./components/Products";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Header />
      <NavigationMenu />
      {/* // ADD OTHER COMPONENTS HERE */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}
