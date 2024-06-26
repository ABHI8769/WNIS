let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

//console.log(userInput);

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Enter a Valid Input');
  } else if (guess < 1) {
    alert('Please Enter a number more than 1');
  } else if (guess > 100) {
    alert('Please Enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      diplayGuess(guess);
      diplayMessage(`Game Over. The Random number was ${randomNumber}`);
      endGame();
    } else {
      diplayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    diplayMessage('You guessed it right...! You WON ');
    userInput.setAttribute('disabled', '');
  } else if (guess > randomNumber) {
    diplayMessage('Your guess is TOOOO high');
  } else if (guess < randomNumber) {
    diplayMessage('Your guess is TOOOO low');
  }
}

function diplayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaning.innerHTML = `${11 - numGuess} `;
}

function diplayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start a New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaning.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}