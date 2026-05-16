function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice(n) {
  if (n === "rock") {
    return 1;
  }
  else if (n === "paper") {
    return 2;
  }
  else if (n === "scissors") {
    return 3;
  }
  else {
    return "invalid input.";
  }
}
const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");
const results = document.querySelector("#results");
let humanScore = 0;
let computerScore = 0;
rockbtn.addEventListener("click", (e) => {
  playGame("rock");
});
paperbtn.addEventListener("click", (e) => {
  playGame("paper");
});
scissorsbtn.addEventListener("click", (e) => {
  playGame("scissors");
});

function playGame(pick) {
  let humanChoice = getHumanChoice(pick);
  let computerChoice = getComputerChoice();

  console.log(humanChoice);
  console.log(computerChoice);

  playRound(humanChoice, computerChoice);


  function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
      results.textContent = "Draw";
    }
    else if (humanChoice == 1 && computerChoice == 2) {
      computerScore += 1;
      results.textContent = `Computer wins! Current Score #Computer: ${computerScore} #You: ${humanScore}`;
    }
    else if (humanChoice == 2 && computerChoice == 1) {
      humanScore += 1;
      results.textContent = `You win! Current Score #Computer: ${computerScore} #You: ${humanScore}`;
    }
    else if (humanChoice == 1 && computerChoice == 3) {
      humanScore += 1;
      results.textContent = `You win! Current Score #Computer: ${computerScore} #You: ${humanScore}`;
    }
    else if (humanChoice == 3 && computerChoice == 1) {
      computerScore += 1;
      results.textContent = `Computer wins! Current Score #Computer: ${computerScore} #You: ${humanScore}`;
    }
    else if (humanChoice == 2 && computerChoice == 3) {
      computerScore += 1;
      results.textContent = `Computer wins! Current Score #Computer: ${computerScore} #You: ${humanScore}`;
    }
    else {
      humanScore += 1;
      results.textContent = `You win! Current Score #Computer: ${computerScore} #You: ${humanScore}`;
    }
  }
  if (humanScore == 5 && computerScore < 5) {
    results.textContent = "You Win!";
    humanScore = 0;
    computerScore = 0;
  }
  else if (humanScore < 5 && computerScore == 5) {
    results.textContent = "Computer Win!";
    humanScore = 0;
    computerScore = 0;
  }
  else if (humanScore == 5 && computerScore == 5) {
    results.textContent = "Draw!";
    humanScore = 0;
    computerScore = 0;
  }
}