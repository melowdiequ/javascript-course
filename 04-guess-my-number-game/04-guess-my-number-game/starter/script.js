// === GUESS MY NUMBER GAME ===
// Hour 1–3 Foundation, Logic, and UX Enhancements
'use strict';

////////////////////////////////////
// constants & selectors

// ranges and defaults
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// cached selectors (single source of truth)
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

////////////////////////////////////
// ui helpers

function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessEl.value = '';
}

////////////////////////////////////
// game state & reset

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log('Secret number:', secretNumber);

let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  console.log('New secret number:', secretNumber);
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

// initial render
renderInitialUI();

////////////////////////////////////
// event listeners - main logic

checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // input validation
  if (!guess) return setMessage('Please input a number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`);

  // correct guess
  if (guess === secretNumber) {
    setMessage('🎉 You have won!!!');
    setNumber(secretNumber);
    setBackground('seagreen');

    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }

    disablePlay(true);
    clearInput();
    return;
  }

  // wrong guess
  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💀 Game over. Please press Again!');
    setNumber(secretNumber);
    setBackground('firebrick');
    disablePlay(true);
    clearInput();
  }
});

////////////////////////////////////
// restart game

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
  guessEl.focus();
});

////////////////////////////////////
// UX enhancements

// pressing Enter triggers the check button
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

