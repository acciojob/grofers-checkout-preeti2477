// 1. Saare prices uthao
let priceCells = document.querySelectorAll(".prices");

let total = 0;
priceCells.forEach(cell => {
  total += parseFloat(cell.textContent);
});

// 2. Nayi row banao
let table = document.querySelector("table");
let newRow = document.createElement("tr");

// 3. Single cell banao jo total dikhayega
let totalCell = document.createElement("td");
totalCell.textContent = "Total: " + total;
// Agar table me 2 columns hain to cell ko poori row me faila do
totalCell.colSpan = 2;

newRow.appendChild(totalCell);
table.appendChild(newRow);