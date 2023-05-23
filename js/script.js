const transaction = document.getElementById("transaction");
const category = document.getElementById("category");
const date = document.getElementById("date");
const formSubmit = document.getElementById("form-submit");
const expenseForm = document.getElementById("expense-form");



function handleFormSubmit(event) { 
    event.preventDefault();
    const transactionValue = transaction.value;

    const categoryValue = category.value;

    const dateValue = date.value;

    const radiosValue = radios.value;

    console.log(transactionValue + ' ' + categoryValue + ' ' + dateValue + ' ' + radiosValue);

    expenseForm.reset();
 }

expenseForm.addEventListener('submit', handleFormSubmit);