// create the player and the computer as variables
// 1. Get the player move
    //  - promt, user inputs their move in the browser
// 2. Get the computer move
    //  - use a random number to select a move from an array
// 3. Check the result using both moves
    // if the moves are the same, the result is a draw
    // paper beats rock, rock beat scissors, scissors beat paper
    // player wins, computer wins or  a draw are the options
// 4. Display the result
    // - alert!
// 5. Reset the game (bonus)
    // Ask the user if they want to play again

// EXTENSION
    // Display the scores to the user after the round
    // Make the game best of 5


    const userMove = () => {
        return prompt("Please enter your move").toLowerCase();
    }
    const computerMove = () => {
        let moves = ["rock", "paper", "scissors"];
        let randomNumber = Math.floor(Math.random() * 3);
        alert("Computer chose " + moves[randomNumber]);
        return moves[randomNumber];
    }
    const checkResult = (moveHuman, moveRobot) => {
        if (moveHuman === moveRobot) {
            return "draw";
        } else if ((moveHuman === "rock" && moveRobot === "scissors") || 
                   (moveHuman === "paper" && moveRobot === "rock") ||
                   (moveHuman === "scissors" && moveRobot === "paper"))  {
            return "Human wins";
        } else if ((moveRobot === "rock" && moveHuman === "scissors") || 
                   (moveRobot === "paper" && moveHuman === "rock") ||
                   (moveRobot === "scissors" && moveHuman === "paper")) {
            return "Robot wins";
        }
    }
    
    let humanScore = 0;
    let robotScore = 0;
    for (i = 0; i < 100; i++) {    
        let moveHuman = userMove();
        let moveRobot = computerMove();
        let result = checkResult(moveHuman, moveRobot);
        alert(result);
        if (result === "Human wins") {
            humanScore++;
        } else if (result === "Robot wins") {
            robotScore++;
        }
        alert(`Robot is on ${robotScore} points and Human is on ${humanScore}`);
        let retry = prompt("Do you want to play again?");
        if (retry === "no") {
            break;
        }  else if (retry === "yes") {
        } 
    }


