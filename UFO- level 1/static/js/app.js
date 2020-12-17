// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);


tableData.forEach(function(ufoData) {
     var row = tbody.append("tr")
    Object.entries(ufoData).forEach(function([key,value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value)
});
});

// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form")

// Create event handlers 
button.on("click", filterData);
form.on("submit", filterData);

function filterData(){
      // Prevent the page from refreshing
    d3.event.preventDefault();
    d3.selectAll("td").remove();
    var userInput = d3.select("#datetime");
    var userData= userInput.property("value");
    tableData.forEach(function(ufoData) {
            var filteredData =   tableData.filter(ufoData => ufoData.datetime === userData);
            console.log(filteredData);
            filteredData.forEach(function(ufoData) {
            var row = tbody.append("tr")
            Object.entries(ufoData).forEach(function([key,value]) {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value)
        });
    });
    });  
}

