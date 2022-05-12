// the score storage for computer , player and general storage
let playerScore = 0 ;
let computerScore = 0;
let count = 0;


// computer options to choose from
const com = ['rock','paper','scissors']

// Create a function that returns randomly rock paper and scissors
function computerPlay(){
    // randomize the array strings
    const rand = Math.floor(Math.random() * 3)
    return com[rand]
}
// console.log(computerPlay())

// Create function playerRound that accepts two parameter
//const input = prompt("Input your game:")



function playerRound(playerSelection, computerSelection){
   
   
    // Make the playerSelection case insensitive
    
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
   
    if(playerSelection === computerSelection){
         return  "It's a tie"
    }
    else if(playerSelection == "rock" ){
        if(computerSelection == "Paper"){
            computerScore++
            return "You lose: paper beats rock"
        }else{
            playerScore++
            return "You win: rock beats scissors"
        }
    }
   else if(playerSelection == "scissors"){
       if(computerSelection== "rock"){
           computerScore++
           return "You lose: rock beat scissors"
       }else{
           playerScore++
           return "You win: scissors beats paper"
       }
   }
   else if(playerSelection == "paper"){
       if(computerSelection == "scissors"){
           computerScore++
           return "You lose: scissors beats paper"
       }else{
           playerScore++
           return "You win: paper beats rock"
       }
   }  
}


function game(){
   let computerDo = computerPlay();
   let playerDo = "scissors";

//    do{
//        let gameRound = playerRound(playerDo, computerDo);
//        if(gameRound === "You lose: paper beats rock" || "You lose: rock beat scissors" || "You lose: scissors beats paper"){
//        compScore+=1
//        count+=1
//     }else if(gameRound === "You win: rock beats scissors" || "You win: scissors beats paper" || "You win: paper beats rock" ){
//          playScore+=1
//          count+=1
//     }else{
//         count+=1
//     }

//     if(compScore > playScore){
//         console.log("Computer wins")
//     }else if(playScore>compScore){
//         console.log("Player wins")
//     }else{
//         console.log("It's tie")
//     }
//    }while(count < 5 )

//    return playScore
//    return compScore
//    return count
let gameRound = playerRound(playerDo, computerDo);


if(gameRound === ("You lose: paper beats rock" || "You lose: rock beat scissors" || "You lose: scissors beats paper")){
        computerScore = computerScore + 1
        count+=1
    }else if(gameRound === ("You win: rock beats scissors" || "You win: scissors beats paper" || "You win: paper beats rock") ){
        playerScore= playerScore + 1
        count= count + 1
    }else{
        count= count + 1
        }

        
 
        return gameRound
 }

 //Play the game five times

console.log(game())
console.log(game())
console.log(game())
console.log(game())
console.log(game())


// Checking the winnner
if(computerScore > playerScore){
    console.log("Computer wins: you lose")
}else if(computerScore < playerScore){
    console.log("Player wins")
}