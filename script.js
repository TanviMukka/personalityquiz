var vibeCoderScore = 0;
var tradDevScore = 0;

var qCount = 0;
var restart = document.getElementById("restart");
var result = document.getElementById("result");

var q1ans1 = document.getElementById("q1a1");
var q1ans2 = document.getElementById("q1a2");
var q2ans1 = document.getElementById("q2a1");
var q2ans2 = document.getElementById("q2a2");
var q3ans1 = document.getElementById("q3a1");
var q3ans2 = document.getElementById("q3a2");

q1ans1.addEventListener("click", vibeCoder);
q1ans2.addEventListener("click", tradDev);
q2ans1.addEventListener("click", vibeCoder);
q2ans2.addEventListener("click", tradDev);
q3ans1.addEventListener("click", vibeCoder);
q3ans2.addEventListener("click", tradDev);
restart.addEventListener("click", restartQ);

function vibeCoder() {
  vibeCoderScore += 1;
  qCount += 1;

  console.log("qCount = " + qCount + " vibeCoderScore = " + vibeCoderScore);
  
  if (qCount == 3) {
  console.log("The quiz is done!")
  updateResult()
}
}

function tradDev() {
  tradDevScore += 1;
  qCount += 1;

  console.log("qCount = " + qCount + " tradDevScore = " + tradDevScore);

  if (qCount == 3) {
  console.log("The quiz is done!")
  updateResult()
}
}

function updateResult() {
    if (vibeCoderScore >= 2) {
      result.innerHTML = "You are a vibe coder!";
      console.log("You are a vibe coder!");
    }
    else if (tradDevScore >= 2) {
      result.innerHTML = "You are a traditional developer!";
      console.log("You are a traditional developer!");
    }
}

function restartQ() {
  result.innerHTML = "You are a...";
  vibeCoderScore = 0;
  tradDevScore = 0;
  qCount = 0;
  
  console.log("Tracking variables value = " + (vibeCoderScore + tradDevScore + qCount));
}