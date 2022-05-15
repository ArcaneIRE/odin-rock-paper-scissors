// Rock paper scissors game.
// Takes user input and plays it against a random computer choice.
// Displays the winner after each round, and the overall winner after a set number of rounds.

// Randomly returns rock, paper or scissors
function computerPlay() {
    const hands = ['rock', 'paper', 'scissors']
    return  hands[Math.floor(Math.random() * hands.length)]
}

function getRoundWinner (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    // Draw
    if (playerSelection === computerSelection) {
        return `draw`;
    }
    // Player win
    if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === ' paper')
    ) {
        return 'player win';
    }
    // Computer win 
    return 'computer win' ; 
}

// Plays a given number of RPS rounds.
// Displays the winner of each round.
// Displays the overall winner.
function playGame(rounds = 5) {
    const gameLength = rounds;
    let playerWins = 0;
    let computerWins = 0;
    
    for (i = 0; i < gameLength; i++) {
        let result = playRound(prompt('Rock, paper or scissors?'), computerPlay());
        
        if (result === 'draw') {
            console.log('A draw!');
        }  else if (result === 'player win') {
            playerWins += 1;
            console.log('You won this round!');
        } else {
            computerWins += 1;
            console.log('You lose!');
        }   
    }

    if (playerWins === computerWins) {
        console.log('This game is a draw.');
    } else if (playerWins > computerWins) {
        console.log('The player wins the game!');
    } else {
        console.log('The computer wins the game!');
    }
}

playGame(5);