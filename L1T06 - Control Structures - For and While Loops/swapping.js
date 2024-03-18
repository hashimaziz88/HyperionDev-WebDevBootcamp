// Function to swap the second digit and last digit of the number
function swapNumbers() {
  // Get the input value from the HTML form
  let originalNumber = document.getElementById("numberInput").value;

  // Convert the input to a string to manipulate individual digits
  let strNumber = originalNumber.toString();

  // Check if the input is at least 3 digits
  if (strNumber.length < 3) {
    document.getElementById("validationMessage").textContent =
      "Please enter a number with at least 3 digits.";
    document.getElementById("resultMessage").textContent = ""; // Clears Result message incase number was swapped previously
    return;
  } else {
    document.getElementById("validationMessage").textContent = ""; // Clears Validation message incase the string was less than 3 in length
  }

  // Construct the new number with the digits swapped
  let newNumber = "";
  for (let index = 0; index < strNumber.length; index++) {
    if (index === 1) {
      newNumber += strNumber[strNumber.length - 1];
    } else if (index === strNumber.length - 1) {
      newNumber += strNumber[1];
    } else {
      newNumber += strNumber[index];
    }
  }

  // Display the original and new numbers below the input box
  document.getElementById("resultMessage").textContent =
    "Original number: " + originalNumber + ", New number: " + newNumber;
}
