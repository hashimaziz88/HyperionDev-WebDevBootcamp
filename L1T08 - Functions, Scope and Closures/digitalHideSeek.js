function hide(a) {
  function seek() {
    const hideLocation = a;
    return hideLocation;
  }
  return seek;
}

const startGame = hide("under the bed");
console.log(startGame());
