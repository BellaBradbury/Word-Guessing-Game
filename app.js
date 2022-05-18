const startButton = document.getElementsByClassName('btn__reset')[0];

let phraseDiv = document.getElementById('phrase');

const keyrow = document.getElementById('qwerty');
let guessButton = document.querySelectorAll('#qwerty button')[0];
let guess = guessButton.innerText;

let lives = document.querySelector('.tries img[src="images/liveHeart.png"]');
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
function addPhrasetoDisplay(arr) {
  for ( let i = 0; i < arr.length; i++ ) {
    const character = document.createElement('li');
    const characterList = document.querySelector('#phrase ul');
    character.textContent = arr[i];
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
  let letter = document.querySelectorAll('.letter');
  let letterMatch = null;

  for ( let i = 0; i < letter.length; i++ ) {
    if (letter[i] === guess.toUpperCase) {
      letter[i].classList.add('show');
      match = button.textContent;
    }

  return match;
  }
}
