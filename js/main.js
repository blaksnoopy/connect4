//variables
let player, board, winner, turn, colors, spaces


spaces = document.querySelectorAll('div');
let container = document.querySelector('.container');
colors = [
    emptySpace = null,
    player1 = 'purple',
    player2 = 'yellow'
]



//initialize game
init();
function init() {
    turn = 1;
    winner = null;
    container.addEventListener('click', handleClick);
}




//handle user interaction
container.addEventListener('click', handleClick);



function handleClick(evt) {
    if(evt.target.tagname !== 'DIV') return;
    console.log(evt.target);
}










