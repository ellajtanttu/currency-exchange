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

// function findMultValue(curCode) {
//   return returnedInfo.conversion_rates.curCode
// }

function showResults(returnedInfo, number, currencyCode) {
  if (returnedInfo.conversion_rates) {
    // console.log(`currencyCode is ${currencyCode}`);

    // const setCode = returnedInfo.conversion_rates;

    // const testThing = setCode.currencyCode;

    // const convNumber = parseFloat(setCode).toFixed(2);
    // console.log(`convNumber is ${convNumber}`);

    $("#conversionResult").text(`${number} dollars is equal to ${parseFloat(returnedInfo.conversion_rates[0].currencyCode) * number).toFixed(2)} in ${currencyCode}.`);
  } else {
    $("#errorMessage").text(returnedInfo);
  }
}

async function showMeTheData(number, currencyCode) {
  const response = await CurrencyService.getConversions();
  showResults(response, number, currencyCode);
}

$(document).ready(function() {
  $('#userButton').click(function() {
    event.preventDefault();
    const userNumber = $('#conAmount').val();
    const toCurType = $('#toCurrency').val();
    clearPrevious();
    showMeTheData(userNumber,toCurType);
  });
});

/*
Next step is to add the user selection to the dom
*/