'use strict';


// Starting the damn pig game I think


// Selecting elements

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')//Another option
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')





score0El.textContent = 0;
score1El.textContent = 0;
//hiding the dice.
diceEl.classList.add('hidden')

// player 0 an player 1, an array is perfect cause its positions 0 and 1.
const scores = [0, 0]
let currentScore = 0;
let currentPlayer = 0;
//Rolling dice functionality

btnRoll.addEventListener('click', function () {
    //1. Generating a random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice)

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;


    //3. Check for rolled 1

    if (dice !== 1) {
        currentScore += dice;

        //Select the player dynamically
        document.getElementById(`current--${currentPlayer}`).textContent = currentScore

        //Select the player manually
        //current0El.textContent = currentScore //Change later

    } else {
        //set the score to 0 before switching.
        document.getElementById(`current--${currentPlayer}`).textContent = 0
        currentScore = 0
        //switch to next player
        currentPlayer = currentPlayer === 0 ? 1 : 0;

        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
        
        
    }

});









