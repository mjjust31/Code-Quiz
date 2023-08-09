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
var choices = document.querySelector(".choices");

var quizInfo = [
  {
    question: "What does HTML mean?",
    choices: [
      "Hypertext Markup Language",
      "How To Make Lasagna",
      "Hype Text Make Langauage",
      "Hyper Texting Makeup Language",
    ],
    answer: "Hypertext Markup Language",
  },

  {
    question: "Which one is known as a Primitive Data Type?",
    choices: ["Booleans", "Strings", "Number", "All of the Above"],
    answer: "All of the Above",
  },
];

// console.log(quizInfo[0].question)
//you can add a single event listener to the parent element and use event delegation to handle the click event for all the choices.

//start of game and main-page
var timeLeft = 60;
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

  question.textContent = quizInfo[0].question;
  var mainList = document.querySelector("ul");

  for (var i = 0; i < quizInfo[0].choices.length; i++) {
    var choice = document.createElement("button");
    choice.textContent = quizInfo[0].choices[i];
    mainList.appendChild(choice);
  }
});

// function displayQuestion (index){}

// function correctAnswer (){
//   if
// }
