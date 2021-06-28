var isgPower = false;




function createCherry() {
  gIntervalCherry = setInterval(addCherry, 15000);
}



function printMat(mat, selector, className) {
  var strHTML = '<table border="0"><tbody>';
  var SIZE = 10;
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j];

      if (((i === 1) && (j === 1)) || ((i === SIZE - 2) && (j === 1)) || ((i === 1) && (j == SIZE - 2)) || ((i === SIZE - 2) && (j === SIZE - 2))) {
        var className = 'cell cell' + i + '-' + j + ' ' + 'power-food';
      } else {
        var className = 'cell cell' + i + '-' + j;
      }
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}

function renderCell(location, value) {

  var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
  if (value === CHERRY) {
    elCell.classList.add('cherry');
  }
  elCell.innerHTML = value;
}


/*************************** Add the Cherry to model & the dom*************************************** */
function addCherry() {
  /*************************************************************************** */
  var SIZE = 10;

  var idx = getRandomInt(0, SIZE);
  var jdx = getRandomInt(0, SIZE);

  while (gBoard[idx][jdx] !== FOOD) {
    console.log('idx jdx, ', idx, jdx)
    idx = getRandomInt(1, SIZE - 1);
    jdx = getRandomInt(1, SIZE - 1);
  }

  gBoard[idx][jdx] = CHERRY;
  var location = {
    i: idx,
    j: jdx,
  };

  renderCell(location, CHERRY);



}

/******************************* add the Ghost to the DOM ******************************************** */
function renderCellAddGhost(location, value) {
  /*************************************************************************** */
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
  if (isgPower) {
    var num = getRandomInt(0, 3);
    str = 'ghost' + num;
    elCell.classList.add(str);
    elCell.innerHTML = value;
  } else {
    str = 'ghost';
    elCell.classList.add(str);
    elCell.innerHTML = value;
  }
;   
}

/************************ remove the ghost from the DOM ********************************************/
function renderCellRemoveGhost(location, value) {//,className) {
  /*************************************************************************** */
  // Select the elCell and set the value

  var elCell = document.querySelector(`.cell${location.i}-${location.j}`);

  elCell.classList.remove('ghost');
  elCell.classList.remove('ghost0');
  elCell.classList.remove('ghost1');
  elCell.classList.remove('ghost2');

  elCell.innerHTML = value;
}



/************************** Randoms **********************************************? */
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function setBack() {
  console.log(' goust are back !')
  isgPower = false;
}