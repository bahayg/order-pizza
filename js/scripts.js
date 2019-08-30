//Business Interface Logic
function Pizza(size, toppings, cost) {
  this.size = size,
  this.toppings = toppings,
  this.cost = cost
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "small") {
    return 10.99;
  } else if (this.size === "medium") {
      return 12.99;
    } else {
        return 14.99;
    }
}

Pizza.prototype.toppingsPrice = function() {
  return ("input#toppings".length)*2



  $("input:checkbox[name=toppings]:checked").each(function(){
        var inputtedToppings = $("input:checkbox[name=toppings]:checked").val();
        $("#work-responses").append(workTransitInputs + "<br>");
        });

  var new
  if
}

Pizza.prototype.calcPrice = function() {

}


// var isCheckedWithGlobalVariable = false;
// var elements = document.querySelectorAll('input[type=checkbox]');
// for (var i = 0; i < elements.lenght; i++) {
//     elements[i].onclick = function() {
//         if (this.checked == true) {
//             // checked
//             isCheckedWithGlobalVariable = true;
//         }
//     };
// }
//User Interface Logic
