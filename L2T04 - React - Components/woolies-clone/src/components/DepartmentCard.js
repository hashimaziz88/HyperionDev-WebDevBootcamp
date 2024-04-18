import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

// Define prop types for the DepartmentCard component
DepartmentCard.propTypes = {
  icon: PropTypes.element.isRequired,
  departmentName: PropTypes.string.isRequired,
};

export default function DepartmentCard(props) {
  return (
    <div>
      <Card
        sx={{ width: "250px", height: "250px", backgroundColor: "#F7F7F7" }}
      >
        <CardMedia
          sx={{ height: 150, display: "flex", justifyContent: "center" }}
        >
          {props.icon}
        </CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <Typography gutterBottom variant="h5" component="div" color={"violet"}>
            {props.departmentName}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
