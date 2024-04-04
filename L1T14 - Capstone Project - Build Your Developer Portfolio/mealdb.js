const messageEl = document.getElementById("message");
const ingredientInput = document.getElementById("ingredientInput");
const orderDisplay = document.getElementById("orderDisplay");

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

function completeOrder() {
  const orders = JSON.parse(sessionStorage.getItem("orders") || "[]");

  if (orders.length === 0) {
    messageEl.textContent = "No orders found to complete.";
    return;
  }

  // Generate the list of order numbers and descriptions
  let orderList = "";
  orders.forEach((order, index) => {
    orderList += `${index + 1}: Order #${order.orderNumber} - ${
      order.description
    }\n`;
  });

  const orderSelection = prompt(
    `Enter order number to complete (or 0 to skip):\n${orderList}`
  );

  if (orderSelection === "0") {
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
    alert("Order has already been completed.");
    return;
  }

  orders[orderIndex].completionStatus = "completed";
  sessionStorage.setItem("orders", JSON.stringify(orders));

  // Display the updated list of incomplete orders after completing an order
  displayOrders();

  messageEl.textContent = `Order #${orderSelection} marked as completed.`;
}

function displayOrders() {
  const orders = JSON.parse(sessionStorage.getItem("orders") || "[]");

  if (orders.length === 0) {
    orderDisplay.textContent = "No incomplete orders found.";
    return;
  }

  let incompleteOrdersText = "Incomplete orders:\n";
  orders.forEach((order) => {
    if (order.completionStatus === "incomplete") {
      incompleteOrdersText += `#${order.orderNumber}: ${order.description}\n`;
    }
  });

  orderDisplay.textContent = incompleteOrdersText;
}

document.getElementById("takeOrderBtn").addEventListener("click", takeOrder);
document
  .getElementById("completeOrderBtn")
  .addEventListener("click", completeOrder);
