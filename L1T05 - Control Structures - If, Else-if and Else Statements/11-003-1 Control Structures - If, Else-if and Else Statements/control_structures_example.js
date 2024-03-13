// *** NOTE ON COMMENTS ***
// This is a comment in JavaScript.
// Comments can be placed anywhere in JavaScript code and the computer ignores them -- they are intended to be read by humans.
// Any line with a // in front of it is a comment.
/* If you want to add a long comment that spans several lines,
then you can use a multi-line comment. As you can see, a multi-line
comment starts with a /* and ends with */
// Please read all the comments in this example file and all others.

// ============ If Conditional ============

// ============ Example 1 ============
console.log("Example of simple if statement:");
let time = 5;

if (time > 0) {
  let greeting = "Hello";
  console.log(greeting);
}

// ============= If, Else If, Else Conditional =============

// ============ Example 2 ============

console.log("Example of if...else if.. . else statement:");

if (time < 5) {
  console.log("Early Riser");
} else if (time === 5) {
  console.log("Still early");
} else {
  console.log("Good enough");
}
console.log();

// ============ Example 3 ============

let grade = 66;

if (grade >= 80) {
  console.log("Congratulations! You have an A");
} else if (grade >= 70) {
  console.log("Good job! You have a B");
} else if (grade >= 60) {
  console.log("Keep it up! You have a C");
} else if (grade >= 50) {
  console.log("Try a little harder next time! You have a D");
} else {
  console.log("Oh No! You have an F");
}

// Run this program to see what it outputs; then try changing the value of the grade variable and running it again.

// ============ Example 4 ============
let helloWorld = "Hello World!";
if (helloWorld.length > 6) {
  console.log("More than 6 characters!");
} else if (helloWorld.length > 3) {
  console.log("More than 3 and less than or equal to 6 characters!");
} else {
  console.log("Very short!");
}

// ============= Conditional Operators =============
// In the above code examples you must have noticed symbols like >, <, ==, and >=.
// These are what we call conditional operators. Conditional operators compare values and return either true or false.
let age1 = 25;
let age2 = 20;

// Greater than
console.log("\nage1 > age2: ", age1 > age2);
// Less than
console.log("age1 < age2: ", age1 < age2);

// Greater than or equal to
console.log("12 >= 1: ", 12 >= 1);
console.log("12 >= 12: ", 12 >= 12);
console.log("12 >= 1: ", 1 >= 12);

// Less than or equal to
console.log("12 <= 1: ", 1 <= 12);
console.log("12 <= 12: ", 12 <= 12);
console.log("1 <= 12: ", 1 <= 12);

// Equals
console.log("10 == 10: ", 10 == 10);
console.log("10 == 9: ", 10 == 9);

// Not equal to
console.log("10 != 12: ", 10 != 12);
console.log("10 != 10: ", 10 != 10);

// Checking for equalivance of value and type
// We highly recommend you play around with this one - go wild!
console.log("10 === 10: ", 10 === 10);
console.log('10 === "10": ', 10 === "10");

// ============= Logical Operators =============
// AND
console.log("true && true: ", true && true);
console.log("true && false: ", true && false);
console.log("false && true: ", false && true);
console.log("false && false: ", false && false);

// OR
console.log("true || true: ", true || true);
console.log("true || false: ", true || false);
console.log("false || true: ", false || true);
console.log("false || false: ", false || false);

// NOT
// Context: Sometimes, in programming, we need to check whether a value is false or not.
// That's where the Not (!) operator comes in handy.
let isGameOver = false;
if (!isGameOver) {
  console.log("Game is not over");
} else {
  console.log("Game over");
}

// ****************** END OF EXAMPLE CODE *********************
