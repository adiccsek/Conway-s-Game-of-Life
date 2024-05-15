function handleClick(e) {
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;

    const i = Math.floor(y / cellSize) + 1;
    const j = Math.floor(x / cellSize) + 1;

    board[i][j] = board[i][j] ? 0 : 1;
    drawBoard();
}


canvas.addEventListener('click', handleClick);
