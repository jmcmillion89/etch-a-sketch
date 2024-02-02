const color = 'black'
const changeGridNumber = document.querySelector('#gridSize')

// button function change the size of grid
changeGridNumber.addEventListener('click', function (){
    let number = prompt('Choose Grid Size Between 1-100')
    if (number >= 1 && number <= 100) {
        (gridNumber = number,
        removeGrid(),
        createGrid(number),
        changeColor())
    } else {
        alert('Grid Size Must Be Between 1-100')
    }});

// removes the grid
function removeGrid() {
    const columns = document.querySelectorAll('.column')
    columns.forEach((column) => {
        while (column.firstChild) {
            column.removeChild(column.firstChild);
            } column.parentNode.removeChild(column);
                })};

//function to create the grid
function createGrid(number) {
    const container = document.querySelector('.container')
    for (let i = 0; i < number; i++) {
        const div = document.createElement('div')
        div.className = 'column';
        container.appendChild(div);
    }

        const columns = document.querySelectorAll('.column')

        columns.forEach(column => {
            for (let i =0; i < number; i++) {
                const gridSize = 650 / number + 'px'
                const div = document.createElement('div')
                div.className = 'box';
                div.style.width = gridSize;
                column.appendChild(div);
    }})};

// change color of boxes on mouseover
function changeColor() {
    const boxes = document.querySelectorAll('.box')
        boxes.forEach((box) => {
            box.addEventListener('mouseover', () => {
            box.style.backgroundColor = color
    });
})};