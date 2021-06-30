'use strict';

// selecting elements // without any value, just decalre the varialbe
let scores, currentScore, activePlayer, playing;

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1'); // a little faster than querySlector, cause iy's ID no need the # tag
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // before switch the player, should set the current score to 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // switch plagyer
  // currentScore = 0; // reset current score, otherwise the score would still increase > after test, it's not neccasary
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};

init();
// starting condition
/* score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden'); */

////////// Rolling the btn function
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generating radom dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display dice

    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    //3.check for the rolled 1:if true > change to the next one

    if (dice !== 1) {
      ///////// add the dice to the current score
      //const currentEL = document.getElementById(`current--${activePlayer}`); //這樣的宣告需要在funcrtion 內 因為這不是全域變數
      currentScore += dice;
      //currentEL.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      //  current0EL.textContent = currentScore;
      //score0EL.textContent = dice;
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to the active player
    scores[activePlayer] += currentScore;
    //  scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    currentScore = 0;

    // 2. check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document.getElementById(`current--${activePlayer}`).textContent =
        'you win the game!';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEL.classList.add('hidden');

      // finish the game
    } else {
      //switch to another player
      switchPlayer();
    }
  }
});

//嘗試失敗
btnNew.addEventListener('click', init);
