const keyrow = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn_reset');
let missed = 0;

startButton.addEventListner('submit', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});
