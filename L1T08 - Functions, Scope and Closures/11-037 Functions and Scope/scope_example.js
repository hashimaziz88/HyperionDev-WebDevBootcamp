//Note: Make sure to install NodeJS first, ignore this if you have done it already

//Global scope
let score = 100; // This is a variable declared in the global scope

function displayScore() {
  console.log(score); // This function can access the global variable
}

function increaseScore() {
  score += 100; // As you can see this function can access the global variable 'score' too
}

displayScore();
increaseScore();
displayScore();

//Function scope example
function stageTwo() {
  let levelTwoScore = 100; // This is a variable declared within the function scope
  console.log(levelTwoScore);
}
console.log(levelTwoScore); //Output: 'ReferenceError: levelTwoScore is not defined'

//Block scope
let health = 100;
if (health > 50) {
  let message = "Well done, you are getting better at this game"; // This is a variable declared within the block scope of the if statement
  console.log(message); // When you will run it you will notice it can only be accessed inside the statement and not outside the statement
}

console.log(message); // ReferenceError: message is not defined
