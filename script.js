let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  return Math.floor(Math.random()*3)+1;
}
let computerChoice = getComputerChoice();
function getHumanChoice(n){
  n=n.toLowerCase();
  if(n==="rock"){
    return 1;
  }
  else if (n==="paper"){
    return 2;
  }
  else if (n==="scissors"){
    return 3;
  }
  else{
    return "invalid input.";
  }
}
let pick = prompt("Enter your choice: ","");
let humanChoice = getHumanChoice(pick);
console.log(humanChoice);

function playRound(humanChoice, computerChoice){
  
}