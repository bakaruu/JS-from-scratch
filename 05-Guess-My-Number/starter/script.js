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

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const guessInput = document.querySelector('.guess');
guessInput.disabled = false;


console.log(randomNumber);


document.querySelector('.again').addEventListener('click', function () {
    // location.reload();// to reload everything
    score = 20
    randomNumber = Math.floor(Math.random() * 20) + 1
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').textContent = ''
    document.querySelector('body').style.backgroundColor= '#222'
    document.querySelector('.number').style.width = '15rem'
    guessInput.disabled = false;


});


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);



    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number'

        // When the player wins
    } else if (guess === randomNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number !'
        document.querySelector('.number').textContent = randomNumber
        guessInput.disabled = true;
        highScore = score
        document.querySelector('.highscore').textContent = highScore

        //too change things from CSS select the whole body and the class
        document.querySelector('body').style.backgroundColor = '#14802b'
        document.querySelector('.number').style.width = '30rem'

        //When the number is greater than actual number
    } else if (guess > randomNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high'
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.message').textContent = 'YOU LOST'
            guessInput.disabled = true;
            document.querySelector('.score').textContent = 0;
        }
        //When the number is lower than actual number
    } else if (guess < randomNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low'
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.message').textContent = 'YOU LOST'

            guessInput.disabled = true;
            document.querySelector('.score').textContent = 0;
        }
        //When the number is wrong
    } else {
        document.querySelector('.message').textContent = '💀    Wrong number'
    }

})






