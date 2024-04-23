import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";

function WeatherApp() {
  // State hooks
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data by city
  const fetchWeather = async () => {
    const API_KEY = "6dcfae23a32340c1929123202242204";
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );
    const data = await response.json();
    setWeather(data);
  };

  // Function to fetch weather data by location coordinates
  const fetchWeatherByLocation = async (latitude, longitude) => {
    const API_KEY = "6dcfae23a32340c1929123202242204";
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
    );
    const data = await response.json();
    setWeather(data);
    console.log("here");
  };

  // Handle city input change
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  // Handle search by city
  const handleSearch = (event) => {
    event.preventDefault();
    fetchWeather();
  };

  // Handle search by current location
  const handleLocationSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByLocation(latitude, longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <Card style={{ maxWidth: 400, width: "80%", textAlign: "center" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Weather App
              </Typography>
              <form onSubmit={handleSearch}>
                <TextField
                  value={city}
                  onChange={handleCityChange}
                  label="Enter city"
                  fullWidth
                  style={{ marginBottom: 16 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 8 }}
                >
                  Search
                </Button>
                <Button
                  onClick={handleLocationSearch}
                  variant="contained"
                  color="secondary"
                >
                  Use my location
                </Button>
              </form>
              {/* Display weather data if available */}
              {weather && weather.location && (
                <Box mt={4}>
                  <Typography variant="h5">
                    {weather.location.name}, {weather.location.country}
                  </Typography>
                  <Typography variant="subtitle1">
                    {weather.current.condition.text}
                  </Typography>
                  <Typography variant="body1">
                    {weather.current.temp_c}°C
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default WeatherApp;
