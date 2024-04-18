import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

import "./ThisWeek.css";

const imageUrls = [
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwMS5wbmcifQ.jpg?w=350&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwMi5wbmcifQ.jpg?w=350&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwMy5wbmcifQ.jpg?w=350&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwNC5wbmcifQ.jpg?w=350&q=60",
];

const imageUrls2 = [
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwNS5wbmcifQ.jpg?w=350&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwNi5wbmcifQ.jpg?w=350&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwNy5wbmcifQ.jpg?w=350&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwOC5wbmcifQ.jpg?w=350&q=60",
];

function WooliesFeaturedPics() {
  return (
    <div className="container">
      <div style={{ paddingTop: 25 }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            THIS WEEK IN WOOLIES FOOD
          </Typography>
          <Grid container spacing={2}>
            {imageUrls.map((imageUrl, index) => (
              <Grid item xs={3} key={index}>
                <Link href={imageUrl} underline="none">
                  <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="auto"
                        image={imageUrl}
                        alt={`Woolies Food Offer ${index + 1}`}
                      />
                      <CardContent>
                        {/* Optional content for each card (e.g., product name, price) */}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <div style={{ paddingTop: 25 }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            THIS WEEK IN FASHION, BEAUTY & HOMEWARE
          </Typography>
          <Grid container spacing={2}>
            {imageUrls2.map((imageUrl, index) => (
              <Grid item xs={3} key={index}>
                <Link href={imageUrl} underline="none">
                  <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="auto"
                        image={imageUrl}
                        alt={`Woolies Fashion, Beauty & Homeware Offer ${
                          index + 1
                        }`}
                      />
                      <CardContent>
                        {/* Optional content for each card (e.g., product name, price) */}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default WooliesFeaturedPics;
