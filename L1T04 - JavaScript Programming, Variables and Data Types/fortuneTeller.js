let mothersName = prompt("Enter your Mothers name: ");
let streetName = prompt("Enter the name of the Street you grew up on: ");
let favouriteColour = prompt("Enter your favourite colour as a child: ");
let currentAge = prompt("Enter your current age: ");
let numberBetween = prompt("Enter a number between 1 and 10: ");

let yearsToMeet = numberBetween;
let bestFriendsName = `${mothersName} ${streetName}`;
let yearsToMarriage = Number(currentAge) + Number(numberBetween);
let expectedChildren = Number(currentAge) % Number(numberBetween);
let yearsToDyeHair = Math.round(Number(currentAge) / Number(numberBetween));
let dyeColour = favouriteColour;

// Template literals:
console.log(`In ${yearsToMeet} years you are going to meet your best friend ${bestFriendsName}.
You will get married in ${yearsToMarriage} years and have ${expectedChildren} children.
In ${yearsToDyeHair} years you are going to dye your hair ${dyeColour}.
`);
