let gameContainer = document.querySelector('.game-container')
let smallGridBtn = document.querySelector('#small-grid');
let mediumGridBtn = document.querySelector('#medium-grid');
let largeGridBtn = document.querySelector('#large-grid');

let gridCellDimensions = '55';

function createGrid(gridDimensions) {
    // const gridDimensions = 16 //16 x 16
    const totalBlocks = gridDimensions*gridDimensions
    console.log(gridDimensions)
    for (let i = 0; i < totalBlocks; i++) {
        let gridCell = document.createElement('div')
        gridCell.style.height = `${gridCellDimensions}px`
        gridCell.style.width = `${gridCellDimensions}px`
        gridCell.classList.add('grid-cell')
        gridCell.addEventListener('mouseleave', ()=> {
            if(gridCell.classList.contains('background-black')){
                gridCell.classList.remove('background-black')
            } else {
                gridCell.classList.add('background-black')
            }
        })
        gameContainer.appendChild(gridCell)
    }
}

function resetGrid() {
    gameContainer.innerHTML = '';
}

createGrid(16)

smallGridBtn.addEventListener('click', () => {
    resetGrid()
    gridCellDimensions = '55'
    createGrid(16)
})

mediumGridBtn.addEventListener('click', () => {
    resetGrid()
    gridCellDimensions = '28'
    createGrid(32)
})

largeGridBtn.addEventListener('click', () => {
    resetGrid()
    gridCellDimensions = '13'
    createGrid(64)
})