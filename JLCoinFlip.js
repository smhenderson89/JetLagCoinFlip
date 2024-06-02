/* 
Generator to figure out how long it will take to get 8 predicted coin flips in a row

Inspired by Jet Lag the Game: AU$TRALIA - Season 10
*/

const coinSides = ['H', 'T'];
let flips = 0;
let flipArray = [];
let streakResult = [];
let heads = 0;
let tails = 0;
let streakCount = 0;
let percentHeads = 0;
let percentTails = 0;
const predict = 'H';
let timePerFlip = 2 // Time to complete one coin flip ; 
let timeChallenge = 1800 // 30 minutes * 60 seconds 
let timeUsed = 0;

// Simulation of attempts
let runs = 2;
let wins = 0;
let loses = 0;

function flipCoin() {
    if (Math.random() < 0.50) {
        // Heads
        heads++
        flipArray.push("H")
        return "H"
    } else {
        // Tails
        tails++
        flipArray.push("T")
        return "T"
    }
}

while ((streakCount < 8) && (timeUsed < timeChallenge)) {
    result = flipCoin()
    timeUsed += timePerFlip;
    if (result == predict) { // If correctly predicted
        streakCount++ // Increase streak
        if (streakCount >= 8) { // If predicted 8 in a row
            streakResult.push(streakCount);
            break
        }
    } else { // If inncorect prediction
        if (streakCount > 0) { // If have a streak going
            streakResult.push(streakCount) // Push streak to an array
        }
        streakCount = 0; // reset streak to 0
    }
}

let numberFlips = flipArray.length;

percentHeads = Math.round (heads / numberFlips * 100) * 100 / 100;
percentTails = Math.round (tails / numberFlips * 100) * 100 / 100;
longestStreak = Math.max(...streakResult);


// console.log(flipArray);
console.log(`Flips: ${numberFlips}, ${percentHeads}% Heads, ${percentTails}% Tails`);
console.log(`Time Used: ${ Math.round( timeUsed / 60) * 100 / 100 } mins`)
console.log(`Longest Streak: ${longestStreak}`);

if (longestStreak == 8) {
    console.log(`Streak of prediction coin tosses`) 
    console.log(streakResult);
}