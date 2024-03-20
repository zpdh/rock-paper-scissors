//Computer Selection

function getComputerChoice() {
const choices = ["rock", "paper", "scissors"]
let random = Math.floor(Math.random() * 3)
let computerChoice = choices[random]
return computerChoice
}

//Player Selection 

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper or scissors.", "")
    if (playerChoice.toLowerCase() == 'rock' || playerChoice.toLowerCase() == 'paper' || playerChoice.toLowerCase() == 'scissors') {
        return playerChoice.toLowerCase()
    }
    else {
        alert("Invalid option!")
    }
}

function playRound() {
    let playerInput = getPlayerChoice()
    let computerInput = getComputerChoice()
    
    //Case rock
    if (playerInput == 'rock' && computerInput == 'rock')
    alert('You tied!')
    if (playerInput == 'rock' && computerInput == 'paper')
    alert('You lost! Paper beats rock!')
    if (playerInput == 'rock' && computerInput == 'scissors')
    alert('You won! Rock beats scissor!')

    //Case paper
    if (playerInput == 'paper' && computerInput == 'paper')
    alert('You tied!')
    if (playerInput == 'paper' && computerInput == 'scissors')
    alert('You lost! Scissors beat paper')
    if (playerInput == 'paper' && computerInput == 'rock')
    alert('You won! Paper beats rock!')

    //Case scissors
    if (playerInput == 'scissors' && computerInput == 'scissors')
    alert('You tied!')
    if (playerInput == 'scissors' && computerInput == 'rock')
    alert('You lost! Rock beats scissors!')
    if (playerInput == 'scissors' && computerInput == 'paper')
    alert('You won! Scissors beat paper!')
}
