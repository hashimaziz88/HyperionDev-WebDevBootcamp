// palindrome.js

function checkPalindrome(word) {
  word = word.toLowerCase();
  let index = word.length - 1;
  let reverseWord = "";
  while (index >= 0) {
    reverseWord += word[index];
    index--;
  }
  if (reverseWord === word) {
    return word + " is a palindrome";
  } else {
    return word + " is not a palindrome";
  }
}

// Function to display the result on the HTML page
function displayResult(result) {
  document.getElementById("result").innerText = result;
}

// Function to display error message on the HTML page
function displayErrorMessage(message) {
  document.getElementById("errorMessage").innerText = message;
}

// Function to handle button click event
function checkPalindromeAndDisplay() {
  let userInput = document.getElementById("wordInput").value;
  if (!isNaN(userInput) || userInput.trim() === "") {
    // Check if input is a number or empty
    displayErrorMessage("Please enter a valid word");
    displayResult(""); // Clear previous result
  } else {
    let result = checkPalindrome(userInput);
    displayResult(result);
    displayErrorMessage(""); // Clear previous error message
  }
}
