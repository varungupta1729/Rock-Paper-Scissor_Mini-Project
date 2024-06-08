const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();

    playerText.textContent = `🕹️ Player: ${player}`;
    computerText.textContent = `💻 Computer: ${computer}`;
    resultText.textContent = checkWinner();

    backColor();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;

    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "YOU WIN! 🎉" : "YOU LOSE!😥";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "YOU WIN! 🎉" : "YOU LOSE!😥";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "YOU WIN! 🎉" : "YOU LOSE!😥";
  }

  backColor();
}

function backColor() {
  if (resultText.textContent == "YOU WIN! 🎉") {
    document.querySelector(".gameDiv").classList.replace("backGround", "win");
    document.querySelector(".gameDiv").classList.replace("lose", "win");
    document.querySelector(".gameDiv").classList.replace("draw", "win");
  }
  if (resultText.textContent == "YOU LOSE!😥") {
    document.querySelector(".gameDiv").classList.replace("backGround", "lose");
    document.querySelector(".gameDiv").classList.replace("win", "lose");
    document.querySelector(".gameDiv").classList.replace("draw", "lose");
  }
  if (resultText.textContent == "Draw!") {
    document.querySelector(".gameDiv").classList.replace("backGround", "draw");
    document.querySelector(".gameDiv").classList.replace("win", "draw");
    document.querySelector(".gameDiv").classList.replace("lose", "draw");
  }
}
