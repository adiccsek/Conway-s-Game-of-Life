let boardSize = {width: window.innerWidth, height: 50};

const maxCols = 100; 
const rows = boardSize.height;
const cols = Math.min(boardSize.width, maxCols);

let board = new Array(rows + 2).fill().map(() => new Array(cols + 2).fill(0));

let padding = window.innerWidth * 0.005; 

function drawBoard() {
    const gameField = document.getElementById('gameField');
    gameField.innerHTML = '';

    const table = document.createElement('table');
    const cellSize = Math.min(window.innerWidth / cols, window.innerHeight / rows);

    for(let i = 1; i <= rows; i++) {
        const tr = document.createElement('tr');
        for(let j = 1; j <= cols; j++) {
            const td = document.createElement('td');
            td.style.width = cellSize + 'px';
            td.style.height = cellSize + 'px';
            td.style.padding = padding + 'px';
            td.style.backgroundColor = board[i][j] ? 'grey' : 'lightblue';
            tr.appendChild(td);
        }     
        table.appendChild(tr);
    }
    gameField.appendChild(table);
}

function drawCells() {
    const gameField = document.getElementById('gameField');
    const table = gameField.querySelector('table');

    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= cols; j++) {
            const td = table.rows[i - 1].cells[j - 1];
            td.style.backgroundColor = board[i][j] ? 'grey' : 'lightblue';
        }
    }
}

drawBoard();

const gameField = document.getElementById('gameField');
gameField.addEventListener('click', function(event) {
    const td = event.target;
    const row = td.parentNode.rowIndex + 1;
    const col = td.cellIndex + 1;

    board[row][col] = board[row][col] ? 0 : 1;
    td.style.backgroundColor = board[row][col] ? 'black' : 'white';
    drawCells();
});

window.onresize = function() {
    padding = window.innerWidth * 0.007; 
    const tds = document.getElementsByTagName('td');
    for(let i = 0; i < tds.length; i++) {
        tds[i].style.padding = padding + 'px';
    }
}

const table = document.getElementsByTagName('table')[0];
table.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        padding *= 1.1; 
    } else {
        padding *= 0.9; 
    }

    const tds = document.getElementsByTagName('td');
    for(let i = 0; i < tds.length; i++) {
        tds[i].style.padding = padding + 'px';
    }
    event.preventDefault();
});