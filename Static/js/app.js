// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
    tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // Append a row to the table body
        let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

// Keep Track of all filters
var filters = {};
function updateFilters() {
    let date = d3.select("#datetime").property("value");
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filters.datetime = datetime}
    else {
          // Delete a key-value pair
        delete filters.datetime; 
    };

    let city = d3.select("#city").property("value");
  // Check to see if a date was entered and filter the
    // data using that date.
    if (city) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filters.city = city}
    else {
          // Delete a key-value pair
        delete filters.city; 
    };

    let state = d3.select("#state").property("value");
      // Check to see if a date was entered and filter the
        // data using that date.
    if (state) {
            // Apply `filter` to the table data to only keep the
            // rows where the `datetime` value matches the filter value
        filters.state = state}
    else {
              // Delete a key-value pair
        delete filters.state; 
    };
    
    let country = d3.select("#country").property("value");
  // Check to see if a date was entered and filter the
    // data using that date.
    if (country) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filters.country = country}
    else {
          // Delete a key-value pair
        delete filters.country; 
    };
    
    let shape = d3.select("#shape").property("value");
  // Check to see if a date was entered and filter the
    // data using that date.
    if (shape) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filters.shape = shape}
    else {
        // Delete a key-value pair
        delete filters.shape; 
    };
    filterTable();
};

function filterTable() {

  // Set the filteredData to the tableData
    let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches the filter values
    Object.entries(filters).forEach(([key, value])  =>{
        filteredData = filteredData.filter(row => row[key] === value);
    });

  // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
};

// Attach an event to listen for changes to each filter
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);
