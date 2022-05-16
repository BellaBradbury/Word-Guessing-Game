const keyrow = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn_reset');

const phrases = [
  'liar liar pants on fire',
  'the cow jumped over the moon',
  'life is just a bowl of cherries',
  'a game of cat and mouse',
  'when life gives you lemons make lemonade'
];
let missed = 0;

startButton.addEventListner('submit', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});
