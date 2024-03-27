// Constructor function for creating shoe objects
function shoes(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

// Array to store shoe objects
let shoesArray = [];

// Adding shoe objects to the shoesArray
shoesArray.push(new shoes("Nike", "NAM001", 50, 120));
shoesArray.push(new shoes("Adidas", "AUB002", 30, 150));
shoesArray.push(new shoes("Reebok", "REC003", 40, 90));
shoesArray.push(new shoes("Puma", "PRS004", 20, 110));
shoesArray.push(new shoes("New Balance", "NBN005", 25, 130));

// Function to search for a shoe by its name
function searchShoe(shoeName) {
  for (let i = 0; i < shoesArray.length; i++) {
    if (shoesArray[i].name.toLowerCase === shoeName.toLowerCase) {
      return `We have the ${shoeName} shoe you are looking for.`;
    }
  }
  return `Sorry, we don't have the ${shoeName} shoe in our inventory.`;
}

// Function to find the shoe with the lowest value per item
function findShoeWithLowestValue(shoesArray) {
  // Using reduce to find the shoe with the lowest value per item
  let lowestValueShoe = shoesArray.reduce((lowest, current) => {
    return current.valuePerItem < lowest.valuePerItem ? current : lowest;
  });
  console.log("Shoe with the lowest value per item:");
  console.table([lowestValueShoe]);
  return lowestValueShoe;
}

// Function to find the shoe with the highest value per item
function findShoeWithHighestValue(shoesArray) {
  // Using reduce to find the shoe with the highest value per item
  let highestValueShoe = shoesArray.reduce((highest, current) => {
    return current.valuePerItem > highest.valuePerItem ? current : highest;
  });
  console.log("Shoe with the highest value per item:");
  console.table([highestValueShoe]);
  return highestValueShoe;
}

// Function to edit a shoe in the shoesArray
function editShoe(
  shoesArray,
  shoeName,
  newName,
  newProductCode,
  newQuantity,
  newValuePerItem
) {
  // Find the shoe to edit by its name
  let foundShoe = shoesArray.find((shoe) => shoe.name === shoeName);
  if (foundShoe) {
    // Update the properties of the found shoe
    foundShoe.name = newName;
    foundShoe.productCode = newProductCode;
    foundShoe.quantity = newQuantity;
    foundShoe.valuePerItem = newValuePerItem;
    console.log(`The ${shoeName} shoe has been edited:`);
    console.table([foundShoe]);
    console.log("Updated array:");
    console.table(shoesArray); // Display the updated array
  } else {
    console.log(`Sorry, the ${shoeName} shoe was not found in the inventory.`);
  }
}

// Function to order all of the objects in ascending order based on the "Value per item" property
function orderByValuePerItemAscending(shoesArray) {
  // Create a copy of the original array and sort it
  let orderedShoes = shoesArray
    .slice()
    .sort((a, b) => a.valuePerItem - b.valuePerItem);
  console.log("Ordered shoes by value per item (ascending):");
  console.table(orderedShoes);
  return orderedShoes;
}

// Example usage
findShoeWithLowestValue(shoesArray);
findShoeWithHighestValue(shoesArray);
editShoe(shoesArray, "Nike", "EditedName", "EDT001", 10, 200);
orderByValuePerItemAscending(shoesArray);
