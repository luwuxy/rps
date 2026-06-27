function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)]
}

function getHumanChoice(input) {
    input = input.toLowerCase();
    if (input === "rock") {
        return "rock";
    } else if (input === "paper") {
        return "paper";
    } else if (input === "scissors") {
        return "scissors";
    } else {
        return "invalid";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let output;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            output = "It's a tie!";
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                output = "You lose! Paper beats Rock.";
                computerScore++;
            } else if (computerChoice === "scissors") {
                output = "You win! Rock beats Scissors.";
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                output = "You win! Paper beats Rock.";
                humanScore++;
            } else if (computerChoice === "scissors") {
                output = "You lose! Scissors beats Paper.";
                computerScore++;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                output = "You lose! Rock beats Scissors.";
                computerScore++;
            } else if (computerChoice === "paper") {
                output = "You win! Scissors beats Paper.";
                humanScore++;
            }
        }
    }

    while (humanScore < 3 && computerScore < 3) {
        const humanSelection = getHumanChoice(prompt("Rock, paper, or scissors?"));
        const computerSelection = getComputerChoice();

        if (humanSelection === "invalid") {
            alert("Invalid input! Please try again.");
        } else {
            playRound(humanSelection, computerSelection);

            alert(
                `${output}\n---\n` +
                `Your hand: ${humanSelection.toUpperCase()}\n` +
                `Enemy hand: ${computerSelection.toUpperCase()}`
            )

            alert(
                `Your score: ${humanScore}\n` +
                `AI score: ${computerScore}`
            );
        }
    }

    if (humanScore > computerScore) {
        alert("You won the game!");
    } else {
        alert("You lost the game!");
    }
}

playGame();
