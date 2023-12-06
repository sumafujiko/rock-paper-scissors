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
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (gameRules[playerSelection] === computerSelection) {
        return ("You win! " + playerSelection + " beats " + computerSelection + ".")
    } else if (playerSelection === computerSelection) {
        return ("That was a tie! Try again.");
    } else {
        return ("You lose! " + computerSelection + " beats " + playerSelection+ ".")
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }
   
    if (playerScore > computerScore) {
        console.log("You are the winner!");
    } else if (playerScore < computerScore) {
        console.log("The computer is the winner!");
    } else {
        console.log("It's a tie!");
    }
}

game();
