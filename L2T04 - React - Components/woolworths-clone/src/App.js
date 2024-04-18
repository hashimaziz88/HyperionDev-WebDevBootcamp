import React from "react";
import HeaderBanner from "../src/components/HeaderBanner.js"; // Import the component
import HeaderMain from "../src/components/HeaderMain.js";
import MyCarousel from "./components/MyCarousel.js";
import MainNavigation from "../src/components/MainNavigation.js";
import Carousel from "../src/components/Carousel.js";
import ThisWeek from "../src/components/ThisWeek.js";
import DepartmentCards from "../src/components/DepartmentCards.js";
import ThisWeekInWooliesSection from "../src/components/ThisWeekInWoolies.js";
import ShopByDepartment from "../src/components/ShopByDept.js";
import SocialSection from "../src/components/SocialSection.js";
import Footer from "../src/components/Footer.js";

function App() {
  return (
    <div>
      <HeaderBanner />
      <HeaderMain />
      <MainNavigation />
      <MyCarousel />
      <DepartmentCards />
      <Carousel />
      <ThisWeek />
      <ThisWeekInWooliesSection />
      <ShopByDepartment />
      <hr></hr>
      <SocialSection />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
