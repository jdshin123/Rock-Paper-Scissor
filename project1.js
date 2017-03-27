var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


//more efficient way of  this ??//
var compare = function(choice1, choice2) {
    if(choice1 === choice2){
        alert ("The result is a tie!");
    }
    if(choice1 === "scissors" && choice2 === "rock") {
        alert( "you are the loser!");   
    }
    if(choice1 === "scissors" && choice2 === "paper") {
        alert ("you are the winner!");   
    }
   



    if(choice1 ==="paper" && choice2 === "rock") {
        alert( "you are the winner!");
    }
    if(choice1 ==="paper" && choice2 === "scissor") {
        alert( "you are the loser!");
    }


    if(choice1 === "rock" && choice2 === "scissors") {
     alert( "you are the winner!");   
    }
    if(choice1 === "rock" && choice2 === "paper") {
     alert("you are the loser!");   
    }

    
    
}

console.log(compare(userChoice,computerChoice));

