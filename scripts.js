// Rock paper scissors game.
// Takes user input and plays it against a random computer choice.
// Displays the winner after each round, and the overall winner after a set number of rounds.

const resultTag = document.querySelector('#result');
function displayResult(result, playerSelection, computerSelection) {
    resultTag.textContent = playerSelection + ' ' +result + ' ' +computerSelection;
}

function gameOver(result) {
    console.log(result);
}

// Randomly returns rock, paper or scissors
function computerPlay() {
    const hands = ['🪨', '📄', '✂️']
    return  hands[Math.floor(Math.random() * hands.length)]
}

function playRound (playerSelection) {
    computerSelection = computerPlay();
    // Draw
    if (playerSelection === computerSelection) {
        displayResult(`Draw!`, playerSelection, computerSelection);
        return;
    }
    // Player win
    if (
    (playerSelection === '🪨' && computerSelection === '📄') ||
    (playerSelection === '📄' && computerSelection === '🪨') ||
    (playerSelection === '✂️' && computerSelection === '📄')
    ) {
        displayResult('Win!', playerSelection, computerSelection);
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        if (playerScore.textContent === '5') {
            gameOver('win');
        }
        return;
    }
    // Computer win 
    displayResult('Lose!', playerSelection, computerSelection);
    cpuScore.textContent = parseInt(cpuScore.textContent) + 1;
    if (cpuScore.textContent === '5') {
        gameOver('lose');
    }
    return;
}

let playerScore = document.querySelector('#playerScore');
let cpuScore = document.querySelector('#cpuScore');
const choices = [...document.querySelectorAll('div#choices > button.choice')];
choices[0].addEventListener('click', () => playRound('🪨'));
choices[1].addEventListener('click', () => playRound('📄'));
choices[2].addEventListener('click', () => playRound('✂️'));
