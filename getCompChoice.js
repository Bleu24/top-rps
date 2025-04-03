const getComputerChoice = () => {

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

module.exports = getComputerChoice;