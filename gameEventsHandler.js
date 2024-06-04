const speedSlider = document.getElementById('speedSlider');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const clearButton = document.getElementById('clearButton');
const randomButton = document.getElementById('randomButton');
const downloadButton = document.getElementById('downloadButton');

let value;
let interval;

startButton.addEventListener('click', function() {
    startButton.disabled = true;
    stopButton.disabled = false;
    clearButton.disabled = true;
    randomButton.disabled = true;
    interval = setInterval(updateBoard, speedSlider.value);
    speedSlider.addEventListener('input', function() {
        value =  speedSlider.value;
        clearInterval(interval);
        interval = setInterval(updateBoard, value);
        
    });    
});

stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = false;
    clearButton.disabled = false;
    randomButton.disabled = false;
    clearInterval(interval);
    
});
   

function createRandomBoard() {
    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= cols; j++) {
            board[i][j] = Math.random() > 0.5 ? 1 : 0;
        }
    }
    drawCells();
}

randomButton.addEventListener('click', function() {
    createRandomBoard();
    drawCells();
});

function createEmptyBoard() {
    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= cols; j++) {
            board[i][j] = 0;
        }
}
}

clearButton.addEventListener('click', function() {
    createEmptyBoard();
    drawCells();
    drawBoard();
});

let table2 = document.getElementById('gameField'); 

downloadButton.addEventListener('click', function() {
    html2canvas(table2).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        let date = new Date();
        let dateString = date.toISOString().slice(0,10); // get date in YYYY-MM-DD format
        let filename = dateString + '_convey.pdf';
        pdf.save(filename);
    });
});



