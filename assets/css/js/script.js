//set up prior to click

var navBar = document.querySelector(".first-page-top");
var highScoreLink = document.querySelector(".high-score-link"); //needs to be a anchor tag
var timerEl = document.querySelector(".timer");
var instructions = document.querySelector(".game-instructions");
var title = document.querySelector(".quiz-title");
var startButton = document.querySelector(".button-start");
var titlePage = document.querySelector(".game-start");
var quizContainer = document.querySelector(".quiz-container");
var scoreEl = document.querySelector(".score");
var enterIntials = document.querySelector(".enterIntials")

var quizInfoIndex = 0;

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

  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<script>", "<javascript", "<scripting"],
    answer: "<script>",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    choices: ["fgcolor", "text-color", "color", "font-color"],
    answer: "color",
  },

  {
    question: "Choose the correct HTML element for the largest heading:",
    choices: ["<h6>", "<heading>", "<head>", "<h1>"],
    answer: "<h1>",
  },
];

// console.log(quizInfo[0].question)
//you can add a single event listener to the parent element and use event delegation to handle the click event for all the choices.

//start of game and main-page
var timeLeft = 70;
var score = 0;
timerEl.textContent = timeLeft;
title.textContent = "Code Quiz Challenge";
highScoreLink.textContent = "View High Scores";
scoreEl.textContent = "Score: " + score;
enterIntials.setAttribute("style", "display:none");

instructions.textContent =
  "Try to answer the following code-related questions withing the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

//start of quiz
function startGame(event) {
  event.preventDefault();
  titlePage.setAttribute("style", "display:none");
  timerEl.textContent = timeLeft;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
  displayQuestionWithChoices(quizInfoIndex);
}

startButton.addEventListener("click", startGame);

//this will display the question index when it is called with choices
function displayQuestionWithChoices(quizInfoIndex) {
  var questionEl = document.querySelector(".question");
  questionEl.textContent = quizInfo[quizInfoIndex].question;

  for (var i = 0; i < quizInfo[quizInfoIndex].choices.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = quizInfo[quizInfoIndex].choices[i];
    quizContainer.appendChild(choiceButton);
  }
  displayAnswer();

  if (quizInfoIndex >=  quizInfoIndex.length || timeLeft === 0) {
    quizContainer.textContent.setAttribute("style", "display:none");
    enterIntials.setAttribute("style", "display:block");

  }
  
}

function displayAnswer(event) {
  event.preventDefault();
  var choiceButton = event.target;
  var displayOutcome = document.querySelector(".displayOutcome");

  // console.log(quizInfoIndex);
  if (choiceButton.matches("button")) {
    // console.log(choiceButton.textContent)
    if (choiceButton.textContent === quizInfo[quizInfoIndex].answer) {
      displayOutcome.textContent = "Correct Answer!";
      displayOutcome.setAttribute("style", "color:green;");
      score += 10;
      scoreEl.textContent = "Score: " + score;
      removeButtons();
    } else {
      // console.log("incorrect answer");
      timeLeft -= 15;
      displayOutcome.textContent = "Wrong";
      displayOutcome.setAttribute("style", "color:red; font-style:italic;");
      score -= 3;
      scoreEl.textContent = "Score: " + score;
      removeButtons();
    }

    quizInfoIndex++;
    displayQuestionWithChoices(quizInfoIndex);

    //cycles through questions, but keeps all buttons created
  }
}
quizContainer.addEventListener("click", displayAnswer);
//needs a condition statement to ensure when questionInfoIndex is complete, it takes them to the high score page.
//resuable code in two placed for removing previous buttons.
function removeButtons() {
  var removeButtons = document.querySelectorAll("button");
  removeButtons.forEach(function (removeButtons) {
    removeButtons.remove();
  });
}


//can I cratea random index number to pull the question randomly?
//will need an if statement of what to do when array is gone.
// function randomQuestionGenerator() {
//   var indexNumber = [0, 1, 2, 3, 4];
//   var random = Math.floor(Math.random() * indexNumber.length);
//   var num = indexNumber[random];
//   indexNumber.splice(random, 1);
//   return num;
// }
// var randomQuestionSet = randomQuestionGenerator();

//next we will need to verify the user's click with the corrct answer.
