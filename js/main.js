//variables
let player, board, winner, playerTurn, colors, spaces,
    container, columns, column1, column2, column3,
    column4, column5, column6, column7, turn, winningCombo,
    button, turnContainer, message


spaces = document.querySelectorAll('div');
container = document.querySelector('.container');
message = document.querySelector('h2');
turnContainer = document.querySelector('.turn');
colors = {
    emptySpace: null,
    '-1': 'red',
    '1': 'yellow'
};

turn = 1

board = [
         0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0
]

winningComnbo = [
    [0, 7, 14, 21], [1, 8, 15, 22], [2, 9, 16, 23], [3, 10, 17, 24], [4, 11, 18, 25],
    [5, 12, 19, 26], [6, 13, 20, 27], [7, 14, 21, 28], [8, 15, 22, 29], [9, 16, 23, 30],
    [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34], [14, 21, 28, 35],
    [15, 22, 29, 36], [16, 23, 30, 37], [17, 24, 31, 38], [18, 25, 32, 39], [19, 26, 33, 40],
    [20, 27, 34, 41], [0, 1, 2, 3], [7, 8, 9, 10], [14, 15, 16, 17], [21, 22, 23, 24],
    [28, 29, 30, 31], [35, 36, 37, 38], [1, 2, 3, 4], [8, 9, 10, 11], [15, 16, 17, 18],
    [22, 23, 24, 25], [29, 30, 31, 32], [36, 37, 38, 39], [2, 3, 4, 5], [9, 10, 11, 12],
    [16, 17, 18, 19], [23, 24, 25, 26], [30, 31, 32, 33], [37, 38, 39, 40], [3, 4, 5, 6],
    [10, 11, 12, 13], [17, 18, 19, 20], [24, 25, 26, 27], [31, 32, 33, 34], [38, 39, 40, 41],
    [3, 11, 19, 27], [2, 10, 18, 26], [1, 9, 17, 25], [0, 8, 16, 24], [7, 15, 23, 31],
    [14, 22, 30, 38], [15, 23, 31, 39], [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34],
    [21, 15, 9, 3], [22, 16, 10, 4], [23, 17, 11, 5], [24, 18, 12, 6], [31, 25, 19, 13],
    [38, 32, 26, 20], [28, 22, 16, 10], [29, 23, 17, 11], [30, 24, 18, 12], [37, 31, 25, 19],
    [35, 29, 23, 17], [36, 30, 24, 18], [16, 24, 32, 40], [17, 25, 33, 41]
];

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



section = document.querySelector('section');

button = document.querySelector('button');

section.addEventListener('click', handleClick);

function handleClick(evt) {
    if(evt.target.tagName !== "DIV") return
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
    if(evt.target.style.backgroundColor == 'white'){
        render()
    }
}



//initialize game
init();
function init() {
    turn = 1;
    winner = null;
    message.textContent = "Let's Play!"
    spaces.forEach(function(space) {
        space.style.backgroundColor = 'white';
    });
    board = [
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0
    ];
    section.addEventListener('click', handleClick);
}

// render()
function render() {
    board.forEach((val, idx) => {
        if (board[idx] === 0) {
            spaces[idx].style.backgroundColor = 'white'
        } else if (board[idx] === -1) {
            spaces[idx].style.backgroundColor = 'red'
        } else if (board[idx] === 1) {
            spaces[idx].style.backgroundColor = 'yellow'

        }
    })
    turn *= -1
    if(turn === 1) {
        player = 'Yellow'
        turnContainer.textContent = `${player}'s turn`
    } else {
        player = 'Red'
        turnContainer.textContent = `${player}'s turn`
    }
    checkWinner()
    }

//check for winner
function checkWinner() {
    if(board.indexOf(0) == -1){
        message.textContent = `It's a tie!`
        return
    } 
    for(let i = 0; i < board.length; i++){
        let vertical = board[i] + board[i+7] + board[i+14] + board[i+21]
        let horizontal = board[i] + board[i+1] + board[i+2] + board[i+3]
        let diagonal1 = board[i] + board[i+8] + board[i+16] + board[i+24]
        let diagonal2 = board[i] + board[i+6] + board[i+12] + board[i+18]
        if(vertical === 4 || vertical === -4 ){
            turn *= -1
            if(turn === 1) {
                turn = 'Yellow'
            } else {
                turn = 'Red'
            }
            message.textContent = `${turn} is the winner!`
            section.removeEventListener('click', handleClick)
        }
        if(horizontal === 4 || horizontal === -4 ){
            turn *= -1
            if(turn === 1) {
                turn = 'Yellow'
            } else {
                turn = 'Red'
            }
            message.textContent = `${turn} is the winner!`
            section.removeEventListener('click', handleClick)
        }
        if(diagonal1 === 4 || diagonal1 === -4 ){
            turn *= -1
            if(turn === 1) {
                turn = 'Yellow'
            } else {
                turn = 'Red'
            }
            message.textContent = `${turn} is the winner!`
            section.removeEventListener('click', handleClick)
        }
        if(diagonal2 === 4 || diagonal2 === -4 ){
            turn *= -1
            if(turn === 1) {
                turn = 'Yellow'
            } else {
                turn = 'Red'
            }
            message.textContent = `${turn} is the winner!`
            section.removeEventListener('click', handleClick)
        }
    }
}

//reset button
button.addEventListener('click', init);






