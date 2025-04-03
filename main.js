document.addEventListener("DOMContentLoaded", () => {
    alert("Page has loaded");
});

//global scores
let computerScore = 0;
let humanScore = 0;
const MAX_SCORE = 5;

// variables
let computerChoice = undefined;
let humanChoice = undefined;



//declare all node variables
let start = document.querySelector(".start");
let buttons = document.querySelector(".buttons");
let btns = buttons.children;
let scores = document.querySelector(".scores");

//custom events
let notInGameEvent = new CustomEvent("notInGame", {
    bubbles: true,
    detail: {
        btnState: true
    }
});

let inGameEvent = new CustomEvent("inGame", {
        bubbles : true
    }
);

let gameEndedEvent = new CustomEvent('gameEnded', {
        detail: {
            maxScore : 5
        },
        bubbles: true
    }
);


// function declarations
let startGame = () => {
    humanScore = 0;
    computerScore = 0;
    alert("Game has started!");
    
}

let getComputerChoice = () => {

    const key = Math.floor(Math.random() * 3);
    let compChoice;

    switch (key) {
        case 0:
            compChoice = "Rock";
            return compChoice.toLowerCase();
            
    
        case 1:
            compChoice = "Paper";
            return compChoice.toLowerCase();
            
        
        case 2: 
            compChoice = "Scissors"
            return compChoice.toLowerCase();

        default:
            return null;
            
    }
} 

let compareChoices = (humanChoice, computerChoice) => {
    //tie scenarios

    if(computerChoice.toLowerCase() === humanChoice.toLowerCase()) {
        console.log("It's a tie");
        return;
    }

    let result

    if (computerChoice.toLowerCase() === "rock") {
        if (humanChoice.toLowerCase() === "scissors") {
            result = "Rock beats Scissors ";
            return computerScore++;
            alert("Computer wins! " + result);
        } else {
            result = "Paper beats Rock ";
            return humanScore++;
            alert("Human wins! " + result);
        }
    } else if (computerChoice.toLowerCase() === "scissors") {
        if (humanChoice.toLowerCase() === "paper") {
            result = "Scissors beats paper ";
            return computerScore++;
            console.log("Computer wins! " + result);
        } else {
            result = "Rock beats Scissors ";
            return humanScore++;
            console.log("Human wins! " + result);
        }
    } else if (computerChoice.toLowerCase() === "paper") {
        if (humanChoice.toLowerCase() === "rock") {
            result = "Paper beats Rock ";
            return computerScore++;
            console.log("Computer wins! " + result);
        } else {
            result = "Scissors beats Paper ";
            return humanScore++;
            console.log("Human wins! " + result);
        }
    } 
}

//listeners
start.addEventListener("click", () => {
    start.dispatchEvent(inGameEvent);
    startGame();
});

//playing the game
buttons.addEventListener("click", (e) => {
    
    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();
    compareChoices(userChoice, computerChoice);
    scores.dispatchEvent(inGameEvent);

    if(humanScore === MAX_SCORE || computerScore === MAX_SCORE) {
        document.body.dispatchEvent(gameEndedEvent);
    }
  });

//checks if the game is ongoing
document.body.addEventListener("inGame", () => {
    start.disabled = true;
    Array.from(btns).forEach(btn => {
        btn.disabled = false;
    })

    scores.innerText = `
        Computer Score : ${computerScore}
        Human Score : ${humanScore}
        `;
});

document.body.addEventListener("gameEnded", e => {
    alert("gameOver!");
    start.disabled = false;

    humanScore = 0;
    computerScore = 0;
    document.body.dispatchEvent(notInGameEvent);
});

document.body.addEventListener("notInGame", e => {
    Array.from(btns).forEach(btn => {
        btn.disabled = e.detail.btnState;
    })
});

document.body.dispatchEvent(notInGameEvent);
