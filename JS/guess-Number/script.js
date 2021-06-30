'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 3;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let theScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // get the input files value, and change string (input) to number
  console.log(guess, typeof guess);
  // when there's no inpute
  if (!guess) {
    displayMessage('no number ...');
    //document.querySelector('.message').textContent = 'no number...';
  } else if (guess === secretNumber) {
    displayMessage('👍🏻correct!!');
    // document.querySelector('.message').textContent = '👍🏻correct!!';
    document.querySelector('.score').textContent = theScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    ///////// set the scroe records
    if (theScore > highScore) {
      highScore = theScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (theScore > 1) {
      displayMessage(guess > secretNumber ? 'too hight' : 'too low');

      /*   document.querySelector('.message').textContent =
        guess > secretNumber ? 'too hight' : 'too low'; */ // ternary operator
      theScore--; // theScore = theScore -1;
      document.querySelector('.score').textContent = theScore;
    } else {
      displayMessage('😪 you lost the game!');
      // document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //below is logical for thinking
  // when guess is too high
  //   } else if (guess > secretNumber) {
  //     if (theScore > 1) {
  //       document.querySelector('.message').textContent = 'too hight';
  //       theScore--; // theScore = theScore -1;
  //       document.querySelector('.score').textContent = theScore;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // when guess is to low
  //   } else if (guess < secretNumber) {
  //     if (theScore > 1) {
  //       document.querySelector('.message').textContent = 'too low';
  //       theScore--; // theScore = theScore -1;
  //       document.querySelector('.score').textContent = theScore;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

////// coding challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  theScore = 20;
  displayMessage('🤟🏻 Start guessing...');
  //document.querySelector('.message').textContent = '🤟🏻 Start guessing...';
  document.querySelector('.guess').value = ''; // empty value
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = theScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
