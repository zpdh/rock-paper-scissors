//Computer Selection

function getComputerChoice() {
const choices = ["rock", "paper", "scissors"]
let random = Math.floor(Math.random() * 3)
let computerPrompt = choices[random]
return computerPrompt
}

//Player Selection 

function getPlayerChoice() {
    let playerPrompt = prompt("Choose rock, paper or scissors.", "")
    if (playerPrompt.toLowerCase() == 'rock' || playerPrompt.toLowerCase() == 'paper' || playerPrompt.toLowerCase() == 'scissors') {
        return playerPrompt.toLowerCase()
    }
    else {
        alert("Invalid option!")
    }

// Round

}
function playRound() {
let result
computerChoice = getComputerChoice()
playerChoice = getPlayerChoice()

    if (playerChoice === undefined || playerChoice === null) {
        result = 'no result'

    }
    else if (playerChoice === computerChoice) {
        result = 'tied'
    }
    
    else if (playerChoice == 'rock' && computerChoice == 'scissors' || playerChoice == 'paper' && computerChoice == 'rock' || playerChoice == 'scissors' && computerChoice == 'paper'){
        result = 'won'
    }

    else {
        result = 'lost'
    }
    if (result != 'no result') {
alert(`You ${result}. Computer chose ${computerChoice}`)
    }

return result
}

// Match

function playMatch() {
let score = 0
alert('Round one!')
let roundOne = playRound()
if (roundOne == 'won') {
    score = score + 1
}

else if (roundOne == 'lost') {
    score = score - 1
}

alert('Round two!')
let roundTwo = playRound()

if (roundTwo == 'won') {
    score = score + 1
}

else if (roundTwo == 'lost') {
    score = score - 1
}

alert('Round three!')
let roundThree = playRound()

if (roundThree == 'won') {
    score = score + 1
}

else if (roundThree == 'lost') {
    score = score - 1
}

alert('Round four!')
let roundFour = playRound()

if (roundFour == 'won') {
    score = score + 1
}

else if (roundFour == 'lost') {
    score = score - 1
}

alert('Round five!')
let roundFive = playRound()

if (roundFive == 'won') {
    score = score + 1
}

else if (roundFive == 'lost') {
    score = score - 1
}

alert(`Your final score is ${score}.`)
return score

}