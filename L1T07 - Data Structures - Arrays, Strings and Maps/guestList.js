let guestList = []; // Stores the guest names

function clearGuestList() {
  guestList = []; // Clear the guest list array
  displayGuestList(); // Update the displayed list
  displayInstructions(
    "Guest list cleared. Please enter a name to start a new list:"
  );
}

function displayGuestList() {
  document.getElementById("guestList").innerText = guestList.join(", "); // Display the guests in a comma-separated list
}

function addGuest() {
  let name = document.getElementById("guestInput").value.trim(); // Get and trim user input
  document.getElementById("guestInput").value = ""; // Clear input field

  if (name !== "" && guestList.length < 10) {
    guestList.push(name); // Add guest to the list
    displayGuestList(); // Update the displayed list
    displayInstructions(
      "Please enter the name of another person you would like to invite:"
    );
  } else if (name !== "" && guestList.length === 10) {
    // List is full
    // Prompt for replacement
    let replace = prompt(
      "Guest list is full (10 guests). Would you like to replace someone on the list? (yes/no):"
    ).toLowerCase();
    if (replace === "yes") {
      // Get replacement name and find its index
      let replaceName = prompt(
        "Please enter the name of the person you would like to replace:"
      )
        .trim()
        .toLowerCase();
      let index = guestList.findIndex(
        (guest) => guest.toLowerCase() === replaceName
      );

      if (index !== -1) {
        guestList[index] = name; // Replace guest
        displayGuestList(); // Update the displayed list
      } else {
        alert("Guest not found on the list.");
      }
    } else if (replace === "no") {
      alert("Guest list full. No guest added.");
    } else {
      alert("Invalid response. Please enter either 'yes' or 'no'.");
    }
  } else {
    displayInstructions("Please enter a valid guest name."); // Handle empty name or exceeded limit
  }
}

function displayInstructions(text) {
  // Updates the instructions element
  document.getElementById("instructions").innerText = text;
}

function initializeGuestList() {
  // Called when the page loads
  displayInstructions(
    "Please enter the name of a person for your dinner party:"
  );
}
