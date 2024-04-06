const messageEl = document.getElementById("message");
const ingredientInput = document.getElementById("ingredientInput");
const orderDisplay = document.getElementById("orderDisplay");

// Function to display orders
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
    const orderText = `Order Number #${order.orderNumber}: ${order.description}<br>`;
    if (order.completionStatus === "incomplete") {
      incompleteOrdersText += orderText;
    } else {
      completedOrdersText += orderText;
    }
  });

  incompleteOrdersDisplay.innerHTML = incompleteOrdersText;
  completedOrdersDisplay.innerHTML = completedOrdersText;
}

// Function to fetch a random meal based on ingredient
async function fetchRandomMeal(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.meals
    ? data.meals[Math.floor(Math.random() * data.meals.length)]
    : null;
}

// Function to take an order from a user
async function takeOrder() {
  const ingredient = prompt("Enter your main ingredient:")
    .toLowerCase()
    .replace(/\s+/g, "_");

  if (!ingredient) {
    alert("Please enter an ingredient.");
    messageEl.textContent = "Please enter an ingredient.";
    return;
  }

  const randomMeal = await fetchRandomMeal(ingredient);

  if (!randomMeal) {
    alert("Ingredient not found. Please try again.");
    messageEl.textContent = "Ingredient not found. Please try again.";
    return takeOrder();
  }

  const order = {
    description: randomMeal.strMeal,
    orderNumber: (parseInt(sessionStorage.getItem("lastOrderNumber")) || 0) + 1,
    completionStatus: "incomplete",
  };

  sessionStorage.setItem("lastOrderNumber", order.orderNumber);

  const storedOrders = JSON.parse(sessionStorage.getItem("orders") || "[]");
  storedOrders.push(order);
  sessionStorage.setItem("orders", JSON.stringify(storedOrders));

  displayOrders();
  messageEl.textContent = `Your order (#${order.orderNumber}): ${order.description}`;
  ingredientInput.value = "";
}

// Function to mark an order as complete
function completeOrder() {
  const orders = JSON.parse(sessionStorage.getItem("orders") || "[]");

  if (orders.length === 0) {
    messageEl.textContent = "No orders found to complete.";
    return;
  }

  let orderList = "Enter order number to complete:\n";

  orders.forEach((order, index) => {
    if (order.completionStatus === "incomplete") {
      orderList += `${index + 1}: Order #${order.orderNumber} - ${
        order.description
      }\n`;
    }
  });

  const orderSelection = prompt(orderList + "Or type '0' to exit:");

  if (orderSelection === null) {
    return;
  }

  if (orderSelection.trim() === "0") {
    messageEl.textContent = "Order completion skipped.";
    return;
  }

  const orderIndex = parseInt(orderSelection) - 1;

  if (isNaN(orderIndex) || orderIndex < 0 || orderIndex >= orders.length) {
    alert("Invalid order number. Please enter a valid order number.");
    return completeOrder();
  }

  if (orders[orderIndex].completionStatus === "completed") {
    alert("Order already completed.");
    return completeOrder();
  }

  orders[orderIndex].completionStatus = "completed";
  sessionStorage.setItem("orders", JSON.stringify(orders));

  const completedOrder = orders.splice(orderIndex, 1)[0];
  const completedOrders = JSON.parse(
    sessionStorage.getItem("completedOrders") || "[]"
  );
  completedOrders.push(completedOrder);
  sessionStorage.setItem("completedOrders", JSON.stringify(completedOrders));

  displayOrders();
  messageEl.textContent = `Order #${orderSelection} marked as completed.`;
}

document.getElementById("takeOrderBtn").addEventListener("click", takeOrder);
document
  .getElementById("completeOrderBtn")
  .addEventListener("click", completeOrder);

// Call displayOrders when the page loads
displayOrders();
