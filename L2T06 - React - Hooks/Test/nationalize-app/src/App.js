import { useEffect, useRef, useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(en);

function App() {
  // State hooks
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [certainty, setCertainty] = useState("");
  const [countryName, setCountryName] = useState(""); // New state for country name
  const inputRef = useRef(null);

  // Effect hook to focus on input field when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Function to fetch data from API based on input name
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.nationalize.io?name=${name}`);
      const data = await response.json();
      if (data.country.length > 0) {
        console.log(data.country[0]);
        const firstCountry = data.country[0];
        setNationality(firstCountry.country_id);
        setCertainty((firstCountry.probability * 100).toFixed(2));
        const countryName = countries.getName(firstCountry.country_id, "en");
        setCountryName(countryName); // Set the country name
      } else {
        setNationality("");
        setCertainty("");
        setCountryName(""); // Reset country name if no data is found
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  // Handle input change
  const handleChange = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNationality("");
      setCertainty("");
      setCountryName(""); // Reset country name if input field is empty
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box mt={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Predict Nationality
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              label="Enter name"
              inputRef={inputRef}
              value={name}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Predict
            </Button>
          </form>
          {/* Display result if nationality and certainty are available */}
          {nationality && certainty && (
            <Box mt={4}>
              <Typography variant="h6">Result:</Typography>
              <Typography>
                {name} is from {countryName} with {certainty}% certainty.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default App;
