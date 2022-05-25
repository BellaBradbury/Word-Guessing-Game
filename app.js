const startButton = document.getElementsByClassName('btn__reset')[0];

let phraseDiv = document.getElementById('phrase');

const keyrow = document.getElementById('qwerty');
const guessButton = document.querySelectorAll('#qwerty .keyrow button');
const guess = guessButton.textContent;

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
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
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

    // CHECKS IF CHARACTER IS A SPACE OR LETTER
    if (character.textContent === ' ') {
      character.className = 'space';
    } else {
      character.className = 'letter';
    }
  }
}

addPhrasetoDisplay(phraseArray);

// CHECKS IF USER'S GUESS IS CORRECT
function checkLetter(button) {
  const letter = document.getElementsByClassName('letter');
  const guessUpper = button.textContent.toUpperCase();

  for ( let i = 0; i < letter.length; i++) {
    if ( letter[i].textContent === guessUpper ) {
      letter[i].classList.add('show');
      letterMatch = guess;
    } else {
      letterMatch = null;
    }
  }
  return letterMatch;
}

let button = guessButton;
  keyrow.addEventListener('click', (e) => {
    button = e.target;
    button.classList.add('chosen');
    button.disabled = true;
    checkLetter(button);

    if (checkLetter(button) === null) {
        missed += 1;
        let lives = document.querySelector('#scoreboard .tries img[src="images/liveHeart.png"]');
        lives.src = "images/lostHeart.png";
        console.log(lives);
    }
});
