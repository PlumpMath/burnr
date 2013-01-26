// @TODO add form validation
define(function(require) {

  var each = Array.prototype.forEach;
  var map = Array.prototype.map;

  function Creator() {
    var form = document.querySelector('#add-payment');
    form.addEventListener('submit', this.onSubmit.bind(this), false);
    this.form = form;
    this.setFocus();
  }

  Creator.prototype.onSubmit = function(e) {
    var form = e.target
      , fields = form.querySelectorAll('input[type=text]')
      , values = {};

    each.call(fields, function(f) {
      values[f.name] = f.value;
    });

    this.handleCreation(values);

    form.reset();
    this.setFocus();

    e.preventDefault();
  }

  Creator.prototype.onCreation = function(fn) {
    this.handleCreation = fn;
  };

  Creator.prototype.setFocus = function() {
    this.form.querySelector('input:first-child').focus();
  }

  return Creator;

});

