import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import MediaCard from "./Card"; // Import your card component
import AddIcon from "@mui/icons-material/Add";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Carousel.css";

const clothingDetails = [
  {
    image:
      "https://assets.woolworthsstatic.co.za/Wool-Blend-Crew-Neck-Top-CHALK-508042452.jpg?V=ko3z&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwODA0MjQ1Ml9DSEFMS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Witchery",
    price: "R10",
    additionalText: "123",
  },
  {
    image:
      "https://assets.woolworthsstatic.co.za/Cotton-Blend-Henley-Top-PURE-WHITE-507976184.jpg?V=gZq2&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwNzk3NjE4NF9QVVJFV0hJVEVfaGVyby5qcGcifQ&&w=410&q=85",
    text: "Card 2",
    price: "R20",
  },
  {
    image: "image_url_3",
    text: "Card fas3",
    price: "R30",
  },
  {
    image: "image_url_4",
    text: "Card 4",
    price: "R40",
  },
  {
    image: "image_url_5",
    text: "Card 5",
    price: "R50",
  },
  {
    image: "image_url_6",
    text: "Card 6",
    price: "R60",
  },
  {
    image: "image_url_7",
    text: "Card hdf7",
    price: "R70",
  },
  {
    image: "image_url_8",
    text: "Card 8",
    price: "R80",
  },
  {
    image: "image_url_9",
    text: "Card 9",
    price: "R90",
  },
  {
    image: "image_url_10",
    text: "Card 10",
    price: "R100",
  },
];
const homeDetails = [
  {
    image:
      "https://assets.woolworthsstatic.co.za/Wool-Blend-Crew-Neck-Top-CHALK-508042452.jpg?V=ko3z&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA0LTA0LzUwODA0MjQ1Ml9DSEFMS19oZXJvLmpwZyJ9&&w=410&q=85",
    text: "Card 1",
    price: "R10",
  },
  {
    image: "image_url_2",
    text: " 2",
    price: "R20",
  },
  {
    image: "image_url_3",
    text: "Card",
    price: "R30",
  },
  {
    image: "image_url_4",
    text: "Card 4",
    price: "R40",
  },
  {
    image: "image_url_5",
    text: "Card 5",
    price: "R50",
  },
  {
    image: "image_url_6",
    text: "Card 6",
    price: "R60",
  },
  {
    image: "image_url_7",
    text: "Card 7",
    price: "R70",
  },
  {
    image: "image_url_8",
    text: "Card 8",
    price: "R80",
  },
  {
    image: "image_url_9",
    text: "Card 9",
    price: "R90",
  },
  {
    image: "image_url_10",
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
    image: "image_url_2",
    text: "Card",
    price: "R20",
  },
  {
    image: "image_url_3",
    text: "dass",
    price: "R30",
  },
  {
    image: "image_url_4",
    text: "Card 4",
    price: "R40",
  },
  {
    image: "image_url_5",
    text: "Card 5",
    price: "R50",
  },
  {
    image: "image_url_6",
    text: "Card 6",
    price: "R60",
  },
  {
    image: "image_url_7",
    text: "Card 7",
    price: "R70",
  },
  {
    image: "image_url_8",
    text: "Card 8",
    price: "R80",
  },
  {
    image: "image_url_9",
    text: "Card 9",
    price: "R90",
  },
  {
    image: "image_url_10",
    text: "Card 10",
    price: "R100",
  },
];

function Carousel() {
  const [currentTab, setCurrentTab] = useState(0); // Track current tab index
  const [cards, setCards] = useState([]); // State to hold the cards based on the selected tab
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

  const cardsPerPage = 5; // Adjust as needed

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

  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const renderCards = () => {
    return cards.map((card, index) => (
      <div>
        <Box
          key={`card-${index}`}
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
              {cards.slice(
                index * cardsPerPage,
                index * cardsPerPage + cardsPerPage
              )}
            </Stack>
          </Slide>
        </Box>
      </div>
    ));
  };

  const containerWidth = cardsPerPage * 250; // 250px per card

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <h2 style={{ textAlign: "center" }}>Recommended for you</h2>

      <Box className="container-carousel">
        <Tabs
          value={currentTab}
          onChange={(event, newValue) => setCurrentTab(newValue)} // Handle tab change
          centered // Center align tabs
        >
          <Tab label="Clothing" />
          <Tab label="Home" />
          <Tab label="Beauty" />
        </Tabs>
        <div>
          <Box sx={{ height: "400px" }}>
            {cards.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "2.0rem", // Adjust this value as needed
                }}
              >
                <IconButton
                  onClick={handlePrevPage}
                  sx={{ margin: 5 }}
                  disabled={currentPage === 0}
                >
                  <NavigateBeforeIcon />
                </IconButton>
                <Box sx={{ width: `${containerWidth}px`, height: "100%" }}>
                  {renderCards()}
                </Box>
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
  );
}

export default Carousel;
