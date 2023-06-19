//buttons
let checkButton = document.querySelector('.check');
let againButton = document.querySelector('.again');

//guess the number input
let input = document.querySelector('.guess-number');

//p
let firstParagraf = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');

//main div
let mainDiv = document.querySelector('.main');

// numbers
let correctNumber = document.querySelector('.correct-number');
let randomNumber = Math.trunc(Math.random() * 20) + 1;

//scores
let score = 20;
let highscore = 0;

//display message function
function displayMessage(message) {
  firstParagraf.textContent = message;
}
// the code is easier to understand with this function and it helps keep it organized

checkButton.addEventListener('click', () => {
  let inputValue = Number(input.value);

  //when there is no number
  if (!inputValue) {
    displayMessage('No Number');
  } else if (inputValue > 20 || inputValue < 0) {
    displayMessage('Choose a number between 1 and 20');
  }

  //when the guess is wrong
  else if (inputValue !== randomNumber && score >= 1) {
    displayMessage(inputValue > randomNumber ? 'Too High' : 'Too Low');
    score--;
    second.textContent = 'Score: ' + score;

    // When the player loses
    if (score === 0) {
      displayMessage('You lost the game');
      second.textContent = 'Score: 0';
    }
  }

  //when the player wins
  else if (inputValue == randomNumber) {
    displayMessage('correct Number');
    mainDiv.style.backgroundColor = 'green';
    correctNumber.textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      third.textContent = `Highscore: ${highscore}  `;
    }
  }
});

document.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    checkButton.click();
  }
});

// play again button
againButton.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  second.textContent = 'Score: 20';
  correctNumber.textContent = '?';
  input.value = '';
  mainDiv.style.backgroundColor = 'rgb(60, 57, 57)';
});
