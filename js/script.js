const transaction = document.getElementById("transaction");
const category = document.getElementById("category");
const date = document.getElementById("date");
const radios = document.getElementsByName("payment-type");
const amount = document.getElementById("amount");
const description = document.getElementById("description");

const expenseForm = document.getElementById("expense-form");

function handleFormSubmit(event) {
  event.preventDefault();
  const transactionValue = transaction.value;
  const categoryValue = category.value;
  const dateValue = date.value;
  let selectedPaymentType = null;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedPaymentType = radios[i].value;
      break;
    }
  }

  const amountValue = amount.value;
  const descriptionValue = description.value;

  const expense = {
    transaction: transactionValue,
    category: categoryValue,
    date: dateValue,
    paymentType: selectedPaymentType,
    amount: amountValue,
    description: descriptionValue,
  };

  console.log(expense);

  expenseForm.reset();
}

expenseForm.addEventListener("submit", handleFormSubmit);


// Get a reference to the canvas element
const pieChartCanvas = document.getElementById('pie-chart');

// Function to create and update the pie chart
function createPieChart(data) {
  // Extract labels and amounts from the expense data
  const labels = data.map(expense => expense.category);
  const amounts = data.map(expense => expense.amount);

  // Create the chart using Chart.js
  const pieChart = new Chart(pieChartCanvas, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: amounts,
        backgroundColor: ['#2CD3E1', '#FF6384', '#36A2EB', '#FFCE56'], // Customize the colors as needed
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true, // Adjust as per your layout needs
    },
  });
}

// Example expense data
const expenses2 = [
  {
    category: 'Food',
    amount: 100,
  },
  {
    category: 'Transportation',
    amount: 80,
  },
  {
    category: 'Utilities',
    amount: 75,
  },
];

// Call the createPieChart function with the expense data
createPieChart(expenses2);
