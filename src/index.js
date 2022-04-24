import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyExchanger } from '../src/exchanger.js';


function getElements(response,currency1, currency2, amount) {
  console.log(amount);
  if (amount === ""){
  $("#output").text("please input a number")
  }else if (currency1 === "") {
    $("#output").text("please input a starting currency");
  }else if (response.result) {
    $("#output").text(`The exchange rate for ${currency1} to ${currency2} is ${response.conversion_rates[currency2]*amount}`);
  }else{
    $("#output").text(`there was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $("#button").on("click", function() {
    let currency1 = $("#currency1").val();
    let currency2 = $("#currency2").val();
    let amount = $("#amount").val();

    CurrencyExchanger.amount(currency1, currency2, amount)
      .then(function(response) {
        getElements(response, currency1, currency2, amount);
      });
  });
});