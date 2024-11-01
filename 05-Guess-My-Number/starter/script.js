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
const checkButton = document.querySelector('.check');
checkButton.disabled = false;



console.log(randomNumber);

//display messages
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}
const displayScore = function (message) {
    document.querySelector('.score').textContent = message
}

const displayHighScore = function (highScore) {
    document.querySelector('.highscore').textContent = highScore;
};

const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
};

const setBodyStyle = function (bgColor, width = '15rem') {
    document.querySelector('body').style.backgroundColor = bgColor;
    document.querySelector('.number').style.width = width;
};


// To reset and start a new game, highest score remains
document.querySelector('.again').addEventListener('click', function () {
    // location.reload();// to reload everything
    score = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    guessInput.value = '';
    guessInput.disabled = false;
    checkButton.disabled = false;
    setBodyStyle('#222');


});

document.querySelector('.Hscore').addEventListener('click', function () {
    displayHighScore(0)
})


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number'
        displayMessage('⛔ No number')

        // When the player wins
    } else if (guess === randomNumber) {
        displayMessage('🎉 Correct Number!');
        displayNumber(randomNumber);
        guessInput.disabled = true;
        checkButton.disabled = true;
        highScore = Math.max(score, highScore);
        displayHighScore(highScore);
        setBodyStyle('#14802b', '30rem');

        //When the number is greater than actual number
    } else if (guess !== randomNumber) {
        if (score > 1) {
            displayMessage(guess > randomNumber ? '📈 Too high' : '📉 Too low');
            score--;
            displayScore(score);
        } else {
            displayMessage('💀 YOU LOST!');
            displayScore(0);
            guessInput.disabled = true;
            setBodyStyle('#901414');
        }

    } else {
        // document.querySelector('.message').textContent = '💀    Wrong number'
        displayMessage('💀 Wrong number')
    }

})






