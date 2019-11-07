//variables
let player, board, winner, playerTurn, colors, spaces,
    container, columns, column1, column2, column3,
    column4, column5, column6, column7, turn


spaces = document.querySelectorAll('div');
container = document.querySelector('.container');
colors = {
    emptySpace: null,
    '-1': 'red',
    '1': 'yellow'
}
turn = 1

board = [0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0
]

columns = [
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

section.addEventListener('click', handleClick)

function handleClick(evt) {
    board.forEach((arr, i) => {
        let x = i
        let circle = document.getElementById(`${x}`)
        if(evt.target.id <  7) {
            if (evt.target.id == x && circle.style.backgroundColor == 'white') {
                let z = 1
                while (z < 6) {
                    let currentIdx = parseInt(evt.target.id) + (z * 7)
                    let lowerCircle = document.getElementById(`${currentIdx}`)
                    if (lowerCircle.style.backgroundColor == 'white' && z == 5) {
                        board[currentIdx] = turn
                    } else if(lowerCircle.style.backgroundColor != 'white') {
                        board[currentIdx-7] = turn
                        break
                    }
                    z++
                }
            }
        }
    })
    render()
}



//initialize game
init();
function init() {
    playerTurn *= -1
    winner = null;
}

render()
function render() {
    board.forEach((val, idx) => {
        if (board[idx] === 0) {
            spaces[idx].style.backgroundColor = 'white'
        } else if (board[idx] === 1) {
            spaces[idx].style.backgroundColor = 'red'
        } else if (board[idx] === -1) {
            spaces[idx].style.backgroundColor = 'yellow'

        }
    })
    turn *= -1
}

function checkWinner() {

}
 










