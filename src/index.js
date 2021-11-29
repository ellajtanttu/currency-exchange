import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyService from "./js/currency-service";

function clearPrevious() {
  $("#selectForm")[0].reset();
  $("#conversionResult").text("");
  $("#errorMessage").text("");
}

function showResults(returnedInfo, usdNumber, curName) {
  if (returnedInfo.conversion_rates) {
    $("#conversionResult").text(
      `${usdNumber} USD is equal to ${parseFloat(returnedInfo.conversion_rates[curName] * usdNumber).toFixed(2)} ${curName}.`
    );
  } else {
    $("#errorMessage").text(returnedInfo);
  }
}

async function showMeTheData(number, curName) {
  if (!isNaN(number) && curName !== "CLICK PROMPT") {
    const response = await CurrencyService.getConversions();
    showResults(response, number, curName);
  } else {
    $("#errorMessage").text("Please enter a number and select a currency");
  }
}

$(document).ready(function() {
  $("#userButton").click(function() {
    event.preventDefault();
    const userNumber = parseInt($("#conAmount").val());

    const currencyName = $("#toCurrency").val();

    clearPrevious();
    showMeTheData(userNumber, currencyName);
  });
});
