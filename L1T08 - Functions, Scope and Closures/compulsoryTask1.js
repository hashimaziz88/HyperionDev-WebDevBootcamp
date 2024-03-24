// Define a function to find the sum of an array of integers
function findSum(arrayIntegers) {
  sumArrayIntegers = 0;
  for (let i = 0; i < arrayIntegers.length; i++)
    sumArrayIntegers += arrayIntegers[i];
  return sumArrayIntegers;
}

// Define a function to subtract the second number from the first number
function subtractNumbers(number1, number2) {
  return number2 - number1;
}

// Define a function to multiply two numbers
function multiplyNumbers(number1, number2) {
  return number1 * number2;
}

// Define a function to divide the first number by the second number, handling division by zero
function divideNumbers(number1, number2) {
  if (number2 === 0) {
    console.log("Error: Division by zero!");
    return;
  } else {
    return number1 / number2;
  }
}

// Create an array with 3 integers
const numbersArray = [10, 5, 0];

// Use the array to call the findSum function and log its return value
const sum = findSum(numbersArray);
console.log("Sum:", sum);

// Use the first and second number from the array to call subtractNumbers and log its return value
const difference = subtractNumbers(numbersArray[0], numbersArray[1]);
console.log("Difference:", difference);

// Use the third number and the first number from the array to call multiplyNumbers and log its return value
const product = multiplyNumbers(numbersArray[2], numbersArray[0]);
console.log("Product:", product);

// Call divideNumbers using the sum of all three numbers obtained from findSum and the third number from the array. Log its return value.
const quotient = divideNumbers(sum, numbersArray[2]);
console.log("Quotient:", quotient);
