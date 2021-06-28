'use strict'
const WALL = '#'
const FOOD = '.'
const EMPTY = ' ';
const POWERFOOD = '@';
const CHERRY = '%';



var gBoard;
var gGame;

function init() {
    gGame = {
        score: 0,
        isOn: false
    };
    console.log('hello');
    gBoard = buildBoard();
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container');
    createCherry();
    gGame.isOn = true;
}

function buildBoard() {
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }
            if ((i === 1) && (j == 1) || (i === SIZE - 2) && (j === 1) || (i == 1) && (j == SIZE - 2) || (i === SIZE - 2) && (j === SIZE - 2)) {
                board[i][j] = POWERFOOD;
            }
        }
    }
    return board;
}



// update model and dom
function updateScore(diff) {
    gGame.score += diff
    var elScore = document.querySelector('h2 span')
    elScore.innerText = gGame.score
    if (gGame.score >= 60) {
        openModal();
        gameOver(true);
    


    }
}


function gameOver(isWin) {
    var elModal = document.querySelector('.modal');
    if (isWin===true){
        elModal.innerHTML=' you Win'
    }else{       
        elModal.innerHTML='Game Over <br/> you loose'
    }
    openModal();
    console.log('Game Over');
    clearInterval(gIntervalGhosts)
    clearInterval(gIntervalCherry)
    gGame.isOn = false
  
}

// // figure out nextLocation
// function getNextLocation(eventKeyboard) {
//     var nextLocation = { i: gPacman.location.i, j: gPacman.location.j }

//     switch (eventKeyboard.key) {
//         case 'ArrowUp':
//             nextLocation.i--
//             break
//         case 'ArrowDown':
//             nextLocation.i++
//             break
//         case 'ArrowLeft':
//             nextLocation.j--
//             break
//         case 'ArrowRight':
//             nextLocation.j++
//             break
//     }
//     return nextLocation;
// }

function playAgain() {
    closeModal();
    const elScore = document.querySelector('h2 span')
    elScore.innerText = 0
    init();
}

function openModal() {
    var elModal = document.querySelector('.modal');
    elModal.style.display = 'block';
    // var col = getRandomColor();
    // var elh2 = document.querySelector('h2');
    // elh2.style.color =col;
    // setTimeout(closeModal, 5000)


}
function closeModal() {
    var elModal = document.querySelector('.modal');
    elModal.style.display = 'none';

}