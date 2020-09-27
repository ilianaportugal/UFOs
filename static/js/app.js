// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build our table
function buildTable(data) {
  // Clear out any existing data
  tbody.html("");
  // Loop through each object in the data and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRowand add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
    // Append each value of the object to a cell in our table
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

// Set up date filter function
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  // Set default filter to original data table 
  let filteredData = tableData;
  
  // Check to see if a date was entered and filter the date using that table 
  if (date) {
    // Apply filter to the table data to only keep the rows where datetime matches filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

// Rebuild the table using the filtered data
// If no date was entered, then filtered data will just be the original tableData
buildTable(filteredData);
};

// Execute 'handleClick' function when button is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);