//variables
let player, board, winner, playerTurn, colors, spaces,
    container, column1, column2, column3, column4, column5, column6, column7;


spaces = document.querySelectorAll('div');
container = document.querySelector('.container');
colors = [
    emptySpace = null,
    player1 = 'red',
    player2 = 'yellow'
]
board = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

column1 = document.querySelectorAll('.column1');
column2 = document.querySelectorAll('.column2');
column3 = document.querySelectorAll('.column3');
column4 = document.querySelectorAll('.column4');
column5 = document.querySelectorAll('.column5');
column6 = document.querySelectorAll('.column6');
column7 = document.querySelectorAll('.column7');



//initialize game
init();
function init() {
    playerTurn = player1;
    winner = null;
}




//handle user interaction
container.addEventListener('click', handleClick);



function handleClick(evt) {
    if(evt.target.tagname !== 'DIV') return;
}










