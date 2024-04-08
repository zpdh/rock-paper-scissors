let userScore = 0
let aiScore = 0
const playerScore = document.getElementById('scoreplayer')
const computerScore = document.getElementById('scorecomputer')

//Computer Selection
function getComputerChoice() {
const choices = ["rock", "paper", "scissors"]
let random = Math.floor(Math.random() * 3)
let computerChoice = choices[random]
return computerChoice
}

//Player Selection 
let playerChoice = ''

const rockBtn = document.getElementById('rockbtn')
const paperBtn = document.getElementById('paperbtn')
const scissorsBtn = document.getElementById('scissorbtn')

rockBtn.addEventListener('click', () => playerChoice = 'rock')
paperBtn.addEventListener('click', () => playerChoice = 'paper')
scissorsBtn.addEventListener('click', () => playerChoice = 'scissors')

// Round
const scoreInfo = document.getElementById('scoreinfo')
const scoreFiller = document.getElementById('scorefiller')

function playRound() {
computerChoice = getComputerChoice()
if (userScore == 5 || aiScore == 5){ 
    scoreFiller.textContent = `Click a button to try again!`
    userScore = 0
    aiScore = 0
    } else if (playerChoice === computerChoice) {
    scoreInfo.textContent = `You tied!`
    scoreFiller.textContent = `Computer chose ${computerChoice}.`
    playerScore.textContent = `Player: ${userScore}`
    computerScore.textContent = `Computer: ${aiScore}`
    } else if (playerChoice == 'rock' && computerChoice == 'scissors' || playerChoice == 'paper' && computerChoice == 'rock' || playerChoice == 'scissors' && computerChoice == 'paper'){
        scoreInfo.textContent = `You won!`
        scoreFiller.textContent = `Computer chose ${computerChoice}.`
        ++userScore
        playerScore.textContent = `Player: ${userScore}`
        computerScore.textContent = `Computer: ${aiScore}`
    } else {
        scoreInfo.textContent = `You lost!`
        scoreFiller.textContent = `Computer chose ${computerChoice}.`
        ++aiScore
        playerScore.textContent = `Player: ${userScore}`
        computerScore.textContent = `Computer: ${aiScore}`
    }

}

