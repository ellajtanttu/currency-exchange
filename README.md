# Currency Converter

#### Friday Independent Project: convert user-specified number of USD to another world currency.
---
#### By: _**Ella Tanttu**_

## Technologies Used

- CSS3
- HTML5
- Bootstrap
- JAVAscript
- eslint
- Jest
- JQuery
- Node & NPM
- popper.js
- webpack

## Description

A web application which pulls data from exchangerate-api.com to convert current currency rates. User enters a number of US dollars, and selects a currency option from a select box. On submit, the application will make an api call and return the current conversion value for the specified amount of USD. 

## Setup & Installation Instructions

1. Download or clone github repository to local machine in desired directory - https://github.com/ellajtanttu/currency-exchange
2. If downloaded, extract .zip contents to desired directory
3. Navigate to and open directory with Visual Studio Code
4. Open terminal and install required packages by typing "npm install"
5. create an .env file in the root directory with terminal command '$ touch .env'
6. got to ExchangeRate-API website and create an account and follow the instructions to create your own API key. Add this key to your .env file in the following format: 'API_KEY=yourKeyHere' (replace yourKeyHere with your personal key).
7. Save your .env file.
10. Run the environment in your default web browser by typing "npm run start" in the terminal

## Known Bugs

No known issues

## License

_MIT Copyright (c) 2021 Ella Tanttu_
_https://opensource.org/licenses/MIT_

## Contact Information

_Ella Tanttu ellajtanttu@gmail.com_

---


# Whiteboarding

## Prompt
>* A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. In the example above, a user might enter 10 dollars and then see that amount in South Korean won.
>* Users should be able to convert U.S. currency into at least 5 other types of currency.
>* If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)
>* If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)

## Analysis & Brainstorm
### **Order of events**
1. **UI** - user enters a number, selects a currency, clicks submit
2. **UI** - value of number entered and selected currency are converted to variables
3. **UI** - clear fields
4. **UI** - apiCall function is declared
      - **BL** - response variable is set in an await function, holding json object. (or error response), promise, try/catch, fetch
5. **UI** - json is parsed and requested values are added to the dom

### **files I'll need**
- [X] index.js\
      - import statements - sync\
      - clear fields - sync (called in async)\
      - add elements to dom function - sync (called in async)\
      - triggerAPIcall function - _**async**_\
      - documentready/click function - sync
- [X] index.html\
      - intro
      - form for user
      - conversion response
      - error
- [X] apicall service.js\
      - async, static, default class, fetch (with a catch throw)

start with one language, add four others OR create a loop to add all languages as an option in dropdown (depending on time left)

### **other further exploration**
- add the option to convert to and from all currencies
- cache the api response
