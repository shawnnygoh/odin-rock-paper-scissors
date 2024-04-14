function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toUpperCase();
    computer = computerSelection.toUpperCase();

    if (player == computer) {
        return "Tie!";
    } else if (player == "PAPER" && computer == "ROCK") {
        return "You Win! Paper beats Rock";
    } else if (player == "PAPER" && computer == "SCISSORS") {
        return "You Lose! Scissors beats Paper";
    } else if (player == "ROCK" && computer == "PAPER") {
        return "You Lose! Paper beats Rock";
    } else if (player == "ROCK" && computer == "SCISSORS") {
        return "You Win! Rock beats Scissors";
    } else if (player == "SCISSORS" && computer == "PAPER") {
        return "You Win! Scissors beats Paper";
    } else {
        return "You Lose! Rock beats Scissors";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your choice?");
        let computerSelection = getComputerChoice();
        // console.log(playRound(playerSelection, computerSelection));
        alert(playRound(playerSelection, computerSelection));
    }
}

playGame();