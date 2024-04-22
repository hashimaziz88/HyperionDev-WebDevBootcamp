import { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [certainty, setCertainty] = useState("");
  const inputRef = useRef(null);

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <button type="submit">Predict Nationality</button>
      </form>
      {nationality && certainty && (
        <div>
          <h2>Result:</h2>
          <p>
            {name} is from {nationality} with {certainty}% certainty.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
