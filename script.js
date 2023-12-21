const container = document.querySelector('.container')
const gridSizeButton = document.querySelector('#grid-size')

// Default grid size
let gridSize = 16;

createGrid(gridSize)

function getGridSize() {
    gridSize = prompt('Enter number of squares:')

    if (gridSize === null) {
        return
    }

    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    clearContainer()
    createGrid(gridSize)
}

function clearContainer() {
    container.innerHTML = ''
}

function createGrid(gridSize) {
    for (let y = 0; y < gridSize; y++) {
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)

        for (let x = 0; x < gridSize; x++) {
            const square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)

            square.addEventListener('mouseenter', () => paintSquare(square))
        }
    }
}

function paintSquare(square) {
    square.classList.add('color')
}

gridSizeButton.addEventListener('click', getGridSize)

