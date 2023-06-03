// Create three functions that add the points to the current score




let homeScore = document.getElementById("home-score-el")
let homePoints = 0

let guestScore = document.getElementById("guest-score-el")
let guestPoints = 0



function onePointHome() {
    homePoints += 1
    homeScore.textContent = homePoints
    console.log(score)
}

function twoPointHome() {
    homePoints += 2
    homeScore.textContent = homePoints
    console.log(score)
}

function threePointHome() {
    homePoints += 3
    homeScore.textContent = homePoints
    console.log(score)
}


function onePointGuest() {
    guestPoints += 1
    guestScore.textContent = guestPoints
    console.log(score)
}

function twoPointGuest() {
    guestPoints += 2
    guestScore.textContent = guestPoints
    console.log(score)
}

function threePointGuest() {
    guestPoints += 3
    guestScore.textContent = guestPoints
    console.log(score)
}









// other code

let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")



function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.textContent = count
}

function save() {
    let streakCount = count + " - "
    console.log(count)
    saveEl.textContent += streakCount
    countEl.textContent = 0
    count = 0
    
}