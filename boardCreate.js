let boardSize = {width: window.innerWidth, height: 50};

const rows = boardSize.height;
const cols = boardSize.width;

let board = new Array(rows + 2).fill().map(() => new Array(cols + 2).fill(0));


function drawBoard() {
    
    const gameField = document.getElementById('gameField');

 
    gameField.innerHTML = '';

 
    const table = document.createElement('table');

    
    const cellSize = Math.min(window.innerWidth / cols, window.innerHeight / rows);

    
    let padding = window.innerWidth * 0.007; 

    for(let i = 1; i <= rows; i++) {
        
        const tr = document.createElement('tr');

        for(let j = 1; j <= cols; j++) {
            
            const td = document.createElement('td');
            td.style.width = cellSize + 'px';
            td.style.height = cellSize + 'px';
            td.style.padding = padding + 'px';
            td.style.backgroundColor = board[i][j] ? 'black' : 'white';
            tr.appendChild(td);
        }     
        table.appendChild(tr);
    }

    
    gameField.appendChild(table);
}
drawBoard();

function drawCells() {
    
    const gameField = document.getElementById('gameField');

    // Get the table
    const table = gameField.querySelector('table');

    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= cols; j++) {
        
            const td = table.rows[i - 1].cells[j - 1];

            
            td.style.backgroundColor = board[i][j] ? 'black' : 'white';
        }
    }
}
gameField.addEventListener('click', function(event) {
    
    const td = event.target;

    
    const row = td.parentNode.rowIndex + 1;
    const col = td.cellIndex + 1;

    
    board[row][col] = board[row][col] ? 0 : 1;
    td.style.backgroundColor = board[row][col] ? 'black' : 'white';
   
    drawCells();
});


let padding = window.innerWidth * 0.007; 


let tds = document.getElementsByTagName('td');


for(let i = 0; i < tds.length; i++) {
    tds[i].style.padding = padding + 'px';
}


window.onresize = function() {
    padding = window.innerWidth * 0.007; 

    for(let i = 0; i < tds.length; i++) {
        tds[i].style.padding = padding + 'px';
    }
}
let table = document.getElementsByTagName('table')[0];

table.addEventListener('wheel', function(event) {
    
    if (event.deltaY < 0) {
        padding *= 1.1; 
    } else {
        
        padding *= 0.9; 
    }

    
    for(let i = 0; i < tds.length; i++) {
        tds[i].style.padding = padding + 'px';
    }
    event.preventDefault();
});