const transaction = document.getElementById("transaction");
const category = document.getElementById("category");
const date = document.getElementById("date");
const radios = document.getElementsByName("payment-type");
const amount = document.getElementById("amount");
const description = document.getElementById("description");

const expenseForm = document.getElementById("expense-form");

let expenses = [];

function handleFormSubmit(event) {
  event.preventDefault();

  const categoryValue = category.value;
  const amountValue = amount.value;
  const transactionValue = transaction.value;

  // Check if an expense with the same category already exists
  const existingExpenseIndex = expenses.findIndex(
    (expense) => expense.category === categoryValue
  );

  if (existingExpenseIndex !== -1) {
    // If an expense with the same category exists, update the amount
    expenses[existingExpenseIndex].amount = amountValue;
  } else {
    // Otherwise, create a new expense object
    const expense = {
      category: categoryValue,
      transaction: transactionValue,
      amount: amountValue,
    };

    expenses.push(expense);
  }

  createPieChart(expenses);

  expenseForm.reset();
}

expenseForm.addEventListener("submit", handleFormSubmit);

const pieChartCanvas = document.getElementById("pie-chart");

function createPieChart(data) {
  const labels = data.map((expense) => expense.category);
  const amounts = data.map((expense) => expense.amount);
  const transactions = data.map((expense) => expense.transaction);

  // Destroy the previous chart if it exists
  if (pieChartCanvas.chart) {
    pieChartCanvas.chart.destroy();
  }

  const pieChart = new Chart(pieChartCanvas, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          data: amounts,
          backgroundColor: ["#2CD3E1", "#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
    },
  });

  pieChartCanvas.chart = pieChart; // Store the chart instance in the canvas object
}
