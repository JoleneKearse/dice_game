// Game State Variables
let player1Score = 0
let player2Score = 0
let player1Turn = true
// DOM Nodes
const message = document.getElementById('message')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const player1Dice = document.getElementById('player1Dice')
const img1 = document.getElementById('img1')

const player2Dice = document.getElementById('player2Dice')
const img2 = document.getElementById('img2')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
// Program Necessary Variables
let randomNumber



function determinePlayerTurn() {
    let randomTurn = Math.floor(Math.random() * 2)
    console.log(randomTurn)

    if (randomTurn === 0) {
        message.textContent = 'Player One 🏁'
    } else if (randomTurn === 1) {
        player1Turn = false
        message.textContent = 'Player Two 🏁'
        player1.classList.remove('active')
        player2.classList.add('active')
    }
}
// Event Listeners
window.addEventListener('load', (event) => {
    determinePlayerTurn()
})

rollBtn.addEventListener('click', function() {
    // get number from 1-6
    randomNumber = Math.floor(Math.random() * 6) + 1
    
    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        img1.src = getDieImg(randomNumber)
        player1.classList.remove('active')
        player2.classList.add('active')
        message.textContent = 'Player Two 🏁'
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        img2.src = getDieImg(randomNumber)
        player2.classList.remove('active')
        player1.classList.add('active')
        message.textContent = 'Player One 🏁'
    }

    // check if either player is the winner & change message/buttons
    if (player1Score >= 20) {
        message.textContent = 'Player One Wins! 🥳'
        removeActiveClassesAtGameEnd()
        player1.classList.add('winner')
        player2.classList.add('loser')
        changeBtns()
    } else if (player2Score >= 20) {
        message.textContent = 'Player Two Wins! 🎉'
        removeActiveClassesAtGameEnd()
        player2.classList.add('winner')
        player1.classList.add('loser')
        changeBtns()
    }

    // switch player turns
    player1Turn = !player1Turn
})

resetBtn.addEventListener('click', function(){
    location.reload()
}) 

// Functions
function getDieImg(randomNumber) {
    let dieImg = ''
    switch(randomNumber) {
        case 1:
            dieImg = 'images/1.png'
            break
        case 2:
            dieImg = 'images/2.png'
            break
        case 3: 
            dieImg = 'images/3.png'
            break
        case 4: 
            dieImg = 'images/4.png'
            break
        case 5: 
            dieImg = 'images/5.png'
            break
        case 6: 
            dieImg = 'images/6.png'
            break
    }
    return dieImg
}

function removeActiveClassesAtGameEnd() {
    player1.classList.remove('active')
    player2.classList.remove('active')
}

function changeBtns() {
    rollBtn.style.display = 'none'
        resetBtn.style.display = 'block'
}