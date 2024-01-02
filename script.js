let userChoice;
let computerChoice;
let player = computer = tie = rounds = 0;
//make a loop to call the functions 5 times
// CREATE BUTTON Rock
const rock = document.createElement('button');
rock.innerHTML = "Rock";
document.body.appendChild(rock);
rock.addEventListener("click", function () { compareUserInput("Rock") });
const paper = document.createElement('button');
paper.innerHTML = "Paper";
document.body.appendChild(paper);
paper.addEventListener("click", function () { compareUserInput("Paper") });
const scissor = document.createElement('button');
scissor.innerHTML = "Scissor";
document.body.appendChild(scissor);
scissor.addEventListener("click", function () { compareUserInput("Scissor") });
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
function compareUserInput(userChoice) {
    rounds++;
    // call the function to generate randomly
    generateComputerChoice();

    // get the user input with prompt
    if (userChoice == "Rock" && computerChoice == "Rock") {
        tie++;
    }
    else if (userChoice == "Rock" && computerChoice == "Scissors") {
        player++;
    }
    else if (userChoice == "Rock" && computerChoice == "Paper") {
        computer++;
    }
    else if (userChoice == "Paper" && computerChoice == "Paper") {
        tie++;
    }
    else if (userChoice == "Paper" && computerChoice == "Rock") {
        player++
    }
    else if (userChoice == "Paper" && computerChoice == "Scissors") {
        computer++;
    }
    else if (userChoice == "Scissors" && computerChoice == "Scissors") {
        tie++;
    }
    else if (userChoice == "Scissors" && computerChoice == "Paper") {
        player++;
    }
    else if (userChoice == "Scissors" && computerChoice == "Rock") {
        computer++;
    }
}



// keep scores and report who won the most
function displayResults() {
    const results = document.createElement('div');

    if (player > computer) {
        results.innerHTML = "The player has won the most!\nPlayer: " + player + "\nComputer: " + computer + "\nTie: " + tie;
    }
    else if (computer > player) {
        results.innerHTML = "The computer has won the most!\nComputer: " + computer + "\nPlayer: " + player + "\nTie: " + tie;
    }
    else {
        results.innerHTML = "Tie! No one has won!\nTie: " + tie + "\nPlayer: " + player + "\nComputer: " + computer;
    }
    document.body.appendChild(results);
}
