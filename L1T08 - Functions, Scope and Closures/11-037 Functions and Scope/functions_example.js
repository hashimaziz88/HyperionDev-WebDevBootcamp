// Note: Make sure to install NodeJS first. Ignore this if you have done it already.
// PLEASE ENSURE YOU OPEN THIS FILE IN VS Code otherwise you will not be able to read it.

// *** NOTE ON COMMENTS ***
// This is a comment in JavaScript.
// Comments can be placed anywhere in JavaScript code and the computer ignores them -- they are intended to be read by humans.
// Any line with a // in front of it is a comment.
/* If you want to add a long comment that spans several lines,
then you can use a multi-line comment. As you can see, a multi-line
comment starts with a /* and ends with */
// Please read all the comments in this example file and all others.

/* NOTE: If you're running your JavaScript code in a non-browser environment (like Node.js) or using a tool like Visual Studio Code's integrated terminal, the alert() function won't work because it's meant for use in web browsers. If that is the case, comment out all the lines beginning with alert */

console.log("============ Example 1: Name and Age Program ============");
/*The JavaScript below should look familiar.
Here we declare variables called name and age and assign them values.
We then use the alert() method to display a message (using the variables). */

let name1 = "Nkosi";
let age1 = 25;
alert("Hello World! I'm " + name1 + " I am " + age1 + " years old.");
console.log("Hello World! I'm " + name1 + " I am " + age1 + " years old.");

console.log("============ Example 2: Name and Age Program ============");
/* Notice that again we declare variables called name and age.
This time we also have 2 additional variables though: yearOfBirth and thisYear.
We use a predefined method called Date().getFullYear() to get the current year. This method
gets the year from your computer's date and time settings.
Learn more about this method here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
We then calculate how old a person is by subtracting the year they were born in from the current year. */

const name2 = "Bethany";
const yearOfBirth2 = 1994;
const thisYear2 = new Date().getFullYear();
const age2 = thisYear2 - yearOfBirth2;
alert("Hello World! I'm " + name2 + " I am " + age2 + " years old.");
console.log("Hello World! I'm " + name2 + " I am " + age2 + " years old.");

console.log("============ Example 3: Name and Age Program ============");
/*Consider the code below. Here we want the same functionality as used in the previous example.
Instead of just displaying the name and age of one person though, we want to display the information for several people.
We could code this solution as shown below. If you comment out this code, you'll see that this works BUT
a good programmer would look at this and think, "This seems very inefficient! We're just writing the same code over and over again!" */

let name3 = "Bethany";
let yearOfBirth3 = 1994;
const thisYear3 = new Date().getFullYear();
let age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Timothy";
yearOfBirth3 = 2000;
age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Jack";
yearOfBirth3 = 1986;
age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Eric";
yearOfBirth3 = 1991;
age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");


console.log("============ Example 4: Name and Age Program with Functions ============");
/*One way to make our code more efficient is to use functions. As you have read in the PDF, a function is just a block of code.
If you look at the code above, we basically do two key tasks: 1)calculate the person's age and then 2) display the message. We can write the functionality in a function that could be reused. For example, we could write a function called 'calculateAge' as shown below. 
To calculate the age, our function needs to know the year in which the person was born. 
We therefore create a parameter called birthYear. */

function calculateAge(birthYear) {
  const thisYear = new Date().getFullYear();
  const age = thisYear - birthYear;
  return age;
}

/*We could also create a function called displayMessage that will be passed the name and age
of a person and display an appropriate message as shown below. */
function displayMessage(name, age) {
  alert("Hello World! I'm " + name + " I am " + age + " years old.");
  console.log("Hello World! I'm " + name + " I am " + age + " years old.");
}

/* To execute the code contained in the functions we simply call them as often as we like as shown
below. Notice how we pass different values to the function each time. */
displayMessage("Bethany", calculateAge(1994));
displayMessage("Timothy", calculateAge(2000));
displayMessage("Jack", calculateAge(1986));
displayMessage("Eric", calculateAge(1991));

/*Compare the code we have written here to the code in the comment. Do you see that both pieces of code
do the same task but using functions is more effective because we only write the logic for each task once? */


// Arrow functions - a shorter simpler way of writing functions.
console.log("============ Example 5: Arrow Functions ============");
/*Remember that you can read an arrow function in English as something like 
“let functionName take parameter1, parameter2, etc and then calculate the given expression with those parameters and return the result”.
*/
let mul = (a, b) => a * b; /* We call this an arrow function because of the => symbol. You can read this one as:
let the function called mul take 2 parameters (a and b) and calculate the expression a times b using the arguments passed to those parameters */

console.log("Multiplication arrow function result: ", mul(3, 5)); // log a string and the results of a call to the mul function to the console

/* Nested functions */
console.log("============ Example 6: Nested Functions ============");
function multiplier(x) {
  // Here inside is nested within multiplier
  function inside(y) {
    return x * y;
  }
  return inside;
}

console.log(
  "Ah, what do we have here, this is where a closure comes in: ",
  multiplier(3)
);

/* Closure */
console.log("============ Example 7: Closure ============");

const timesThree = multiplier(3); // This is called a closure
console.log("Result of closure: ", timesThree(6));

//************* END OF EXAMPLE CODE *****************
