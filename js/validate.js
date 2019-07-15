'use strict';

var minPrice = {
  BUNGALO: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 1000
};

var rentSelect = window.vars.mapFilterSelect.querySelect('#type');
var priceSelect = window.vars.mapFilterSelect.querySelect('#price');

rentSelect.addEventListener('change', function () {
  priceSelect.min = minPrice[rentSelect.value.toUpperCase()];
  priceSelect.placeholder = minPrice[rentSelect.value.toUpperCase()];
});

var timeInSelect = window.vars.mapFilterSelect.querySelect('#timein');
var timeOutSelect = window.vars.mapFilterSelect.querySelect('#timeout');

timeInSelect.addEventListener('change', function () {
  timeInSelect.value = timeOutSelect.value;
});
timeOutSelect.addEventListener('change', function () {
  timeOutSelect.value = timeInSelect.value;
});
// function checkZIP() {
//   // For each country, defines the pattern that the ZIP has to follow
//   var constraints = {
//     ch : [ '^(CH-)?\\d{4}$', "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950" ],
//     fr : [ '^(F-)?\\d{5}$' , "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012" ],
//     de : [ '^(D-)?\\d{5}$' , "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345" ],
//     nl : [ '^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$',
//                     "Nederland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS" ]
//   };

//   // Read the country id
//   var country = document.getElementById("Country").value;

//   // Get the NPA field
//   var ZIPField = document.getElementById("ZIP");

//   // Build the constraint checker
//   var constraint = new RegExp(constraints[country][0], "");
//     console.log(constraint);


//   // Check it!
//   if (constraint.test(ZIPField.value)) {
//     // The ZIP follows the constraint, we use the ConstraintAPI to tell it
//     ZIPField.setCustomValidity("");
//   }
//   else {
//     // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
//     // give a message about the format required for this country
//     ZIPField.setCustomValidity(constraints[country][1]);
//   }
// }

// window.onload = function () {
//     document.getElementById("Country").onchange = checkZIP;
//     document.getElementById("ZIP").oninput = checkZIP;
// }
