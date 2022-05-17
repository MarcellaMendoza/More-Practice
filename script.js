//Problem 1
// let myChessOpenings = ["Queen's Gambit", "Sicilian Defense", "French Defense", "Caro-Kann Defense", "Italian Game" ,"Alekhine's Defense", "Scotch Game", "Nimzo-Indian Defense", "Benko Gambit"]

// let fruit = ["apple", "banana", "cherries"]

// let cities = ["NYC", "Paris", "Amarillo"]


// function logArray(array) {
//   for (let i=0; i<myChessOpenings.length; i++) {
//     console.log(array[i])
//   }
// }

// logArray(myChessOpenings)

//For Loop Alternative

// function logArray(array) {
//   for (item of array) {
//     console.log(item)
//   }
// }

// logArray(cities)


//Problem 2

// localStorage.setItem("myPlanets", "Mars")

let planets = localStorage.getItem("myPlanets")
console.log(planets)