var timerEl= document.querySelector("#timer");
var startquizEl= document.querySelector("#startbutton");

var timeLeft = 75;

function countdown() {
   
  

    var timeInterval = setInterval(function () {
        timeLeft--;       
    }, 1000);
    console.log(timeLeft)
}
  
  countdown();
  
console.log(timeLeft)
   
