require(['creator', 'expenses'], function(Creator, Expenses) {

  var expenseCreator = new Creator;
  var expenses = new Expenses;
  window.expenses = expenses;

  expenseCreator.onCreation(function(expenseDetails) {
    expenses.add(expenseDetails);
  });





});
