import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Face2Icon from "@mui/icons-material/Face2";
import FaceIcon from "@mui/icons-material/Face";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const BasicCard = ({ icon, departmentName }) => {
  return (
    <IconButton>
      <Card sx={{ width: 200, minHeight: 200, textAlign: "center" }}>
        <CardContent>
          {icon}
          <Typography variant="h5" component="div">
            <br />
            {departmentName}
          </Typography>
        </CardContent>
      </Card>
    </IconButton>
  );
};

const StackOfCards = () => {
  const departments = [
    {
      icon: <Face2Icon fontSize="large" color="disabled" />,
      departmentName: "WOMEN",
    },
    {
      icon: <FaceIcon fontSize="large" color="disabled" />,
      departmentName: "MEN",
    },
    {
      icon: <EmojiPeopleIcon fontSize="large" color="disabled" />,
      departmentName: "KIDS",
    },
    {
      icon: <PersonIcon fontSize="large" color="disabled" />,
      departmentName: "FOOD",
    },
    {
      icon: <PersonOutlineIcon fontSize="large" color="disabled" />,
      departmentName: "HOME",
    },
    {
      icon: <Face2Icon fontSize="large" color="disabled" />,
      departmentName: "BEAUTY",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {departments.map((department, index) => (
          <BasicCard
            key={index}
            icon={department.icon}
            departmentName={department.departmentName}
          />
        ))}
      </Box>
    </div>
  );
};

export default StackOfCards;
