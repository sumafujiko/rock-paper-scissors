let words = ["Rock", "Paper", "Scissors"];

let gameRules = {
    "Rock": "Scissors",
    "Scissors": "Paper",
    "Paper": "Rock"
};

function randomChoice(words) {
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

function getComputerChoice() {
    return randomChoice(words);
}

function playRound(playerSelection, computerSelection) {
    Get results of playerSelection and computerSelection
    "Rock" > "Scissors",
    "Scissors" > "Paper",
    "Paper" > "Rock"
    If both values match, replay playRound. 
    If playerSelection is greater than computerSelection, log "You win! x beats y", otherwise "You lose! x beats y"
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

