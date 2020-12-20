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
//   removing the exsisting rows
  d3.selectAll("td").remove();
  
    var datetimeField = d3.select("#datetime");
    var cityField = d3.select("#city");
    var stateField = d3.select("#state");
    var countryField = d3.select("#country");
    var shapeField = d3.select("#shape");
    


    var userEnteredDate= datetimeField.property("value");
    var userEnteredCity= cityField.property("value");
    var userEnteredState= stateField.property("value");
    var userEnteredCountry= countryField.property("value");
    var userEnteredShape= shapeField.property("value");

    console.log(userEnteredDate);

        var filteredData = tableData;
        if (userEnteredDate) { 
          filteredData = filteredData.filter(ufoData => (ufoData.datetime === userEnteredDate));
        }
        
        if (userEnteredCity) { 
          filteredData = filteredData.filter(ufoData => (ufoData.city === userEnteredCity));
        }
        if (userEnteredState) { 
          filteredData = filteredData.filter(ufoData => (ufoData.state === userEnteredState));
        }
        if (userEnteredCountry) { 
          filteredData = filteredData.filter(ufoData => (ufoData.country === userEnteredCountry));
        }
        if (userEnteredShape) { 
          filteredData = filteredData.filter(ufoData => (ufoData.shape === userEnteredShape));
        }

              
        console.log(filteredData);

        filteredData.forEach(function(ufoData) {
            var row = tbody.append("tr")
            Object.entries(ufoData).forEach(function([key,value]) {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value)
        });
    });
    

}