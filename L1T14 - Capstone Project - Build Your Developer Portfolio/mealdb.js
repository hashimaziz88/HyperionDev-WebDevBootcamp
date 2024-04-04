const messageEl = document.getElementById("message");
const ingredientInput = document.getElementById("ingredientInput");
const orderDisplay = document.getElementById("orderDisplay");

function takeOrder() {
  const ingredient = ingredientInput.value.toLowerCase().replace(/\s+/g, "_");

  if (!ingredient) {
    messageEl.textContent = "Please enter an ingredient.";
    return;
  }

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (!data.meals) {
        messageEl.textContent = "Ingredient not found. Please try again.";
        ingredientInput.value = "";
        return;
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
      messageEl.textContent = `Your order (#${order.orderNumber}): ${order.description}`;
      ingredientInput.value = "";
      // Call displayOrders to update the list after placing an order
      displayOrders();
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function displayOrders() {
  const orders = JSON.parse(sessionStorage.getItem("orders") || "[]");

  if (orders.length === 0) {
    orderDisplay.textContent = "No incomplete orders found.";
    return;
  }

  orderDisplay.textContent = `Incomplete orders:\n`;
  orders.forEach((order) => {
    if (order.completionStatus === "incomplete") {
      orderDisplay.textContent += `#${order.orderNumber}: ${order.description}\n`;
    }
  });
}

function completeOrder() {
  const orderSelection = prompt(
    `Enter order number to complete (or 0 to skip):`
  );

  if (orderSelection === "0") {
    return;
  }

  const orders = JSON.parse(sessionStorage.getItem("orders") || "[]");
  const orderIndex = parseInt(orderSelection) - 1;
  if (orderIndex < 0 || orderIndex >= orders.length) {
    messageEl.textContent = "Invalid order number.";
    return;
  }

  orders[orderIndex].completionStatus = "completed";
  sessionStorage.setItem("orders", JSON.stringify(orders));
  messageEl.textContent = `Order #${orderSelection} marked as completed.`;
  displayOrders();
}

document.getElementById("takeOrderBtn").addEventListener("click", takeOrder);
document
  .getElementById("completeOrderBtn")
  .addEventListener("click", displayOrders); // Display orders first
document
  .getElementById("completeOrderBtn")
  .addEventListener("click", completeOrder); // Complete order after displaying
