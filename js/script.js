const transaction = document.getElementById("transaction");
const category = document.getElementById("category");
const date = document.getElementById("date");
const radios = document.getElementsByName("payment-type");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const expenseForm = document.getElementById("expense-form");

const expenseField = document.getElementById("expense-field");

let expenses = [];

function handleFormSubmit(event) {
  event.preventDefault();

  const categoryValue = category.value;
  const amountValue = amount.value;
  const transactionValue = transaction.value;
  const dateValue = date.value;

  const existingExpenseIndex = expenses.findIndex(
    (expense) => expense.category === categoryValue
  );

  if (existingExpenseIndex !== -1) {
    expenses[existingExpenseIndex].amount = amountValue;
  } else {
    const expense = {
      category: categoryValue,
      transaction: transactionValue,
      amount: amountValue,
    };
    expenses.push(expense);
  }

  const expenseDiv = document.createElement("div");
  const removeButton = document.createElement("button");
  
  removeButton.textContent = "Remove Expense";
  removeButton.addEventListener("click", () => {
    removeExpense(expenseDiv, categoryValue);
  });
  expenseDiv.textContent =
    transactionValue +
    ", " +
    "spent on:" +
    " " +
    categoryValue +
    " " +
    ", on date: " +
    dateValue +
    " " +
    ", amount: " +
    amountValue;
  expenseDiv.appendChild(removeButton);
  expenseField.appendChild(expenseDiv);

  createPieChart(expenses);
  //validateForm();


  expenseForm.reset();
}

expenseForm.addEventListener("submit", handleFormSubmit);

//function to remove expense on click of remove button
function removeExpense(expenseDiv, categoryValue) {
  expenseDiv.remove();
  const expenseIndex = expenses.findIndex(
    (expense) => expense.category === categoryValue
  );
  if (expenseIndex !== -1) {
    expenses.splice(expenseIndex, 1);
  }
  createPieChart(expenses);
}




const pieChartCanvas = document.getElementById("pie-chart");

function createPieChart(data) {
  const labels = data.map((expense) => expense.category);
  const amounts = data.map((expense) => expense.amount);

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

  pieChartCanvas.chart = pieChart;
}
