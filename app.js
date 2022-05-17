const keyrow = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset')[0];
let missed = 0;

// LIST OF POTENTIAL PHRASES
const phrases = [
  'liar liar pants on fire',
  'the cow jumped over the moon',
  'life is just a bowl of cherries',
  'a game of cat and mouse',
  'when life gives you lemons make lemonade'
];

// STARTS GAME WITH BUTTON SUBMIT
startButton.addEventListener('submit', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

// RANDOMLY CHOOSE A PHRASE AND SPLIT INTO NEW ARRAY
function getRandomPhraseArray(arr) {
  const randomPhrase = Math.floor( Math.random() * arr.length);
  const chosenPhrase = arr[randomPhrase];
  const phraseLetters = chosenPhrase.split('');
  return phraseLetters;
};
