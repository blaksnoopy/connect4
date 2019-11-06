//variables
let player, board, winner, playerTurn, colors, spaces,
    container, columns, column1, column2, column3, 
    column4, column5, column6, column7, turn


spaces = document.querySelectorAll('div');
container = document.querySelector('.container');
colors = {
    emptySpace: null,
    player1: 1,
    player2: -1
}
turn = 1
board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

// columns = document.querySelectorAll('.columns');
columns= [
    column1, column2, column3,
    column4, column5, column6,
    column7
];

column1 = document.querySelectorAll('.column1');
column2 = document.querySelectorAll('.column2');
column3 = document.querySelectorAll('.column3');
column4 = document.querySelectorAll('.column4');
column5 = document.querySelectorAll('.column5');
column6 = document.querySelectorAll('.column6');
column7 = document.querySelectorAll('.column7');

section = document.querySelector('section')
section.addEventListener('click', function(evt){
    console.log(evt.target.id)
    board.forEach((arr, i) => {
        arr.forEach((e, j) => {
            let x = i * 7 + j
            let circle = document.getElementById(`${x}`)
            if(evt.target.id == x && !circle.style.backgroundColor) {
                for(let z = 1; z < 59; z*= 7){
                    let lowerCircle = document.getElementById(`${evt.target.id + z}`)
                    console.log(lowerCircle)
                }
            } else {

            }
            circle.style.backgroundColor
        })
    })
    if(!evt.target.style.backgroundColor) {
    } else {
    }
    evt.target.style.backgroundColor = 'black'
})
console.log(column1)



//initialize game
init();
function init() {
    playerTurn *= -1
    winner = null;
}


function render (){
    board.forEach((arr, i) => {
        arr.forEach((e, j) => {
            let x = i * 7 + j
            let circle = document.getElementById(`${x}`)
            console.log(circle.style.backgroundColor)
            circle.style.backgroundColor
        })
    })
}

//handle user interaction
container.addEventListener('click', handleClick);



function handleClick(evt) {
    if(evt.target.tagname !== 'DIV') return;
    // if(evt.target.columns.contains('0') === false) return;
    function placePiece(piece) {
        evt.target.columns[i]
    }
} 










