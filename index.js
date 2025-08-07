let humanScore = 0;
let computerScore = 0;
let tie = 0;

function getComputerChoice() {
  const number = Math.random();
  let choice;
  if (number < 1 / 3) {
    choice = "rock";
  } else if (number < 2 / 3) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function getHumanChoice() {
  const choice = prompt("Your move: ", "rock");
  return choice;
}



function playRound() {
  const humanChoice = getHumanChoice().toLowerCase();
  const computerChoice = getComputerChoice();
  let result;
  if (humanChoice === computerChoice) {
    result = "Tie";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result = "You win";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    result = "You lose";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result = "You win";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result = "You lose";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result = "You lose";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result = "You win";
  }

  changeScore(result);

  return result;
}

function changeScore(result) {
  if (result === "Tie") {
    tie += 1;
  } else if (result === "You win") {
    humanScore += 1;
  } else if (result === "You lose") {
    computerScore += 1;
  }
}

function playGame() {
  let round = 0;
  let result;
  while (round < 5) {
    result = playRound();
    round += 1;
    console.log(`${result} ${tie} ${humanScore} ${computerScore}`)
  }
}

playGame();
