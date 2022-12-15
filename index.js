//Grid Buttons
let gameContainer = document.querySelector('.game-container')
let smallGridBtn = document.querySelector('#small-grid');
let mediumGridBtn = document.querySelector('#medium-grid');
let largeGridBtn = document.querySelector('#large-grid');
//Color Buttons
let singleColorBtn = document.querySelector('#single');
let greyScaleBtn = document.querySelector('#greyscale');
let rainbowBtn = document.querySelector('#rainbow');
let eraserBtn = document.querySelector('#eraser');
let colorPicker = document.querySelector('.color-picker')
//Initial Values
let gridCellDimensions = '55';
let selectedColor = '#000'
let colorMode = 'single'
let startingOpacity = 0.2

function createGrid(gridDimensions) {
    // const gridDimensions = 16 //16 x 16
    const totalBlocks = gridDimensions * gridDimensions;
    for (let i = 0; i < totalBlocks; i++) {
        let gridCell = document.createElement('div');
        gridCell.style.height = `${gridCellDimensions}px`;
        gridCell.style.width = `${gridCellDimensions}px`;
        gridCell.classList.add('grid-cell');
        gridCell.addEventListener('mouseleave', (e) => {
            switch (colorMode) {
                case 'single':
                    // if(gridCell.style.backgroundColor == '' || gridCell.style.backgroundColor !== selectedColor){
                    //     gridCell.style.backgroundColor = selectedColor
                    // } else {
                    //     gridCell.style.backgroundColor === '#fff'
                    // }
                    gridCell.style.backgroundColor = selectedColor
                    break;
                case 'greyscale':
                    if (startingOpacity <= 0.9) {
                        startingOpacity = startingOpacity + 0.10;
                        e.target.style.backgroundColor = `rgba(0, 0, 0, ${startingOpacity})`;
                    } else {
                        startingOpacity = .20;
                        e.target.style.backgroundColor = `rgba(0, 0, 0, ${startingOpacity})`;
                    }

                    break;
                case 'rainbow':
                    gridCell.style.backgroundColor = random_rgba();
                    break;
                case 'eraser':
                    if (gridCell.style.backgroundColor !== '#fff') {
                        gridCell.style.backgroundColor = '#fff';
                    }
                    break;

                default:
                    console.error('not a valid option')
                    break;
            }
        })
        gameContainer.appendChild(gridCell);
    }
}

function resetGrid() {
    gameContainer.innerHTML = '';
}

function random_rgba() {
    //Cool pastel colors
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    // return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

//Default Grid
createGrid(16);


//Event Listeners
smallGridBtn.addEventListener('click', () => {
    resetGrid();
    gridCellDimensions = '55';
    createGrid(16);
});

mediumGridBtn.addEventListener('click', () => {
    resetGrid();
    gridCellDimensions = '28';
    createGrid(32);
})

largeGridBtn.addEventListener('click', () => {
    resetGrid();
    gridCellDimensions = '13';
    createGrid(64);
});

colorPicker.addEventListener('change', () => {
    selectedColor = colorPicker.value;
    colorMode = 'single';
});

singleColorBtn.addEventListener('click', () => {
    selectedColor = colorPicker.value;
    colorMode = 'single';
});

greyScaleBtn.addEventListener('click', () => {
    colorMode = 'greyscale';
});

rainbowBtn.addEventListener('click', () => {
    colorMode = 'rainbow';
});

eraserBtn.addEventListener('click', () => {
    colorMode = 'eraser';
});