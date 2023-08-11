//set up prior to click

var navBar = document.querySelector(".first-page-top");
var highScoreLink = document.querySelector(".high-score-link"); //needs to be a anchor tag
var timer = document.querySelector(".timer");
var instructions = document.querySelector(".game-instructions");
var title = document.querySelector(".quiz-title");
var startButton = document.querySelector(".button-start");
var titlePage = document.querySelector(".game-start");
var quizContainer = document.querySelector(".quiz-container");

var questionIndex = 0;
var choiceIndex = 0;

var quizInfo = [
  {
    question: "What does HTML mean?",
    choices: [
      "Hypertext Markup Language",
      "How To Make Lasagna",
      "Hype Text Make Langauage",
      "Hyper Texting Makeup Language",
    ],
    answer: 0,
  },

  {
    question: "Which one is known as a Primitive Data Type?",
    choices: ["Booleans", "Strings", "Number", "All of the Above"],
    answer: 3,
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<script>", "<javascript", "<scripting"],
    answer: 1,
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    choices: ["fgcolor", "text-color", "color", "font-color"],
    answer: 2,
  },

  {
    question: "Choose the correct HTML element for the largest heading:",
    choices: ["<h6>", "<heading>", "<head>", "<h1>"],
    answer: 3,
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
  displayQuestionWithChoices(0);
});


//this will display the question index when it is called with choices
function displayQuestionWithChoices(quizInfoIndex) {
  //
  var questionEl = document.querySelector(".question");
  questionEl.textContent = quizInfo[quizInfoIndex].question;

  for (var i = 0; i < quizInfo[quizInfoIndex].choices.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = quizInfo[quizInfoIndex].choices[i];
    quizContainer.appendChild(choiceButton);
  }
}


//create a function for all choices
// var questionEl = document.getElementById(".question");
