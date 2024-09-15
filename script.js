// console.log("Hello World!!");

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
