// console.log("Hello World!!");

let humanScore = 0, computerScore = 0;

function getComputerChoice(){
  let randomInt = Math.floor(Math.random()*3);

  return (randomInt===0) ? "Rock" : 
      (randomInt===1) ? "Paper" : 
      "Scissors";
}

function getHumanChoice(){
  let humanChoice = prompt("Hi\x21 Please, choose between Rock, Paper or Scissors");
  while (!humanChoice || (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors")){
    if (humanChoice === ""){
      alert("You didn't make a selection\x21");
    } else if (humanChoice === null){
      alert("It's rude to close the prompt without an answer\x21");
    } else{
      alert("Please enter a valid choice\x21");
    }
    humanChoice = prompt("Hi\x21 Please, choose between Rock, Paper or Scissors");
  }

  return humanChoice;
}


function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice){
    console.log("It's a tie! Nobody won this round.");
  } else if ( (humanChoice === "paper" && computerChoice === "scissors") || 
              (humanChoice === "rock" && computerChoice === "paper") || 
              (humanChoice === "scissors" && computerChoice === "rock")){
    console.log(`You lose! ${computerChoice} beat${computerChoice !== "scissors" ? "s" : ""} ${humanChoice}\x21`);
    computerScore += 1;
  } else{
    console.log(`You won! ${humanChoice} beat${humanChoice !== "scissors" ? "s" : ""} ${computerChoice}\x21`);
    humanScore += 1;
  }
  
  /*
  else if ( humanChoice === "paper" && computerChoice === "scissors"){
    console.log("You lose! Scissors beat Paper\x21");
    computerScore += 1;
  } else if ( humanChoice === "paper" && computerChoice === "rock"){
    console.log("You won! Scissors beat Paper\x21");
    humanScore += 1;
  } else if ( humanChoice === "rock" && computerChoice === "paper"){
    console.log("You lose! Paper beats Rock\x21");
    computerScore += 1;
  }
  */
}