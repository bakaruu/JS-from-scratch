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
let activePlayer = 0;
let playing = true;

//Function to switch to the next player.
const switchPlayer = function () {

    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    //switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

//Function to reset loadout
const init = function () {

    const scores = [0, 0]
    playing = true
    currentScore = 0
    activePlayer = 0;


    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0


    player0El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--winner')
    player1El.classList.remove('player--active')




    diceEl.classList.add('hidden');
}



//Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
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
            document.getElementById(`current--${activePlayer}`).textContent = currentScore

            //Select the player manually
            //current0El.textContent = currentScore //Change later

        } else {
            //set the score to 0 before switching.
            switchPlayer()

        }
    }

});

//Hold functionality
btnHold.addEventListener('click', function () {

    if (playing) {
        //1. Add current score to active player's score

        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        //2. Check if player's score is >= 100

        if (scores[activePlayer] >= 100) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            diceEl.classList.add('hidden');

        } else {
            switchPlayer()
        }


    }


})

//New game functionality
btnNew.addEventListener('click', init)










