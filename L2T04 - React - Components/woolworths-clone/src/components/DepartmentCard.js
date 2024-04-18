import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

// Define prop types for the DepartmentCard component
DepartmentCard.propTypes = {
  icon: PropTypes.element.isRequired, // Required icon prop of type element
  departmentName: PropTypes.string.isRequired, // Required departmentName prop of type string
};

// Function component for DepartmentCard
export default function DepartmentCard(props) {
  return (
    <div>
      {/* Card component with custom styles */}
      <Card
        sx={{ width: "250px", height: "250px", backgroundColor: "#F7F7F7" }}
      >
        {/* CardMedia to display department icon */}
        <CardMedia
          sx={{ height: 150, display: "flex", justifyContent: "center" }}
        >
          {props.icon} {/* Render department icon */}
        </CardMedia>
        {/* CardContent to display department name */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Typography component for department name */}
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={"violet"}
          >
            {props.departmentName} {/* Render department name */}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
