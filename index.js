var [seconds, minutes, hours] = [0,0, 0, 0]
let displayTime = document.getElementById('displayTime');
let timer = null;

function watch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let hr = hours < 10 ? "0" + hours : hours;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = hr +"h:"+ min +"m:"+ sec + "s";
}

function start(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(watch, 1000);
}

function  stop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00h:00m:00s";
}

    
//     var timer1,timer2,timer3,timer4 = null;
    
// //    function that will be excuted on click of the start button
//     function start(){
//         timer1 = setInterval(ms, 1);
//         timer2 = setInterval(sec, 1000);
//         timer3 = setInterval(min, 60000);
//         timer4 = setInterval(hr, 3600000);
        
//     }

//     function ms(){
//         let miliSeconds = Number(document.getElementById('milisecs').innerHTML);
//         miliSeconds ++;
//         if (miliSeconds == 100){
//             miliSeconds = 0;
//         }
//         if(miliSeconds < 10){
//             miliSeconds = "0" + miliSeconds;
//         }
        
//         document.getElementById('milisecs').innerHTML = miliSeconds;
        
//     }

//     function sec(){
//         let secs = Number(document.getElementById('seconds').innerHTML);
//         secs ++;
//         if(secs == 60){
//             secs = 0;
//         }
//         if(secs < 10){
//             secs = "0" + secs;
//         }
//         document.getElementById('seconds').innerHTML = secs;  
//     }
//     function min(){
//         let mins = Number(document.getElementById('minutes').innerHTML);
//         mins ++;
//         if(mins == 60){
//             mins = 0;
//         }
//         if(mins < 10){
//             mins = "0" + mins;
//         }
//         document.getElementById('minutes').innerHTML = mins; 
//     }
//     function hr(){
//         let hrs = Number(document.getElementById('hours').innerHTML);
//         hrs ++;
//         if(hrs == 60){
//             hrs = 0;
//         }
//         if(hrs < 10){
//             hrs = "0" + hrs;
//         }
//         document.getElementById('hours').innerHTML = hrs; 
//     }
// // function that will be executed on click of the stop button
//     function stop(){
//         clearInterval(timer1)
//         clearInterval(timer2)
//         clearInterval(timer3)
//         clearInterval(timer4);
       
        
//     }
// // function that will be executed on click of the reset button
//     function reset(){
//         document.getElementById('milisecs').innerHTML = "00";
//         document.getElementById('seconds').innerHTML = "00";
//         document.getElementById('minutes').innerHTML = "00";
//         document.getElementById('hours').innerHTML = "00";
//         clearInterval(timer1)
//         clearInterval(timer2)
//         clearInterval(timer3)
//         clearInterval(timer4)
//     }
