let userChoice;
let computerChoice;
let player = computer = tie = 0;
//make a loop to call the functions 5 times
// CREATE BUTTON Rock
const rock = document.createElement('button');
document.body.appendChild(rock);
// CREATE BUTTON PAPER
// CREATE BUTTON SCISSORS
// ADD EVENT LISTENER TO BUTTON ROCK THAT CALLS THE FUNCTION AS ROCK AS THE PARAMETER
// ADD EVENT LISTENER TO BUTTON PAPER THAT CALLS THE FUNCTION AS PAPER AS THE PARAMETER
// ADD EVENT LISTENER TO BUTTON SCISSORS THAT CALLS THE FUNCTION AS SCISSORS AS THE PARAMETER
// CREATE A DIV TO DISPLAY RESULTS
// ONCE 5 ROUNDS WERE PLAYED ANNOUNCE A WINNER

//create a function to randomly generate either 'Rock', 'Paper' or 'Scissors'
function generateComputerChoice() {

    let rng = Math.floor(Math.random() * 3);

    switch (rng) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        default:
            computerChoice = "Scissors";
            break;
    }
}

//declare a function to to compare the user input versus the randomly generated and return the winner
function compareUserInput(choice) {

    // call the function to generate randomly
    generateComputerChoice();

    // get the user input with prompt
    getUserInput();
    if (userChoice == "Rock" && computerChoice == "Rock") {
        return "tie";
    }
    else if (userChoice == "Rock" && computerChoice == "Scissors") {
        return "player";
    }
    else if (userChoice == "Rock" && computerChoice == "Paper") {
        return "computer";
    }
    else if (userChoice == "Paper" && computerChoice == "Paper") {
        return "tie";
    }
    else if (userChoice == "Paper" && computerChoice == "Rock") {
        return "player";
    }
    else if (userChoice == "Paper" && computerChoice == "Scissors") {
        return "computer";
    }
    else if (userChoice == "Scissors" && computerChoice == "Scissors") {
        return "tie";
    }
    else if (userChoice == "Scissors" && computerChoice == "Paper") {
        return "player";
    }
    else if (userChoice == "Scissors" && computerChoice == "Rock") {
        return "computer";
    }
    else {
        return "invalid";
    }
}



// keep scores and report who won the most
if (player > computer) {
    alert("The player has won the most!\nPlayer: " + player + "\nComputer: " + computer + "\nTie: " + tie);
}
else if (computer > player) {
    alert("The computer has won the most!\nComputer: " + computer + "\nPlayer: " + player + "\nTie: " + tie);
}
else {
    alert("Tie! No one has won!\nTie: " + tie + "\nPlayer: " + player + "\nComputer: " + computer);
}