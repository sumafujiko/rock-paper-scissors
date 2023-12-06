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
    if (gameRules[playerSelection] === computerSelection) {
        return ("You win! " + playerSelection + " beats " + computerSelection + ".")
    } else if (playerSelection === computerSelection) {
        return ("That was a tie! Try again.");
    } else {
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".")
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
