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



function playRound(humanChoice) {
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
  display(result, humanChoice, computerChoice)
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

function display(result, humanChoice, computerChoice) {
  const divElement = document.querySelector('.result');
  divElement.innerHTML = `
  <p>${result}, you picked ${humanChoice}, computer picked ${computerChoice}.<p>
  <p>current scores: You ${humanScore}, Computer ${computerScore}, Ties ${tie}<p>
  `
  if (humanScore === 5) {
    divElement.innerHTML = `Congrats. You win the game`;
    resetScore();
  }
  if (computerScore === 5) {
    divElement.innerHTML = `You lose. Computer got ya`;
    resetScore();
  }
  if (tie === 5) {
    divElement.innerHTML = `Tie. Friendship won`;
    resetScore();
  }
}

function resetScore() {
  humanScore = 0;
  computerScore = 0;
  tie = 0;
  
}

const rockButton = document.querySelector('.rock-button');
rockButton.addEventListener("click", () => playRound('rock'));

const paperButton = document.querySelector('.paper-button');
paperButton.addEventListener("click", () => playRound('paper'));

const scissorsButton = document.querySelector('.scissors-button');
scissorsButton.addEventListener('click', () => playRound('scissors'));



