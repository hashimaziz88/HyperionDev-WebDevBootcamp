// Setting variables to hold the intervalID and a counter
let intervalID;
let counter = 0;

let startCounter = function () {
  intervalID = setInterval(function () {
    // Anonymous function within setInterval
    counter++; // Increment counter
    console.log(counter); // Output counter to console
  }, 1000); // Interval of 1 second
};

function stopCounter() {
  clearInterval(intervalID); // Clear the interval to stop the counter
}

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

// Attach callback functions to button events
startButton.addEventListener("click", startCounter); // Start counting
stopButton.addEventListener("click", stopCounter); // Stop counting
