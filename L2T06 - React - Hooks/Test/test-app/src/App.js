import { useState, useEffect, useRef } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
});

function App() {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [certainty, setCertainty] = useState("");
  const inputRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.nationalize.io?name=${name}`);
      const data = await response.json();
      if (data.country.length > 0) {
        const firstCountry = data.country[0];
        setNationality(firstCountry.country_id);
        setCertainty((firstCountry.probability * 100).toFixed(2)); // Round to 2 decimal places
      } else {
        setNationality("");
        setCertainty("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleChange = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNationality("");
      setCertainty("");
    }
  };

  return (
    <Container className={classes.container}>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          inputRef={inputRef}
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Predict Nationality
        </Button>
      </form>
      {nationality && certainty && (
        <div>
          <Typography variant="h6" gutterBottom>
            Result:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {name} is from {nationality} with {certainty}% certainty.
          </Typography>
        </div>
      )}
    </Container>
  );
}

export default App;
