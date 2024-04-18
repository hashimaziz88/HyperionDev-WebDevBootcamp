import React from "react";
import { Box, Typography, Grid, Link, Card, CardContent } from "@mui/material";

import "./ThisWeek.css"; // Import CSS file

// Array of department names
const departmentNames = [
  "WCELLAR",
  "FOOD",
  "WOMEN",
  "MEN",
  "KIDS",
  "BABY",
  "BEAUTY",
  "HOMEWARE",
  "COUNTRY ROAD",
  "TRENERY",
  "WITCHERY",
  "WCONNECT",
  "WREWARDS",
  "WOOLWORTHS FINANCIAL SERVICES",
];

// ShopByDepartment component
function ShopByDepartment() {
  return (
    <div className="container">
      <div className="container2">
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            SHOP BY DEPARTMENT
          </Typography>
          {/* Grid container for department cards */}
          <Grid container spacing={2}>
            {/* Map through department names to render department cards */}
            {departmentNames.map((departmentName) => (
              <Grid item xs={3} key={departmentName}>
                {/* Link to department page */}
                <Link href="#" underline="none">
                  {/* Card for department */}
                  <Card sx={{ border: "1px solid grey" }}>
                    <CardContent>
                      {/* Typography for department name */}
                      <Typography variant="body2" align="center">
                        {departmentName}
                      </Typography>
                    </CardContent>
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

export default ShopByDepartment;
