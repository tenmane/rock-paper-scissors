let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}
let computerChoice = getComputerChoice();
console.log(computerChoice);
function getHumanChoice(n) {
  n = n.toLowerCase();
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
let pick = prompt("Enter your choice: ", "");
let humanChoice = getHumanChoice(pick);

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert("Draw!");
  }
  else if (humanChoice == 1 && computerChoice == 2) {
    computerScore += 1;
    alert(`Computer wins! Current Score #Computer: ${computerScore} #You: ${humanScore}`);
  }
  else if (humanChoice == 2 && computerChoice == 1) {
    humanScore += 1;
    alert(`You win! Current Score  #Computer: ${computerScore} #You: ${humanScore}`);
  }
  else if (humanChoice == 1 && computerChoice == 3) {
    humanScore += 1;
    alert(`You win! Current Score  #Computer: ${computerScore} #You: ${humanScore}`);
  }
  else if (humanChoice == 3 && computerChoice == 1) {
    computerScore += 1;
    alert(`Computer wins! Current Score #Computer: ${computerScore} #You: ${humanScore}`);
  }
  else if (humanChoice == 2 && computerChoice == 3) {
    computerScore += 1;
    alert(`Computer wins! Current Score #Computer: ${computerScore} #You: ${humanScore}`);
  }
  else {
    humanScore += 1;
    alert(`You win! Current Score  #Computer: ${computerScore} #You: ${humanScore}`);
  }
}