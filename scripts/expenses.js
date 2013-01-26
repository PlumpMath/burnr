define(['require'], function(require) {


  function Expenses() {
    this.key = 'brnr-expenses';
    this.storage = window.localStorage;
    this.expenseList = [];
    this.initialize();
  }

  Expenses.prototype.initialize = function() {

    if(this.storage.getItem(this.key) === null) {
      this.storage.setItem(this.key, JSON.stringify(this.expenseList));
    } else {
      this.expenseList = JSON.parse(this.storage.getItem(this.key));
    }

    this.render();
  }

  Expenses.prototype.add = function(data) {

    this.expenseList.push(data);
    this.render();
    this.storage.setItem(this.key, JSON.stringify(this.expenseList));

  }

  Expenses.prototype.render = function() {
    var list = document.querySelector('.expenses')
      , listContent = ''
      , _this = this;

    listContent = this.expenseList.reduce(function(acc, item) {
      return acc + _this.renderItem(item);
    }, listContent);

    list.innerHTML = listContent;
  }

  Expenses.prototype.renderItem = function(item) {
    var html = '<li><div class="expense">'
    html += '<div class="amount">' + item.amount + '</div>'
    html += '<div class="meta"><span class="label">' + item.label + '</span>';
    html += '<span class="day">' + item.day + '</span></div>';
    return html + '</div></li>';
  }

  return Expenses;

});
