const wordsArray = [
  "elephant",
  "banana",
  "umbrella",
  "computer",
  "pineapple",
  "orange",
  "sunflower",
  "tomorrow",
  "butterfly",
  "calendar",
];

let myFilterFunction = (arr) => (fn) => {
  const arrayAfterFilter = [];
  for (let i = 0; i < arr.length; i++) {
    // Check if the callback function returns true for the current element
    if (fn(arr[i])) {
      arrayAfterFilter.push(arr[i]);
    }
  }
  return arrayAfterFilter; // Return a new array
};

// Callback function to check if a word has exactly six letters
const sixLetterWordFilter = (word) => word.length === 6;

// Using myFilterFunction with the sixLetterWordFilter callback function
const outputArray = myFilterFunction(wordsArray)(sixLetterWordFilter);

// Output the result to the console
console.log("Words with exactly six letters: " + outputArray);
