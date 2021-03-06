// Rock paper scissors game.
// Takes user input and plays it against a random computer choice.
// Displays the winner after each round, and the overall winner after a set number of rounds.

const rockSVG = document.querySelector('.rockSVG');
const paperSVG = document.querySelector('.paperSVG');
const scissorsSVG = document.querySelector('.scissorsSVG');
function selectionToSVG(selection) {
    if (selection === '🪨') {
        return rockSVG.cloneNode(true);
    }
    if (selection === '📄') {
        return paperSVG.cloneNode(true);
    }
    return scissorsSVG.cloneNode(true);
}

const results = document.querySelector('#results');
function displayResult(outcome, playerSelection, computerSelection) {
    text = document.createElement('span');
    text.textContent = outcome;
    let result = document.createElement('div');
    result.append(selectionToSVG(playerSelection));
    result.append(text);
    result.append(selectionToSVG(computerSelection));
    result.classList.add('result');
    result.addEventListener('animationend', event => event.target.remove());
    results.append(result);
}

function gameOver(result) {
    if (result === true) {
        alert('You won! Well played!');
    } else {
        alert('You lost! Maybe you need some more practice...');
    }
    playerScore.textContent = 0;
    cpuScore.textContent = 0;
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
        displayResult('Draw!', playerSelection, computerSelection);
        return;
    }
    // Player win
    if (
    (playerSelection === '🪨' && computerSelection === '✂️') ||
    (playerSelection === '📄' && computerSelection === '🪨') ||
    (playerSelection === '✂️' && computerSelection === '📄')
    ) {
        displayResult('Win!', playerSelection, computerSelection);
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        if (parseInt(playerScore.textContent) >= '5') {
            gameOver(true);
        }
        return;
    }
    // Computer win 
    displayResult('Lose!', playerSelection, computerSelection);
    cpuScore.textContent = parseInt(cpuScore.textContent) + 1;
    if (parseInt(cpuScore.textContent) >= '5') {
        gameOver(false);
    }
    return;
}

let playerScore = document.querySelector('#playerScore');
let cpuScore = document.querySelector('#cpuScore');
const choices = [...document.querySelectorAll('div#choices > button.choice')];
choices[0].addEventListener('click', () => playRound('🪨'));
choices[1].addEventListener('click', () => playRound('📄'));
choices[2].addEventListener('click', () => playRound('✂️'));
