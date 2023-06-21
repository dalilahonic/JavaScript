//players
let playerOne = document.querySelector('.player--0');
let playerTwo = document.querySelector('.player--1');

//buttons
let buttonRoll = document.querySelector('.btn--roll');
let buttonHold = document.querySelector('.btn--hold');
let againButton = document.querySelector('.btn--new');

//dice
let diceImage = document.querySelector('.dice');

//current score
let currentScoreElement1 = document.querySelector('#current--0');
let currentScoreElement2 = document.querySelector('#current--1');

let totalScores, currentScore, activePlayer, gameInProgress;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
}

const init = function() {
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameInProgress = true;

  currentScoreElement1.textContent = 0;
  currentScoreElement2.textContent = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;

  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');

  diceImage.classList.remove('show-image');
}

init();

// roll the dice button
buttonRoll.addEventListener('click', () => {
  if (gameInProgress) {
    //get a random number
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    //showing the dice image
    diceImage.classList.add('show-image');
    diceImage.src = `/Pig Game/photos/dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//hold button
buttonHold.addEventListener('click', () => {
  if (gameInProgress) {
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];

    if (totalScores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
      gameInProgress = false;
    } else {
      switchPlayer();
    }
  }
});

againButton.addEventListener('click', init)