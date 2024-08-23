function insert_Row() {
    // Get the table element by ID
    var table = document.getElementById("sampleTable");

    // Insert a new row at the top of the table (index 0)
    var newRow = table.insertRow(0);

    // Insert a new cell in the first column of the new row
    var newCell1 = newRow.insertCell(0);
    // Insert a new cell in the second column of the new row
    var newCell2 = newRow.insertCell(1);

    // Set the text content of the new cells
    newCell1.textContent = "New Cell1";
    newCell2.textContent = "New Cell2";
}
