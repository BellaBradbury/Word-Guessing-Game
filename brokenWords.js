// ---------- WHERE TO IMPLEMENT ---------- //
// startButton.addEventListener('click', () => {
//     else {
//         findWrap();
//     }
// });

// ---------- FUNCTION TO STOP WORD WRAPPING ---------- //
function findWrap() {
    let allCards = Array.from(ul.childNodes);

    let cardCount = Math.floor(screen.width / 65);
    console.log('CARD COUNT: ', cardCount);

    let lastRowCard = allCards[cardCount - 1];
    let prevCard = lastRowCard.previousSibling;
    let nextCard = lastRowCard.nextSibling;

    if ( lastRowCard.classList.contains('letter') && prevCard.classList.contains('letter') && nextCard.classList.contains('letter') ) {
        console.log('BROKEN WORD');

        let lastSpace;
        let placeholder = lastRowCard.previousSibling;

        while (placeholder) {
            if (placeholder.classList.contains('space')) {
                lastSpace = placeholder;
                break;
            }

            placeholder = placeholder.previousSibling;
        }

        const lineBreakElem = document.createElement('br');
        lastSpace.parentElement.replaceChild(lineBreakElem, lastSpace);
        console.log('PREV SPACE: ', lastSpace);
    } else {
        console.log('NO ISSUES!');
    }
}