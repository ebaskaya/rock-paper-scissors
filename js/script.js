


function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoices[computerChoice];
}

computerChoice = getComputerChoice();
console.log(computerChoice);

function getPLayerChoice() {
    let playerChoice = prompt("Type your selection");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

playerChoice = getPLayerChoice();
console.log(playerChoice);

function playRound(computerChoice, playerChoice) {
    const choices = ["rock", "scissors", "paper"];
    computerChoice = computerChoice.toLowerCase();
    
    if(playerChoice === computerChoice) {
        return "It's a tie!";
    }
    else if(choices[(choices.indexOf(playerChoice) + 1) % 3] === computerChoice) {
        return "You win!";
    }
    else return "You lose!";
    
    
    
    
}

result = playRound(computerChoice, playerChoice);
console.log(result);