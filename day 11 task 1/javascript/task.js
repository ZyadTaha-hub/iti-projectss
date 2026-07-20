let PlayerOneChoice = "Rock";
let PlayerTwoChoice = "Paper";

if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper") {
    console.log("Player Two Wins");
}

else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") {
    console.log("Player One Wins");
}

else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") {
    console.log("Player One Wins");
}

else if (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Rock") {
    console.log("Player Two Wins");
}

else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Scissors") {
    console.log("Player Two Wins");
}

else if (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper") {
    console.log("Player One Wins");
}

else if (PlayerOneChoice === PlayerTwoChoice) {
    console.log("It's a Tie");
}

else {
    console.log("Invalid Choice");
}