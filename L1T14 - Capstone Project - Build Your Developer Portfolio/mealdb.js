const messageEl = document.getElementById("message");
const ingredientInput = document.getElementById("ingredientInput");
const orderDisplay = document.getElementById("orderDisplay");

// Function to take an order from a user.
function takeOrder() {
  // Prompt for ingredient
  const ingredient = prompt("Enter your main ingredient:")
    .toLowerCase()
    .replace(/\s+/g, "_");

  if (!ingredient) {
    alert("Please enter an ingredient.");
    messageEl.textContent = "Please enter an ingredient.";
    return;
  }

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (!data.meals) {
        alert("Ingredient not found. Please try again.");
        messageEl.textContent = "Ingredient not found. Please try again.";
        return takeOrder(); // Recursively call takeOrder for another ingredient
      }
      const randomMeal =
        data.meals[Math.floor(Math.random() * data.meals.length)];
      const order = {
        description: randomMeal.strMeal,
        orderNumber:
          (parseInt(sessionStorage.getItem("lastOrderNumber")) || 0) + 1,
        completionStatus: "incomplete",
      };
      sessionStorage.setItem("lastOrderNumber", order.orderNumber);
      const storedOrders = JSON.parse(sessionStorage.getItem("orders") || "[]");
      storedOrders.push(order);
      sessionStorage.setItem("orders", JSON.stringify(storedOrders));

      // Display the current order along with incomplete orders
      displayOrders();

      messageEl.textContent = `Your order (#${order.orderNumber}): ${order.description}`;
      ingredientInput.value = "";
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Function to set an order by given order number to complete.
function completeOrder() {
  const orders = JSON.parse(sessionStorage.getItem("orders") || "[]");

  if (orders.length === 0) {
    messageEl.textContent = "No orders found to complete.";
    return;
  }

  // Generate the list of order numbers and descriptions for incomplete orders
  let orderList = "";
  orders.forEach((order, index) => {
    if (order.completionStatus === "incomplete") {
      orderList += `${index + 1}: Order #${order.orderNumber} - ${
        order.description
      }\n`;
    }
  });

  const orderSelection = prompt(
    `Enter order number to complete (or press Cancel, leave response empty or enter "0" to not complete order.):\n${orderList}`
  );

  if (orderSelection === null || orderSelection.trim() === "") {
    // Cancel button pressed or empty input, do nothing
    return;
  }

  if (orderSelection === "0") {
    messageEl.textContent = "Order completion skipped.";
    return;
  }

  const orderIndex = parseInt(orderSelection) - 1;
  if (isNaN(orderIndex) || orderIndex < 0 || orderIndex >= orders.length) {
    alert("Invalid order number. Please enter a valid order number.");
    messageEl.textContent =
      "Invalid order number. Please enter a valid order number.";
    return completeOrder(); // Reprompt the user for a valid order number
  }

  if (orders[orderIndex].completionStatus === "completed") {
    alert("Order already completed.");
    messageEl.textContent = "Order already completed.";
    return completeOrder(); // Reprompt the user for a valid order number
  }

  // Mark the order as completed
  orders[orderIndex].completionStatus = "completed";
  sessionStorage.setItem("orders", JSON.stringify(orders));

  // Move completed order to completed orders list
  const completedOrder = orders.splice(orderIndex, 1)[0];
  const completedOrders = JSON.parse(
    sessionStorage.getItem("completedOrders") || "[]"
  );
  completedOrders.push(completedOrder);
  sessionStorage.setItem("completedOrders", JSON.stringify(completedOrders));

  // Display the updated list of incomplete orders after completing an order
  displayOrders();

  messageEl.textContent = `Order #${orderSelection} marked as completed.`;
}

// Function so that complete and icomplete orders can be added to a list and displayed.
function displayOrders() {
  const orders = JSON.parse(sessionStorage.getItem("orders") || "[]");
  const incompleteOrdersDisplay = document.getElementById(
    "incompleteOrdersDisplay"
  );
  const completedOrdersDisplay = document.getElementById(
    "completedOrdersDisplay"
  );

  if (orders.length === 0) {
    incompleteOrdersDisplay.innerHTML = "No incomplete orders found.";
    completedOrdersDisplay.innerHTML = "No completed orders found.";
    return;
  }

  let incompleteOrdersText = "Incomplete orders:<br>";
  let completedOrdersText = "Completed orders:<br>";
  orders.forEach((order) => {
    if (order.completionStatus === "incomplete") {
      incompleteOrdersText += `#${order.orderNumber}: ${order.description}<br>`;
    } else {
      completedOrdersText += `#${order.orderNumber}: ${order.description}<br>`;
    }
  });

  incompleteOrdersDisplay.innerHTML = incompleteOrdersText;
  completedOrdersDisplay.innerHTML = completedOrdersText;
}

document.getElementById("takeOrderBtn").addEventListener("click", takeOrder);
document
  .getElementById("completeOrderBtn")
  .addEventListener("click", completeOrder);

// Call displayOrders when the page loads
displayOrders();
