let gameContainer = document.querySelector('.game-container')


function createGrid() {
    const gridDimensions = 16 //16 x 16
    const totalBlocks = gridDimensions*gridDimensions
    console.log(gridDimensions)
    for (let i = 0; i < totalBlocks; i++) {
        let gridCell = document.createElement('div')
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

createGrid()