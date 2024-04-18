import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarRatings from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";

// Define prop types for the MediaCard component
MediaCard.propTypes = {
  image: PropTypes.string.isRequired, // Image source URL
  text: PropTypes.string.isRequired, // Text content for the card
  price: PropTypes.string.isRequired, // Price of the product
  rating: PropTypes.number, // Optional: product rating
  plusIcon: PropTypes.element, // Icon element for adding to cart
};

export default function MediaCard(props) {
  return (
    <div style={{ width: "100%", maxWidth: "250px", margin: "auto" }}>
      {/* Render a Material-UI Card component */}
      <Card sx={{ width: "100%", height: "100%", background: "#F2F2F2" }}>
        {/* Display product image */}
        <CardMedia
          sx={{ height: 300, objectFit: "contain" }}
          image={props.image}
          title="Product"
        />
        {/* Content section for product details */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* Display product name */}
            <Typography gutterBottom variant="h5" component="div">
              {props.text}
            </Typography>
            {/* Display product rating if available */}
            <StarRatings
              readOnly={true} // Set to readOnly for displaying a static rating
              value={props.rating || 0} // Use provided rating or default to 0
              precision={0.5}
              size="small"
            />
          </div>
          {/* Display product price */}
          <Typography variant="body2" color="text.secondary">
            Price: {props.price}
          </Typography>
        </CardContent>
        {/* Action section for adding to cart */}
        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton aria-label="add to cart">
            {/* Render custom plus icon or default AddIcon */}
            {props.plusIcon || <AddIcon />}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
