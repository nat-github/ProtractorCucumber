const { Before, Given, When, Then } = require('cucumber')
Given('When i visit Google page', function () {
    browser.get("https://www.google.com")
  });

Then('i should see the results', function () {
    console.log("Test success")
  });