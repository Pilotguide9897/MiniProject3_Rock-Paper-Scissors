const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', () => {
let result = confirm("Would you like to play rock paper scissors?");
if (result) {
    console.log("Great! Let's begin");
    playRPS()
} else {
    console.log("Okay. Too bad...");
}
});

let wins = 0;
let losses = 0;
let ties = 0;

var computerOptions = ["R", "P", "S"];

function playRPS () {
    let userSelection = prompt("Please enter R, P, or S:");
    if (!userSelection) {
        return
    } else if (
      userSelection !== "R" &&
      userSelection !== "P" &&
      userSelection !== "S" &&
      userSelection !== "r" &&
      userSelection !== "p" &&
      userSelection !== "s"
    ) {
      console.log("That is not a valid input. Please enter R, P, or S");
      playRPS();
    } else {
      userChoiceUpper = userSelection.toUpperCase();
      return userChoiceUpper;
    } 
}

let userChoice = playRPS();

let randomNum = Math.floor(Math.random() * 3);
let computerChoice = computerOptions[randomNum];

alert (`The CPU opponent selected: ${computerChoice}`);

if (computerChoice === userChoice) {
  ties++;
  alert("You tied!");
} else if (
  (userChoice === "R" && computerChoice === "S") ||
  (userChoice === "P" && computerChoice === "R") ||
  (userChoice === "S" && computerChoice === "P")
) {
  wins++;
  alert("You Won!");
} else {
  losses++;
  alert("You lost!");
}

window.alert(
  "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
);

var playMore = confirm("Would you like to play more?");

if (playMore) {
    playRPS();
}


