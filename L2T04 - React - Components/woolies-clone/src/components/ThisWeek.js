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
  // Replace these with actual image URLs from the Woolies website
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwMS5wbmcifQ.jpg?w=350&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwMi5wbmcifQ.jpg?w=350&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwMy5wbmcifQ.jpg?w=350&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQzX0hvbWVwYWdlX0Rlc2t0b3BfNFVQSGlnaF9CYW5uZXIwNC5wbmcifQ.jpg?w=350&q=60",
];

function WooliesFoodSection() {
  return (
    <div className="container2">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          This Week in Woolies Food
        </Typography>
        <Grid container spacing={2}>
          {imageUrls.map((imageUrl, index) => (
            <Grid item xs={3} key={index}>
              <Link href={imageUrl} underline="none">
                <Card sx={{ maxWidth: 345 }}>
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
  );
}

export default WooliesFoodSection;
