import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyExchanger } from '../exchanger.js';

$(document).ready(function() {
  $("#button").on("click", function() {
    let currency1 = $("#currency1").val();
    let currency2 = $("#currency2").val();
  })
})