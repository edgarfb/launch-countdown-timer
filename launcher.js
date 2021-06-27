let numTop = document.querySelectorAll('.num__hide--top');
let numBottom = document.querySelectorAll('.num__hide--bottom');
let days = 8,
    hours = 23,
    minutes = 51,
    seconds = 43

;
let timer = setInterval(handleSeconds, 1000);
numTop[0].innerHTML = days;
numBottom[0].innerHTML = days;

numTop[1].innerHTML = hours;
numBottom[1].innerHTML = hours;

numTop[2].innerHTML = minutes;
numBottom[2].innerHTML = minutes;

numTop[3].innerHTML = seconds;
numBottom[3].innerHTML = seconds;

console.log('Top',numTop);
console.log('Bottom', numBottom);



function handleSeconds() {
    if(seconds === 0) {
        handleEnd();
        handleMinutes();
        console.log('I am zero')
        seconds = 60;
        
    }
    
    seconds -= 1;
    numTop[3].innerHTML = seconds;
    numBottom[3].innerHTML = seconds;
}

function handleMinutes() {
    if(minutes === 0) {
        minutes = 60;
        handleHours();
        
    }
    minutes -= 1;
    numTop[2].innerHTML = minutes;
    numBottom[2].innerHTML = minutes;
}

function handleHours() {
    if(hours === 0) {
        hours = 24;
        handleDays();
    }
    hours -= 1;
    numTop[1].innerHTML = hours;
    numBottom[1].innerHTML = hours;
}

function handleDays() {
    if(days === 0) {
        return;
    }
    days -= 1;
    numTop[0].innerHTML = days;
    numBottom[0].innerHTML = days;
}


function handleEnd() {
    if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
    }
}

numTop[3].addEventListener('change', (e) => {
    console.log(e);
})

// setInterval(handleSeconds, 1000);