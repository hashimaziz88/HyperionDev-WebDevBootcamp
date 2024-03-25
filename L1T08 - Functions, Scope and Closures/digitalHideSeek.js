function hide(a) {
  function seek() {
    const hideLocation = a;
    return hideLocation;
  }
  return seek;
}

const startGame = hide("under the bed");
console.log(startGame());

/* console.log(hideLocation) 
In JavaScript, variables have scope, which means they're only accessible within certain parts of your code. In your example, hideLocation is declared inside the seek function. It's a local variable scoped to the seek function, which means it's not accessible outside of that function. */
