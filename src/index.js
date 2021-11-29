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

function showResults(returnedInfo, usdNumber, curName) {
  if (returnedInfo.conversion_rates) {
    $("#conversionResult").text(`${usdNumber} USD is equal to ${parseFloat(returnedInfo.conversion_rates[curName] * usdNumber).toFixed(2)} ${curName}.`);
  } else {
    $("#errorMessage").text(returnedInfo);
  }
}

// function showResults(returnedInfo, usdNumber, curName) {
//   console.log(returnedInfo);
//   console.log(returnedInfo.result);
//   console.log(returnedInfo.conversion_rates);
//   console.log(typeof usdNumber);
//   console.log(curName);
//   if (typeof usdNumber !== Number) {
//     console.log("not a number er er er");
//   } else if (returnedInfo.conversion_rates["USD"] === 1) {
//     $("#conversionResult").text(`${usdNumber} USD is equal to ${parseFloat(returnedInfo.conversion_rates[curName] * usdNumber).toFixed(2)} ${curName}.`);
//   } else {
//     $("#errorMessage").text(returnedInfo);
//   }
// }

// function showResults(returnedInfo, usdNumber, curName) {
//   if (returnedInfo.conversion_rates) {
//     console.log(typeof usdNumber);
//     console.log(typeof (returnedInfo.conversion_rates[curName]));
//     if ((typeof (returnedInfo.conversion_rates[curName]) === Number) && (typeof usdNumber === Number)) {
//       $("#conversionResult").text(`${usdNumber} USD is equal to ${parseFloat(returnedInfo.conversion_rates[curName] * usdNumber).toFixed(2)} ${curName}.`);
//     } else /* if (typeof usdNumber !== Number) */ {
//       console.log("catch all");
//     }
//   } else {
//     $("#errorMessage").text(returnedInfo);
//   }
// }


async function showMeTheData(number, curName) {
  console.log(typeof number);
  if ((!isNaN(number)) && (curName !== "CLICK PROMPT")){
    const response = await CurrencyService.getConversions();
    showResults(response, number, curName);
  } else {
    $("#errorMessage").text("Please enter a number and select a currency");
  }
}

$(document).ready(function() {
  $('#userButton').click(function() {
    event.preventDefault();
    const userNumber = parseInt($('#conAmount').val());

    const currencyName = $('#toCurrency').val();

    clearPrevious();
    showMeTheData(userNumber, currencyName);
  });
});

/*
Next step is to add the user selection to the dom
*/