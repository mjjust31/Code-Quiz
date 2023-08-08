//set up prior to click

var startButton = document.querySelector(".button-start");
var navBar = document.querySelector(".first-page-top");
var timer = document.querySelector(".high-score-link"); //needs to be a anchor tag
var timer = document.querySelector(".timer");
var instructions = document.querySelector(".game-instructions");
var title = document.querySelector(".quiz-title");

title.textContent = "Code Quiz Challenge";
instructions.textContent =
  "Try to answer the following code-related questions withing the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

//start of quiz
startButton.addEventListener("click", function () {
  instructions.textContent = "";
  title.textContent = "";
  startButton.setAttribute("style", "display:none;");
  timer.textContent = timeLeft;
  var timeLeft = 10;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
});
