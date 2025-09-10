'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

console.log('=== DOM ELEMENT SELECTION ===');

const messageE1 = document.querySelector('.message');
console.log(messageE1);

const scoreE1 = document.querySelector('.score');
console.log(scoreE1);

const guessE1 = document.querySelector('.guess');
console.log(guessE1);

// console.log('Current message:', messageE1.textContent);
// console.log('Current score:', scoreE1.textContent);

// messageE1.textContent= 'Hello from JavaScript';
// scoreE1.textContent = '15';

// console.log('Elements updated!');

// const guessInput = document.querySelector('.guess');
// console.log('Current guess:', guessInput.value);

// guessInput.value = '10';
// console.log('Guess set to:, guessInput.value');

const numberE1 = document.querySelector('.number');
const highScoreE1 = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');

numberE1.textContent = 15;
highScoreE1.textContent = 100;
guessInput.value = 7;

console.log('Number:', numberE1);
console.log('Highscore:', highScoreE1);
console.log('Guess:', guessInput);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number:', secretNumber);

let score = 20;
let highscore = 0;

let playerName = 'Player';
let attempts = 0;
let gameActive = true;
let easySecret = Math.trunc(Math.random() * 10) + 1;

console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);
console.log('Easy secret number:', easySecret);

document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');

  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

      if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return; 
  }
  
  if (!guess) {
    document.querySelector('.message').textContent = 'Please Input a Number';
  }

  if (!guess === secretNumber) {
    console.log('Correct guess!');
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.message').textContent = '🎉 You won!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;

    document.body.style.backgroundColor = 'green';

  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;

  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score < 1) {
    document.querySelector('.message').textContent = '💥 You lost!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;

    document.body.style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('New secret number is:', secretNumber);

    document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;

  document.body.style.backgroundColor = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);


  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return; 
  }


});