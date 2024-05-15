function handleClick(e) {
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;

    const i = Math.floor(y / cellSize) + 1;
    const j = Math.floor(x / cellSize) + 1;

    board[i][j] = board[i][j] ? 0 : 1;
    drawBoard();
}


canvas.addEventListener('click', handleClick);


function countNeighbors(board, x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            count += board[x + i]?.[y + j] || 0;
        }
    }
    return count;
}

function applyRules(board) {
    const newBoard = new Array(rows + 2).fill().map(() => new Array(cols + 2).fill(0));

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const neighbors = countNeighbors(board, i, j);
            if (board[i][j] === 1) {
                
                newBoard[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
            } else {
                
                newBoard[i][j] = neighbors === 3 ? 1 : 0;
            }
        }
    }

    return newBoard;
}


function updateBoard() {
    board = applyRules(board);
    drawBoard();
}

