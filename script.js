// Creating our variables
const timerDisplay = document.querySelector('.timerDisplay');
const stop = document.getElementById('stopBtn');
const start = document.getElementById('startBtn');
const reset = document.getElementById('resetBtn');
const stopwatch = { elapsedTime: 0 };


// Adding Event Listiners to buttons
start.addEventListener('click', () => {
    clearInterval(stopwatch.intervalId);
    startStopwatch();

});


stop.addEventListener('click', () => {
    clearInterval(stopwatch.intervalId);
});


reset.addEventListener('click', () => {
    stopwatch.elapsedTime = 0;
    clearInterval(stopwatch.intervalId);
    displayTime(0, 0, 0, 0);
});

// Creating  stopwatch function


function startStopwatch() {
    //reset start time
    stopwatch.startTime = Date.now();
    //run `setInterval()` and save id
    stopwatch.intervalId = setInterval(() => {
        //calculate elapsed time
        const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime;
        //calculate different time measurements based on elapsed time
        const milliseconds = parseInt((elapsedTime % 1000) / 10);
        const seconds = parseInt((elapsedTime / 1000) % 60);
        const minutes = parseInt((elapsedTime / (1000 * 60)) % 60);
        const hour = parseInt((elapsedTime / (1000 * 60 * 60)) % 24);
        //display time
        displayTime(hour, minutes, seconds, milliseconds);
    }, 100);
};
// Creating a function to display time to the DOM
function displayTime(hour, minutes, seconds, milliseconds) {
    const leadZeroTime = [hour, minutes, seconds, milliseconds].map(time => time < 10 ? `0${time}` : time);
    timerDisplay.innerHTML = leadZeroTime.join(':');
}