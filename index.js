const container = document.querySelector('.container')
const gridNumber = 64
const gridSize = 650 / gridNumber + 'px'

// create columns for grid

for (let i = 0; i < gridNumber; i++) {
    const div = document.createElement('div')
    div.className = 'column';
    container.appendChild(div);
    }

// create cells for grid

const columns = document.querySelectorAll('.column')

columns.forEach(column => {
    for (let i =0; i < gridNumber; i++) {
        const div = document.createElement('div')
        div.className = 'box';
        div.style.width = gridSize;
        column.appendChild(div);
    }
})

// change color of cell when hovering

let box = document.querySelectorAll('.box')

box.forEach((e) => {
    
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = 'black'
    })
})