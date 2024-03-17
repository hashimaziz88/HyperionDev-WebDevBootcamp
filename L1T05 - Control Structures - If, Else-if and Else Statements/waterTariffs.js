let usage = 36;
let amountOne = 0;
let amountTwo = 0;
let amountThree = 0;
let amountFour = 0;

if (usage <= 6) {
  amountOne = usage * 15.73;
} else if (usage > 6) {
  amountOne = 6 * 15.73;
}
console.log(amountOne);

if (usage <= 10.5) {
  amountTwo = (usage - 6) * 22.38;
} else if (usage >= 10.5) {
  amountTwo = (10.5 - 6) * 22.38;
}
console.log(amountTwo);

if (usage <= 35) {
  amountThree = (usage - 10.5) * 31.77;
} else if (usage > 35) {
  amountThree = (35 - 10.5) * 31.77;
}

if (usage > 35) {
  amountFour = (usage - 35) * 69.76;
}

totalTariff = amountOne + amountTwo + amountThree + amountFour

console.log(amountThree);
console.log(amountFour);

console.log(totalTariff)