


function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoices[computerChoice];
}

computerChoice = getComputerChoice();
console.log(computerChoice);