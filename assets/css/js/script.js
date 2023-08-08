//set up prior to click

var navBar = document.querySelector(".first-page-top");
var highScoreLink = document.querySelector(".high-score-link"); //needs to be a anchor tag
var timer = document.querySelector(".timer");

var instructions = document.querySelector(".game-instructions");
var title = document.querySelector(".quiz-title");
var startButton = document.querySelector(".button-start");

var titlePage = document.querySelector(".game-start");

var quizContainer = document.querySelector(".quiz-container");
var question = document.querySelector(".question");


var quizInfo = [
  {
    question: "What does HTML mean?",
    choices: [
      "Hyper Text Markup Language",
      "How To Make Lasagna",
      "Hype Text Make Langauage",
      "Hyper Texting Makeup Language",
    ],
    answer: "Hyper Text Markup Langague",
  },

  {
    question: "Which one is known as a Primitive Data Type?",
    choices: ["Booleans", "Strings", "Number", "All of the Above"],
    answer: "All of the Above",
  },
];

// console.log(quizInfo[0].question)

//start of game and main-page
var timeLeft = 30;
var score = 0; 
timer.textContent = timeLeft;
title.textContent = "Code Quiz Challenge";
highScoreLink.textContent = "View High Scores";
instructions.textContent =
  "Try to answer the following code-related questions withing the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

//start of quiz
startButton.addEventListener("click", function () {
  titlePage.setAttribute("style", "display:none;");
  timer.textContent = timeLeft;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);

 question.textContent = quizInfo[0].question;//rather than do each question. See if you can crate a for loop once you have the quiz set up.


});
