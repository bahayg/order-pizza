//Business Interface Logic
function Pizza(size, toppings, cost) {
  this.size = size,
  this.toppings = toppings,
  this.cost = cost
}

Pizza.prototype.sizeValue = function() {
  if (this.size === "large") {
    return 4;
  } else if (this.size === "medium") {
      return 2;
    } else {
        return 0;
    }
}

Pizza.prototype.toppingsValue = function() {
  var inputtedToppings = $("input:checkbox[name=toppings]:checked").length;
    return (inputtedToppings*2);
  }

Pizza.prototype.calcPrice = function() {
  return this.cost + this.sizeValue() + this.toppingsValue();
}

// User Interface Logic
$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("#size").val();
    var inputtedToppings = $("input:checkbox[name=toppings]:checked").val();

    var newPizza = new Pizza (inputtedSize, inputtedToppings, 10);

    $("#price").show();
    $("#price").text("Your pizza costs " + newPizza.calcPrice() + "$");

    $("input:checkbox").prop("checked", false);
    $('select').prop('selectedIndex', 0);

  });
});
