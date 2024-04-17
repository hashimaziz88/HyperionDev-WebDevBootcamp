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

function Carousel({ cardDetails }) {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");
  const [currentTab, setCurrentTab] = useState(0); // Track current tab index

  const cardsPerPage = 5; // Adjust as needed

  useEffect(() => {
    const initialCards = cardDetails.map((card, index) => (
      <MediaCard
        key={index}
        image={card.image}
        text={card.text}
        price={card.price}
        plusIcon={<AddIcon />}
      />
    ));
    setCards(initialCards);
  }, [cardDetails]);

  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const containerWidth = cardsPerPage * 250; // 250px per card

  return (
    <div>
      <Box sx={{ width: "100%" }}>
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
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <IconButton
                  onClick={handlePrevPage}
                  sx={{ margin: 5 }}
                  disabled={currentPage === 0}
                >
                  <NavigateBeforeIcon />
                </IconButton>
                <Box sx={{ width: `${containerWidth}px`, height: "100%" }}>
                  {cards.map((card, index) => (
                    <Box
                      key={`card-${index}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        display:
                          currentTab === 0 && currentPage === index
                            ? "block"
                            : "none",
                      }}
                    >
                      <Slide
                        direction={slideDirection}
                        in={currentTab === 0 && currentPage === index}
                      >
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
                  ))}
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
            {/* Carousel for Home */}
            {cards.length > 0 && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {/* Adjust carousel structure as needed */}
              </Box>
            )}
            {/* Carousel for Beauty */}
            {cards.length > 0 && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {/* Adjust carousel structure as needed */}
              </Box>
            )}
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Carousel;
