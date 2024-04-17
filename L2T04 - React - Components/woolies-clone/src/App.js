import React from "react";
import HeaderBanner from "../src/components/HeaderBanner.js"; // Import the component
import HeaderMain from "../src/components/HeaderMain.js";
import MyCarousel from "./components/MyCarousel.js";
import MainNavigation from "../src/components/MainNavigation.js";
import Carousel from "../src/components/Carousel.js";

function App() {
  return (
    <div>
      <HeaderBanner />
      <HeaderMain />
      <MainNavigation />
      <MyCarousel />
      <Carousel />
    </div>
  );
}

export default App;
