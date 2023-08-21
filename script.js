let userChoice;
let computerChoice;
let player = computer = tie = 0;

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

function getUserInput() {
    userChoice = prompt("Rock, Paper or Scissors?");
    if (userChoice != null) {
        //The user input must be case-insensitive, makes the first letter upper case and the rest lower case for further comparison
        userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
    }
    else
        alert("You cancelled!");
}

//make a loop to call the functions 5 times
for (let x = 0; x < 5; x++) {
    let winner = compareUserInput();
    if (winner == "player") {
        alert("The player winned!");
        player++;
    }
    else if (winner == "computer") {
        alert("The computer winned!");
        computer++;
    }
    else if (winner == "tie") {
        alert("Tie!");
        tie++;
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