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

function showResults(returnedInfo, number, curName) {
  if (returnedInfo.conversion_rates) {
    console.log(`second time currencyName is ${curName}`);
    console.log(`rate object at curName ${returnedInfo.conversion_rates}`);
    $("#conversionResult").text(`${number} dollars is equal to ${parseFloat(returnedInfo.conversion_rates[curName] * number).toFixed(2)} in ${curName}.`);
  } else {
    $("#errorMessage").text(returnedInfo);
  }
}

async function showMeTheData(number, curName) {
  const response = await CurrencyService.getConversions();
  showResults(response, number, curName);
}

$(document).ready(function() {
  $('#userButton').click(function() {
    event.preventDefault();
    const userNumber = $('#conAmount').val();

    const currencyName = $('#toCurrency').val();
    console.log(`currencyName is ${currencyName}`);

    clearPrevious();
    showMeTheData(userNumber, currencyName);
  });
});

/*
Next step is to add the user selection to the dom
*/