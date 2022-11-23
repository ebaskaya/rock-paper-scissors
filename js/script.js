let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.choice');
const result = document.createElement('div');
const scores = document.createElement('div');
let game = true;
scores.textContent = "Player: 0 Computer: 0";
document.body.appendChild(scores);
document.body.appendChild(result);


buttons.forEach(button => button.addEventListener('click', setChoices));



function getComputerChoice(choices) {
    
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}


function playRound(playerChoice, computerChoice, choices){
    

    if(playerChoice === computerChoice) {
        result.textContent = "It's a draw!"; 
    }
    else if(choices[(choices.indexOf(playerChoice) + 1) % 3] === computerChoice) {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        scores.textContent =  `Player: ${++playerScore} Computer: ${computerScore}`;
    }
    else {
        result.textContent = `You lose! ${playerChoice} loses to ${computerChoice}.`;
        scores.textContent = `Player: ${playerScore} Computer: ${++computerScore}`
        }
    if(playerScore === 5 || computerScore === 5){
        
        result.textContent = `Game is finished. ${playerScore > computerScore ? 'Player wins' : 'Computer wins.'}`
        game = false;
        
    }
    
}


function setChoices() {
    if(!game){
        return;
    }
    const choices = ["Rock", "Scissors", "Paper"];
    playerChoice = this.textContent; //button's text content
    computerChoice = getComputerChoice(choices);
    
    
    playRound(playerChoice, computerChoice, choices);

    
}





