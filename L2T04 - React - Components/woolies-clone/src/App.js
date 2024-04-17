import React from "react";
import HeaderBanner from "../src/components/HeaderBanner.js"; // Import the component
import HeaderMain from "../src/components/HeaderMain.js";
import Carousel from "../src/components/Carousel.js";
import MainNavigation from "../src/components/MainNavigation.js";

function App() {
  return (
    <div>
      <HeaderBanner />
      <HeaderMain />
      <Carousel />
      <MainNavigation />
    </div>
  );
}

export default App;
