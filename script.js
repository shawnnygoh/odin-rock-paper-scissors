let rock = document.getElementById("rock");
rock.addEventListener("click", () => playRound("Rock", getComputerChoice()));

let paper = document.getElementById("paper");
paper.addEventListener("click", () => playRound("Paper", getComputerChoice()));

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

let playerScore = 0;
let computerScore = 0;
let playerScoreVisual = document.getElementById("playerScore");
let computerScoreVisual = document.getElementById("computerScore");
let result = document.getElementById("result");

function closeFinalScoreModal() {
    finalScoreModal.classList.remove("active");
    overlay.classList.remove("active");
}

function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toUpperCase();
    computer = computerSelection.toUpperCase();

    if (player == computer) {
        // return "Tie!";
        playerScore++;
        computerScore++;
        playerScoreVisual.textContent = `Player: ${playerScore}`;
        computerScoreVisual.textContent = `Computer: ${computerScore}`;
        result.textContent = "It's a tie!";
    } else if (player == "PAPER" && computer == "ROCK") {
        // return "You Win! Paper beats Rock";
        playerScore++;
        playerScoreVisual.textContent = `Player: ${playerScore}`;
        result.textContent = "You Win! Paper beats Rock";
    } else if (player == "PAPER" && computer == "SCISSORS") {
        // return "You Lose! Scissors beats Paper";
        computerScore++;
        computerScoreVisual.textContent = `Computer: ${computerScore}`;
        result.textContent = "You Lose! Scissors beats Paper";
    } else if (player == "ROCK" && computer == "PAPER") {
        // return "You Lose! Paper beats Rock";
        computerScore++;
        computerScoreVisual.textContent = `Computer: ${computerScore}`;
        result.textContent = "You Lose! Paper beats Rock";
    } else if (player == "ROCK" && computer == "SCISSORS") {
        // return "You Win! Rock beats Scissors";
        playerScore++;
        playerScoreVisual.textContent = `Player: ${playerScore}`;
        result.textContent = "You Win! Rock beats Scissors";
    } else if (player == "SCISSORS" && computer == "PAPER") {
        // return "You Win! Scissors beats Paper";
        playerScore++;
        playerScoreVisual.textContent = `Player: ${playerScore}`;
        result.textContent = "You Win! Scissors beats Paper";
    } else {
        // return "You Lose! Rock beats Scissors";
        ComputerScore++;
        computerScoreVisual.textContent = `Computer: ${computerScore}`;
        result.textContent = "You Lose! Rock beats Scissors";
    }

    if (playerScore == 5) {
        finalScoreModal.classList.add("active");
        overlay.classList.add("active");
        finalScoreMessage.textContent = "You won! Man > Machine.";
    } else if (computerScore == 5) {
        finalScoreModal.classList.add("active");
        overlay.classList.add("active");
        finalScoreMessage.textContent = "You lost... Better luck next time.";
    }
}


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("What's your choice?");
//         let computerSelection = getComputerChoice();
//         // console.log(playRound(playerSelection, computerSelection));
//         alert(playRound(playerSelection, computerSelection));
//     }
// }

// playGame();

// let finalScoreModal = document.getElementById("finalScoreModal");
// let finalScoreMessage = document.getElementById("finalScoreMessage");
// let overlay = document.getElementById("overlay");
// let newGameButton = document.getElementById("newGameButton");

// newGameButton.addEventListener("click", playNewGame());
// overlay.addEventListener("click", closeFinalScoreModal());

// function playNewGame() {
//     playerScore = 0;
//     computerScore = 0;
//     playerScoreVisual.textContent = "Player: 0";
//     computerScoreVisual.textContent = "Computer: 0";
//     finalScoreModal.classList.remove("active");
//     overlay.classList.remove("active");
// }