// Prompt to enter your mother's name
let mothersName = prompt("Enter your Mother's name: ");

// Prompt to enter the name of the street you grew up on
let streetName = prompt("Enter the name of the Street you grew up on: ");

// Prompt to enter your favorite color as a child
let favouriteColour = prompt("Enter your favourite colour as a child: ");

// Prompt to enter your current age
let currentAge = prompt("Enter your current age: ");

// Prompt to enter a number between 1 and 10
let numberBetween = prompt("Enter a number between 1 and 10: ");

// Variable to store the number between 1 and 10 inputted by the user
let yearsToMeet = numberBetween;

// Variable to store a combination of mother's name and street name for the best friend's name
let bestFriendsName = `${mothersName} ${streetName}`;

// Variable to calculate the number of years until marriage based on current age and the number between 1 and 10
let yearsToMarriage = Number(currentAge) + Number(numberBetween);

// Variable to calculate the expected number of children based on current age and the number between 1 and 10
let expectedChildren = Number(currentAge) % Number(numberBetween);

// Variable to calculate the number of years until needing to dye hair based on current age and the number between 1 and 10
let yearsToDyeHair = Math.round(Number(currentAge) / Number(numberBetween));

// Variable to store the favorite color as the dye color
let dyeColour = favouriteColour;

// Template literals:
console.log(`In ${yearsToMeet} years you are going to meet your best friend ${bestFriendsName}.
You will get married in ${yearsToMarriage} years and have ${expectedChildren} children.
In ${yearsToDyeHair} years you are going to dye your hair ${dyeColour}.
`);
1
