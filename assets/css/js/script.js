var startButton = document.querySelector(".button-start");
var navBar = document.querySelector(".first-page-top");
var timer = document.querySelector(".high-score-link"); //needs to be a anchor tag
var timer = document.querySelector(".timer");
var instructions = document.querySelector(".game-instructions");
var title = document.querySelector(".quiz-title");

var timeLeft= 5;



title.textContent = "Code Quiz Challenge";
instructions.textContent =
  "Try to answer the following code-related questions withing the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

startButton.addEventListener("click", function () {
  instructions.textContent = "";
  title.textContent = "";
  timer.textContent = timeLeft;

  var timeInterval = setInterval(function () {
    timeLeft--;
 

    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);

  



});
