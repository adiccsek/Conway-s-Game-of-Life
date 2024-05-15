const canvas = document.getElementById('gameField');
const ctx = canvas.getContext('2d');

let boardSize = {width: 400, height: 400};
canvas.width = boardSize.width;
canvas.height = boardSize.height;

let cellSize = 10;

const rows = boardSize.height / cellSize;
const cols = boardSize.width / cellSize;

// Create a 2D array to represent the game board
//Additional layer is set. This is to avoid the edge cases.
let board = new Array(rows + 2).fill().map(() => new Array(cols + 2).fill(0));

// Function to draw the board
function drawBoard() {
    // Clear the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= cols; j++) {
            ctx.fillStyle = board[i][j] ? 'black' : 'white';
            // Offset the filled rectangles slightly to cover the borders
            ctx.fillRect((j - 1) * cellSize + 0.5, (i - 1) * cellSize + 0.5, cellSize - 1, cellSize - 1);

            ctx.strokeStyle = 'white';
            ctx.strokeRect((j - 1) * cellSize, (i - 1) * cellSize, cellSize, cellSize);
        }
    }
}
drawBoard();

function centerCanvas() {
    
    const topOffset = (window.innerHeight - boardSize.height) / 2;
    const leftOffset = (window.innerWidth - boardSize.width) / 2;

    
    canvas.style.position = 'absolute';
    canvas.style.top = `${topOffset}px`;
    canvas.style.left = `${leftOffset}px`;
}

centerCanvas();


