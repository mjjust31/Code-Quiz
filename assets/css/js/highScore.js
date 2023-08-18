var restartEl = document.getElementById("restart");
var scoreContainerEl = document.querySelector(".scoreContainer");
var highScoreListEl = document.getElementById("highScoreList");
var clearScoresEl = document.getElementById("clearScores");

restartEl.addEventListener("click", function () {
  localStorage.removeItem("finalScore");
  window.location.href = "./index.html";
  init();
});

clearScoresEl.addEventListener("click", function () {
  clearScores();
});

function renderHighScore() {
  var lastFinalScore = JSON.parse(localStorage.getItem("finalScore"));
  console.log(lastFinalScore);

  var listItem = document.createElement("li");
  listItem.textContent = lastFinalScore.score + " " + lastFinalScore.initials;
  console.log(highScoreListEl);
  highScoreListEl.appendChild(listItem);
}

function clearScores() {

  localStorage.removeItem("finalScore");

}

// for (i = 0; i < lastFinalScore.length; i++) {
//   var listItem = document.createElement("li");
//   listItem.textContent = "It's working"
//   // lastFinalScore[i].score + " " + lastFinalScore[i].initials;
//   var highScoreEl = document.querySelector("#highScoreList");
//   console.log(highScoreEl)
//   highScoreEl.appendChild(listItem);}

renderHighScore();
