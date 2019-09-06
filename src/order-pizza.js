//Business Interface Logic
import $ from 'jquery';
export function Pizza(size, toppings, cost) {
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
