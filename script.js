// console.log("Hello World!!");

function getComputerChoice(){
  let randomInt = Math.floor(Math.random()*3);

  return (randomInt===0) ? "rock" : 
      (randomInt===1) ? "paper" : 
      "scissors";
}

function getHumanChoice(){
  let humanChoice = prompt("Hi\x21 Please, choose between Rock, Paper or Scissors").toLowerCase();
  while (!humanChoice || (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors")){
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
  let roundWinner = getWinner(humanChoice, computerChoice);

  if (roundWinner === "tie"){
    console.log("It's a tie! Nobody won this round.");
  } else if (roundWinner === "computer"){
    console.log(`You lose! ${computerChoice} beat${computerChoice !== "scissors" ? "s" : ""} ${humanChoice}\x21`);
  } else{
    console.log(`You won! ${humanChoice} beat${humanChoice !== "scissors" ? "s" : ""} ${computerChoice}\x21`);
  }

  return roundWinner;
}

function getWinner(humanChoice, computerChoice){
  if (humanChoice === computerChoice){
    return "tie";
  } else if ( (humanChoice === "paper" && computerChoice === "scissors") || 
              (humanChoice === "rock" && computerChoice === "paper") || 
              (humanChoice === "scissors" && computerChoice === "rock")){
    return "computer";
  } else{
    return "human";
  }
}

function playGame(){
  let humanScore = 0, computerScore = 0;
  let humanChoice = "", computerChoice = "";
  let roundWinner = "";

  for(let i = 0; i < 5; i++){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    roundWinner = playRound(humanChoice, computerChoice);

    if (roundWinner === "human"){
      humanScore += 1;
    } else if (roundWinner === "computer"){
      computerScore += 1;
    }
  }

  console.log("Game is over!");
  console.log(`The winner is ${ humanScore > computerScore ? "you!" : 
    computerScore > humanScore ? "the computer!" :
    "no one! There was a tie"}`);
  console.log(`Final computer score: ${computerScore}`);
  console.log(`Final human score: ${humanScore}`);
}

playGame();