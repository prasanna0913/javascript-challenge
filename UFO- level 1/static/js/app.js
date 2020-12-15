// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// Step 1: Loop Through `data` and console.log each ufo data object
data.forEach(function(ufoData) {
  console.log(ufoData);
});

