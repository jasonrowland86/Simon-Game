$(function() {
    console.log( "test" );
//give credit from stackoverflow
//https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
Array.prototype.equals = function (array) {

  for (let i = 0, l=this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
      return false;
    }
    else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}
//Variables
let playerArr = [];
let computerArr = [];
let boxes = document.getElementsByClassName('box');
let container = document.getElementById('container');
let level = 1;
let score = 0;
let turn = 1;

//****** Create board ******
function createGameBoard() {
  for(let i = 1; i <= 4; i++){
     let newDiv = document.createElement('div');
     newDiv.id = i;
     newDiv.className = 'box box'+i;
     container.appendChild(newDiv);
  }
    document.getElementById('h1').innerText = "SIMON";
    document.getElementById('start').innerText = "START";
    document.getElementById('start').addEventListener('click', playGame);
}
createGameBoard()

function playGame() {
  document.getElementById('start').innerText = "Reset";
  document.getElementById('start').removeEventListener('click', playGame);
  document.getElementById('start').addEventListener('click', reset);
  computerTurn();
}

function computerTurn() {
    computerArr.push(Math.floor((Math.random() * 4) + 1));
    console.log(computerArr);
    // computerArr.forEach(animateSequence);
    playerTurn();
}

function playerTurn() {
  for(let i=0; i<boxes.length; i++) {
    boxes[i].addEventListener('click', playerMove);
  }
}

function playerMove() {
  playerArr.push(this.getAttribute('id'));
  console.log(playerArr);
  if(checkPlayerTurn() === true && playerArr.length === computerArr.length) {
    playerArr = [];
    computerTurn();
  } else if(checkPlayerTurn() === false) {
    //animate board to shake on error
    document.getElementById('h1').innerText = 'GAME OVER'
    document.getElementById('score').innerText = `Final ${score}`;
    document.getElementById('start').innerHTML = 'Play Again';
  }
}

function checkPlayerTurn() {
  let result = playerArr.equals(computerArr);
  return result;
  console.log(result);
}

function reset() {
  container.innerHTML = '';
  playerArr = [];
  computerArr = [];
  //possibly set time out to fix reload bug
  createGameBoard();
}
  //Enable user interaction with the board, and register any clicks on the Simon divs

  //While the player has not entered an incorrect response, and the number of clicks
  //is less than the length of the sequence, wait for player input

//continue adding round until player fails

  //alert GAME OVER
  //add restart button


});
