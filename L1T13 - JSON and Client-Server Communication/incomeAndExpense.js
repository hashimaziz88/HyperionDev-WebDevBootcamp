let totalIncome = 0;
let totalExpense = 0;

// Function to create an income object
function Income(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
}

// Function to create an expense object
function Expense(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
}

// Original income objects
let income1 = new Income("Salary", 4000, true);
let income2 = new Income("Freelance Work", 1500, true);
let income3 = new Income("Investment Dividends", 200, true);
let income4 = new Income("Rental Income", 1200, true);
let income5 = new Income("Bonus", 1000, false);

// Original expense objects
let rentExpense = new Expense("Rent", 1500, true);
let groceryExpense = new Expense("Groceries", 200, true);
let entertainmentExpense = new Expense("Entertainment", 50, false);
let utilityExpense = new Expense("Utility Bill", 100, true);
let transportationExpense = new Expense("Transportation", 80, true);

// Function to add income object and update UI
function addIncome() {
  let name = prompt("Enter income name:");
  if (name === null) return; // If user cancels, stop here

  let amount = parseInt(prompt("Enter income amount:"));
  if (isNaN(amount)) return; // If user cancels or enters invalid value, stop here

  let recurring = confirm("Is this recurring income?");

  let newIncome = new Income(name, amount, recurring);

  // Update session storage with income data (convert to string first)
  sessionStorage.setItem("income", JSON.stringify([...getIncome(), newIncome]));

  updateIncomeList();
  calculateTotals();
}

// Function to add expense object and update UI
function addExpense() {
  let name = prompt("Enter expense name:");
  if (name === null) return; // If user cancels, stop here

  let amount = parseInt(prompt("Enter expense amount:"));
  if (isNaN(amount)) return; // If user cancels or enters invalid value, stop here

  let recurring = confirm("Is this a recurring expense?");

  let newExpense = new Expense(name, amount, recurring);

  // Update session storage with expense data
  sessionStorage.setItem(
    "expense",
    JSON.stringify([...getExpense(), newExpense])
  );

  updateExpenseList();
  calculateTotals();
}

// Function to retrieve income data from session storage (or empty array)
function getIncome() {
  let incomeData = sessionStorage.getItem("income");
  return incomeData
    ? JSON.parse(incomeData)
    : [income1, income2, income3, income4, income5];
}

// Function to retrieve expense data from session storage (or empty array)
function getExpense() {
  let expenseData = sessionStorage.getItem("expense");
  return expenseData
    ? JSON.parse(expenseData)
    : [
        rentExpense,
        groceryExpense,
        entertainmentExpense,
        utilityExpense,
        transportationExpense,
      ];
}

// Function to update income list in the HTML
function updateIncomeList() {
  let incomeList = document.getElementById("income-list");
  incomeList.innerHTML = ""; // Clear previous list items

  getIncome().forEach((income) => {
    let listItem = document.createElement("li");
    listItem.innerText = `${income.name}: R${income.amount} (Recurring: ${income.recurring})`;
    incomeList.appendChild(listItem);
  });
}

// Function to update expense list in the HTML
function updateExpenseList() {
  let expenseList = document.getElementById("expense-list");
  expenseList.innerHTML = "";

  getExpense().forEach((expense) => {
    let listItem = document.createElement("li");
    listItem.innerText = `${expense.name}: R${expense.amount} (Recurring: ${expense.recurring})`;
    expenseList.appendChild(listItem);
  });
}

// Function to calculate total income and expense
function calculateTotals() {
  totalIncome = getIncome().reduce((acc, income) => acc + income.amount, 0);
  totalExpense = getExpense().reduce((acc, expense) => acc + expense.amount, 0);

  document.getElementById("total-income").textContent = totalIncome;
  document.getElementById("total-expense").textContent = totalExpense;
}

// Function to calculate disposable income
function calculateDisposable() {
  let disposableIncome = totalIncome - totalExpense;
  document.getElementById("disposable-income").textContent = disposableIncome;

  let savingsAmount = parseInt(prompt("How much would you like to save?"));
  if (isNaN(savingsAmount) || savingsAmount === null) return; // If user cancels or enters invalid value, stop here

  if (savingsAmount > disposableIncome) {
    alert("Oops! You can't save more than your disposable income.");
  } else {
    disposableIncome -= savingsAmount;
    document.getElementById("disposable-income").textContent = disposableIncome;
    document.getElementById("amount-saved").textContent = savingsAmount;
    alert(`Your disposable income after saving: R${disposableIncome}`);
    alert(`R${savingsAmount} has been added to your savings!`);
  }
}

// Initial update of income and expense lists and totals
updateIncomeList();
updateExpenseList();
calculateTotals();
