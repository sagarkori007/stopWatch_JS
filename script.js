// Selecting elements from the DOM
let displayTimer = document.querySelector('.displayTimer');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

console.log('starting');

// Initializing variables for seconds, minutes, and hours
let [sec, min, hour] = [0, 0, 0];

let timerId = null;

// Adding click event listener to the start button
startBtn.addEventListener('click', function(){
    if(timerId != null){
        // Clearing the interval if the timer is already running
        clearInterval(timerId);
    }
    // Starting the timer by calling the startTimer function every 1000 milliseconds (1 second)
    timerId = setInterval(startTimer, 1000);
});

// Adding click event listener to the stop button
stopBtn.addEventListener('click', function(){
    

    if(timerId != null){
        // Clearing the interval to stop the timer
        clearInterval(timerId);
        alert("Stop watch paused!");
    } else {
        alert("Please, Start the watch!");
    }
});

// Adding click event listener to the reset button
resetBtn.addEventListener('click',function(){
    var result = confirm("Are you sure you want to reset the stop watch?");
    if (result) {
        // User clicked OK, proceed with stopping
        if(timerId != null){
            // Resetting the timer values and display
            displayTimer.innerHTML = '00 : 00 : 00';
            clearInterval(timerId);
            [sec, min, hour] = [0, 0, 0];
        }
    } else {
        // User clicked Cancel
        console.log('user cancelled the reset!!');
    }

});

// Function to start the timer
function startTimer(){
    sec++;
    if (sec == 60){
        sec = 0;
        min++;
    }
    if (min == 60){
        min = 0;
        hour++;
    }

    // Formatting the time values with leading zeros if needed
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    let hourString = hour < 10 ? `0${hour}` : hour;

    // Updating the display with the current time
    displayTimer.innerHTML = `${hourString} : ${minString} : ${secString}`;
}
