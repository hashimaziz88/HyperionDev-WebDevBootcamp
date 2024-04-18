import React from "react";
import Carousel from "react-material-ui-carousel"; // Import Carousel component
import { Paper } from "@mui/material"; // Import Paper component

// Images for the carousel
const images = [
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfMVVQX0Jhbm5lcjAxLnBuZyJ9.jpg?w=1200&q=60",
  "https://www.woolworths.co.za/images/elasticera/content/landing_pages/Women21/Week43_Womens_Desktop_1UP_Banner01_update.png?w=1200&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfMVVQX0Jhbm5lcjAzLnBuZyJ9.jpg?w=1200&q=60",
];

// MyCarousel component
function MyCarousel() {
  return (
    <div className="container">
      <div style={{ padding: 20 }}>
        {/* Carousel component */}
        <Carousel>
          {/* Map through images to render carousel items */}
          {images.map((image) => (
            <Paper key={image} sx={{ width: "100%", height: 300 }}>
              {/* Image element */}
              <img
                src={image}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Paper>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MyCarousel;
