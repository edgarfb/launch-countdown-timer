
let days = 8,
    hours = 23,
    minutes = 55,
    seconds = 41
;

let num = document.querySelectorAll('.num__main');
let darkLayer = document.querySelectorAll('.dark-layer');
console.log(darkLayer);



let timer = setInterval(handleSeconds, 1000);



num[0].textContent = days;
num[1].textContent = hours;
num[2].textContent = minutes;
num[3].textContent = seconds;

function handleSeconds() {
    let target = num[3];
    let index = 3;
    
    
    if(seconds === 0) {
        handleEnd();
        handleMinutes();
        seconds = 60
        
    }
    
    target.textContent = seconds;
    seconds -= 1;
    target.textContent = seconds;
    // handleChange(index);
}


// NOT WORKING YET
// function handleChange(index) {
//     setTimeout(() => {
//         darkLayer[index].classList.add('change');
//         setTimeout(() => {
//             darkLayer[index].classList.remove('change');
//         }, 500);
//     }, 500);
    
// }

function handleMinutes() {
    if(minutes === 0) {
        minutes = 60;
        handleHours();
        
    }
    minutes -= 1;
    num[2].textContent = minutes;
}

function handleHours() {
    if(hours === 0) {
        hours = 24;
        handleDays();
    }
    hours -= 1;
    num[1].textContent = hours;
}

function handleDays() {
    if(days === 0) {
        return;
    }
    days -= 1;
    num[0].textContent = days;
}


function handleEnd() {
    if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
    }
}
