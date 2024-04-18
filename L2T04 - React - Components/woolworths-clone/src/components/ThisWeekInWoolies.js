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

// URLs for images displayed vertically
const imageUrlsVertical = [
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvV2VlazQwX0hvbWV3YXJlX0Rlc2t0b3BfMVVQU21hbGxfQmFubmVyMDIucG5nIn0.jpg?w=1200&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvUGF5ZmxleF9EZXNrdG9wX0xlYXJuTW9yZUNUQS5qcGcifQ.jpg?w=1200&q=60",
];

// URLs for images displayed horizontally
const imageUrlsHorizontal = [
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvR2xvYmFsUmVjeWNsaW5nRGF5XzJ1cEJhbm5lci5qcGcifQ.jpg?w=1200&q=60",
  "https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0hvbWVwYWdlMjEvNzI0NzlfSG9tZVBhZ2VfMlVwX0VYUEVSSUVOQ0VfODAweDU1MC5wbmcifQ.jpg?w=1200&q=60",
];

function ThisWeekInWooliesSection() {
  return (
    <div className="container">
      <div className="container2">
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" sx={{ mb: 2, paddingBottom: 2 }}>
            THIS WEEK IN WOOLIES
          </Typography>
          <Grid container spacing={2}>
            {/* Display images vertically */}
            {imageUrlsVertical.map((imageUrl, index) => (
              <Grid item xs={12} key={index}>
                <Link href={imageUrl} underline="none">
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="auto"
                        image={imageUrl}
                        alt={`This Week in Woolies Offer ${index + 1}`}
                      />
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
            {/* Display images horizontally */}
            <Grid item xs={6}>
              <Link href={imageUrlsHorizontal[0]} underline="none">
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      image={imageUrlsHorizontal[0]}
                      alt="This Week in Woolies Offer 3"
                    />
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link href={imageUrlsHorizontal[1]} underline="none">
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      image={imageUrlsHorizontal[1]}
                      alt="This Week in Woolies Offer 4"
                    />
                    <CardContent>
                      {/* Optional content for each card */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default ThisWeekInWooliesSection;
