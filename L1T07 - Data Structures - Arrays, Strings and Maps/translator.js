// Same translator map as before
const translatorMap = new Map([
  ["hello", "hola"],
  ["goodbye", "adiós"],
  ["thanks", "gracias"],
  ["please", "por favor"],
  ["water", "agua"],
  ["food", "comida"],
  ["house", "casa"],
  ["dog", "perro"],
  ["cat", "gato"],
  ["book", "libro"],
]);
// Get references to HTML elements
const englishWordsDiv = document.getElementById("englishWords");
const userWordInput = document.getElementById("userWord");
const translateButton = document.getElementById("translateButton");
const translationOutput = document.getElementById("translationOutput");

// Function to populate English words list with a list style
function populateEnglishWords() {
  const englishWordList = document.createElement("ul"); // Create an ordered list
  for (const englishWord of translatorMap.keys()) {
    const listItem = document.createElement("li");
    listItem.textContent = englishWord;
    englishWordList.appendChild(listItem);
  }
  englishWordsDiv.appendChild(englishWordList);
}

// Function to handle translation
function translateWord() {
  const userWord = userWordInput.value.toLowerCase();

  if (translatorMap.has(userWord)) {
    const translatedWord = translatorMap.get(userWord);
    translationOutput.textContent = `Translation: The English word ${userWord} is ${translatedWord}  in Spanish`;
  } else {
    translationOutput.textContent = `"${userWord}" not found in the translator.`;
  }

  // Clear the input field after translation
  userWordInput.value = "";
}

// Call populateEnglishWords on page load
populateEnglishWords();

// Add event listener to the translate button
translateButton.addEventListener("click", translateWord);
