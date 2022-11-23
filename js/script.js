const buttons = document.querySelectorAll('.choice');
const result = document.createElement('div');
document.body.appendChild(result);

buttons.forEach(button => button.addEventListener('click', playRound));


function getComputerChoice(choices) {
    
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}




function playRound() {
    const choices = ["Rock", "Scissors", "Paper"];
    playerChoice = this.textContent; //button's text content
    computerChoice = getComputerChoice(choices);
    console.log(playerChoice);
    console.log(computerChoice);
    
    if(playerChoice === computerChoice) {
        return 0; 
    }
    else if(choices[(choices.indexOf(playerChoice) + 1) % 3] === computerChoice) {
        return 1; 
    }
    else return -1; 
    
    
    
    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        
        playerChoice = getPLayerChoice();
        
        result = playRound(computerChoice, playerChoice);
        if (result === 1) {
            console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
            playerScore++;
        }
        else if (result === 0){
            console.log("It's a tie!")
        }
        else {
            console.log(`You lose! ${playerChoice} loses to ${computerChoice}.`)
            computerScore++;
        }
        
    }
    console.log(`Final score is Player: ${playerScore} Computer: ${computerScore}`);
}

//game();

