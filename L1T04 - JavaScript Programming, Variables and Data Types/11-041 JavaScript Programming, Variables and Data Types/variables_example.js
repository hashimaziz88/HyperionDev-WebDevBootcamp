// PLEASE ENSURE YOU OPEN THIS FILE IN VS Code otherwise you will not be able to read it.


// *** NOTE ON COMMENTS ***
// This is a comment in JavaScript. 
// Comments can be placed anywhere in JavaScript code and the computer ignores them -- they are intended to be read by humans. 
// Any line with a // in front of it is a comment.
/* If you want to add a long comment that spans several lines,
then you can use a multi-line comment. As you can see, a multi-line
comment starts with a /* and ends with */
// Please read all the comments in this example file and all others.


// ========= How to Declare Variables ===========
// When you declare a variable, you determine its name and data type.
// In JavaScript, however, you do not need to indicate the data type of the variable.
// This is because JavaScript detects the variable's data type by reading how data is assigned to the variable.
// You begin your declaration with the keyword 'let' followed by the name of your variable. 
// You use the assignment operator '=' to assign a value to a variable.


// ============ Example 1 ============
let num = 12;   // number
// the variable num is assigned the integer or whole number 12, due to the presence of digits and lack of quotation marks

let num2 = 12.42; // number
// the variable num2 is assigned the float or decimal number 12.42, due to the presence of the decimal point and lack of quotation marks


// ============ Example 2 ============
let strName = "Bob";
// the variable strName is assigned the string Bob due to the presence of quotation marks ("...")


// ============ Example 3 ============
let myWords = ["hi", "there"];
// the variable myWords is assigned the array ["hi", "there"] due to the preseence of square brackets ([...])


// ============ Example 4 ============
let myObject = {color: "blue", time: "8pm"};
// the variable myObject is assigned the object {color: "blue", time: "8pm"} due to the presence of curly brackets ({...}) and key-value pairs (key:value) separated by a comma (,).


// ============ Example 5 ============
let numberString = "10";
//Watch out! Because you defined 10 within quotation marks, JavaScript knows this is a string. It's not an integer even though we understand 10 as a number.


// ============= Type Identification =============

console.log("num is a " + typeof num + " with a value of " + num);

console.log("num2 is a " + typeof num2 + " with a value of " + num2);

console.log("strName is a " + typeof strName + " with a value of " + strName);

console.log("myObject is a " + typeof myObject + " with a value of " + myObject);

console.log("myWords is a " + typeof myWords + " with a value of " + myWords);

console.log("numberString is a " + typeof numberString + " with a value of " + numberString);


// ========= Changing a Value Held by a Variable  ===========
// If you want to change a value held by a variable, simply assign it another value. Note: You only use 'let' when actually declaring a new variable, not when merely changing a variable's value. 


// ============ Example 6 ============
let num3 = 4;
num3 = 5;
// This changes the integer value 4 held in num3 to 5


//=============== Basic maths with variables ================

let difference = num2 - num;
console.log("num2 - num = " + difference);

console.log("The area of a square with the width of " + num + " is " + num*num);

console.log("The radius of a circle with the radius of " + num + " is " + num*num*Math.PI);

console.log(num + " cubed is " + num*num*num);

console.log("The remainder when dividing " + num + " by " + num3 + " is " + num % num3);


//=============== Casting ================
// We can cast to different data types depending on what we need.


// ============ Example 6 ============

let numString4 = "4";   // Currently a string
let numString5 = "5";   // Currently a string

let num4 = Number(numString4);  // Cast to a number
let num5 = Number(numString5);  // Cast to a number
let total = num4+num5;          // Add numbers together and assign the result to a new variable called total
console.log(total);             // Output the total which is 9

let bool4 = Boolean(num4);
let bool5 = Boolean(num5);
let bool6 = Boolean(total);

console.log(bool4); // Returns true
console.log(bool5); // Returns true
console.log(bool6); // Returns true

console.log(total -9); // Returns 0 because total - 9 = 0


//=============== String Manipulation ================
// You can manipulate strings to do some pretty cool things.
// First, let's look at the index.  

let hello = "Hello!";
console.log(hello[0]);
console.log(hello[1]);
console.log(hello[2]);
console.log(hello[3]);
console.log(hello[4]);
console.log(hello[5]);

let index = hello.indexOf("e");	
console.log(index);

let length = hello.length;
console.log(`${hello} contains ${length} characters.`)


// ****************** END OF EXAMPLE CODE ********************* # 