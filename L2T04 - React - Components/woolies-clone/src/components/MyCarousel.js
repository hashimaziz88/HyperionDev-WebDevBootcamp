import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const images = [
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfMVVQX0Jhbm5lcjAxLnBuZyJ9.jpg?w=1200&q=60",
  "https://www.woolworths.co.za/images/elasticera/content/landing_pages/Women21/Week43_Womens_Desktop_1UP_Banner01_update.png?w=1200&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfMVVQX0Jhbm5lcjAzLnBuZyJ9.jpg?w=1200&q=60",
];

function MyCarousel() {
  return (
    <Carousel>
      {images.map((image) => (
        <Paper key={image} sx={{ width: "100%", height: 300 }}>
          <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
        </Paper>
      ))}
    </Carousel>
  );
}

export default MyCarousel;