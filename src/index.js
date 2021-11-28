import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-service';

function clearPrevious() {
  $("#selectForm")[0].reset();
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
    let userNumber = $('#conAmount').val();
    // let toCurType = $('#toCurrency').val();
    clearPrevious();
    showMeTheData(userNumber);
  });
});