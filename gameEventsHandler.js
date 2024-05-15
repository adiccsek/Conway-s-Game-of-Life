const speedSlider = document.getElementById('speedSlider').value;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const clearButton = document.getElementById('clearButton');
const randomButton = document.getElementById('randomButton');

console.log(speedSlider);
let playing = false;
let animationId;

startButton.addEventListener('click', () => {
    playing = true;
    animationId = requestAnimationFrame(updateBoard);
});

stopButton.addEventListener('click', () => {
    playing = false;
    cancelAnimationFrame(animationId);
});

function updateBoard() {
    if (playing) {
        board = applyRules(board);
        setInterval(drawBoard(), speedSlider);
        animationId = requestAnimationFrame(updateBoard);
    }
}