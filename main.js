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

    if(computerChoice.toLowerCase() === humanChoice.toLowerCase()) {
        console.log("It's a tie");
        return;
    }

    let result

    if (computerChoice.toLowerCase() === "rock") {
        if (humanChoice.toLowerCase() === "scissors") {
            result = "Rock beats Scissors ";
            computerScore++;
            console.log("Computer wins! " + result);
        } else {
            result = "Paper beats Rock ";
            humanScore++;
            console.log("Human wins! " + result);
        }
    } else if (computerChoice.toLowerCase() === "scissors") {
        if (humanChoice.toLowerCase() === "paper") {
            result = "Scissors beats paper ";
            computerScore++;
            console.log("Computer wins! " + result);
        } else {
            result = "Rock beats Scissors ";
            humanScore++;
            console.log("Human wins! " + result);
        }
    } else if (computerChoice.toLowerCase() === "paper") {
        if (humanChoice.toLowerCase() === "rock") {
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

function playGame() {
    let i = 0;
    while (i < 5) {
        playRound(getComputerChoice(), getHumanChoice());
        i++;
    }
}





playGame();

console.log("Computer Score: " + computerScore);
console.log("Human Score: " + humanScore);

if (humanScore > computerScore) {
    console.log("Human is the Winner");
} else if (computerScore > humanScore) {
    console.log("Computer is the Winner");
} else {
    console.log("No winner because both players TIED!")
}
