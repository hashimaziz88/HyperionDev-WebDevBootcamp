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
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number, // Allow for optional rating prop
  plusIcon: PropTypes.node, // Allow for optional custom plusIcon
};

export default function MediaCard(props) {
  return (
    <div>
      <Card sx={{ width: "250px", height: "500px" }}>
        <CardMedia sx={{ height: 300 }} image={props.image} title="Product" />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {props.text}
            </Typography>
            <StarRatings
              readOnly={true} // Set to readOnly for displaying a static rating
              value={props.rating || 0} // Use provided rating or default to 0
              precision={0.5}
              size="small"
            />
          </div>
          <Typography variant="body2" color="text.secondary">
            Price: {props.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton aria-label="add to cart">
            {props.plusIcon || <AddIcon />}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
