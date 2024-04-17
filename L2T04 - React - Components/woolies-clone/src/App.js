import React from "react";
import HeaderBanner from "../src/components/HeaderBanner.js"; // Import the component
import HeaderMain from "../src/components/HeaderMain.js";
import MyCarousel from "./components/MyCarousel.js";
import MainNavigation from "../src/components/MainNavigation.js";
import Carousel from "../src/components/Carousel.js";

const clothingDetails = [
  {
    image:
      "https://assets.woolworthsstatic.co.za/Wool-Blend-Crew-Neck-Top-CHALK-508042452.jpg?V=ko3z&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwODA0MjQ1Ml9DSEFMS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 1",
    price: "R10",
  },
  {
    image: "image_url_2",
    text: "Card 2",
    price: "R20",
  },
  {
    image: "image_url_3",
    text: "Card 3",
    price: "R30",
  },
  {
    image: "image_url_4",
    text: "Card 4",
    price: "R40",
  },
  {
    image: "image_url_5",
    text: "Card 5",
    price: "R50",
  },
  {
    image: "image_url_6",
    text: "Card 6",
    price: "R60",
  },
  {
    image: "image_url_7",
    text: "Card 7",
    price: "R70",
  },
  {
    image: "image_url_8",
    text: "Card 8",
    price: "R80",
  },
  {
    image: "image_url_9",
    text: "Card 9",
    price: "R90",
  },
  {
    image: "image_url_10",
    text: "Card 10",
    price: "R100",
  },
];
const homeDetails = [
  {
    image:
      "https://assets.woolworthsstatic.co.za/Wool-Blend-Crew-Neck-Top-CHALK-508042452.jpg?V=ko3z&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwODA0MjQ1Ml9DSEFMS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 1",
    price: "R10",
  },
  {
    image: "image_url_2",
    text: "Card 2",
    price: "R20",
  },
  {
    image: "image_url_3",
    text: "Card 3",
    price: "R30",
  },
  {
    image: "image_url_4",
    text: "Card 4",
    price: "R40",
  },
  {
    image: "image_url_5",
    text: "Card 5",
    price: "R50",
  },
  {
    image: "image_url_6",
    text: "Card 6",
    price: "R60",
  },
  {
    image: "image_url_7",
    text: "Card 7",
    price: "R70",
  },
  {
    image: "image_url_8",
    text: "Card 8",
    price: "R80",
  },
  {
    image: "image_url_9",
    text: "Card 9",
    price: "R90",
  },
  {
    image: "image_url_10",
    text: "Card 10",
    price: "R100",
  },
];
function App() {
  return (
    <div>
      <HeaderBanner />
      <HeaderMain />
      <MainNavigation />
      <MyCarousel />
      <Carousel cardDetails={clothingDetails}/>
    </div>
  );
}

export default App;
