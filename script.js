//create a function to randomly generate either 'Rock', 'Paper' or 'Scissors'
function generateComputerChoice() {

    let randomGenerated = Math.floor(Math.random() * 3);

    switch (randomGenerated) {
        case 1:
            randomGenerated = "Rock";
            break;
        case 2:
            randomGenerated = "Paper";
            break;
        default:
            randomGenerated = "Scissor";
            break;
    }
    return randomGenerated;
}

//declare a function to to compare the user input versus the randomly generated and return the winner
// get the user input with prompt
// the user input must be case-insensitive
// call the function to generate randomly
// compare who winned
//return the winner of the round

//make a loop to call the functions 5 times
// keep scores and report who won the most