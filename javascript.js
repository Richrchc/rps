let choices = ["rock","paper","scissors"];
function getComputerChoice(){ 
    let comChoice = Math.floor(Math.random()*choices.length) +1 ;
if (comChoice == 3){
        return "scissors"   
}else if(comChoice== 2){
    return "paper"
}else{comChoice == 1
    return "rock"
};//getComputerChoice options
}
function playRound(){
let playerSelection = prompt("Rock, paper, or Scissors!").toLowerCase();
let compChoice = getComputerChoice();
if (playerSelection == "rock" && compChoice == "paper"){
alert("You lose! Paper covers Rock"),
computerScore++,
console.log("The score is",playerScore, "-", computerScore);
} else if (playerSelection =="rock" && compChoice == "scissors"){
alert("You win! Rock smashes scissors"),
playerScore++,
console.log("The score is", playerScore, "-", computerScore);
}else if(playerSelection == "paper" && compChoice == "scissors"){
alert("You lose! scissors cuts paper"),
computerScore++,
console.log("The score is",playerScore, "-", computerScore);
}else if(playerSelection=="paper" && compChoice=="rock"){
alert("You win! Paper covers Rock"),
playerScore++,
console.log("The score is", playerScore, "-", computerScore);
}else if(playerSelection== "scissors" && compChoice=="rock"){
alert("You lose! Rock smashses Scissors"),
computerScore++,
console.log("The score is", playerScore, "-", computerScore);
}else if(playerSelection=="scissors"&&compChoice == "paper"){
alert("You win! Scissors cuts Paper"),
playerScore++,
console.log("The score is",playerScore, "-", computerScore); 
}else if(playerSelection==compChoice){
    alert("its a tie")
}else{
    alert("Please input valid answer.")
}
}
//game situations 


function game() {
    for(let i=0;i<=5;i++){
 if( playRound() && winCounter>5){
    return i++
 } 
    }
}//loops playRound() 5 times

let playerScore = 0;
let computerScore = 0;
//scoreboard
