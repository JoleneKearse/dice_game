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
const player2Dice = document.getElementById('player2Dice')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
// Program Necessary Variables
let randomNumber
let dieImg = ''
// const imgArr = ['images/1.png', 'images/2.png', 'images/3.png', 'images/14.png', 'images/5.png', 'images/6.png', ]

// Event Listeners
rollBtn.addEventListener('click', function() {
    // get number from 1-6
    randomNumber = Math.floor(Math.random() * 6) + 1
    // getDieImg(randomNumber)
    if (player1Turn) {
        // displayDie()
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1.classList.remove('active')
        player2.classList.add('active')
        message.textContent = 'Player Two 🏁'
    } else {
        // displayDie()
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2.classList.remove('active')
        player1.classList.add('active')
        message.textContent = 'Player One 🏁'
    }

    // check if either player is the winner & change message/buttons
    if (player1Score >= 20) {
        message.textContent = 'Player One Won! 🥳'
        player1.classList.remove('active')
        player2.classList.remove('active')
        player1.classList.add('winner')
        player2.classList.add('loser')
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'block'
    } else if (player2Score >= 20) {
        message.textContent = 'Player Two Won! 🎉'
        player1.classList.remove('active')
        player2.classList.remove('active')
        player2.classList.add('winner')
        player1.classList.add('loser')
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'block'
    }

    // switch player turns
    player1Turn = !player1Turn
})

resetBtn.addEventListener('click', function(){
    location.reload()
}) 

// Functions
// function getDieImg(randomNumber) {
//     switch(randomNumber) {
//         case 1:
//             dieImg = 'images/1.png'
//             break
//         case 2:
//             dieImg = 'images/2.png'
//             break
//         case 3: 
//             dieImg = 'images/3.png'
//             break
//         case 4: 
//             dieImg = 'images/4.png'
//             break
//         case 5: 
//             dieImg = 'images/5.png'
//             break
//         case 6: 
//             dieImg = 'images/5.png'
//             break
//     }
// }

// function displayDie(dieImg) {
//     if (player1Turn) {
//         let img1 = document.createElement('img')
//         img1.src = dieImg
//         player1Dice.appendChild(img1)
//     } else {
//         let img2 = document.createElement('img')
//         img2.src = dieImg
//         player2Dice.appendChild(img2)
//     }
// }