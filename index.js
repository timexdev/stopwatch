var [seconds, minutes, hours] = [0, 0, 0]
let timeDisplay = document.getElementById('timeDisplay');
let timer = null;

function watchCounter(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let hr = hours 
    if(hours < 10) {hr = "0" + hours} else{hours};
    let min = minutes 
    if(minutes < 10) {min = "0" + minutes} else{minutes};
    let sec = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('timeDisplay').innerHTML = hr +"h:"+ min +"m:"+ sec +"s";
}

const start = () =>{
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(watchCounter, 1000);
}

const  stop = () =>{
    clearInterval(timer);
}

const reset = () =>{
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    document.getElementById('timeDisplay').innerHTML = "00h:00m:00s";
}

   







// var timer1,timer2,timer3,timer4 = null;
    
// // //    function that will be excuted on click of the start button
// function start(){
//     if(timer1!== null){
//         clearInterval(timer1);
//     }
//     timer1 = setInterval(ms, 1);

//     if(timer2!== null){
//     clearInterval(timer2);
//     }
//     timer2 = setInterval(sec, 1000);

//     if(timer3!== null){
//         clearInterval(timer3);
//     }
//     timer3 = setInterval(min, 60000);

//     if(timer4!== null){
//         clearInterval(timer4);
//     }
//     timer4 = setInterval(hr, 3600000);
        
// }

// function ms(){
//     let miliSeconds = Number(document.getElementById('milisecs').innerHTML);
//     miliSeconds ++;
//     if (miliSeconds == 100){
//          miliSeconds = 0;
//     }
//     if(miliSeconds < 10){
//         miliSeconds = "0" + miliSeconds;
//         }
        
//         document.getElementById('milisecs').innerHTML = miliSeconds;
        
//      }

//      function sec(){
//          let secs = Number(document.getElementById('seconds').innerHTML);
//          secs ++;
//          if(secs == 60){
//              secs = 0;
//          }
//          if(secs < 10){
//             secs = "0" + secs;
//         }
//         document.getElementById('seconds').innerHTML = secs;  
//      }
//      function min(){
//          let mins = Number(document.getElementById('minutes').innerHTML);
//          mins ++;
//          if(mins == 60){
//              mins = 0;
//          }
//         if(mins < 10){
//             mins = "0" + mins;
//                  }
//          document.getElementById('minutes').innerHTML = mins; 
//      }
//      function hr(){
//          let hrs = Number(document.getElementById('hours').innerHTML);
//         hrs ++;
//         if(hrs == 60){
//             hrs = 0;
//         }
//         if(hrs < 10){
//             hrs = "0" + hrs;
//         }
//         document.getElementById('hours').innerHTML = hrs; 
//      }
// // // function that will be executed on click of the stop button
//     function stop(){
//         clearInterval(timer1)
//         clearInterval(timer2)
//         clearInterval(timer3)
//          clearInterval(timer4);
//         }

// // // function that will be executed on click of the reset button
//      function reset(){
//         document.getElementById('milisecs').innerHTML = "00";
//         document.getElementById('seconds').innerHTML = "00";
//         document.getElementById('minutes').innerHTML = "00";
//         document.getElementById('hours').innerHTML = "00";
//          clearInterval(timer1)
//          clearInterval(timer2)
//          clearInterval(timer3)
//          clearInterval(timer4)
//     }



    // 