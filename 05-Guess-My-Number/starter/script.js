'use strict';


// what DOM stand for?
// DOM= Document object model: structured representation of html documents. Allows javascript to access html elements and styles to manipulate them

// DOM !== JS
// is not part of JS at all 

// DOM methods and properties are part of the web APIs

//.document.querySelector to select classes or ids etc from html/css
// . for classes # for ids
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number !'


// document.querySelector('.number').textContent = '>?'
// document.querySelector('.guess').value = 23

const randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


console.log(randomNumber);


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    if (score < 0) {
        document.querySelector('.message').textContent = 'YOU LOST'
    }
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number'

    } else if (guess === randomNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number !'
        document.querySelector('.number').textContent = randomNumber
        highScore = score

    } else if (guess > randomNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high'
            score--;
            document.querySelector('.score').textContent = score;
            
        } else {
            document.querySelector('.message').textContent = 'YOU LOST'
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < randomNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low'
            score--;
            document.querySelector('.score').textContent = score;
            
        } else {
            document.querySelector('.message').textContent = 'YOU LOST'
            document.querySelector('.score').textContent = 0;
        }
    } else {
        document.querySelector('.message').textContent = '💀    Wrong number'
    }

})




