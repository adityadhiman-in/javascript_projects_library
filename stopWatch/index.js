const stop = document.getElementById("stop");
const start = document.getElementById("start");
const reset = document.getElementById("reset");

let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("hours").innerText = formatTime(hours) + ' : ';
    document.getElementById("minutes").innerText = formatTime(minutes) + ' : ' ;
    document.getElementById("seconds").innerText = formatTime(seconds);
}

function formatTime(time) {
    return time.toString().padStart(2, "0");
}

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000); // Update every second
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0 ;
    seconds = 0;
    document.getElementById("hours").innerText = formatTime(hours + ' : ');
    document.getElementById("minutes").innerText = formatTime(minutes + ' : ');
    document.getElementById("seconds").innerText = formatTime(seconds);
}

// Event Listeners
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
