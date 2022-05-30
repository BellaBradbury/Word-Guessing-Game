const overlay = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];

// let phraseDiv = document.getElementById('phrase');

const keyrow = document.getElementById('qwerty');
let guessButton = document.querySelectorAll('#qwerty .keyrow button');
let guess = guessButton.textContent;

let missed = 0;

// LIST OF POTENTIAL PHRASES
const phrases = [
  'LIAR LIAR PANTS ON FIRE',
  'THE COW JUMPED OVER THE MOON',
  'LIFE IS JUST A BOWL OF CHERRIES',
  'A GAME OF CAT AND MOUSE',
  'WHEN LIFE GIVES YOU LEMONS MAKE LEMONADE'
];

// STARTS GAME WITH BUTTON SUBMIT
startButton.addEventListener('click', () => {
  // removes overlay to show game display
  overlay.style.display = 'none';

  // clears character list and letter display
  const character = document.createElement('li');
  let characterList = document.querySelector('#phrase ul');
  characterList = '';
  for ( let i = 0; i < character.length; i++ ) {
    character[i].classList.remove('show');
  }

  // clears keyboard buttons
  for ( let i = 0; i < guessButton.length; i++ ) {
    guessButton[i].classList.remove('chosen');
    guessButton[i].disabled = false;
  }

  // clears lives
  missed = 0;
  let lives = document.querySelector('#scoreboard .tries img[src="images/liveHeart.png"]');
  for ( let i = 0; i < lives.length; i++ ) {
    lives[i].src = 'images/liveHeart.png';
  }
});

// RANDOMLY CHOOSE A PHRASE AND SPLIT INTO NEW ARRAY
function getRandomPhraseAsArray(arr) {
  const randomPhrase = Math.floor( Math.random() * arr.length);
  const chosenPhrase = arr[randomPhrase];
  const phraseLetters = chosenPhrase.split('');
  return phraseLetters;
}

const phraseArray = getRandomPhraseAsArray(phrases);

// ADDS CHARACTER ARRAY TO DOCUMENT
function addPhrasetoDisplay(array) {
  for ( let i = 0; i < array.length; i++ ) {
    const character = document.createElement('li');
    const characterList = document.querySelector('#phrase ul');
    character.textContent = array[i];
    characterList.append(character);

    // checks if a character is a space or letter
    if (character.textContent === ' ') {
      character.className = 'space';
    } else {
      character.className = 'letter';
    }
  }
}

addPhrasetoDisplay(phraseArray);

// CHECKS IF USER'S GUESS IS CORRECT
const letter = document.getElementsByClassName('letter');
function checkLetter(button) {
  const guessUpper = button.textContent.toUpperCase();
  let letterMatch = null;

  // adds correct guess to the user's display
  for ( let i = 0; i < letter.length; i++) {
    if ( letter[i].textContent === guessUpper ) {
      letter[i].classList.add('show');
      letterMatch = guess;
    }
  }
  return letterMatch;
}

//  CONNECTS THE DOC KEYBOARD TO THE USER'S INPUT AND
  // ENSURES A USER CAN'T CLICK THE SAME KEY TWICE
let button = guessButton;
keyrow.addEventListener('click', (e) => {
  button = e.target;
  button.classList.add('chosen');
  button.disabled = true;
  checkLetter(button);

  // if a user's guess was incorrect:
    // their missed count goes up by one and a live heart is swapped
  if (checkLetter(button) === null) {
      missed++;
      let lives = document.querySelector('#scoreboard .tries img[src="images/liveHeart.png"]');
      lives.src = "images/lostHeart.png";
  }
  console.log(missed);

  // checks if the user has won or lost and
    // displays the appropriate screen
  function checkWin() {
    let guessedLetters = document.getElementsByClassName('show');
    let overlayHeader = document.querySelector('#overlay h2');

    if ( letter.length === guessedLetters.length ) {
      overlay.style.display = 'flex';
      overlay.className = 'win';
      overlayHeader.innerHTML = 'Congratulations! You win!';
    }
    if ( missed > 4 ) {
      overlay.style.display = 'flex';
      overlay.className = 'lose';
      overlayHeader.innerHTML = 'Sorry, you lost. Would you like to try again?';
    }
  }

  checkWin();
});
