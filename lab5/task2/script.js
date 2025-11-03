
const table = document.getElementById('table');
const colorPicker = document.getElementById('colorPicker');
const var_number = 7;
const rows = 6;
const cols = 6;
let cellToMonitor = null;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let counter = 1;
for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cols; j++) {
        const cell = row.insertCell();
        cell.textContent = counter;
        cell.dataset.cellNumber = counter;

        if (counter === var_number) {
            cellToMonitor = cell;
            cell.style.border = '3px solid red'; 
            cell.style.fontWeight = 'bold';
        }

        counter++;
    }
}

cellToMonitor.addEventListener('mouseover', () => {
    cellToMonitor.style.backgroundColor = getRandomColor();
}); 

cellToMonitor.addEventListener('click', () => {
    cellToMonitor.style.backgroundColor = colorPicker.value;

});

cellToMonitor.addEventListener('dblclick', () => {
    const rows = table.rows;
    const dblClickColor = colorPicker.value;

    let startingRowIndex = cellToMonitor.closest('tr').rowIndex;

    for (let i = 0; i < rows.length; i++) {
        if (i >= startingRowIndex) {
            if ((i - startingRowIndex) % 2 === 0) {
                rows[i].style.backgroundColor = dblClickColor;
            } else {
                rows[i].style.backgroundColor = '';
            }
        } else {
            rows[i].style.backgroundColor = '';
        }
    }
    
    cellToMonitor.style.backgroundColor = dblClickColor;
});
