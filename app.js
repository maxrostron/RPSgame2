
// Welcome Screen transition to rounds screen

const roundsContainer = document.getElementById('roundscontainer');
const startContainer = document.getElementById('startcontainer');
const proceedBtn = document.getElementById('proceed');
const closeBtn = document.getElementById('close');


proceedBtn.addEventListener('click', function() {
    startContainer.style.display = 'none';
    roundsContainer.style.display = 'flex';  
})

closeBtn.addEventListener('click', function() {
    window.location = "https://www.google.com/";
})

// How many rounds screen?

const roundSubmitBtn = document.getElementById('roundSubmit');
const gameContainer = document.getElementById('gamecontainer');

roundSubmitBtn.addEventListener('click', function () {
    numberOfRounds = document.getElementById('rounds').value;
    console.log(numberOfRounds);
    roundsContainer.style.display = 'none';
    gameContainer.style.display = 'initial';
})

// Let's play screen
    let roundNumber = 0;
    let numberOfRounds = 0;    
    let choices = ["rock", "paper", "scissors"];
    let computerSelection;
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let roundOutcome = document.getElementById('roundoutcome');
    let playerScoreDisplay = document.getElementById('playerscoredisplay');
    let computerScoreDisplay = document.getElementById('computerscoredisplay');
    
    
        function playRound(computerSelection, playerSelection) {
        
            if(computerSelection == choices[0] && playerSelection == choices[1]) {
                playerScore++;
                roundNumber++;
                roundOutcome.innerHTML = "You Win! Paper beats Rock!";
                playerScoreDisplay.innerHTML = playerScore;                
            }
            else if (computerSelection == choices[1] && playerSelection == choices[2]) {
                playerScore++;
                roundNumber++;
                roundOutcome.innerHTML = "You Win! Scissors beats Paper!";
                playerScoreDisplay.innerHTML = playerScore;

            }
            else if (computerSelection == choices[2] && playerSelection == choices[0]) {
                playerScore++;
                roundNumber++;
                roundOutcome.innerHTML = "You Win! Rock beats Scissors!";
                playerScoreDisplay.innerHTML = playerScore;
               

            }
            
            
            if(playerSelection == choices[0] && computerSelection == choices[1]) {
                computerScore++;
                roundNumber++;
                roundOutcome.innerHTML = "You Lose! Paper beats Rock!";
                computerScoreDisplay.innerHTML = computerScore;
                

            }
            else if (playerSelection == choices[1] && computerSelection == choices[2]) {
                computerScore++;
                roundNumber++;
                roundOutcome.innerHTML = "You Lose! Scissors beats Paper!";
                computerScoreDisplay.innerHTML = computerScore;
                

            }
            else if (playerSelection == choices[2] && computerSelection == choices[0]) {
                computerScore++;
                roundNumber++;
                roundOutcome.innerHTML = "You Lose! Rock beats Scissors!";
                computerScoreDisplay.innerHTML = computerScore;
                

            }
        
            else if(playerSelection == choices[0] && computerSelection == choices[0]) {
                roundOutcome.innerHTML = "Draw! Replay round!";
            }
            else if(playerSelection == choices[1] && computerSelection == choices[1]) {
                roundOutcome.innerHTML = "Draw! Replay round!";
            }
            else if(playerSelection == choices[2] && computerSelection == choices[2]) {
                roundOutcome.innerHTML = "Draw! Replay round!";
            }
        }
        
        
        //Selection
            document.getElementById('playerpaper').addEventListener('click', function() {
                playerSelection = "paper";
                computerSelection = choices[Math.floor(Math.random() * choices.length)];
                playRound(computerSelection, playerSelection);  
                console.log("number " + numberOfRounds);
                console.log("current " + roundNumber);
                computerHighlight()
                playerHighlight()
                endgamecheck()
            })
        
            document.getElementById('playerrock').addEventListener('click', function() {
                playerSelection = "rock";
                computerSelection = choices[Math.floor(Math.random() * choices.length)];
                playRound(computerSelection, playerSelection);
                computerHighlight()
                playerHighlight()
                endgamecheck()              
            })
        
            document.getElementById('playerscissors').addEventListener('click', function() {
                playerSelection = "scissors";
                computerSelection = choices[Math.floor(Math.random() * choices.length)];
                playRound(computerSelection, playerSelection);
                computerHighlight()
                playerHighlight()
                endgamecheck()  
            })

//Colour Element

function computerHighlight() {
    document.getElementById("cr").style.backgroundColor = "rgba(255, 255, 255, 0.986)"
    document.getElementById("cp").style.backgroundColor = "rgba(255, 255, 255, 0.986)"
    document.getElementById("cs").style.backgroundColor = "rgba(255, 255, 255, 0.986)"

    if(computerSelection == 'rock') {
        document.getElementById("cr").style.backgroundColor = "rgba(255, 204, 203, 0.8"
        }
    else if (computerSelection == 'paper') {
        document.getElementById("cp").style.backgroundColor = "rgba(255, 204, 203, 0.8"
    }
    else if (computerSelection == 'scissors') {
        document.getElementById("cs").style.backgroundColor = "rgba(255, 204, 203, 0.8"
    }
}

function playerHighlight() {
    document.getElementById("pr").style.backgroundColor = "rgba(255, 255, 255, 0.986)"
    document.getElementById("pp").style.backgroundColor = "rgba(255, 255, 255, 0.986)"
    document.getElementById("ps").style.backgroundColor = "rgba(255, 255, 255, 0.986)"

    if(playerSelection == 'rock') {
        document.getElementById("pr").style.backgroundColor = "#add8e6"
        }
    else if (playerSelection == 'paper') {
        document.getElementById("pp").style.backgroundColor = "#add8e6"
    }
    else if (playerSelection == 'scissors') {
        document.getElementById("ps").style.backgroundColor = "#add8e6"
    }
}




//Game Over

const endContainer = document.getElementById('endcontainer');
function endgamecheck() {
    if(roundNumber >= numberOfRounds){
        gameContainer.style.display = 'none';
        endContainer.style.display = 'flex';
        console.log("gameover")
        if(playerScore > computerScore){
            document.getElementById('finalscore').innerHTML = "Well done! You beat the world champion!"
        } 
        else {
            document.getElementById('gameoutcome').innerHTML = "You lose... better luck next time!"
        }
    } 
} 




    
// Reset Game
    function refreshPage(){
        window.location.reload();
    } 
