const container = document.querySelector('.container')
const changeGridNumber = document.querySelector('#gridSize')


let boxes = document.querySelectorAll('.box')
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = 'black'
    })
})

// button function change the size of grid
changeGridNumber.addEventListener('click', function(){
    let number = prompt('Choose Grid Size Between 1-100')
    if (number >= 1 || number <= 100) {
        gridNumber = number,
        removeGrid()
        createGrid(number)
    }

})

// removes the grid
function removeGrid() {
    const columns = document.querySelectorAll('.column')
    columns.forEach((column) => {
        while (column.firstChild) {
            column.removeChild(column.firstChild);

        }
        column.parentNode.removeChild(column);
        })}

//function to create the grid
function createGrid(number) {


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
    }
})}

// change color of cell when hovering




// function createGrid(gridNumber) {
    
//     const gridSize = 650 / gridNumber + 'px'
//     const changeGridNumber = document.querySelector('#gridSize')

//     for (let i = 0; i < gridNumber; i++) {
//         const div = document.createElement('div')
//         div.className = 'column';
//         container.appendChild(div);
        
        
//         const columns = document.querySelectorAll('.column')
        
//         for (let i = 0; i < gridNumber; i++) {
//         const div = document.createElement('div')
//         div.className = 'box';
//         div.style.width = gridSize;
//         column.appendChild(div);
//             }}
// }

// create columns for grid

// for (let i = 0; i < gridNumber; i++) {
//     const div = document.createElement('div')
//     div.className = 'column';
//     container.appendChild(div);
//     }

// // create cells for grid and set size per cell

// const columns = document.querySelectorAll('.column')

// columns.forEach(column => {
//     for (let i =0; i < gridNumber; i++) {
//         const div = document.createElement('div')
//         div.className = 'box';
//         div.style.width = gridSize;
//         column.appendChild(div);
//     }
// })

