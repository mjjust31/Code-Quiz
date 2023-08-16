var navBar = document.querySelector(".first-page-top");
var highScoreLink = document.querySelector(".high-score-link"); //needs to be a anchor tag
var timerEl = document.querySelector(".timer");
var instructions = document.querySelector(".game-instructions");
var title = document.querySelector(".quiz-title");
var startButton = document.querySelector(".button-start");
var titlePage = document.querySelector(".game-start");
var quizContainer = document.querySelector(".quizContainer");
var scoreEl = document.querySelector(".score");
var enterIntials = document.querySelector(".enterIntials");
var displayOutcome = document.querySelector(".displayOutcome");
var lastPage = document.querySelector(".last-page");
var submitFormEl = document.getElementById("#submitForm");

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

var timeLeft = 15;
var score = 0;
var quizInfoIndex = 0;

function init() {
  timerEl.textContent = timeLeft;
  title.textContent = "Code Quiz Challenge";
  highScoreLink.textContent = "View High Scores";
  scoreEl.textContent = "Score: " + score;
  instructions.textContent =
    "Try to answer the following code-related questions withing the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

  startButton.addEventListener("click", startQuiz);
}
//start of quiz
function startQuiz() {
  titlePage.setAttribute("style", "display:none");
  timerEl.textContent = timeLeft;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      highScoreForm();
    }
  }, 1000);
  displayQuestionWithChoices(quizInfoIndex);
}

//this will display the question index when it is called with choices
function displayQuestionWithChoices(quizInfoIndex) {
  for (var i = 0; i < quizInfo[quizInfoIndex].choices.length; i++) {
    var questionEl = document.querySelector(".question");
    questionEl.textContent = quizInfo[quizInfoIndex].question;
    var choiceButton = document.createElement("button");
    choiceButton.textContent = quizInfo[quizInfoIndex].choices[i];
    quizContainer.appendChild(choiceButton);
  }
  quizContainer.addEventListener("click", displayAnswer);
  displayAnswer();
}

function displayAnswer(event) {
  var selected = event.target;
  if (selected.matches("button")) {
    if (selected.textContent === quizInfo[quizInfoIndex].answer) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  }

  quizInfoIndex++;
  displayQuestionWithChoices(quizInfoIndex);
}

quizContainer.addEventListener("click", displayAnswer);

function highScoreForm() {
  quizContainer.setAttribute("style", "display:none");
  var finalMessage = document.querySelector(".allDone");
  finalMessage.textContent =
    "All done! Enter your initials and save your final score!";

  var state = lastPage.getAttribute("data-state");
  if (state === "hidden") {
    lastPage.setAttribute("style", "display:block");
  };
 //this works whent he time enters o. just not when it's the last question of the index.
}

function correctAnswer() {
  displayOutcome.textContent = "Correct!";
  displayOutcome.setAttribute("style", "color:green;");
  score += 10;
  scoreEl.textContent = "Score: " + score;
  removeButtons();
}

function wrongAnswer() {
  timeLeft -= 10;
  displayOutcome.textContent = "Wrong :(";
  displayOutcome.setAttribute("style", "color:red; font-style:italic;");
  score -= 3;
  scoreEl.textContent = "Score: " + score;
  removeButtons();
}

function removeButtons() {
  var removeButtons = document.querySelectorAll("button");
  removeButtons.forEach(function (button) {
    button.remove();
  });
}

// function handleFormSubmit(event) {
//   event.preventDefault();
//   var scoreList = document.createElement("li");
//   var highScoreEl = document.querySelector(".highScoreList");

//   var initialsEl = document.getElementbyId("#initials");
//   var initials = initialsEl.value();
//   scoreList.innerHTML = initials + score;
//   document.highScoreEl.appendChild(scoreList);
//   initials.value("");

//   localeStorage.setItem("finalScore", score);
//   localeStorage.setItem("initials", initials);
// }

// submitFormEl.addEventListener("submit", handleFormSubmit);

init();

// function highScorePage() {
//   if (timeLeft === 0 || quizInfoIndex >= quizInfo.length-1) {
//  console.log("it's working");

//   }
// }

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
