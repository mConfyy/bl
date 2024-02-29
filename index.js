let firstCard = 10
let lastCard = 4
let sum = firstCard + lastCard 
//console.log(sum)
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
//console.log(messageEl)
let sumEl = document.getElementById("sum-el")
//console.log(sumEl)
//let sumEl = document.querySelector("#sum-el")
//You can use the above in the stead of getElementById
function startGame() {
       sumEl.textContent = "Sum: " + sum
      if (sum <= 20) {
              message ="Do you want to draw a new card?"
       } else if (sum === 21) {
              message = "You've got Blackjack"
          hasBlackJack = true
      } else {
              message = "You're out of the game"
              isAlive = false
       } 
       messageEl.textContent = message
}


// if (false) {
//     console.log("Do you want to draw a new card?")
// } else if (true) {
//    console.log("wohoo! You've got Blackjack")
//    hasBlackJack = true
// } else {
//     console.log("You're out of the game")
//     isAlive = false
// }
//
//.............arrow down!
// CASH OUT
// console.log("hasBlackJack")
// console.log("isAlive")
//
 // if (sum < 21) {
//     console.log("Do you want to draw a new card?😕")
// } else if (sum === 21) {
//     console.log("wohoo! You've got Blackjack")
// } else if (sum > 21) { 
//     console.log("You're out of the game")
// } //you can skip (sum > 21)

// let age = 21

// if (age <= 20) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Yoohoo! Welcome")
// } 
//notice the difference btw using 'else' & 'else if'

// let age = 10

// if (age < 100) {
//     console.log("Not eligible")
// } else if (age ===  100) {
//     console.log("Here is your birthday card from the King!")
// } else{
//     console.log("Not eligible, you have gotten one")
// }
    
