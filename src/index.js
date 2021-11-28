import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-service';

function clearPrevious() {
  console.log("clearPrev has been reached");

  $("#conAmount").text("");
  console.log("XXXCON AMOUNT SHOULD BE CLEARED");
  $('#toCurrency').attr('value','VOID');
  console.log("XXXDROPDOWN SHOULD BE CLEARED");

  $("#conversionResult").text("");
  $("#errorMessage").text("");
}

function showResults(returnedInfo, number) {
  if (returnedInfo.conversion_rates) {
    $("#conversionResult").text(`${number} dollars is equal to ${parseFloat(returnedInfo.conversion_rates.EUR * number).toFixed(2)} Euros.`);
  } else {
    $("#errorMessage").text(returnedInfo);
  }
}

async function showMeTheData(number) {
  const response = await CurrencyService.getConversions();
  showResults(response, number);
}

$(document).ready(function() {
  $('#userButton').click(function() {
    event.preventDefault();
    console.log("submit function has been reached");
    let userNumber = $('#conAmount').val();
    // let toCurType = $('#toCurrency').val();
    console.log("variables have been set");
    clearPrevious();
    console.log("clearPrev has been reached within the docready function");
    showMeTheData(userNumber);
    console.log("showdata has been reached");
  });
});