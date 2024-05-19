
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
    const newBoard = Array.from({ length: rows + 2 }, () => Array(cols + 2).fill(0));

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

