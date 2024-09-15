// console.log("Hello World!!");

function getComputerChoice(){
  let randomInt = Math.floor(Math.random()*3);

  /*
  let result = "";
  switch (randomInt){
    case 0:{
      result = "Rock";
      break;
    }
    case 1:{
      result = "Paper";
      break;
    }
    case 2:{
      result = "Scissors";
      break;
    }
    default:{
      result = "Rock";
    }
  }
  return result;
  */

  return (randomInt===0) ? "Rock" : 
      (randomInt===1) ? "Paper" : 
      "Scissors";
}
