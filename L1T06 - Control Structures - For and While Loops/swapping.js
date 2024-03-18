let originalNumber = 1234
let strNumber = String(originalNumber)

firstDigit = strNumber.slice(0, 1)
console.log(firstDigit)
secondDigit = strNumber.slice(1, 2)
console.log(secondDigit)
remainingDigitsExclLast = strNumber.slice(2, -1)
console.log(remainingDigitsExclLast)
lastDigit = strNumber.slice(-1)
console.log(lastDigit)

let finalDigitsSwapped = firstDigit + lastDigit + remainingDigitsExclLast + secondDigit
console.log(finalDigitsSwapped)