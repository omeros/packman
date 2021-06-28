'use strict'
const GHOST = '&#9781;';
//const GHOST = '👻';

var gGhosts;
var gIntervalGhosts;
// var isgPower =false;

// TODO
function createGhost(board) {
    var ghost = {
        location: {
            i: 2,
            j: 4
        },
        currCellContent: FOOD
    }
    gGhosts.push(ghost)
    board[ghost.location.i][ghost.location.j] = GHOST
}

// 3 ghosts and an interval
function createGhosts(board) {
    gGhosts = []
    createGhost(board)
    createGhost(board)
    createGhost(board)
    gIntervalGhosts = setInterval(moveGhosts, 1000)
}

// TODO: loop through ghosts
function moveGhosts() {
    for (var i = 0; i < gGhosts.length; i++) {
        var currGhost = gGhosts[i]
        moveGhost(currGhost)
    }
}
function moveGhost(ghost) {
    // figure out moveDiff, nextLocation, nextCell
    var moveDiff = getMoveDiff()
    // console.log(moveDiff);
    var nextLocation = {
        i: ghost.location.i + moveDiff.i,
        j: ghost.location.j + moveDiff.j
    }
    var nextCellContent = gBoard[nextLocation.i][nextLocation.j]
    // TODO: return if cannot move
    if (nextCellContent === WALL) return
    if (nextCellContent === GHOST) return
    if (nextCellContent === POWERFOOD) return
    if (nextCellContent === CHERRY) return


    // TODO: hitting a pacman?  call gameOver
    if (nextCellContent === PACMAN) {
        gameOver(false)
        return
    }

    // TODO: update the model
    gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent
    // TODO: update the DOM
    renderCellRemoveGhost(ghost.location, ghost.currCellContent)
    // TODO: Move the ghost
    ghost.location = { i: nextLocation.i, j: nextLocation.j }
    ghost.currCellContent = nextCellContent
    // TODO: update the model
    gBoard[nextLocation.i][nextLocation.j] = GHOST
    // TODO: update the DOM
    renderCellAddGhost(nextLocation, GHOST)
}

function getMoveDiff() {
    var randNum = getRandomIntInclusive(0, 100);
    if (randNum < 25) {
        return { i: 0, j: 1 }
    } else if (randNum < 50) {
        return { i: -1, j: 0 }
    } else if (randNum < 75) {
        return { i: 0, j: -1 }
    } else {
        return { i: 1, j: 0 }
    }
}


function eatGhost(location) {
    var idx = location.i;
    var jdx = location.j;
    for (var i = 0; i, i < gGhosts.length; i++) {
        if ((gGhosts[i].location.i === idx) && (gGhosts[i].location.j === jdx)) {
            var removedGhost = gGhosts.splice(i, 1)[0];
            setTimeout(function () {
                console.log(gGame.isOn, removedGhost);
                if (gGame.isOn) {
                    gGhosts.push(removedGhost);
                    // Add to DOM
                }
            }, 5000)
        }
    }
}





function getGhostHTML(ghost) {
    return `<span>${GHOST}</span>`
}