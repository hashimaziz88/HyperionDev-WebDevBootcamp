// Outer for loop for first multiplier
for (let firstNumber = 1; firstNumber < 6; firstNumber++) {
  // Inner for loop for second multiplier
  for (let secondNumber = 1; secondNumber < 6; secondNumber++) {
  // Return product of first multiplier and second multiplier
  console.log(
  String(firstNumber) +
  "*" +
  String(secondNumber) +
  "=" +
  String(firstNumber * secondNumber)
  );
  }
  // Return empty string between calculations of different multipliers
  console.log("");
  }