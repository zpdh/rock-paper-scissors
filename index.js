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
    let result

    function victory() {
    alert(`You Won! ${playerInput} beats ${computerInput}`)
    }
    if (playerInput == 'rock' && computerInput == 'scissors' || playerInput == 'paper' && computerInput == 'rock' || playerInput == 'scissors' && computerInput == 'paper') {
        let result = victory()
    }


    function loss() {
    alert(`You lost! ${computerInput} beats ${playerInput}`)
    }
    if (playerInput == 'rock' && computerInput == 'paper' || playerInput == 'paper' && computerInput == 'scissors' || playerInput == 'scissors' && computerInput == 'rock') {
    let result = loss()
    }
    
    function tie() {
        alert('You tied!')
    }
    if (playerInput == 'rock' && computerInput == 'rock' || playerInput == 'paper' && computerInput == 'paper' || playerInput == 'scissors' && computerInput == 'scissors') {
        let result = tie()
    }
    
    return result
}

