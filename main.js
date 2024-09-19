let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const key = Math.floor(Math.random() * 3);
    let compChoice;

    switch (key) {
        case 0:
            compChoice = "Rock";
            return compChoice.toLowerCase();
            break;
    
        case 1:
            compChoice = "Paper";
            return compChoice.toLowerCase();
            break;
        
        case 2: 
            compChoice = "Scissors"
            return compChoice.toLowerCase();
            break;

        default:
            return null;
            break;
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper or Scissors?", "pick one!");
    humanChoice.toLowerCase();

    try {
        if (humanChoice === "rock" || "paper" || "scissors") {
            return humanChoice;
        } else {
            throw "WRONG!"; 
        }
    } catch (error) {
        console.log(error);
    }
   
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playRound(computerChoice, humanChoice) {
    //tie scenarios

    if(computerChoice === humanChoice) {
        console.log("It's a tie");
        return;
    }

    let result

    if (computerChoice === "rock") {
        if (humanChoice === "scissors") {
            result = "Rock beats Scissors ";
            computerScore++;
            console.log("Computer wins! " + result);
        } else {
            result = "Paper beats Rock ";
            humanScore++;
            console.log("Human wins! " + result);
        }
    } else if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
            result = "Scissors beats paper ";
            computerScore++;
            console.log("Computer wins! " + result);
        } else {
            result = "Rock beats Scissors ";
            humanScore++;
            console.log("Human wins! " + result);
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            result = "Paper beats Rock ";
            computerScore++;
            console.log("Computer wins! " + result);
        } else {
            result = "Scissors beats Paper ";
            humanScore++;
            console.log("Human wins! " + result);
        }
    } 

}

playRound(computerChoice, humanChoice);
console.log("Computer Score: " + computerScore);
console.log("Human Score: " + humanScore);
