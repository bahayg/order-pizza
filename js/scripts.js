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
  var inputtedToppings = $("input:checkbox[name=toppings]:checked").val();
    alert($("inputtedToppings").length);
  }

Pizza.prototype.calcPrice = function () {
  return this.sizePrice() + this.toppingsPrice();
}

// User Interface Logic
$(document).ready(function() {
  $("#cost").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input:checkbox[name=size]:checked").val();
    var inputtedToppings = $("input:checkbox[name=toppings]:checked").val();

    var newPizza = new Pizza (inputtedSize, inputtedToppings, calcPrice());
    //console.log(newTicket.calcPrice());

    $("#cost").show();
    $("#cost").text("Your pizza costs " + newPizza.calcPrice());

    $("input:checkbox").prop("checked", false);

  });
});

//   count = 0;
//    for (var i=0; i<=inputtedToppings.length; i++) {
//     return [i];
//    }
//
//   return ("input#toppings".length)*2;
// }

//   $("input:checkbox[name=toppings]:checked").each(function(){
//         var inputtedToppings = $("input:checkbox[name=toppings]:checked").val();
//         $("#work-responses").append(workTransitInputs + "<br>");
//         });


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
