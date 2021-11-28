# Currency Converter

#### Friday Independent Project: convert user-specified number of USD to another world currency.
---
#### By: _**Ella Tanttu**_

## Technologies Used

- CSS3
- HTML5
- JAVAscript
- eslint
- Jest
- Node & NPM
- popper.js
- webpack

## Description

_UPDATE UPON COMPLETION_

## View Live Application on GH-Pages
_UPDATE UPON COMPLETION_

## Setup & Installation Instructions

_UPDATE UPON COMPLETION_
1. Download or clone github repository to local machine in desired directory - https://github.com/url-path
2. If downloaded, extract .zip contents to desired directory
3. Navigate to and open directory with Visual Studio Code
4. Open terminal and install required packages by typing "npm install"
5. Test code in terminal by typing "npm test"
6. Build the display environment in the terminal by typing "npm run build"
7. Run the environment in your default web browser by typing "npm run start" in the terminal

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
- index.js\
      - import statements - sync\
      - clear fields - sync (called in async)\
      - math conversion logic - sync\
      - add elements to dom function - sync (called in async)\
      - triggerAPIcall function - _**async**_\
      - documentready/click function - sync
- index.html\
      - intro
      - form for user
      - conversion response
      - error
- apicall service.js\
      - async, static, default class, fetch (with a catch throw)

start with one language, add four others OR create a loop to add all languages as an option in dropdown (depending on time left)

### **other further exploration**
- add the option to convert to and from all currencies
- cache the api response
