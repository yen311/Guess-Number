"use strict";
let score = 10;
let guessNumber = Math.trunc(Math.random() * 20) + 1;
let highscoreArray = [];
let highscore;
document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  console.log(guessNumber);
  // check did user enter the number
  if (empty(guess) === false) {
    document.querySelector(".startGuess").textContent =
      "You did not input any number!";
    flashRed();
  } else {
    guess = Number(guess);

    // check did user failed the game
    // correct
    if (guess === guessNumber) {
      document.querySelector(".score").textContent = `🗝Chance: ${score - 1}`;
      document.querySelector(".startGuess").textContent = "Correct!";
      document.querySelector(".number").textContent = String(guess);
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").style.width = "300px";
      highscoreArray.push(score);
      highscoreF();
    }
    // Too high
    else if (guess > guessNumber) {
      deductScore();
      document.querySelector(".startGuess").textContent =
        "Too High! Minus 1 chance!";
      flashRed();
    }
    // Too low
    else if (guess < guessNumber) {
      deductScore();
      document.querySelector(".startGuess").textContent =
        "Too Low! Minus 1 chance!";
      flashRed();
    }
    // Game over!
    if (score === 0) {
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".startGuess").textContent = " 💣 Game over";
      document.querySelector(".score").textContent = `🗝Chance: 0`;
    }
  }
  document.querySelector(".guess").value = "";
});

// minus 1 chance for every wrong guess
function deductScore() {
  document.querySelector(".score").textContent = `🗝Chance: ${score - 1}`;
  score -= 1;
}

// check did user give any input
function empty(num) {
  if (num === "") {
    return false;
  } else {
    return true;
  }
}

// flash red 200ms for the wrong guess.
function flashRed() {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "#333";
  }, 200);
}

// again: reset everything
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = `🗝Chance: 10`;
  document.querySelector(".startGuess").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#333";
});

// highscore
function highscoreF() {
  if (highscoreArray.length === 1) {
    highscore = highscoreArray[0];
    document.querySelector(
      ".Highscore"
    ).textContent = `🎊 HighScore: ${highscore}`;
  } else if (highscoreArray.length > 1) {
    for (let i = 0; i < highscoreArray.length; i++) {
      if (highscoreArray[i] > highscore) {
        highscore = highscoreArray[i];
      }
    }
    document.querySelector(
      ".Highscore"
    ).textContent = `🎊 HighScore: ${highscore}`;
  }
}
