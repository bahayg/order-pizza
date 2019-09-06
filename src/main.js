import { Pizza } from './order-pizza';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

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
