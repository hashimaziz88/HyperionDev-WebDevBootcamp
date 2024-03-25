// Define first function with a delay
function first() {
  // Use an anonymous function as a callback for the setTimeout
  setTimeout(function () {
    console.log(1); // Body of the anonymous function
  }, 5000); // Delay is 5000ms for the second argument
}
// Define a second function without a delay
function second() {
  console.log(2);
}
// Call the functions in the same order as before
first();
second();
// Output:
// 2
// 1
