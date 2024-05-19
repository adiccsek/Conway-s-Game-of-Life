const speedSlider = document.getElementById('speedSlider').value;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const clearButton = document.getElementById('clearButton');
const randomButton = document.getElementById('randomButton');

//When startbutton is clicked start an infinite loop and call the function updateboard every 1000/speedSlider ms and only stop when stopButton is clicked
startButton.addEventListener('click', function() {
    startButton.disabled = true;
    stopButton.disabled = false;
    clearButton.disabled = true;
    randomButton.disabled = true;
    interval = setInterval(updateBoard, 1000 / speedSlider);
});

stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearButton.disabled = false;
    randomButton.disabled = false;
    clearInterval(interval);
});

