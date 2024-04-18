import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import MediaCard from "./Card";
import AddIcon from "@mui/icons-material/Add";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Carousel.css";

const cardWidth = 250; // Width of each card
const cardsPerPage = 5; // Cards per page

// Details by Category to be imported into my Carousel
const clothingDetails = [
  {
    image:
      "https://assets.woolworthsstatic.co.za/Wool-Blend-Crew-Neck-Top-CHALK-508042452.jpg?V=ko3z&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwODA0MjQ1Ml9DSEFMS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 1",
    price: "R10",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Cotton-Blend-Henley-Top-PURE-WHITE-507976184.jpg?V=gZq2&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwNzk3NjE4NF9QVVJFV0hJVEVfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 2",
    price: "R20",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Boat-Neck-Knit-Jumper-RED-507459296.jpg?V=IWWb&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTEyLTA4LzUwNzQ1OTI5Nl9SRURfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 3",
    price: "R30",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Wool-Blend-Crew-Rib-Knit-ROYAL-PURPLE-508053150.jpg?V=4ccM&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwODA1MzE1MF9ST1lBTFBVUlBMRV9oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 4",
    price: "R40",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Ribbed-Poloneck-DUSTY-PINK-507459212.jpg?V=a5x5&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTAxLTA1LzUwNzQ1OTIxMl9EVVNUWVBJTktfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 5",
    price: "R50",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Apple-Print-Zip-up-Sleepsuit-X-PINK-507617696.jpg?V=oNeE&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTExLTA4LzUwNzYxNzY5Nl9YUElOS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 6",
    price: "R60",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Apple-Print-Zip-up-Sleepsuit-X-PINK-507617696.jpg?V=oNeE&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTExLTA4LzUwNzYxNzY5Nl9YUElOS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card hdf7",
    price: "R70",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Plain-Cotton-Sleepsuit-WHITE-507456548.jpg?V=GYjc&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTA2LTI3LzUwNzQ1NjU0OF9XSElURV9oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 8",
    price: "R80",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Plain-Cotton-Sleepsuit-DUSTY-PINK-506430420.jpg?V=TPOX&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTAyLTAxLzUwNjQzMDQyMF9EVVNUWVBJTktfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 9",
    price: "R90",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Apple-Print-Zip-up-Sleepsuit-X-PINK-507617696.jpg?V=oNeE&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTExLTA4LzUwNzYxNzY5Nl9YUElOS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 10",
    price: "R100",
  },
];
const homeDetails = [
  {
    image:
      "https://assets.woolworthsstatic.co.za/Wool-Blend-Crew-Neck-Top-CHALK-508042452.jpg?V=ko3z&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwODA0MjQ1Ml9DSEFMS19oZXJvLmpwZyJ9&&=410&q=85",
    text: "Card 1",
    price: "R10",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Cotton-Blend-Henley-Top-PURE-WHITE-507976184.jpg?V=gZq2&o=&&w=410&q=85",
    text: "Card 2",
    price: "R20",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Boat-Neck-Knit-Jumper-RED-507459296.jpg?V=IWWb&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTEyLTA4LzUwNzQ1OTI5Nl9SRURfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 3",
    price: "R30",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Wool-Blend-Crew-Rib-Knit-ROYAL-PURPLE-508053150.jpg?V=4ccM&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwODA1MzE1MF9ST1lBTFBVUlBMRV9oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 4",
    price: "R40",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Ribbed-Poloneck-DUSTY-PINK-507459212.jpg?V=a5x5&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTAxLTA1LzUwNzQ1OTIxMl9EVVNUWVBJTktfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 5",
    price: "R50",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Apple-Print-Zip-up-Sleepsuit-X-PINK-507617696.jpg?V=oNeE&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTExLTA4LzUwNzYxNzY5Nl9YUElOS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 6",
    price: "R60",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Apple-Print-Zip-up-Sleepsuit-X-PINK-507617696.jpg?V=oNeE&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTExLTA4LzUwNzYxNzY5Nl9YUElOS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card hdf7",
    price: "R70",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Plain-Cotton-Sleepsuit-WHITE-507456548.jpg?V=GYjc&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTA2LTI3LzUwNzQ1NjU0OF9XSElURV9oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 8",
    price: "R80",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Plain-Cotton-Sleepsuit-DUSTY-PINK-506430420.jpg?V=TPOX&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTAyLTAxLzUwNjQzMDQyMF9EVVNUWVBJTktfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 9",
    price: "R90",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Apple-Print-Zip-up-Sleepsuit-X-PINK-507617696.jpg?V=oNeE&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTExLTA4LzUwNzYxNzY5Nl9YUElOS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 10",
    price: "R100",
  },
];
const beautyDetails = [
  {
    image:
      "https://assets.woolworthsstatic.co.za/Wool-Blend-Crew-Neck-Top-CHALK-508042452.jpg?V=ko3z&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwODA0MjQ1Ml9DSEFMS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 1",
    price: "R10",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Cotton-Blend-Henley-Top-PURE-WHITE-507976184.jpg?V=gZq2&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwNzk3NjE4NF9QVVJFV0hJVEVfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 2",
    price: "R20",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Boat-Neck-Knit-Jumper-RED-507459296.jpg?V=IWWb&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTEyLTA4LzUwNzQ1OTI5Nl9SRURfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 3",
    price: "R30",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Wool-Blend-Crew-Rib-Knit-ROYAL-PURPLE-508053150.jpg?V=4ccM&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwODA1MzE1MF9ST1lBTFBVUlBMRV9oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 4",
    price: "R40",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Ribbed-Poloneck-DUSTY-PINK-507459212.jpg?V=a5x5&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTAxLTA1LzUwNzQ1OTIxMl9EVVNUWVBJTktfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 5",
    price: "R50",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Apple-Print-Zip-up-Sleepsuit-X-PINK-507617696.jpg?V=oNeE&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTExLTA4LzUwNzYxNzY5Nl9YUElOS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 6",
    price: "R60",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Apple-Print-Zip-up-Sleepsuit-X-PINK-507617696.jpg?V=oNeE&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTExLTA4LzUwNzYxNzY5Nl9YUElOS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card hdf7",
    price: "R70",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Plain-Cotton-Sleepsuit-WHITE-507456548.jpg?V=GYjc&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTA2LTI3LzUwNzQ1NjU0OF9XSElURV9oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 8",
    price: "R80",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Plain-Cotton-Sleepsuit-DUSTY-PINK-506430420.jpg?V=TPOX&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTAyLTAxLzUwNjQzMDQyMF9EVVNUWVBJTktfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 9",
    price: "R90",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Apple-Print-Zip-up-Sleepsuit-X-PINK-507617696.jpg?V=oNeE&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTExLTA4LzUwNzYxNzY5Nl9YUElOS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 10",
    price: "R100",
  },
];
// Function component for Carousel
function Carousel() {
  // State variables
  const [currentTab, setCurrentTab] = useState(0);
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const [containerWidth, setContainerWidth] = useState(0);

  // useEffect hook to fetch initial cards data based on the current tab
  useEffect(() => {
    const initialCards = getDetails(currentTab);
    setCards(
      initialCards.map((card, index) => (
        <MediaCard
          key={index}
          image={card.image}
          text={card.text}
          price={card.price}
          plusIcon={<AddIcon />}
        />
      ))
    );
  }, [currentTab]);

  // useEffect hook to handle window resize
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const availableWidth = Math.min(screenWidth, cardWidth * cardsPerPage);
      setContainerWidth(availableWidth);
    };

    handleResize(); // Initial resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to get details based on the tab index
  const getDetails = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return clothingDetails;
      case 1:
        return homeDetails;
      case 2:
        return beautyDetails;
      default:
        return [];
    }
  };

  // Function to handle next page navigation
  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page navigation
  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Function to render cards within the carousel
  const renderCards = () => {
    return cards.map((card, index) => (
      <div key={index}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: currentPage === index ? "block" : "none",
          }}
        >
          <Slide direction={slideDirection} in={currentPage === index}>
            <Stack
              spacing={2}
              direction="row"
              alignContent="center"
              justifyContent="center"
              sx={{ width: "100%", height: "100%" }}
            >
              {cards
                .slice(
                  index * cardsPerPage,
                  index * cardsPerPage + cardsPerPage
                )
                .map((card, idx) => (
                  <div key={idx} style={{ width: `${100 / cardsPerPage}%` }}>
                    {card}
                  </div>
                ))}
            </Stack>
          </Slide>
        </Box>
      </div>
    ));
  };

  // Render function for the Carousel component
  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Recommended for you</h2>

        <Box className="container-carousel">
          {/* Tabs for different categories */}
          <Tabs
            value={currentTab}
            onChange={(event, newValue) => setCurrentTab(newValue)}
            centered
          >
            <Tab label="Clothing" />
            <Tab label="Home" />
            <Tab label="Beauty" />
          </Tabs>
          {/* Carousel container */}
          <div>
            <Box>
              {/* Render cards if available */}
              {cards.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "2.0rem",
                  }}
                >
                  {/* Navigation button for previous page */}
                  <IconButton
                    onClick={handlePrevPage}
                    sx={{ margin: 5 }}
                    disabled={currentPage === 0}
                  >
                    <NavigateBeforeIcon />
                  </IconButton>
                  {/* Container for displaying cards */}
                  <Box sx={{ width: `${containerWidth}px`, height: "100%" }}>
                    {renderCards()}
                  </Box>
                  {/* Navigation button for next page */}
                  <IconButton
                    onClick={handleNextPage}
                    sx={{ margin: 5 }}
                    disabled={
                      currentPage >=
                      Math.ceil((cards.length || 0) / cardsPerPage) - 1
                    }
                  >
                    <NavigateNextIcon />
                  </IconButton>
                </Box>
              )}
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Carousel;
